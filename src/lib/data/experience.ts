import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';
import smart_influance from '../md/Smart-Influencer.md?raw';
import it_lab from '../md/it-lab.md?raw';
import freelancer from '../md/le-blokk.md?raw';
import digitalpole from '../md/digitalepole.md?raw';


export const items: Array<Experience> = [
	{
		slug: 'Software Developer - digitalpol',
		company: 'Digitalpole',
		description: digitalpole,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2023, 6, 1), to: new Date() },
		skills: getSkills('css', 'html', 'Laravel', "PHP", 'tailwindcss', 'Angular', 'PostgreSQL', 'GIT', 'Docker', 'reactjs', 'NGINX'),
		name: 'Software Developer',
		color: '#F29502',
		links: [],
		logo: 'https://www.digitalpole.fr/wp-content/uploads/2023/10/logo1.webp',
		shortDescription: 'Develop and deploy full-stack web and mobile applications, automate workflows with Docker, CI/CD, and shell scripts, manage servers and databases, and collaborate using Git and project management tools.'
	},
	{
		slug: 'Software Developer freelance',
		company: 'SELF-EMPLOYED / FREELANCE',
		description: freelancer,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 6, 29) },
		skills: getSkills('css', 'html', 'js', 'MySQL', 'Laravel', "PHP", 'tailwindcss'),
		name: 'Software Developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Develop, deploy, and maintain web and mobile applications, including API integration, Docker containerization, Linux-based automation, database troubleshooting, while continuously learning and exploring new technologies.'
	},
	{
		slug: 'Internship – Full-Stack Web Developer - it labs pro',
		company: 'IT LABS PRO',
		description: it_lab,
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2022, 6, 1), to: new Date(2022, 11, 31) },
		skills: getSkills('css', 'html', 'js', 'MySQL', 'Laravel', "PHP"),
		name: 'Full stack web developer',
		color: '#003160',
		links: [],
		logo: 'https://www.itlabspro.com/assets/images/logo-dark.svg',
		shortDescription: 'designed and implemented a web application for receiving SMS messages, integrated PayPal and Stripe payment gateways to facilitate secure transactions, thereby enhancing the services provided to clients.'
	},
	{
		slug: 'Internship – Full-Stack Web Developer smart-influencer',
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
