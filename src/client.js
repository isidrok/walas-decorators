import { description, path, get } from './decorators';
import { META } from './api/meta';

@path('class client')
@description('entity client')
class Client {

    @description('id of the client')
    id;
    @description('full name of the client')
    fullName;

    @get('/:id?')
        //@post('string')
    searchClientById(id) {
        console.log(`searching client with id ${id}`);
    }

    @get('/:name?')
    searchClientByName(name) {
        console.log(`searching client with name ${name}`);
    }
}

let instance = new Client();
console.log(instance);