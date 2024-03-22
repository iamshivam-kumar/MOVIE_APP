import React from 'react';

const blogs = [
  {
    "_id": 1,
    "thumbnail": "../assets/blogs/blog-1.jpeg",
    "category": "5D Theatre",
    "title": "Dolorum optio tempore voluptas dignissimos",
    "author": {
      "name": "Maria Doe",
      "image": "../assets/blogs/blog-author-1.jpg"
    },
    "date": "Jan 1, 2023"
  },
  {
    "_id": 2,
    "thumbnail": "../assets/blogs/blog-2.jpeg",
    "category": "Disney",
    "title": "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    "author": {
      "name": "Allisa Mayer",
      "image": "../assets/blogs/blog-author-2.jpg"
    },
    "date": "May 10, 2023"
  },
  {
    "_id": 3,
    "thumbnail": "../assets/blogs/blog-3.jpeg",
    "category": "Theatre",
    "title": "Nisi magni odit consequatur autem nulla dolorem",
    "author": {
      "name": "Mark Dower",
      "image": "../assets/blogs/blog-author-3.jpg"
    },
    "date": "June 23, 2023"
  },
  {
    "_id": 4,
    "thumbnail": "../assets/blogs/blog-4.jpeg",
    "category": "Theatre Cater",
    "title": "Non rem rerum nam cum quo minus olor distincti",
    "author": {
      "name": "Lisa Neymar",
      "image": "../assets/blogs/blog-author-4.jpg"
    },
    "date": "July 23, 2023"
  }
];

const Blog = ({ blog }) => (
  <div className="card mb-3">
    <img src={blog.thumbnail} className="card-img-top" alt="Blog Thumbnail" />
    <div className="card-body">
      <h5 className="card-title">{blog.title}</h5>
      <p className="card-text">{blog.category}</p>
      <p className="card-text">{blog.date}</p>
      <p className="card-text">{blog.author.name}</p>
      <img src={blog.author.image} alt="Author" className="rounded-circle" />
    </div>
  </div>
);

const BlogPage = () => (
  <div className="container mt-5">
    <h1 className="mb-4"><span style={{color:'white'}}>Recent Blogs</span></h1>
    <div className="row">
      {blogs.map((blog) => (
        <div className="col-md-6" key={blog._id}>
          <Blog blog={blog} />
        </div>
      ))}
    </div>
  </div>
);

export default BlogPage;
