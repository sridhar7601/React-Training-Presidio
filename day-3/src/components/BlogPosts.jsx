import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogCard = ({ image, title, date, author, category }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>{author}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-sm text-green-600 font-medium">{category}</span>
        <a href="#" className="text-sm text-green-600 font-medium hover:underline">Read More</a>
      </div>
    </div>
  </div>
);

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: "https://i.pinimg.com/564x/c3/86/12/c38612acd456b2113d2bdb12e77865b0.jpg",
      title: "Healthy Vegetables Salad to try",
      date: "January 27, 2021",
      author: "Admin",
      category: "Vegetables"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/564x/c3/86/12/c38612acd456b2113d2bdb12e77865b0.jpg",
      title: "Healthy Vegetables Salad to try",
      date: "January 27, 2021",
      author: "Admin",
      category: "Vegetables"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/564x/c3/86/12/c38612acd456b2113d2bdb12e77865b0.jpg",
      title: "Healthy Vegetables Salad to try",
      date: "January 27, 2021",
      author: "Admin",
      category: "Vegetables"
    }
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Foood Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;