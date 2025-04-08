import { open } from "@tauri-apps/plugin-dialog";
import { readFile } from "@tauri-apps/plugin-fs";
import { runner } from "./communication";

import { goto } from "$app/navigation";
import {
    Pause,
    Play,
    Octagon,
    MousePointer2,
    Move3D,
    ImageUpscale,
    Rotate3D,
    Wrench,
    MountainSnow,
    Box,
    Image,
    Undo2,
    Redo2,
} from "lucide-svelte"
import { gizmoOptions, type GizmoOptions } from "$lib/stores/gizmoOptions";

export interface GizmoItem {
    icon: any,
    action: () => void,
    label: string,
    gizmoProperty?: keyof GizmoOptions,
}

export let info = {
    topTabs: {
        file: {
            name: `File`,
            itemgroups: [
                [
                    {
                        label: `New`,
                        hotkey: `Ctrl+N`,
                        action: () => console.log(`navigating to /project`) ?? goto(`/project`),
                    },
                    {
                        label: `Open from file`,
                        hotkey: `Ctrl+O`,
                        action: () => {

                        },
                    },
                    {
                        label: `Open recent`,
                        hotkey: `Ctrl+K, O`,
                        action: () => {},
                    },
                    {
                        label: `Exit project`,
                        hotkey: `Ctrl+F4`,
                        action: () => {},
                    },
                    {
                        label: `Save`,
                        hotkey: `Ctrl+S`,
                        action: () => {},
                    },
                    {
                        label: `Save as`,
                        hotkey: `Ctrl+Shift+S`,
                        action: () => {},
                    },
                    {
                        label: `Project settings`,
                        hotkey: `Ctrl+Alt+S`,
                        action: () => {},
                    },
                    {
                        label: `Editor settings`,
                        hotkey: `Alt+S`,
                        action: () => {},
                    },
                    {
                        label: `Open automatic saves`,
                        hotkey: ``,
                        action: () => {},
                    },
                ],
            ],
        },
        plugins: {
            name: `Plugins`,
            itemgroups: [
                [
                    {
                        label: `Manage plugins`,
                        hotkey: ``,
                        action: () => {},
                    },
                    {
                        label: `Open plugin folder`,
                        hotkey: ``,
                        action: () => {},
                    },
                ],
            ],
        },
    },
    coreActions: [
        {
            tooltip: `Play game`,
            icon: Play,
            colour: `green`,
            action: () => {},
            fill: true,
        },
        {
            tooltip: `Pause`,
            icon: Pause,
            colour: `grey`,
            action: () => {},
            fill: true,
        },
        {
            tooltip: `Stop`,
            icon: Octagon,
            colour: `red`,
            action: () => {},
            fill: true,
        },
        {
            tooltip: `Undo`,
            icon: Undo2,
            colour: `lightblue`,
            action: () => {},
            fill: false,
        },
        {
            tooltip: `Redo`,
            icon: Redo2,
            colour: `lightblue`,
            action: () => {},
            fill: false,
        }
    ],
    toolbarActions: {
        transforms: [
            {
                label: `Select`,
                gizmoProperty: ``,
                icon: MousePointer2,
                action: () => {},
            },
            {
                label: `Move`,
                icon: Move3D,
                gizmoProperty: `translationIsVisible`,
                action: () => {
                    gizmoOptions.update((value) => ({
                        ...value,
                        translationIsVisible: !value.translationIsVisible,
                    }));
                },
            },
            {
                label: `Scale`,
                gizmoProperty: `scaleIsVisible`,
                icon: ImageUpscale,
                action: () => {
                    gizmoOptions.update((value) => ({
                        ...value,
                        scaleIsVisible: !value.scaleIsVisible,
                    }));
                },
            },
            {
                label: `Rotate`,
                gizmoProperty: `rotationIsVisible`,
                icon: Rotate3D,
                action: () => {
                    gizmoOptions.update((value) => console.log(!value.rotationIsVisible) ?? ({
                        ...value,
                        rotationIsVisible: !value.rotationIsVisible,
                    }));
                },
            },
        ],
        practicals: [
            {
                label: `Toolbox`,
                icon: Wrench,
                action: () => {},
            },
            {
                label: `Terrain`,
                icon: MountainSnow,
                action: () => {},
            },
        ],
        imports: [
            {
                label: `3D import`,
                icon: Box,
                action: async () => {
                    const path = await open({
                        multiple: false,
                        directory: false,
                        filters: [{
                            name: `Binary GLTF models`,
                            extensions: [`glb`]
                        }],
                        title: `GLTF model import`,
                    });

                    if (!path) return;
                    const file = await readFile(path);

                    console.log(path, file);
                    runner?.loadModel(file);
                },
            },
            {
                label: `2D import`,
                icon: Image,
                action: () => {},
            },
        ],
    },
};

