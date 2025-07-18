<script lang="ts">
  import { Star } from '@lucide/svelte';

  export let rating: number = 0;
  export let maxStars: number = 5;
  export let filledColor: string = 'text-black fill-black';
  export let emptyColor: string = 'text-gray-300 fill-gray-300';
  export let size: string = 'w-5 h-5';
  export let showNumber: boolean = false;
  export let interactive: boolean = false;
  export let tabIndex: number = 0;
  export let gap: string = '';

  $: fullStars = Math.floor(rating);
  $: hasHalfStar = rating % 1 !== 0;
  $: emptyStars = Math.max(0, maxStars - fullStars - (hasHalfStar ? 1 : 0));

  const handleClick = (index: number) => {
    if (interactive) {
      rating = index + 1;
    }
  };
</script>

<div class="flex items-center gap-1">
  <div class={`flex ${gap}`} role="img" aria-label={`Rating: ${rating} out of ${maxStars}`}>
    {#each Array(fullStars) as _, i}
      <button
        class={`${size} ${filledColor} transition-transform duration-200 ${
          interactive ? 'cursor-pointer hover:scale-125' : ''
        }`}
        on:click={() => handleClick(i)}
        on:keydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(i)}
        aria-label={`Rate ${i + 1} out of ${maxStars}`}
        tabindex={interactive ? tabIndex : -1}
      >
        <Star class={`${size} ${filledColor}`} />
      </button>
    {/each}

    {#if hasHalfStar}
      <div class={`relative ${size}`}>
        <button
          class={`absolute inset-0 ${emptyColor} ${
            interactive ? 'cursor-pointer' : ''
          }`}
          on:click={() => interactive && handleClick(fullStars)}
          on:keydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(fullStars)}
          aria-label={`Half star rating`}
          tabindex={interactive ? tabIndex : -1}
        >
          <Star class={`${size} ${emptyColor}`} />
        </button>
        <div class="absolute inset-0 w-1/2 overflow-hidden">
          <Star class={`${size} ${filledColor}`} />
        </div>
      </div>
    {/if}

    {#each Array(emptyStars) as _, i}
      <button
        class={`${size} ${emptyColor} transition-transform duration-200 ${
          interactive ? 'cursor-pointer hover:scale-125' : ''
        }`}
        on:click={() => interactive && handleClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
        on:keydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
        aria-label={`Rate ${fullStars + (hasHalfStar ? 1 : 0) + i + 1} out of ${maxStars}`}
        tabindex={interactive ? tabIndex : -1}
      >
        <Star class={`${size} ${emptyColor}`} />
      </button>
    {/each}
  </div>

  {#if showNumber}
    <span class="ml-1 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
  {/if}
</div>