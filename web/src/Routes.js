import { Router, Route } from '@redwoodjs/router'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <BlogLayout>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/home" page={HomePage} name="home" />
      </BlogLayout>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
