// usage: @manyToMany(Student, StudentCourses) class Course 
// or: @manyToMany(Course, StudentCourses) class Student
import { setMeta } from 'walas-meta-api';
import { getSource } from '../utils';
export const manyToMany = function (...params) {
    return function (target, key, descriptor) {
        if (getSource(descriptor) != 'class')
            throw new SyntaxError('@hasOne can only be used on classes');
        setMeta(target, `manyToMany.${params[0]}`, params[1]);
    };
}