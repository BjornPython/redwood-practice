import { routes, Link } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <h1>blog layout</h1>
      {children}
      <Link to={routes.contact()}>Contact page</Link>
    </>
  )
}

export default BlogLayout
