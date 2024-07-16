import { API } from '../app/api';
import { ProductModel } from '@/interfaces/product.interface';

export async function getProducts(category: string, limit: number = 10): Promise<ProductModel[]> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ category, limit })
	});
	
	if (!res.ok) {
		console.error("Failed to fetch products:", res.status, res.statusText);
		return [];
	}

	const data = await res.json();
	
	return data;
}