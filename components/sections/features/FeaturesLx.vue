<template>
    <div class="features-ct">
        <div class="overflow-hidden bg-white py-10 sm:py-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                    <div class="lg:pl-4 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <h2 class="text-base font-semibold leading-7 text-vinoteqa">{{ titleLabel }}</h2>
                            <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}
                            </h3>
                            <p class="mt-6 text-lg leading-8 text-gray-600">{{ subtitle }}</p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                    <dt class="inline font-semibold text-gray-900">
                                        <component :is="feature.icon"
                                            class="absolute left-1 top-1 h-5 w-5 text-vinoteqa" aria-hidden="true" />
                                        {{ feature.name }}.
                                    </dt>
                                    {{ ' ' }}
                                    <dd class="inline">{{ feature.description }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div class="flex items-start justify-end lg:order-first">
                        <img :src="imgSrc" :alt="imgAlt"
                            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-vinoteqa/20 sm:w-[57rem]"
                            width="2432" height="1442" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleLabel: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        features: {
            type: Array,
            required: true,
        },
        imgSrc: {
            type: String,
            required: true,
        },
        imgAlt: {
            type: String,
            required: true,
        }
    },
}
</script>