import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import useSearch from './hooks/useContextToSearch'
import SearchInput from './SearchInput'

interface Props {
  children: JSX.Element
}

function HeaderLayout({ children }: Props) {
  return (
    <HeaderLayout.Container>
      <Header />
      {children}
    </HeaderLayout.Container>
  )
}

function Header() {
  const history = useHistory()
  const { query, setQuery } = useSearch()

  return (
    <Header.Container>
      <Header.Logo to="/">MySocial</Header.Logo>
      <SearchInput
        initialValue={query}
        onSubmit={query => {
          if (history.location.pathname !== '/') {
            history.push('/')
          }

          setQuery(query)
        }}
      />
    </Header.Container>
  )
}

Header.Container = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  padding: 1rem 0;
  margin-bottom: 1rem;
`

Header.Logo = styled(Link)`
  padding: 1rem 0;
  font-size: 28px;
`

HeaderLayout.Container = styled.div`
  margin: 0 10%;
  min-height: 100vh;
  margin-bottom: 30px;
`

export default HeaderLayout
