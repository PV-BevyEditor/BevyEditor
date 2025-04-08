<script lang="ts">
    import "../themes.css";
    import "../app.css";

    import { info, type GizmoItem } from "$lib/scripts/info";
    import { gizmoOptions } from "$lib/stores/gizmoOptions";

    import { Popover, Separator, Tooltip } from "bits-ui";

    const { children } = $props();
</script>

<main style="font-family: 'JetBrains Mono', monospace; letter-spacing: -.05em; color: var(--color-surface-50);">
    <div class="flex flex-row bg-[--color-surface-950]">
        {#each Object.values(info.topTabs) as tab}
            <Popover.Root>
                <Popover.Trigger class="text-xs p-1">
                    {tab.name}
                </Popover.Trigger>
                <Popover.Content class="rounded-md bg-[--color-surface-950] border border-[--color-surface-700]" sideOffset={1} align="start">
                    {#each tab.itemgroups as group, index}
                        {#each group as item}
                            <button 
                                class="text-xs w-full h-full px-1 flex flex-row justify-between gap-2 hover:bg-[--color-surface-800]"
                                onclick={item.action}
                            >
                                <span>{item.label}</span>
                                <span>{item.hotkey}</span>
                            </button>
                        {/each}

                        {#if index < tab.itemgroups.length - 1}
                            <Separator.Root class="my-0.5 -mx-1 h-px bg-[--color-surface-700]" />
                        {/if}
                    {/each}
                </Popover.Content>
            </Popover.Root>
        {/each}
    </div>
    <div class="flex flex-row justify-between items-center p-2">
        <div class="flex flex-row gap-3 justify-evenly">
            {#each info.coreActions as action}
                {@const Icon = action.icon}

                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger>
                            <button onclick={action.action} class="flex flex-col justify-center">
                                <Icon strokeWidth={2} color={action.colour} fill={action.fill ? action.colour : `#0000`} class="h-4 w-4" />
                            </button>
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                            <div class="text-xs rounded-lg border border-[--color-surface-700] shadow-[--color-surface-700] shadow-sm bg-[--color-surface-950] px-1.5 py-0.5">
                                {action.tooltip}
                            </div>
                        </Tooltip.Content>
                    </Tooltip.Root>
                </Tooltip.Provider>
            {/each}
        </div>
        <div></div>
        <div></div>
    </div>
    <Separator.Root class="h-px bg-[--color-surface-700]" />
    <div class="flex flex-row justify-start gap-3 m-3">
        {#each Object.entries(info.toolbarActions) as [groupName, group], index}
            <div class="flex flex-row justify-evenly gap-1">
                {#each group as item}
                    {@const Icon = item.icon}
                    {@const gizmoProperty = (item as GizmoItem).gizmoProperty} <!-- Had to add this line because TypeScript analyser is wonky >:( -->

                    <button 
                        class="flex flex-col items-center rounded-lg px-2 py-1.5 {gizmoProperty ? $gizmoOptions[gizmoProperty] ? `bg-[--color-surface-950]` : `` : ``}" 
                        onclick={item.action}
                    >
                        <Icon strokeWidth={2} />
                        <p class="text-sm">{item.label}</p>
                    </button>
                {/each}
            </div>
            {#if index < Object.keys(info.toolbarActions).length - 1}
                <Separator.Root class="w-px bg-[--color-surface-700]" orientation="vertical" />
            {/if}
        {/each}
    </div>

    {@render children?.()}
</main>
