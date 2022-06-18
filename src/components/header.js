import { Input } from "antd";
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../public/logo_PolyFood_500x500.png";
const { Search } = Input;

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <span className="time-now">Thứ hai, 09/05/2022</span>
        </div>
        <div className="right">
          <div className="new">
            <span>
              <ClockCircleOutlined />
            </span>
            <span>Mới nhất</span>
          </div>
          <div className="international">International</div>
          <div className="search">
            <Search placeholder="Tìm kiếm" style={{ width: 150 }} />
          </div>
          <div className="auth">
            <span>
              <UserOutlined />
            </span>
            <span>Đăng nhập</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
