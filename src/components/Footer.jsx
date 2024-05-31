import { useLocation } from 'preact-iso';
import Logo from '../../assets/Logo-Bertin-Technologies_White.png';
import { h } from 'preact';
export function Footer() {
	const { url } = useLocation();
    
	return (
        <footer class="footer_login">
            <img src={Logo} alt="Bertin_logo"></img>
        </footer>
	);
}