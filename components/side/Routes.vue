<script setup lang="ts">
const routes = [
  {
    name: "home",
    path: "/dashboard",
  },
  {
    name: "teams",
    path: "/dashboard/teams",
  },
  {
    name: "live",
    path: "/dashboard/live",
  },
  {
    name: "standings",
    path: "/dashboard/standings",
  },
  {
    name: "schedule",
    path: "/dashboard/schedule",
  },
];
</script>

<template>
  <nav class="flex-grow">
    <ul>
      <li v-for="child in routes" :key="child.name">
        <NuxtLink :to="child.path">
          {{ $t(`navigation.routes.${child.name}`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
