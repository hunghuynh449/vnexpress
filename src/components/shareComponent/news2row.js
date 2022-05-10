const News2Row = ({ title, pic, description, bt }) => {
  if (pic) {
    return (
      <>
        <div className={bt ? "news border-top" : "news"}>
          <a href="/">
            <h3 className="title-news">{title}</h3>
          </a>
          <div className="content flex-box">
            <div className="thumb">
              <img src={pic} alt=""></img>
            </div>
            <div className="description">{description}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={bt ? "news border-top" : "news"}>
        <a href="/">
          <h3 className="title-news">{title}</h3>
        </a>
        <div className="content">
          <div className="description-full">{description}</div>
        </div>
      </div>
    );
  }
};

export default News2Row;
