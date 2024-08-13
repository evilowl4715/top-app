'use client';

import {
	FirstLevelMenuItem,
	MenuItem,
	PageItem
} from '@/interfaces/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import styles from './menu.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuClientProps {
	firstLevelMenu: FirstLevelMenuItem[];
	firstCategory: TopLevelCategory;
	initialMenu: MenuItem[];
	setMenu?: (newMenu: MenuItem[]) => void;
}

const MenuClient: React.FC<MenuClientProps> = ({
	firstLevelMenu,
	firstCategory,
	initialMenu
}) => {
	const pathname = usePathname();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			marginBottom: 0
		}
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto'
		},
		hidden: {
			opacity: 0,
			height: '0'
		}
	};

	const [menu, setMenu] = useState<MenuItem[]>(initialMenu);

	const openSecondLevel = (secondCategory: string) => {
		console.log('ewfwe');
		setMenu &&
			setMenu(
				menu.map(m => {
					if (m._id.secondCategory == secondCategory) {
						m.isOpened = !m.isOpened;
					}
					return m;
				})
			);
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => {
					return (
						<div key={m.route}>
							<Link href={`/${m.route}`}>
								<div
									className={cn(styles.firstLevel, {
										[styles.firstLevelActive]: m.id == firstCategory
									})}
								>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</Link>
							{m.id == firstCategory && buildSecondLevel(m)}
						</div>
					);
				})}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(p => (
			<motion.div key={p._id} variants={variantsChildren}>
				<Link
					href={`/${route}/${p.alias}`}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
					})}
				>
					{p.category}
				</Link>
			</motion.div>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default MenuClient;
