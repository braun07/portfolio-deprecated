<template>
    <Head title="Welcome" />
    <div id="home" class="relative flex flex-col items-top min-h-screen font-body w-full h-full mx-auto justify-center align-content-center">
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
        
        <div class="flex-col flex mx-28 mt-10">
                <!-- TopBar -->
                <div class="flex sm:flex-row flex-col w-full justify-between items-center">
                    <div class="align-content-center m-5 sm:flex hidden">
                        <h2 class="text-amber-500 text-xl sm:text-4xl font-semibold">Braun</h2>
                        <div class="w-full h-1 bg-stone-800 dark:bg-slate-200"></div>
                    </div>
                    <div>
                        <a href="#" @click="changeTheme">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" 
                                enable-background="new 0 0 24 24" 
                                class=" cursor-pointer fill-stone-800 dark:fill-slate-200 hover:fill-amber-500 dark:hover:fill-amber-500 h-12 w-12 hover:scale-110 duration-300 ease-in-out transform transition"
                                viewBox="0 0 24 24" 
                                >
                                <rect fill="none" height="24" width="24"/>
                                <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- content -->
                <div class="w-full mx-auto mt-auto">

                    <!-- Header -->
                    <div id="header">
                        <div class="text-center mx-auto mt-9">
                            <p class="text-xl sm:text-4xl dark:text-slate-200 text-stone-800">Olá, eu sou o</p>
                            <p class="text-4xl sm:text-7xl my-2 text-amber-500 font-bold">João Braun</p>
                            <p class="text-sm sm:text-xl dark:text-slate-200 text-stone-800 font-light">Desenvolvedor Frontend</p>
                        </div>
                        <div class="relative w-60 sm:w-444 mx-auto justify-center hidden ssm:flex">
                            <img class="w-48 ssm:w-60 sm:w-444 absolute inset-y-1/4" src="../images/meHeader.png"/>
                            <BgHeader class="rounded-t-3xl sm:rounded-t-large bg-gradient-to-b from-amber-500 to-transparent fill-transparent mt-20 w-44 ssm:w-52 sm:w-96"/>
                        </div>
                    </div>

                    <!-- About Me -->
                    <div id="about" class="my-60 scroll-mt-52">
                        <div class="text-center">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Um pouco</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Sobre Mim</p>
                        </div>
                        <div class="justify-center mt-28 mx-auto max-w-7xl">
                            <div class="flex justify-between gap-36 xl:flex-row flex-col">
                                <div class="text-amber-500" id="glasses">
                                    <Glasses class="h-52 w-96 fill-amber-500 mx-auto hidden ssm:flex"/>
                                </div>
                                <div id="infos" class="text-center flex flex-col max-w-3xl mx-auto">
                                    <div class="text-stone-800 dark:text-slate-200 flex justify-between xl:flex-row flex-col" id="exp">
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5 m-4" style="backdrop-filter: blur(20px);">
                                            <Experience class="mx-auto fill-amber-500"/>
                                            <p class="font-light text-xl">+1 ano</p>
                                            <p class="font-medium text-2xl">Experiência</p>
                                        </div>
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5 m-4" style="backdrop-filter: blur(20px);">
                                            <Projects class="mx-auto fill-amber-500"/>
                                            <p class="font-light text-xl">+4 projetos</p>
                                            <p class="font-medium text-2xl">Completos</p>
                                        </div>
                                        <div class="bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx py-3 justify-between px-5 m-4" style="backdrop-filter: blur(20px);">
                                            <Prototypes class="mx-auto fill-amber-500"/>
                                            <p class="font-light font-xl">+12 Prototípos</p>
                                            <p class="font-medium text-2xl">Finalizados</p>
                                        </div>
                                    </div>
                                    <div class="text-stone-800 dark:text-slate-200 my-9 text-2xl text-justify whitespace-normal mx-auto" id="dev">
                                        <p>
                                            Como Desenvolvedor Frontend sou responsável pela criação
                                            de páginas com a interface de usuário baseada em UI / UX,
                                            sou autoditata, estou sempre correndo atrás de conhecimento
                                            para melhorar o meu desenvolvimento profissional. 
                                        </p> 
                                    </div>
                                    <div>
                                        <a href="../docs/curriculo.pdf" class="inline-flex px-4 py-2 border-8 border-transparent hover:bg-amber-600 dark:text-stone-800 text-slate-200 bg-amber-500 rounded-lg p-2 font-semibold h-14 w-44 text-3xl hover:scale-105 duration-300 ease-in-out transform transition" download><IconDownload class="h-4 w-4 fill-slate-200 dark:fill-stone-800"/> Curriculo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- knowledge -->
                    <div id="knowledge" class="scroll-mt-12">
                        <div class="mt-36 mb-24 text-center">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Algumas das</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Minhas Habilidades</p>
                        </div>
                        <div class="flex 2xl:flex-row flex-col justify-between mx-auto max-w-7xl">
                            <div class="justify-center mx-auto p-5 ssm:p-16 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx m-4" style="backdrop-filter: blur(20px);">
                                <p class="text-2xl sm:text-4xl text-amber-500 text-center">Desenvolvimento Frontend</p>
                                <div class="flex flex-col sm:flex-row justify-between mt-10">
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
                            <div class="justify-center mx-auto p-5 ssm:p-16 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx m-4" style="backdrop-filter: blur(20px);">
                                <p class="text-4xl text-amber-500 text-center">Desenvolvimento Backend</p>
                                <div class="flex flex-col sm:flex-row justify-between mt-10">
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
                    <div id="contact" class="scroll-mt-16">
                        <div class="mt-36 mb-24 text-center">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">Formas de</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Contato</p>
                        </div>
                        <div class="flex flex-col xl:flex-row justify-between mx-auto mb-444 font-light max-w-7xl">
                            <div class="flex flex-col lg:flex-row xl:flex-col gap-8 text-center justify-between mx-auto">
                                <div class="flex flex-col p-6 m-4 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx w-96" style="backdrop-filter: blur(20px);">
                                    <Mail class="dark:fill-slate-200 fill-stone-800 mx-auto my-4"/>
                                    <p class="text-2xl dark:text-slate-200 text-stone-800">Email</p>
                                    <p class="text-stone-800 text-xl dark:text-slate-200">joaovitorbraun6@gmail.com</p>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=joaovitorbraun6@gmail.com" target="_blank"
                                        class="text-amber-500 text-2xl hover:text-amber-600 hover:font-normal ease-in-out transform transition hover:cursor-pointer">
                                        Me escreva
                                    </a>
                                </div>
                                <div class="flex flex-col p-6 m-4 bg-white dark:bg-stone-700 bg-opacity-80 bg-clip-padding rounded-lx w-96" style="backdrop-filter: blur(20px);">
                                    <Wpp class="dark:fill-slate-200 fill-stone-800 mx-auto my-4"/>
                                    <p class="text-2xl dark:text-slate-200 text-stone-800">Whatsapp</p>
                                    <p class="text-stone-800 text-2xl dark:text-slate-200">+55 33 9 9819-1460</p>
                                    <a href="//api.whatsapp.com/send?phone=+5533998191460&text=Olá Gostaria de conversar sobre negócios!" class="text-amber-500 text-2xl hover:text-amber-600 hover:font-normal ease-in-out transform transition hover:cursor-pointer">Me escreva</a>
                                </div>
                            </div>
                            <div class="flex flex-col p-5 m-6 max-w-7xl">
                                <div class="dark:text-slate-200 text-stone-800 text-2xl font-bold text-center mb-8">
                                    <p>Me envie um e-mail</p>
                                </div>
                                <div class="w-80 md:w-444 lg:w-[48rem] xl:w-[37.5rem] mx-auto">
                                    <form action="" class="flex flex-col justify-between">
                                        <div>
                                            <label class="flex flex-col">
                                                <span class="text-stone-800 dark:text-slate-200 ml-3">Nome:</span>
                                                <input type="text" placeholder="Seu nome" class="dark:text-gray-600 font-light placeholder:italic text-stone-800 dark:placeholder:text-white placeholder:text-stone-800 dark:bg-stone-700 bg-white border border-amber-500 rounded-lx focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" id="name">
                                            </label>
                                        </div>
                                        <div class="my-6">
                                            <label class="flex flex-col">
                                                <span class="text-stone-800 dark:text-slate-200 ml-3">Email:</span>
                                                <input type="text" placeholder="Seuemail@email.com" class="dark:text-slate-200 w-auto font-light placeholder:italic text-stone-800 dark:placeholder:text-white placeholder:text-stone-800 dark:bg-stone-700 bg-white border border-amber-500 rounded-lx focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" id="mail">
                                            </label>
                                        </div>
                                        <div>
                                            <label class="flex flex-col">
                                                <span class="text-stone-800 dark:text-slate-200 ml-3">Serviço:</span>
                                                <textarea rows="4" placeholder="Digite aqui o servico ao qual deseja solicitar" class="dark:text-slate-200 w-auto font-light placeholder:italic text-stone-800 dark:placeholder:text-white placeholder:text-stone-800 dark:bg-stone-700 bg-white border border-amber-500 rounded-lx focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50" id="job"></textarea>
                                            </label>
                                        </div>
                                        <button class="w-full h-16 mt-9 bg-amber-500 text-slate-200 font-bold dark:text-stone-800 rounded-lx text-2xl hover:bg-amber-600 ease-in-out transform transition">Enviar</button>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <!-- testimonial -->
                    <div id="testimonial" class="scroll-mt-12 my-60">
                        <div class="mt-36 mb-24 text-center">
                            <p class="text-2xl dark:text-slate-200 text-stone-800 font-normal">FeedBack de</p>
                            <p class="text-4xl dark:text-amber-500 text-stone-800 font-bold">Clientes</p>
                        </div>
                        <Slider/>
                    </div>
                </div>
        </div>
        <!-- footer -->
        <footer class="bg-amber-500 text-stone-800 w-full pb-32">
            <div id="site-info" class="xl:container mx-auto px-4 lg:px-6 py-4 grid grid-cols-6 items-center">
                <div id="scroll" class="flex gap-6 my-auto font-bold text-2xl col-span-2">
                    <a href="#about" class="hover:scale-110 duration-300 ease-in-out transform transition hover:text-slate-200">Sobre</a>
                    <a href="#contact" class="hover:scale-110 duration-300 ease-in-out transform transition hover:text-slate-200">Contato</a>
                    <a href="#testimonial" class="hover:scale-110 duration-300 ease-in-out transform transition hover:text-slate-200">Clientes</a>
                </div>
                <div class="flex-col flex col-span-2 text-2xl text-center">
                    <p class="font-bold">João Vitor Braun</p>
                    <p>© Braun Design. All rights reserved <br> 2022 </p>
                </div>
                <div id="media-info" class="flex gap-5 my-auto col-span-2 justify-end">
                    <div id="git-hub">
                        <p>logo1</p>
                    </div>
                    <div id="linked-in">
                        <p>logo2</p>
                    </div>
                    <div id="instagram">
                        <p>logo3</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <NavBar/>
</template>

<script>

    import { Head, Link } from '@inertiajs/inertia-vue3'
    import BgHeader from '../Jetstream/BgHeader.vue'
    import NavBar from '../Jetstream/NavBar.vue'
    import Glasses from '../Jetstream/Glasses.vue'
    import CheckMark from '../Jetstream/CheckMark.vue'
    import IconDownload from '../Jetstream/IconDownload.vue'
    import DarkModeToggle from '../Jetstream/DarkModeToggle.vue'
    import Input from '../Jetstream/Input.vue'
    import { onBeforeMount, onMounted } from 'vue'
    import Experience from '../Jetstream/Icons/experience.vue'
    import Projects from '../Jetstream/Icons/projects.vue'
    import Prototypes from '../Jetstream/Icons/prototypes.vue'
    import Mail from '../Jetstream/Icons/mail.vue'
    import Wpp from '../Jetstream/Icons/wpp.vue'
    import Slider from '../Jetstream/Slider.vue'


    export default {
        components: {
            dark: Boolean,
            BgHeader,
            NavBar,
            Glasses,
            CheckMark,
            IconDownload,
            DarkModeToggle,
            Input,
            Head,
            Link,
            Experience,
            Slider,
            Projects,
            Prototypes,
            Mail,
            Wpp,
        },
    
        setup() {
            onBeforeMount(() =>{
                if(localStorage.dark == 1){
                    document.body.classList.add("dark");
                } else {
                    document.body.classList.remove("dark");
                }
            })
        },
    
        methods: {
            changeTheme() {
                if(!document.body.classList.contains("dark")) {
                    document.body.classList.add("dark");
                    localStorage.setItem("dark", 1);
                } else {
                    document.body.classList.remove("dark");
                    window.localStorage.setItem("dark", 0);
                }
            },
        },
    }


</script>


<style lang="postcss" scoped>

/* .hability-title {
    @apply text-amber-500 text-2xl font-bold;
} */


</style>
