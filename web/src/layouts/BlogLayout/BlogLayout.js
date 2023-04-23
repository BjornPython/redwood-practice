import { routes, Link } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <h1>THIS IS A LAYOUT :D</h1>
      {children}
      <Link to={routes.contact()}>Contact page</Link>
    </>
  )
}

export default BlogLayout
