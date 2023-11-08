<script setup>
import Mandala from './Mandala.vue';
</script>

<template>
    <div class="Header h-[43.75rem] relative pt-1 pb-6">
        <div class="text-center mt-2">
            <span class="text-white font-extralight text-6xl uppercase tracking-widest">Vizune</span>
                <div style="margin-top: -20rem; width: 1900px; position: absolute; left: 50%; transform: translateX(-50%);">
                    <Mandala />
                </div>
        </div>
        <div class="absolute top-2/4 z-10 translate-y-[-50%] border-black border-t-10 border-b-10">
            <img src="header.jpg" class="h-[32.5rem] w-full object-cover object-center">
        </div>
    </div>
</template>

<style scoped>
.Header:before {
    content: '';
    width: 750px;
    height: 620px;
    position: absolute;
    display: block;
    left: 50%;
    border-radius: 50%;
    background: linear-gradient(-23deg, rgb(80, 8, 255) 75%, rgb(233, 151, 255) 50%);
    filter: blur(70px);
    animation: gradient 3s linear infinite 1s;
    pointer-events: none;
}
@keyframes gradient {
	0% {
		transform: translateX(-50%) scale(0.85);
	}
	50% {
		transform: translateX(-50%) scale(1);
	}
	100% {
		transform: translateX(-50%) scale(.85);
	}
}
</style>