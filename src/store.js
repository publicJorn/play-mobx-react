import { makeAutoObservable } from 'mobx'
import { computedFn } from 'mobx-utils'

import RequestModel, { STATES } from './requestModel'

class RequestStore {
  constructor() {
    makeAutoObservable(this)
  }

  requests = [
    new RequestModel({ name: 'first', state: STATES.INPROGRESS }),
    new RequestModel({ name: 'second', state: STATES.CREATED }),
    new RequestModel({ name: 'third', state: STATES.DONE }),
    new RequestModel({ name: 'fourth', state: STATES.INPROGRESS }),
  ]

  addRequest = function (name) {
    this.requests.push(new RequestModel({ name }))
  }

  requestsWithState = computedFn(function requestsWithState(filterState) {
    return this.requests.filter(({ state }) => state === filterState)
  })
}

export default RequestStore
