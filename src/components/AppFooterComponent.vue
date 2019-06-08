<template>
    <!-- Toolbar -->
    <v-footer
            app
            height="auto"
    >
        <v-layout
                justify-center
                row
                wrap
        >
            <v-flex
                    py-3
                    text-xs-center
            >
                <span>&copy; {{title}}</span>
            </v-flex>
        </v-layout>
    </v-footer>
    <!-- END Toolbar -->
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                title: "Footer"
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