"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const page = useSearchParams();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`;
    console.log(page);
    // You can now use the current URL
    // ...
  }, [pathname, page]);

  return "...";
}
