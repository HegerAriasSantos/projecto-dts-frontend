import { blogResponse } from "@/types";
import Link from "next/link";
import { config } from "@/config";

const SingleBlog = ({ blog }: { blog: blogResponse }) => {
  const { id, title, detail, date, user, imageUrl } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/" className="relative block h-[220px] w-full">
          <img src={`${config.rootBackend}${imageUrl}`} alt="image" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 max-h-[100px] overflow-hidden border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            <div
              dangerouslySetInnerHTML={{ __html: detail?.split("/>")[0] }}
            ></div>
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <img
                    src={`${config.rootBackend}${user?.photo}`}
                    alt="author"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {`${user?.name} ${user?.lastName}`}
                </h4>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">
                {new Date(date).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
