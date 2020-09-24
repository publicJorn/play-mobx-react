import React from 'react'
import { observer } from 'mobx-react'

const All = ({ store }) => {
  return (
    <ul>
      {store &&
        store.requests.map(({ name, state }) => (
          <li key={name}>
            {name} - {state}
          </li>
        ))}
    </ul>
  )
}

export default observer(All)
