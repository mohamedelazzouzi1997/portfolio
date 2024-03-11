import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'movie-app-angular',
		color: '#DE012D',
		description:
			'A movie app Like letterboxd website made with  Typescript and Angular and TMDB API with authentication/rating/favorite/whatchlist ',
		shortDescription:
			'A movie app Like letterboxd website made with  Typescript and Angular and TMDB API',
		links: [{ to: 'https://github.com/mohamedelazzouzi1997/angular-movie-app-standalone-component', label: 'GitHub' }, { to: 'https://mohamed-elazzouzi-angular-movie-app.vercel.app/movies/list?page=1', label: 'Website' }],
		logo: Assets.Angular,
		name: 'Movie App',
		period: {
			from: new Date(2023, 7, 1)
		},
		skills: getSkills('Angular', 'TS', 'tailwindcss'),
		type: 'Movie App',
		screenshots: [
			{
				label: '',
				src: 'https://private-user-images.githubusercontent.com/76395793/268467394-01f2f2c3-4f75-4eb7-83f2-0240b8d19a51.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxODc5MzcsIm5iZiI6MTcxMDE4NzYzNywicGF0aCI6Ii83NjM5NTc5My8yNjg0NjczOTQtMDFmMmYyYzMtNGY3NS00ZWI3LTgzZjItMDI0MGI4ZDE5YTUxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDIwMDcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThjNWQ0YzBkNThmNjFkM2NkMTFmMjlmMGJkYzIwMTA0ZDQ1YTc4NTk3MzUyOWNhNGQ1OThkYzc5N2FmZjc3ZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.FaRjE1ERRS4GiIQCT8jQWOBOLg6fPv5jZXVLDV-7X3g'
			},
			{
				label: '',
				src: 'https://private-user-images.githubusercontent.com/76395793/268468360-506a193d-914f-4e3d-b9c5-4ed287620e1f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxODc5MzcsIm5iZiI6MTcxMDE4NzYzNywicGF0aCI6Ii83NjM5NTc5My8yNjg0NjgzNjAtNTA2YTE5M2QtOTE0Zi00ZTNkLWI5YzUtNGVkMjg3NjIwZTFmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDIwMDcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFiZTBkNDcyOWE4M2QxYzE4ZjE5OTA4NTJmNzM2MWNhZDI2NmMyYWI4NzI4NDUwZjRiOTE3MmM1YmE2NDc2MDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9FWNURZT6QcmAnG4KF72L-D7f6-RSRiU_DvqNkm26hw'
			},
			{
				label: '',
				src: 'https://private-user-images.githubusercontent.com/76395793/268468326-40be22de-64db-4dd8-833c-f8fa3c044a9c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxODc5MzcsIm5iZiI6MTcxMDE4NzYzNywicGF0aCI6Ii83NjM5NTc5My8yNjg0NjgzMjYtNDBiZTIyZGUtNjRkYi00ZGQ4LTgzM2MtZjhmYTNjMDQ0YTljLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDIwMDcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFmODM4MDJlMThhMDdlMGNmMjE3ZDEzNDExODc0M2U2MTVhNjBjZmE3MjZiNjBlNjliNGRjNTUxOGNkOWVlNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ydKa1SfY3UR_8abLcXJ_t8-V8mmHeB8Cap3Cj7fN7p0'
			},
			{
				label: '',
				src: 'https://private-user-images.githubusercontent.com/76395793/268468251-6cb401e6-6b9e-471a-bf27-6a60af4c30de.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxODc5MzcsIm5iZiI6MTcxMDE4NzYzNywicGF0aCI6Ii83NjM5NTc5My8yNjg0NjgyNTEtNmNiNDAxZTYtNmI5ZS00NzFhLWJmMjctNmE2MGFmNGMzMGRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDIwMDcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM0ODFkOGI4MDIzMjZlYzliNzRiMmU2YWQ5ZGVkZTc5NzNkMTRiNjE0YWQ1MDUwOTJkNTQ3YTJiODE1OWE2M2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0odyWiLfnLUYkF3nWYBTdx82QQIppCd8_tVwYfBbKuI'
			},
			{
				label: '',
				src: 'https://private-user-images.githubusercontent.com/76395793/268468285-e8812e62-4e7e-46c4-8731-6abd501ea278.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxODc5MzcsIm5iZiI6MTcxMDE4NzYzNywicGF0aCI6Ii83NjM5NTc5My8yNjg0NjgyODUtZTg4MTJlNjItNGU3ZS00NmM0LTg3MzEtNmFiZDUwMWVhMjc4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDIwMDcxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5OTJlZTVmYzI1Y2IyNmFhOTQ0MDY5NGJlY2I2MWM3YTg5ZDUyOTBlM2I3MmQ1ZjIxZmEzMDhhM2U3MzAyNjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.PRFNK_g88rUwz_hEqYMPvfQUl64APfUpT4QcdOHPJLs'
			},

		]
	},
	{
		slug: 'SMS-APP',
		color: '#7c3aed',
		description:
			'A SMS Numbers app for receiving sms with payment and subscription using paypal and stripe for payment',
		shortDescription:
			'A SMS Numbers app for receiving sms with payment and subscription using paypal and stripe for payment ',
		links: [{ to: 'https://number4sms.com/', label: 'Website' }],
		logo: Assets.LARAVEL,
		name: 'SMS App',
		period: {
			from: new Date(2022, 8, 1)
		},
		skills: getSkills('Laravel', 'tailwindcss', 'JS', 'jQuery', 'MySQL'),
		type: 'SMS App',
		screenshots: [
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},

		]
	},
	{
		slug: 'Agenda-app',
		color: 'orange',
		description:
			'Agenda app for planing tasks with fullcalendar',
		shortDescription:
			'Agenda app for planing tasks with fullcalendar ',
		links: [{ to: 'https://drive.google.com/file/d/19aVkxGB_nAicTReHXxlv8MyawCM27_DW/view?usp=shari', label: 'Video Link' }],
		logo: Assets.LARAVEL,
		name: 'Agenda App',
		period: {
			from: new Date(2023, 1, 1)
		},
		skills: getSkills('Laravel', 'tailwindcss', 'JS', 'jQuery', 'MySQL'),
		type: 'Agenda App',
		screenshots: [
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},
			{
				label: '',
				src: ''
			},

		]
	},
	{
		slug: 'blog-Api',
		color: 'cyan',
		description:
			'A blog Api with Expressjs and mongodb',
		shortDescription:
			'A blog Api with Expressjs and mongodb ',
		links: [{ to: 'https://github.com/mohamedelazzouzi1997/NodeJsExpressJsSimplecCrudRestApi', label: 'Github' }],
		logo: Assets.ExpressJs,
		name: 'blog api',
		period: {
			from: new Date(2023, 9, 1)
		},
		skills: getSkills('ExpressJs', 'MongoDb', 'JS'),
		type: 'blog api',
	},
	{
		slug: 'manga-app',
		color: '#f97316',
		description:
			'A webapp for reading manga',
		shortDescription:
			'A webapp for reading manga ',
		links: [{ to: 'https://github.com/mohamedelazzouzi1997/multipl-manga', label: 'Github' }, { to: 'https://drive.google.com/file/d/1ZLrGL52kW90oSFnOLEJ1lUtZP8j5U9q3/view?usp=sharing', label: 'Video Link' }],
		logo: Assets.LARAVEL,
		name: 'Reading manga app',
		period: {
			from: new Date(2022, 9, 1)
		},
		skills: getSkills('Laravel', 'MySQL', 'jQuery', 'JS', 'tailwindcss'),
		type: 'Reading manga app',
	},
	{
		slug: 'helpdesk-app',
		color: '#be123c',
		description:
			'helpdesk application using Laravel and MySQL to manage tickets, associating them with users, and incorporate Laravel Echo for real-time notification functionality',
		shortDescription:
			'helpdesk application using Laravel and MySQL to manage tickets, associating them with users, and incorporate Laravel Echo for real-time notification functionality ',
		links: [{ to: 'https://github.com/mohamedelazzouzi1997/helpdesk', label: 'Github' }, { to: 'https://drive.google.com/file/d/1l4ebi5VW3jFCqqFhx0nRWXktggJyJIGv/view', label: 'Video Link' }],
		logo: Assets.LARAVEL,
		name: 'helpdesk app',
		period: {
			from: new Date(2022, 3, 1)
		},
		skills: getSkills('Laravel', 'MySQL', 'jQuery', 'JS', 'tailwindcss'),
		type: 'helpdesk app',
	},

];

export const title = 'Projects';
