import image1 from "../../../assets/testimonialImage/image1.png";
// import image2 from "../../../assets/testimonialImage/image2.png";
// import image3 from "../../../assets/testimonialImage/image3.png";

const Testimonial = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl text-center mt-20">Testimonials</h2>
      <div className="flex flex-col lg:flex-row justify-around items-center text-center">
      <div className="text-center">
          <div className="card w-40 bg-base-100 shadow-xl mx-auto mb-6 px-5 py-5">
            <figure className="mb-2">
              <img src={image1} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2>Corey Korsgaard</h2>
            
          </div>
          <p>It is a long <br className="block lg:hidden" /> established fact that a</p>
          <p>reader will be <br className="block lg:hidden" /> distracted by the</p>
          <p>readable content <br className="block lg:hidden" /> of a page when</p>
          <p>looking at <br className="block lg:hidden" /> its layout.</p>
        </div>
        <div className="text-center">
          <div className="card w-40 bg-base-100 shadow-xl mx-auto mb-6 px-5 py-5">
            <figure className="mb-2">
              <img src={image1} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2>Corey Korsgaard</h2>
            
          </div>
          <p>It is a long <br className="block lg:hidden" /> established fact that a</p>
          <p>reader will be <br className="block lg:hidden" /> distracted by the</p>
          <p>readable content <br className="block lg:hidden" /> of a page when</p>
          <p>looking at <br className="block lg:hidden" /> its layout.</p>
        </div>
        <div className="text-center">
          <div className="card w-40 bg-base-100 shadow-xl mx-auto mb-6 px-5 py-5">
            <figure className="mb-2">
              <img src={image1} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2>Corey Korsgaard</h2>
            
          </div>
          <p>It is a long <br className="block lg:hidden" /> established fact that a</p>
          <p>reader will be <br className="block lg:hidden" /> distracted by the</p>
          <p>readable content <br className="block lg:hidden" /> of a page when</p>
          <p>looking at <br className="block lg:hidden" /> its layout.</p>
        </div>


      </div>
    </div>
  );
};

export default Testimonial;
