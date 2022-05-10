import { RiseOutlined } from "@ant-design/icons";

const Topic = () => {
  return (
    <>
      <section className="section section_topic mt20">
        <div className="container">
          <div className="box-slide-topic flex-box">
            <span className="txt-topic">
              <RiseOutlined />
              Chủ đề
            </span>
            <span className="title-news">
              <a href="/">Lương tối thiểu</a>
            </span>
            <span className="title-news">
              <a href="/">Mở cửa du lịch</a>
            </span>
            <span className="title-news">
              <a href="/">Nga mở chiến dịch quân sự ở Ukraine</a>
            </span>
          </div>
        </div>
      </section>
      <div className="mt20"></div>
    </>
  );
};

export default Topic;
