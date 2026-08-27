<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
        <ArticleCard v-for="article in articles" :key="article.path" :link="article.path" :title="article.title"
            :description="article.description" :imgSrc="getArticleImageSrc(article)" :imgAlt="article.title" :date="article.date" />

    </div>
    <p v-if="articles.length == 0" class="w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white">{{ message }}</p>
</template>

<script setup>
import { getArticleImageSrc } from '~/mixins/utils'

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
    message: {
        type: String,
        default: "There are no posts right now, but stay tuned for newer releases in the future."
    }
});

const articles = computed(() => props.data || [])
</script>
