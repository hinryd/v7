// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface PortfolioItem {
		title: string;
		subtitle: string;
		description: string;
		link?: string;
		github?: string;
		icon: string;
		isDownload?: boolean;
	}
}

export {};
