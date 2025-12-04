<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Accordion from '$lib/Accordion.svelte';

	let { data } = $props();
	let tab = $derived.by(() => (browser ? (page.url.searchParams.get('tab') ?? 'links') : 'links'));
	let theme = $state('dark');

	const toggleTheme = (e: Event) => {
		e.preventDefault();
		theme = theme === 'dark' ? 'light' : 'dark';
		document.body.classList.toggle('light-mode');
	};
</script>

<div class="container">
	<div class="ticker-wrap">
		<div class="ticker">
			SYSTEM STATUS: <strong>ONLINE</strong> +++ OPEN FOR COMMISSIONS +++ QUANT RESEARCH +++ FLUTTER
			DEVELOPMENT +++
		</div>
	</div>

	<!-- Profile -->
	<div class="profile-section">
		<div class="sticker">V7.0.0</div>

		<div class="avatar-box">
			<img src="https://avatars.githubusercontent.com/u/48958400?v=4" alt="Henry" />
		</div>
		<h1>Henry</h1>
		<p class="bio">// SOFTWARE ENGINEER // FRONTEND // BACKEND // ML // DEVOPS // HK_BASED</p>
	</div>

	<!-- Socials Row -->
	<div class="social-row">
		<a href="https://github.com/hinryd" class="social-btn" title="GitHub"
			><i class="ri-github-fill"></i></a
		>
		<a href="https://instagram.com/hinry.xyz" class="social-btn" title="Instagram"
			><i class="ri-instagram-line"></i></a
		>
		<a href="mailto:lkhh@pm.me" class="social-btn" title="Email"
			><i class="ri-mail-send-fill"></i></a
		>
	</div>

	<!-- CONTROLLERS (The Tabs acting as Links) -->
	<!-- <div class="controllers">
		<button
			class="control-btn"
			class:active={tab === 'portfolio'}
			onclick={() => (tab = 'portfolio')}>PORTFOLIO</button
		>
		<button class="control-btn" class:active={tab === 'blogs'} onclick={() => (tab = 'blogs')}
			>BLOGS</button
		>
	</div> -->

	<!-- CONTENT AREA -->
	<div class="content-wrapper">
		<div id="links" class="list-view slide-left" class:active={tab === 'links'}>
			<a href="/?tab=portfolio" class="hybrid-link">
				<div class="hybrid-link-content">
					<div>
						<span class="link-title">Creations</span>
					</div>
				</div>
				<i class="ri-arrow-right-line"></i>
			</a>
			<a href="/?tab=services" class="hybrid-link">
				<div class="hybrid-link-content">
					<div>
						<span class="link-title">Services</span>
					</div>
				</div>
				<i class="ri-arrow-right-line"></i>
			</a>
			<a href="https://my-resume-svelte.vercel.app/" class="hybrid-link">
				<div class="hybrid-link-content">
					<div>
						<span class="link-title">Resume / CV</span>
					</div>
				</div>
				<i class="ri-external-link-line"></i>
			</a>
			<button class="hybrid-link" onmousedown={toggleTheme} style="text-align: left;"
				><div class="hybrid-link-content">
					<div>
						<span class="link-title">TURN {theme === 'dark' ? 'ON' : 'OFF'} THE LIGHT</span>
					</div>
				</div>
				<i class={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i></button
			>
		</div>

		<div id="portfolio" class="list-view" class:active={tab === 'portfolio'}>
			<a class="back-btn" href="/?tab=links" title="Back"><i class="ri-arrow-left-line"></i></a>
			{#each data.portfolioItems as item}
				<Accordion {item} />
			{/each}
		</div>

		<div id="services" class="list-view" class:active={tab === 'services'}>
			<a class="back-btn" href="/?tab=links" title="Back"><i class="ri-arrow-left-line"></i></a>

			{#each data.services as item}
				<a href={item.link} class="hybrid-link">
					<div class="hybrid-link-content">
						<div>
							<span>{item.title}</span>
							<span class="link-sub">{item.subtitle}</span>
						</div>
					</div>
					<i class="ri-external-link-line"></i>
				</a>
			{/each}
		</div>

		<!-- <div id="blogs" class="list-view" class:active={tab === 'blogs'}>
			{#each data.posts as post}
				<a href="/{post.id}" class="blog-item" style="view-transition-name: container-{post.id}">
					<span class="blog-date" style="view-transition-name: date-{post.id}">{post.title}</span>
					<div style="font-weight: bold; view-transition-name: title-{post.id}">
						{post.shortDescription}
					</div>
				</a>
			{/each}
		</div> -->
	</div>
</div>
