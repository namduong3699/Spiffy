<template>
    <div>
        <div class="flex">
            <div class="w-1/6 bg-gray-bold" />
            <div class="w-5/6 flex flex-col md:flex-row justify-between py-16 bg-gray-bold text-white">
                <div class="w-full md:w-1/2 pr-24">
                    <div class="flex items-center mb-4">
                        <img
                            src="~/assets/images/Polygon 1.png"
                            alt="logo"
                            style="height: 58px"
                            class="mr-2"
                        >
                        <img src="~/assets/images/Spiffy-white.png" alt="logo" style="height: 67px">
                    </div>
                    <p class="mb-4">
                        Disclaimer #1 - Spiffy is a social experiment. <span class="text-gold">The objective is to increase the percentage of financial donations to YouTube Channels</span> that bring excellent entertainment value - but are not compensated in a sustainable amount according to traditional values. The theory is - if you include the public in the financial benefit of the donation process - the number of donations will increase exponentially - thereby increasing the take by the channels as a whole.
                    </p>
                    <p class="mb-4">
                        Disclaimer #2 - Spiffy is not a substitution for a job or education. It is not a retirement account. Spiffy is a $5 monthly donation to a YouTube Channel. If you cannot afford $5 a month - you should not participate - <span class="text-gold">there is no guarantee of reward</span> - play with the intention of helping others - be grateful if you are the recipiant of a financial reward as well.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="font-bold text-2xl">
                        Spiffy Essentials
                    </div>
                    <ul class="font-bold pl-4 text-lg">
                        <li class="p-2">
                            <nuxt-link to="/">
                                Understanding Youtube
                            </nuxt-link>
                        </li>
                        <li class="p-2">
                            <nuxt-link to="/">
                                The Love You Take - is Equal to the Love you Make
                            </nuxt-link>
                        </li>
                        <li class="p-2">
                            <nuxt-link to="/">
                                The Tree of Life
                            </nuxt-link>
                        </li>
                        <li class="p-2">
                            <nuxt-link to="/">
                                The Recipe for being Happy
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="w-1/6" />
            <div class="w-5/6 flex flex-between items-center h-24">
                <div class="w-1/2">
                    <el-dropdown class="pr-6" @command="changeLang">
                        <span class="el-dropdown-link">
                            {{ getLangLabel }}<i class="el-icon-arrow-down el-icon--right font-bold pl-2" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                v-for="item in langs"
                                :key="item.value"
                                :command="item"
                            >
                                <span class="text-lg">{{ item.label }}</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <i class="fab fa-twitter bg-twitter text-white rounded-full p-2 text-xs mx-2" />
                    <i class="fab fa-facebook-f bg-facebook text-white rounded-full p-2 px-3 text-xs mx-2" />
                    <i class="fab fa-youtube bg-youtube text-white rounded-full p-2 text-xs mx-2" />
                    <i class="fab fa-linkedin-in bg-linkedin text-white rounded-full p-2 text-xs mx-2" />
                </div>
                <div class="w-1/2 text-right pr-8 text-lg">
                    <span>Power by - </span>Corsource Technology Group LLC.
                    <img
                        src="~/assets/images/image-19.png"
                        alt="corsource"
                        style="height: 51px"
                        class="inline ml-2"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _findIndex from 'lodash/findIndex';

    export default {
        data() {
            return {
                lang: 'US',
                langs: [
                    {
                        value: 'UK',
                        label: 'English (UK)',
                    },
                    {
                        value: 'US',
                        label: 'English (US)',
                    },
                ],
            };
        },

        computed: {
            getLangLabel() {
                const index = _findIndex(this.langs, lang => lang.value === this.lang);

                return this.langs[index].label;
            },
        },

        methods: {
            changeLang(lang) {
                this.lang = lang.value;
            },
        },
    };
</script>

<style lang="scss" scoped>
.bg-twitter {
    background-color: #55acee;
}
.bg-facebook {
    background-color: #3b5998;
}
.bg-youtube {
    background-color: #f02201;
}
.bg-linkedin {
    background-color: #2f78b5;
}
</style>
