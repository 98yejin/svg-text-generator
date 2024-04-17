import {
  flatSVG,
  highlighterSVG,
  retro1SVG,
  retro2SVG,
  smoothSVG,
} from "@/app/svg";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const fontSize = searchParams.get("fontSize") || 24;
  const fontColor = searchParams.get("fontColor") || "black";
  const shadowColor = searchParams.get("shadowColor") || "gray";
  const highlightColor = searchParams.get("highlightColor") || "yellow";
  const backgroundColor = searchParams.get("backgroundColor") || "white";
  const text = searchParams.get("text") || "Hello, World!";
  let svg;
  svg = test(
    type,
    svg,
    fontSize,
    fontColor,
    shadowColor,
    highlightColor,
    backgroundColor,
    text
  );
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
}

function test(
  type,
  svg,
  fontSize,
  fontColor,
  shadowColor,
  highlightColor,
  backgroundColor,
  text
) {
  switch (type) {
    case "flat":
      svg = flatSVG(fontSize, fontColor, backgroundColor, text);
      break;
    case "highlighter":
      svg = highlighterSVG(
        fontSize,
        fontColor,
        highlightColor,
        backgroundColor,
        text
      );
      break;
    case "retro1":
      svg = retro1SVG(fontSize, fontColor, shadowColor, backgroundColor, text);
      break;
    case "retro2":
      svg = retro2SVG(fontSize, fontColor, shadowColor, backgroundColor, text);
      break;
    case "smooth":
      svg = smoothSVG(fontSize, fontColor, backgroundColor, text);
      break;
    default:
      svg = flatSVG(fontSize, fontColor, backgroundColor, text);
      break;
  }
  return svg;
}
