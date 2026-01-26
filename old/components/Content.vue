<template>
    <main class="Content container mx-auto pb-[3.5rem]">
        <div class="bg-white p-1 mx-4">
            <div class="Corners-top">
                <NuxtImg 
                    format="webp" 
                    width="149" 
                    height="150" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
                <NuxtImg 
                    format="webp" 
                    width="150"
                    height="149" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
            </div>
            <div class="border-4 border-midnight flex flex-col justify-between py-[4rem] md:py-6 md:pb-[8rem]">
                <div class="px-4 md:px-[4rem] xl:px-[8rem] pt-6 pb-[4rem] grow-1">
                    <slot />
                </div> 
            </div>
            <div class="Corners-bottom">
                <NuxtImg 
                    format="webp" 
                    width="149" 
                    height="150" 
                    src="/floral-corner.png" 
                    role="presentation" 
                />
                <NuxtImg 
                    format="webp"
                    width="150"
                    height="149"
                    src="/floral-corner.png"
                    role="presentation" 
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
$corner-height: 150px;
$corner-width: 149px;
$corner-offset: 1px;

.Corners {
    &-top {
        position: relative;
        width: 100%;

        > *:first-child {
            position: absolute;
            top: $corner-offset;
            left: $corner-offset;
            height: 150px;
            width: 149px;
        }

        > *:last-child {
            content: '';
            position: absolute;
            top: $corner-offset;
            right: $corner-offset;
            height: 149px;
            width: 150px;
            transform: rotate(90deg);
        }
    }

    &-bottom {
        position: relative;
        width: 100%;

        > *:first-child {
            position: absolute;
            bottom: $corner-offset;
            left: $corner-offset;
            height: 149px;
            width: 150px;
            transform: rotate(-90deg);
        }

        > *:last-child {
            position: absolute;
            bottom: $corner-offset;
            right: $corner-offset;
            height: 149px;
            width: 150px;
            transform: rotate(180deg);
        }
    }
}
</style>