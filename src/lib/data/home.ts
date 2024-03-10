import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mohamed';

export const lastName = 'El Azzouzi';

export const description =
	'I am a skilled Full Stack Web Developer with a passion for creating robust and user-friendly applications. Proficient in both front-end and back-end technologies, I bring a comprehensive understanding of the development process from concept to deployment. My expertise includes designing responsive and intuitive user interfaces, implementing scalable backend solutions, and optimizing overall performance. With a commitment to staying updated on industry trends, I am dedicated to delivering high-quality software solutions that meet client needs and enhance the user experience.';

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
