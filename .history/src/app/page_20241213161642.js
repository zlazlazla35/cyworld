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
            <ul>
              <li>2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
