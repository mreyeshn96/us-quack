<template>
    <section id="basic-information" class="flex flex-col gap-1">
        <n-text strong>Nombre:</n-text>
        <section id="full-name" class="flex flex-row gap-1">
            
            <!-- First Name -->
            <n-input
                @input="handleFirstNameInput"
                :input-props="{'name': 'first_name'}"
                type="text"
                :value="first_name"
                placeholder="Primer nombre"/>
            <!-- Last Name -->
            <n-input
                @input="handleLastNameInput"
                 :input-props="{'name': 'last_name'}"
                 :value="last_name"
                 placeholder="Primer apellido"/>
        </section>

<n-text strong>Edad:</n-text>
        <section id="age" class="flex flex-row gap-1">
            
            <!-- Age -->
            <n-input
                @input="handleAgeInput"
                :input-props="{'name': 'age'}"
                @keypress="keyPressedIsNumber($event)"
                :value="age"
                placeholder="Edad"
            >
                <template #prefix>
                    <n-icon> <CakeFilled /> </n-icon>
                </template>
            </n-input> 

            
        </section>

                <n-text strong>Genero:</n-text>
        <section id="gender">
            
            <!-- Seleccionar genero -->
            <n-radio-group
                name="gender"
                @input="handleGenderInput"
                :value="gender"
                >
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
import { defineProps, defineEmits, watch } from 'vue';

/* Store Imports */
import { storeToRefs } from 'pinia';
import { useCharacterCreatorStore } from '@/store/CharacterCreatorStore';

/* UI Imports */
import { NInput, NInputNumber, NRadioGroup, NRadioButton, NIcon, NText } from 'naive-ui';
import { FemaleFilled, MaleFilled, CakeFilled } from '@vicons/material';

/* Register emits */
const emits = defineEmits(['handle:input']);

/* Variables */
const store = useCharacterCreatorStore();
const { first_name, last_name, age, gender } = storeToRefs( store );

/* Functions */

/**
 * Send the input event to the parent component
 * @param {Event} e - This is value of input
 */

const handleFirstNameInput = (e) => {
    store.setFirstName(e);
}

const handleLastNameInput = (e) => {
    store.setLastName(e);
}

const handleAgeInput = (e) => {
    store.setAge(e);
}

const handleGenderInput = (e) => {
    // Update gender state
    store.setGender(e.target.value);

    // Update hairStyle for to avoid problems.
    store.setHairStyle(0)
}


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


watch( first_name, () => {
    console.log("First name changed");
});

</script>


<style scoped>
.n-radio-button__state-border {
    border-top-right-radius: 50px;
}
</style>