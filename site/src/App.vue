<template>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
    //-->
    
    <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">

      <div class="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

          <div class="pl-4 md:pl-0">
              <a class="flex items-center text-primary text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#">
                  <!-- Placeholder -->
                  <svg class="fill-current h-6 inline-block text-accent-1 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                    <path d="M544 32h-16.36C513.04 12.68 490.09 0 464 0c-44.18 0-80 35.82-80 80v20.98L12.09 393.57A30.216 30.216 0 0 0 0 417.74c0 22.46 23.64 37.07 43.73 27.03L165.27 384h96.49l44.41 120.1c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38L312.94 384H352c1.91 0 3.76-.23 5.66-.29l44.51 120.38c2.27 6.23 9.15 9.44 15.38 7.17l22.55-8.21c6.23-2.27 9.44-9.15 7.17-15.38l-41.24-111.53C485.74 352.8 544 279.26 544 192v-80l96-16c0-35.35-42.98-64-96-64zm-80 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/>
                  </svg>
                  Gyrfalcon
              </a>
          </div>

          <div class="pr-0 flex justify-end">

              <div class="flex relative inline-block float-right">

                  <div class="relative text-sm">

                      <button id="userButton" class="flex items-center mr-3 shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded">
                          Menu
                          <svg class="pl-2 h-2 fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                              <g>
                                  <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                              </g>
                          </svg>
                      </button>

                      <div id="userMenu" class="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                          <ul class="list-reset">
                              <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                              <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
                              <li>
                                  <hr class="border-t mx-2 border-gray-400">
                              </li>
                              <li><a href="#" class="px-4 py-2 block text-orange-600 font-bold hover:bg-orange-600 hover:text-white no-underline hover:no-underline">Logout</a></li>
                          </ul>
                      </div>
                  </div>

              </div>

          </div>

      </div>
  </nav>
  <!--Container-->
  <div class="container w-full flex flex-row-reverse flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">

      <!--Section container-->
      <section class="w-full lg:w-4/5">

          <router-view />

      </section>
      <!--/Section container-->
      
      <div class="w-full lg:w-1/5 px-0 lg:px-6 text-xl text-gray-800 leading-normal">
          <p class="text-base font-bold py-2 lg:pb-6 text-gray-700 hidden lg:block">Menu</p>
          <div class="w-full sticky inset-0 max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden mt-0 my-0 bg-white shadow-inner lg:shadow-none lg:bg-transparent z-20" style="top:6em;" id="menu-content">
              <ul class="list-reset py-2 md:py-0 flex flex-row lg:flex-col">
                  <li class="flex-grow py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-transparent font-bold border-orange-600">
                      <a href='#' class="flex flex-col lg:flex-row place-items-center block pl-4 align-middle text-secondary no-underline hover:text-orange-600">
                        <svg class="fill-current h-4 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>  
                        </svg>
                        <span class="pb-1 md:pb-0 text-sm">Phone</span>
                      </a>
                  </li>
                  <li class="flex-grow py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-transparent">
                      <a href='#' class="flex flex-col lg:flex-row place-items-center block pl-4 align-middle text-secondary no-underline hover:text-orange-600">
                        <svg class="fill-current h-4 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                          <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                          <path d="M496 128a144 144 0 0 0-119.74 224H263.74A144 144 0 1 0 144 416h352a144 144 0 0 0 0-288zM64 272a80 80 0 1 1 80 80 80 80 0 0 1-80-80zm432 80a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/>
                        </svg>
                        <span class="pb-1 md:pb-0 text-sm">Voicemail</span>
                      </a>
                  </li>
                  <li class="flex-grow py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-transparent">
                      <a href='#' class="flex flex-col lg:flex-row place-items-center block pl-4 align-middle text-secondary no-underline hover:text-orange-600">
                        <svg class="fill-current h-4 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                          <path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"/>
                          
                        </svg>
                        <span class="pb-1 md:pb-0 text-sm">Messages</span>
                      </a>
                  </li>
                  <li class="flex-grow py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-transparent">
                      <a href='#' class=" flex flex-col lg:flex-row place-items-center block pl-4 align-middle text-secondary no-underline hover:text-orange-600">
                        <svg class="fill-current h-4 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                          <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>  
                        </svg>
                          <span class="pb-1 md:pb-0 text-sm">Settings</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>

    </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
