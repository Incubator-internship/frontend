import React from 'react'

import s from './loader.module.scss'

export default function Loader() {
  return <div className={s.loader}></div>
}


export function AvatarLoader(){
  return <div className={s.loaderAvatar}></div>
}

export function MainLoader(){
  return <div className={s.mainLoader}></div>
}