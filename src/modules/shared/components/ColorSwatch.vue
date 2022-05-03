<template>
  <div
    class="swatch"
    :class="{ 'swatch-active': isActive }"
    :style="{
      width: `${radio}px`,
      height: `${radio}px`,
      backgroundColor: color,
    }"
    @click="onHandleClick"
  />
</template>

<style scoped>
.swatch {
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;
}

.swatch:hover {
  opacity: 1;
}

.swatch-active {
  opacity: 1;
}
</style>

<script setup>
/* Vue Imports */
import { defineProps, defineEmits, ref } from "vue";

/* Register events */
const emits = defineEmits(["update:color"]);

/* Register props */
const props = defineProps({
    color: {
        type: String,
        default: "#000000",
        required: false,
    },
    radio: {
        type: Number,
        default: 15,
        required: false,
    },
    isActive: {
        type: Boolean,
        default: false,
        required: false,
    },
});

/* Methods */

const onHandleClick = () => {
    emits("update:color", { color: props.color });
};
</script>
