import { useNavigate } from "react-router-dom";
import p from "../../assets/images/welcome4.svg";

export const Welcome4: React.FC = () => {
  const nav = useNavigate();

  return (
    <div text-center>
      <img src={p} w-129px h-83px />
      <h2 text-32px mt-48px>
        云备份 <br />
        再也不怕数据丢失
      </h2>
      <div mt-64px>
        <span text-32px color="#009866" font-bold>
          开启应用
        </span>
      </div>
    </div>
  );
};
