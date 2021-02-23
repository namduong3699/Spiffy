<template>
    <div class="flex m-12">
        <div class="w-1/2 m-4 font-bold">
            <div class="text-center mb-4">
                Create your Free Account
            </div>
            <img src="~/assets/images/register.jpg" alt="register">
            <div class="mt-8">
                <div class="ml-32">
                    No Obligation
                </div>
                <div class="ml-32">
                    Quit Anytime
                </div>
                <div class="ml-32">
                    No Money to Join
                </div>
                <div class="ml-32">
                    Nice People Only
                </div>
                <div class="ml-32">
                    Under 19 - Parent Consent
                </div>
            </div>
        </div>
        <div class="w-1/2">
            <el-form class="mt-16">
                <el-form-item>
                    <el-input placeholder="Enter your Sponsor's Code - if no code - leave blank - computer will assign" class="my-2 shadow-lg" />
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Choose a screen name - be clever" class="my-2 shadow-lg" />
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="Email address or phone number" class="my-2 shadow-lg" />
                </el-form-item>
                <div class="flex justify-between">
                    <el-form-item>
                        <el-input placeholder="password" class="my-2 shadow-lg" />
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="confirm password" class="my-2 shadow-lg" />
                    </el-form-item>
                </div>
                <el-form-item>
                    <el-input placeholder="Terms and Conditions" class="my-2 shadow-lg" />
                </el-form-item>
                <el-button plain class="my-2 shadow-lg">
                    Submit
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'default',
    };
</script>
