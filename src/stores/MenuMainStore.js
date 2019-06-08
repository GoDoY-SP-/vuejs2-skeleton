// States são estados dos objetos
const state = {
    menuDisplay: true,
};

// Mutations são operações que mudam o estado dos objetos.
const mutations = {
    menuDisplaySetMutation(state, value) {
        state.menuDisplay = value;
    }
};

// Actions são funções que causam efeitos sendo operações assíncronas.
const actions = {
    menuDisplaySetAction({commit}, value) {
        commit("menuDisplaySetMutation", value);
    }
};

// Getters são funções
const getters = {
    menuDisplayGetter: state => state.menuDisplay
};

// Módulo para criação da instância Vuex combinando o state, mutations, actions e getters
export default {
    state,
    getters,
    actions,
    mutations
};
