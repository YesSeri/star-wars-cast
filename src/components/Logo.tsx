import logo from '../image/sw-logo.png'

const Logo = () => {
	console.log(logo)
	return (
		<header className="center">
			<img src={logo} alt="star wars logo" />
		</header>
	)
}

export default Logo