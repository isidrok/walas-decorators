/*
se cogen los params del meta y de la llamada del verbo
todos los params de la llamada del verbo que estén en los attrs de la clase
se ponen junto a los del meta, sin duplicarlos y se pone la informacion necesaria
*/

import { ConventionBase } from '../../conventionbase';
import { getMeta } from '../../../api';
import { getMethods } from '../../utils';

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
            .toString().match(/\((.*?)\)/)[1].split(',');
    }
    handle(method) {
        const handlers = {
            'post': this.handlePost,
            'put': this.handlePutPatch,
            'patch': this.handlePutPatch,
            'get': this.handleGetDelete,
            'delete': this.handleGetDelete
        }
        return handlers[method.verb](method);
    }
    /*
    A cada param se le pone como información la definida en el meta del atributo 
    si el parametro corresponde con alguna de las ids de la clase, entonces in = params
    si es un get todo lo que no sea id tiene in = query
    el resto va en body
    */
    addInformationFromAttr(params){
        let paramNames = params.map(c => Object.keys(c)[0]);
        paramNames.forEach(p => {
            let prop = this._meta.properties[p];
            let param = params[p];
            param.description = param.description || prop.description;
            param.required = param.required || prop.required;
        });
    }
    handleGetDelete(method) {
        let params = method.params;
        this.addInformationFromAttr(params);
        let ids = this._meta.class.ids;
        let paramNames = params.map(c => Object.keys(c)[0]);
        paramNames.forEach(p => {
            if(ids.indexOf(p) !== -1)
                params[p].in = params[p].in || 'path';
            else
                params[p].in = params[p].in || 'query';
        });
        
    }
    handlePutPatch(method) {
        let params = method.params;
        this.addInformationFromAttr(params);
        let ids = this._meta.class.ids;
        let paramNames = params.map(c => Object.keys(c)[0]);
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
        let paramNames = params.map(c => Object.keys(c)[0]);
        paramNames.forEach(p => {
            params[p].in = params[p].in || 'body';
        });
    }
    exec() {      
        let methods = getMeta(this._meta, this.methods);
        Object.keys(methods).forEach(key => {
            //coger el metodo de la clase, ver la llamada y sacar todos los parámetros           
            //juntar los parámetros de la llamada con los del meta, sólo si se corresponden con las props del meta
            //una vez juntos los parámetros llamar al handler específico
            let callParams = this.getCallParams(key);
            let method = methods[key];
            let params = method.params;
            let paramNames = params.map(c => Object.keys(c)[0]);
            let propNames = this.getMetaProps().map(c => Object.keys(c)[0]);
            callParams.forEach(param => {
                if (paramNames.indexOf(param) === -1 && propNames.indexOf(param) !== -1)
                    params.push({ [param]: {} });
            });
            //el método ya tiene los parametros, ahora tenemos que añadir la información de cada uno
            this.handle(method);
        });
    }
}
