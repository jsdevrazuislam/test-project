<script>
  let { children } = $props();
  import "../app.css";
  import { Toaster } from 'svelte-french-toast';
</script>
{@render children()}
<Toaster />