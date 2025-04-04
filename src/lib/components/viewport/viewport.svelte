<script lang="ts">
    import { start, init, setRunner } from "$lib/scripts/communication";
    import { onMount } from "svelte";
    
    onMount(async () => {
        await init();
        setRunner();
        start();
    });
</script>

<canvas id="game_canvas"></canvas>
