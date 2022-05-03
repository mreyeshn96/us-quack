<template>
    <!-- Color de ballo -->
    <section id="hair-color">
        <ColorPalette
            :palette="mappedHairColors"
            @update:color="handleUpdateColor"
        />
    </section>

    <!-- Estilo de pelo -->
    <section id="hair-style">
        <HairStyles />
    </section>

</template>

<script setup>
/* Vue Imports */
import { defineEmits, ref } from 'vue';

/* UI Imports */
import { NTabs, NTabPane } from 'naive-ui';

/* Utils imports */
import hairColors from '@/modules/CharacterCreator/utils/HairColors.js';

/* Components Imports */
import ColorPalette from '@/modules/shared/components/ColorPalette.vue';
import HairStyles from './HairStyles.vue';

/* Register emits */
const emits = defineEmits(['update:color']);

/* Variables */
const mappedHairColors = ref( hairColors.map( color => color.html ) );

/* Methods */
const handleUpdateColor = (color) => {
    console.log("color desde apph");
    emits([ 'update:color' ], color);
};

</script>