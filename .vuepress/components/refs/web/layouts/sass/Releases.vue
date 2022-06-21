<template>
  <div class="release-center">
    <span class="me-5">Текущие релизы:</span>
    <span v-for="release in releases" :key="release.code">
      <a :href="release.link" rel="noopener noreferrer" class="ms-25">
        {{ release.name }}
      </a>
      <a v-if="release.status" :href="release.tag" target="_blank" rel="noopener noreferrer" class="ms-15">
        {{release.version }}
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
      <i v-else class="fa-solid fa-skull-crossbones ms-15"></i>
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { releases } from "@data/sass";
</script>

<style lang="css">
.me-5 {
  margin-right: 5px;
}
.me-20 {
  margin-right: 20px;
}
.ms-15 {
  margin-left: 15px;
}
.ms-25 {
  margin-left: 25px;
}
.release-center {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
