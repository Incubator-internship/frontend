import React from 'react'

import s from './userProfile.module.scss'

export default function UserProfile() {
  return (
    <section className={s.userProfile}>
      <div className={s.info}>
        <img alt={'Profile avatar'} className={s.ava} src={'./'} />
        <div className={s.bio}>
          <header>
            <h2 className={s.username}>URLProfile</h2>
          </header>
          <div className={s.stats}>
            <div>
              <span>2218</span>
              <a href={'#'}>Following</a>
            </div>
            <div>
              <span>2358</span>
              <a href={'#'}>Followers</a>
            </div>
            <div>
              <span>2764</span>
              <a href={'#'}>Publications</a>
            </div>
          </div>
          <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={s.gallery}>
        {Array.from({ length: 12 }).map((_, index) => (
          <img
            alt={`Gallery item ${index + 1}`}
            className={s.galleryItem}
            key={index}
            src={`https://via.placeholder.com/234x228?text=Image+${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
