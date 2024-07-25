<template>
    <div class="bg-black py-16 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-white">{{ stat.name }}</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{{
                    stat.value }}</dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script setup>
const stats = [
    { id: 1, name: 'wines in database', value: '1.5 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
]
</script>