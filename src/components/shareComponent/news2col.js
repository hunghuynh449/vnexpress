const News2Col = ({ title, pic, description, bl }) => {
  if (pic) {
    return (
      <>
        <div className={bl ? "news-col border-left" : "news-col"}>
          <div className="thumb">
            <img src={pic} alt=""></img>
          </div>
          <div className="description">
            <a href="/">
              <h3 className="title-news">{title}</h3>
            </a>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={bl ? "news-col border-left" : "news-col"}>
        <div className="description-full">
          <a href="/">
            <h3 className="title-news">{title}</h3>
          </a>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default News2Col;
