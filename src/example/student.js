import { entity, property, id, ignore, hasMany, hasOne, manyToMany } from '../decorators/mapping';
import { get, description, param, params, summary, path, response, responses } from '../decorators/rest';

@entity({ schema: 'Schema', table: 'STUDENTS', provider: 'sqlserver' })
@path('./students')
export class Student {

    @id() @property({ name: 'ID', type: 'int' })
    id;
    @property({ name: 'USERNAME', type: 'string', dbtype: 'varchar', length: 50 })
    username;
    @ignore() @property({ name: 'PASSWORD', type: 'varchar', length: 50 })
    password;
    @hasMany({ name: 'Course', provider: 'mysql' }) @manyToMany({ name: 'Course', destination: 'studentCourses', provider: 'mysql' })
    courses;
    @hasOne({ name: 'Group', provider: 'sqlserver' })
    group;

    @get('/:id?') @param('id') @response('500','500Error') @description('search student by id') @responses({ '200': 'ok', '400': 'error' })
    searchStudentById(id) {
        console.log(`Searching student with id: ${id}`);
    }
}

let instance = new Student();
console.log(instance);