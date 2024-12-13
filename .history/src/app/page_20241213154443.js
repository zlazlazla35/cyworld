import { connectDB } from "../../utill/database";
import styles from "./page.module.css";


export default async function Home() {
  let db = (await connectDB).db('cyworld');
  let result = await db.collection('user').find().toArray();
  
  return (
    <div>
    </div>
  );
}
