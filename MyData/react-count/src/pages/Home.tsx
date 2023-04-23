// import axios from "axios";
// import * as React from "react";
// import useSWR from "swr";
// import pig from "../assets/images/pig.svg";
// import { useNavigate } from "react-router-dom";
// import { usePopup } from "../hooks/usePopup";
// import { useTitle } from "../hooks/useTitle";
// import { AddItemPage } from "../components/AddItemPage";
// export const Home: React.FC = () => {
//   useTitle({ message: "主页" });
//   const nav = useNavigate();
//   const { data, error, isLoading } = useSWR("/api/v1/me", async (path) => {
//     return axios.get<Resource<User>>(path);
//   });
//   // const { popup } = usePopup({});
//   // console.log(popup);
//   if (isLoading) return <div>"Loading..."</div>;
//   // if (error) return popup;
//   const onAction = () => {
//     if (error) {
//       console.log(123);
//     }
//     if (data?.status === 200) {
//       nav("/item");
//     }
//   };

//   return (
//     <div text-center h-screen flex flex-col items-center justify-center>
//       <div>
//         <img src={pig} alt="picture" />
//         <h1 mt-16px>欢迎来到小谢记账，目前没有数据</h1>
//       </div>
//       <button type="button" mt-106px onClick={onAction}>
//         开始记账
//       </button>
//       <AddItemPage />
//     </div>
//   );
// };
import * as React from "react";
export const Home: React.FC = () => {
  return <div>Home </div>;
};
