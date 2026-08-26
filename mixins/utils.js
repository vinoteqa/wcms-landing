export function getLocaleDate(date, locale) {
  if (!date) return null;

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(locale, dateOptions);
}

export function getArticleImageSrc(article) {
  if (!article) return null;

  const articlePath = article.path || article._path;
  if (!articlePath) return null;

  const pathSegments = articlePath.split("/");
  const slug = pathSegments[pathSegments.length - 1];

  return `/imgs-blog/${slug}.jpg`;
}

export default {
  methods: {
    getLocaleDate(date) {
      return getLocaleDate(date, this.$i18n.locale);
    },
    getArticleImageSrc,
  },
};
