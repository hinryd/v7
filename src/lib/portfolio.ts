export interface PortfolioItem {
	title: string;
	subtitle: string;
	link: string;
	icon: string; // Using a simplified string for icon handling or remove if not needed
	isDownload?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
	{
		title: 'Horse Racing ML Model',
		subtitle: 'PyTorch / Deep Learning',
		link: '#',
		icon: 'ri-arrow-right-up-line'
	},
	{
		title: 'Claude API Proxy',
		subtitle: 'OpenCode Integration / Go',
		link: '#',
		icon: 'ri-arrow-right-up-line'
	},
	{
		title: 'High-Freq Trading Bot',
		subtitle: 'C++ / Low Latency System',
		link: '#',
		icon: 'ri-arrow-right-up-line'
	}
];
