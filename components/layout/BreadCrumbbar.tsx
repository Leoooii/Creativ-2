import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'

import UrLparams from '@/components/layout/URLparams'

export default function BreadCrumbBar() {
  return (
    <Breadcrumbs
      classNames={{
        list: 'bg-gradient-to-l from-red-700 to-blue-700 shadow-small ',
      }}
      color={'foreground'}
      itemClasses={{
        item: 'text-white/80 data-[current=true]:text-white',
        separator: 'text-white/40',
      }}
      size={'lg'}
      underline="hover"
      variant="bordered"
    >
      <BreadcrumbItem className={'text-white '} href={'/'}>
        Acasa
      </BreadcrumbItem>
      <BreadcrumbItem href={'/catalog'}>Catalog</BreadcrumbItem>
      <BreadcrumbItem href={'/catalog'}>{<UrLparams />}</BreadcrumbItem>
    </Breadcrumbs>
  )
}
