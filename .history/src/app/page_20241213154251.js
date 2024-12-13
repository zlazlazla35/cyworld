import { connectDB } from "../../utill/database";
import styles from "./page.module.css";
import Head from 'next/head';


export default async function Home() {
  let db = (await connectDB).db('cyworld');
  let result = await db.collection('user').find().toArray();
  console.log(result)
  return (
    <div>
    </div>
  );
}
