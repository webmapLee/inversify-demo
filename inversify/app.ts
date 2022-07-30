import { Classroom } from "./interface";
import container from "./inversify.config";
import TYPES from "./types";
import 'reflect-metadata';

const classroom = container.get<Classroom>(TYPES.Classroom)
console.log('classroom',classroom)
