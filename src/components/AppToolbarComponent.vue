<template>
    <!-- Toolbar -->
    <v-toolbar
            app
            :clipped-left="clipped"
    >
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <!-- END Toolbar -->
</template>

<script>
    export default {
        name: 'AppToolbar',
        data() {
            return {
                clipped: false,
                title: "Toolbar Vuetify.js"
            }
        },
        computed: {
            drawer: {
                get: function () {
                    return this.$store.state.Layout.menuDisplay;
                },
                set: function (val) {
                    this.$store.dispatch('menuDisplaySetAction', val).then(() => {
                        return this.$store.state.Layout.menuDisplay;
                    })
                }
            }
        },
        methods: {},
        mounted() {
        },
        destroyed() {
        },
        created() {
        },
    }
</script>