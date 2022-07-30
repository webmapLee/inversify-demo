import {Model} from '../models'
export interface IIndex{
    getUser(id:number):Model.User
}