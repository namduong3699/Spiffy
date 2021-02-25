<template>
    <el-container class="app">
        <div class="flex min-h-screen w-full">
            <NavBar class="w-1/6" />
            <el-main class="w-5/6">
                <main style="min-height: 88vh">
                    <nuxt />
                </main>
                <el-footer class="custom-footer float-right">
                    Powered by - CorSource Technology Group LLC. <img src="~/assets/images/image-19.png" alt="corsource" class="inline">
                </el-footer>
            </el-main>
        </div>
    </el-container>
</template>

<script>
    import NavBar from '~/layouts/components/user/NavBar.vue';

    export default {
        components: {
            NavBar,
        },
    };
</script>
