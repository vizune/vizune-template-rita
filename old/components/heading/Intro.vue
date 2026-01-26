<template>
    <div class="flex items-center justify-center grow">
      <div class="h-[375px]">
        <span class="font-forum uppercase text-4xl block text-center tracking-wider leading-[0] text-white">
          <img
            src="/arch.svg"
            width="300"
            height="214"
            role="presentation"
            class="mx-auto"
          />
          <slot />
          <img
            src="/arch.svg"
            width="300"
            height="214"
            role="presentation"
            class="mx-auto rotate-180 origin-center -translate-x-[6px]"
          />
        </span>
      </div>
    </div>
</template>

<style scoped>
span {
    opacity: 0;
    -webkit-animation: fade 2s ease-in-out 1s forwards;
    animation: fade 2s ease-in-out 1s forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>