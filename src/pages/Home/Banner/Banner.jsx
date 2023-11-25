import Button from "../../../components/Button/Button";
import men from "../../../assets/bannerImage/men.png";
import ellipsebig from "../../../assets/bannerImage/ellipsebig.png";
import ellipse from "../../../assets/bannerImage/ellipse.png";
import round from "../../../assets/bannerImage/round.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-8 bg-[#F8F1D3] py-8">
      <div>
        <div><img src={ellipsebig} alt="" /></div>
        <h6 className="text-base font-bold">Discover the beauty of the tropics</h6>
        <h2 className="text-4xl font-extrabold">Tropical </h2>
        <h2 className="text-4xl font-extrabold">Destinations</h2>
        <h3 className="text-4xl font-medium">For Student</h3>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer
        </p>
        <p className="text-sm"> rutrum nisi. A nec nisl vitae </p>
        <div className="mt-5">
          <Button>SignUp</Button>
        </div>
      </div>
      <div>
        <img src={ellipse} alt="" />
      </div>  
      <div>
        <div><img className="w-[350px]" src={men} alt="" /></div>
        <div className="float-right me-10"><img className="" src={round} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
