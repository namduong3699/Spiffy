<template>
    <el-container class="app relative">
        <div class="h-8 bg-gray-dark" />
        <div class="h-8 bg-gray-light" />
        <div class="absolute flex justify-end" style="top: 16px; right: 16px">
            <img
                v-for="item in 3"
                :key="item"
                src="~/assets/images/Ellipse 19.png"
                width="30"
                class="mr-4"
            >
        </div>
        <el-main>
            <main>
                <nuxt />
            </main>
        </el-main>
        <el-footer class="custom-footer" style="height: auto">
            <Footer />
        </el-footer>
    </el-container>
</template>

<script>
    import Footer from '~/layouts/components/home/Footer.vue';

    export default {
        components: {
            Footer,
        },
    };
</script>
