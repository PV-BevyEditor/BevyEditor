import { writable } from "svelte/store";

export type GizmoOptions = {
    orientationIsGlobal: boolean;
    scaleIsVisible: boolean;
    translationIsVisible: boolean;
    rotationIsVisible: boolean;
};

const defaultOptions: GizmoOptions = {
    orientationIsGlobal: false,
    scaleIsVisible: false,
    translationIsVisible: true,
    rotationIsVisible: false,
};

export const gizmoOptions = writable<GizmoOptions>(defaultOptions);
