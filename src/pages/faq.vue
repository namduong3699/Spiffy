<template>
    <div class="m-12">
        <div>
            <div class="text-3xl font-bold">
                Universal Link Page
            </div>
            <div class="text-sm text-gray-700">
                This is page is a substitute link for the couple of hundred links there would be if this was full version of Spiffy.
            </div>
        </div>

        <div class="mt-12">
            <div v-for="(item, index) in list" :key="index" class="my-32">
                <div class="font-bold text-2xl">
                    <i :class="item.icon" class="mr-3 text-4xl" />{{ item.title }}
                </div>
                <div class="text-sm text-gray-700">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { list } from '~/data/data';

    export default {
        layout: 'user',

        data() {
            return { list };
        },
    };
</script>
