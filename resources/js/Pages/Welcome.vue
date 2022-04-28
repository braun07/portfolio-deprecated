<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';
import IconMoon from '../Jetstream/IconMoon.vue';
import BgHeader from '../Jetstream/BgHeader.vue';
import NavBar from '../Jetstream/NavBar.vue';
import Glasses from '../Jetstream/Glasses.vue';
import CheckMark from '../Jetstream/CheckMark.vue';
import IconDownload from '../Jetstream/IconDownload.vue';
import Input from '../Jetstream/Input.vue';
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
        <div id="home" class="relative flex items-top min-h-screen bg-slate-200 dark:bg-stone-800 font-body w-full h-full mx-auto justify-center align-content-center">

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
                    </Link>.
                </template>
            </div> -->

            
            <div class="flex-col box-border w-11/12 mx-28 mt-24">
                <!-- TopBar -->
                <div class="flex w-full justify-between items-center">
                    <div class="align-content-center">
                        <h2 class="text-amber-500 text-5xl font-medium">Braun</h2>
                        <div class="w-full h-1 bg-stone-800 dark:bg-slate-200"></div>
                    </div>
                    <div>
                        <button>
                            <IconMoon @click="isDark = !isDark" class="cursor-pointer fill-stone-800 dark:fill-slate-200 hover:fill-amber-500 dark:hover:fill-amber-500 h-12 w-12 hover:scale-110 duration-300 ease-in-out transform transition"></IconMoon>
                        </button>
                    </div>
                </div>

                <!-- content -->
                <div class="w-full text-center mx-auto mt-auto">

                    <!-- Header -->
                    <div id="header">
                        <p class="text-4xl dark:text-slate-200 text-stone-800">Olá, eu sou o</p>
                        <p class="text-7xl my-2 text-amber-500 font-bold">João Braun</p>
                        <p class="text-xl dark:text-slate-200 text-stone-800 font-light">Desenvolvedor Frontend</p>
                        <div class="relative w-444 mx-auto flex justify-center">
                                <img class="w-444 absolute inset-y-1/4" src="../images/meHeader.png"/>
                                <BgHeader class="rounded-t-large bg-gradient-to-b from-amber-500 to-transparent fill-transparent mt-20 w-96"/>
                        </div>
                    </div>

                    <!-- About Me -->
                    <div id="about" class="my-36">
                        <div>
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Um pouco</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Sobre Mim</p>
                        </div>
                        <div class="justify-center mt-28 mx-40">
                            <div class="flex justify-between gap-36">
                                <div class="text-amber-500" id="glasses">
                                    <Glasses class="h-52 w-96 fill-amber-500"/>
                                </div>
                                <div id="infos">
                                    <div class="text-stone-800 dark:text-slate-200 flex flex-row gap-32" id="exp">
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5" style="backdrop-filter: blur(20px);">
                                            <p class="text-amber-500">ICON</p>
                                            <p class="font-light text-xl">+1 ano</p>
                                            <p class="font-medium text-2xl">Experiência</p>
                                        </div>
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5" style="backdrop-filter: blur(20px);">
                                            <p class="text-amber-500">ICON</p>
                                            <p class="font-light text-xl">+4 projetos</p>
                                            <p class="font-medium text-2xl">Completos</p>
                                        </div>
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5" style="backdrop-filter: blur(20px);">
                                            <p class="text-amber-500">ICON</p>
                                            <p class="font-light font-xl">+12 Prototípos</p>
                                            <p class="font-medium text-2xl">Finalizados</p>
                                        </div>
                                    </div>
                                    <div class="text-stone-800 dark:text-slate-200 my-9 text-2xl text-justify whitespace-normal" id="dev">
                                        Como Desenvolvedor Frontend sou responsável pela criação
                                        de páginas com a interface de usuário baseada em UI / UX,
                                        sou autoditata, estou sempre correndo atrás de conhecimento
                                        para melhorar o meu desenvolvimento profissional. 
                                    </div>
                                    <div>
                                        <a href="../docs/curriculo.pdf" class="inline-flex px-4 py-2 border-8 border-transparent hover:bg-amber-600 dark:text-stone-800 text-slate-200 bg-amber-500 rounded-lg p-2 font-semibold h-14 w-44 text-3xl hover:scale-105 duration-300 ease-in-out transform transition" download><IconDownload class="h-4 w-4 fill-slate-200 dark:fill-stone-800"/> Curriculo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- knowledge -->
                    <div id="knowledge">
                        <div class="mt-36 mb-24">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Algumas das</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Minhas Habilidades</p>
                        </div>
                        <div class="flex flex-row justify-center gap-14 mx-auto">
                            <div class="justify-center mx-auto p-16 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx" style="backdrop-filter: blur(20px);">
                                <p class="text-4xl text-amber-500">Desenvolvimento Frontend</p>
                                <div class="flex flex-row justify-between mt-10">
                                    <div class="my-auto flex gap-4 flex-col">
                                        <!-- html -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">HTML</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- css -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">CSS</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- Java Scrip -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Java Script</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- GIT -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Git</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- vue -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Vue</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex gap-5 flex-col ">
                                        <!-- Angular -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Angular</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">Básico</p>
                                            </div>
                                        </div>
                                        <!-- React -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">React</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">Básico</p>
                                            </div>
                                        </div>
                                        <!-- Tailwind -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Tailwind</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">Avançado</p>
                                            </div>
                                        </div>
                                        <!-- Bootstrap -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Bootstrap</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </div>
                            <div class="justify-center mx-auto p-16 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx" style="backdrop-filter: blur(20px);">
                                <p class="text-4xl text-amber-500">Desenvolvimento Backend</p>
                                <div class="flex flex-row justify-between mt-10">
                                    <div class="my-auto flex gap-4 flex-col">
                                        <!-- Mysql -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Mysql</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- Php -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Php</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- C# -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">C#</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- Laravel -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Laravel</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">intermediário</p>
                                            </div>
                                        </div>
                                        <!-- Flutter -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Flutter</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">Básico</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex gap-5 flex-col">
                                        <!-- Java -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Java</p>
                                                <p class="text-stone-800 dark:text-slate-200 text-xl font-light">Básico</p>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- contact -->
                    <div id="contact">
                        <div class="mt-36 mb-24">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Formas de</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Contato</p>
                        </div>
                        <div class="flex flex-row justify-center mx-auto gap-48 mb-444">
                            <div class="flex flex-col gap-8">
                                <div class="flex gap-2 flex-col p-6 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx" style="backdrop-filter: blur(20px);">
                                    <p class="dark:text-white text-stone-800">icon</p>
                                    <p class="text-3xl dark:text-slate-200 text-stone-800">Email</p>
                                    <p class="text-stone-800 text-3xl dark:text-slate-200">joaovitorbraun6@gmail.com</p>
                                    <p class="text-amber-500 text-3xl">Me escreva</p>
                                </div>
                                <div class="flex gap-2 flex-col p-6 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx" style="backdrop-filter: blur(20px);">
                                    <p class="dark:text-white text-stone-800">icon</p>
                                    <p class="text-3xl dark:text-slate-200 text-stone-800">Whatsapp</p>
                                    <p class="text-stone-800 text-3xl dark:text-slate-200">+55 33 9 9819-1460</p>
                                    <p class="text-amber-500 text-3xl">Me escreva</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-6">
                                <div>
                                    <p class="dark:text-slate-200 text-stone-800 text-2xl font-bold text-center">Solicite um TESTE Serviço</p>
                                </div>
                                <div>
                                    <form action="">
                                        <Input type="text" placeholder="Seu nome" class="px-72 dark:text-slate-200 placeholder:italic text-stone-800 text-center dark:placeholder:text-white placeholder:text-stone-800 dark:bg-stone-700 bg-white border border-amber-500 rounded-lx focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" id="name"></Input>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <!-- testimonial -->
                    <div>

                    </div>

                    <!-- footer -->
                    <div>

                    </div>
                </div>
            </div>
            <NavBar/>
        </div>
    </body>

</template>

<style scoped>
    
</style>
