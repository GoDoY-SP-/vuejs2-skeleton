<template>
    <div>
        <v-jumbotron :gradient="gradientRed" dark>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex text-xs-center>
                        <h1 class="display-3">404</h1>
                        <h3 class="display-3">Página Não Encontrada</h3>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
    </div>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';

    export default {
        components: {},
        name: 'AppError404',
        data() {
            return {
                gradientTeal: 'to top, #008080, #48D1CC',
                gradientRed: 'to top, #990000, #FF9999'
            }
        },
        computed: {},
        methods: {},
        mounted() {
        },
        destroyed() {
        },
        created() {
        }
    }
</script>