import { useLocation } from 'preact-iso';
import BatteryStatus from './BatteryProgressBar';
import { h } from 'preact';


export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				{/* <a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a> */}
				<div class="header_status">
					<BatteryStatus />
					<h3>Alpha-S AS000123</h3>	
				</div>
				
			</nav>
		</header>
	);
}