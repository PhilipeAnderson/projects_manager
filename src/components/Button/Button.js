import { Link } from 'react-router-dom';
import { ButtonStyles } from './styles.js';


export function Button({ to, name }) {
	return (
		<ButtonStyles>
			<Link to={to}>
				{name}
			</Link>
		</ButtonStyles>
	)
}