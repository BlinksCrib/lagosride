import Hero from './components/hero';
import NBar from './components/navb';
import Need from './components/need';
import Steps from './components/steps';
import Foot from './components/footer';
export default function Home() {
	return (
		<>
			<NBar />
			<Hero />
			<Steps />
			<Need />
			<Foot />
		</>
	);
}
