<script lang="ts">
    import qs from "qs";
    import { onMount, setContext } from "svelte";
    import { page } from "$app/stores";
    import { El } from "yesvelte";
    import PageHeader from "./PageHeader.svelte";
    import { writable } from "svelte/store";
    import { goto } from "$app/navigation";
    
    export let title: string | undefined;
  
    export let htmlTitle: string | undefined = title;
  
    const queryString = $page.url.searchParams.toString();
    const queryObject = qs.parse(queryString);
  
    const filters = writable<any>(queryObject.filters ?? {});
  
    let loaded = false;
  
    onMount(() => {
      loaded = true;
    });
  
    setContext("FILTERS", filters);
  
    async function applyFilters(_deps: any) {
      const filtersObject: any = {};
      for (let key in $filters) {
        if (key === "filters") {
          continue;
        }
        if ($filters[key].value !== "") {
          if ($filters[key].value === "true") {
            $filters[key] = { value: true, operator: "=" };
          } else if ($filters[key].value === "false") {
            $filters[key] = { value: false, operator: "=" };
          }
          filtersObject[key] = $filters[key];
        }
      }
  
      if (loaded) {
        const url = `?${qs.stringify({ filters: filtersObject })}`;
        
        try {
          await goto(url, {invalidateAll: true});
        } catch(err) {
          console.log('err: ', err)
        }
      }
    }
  
    $: applyFilters($filters);
  </script>
  
  <svelte:head>
    {#if htmlTitle}
      <title>{htmlTitle}</title>
    {/if}
  </svelte:head>
  
  <El container="lg">
    {#if title || $$slots['title'] || $$slots['header-buttons']}
    <PageHeader px="0">
      <slot name="title" slot="title">
        {#if title}
          {title}
        {/if}
      </slot>
      <slot name="header-buttons" />
    </PageHeader>
    {/if}
  
    <El mt="3">
      <slot />
    </El>
  </El>
  