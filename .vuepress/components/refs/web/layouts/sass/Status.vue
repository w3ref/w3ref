<template>
  <span>
    Совместимость
    <span v-if="featureName">({{ featureName }})</span>:
    Dart Sass {{ dartSass }} |
    LibSass {{ libSass }} |
    Ruby Sass {{ rubySass }}
  </span>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {
        feature: null,
        dart: null,
        lib: null,
        ruby: null,
      }
    }
  },
});

const featureName = computed(() => props.data.feature ? props.data.feature : false);
const dartSass = computed(() => calcStatus(props.data.dart));
const libSass = computed(() => calcStatus(props.data.lib));
const rubySass = computed(() => calcStatus(props.data.ruby));

function calcStatus(inputData) {
  let status;
  if (inputData === true) {
    status = '✓';
  } else if (inputData === false) {
    status = '✗';
  } else if (inputData === 'partial') {
    status = 'частично';
  } else if (inputData !== null) {
    status = 'с ' + inputData;
  }

  return status;
};
</script>
