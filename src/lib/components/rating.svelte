<script lang="ts">
  import { Star } from '@lucide/svelte';

  let {
    rating = 0,
    maxStars = 5,
    filledColor = 'text-black fill-black',
    emptyColor = 'text-gray-300 fill-gray-300',
    size = 'w-5 h-5',
    showNumber = false,
    interactive = false,
    tabIndex = 0,
    gap = ''
  } = $props();

  const fullStars = $derived(Math.floor(rating));
  const hasHalfStar = $derived(rating % 1 !== 0);
  const emptyStars = $derived(Math.max(0, maxStars - fullStars - (hasHalfStar ? 1 : 0)));

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
        onclick={() => handleClick(i)}
        onkeydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(i)}
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
          onclick={() => interactive && handleClick(fullStars)}
          onkeydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(fullStars)}
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
        onclick={() => interactive && handleClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
        onkeydown={(e) => interactive && (e.key === 'Enter' || e.key === ' ') && handleClick(fullStars + (hasHalfStar ? 1 : 0) + i)}
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