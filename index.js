const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const ua = require("useragent");

function isBot (ua) {
	const agent = ua.is(useragent);
	return !agent.webkit && !agent.opera && !agent.ie &&
        !agent.chrome && !agent.safari && !agent.mobile_safari &&
        !agent.firefox && !agent.mozilla && !agent.android;
}

const VueBuild = "./dist/"
app.use(VueBuild)

const port = 3000;

app.get('*', async (req, res) => {
	if (!isBot(req.headers['user-agent'])) {
		res.sendFile(`${VueBuild}/index.html`)
	} else {
		try {
			const browser = await puppeteer.launch()
			const page = await browser.newPage();
			await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
			const local_url = 'http://localhost:' + port + req.originalUrl;
		 	await page.goto(local_url, {
                waitUntil: "networkidle0",
            });
            const html = await page.evaluate(() => {
                return document.documentElement.innerHTML;
            });

            res.send(html);
		} catch (err) {
			res.send(err)
		}
	}
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});