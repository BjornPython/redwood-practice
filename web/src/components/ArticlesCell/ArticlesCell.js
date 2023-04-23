import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map((item) => {
        return (
          <li key={item.id}>
            <Link to={routes.article({ id: item.id })}>
              <h2>{item.title}</h2>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
