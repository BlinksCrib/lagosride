import Hero from './components/hero';
import NBar from './components/navb';
import Need from './components/need';
import Steps from './components/steps';
import Foot from './components/footer';
import Subscribe from './components/subscribe';
export default function Home() {
	return (
		<>
			<NBar />
			<Hero />
			<Steps />
			<Need />
			<Subscribe />
			<Foot />
		</>
	);
}
