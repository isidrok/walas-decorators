import { ConventionBase } from '../../conventionbase';
import { getMeta } from 'walas-meta-api';

/**
 * PRECONDITION: must be called after ConventionMethods, and 
 * the Conventions 'Get', 'Post', 'Put', 'Patch' and 'Delete'.
 * Sets the default responses for the methods of according to its verb.
 * @export
 * @class ConventionResponses
 * @extends {ConventionBase}
 */
export class ConventionResponses extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get methods(){
        return 'methods';
    }
    get response200() {
        return  'OK' ;
    }
    get response400() {
        return 'Bad Request';
    }
    get response404() {
        return 'Not Found';
    }

    handle(method) {
        const handlers = {
            'post': this.handlePost,
            'put': this.handlePutPatch,
            'patch': this.handlePutPatch,
            'get': this.handleGet,
            'delete': this.handleDelete
        }
        
        return handlers[method.verb].bind(this)(method);
    }

    handleGet(method) {
        let responses = method.responses || {};
        responses['200'] = responses['200'] || this.response200;
        responses['404'] = responses['404'] || this.response404;
        method.responses = responses;

    }
    handlePost(method) {
        let responses = method.responses || {};
        responses['400'] = responses['400'] || this.response400;
        method.responses = responses;
    }
    handlePutPatch(method) {
        let responses = method.responses || {};
        responses['200'] = responses['200'] || this.response200;
        responses['400'] = responses['400'] || this.response400;
        responses['404'] = responses['404'] || this.response404;
        method.responses = responses;
    }
    handleDelete(method) {
        let responses = method.responses || {};
        responses['200'] = responses['200'] || this.response200;
        responses['404'] = responses['404'] || this.response404;
        method.responses = responses;
    }
    exec() {
        let methods = getMeta(this._meta, this.methods) || {};
        Object.keys(methods).forEach(key => {
            let method = methods[key];
            this.handle(method);
        });
    }
}
