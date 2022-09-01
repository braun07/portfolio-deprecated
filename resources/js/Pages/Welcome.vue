<template>
    <Head title="Braun" />
    <div id="home" class="relative flex flex-col items-top min-h-screen font-body w-full h-full mx-auto justify-center align-content-center">
        <div class="flex-col flex mx-28 mt-10">
                <!-- TopBar -->
                <div class="flex sm:flex-row flex-col w-full justify-between items-center">
                    <div class="align-content-center m-5 sm:flex hidden">
                        <h2 class="text-amber-500 text-xl sm:text-4xl font-semibold">Portfólio</h2>
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
                            <p class="text-sm sm:text-xl dark:text-slate-200 text-stone-800 font-light">Desenvolvedor FullStack</p>
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
                                            de páginas com a interface de usuário baseada em UI/UX,
                                            sou autoditata, e busco sempre melhorar o meu desenvolvimento
                                            profissional.
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
                                                <p class="text-amber-500 text-2xl font-bold">React.js</p>
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

                                        <!-- inertiajs -->
                                        <div class="flex flex-row">
                                            <div>
                                                <CheckMark class="fill-amber-500 h-8 w-8"/>
                                            </div>
                                            <div class="text-left">
                                                <p class="text-amber-500 text-2xl font-bold">Inertia.js</p>
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
                        <div class="flex xl:flex-row justify-between mx-auto mb-444 font-light max-w-7xl">
                            <div class="flex flex-col lg:flex-row gap-8 text-center justify-between mx-auto">
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
                        </div>
                    </div>
                </div>
        </div>
        <!-- footer -->
        <footer class="bg-amber-500 text-stone-800 w-full pb-32">
            <div id="site-info" class="xl:container mx-auto px-4 lg:px-6 py-4 grid grid-cols-6 items-center">
                <div id="scroll" class="flex gap-6 my-auto font-bold text-2xl col-span-2">
                    <a href="#about" class="hover:scale-110 duration-300 ease-in-out transform transition hover:text-slate-200">Sobre</a>
                    <a href="#contact" class="hover:scale-110 duration-300 ease-in-out transform transition hover:text-slate-200">Contato</a>
                </div>
                <div class="flex-col flex col-span-2 text-2xl text-center">
                    <p class="font-bold">João Vitor Braun</p>
                    <p>© Braun Design. All rights reserved <br> 2022 </p>
                </div>
                <div id="media-info" class="flex gap-8 my-auto col-span-2 justify-end">
                    <a href="https://github.com/braun07" id="git-hub" class="hover:scale-110 duration-300 ease-in-out transform transition" >
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="h-10 w-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/joao-braun-509490234/" id="linked-in" class="hover:scale-110 duration-300 ease-in-out transform transition">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" class="h-10 w-10"/>
                    </a>
                    <a id="instagram" href="https://www.instagram.com/braundesign_/" class="hover:scale-110 duration-300 ease-in-out transform transition">
                        <svg viewBox="0 0 256 256" class="h-10 w-10">
                            <g>
                                <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" fill="#0A0A08"></path>
                            </g>
                        </svg>
                    </a>
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
