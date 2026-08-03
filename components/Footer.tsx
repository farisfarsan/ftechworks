import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <Image src="/logo-crop.png" alt="Ftechworks" width={90} height={20} className="logo-img" />
      </div>
      <p>© 2025 Ftechworks · Technology for Business Growth</p>
      <p>Available Worldwide</p>
    </footer>
  );
}
