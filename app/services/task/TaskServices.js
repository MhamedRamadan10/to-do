import React, {Component} from 'react'
import Adaptor from './../../core/Adaptor'
import { Links } from './../../constants'

const API = Links.task;

export default class TaskServices extends Component {

  static get(query, callBack) {
    Adaptor.get(`${API.task}${query}`).then(callBack)
  }

  static add(data, callBack) {
    Adaptor.post(API.task, data).then(callBack)
  }

  static edit(id, data, callBack) {
    Adaptor.put(API.edit(id), data).then(callBack)
  }

  static delete(id, callBack) {
    Adaptor.delete(API.edit(id)).then(callBack)
  }

}
