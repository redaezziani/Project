// LottieAnimation.js
import Lottie from 'lottie-react';
import animationData from '../assets/images/json/animation_lmgottw8.json'; // Replace with your animation JSON file

const LottieAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className='w-full h-full'
      />
    </div>
  );
};

export default LottieAnimation;
