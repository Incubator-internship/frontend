/* eslint-disable react/button-has-type */
//TODO: компонент для тестирования состояния авторизации

'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login, logout, selectAuthState } from '@/app/config/store/authSlice'

export default function TestAuthComponent() {
  //управление состояния авторизации
  const dispatch = useDispatch()
  // получение состояния
  const isAuth = useSelector(selectAuthState)

  const handleLogin = () => {
    dispatch(login()) // авторизоваться
  }

  const handleLogout = () => {
    dispatch(logout()) // выйти
  }

  return (
    <div>
      <p>Авторизация isAuth: {isAuth ? 'True' : 'False'}</p>
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}
