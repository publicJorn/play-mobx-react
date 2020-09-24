export const STATES = {
  CREATED: 'created',
  INPROGRESS: 'inprogress',
  DONE: 'done',
}

class RequestModel {
  name = ''
  state = ''

  constructor({ name, state = STATES.CREATED }) {
    this.name = name
    this.state = state
  }

  start = function () {
    this.state = STATES.INPROGRESS
  }

  end = function () {
    this.state = STATES.DONE
  }
}

export default RequestModel
