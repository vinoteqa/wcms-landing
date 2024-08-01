<template>
    <NuxtLayout name="blog">
        <div class="h-full page bg-white">
            <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <section class="mb-16">
                    <div class="flex items-center my-6">
                        <h2 class="text-3xl md:text-4xl font-bold mr-auto">{{ categoryTitle }}</h2>
                    </div>

                    <ContentQuery :path="`${$i18n.locale}/blog/${categoryKey}`" :where="{ featured: true }"
                        :sort="{ date: -1 }" :limit="12" v-slot="{ data }">
                        <BlogList :data="data" />
                    </ContentQuery>
                </section>

                <!-- <BlogPagination v-if="data > 1" class="mt-8" :currentPage="1" :totalPages="data" :nextPage="data > 1"
                baseUrl="/it/blog/" pageUrl="/it/blog/page/" /> -->

            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const props = defineProps({
    categoryKey: {
        type: String,
        required: true
    },
    categoryTitle: {
        type: String,
        required: true
    },
});
</script>