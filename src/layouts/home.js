import Home from '../views/home/home';

export default function (props) {
	return (
		<>
			<Home {...props}/>
			{props.children}
		</>
	);
}