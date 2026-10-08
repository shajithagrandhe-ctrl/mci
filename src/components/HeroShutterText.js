function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderCharacters(text, lineIndex) {
  let characterOffset = 0;

  return text.split(' ').map((word) => {
    const characters = Array.from(word).map((character) => {
      const delay = (lineIndex * 0.22) + (characterOffset * 0.035);
      characterOffset += 1;
      const safeCharacter = escapeHtml(character);

      return `
        <span class="shutter-character" style="--shutter-delay: ${delay.toFixed(3)}s;">
          <span class="shutter-character-main">${safeCharacter}</span>
          <span class="shutter-character-slice shutter-character-slice-top" aria-hidden="true">${safeCharacter}</span>
          <span class="shutter-character-slice shutter-character-slice-middle" aria-hidden="true">${safeCharacter}</span>
          <span class="shutter-character-slice shutter-character-slice-bottom" aria-hidden="true">${safeCharacter}</span>
        </span>
      `;
    }).join('');

    characterOffset += 1;
    return `<span class="shutter-word">${characters}</span>`;
  }).join('');
}

export function renderHeroShutterText({ title, subtitle }) {
  const accessibleText = `${title}. ${subtitle}`;

  return `
    <h1 class="hero-title hero-shutter-text" aria-label="${escapeHtml(accessibleText)}" data-shutter-text tabindex="0">
      <span class="hero-shutter-line hero-shutter-line-primary" aria-hidden="true">
        ${renderCharacters(title, 0)}
      </span>
      <span class="hero-shutter-line hero-shutter-line-secondary" aria-hidden="true">
        ${renderCharacters(subtitle, 1)}
      </span>
    </h1>
  `;
}
