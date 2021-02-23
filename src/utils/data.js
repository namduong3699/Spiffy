import _assign from 'lodash/assign';
import _findIndex from 'lodash/findIndex';

/**
 * @param {Array} data
 * @param {string} keyField
 * @param {string|number} key
 * @param {object} newValues
 */
export const updateData = (data, keyField, key, newValues) => {
    const updatedIndex = _findIndex(data, { [keyField]: key });

    if (updatedIndex === -1) {
        return data;
    }

    const updatedItem = _assign({}, data[updatedIndex], newValues);

    return [
        ...data.slice(0, updatedIndex),
        updatedItem,
        ...data.slice(updatedIndex + 1),
    ];
};
