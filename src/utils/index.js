export function test() {}
export function calculateWidth(text, fontFamily, fontSize) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText(text).width;
}