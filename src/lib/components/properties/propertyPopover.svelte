<script lang="ts">
    import { Dropdown } from "flowbite-svelte";

    let { triggerText, popoverContent } = $props();
    const id = `id-${crypto.randomUUID()}`;
</script>

<span class="m-1 text-xs bg-[--color-surface-800] p-1 rounded-md cursor-pointer" {id}>{triggerText}</span>
<Dropdown placement="right" triggeredBy={`#${id}`}>
    {@render popoverContent()}
</Dropdown>
