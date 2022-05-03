import { defineStore } from 'pinia';

export const CharacterCreatorStore = defineStore('character-store', {
    state: () => ({
        first_name: '',
        last_name: '',
        age: '',
        gender: ''
    }),
    actions: {
        setFirstName( firstName ) {
            state.first_name = firstName;
        },
        setLastName( lastName ) {
            state.last_name = lastName;
        },
        setAge( age ) {
            state.age = age;
        },
        setGender( gender ) {
            state.gender = gender;
        }
    }
});