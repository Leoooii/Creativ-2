import Link from 'next/link'
import { PowerIcon } from '@heroicons/react/24/outline'

import AcmeLogo from '@/components/ui/creativ-logo'
import NavLinks from '@/components/layout/nav-links'
import NavAuth from '@/components/layout/nav-auth'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-4">
      <Link
        className="mb-2 flex h-60 items-end justify-start rounded-md bg-blue-900 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <NavAuth />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />

            <Link href={'/admin'}>
              <div className="hidden md:block">Admin</div>
            </Link>
          </button>
        </form>
      </div>
    </div>
  )
}
