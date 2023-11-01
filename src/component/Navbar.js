import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-grey-400  bg-amber-100  lg:text-lg p-5'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="TopRated" param="fetchTopRated" />
    </div>
  )
}
