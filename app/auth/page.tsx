import React, { Suspense } from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import Auth from "./auth";

import CartItems from "@/components/CartItems";

const Page = () => {
  return (
    <div className={" w-full  p-5 flex flex-col flex-1 gap-5"}>
      <div className="border-white b-2 rounded-md bg-white  p-5">
        <Suspense fallback={null}>
          <Auth />
        </Suspense>
      </div>
      <div className="border-white b-2 rounded-md bg-white p-5 ">
        <ShoppingCartIcon height={50} width={50} />
        <CartItems />
      </div>
    </div>
  );
};

export default Page;
