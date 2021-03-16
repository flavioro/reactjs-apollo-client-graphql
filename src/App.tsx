import React from 'react'
import { ApolloProvider } from '@apollo/client'

import ClientApollo from './services/apiServer'
import GlobalStyles from './styles/global'
import { QueryProvider } from './components/hooks/contextSearch'
import RoutesPages from './RoutesPages'

function App() {
  return (
    <ApolloProvider client={ClientApollo}>
        <GlobalStyles />
        <QueryProvider>
          <RoutesPages />
        </QueryProvider>
    </ApolloProvider>
  )
}

export default App
