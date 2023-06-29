"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.scss";

export default function Page() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<{ userName: string; password: string }>({
    resolver: yupResolver(
      yup.object().shape({
        userName: yup.string().required("esta vaina es requerida coño").trim(),
        password: yup.string().required("esta otra cosa tambien").trim(),
      })
    ),
    defaultValues: { userName: "", password: "" },
  });

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="algo">username:</label>
      <input
        type="text"
        style={{ borderColor: "password" in errors ? "red" : "" }}
        {...register("userName")}
      />
      {"userName" in errors && (
        <p style={{ color: "red" }}>{errors.userName?.message} </p>
      )}

      <label>password:</label>
      <input type="password" {...register("password")} />
      {"password" in errors && (
        <p style={{ color: "red" }}>{errors.password?.message} </p>
      )}

      <button>submit</button>
    </form>
  );
}
