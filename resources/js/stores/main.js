import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => ({
        isPostOverlay: false,
        isCropperModal: false,
        isImageDisplay: null,
    }),
    persist: true,
});
