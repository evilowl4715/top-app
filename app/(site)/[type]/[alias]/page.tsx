import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { firstLevelMenu } from '@/helpers/helpers';
import { getProducts } from '@/api/products';
import { TopModelPage } from '../../components/TopModelPage/TopModelPage';

export const metadata: Metadata = {
	title: 'Страница'
};

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return firstLevelMenu.flatMap(item =>
		menu.flatMap(menuItem =>
			menuItem.pages.map(page => ({
				type: item.route,
				alias: page.alias
			}))
		)
	);
}

export default async function TopPage({
	params
}: {
	params: { type: string; alias: string;};
}) {
	const page = await getPage(params.alias);

	if (!page) {
		notFound();
	}

	const products = await getProducts(page.category);

	const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

	if (!firstCategoryItem) {
		notFound();
	}



	return (
		<TopModelPage page={page} products={products} firstCategory={firstCategoryItem.id}/>
	);
}
