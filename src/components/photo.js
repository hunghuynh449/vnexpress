const Photo = () => {
  return (
    <>
      <section className="section section_photo mt20">
        <div className="container has-border">
          <div className="group-cate">
            <h2 className="parent-cate">
              <a className="inner-title" href="/">
                Ảnh
              </a>
            </h2>
          </div>
          <div className="wrap-slide-photo flex-box">
            <div className="thumb">
              <img
                src="https://i1-thethao.vnecdn.net/2022/05/10/z3403197794797-e2489a37aa4236c63901fa5428c9ace8.jpg?w=900&h=540&q=100&dpr=2&fit=crop&s=kJvKhoaahS-Vcg_E_Y5QbQ"
                alt=""
              ></img>
            </div>
            <div className="title-photo flex-box">
              <div className="item-news">
                <h1 className="title">Hoàng Đức phải tập riêng</h1>
                <p className="description">
                  Tiền vệ Nguyễn Hoàng Đức được bác sỹ Choi chăm sóc khi Việt
                  Nam trở lại tập luyện trưa 10/5.
                </p>
              </div>
              <div className="item-news next">
                <h1 className="title">
                  Người đầu tiên ở Hà Nội nuôi cua biển trong nhà
                </h1>
                <p className="description">
                  Thông qua hệ thống lọc tuần hoàn, anh Lê Đức Cảnh, ở huyện
                  Thanh Trì, Hà Nội, nuôi cua biển trong nhà với quy mô lớn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
