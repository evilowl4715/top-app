'use client';
import styles from './Up.module.css';
import UpIcon from './Up.svg';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = () => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonIcon appearance="primary" onClick={scrollTop}>
				<UpIcon />
			</ButtonIcon>
		</motion.div>
	);
};
