export async function saveCapturedImage(capture: string, filter: string) {
  if (!capture) return;

  const img = document.createElement("img");
  img.crossOrigin = "anonymous";
  img.src = capture;
  await new Promise<void>((res) => {
    img.onload = () => res();
    img.onerror = () => res();
  });

  const canvasW = 800;
  const canvasH = 720;

  const canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvasW, canvasH);

  const imgAspect = img.width / img.height;
  const frameAspect = canvasW / canvasH;
  let drawW: number, drawH: number;

  if (imgAspect > frameAspect) {
    drawH = canvasH * 0.8;
    drawW = drawH * imgAspect;
  } else {
    drawW = canvasW * 0.8;
    drawH = drawW / imgAspect;
  }

  const offsetX = (canvasW - drawW) / 2;
  const offsetY = (canvasH - drawH) / 2;

  ctx.filter = filter || "none";
  ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

  const dataUrl = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "chamna.png";
  document.body.appendChild(a);
  a.click();
  a.remove();
}