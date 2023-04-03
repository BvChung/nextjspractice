import React from "react";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="h-16 w-full bg-gray-500">
			<div className="">Navbar</div>
			<Link className="text-violet-600" href={"products"}>
				Products
			</Link>
		</nav>
	);
}
