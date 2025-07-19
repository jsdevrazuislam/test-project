<script lang="ts">
  let query = $state("");
  let isFocused = $state(false);
  let recentSearches = $state(["T Shirts", "Jeans", "Sneakers"]);
  let popularSearches = $state(["🚴Le Tour de France", "OUHOE", "HOYGI"]);
  let suggestions = $state<string[]>([]);
  let showSuggestions = $state(false);

  const searchProducts = async (term: string) => {
    if (!term) return [];
    await new Promise((resolve) => setTimeout(resolve, 200));
    const mockData = [
      `${term} shirts`,
      `${term} pants`,
      `${term} shoes`,
      `${term} accessories`,
    ];
    return mockData.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
  };

  $effect(() => {
    if (query.length > 0) {
      searchProducts(query).then((results) => {
        suggestions = results;
        showSuggestions = true;
      });
    } else {
      suggestions = [];
      showSuggestions = isFocused;
    }
  });

  const handleSearch = () => {
    if (query.trim()) {
      if (!recentSearches.includes(query)) {
        recentSearches = [query, ...recentSearches].slice(0, 5);
      }
      console.log("Searching for:", query);
    }
  };

  const selectSuggestion = (item: string) => {
    query = item;
    handleSearch();
  };
</script>

<div class="relative w-full max-w-[620px] font-roboto text-sm font-normal">
  <div class="flex items-center gap-2">
    <input
      type="text"
      bind:value={query}
      onfocus={() => (isFocused = true)}
      onblur={() => setTimeout(() => (isFocused = false), 200)}
      onkeydown={(e) => e.key === "Enter" && handleSearch()}
      placeholder="Search for products..."
      class="w-full px-4 py-2 border-2 border-black rounded-full focus:outline-none"
    />
    <button
      onclick={handleSearch}
      class="px-10 cursor-pointer py-2 bg-black text-white rounded-full text-lg"
    >
      Search
    </button>
  </div>

  {#if isFocused && (showSuggestions || query.length === 0)}
    <div
      class="absolute z-10 mt-1 w-full max-w-[510px] max-h-[200px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg"
    >
      {#if query.length === 0}
        <div class="p-2">
          <h3 class="font-normal text-text-light-grey px-2 py-1">
            Recent Search
          </h3>
          {#each recentSearches as item}
            <button
              onclick={() => selectSuggestion(item)}
              class="px-3 py-2 bg-[#efefef]  cursor-pointer rounded-full my-1 mr-4"
            >
              {item}
            </button>
          {/each}
        </div>
        <div class="p-2">
          <h3 class="font-normal  text-text-light-grey px-2 py-1">
            Popular right now
          </h3>
          {#each popularSearches as item}
            <button
              onclick={() => selectSuggestion(item)}
              class="px-3 py-2 cursor-pointer bg-[#efefef] rounded-full my-1 mr-4"
            >
              {item}
            </button>
          {/each}
        </div>
      {:else}
        <div class="p-2">
          {#each suggestions as item}
            <button
              onclick={() => selectSuggestion(item)}
              class="cursor-pointer rounded w-full mb-2 text-left"
            >
              {item}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>
