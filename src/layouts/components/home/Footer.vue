<template>
    <div class="bg-black">
        <div class="flex flex-col w-10/12 mx-auto md:flex-row justify-between py-16 text-white">
            <div class="flex flex-col justify-between w-full md:w-1/2">
                <div class="flex items-center">
                    <img src="~/assets/images/Polygon 1-1.png" style="height: 73px" class="mr-2">
                    <img src="~/assets/images/Spiffy-white.png" style="height: 120px">
                </div>
                <ul class="pl-6">
                    <li class="p-1">
                        Spiffy, Inc.
                    </li>
                    <li class="p-1">
                        Lake Oswego, Oregon
                    </li>
                    <li class="p-1">
                        Private Corporation
                    </li>
                    <li class="p-1">
                        Media Contact:
                    </li>
                    <li class="p-1">
                        CEO’s Phone Number:
                    </li>
                </ul>
            </div>
            <div class="w-full md:w-1/2">
                <div class="font-bold text-xl">
                    What to do Next
                </div>
                <ul class="font-bold pl-4">
                    <li class="flex p-6">
                        <img
                            src="~/assets/images/image 13.png"
                            alt="icon"
                            class="pr-4"
                            style="height: 35px"
                        >
                        <div>Register Here - Get the Party Started</div>
                    </li>
                    <li class="flex p-6">
                        <img
                            src="~/assets/images/image 12.png"
                            alt="icon"
                            class="pr-4"
                            style="height: 35px"
                        >
                        <div>Learn More - You’re Interested - but dubious</div>
                    </li>
                    <li class="flex p-6">
                        <img
                            src="~/assets/images/image 11.png"
                            alt="icon"
                            class="pr-4"
                            style="height: 35px"
                        >
                        <div>Attention Please - These are our terms and conditions. There will be no negotiations - it’s the same old song and dance</div>
                    </li>
                    <li class="flex p-6">
                        <img
                            src="~/assets/images/image 14.png"
                            alt="icon"
                            class="pr-4"
                            style="height: 35px"
                        >
                        <div>The Glass House - the place where every one can see - what everybody else is doing. There are no secrets in the Glass House</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex bg-white">
            <div class="w-1/6" />
            <div class="w-5/6 flex flex-between items-center h-24">
                <div class="w-1/2">
                    <el-dropdown class="pr-6" @command="changeLang">
                        <span class="el-dropdown-link">
                            {{ getLangLabel }}<i class="el-icon-arrow-down el-icon--right font-bold pl-2" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="item in langs" :key="item.value" :command="item">
                                {{ item.label }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <i class="fab fa-twitter bg-twitter text-white rounded-full p-2 text-xs mx-2" />
                    <i class="fab fa-facebook-f bg-facebook text-white rounded-full p-2 px-3 text-xs mx-2" />
                    <i class="fab fa-youtube bg-youtube text-white rounded-full p-2 text-xs mx-2" />
                    <i class="fab fa-linkedin-in bg-linkedin text-white rounded-full p-2 text-xs mx-2" />
                </div>
                <div class="w-1/2 text-right pr-8">
                    <span>Power by - </span>Corsource Technology Group LLC.
                    <img src="~/assets/images/image-19.png" alt="corsource" class="inline">
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
