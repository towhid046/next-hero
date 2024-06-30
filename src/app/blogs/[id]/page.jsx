import blogs from "./../blogData";

const BlogDetails = ({ params }) => {
  const { title, description } = blogs.find(
    (blog) => blog.id === Number(params.id)
  );

  return (
    <section className="container mx-auto px-4">
      <h2 className="font-semibold text-3xl text-center py-5">Blog Details</h2>
      <div className="p-5 border space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
