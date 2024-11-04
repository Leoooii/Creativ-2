import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

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
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="bordered">{name}</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dynamic Actions"
        className="rounded-lg"
        color="primary"
        items={array}
        variant="faded"
      >
        {item => (
          <DropdownItem
            key={item.label}
            className={'default bg-white'}
            color={'primary'}
            href={`/${section}?category=${item.label}`}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
