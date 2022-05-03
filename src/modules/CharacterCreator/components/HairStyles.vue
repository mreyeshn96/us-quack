<template>
  <n-tabs type="line" size="large" animated>
    <n-tab-pane name="head-hair" tab="Cabello">
        <div class="flex flex-row gap-2">
             <HairAvatar
                :v-for="(hair, index) in mappedHairStyles"
                :hairId="hair"
                :key="index"
                :forGender="props.forGender"
            />
        </div>
    </n-tab-pane>

    <n-tab-pane name="facial-hair" tab="Cara"> ssa </n-tab-pane>
  </n-tabs>
</template>

<script setup>
/* Vue imports */
import { defineProps, ref } from 'vue';

/* UI Imports */
import { NTabs, NTabPane } from 'naive-ui';

/* Component Imports */
import HairAvatar from './HairAvatar.vue';

/* Utils imports */
import femaleHairStyles from '@/modules/CharacterCreator/utils/FemaleHairStyles.js';
import maleHairStyles from '@/modules/CharacterCreator/utils/MaleHairStyles.js';

/* Register props */
const props = defineProps({
    forGender: {
        type: String,
        required: true,
        validator: function (value) {
            return value.toLowerCase() === 'm' || value.toLowerCase() === 'f';
        }
    }
});

/* Variables */
const mappedHairStyles = ref( props.forGender === 'm' ? maleHairStyles.map( e => e.id ) : femaleHairStyles.map( e => e.id ) );

</script>
