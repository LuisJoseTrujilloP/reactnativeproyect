import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Greeting(props) {
	const { firstname, lastname } = props;
	return (
		<Text>
			Hey {firstname} {lastname}
		</Text>
	);
}

Greeting.defaultProps = {
	firstname: "Marcela",
	lastname: "Damian",
};
Greeting.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
};
