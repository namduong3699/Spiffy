import Vue from 'vue';
import formatDate from '~/filters/formatDate';

export default () => {
    Vue.filter('formatDate', formatDate);
};
