<script lang="ts">
    import { Viewport, Properties } from "$lib/components";
    import { initCommunication } from "$lib/scripts/communication";

    let components: Array<any> = [];
    let communication = initCommunication();
</script>

<div class="flex flex-row justify-between w-full h-full p-2 gap-2">
    <!-- Properties -->
    <Properties {components} {communication} />
    
    <!-- Viewport -->
    <Viewport />
</div>