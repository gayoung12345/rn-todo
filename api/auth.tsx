const user_email = "my@email.com";
const user_password = "1234";

const signIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === user_email && password === user_password) {
        resolve(email);
      } else {
        reject("이메일은 또는 비밀번호가 올바르지 않습니다.");
      }
    }, 3000);
  });
};

export default signIn;
