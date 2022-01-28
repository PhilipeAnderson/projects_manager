import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

import { Container, MenuIcon, MenuModal} from './styles.js';


export function NavBar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function handleMenuOpenModal(){
		setIsMenuOpen(true)
	}

	function handleMenuCloseModal(){
		setIsMenuOpen(false)
	}

	return (
		<Container>
			<MenuIcon onClick={handleMenuOpenModal}>
				<GiHamburgerMenu/>
			</MenuIcon>

			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/newproject">New Project</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>

			<Modal
				isOpen={isMenuOpen}
				onRequestClose={handleMenuCloseModal}
				overlayClassName="overlay"
				className="content"
			>
				<div>
					<RiCloseFill onClick={handleMenuCloseModal}/>
				</div>
				<MenuModal>
					<li onClick={handleMenuCloseModal}>
						<Link to="/">Home</Link>
					</li>
					<li onClick={handleMenuCloseModal}>
						<Link to="/newproject">New Project</Link>
					</li>
					<li onClick={handleMenuCloseModal}>
						<Link to="/projects">Projects</Link>
					</li>
				</MenuModal>
			</Modal>	
		</Container>
	)
}