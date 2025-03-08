import { ref } from 'vue';
import PetCard from './PetCard.vue';
const pets = ref([
    {
        id: 1,
        name: 'Tuki',
        image: '/HuellasFelices.png',
        species: 'cat'
    },
    {
        id: 2,
        name: 'Rocky',
        image: '/HuellasFelices.png',
        species: 'dog'
    },
    {
        id: 3,
        name: 'Simba',
        image: '/HuellasFelices.png',
        species: 'cat'
    },
    {
        id: 4,
        name: 'Tango',
        image: '/HuellasFelices.png',
        species: 'dog'
    },
    {
        id: 5,
        name: 'Coco',
        image: '/HuellasFelices.png',
        species: 'dog'
    },
    {
        id: 6,
        name: 'Piti',
        image: '/HuellasFelices.png',
        species: 'cat'
    },
    {
        id: 7,
        name: 'Max',
        image: '/HuellasFelices.png',
        species: 'dog'
    },
    {
        id: 8,
        name: 'Luli',
        image: '/HuellasFelices.png',
        species: 'cat'
    },
    {
        id: 9,
        name: 'Titan',
        image: '/HuellasFelices.png',
        species: 'dog'
    },
]);
const handlePetClick = (pet) => {
    // Navegar a la página de detalles de la mascota
    console.log('Pet clicked:', pet);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-4") },
});
for (const [pet] of __VLS_getVForSourceType((__VLS_ctx.pets))) {
    // @ts-ignore
    /** @type { [typeof PetCard, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PetCard, new PetCard({
        ...{ 'onClick': {} },
        key: ((pet.id)),
        pet: ((pet)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClick': {} },
        key: ((pet.id)),
        pet: ((pet)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handlePetClick(pet);
        }
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
}
['grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'p-6', 'm-4',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PetCard: PetCard,
            pets: pets,
            handlePetClick: handlePetClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=PetList.vue.js.map