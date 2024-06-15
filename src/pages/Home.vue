<script setup>
import HeaderVue from "../components/Header.vue";
import FirstCard from "../components/FirstCard.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="w-[100%] min-h-[100vh]">
        <HeaderVue/>
        <h1 class="text-5xl font-semibold my-10 text-center">Trouver facilement ce que vous recherchez</h1>
        <FirstCard/>
        <Footer/>
    </div>
</template>