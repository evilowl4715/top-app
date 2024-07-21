import { Button, Card, Rating, Tag } from '@/app/components';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import { declOfNum, priceRu } from '@/helpers/helpers';
import cn from 'classnames';

export const Product = ({ product }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}>
				<img src={product.image} alt={product.title} />
			</div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>
				{priceRu(product.price)}
				{product.oldPrice && (
					<Tag className={styles.oldPrice} color='green'>
						{priceRu(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={styles.credit}>
				{priceRu(product.credit)}
				<span className={styles.month}> / мес</span>
			</div>
			<div className={styles.rating}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={styles.tags}>
				{product.categories.map(c => (
					<Tag key={c} color='ghost'>
						{c}
					</Tag>
				))}
			</div>
			<div className={styles.priceTitle}>Цена</div>
			<div className={styles.creditTitle}>Кредит</div>
			<div className={styles.ratingTitle}>
				{product.reviewCount}{' '}
				{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
			</div>
			<div className={styles.hr}></div>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.features}>
				{product.characteristics.map(ch => (
					<div className={styles.characteristic} key={ch.name}>
						<span className={styles.characteristicName}>{ch.name}</span>
						<span className={styles.characteristicDots}></span>
						<span className={styles.characteristicValue}>{ch.value}</span>
					</div>
				))}
			</div>
			<div className={styles.advBlock}>
				<div className={styles.advantages}>
					<div className={styles.advTitle}>Преимущества</div>
					<div className={styles.advText}>{product.advantages}</div>
				</div>
				{product.disadvantages && (
					<div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div className={styles.advText}>{product.disadvantages}</div>
					</div>
				)}
			</div>
			<div className={cn(styles.hr, styles.h2)}></div>
			<div className={styles.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow={'right'}>
					Читать отзывы
				</Button>
			</div>
		</Card>
	);
};
