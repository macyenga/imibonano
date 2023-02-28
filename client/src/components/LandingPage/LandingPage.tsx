import './LandingPage.css';
import ParallaxText from './Parallax';
import LandingPaper from './LandingPaper';

const LandingPage = () => {
	return (
		<div className="landing-background">
			<section className="landing-text">
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥ </ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<LandingPaper />
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={2}>imibonano ♥ imibonano ♥ imibonano ♥</ParallaxText>
				<ParallaxText baseVelocity={-2}>Find your love on imibonano ♥</ParallaxText>
			</section>
			<div className="dotted" />
		</div>
	);
};

export default LandingPage;
