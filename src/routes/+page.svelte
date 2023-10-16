<script>
	import { ListBox, ListItem } from '$lib';
	import {El, Card, CardBody, Button, FormEditor, FormInput } from 'yesvelte'
	import { StatusItem, alert } from '$lib';
	import { confirmModal } from '$lib';
	import { ButtonList } from '$lib';
	
	let items = [
		{
			name: 'somethng',
			email: 'something@gmail.com'
		},
		{
			name: '',
			email: 'something@gmail.com'
		},
		{
			name: 'something',
			email: 'something@gmail.com'
		},
		{
			name: 'something',
			email: 'something@gmail.com'
		},
		{
			name: 'something',
			email: 'something@gmail.com'
		},
		{
			name: 'something',
			email: 'something@gmail.com'
		}
	];
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ListBox let:item {items}>
	<ListItem name="name">{item.name}</ListItem>
	<ListItem name="email">{item.email}</ListItem>
</ListBox>

<El mt="3" row>
<StatusItem color="primary" icon="database" value="4" title="Tables"/>
<StatusItem color="success" icon="database" value="4" title="Tables"/>
<StatusItem color="info" icon="database" value="4" title="Tables"/>
<StatusItem color="secondary" icon="database" value="4" title="Tables"/>
<StatusItem color="warning" icon="database" value="4" title="Tables"/>
<StatusItem color="danger" icon="database" value="4" title="Tables"/>
</El>

<ButtonList>
	<Button on:click={() => confirmModal.open()}>Open Modal</Button>
	<Button on:click={() => alert.success("Action succeed!", 'Success', 30000)}>Open Alert</Button>

</ButtonList>

<Card>

	<CardBody>

		<FormEditor label="Editor"/>
		<FormInput label="Input"/>
		</CardBody>
</Card>
