import { ref, computed } from 'vue';
import { Search, X, ChevronDown, Trash2 } from 'lucide-vue-next';
import PetList from '@/components/PetList.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
const searchQuery = ref('');
const activeFilter = ref('');
const filters = [
    {
        name: 'Tamaño',
        options: ['Pequeño', 'Mediano', 'Grande']
    },
    {
        name: 'Especie',
        options: ['Perro', 'Gato']
    },
    {
        name: 'Sexo',
        options: ['Macho', 'Hembra']
    },
    {
        name: 'Edad',
        options: ['Cachorro', 'Joven', 'Adulto', 'Senior']
    },
    {
        name: 'Estado',
        options: ['Disponible', 'En proceso', 'Adoptado']
    },
];
const selectedFilters = ref({});
// Initialize selectedFilters with empty arrays for each filter
filters.forEach(filter => {
    selectedFilters.value[filter.name] = [];
});
const hasActiveFilters = computed(() => {
    return Object.values(selectedFilters.value).some(filterArray => filterArray.length > 0) || searchQuery.value !== '';
});
const toggleFilter = (filterName) => {
    activeFilter.value = activeFilter.value === filterName ? '' : filterName;
};
const closeFilter = (filterName) => {
    if (activeFilter.value === filterName) {
        activeFilter.value = '';
    }
};
const clearFilters = () => {
    searchQuery.value = '';
    Object.keys(selectedFilters.value).forEach(key => {
        selectedFilters.value[key] = [];
    });
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
['max-h-60', 'max-h-60', 'max-h-60',];
// CSS variable injection 
// CSS variable injection end 
// @ts-ignore
/** @type { [typeof Navbar, ] } */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const __VLS_5 = {}.RouterView;
/** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: ("flex-grow") },
}));
const __VLS_7 = __VLS_6({
    ...{ class: ("flex-grow") },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: ("relative h-1/2 w-full overflow-hidden flex flex-col") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative flex-grow h-1/2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ("/Rectángulo 12.png"),
    alt: ("Perros del refugio"),
    ...{ class: ("w-full h-full object-cover") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute inset-0 bg-black/50") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute inset-0 flex items-center justify-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto px-4 md:px-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("max-w-2xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: ("bg-[#FF9234] py-4 px-4 md:px-6 flex-shrink-0 h-1/2 flex items-center justify-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto text-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative mb-4 inline-block w-full max-w-3xl") },
});
const __VLS_11 = {}.Search;
/** @type { [typeof __VLS_components.Search, ] } */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    ...{ class: ("absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400") },
    size: ((20)),
}));
const __VLS_13 = __VLS_12({
    ...{ class: ("absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400") },
    size: ((20)),
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: ("text"),
    placeholder: ("Dale un hogar a quién más lo necesita. ¡Adoptalo aquí!"),
    ...{ class: ("w-full pl-12 pr-10 py-3 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD3C]") },
    value: ((__VLS_ctx.searchQuery)),
});
if (__VLS_ctx.searchQuery) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.searchQuery)))
                    return;
                __VLS_ctx.searchQuery = '';
            } },
        ...{ class: ("absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600") },
    });
    const __VLS_17 = {}.X;
    /** @type { [typeof __VLS_components.X, ] } */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
        size: ((20)),
    }));
    const __VLS_19 = __VLS_18({
        size: ((20)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex flex-wrap gap-6 items-center justify-center") },
});
for (const [filter] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((filter.name)),
        ...{ class: ("relative") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleFilter(filter.name);
            } },
        ...{ class: ("cursor-pointer text-white hover:text-[#FAFCB4] transition-colors flex items-center gap-1") },
        ...{ class: (({ 'text-[#FAFCB4]': __VLS_ctx.activeFilter === filter.name })) },
    });
    (filter.name);
    const __VLS_23 = {}.ChevronDown;
    /** @type { [typeof __VLS_components.ChevronDown, ] } */ ;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
        size: ((16)),
        ...{ class: (({ 'transform rotate-180': __VLS_ctx.activeFilter === filter.name })) },
        ...{ class: ("transition-transform duration-200") },
    }));
    const __VLS_25 = __VLS_24({
        size: ((16)),
        ...{ class: (({ 'transform rotate-180': __VLS_ctx.activeFilter === filter.name })) },
        ...{ class: ("transition-transform duration-200") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    if (__VLS_ctx.activeFilter === filter.name) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute z-50 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 max-h-60 overflow-y-auto") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (() => __VLS_ctx.closeFilter(filter.name)) }, null, null);
        for (const [option] of __VLS_getVForSourceType((filter.options))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
                key: ((option)),
                ...{ class: ("flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
                type: ("checkbox"),
                value: ((option)),
                ...{ class: ("rounded border-gray-300 text-[#FF9234] focus:ring-[#FF9234]") },
            });
            (__VLS_ctx.selectedFilters[filter.name]);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("ml-2") },
            });
            (option);
        }
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.clearFilters) },
    ...{ class: ("px-4 py-2 bg-white rounded-full hover:bg-[#FAFCB4] transition-colors flex items-center gap-2") },
    ...{ class: (({ 'opacity-50 cursor-not-allowed': !__VLS_ctx.hasActiveFilters })) },
    disabled: ((!__VLS_ctx.hasActiveFilters)),
});
const __VLS_29 = {}.Trash2;
/** @type { [typeof __VLS_components.Trash2, ] } */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    size: ((16)),
}));
const __VLS_31 = __VLS_30({
    size: ((16)),
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto") },
});
// @ts-ignore
/** @type { [typeof PetList, ] } */ ;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(PetList, new PetList({}));
const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
// @ts-ignore
/** @type { [typeof Footer, ] } */ ;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
['flex-grow', 'relative', 'h-1/2', 'w-full', 'overflow-hidden', 'flex', 'flex-col', 'relative', 'flex-grow', 'h-1/2', 'w-full', 'h-full', 'object-cover', 'absolute', 'inset-0', 'bg-black/50', 'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'container', 'mx-auto', 'px-4', 'md:px-6', 'max-w-2xl', 'text-3xl', 'md:text-4xl', 'lg:text-5xl', 'font-bold', 'text-white', 'mb-6', 'leading-tight', 'bg-[#FF9234]', 'py-4', 'px-4', 'md:px-6', 'flex-shrink-0', 'h-1/2', 'flex', 'items-center', 'justify-center', 'container', 'mx-auto', 'text-center', 'relative', 'mb-4', 'inline-block', 'w-full', 'max-w-3xl', 'absolute', 'left-4', 'top-1/2', 'transform', '-translate-y-1/2', 'text-gray-400', 'w-full', 'pl-12', 'pr-10', 'py-3', 'rounded-full', 'bg-white', 'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-[#FFCD3C]', 'absolute', 'right-4', 'top-1/2', 'transform', '-translate-y-1/2', 'text-gray-400', 'hover:text-gray-600', 'flex', 'flex-wrap', 'gap-6', 'items-center', 'justify-center', 'relative', 'cursor-pointer', 'text-white', 'hover:text-[#FAFCB4]', 'transition-colors', 'flex', 'items-center', 'gap-1', 'text-[#FAFCB4]', 'transform', 'rotate-180', 'transition-transform', 'duration-200', 'absolute', 'z-50', 'mt-2', 'w-48', 'bg-white', 'rounded-lg', 'shadow-lg', 'py-1', 'max-h-60', 'overflow-y-auto', 'flex', 'items-center', 'px-4', 'py-2', 'hover:bg-gray-100', 'cursor-pointer', 'rounded', 'border-gray-300', 'text-[#FF9234]', 'focus:ring-[#FF9234]', 'ml-2', 'px-4', 'py-2', 'bg-white', 'rounded-full', 'hover:bg-[#FAFCB4]', 'transition-colors', 'flex', 'items-center', 'gap-2', 'opacity-50', 'cursor-not-allowed', 'container', 'mx-auto',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Search: Search,
            X: X,
            ChevronDown: ChevronDown,
            Trash2: Trash2,
            PetList: PetList,
            Navbar: Navbar,
            Footer: Footer,
            searchQuery: searchQuery,
            activeFilter: activeFilter,
            filters: filters,
            selectedFilters: selectedFilters,
            hasActiveFilters: hasActiveFilters,
            toggleFilter: toggleFilter,
            closeFilter: closeFilter,
            clearFilters: clearFilters,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HomeView.vue.js.map