import { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cn from 'classnames';

export const Card = forwardRef (({
	color = 'white',
	children,
	className,
	...props
}: CardProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.blue]: color == 'blue'
			})}
			{...props}
			ref={ref}
		>
			{children}
		</div>
	);
});

// что бы линтер не ругался
Card.displayName = 'Card';
