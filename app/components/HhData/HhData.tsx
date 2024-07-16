import styles from './HhData.module.css';
import { HhDataProps } from './HhData.props';
import { Card } from '../index';
import Star from './stars.svg';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) => {
	return (
		<div className={styles.hh}>
			<Card color='white' className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Начальный</div>
					<div className={styles.salaryValue}>{juniorSalary}</div>
					<div className={styles.rate}>
						<Star className={styles.filled} />
						<Star />
						<Star />
					</div>
				</div>
				<div>
					<div className={styles.title}>Средний</div>
					<div className={styles.salaryValue}>{middleSalary}</div>
					<div className={styles.rate}>
						<Star className={styles.filled} />
						<Star className={styles.filled}/>
						<Star />
					</div>
				</div>
				<div>
					<div className={styles.title}>Профессионал</div>
					<div className={styles.salaryValue}>{seniorSalary}</div>
					<div className={styles.rate}>
						<Star className={styles.filled} />
						<Star className={styles.filled}/>
						<Star className={styles.filled}/>
					</div>
				</div>
			</Card>
		</div>
	);
};
