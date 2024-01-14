import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import React from "react";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <React.Suspense>
          <NavbarItem>
            <div></div>
          </NavbarItem>
        </React.Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
