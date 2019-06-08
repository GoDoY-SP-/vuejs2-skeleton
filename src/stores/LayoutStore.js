// States são estados dos objetos
const state = {
    imgLogo: require('@/assets/images/vue-logo.png'),
    pageLoading: true,
    menuDisplay: true,
};

// Mutations são operações que mudam o estado dos objetos.
const mutations = {
    pageLoadingShowMutation(state) {
        state.pageLoading = true;
    },
    pageLoadingHideMutation(state) {
        state.pageLoading = false;
    },
    pageLoadingSetMutation(state, value) {
        state.pageLoading = value;
    },
    menuDisplaySetMutation(state, value) {
        state.menuDisplay = value;
    }
};

// Actions são funções que causam efeitos sendo operações assíncronas.
const actions = {
    layoutPageLoadingShowAction: ({commit}) =>
        commit("pageLoadingShowMutation"),
    layoutPageLoadingHideAction: ({commit}) =>
        commit("pageLoadingHideMutation"),
    layoutPageLoadingSetAction({commit}, value) {
        commit("pageLoadingSetMutation", value);
    },
    menuDisplaySetAction({commit}, value) {
        commit("menuDisplaySetMutation", value);
    }
};

// Getters são funções
const getters = {
    imgLogoGetter: state => state.imgLogo,
    pageLoadingGetter: state => state.pageLoading,
    menuDisplayGetter: state => state.menuDisplay
};

// Módulo para criação da instância Vuex combinando o state, mutations, actions e getters
export default {
    state,
    getters,
    actions,
    mutations
};