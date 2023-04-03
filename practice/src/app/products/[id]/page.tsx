import React from "react";
import { Products } from "@/types/product";

async function getProduct(productId: string): Promise<Products> {
	const res = await fetch(`${process.env.REACT_APP_TEST_API}/${productId}`);
	const data = await res.json();

	return data;
}

export default async function page({ params }: any) {
	const product = await getProduct(params.id);

	return (
		<div>
			<h1>Product/{product._id}</h1>
			<div className="flex flex-col gap-4">
				<div>{product.name}</div>
				<div>{product.category}</div>
				<div>{product.price}</div>
				<div>{product.description}</div>
			</div>
		</div>
	);
}
