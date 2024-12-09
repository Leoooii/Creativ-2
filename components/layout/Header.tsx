"use client";

import React, { useState } from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

import {
  Constructii,
  Electrice,
  Gradina,
  Metalurgice,
  Sanitare,
  Unelte
} from "../../public/data/DummyData";

import { DropdownComponent } from "@/components/Dropdown";

const Header = ({ section }: { section: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="p-1 bg-gray-800  "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:flex flex gap-4 w-full mx-auto bg-gray-800 p-4 overflow-x-auto max-w-none">
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
      {/*<NavbarMenu className={'z-20'}>*/}
      {/*  <div>hei</div>*/}
      {/*</NavbarMenu>*/}
    </Navbar>
  );
};

export default Header;
