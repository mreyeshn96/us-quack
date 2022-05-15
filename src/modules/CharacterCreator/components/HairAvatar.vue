<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-avatar
        size="large"
        :src="image"
        class="opacity-50 hover:opacity-100 cursor-pointer"
        :class="{ 'border-2 border-white opacity-100': isSelected }"
        @click="handleClick"
        />
    </template>
    <n-avatar :size="90" :src="image" :keep-alive-on-hover="false"/>
  </n-popover>
</template>

<script setup>
/* Vue imports */
import { defineProps, ref, defineEmits } from "vue";

/* UI Imports */
import { NAvatar, NPopover} from "naive-ui";

/* Register emits */
const emits = defineEmits(["update:selected-hair"]);

/* Register props */
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  isSelected: {
    type: Boolean,
    default: false,
    required: false
  },
});

/* Variables */
// Nothingg to do here

/* Functions */
const handleClick = (e) => {
  if( props.selectable == false )
  {
    return;
  }

  emits("update:selected-hair", props.id);

}

</script>
