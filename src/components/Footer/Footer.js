import { FaLinkedinIn, FaGithub, FaLaptopCode, FaWhatsapp } from 'react-icons/fa';
import { FooterBar } from './styles.js';

export function Footer() {
	return (
		<FooterBar>
			<div>
				<h3>Encontre-me nas redes</h3>
				<ul>
					<li><a href="https://github.com/PhilipeAnderson"><FaGithub /></a></li>
					<li><a href="https://www.linkedin.com/in/philipe-anderson-de-campos-92593864/"><FaLinkedinIn /></a></li>
					<li><a href="https://phillinks.com.br"><FaLaptopCode /></a></li>
					<li><a href="https://api.whatsapp.com/send?phone=+5541984000085&text=Olá!%20Meu%20nome%20é%20Philipe.%20Será%20um%20prazer%20falar%20com%20você!"><FaWhatsapp /></a></li>
				</ul>
				<p>Projects Manager <span> &copy; 2021</span></p>
			</div>
		</FooterBar>
	)
}