import { IIndex } from "../interface/IIndex";
import { Model } from "../models";
import {provide} from 'inversify-binding-decorators'
import TAGS from "../constant/tags";

@provide(TAGS.IndexService)
export class indexService implements IIndex{
    private userStorage:Model.User[] = [
        {
            name:'张三',
            age:23
        },
        {
            name:'李四',
            age:26
        },
    ]
    getUser(id: number): Model.User {
        let result:Model.User
        result = this.userStorage[id]
        return result
    }
}