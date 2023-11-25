import Button from "../../../components/Button/Button";
import men from "../../../assets/bannerImage/men.png";
import ellipsebig from "../../../assets/bannerImage/ellipsebig.png";
import ellipse from "../../../assets/bannerImage/ellipse.png";
import round from "../../../assets/bannerImage/round.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 bg-[#fcf8e9] py-2 lg:py-8">
      <div className="flex flex-col lg:flex-row">
      <div>
        <div><img src={ellipsebig} alt="" /></div>
        <h6 className="md:text-base text-sm lg:font-bold">Discover the beauty of the tropics</h6>
        <h2 className="text-2xl lg:text-4xl lg:font-extrabold">Tropical </h2>
        <h2 className="text-lg font-semibold md:text-2xl lg:text-4xl lg:font-extrabold">Destinations</h2>
        <h3 className="text-4xl font-medium">For Student</h3>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet <br className="block lg:hidden" /> consectetur.  Sit mattis donec <br className="block lg:hidden" /> mi bibendum
          integer
        </p>
        <p className="text-sm"> rutrum nisi. A nec nisl vitae </p>
        <div className="mt-5">
          <Button>SignUp</Button>
        </div>
      </div>
      <div className="mt-20">
      <img className="" src={ellipse} alt="" />
      </div>
      </div>

      
      <div>
        <div><img className="w-[150px] md:[200px] lg:w-[350px]" src={men} alt="" /></div>
        <div className="float-right me-10"><img className="" src={round} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
