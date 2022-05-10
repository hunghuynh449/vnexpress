import { HomeOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <section className="section wrap-main-nav">
      <nav className="main-nav">
        <ul className="parent">
          <li className="home">
            <a href="/" className="flex-box">
              <HomeOutlined />
            </a>
          </li>
          <li className="thoisu">
            <a href="/thoi-su">Thời sự</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Góc nhìn</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Thế giới</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Video</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Podcasts</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Kinh doanh</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Khoa học</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Giải trí</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Thể thao</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Pháp luật</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Giáo dục</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Sức khỏe</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Đời sống</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Du lịch</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Số hóa</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Xe</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Ý kiến</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Tâm sự</a>
          </li>
          <li className="gocnhin">
            <a href="/goc-nhin">Hài</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
