<template>
    <div class="m-12 relative">
        <div class="flex justify-end mt-8">
            <img
                v-for="item in 3"
                :key="item"
                src="~/assets/images/Ellipse 19.png"
                width="30"
                class="mr-4"
            >
        </div>
        <div class="flex">
            <div class="w-1/2 uppercase font-bold text-gray text-2xl shadow-xl rounded-2xl p-4">
                Glass house
            </div>
            <div class="flex items-center py-4 px-12 ml-12 shadow-xl rounded-2xl text-2xl">
                <img src="~/assets/images/coolicon.png" style="height: 48px"><span class="text-red-bold font-bold ml-2"> {{ randomInt(10) }}</span>
            </div>
        </div>
        <div class="my-12 p-6 text-lg rounded-2xl bg-gray-light">
            Glass House is designed for everyone to see - what everyone else is doing - and how you measure up to other.
        </div>
        <div class="flex justify-between">
            <div class="w-4/12 text-lg">
                People in Viral Groups
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center font-bold">
                    {{ randomInt(7) }},{{ randomInt(829) }}<span class="text-gray">/{{ randomInt(87) }},{{ randomInt(380) }}</span>
                </div>
            </div>
            <div class="w-4/12 text-lg">
                Percentage of Capacity Filled
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center font-bold">
                    3.{{ randomInt(93) }}%
                </div>
            </div>
            <div class="w-3/12 text-lg">
                Total Account Balance
                <div class="py-6 mt-4 text-2xl bg-blue-light rounded-2xl text-center text-blue-bold font-bold">
                    ${{ randomInt(962) }}
                </div>
            </div>
        </div>
        <div class="mt-16 text-lg">
            Column March
            <div class="flex mt-4">
                <div
                    v-for="index in 24"
                    :key="index"
                    class="bg-gray flex-grow"
                    :class="{ 'bg-orange': index === 1, 'ml-3': index !== 1 }"
                    style="height: 60px"
                />
            </div>
        </div>
        <div class="mt-16 flex justify-around">
            <div class="w-5/12 flex flex-col justify-center w-4/12 shadow-2xl rounded-2xl p-8">
                <nuxt-link to="community">
                    <img
                        :src="hasData ? `/_nuxt/src/assets/images/avatar/${data.screenName.length % 4}.png` : '/_nuxt/src/assets/images/Ellipse 68.png'"
                        class="rounded-full mx-auto mb-8"
                        alt="avatar"
                        style="height: 200px"
                    >
                </nuxt-link>
                <div class="text-center text-lg">
                    <div class="mb-5">
                        {{ data.screenName || 'clackacoug' }}
                    </div>
                    <div class="mb-5">
                        {{ data.sponsorCode || 'B-JW6-RL9-BA2' }}
                    </div>
                    <div class="mb-5">
                        Join Date - <span v-if="hasData">{{ data.joinedAt | formatDate }}</span><span v-else>Jan 15, 2020</span>
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
                    <div>
                        ${{ randomInt(230) }}
                    </div>
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
                    <div class="w-5/12 shadow-2xl rounded-2xl py-2">
                        <div class="bg-gray-bold text-white rounded-2xl py-1">
                            30 Day Trends
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                30 Day Viral Growth
                            </div>
                            <div class="text-blue-bold font-bold">
                                {{ randomInt(256) }}
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Tokens Earned
                            </div>
                            <div class="text-blue-bold font-bold">
                                ${{ randomInt(890) }}
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Fill % Increase
                            </div>
                            <div class="text-blue-bold font-bold">
                                +1.{{ randomInt(25) }}%
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Page Visitor
                            </div>
                            <div class="text-blue-bold font-bold">
                                {{ randomInt(22) }}
                            </div>
                        </div>
                    </div>
                    <div class="w-5/12 shadow-2xl rounded-2xl py-2">
                        <div class="bg-gray-bold text-white rounded-2xl py-1">
                            30 Day Trends
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                30 Day Viral Growth
                            </div>
                            <div class="text-blue-bold font-bold">
                                {{ randomInt(256) }}
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Tokens Earned
                            </div>
                            <div class="text-blue-bold font-bold">
                                ${{ randomInt(890) }}
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Fill % Increase
                            </div>
                            <div class="text-blue-bold font-bold">
                                +1.{{ randomInt(25) }}%
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="text-gray">
                                Page Visitor
                            </div>
                            <div class="text-blue-bold font-bold">
                                {{ randomInt(22) }}
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

        <img src="~/assets/images/image 34.png" alt="qr" class="absolute bottom-0 right-0">
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { list } from '~/data/data';

    export default {
        layout: 'user',

        data() {
            return { list };
        },

        computed: {
            ...mapState('user', ['data']),

            hasData() {
                return this.data.email !== null;
            },
        },

        methods: {
            randomInt(value) {
                return this.hasData ? Math.floor(Math.random() * value) : value;
            },
        },
    };
</script>
