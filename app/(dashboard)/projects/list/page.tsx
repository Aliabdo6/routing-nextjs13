import Link from "next/link";
import styles from "./projects.module.css";
export default function ProjectsList() {
  return (
    <main>
      <h1>Projects list </h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">
            jobit
          </Link>
        </li>
        <li>
          <Link href="/projects/figma">
            figma
          </Link>
        </li>
        <li>
          <Link href="/projects/account">
            account
          </Link>
        </li>
      </ul>
    </main>
  );
}
