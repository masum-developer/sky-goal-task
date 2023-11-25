import avatar1 from "../../../assets/adventureImage/avatar1.png";
import avatar2 from "../../../assets/adventureImage/avatar2.png";
import avatar3 from "../../../assets/adventureImage/avatar3.png";
import circlebig from "../../../assets/adventureImage/circlebig.png";
import ellipse from "../../../assets/adventureImage/ellipse.png";
import Button from "../../../components/Button/Button";
const Adventure = () => {
  return (
    
      <div className="flex flex-col md:flex-row justify-around items-center py-2 lg:py-20">
        <div className="space-y-1 lg:space-y-5 mt-5 lg:mt-72">
          <div className="card h-96 lg:h-32 px-4 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <figure className="mx-auto">
              <img className="mt-0 w-32 h-32 lg:w-20 lg:h-20 lg:mt-5" src={avatar1} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="lg:card-title text-2xl text-center lg:text-left">Jenny Wilson</h2>
              <p className="text-center lg:text-left">Lorem ipsum dolor sit amet,</p>
              <p className="text-center lg:text-left">consectetur adipiscing...</p>
            </div>
          </div>
          <div className="card h-96 lg:h-32 px-4 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <figure className="mx-auto">
              <img className="mt-0 w-32 h-32 lg:w-20 lg:h-20 lg:mt-5" src={avatar2} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="lg:card-title text-2xl text-center lg:text-left">Jenny Wilson</h2>
              <p className="text-center lg:text-left">Lorem ipsum dolor sit amet,</p>
              <p className="text-center lg:text-left">consectetur adipiscing...</p>
            </div>
          </div>
          <div className="card h-96 lg:h-32 px-4 card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
            <figure className="mx-auto">
              <img className="mt-0 w-32 h-32 lg:w-20 lg:h-20 lg:mt-5" src={avatar3} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="lg:card-title text-2xl text-center lg:text-left">Jenny Wilson</h2>
              <p className="text-center lg:text-left">Lorem ipsum dolor sit amet,</p>
              <p className="text-center lg:text-left">consectetur adipiscing...</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center md:justify-end">
            <img className="w-24 h-24  lg:w-48 lg:h-48" src={circlebig} alt="circlebig" />
          </div>
          <div>
            <img  src={ellipse} alt="ellipse" />
          </div>
          <div className="ms-20">
            <div>
              <h3 className="text-4xl font-bold">Tropical Adventure</h3>
              <h5 className="text-3xl font-medium">for Students.</h5>
              <h6 className="mt-2 text-xl">Student Tropical Vacation: Relax and Recharge</h6>
              <ul className="ml-7 mt-5">
                <li className="list-disc">Lorem ipsum dolor sit amet</li>
                <li className="list-disc">Massa quis natoque sit quam</li>
                <li className="list-disc">Eros non pellentesque elit </li>
                <li className="list-disc">tortor id euismod habitant</li>
                <li className="list-disc">Sed suspendisse id in ultrices</li>
              </ul>
              <div className="mt-10 py-5">
                <Button>Explore More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Adventure;
