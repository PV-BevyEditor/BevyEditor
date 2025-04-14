<script lang="ts">
    import { DropdownItem } from "flowbite-svelte";
    import { type Vec3 } from "$lib/scripts/engineTypes";
    import PropertyPopover from "../propertyPopover.svelte";
    let { value = $bindable(), componentName, property }: { value: Vec3, componentName: string, property: string } = $props();

    $effect(() => {
        let info = {
            componentName,
            property,
            value,
        };
        console.log(`Running effect`, JSON.stringify(info));
        // Send value to viewport
        window.runner.sendEvent("setProperty", JSON.stringify(info));
    });
</script>

<PropertyPopover triggerText={`${value.x}, ${value.y}, ${value.z}`}>
    {#snippet popoverContent()}
        <div class="bg-[--color-surface-800] border border-[--color-surface-700] rounded-md p-2 flex flex-col gap-1">
            {#each [`x`, `y`, `z`] as axis}
                <DropdownItem class="rounded-md" tabindex={-1}>
                    <span class="text-sm">{axis}</span>
                    <input 
                        type="number" 
                        class="text-xs bg-[--color-surface-900] p-1 rounded-md" 
                        value={value[axis as keyof typeof value]}
                        oninput={(ev) => {
                            let f = parseFloat((ev.target as HTMLInputElement).value);
                            value[axis as keyof typeof value] = isNaN(f) ? 0 : f;
                        }}
                    />
                </DropdownItem>
            {/each}
        </div>
    {/snippet}
</PropertyPopover>
