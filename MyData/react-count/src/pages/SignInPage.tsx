import * as React from "react";
import { TopNav } from "../components/ItemPage/TopNav";
import { TopBg } from "../components/TopBg";
import p1 from "../assets/images/logo.svg";
export const SignInPage: React.FC = () => {
  return (
    <div>
      <TopBg>
        <TopNav name="back" title="登录" />
      </TopBg>
      <main pl-10px pr-10px>
        <div text-center mt-30px>
          <img src={p1} alt="logo" />
          <h1 text-30px text="#009866" mt-10px>
            小谢记账
          </h1>
        </div>

        <form>
          <div flex flex-col>
            <label text-16px>邮箱地址</label>
            <input
              type="text"
              w="100%"
              border-2
              b-color="#009853"
              b-solid
              rounded="8px"
              h-40px
              mt-5px
              pl-10px
              pr-10px
              text-12px
              placeholder="请输入邮箱地址~~"
            />
          </div>
          <div mt-20px>
            <div>
              <label text-16px>验证码</label>
              <div flex justify-between items-center>
                <input
                  type="text"
                  w="50%"
                  border-2
                  b-color="#009853"
                  b-solid
                  rounded="8px"
                  h-40px
                  mt-5px
                  pl-10px
                  pr-10px
                  text-12px
                  placeholder="请输入验证码~~"
                />
                <button type="button" w="120px" h-40px text-base>
                  发送
                </button>
              </div>
            </div>
          </div>
          <div mt-130px text-center>
            <button w="100%">登录</button>
          </div>
        </form>
      </main>
    </div>
  );
};
