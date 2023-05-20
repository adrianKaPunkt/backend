<template>
    <div
        id="MainNav"
        class="fixed z-50 w-full flex items-center justify-between h-[70px] bg-gray-700 shadow-2xl border-b"
    >
        <div id="NavLeft" class="flex items-center justify-start w-[170px] p-2">
            <Link href="/">
                <img
                    src="../../../public/logo.png"
                    alt="Logo"
                    class="pl-3 min-w-[55px]"
                />
            </Link>
        </div>
        <div id="NavCenter" class=""></div>

        <div class="flex items-end justify-center mr-4">
            <div id="NavEnd" class="flex items-end justify-center mr-4">
                <button>
                    <BellIcon class="w-8 fill-gray-600 hover:fill-slate-300" />
                </button>
            </div>
            <div class="relative flex items-end justify-center">
                <button @click="showMenu = !showMenu">
                    <img
                        src="../../../public/user.jpg"
                        class="rounded-full ml-1 min-w-[40px] max-h-[40px] cursor-pointer"
                    />
                </button>
                <div
                    class="absolute right-0 bg-white shadow-xl top-10 w-[330px] rounded-lg p-1 border mt-1"
                >
                    <Link href="/" @click="showMenu = !showMenu">Adrian</Link>
                </div>
            </div>
        </div>
    </div>
    <slot />
</template>

<script setup>
import BellIcon from "@/Components/icons/BellIcon.vue";

import { ref } from "vue";
import { Link, usePage } from "@inertiajs/vue3";

import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isPostOverlay, isCropperModal, isImageDisplay } =
    storeToRefs(useMainStore);

const user = usePage().props.auth.user;

let showMenu = ref(false);
</script>
