'use client';
import { HhData, Htag, Tag } from '@/app/components';
import { TopModelPageProps } from './TopModelPage.props';
import styles from './TopModelPage.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { Advanatges } from '../Advanatges/Advanatges';
import parse from 'html-react-parser';
import { Sort } from '../Sort/Sort';
import { SortEnum } from '../Sort/Sort.props';
import { useReducer } from 'react';
import { sortReduser } from './sort.reducer';

export const TopModelPage = ({
	page,
	products,
	firstCategory
}: TopModelPageProps) => {

	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReduser, {
		products,
		sort: SortEnum.Rating
	});

	const setSort = (sort: SortEnum) => {
		dispatchSort({type: sort});
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map(p => <div key={p._id}>{p.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag='h2'>Преимущества</Htag>
					<Advanatges advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}

			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => (
				<Tag key={t} color='primary'>
					{t}
				</Tag>
			))}
		</div>
	);
};
