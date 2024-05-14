<script setup lang="ts">
const { data: teams, pending } = await useLazyFetch("/api/teams");
</script>

<template>
  <section class="grid place-content-center">
    <h1>
      {{ $t("greeting", { name: "Knury Knurów" }) }}
    </h1>
    <span v-if="pending">
      Loading...
    </span>
    <section v-else class="grid grid-cols-2 gap-4">
      <Team v-for="team in teams" :key="team.name" :team="team"/>
    </section>
  </section>
</template>
