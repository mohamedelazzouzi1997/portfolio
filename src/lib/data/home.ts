import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mohamed';

export const lastName = 'El Azzouzi';

export const description =
	'Hi! I’m Mohamed, a passionate developer who loves building and maintaining web and mobile applications. I enjoy deploying projects with Docker, working with APIs, and automating tasks in Linux. I’m always curious and constantly learning new technologies to improve my skills and deliver better solutions.'
export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/mohamedelazzouzi1997'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/mohamed-el-azzouzi-258821230/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'med.elazzouzi.97@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('GO', 'TS', 'PHP', 'JS', 'Laravel', 'ExpressJs', 'Angular', "Vuejs", "React-native", "css", "html", "sass", "reactjs", "tailwindcss", "Bootstrap", "jQuery", "MySQL", 'MongoDb', 'PostgreSQL', 'Prisma', 'Sequelize', 'Docker', 'NGINX', 'GIT', 'Bitbucket', 'Wordpress');
