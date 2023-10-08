"use client"
import { PageEnum } from "@/enums/page.enum";
import { useRouter } from "next/navigation";
import React from "react";

const AuthCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isAuthenticated = false;

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push(PageEnum.HOME);
    } else {
      router.push(PageEnum.SIGN_IN);
    }
  }, [router, isAuthenticated]);

  return <>{children}</>;
};

export default AuthCheckProvider;
