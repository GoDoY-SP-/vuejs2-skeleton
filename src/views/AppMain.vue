<template>
    <v-app>
        <AppLoader></AppLoader>
        <AppToolbar></AppToolbar>
        <v-content>
            <router-view name="router-view-child"></router-view>
        </v-content>
        <AppMenu></AppMenu>
        <AppFooter></AppFooter>
    </v-app>
</template>

<script>
    // import {mapGetters, mapActions} from "vuex";
    import AppLoader from "@/components/AppLoaderComponent";
    import AppToolbar from "@/components/AppToolbarComponent";
    import AppMenu from "@/components/AppMenuComponent";
    import AppFooter from "@/components/AppFooterComponent";

    export default {
        components: {
            AppLoader,
            AppToolbar,
            AppMenu,
            AppFooter
        },
        name: "App",
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {
        },
        destroyed() {
        },
        created() {
        }
    };
</script>
