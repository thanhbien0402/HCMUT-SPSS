import "./Home.css";
import { Button } from "../../Components";
const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Trang chủ</h1>
      </div>
      <div className="home-button">
        <Button
          name="Lịch sử in ấn"
          icon="./Images/image5.svg"
          address="/History"
        />
        <Button
          name="Cài đặt máy in"
          icon="./Images/image1.svg"
          address="/PrinterSetting"
        />
        <Button
          name="Cài đặt in ấn"
          icon="./Images/raphael_paper.svg"
          address="/PrintingSetting"
        />
      </div>
      <h1 className="home-logout">Đăng xuất</h1>
    </div>
  );
};

export default Home;
