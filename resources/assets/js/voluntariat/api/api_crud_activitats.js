import axios from 'axios'

class Crud {
  constructor(endPoint) {
    this.endPoint = endPoint
  }
  getAll() {
    return axios.get(this.endPoint)
  }
  get(id) {
    return axios.get(this.endPoint + '/' + id)
  }
  update(activitat) {
    return axios.put(this.endPoint + '/' + activitat.id, activitat)
  }
  delete(activitat) {
    return axios.delete(this.endPoint + '/' + activitat.id, activitat)
  }
}

export default function createApi(endPoint) {
  return new Crud(endPoint);
}
