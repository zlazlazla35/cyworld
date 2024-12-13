import Link from "next/link";
import { connectDB } from "../../utill/database";
import styles from "./page.module.css";
import MainLogin from "./component/MainLogin";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";


export default async function Home() {
  let db = (await connectDB).db('cyworld');
  let result = await db.collection('user').find().toArray();

  let session =  await getServerSession(authOptions);

  return (
    <div className="main">
      <MainLogin session={session}></MainLogin>
    </div>
  );
}
