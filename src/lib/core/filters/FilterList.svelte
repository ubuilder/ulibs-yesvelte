<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import { ButtonList } from '$lib';

	export let filters: any = {};
	let filtersStore = writable(filters);

	setContext('FILTERS', filtersStore);

	$: filters = $filtersStore;
</script>

<ButtonList mb="3">
	<slot />
</ButtonList>
