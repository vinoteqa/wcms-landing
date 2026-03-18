<script setup>
const props = defineProps({
  doc: {
    type: Object,
    required: true,
  },
})

useHead({
  title: props.doc.title,
})

useSeoMeta({
  description: props.doc.description,
  ogTitle: props.doc.title,
  ogDescription: props.doc.description,
  twitterTitle: props.doc.title,
  twitterDescription: props.doc.description,
})
</script>
