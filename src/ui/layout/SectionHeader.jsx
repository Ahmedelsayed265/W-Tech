import { Link } from "react-router-dom";

const SectionHeader = ({ title }) => {
  return (
    <section className="section-header">
      <h1>{title}</h1>
      <h6>
        <Link to="/">الرئيسية</Link> / {title}
      </h6>
    </section>
  );
};

export default SectionHeader;
