import * as React from "react";
import { TopNav } from "../components/ItemPage/TopNav";
import { TopBg } from "../components/TopBg";
import p1 from "../assets/images/logo.svg";

import { useEffect, useRef, useState } from "react";
import { Input } from "../components/Input";
import { Check } from "../lib/check";

export const SignInPage: React.FC = () => {
  let [countDown, setCountDown] = useState<number>(60);
  const timer = useRef<NodeJS.Timer>();

  const onSendCode = () => {
    timer.current = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown);
      }
      countDown -= 1;
      if (countDown <= 0) {
        timer.current = undefined;
      }
    }, 1000);
    //发送验证码请求
  };

  useEffect(() => {
    return () => {
      timer.current = undefined;
    };
  }, []);

  //获取表单信息
  const [formData, setFormData] = useState<{ email: string; code: string }>({
    email: "",
    code: "",
  });
  const [formError, setFormError] = useState<{
    email: string[];
    code: string[];
  }>({ email: [], code: [] });
  //清空表单信息
  const clearForm = () => {
    setFormData({
      email: "",
      code: "",
    });
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //邮箱验证
    const checkEmail = new Check({ data: formData.email, type: "email" });
    console.log(checkEmail.verification(), checkEmail.error);
    //验证码验证(前端)
    const checkCode = new Check({ data: formData.code, type: "code" });
    setFormError({ email: checkEmail.error, code: checkCode.error }); //set error
    if (checkCode.verification() && checkEmail.verification()) {
      //验证成功（前端），发送请求
      clearForm();
    }
  };

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

        <form onSubmit={(e) => onSubmit(e)}>
          <div flex flex-col>
            <label text-16px>邮箱地址</label>
            <Input
              type="text"
              name="email"
              className="w='100%' border-2 b-color-#009853 b-solid rounded-8px h-40px mt-5px pl-10px pr-10px text-12px"
              placeholder="请输入邮箱地址~~"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <div h-18px>
              {formError.email ? (
                <p text-red mt-5px p-l-5px>
                  {formError.email}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div mt-20px>
            <div>
              <label text-16px>验证码</label>
              <div flex justify-between items-center>
                <Input
                  type="text"
                  name="code"
                  placeholder="请输入验证码~~"
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({ ...formData, code: e.target.value })
                  }
                  className="
                  w='50%'
                  border-2
                  b-color-#009853
                  b-solid
                  rounded-8px
                  h-40px
                  mt-5px
                  pl-10px
                  pr-10px
                  text-12px"
                />

                {timer.current ? (
                  <button type="button" w="120px" h-40px text-base disabled>
                    发送开始
                    {timer.current ? <span>({countDown})</span> : <span></span>}
                  </button>
                ) : (
                  <button
                    type="button"
                    w="120px"
                    h-40px
                    text-base
                    onClick={onSendCode}
                  >
                    发送
                  </button>
                )}
              </div>
              <div h-18px>
                {formError.code ? (
                  <p text-red mt-5px p-l-5px>
                    {formError.code}
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div mt-130px text-center>
            <button w="100%" type="submit">
              登录
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
