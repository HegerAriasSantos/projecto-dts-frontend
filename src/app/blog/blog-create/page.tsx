"use client";
import { TinyEditor } from "@/components";
import { requiredMessage } from "@/constants";
import { useAppSelector } from "@/redux";
import { blogService } from "@/services";
import { blogRequest } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";

const BlogDetailsPage = () => {
  const [editorText, setEditorText] = useState<string>("");
  const [fileImagen, setFileImagen] = useState<File>();
  const userInfo = useAppSelector((state) => state.tokenReducer);
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<blogRequest>({
    resolver: yupResolver(
      yup.object().shape({
        Detail: yup.string().trim(),
        Title: yup.string().required(requiredMessage).trim(),
      })
    ),
    defaultValues: {
      Detail: "",
      categories: [{ categoryId: 0, postId: 0 }],
      Date: new Date(),
      Title: "",
      UserId: userInfo.id,
      Id: 0,
    },
  });

  const { push } = useRouter();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (!userInfo)
      MySwal.fire({
        title: "Have to log in for create blog",
        text: "Please log in",
        icon: "info",
        confirmButtonText: "Go to login page",
      }).then(() => push("/signin"));
  }, [userInfo]);

  const onSubmit = async (blog: blogRequest) => {
    const formData = new FormData();
    formData.append("FileImagen", fileImagen);
    formData.append("Detail", editorText);
    formData.append("categories", JSON.stringify(blog.categories));
    formData.append("Date", JSON.stringify(blog.Date).replaceAll('"', ""));
    formData.append("Id", blog.Id.toString());
    formData.append("Title", blog.Title);
    formData.append("UserId", blog.UserId);
    formData.append("ImageUrl", fileImagen.name);

    try {
      await blogService.createBlog(formData);
      MySwal.fire({
        title: "Sign in succesfull!",
        icon: "success",
      }).then(() => push("/blog"));
    } catch (error) {
      MySwal.fire({
        title: "Error, try later please",
        icon: "error",
      });
    }
  };
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16  md:pb-20 lg:pb-28 ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your own blog
                </h3>

                <form
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-8">
                    <label
                      htmlFor="title"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="title"
                      id="title"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                      style={{
                        borderColor: "Detail" in errors ? "red" : "",
                      }}
                      {...register("Title")}
                    />
                    {"Title" in errors && (
                      <p style={{ color: "red" }}>{errors.Title?.message} </p>
                    )}
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="Cover"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Cover Image
                    </label>
                    <input
                      type="file"
                      placeholder="Cover"
                      id="Cover"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                      onChange={(e) => setFileImagen(e.target.files[0])}
                    />
                  </div>
                  <div className="mb-8">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Detail
                    </label>
                    <TinyEditor
                      value={editorText}
                      setValue={setEditorText}
                      theme={theme.theme}
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Create blog
                    </button>
                  </div>
                </form>
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
              <rect width="1440" height="969" fill="#13C296" />
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
                <stop stopColor="#13C296" />
                <stop offset="1" stopColor="#13C296" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" />
                <stop offset="1" stopColor="#13C296" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
