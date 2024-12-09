"use client";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/providers/auth-store-provider";

export default function AuthButton() {
  const user = useAuthStore(state => state.user);
  const login = useAuthStore(state => state.login);
  const logout = useAuthStore(state => state.logout);
  const isAdmin = useAuthStore(state => state.isAdmin);
  const notify = () => toast("Autentificare reusita");
  const router = useRouter();

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        {/*<Button>{user ? user.displayName : 'User'}</Button>*/}

        <UserIcon className="w-8 hover:cursor-pointer" color={"white"} />
      </PopoverTrigger>
      <PopoverContent className={"py-2"}>
        {user ? (
          <Button
            color={"danger"}
            onClick={() => {
              logout().then(() => {
                router.push("/");
              });
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            color={"primary"}
            onClick={() => {
              login().then(() => {
                toast.success("Autentificare reusita!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce
                });
              });
            }}
          >
            Login
          </Button>
        )}
        <ToastContainer
          closeOnClick
          draggable
          pauseOnFocusLoss
          pauseOnHover
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          position="top-right"
          rtl={false}
          theme="dark"
        />
      </PopoverContent>
    </Popover>
  );
}
