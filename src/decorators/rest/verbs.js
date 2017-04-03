import { setVerbsMeta } from './helperverbs';

// TODO: delete is a reserved word. Look for a good name for this decorator
export const remove = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'remove', params);
    };
}

export const get = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'get', params);
    };
}

export const patch = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'patch', params);
    };
}

export const post = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'post', params);
    };
}

export const put = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'put', params);
    };
}