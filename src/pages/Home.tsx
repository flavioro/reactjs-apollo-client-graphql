import React, { useContext } from 'react'
import { useHistory } from 'react-router'

import Card from '../components/Card'
import { useUsersListQuery } from '../generated/graphql'
import Spinner from '../styles/Spinner'
import NoData from '../components/NoInfo'
import CssGrid from '../components/CssGrid'

import { QueryContext } from '../components/hooks/contextSearch'

function Home() {
  const context = useContext(QueryContext)
  const { data, loading, error } = useUsersListQuery({
    variables: { search: context?.query },
  })
  const history = useHistory()

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  if (error || data?.list.length === 0) {
    return <NoData />
  }

  return (
    <CssGrid>
      {data?.list.map(user => (
        <Card
          key={user._id}
          data={user}
          onClick={id => history.push(`/${id}`)}
        />
      ))}
    </CssGrid>
  )
}

export default Home
