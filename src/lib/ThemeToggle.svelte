<script lang="ts">
	let theme = $state('dark');

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.body.classList.toggle('light-mode');
	}
</script>

<button class="theme-switch" onclick={toggleTheme} aria-label="Toggle Light Mode">
	<i class={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}></i>
</button>
