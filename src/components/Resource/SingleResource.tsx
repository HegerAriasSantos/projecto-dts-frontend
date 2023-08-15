import { ResourcesResponse } from "@/types";
import Link from "next/link";
import { config } from "@/config";

const SingleResource = ({ blog }: { blog: ResourcesResponse }) => {
  const { id, detail, imageUrl, categories, locationUrl, name, webSite } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`resource/${id}`}
          className="relative block h-[220px] w-full"
        >
          <span className="absolute right-2 top-2 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {categories[0].name}
          </span>
          <img
            className="h-full w-full"
            src={`${config.rootBackend}${imageUrl}`}
            alt="image"
          />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`resource/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {name}
            </Link>
          </h3>
          <p className="mb-6 max-h-[100px] overflow-hidden border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            <div
              dangerouslySetInnerHTML={{ __html: detail?.split("/>")[0] }}
            ></div>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleResource;
