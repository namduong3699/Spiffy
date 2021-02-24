<template>
    <el-container class="app">
        <div class="flex justify-end mt-8 mr-24">
            <img
                v-for="item in 3"
                :key="item"
                src="~/assets/images/icon/round.png"
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
    import Footer from '~/layouts/components/guest/Footer.vue';

    export default {
        components: {
            Footer,
        },
    };
</script>
