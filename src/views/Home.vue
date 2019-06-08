<template>
    <v-container fluid>
        <h1>Home</h1>
        <v-container fluid>
            <v-slide-y-transition mode="out-in">
                <v-layout column align-center>
                    <img src="@/assets/images/vue-logo.png" alt="Vuetify.js" class="mb-5">
                    <blockquote>
                        &#8220;First, solve the problem. Then, write the code.&#8221;
                        <footer>
                            <small>
                                <em>&mdash;John Johnson</em>
                            </small>
                        </footer>
                    </blockquote>
                </v-layout>
            </v-slide-y-transition>
        </v-container>
    </v-container>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {},
        name: 'Home',
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
            // Esconder page loader
            this.$store.dispatch('layoutPageLoadingSetAction', false);
        },
        beforeRouteLeave(to, from, next) {
            // Carregar page loader
            this.$store.dispatch('layoutPageLoadingSetAction', true);
            next()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
