<template>
    <div class="nav bg-gray-bold text-white p-4">
        <div class="flex w-full p-3 mt-6">
            <img src="~/assets/images/Polygon 1-1.png" style="height: 44px" class="mr-2">
            <img src="~/assets/images/Spiffy-white.png" style="height: 62px">
        </div>
        <ul class="pt-32 pl-12">
            <li class="my-6">
                <nuxt-link to="/">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > Home
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/glass-house">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > Glass House
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/registration">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > Registration
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/education">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > Education
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/faq">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > FAQ's
                </nuxt-link>
            </li>
            <li class="my-6">
                <nuxt-link to="/community">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
                    > Community
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/about">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        style="height: 23px"
                        class="inline mr-2"
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
