"use client";
import { TinyEditor } from "@/components";
import { Categories, requiredMessage } from "@/constants";
import { ResourceService } from "@/services";
import { ResourcesRequest } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as yup from "yup";

const CreateResourcePage = () => {
  const [editorText, setEditorText] = useState<string>("");
  const [fileImagen, setFileImagen] = useState<File>();
  const [category, setCategory] = useState<number>(1);
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResourcesRequest>({
    resolver: yupResolver(
      yup.object().shape({
        Detail: yup.string().trim(),
        Name: yup.string().required(requiredMessage).trim(),
      })
    ),
    defaultValues: {
      Detail: "",
      Categories: [{ categoryId: 0, postId: 0 }],
      Name: "",
      Id: 0,
    },
  });

  const { push } = useRouter();
  const MySwal = withReactContent(Swal);

  const onSubmit = async (resource: ResourcesRequest) => {
    resource.Categories[0].categoryId = category;
    const formData = new FormData();
    formData.append("Id", resource.Id.toString());
    formData.append("Name", resource.Name);
    formData.append("Detail", editorText);
    formData.append("WebSite", resource.WebSite);
    formData.append("LocationUrl", resource.LocationUrl);
    formData.append("ImageUrl", fileImagen.name);
    formData.append("FileImagen", fileImagen);
    formData.append("Categories", JSON.stringify(resource.Categories));

    try {
      await ResourceService.createResource(formData);
      MySwal.fire({
        title: "¡Se ha creado correctamente!",
        icon: "success",
      }).then(() => push("/resource"));
    } catch (error) {
      MySwal.fire({
        title: "Error, try later please",
        icon: "error",
      });
    }
  };
  return (
    <section className="relative z-10 overflow-hidden pb-16  md:pb-20 lg:pb-28 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto rounded-md bg-primary bg-opacity-5 px-6 py-10 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Crea tu propio recurso
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
                    Título
                  </label>
                  <input
                    type="text"
                    placeholder="Título"
                    id="title"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{
                      borderColor: "Name" in errors ? "red" : "",
                    }}
                    {...register("Name")}
                  />
                  {"Name" in errors && (
                    <p style={{ color: "red" }}>{errors.Name?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Sitio web
                  </label>
                  <input
                    type="text"
                    placeholder="Sitio web"
                    id="title"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{
                      borderColor: "WebSite" in errors ? "red" : "",
                    }}
                    {...register("WebSite")}
                  />
                  {"WebSite" in errors && (
                    <p style={{ color: "red" }}>{errors.WebSite?.message} </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="title"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Url de la ubicación
                  </label>
                  <input
                    type="text"
                    placeholder="Url de la ubicación"
                    id="title"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{
                      borderColor: "LocationUrl" in errors ? "red" : "",
                    }}
                    {...register("LocationUrl")}
                  />
                  {"LocationUrl" in errors && (
                    <p style={{ color: "red" }}>
                      {errors.LocationUrl?.message}{" "}
                    </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="Cover"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Imagen de portada
                  </label>
                  <input
                    type="file"
                    placeholder="Portada"
                    id="Cover"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    onChange={(e) => setFileImagen(e.target.files[0])}
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="category"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-black placeholder-black opacity-50 shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-primaryDark dark:text-white dark:placeholder-white dark:shadow-signUp"
                    style={{
                      borderColor: "Category" in errors ? "red" : "",
                    }}
                    onChange={(e) => setCategory(+e.target.value)}
                    value={category}
                  >
                    {Object.entries(Categories).map((e) => (
                      <option value={e[0]}>{e[1]}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    Detalle
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
                    Crear recurso
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
  );
};

export default CreateResourcePage;
