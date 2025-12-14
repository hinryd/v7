import FionaIcon from '$lib/assets/fiona.jpg';
import Y18Icon from '$lib/assets/y18.svg';
import BrawlKingIcon from '$lib/assets/brawlking.webp';
import OgreIcon from '$lib/assets/ogre_white.webp';
import HKJCIcon from '$lib/assets/hkjc.jpg';
import WavezIcon from '$lib/assets/wavez.webp';

const portfolioItems: PortfolioItem[] = [
	{
		title: 'Wavez',
		subtitle: 'Svelte / Typesciprt',
		description: 'Colored noise generator for focus, masking, and sound design',
		link: 'https://wavez.hinry.xyz',
		github: 'https://github.com/hinryd/wavez',
		icon: WavezIcon
	},
	{
		title: 'OGRE Workout 🚧',
		subtitle: 'Flutter / Supabase',
		description:
			'A feature-rich workout tracking app with social features and progress analytics. MVP coming soon!',
		icon: OgreIcon
	},
	{
		title: 'Horse Racing ML 🚧',
		subtitle: 'PyTorch / Deep Learning',
		description:
			"I'm researching and implementing my own neural network architecture for horse racing predictions. Currently working on improving accuracy with ensemble methods and feature engineering. Data API might be released soon.",
		icon: HKJCIcon
	},
	{
		title: 'Fiona - AI Group Assistant',
		subtitle: 'Telegram / Python',
		description:
			'AI-powered group chat assistant for Telegram. Generate daily chat summaries, insights, and fortune telling!',
		link: 'https://t.me/fiona_group_admin_bot',
		icon: FionaIcon
	},

	{
		title: 'hn-svelte',
		subtitle: 'Hacker News / Svelte',
		description:
			'A modern and sleek application for reading Hacker News, with split view and dark mode support! 🌙',
		link: 'https://hn-svelte-omega.vercel.app',
		github: 'https://github.com/hinryd/hn-svelte',
		icon: Y18Icon
	},
	{
		title: 'BrawlKing',
		subtitle: 'Brawl Star / Svelte',
		description:
			'A really quick reference to current competitive Brawl Star information, optimized for mobile experience.',
		link: 'https://brawlking.vercel.app',
		icon: BrawlKingIcon
	}

	// {
	// 	title: 'Claude API Proxy',
	// 	subtitle: 'OpenCode Integration / Go',
	// 	description:
	// 		'A lightweight Go proxy server that bridges OpenCode with Claude API, enabling seamless AI-assisted coding workflows.',
	// 	link: '#',
	// 	github: 'https://github.com/hinryd/claude-proxy',
	// 	icon: 'ri-arrow-right-up-line'
	// },
	// {
	// 	title: 'High-Freq Trading Bot',
	// 	subtitle: 'C++ / Low Latency System',
	// 	description:
	// 		'Ultra-low latency trading system built in C++ for executing high-frequency strategies with microsecond precision.',
	// 	link: '#',
	// 	icon: 'ri-arrow-right-up-line'
	// }
];

const services: {
	title: string;
	subtitle: string;

	link: string;
}[] = [
	{
		title: 'n8n',
		subtitle: 'Workflow Automation Platform',
		link: 'https://n8n.hinry.xyz'
	},
	{
		title: 'ezBookkeeping',
		subtitle: 'Expense Tracking',
		link: 'https://ez.hinry.xyz'
	}
];

export const load = () => {
	return {
		portfolioItems,
		services
	};
};
