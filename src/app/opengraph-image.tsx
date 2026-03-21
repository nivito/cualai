import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "cual.ai — Herramientas de IA en español";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          border: "1px solid #30363d",
        }}
      >
        {/* Esquinas decorativas */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 32,
            color: "#30363d",
            fontSize: 18,
            display: "flex",
          }}
        >
          ┌─────────────────────────────────────────────────────────────────┐
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 32,
            color: "#30363d",
            fontSize: 18,
            display: "flex",
          }}
        >
          └─────────────────────────────────────────────────────────────────┘
        </div>

        {/* Badge top */}
        <div
          style={{
            marginBottom: 32,
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "8px 20px",
            display: "flex",
          }}
        >
          <span
            style={{
              color: "#58a6ff",
              fontSize: 20,
              letterSpacing: 4,
              fontWeight: "bold",
            }}
          >
            cual.ai
          </span>
        </div>

        {/* Título principal */}
        <div
          style={{
            color: "#e6edf3",
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 24,
            display: "flex",
          }}
        >
          Encuentra la herramienta
        </div>
        <div
          style={{
            color: "#3fb950",
            fontSize: 64,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 48,
            display: "flex",
          }}
        >
          de IA perfecta
        </div>

        {/* Subtítulo */}
        <div
          style={{
            color: "#8b949e",
            fontSize: 28,
            textAlign: "center",
            display: "flex",
          }}
        >
          Directorio de herramientas AI en español para LATAM
        </div>

        {/* Stats row */}
        <div style={{ marginTop: 56, display: "flex", gap: 48 }}>
          {(
            [
              ["100+", "herramientas"],
              ["20+", "categorías"],
              ["gratis", "siempre"],
            ] as const
          ).map(([num, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span
                style={{ color: "#58a6ff", fontSize: 32, fontWeight: "bold" }}
              >
                {num}
              </span>
              <span style={{ color: "#8b949e", fontSize: 16 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
