# IOC 实现

## SOLID
- 单一功能 （单干）
- 开闭原则 （抽象类，老祖宗）
  对拓展开发，对修改关闭
- 里氏替换 （虚方法，理清关系）
  通俗理解：儿子可以代替父亲，但是父亲不能代替儿子 
  虚方法是如果你不想要我了，可以替代我哦
  抽象方法是你必须把我想做的实现了，不管你是怎么实现的
  注意：typescript 中暂不支持虚方法
- 接口隔离 （撇清关系）
  不相干的接口要独立创建
  你和我有啥关系，滚一边去
- 依赖注入 （搞关系）
  一个方法应该遵循从“依赖于抽象而不是一个实例”，
  高层模块不应该依赖于低层模块，抽象不应该依赖与细节
  我需要的是诗和远方，是理想，是原则，不需要现实，和那些琐碎的事情。


## inversify
### 用到的库
- inversify-koa-utils
  inversify 的koa 工具函数
- koa-router 路由
- inversify-binding-decorators
  container 自动bind


流式的provide