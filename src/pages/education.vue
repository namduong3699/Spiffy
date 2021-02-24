<template>
    <div class="flex justify-center m-12 font-bold">
        <div class="w-8/12 pt-12">
            <div class="text-3xl font-bold">
                Spiffy - Special Incentives for Funding YouTubes
            </div>
            <ul class="mt-8">
                <li class="my-4">
                    <img src="~/assets/images/image 38.png">Article One - The Basics of Spiffy
                </li>
                <li class="my-4">
                    <img src="~/assets/images/image 39.png">Article Two - Youtube Side of the Equation
                </li>
                <li class="my-4">
                    <img src="~/assets/images/image 40.png">Article Three - UNderstanding the columns and the need for them
                </li>
                <li class="my-4">
                    <img src="~/assets/images/image 41.png">Article Four - FAQ's - This answers a lot of questions
                </li>
            </ul>
            <div class="mt-24">
                Spiffy has its own Youtube Channel - with for (4) education videos - designed to get you up to speed.
            </div>
            <div class="flex justify-start mt-8">
                <div v-for="index in 4" :key="index" class="video-item mr-4 px-2 py-1 text-center border-2 border-black">
                    <div>
                        <img src="~/assets/images/Polygon 1.png" alt="video">
                        <img src="~/assets/images/Spiffy.png" alt="video">
                    </div>
                    <span class="text-sm">Video #{{ index }}</span>
                </div>
            </div>
        </div>
        <div class="w-2/12 my-auto">
            <img
                src="~/assets/images/image 37.png"
                class="rounded-full mx-auto mb-8"
                alt="avatar"
                width="150"
            >
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'default',
    };
</script>

<style lang="scss" scoped>
.video-item {
    background-color: #c4c4c4;
}
</style>
