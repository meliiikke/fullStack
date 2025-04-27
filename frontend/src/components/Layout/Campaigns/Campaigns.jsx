import CampaignItem from "./CampaignItem";
import "./Campaigns.css"

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="conteiner">
        <div className="campaigns-wrapper">
          <CampaignItem />
          <CampaignItem />
        </div>
        <div className="campaigns-wrapper">
        <CampaignItem />
        <CampaignItem />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
