'use client'

import React from 'react'
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'

import {
  Constructii,
  Electrice,
  Gradina,
  Metalurgice,
  Sanitare,
  Unelte
} from '../../public/data/DummyData'

import { DropdownComponent } from '@/components/Dropdown'
// import { SearchComponent } from './SearchComponent';

const Header = ({ section }: { section: string }) => {
  return (
    <Navbar isBordered shouldHideOnScroll className="p-1 w-full bg-gray-800">
      <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
        <NavbarItem>
          <DropdownComponent array={Gradina} name="Gradina" section={section} />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Unelte} name="Unelte" section={section} />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            array={Sanitare}
            name="Sanitare"
            section={section}
          />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            array={Electrice}
            name="Electrice"
            section={section}
          />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            array={Constructii}
            name="Constructii"
            section={section}
          />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent
            array={Metalurgice}
            name="Metalurgice"
            section={section}
          />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <SearchComponent />
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  )
}

export default Header
