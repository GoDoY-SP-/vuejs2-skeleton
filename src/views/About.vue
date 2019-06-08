<template>
    <v-container fluid>
        <h1>About</h1>
        <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
                <small>
                    <em>&mdash;John Johnson</em>
                </small>
            </footer>
        </blockquote>
    </v-container>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {},
        name: 'About',
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
</style>
