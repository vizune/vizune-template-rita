<script setup>

</script>

<template>
    <div class="Hero h-[43.75rem] relative pt-1 pb-6">
        <div class="Logo text-center mt-2">
            <a href="/" class="text-white hover:text-black font-extralight text-6xl uppercase tracking-widest">Vizune</a>
        </div>
        <div class="absolute top-2/4 z-10 translate-y-[-50%] border-black border-t-10 border-b-10">
            <img src="header.jpg" class="h-[32.5rem] h-full w-full object-cover object-center">
        </div>
    </div>
</template>

<style scoped>
.Hero:before {
    content: '';
    width: 750px;
    height: 620px;
    position: absolute;
    display: block;
    left: 50%;
    border-radius: 50%;
    background: linear-gradient(-23deg, rgb(80, 8, 255) 75%, rgb(233, 151, 255) 50%);
    filter: blur(70px);
    animation: gradient 3.75s linear infinite 1s;
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
.Logo {
    transition: transform .4s ease-in-out, color .25s ease .4s;
}
.Logo:hover {
    transform: scale(1.05) translateY(-2px);
}
</style>