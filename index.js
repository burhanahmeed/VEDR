const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const ua = require('useragent');
const http = require('http');

var path = require("path");

function isBot (useragent) {
	const agent = ua.is(useragent);
	return !agent.webkit && !agent.opera && !agent.ie &&
        !agent.chrome && !agent.safari && !agent.mobile_safari &&
        !agent.firefox && !agent.mozilla && !agent.android;
}

const VueBuild = express.static(__dirname + '/dist')
app.use(VueBuild)

const port = process.env.PORT || 3000;

app.use('*', async (req, res) => {
	
	console.log('Agent', !isBot(req.headers['user-agent']))

	if (!isBot(req.headers['user-agent'])) {

		res.sendFile(__dirname + '/dist/index.html');

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

            console.log(html)

            res.send(html);
		} catch (err) {
			res.send(err)
		}
	}
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});

// http.createServer(app).listen(80)