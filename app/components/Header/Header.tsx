'use client';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import Logo from '@/app/(site)/logo.svg';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import NavbarIcon from './navbar.svg';
import CloseIcon from './close.svg';
import { motion } from 'framer-motion';
import { Sidebar } from '@/app/(site)/components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Header = ({ className, ...props }: HeaderProps) => {

	const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};
	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			<ButtonIcon appearance='white' onClick={() => setIsOpened(true)}>
				<NavbarIcon />
			</ButtonIcon>
			<motion.div
				className={styles.mobileMenu}
				animate={isOpened ? 'opened' : 'closed'}
				variants={variants} 
				initial='closed'
			>
                {/* переделать в сайтбаре меню в меню клиент */}
				<Sidebar />
				<ButtonIcon
					className={styles.menuClose}
					appearance='white'
					onClick={() => setIsOpened(false)}
				>
					<CloseIcon />
				</ButtonIcon>
			</motion.div>
		</header>
	);
};
