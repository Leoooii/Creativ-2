import Link from 'next/link'

import CreativLogo from '@/components/ui/creativ-logo'
import NavLinks from '@/components/layout/nav-links'
import SearchBar from '@/components/forms/SearchBar'
import AuthButton from '@/components/layout/AuthButton'

export default function Navbar() {
  return (
    <div className="flex h-full md:flex-row flex-col justify-between w-3/4 mx-auto">
      <Link className="my-2 " href="/">
        <CreativLogo />
      </Link>
      <div className="flex items-center flex-col gap-2  md:flex-row ">
        <SearchBar />
        <NavLinks />
        <AuthButton />
        {/*<NavAuth />*/}

        {/*<form>*/}
        {/*  <button className="flex h-[48px] w-full  items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">*/}
        {/*    <PowerIcon className="w-6" />*/}

        {/*    <Link href={'/admin'}>*/}
        {/*      <div className="hidden md:block">Admin</div>*/}
        {/*    </Link>*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>
    </div>
  )
}
