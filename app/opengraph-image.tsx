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
          background: "#06060a",
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
        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            color: "#b8ff35",
            fontStyle: "italic",
            display: "flex",
          }}
        >
          Technology for Business Growth
        </div>
      </div>
    ),
    { ...size }
  );
}
