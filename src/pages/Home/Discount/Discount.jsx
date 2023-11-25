import ellipse1 from "../../../assets/discountImage/ellipse1.png";
import ellipse2 from "../../../assets/discountImage/ellipse2.png";
import mask from "../../../assets/discountImage/mask.png";
import Button from "../../../components/Button/Button";
const Discount = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around mt-10 px-2 lg:px-0 ms-10 lg:ms-0">
      <div className="flex-col items-center justify-items-center py-10">
        <img src={ellipse1} alt="" />
        <div className="flex">
          <div className="">
            <h5>Get 20% off for student</h5>
            <h3 className="text-xl lg:text-3xl font-medium lg:font-extrabold">Student discounts <br className="block lg:hidden" /> available.</h3>
            <h3 className="text-xl lg:text-3xl font-thin">Get ready for some <br className="block lg:hidden" /> fun in the sun!</h3>
          </div>
          <div>
            <img src={ellipse2} alt="" />
          </div>
        </div>
        <ul className="ms-7 mt-7 mb-10">
          <li className="list-disc">Lorem ipsum dolor sit amet</li>
          <li className="list-disc">Massa quis natoque sit quam</li>
          <li className="list-disc">Eros non pellentesque elit </li>
          <li className="list-disc">tortor id euismod habitant</li>
          <li className="list-disc">Sed suspendisse id in ultrices</li>
        </ul>
        <div>
          <Button>Explore More</Button>
        </div>
      </div>
      <div>
        <img className="w-[200px] h-[300px] lg:w-[457px] lg:h-[638px]" src={mask} alt="mask" />
      </div>
    </div>
  );
};

export default Discount;
