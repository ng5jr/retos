import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>RETOS</h1>

      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          justifyContent: "center",
          width: "50%",
          marginTop: "50px",
        }}
      >
        <li>
          <Link href={"/pokemon"}>
            <Image
              src={"/Pokeball.webp"}
              width={200}
              height={200}
              alt="pokeball"
              className="pokeball"
            />
            <h2
              style={{ width: "100%", textAlign: "center", marginTop: "10px" }}
            >
              Pokemon
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
