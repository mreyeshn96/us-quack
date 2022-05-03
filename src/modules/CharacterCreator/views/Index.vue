<template>
    <n-config-provider :theme="darkTheme">
        <div class="container-creator">
            <CharacterEditor />
        </div>
    </n-config-provider>
</template>


<script setup>

import CharacterEditor from '../components/CharacterEditor.vue';
import { NConfigProvider, darkTheme } from 'naive-ui';


</script>


<style scoped>

.container-creator {
    width: 350px;
    height: 300px;
    margin: 3px;

}

</style>