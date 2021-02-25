<template>
    <div class="nav bg-gray-bold text-white p-4">
        <nuxt-link to="/" class="flex w-full p-3 mt-6">
            <img src="~/assets/images/Polygon 1.png" style="height: 41px" class="mr-2">
            <img src="~/assets/images/Spiffy-white.png" style="height: 57px">
        </nuxt-link>
        <ul class="pt-32 pl-12">
            <li class="my-6">
                <nuxt-link to="/">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > Home
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/glass-house">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > Glass House
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/registration">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > Registration
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/education">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > Education
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/faq">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > FAQ's
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/community">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > Community
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/about">
                    <img
                        src="~/assets/images/Polygon 2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    > About Spiffy
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: this.$route.path,
            };
        },

        watch: {
            '$route.path': 'setActiveItem',
        },

        mounted() {
            this.setActiveItem();
        },

        methods: {
            setActiveItem() {
            //     const activeItem = _findKey(this.$refs.menu.items, (_, key) => this.$route.path.startsWith(key));

            //     this.active = activeItem;
            },
        },
    };
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_color";
.nav {
    border-right: 25px $gray solid;
}
</style>
