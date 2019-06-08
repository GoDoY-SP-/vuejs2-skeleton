<template>
    <v-app id="app">
        <!-- Conteúdo -->
        <v-content fluid>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md6 lg6>
                        <v-card class="elevation-12">
                            <v-card-media
                                    :src="imgLogo"
                                    height="150px"
                                    contain>
                            </v-card-media>
                            <v-card-text>
                                <router-view name="router-view-child"></router-view>
                            </v-card-text>
                            <v-card-actions>

                                <v-spacer></v-spacer>
                                <v-btn flat icon dark color="primary" @click="submit">
                                    <v-icon dark>arrow_back</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <!-- END Conteúdo -->
        <!-- Footer -->
        <AppFooter></AppFooter>
        <!-- END Footer -->
    </v-app>
</template>

<script>
    // import {mapGetters, mapActions} from 'vuex';
    import AppFooter from '@/components/AppFooterComponent'

    export default {
        components: {
            AppFooter
        },
        name: 'AppError',
        data() {
            return {}
        },
        computed: {
            imgLogo: {
                get: function () {
                    return this.$store.state.Layout.imgLogo;
                }
            },
        },
        methods: {
            submit() {
                // Redirecionar para rota anterior
                this.$router.go(-1);
            }
        },
        mounted() {
        },
        destroyed() {
        },
        created() {
        }
    }
</script>