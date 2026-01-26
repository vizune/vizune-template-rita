<template>
    <div class="flex flex-wrap justify-center relative mx-auto h-[500px] w-full overflow-hidden" ref="header">
      <div class="flex justify-center relative w-full">
        <picture>
          <source media="(max-width: 640px)" srcset="/header-xs.webp" />
          <source media="(max-width: 1024px)" srcset="/header-md.webp" />
          <source media="(max-width: 1280px)" srcset="/header-lg.webp" />
          <img 
            src="/header-long.webp"
            role="presentation"
            class="h-[500px] object-cover object-[10%] xl:object-center"
            width="1920"
            height="500"
          />
        </picture>
        <HeadingIntro class="absolute lg:top-[1rem] left-1/2 -translate-x-2/4">
          <p class="text-[5rem] xl:text-[4rem]">
            Vizune
          </p>
        </HeadingIntro>
      </div> 
	</div>
</template>

<style scoped>
svg {
    left: calc(50% + 4px);
    transform: translate(-50%,-50%);
    height: 150px;
    transition: transform .25s ease-in-out;
    transform-origin: center;
}
svg:hover {
  transform: scale(1.1) translate(-45%,-40%);
}
p {
    margin: .25rem 0 0;
    -webkit-animation: glow 1.5s ease-in-out infinite alternate 1s;
    animation: glow 1.5s ease-in-out infinite alternate 1s;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 30px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6;
  }
}
</style>