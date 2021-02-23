<template>
    <div class="flex justify-center m-12 font-bold">
        <div class="w-8/12 pt-12">
            <div class="text-3xl font-bold">
                Spiffy - Special Incentives for Funding YouTubes
            </div>
            <ul class="mt-8">
                <li class="my-4">
                    <i class="far fa-edit mr-6 text-xl" />Article One - The Basics of Spiffy
                </li>
                <li class="my-4">
                    <i class="fas fa-paperclip mr-6 text-xl" />Article Two - Youtube Side of the Equation
                </li>
                <li class="my-4">
                    <i class="fas fa-university mr-6 text-xl" />Article Three - UNderstanding the columns and the need for them
                </li>
                <li class="my-4">
                    <i class="fas fa-list-ul mr-6 text-xl" />Article Four - FAQ's - This answers a lot of questions
                </li>
            </ul>
            <div class="mt-24">
                Spiffy has its own Youtube Channel - with for (4) education videos - designed to get you up to speed.
            </div>
            <div class="flex justify-start mt-8">
                <div v-for="index in 4" :key="index" class="video-item mr-4 px-2 py-1 text-center border-2 border-black">
                    <img src="~/assets/images/icon/video.png" alt="video">
                    <span class="text-sm">Video #{{ index }}</span>
                </div>
            </div>
        </div>
        <div class="w-2/12 my-auto">
            <img
                src="https://www.w3schools.com/howto/img_avatar.png"
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
