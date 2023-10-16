<script lang="ts">
	import { Button, El, ButtonGroup } from 'yesvelte'
	import BaseModal from './BaseModal.svelte'
	import { modal } from './modal.js'

	export let title: string = 'Alert title'
	export let description: string = 'Alert message'

	function onOk() {
		$modal.resolve(undefined)
	}
</script>

<BaseModal {title}>
	<El slot="body">
		{description}
	</El>
	<ButtonGroup slot="footer">
		<Button class="me-auto" on:click={onOk}>Ok</Button>
	</ButtonGroup>
</BaseModal>
