<script lang="ts">
    // import { onMount } from "svelte";
    // import __wbg_init, { Runner } from "../../webbuild/out/editorgame";
    // import { gizmoOptions, type GizmoOptions } from "$lib/stores/gizmoOptions";

    // let runner: Runner;
    // let lastPassedOptions: number;
    // const bits = {
    //     orientationIsGlobal: 0b0000_0001,
    //     scaleIsVisible: 0b0000_0010,
    //     translationIsVisible: 0b0000_0100,
    //     rotationIsVisible: 0b0000_1000,
    // };

    // onMount(async () => {
    //     await __wbg_init().catch(console.log);

    //     runner = new Runner();

    //     try {
    //         runner.startGame();
    //     } catch(e) {
    //         console.log(`Error occured:`, e);
    //     }

    //     if (lastPassedOptions != undefined) runner.setGizmoOptions(lastPassedOptions);
    // });

    // export const setGizmoOptions = (options: {
    //     orientationIsGlobal?: boolean,
    //     scaleIsVisible?: boolean,
    //     translationIsVisible?: boolean,
    //     rotationIsVisible?: boolean,
    // }) => {
    //     let byte = 0;

    //     for (let [key, value] of Object.entries(options)) {
    //         if (!value) continue;

    //         byte |= bits[key as keyof typeof bits];
    //     }

    //     console.log(`Mapped`, options, `to ${byte}`);

    //     return byte;
    // }

    // export const importModel = (model: Uint8Array) => {
    //     runner.loadModel(model);
    // };

    // gizmoOptions.subscribe((options: GizmoOptions) => {
    //     if (runner) runner.setGizmoOptions(setGizmoOptions(options));
    //     else lastPassedOptions = setGizmoOptions(options);
    // });
    import { start } from "$lib/scripts/communication";
    import { onMount } from "svelte";
    
    onMount(start);
</script>

<canvas id="game_canvas"></canvas>
