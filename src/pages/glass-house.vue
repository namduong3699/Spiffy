<template>
    <div class="m-12">
        <div class="text-right">
            ...
        </div>
        <div class="flex">
            <div class="w-1/2 uppercase font-bold text-gray text-5xl shadow-lg rounded-lg p-4">
                Glass house
            </div>
            <div class="py-4 px-12 ml-12 shadow-lg rounded-lg text-5xl">
                <i class="far fa-envelope text-gray-bold" /><span class="text-red-bold font-bold"> 2</span>
            </div>
        </div>
        <div class="my-12 p-6 text-2xl rounded-lg bg-gray-light">
            Glass House is designed for everyone to see - what everyone else is doing - and how you measure up to other.
        </div>
        <div class="flex justify-between">
            <div class="w-4/12">
                People in Viral Groups
                <div class="py-6 mt-4 text-3xl bg-blue-light rounded-lg text-center">
                    7,829<span class="text-gray">/87,380</span>
                </div>
            </div>
            <div class="w-3/12">
                Percentage of Capacity Filled
                <div class="py-6 mt-4 text-3xl bg-blue-light rounded-lg text-center">
                    3.93%
                </div>
            </div>
            <div class="w-3/12">
                Total Account Balance
                <div class="py-6 mt-4 text-3xl bg-blue-light rounded-lg text-center text-blue-bold">
                    $962
                </div>
            </div>
        </div>
        <div class="mt-16">
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
            <div class="w-4/12 shadow-lg rounded-lg p-8">
                <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    class="rounded-full mx-auto mb-8"
                    alt="avatar"
                    width="150"
                >
                <div class="text-center">
                    <div class="mb-2">
                        clackacoug
                    </div>
                    <div class="mb-2">
                        B-JW6-RL9-BA2
                    </div>
                    <div class="mb-2">
                        Join Date - Jan 15, 2020
                    </div>
                    <div class="mb-2">
                        Clackamas, Oregon
                    </div>
                    <div class="mb-2">
                        Original Up One - Holly Flax
                    </div>
                    <div class="mb-2">
                        How many Columns Attained - 1
                    </div>
                    <div class="mb-2">
                        Number of Channels Supported - 3
                    </div>
                    <div class="mb-2">
                        Total Career Amount Donated
                    </div>
                    <div>$230</div>
                </div>
            </div>
            <div class="w-5/12">
                <div class="shadow-lg rounded-lg p-12">
                    <script src="http://www.gmodules.com/ig/ifr?url=http://www.google.com/ig/modules/youtube.xml&amp;up_channel=BlvckvinesOfficial&amp;synd=open&amp;w=320&amp;h=390&amp;title=&amp;border=%23ffffff%7C3px%2C1px+solid+%23999999&amp;output=js" />
                </div>
                <div class="flex justify-between mt-12 text-center">
                    <div class="w-5/12 shadow-lg rounded">
                        <div class="bg-gray-bold text-white rounded-lg py-1">
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
                    <div class="w-5/12 shadow-lg rounded">
                        <div class="bg-gray-bold text-white rounded-lg py-1">
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
            <div v-for="(item, index) in list" :key="index" class="my-16 font-bold text-xl">
                <i :class="item.icon" class="mr-3 text-4xl" />{{ item.title }}
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
