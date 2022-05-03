<template>
    Hello from CharacterEditor
    <n-form>
        <n-card title="Creador de personajes">
            <n-tabs type="segment">
                <n-tab-pane name="basicInformation" tab="Información">
                    <div>
                        <BasicInformation
                            @handle:input="handleBasicInformation"
                        />
                    </div>
                </n-tab-pane>

                <n-tab-pane name="genetics" tab="Genética">
                    <div>
                        B
                    </div>
                </n-tab-pane>

                <n-tab-pane name="appearance" tab="Apariencia">
                    <div>
                     <Appearance />
                    </div>
                </n-tab-pane>
            </n-tabs>
        </n-card>
    </n-form>

    <n-card title="Previsualización de datos" class="mt-2">
        <div class="flex flex-col gap-2">
            <span>Primer nombre: {{ basicInformation['first_name'] ?? "-"}}</span>
            <span>Primer apellido: {{ basicInformation['last_name'] ?? "-"}}</span>
            <span>Edad: {{ getGenderString(basicInformation['age']) || "-" }}</span>
            <span>Color de pelo: {{ basicInformation['hair_color'] || '-' }}</span>
        </div>
    </n-card>
</template>


<script setup>
/* Vue Imports */
import { defineProps, defineEmits, reactive } from 'vue';

/* UI Imports */
import { NCard, NTabs, NTabPane, NForm, NFormItem } from 'naive-ui';

/* Component Imports */
import BasicInformation from './BasicInformation.vue';
import Appearance from './Appearance.vue';

/* Utils Imports */
import { typeBasicInformation } from '@/modules/CharacterCreator/utils/typeBasicInformation.js';
import { getGenderString } from '@/modules/CharacterCreator/utils/utils.js';

/* Reactive variables */
const basicInformation = reactive(typeBasicInformation);

/* Actions */
const handleBasicInformation = ({ event, defaultTargetName }) => {
    
    basicInformation[event.target.name || defaultTargetName] = event.target.value;
};

const handleHairColor = ( color ) => {
    basicInformation['hair_color'] = color;
}

</script>