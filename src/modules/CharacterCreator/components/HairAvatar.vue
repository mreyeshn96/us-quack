<template>
    <n-avatar
        size="small"
        src="/assets/hairstyles/"
    />
</template>

<script setup>
/* Vue imports */
import { defineProps } from 'vue';

/* UI Imports */
import { NAvatar } from 'naive-ui';

/* Register props */
const props = defineProps({
    forGender: {
        type: String,
        required: true,
        validator: function (value) {
            return value.toLowerCase() === 'm' || value.toLowerCase() === 'f';
        }
    },
    hairId: {
        type: Number,
        required: true,
        
    }
});



</script>