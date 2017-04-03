import { entity, property, id, ignore } from '../decorators/model';
import { hasMany, hasOne, manyToMany } from '../decorators/relations';
import { get, description, param, params, summary, path, response, responses } from '../decorators/rest';

@entity({ table: 'STUDENTS', provider: 'sqlserver' })
@manyToMany('Course', 'studentCourses')
@path('./students')
export class Student {

    @id() @property({ name: 'ID', type: 'int' })
    id;
    @property({ name: 'USERNAME', type: 'varchar', length: 50 })
    username;
    @ignore() @property({ name: 'PASSWORD', type: 'varchar', length: 50 })
    password;
    @hasMany('Course')
    courses;
    @hasOne('Group')
    group;

    @get('/:id?') @param('id') @description('search student by id') @responses({ '200': 'ok', '400': 'error' })
    searchStudentById(id) {
        console.log(`Searching student with id: ${id}`);
    }
}

let instance = new Student();
console.log(instance);