import { defineStore } from 'pinia';

export const useCharacterCreatorStore = defineStore('character-store', {
    state: () => ({
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        hair: {
            primaryColor: '',
            style: '',
        }, 
        beard: {
            primaryColor: '',
            secondaryColor: '',
            style: 0,
        },
        eyebrows: {
            primaryColor: '',
            secondaryColor: '',
            style: 0,
        },
        moustache: {
            primaryColor: '',
            secondaryColor: '',
            style: 0,
        },
        facialFeatures: {
            blemishes: 0.0,
            ageing: 0.0,
            freckles: 0.0,
            complexion: 0.0,
            sunDamage: 0.0,
            eyes: 0.0,
            lips: 0.0,
            noseWidth: 0.0,
            noseHeight: 0.0,
            noseLength: 0.0,
            noseBridge: 0.0,
            noseTip: 0.0,
            browHeight: 0.0,
            browWidth: 0.0,
            cheekboneHeight: 0.0,
            cheekboneWidth: 0.0,
            cheeksWidth: 0.0,
            jawWidth: 0.0,
            jawHeight: 0.0,
            chinLength: 0.0,
            chinPosition: 0.0,
            chinWidth: 0.0,
            chinShape: 0.0,
            neckWidth: 0.0,
        },
    }),
    actions: {
        setFirstName( firstName ) {
            this.first_name = firstName;
        },
        setLastName( lastName ) {
            this.last_name = lastName;
        },
        setAge( age ) {
            this.age = age;
        },
        setGender( gender ) {
            this.gender = gender;
        },
        // Hair
        setHairStyle( style_id ) {
            this.hair.style = style_id;
        },
        setPrimaryHairColor( color_html ) {
            this.hair.primaryColor = color_html;
        },
        setSecondaryHairColor( color_html ) {
            this.hair.secondaryColor = color_html;
        },
        // Beard
        setPrimaryBeardColor( color_html ) {
            this.beard.primaryColor = color_html;
        },
        setSecondaryBeardColor( color_html ) {
            this.beard.secondaryColor = color_html;
        },
        setBeardStyle( style_id ) {
            this.beard.style = style_id;
        },
        // Moustache
        setPrimaryMoustacheColor( color_html ) {
            this.moustache.primaryColor = color_html;
        },
        setSecondaryMostacheColor( color_html ) {
            this.moustache.secondaryColor = color_html;
        },
        setMoustacheStyle( style_id ) {
            this.moustache.style = style_id;
        },
        // Chest Hair
        setPrimaryChestHairColor( color_html ) {
            this.chestHairColor = color_html;
        },
        setSecondaryChestHairColor( color_html ) {
            this.chestHairColor = color_html;
        },
        setChestHairStyle( style_id ) {
            this.chestHairStyle = style_id;
        },
       // Eyebrows
       setPrimaryEyeBrowsColor( color_html ) {
           this.eyebrows.primaryColor = color_html;
       },
       setSecondaryEyeBrowsColor( color_html ) {
        this.eyebrows.secondaryColor = color_html;
    },
    },
    getters: {
        isValidGender: function (state) {
            return state.gender.toLowerCase().includes('m') || state.gender.toLowerCase().includes('f');
        }
    }
});