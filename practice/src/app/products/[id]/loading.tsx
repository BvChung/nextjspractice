import React from "react";
import Spinner from "@/components/Spinner";

export default function loading() {
	return (
		<div
			className="w-full h-f
     flex items-center justify-center"
		>
			<Spinner />
		</div>
	);
}
