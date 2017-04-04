import { setVerbsMeta } from './helperverbs';

export const Delete = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'Delete', params);
    };
}

export const Get = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'Get', params);
    };
}

export const Patch = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'Patch', params);
    };
}

export const Post = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'Post', params);
    };
}

export const Put = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'put', params);
    };
}