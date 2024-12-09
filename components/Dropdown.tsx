import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from '@nextui-org/link'

interface DropdownItem {
  label: string
}

interface DropdownComponentProps {
  array: DropdownItem[] // Array de obiecte de tip DropdownItem
  name: string
  section: string
}

export const DropdownComponent = ({
  array = [],
  name,
  section
}: DropdownComponentProps) => {
  return (
    <Dropdown backdrop="transparent">
      <DropdownTrigger>
        <Button
          className={'rounded-sm bg-transparent text-gray-100 my-2'}
          color={'primary'}
          variant="faded "
        >
          <div className={'flex gap-2 '}>
            <h1 className={'font-bold'}>{name.toUpperCase()}</h1>

            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        className="rounded-sm"
        color="secondary"
        items={array}
        variant="faded"
      >
        {item => (
          <DropdownItem
            key={item.label}
            className={'default bg-white font-bold'}
            color={'primary'}
            // href={`/${section}?category=${item.label}`}
          >
            <Link href={`/${section}?category=${item.label}`}>
              {item.label}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
