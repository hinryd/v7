<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let Content = $derived(data.post.content);
</script>

<svelte:head>
	<title>{data.post.title} | Henry</title>
</svelte:head>

<div class="container" style="view-transition-name: container-{data.post.slug}">
	<div class="nav-row">
		<a href="/?tab=blogs" class="back-btn">
			<i class="ri-arrow-left-line"></i> RETURN TO BASE
		</a>
	</div>

	<article class="post-card">
		<header class="post-header">
			<span class="post-meta" style="view-transition-name: date-{data.post.slug}">
				LOG DATE: {data.post.date}
			</span>
			<h1 class="post-title" style="view-transition-name: title-{data.post.slug}">
				{data.post.title}
			</h1>
		</header>

		<div class="post-content">
			<Content />
		</div>
	</article>
</div>

<style>
	.nav-row {
		margin-bottom: 20px;
	}

	.back-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--text-sub);
		text-decoration: none;
		font-weight: bold;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.back-btn:hover {
		color: var(--accent-color);
	}

	.post-card {
		background: var(--card-bg);
		border: var(--border-width) solid var(--border-color);
		padding: 40px;
		box-shadow: var(--shadow-offset) var(--shadow-offset) 0px 0px var(--accent-color);
		animation: fadeIn 0.5s ease-out;
	}

	.post-header {
		margin-bottom: 40px;
		padding-bottom: 20px;
		border-bottom: 1px solid var(--border-color);
	}

	.post-meta {
		font-family: 'PT Mono', monospace;
		color: var(--text-sub);
		font-size: 0.8rem;
		display: block;
		margin-bottom: 10px;
	}

	.post-title {
		font-family: 'Syne', sans-serif;
		font-size: 2.5rem;
		line-height: 1.1;
		text-transform: uppercase;
		margin: 0;
		width: fit-content;
	}

	.post-content {
		line-height: 1.8;
		font-size: 1.05rem;
		color: var(--text-main);
	}

	/* Targeting standard HTML elements inside content */
	.post-content :global(h2) {
		font-family: 'Syne', sans-serif;
		font-size: 1.5rem;
		margin-top: 40px;
		margin-bottom: 20px;
		color: var(--accent-color);
		text-transform: uppercase;
	}

	.post-content :global(p) {
		margin-bottom: 20px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Mobile adjustments */
	@media (max-width: 600px) {
		.post-card {
			padding: 20px;
		}
		.post-title {
			font-size: 1.8rem;
		}
	}
</style>
