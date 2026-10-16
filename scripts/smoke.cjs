const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH || (require('fs').existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined),headless:true,args:['--no-sandbox','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');await page.waitForSelector('canvas');await page.waitForTimeout(1600);
 await page.screenshot({path:'/tmp/expla-desktop.png'});
 const canvas=page.locator('canvas');const a=await canvas.screenshot();await page.waitForTimeout(600);const b=await canvas.screenshot();if(a.equals(b))throw Error('Globe did not rotate');
 await page.getByRole('button',{name:'Pause rotation'}).click();await page.waitForTimeout(2500);const c=await canvas.screenshot();await page.waitForTimeout(400);const d=await canvas.screenshot();if(!c.equals(d))throw Error('Pause did not stop rotation');
 const bounds=await canvas.boundingBox();await page.mouse.move(bounds.x+bounds.width/2,bounds.y+bounds.height/2);await page.mouse.down();await page.mouse.move(bounds.x+bounds.width/2+100,bounds.y+bounds.height/2+30,{steps:12});await page.mouse.up();await page.waitForTimeout(2500);if(c.equals(await canvas.screenshot()))throw Error('Drag did not change view');
 await page.emulateMedia({reducedMotion:'reduce'});await page.getByRole('button',{name:'Resume rotation'}).click();await page.waitForTimeout(2500);const e=await canvas.screenshot();await page.waitForTimeout(400);if(!e.equals(await canvas.screenshot()))throw Error('Reduced motion failed');
 await page.setViewportSize({width:390,height:844});await page.waitForTimeout(400);await page.screenshot({path:'/tmp/expla-mobile.png',fullPage:true});
 if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile horizontal overflow');
 const data=await page.evaluate(()=>fetch('/data/countries.geojson').then(r=>r.json()));if(data.features.some(f=>['RUS','BLR'].includes(f.properties.iso_a3)))throw Error('Excluded countries present');
 if(errors.length)throw Error(errors.join('\n'));
 console.log('PASS: WebGL rendering, continuous rotation, pause, dragging, reduced motion, mobile layout, excluded geography; no browser exceptions.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
