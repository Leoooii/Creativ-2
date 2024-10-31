import React, { Suspense } from 'react'

import Auth from './auth'

const Page = () => {
  return (
    <div className={'h-screen w-full bg-blue-950 p-5 flex flex-col gap-5'}>
      <div className="border-white b-2 rounded-md bg-white h-40 p-5">
        <Suspense fallback={null}>
          <Auth />
        </Suspense>
      </div>
      <div className="border-white b-2 rounded-md bg-white h-full p-5" />
    </div>
  )
}

export default Page
