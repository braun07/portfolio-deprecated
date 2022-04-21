<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';
import IconMoon from '../Jetstream/IconMoon.vue';
import BgHeader from '../Jetstream/BgHeader.vue';
import {ref} from 'vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    isDark: Boolean,
});

const isDark = ref(true);

</script>

<template>
    <Head title="Welcome" />

    <body :class="isDark ? 'dark' : ''">
        <div class="relative flex items-top min-h-screen bg-slate-200 dark:bg-stone-800 font-body w-full h-full mx-auto">

            <!-- <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 ">
                <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-stone-800 dark:text-slate-200">
                    Dashboard
                </Link>

                <template v-else>
                    <Link :href="route('login')" class="text-sm text-stone-800 dark:text-slate-200">
                        Log in
                    </Link>

                    <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-stone-800 dark:text-slate-200">
                        Register
                    </Link>
                </template>
            </div> -->

            <div class="flex-col box-border w-11/12 mx-28 mt-24">
                <div class="inline-flex w-full justify-between">
                    <div class="align-content-center">
                        <h2 class="text-amber-400 text-5xl font-medium">Braun</h2>
                        <div class="w-full h-1 bg-stone-800 dark:bg-slate-200"></div>
                    </div>
                    <div>
                        <button>
                            <IconMoon @click="isDark = !isDark" class="cursor-pointer fill-stone-800 dark:fill-slate-200 h-12 w-12"></IconMoon>
                        </button>
                    </div>
                </div>
                <div class="w-full text-center mx-auto mt-auto">
                    <!-- Header -->
                    <div>
                        <p class="text-4xl dark:text-slate-200 text-stone-800">Olá, eu sou o</p>
                        <p class="text-7xl my-2 text-amber-500 font-bold">João Braun</p>
                        <p class="text-xl dark:text-slate-200 text-stone-800 font-light">Desenvolvedor Frontend</p>
                        <div class="relative w-444 mx-auto flex justify-center">
                                <img class="w-444 absolute inset-y-1/4" src="../images/meHeader.png"/>
                                <BgHeader class="rounded-t-large bg-gradient-to-b from-amber-500 to-transparent fill-transparent mt-20 w-96"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </body>

</template>

<style scoped>
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>
