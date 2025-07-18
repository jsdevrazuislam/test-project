<script>
  import Header from "$lib/components/header.svelte";
  let { children } = $props();
  import "../app.css";
  import { Toaster } from 'svelte-french-toast';
</script>
<Header />
{@render children()}
<Toaster />