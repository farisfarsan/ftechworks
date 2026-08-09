import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#050505",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#f0f0ee",
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
