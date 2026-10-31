import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read at build time (static export), inlined as a data URI for Satori.
const mark = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/logo-mark.png")).toString("base64")}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          background: "#04140e",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={416} height={96} alt="" />
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#eef4e8",
            letterSpacing: -2,
            display: "flex",
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size }
  );
}
