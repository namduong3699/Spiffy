<template>
    <div class="flex justify-between bg-gray-bold text-white">
        <div class="w-1/6" />
        <div class="w-5/6 flex m-12">
            <div class="w-1/2">
                <div class="flex mt-6">
                    <img
                        src="~/assets/images/Polygon 1-1.png"
                        alt="logo"
                        style="height: 44px"
                        class="mr-2"
                    >
                    <img src="~/assets/images/Spiffy-white.png" alt="logo" style="height: 62px">
                </div>
                <ul class="mt-6">
                    <li>Special Incentives for Funding</li>
                    <li>YouTubers</li>
                    <li>Spiffy, Inc.</li>
                    <li>Lake Oswego, Oregon - USA</li>
                </ul>
                <ul class="mt-6 custom-list">
                    <li>Spiffer Support</li>
                    <li>User Forums</li>
                    <li>Corporate Page</li>
                </ul>

                <div class="mt-16">
                    Built by - CorSource Technology Group LLC.
                    <img
                        src="~/assets/images/image-19.png"
                        alt="corsource-logo"
                        style="height: 32px"
                        class="inline ml-2"
                    >
                </div>
            </div>

            <div class="w-1/2">
                <div class="text-3xl">
                    Disclaimers
                </div>
                <div class="mt-6">
                    Disclaimer #1 - Spiffy is a social media theorybeing played out. The objective is to increase the percentage of financial donations to YouTube Channels. These Channels bring excellent entertainment value - but are not compensated in a sustainable amount according to traditional values. The theory is - if you include the public in the financial benefit of the donation process - the number of donations will increase exponentially - thereby increasing the take by the channels as a whole.
                </div>
                <div class="mt-6">
                    Disclaimer #2 - Spiffy is not a substitution for a job or education. It is not a retirement account. Spiffy is a $5 monthly donation to a YouTube Channel. If you cannot afford $5 a month - you should not participate - there is no guarantee of reward - play with the intention of helping others - be grateful if you are the recipiant of a financial reward as well.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _findIndex from 'lodash/findIndex';

    export default {
        data() {
            return {
                lang: 'US',
                langs: [
                    {
                        value: 'UK',
                        label: 'English (UK)',
                    },
                    {
                        value: 'US',
                        label: 'English (US)',
                    },
                ],
            };
        },

        computed: {
            getLangLabel() {
                const index = _findIndex(this.langs, lang => lang.value === this.lang);

                return this.langs[index].label;
            },
        },

        methods: {
            changeLang(lang) {
                this.lang = lang.value;
            },
        },
    };
</script>

<style lang="scss" scoped>
.custom-list {
    li::before {
        content: '';
        display: inline-block;
        background-image: url('~/assets/images/Polygon 4.png');
        width: 17px;
        height: 17px;
        background-size: 17px;
        background-position: center;
        margin-right: 5px;
    }
}
</style>
