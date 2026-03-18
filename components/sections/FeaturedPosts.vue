<template>
  <div class="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ $t('blog.featuredPosts') }}</h2>
    </div>
    <ContentQuery :path="localePath('/blog')" :sort="{ date: -1 }" :limit="3" v-slot="{ data }">
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <ArticleCard v-for="article in data" :key="article._path" :link="article._path" :title="article.title"
          :description="article.description" :imgSrc="getArticleImageSrc(article)" :imgAlt="article.title"
          :date="article.date" />
      </div>
    </ContentQuery>
    <div class="mt-10 text-center">
      <NuxtLinkLocale to="/blog"
        class="text-sm font-semibold leading-6 text-vinoteqa hover:text-vinoteqa-hover">
        {{ $t('blog.goToBlog') }} <span aria-hidden="true">&rarr;</span>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script>
import utils from '~/mixins/utils'

export default {
  mixins: [utils],
}
</script>
