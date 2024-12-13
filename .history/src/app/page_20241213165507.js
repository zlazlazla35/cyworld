import Link from "next/link";
import { connectDB } from "../../utill/database";
import styles from "./page.module.css";
import Login from "./component/MainLogin";


export default async function Home() {
  let db = (await connectDB).db('cyworld');
  let result = await db.collection('user').find().toArray();

  return (
    <div className="main">
      <MainLogin></MainLogin>
    </div>
  );
}
