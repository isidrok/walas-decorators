import { Entity, Property, Id, Ignore, HasMany, HasOne, ManyToMany } from '../decorators/mapping';
import { Get, Description, Param, Params, Summary, Path, Response, Responses } from '../decorators/rest';

@Entity({ schema: 'Schema', table: 'STUDENTS', provider: 'sqlserver' })
@Path('./students') 
export class Student {

    @Id() @Property({ name: 'ID', type: 'int' })
    id;
    @Property({length: 20 })
    description;
    @Ignore() @Property({ name: 'PASSWORD', type:'sting',dbtype: 'varchar', length: 50 })
    password;
    @HasMany({ name: 'Course', provider: 'mysql' }) @ManyToMany({ name: 'Course', destination: 'studentCourses', provider: 'mysql' })
    courses;
    @HasOne({ name: 'Group', provider: 'sqlserver' })
    group;

     
    @Get('/') @Param('id2')
    @Param({'id':{in:'query'}})
    @Description('search student by id')
    @Response('500','500Error') @Responses({ '200': 'ok', '400': 'error' })
    searchStudentById(id) {
        console.log(`Searching student with id: ${id}`);
    }
}

let instance = new Student();
console.log(instance);