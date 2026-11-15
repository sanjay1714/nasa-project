const puppeteer = require('puppeteer-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

async function extractAssets() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const imgPath = 'C:/Users/itzme/.gemini/antigravity/brain/865a5f28-ff5d-423b-b7cf-5023450f379d/.user_uploaded/media_1794642217772_e4b8c7c1.jpg';
  const imgBase64 = fs.readFileSync(imgPath).toString('base64');
  const tempProfile = path.join(os.tmpdir(), 'edge_crop_' + Date.now());

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    userDataDir: tempProfile,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; background: black;">
        <img id="refImg" src="data:image/jpeg;base64,${imgBase64}" />
      </body>
    </html>
  `);

  await page.waitForSelector('#refImg');

  async function cropRegion(name, x, y, width, height) {
    const dataUrl = await page.evaluate((x, y, width, height) => {
      const img = document.getElementById('refImg');
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
      return canvas.toDataURL('image/png');
    }, x, y, width, height);

    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
    const dest = path.join(__dirname, 'public', 'assets', name);
    fs.writeFileSync(dest, base64Data, 'base64');
    console.log(`Saved ${name} (${width}x${height}) at [${x}, ${y}]`);
  }

  // 1. Sidebar bottom illustration
  await cropRegion('sidebar_illustration.png', 0, 362, 149, 214);

  // 2. Exact Map Card content (tuned to avoid outer card frame)
  await cropRegion('fire_map_satellite.png', 154, 197, 614, 184);

  // 3. NASA meatball badge
  await cropRegion('nasa_badge.png', 324, 8, 25, 25);

  await browser.close();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
}

extractAssets().catch(err => {
  console.error('Extraction error:', err);
  process.exit(1);
});
