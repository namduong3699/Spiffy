<template>
    <div class="w-10/12 mx-auto">
        <div class="flex justify-between font-bold">
            <div class="flex justify-between pr-64 w-9/12">
                <nuxt-link to="/about">
                    Get Started
                </nuxt-link>
                <nuxt-link to="/about">
                    About Spiffy
                </nuxt-link>
                <nuxt-link to="/about">
                    YouTube
                </nuxt-link>
                <nuxt-link to="/about">
                    How the Sausage is Made
                </nuxt-link>
            </div>
            <div class="w-2/12 z-50">
                <div>Login</div>
                <el-input
                    v-model="email"
                    type="text"
                    placeholder="email"
                    class="my-2"
                    size="small"
                />
                <el-input
                    v-model="password"
                    placeholder="password"
                    size="small"
                    type="password"
                />
            </div>
        </div>

        <div class="relative -mt-16">
            <div class="flex pb-64 pt-56">
                <img
                    src="~/assets/images/Polygon 1-1.png"
                    alt="logo"
                    style="height: 76px"
                    class="mt-2 mr-2"
                >
                <div>
                    <img src="~/assets/images/Spiffy-1.png" alt="logo" style="height: 120px">
                    <div class="font-bold text-sm">
                        Special Incentives For Funding YouTubers
                    </div>
                </div>
                <nuxt-link to="/community">
                    <img src="~/assets/images/Group 65076.png" alt="avatar" class="absolute right-0 top-0">
                </nuxt-link>
            </div>
        </div>

        <div class="flex justify-between mb-32">
            <img
                src="~/assets/images/image 1.png"
                alt="youtube"
                style="height: 273px"
            >
            <div class="w-8/12">
                <div class="text-xl font-bold">
                    We fund YouTube Channels through Private Patron Danations
                </div>
                <p class="mb-4">
                    We use - Token Reward System-designed to compel "normal people" to donate money to their favorite Toe,. Channels. Spiffy Is he reardeal- you earn crwatotokens when you work Ow system -and it's possible to earn several hundred - if not - a few thousand dollars per month.
                </p>
                <p>
                    You can view Spiffy as a -Side Hustle. 5,5555 for everybody- but then - some people are known for nay-saying or belittling things they don't understand. The worst Chat could happen - is that you supported a YouTube Channel with $5.
                </p>
            </div>
        </div>

        <div class="flex justify-between bg-gray rounded-2xl overflow-hidden py-16 px-32 mb-32">
            <div class="w-8/12">
                <div class="text-xl font-bold">
                    It’s as Easy as... One-Two-Three-Four
                </div>
                <p>
                    First thing you do when you work Spiffy • is •you Pay $5 a month to a You.. Channel.
                </p>
                <p>
                    In return - you get certain benefits erectly from the Channel. These benefits will be deeribed in the educational videos.
                </p>
                <p>
                    Nee- fork four. You get off the couch. and start building a viral group whirl) will pay you in crypto-tokens as it grows. The thing is- it won't grow unless you do your part. Fork four is the goal. You fork four- those guys fork four-everybody forks fouii les a forking party.
                </p>
                <p>
                    You we get paid a crypto-commisslon - on the work you dld - generate those sash donations to the You,. Channels. In fact- the You,. Channels will pay you personalW - 5.6% of every dollar your Viral Group generates - up to eight people links away - from you.
                </p>
                <p>
                    Every single day money will show up in your Spiffy account. First just a Little - but over time it will get bigger and bigger - and one day it may surprise you with how mush. Fermi have to do is pay your 55 a month to the YouTuhe Channely. like - and fork four.
                </p>
            </div>
            <img src="~/assets/images/downline-honeycomb.png" alt="Downline Honeycomb 22 1" style="height: 355px">
        </div>

        <div class="flex justify-between mb-32">
            <img src="~/assets/images/Rectangle 5.png" alt="Rectangle 5" style="height: 421px">
            <div class="w-8/12">
                <div class="text-xl font-bold">
                    It's a New Day - A Fresh Start
                </div>
                <p class="mb-4">
                    Don't take Spiffy too seriously - it's a social media experiment. It's a unique new way to help crowdfund Touirube Channels - and you get a little something/something in return.
                </p>
                <p class="mb-4">
                    The principle behind the experiment Weaned quid Pro Quo.. an ancient principle which observes that if you want people to do- "something extraordinary" -tbey have to have a reward on their end to make it worth their time and effort. TouTube Channels want people to patron support them, and Spiffy has a business model that helps the channeis. and helps the givers too. When the givers are included in the benefit- donations wiLl increase exponentially because the end game is so compelling. Everyone benefits.
                </p>
                <p class="mb-4">
                    The goal of Spiffy is to create a fun environment for the Patron Subscribers - fostering a willingness to give •while supporting the TouTube Channels which create the content we love.
                </p>
                <div class="flex">
                    <p class="font-bold w-8/12">
                        Fork Four - Do the math - See what you could do. The hints are all there in the above words - figure out how much you could make - if you get lucky.
                    </p>
                    <img
                        src="~/assets/images/image 42.png"
                        alt="image 42"
                        style="height: 42px"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'home',

        data() {
            return {
                email: '',
                password: '',
            };
        },
    };
</script>

<style scoped>
.bg-gray {
    background: #f0f0f0;
}
</style>
