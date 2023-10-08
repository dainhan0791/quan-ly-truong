"use client";
import React from "react";
import InputField from "@/components/common/InputField";
import Title from "@/components/common/Title";
import Column from "@/components/common/Column";
import { PlaceholderEnum } from "@/enums/placeholder.enum";
import { useFormik } from "formik";
import { TSignIn } from "@/types/auth.type";
import { InputNameEnum } from "@/enums/input-name.enum";
import Button from "@/components/common/Button";
import { ButtonTitleEnum } from "@/enums/button-title.enum";
import SignInValidateSchema from "@/lib/schemas/SignInValidateSchema";
import ErrorMessage from "@/components/common/ErrorMessage";
import Logo from "@/components/common/Logo";

const SignInPage = () => {
  const initialValues: TSignIn = {
    username: "",
    password: "",
  };

  const onSubmit = (values: TSignIn) => {
    console.log(values);
    alert("Submit");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInValidateSchema,
    onSubmit: onSubmit,
  });

  return (
    <div
      className={`grid grid-cols-2 h-5/6 w-5/6 rounded-3xl divide-x-2 bg-stone-100`}
    >
      <Column>
        <form onSubmit={formik.handleSubmit} className="w-full px-20">
          <Column className="gap-6">
            <Title title="Đăng Nhập" />

            <Column className="gap-3 ">
              <InputField
                type={"text"}
                id={InputNameEnum.USERNAME}
                name={InputNameEnum.USERNAME}
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder={PlaceholderEnum.USERNAME}
                required={true}
              />

              {formik.errors.username && formik.touched.username ? (
                <ErrorMessage message={formik.errors.username} />
              ) : null}
            </Column>

            <Column className="gap-3 ">
              <InputField
                type={"password"}
                id={InputNameEnum.PASSWORD}
                name={InputNameEnum.PASSWORD}
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder={PlaceholderEnum.PASSWORD}
                required={true}
              />

              {formik.errors.password && formik.touched.password ? (
                <ErrorMessage message={formik.errors.password} />
              ) : null}
            </Column>

            <Button type="submit" title={ButtonTitleEnum.SIGN_IN} />
          </Column>
        </form>
      </Column>

      <Column>
        <Logo />
      </Column>
    </div>
  );
};

export default SignInPage;
