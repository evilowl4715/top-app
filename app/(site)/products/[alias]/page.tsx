import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Страница'
};

export default async function PageProducts({
	params
}: {
	params: { alias: string };
}) {

	const page = await getPage(params.alias);

	if(!page) {
		notFound();
	}

	return <div>Страница c {params.alias} {page.title}</div>;
}
