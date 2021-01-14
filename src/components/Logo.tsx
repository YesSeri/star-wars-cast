import logoImg from "../image/sw-logo.png";
import styled from "styled-components";

const Header = styled.header`
	margin: 2em 0.5em;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		max-width: min(32em, 100%);
	}
`;

const Logo = () => {
	return (
		<Header>
			<img src={logoImg} alt="star wars logo" />
		</Header>
	);
};

export default Logo;
