<script setup lang="ts">
defineProps({
  team: Object,
});
</script>

<template>
  <div class="w-full mx-auto bg-white shadow-md overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-blood">{{ team.name }}</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ team.email }}</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Category</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ team.category }}</dd>
        </div>
        <div class="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Phone</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">{{ team.phone }}</dd>
        </div>
        <div class="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Players</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="(player, index) in team.players" :key="index" class="py-4 flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-semibold">{{ player.first_name }} {{ player.last_name }}</span>
                  <span class="text-sm text-gray-500">{{ player.age }} years old</span>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
