import Image from "next/image";
import Link from "next/link";
import style from "./styles.module.scss";

export default function Header() {
  return (
    <header className={style.containerHeader}>
      <Link href="/">
        <a title="Home">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={75}
            width={75}
            // layout="fill"
            objectFit="contain"
          />
        </a>
      </Link>

      <h1>Lucas Calixto</h1>
    </header>
  );
}
