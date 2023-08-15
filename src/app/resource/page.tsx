"use client";
import { SingleResource } from "@/components";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { usePaginatedResources } from "@/hooks";

const Resource = () => {
  const {
    allResources,
    beforePage,
    resources,
    currentPage,
    nextPage,
    goToPage,
  } = usePaginatedResources();

  return (
    <>
      <Breadcrumb
        pageName="Recursos"
        description="Gracias por visitar nuestra página de recursos, y esperamos que disfrute de la experiencia inmersiva que hemos creado para usted. ¡Feliz lectura!"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {resources?.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleResource blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                    onClick={() => {
                      if (currentPage !== 0) beforePage();
                    }}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition ${
                      currentPage !== 0 &&
                      "hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    } `}
                  >
                    Anterior
                  </button>
                </li>
                {allResources?.pages ? (
                  new Array(allResources?.pages).fill("").map((_, index) => {
                    return (
                      <li key={index} className="mx-1">
                        <div
                          className={`flex h-9 min-w-[36px] cursor-pointer items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition ${
                            index !== currentPage &&
                            "hover:bg-primary hover:bg-opacity-100 hover:text-white"
                          }`}
                          onClick={() => goToPage(index)}
                        >
                          {index + 1}
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      1
                    </a>
                  </li>
                )}

                <li className="mx-1">
                  <button
                    onClick={() => {
                      if (currentPage < allResources?.pages - 1) nextPage();
                    }}
                    className={`flex h-9 min-w-[36px] cursor-pointer items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition ${
                      currentPage < allResources?.pages - 1 &&
                      "hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    } `}
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resource;
