import { ref, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Search, Heart, User, Menu, X } from 'lucide-vue-next';
const route = useRoute();
// State
const searchQuery = ref('');
const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
// Dropdown menu items
const menuItems = [
    { name: 'Administrador', path: '/admin' },
    { name: 'Adoptantes', path: '/adopters' },
    { name: 'Mi Cuenta', path: '/account' },
];
const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Agenda Cita', path: '/schedule' },
    { name: 'Registrarse', path: '/register' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Adopta', path: '/adopt' },
];
// Methods
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
const closeDropdown = () => {
    isDropdownOpen.value = false;
};
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = '';
    }
};
const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
};
const isActive = (path) => {
    return route.path === path;
};
// Cleanup on component unmount
onUnmounted(() => {
    document.body.style.overflow = '';
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
['fixed',];
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
    ...{ class: ("bg-[#253B06] px-4 py-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("max-w-7xl mx-auto flex items-center justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center gap-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ("/HuellasFelices.png"),
    alt: ("Huellas Felices Logo"),
    ...{ class: ("h-12 w-auto") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleMobileMenu) },
    ...{ class: ("lg:hidden text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors cursor-pointer") },
});
if (!__VLS_ctx.isMobileMenuOpen) {
    const __VLS_0 = {}.Menu;
    /** @type { [typeof __VLS_components.Menu, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        size: ((24)),
    }));
    const __VLS_2 = __VLS_1({
        size: ((24)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    const __VLS_6 = {}.X;
    /** @type { [typeof __VLS_components.X, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        size: ((24)),
    }));
    const __VLS_8 = __VLS_7({
        size: ((24)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("hidden lg:flex items-center flex-1 justify-between") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative flex-1 max-w-xl mx-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: ("text"),
    placeholder: ("Buscar mascotas"),
    ...{ class: ("w-full px-4 py-2 rounded-md pl-10 bg-[#FFFFFF]") },
    value: ((__VLS_ctx.searchQuery)),
});
const __VLS_12 = {}.Search;
/** @type { [typeof __VLS_components.Search, ] } */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]") },
    size: ((20)),
}));
const __VLS_14 = __VLS_13({
    ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]") },
    size: ((20)),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex items-center gap-6") },
});
for (const [link] of __VLS_getVForSourceType((__VLS_ctx.links))) {
    const __VLS_18 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        key: ((link.name)),
        to: ((link.path)),
        ...{ class: ("text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors") },
        ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
    }));
    const __VLS_20 = __VLS_19({
        key: ((link.name)),
        to: ((link.path)),
        ...{ class: ("text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors") },
        ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    (link.name);
    __VLS_23.slots.default;
    var __VLS_23;
}
const __VLS_24 = {}.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    to: ("/donation"),
    ...{ class: ("bg-[#FF9234] text-[#FFFFFF] px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[#FFCD3C] transition-colors") },
}));
const __VLS_26 = __VLS_25({
    to: ("/donation"),
    ...{ class: ("bg-[#FF9234] text-[#FFFFFF] px-3 py-1 rounded-full flex items-center gap-2 hover:bg-[#FFCD3C] transition-colors") },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_30 = {}.Heart;
/** @type { [typeof __VLS_components.Heart, ] } */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    size: ((16)),
}));
const __VLS_32 = __VLS_31({
    size: ((16)),
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_29.slots.default;
var __VLS_29;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative") },
});
__VLS_asFunctionalDirective(__VLS_directives.vClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.closeDropdown) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.toggleDropdown) },
    ...{ class: ("text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors cursor-pointer") },
});
const __VLS_36 = {}.User;
/** @type { [typeof __VLS_components.User, ] } */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    size: ((24)),
}));
const __VLS_38 = __VLS_37({
    size: ((24)),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
if (__VLS_ctx.isDropdownOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("absolute right-0 mt-2 w-48 bg-[#FFFFFF] rounded-md shadow-lg py-1 z-50") },
    });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        const __VLS_42 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("block px-4 py-2 text-sm text-[#253B06] hover:bg-[#FAFCB4]") },
            ...{ class: (({ 'bg-[#FAFCB4]': __VLS_ctx.isActive(link.path) })) },
        }));
        const __VLS_44 = __VLS_43({
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("block px-4 py-2 text-sm text-[#253B06] hover:bg-[#FAFCB4]") },
            ...{ class: (({ 'bg-[#FAFCB4]': __VLS_ctx.isActive(link.path) })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        (link.name);
        __VLS_47.slots.default;
        var __VLS_47;
    }
}
if (__VLS_ctx.isMobileMenuOpen) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("lg:hidden fixed inset-0 bg-[#253B06] z-40 pt-20") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("px-4 py-2 space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.closeMobileMenu) },
        ...{ class: ("absolute top-4 right-4 text-[#FFFFFF] hover:text-[#FFCD3C] hover:cursor-pointer transition-colors") },
    });
    const __VLS_48 = {}.X;
    /** @type { [typeof __VLS_components.X, ] } */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        size: ((24)),
    }));
    const __VLS_50 = __VLS_49({
        size: ((24)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("text"),
        placeholder: ("Buscar mascotas"),
        ...{ class: ("w-full px-4 py-2 rounded-md pl-10 bg-[#FFFFFF]") },
        value: ((__VLS_ctx.searchQuery)),
    });
    const __VLS_54 = {}.Search;
    /** @type { [typeof __VLS_components.Search, ] } */ ;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
        ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]") },
        size: ((20)),
    }));
    const __VLS_56 = __VLS_55({
        ...{ class: ("absolute left-3 top-1/2 transform -translate-y-1/2 text-[#BDBDBD]") },
        size: ((20)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col gap-4") },
    });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.links))) {
        const __VLS_60 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            ...{ 'onClick': {} },
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors text-lg") },
            ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
        }));
        const __VLS_62 = __VLS_61({
            ...{ 'onClick': {} },
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors text-lg") },
            ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        let __VLS_66;
        const __VLS_67 = {
            onClick: (__VLS_ctx.closeMobileMenu)
        };
        let __VLS_63;
        let __VLS_64;
        (link.name);
        __VLS_65.slots.default;
        var __VLS_65;
    }
    const __VLS_68 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
        ...{ 'onClick': {} },
        to: ("/donation"),
        ...{ class: ("bg-[#FF9234] text-[#FFFFFF] px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-[#FFCD3C] transition-colors") },
    }));
    const __VLS_70 = __VLS_69({
        ...{ 'onClick': {} },
        to: ("/donation"),
        ...{ class: ("bg-[#FF9234] text-[#FFFFFF] px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-[#FFCD3C] transition-colors") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    let __VLS_74;
    const __VLS_75 = {
        onClick: (__VLS_ctx.closeMobileMenu)
    };
    let __VLS_71;
    let __VLS_72;
    const __VLS_76 = {}.Heart;
    /** @type { [typeof __VLS_components.Heart, ] } */ ;
    // @ts-ignore
    const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
        size: ((16)),
    }));
    const __VLS_78 = __VLS_77({
        size: ((16)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_77));
    __VLS_73.slots.default;
    var __VLS_73;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("border-t border-[#FFFFFF]/20 pt-4") },
    });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
        const __VLS_82 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({
            ...{ 'onClick': {} },
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("block py-2 text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors") },
            ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
        }));
        const __VLS_84 = __VLS_83({
            ...{ 'onClick': {} },
            key: ((link.name)),
            to: ((link.path)),
            ...{ class: ("block py-2 text-[#FFFFFF] hover:text-[#FFCD3C] transition-colors") },
            ...{ class: (({ 'text-[#FFCD3C]': __VLS_ctx.isActive(link.path) })) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_83));
        let __VLS_88;
        const __VLS_89 = {
            onClick: (__VLS_ctx.closeMobileMenu)
        };
        let __VLS_85;
        let __VLS_86;
        (link.name);
        __VLS_87.slots.default;
        var __VLS_87;
    }
}
['bg-[#253B06]', 'px-4', 'py-2', 'max-w-7xl', 'mx-auto', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'gap-2', 'h-12', 'w-auto', 'lg:hidden', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'transition-colors', 'cursor-pointer', 'hidden', 'lg:flex', 'items-center', 'flex-1', 'justify-between', 'relative', 'flex-1', 'max-w-xl', 'mx-8', 'w-full', 'px-4', 'py-2', 'rounded-md', 'pl-10', 'bg-[#FFFFFF]', 'absolute', 'left-3', 'top-1/2', 'transform', '-translate-y-1/2', 'text-[#BDBDBD]', 'flex', 'items-center', 'gap-6', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'transition-colors', 'text-[#FFCD3C]', 'bg-[#FF9234]', 'text-[#FFFFFF]', 'px-3', 'py-1', 'rounded-full', 'flex', 'items-center', 'gap-2', 'hover:bg-[#FFCD3C]', 'transition-colors', 'relative', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'transition-colors', 'cursor-pointer', 'absolute', 'right-0', 'mt-2', 'w-48', 'bg-[#FFFFFF]', 'rounded-md', 'shadow-lg', 'py-1', 'z-50', 'block', 'px-4', 'py-2', 'text-sm', 'text-[#253B06]', 'hover:bg-[#FAFCB4]', 'bg-[#FAFCB4]', 'lg:hidden', 'fixed', 'inset-0', 'bg-[#253B06]', 'z-40', 'pt-20', 'px-4', 'py-2', 'space-y-4', 'absolute', 'top-4', 'right-4', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'hover:cursor-pointer', 'transition-colors', 'relative', 'w-full', 'px-4', 'py-2', 'rounded-md', 'pl-10', 'bg-[#FFFFFF]', 'absolute', 'left-3', 'top-1/2', 'transform', '-translate-y-1/2', 'text-[#BDBDBD]', 'flex', 'flex-col', 'gap-4', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'transition-colors', 'text-lg', 'text-[#FFCD3C]', 'bg-[#FF9234]', 'text-[#FFFFFF]', 'px-3', 'py-2', 'rounded-full', 'flex', 'items-center', 'justify-center', 'gap-2', 'hover:bg-[#FFCD3C]', 'transition-colors', 'border-t', 'border-[#FFFFFF]/20', 'pt-4', 'block', 'py-2', 'text-[#FFFFFF]', 'hover:text-[#FFCD3C]', 'transition-colors', 'text-[#FFCD3C]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Search: Search,
            Heart: Heart,
            User: User,
            Menu: Menu,
            X: X,
            searchQuery: searchQuery,
            isDropdownOpen: isDropdownOpen,
            isMobileMenuOpen: isMobileMenuOpen,
            menuItems: menuItems,
            links: links,
            toggleDropdown: toggleDropdown,
            closeDropdown: closeDropdown,
            toggleMobileMenu: toggleMobileMenu,
            closeMobileMenu: closeMobileMenu,
            isActive: isActive,
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
//# sourceMappingURL=Navbar.vue.js.map