
@get('/:id?')
@description('returns the client with the id given as parameter')
@params({ id: { required: true } })
searchClientById(id){...}

@get({
    url: '/:id?',
    description: 'returns the client with the id given as parameter',
    params: {
            id: {
                required: true
            }
    }
})
searchClientById(id){...}

META.methods.searchClientById = {
    verb: 'get',
    url: '/:id?',
    description: 'returns the client with the id given as parameter',
    params: {
        id: {
            required: true
        }
    }
}