<script setup>

</script>

<template>
    <div class="header pt-1 pb-6">
        <div class="logo text-white text-center text-7xl font-extralight uppercase tracking-widest mt-3">Vizune</div>
        <div class="header-image">
            <img src="header.jpg" class="h-full w-full">
        </div>
    </div>
</template>

<style scoped>
.header {
    position: relative;
    height: 700px;
}
.header:before {
    content: '';
    position: absolute;
    display: block;
    width: 670px;
    height: 580px;
    background: linear-gradient(-23deg, rgb(80, 8, 255) 75%, rgb(233, 151, 255) 50%);
    filter: blur(72px);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
}
.header-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border-top: 10px solid black;
    border-bottom: 10px solid black;
    height: 500px;
}

.header-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}
</style>