import { Suspense } from 'react'

import Materials from '@/components/Materials'
import { CardsSkeleton } from '@/components/ui/skeletons'

export default function Page() {
  return (
    <div>
      {/*<UrLparams />*/}
      <Suspense fallback={<CardsSkeleton />}>
        <Materials />
      </Suspense>
    </div>
  )
}
