<template>
    <div class="m-12 w-9/12 mx-auto font-bold">
        <div class="flex justify-between">
            <div class="flex justify-center items-center">
                <div class="text-center">
                    <img
                        src="~/assets/images/logo/spiffy-white.png"
                        class="mb-4 w-full"
                        alt="logo"
                    >
                    <div class="text-3xl">
                        clackacoug
                    </div>
                    <div class="text-3xl">
                        B-JW6-RL9-BA2
                    </div>
                </div>
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    class="rounded-full mx-auto mb-8 ml-6"
                    alt="avatar"
                    width="200"
                >
            </div>
            <div class="flex items-center">
                <img
                    src="~/assets/images/qr/1.png"
                    alt="logo"
                    class="w-40 h-40"
                >
                <img
                    src="~/assets/images/qr/2.png"
                    class="ml-4 w-40 h-40"
                    alt="logo"
                >
            </div>
        </div>

        <div>
            <div class="mt-48 uppercase text-3xl text-center">
                Current month - combined viral growth stastics - one column
            </div>
            <div v-for="index in 4" :key="index" class="mt-10">
                <div class="capitalize text-gray-700 text-lg">
                    Total possible viral group people
                </div>
                <div class="flex justify-around p-4 rounded-lg shadow-lg text-lg">
                    <div v-for="item in 8" :key="item" class="flex flex-col">
                        <div class="flex">
                            <div class="text-xs font-normal mr-1">
                                {{ index }}
                            </div>
                            <img
                                src="~/assets/images/icon/spiffy.png"
                                alt="logo"
                                height="5"
                                width="10"
                            >
                        </div>
                        <div class="mt-3">
                            {{ Math.floor(Math.random()*100) }}
                        </div>
                    </div>
                    <div class="flex flex-col">
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
