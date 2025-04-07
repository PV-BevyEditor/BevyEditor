<script lang="ts">
    import { Select } from "flowbite-svelte";
    import type { VisibilityValue } from "$lib/scripts/engineTypes";

    let { value }: { value: VisibilityValue } = $props();
    const potentialValues = [`Visible`, `Hidden`, `Inherited`].map((e) => ({ name: e, value: e }));
    console.log(value, potentialValues);
</script>

<Select class="p-1" items={potentialValues} bind:value={value} />
