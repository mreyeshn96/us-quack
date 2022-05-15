<template>
  <section id="facial-features" class="flex flex-col gap-2" v-if="gender">
    <n-scrollbar style="max-height: 120px">
      <div class="flex flex-col gap-2">
        <n-text strong>General</n-text>

        <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Blemishes</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.blemishes"/>
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Ageing</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.ageing" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Moles / Freckles</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.freckles" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Complexion</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.complexion" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Sun Damage</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.sunDamage" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Ojos</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.eyes" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Labios</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.lips" />
          </div>

        </div>

        <n-text strong>Nariz</n-text>

        <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Width</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.noseWidth" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Height</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.noseHeight" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Length</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.noseLength" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">Bridge</div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.noseBridge" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">Tip</div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.noseTip" />
          </div>

          <n-text strong>Frente</n-text>
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Width</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.browWidth" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Height</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.browHeight" />
          </div>

          
        </div>
        
        <n-text strong>Pomulos</n-text>

         <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Width</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.cheekboneWidth" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Height</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.cheekboneHeight" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Length</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.cheekboneLength" />
          </div>
        </div>


         <n-text strong>Mandíbula</n-text>

         <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Width</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.jawWidth" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Height</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.jawHeight" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Length</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.jawLength" />
          </div>
        </div>

         <n-text strong>Barbilla</n-text>

         <div class="flex flex-col gap-1">
          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Length</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.chinLength" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Position</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.chinPosition" />
          </div>

          <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Width</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.chinWidth" />
          </div>

           <div class="flex flex-row items-center space-around">
            <div class="w-44">
              <n-text>Shape</n-text>
            </div>
            <n-slider :min="-1.0" :max="1.0" v-model:value="facialFeatures.chinShape" />
          </div>
        </div>
      </div>
    </n-scrollbar>
  </section>

  <section v-else>
    <GenderIsRequired />
  </section>
</template>

<script setup>
/* Vue imports */
import { ref } from "vue";

/* Store imports */
import { storeToRefs } from "pinia";
import { useCharacterCreatorStore } from "@/store/CharacterCreatorStore";

/* UI Imports */
import {
  NSlider,
  NText,
  NRadioGroup,
  NRadioButton,
  NIcon,
  NScrollbar,
  NSpace,
} from "naive-ui";
import { QuestionMarkFilled } from "@vicons/material";

/* Component Imports */
import GenderIsRequired from "./GenderIsRequired.vue";

/* Variables */
const store = useCharacterCreatorStore();
const { gender, facialFeatures, blemishes } = storeToRefs(store);
const currentFeature = ref("");
</script>
