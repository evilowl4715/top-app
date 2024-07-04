import { getMenu } from '@/api/menu';
import MenuClient from './MenuClient';
import { firstLevelMenu } from '@/helpers/helpers';

export async function Menu() {
  const firstCategory = 0;
  const menu = await getMenu(firstCategory);

  return <MenuClient firstLevelMenu={firstLevelMenu} firstCategory={firstCategory} initialMenu={menu} />;
}