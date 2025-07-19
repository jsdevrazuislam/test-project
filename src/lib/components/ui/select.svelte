<script lang="ts">
  import { ChevronDown } from "@lucide/svelte";
  import clsx from "clsx";
  import { onMount } from "svelte";

  let {
    options = [],
    placeholder = "Select an option",
    value = "",
    searchable = true,
    className = "",
    containerClass = "",
  } = $props();

  let isOpen = $state(false);
  let searchQuery = $state("");
  let inputRef = $state<HTMLInputElement>();
  let containerRef = $state<HTMLDivElement>();
  const displayValue = $derived(
    options.find(opt => opt.value === value)?.label || value
  );


  const filteredOptions = $derived(
    searchable
      ? options.filter(
          (opt) =>
            opt.label?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            opt.value?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options
  );

  const toggleDropdown = () => {
    isOpen = !isOpen;
    if (isOpen && inputRef && searchable) {
      setTimeout(() => inputRef?.focus(), 0);
    }
  };

  const selectOption = (option: { value: string; label: string }) => {
    value = option.value;
    isOpen = false;
    searchQuery = "";
  };

  const handleInput = (e: Event) => {
    if (searchable) {
      value = (e.target as HTMLInputElement).value;
      searchQuery = value;
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      isOpen = false;
    } else if (e.key === "Enter" && !isOpen) {
      toggleDropdown();
    }
  };

  const handleOptionKeydown = (
    e: KeyboardEvent,
    option: { value: string; label: string }
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOption(option);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef && !containerRef.contains(event.target as Node)) {
      isOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
</script>

<!-- svelte-ignore a11y_interactive_supports_focus -->
<div
  bind:this={containerRef}
  class={`relative ${className}`}
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
  aria-controls="select-dropdown"
  onkeydown={handleKeydown}
>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <div
    class={clsx(
      `flex items-center text-text-grey text-sm border border-gray-300 rounded-md px-3 py-1.5 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary transition-all duration-200 cursor-text`,
      containerClass
    )}
    class:ring-2={isOpen}
    class:ring-blue-500={isOpen}
    class:border-blue-500={isOpen}
    tabindex="0"
    onclick={() => {
      if (!isOpen) toggleDropdown();
      if (inputRef && searchable) inputRef.focus();
    }}
    onkeydown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown();
      }
    }}
  >
    {#if searchable}
      <input
        bind:this={inputRef}
        type="text"
        bind:value
        oninput={handleInput}
        onfocus={() => (isOpen = true)}
        {placeholder}
        class="w-full outline-none bg-transparent"
        role="searchbox"
        aria-autocomplete="list"
        aria-controls="select-dropdown"
      />
    {:else}
      <span class="w-full" aria-live="polite">
        {displayValue || placeholder}
      </span>
    {/if}

    <button
      type="button"
      class="ml-2 focus:outline-none"
      onclick={toggleDropdown}
      aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
    >
      <ChevronDown
        class={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
      />
    </button>
  </div>

  {#if isOpen}
    <ul
      id="select-dropdown"
      role="listbox"
      class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 border border-gray-200 max-h-60 overflow-auto focus:outline-none"
      tabindex="-1"
    >
      {#if filteredOptions.length === 0}
        <li class="px-4 py-2 text-gray-500">No options found</li>
      {:else}
        {#each filteredOptions as option (option.value)}
          <li
            role="option"
            aria-selected={option.value === value}
            onclick={() => selectOption(option)}
            onkeydown={(e) => handleOptionKeydown(e, option)}
            class="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            class:bg-blue-100={option.value === value}
            tabindex="0"
          >
            {option.label}
          </li>
        {/each}
      {/if}
    </ul>
  {/if}
</div>
