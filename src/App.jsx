/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React from "react";
import TestingClass from "./components/TestingClass";
import TestingFunction from "./components/TestingFunction";
import Counter from "./components/Counter";

export default class App extends React.Component {
	render() {
		return (
			<>
				{/* <TestingFunction Name="Ahmad" />
				<TestingFunction Name="Ali" />
				<TestingClass Name="Othman" /> */}
				<Counter />
				<TestingFunction Name="ahmad"/>
			</>
		);
	}
}
