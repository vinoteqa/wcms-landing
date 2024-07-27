<template>
    <footer class="bg-white" aria-labelledby="footer-heading">
        <div class="mx-auto max-w-7xl px-6 pb-0 pt-10 sm:pt-10 lg:px-8 lg:pt-10">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8">
                    <img class="h-7" :src="logoSrc" :alt="siteTitle" />
                    <p class="text-sm leading-6 text-black/60">{{ mission }}</p>
                    <!-- <div class="flex space-x-6">
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div> -->
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div></div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-black/90">{{ '' }}</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.resources" :key="item.name">
                                    <a v-if="item.href" :href="item.href"
                                        class="text-sm leading-6 text-black/60 hover:text-black">{{ item.name }}
                                    </a>
                                    <span v-else class="text-sm leading-6 text-black/60">{{ item.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-sm font-semibold leading-6 text-black/90">{{ 'Location' }}</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.location" :key="item.name">
                                    <a v-if="item.href" :href="item.href"
                                        class="text-sm leading-6 text-black/60 hover:text-black">{{ item.name }}
                                    </a>
                                    <span v-else class="text-sm leading-6 text-black/60">{{ item.name }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-sm font-semibold leading-6 text-black/90">{{ 'Contacts' }}</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li v-for="item in navigation.contacts" :key="item.name">
                                    <a v-if="item.href" :href="item.href"
                                        class="text-sm leading-6 text-black/60 hover:text-black">{{ item.name }}
                                    </a>
                                    <span v-else class="text-sm leading-6 text-black/60">{{ item.name }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="border-t border-black/30 mx-auto max-w-7xl mt-16 px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div class="flex justify-center space-x-6 md:order-2">
                    <a v-for="item in navigation.social" :key="item.name" :href="item.href" target="_blank"
                        class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">{{ item.name }}</span>
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </a>
                </div>
                <div class="mt-8 md:order-1 md:mt-0">
                    <p class="text-center text-xs leading-5 text-gray-500">&copy; {{ currentYear }} Vinoteqa - All
                        rights
                        reserved.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props: {
        pageTitle: {
            type: String,
            required: true,
        },
        logoSrc: {
            type: String,
            required: true,
        },
        mission: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        navigation: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    },
}
</script>