import _isArray from 'lodash/isArray';
import _mergeWith from 'lodash/mergeWith';

export const mergeWithArrayConcat = (...args) => _mergeWith(
    ...args,
    (obj, src) => (_isArray(obj) && _isArray(src)
        ? obj.concat(src)
        : undefined
    ),
);
