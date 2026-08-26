<template>
    <div>
        <div v-if="related && related.length > 0" class="text-black">
            <h4 class="text-2xl font-bold mb-6">{{ $t('blog.suggestedArticles') }}</h4>
            <BlogList :data="related" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    doc: {
        type: Object,
        required: true
    }
})

const { locale } = useI18n()
const tags = computed(() => props.doc.tags || [])

const { data: related } = await useAsyncData(
    () => `related-${props.doc.id}`,
    async () => {
        if (!tags.value.length) return []

        const candidates = await queryCollection('blog')
            .where('path', 'LIKE', `/${locale.value}/blog/%`)
            .where('id', '<>', props.doc.id)
            .order('date', 'DESC')
            .limit(20)
            .all()

        return candidates
            .filter(article => article.tags?.some(tag => tags.value.includes(tag)))
            .slice(0, 3)
    },
    { watch: [() => props.doc.id, tags] },
)
</script>
