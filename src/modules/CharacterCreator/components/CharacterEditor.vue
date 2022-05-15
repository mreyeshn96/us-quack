<template>
  Hello from CharacterEditor

  <n-card title="Creador de personajes">
    <n-tabs type="segment">
      <n-tab-pane name="basicInformation" tab="Información">
        <template #tab>
          <n-icon :size="20"><InfoFilled /></n-icon>
        </template>
        <div><BasicInformation /></div>
      </n-tab-pane>

      <n-tab-pane name="genetics" tab="Genética">
        <template #tab>
          <n-icon :size="20"><BedroomBabyFilled /></n-icon>
        </template>
        <div>B</div>
      </n-tab-pane>

      <n-tab-pane name="appearance" tab="Apariencia">
        <template #tab>
          <n-icon :size="20"><FaceFilled /></n-icon>
        </template>
        <div>
          <Appearance />
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>

  <n-card title="Previsualización de datos" class="mt-2">
    <div class="flex flex-col gap-2">
      <span>Primer nombre: {{ store.first_name ?? "-" }}</span>
      <span>Primer apellido: {{ store.last_name ?? "-" }}</span>
      <span>Edad: {{ store.age ?? "-" }}</span>
      <span>Sexo: {{ store.gender ?? "-" }}</span>
      <span>Estilo de pelo: {{ store.hair.style }}</span>
      <span>Color de pelo: {{ store.hair.primaryColor }}</span>
      <span>Color de barba 1: {{ store.beard.primaryColor }}</span>
      <span>Color de barba 2: {{ store.beard.secondaryColor }}</span>
      <span>Estilo de barba: {{ store.beard.style }}</span>
      <span>Color de cejas 1: {{ store.eyebrows.primaryColor }}</span>
      <span>Color de cejas 2: {{ store.eyebrows.secondaryColor }}</span>
      <span>Estilo de cejas: {{ store.eyebrows.style }}</span>
      <span>Blemishes: {{ store.facialFeatures.blemishes }}</span>
    </div>
  </n-card>
</template>

<script setup>
/* Vue Imports */
import { ref, reactive } from "vue";

/* Store imports */
import { useCharacterCreatorStore } from "@/store/CharacterCreatorStore";

/* UI Imports */
import { NCard, NTabs, NTabPane, NIcon, NSteps, NStep } from "naive-ui";
import { BedroomBabyFilled, InfoFilled, FaceFilled } from "@vicons/material";

/* Component Imports */
import BasicInformation from "./BasicInformation.vue";
import Appearance from "./Appearance.vue";

/* Utils Imports */
import { typeBasicInformation } from "@/modules/CharacterCreator/utils/typeBasicInformation.js";
import { getGenderString } from "@/modules/CharacterCreator/utils/utils.js";

/* Variables */
const basicInformation = reactive(typeBasicInformation);
const store = useCharacterCreatorStore();
const currentRef = ref(1);
const currentStatusRef = ref("process");

/* Actions */
const handleBasicInformation = ({ event, defaultTargetName }) => {
  basicInformation[event.target.name || defaultTargetName] = event.target.value;
};

const handleHairColor = (color) => {
  basicInformation["hair_color"] = color;
};
</script>
