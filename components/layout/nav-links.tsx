"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenIcon } from "@heroicons/react/24/outline"; // Map of links to display in the side navigation.

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  // { name: 'Acasa', href: '/', icon: HomeIcon },
  // {
  //   name: 'Materiale',
  //   href: '/materials',
  //   icon: DocumentDuplicateIcon
  // },
  // { name: 'Catalog', href: '/catalog', icon: PowerIcon },
  // { name: 'Contul meu', href: '/auth', icon: UserIcon },
  // { name: 'Cos', href: '/admin', icon: ShoppingCartIcon },
  { name: "", href: "/catalog", icon: BookOpenIcon }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            // className={clsx(
            //   ' flex h-[48px] rounded-md items-center justify-center gap-2  bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            //   {
            //     'bg-sky-100 text-blue-600': pathname === link.href
            //   }
            // )}
            href={link.href}
          >
            <LinkIcon className="w-8" color={"white"} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
