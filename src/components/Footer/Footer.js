import { FaLinkedinIn, FaGithub, FaLaptopCode} from 'react-icons/fa';
import styles from './Footer.module.css';

export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h3>Encontre-me nas redes</h3>
                <ul className={styles.nets}>
                    <li><a href="https://github.com/PhilipeAnderson"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/philipe-anderson-de-campos-92593864/"><FaLinkedinIn /></a></li>
                    <li><a href="https://phillinks.com.br"><FaLaptopCode /></a></li>
                </ul>
            </div>
        </footer>
    )
}