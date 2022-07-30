import 'reflect-metadata'
import './ioc/loader'
import { InversifyKoaServer } from 'inversify-koa-utils'
import { Container } from 'inversify'
import { buildProviderModule } from 'inversify-binding-decorators'

const container = new Container()
container.load(buildProviderModule())
let server = new InversifyKoaServer(container)
server.setErrorConfig((app)=>{
    //错误中间件
}).setConfig((app)=>{
    //设置其它中间件
})
let app = server.build()
app.listen(3000,()=>{
    console.log('inversify 启动成功')
})