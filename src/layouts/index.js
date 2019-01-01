import Nav from '../views/nav/nav';

export default function (props) {
	return (
		<>
			<Nav {...props}/>
			{props.children}
		</>
	);
}