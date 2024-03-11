import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Morocco',
		logo: 'https://www.uca.ma/public/files/images/site-1-2525ed2b2ad29dfbbe242515dda9cf43-2143650689.png',
		name: '',
		organization: 'UCA',
		period: { from: new Date(2020, 9, 1), to: new Date(2021, 11, 10) },
		shortDescription: '',
		slug: 'UCA',
		subjects: ['Algorithm', 'Algebra', 'Java', 'English', 'PHP', 'JS', 'Networking', 'Pl sql', 'Oracle', 'UML']
	},
	{
		degree: 'TS in computer network technology',
		description: '',
		location: 'Morocco',
		logo: 'https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png',
		name: '',
		organization: 'OFPPT',
		period: { from: new Date(2016, 9, 1), to: new Date(2018, 11, 10) },
		shortDescription: '',
		slug: 'OFPPT',
		subjects: ['C', 'English', 'Networking', 'Linux', 'CCNA', 'Windows Server']
	}
];

export const title = 'Education';
