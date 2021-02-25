<template>
    <el-container class="app">
        <div class="flex">
            <NavBar class="w-1/6" />
            <el-main class="w-5/6">
                <main>
                    <nuxt />
                </main>
            </el-main>
        </div>
        <el-footer class="custom-footer" style="height: auto">
            <Footer />
        </el-footer>
    </el-container>
</template>

<script>
    import NavBar from '~/layouts/components/about/NavBar.vue';
    import Footer from '~/layouts/components/about/Footer.vue';

    export default {
        components: {
            NavBar,
            Footer,
        },
    };
</script>
