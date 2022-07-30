import {inject} from 'inversify'
import {controller, httpGet, interfaces, TYPE} from 'inversify-koa-utils'
import { IRouterContext } from 'koa-router'
import TAGS from '../constant/tags'
import { IIndex } from '../interface/IIndex'
import { provideThrowable } from '../ioc'

@provideThrowable(TYPE.Controller,'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller{
    private _indexService:IIndex
    constructor(@inject(TAGS.IndexService) indexService:IIndex){
        this._indexService = indexService
    }

    @httpGet('/')
    private async index(ctx:IRouterContext,next:Promise<any>):Promise<any>{
        const data = this._indexService.getUser(1)
        ctx.body = {
            data
        }
    }
}