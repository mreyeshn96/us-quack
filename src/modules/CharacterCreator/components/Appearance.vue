<template>
  <n-collapse arrow-placement="right">
    <!-- Cuero cabeludo, barba y  bigote -->
    <n-collapse-item title="Cabello" name="hair">
      <template #header>
        <n-icon :size="20"><ContentCutFilled /></n-icon>
        <n-text class="ml-2">Cabello</n-text>
      </template>

      <AppearanceHair />
    </n-collapse-item>

    <n-collapse-item title="Rasgos" name="facial-features">
      <template #header>
        <n-icon :size="20"><FaceRetouchingNaturalSharp /></n-icon>
        <n-text class="ml-2">Rasgos faciales</n-text>
      </template>

      <AppearanceFacialFeatures />
    </n-collapse-item>

    <n-collapse-item title="Rasgos del personaje" name="character-features">
      <template #header>
        <n-icon :size="20"><BoltFilled /></n-icon>
        <n-text class="ml-2">Rasgos del personaje</n-text>
      </template>

      
    </n-collapse-item>

<n-collapse-item title="Conjunto de ropa" name="outfit">
      <template #header>
        <n-icon :size="20"><AccessibilityNewOutlined /></n-icon>
        <n-text class="ml-2">Conjunto de ropa</n-text>
      </template>

      
    </n-collapse-item>

    
  </n-collapse>
</template>

<script setup>
/* Vue imports */

/* UI imports */
import { NCollapse, NCollapseItem, NIcon, NText } from "naive-ui";
import { FaceSharp, ContentCutFilled, FaceRetouchingNaturalSharp, AccessibilityNewOutlined, BoltFilled} from "@vicons/material";

/* Component imports */
import AppearanceHair from "./AppearanceHair.vue";
import AppearanceFacialFeatures from './AppearanceFacialFeatures.vue';
</script>
