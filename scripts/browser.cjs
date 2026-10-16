const { chromium } = require('playwright');
const fs = require('node:fs');
exports.launch = () => chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || (fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined),
  headless: true,
  args: ['--no-sandbox', '--enable-unsafe-swiftshader'],
});
exports.baseURL = process.env.BASE_URL || 'http://127.0.0.1:5173';
