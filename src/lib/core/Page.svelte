<script lang="ts">
	import { El } from 'yesvelte';
	import PageHeader from './PageHeader.svelte';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let title: string | undefined;

	export let theme: string | undefined = undefined;
	export let dir: string | undefined = undefined;

	export let htmlTitle: string | undefined = title;
</script>

<svelte:head>
	{#if htmlTitle}
		<title>{htmlTitle}</title>
	{/if}
</svelte:head>

<El data-bs-theme={theme} {dir} container="lg">
	<slot name="header">
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
	</slot>
	<El pt="3">
		<slot />
	</El>
</El>
