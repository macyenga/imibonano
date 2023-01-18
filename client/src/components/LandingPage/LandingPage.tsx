import './LandingPage.css';
import ParallaxText from './Parallax';
import LandingPaper from './LandingPaper';

const LandingPage = () => {
	return (
		<div className="landing-background">
			<section className="landing-text">
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥ </ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<LandingPaper />
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>Imibonano ♥ Imibonano ♥ Imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on Imibonano ♥</ParallaxText>
			</section>
			<div className="dotted" />
		</div>
	);
};

export default LandingPage;