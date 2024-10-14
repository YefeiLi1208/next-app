import './index.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="/performance" className="router">performance</Link>
      <Link href="/reliablity" className="router">reliablity</Link>
      <Link href="/scale" className="router">scale</Link>
    </div>
  );
}
