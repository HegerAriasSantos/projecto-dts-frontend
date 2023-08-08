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
          title="Nuestros últimos blogs"
          paragraph="Mantente informado e inspirado con las últimas entradas de nuestro blog. Nuestro equipo de escritores apasionados y entusiastas de la ecología comparte periódicamente valiosas ideas, consejos e historias relacionadas con el medio ambiente, la sostenibilidad y las iniciativas impulsadas por la comunidad. Explora los diversos temas tratados en nuestro blog y únete a la conversación."
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
