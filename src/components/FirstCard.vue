<script setup>
import {useRouter} from "vue-router"

const router = useRouter()

const goAllGaz = ()=>{
    router.push({name: "/show"})
}
</script>

<template>
    <!-- <div class="flex items-center justify-around mb-5"> -->
    <!-- <div class="w-[75%] mx-auto bg-white p-3 rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
            <div @click="goAllGaz" class="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure class="h-[70%]">
                    <img class="h-full" src="https://zener.tg/wp-content/uploads/2022/03/Bouteilles-3KG-et-Foyer-e1647536316549.png" alt="Shoes" />
                </figure>
                <div class="card-body flex">
                    <h2 class="card-normal">Bouteille de gaz</h2>
                    <p class="text-3xl font-black">3 kg</p>
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure class="h-[70%]">
                    <img class="h-full" src="https://assiyeyeme.tg/boutique/1284-large_default/sodigaz-consigne-b6.jpg" />
                </figure>
                <div class="card-body flex">
                    <h2 class="card-normal">Bouteille de gaz</h2>
                    <p class="text-3xl font-black">6 kg</p>
                </div>
            </div>
            <div class="card card-compact w-80 bg-base-100 shadow-2xl">
                <figure class="h-[70%]">
                    <img class="h-full" src="https://agrishop.ne/storage/customers/03-removebg-preview-1-800x800.png" />
                </figure>
                <div class="card-body flex">
                    <h2 class="card-normal">Bouteille de gaz</h2>
                    <p class="text-3xl font-black">12.5 kg</p>
                </div>
            </div>
        </div>
    </div> -->
    <div class="w-[80%] mx-auto bg-white p-3 rounded-lg">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
        <div @click="goAllGaz" class="card card-compact max-w-xs sm:max-w-sm md:max-w-md bg-base-100 shadow-2xl">
            <figure class="h-[70%]">
                <img class="h-full w-full object-cover" src="https://zener.tg/wp-content/uploads/2022/03/Bouteilles-3KG-et-Foyer-e1647536316549.png" alt="Bouteille de gaz 3 kg" />
            </figure>
            <div class="card-body flex">
                <h2 class="card-normal">Bouteille de gaz</h2>
                <p class="text-3xl font-black">3 kg</p>
            </div>
        </div>
        <div @click="goAllGaz" class="card card-compact max-w-xs sm:max-w-sm md:max-w-md bg-base-100 shadow-2xl">
            <figure class="h-[70%]">
                <img class="h-full w-full object-cover" src="https://zener.tg/wp-content/uploads/2022/03/Bouteilles-3KG-et-Foyer-e1647536316549.png" alt="Bouteille de gaz 3 kg" />
            </figure>
            <div class="card-body flex">
                <h2 class="card-normal">Bouteille de gaz</h2>
                <p class="text-3xl font-black">3 kg</p>
            </div>
        </div>
        <div @click="goAllGaz" class="card card-compact max-w-xs sm:max-w-sm md:max-w-md bg-base-100 shadow-2xl">
            <figure class="h-[70%]">
                <img class="h-full w-full object-cover" src="https://zener.tg/wp-content/uploads/2022/03/Bouteilles-3KG-et-Foyer-e1647536316549.png" alt="Bouteille de gaz 3 kg" />
            </figure>
            <div class="card-body flex">
                <h2 class="card-normal">Bouteille de gaz</h2>
                <p class="text-3xl font-black">3 kg</p>
            </div>
        </div>
        <!-- Répétez pour les autres cartes avec les modifications appropriées -->
    </div>
</div>
</template>