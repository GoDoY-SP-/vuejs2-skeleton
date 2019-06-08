import Vue from 'vue'
import Vuex from 'vuex'

// Stores
import Layout from "./stores/LayoutStore";
import MenuMain from "./stores/MenuMainStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        Layout,
        MenuMain
    },
    strict: debug,
    plugins: []
})