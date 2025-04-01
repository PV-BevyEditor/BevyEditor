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
} from "lucide-svelte"

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
        },
        {
            tooltip: `Pause`,
            icon: Pause,
            colour: `grey`,
            action: () => {},
        },
        {
            tooltip: `Stop`,
            icon: Octagon,
            colour: `red`,
            action: () => {},
        }
    ],
    toolbarActions: {
        transforms: [
            {
                label: `Select`,
                icon: MousePointer2,
                action: () => {},
            },
            {
                label: `Move`,
                icon: Move3D,
                action: () => {},
            },
            {
                label: `Scale`,
                icon: ImageUpscale,
                action: () => {},
            },
            {
                label: `Rotate`,
                icon: Rotate3D,
                action: () => {},
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
                action: () => {},
            },
            {
                label: `2D import`,
                icon: Image,
                action: () => {},
            },
        ],
    },
};

