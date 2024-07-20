import React from 'react'
import BlogLeft from '../../components/Blog/BlogLeft/BlogLeft'
import BlogRight from '../../components/Blog/BlogRight/BlogRight'

const Blog = () => {
  return (
    <div style={{marginTop:"40px"}} className='container Blog'>
      <BlogLeft/>
      <BlogRight/>
    </div>
  )
}

export default Blog
