// usage: @manyToMany(Student, StudentCourses) class Course 
// or: @manyToMany(Course, StudentCourses) class Student
import { setMeta } from 'walas-meta-api';
import { onlyOnClasses } from '../utils';
export const manyToMany = function (...params) {
    return function (target, key, descriptor) {
        onlyOnClasses(descriptor, 'manyToMany');
        setMeta(target, `manyToMany.${params[0]}`, params[1]);
        //TODO: maybe manyToMany should be an array
    };
}