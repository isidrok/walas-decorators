import { description, path, get, summary, param, response, params, responses, length, notNull, min, required, max, notBlank, range, pattern } from './decorators';

@path('/clients')
@description('client entity')
class Client {

    @min(10)
    @max(70)
    @required()
    @description('id of the client')
    @notBlank()
    @pattern('id%', null)
    id;

    @description('full name of the client')
    @length(50)
    @notNull()
    @range({ min: 20, max: 90 })
    @pattern('[!·:;*]{}', '')
    fullName;

    @get('/:id?')
    @description()
    @response('200', 'OK')
    @params('id', 'fullName', { name: 'Walas' })
    searchClientById(id) {
        console.log(`searching client with id ${id}`);
    }

    @get('/:name?')
    @summary('this is a little summary')
    @param({ name: 'string', required: 'boolean' })
    @responses({ '200': 'Ok', '400': 'Error' })
    searchClientByName(name) {
        console.log(`searching client with name ${name}`);
    }
}

let instance = new Client();
console.log(instance);