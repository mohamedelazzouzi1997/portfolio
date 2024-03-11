import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import smart_influance from '../md/Smart-Influencer.md?raw';
import it_lab from '../md/it-lab.md?raw';
import leblokk from '../md/le-blokk.md?raw';
import digitalpole from '../md/digitalepole.md?raw';


export const items: Array<Experience> = [
	{
		slug: 'Full-stack-web-developer-Digitalpol',
		company: 'Digitalpole',
		description: digitalpole,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2023, 6, 1), to: new Date() },
		skills: getSkills('css', 'html', 'Laravel', "PHP", 'tailwindcss', 'Angular', 'PostgreSQL'),
		name: 'Full stack web developer',
		color: 'skyblue',
		links: [],
		logo: 'https://www.digitalpole.fr/wp-content/uploads/2023/10/logo1.webp',
		shortDescription: 'I created web applications using Laravel and Angular within an Agile framework, while utilizing Git and Jira for efficient project management.'
	},
	{
		slug: 'Full-stack-web-developer-le-blokk',
		company: 'Conciergety / le blokk restaurent',
		description: leblokk,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 6, 29) },
		skills: getSkills('css', 'html', 'js', 'MySQL', 'Laravel', "PHP", 'tailwindcss'),
		name: 'Full stack web developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'I built two schedule apps with Laravel and FullCalendar.js.'
	},
	{
		slug: 'Full-stack-web-developer-it-labs',
		company: 'IT LABS PRO',
		description: it_lab,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2022, 5, 29), to: new Date(2022, 11, 30) },
		skills: getSkills('css', 'html', 'js', 'MySQL', 'Laravel', "PHP"),
		name: 'Full stack web developer',
		color: 'blue',
		links: [],
		logo: 'https://www.itlabspro.com/assets/images/logo-dark.svg',
		shortDescription: 'designed and implemented a web application for receiving SMS messages, integrated PayPal and Stripe payment gateways to facilitate secure transactions, thereby enhancing the services provided to clients.'
	},
	{
		slug: 'Full-stack-web-developer',
		company: 'Smart-Influencer',
		description: smart_influance,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2022, 3, 1), to: new Date(2022, 4, 5) },
		skills: getSkills('css', 'html', 'js', 'MySQL', 'Laravel', "PHP"),
		name: 'Full stack web developer',
		color: 'cyan',
		links: [],
		logo: 'https://smartinfluencer.ma/wp-content/uploads/2021/11/SI.gif',
		shortDescription: 'Developed a web-based helpdesk application using Laravel v8 and JavaScrip.'
	}
];

export const title = 'Experience';
