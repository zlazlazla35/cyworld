import { connectDB } from "../../utill/database";
import styles from "./page.module.css";


export default async function Home() {
  let db = (await connectDB).db('cyworld');
  let result = await db.collection('user').find().toArray();
  
  return (
    <div className="main">
      <div className="login_wrap">
        <div className="login_inner">
          <div className="loginContent">
            <img src="/image/logo.svg"/>
            <div className="inputBox">
              <input name="user_id" type="text"/>
              <input name="user_pw" type="password"/>
            </div>
            <button type="submit">로그인</button>
            {/* <ul>
              <li>아이디/비밀번호 찾기</li>
              <li>회원가입</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
