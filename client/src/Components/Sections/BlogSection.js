import React from 'react';
import blogData from '../../Data/blogData';
import BlogPreview from '../Templates/BlogPreview';

function BlogSection() {
  const blogs = blogData.slice(0, 3).map((blog) => {
    return <BlogPreview key={blog.id} {...blog} />;
  });

  return (
    <section className='blog-section'>
      <h3 className='blog-section__h3'>Explore</h3>
      <h2 className='blog-section__h2'>Latest from our Blog</h2>
      <ul className='blog-list'>{blogs}</ul>
    </section>
  );
}

export default BlogSection;
