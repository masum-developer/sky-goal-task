import ellipse1 from "../../../assets/discountImage/ellipse1.png";
import ellipse2 from "../../../assets/discountImage/ellipse2.png";
import mask from "../../../assets/discountImage/mask.png";
import Button from "../../../components/Button/Button";
const Discount = () => {
  return (
    <div className="flex justify-around mt-10">
      <div className="flex-col items-center justify-items-center py-10">
        <img src={ellipse1} alt="" />
        <div className="flex">
          <div>
            <h5>Get 20% off for student</h5>
            <h3 className="text-3xl font-extrabold">Student discounts available.</h3>
            <h3 className="text-3xl font-thin">Get ready for some fun in the sun!</h3>
          </div>
          <div>
            <img src={ellipse2} alt="" />
          </div>
        </div>
        <ul className="ml-7 mt-7 mb-10">
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
        <img className="w-[457px] h-[638px]" src={mask} alt="mask" />
      </div>
    </div>
  );
};

export default Discount;
