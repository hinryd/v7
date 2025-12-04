<script lang="ts">
	interface Props {
		item: PortfolioItem;
		open?: boolean;
	}

	let { item, open = $bindable(false) }: Props = $props();
</script>

<div class="accordion">
	<button class="accordion-header" onclick={() => (open = !open)} aria-expanded={open}>
		<div class="accordion-header-content">
			<img class="hybrid-link-icon" src={item.icon} alt="" />
			<div class="accordion-titles" class:open>
				<span class="accordion-title">{item.title}</span>
				<span class="accordion-subtitle">{item.subtitle}</span>
			</div>
		</div>

		<i class="ri-arrow-down-s-line chevron" class:open></i>
	</button>
	<div class="accordion-body" class:open>
		<div class="accordion-content">
			<div class="portfolio-content">
				<span class="portfolio-tech">{item.subtitle}</span>
				<p class="portfolio-desc">{item.description}</p>
				<div class="portfolio-actions">
					{#if item.link}
						<a href={item.link} class="portfolio-btn primary">
							<i class="ri-eye-line"></i> View Project
						</a>
					{:else}
						<span class="portfolio-btn secondary disabled">Coming soon...</span>
					{/if}
					{#if item.github}
						<a href={item.github} class="portfolio-btn secondary">
							<i class="ri-github-fill"></i> Source
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.accordion {
		border: var(--border-width, 1px) solid var(--border-color, #333);
		background: var(--card-bg, #111);
	}

	.accordion-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		background: transparent;
		border: none;
		color: var(--text-main, #fff);
		font-family: inherit;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		text-align: left;
	}

	.accordion-header-content {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.accordion-titles {
		display: grid;
		grid-template-rows: 1fr auto;
		transition: all 0.2s ease-in-out;
	}

	.accordion-titles.open {
		grid-template-rows: 1fr 0fr;
	}

	.accordion-title {
		transition: all 0.2s ease-in-out;
	}

	.accordion-subtitle {
		overflow: hidden;
		font-family: 'PT Mono', monospace;
		font-size: 0.7rem;
		color: var(--text-sub, #888);
		font-weight: normal;
		opacity: 1;
		transition: opacity 0.2s ease-in-out;
	}

	.accordion-titles.open .accordion-subtitle {
		opacity: 0;
	}

	.chevron {
		transition: transform 0.2s ease-in-out;
		font-size: 1.5rem;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	.accordion-body {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.3s ease;
	}

	.accordion-body.open {
		grid-template-rows: 1fr;
	}

	.accordion-content {
		overflow: hidden;
		padding: 0 20px;
	}

	.accordion-body.open .accordion-content {
		padding-bottom: 16px;
	}
</style>
