<script setup>
import Header from '../components/Header.vue';
</script>

<template>
    <div>
        <Header/>
        <!-- <div class="min-h-52 bg-slate-100 w-[80%] mx-auto py-5 px-2">
            <div class="flex justify-evenly">
                <select class="select select-primary w-full max-w-xs">
                    <option disabled selected>Choisi ta ville</option>
                    <option>Pointe - Noire</option>
                    <option>Brazzaville</option>
                    <option>Dolisie</option>
                    <option>Nkayi</option>
                    <option>...</option>
                </select>
                <select class="select  w-full max-w-xs btn-disabled">
                    <option disabled selected>Choisi le quartier</option>
                    <option>Pointe - Noire</option>
                    <option>Brazzaville</option>
                    <option>Dolisie</option>
                    <option>Nkayi</option>
                    <option>...</option>
                </select>
            </div>
            <div class="my-10">
                <h1 class="text-xl font-bold text-blue-900">Liste des gaz disponibles</h1>
            </div>
            <dialog id="my_modal" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <iframe src="https://www.youtube.com/watch?v=QFHOX3-VM4s" frameborder="0"></iframe>
                    <div class="modal-action">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
            <div class="grid grid-cols-3">
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
                <div class="card w-72 h-96 bg-base-100 shadow-xl mx-auto mb-5">
                    <figure class="h-[70%]">
                        <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                        <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div class="p-2 flex flex-col gap-2">
                        <p>Disponible chez: <b>Avocadro Gazo</b></p>
                        <p>Ville: <b>Brazzaville</b></p>
                        <p>Quartier: <b>Mfilou</b></p>
                        <p>Au prix de: <b>5500</b> cfa</p>
                        <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="min-h-52 bg-slate-100 w-full mx-auto py-5 px-2">
    <div class="flex flex-col sm:flex-row justify-evenly gap-4">
        <select class="select select-primary w-full max-w-xs">
            <option disabled selected>Choisi ta ville</option>
            <option>Pointe - Noire</option>
            <option>Brazzaville</option>
            <option>Dolisie</option>
            <option>Nkayi</option>
            <option>...</option>
        </select>
        <select class="select w-full max-w-xs btn-disabled">
            <option disabled selected>Choisi le quartier</option>
            <option>Pointe - Noire</option>
            <option>Brazzaville</option>
            <option>Dolisie</option>
            <option>Nkayi</option>
            <option>...</option>
        </select>
    </div>
    <div class="my-10">
        <h1 class="text-xl font-bold text-blue-900">Liste des gaz disponibles</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <div class="card w-full max-w-sm bg-base-100 shadow-xl mx-auto mb-5">
            <figure class="h-[70%]">
                <p class="absolute top-0 left-0 p-2 bg-slate-200 rounded-full m-2 text-green-900 text-sm font-bold">Proche de vous</p>
                <img class="bg-cover h-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div class="p-2 flex flex-col gap-2">
                <p>Disponible chez: <b>Avocadro Gazo</b></p>
                <p>Ville: <b>Brazzaville</b></p>
                <p>Quartier: <b>Mfilou</b></p>
                <p>Au prix de: <b>5500</b> cfa</p>
                <button onclick="my_modal.showModal()" class="py-2 bg-blue-800 rounded-lg text-white font-semibold hover:bg-blue-900">En savoir plus</button>
            </div>
        </div>
        <!-- Répétez pour les autres cartes avec les modifications appropriées -->
    </div>
</div>
    </div>
</template>