<template>
  <section
    id="AppearanceHair"
    class="flex flex-col gap-2"
    v-if="store.isValidGender"
  >
    <!-- Color de ballo -->
    <section id="hair-color" class="flex flex-col gap-2"></section>

    <!-- Estilo de pelo -->
    <section id="hair-style" class="flex flex-col gap-2">
      <n-tabs type="bar" size="medium" :bar-width="100" animated>
        <n-tab-pane name="head-hair" tab="Cabeza" :bar-width="100">
          <n-text strong>Selecciona un tinte/color de cabello:</n-text>
          <ColorPaletteAsync
            :palette="mappedHairColors"
            @update:color="handleHairPrimaryColorUpdate"
            :currentColor="hair.primaryColor"
          />
          <div v-if="store.isValidGender">
            <n-text>Selecciona un estilo de cabello:</n-text>
            <HairStylesAsync
              :forGender="gender"
              @update:selected-hair="handleStylesUpdate"
              :currentSelectedId="hair.style"
            />
          </div>
        </n-tab-pane>

        <!-- Facial Hair: Beard, Moustache -->
        <n-tab-pane name="facial-hair" tab="Facial">
          
          <!-- Selector del area -->
          <n-radio-group v-model:value="refFacialHairRadio">
            <n-radio-button name="facial-area" label="Barba" value="facial_features.beard" />
            <n-radio-button name="facial-area" label="Bigote" value="facial_features.moustache" />
            <n-radio-button name="facial-area" label="Cejas" value="facial_features.eyebrows" />
          </n-radio-group>


          <!-- Barba -->
          <div class="flex flex-col gap-2" v-if="refFacialHairRadio === 'facial_features.beard'">

            <!-- Selector de color -->
            <n-text strong>Selecciona el color primario de la barba: </n-text>
            <ColorPaletteAsync :palette="mappedHairColors" @update:color="handleBeardPrimaryColorUpdate" :currentColor="beard.primaryColor"/>
             
            <n-text strong>Selecciona el color secundario de la barba:</n-text>
            <ColorPaletteAsync :palette="mappedHairColors" @update:color="handleBeardSecondaryColorUpdate" :currentColor="beard.secondaryColor"/>

            <n-text strong>Selecciona el estilo de la barba:</n-text>
            <n-slider :min="0" :max="10" v-model:value="beard.style" />
        
          </div>

          <!-- Cejas -->
          <div class="flex flex-col gap-2" v-if="refFacialHairRadio === 'facial_features.eyebrows'">

            <!-- Selector de color -->
            <n-text strong>Selecciona el color primario de la cejas: </n-text>
            <ColorPaletteAsync :palette="mappedHairColors" @update:color="handlePrimaryEyeBrowsColorUpdate" :currentColor="eyebrows.primaryColor"/>
             
            <n-text strong>Selecciona el color secundario de la cejas:</n-text>
            <ColorPaletteAsync :palette="mappedHairColors" @update:color="handleSecondaryEyeBrowsColorUpdate" :currentColor="eyebrows.secondaryColor"/>

            <!-- Selector de estilo -->
            <n-text strong>Selecciona el estilo de las cejas:</n-text>
            <n-slider :min="0" :max="10" v-model:value="eyebrows.style" />
        
          </div>

          

          
        </n-tab-pane>
      </n-tabs>

      <!-- <div v-else class="mt-2">
      <n-alert title="Warning Text" type="warning" closable>
        Antes de seleccionar un estilo de cabello, selecciona si el sexo del personaje.
      </n-alert>
    </div> -->
    </section>
  </section>
  <section v-else>
    <n-text type="warning"
      >Esta sección require que el sexo de tu personaje este
      seleccionado.</n-text
    >
  </section>
</template>

<script setup>
/* Vue Imports */
import { shallowRef, defineAsyncComponent, ref } from "vue";

/* Store imports */
import { storeToRefs } from "pinia";
import { useCharacterCreatorStore } from "@/store/CharacterCreatorStore.js";

/* UI Imports */
import {
  NTabs,
  NTabPane,
  NSpin,
  NAlert,
  NText,
  NSlider,
  NRadioGroup,
  NRadioButton,
  NPopover,
  NButton,
  NIcon,
} from "naive-ui";

import { CircleFilled } from '@vicons/material';

/* Utils imports */
import hairColors from "@/modules/CharacterCreator/utils/HairColors.js";

/* Components Imports */

const ColorPaletteAsync = defineAsyncComponent({
  loader: () => import("@/modules/shared/components/ColorPalette.vue"),
  loadingComponent: NSpin,
  delay: 200,
});

const HairStylesAsync = defineAsyncComponent({
  loader: () => import("./HairStyles.vue"),
  loadingComponent: NSpin,
  delay: 200,
});

/* Register emits */
// Nothing to do here.

/* Variables */
const mappedHairColors = shallowRef(hairColors.map((color) => color.html));
const store = useCharacterCreatorStore();
const {
  gender,
  hair,
  beard,
  moustache,
  eyebrows,
} = storeToRefs(store);

const refFacialHairRadio = ref("");

/* Events Methods */
const handleHairPrimaryColorUpdate = (color) => {
  store.setPrimaryHairColor(color);
};

const handleBeardPrimaryColorUpdate = (color) => {
  store.setPrimaryBeardColor(color);
};

const handleBeardSecondaryColorUpdate = (color) => {
  store.setSecondaryBeardColor(color);
}

const handleMoustacheColorUpdate = (color) => {
  store.setPrimaryMoustacheColor(color);
};

const handleChestHatUpdate = (color) => {
  store.setChestHairColor(color);
};

const handleStylesUpdate = (e) => {
  store.setHairStyle(e);
};

const handlePrimaryEyeBrowsColorUpdate = (e) => {
  store.setPrimaryEyeBrowsColor(e);
}

const handleSecondaryEyeBrowsColorUpdate = (e) => {
  store.setSecondaryEyeBrowsColor(e);
}

</script>
