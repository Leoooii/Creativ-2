import Link from 'next/link'
import React from 'react'
import { PhoneIcon } from '@heroicons/react/16/solid'

import CreativLogo from '@/components/ui/creativ-logo'
import NavLinks from '@/components/layout/nav-links'
import SearchBar from '@/components/forms/SearchBar'
import AuthButton from '@/components/layout/AuthButton'
import ShopingCart from '@/components/layout/ShopingCart'

export default function Navbar() {
  return (
    <div className="flex h-full md:flex-row flex-col justify-between  mx-auto px-20 py-3">
      <div className="flex gap-2 text-white align-middle items-center w-2/5">
        <PhoneIcon color={'white'} height={16} width={16} />
        <div className="border-l-2 border-white h-3" />
        <h1>0751-839-308</h1>
        <div className="border-l-2 border-white h-3" />
        <h1>contact@creativtub.ro</h1>
      </div>
      <Link className="my-2 w-1/5" href="/">
        <CreativLogo />
      </Link>
      <div className="flex items-center flex-col gap-3  md:flex-row md:justify-end w-2/5">
        <SearchBar />
        <NavLinks />
        <AuthButton />
        <ShopingCart />
      </div>
    </div>
  )
}
