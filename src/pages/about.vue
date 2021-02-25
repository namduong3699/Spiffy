<template>
    <div class="m-12">
        <div class="flex justify-end">
            <div class="flex justify-between flex-col">
                <div class="flex justify-end mt-8 mr-24 mb-4">
                    <img
                        v-for="item in 3"
                        :key="item"
                        src="~/assets/images/Ellipse 19.png"
                        width="30"
                        class="mr-4"
                    >
                </div>
                <div>
                    Atricle One
                </div>
            </div>
        </div>

        <div class="font-bold text-xl mb-24">
            Atricle One - The Basics of Spiffy
        </div>

        <div class="mb-24">
            <div class="font-bold mb-2">
                You Make Money with Spiffy
            </div>
            <div>
                Spiffy is a crowdfunding tool to fund YouTube Channels with cash donations from Channel Subscribers. What makes Spiffy different - and the reason you want to participate - is that you get paid when you do your job in the participation process.
            </div>
        </div>

        <div class="mb-12">
            <div class="font-bold mb-2">
                Inspired by the Girl Scouts
            </div>
            <div class="mb-6">
                Every year the Girl Scouts sell more than a billion dollars worth of cookies. It’s a highly organized endeavor - utilizing a motivated work force.
            </div>
            <div class="mb-6">
                Those little girls get out there and hustle-up those cookie sales - door to door - retail outlets - office buildings - anywhere they can move their product. The Girls Scouts know that if you want to elicit funds from the general public - you’ve got to have the donor feel good about the transaction - and delicious cookies fills the gap of Quid Pro Quo. “You want me to donate money to the Girl Scouts? What’s in it for me?    Cookies?    I’ll take three boxes please.”
            </div>
            <div class="mb-6">
                Once a cookie sale is made - the proceeds are split up to five ways.
            </div>
            <ul class="custom-list ml-20">
                <li>First - the cost of the cookies is covered</li>
                <li>Second - the local troop keeps 50% of the money left over</li>
                <li>The remaining money is split three ways - Local GS Council - Regional GS Council - National GS Council</li>
            </ul>
        </div>

        <div class="mb-12">
            <div class="font-bold mb-2">
                With Spiffy You Build a Viral Group
            </div>
            <div class="mb-6">
                When you join Spiffy - you become a Spiffer.  A Spiffer’s job is to donate $5 a month to a YouTube Channel and then replicate themselves four (4) times by getting these people to donate $5 a month YouTube Channel of their choice too. This is the beginning of your viral group.  You will be paid 5.6% of every dollar donated to a various YouTube Channel - within the scope of your viral group - up to eight (8) people links away.  (4^8 = 87,380 people).
            </div>
            <div class="mb-6">
                Here’s the breakdown of a $5 donation.
            </div>
            <ul class="custom-list ml-20">
                <li>
                    First - Spiffy keeps 9.2% as a service and account fee - or $0.46
                </li>
                <li>
                    Second - The YouTube Channel keeps 50% of $4.54 left over - which is $2.27
                </li>
                <li>
                    Thirdly - The YouTube Channels pays the Spiffers a commission as marketing agents - who brought the donations in the first place.
                </li>
                <li>
                    Lastly - The $2.27 to the Spiffer Viral Group is divided by eight (8) and each of them get 5.6% of the $5 donation - or - 28 cents each.
                </li>
            </ul>
        </div>

        <div class="mb-12">
            <div class="font-bold mb-2">
                Managing Expectations
            </div>
            <div class="mb-6">
                If the Spiffer 4^8 Viral Group filled up to 100% capacity - a Spiffer would make $24,446 a month - but that’s impossible.  Not everyone in the group is going to fork four. That’s OK though - you only donated $5 - you should have reasonable exepectations of what the Viral Group does over time.
            </div>
            <ul class="custom-list ml-20 mb-6">
                <li>
                    At 1% fill of the Viral Group potential - a Spiffer would receive $244 a month. Not bad on a $5 donation
                </li>
                <li>
                    At a 8% fill of the Viral Group potential - A Spiffer would receive $1,952 a month
                </li>
                <li>
                    At a 19% fill of the Viral Group potential - a Spiffer would receive $4,634 a month
                </li>
            </ul>
            <div>
                A Spiffer should have the viewpoint that the $5 donation was given from the heart - with zero return expectations - and if some money does come back to them - it’s in the form of a commission that was earned by them for generating the donated funds from within their Viral Group - which would have not happend - unless they did their forking months or years ago.
            </div>
        </div>

        <div class="mb-12 mb-24">
            <div class="font-bold mb-2">
                Why do YouTube Channels agree to give up 50% of their donations?
            </div>
            <div class="mb-6">
                It’s a practical matter for them - and free money. 50% of something - is better than 100% of nothing. By involving subscribers in the ebb and flow of the financial transactions - more people will be prompted to donate who would not have donated before. One could say they are leading by example. They want as many people as possible to donate to them - paying commission to those who generated the funds in the first place is a normal business practice - and increases the number of people who will donate as well.
            </div>
            <div class="mb-6">
                Just like the Girl Scouts. You can practically hear this voice: <span class="italic">“if you want me to donate money to the Girl Scouts - what’s in it for me? Cookies? OK - I’ll take three boxes.”</span>
            </div>
            <div class="italic">
                You want me to donate money to YouTube Channels? What’s in it for me? Up to $24,446 a month?  - I’ll take three boxes.”
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '~/data/data';

    export default {
        layout: 'about',

        data() {
            return { list };
        },
    };
</script>

<style lang="scss" scoped>
.custom-list {
    li::before {
        content: '';
        display: inline-block;
        background-image: url('~/assets/images/Ellipse 19.png');
        width: 15px;
        height: 15px;
        background-size: 15px;
        background-position: center;
        margin-right: 20px;
    }
}
</style>
