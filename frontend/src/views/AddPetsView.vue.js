import { ref, reactive } from 'vue';
import { Check, Upload, Camera } from 'lucide-vue-next';
const currentStep = ref(0);
const fileInput = ref(null);
const steps = [
    { name: 'Básico' },
    { name: 'Salud' },
    { name: 'Adopción' }
];
const healthFields = [
    { name: 'weight', label: 'Peso', type: 'text' },
    { name: 'rescueState', label: 'Estado de rescatado', type: 'text' },
    { name: 'deworming', label: 'Desparasitación', type: 'text' },
    { name: 'vaccines', label: 'Vacunas', type: 'text' },
    { name: 'neutering', label: 'Castración', type: 'text' },
    { name: 'medication', label: 'Medicación', type: 'text' },
    { name: 'surgery', label: 'Cirugía e intervenciones', type: 'text' },
    { name: 'food', label: 'Alimento', type: 'text' }
];
const form = reactive({
    image: '',
    name: '',
    sex: '',
    type: '',
    colors: '',
    birthDate: '',
    rescueDate: '',
    notes: '',
    health: {
        weight: '',
        rescueState: '',
        deworming: '',
        vaccines: '',
        neutering: '',
        medication: '',
        surgery: '',
        food: ''
    },
    adoption: {
        info: '',
        shelterDate: '',
        status: 'available',
        personality: '',
        recommendedHome: '',
        location: ''
    }
});
const triggerImageUpload = () => {
    fileInput.value?.click();
};
const handleImageUpload = (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            form.image = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
};
const nextStep = () => {
    if (currentStep.value < steps.length - 1) {
        currentStep.value++;
    }
};
const previousStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--;
    }
};
const submitForm = async () => {
    try {
        // Aquí iría la lógica para enviar el formulario
        console.log('Form submitted:', form);
        // Ejemplo de cómo podrías enviar los datos a un servidor:
        // await fetch('/api/pets', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(form)
        // })
        // Handle the response as needed
    }
    catch (error) {
        console.error('Error submitting form:', error);
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen bg-gray-50") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: ("bg-[#253B06] py-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto px-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl text-white font-semibold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-[#253B06] pb-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto px-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative flex justify-between") },
});
for (const [step, index] of __VLS_getVForSourceType((__VLS_ctx.steps))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((step.name)),
        ...{ class: ("flex flex-col items-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-8 h-8 rounded-full flex items-center justify-center relative z-10") },
        ...{ class: (([
                __VLS_ctx.currentStep > index
                    ? 'bg-[#FF9234]'
                    : __VLS_ctx.currentStep === index
                        ? 'bg-[#FF9234]'
                        : 'bg-gray-300'
            ])) },
    });
    if (__VLS_ctx.currentStep > index) {
        const __VLS_0 = {}.Check;
        /** @type { [typeof __VLS_components.Check, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            ...{ class: ("w-5 h-5 text-white") },
        }));
        const __VLS_2 = __VLS_1({
            ...{ class: ("w-5 h-5 text-white") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-white") },
        });
        (index + 1);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("mt-2 text-sm") },
        ...{ class: (([
                __VLS_ctx.currentStep >= index
                    ? 'text-white'
                    : 'text-gray-400'
            ])) },
    });
    (step.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("container mx-auto px-4 py-8") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6") },
});
if (__VLS_ctx.currentStep === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-1 md:grid-cols-2 gap-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("md:col-span-2 flex justify-center") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("relative w-40 h-40") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden") },
    });
    if (__VLS_ctx.form.image) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.form.image)),
            ...{ class: ("w-full h-full object-cover") },
            alt: ("Pet preview"),
        });
    }
    else {
        const __VLS_6 = {}.Upload;
        /** @type { [typeof __VLS_components.Upload, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            ...{ class: ("w-8 h-8 text-gray-400") },
        }));
        const __VLS_8 = __VLS_7({
            ...{ class: ("w-8 h-8 text-gray-400") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.triggerImageUpload) },
        ...{ class: ("absolute bottom-0 right-0 bg-[#FF9234] p-2 rounded-full text-white hover:bg-[#ff8010]") },
    });
    const __VLS_12 = {}.Camera;
    /** @type { [typeof __VLS_components.Camera, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ class: ("w-4 h-4") },
    }));
    const __VLS_14 = __VLS_13({
        ...{ class: ("w-4 h-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        ...{ onChange: (__VLS_ctx.handleImageUpload) },
        ref: ("fileInput"),
        type: ("file"),
        accept: ("image/*"),
        ...{ class: ("hidden") },
    });
    // @ts-ignore navigation for `const fileInput = ref()`
    /** @type { typeof __VLS_ctx.fileInput } */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.form.name)),
        type: ("text"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.form.sex)),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("male"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("female"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.form.type)),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("dog"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("cat"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("other"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.form.colors)),
        type: ("text"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    (__VLS_ctx.form.birthDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    (__VLS_ctx.form.rescueDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("md:col-span-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.form.notes)),
        rows: ("3"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
}
if (__VLS_ctx.currentStep === 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    for (const [field] of __VLS_getVForSourceType((__VLS_ctx.healthFields))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((field.name)),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            ...{ class: ("block text-sm font-medium text-gray-700") },
        });
        (field.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: ((field.type)),
            ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
        });
        (__VLS_ctx.form.health[field.name]);
    }
}
if (__VLS_ctx.currentStep === 2) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.form.adoption.info)),
        rows: ("4"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    (__VLS_ctx.form.adoption.shelterDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.form.adoption.status)),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("available"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("in_process"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("adopted"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
        value: ((__VLS_ctx.form.adoption.personality)),
        rows: ("4"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.form.adoption.recommendedHome)),
        type: ("text"),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.form.adoption.location)),
        ...{ class: ("mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#FF9234] focus:ring-[#FF9234]") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("shelter"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("foster"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        value: ("vet"),
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("mt-8 flex justify-between") },
});
if (__VLS_ctx.currentStep > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.previousStep) },
        ...{ class: ("px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50") },
    });
}
if (__VLS_ctx.currentStep < __VLS_ctx.steps.length - 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.nextStep) },
        ...{ class: ("ml-auto px-4 py-2 bg-[#253B06] text-white rounded-md text-sm font-medium hover:bg-[#2f4a08]") },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.submitForm) },
        ...{ class: ("ml-auto px-4 py-2 bg-[#253B06] text-white rounded-md text-sm font-medium hover:bg-[#2f4a08]") },
    });
}
['min-h-screen', 'bg-gray-50', 'bg-[#253B06]', 'py-4', 'container', 'mx-auto', 'px-4', 'text-2xl', 'text-white', 'font-semibold', 'bg-[#253B06]', 'pb-8', 'container', 'mx-auto', 'px-4', 'relative', 'absolute', 'top-1/2', 'left-0', 'w-full', 'h-0.5', 'bg-gray-300', '-translate-y-1/2', 'relative', 'flex', 'justify-between', 'flex', 'flex-col', 'items-center', 'w-8', 'h-8', 'rounded-full', 'flex', 'items-center', 'justify-center', 'relative', 'z-10', 'w-5', 'h-5', 'text-white', 'text-white', 'mt-2', 'text-sm', 'container', 'mx-auto', 'px-4', 'py-8', 'max-w-3xl', 'mx-auto', 'bg-white', 'rounded-lg', 'shadow-sm', 'p-6', 'grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6', 'md:col-span-2', 'flex', 'justify-center', 'relative', 'w-40', 'h-40', 'w-full', 'h-full', 'rounded-full', 'bg-gray-100', 'flex', 'items-center', 'justify-center', 'overflow-hidden', 'w-full', 'h-full', 'object-cover', 'w-8', 'h-8', 'text-gray-400', 'absolute', 'bottom-0', 'right-0', 'bg-[#FF9234]', 'p-2', 'rounded-full', 'text-white', 'hover:bg-[#ff8010]', 'w-4', 'h-4', 'hidden', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'md:col-span-2', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'space-y-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'space-y-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mt-1', 'block', 'w-full', 'rounded-md', 'border-gray-300', 'shadow-sm', 'focus:border-[#FF9234]', 'focus:ring-[#FF9234]', 'mt-8', 'flex', 'justify-between', 'px-4', 'py-2', 'border', 'border-gray-300', 'rounded-md', 'text-sm', 'font-medium', 'text-gray-700', 'hover:bg-gray-50', 'ml-auto', 'px-4', 'py-2', 'bg-[#253B06]', 'text-white', 'rounded-md', 'text-sm', 'font-medium', 'hover:bg-[#2f4a08]', 'ml-auto', 'px-4', 'py-2', 'bg-[#253B06]', 'text-white', 'rounded-md', 'text-sm', 'font-medium', 'hover:bg-[#2f4a08]',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Check: Check,
            Upload: Upload,
            Camera: Camera,
            currentStep: currentStep,
            fileInput: fileInput,
            steps: steps,
            healthFields: healthFields,
            form: form,
            triggerImageUpload: triggerImageUpload,
            handleImageUpload: handleImageUpload,
            nextStep: nextStep,
            previousStep: previousStep,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=AddPetsView.vue.js.map