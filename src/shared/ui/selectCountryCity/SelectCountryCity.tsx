'use client'
import React, { useEffect, useState } from 'react'
import { Control, Controller, FieldValues, Path, useWatch } from 'react-hook-form'

import { useTranslations } from 'next-intl'

import s from './selectCountryCity.module.scss'

interface Country {
  capital: string
  iso2: string
  name: string
}

interface SelectCountryCityProps<T extends FieldValues> {
  cityLabel?: string
  cityName?: Path<T>
  control: Control<T>
  countryLabel?: string
  countryName?: Path<T>
}

const SelectCountryCity = <T extends FieldValues>({
  cityName = 'city' as Path<T>,
  control,
  countryName = 'country' as Path<T>,
}: SelectCountryCityProps<T>) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [loadingCities, setLoadingCities] = useState(false)

  const t = useTranslations('SelectCountryCity')

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          setCountries(data.data)
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  const selectedCountry = useWatch({ control, name: countryName })

  useEffect(() => {
    if (selectedCountry) {
      setLoadingCities(true)
      fetch('https://countriesnow.space/api/v0.1/countries/cities', {
        body: JSON.stringify({ country: selectedCountry }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            setCities(data.data)
          } else {
            setCities([])
          }
        })
        .catch(error => {
          console.error('Error fetching cities:', error)
          setCities([])
        })
        .finally(() => {
          setLoadingCities(false)
        })
    } else {
      setCities([])
    }
  }, [selectedCountry])

  return (
    <div className={s.selectForm}>
      <div className={s.selectLabel}>
        <label>{t('Select your country')}</label>
        <Controller
          control={control}
          name={countryName}
          render={({ field }) => (
            <select className={s.selectInput} {...field}>
              <option value={''}>-- Country --</option>
              {countries.map(country => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div className={s.selectLabel}>
        <label>{t('Select your city')}</label>
        <Controller
          control={control}
          name={cityName}
          render={({ field }) => (
            <select
              className={s.selectInput}
              {...field}
              disabled={!selectedCountry || loadingCities}
            >
              <option value={''}>-- City --</option>
              {cities.map((city, index) => (
                <option key={'city' + index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          )}
        />
      </div>
    </div>
  )
}

export default SelectCountryCity
