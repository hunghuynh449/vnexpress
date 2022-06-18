import React from "react";
import { Col, Row } from "antd";
import Slider from "react-slick";
import News2Col from "./shareComponent/news2col";

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="width_common ctn-box-rv">
      <div className="item-news">
        <div className="thumb-art">
          <picture>
            <img
              loading="lazy"
              alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X"
              className="lazy lazied"
              src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-ll-status="loaded"
            />
          </picture>
        </div>
        <h4 className="title-news">
          Khách sạn căn hộ sang trọng VNAHOMES Aparthotel Hotline 19009202
        </h4>
        <div className="meta-rv flexbox">
          <p className="meta-local">
            <span className="price-local">Thỏa thuận</span>Đà Nẵng
          </p>
          <button className="contact-btn">Liên hệ</button>
        </div>
      </div>
      <div className="item-news">
        <div className="thumb-art">
          <picture>
            <img
              loading="lazy"
              alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X"
              className="lazy lazied"
              src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-ll-status="loaded"
            />
          </picture>
        </div>
        <h4 className="title-news">
          Khách sạn căn hộ sang trọng VNAHOMES Aparthotel Hotline 19009202
        </h4>
        <div className="meta-rv flexbox">
          <p className="meta-local">
            <span className="price-local">Thỏa thuận</span>Đà Nẵng
          </p>
          <button className="contact-btn">Liên hệ</button>
        </div>
      </div>
      <div className="item-news">
        <div className="thumb-art">
          <picture>
            <img
              loading="lazy"
              alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X"
              className="lazy lazied"
              src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-ll-status="loaded"
            />
          </picture>
        </div>
        <h4 className="title-news">
          Khách sạn căn hộ sang trọng VNAHOMES Aparthotel Hotline 19009202
        </h4>
        <div className="meta-rv flexbox">
          <p className="meta-local">
            <span className="price-local">Thỏa thuận</span>Đà Nẵng
          </p>
          <button className="contact-btn">Liên hệ</button>
        </div>
      </div>
      <div className="item-news">
        <div className="thumb-art">
          <picture>
            <img
              loading="lazy"
              alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X"
              className="lazy lazied"
              src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
              data-ll-status="loaded"
            />
          </picture>
        </div>
        <h4 className="title-news">
          Khách sạn căn hộ sang trọng VNAHOMES Aparthotel Hotline 19009202
        </h4>
        <div className="meta-rv flexbox">
          <p className="meta-local">
            <span className="price-local">Thỏa thuận</span>Đà Nẵng
          </p>
          <button className="contact-btn">Liên hệ</button>
        </div>
      </div>
    </Slider>
  );
}
const dataBusiness = [
  {
    url: "https://i1-kinhdoanh.vnecdn.net/2022/05/10/image009-1652091680-4433-1652177765.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=_x0_wCbzKVRnh1QJLAwWcg",
    content: "Vedan Việt Nam tổ chức khám bệnh cho 200 người dân Đồng Nai",
  },
  {
    url: "https://i1-kinhdoanh.vnecdn.net/2022/05/10/1a-1652175918-6190-1652176282.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=YZp66Cix2glHR2S696RiUQ",
    content: "Trà thảo mộc TVT - làn gió mới trên thị trường đồ uống",
  },
  {
    url: "https://i1-giaitri.vnecdn.net/2018/08/16/15-8-201852-816822178-w500-9821-1534392016.jpeg?w=300&h=180&q=100&dpr=1&fit=crop&s=H7eBuIYZljMlLLEKrZj3pQ",
    content: "Đẩy lùi nỗi lo rạn da sau sinh với Trilastin",
  },
  {
    url: "https://i1-kinhdoanh.vnecdn.net/2022/05/09/Image-584839629-ExtractWord-0-1880-7345-1652097021.png?w=300&h=180&q=100&dpr=1&fit=crop&s=-465Obrt3TBdRSzFG0W7XA",
    content: "Lợi thế vị trí trung tâm TP HCM của The Grand Manhattan",
  },
  {
    url: "https://i1-kinhdoanh.vnecdn.net/2022/05/10/anh-1-chuan-anh-thumb-16521814-9847-8764-1652181415.png?w=300&h=180&q=100&dpr=1&fit=crop&s=W2xOuZUDNYrOfeMbtAZHdw",
    content: "Yếu tố gia tăng giá trị đầu tư tại An Residence",
  },
];
function BusinessSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="width_common ctn-box-rv">
      {dataBusiness.map((e, i) => {
        return (
          <div className="item-news" key={{ i }}>
            <div className="thumb-art">
              <picture>
                <img
                  loading="lazy"
                  alt="Thưởng 1 tỷ đồng nếu tìm thấy ghế massage cao cấp hơn 919X"
                  className="lazy lazied"
                  src={e.url}
                  data-src="https://i-raovat.vnecdn.net/2020/10/14/group-3-4-1602643254.png?w=268&amp;h=268&amp;q=100&amp;dpr=1&amp;rt=fill&amp;g=ce&amp;s=7uA40NIMd-tCINIrqb6hwQ"
                  data-ll-status="loaded"
                />
              </picture>
            </div>
            <h4 className="title-news">{e.content}</h4>
          </div>
        );
      })}
    </Slider>
  );
}
const InfoGraphics = () => {
  return (
    <section className="section">
      <Row className="container has_border info_graphics">
        <Col span={17} className="col-left">
          <div className="box-category has-border box-info animated animatedFadeInUp fadeInUp">
            <div className="width_common title-box-category infographics">
              <h2 className="parent-cate inner-title">Infographics</h2>
            </div>
          </div>

          <div className="width_common content-box-category flexbox">
            <div className="item-news full-thumb">
              <div className="thumb-art">
                <div>
                  <img
                    loading="lazy"
                    intrinsicsize="380x228"
                    alt="Điều chỉnh giao thông phục vụ SEA Games 31"
                    className="lazy lazied"
                    src="https://i1-vnexpress.vnecdn.net/2022/05/09/phan-luong-giao-thong-01-1652065702.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=5cjWIUdhp6HFUQz-g9oWHw"
                    data-src="https://i1-vnexpress.vnecdn.net/2022/05/09/phan-luong-giao-thong-01-1652065702.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=5cjWIUdhp6HFUQz-g9oWHw"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
              <h3 className="title-news">
                Điều chỉnh giao thông phục vụ SEA Games 31
                <span className="meta-news">
                  <span className="font_icon widget-comment-4461053-4"></span>
                </span>
              </h3>
            </div>

            <div className="item-news full-thumb">
              <div className="thumb-art">
                <div>
                  <img
                    loading="lazy"
                    intrinsicsize="380x228"
                    alt="Vì sao máy bay chở khách bay chậm hơn trước\?"
                    className="lazy lazied"
                    src="https://i1-vnexpress.vnecdn.net/2022/05/07/vi-sao-may-bay-cho-khach-bay-cham-hon-truoc.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=gB4wdIl5ScBzhXAUx7rYAA"
                    data-src="https://i1-vnexpress.vnecdn.net/2022/05/07/vi-sao-may-bay-cho-khach-bay-cham-hon-truoc.jpg?w=380&amp;h=228&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=gB4wdIl5ScBzhXAUx7rYAA"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
              <h3 className="title-news">
                Vì sao máy bay chở khách bay chậm hơn trước?
                <span className="meta-news">
                  <span className="font_icon widget-comment-4460591-4">17</span>
                </span>
              </h3>
            </div>
          </div>

          <div className="box-category box-ebank-qt">
            <hgroup className="width_common title-box-category title-box-small">
              <h4 className="parent-cate">
                <span className="inner-title">Sự kiện</span>
              </h4>
            </hgroup>
            <div className="width_common wrap-slide-bank-qt">
              <div className="swiper-wrapper">
                <article
                  className="swiper-slide item-news swiper-slide-active"
                  data-swiper-column="0"
                  data-swiper-row="0"
                >
                  <div className="thumb-art">
                    <picture>
                      <img
                        loading="lazy"
                        alt="VnExpress Marathon Quy Nhơn 2022"
                        className="lazy lazied"
                        src="https://i1-vnexpress.vnecdn.net/2020/11/10/278481604915294jpg-1605004576.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YmhQypNXqmsyfy5pzIIMwA"
                        data-src="https://i1-vnexpress.vnecdn.net/2020/11/10/278481604915294jpg-1605004576.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=YmhQypNXqmsyfy5pzIIMwA"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </div>
                  <h4 className="title-news">
                    VnExpress Marathon Quy Nhơn 2022
                  </h4>
                </article>

                <article
                  className="swiper-slide item-news swiper-slide-next"
                  data-swiper-column="0"
                  data-swiper-row="1"
                >
                  <div className="thumb-art">
                    <picture>
                      <img
                        loading="lazy"
                        alt="VnExpress Marathon Amazing Halong 2022"
                        className="lazy lazied"
                        src="https://i1-vnexpress.vnecdn.net/2021/01/25/516105334491200x0jpg-1611537179.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bjqw2eGZQFrfnQw0KK588Q"
                        data-src="https://i1-vnexpress.vnecdn.net/2021/01/25/516105334491200x0jpg-1611537179.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=bjqw2eGZQFrfnQw0KK588Q"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </div>
                  <h4 className="title-news">
                    VnExpress Marathon Amazing Halong 2022
                  </h4>
                </article>

                <article
                  className="swiper-slide item-news"
                  data-swiper-column="1"
                  data-swiper-row="0"
                >
                  <div className="thumb-art">
                    <picture>
                      <img
                        loading="lazy"
                        alt="VnExpress Marathon Marvelous Nha Trang 2022"
                        className="lazy lazied"
                        src="https://i1-vnexpress.vnecdn.net/2021/03/30/NhaTrang1jpg-1617103932.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=72J4mTmPm4XXfjOWvi1hcA"
                        data-src="https://i1-vnexpress.vnecdn.net/2021/03/30/NhaTrang1jpg-1617103932.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=72J4mTmPm4XXfjOWvi1hcA"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </div>
                  <h4 className="title-news">
                    VnExpress Marathon Marvelous Nha Trang 2022
                  </h4>
                </article>

                <article
                  className="swiper-slide item-news"
                  data-swiper-column="1"
                  data-swiper-row="1"
                >
                  <div className="thumb-art">
                    <picture>
                      <img
                        loading="lazy"
                        alt="VnExpress Marathon Hanoi Midnight 2022"
                        className="lazy lazied"
                        src="https://i1-vnexpress.vnecdn.net/2021/02/21/DONG2590jpg-1613878655.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=JCypuHDllRWDmKaRrzTdhA"
                        data-src="https://i1-vnexpress.vnecdn.net/2021/02/21/DONG2590jpg-1613878655.jpg?w=120&amp;h=72&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=JCypuHDllRWDmKaRrzTdhA"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </div>
                  <h4 className="title-news">
                    VnExpress Marathon Hanoi Midnight 2022
                  </h4>
                </article>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>

          <div className="box-category box-xemnhieu">
            <hgroup className="width_common title-box-category">
              <h2 className="parent-cate active">
                <div className="inner-title">Xem nhiều</div>
              </h2>
            </hgroup>
            <div className="width_common list-top-view">
              <article className="item-news">
                <span className="number-top-view">1</span>
                <h3 className="title-news">
                  Ukraine bác bỏ phát biểu Ngày Chiến thắng của ông Putin
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4461358-1"></span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">2</span>
                <h3 className="title-news">
                  Hồ sơ mua bán nhà đất bị trả vì 'khai giá quá thấp'
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4459512-1">
                      155
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">3</span>
                <h3 className="title-news">
                  Những lần gây cười ở phiên tòa Johnny Depp - Amber Heard
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4460573-1">
                      80
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">4</span>
                <h3 className="title-news">
                  'Lật tung' núi rừng tìm sao la
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4461353-1">
                      33
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">5</span>
                <h3 className="title-news">
                  Bi kịch của người phụ nữ bị cướp kéo ngã
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4461091-1">
                      153
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">6</span>
                <h3 className="title-news">
                  Công ty SME tạo 'khách hàng giả' trong giao dịch 7,4 triệu cổ
                  phiếu ảo
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4461343-1">
                      5
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">7</span>
                <h3 className="title-news">
                  Chàng trai Việt vượt ải làm rể Thái Lan
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4460647-1">
                      68
                    </span>
                  </span>
                </h3>
              </article>

              <article className="item-news">
                <span className="number-top-view">8</span>
                <h3 className="title-news">
                  Người đầu tiên ở Hà Nội nuôi cua biển trong nhà
                  <span className="meta-news">
                    <span className="font_icon widget-comment-4461071-3">
                      45
                    </span>
                  </span>
                </h3>
              </article>
            </div>
          </div>
        </Col>
        <Col className="col-right" span={7}>
          <div className="box-category box-raovat-v2">
            <div className="width_common title-box-rv flexbox">
              <img
                src="https://s1.vnecdn.net/vnexpress/restruct/i/v592/v2_2019/pc/graphics/logo-raovat.svg"
                alt="Raovat"
              />
              <div className="link-dt">
                Đăng tin ngay <span className="arrow">{">"}</span>
              </div>
            </div>

            <SimpleSlider />
          </div>
        </Col>
      </Row>
      <Row className="container box-news-other-site">
        <Col span={12}>
          <News2Col
            title={"Đám cưới Hà Đức Chinh trang trí 800.000 viên pha lê"}
            pic={
              "https://i1-ngoisao.vnecdn.net/2022/05/10/milo9919-jpeg-1652185650.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=wA8dRopWBnqxFvhqSt4yIA"
            }
            description={
              "Đám cưới của Đức Chinh mang tên 'Crystal Forest', trang trí 800.000 viên pha lê, được hoàn thiện trong vòng 18 tiếng. "
            }
          />
        </Col>

        <Col span={12}>
          <News2Col
            title={"Đám cưới Hà Đức Chinh trang trí 800.000 viên pha lê"}
            pic={
              "https://i1-ngoisao.vnecdn.net/2022/05/10/milo9919-jpeg-1652185650.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=wA8dRopWBnqxFvhqSt4yIA"
            }
            description={
              "Đám cưới của Đức Chinh mang tên 'Crystal Forest', trang trí 800.000 viên pha lê, được hoàn thiện trong vòng 18 tiếng. "
            }
          />
        </Col>
      </Row>

      <div className="container inner-box-business">
        <h2 className="parent-cate title-box-category">
          <div className="inner-title">Thông tin doanh nghiệp</div>
        </h2>

        <div className="slider-box-business">
          <BusinessSlider />
        </div>
      </div>
    </section>
  );
};

export default InfoGraphics;
