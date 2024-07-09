import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icon/courses.svg';
import ServicesIcon from './icon/services.svg';
import BookIcon from './icon/book.svg';
import ProductsIcon from './icon/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
      route: 'courses',
      name: 'Курсы',
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: 'services',
      name: 'Сервисы',
      icon: <ServicesIcon />,
      id: TopLevelCategory.Services,
    },
    {
      route: 'books',
      name: 'Книги',
      icon: <BookIcon />,
      id: TopLevelCategory.Books,
    },
    {
      route: 'products',
      name: 'Продукты',
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products,
    },
  ];
  