<template>
  <div
    class="flex flex-row gap-2 flex-wrap scroll-container"
    :style="{ maxHeight: '100px', overflowY: 'scroll' }"
  >
    <HairAvatar
      v-for="hair in mappedHairStyles"
      :id="hair.id"
      :image="hair.full_path"
      :key="hair.id"
      @update:selected-hair="handleHairUpdate"
      :isSelected="props.currentSelectedId === hair.id"
    />
  </div>
</template>

<script setup>
/* Vue imports */
import { shallowRef, defineEmits } from "vue";

/* UI Imports */
import { NTabs, NTabPane } from "naive-ui";

/* Component Imports */
import HairAvatar from "./HairAvatar.vue";

/* Utils imports */
import femaleHairStyles from "@/modules/CharacterCreator/utils/FemaleHairStyles.js";
import maleHairStyles from "@/modules/CharacterCreator/utils/MaleHairStyles.js";

/* Register Emits */
const emits = defineEmits(["update:selected-hair"]);

/* Register props */
const props = defineProps({
  forGender: {
    type: String,
    required: true,
    validator: function (value) {
      return value.toLowerCase() === "m" || value.toLowerCase() === "f";
    },
  },
  currentSelectedId: {
    type: Number,
    default: 0,
    required: false,
  },
});

/* Variables */
const mappedHairStyles = shallowRef(
  props.forGender === "m" ? maleHairStyles : femaleHairStyles
);

/* Events methods */
const handleHairUpdate = (id) => {
  emits("update:selected-hair", id);
};
</script>

<style scoped>
.scroll-container {
  max-height: 100px;
  overflow-y: scroll;
}

.scroll-container::-webkit-scrollbar {
  width: 5px;

  border-radius: 50px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #23262e;
  border-radius: 50px;
}
</style>
