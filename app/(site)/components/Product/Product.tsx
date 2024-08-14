'use client';
import {
	Button,
	Card,
	Rating,
	Review,
	Tag,
	ReviewForm
} from '@/app/components';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import { declOfNum, priceRu } from '@/helpers/helpers';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Product = motion(
	forwardRef(
		(
			{ product, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
			const reviewRef = useRef<HTMLDivElement>(null);

			const variants = {
				visible: {
					opacity: 1,
					height: 'auto'
				},
				hidden: {
					opacity: 0,
					height: 0
				}
			};

			const scrollToReview = () => {
				setIsReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			};

			return (
				<div className={styles.productPage} {...props} ref={ref}>
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
							<a href='#ref' onClick={scrollToReview}>
								{product.reviewCount}{' '}
								{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</a>
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
							<Button
								appearance='ghost'
								arrow={isReviewOpened ? 'down' : 'right'}
								onClick={() => setIsReviewOpened(!isReviewOpened)}
							>
								Читать отзывы
							</Button>
						</div>
					</Card>
					<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
						<Card color='blue' className={styles.reviews} ref={reviewRef}>
							{product.reviews.map(r => (
								<div key={r._id}>
									<Review review={r} />
									<div className={styles.hr}></div>
								</div>
							))}
							<ReviewForm productId={product._id} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
