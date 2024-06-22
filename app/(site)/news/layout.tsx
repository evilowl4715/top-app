import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Новости',
	description: 'Новости'
};

export default function NewsLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='news'>
			{children}
		</div>
	);
}
