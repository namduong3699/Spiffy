<template>
    <div>
        <div class="flex">
            <div class="w-1/6 bg-gray-bold" />
            <div class="w-5/6 flex flex-col md:flex-row justify-between py-16 bg-gray-bold text-white">
                <div class="w-full md:w-1/2 pr-24">
                    <img
                        src="~/assets/images/logo/spiffy.png"
                        class="mb-4"
                        alt="logo"
                        width="180"
                        height="60"
                    >
                    <p class="text-sm mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, sint placeat assumenda praesentium consectetur debitis similique optio nobis fugit vitae fugiat aliquid delectus quas, voluptatem quaerat facere velit a deserunt eveniet officiis atque nihil. Placeat neque, minima adipisci debitis obcaecati quos doloremque quas ipsa itaque. Veritatis repellat recusandae suscipit omnis!
                    </p>
                    <p class="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam hic modi ex dolor tempora ab maxime molestias repudiandae ducimus! In a optio magni explicabo eaque iure rerum. Error, mollitia aspernatur sit tenetur ullam nobis quisquam. Corrupti nam velit vel repellendus, voluptatibus nisi quas soluta ipsum? Ipsam, mollitia odio? Accusamus.
                    </p>
                </div>
                <div class="w-full md:w-1/2">
                    <div class="font-bold text-3xl">
                        Spiffy Essentials
                    </div>
                    <ul class="font-bold pl-4">
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
                    <img src="~/assets/images/logo/corsource.png" alt="corsource" class="inline">
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
