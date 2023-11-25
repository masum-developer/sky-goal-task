import girl from "../../../assets/bookNow/girl.png";
const BookNow = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-normal lg:justify-around px-2 lg:px-0 ms-10 lg:ms-0">
      <img className=" w-[200px] h-[300px] lg:w-[500px] lg:h-[680px]" src={girl} alt="" />

      <div className="card w-[300px] lg:w-[400px] lg:h-[550px] bg-base-100 shadow-xl py-10 mt-32">
        <div className="card-body">
          <h2 className="card-title ms-0 lg:ms-10">Book now</h2>
          <p className="ms-0 lg:ms-10">Lorem ipsum dolor sit amet, <br className="block lg:hidden" /> consectetur adipiscing elit</p>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="email"
                placeholder="city"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full first-letter:">
              <div className="form-control w-[96%] lg:w-[48%] mr-2">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-[96%] lg:w-[48%]">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="flex w-full first-letter:">
              <div className="form-control w-[75%] lg:w-[48%] mr-2">
                <label className="label">
                  <span className="label-text">Star</span>
                </label>
                <span className="flex flex-col lg:flex-row">
                <button className=" w-[12%] lg:w-[10%] btn bg-[#EBEBEB]">-</button>
                <input
                  type="password"
                  placeholder="5"
                  className="input input-bordered  w-[48%]"
                  required
                />
                <button className="w-[12%] lg:w-[10%] btn bg-[#EBEBEB]">+</button>
                </span>
              </div>
              <div className="form-control w-[75%] lg:w-[48%]">
                <label className="label">
                  <span className="label-text">Room</span>
                </label>
                <span className="flex flex-col lg:flex-row">
                <button className="w-[12%] lg:w-[10%] btn bg-[#EBEBEB]">-</button>
                <input
                  type="text"
                  placeholder="5"
                  className="input input-bordered w-[48%]"
                  required
                />
                <button className="w-[12%] lg:w-[10%] btn bg-[#EBEBEB]">+</button>
                </span>
              </div>
            </div>
            <div className="mt-6">
              
              <input className="btn bg-black text-white" type="submit" value="Book Now" />
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default BookNow;
