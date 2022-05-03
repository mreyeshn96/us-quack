<template>
   <div class="flex flex-wrap gap-2">
        <ColorSwatch
            v-for="(color, index) in palette"
            :key="index"
            :color="color"
            :isActive="color === currentHairColor"
            @update:color="onUpdateColor"
        />
   </div>
</template>

<script setup>

/* Vue Imports */
import { defineProps, defineEmits, ref } from 'vue';

/* Component Imports */
import ColorSwatch from './ColorSwatch.vue';

/* Register emits */
const emits = defineEmits(['update:color']);

/* Register props */
const props = defineProps({
    palette: {
        type: Array,
        required: true
    }
});

/* Reactive Imports */
const currentHairColor = ref('');

/* Methods */

/**
 * Handle color change
 * @param {string} color
 */
const onUpdateColor = ({ color }) => {
    currentHairColor.value = color;
    emits('update:color', color);

};


</script>