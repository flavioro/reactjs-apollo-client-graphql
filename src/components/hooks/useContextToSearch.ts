import React, { useContext } from 'react'

import { QueryContext } from './contextSearch'

function useContextToSearch() {
  const _useContext = useContext(QueryContext)

  if (!_useContext) {
    throw new Error('useContextToSearch must be used inside QueryContext.Provider')
  }

  return _useContext
}

export default useContextToSearch
