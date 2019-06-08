<template>
    <!-- Menu Esquerdo -->
    <v-navigation-drawer
            app
            stateless
            hide-overlay
            :mini-variant.sync="mini"
            v-model="drawer">
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img :src="imgLogo">
                    </v-list-tile-avatar>
                    <v-list-tile-content>::. MENU .::</v-list-tile-content>
                    <v-list-tile-action>

                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <!-- Menu Simples -->
            <v-list-tile
                    v-if="!item.items"
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{ item.title }}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <!-- END Menu Simples -->
            <!-- Menu Grupos -->
            <v-list-group
                    v-if="item.items"
                    v-for="item in items"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    :to="item.link">
                <v-list-tile slot="activator">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
                <!-- Sub Menus -->
                <v-list-tile
                        v-for="subitem in item.items"
                        :key="subitem.title"
                        :to="subitem.link">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ subitem.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>{{ subitem.icon }}</v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-group>
            <!-- END Menu Grupos -->
        </v-list>
    </v-navigation-drawer>
    <!-- END Menu Esquerdo -->
</template>

<script>
    export default {
        name: 'AppMenu',
        data() {
            return {
                items: [
                    {
                        title: 'Home',
                        icon: 'home',
                        link: '/'
                    },
                    {
                        title: 'Sub-Menu 1',
                        icon: 'chrome_reader_mode',
                        items: [
                            {
                                title: 'About',
                                icon: 'group',
                                link: '/about'
                            },
                        ]
                    }
                ]
            }
        },
        computed: {
            imgLogo: {
                get: function () {
                    return this.$store.state.Layout.imgLogo;
                }
            },
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
        }
    }
</script>