// usage: @manyToMany(Student, StudentCourses) class Course 
// or: @manyToMany(Course, StudentCourses) class Student
import { setMeta } from 'walas-meta-api';
import { onlyOnProperties } from '../../utils';
export const manyToMany = function (...params) {
    return function (target, key, descriptor) {
        onlyOnProperties(descriptor, 'hasOne');
        setMeta(target, `properties.${key}.manyToMany`,params[0]);
    };
}