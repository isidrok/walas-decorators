//TODO needs a lot of refactoring
import { ConventionBase } from '../../conventionbase';
import { getMeta } from 'walas-meta-api';
import { getMethods } from '../../utils';

/**
 * PRECONDITION: must be called after ConventionMethods, and
 * the Conventions 'Get', 'Post', 'Put', 'Patch' and 'Delete'.
 * For all methods, gets its parameters from the method call and
 * if they correspond with a property of the class they are inserted
 * as the parameters of the method, according to the method verb.
 * @export
 * @class ConventionParams
 * @extends {ConventionBase}
 */
export class ConventionParams extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get methods() {
        return 'methods';
    }
    get properties() {
        return 'properties';
    }
    getMetaIds() {
        return getMeta(this._meta, 'class.ids');
    }
    getMetaProps() {
        return getMeta(this._meta, 'properties');
    }
    getCallParams(methodName) {
        return getMethods(this._entity)
            .filter(c => c.name === methodName)[0].value
            .toString().match(/\((.*?)\)/)[1].split(',').map(c=> (c.trim()));
    }
    handle(method) {
        const handlers = {
            'post': this.handlePost,
            'put': this.handlePutPatch,
            'patch': this.handlePutPatch,
            'get': this.handleGetDelete,
            'delete': this.handleGetDelete
        }
        return handlers[method.verb].bind(this)(method);
    }
    addInformationFromAttr(params) {
        let paramNames = Object.keys(params);
        paramNames.forEach(p => {
            let prop = this._meta.properties[p];
            let param = params[p];
            param.description = param.description || prop.description;
            param.required = param.required || prop.required;
            params[p] = param;
        });
    }
    handleGetDelete(method) {
        let params = method.params;
        this.addInformationFromAttr(params);
        let ids = this._meta.class.ids;
        let paramNames = Object.keys(params);
        paramNames.forEach(p => {
            if (ids.indexOf(p) !== -1)
                params[p].in = params[p].in || 'path';
            else
                params[p].in = params[p].in || 'query';
        });

    }
    handlePutPatch(method) {
        let params = method.params;
        this.addInformationFromAttr(params);
        let ids = this._meta.class.ids;
        let paramNames = Object.keys(params);
        paramNames.forEach(p => {
            if (ids.indexOf(p) !== -1)
                params[p].in = params[p].in || 'path';
            else
                params[p].in = params[p].in || 'body';
        });

    }
    handlePost(method) {
        let params = method.params;
        this.addInformationFromAttr(params);
        let paramNames = Object.keys(params);
        paramNames.forEach(p => {
            params[p].in = params[p].in || 'body';
        });
    }
    exec() {
        let methods = getMeta(this._meta, this.methods);
        Object.keys(methods).forEach(key => {
            let callParams = this.getCallParams(key);
            let method = methods[key];
            let params = method.params || {};
            let paramNames = params ? Object.keys(params) : [];
            let metaProps = this.getMetaProps()
            let propNames = metaProps ? Object.keys(metaProps) : [];
            callParams.forEach(param => {
                if (paramNames.indexOf(param) === -1 && propNames.indexOf(param) !== -1)
                    params[param] = {};
            });
            method.params = params;
            this.handle(method);
        });
    }
}
