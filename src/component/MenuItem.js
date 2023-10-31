import React from 'react'
import Link from 'next/link'

export default function MenuItem({item,address,Icon}) {
  return (
    <div>
    <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4"/>
        <p className="hidden sm:inline my-2 text-sm">{item}</p>
    </Link>
    <Link>
    </Link>
    </div>
  )
}
