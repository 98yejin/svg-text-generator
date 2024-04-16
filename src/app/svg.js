export function flatSVG(fontSize, fontColor, backgroundColor, text) {
  const svgWidth = text.length * fontSize;
  const svgHeight = fontSize * 1.5;
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <rect width="100%" height="100%" fill="${backgroundColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${fontColor}" font-family="Arial, sans-serif" font-weight="bold" paint-order="stroke" stroke="#EEEEEE" stroke-width="4">
        ${text}
      </text>
    </svg>
  `;
}

export function smoothSVG(fontSize, fontColor, backgroundColor, text) {
  const svgWidth = text.length * fontSize;
  const svgHeight = fontSize * 1.5;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
    <defs>
      <filter id="balloon-effect">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.8" specularExponent="15" lighting-color="#white" result="specular">
          <fePointLight x="-5000" y="-10000" z="10000" />
        </feSpecularLighting>
        <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular-masked" />
        <feComposite in="SourceGraphic" in2="specular-masked" operator="out" result="balloon" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="${backgroundColor}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${fontColor}" filter="url(#balloon-effect)" font-family="Arial, sans-serif" font-weight="bold">
      ${text}
    </text>
  </svg>
`;
}

export function highlighterSVG(
  fontSize,
  fontColor,
  highlightColor,
  backgroundColor,
  text
) {
  const svgWidth = text.length * fontSize;
  const svgHeight = fontSize * 1.5;
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      <rect width="100%" height="100%" fill="${backgroundColor}" />
      <rect x="0" y="40%" width="100%" height="50%" fill="${highlightColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${fontColor}" font-family="Arial, sans-serif">
        ${text}
      </text>
    </svg>
  `;
}

export function retro1SVG(
  fontSize,
  fontColor,
  shadowColor,
  backgroundColor,
  text
) {
  const svgWidth = text.length * fontSize;
  const svgHeight = fontSize * 1.5;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
    <rect width="100%" height="100%" fill="${backgroundColor}" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${fontColor}" font-family="Impact, sans-serif">
      ${text}
    </text>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${fontSize}" fill="${shadowColor}" transform="translate(5, 5)" font-family="Impact, sans-serif">
      ${text}
    </text>
  </svg>
`;
}

export function retro2SVG(
  fontSize,
  fontColor,
  shadowColor,
  backgroundColor,
  text
) {
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
}
