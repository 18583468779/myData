import { Link } from "react-router-dom";

interface Props {
  className?: string;
}
export const CurrentUser: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={className}
      bg="#009866"
      text-white
      w="100%"
      pt-32px
      pb-44px
      px-16px
    >
      <h2 text-24px>未登录用户</h2>
      <Link to={"/sign_in"} text="#CEA1FF">
        点击这里登录
      </Link>
    </div>
  );
};
