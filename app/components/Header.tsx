'use client';

import React from 'react';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { Metalurgice, Constructii, Electrice, Sanitare, Unelte, Gradina } from '../../public/data/DummyData';
import { DropdownComponent } from './DropdownComponent';
// import { SearchComponent } from './SearchComponent';

const Header = () => {
  return (
    <Navbar shouldHideOnScroll className="p-2" isBordered>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <DropdownComponent array={Gradina} name="Gradina" />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Unelte} name="Unelte" />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Sanitare} name="Sanitare" />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Electrice} name="Electrice" />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Constructii} name="Constructii" />
        </NavbarItem>
        <NavbarItem>
          <DropdownComponent array={Metalurgice} name="Metalurgice" />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <SearchComponent />
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default Header;
