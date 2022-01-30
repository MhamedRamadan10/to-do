import React, {Component} from 'react'
import Adaptor from './../../core/Adaptor'
import { Links } from './../../constants'

const API = Links.user;

export default class AuthServices extends Component {

  static login(data, callBack) {
    Adaptor.post(API.login, data).then(callBack)
  }

  static register(data, callBack) {
    Adaptor.post(API.register, data).then(callBack)
  }

}
