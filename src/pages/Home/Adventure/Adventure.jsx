import avatar1 from "../../../assets/adventureImage/avatar1.png";
import circlebig from "../../../assets/adventureImage/circlebig.png";
import ellipse from "../../../assets/adventureImage/ellipse.png";
import Button from "../../../components/Button/Button";
const Adventure = () => {
  return (
    <div>
      <div className="flex">
        <img className="w-20 h-20" src={circlebig} alt="circlebig" />
      </div>

      <div className="flex justify-around items-center">
        <div className="pt-10">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={avatar1} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing...</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={avatar1} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing...</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={avatar1} alt="avatar1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jenny Wilson</h2>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing...</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={ellipse} alt="ellipse" />
          </div>
          <div className="ml-3">
            <div>
              <h3>Tropical Adventure</h3>
              <h5>for Students.</h5>
              <h6>Student Tropical Vacation: Relax and Recharge</h6>
              <ul className="ml-7">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;