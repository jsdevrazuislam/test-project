<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";

  interface Props{
    currentPage: number
    totalPages: number
    totalProducts: number
    onPageChange: (page: number) => void
  }

  let {
    currentPage = 1,
    totalPages = 1,
    totalProducts = 0,
    onPageChange
  }: Props = $props();

  const visiblePages = $derived(getVisiblePages(currentPage, totalPages));

  function getVisiblePages(current: number, total: number) {
    const range = 2;
    let start = Math.max(1, current - range);
    let end = Math.min(total, current + range);

    if (current <= range + 1) {
      end = Math.min(2 * range + 1, total);
    }
    if (current >= total - range) {
      start = Math.max(total - 2 * range, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  }
</script>

<div class="flex flex-col sm:flex-row items-center gap-4 py-4 mt-6">
  <div class="text-sm text-text-grey">
    Total {totalProducts}
  </div>

  <div class="flex items-center gap-1">
    <button
      onclick={() => goToPage(currentPage - 1)}
      disabled={currentPage <= 1}
      class="w-[32px] h-[32px] flex justify-center items-center rounded bg-[#f9f9f9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Previous page"
    >
      <ChevronLeft class='w-4 h-4' />
    </button>

    {#if !visiblePages.includes(1)}
      <button
        onclick={() => goToPage(1)}
        class="px-3 py-1 rounded hover:bg-gray-50 transition-colors cursor-pointer"
        aria-label="Go to page 1"
      >
        1
      </button>
      {#if visiblePages[0] > 2}
        <span class="px-1">...</span>
      {/if}
    {/if}

    {#each visiblePages as page}
      <button
        onclick={() => goToPage(page)}
        class={`w-[32px] h-[32px] cursor-pointer flex justify-center items-center rounded-full ${currentPage === page ? "bg-text-primary text-white" : "bg-[#eff2f5]"} transition-colors`}
        aria-label={`Go to page ${page}`}
        aria-current={currentPage === page ? "page" : undefined}
      >
        {page}
      </button>
    {/each}

    {#if !visiblePages.includes(totalPages) && totalPages > 0}
      {#if visiblePages[visiblePages.length - 1] < totalPages - 1}
        <span class="px-1">...</span>
      {/if}
      <button
        onclick={() => goToPage(totalPages)}
        class="px-3 py-1 rounded hover:bg-gray-50 transition-colors"
        aria-label={`Go to page ${totalPages}`}
      >
        {totalPages}
      </button>
    {/if}

    <button
      onclick={() => goToPage(currentPage + 1)}
      disabled={currentPage >= totalPages}
      class="w-[32px] h-[32px] flex justify-center items-center rounded bg-[#eff2f5] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      aria-label="Next page"
    >
      <ChevronRight class='w-4 h-4'  />
    </button>
  </div>
</div>
