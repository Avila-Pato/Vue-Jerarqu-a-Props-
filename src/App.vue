<script setup>
import Navbar from './components/NavBarSide.vue';
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <main class="main-content">
        <router-view></router-view>    
    </main>
</template>


<style>
.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>