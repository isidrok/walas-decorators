/*
se cogen los params del meta y de la llamada del verbo
todos los params de la llamada del verbo que estén en los attrs de la clase
se ponen junto a los del meta, sin duplicarlos y se pone la informacion necesaria
*/

import { ConventionBase } from '../../conventionbase';
import { getMeta } from '../../../api';

export class ConventionResponses extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get response200() {
        return { '200': 'OK' };
    }
    get response400() {
        return { '400': 'Bad Request' };
    }

    get response404() {
        return { '404': 'Not Found' };
    }

    handle(method) {
        const handlers = {
            'post': this.handlePost,
            'put': this.handlePutPatch,
            'patch': this.handlePutPatch,
            'get': this.handleGet,
            'delete': this.handleDelete
        }
        return handlers[method.verb](method);
    }

    handleGet(method) {
        let responses = method.params;
        responses['200'] = responses['200'] || this.response200;
        responses['404'] = responses['404'] || this.response404;

    }
    handlePost(method) {
        let responses = method.params;
        responses['400'] = responses['400'] || this.response400;

    }
    handlePutPatch(method) {
        let responses = method.params;
        responses['200'] = responses['200'] || this.response200;
        responses['400'] = responses['400'] || this.response400;
        responses['404'] = responses['404'] || this.response404;
    }
    handleDelete(method) {
        let responses = method.params;
        responses['200'] = responses['200'] || this.response200;
        responses['404'] = responses['404'] || this.response404;
    }
    exec() {
        let methods = getMeta(this._meta, this.methods);
        Object.keys(methods).forEach(key => {
            let method = methods[key];
            this.handle(method);
        });
    }
}
