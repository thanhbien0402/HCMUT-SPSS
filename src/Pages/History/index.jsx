import "./History.css";
import { Button, ReturnButton } from "../../Components";
const History = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Lịch sử in</h1>
        <ReturnButton />
      </div>
      <div className="home-button">
        <Button
          name="Báo cáo in ấn"
          icon="./Images/image7.svg"
          address="/PrintReport"
        />
        <Button
          name="Lịch sử máy in"
          icon="./Images/image3.svg"
          address="/PrinterLog"
        />
        <Button
          name="Lịch sử của SV"
          icon="./Images/image 8.svg"
          address="/StudentLog"
        />
      </div>
    </div>
  );
};

export default History;
