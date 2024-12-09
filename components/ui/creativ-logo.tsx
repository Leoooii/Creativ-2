import Image from "next/image";

export default function CreativLogo() {
  return (
    <div className={` flex flex-row items-center leading-none text-white`}>
      {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />*/}
      <Image
        alt="creativ-logo"
        height={200}
        src={"/images/logo.png"}
        width={200}
      />
    </div>
  );
}
