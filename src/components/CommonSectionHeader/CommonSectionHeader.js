import "./CommonSectionHeader.css";

const CommonSectionHeader = ({ style, data }) => {
  return (
    <div id="service_header_container">
      <div className="service_header">
        <h5>{data.headline}</h5>
        <h1 style={style}>{data.header}</h1>
        <p style={style}>{data.desc}</p>
      </div>
    </div>
  );
};

export default CommonSectionHeader;
