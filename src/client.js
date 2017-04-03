import { description, path, get, summary, param, response, name, type, params, responses } from './decorators';

@path('/clients')
@description('client entity')
class Client {

    @description('id of the client')
    @type('only numbers')
    id;
    @name('Walas')
    @description('full name of the client')
    fullName;

    @get('/:id?')
    @description()
    @response({ name: 'string', type: 'string' })
    @params('id', 'fullName', { name: 'Walas' })
    searchClientById(id) {
        console.log(`searching client with id ${id}`);
    }
    
    @get('/:name?')
    @summary('this is a little summary')
    @param({ name: 'string', required: 'boolean' })
    @responses('name', 'type', { description: 'small proof', summary: 'try this works' }, { fullName: 'Alfatec' })
    searchClientByName(name) {
        console.log(`searching client with name ${name}`);
    }
}

let instance = new Client();
console.log(instance);