<template>
    <n-collapse arrow-placement="right">
        <n-collapse-item title="Cabello" name="hair">
            <template #header>
                <n-icon><FaceSharp /></n-icon>
                <n-text class="ml-2">Cabello</n-text>
            </template>

            <AppearanceHair />
            
        </n-collapse-item>
    </n-collapse>
</template>

<script setup>
/* Vue imports */

/* UI imports */
import { NCollapse, NCollapseItem, NIcon, NText } from 'naive-ui';
import { FaceSharp } from '@vicons/material';

/* Component imports */
import AppearanceHair from './AppearanceHair.vue';

</script>