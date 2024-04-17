"use client";

import { useState } from "react";
import Head from "next/head";

const RetroTextSVG = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(100);
  const [fontColor, setFontColor] = useState("#FFD700");
  const [shadowColor, setShadowColor] = useState("#8B4513");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const generateSVG = () => {
    const svgWidth = text.length * fontSize;
    const svgHeight = fontSize * 1.5;

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
        <rect width="100%" height="100%" fill="${backgroundColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${shadowColor}" transform="translate(5, 5)" font-family="Impact, sans-serif">
          ${text}
        </text>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${fontColor}" font-family="Impact, sans-serif">
          ${text}
        </text>
      </svg>
    `;
  };

  return (
    <>
      <Head>
        <title>Text SVG Generator</title>
      </Head>
      <div>
        <h1
          style={{
            fontSize: "48px",
            fontFamily: "monospace",
            marginBottom: "48px",
          }}
        >
          Text SVG Generator
        </h1>
        <div style={{ marginBottom: "8px" }}>
          <label style={{ marginRight: "8px" }} htmlFor="text">
            Text:
          </label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ marginRight: "8px" }} htmlFor="fontSize">
            Font Size:
          </label>
          <input
            type="number"
            id="fontSize"
            name="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ marginRight: "8px" }} htmlFor="fontColor">
            Font Color:
          </label>
          <input
            type="color"
            id="fontColor"
            name="fontColor"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ marginRight: "8px" }} htmlFor="shadowColor">
            Shadow Color:
          </label>
          <input
            type="color"
            id="shadowColor"
            name="shadowColor"
            value={shadowColor}
            onChange={(e) => setShadowColor(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ marginRight: "8px" }} htmlFor="backgroundColor">
            Background Color:
          </label>
          <input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: generateSVG() }}></div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RetroTextSVG />
    </main>
  );
};

export default Home;
