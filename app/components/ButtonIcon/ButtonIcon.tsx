import styles from './ButtonIcon.module.css';
import cn from 'classnames';
import { ButtonIconProps } from './ButtonIcon.props';

export const ButtonIcon = ({
	appearance,
	children,
	className,
	...props
}: ButtonIconProps) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.white]: appearance == 'white'
			})}
			{...props}
		>
			{children}
		</button>
	);
};
