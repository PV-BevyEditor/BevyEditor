<script lang="ts">
    const { 
        hover, 
        card,

        location = `bottom`, // can be bottom, top, left, right
        alignment = `alignstart`, // can be alignstart, alignend, center
        offset = 0, // offset from the element

        classes = ``,
    } = $props();
    
    const opposites: Record<string, string> = {
        bottom: `top`, top: `bottom`, left: `right`, right: `left`,
    };
    const signMapping: Record<string, number> = {
        bottom: 1, right: 1, top: -1, left: -1,
    };


    let isHovering = $state(false);
    let isHoveringCard = $state(false);

    let hoverDiv: HTMLDivElement;

    const getLocation = (): Record<string, any> => {
        let positions: Record<string, any> = {
            top: undefined,
            bottom: undefined,
            left: undefined,
            right: undefined,
        };
        let hoverPos = hoverDiv.getBoundingClientRect();

        positions[opposites[location]] = hoverPos[location as keyof DOMRect] as number + (signMapping[location] * offset);
        if (location == `right` || location == `left`) {
            if (alignment == `alignstart`) positions.top = hoverPos.top
            else if (alignment == `alignend`) positions.bottom = hoverPos.bottom
            else if (alignment == `center`) positions.top = hoverPos.top + (hoverPos.height * .5)
        } else {
            if (alignment == `alignstart`) positions.left = hoverPos.left
            else if (alignment == `alignend`) positions.right = hoverPos.right
            else if (alignment == `center`) positions.left = hoverPos.left + (hoverPos.height * .5)
        }

        return positions;
    };

    let position: Record<string, any> = $state({ top: 0, left: 0 });
    $effect(() => {
        position = getLocation();
    });
</script>

<div>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div onmouseenter={() => (isHovering = true)} onmouseleave={() => (isHovering = false)} bind:this={hoverDiv}>
        {@render hover()}
    </div>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class="
            absolute 
            top-[{`${position.top}px`}] 
            left-[{`${position.left}px`}] 
            right-[{`${position.right}px`}] 
            bottom-[{`${position.bottom}px`}] 
            z-10 
            flex 
            flex-col 
            bg-black
            {(isHovering ?? isHoveringCard) ? 'visible' : 'invisible'}
            {classes}
        "
        onmouseenter={() => (isHoveringCard = true)} onmouseleave={() => (isHoveringCard = false)}    
    >
        {@render card()}
    </div>
</div>
