<template>
    <div class="bg-gray-50">
        <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <!-- Details section -->
            <section aria-labelledby="details-heading">
                <div class="flex flex-col items-center text-center">
                    <h2 id="details-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}</h2>
                    <p class="mt-3 max-w-3xl text-lg text-gray-600">{{ subtitle }}</p>
                </div>

                <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                    <div>
                        <div class="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img :src="leftImgSrc"
                                :alt="leftImgAlt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                        <p class="mt-8 text-base text-gray-500">{{ leftDescription }}</p>
                    </div>
                    <div>
                        <div class="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <img :src="rightImgSrc"
                                :alt="rightImgAlt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                        <p class="mt-8 text-base text-gray-500">{{ rightDescription }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        leftImgSrc: {
            type: String,
            required: true,
        },
        leftImgAlt: {
            type: String,
            required: true,
        },
        rightImgSrc: {
            type: String,
            required: true,
        },
        rightImgAlt: {
            type: String,
            required: true,
        },
        leftDescription: {
            type: String,
            required: true,
        },
        leftButtonLabel: {
            type: String,
            default: null,
        },
        leftButtonLink: {
            type: String,
            default: null,
        },
        rightDescription: {
            type: String,
            required: true,
        },
        rightButtonLabel: {
            type: String,
            default: null,
        },
        rightButtonLink: {
            type: String,
            default: null,
        },
    },
}
</script>