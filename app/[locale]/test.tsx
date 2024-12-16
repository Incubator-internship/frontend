/* eslint-disable react/button-has-type */
//TODO: компонент для тестирования состояния авторизации
//TODO: app\[locale]\layout.tsx отключать здесь

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
      <span>Авторизация isAuth: {isAuth ? 'True' : 'False'}</span>
      <button onClick={handleLogin}>&nbsp;&nbsp;&nbsp;Войти&nbsp;&nbsp;&nbsp;</button>
      <button onClick={handleLogout}>&nbsp;&nbsp;&nbsp;Выйти&nbsp;&nbsp;&nbsp;</button>
    </div>
  )
}
