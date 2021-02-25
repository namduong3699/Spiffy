<template>
    <div class="m-12">
        <div class="text-right">
            ...
        </div>
        <div class="flex">
            <div class="w-1/2 uppercase font-bold text-gray text-2xl shadow-2xl rounded-2xl p-4">
                Glass house
            </div>
            <div class="flex items-center py-4 px-12 ml-12 shadow-2xl rounded-2xl text-2xl">
                <img src="~/assets/images/coolicon.png" style="height: 48px"><span class="text-red-bold font-bold ml-2"> 2</span>
            </div>
        </div>
        <div class="my-12 p-6 text-lg rounded-2xl bg-gray-light">
            Glass House is designed for everyone to see - what everyone else is doing - and how you measure up to other.
        </div>
        <div class="flex justify-between">
            <div class="w-4/12 text-lg">
                People in Viral Groups
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center">
                    7,829<span class="text-gray">/87,380</span>
                </div>
            </div>
            <div class="w-3/12 text-lg">
                Percentage of Capacity Filled
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center">
                    3.93%
                </div>
            </div>
            <div class="w-3/12 text-lg">
                Total Account Balance
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center text-blue-bold">
                    $962
                </div>
            </div>
        </div>
        <div class="mt-16 text-lg">
            Column March
            <div class="flex mt-4">
                <div
                    v-for="index in 24"
                    :key="index"
                    class="bg-gray h-12 flex-grow"
                    :class="{ 'bg-orange': index === 1, 'ml-3': index !== 1 }"
                />
            </div>
        </div>
        <div class="mt-16 flex justify-around">
            <div class="flex flex-col justify-center w-4/12 shadow-2xl rounded-2xl p-8">
                <img
                    src="~/assets/images/Ellipse 68.png"
                    class="rounded-full mx-auto mb-8"
                    alt="avatar"
                    style="height: 200px"
                >
                <div class="text-center text-lg">
                    <div class="mb-5">
                        clackacoug
                    </div>
                    <div class="mb-5">
                        B-JW6-RL9-BA2
                    </div>
                    <div class="mb-5">
                        Join Date - Jan 15, 2020
                    </div>
                    <div class="mb-5">
                        Clackamas, Oregon
                    </div>
                    <div class="mb-5">
                        Original Up One - Holly Flax
                    </div>
                    <div class="mb-5">
                        How many Columns Attained - 1
                    </div>
                    <div class="mb-5">
                        Number of Channels Supported - 3
                    </div>
                    <div class="mb-5">
                        Total Career Amount Donated
                    </div>
                    <div>$230</div>
                </div>
            </div>
            <div class="w-5/12 text-lg">
                <div class="text-center">
                    clackacoug’s featured channel
                </div>
                <div class="shadow-2xl rounded-2xl px-12 py-6">
                    <img src="~/assets/images/image 25.png" style="height: 325px" class="mx-auto">
                </div>
                <div class="flex justify-between mt-12 text-center">
                    <div class="w-5/12 shadow-2xl rounded-2xl">
                        <div class="bg-gray-bold text-white rounded-2xl py-1">
                            30 Day Trends
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                30 Day Viral Growth
                            </div>
                            <div class="text-blue-bold">
                                256
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Tokens Earned
                            </div>
                            <div class="text-blue-bold">
                                $890
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Fill % Increase
                            </div>
                            <div class="text-blue-bold">
                                +1.25%
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Page Visitor
                            </div>
                            <div class="text-blue-bold">
                                22
                            </div>
                        </div>
                    </div>
                    <div class="w-5/12 shadow-2xl rounded">
                        <div class="bg-gray-bold text-white rounded-2xl py-1">
                            30 Day Trends
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                30 Day Viral Growth
                            </div>
                            <div class="text-blue-bold">
                                256
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Tokens Earned
                            </div>
                            <div class="text-blue-bold">
                                $890
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Fill % Increase
                            </div>
                            <div class="text-blue-bold">
                                +1.25%
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Page Visitor
                            </div>
                            <div class="text-blue-bold">
                                22
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div v-for="(item, index) in list" :key="index" class="flex items-center my-16 font-bold">
                <div class="w-24">
                    <img :src="require(`~/assets/images/${item.icon}.png`)">
                </div>
                <div class="text-lg">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '~/data/data';

    export default {
        layout: 'user',

        data() {
            return { list };
        },
    };
</script>
