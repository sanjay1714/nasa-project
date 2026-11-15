const puppeteer = require('puppeteer-core');
const path = require('path');
const os = require('os');
const fs = require('fs');

async function capture() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outputPath = path.join(__dirname, 'screenshot_implemented.png');
  const tempProfile = path.join(os.tmpdir(), 'edge_fcl_' + Date.now());

  console.log('Using temp profile at:', tempProfile);

  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    userDataDir: tempProfile,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1648,928'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1648, height: 928, deviceScaleFactor: 1 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err.message));

  console.log('Navigating to http://localhost:5173/ ...');
  try {
    const response = await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
    console.log('HTTP Status:', response ? response.status() : 'no response');
  } catch (e) {
    console.error('Navigation error:', e.message);
  }

  // Wait 2.5s for charts and graphics to render
  await new Promise(r => setTimeout(r, 2500));

  console.log('Capturing screenshot to:', outputPath);
  await page.screenshot({ path: outputPath, fullPage: false });

  await browser.close();
  console.log('Capture finished successfully.');

  // Clean up temp dir safely
  try {
    fs.rmSync(tempProfile, { recursive: true, force: true });
  } catch (e) {}
}

capture().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
