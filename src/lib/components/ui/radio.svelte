<script lang="ts">
  let {
    name = "",
    value = "",
    selected = "",
    label = "",
    disabled = false
  } = $props();
</script>

<label class="flex items-center gap-3 cursor-pointer mb-0.5">
  <input
    type="radio"
    {name}
    {value}
    bind:group={selected}
    {disabled}
    class="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0 peer"
  />
  <span class="inline-flex items-center justify-center w-3.5 h-3.5 border-2 border-gray-300 rounded-full transition-all duration-200 peer-checked:border-4 peer-checked:border-yellow-500 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
    <span class="w-1.5 h-1.5 rounded-full bg-transparent transition-all duration-200 peer-checked:bg-white"></span>
  </span>
  <span class="text-sm text-gray-800">{label}</span>
</label>