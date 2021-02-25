<template>
    <div>
        <div class="flex justify-end">
            <div class="flex justify-between items-center flex-col mr-8">
                <div class="flex justify-end mt-8 mb-4">
                    <img
                        v-for="item in 3"
                        :key="item"
                        src="~/assets/images/Ellipse 19.png"
                        width="30"
                        class="mr-4"
                    >
                </div>
                <div class="text-lg font-bold">
                    Registration Page
                </div>
            </div>
        </div>
        <div class="flex xl:m-12">
            <div class="w-1/2 m-4 font-bold">
                <div class="text-center text-lg mb-4">
                    Create your Free Account
                </div>
                <img
                    src="~/assets/images/study.png"
                    alt="study"
                    style="height: 422px !important"
                    class="mx-auto"
                >
                <div class="text-lg mt-8 ml-24 xl:ml-48">
                    <div>
                        No Obligation
                    </div>
                    <div>
                        Quit Anytime
                    </div>
                    <div>
                        No Money to Join
                    </div>
                    <div>
                        Nice People Only
                    </div>
                    <div>
                        Under 19 - Parent Consent
                    </div>
                </div>
            </div>
            <div class="w-1/2 px-10">
                <el-form ref="form" class="mt-16" :model="form">
                    <el-form-item>
                        <el-input
                            v-model="form.code"
                            placeholder="Enter your Sponsor’s Code - if no code - leave blank - computer will assign"
                            class="my-2 shadow-lg"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.screen" placeholder="Choose a screen name - be clever" class="my-2 shadow-lg" />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.email" placeholder="Email address or phone number" class="my-2 shadow-lg" />
                    </el-form-item>
                    <div class="flex justify-between">
                        <el-form-item>
                            <el-input
                                v-model="form.password"
                                type="password"
                                placeholder="password"
                                class="my-2 shadow-lg mr-1"
                            />
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                v-model="form.cf_password"
                                type="password"
                                placeholder="confirm password"
                                class="my-2 shadow-lg ml-1"
                            />
                        </el-form-item>
                    </div>
                    <el-form-item>
                        <el-input v-model="form.terms" placeholder="Terms and Conditions" class="my-2 shadow-lg" />
                    </el-form-item>
                    <el-button plain class="my-2 shadow-lg">
                        Submit
                    </el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'default',

        data() {
            return {
                form: {
                    code: '',
                    screen: '',
                    email: '',
                    password: '',
                    cf_password: '',
                    terms: '',
                },
            };
        },
    };
</script>
