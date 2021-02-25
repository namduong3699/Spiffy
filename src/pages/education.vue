<template>
    <div>
        <div class="flex justify-end">
            <div class="flex justify-between items-center flex-col mr-8">
                <div class="flex justify-end mt-8 mb-4">
                    <img
                        v-for="item in 3"
                        :key="item"
                        src="~/assets/images/Ellipse 19.png"
                        width="30"
                        class="mr-4"
                    >
                </div>
                <div class="text-lg font-bold">
                    Education Page
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center m-12 font-bold">
            <div class="pt-12">
                <div class="text-xl font-bold">
                    Spiffy - Special Incentives for Funding YouTubes
                </div>
                <ul class="mt-8">
                    <li class="flex items-center my-4">
                        <img src="~/assets/images/image 38.png" class="mr-8" style="height: 30px">
                        <div>
                            Article One - The Basics of Spiffy
                        </div>
                    </li>
                    <li class="flex items-center my-4">
                        <img src="~/assets/images/image 39.png" class="mr-8" style="height: 30px">
                        <div>
                            Article Two - Youtube Side of the Equation
                        </div>
                    </li>
                    <li class="flex items-center my-4">
                        <img src="~/assets/images/image 40.png" class="mr-8" style="height: 30px">
                        <div>
                            Article Three - UNderstanding the columns and the need for them
                        </div>
                    </li>
                    <li class="flex items-center my-4">
                        <img src="~/assets/images/image 41.png" class="mr-8" style="height: 30px">
                        <div>
                            Article Four - FAQ's - This answers a lot of questions
                        </div>
                    </li>
                </ul>
                <div class="mt-24">
                    Spiffy has its own Youtube Channel - with for (4) education videos - designed to get you up to speed.
                </div>
                <div class="flex justify-start mt-8">
                    <div v-for="index in 4" :key="index" class="video-item mr-6 px-4 py-3 text-center border-2 border-black">
                        <a href="#">
                            <div class="flex items-center">
                                <img
                                    src="~/assets/images/Polygon 1.png"
                                    alt="video"
                                    style="height: 26px"
                                    class="mr-1"
                                >
                                <img src="~/assets/images/Spiffy.png" alt="video" style="height: 35px">
                            </div>
                            <span>Video #{{ index }}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-3/12 my-auto">
                <img
                    src="~/assets/images/image 37.png"
                    class="mx-auto"
                    alt="avatar"
                    style="height: 280px"
                >
            </div>
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
