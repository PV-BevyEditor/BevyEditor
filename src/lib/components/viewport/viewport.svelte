<script lang="ts">
    import { start } from "$lib/scripts/communication";
    import { onMount } from "svelte";
    
    onMount(start);
</script>

<canvas id="game_canvas"></canvas>
