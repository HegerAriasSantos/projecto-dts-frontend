import { usePaginatedBlog } from "@/hooks";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  const { blogs } = usePaginatedBlog();
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay informed and inspired with our latest blog posts! Our team of passionate writers and eco-enthusiasts regularly shares valuable insights, tips, and stories related to the environment, sustainability, and community-driven initiatives. Explore the diverse topics covered in our blog and join the conversation."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogs?.slice(0, 3).map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
