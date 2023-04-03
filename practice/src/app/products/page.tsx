import React from "react";
import { Products } from "@/types/product";
import Link from "next/link";

async function getProducts(): Promise<Products[]> {
	const res = await fetch(`${process.env.REACT_APP_TEST_API}`);
	const data = await res.json();

	return data;
}

export default async function productsPage() {
	const prod = await getProducts();

	return (
		<div className="grid grid-cols-2 gap-6 ">
			{prod?.map((p) => {
				return (
					<Link
						href={`/products/${p._id}`}
						key={p._id}
						className="w-full h-fit hover:bg-blue-600 hover:bg-opacity-10 rounded-md"
					>
						<div className="">{p._id}</div>
						<div className="">{p.name}</div>
						<div className="">{p.description}</div>
					</Link>
				);
			})}
		</div>
	);
}
