export interface Project {
	title: string;
	description: string;
	tags: { name: string; class: string }[];
	link: string;
	image: string;
	github?: string;
}

export const projects: Project[] = [
	{
		title: 'Funpronima IPS',
		image: '/projects/funpronima.png',
		description:
			'IPS de salud mental en Santa Marta, Colombia. Brinda atención integral en psicología, psiquiatría, neuropediatría, medicina general y terapias para niños, adolescentes, adultos y adultos mayores, con un enfoque humanizado e interdisciplinario.',
		link: 'https://funpronima.com.co',
		tags: [
			{ name: 'Astro', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
			{ name: 'Tailwind CSS', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
		],
	},
	{
		title: 'History Moments',
		description:
			'Página web de un estudio fotográfico. Más de 8 años de experiencia capturando bodas y momentos especiales con un estilo auténtico y artístico. Creado en colaboración por Rossy y Jean, fotógrafos apasionados inspirados en el arte, la naturaleza y las historias de amor.',
		link: 'https://history-moment-page.pages.dev/',
		image: '/projects/history_moments.webp',
		tags: [
			{ name: 'Tailwind CSS', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
			{ name: 'Astro', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
		],
	},
	{
		title: 'PomodoroFocus',
		image: '/projects/pomdoro_focus.png',
		description:
			'Temporizador Pomodoro simple y gratuito para mejorar tu productividad. Personaliza ciclos de trabajo, descansos automáticos y consulta estadísticas.',
		link: 'https://0c2d2e85.pomodoro-app-ee6.pages.dev/',
		tags: [{ name: 'Tailwind CSS', class: 'bg-green-500/10 text-green-400 border border-green-500/20' }],
	},
	{
		title: 'Reqly',
		image: '/projects/reqly.png',
		description:
			'A modern desktop HTTP client built with Electron + React + Vite that allows you to create, organize, and execute HTTP requests with full environment support.',
		link: 'https://github.com/Damet24/Reqly',
		tags: [
			{ name: 'React', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
			{ name: 'Electron', class: 'bg-green-500/10 text-green-400 border border-green-500/20' },
		],
	},
];
