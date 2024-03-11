import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import go from '../md/go.md?raw';
import ts from '../md/ts.md?raw';
import php from '../md/php.md?raw';
import js from '../md/js.md?raw';
import css from '../md/css.md?raw';
import html from '../md/html.md?raw';
import sass from '../md/sass.md?raw';
import laravel from '../md/laravel.md?raw';
import express from '../md/express.md?raw';
import angular from '../md/angular.md?raw';
import vue from '../md/vue.md?raw';
import react_native from '../md/react-native.md?raw';
import react from '../md/react.md?raw';
import tailwind from '../md/tailwind.md?raw';
import bootstrap from '../md/bootstrap.md?raw';
import jquery from '../md/jquery.md?raw';
import mysql from '../md/mysql.md?raw';
import mongodb from '../md/mongodb.md?raw';
import postgres from '../md/postgres.md?raw';
import prisma from '../md/prisma.md?raw';
import squelize from '../md/squelize.md?raw';
import docker from '../md/docker.md?raw';
import nginx from '../md/nginx.md?raw';
import git from '../md/git.md?raw';
import bitbucket from '../md/bitbucket.md?raw';
import wordpress from '../md/wordpress.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'CMS', slug: 'cms' }),
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'GO',
		color: '#00A7D0',
		description: go,
		logo: Assets.Go,
		name: 'GO',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'TS',
		color: 'blue',
		description: ts,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'PHP',
		color: '#777BB3',
		description: php,
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'JS',
		color: 'yellow',
		description: js,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	//___________________________________________________Frameworks
	defineSkill({
		slug: 'Laravel',
		color: '#F9322C',
		description: laravel,
		logo: Assets.LARAVEL,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'ExpressJs',
		color: '#202124',
		description: express,
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Angular',
		color: '#BD002E',
		description: angular,
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'Vuejs',
		color: '#3FB27F',
		description: vue,
		logo: Assets.VueJs,
		name: 'Vuejs',
		category: 'framework'
	}),
	defineSkill({
		slug: 'React-native',
		color: 'cyan',
		description: react_native,
		logo: Assets.ReactJs,
		name: 'React Native',
		category: 'framework'
	}),
	//___________________________________________________Frameworks

	defineSkill({
		slug: 'css',
		color: 'blue',
		description: css,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: html,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: sass,
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: react,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'tailwindcss',
		color: '#38BDF8',
		description: tailwind,
		logo: Assets.Tailwind,
		name: 'Tailwind Css',
		category: 'library'
	}),
	defineSkill({
		slug: 'Bootstrap',
		color: '#6D0FF3',
		description: bootstrap,
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'library'
	}),
	defineSkill({
		slug: 'jQuery',
		color: '#0865A7',
		description: jquery,
		logo: Assets.jQuery,
		name: 'jQuery',
		category: 'library'
	}),

	//____________________________________________________
	defineSkill({
		slug: 'MySQL',
		color: '#E58F10',
		description: mysql,
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'MongoDb',
		color: '#12a54f',
		description: mongodb,
		logo: Assets.MongoDB,
		name: 'MongoDb',
		category: 'db'
	}),
	defineSkill({
		slug: 'PostgreSQL',
		color: '#3C89CE',
		description: postgres,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	//_____________________________________________________
	defineSkill({
		slug: 'Prisma',
		color: '#3C89CE',
		description: prisma,
		logo: Assets.PRISMA,
		name: 'Prisma',
		category: 'orm'
	}),
	defineSkill({
		slug: 'Sequelize',
		color: '#3C89CE',
		description: squelize,
		logo: Assets.sequelizejs,
		name: 'Sequelize',
		category: 'orm'
	}),
	//----------------------------------------------------
	defineSkill({
		slug: 'Docker',
		color: '#3C89CE',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'NGINX',
		color: '#019639',
		description: nginx,
		logo: Assets.Nginx,
		name: 'NGINX',
		category: 'devops'
	}),
	defineSkill({
		slug: 'GIT',
		color: '#E94E31',
		description: git,
		logo: Assets.GIT,
		name: 'GIT',
		category: 'devops'
	}),
	//_____________________________________________________
	defineSkill({
		slug: 'Bitbucket',
		color: '#2185FF',
		description: bitbucket,
		logo: Assets.bitbucket,
		name: 'Bitbucket',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'Wordpress',
		color: '#2185FF',
		description: wordpress,
		logo: Assets.wordpress,
		name: 'Wordpress',
		category: 'cms'
	}),

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
