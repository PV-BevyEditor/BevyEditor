<script lang="ts">
    import { ChevronDown } from "lucide-svelte";
    // import { Accordion, Separator } from "bits-ui";
    import { Accordion, AccordionItem, Hr, Input } from "flowbite-svelte";
    import { Communication } from "$lib/scripts/classes";
    import { isAssetId, isQuat, isVec3, isVisibilityValue, type BevyComponent } from "$lib/scripts/engineTypes";
    import Vec3 from "./bevycomponents/vec3.svelte";
    import Quat from "./bevycomponents/quat.svelte";
    import Visibility from "./bevycomponents/visibility.svelte";
    import { parseAssetId } from "$lib/scripts/parsing";

    let { communication }: { communication: ReturnType<typeof Communication> } = $props();
    let components: ComponentProperties[] = $state([]);

    type ComponentProperties = {
        name: string;
        info: Record<string, BevyComponent>;
    }
    communication.addCallback(`properties`, (data: ComponentProperties[]) => console.log(data) ?? (components = data));
</script>

<div class="flex flex-col p-1 border border-[--color-primary-700] rounded-lg gap-1">
    <div class="w-full bg-[--color-primary-700] rounded-md px-2 py-0.5">Properties</div>

    <Accordion>
        {#each components as component}
            <AccordionItem class="p-2">
                <span slot="header" class="-my-5 mr-4">{component.name.split(`::`).pop()?.replaceAll(`>`, ``) ?? ``}</span>

                <div class="-mx-5 -my-4 flex flex-col">
                    {#each Object.entries(component.info) as [property, value], index}
                        <div class="flex flex-row justify-between items-center mx-1">
                            <div class="text-sm mr-4">{property}</div>

                            {#if isVec3(value)}
                                <Vec3 {value} componentName={component.name} {property} />
                            {:else if isQuat(value)}
                                <Quat {value} />
                            {:else if isVisibilityValue(value)}
                                <Visibility {value} />
                            {:else if isAssetId(value)}
                                <Input value={parseAssetId(value?.id as string)} class="m-1 text-xs bg-[--color-surface-800] p-1 rounded-md cursor-pointer" />
                            {/if}
                        </div>
    
                        {#if index != Object.entries(component.info).length - 1}
                            <Hr classHr="my-0.5 h-px bg-[--color-surface-700]" />
                        {/if}
                    {/each}
                </div>
            </AccordionItem>
        {/each}
    </Accordion>
</div>
