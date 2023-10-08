import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/images.constant";

const Logo = () => {
  return (
    <div className="p-2 rounded-3xl">
        <Image src={IMAGES.Logo} alt={"My-Logo"} width={240} height={240} />
    </div>
  );
};

export default Logo;
