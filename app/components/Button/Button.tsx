import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import BtnArrow from '../../../public/btn-arrow.svg';

export const Button = ({
	appearance,
	children,
	className,
	arrow = 'none',
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down'
					})}
				>
					<BtnArrow/>
				</span>
			)}
		</button>
	);
};
