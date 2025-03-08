import { ref, reactive } from 'vue';
import { Eye, EyeOff, Loader2, Facebook } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
const router = useRouter();
const isLoading = ref(false);
const showPassword = ref(false);
const form = reactive({
    email: '',
    password: ''
});
const errors = reactive({
    email: '',
    password: ''
});
const validateForm = () => {
    let isValid = true;
    errors.email = '';
    errors.password = '';
    if (!form.email) {
        errors.email = 'El email es requerido';
        isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Email inválido';
        isValid = false;
    }
    if (!form.password) {
        errors.password = 'La contraseña es requerida';
        isValid = false;
    }
    else if (form.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
        isValid = false;
    }
    return isValid;
};
const handleSubmit = async () => {
    if (!validateForm())
        return;
    try {
        isLoading.value = true;
        // Aquí iría la lógica de autenticación
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación
        router.push('/dashboard');
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
    finally {
        isLoading.value = false;
    }
};
const handleFacebookLogin = () => {
    // Implementar login con Facebook
    console.log('Facebook login');
};
const handleGoogleLogin = () => {
    // Implementar login con Google
    console.log('Google login');
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex-1 text-center md:text-left") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: ("/HuellasFelices.png"),
    alt: ("Huellas Felices Logo"),
    ...{ class: ("w-64 md:w-80 mx-auto md:mx-0") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex-1 w-full max-w-md") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.handleSubmit) },
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: ("email"),
    ...{ class: ("block text-sm font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-1") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: ("email"),
    type: ("email"),
    required: (true),
    ...{ class: ("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]") },
    ...{ class: (({ 'border-red-500': __VLS_ctx.errors.email })) },
});
(__VLS_ctx.form.email);
if (__VLS_ctx.errors.email) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mt-1 text-sm text-red-600") },
    });
    (__VLS_ctx.errors.email);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: ("password"),
    ...{ class: ("block text-sm font-medium text-gray-700") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-1 relative") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: ("password"),
    type: ((__VLS_ctx.showPassword ? 'text' : 'password')),
    required: (true),
    ...{ class: ("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9234] focus:border-[#FF9234]") },
    ...{ class: (({ 'border-red-500': __VLS_ctx.errors.password })) },
});
(__VLS_ctx.form.password);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showPassword = !__VLS_ctx.showPassword;
        } },
    type: ("button"),
    ...{ class: ("absolute inset-y-0 right-0 pr-3 flex items-center") },
});
if (!__VLS_ctx.showPassword) {
    const __VLS_0 = {}.Eye;
    /** @type { [typeof __VLS_components.Eye, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("h-5 w-5 text-gray-400") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("h-5 w-5 text-gray-400") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    const __VLS_6 = {}.EyeOff;
    /** @type { [typeof __VLS_components.EyeOff, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ class: ("h-5 w-5 text-gray-400") },
    }));
    const __VLS_8 = __VLS_7({
        ...{ class: ("h-5 w-5 text-gray-400") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
if (__VLS_ctx.errors.password) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("mt-1 text-sm text-red-600") },
    });
    (__VLS_ctx.errors.password);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: ("submit"),
    disabled: ((__VLS_ctx.isLoading)),
    ...{ class: ("w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#253B06] hover:bg-[#2f4a08] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9234] disabled:opacity-50") },
});
if (__VLS_ctx.isLoading) {
    const __VLS_12 = {}.Loader2;
    /** @type { [typeof __VLS_components.Loader2, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ("animate-spin -ml-1 mr-2 h-4 w-4") },
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ("animate-spin -ml-1 mr-2 h-4 w-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-center") },
});
const __VLS_18 = {}.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    to: ("/forgot-password"),
    ...{ class: ("text-[#FF9234] hover:text-[#ff8010] text-sm") },
}));
const __VLS_20 = __VLS_19({
    to: ("/forgot-password"),
    ...{ class: ("text-[#FF9234] hover:text-[#ff8010] text-sm") },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
__VLS_23.slots.default;
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("text-center text-sm") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("text-gray-600") },
});
const __VLS_24 = {}.RouterLink;
/** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    to: ("/register"),
    ...{ class: ("ml-1 text-[#FF9234] hover:text-[#ff8010]") },
}));
const __VLS_26 = __VLS_25({
    to: ("/register"),
    ...{ class: ("ml-1 text-[#FF9234] hover:text-[#ff8010]") },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_29.slots.default;
var __VLS_29;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute inset-0 flex items-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ class: ("w-full border-t border-gray-300") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative flex justify-center text-sm") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("px-2 bg-gray-50 text-gray-500") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-6 grid grid-cols-2 gap-3") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleFacebookLogin) },
    type: ("button"),
    ...{ class: ("w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-[#1877F2] text-sm font-medium text-white hover:bg-[#1664d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]") },
});
const __VLS_30 = {}.Facebook;
/** @type { [typeof __VLS_components.Facebook, ] } */ ;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    ...{ class: ("h-5 w-5") },
}));
const __VLS_32 = __VLS_31({
    ...{ class: ("h-5 w-5") },
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("ml-2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleGoogleLogin) },
    type: ("button"),
    ...{ class: ("w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: ("h-5 w-5") },
    src: ("https://www.svgrepo.com/show/475656/google-color.svg"),
    alt: ("Google logo"),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: ("ml-2") },
});
['min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-gray-50', 'py-12', 'px-4', 'sm:px-6', 'lg:px-8', 'max-w-6xl', 'w-full', 'flex', 'flex-col', 'md:flex-row', 'items-center', 'gap-8', 'md:gap-16', 'flex-1', 'text-center', 'md:text-left', 'w-64', 'md:w-80', 'mx-auto', 'md:mx-0', 'flex-1', 'w-full', 'max-w-md', 'space-y-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'appearance-none', 'block', 'w-full', 'px-3', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'placeholder-gray-400', 'focus:outline-none', 'focus:ring-[#FF9234]', 'focus:border-[#FF9234]', 'border-red-500', 'mt-1', 'text-sm', 'text-red-600', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'relative', 'appearance-none', 'block', 'w-full', 'px-3', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'placeholder-gray-400', 'focus:outline-none', 'focus:ring-[#FF9234]', 'focus:border-[#FF9234]', 'border-red-500', 'absolute', 'inset-y-0', 'right-0', 'pr-3', 'flex', 'items-center', 'h-5', 'w-5', 'text-gray-400', 'h-5', 'w-5', 'text-gray-400', 'mt-1', 'text-sm', 'text-red-600', 'w-full', 'flex', 'justify-center', 'py-2', 'px-4', 'border', 'border-transparent', 'rounded-md', 'shadow-sm', 'text-sm', 'font-medium', 'text-white', 'bg-[#253B06]', 'hover:bg-[#2f4a08]', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-[#FF9234]', 'disabled:opacity-50', 'animate-spin', '-ml-1', 'mr-2', 'h-4', 'w-4', 'text-center', 'text-[#FF9234]', 'hover:text-[#ff8010]', 'text-sm', 'text-center', 'text-sm', 'text-gray-600', 'ml-1', 'text-[#FF9234]', 'hover:text-[#ff8010]', 'mt-6', 'relative', 'absolute', 'inset-0', 'flex', 'items-center', 'w-full', 'border-t', 'border-gray-300', 'relative', 'flex', 'justify-center', 'text-sm', 'px-2', 'bg-gray-50', 'text-gray-500', 'mt-6', 'grid', 'grid-cols-2', 'gap-3', 'w-full', 'inline-flex', 'justify-center', 'py-2', 'px-4', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'bg-[#1877F2]', 'text-sm', 'font-medium', 'text-white', 'hover:bg-[#1664d4]', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-[#1877F2]', 'h-5', 'w-5', 'ml-2', 'w-full', 'inline-flex', 'justify-center', 'py-2', 'px-4', 'border', 'border-gray-300', 'rounded-md', 'shadow-sm', 'bg-white', 'text-sm', 'font-medium', 'text-gray-500', 'hover:bg-gray-50', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-[#4285F4]', 'h-5', 'w-5', 'ml-2',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Eye: Eye,
            EyeOff: EyeOff,
            Loader2: Loader2,
            Facebook: Facebook,
            isLoading: isLoading,
            showPassword: showPassword,
            form: form,
            errors: errors,
            handleSubmit: handleSubmit,
            handleFacebookLogin: handleFacebookLogin,
            handleGoogleLogin: handleGoogleLogin,
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
//# sourceMappingURL=LoginView.vue.js.map