import { getMenu } from '@/api/menu';
import { firstLevelMenu } from '@/helpers/helpers';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const menu = await getMenu(0); // Получение меню для первой категории

  // Генерация параметров для всех типов и их страниц
  const params = firstLevelMenu.flatMap(firstLevelItem =>
    menu.flatMap(menuItem =>
      menuItem.pages.map(page => ({
        type: firstLevelItem.route,
        alias: page.alias,
      }))
    )
  );

  return params;
}

export const metadata = {
  title: 'Страница',
};

export default async function PageType({ params }: { params: { type: string } }) {
  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    notFound();
  }

  return (
    <div>
      <h1>{firstCategoryItem.name}</h1>
      <p>Type: {params.type}</p>
    </div>
  );
}