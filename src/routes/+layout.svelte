<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './style.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Henry | HARD CHROME V7</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous" />

	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Syne:wght@700;800&family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&&family=Geist:wght@100..900&display=swap"
	/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />

	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid-bg"></div>

{@render children()}
