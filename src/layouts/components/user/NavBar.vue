<template>
    <div class="nav bg-gray-bold text-white p-4">
        <div class="flex w-full p-3">
            <img src="~/assets/images/Polygon 1.png" width="50" height="41">
            <img src="~/assets/images/Spiffy-white.png">
        </div>
        <ul class="pt-32 pl-5">
            <li class="my-4">
                <nuxt-link to="/">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> Home
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/glass-house">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> Glass House
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/registration">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> Registration
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/education">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> Education
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/faq">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> FAQ's
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/community">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> Community
                </nuxt-link>
            </li>
            <li class="my-4">
                <nuxt-link to="/about">
                    <img src="~/assets/images/Polygon 2.png" alt="menu-icon" class="inline"> About Spiffy
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
    border-right: 15px $gray solid;
}
</style>
