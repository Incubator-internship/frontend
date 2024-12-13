/* eslint-disable react/button-has-type */
//TODO: компонент для тестирования состояния авторизации

'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginStore, logoutStore, selectAuthState } from '@/app/config/store/authSlice'

export default function TestAuthComponent() {
  //управление состояния авторизации
  const dispatch = useDispatch()
  // получение состояния
  const isAuth = useSelector(selectAuthState)

  const handleLogin = () => {
    dispatch(loginStore()) // авторизоваться
  }

  const handleLogout = () => {
    dispatch(logoutStore()) // выйти
  }

  return (
    <div>
      <p>Авторизация isAuth: {isAuth ? 'True' : 'False'}</p>
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}
