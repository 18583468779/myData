type Config = {
  data: string;
  type: string;
};

export class Check {
  data: string = "";
  type: string = "";
  error: string[] = [];
  constructor({ data, type }: Config) {
    this.data = data;
    this.type = type;
  }
  verification() {
    switch (this.type) {
      case "email":
        if (this.data === "") {
          this.error.push("邮箱不能为空");
          return false;
        }
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        const result = reg.test(this.data);
        if (!result) {
          this.error.push("邮箱格式错误");
        }
        return result;
      case "code":
        if (this.data === "") {
          this.error.push("验证码不能为空");
          return false;
        }
        if (this.data.length != 6) {
          this.error.push("验证码错误");
          return false;
        }
        return true;
      default:
        break;
    }
  }
}
