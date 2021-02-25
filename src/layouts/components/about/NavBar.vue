<template>
    <div class="nav bg-gray-bold text-white p-4">
        <nuxt-link to="/" class="flex w-full p-3 mt-6">
            <img src="~/assets/images/Polygon 1-1.png" style="height: 44px" class="mr-2">
            <img src="~/assets/images/Spiffy-white.png" style="height: 62px">
        </nuxt-link>
        <ul class="pt-32 pl-12">
            <li class="my-6">
                <nuxt-link to="/glass-house">
                    <img
                        v-if="isActive('/glass-house')"
                        src="~/assets/images/Polygon 2-blue-2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    >
                    <img
                        v-else
                        src="~/assets/images/Polygon 1-1.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
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
                        v-if="isActive('/about')"
                        src="~/assets/images/Polygon 2-blue-2.png"
                        alt="menu-icon"
                        class="inline mr-2"
                        style="height: 23px"
                    >
                    <img
                        v-else
                        src="~/assets/images/Polygon 1-1.png"
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
        methods: {
            isActive(route) {
                return route === this.$route.path;
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
