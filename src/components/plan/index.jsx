import { plansData } from "../../data/plansData";
import "./index.css";
const Plan = () => {
  return (
    <div className="plan-wrap" id="plans">
      <div className="blur plan-blur-left"></div>
      <div className="blur plan-blur-right"></div>
      <div className="header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>
      <div className="card-wrap">
        {plansData.map((plan, index) => {
          return (
            <div key={index} className="card">
              {plan.icon}
              <div className="name">{plan.name}</div>
              <div className="price">${plan.price}</div>
              <ul>
                {plan.features.map((feature) => {
                  return <li>{feature}</li>;
                })}
              </ul>
              <div>See more benefits -&gt; </div>
              <button className="btn">JOIN NOW</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plan;
