import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell/ArticleCell'
const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>{id}</h1>
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
