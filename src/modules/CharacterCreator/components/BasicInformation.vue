<template>
    <section id="basic-information" class="flex flex-col gap-1">
        <section id="full-name" class="flex flex-row gap-1">
            <!-- First Name -->
            <n-input
                @input.capture="handleInput($event)"
                :input-props="{'name': 'first_name'}"
                type="text"
                placeholder="Primer nombre"/>
            <!-- Last Name -->
            <n-input
                 @input.capture="handleInput($event)"
                 :input-props="{'name': 'last_name'}"
                 placeholder="Primer apellido"/>
        </section>

        <section id="age" class="flex flex-row gap-1">
            <!-- Age -->
            <n-input
                @input.capture="handleInput($event)"
                :input-props="{'name': 'age'}"
                @keypress="keyPressedIsNumber($event)"
                placeholder="Edad"
            >
                <template #prefix>
                    <n-icon> <CakeFilled /> </n-icon>
                </template>
            </n-input> 

            
        </section>

        <section id="gender">
            <!-- Seleccionar genero -->
            <n-radio-group
                name="gender"
                @input="handleInput($event)">
                <n-radio-button value="f" key="gender-f">
                    <n-icon> <FemaleFilled /> </n-icon>
                    Mujer
                </n-radio-button>
                <n-radio-button value="m" key="gender-m" label="Hombre">
                    <n-icon> <MaleFilled /> </n-icon>
                    Hombre
                </n-radio-button>

            </n-radio-group>
        </section>
    </section>
</template>


<script setup>
/* Vue Imports */
import { defineProps, defineEmits, onMounted } from 'vue';

/* UI Imports */
import { NInput, NInputNumber, NRadioGroup, NRadioButton, NIcon } from 'naive-ui';
import { FemaleFilled, MaleFilled, CakeFilled } from '@vicons/material';

/* Define emits */
const emits = defineEmits(['handle:input']);

/* Functions */

/**
 * Send the input event to the parent component
 * @param {Event} e
 */

const handleInput = (e, defaultTargetName = '') => {
    emits('handle:input', { event: e, defaultTargetName });
};

const handleRadioButton = (e, defaultTargetName = '') => {
    emits('handle:radio', { event: e, defaultTargetName });
};

/**
 * Check if the key pressed is a number
 * * @param {Event} e
 */
const keyPressedIsNumber = (e) => {
    if( !Number.isInteger( Number(e.key)  )) {
        console.log("No es un numero");
        return e.preventDefault();
    }
};

</script>


<style scoped>
.n-radio-button__state-border {
    border-top-right-radius: 50px;
}
</style>