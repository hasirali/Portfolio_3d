import BallCanvas from '../components/Ball'; // Corrected import
import { SectionWrapper } from '../hoc';
import technologies from '../constants/index';

const Tech = () => {
  return (
    <>      <p className="hero_tag text-gray_gradient mb-5">Tech Skills I've Acquired in My Journey</p>

      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
