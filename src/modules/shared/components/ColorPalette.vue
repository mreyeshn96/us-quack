<template>
   <div class="flex flex-wrap gap-2">
        <ColorSwatch
            v-for="(color, index) in palette"
            :key="index"
            :color="color"
            :isActive="color === currentColor"
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
    },
    currentColor: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'swatch',
        required: false
    }
});

/* Reactive Imports */
const triggerColor = ref('');
const selectedNumColor = ref('');

/* Methods */

/**
 * Handle color change
 * @param {string} color
 */
const onUpdateColor = ({ color }) => {
    triggerColor.value = color;
    emits('update:color', color);

};


</script>