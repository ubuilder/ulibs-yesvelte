<script>
	import { Spinner } from 'yesvelte'

	export let absolute = false
	export let show = false
</script>

<div class:absolute class="loading" class:show>
	<Spinner color="primary" />
	<h1>Loading ...</h1>
</div>

<style>
	.loading {
		z-index: 1040;
		transition-property: all;
		transition-duration: 400ms;
		background-color: #ffffff10;
		opacity: 0;
		pointer-events: none;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.loading > h1 {
		margin-top: 1rem;
		font-weight: 400;
	}
	.loading.show {
		backdrop-filter: blur(8px);
		opacity: 1;
		pointer-events: unset;
	}


	.loading.absolute {
		position: absolute;
	}

	:global(.y-spinner) {
		width: 64px;
		height: 64px;
	}
</style>
