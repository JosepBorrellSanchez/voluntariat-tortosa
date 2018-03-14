import axios from 'axios'

class Crud {
  constructor(endPoint) {
    this.endPoint = endPoint
  }
  getAll() {
    return axios.get(this.endPoint)
  }
  getAllFromUser(id) {
    return axios.get(this.endPoint + /user/ + id)
  }
  get(id) {
    return axios.get(this.endPoint + '/' + id)
  }
  update(object) {
    return axios.put(this.endPoint + '/' + object.id, object)
  }
  delete(object) {
    return axios.delete(this.endPoint + '/' + object.id)
  }
}

export default function createApi(endPoint) {
  return new Crud(endPoint);
}
