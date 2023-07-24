"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import { emailMessage, requiredMessage } from "@/constants";
import { UserSignupRequest } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/features/tokenSlice";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { UserService } from "../../services/userService";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignupRequest>({
    resolver: yupResolver(
      yup.object().shape({
        firstName: yup.string().required(requiredMessage).trim(),
        lastName: yup.string().required(requiredMessage).trim(),
        email: yup
          .string()
          .required(requiredMessage)
          .email(emailMessage)
          .trim(),
        userName: yup.string().required(requiredMessage).trim(),
        phone: yup.string().required(requiredMessage).trim(),
        password: yup.string().required(requiredMessage).trim(),
        confirmPassword: yup
          .string()
          .required(requiredMessage)
          .oneOf([yup.ref("password"), null], "Passwords must match"),
      })
    ),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const MySwal = withReactContent(Swal);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = async (user: UserSignupRequest) => {
    const result = await UserService.signup(user);
    if (!result.hasError) {
      const singInResult = await UserService.signin(user);
      MySwal.fire({
        title: "Thank you for signing up!",
        icon: "success",
      }).then(() => {
        dispatch(setToken(singInResult.jwToken));
        push("/");
      });
    } else {
      setPasswordErrors(
        JSON.parse(result.error).map(
          (error: { Code: string; Description: string }) => error.Description
        )
      );
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Create account
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                It’s totally free and super easy
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                  <label
                    htmlFor="firstName"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "firstName" in errors ? "red" : "" }}
                    {...register("firstName")}
                  />
                  {"firstName" in errors && (
                    <p style={{ color: "red" }}>{errors.firstName?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="lastName"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "lastName" in errors ? "red" : "" }}
                    {...register("lastName")}
                  />
                  {"lastName" in errors && (
                    <p style={{ color: "red" }}>{errors.lastName?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "email" in errors ? "red" : "" }}
                    {...register("email")}
                  />
                  {"email" in errors && (
                    <p style={{ color: "red" }}>{errors.email?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="userName"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "userName" in errors ? "red" : "" }}
                    {...register("userName")}
                  />
                  {"userName" in errors && (
                    <p style={{ color: "red" }}>{errors.userName?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "phone" in errors ? "red" : "" }}
                    {...register("phone")}
                  />
                  {"phone" in errors && (
                    <p style={{ color: "red" }}>{errors.phone?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{ borderColor: "password" in errors ? "red" : "" }}
                    {...register("password")}
                  />
                  {"password" in errors && (
                    <p style={{ color: "red" }}>{errors.password?.message} </p>
                  )}
                  {!!passwordErrors.length && (
                    <ul>
                      {passwordErrors.map((message) => (
                        <li style={{ color: "red" }}>{message}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Rewritte password"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{
                      borderColor: "confirmPassword" in errors ? "red" : "",
                    }}
                    {...register("confirmPassword")}
                  />
                  {"confirmPassword" in errors && (
                    <p style={{ color: "red" }}>
                      {errors.confirmPassword?.message}{" "}
                    </p>
                  )}
                </div>
                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center"></div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="text-center text-base font-medium text-body-color">
                Already using Startup?{" "}
                <Link href="/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
