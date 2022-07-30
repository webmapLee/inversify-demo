import 'reflect-metadata';
import { inject, injectable } from "inversify";
import { Classroom, Student, Teacher } from "./interface";
import TYPES from "./types";

@injectable()
export class StudentA implements Student{
    public learn():string{
        return '📕学习'
    }
}

@injectable()
export class TeacherA implements Teacher{
    public teaching(): string {
        return '🏫 老师'
    }
}

@injectable()
export class WebClass implements Classroom{
    private _student:Student
    private _teacher:Teacher
    
    //这样不合理
    // constructor(){
        // this._student = new StudentA();
        // this._teacher = new TeacherA();
    // }

    //比较好点
    // constructor(student:Student,teacher:Teacher){
    //     this._student = student;
    //     this._teacher = teacher;
    // }

    constructor(
        @inject(TYPES.Student) student:Student,
        @inject(TYPES.Teacher) teacher:Teacher
        ){
            this._student = student;
            this._teacher = teacher;
    }


    public study(): string {
        return `${this._teacher}👨 学习前端`
    }
}