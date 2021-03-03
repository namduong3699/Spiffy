export const state = () => ({
    data: {
        sponsorCode: null,
        screenName: null,
        email: null,
        password: null,
        passwordCf: null,
        terms: null,
        joinedAt: null,
    },
});

export const getters = {
    data: state => state.data,
};

export const actions = {
    changeData({ commit }, data) {
        commit('setAll', data);
    },
};

export const mutations = {
    setAll(state, data) {
        state.data = data;
        state.data.joinedAt = new Date();
    },
};

export default {
    state,
    actions,
    mutations,
};
