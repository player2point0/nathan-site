import React from "react";
import styles from "./styles";

export default function Header({ setXraySelection }) {
	return (
		<div
			styles={styles}
			onMouseEnter={() => setXraySelection(Header.name)}
			onMouseLeave={() => setXraySelection("")}
		>
			Header
		</div>
	);
}
