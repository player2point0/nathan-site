import React, { useState, useEffect } from "react";
import styles from "./styles";

export default function Xray({ xraySelection }) {
	const [content, setContent] = useState();

	const filename = xraySelection + ".txt";
	console.log(xraySelection);

	useEffect(() => {
		if (xraySelection === "") return;

		fetch("../../javascriptTextFiles/" + filename)
			.then((res) => res.text())
			.then((text) => {
				setContent(text);
			})
			.catch((e) => console.error(e));
	});

	const showXray = xraySelection !== "";

	return (
		<div className="App">
			<div style={styles}>
				<code>{showXray && <div>{content}</div>}</code>
			</div>
		</div>
	);
}
