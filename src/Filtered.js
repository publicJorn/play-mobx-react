import React from 'react'
import { observer } from 'mobx-react'

import { STATES } from './requestModel'

const Filtered = ({ store }) => {
  return (
    <ul>
      {store &&
        store.requestsWithState(STATES.INPROGRESS).map(({ name, state }) => (
          <li key={name}>
            {name} - {state}
          </li>
        ))}
    </ul>
  )
}

export default observer(Filtered)
