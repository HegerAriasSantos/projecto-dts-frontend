"use client";
import ErrorPage from "@/app/[...not_found]/page";
import { Loading } from "@/components";
import "./style.css";
import { useEffect, useState } from "react";
import { ResourcesResponse } from "@/types";
import { ResourceService } from "@/services/resourceService";

const ResourcePage = ({ params }: { params: { resourcesId: string } }) => {
  const [resource, setResource] = useState<ResourcesResponse>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getResource();
  }, [params.resourcesId]);

  const getResource = async () => {
    try {
      const result = await ResourceService.getResource(params.resourcesId[0]);
      setResource(result);
    } catch (error) {
      setError(error);
    }
  };

  if (!resource && !error)
    return (
      <div className="h-screen  bg-black opacity-40">
        <Loading></Loading>
      </div>
    );
  if (error) return <ErrorPage />;
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {resource?.name}
                </h2>
                <a
                  href="#0"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                >
                  {resource.categories[0].name}
                </a>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10"></div>
                {resource.webSite && (
                  <p className="mb-10  text-base font-medium leading-relaxed text-body-color  sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Sitio web:
                    <a
                      className="text-body-color dark:text-white"
                      href={resource.webSite}
                      target="__blank"
                    >
                      {" " + resource.webSite}
                    </a>
                  </p>
                )}

                {resource.locationUrl && (
                  <p className="mb-10  text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Ubicación del recurso:
                    <a
                      className="text-body-color dark:text-white"
                      href={resource.locationUrl}
                      target="__blank"
                    >
                      {" " + resource.locationUrl}
                    </a>
                  </p>
                )}
                <div
                  className="htmlContainer"
                  dangerouslySetInnerHTML={{ __html: resource.detail }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcePage;
