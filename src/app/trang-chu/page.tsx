"use client";
import React from "react";
import InputField from "@/components/common/InputField";
import Title from "@/components/common/Title";
import Wrapper from "@/components/common/Column";
import { PlaceholderEnum } from "@/enums/placeholder.enum";
import { useFormik } from "formik";
import { TSignIn } from "@/types/auth.type";
import { InputNameEnum } from "@/enums/input-name.enum";
import Button from "@/components/common/Button";
import { ButtonTitleEnum } from "@/enums/button-title.enum";
import SignInValidateSchema from "@/lib/schemas/SignInValidateSchema";
import ErrorMessage from "@/components/common/ErrorMessage";
import Logo from "@/components/common/Logo";

const HomePage = () => {


  return (
    <div
      className={`grid grid-cols-2 h-5/6 w-5/6 rounded-3xl divide-x-2 bg-stone-100`}
    >
    
    </div>
  );
};

export default HomePage;
