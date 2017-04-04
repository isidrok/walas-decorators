import { setVerbsMeta } from './helperverbs';

export const Delete = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'delete', params);
    };
}

export const Get = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'get', params);
    };
}

export const Patch = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'patch', params);
    };
}

export const Post = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'post', params);
    };
}

export const Put = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'put', params);
    };
}