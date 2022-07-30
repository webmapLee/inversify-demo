import {Container} from 'inversify'
import { StudentA, TeacherA, WebClass } from './entities'
import { Classroom, Student, Teacher } from './interface'
import TYPES from './types'

//创建一个基本的容器
const container = new Container()
container.bind<Student>(TYPES.Student).to(StudentA)
container.bind<Teacher>(TYPES.Teacher).to(TeacherA)
container.bind<Classroom>(TYPES.Classroom).to(WebClass)
export default container
