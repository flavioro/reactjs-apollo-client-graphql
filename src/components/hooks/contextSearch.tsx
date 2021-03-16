import React, { createContext, useState } from 'react'

interface IQueryContext {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const QueryContext = createContext<IQueryContext | null>(null)

function QueryProvider({ children }: { children: JSX.Element }) {
  const [query, setQuery] = useState('')

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  )
}

export { QueryContext, QueryProvider }
