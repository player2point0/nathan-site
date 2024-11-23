import React, { useState } from "react";
import Xray from "./components/Xray";
import Header from "./components/Header";

// TODO change to typeScript

function App() {
	const [xraySelection, setXraySelection] = useState("");

	return (
		<div>
			<Header setXraySelection={setXraySelection} />
			<Xray xraySelection={xraySelection} />
		</div>
	);
}

export default App;
