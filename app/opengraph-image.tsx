import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Privatni detektiv Marinković — detektivska agencija za bračne prevare i istrage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1826 0%, #12293d 60%, #0a1826 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.08)",
              color: "#d8b165",
              fontSize: 40,
              fontWeight: 700,
              borderRadius: 14,
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#d8b165",
            }}
          >
            Privatni detektiv
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            Detektivska agencija Marinković
          </div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.75)" }}>
            Bračne prevare · praćenje · poligraf · poslovne istrage
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 28, color: "#d8b165" }}>
          <span>{site.phoneIntl}</span>
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            Cela Srbija · 0–24h
          </span>
        </div>
      </div>
    ),
    size
  );
}
