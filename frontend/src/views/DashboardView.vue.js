import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Home, PawPrint, Calendar, Heart, DollarSign, Bell, Settings, Search, Plus, ChevronDown } from 'lucide-vue-next';
const route = useRoute();
const navigationItems = [
    { name: 'Inicio', path: '/dashboard', icon: Home },
    { name: 'Gestión de animales', path: '/pets', icon: PawPrint },
    { name: 'Citas programadas', path: '/appointments', icon: Calendar },
    {
        name: 'Adopciones',
        path: '/adoptions',
        icon: Heart,
        hasSubmenu: true,
        isOpen: false,
        submenu: [
            { name: 'Seguimiento', path: '/adoptions/tracking' },
            { name: 'Documentación', path: '/adoptions/documents' },
            { name: 'Contacto con adoptantes', path: '/adoptions/contacts' }
        ]
    },
    { name: 'Donaciones', path: '/donations', icon: DollarSign },
    { name: 'Notificaciones', path: '/notifications', icon: Bell },
    { name: 'Configuración', path: '/settings', icon: Settings }
];
const pets = ref([
    {
        id: 1,
        name: 'Piti',
        type: 'Gato',
        age: '2 años',
        status: 'En adopción',
        image: '/pets/piti.jpg'
    },
    {
        id: 2,
        name: 'Tango',
        type: 'Perro',
        age: '3 años',
        status: 'Adoptado',
        image: '/pets/tango.jpg'
    },
    {
        id: 3,
        name: 'Coco',
        type: 'Perro',
        age: '1 año',
        status: 'En tratamiento',
        image: '/pets/coco.jpg'
    },
    {
        id: 4,
        name: 'Rocky',
        type: 'Perro',
        age: '2 años',
        status: 'En adopción',
        image: '/pets/rocky.jpg'
    }
]);
const getStatusClass = (status) => {
    const classes = {
        'En adopción': 'bg-blue-100 text-blue-800',
        'Adoptado': 'bg-green-100 text-green-800',
        'En tratamiento': 'bg-yellow-100 text-yellow-800'
    };
    return classes[status] || 'bg-gray-100 text-gray-800';
};
const openAddPetModal = () => {
    // Implementar lógica para abrir modal de agregar mascota
    console.log('Abrir modal de agregar mascota');
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen bg-gray-100") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({
    ...{ class: ("fixed inset-y-0 left-0 w-64 bg-[#253B06] text-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ("/HuellasFelices.png"),
    alt: ("Huellas Felices"),
    ...{ class: ("h-12") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("px-4 mb-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative") },
});
const __VLS_0 = {}.Search;
/** @type { [typeof __VLS_components.Search, ] } */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400") },
    size: ((16)),
}));
const __VLS_2 = __VLS_1({
    ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400") },
    size: ((16)),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: ("text"),
    placeholder: ("Buscar mascotas"),
    ...{ class: ("w-full pl-10 pr-4 py-2 text-sm bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9234] text-white placeholder-gray-400") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: ("space-y-1 px-2") },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigationItems))) {
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        key: ((item.name)),
        to: ((item.path)),
        ...{ class: ("flex items-center px-2 py-2 text-sm rounded-md transition-colors") },
        ...{ class: (([
                __VLS_ctx.route.path === item.path
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
            ])) },
    }));
    const __VLS_8 = __VLS_7({
        key: ((item.name)),
        to: ((item.path)),
        ...{ class: ("flex items-center px-2 py-2 text-sm rounded-md transition-colors") },
        ...{ class: (([
                __VLS_ctx.route.path === item.path
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
            ])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = ((item.icon));
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ("mr-3 h-5 w-5") },
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ("mr-3 h-5 w-5") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    (item.name);
    if (item.hasSubmenu) {
        const __VLS_18 = {}.ChevronDown;
        /** @type { [typeof __VLS_components.ChevronDown, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            ...{ class: ("ml-auto h-4 w-4") },
            ...{ class: (({ 'transform rotate-180': item.isOpen })) },
        }));
        const __VLS_20 = __VLS_19({
            ...{ class: ("ml-auto h-4 w-4") },
            ...{ class: (({ 'transform rotate-180': item.isOpen })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    }
    __VLS_11.slots.default;
    var __VLS_11;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
    ...{ class: ("pl-64") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: ("bg-white shadow") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center px-6 py-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-semibold text-gray-900") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (__VLS_ctx.openAddPetModal) },
    href: ("/pets/add"),
    ...{ class: ("inline-flex items-center px-4 py-2 bg-[#FF9234] text-white rounded-md hover:bg-[#ff8010] transition-colors") },
});
const __VLS_24 = {}.Plus;
/** @type { [typeof __VLS_components.Plus, ] } */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ...{ class: ("h-5 w-5 mr-2") },
}));
const __VLS_26 = __VLS_25({
    ...{ class: ("h-5 w-5 mr-2") },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6") },
});
for (const [pet] of __VLS_getVForSourceType((__VLS_ctx.pets))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((pet.id)),
        ...{ class: ("bg-white rounded-lg shadow overflow-hidden") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: ((pet.image)),
        alt: ((pet.name)),
        ...{ class: ("w-full h-48 object-cover") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-lg font-semibold text-gray-900") },
    });
    (pet.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-sm text-gray-500") },
    });
    (pet.type);
    (pet.age);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("px-2 py-1 text-xs rounded-full") },
        ...{ class: ((__VLS_ctx.getStatusClass(pet.status))) },
    });
    (pet.status);
}
['min-h-screen', 'bg-gray-100', 'fixed', 'inset-y-0', 'left-0', 'w-64', 'bg-[#253B06]', 'text-white', 'p-4', 'h-12', 'px-4', 'mb-4', 'relative', 'absolute', 'left-3', 'top-1/2', 'transform', '-translate-y-1/2', 'text-gray-400', 'w-full', 'pl-10', 'pr-4', 'py-2', 'text-sm', 'bg-white/10', 'rounded-md', 'focus:outline-none', 'focus:ring-2', 'focus:ring-[#FF9234]', 'text-white', 'placeholder-gray-400', 'space-y-1', 'px-2', 'flex', 'items-center', 'px-2', 'py-2', 'text-sm', 'rounded-md', 'transition-colors', 'mr-3', 'h-5', 'w-5', 'ml-auto', 'h-4', 'w-4', 'transform', 'rotate-180', 'pl-64', 'bg-white', 'shadow', 'flex', 'justify-between', 'items-center', 'px-6', 'py-4', 'text-2xl', 'font-semibold', 'text-gray-900', 'inline-flex', 'items-center', 'px-4', 'py-2', 'bg-[#FF9234]', 'text-white', 'rounded-md', 'hover:bg-[#ff8010]', 'transition-colors', 'h-5', 'w-5', 'mr-2', 'p-6', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-6', 'bg-white', 'rounded-lg', 'shadow', 'overflow-hidden', 'w-full', 'h-48', 'object-cover', 'p-4', 'flex', 'justify-between', 'items-start', 'text-lg', 'font-semibold', 'text-gray-900', 'text-sm', 'text-gray-500', 'px-2', 'py-1', 'text-xs', 'rounded-full',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Search: Search,
            Plus: Plus,
            ChevronDown: ChevronDown,
            route: route,
            navigationItems: navigationItems,
            pets: pets,
            getStatusClass: getStatusClass,
            openAddPetModal: openAddPetModal,
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
//# sourceMappingURL=DashboardView.vue.js.map