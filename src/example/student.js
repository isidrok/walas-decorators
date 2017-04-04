import { Entity, Property, Id, Ignore, HasMany, HasOne, ManyToMany } from '../decorators/mapping';
import { Get, Description, Param, Params, Summary, Path, Response, Responses } from '../decorators/rest';

@Entity({ schema: 'Schema', table: 'STUDENTS', provider: 'sqlserver' })
@Path('./students')
export class Student {

    @Id() @Property({ name: 'ID', type: 'int' })
    id;
    @property({ name: 'USERNAME', type: 'string', dbtype: 'varchar', length: 50 })
    username;
    @ignore() @property({ name: 'PASSWORD', type:'sting',dbtype: 'varchar', length: 50 })
    password;
    @hasMany({ name: 'Course', provider: 'mysql' }) @manyToMany({ name: 'Course', destination: 'studentCourses', provider: 'mysql' })
    courses;
    @hasOne({ name: 'Group', provider: 'sqlserver' })
    group;

     
    @get('/') @param('id2')
    @param({'id':{in:'query'}})
    @description('search student by id')
    @response('500','500Error') @responses({ '200': 'ok', '400': 'error' })
    searchStudentById(id) {
        console.log(`Searching student with id: ${id}`);
    }
}

let instance = new Student();
console.log(instance);