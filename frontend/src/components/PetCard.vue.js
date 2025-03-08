import { computed } from 'vue';
import { Cat, Dog } from 'lucide-vue-next';
const props = defineProps();
const __VLS_emit = defineEmits();
// Computed
const speciesIcon = computed(() => {
    return props.pet.species === 'cat' ? Cat : Dog;
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('click');
        } },
    ...{ class: ("bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 m-3") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative aspect-square") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ((__VLS_ctx.pet.image)),
    alt: ((__VLS_ctx.pet.name)),
    ...{ class: ("w-full h-full object-cover") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: ("text-lg font-semibold text-gray-800") },
});
(__VLS_ctx.pet.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("text-[#FF9234]") },
});
const __VLS_0 = ((__VLS_ctx.speciesIcon));
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    size: ((20)),
}));
const __VLS_2 = __VLS_1({
    size: ((20)),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-2 flex items-center gap-2 text-sm text-gray-600") },
});
var __VLS_6 = {};
['bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'cursor-pointer', 'transform', 'transition-transform', 'duration-300', 'hover:scale-105', 'm-3', 'relative', 'aspect-square', 'w-full', 'h-full', 'object-cover', 'p-4', 'flex', 'items-center', 'justify-between', 'text-lg', 'font-semibold', 'text-gray-800', 'text-[#FF9234]', 'mt-2', 'flex', 'items-center', 'gap-2', 'text-sm', 'text-gray-600',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            speciesIcon: speciesIcon,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=PetCard.vue.js.map