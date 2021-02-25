<template>
    <div class="m-12 w-9/12 mx-auto font-bold">
        <div class="flex justify-between items-center">
            <div class="flex justify-center items-center">
                <div class="text-center">
                    <div class="flex items-center">
                        <img
                            src="~/assets/images/Polygon 1.png"
                            alt="logo"
                            style="height: 60px"
                            class="mr-2"
                        >
                        <img src="~/assets/images/Spiffy-1.png" alt="logo" style="height: 87px">
                    </div>
                    <div class="text-xl">
                        clackacoug
                    </div>
                    <div class="text-xl">
                        B-JW6-RL9-BA2
                    </div>
                </div>
                <nuxt-link to="/glass-house">
                    <img
                        src="~/assets/images/Ellipse 68.png"
                        class="rounded-full mx-auto mb-8 ml-6"
                        alt="avatar"
                        style="height: 250px"
                    >
                </nuxt-link>
            </div>
            <div class="flex items-center">
                <img
                    src="~/assets/images/image 33.png"
                    alt="logo"
                    style="height: 160px"
                >
                <img
                    src="~/assets/images/image 31.png"
                    class="ml-4 w-40 h-40"
                    alt="logo"
                    style="height: 160px"
                >
            </div>
        </div>

        <div>
            <div class="mt-48 uppercase text-xl text-center">
                Current month - combined viral growth stastics - one column
            </div>
            <div class="mt-10">
                <div class="capitalize text-gray-700 text-lg pl-16">
                    Total Possible Viral Group People
                </div>
                <div class="flex justify-between items-center py-4 px-16 rounded-lg shadow-lg text-lg">
                    <div v-for="index in 8" :key="index" class="flex flex-col justify-between">
                        <div class="flex items-center">
                            <div class="text-xs font-normal mr-1">
                                {{ index }}
                            </div>
                            <img
                                src="~/assets/images/Polygon 5.png"
                                alt="logo"
                                style="height: 14px"
                            >
                        </div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-center">
                        <div>Total</div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <div class="capitalize text-gray-700 text-lg pl-16">
                    Your Actual Viral Group People
                </div>
                <div class="flex justify-between items-center py-4 px-16 rounded-lg shadow-lg text-lg">
                    <div v-for="index in 8" :key="index" class="flex flex-col justify-between">
                        <div class="flex items-center">
                            <div class="text-xs font-normal mr-1">
                                {{ index }}
                            </div>
                            <img
                                src="~/assets/images/Polygon 5.png"
                                alt="logo"
                                style="height: 14px"
                            >
                        </div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-center">
                        <div>Total</div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <div class="capitalize text-gray-700 text-lg pl-16">
                    Percentage of each level filled
                </div>
                <div class="flex justify-between items-center py-4 px-16 rounded-lg shadow-lg text-lg">
                    <div v-for="index in 8" :key="index" class="flex flex-col justify-between">
                        <div class="flex items-center">
                            <div class="text-xs font-normal mr-1">
                                {{ index }}
                            </div>
                            <img
                                src="~/assets/images/Polygon 5.png"
                                alt="logo"
                                style="height: 14px"
                            >
                        </div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-center">
                        <div>Total</div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <div class="capitalize text-gray-700 text-lg pl-16">
                    Token Rewards per each level - listed in actual value of your local denomination
                </div>
                <div class="flex justify-between items-center py-4 px-16 rounded-lg shadow-lg text-lg">
                    <div v-for="index in 8" :key="index" class="flex flex-col justify-between">
                        <div class="flex items-center">
                            <div class="text-xs font-normal mr-1">
                                {{ index }}
                            </div>
                            <img
                                src="~/assets/images/Polygon 5.png"
                                alt="logo"
                                style="height: 14px"
                            >
                        </div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                    <div class="flex flex-col justify-between items-center">
                        <div>Total</div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '~/data/data';

    export default {
        layout: 'guest',

        data() {
            return { list };
        },
    };
</script>
