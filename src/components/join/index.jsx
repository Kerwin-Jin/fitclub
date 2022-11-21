import "./index.css";
const Join = () => {
  return (
    <div className="join-wrap">
      <div className="left-j">
        <div>
          <span></span>
          <div>
            <span className="stroke-text">ready</span>
            <span className="stroke-text">to</span>
            <span>level up</span>
          </div>
        </div>
        <div>
          <span>your</span>
          <span>body</span>
          <span className="stroke-text">with</span>
          <span className="stroke-text">us?</span>
        </div>
      </div>
      <div className="right-j">
        <div>
          <input type="email" placeholder="Enter your Email address" />
          <button className="btn">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
