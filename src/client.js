import { Description, Path, Get, Summary, Param, Response, Params, Responses, Length, NotNull, Min, Required, Max, NotBlank, Range, Pattern } from './decorators';

@Path('/clients')
@Description('client entity')
class Client {

    @Min(10)
    @Max(70)
    @Required()
    @Description('id of the client')
    @NotBlank()
    @Pattern('id%', null)
    id;

    @Description('full name of the client')
    @Length(50)
    @NotNull()
    @Range({ Min: 20, Max: 90 })
    @Pattern('[!·:;*]{}', '')
    fullName;

    @Get('/:id?')
    @Description()
    @Response('200', 'OK')
    @Params('id', 'fullName', { name: 'Walas' })
    searchClientById(id) {
        console.log(`searching client with id ${id}`);
    }

    @Get('/:name?')
    @Summary('this is a little Summary')
    @Param({ name: 'string', required: 'boolean' })
    @Responses({ '200': 'Ok', '400': 'Error' })
    searchClientByName(name) {
        console.log(`searching client with name ${name}`);
    }
}

let instance = new Client();
console.log(instance);