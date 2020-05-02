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

// const VueBuild = express.static(path.join(__dirname, 'dist'))
// app.use(VueBuild)

const dist = path.join(__dirname, 'dist');

const port = process.env.PORT || 3000;

/**
	Middleware to check its user agent
*/
const RENDER_CACHE = new Map();

const uAgentMiddleware = async (req, res, next) => {
	const local_url = `${req.protocol}://${req.get('host')}/${req.originalUrl}`

	if (!isBot(req.headers['user-agent'])) {
		next ()
	} else {

		try {
			if (RENDER_CACHE.has(local_url)) {
			    var htmls = RENDER_CACHE.get(local_url)
			    res.send(htmls);
			    return;
		  	}
			const browser = await puppeteer.launch()
			const page = await browser.newPage();
			await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
			// const local_url = 'http://localhost:' + port + req.originalUrl;
		 	await page.goto(local_url, {
	            waitUntil: "networkidle0",
	        });
	        const html = await page.evaluate(() => {
	            return document.documentElement.innerHTML;
	        });
	        await browser.close();

	        // console.log(html)
	        RENDER_CACHE.set(local_url, html);

	        res.send(html);
		} catch (err) {
			res.send(err)
		}
	}
}

app.use(uAgentMiddleware)

app.use('/', express.static(dist));

app.use('*', (req, res) => {

	res.sendFile(path.join(dist, 'index.html'));

	// if (!isBot(req.headers['user-agent'])) {

	// 	// res.sendFile(__dirname + '/dist/index.html');
	// 	res.sendFile(path.join(dist, 'index.html'));

	// } else {
		
	// }
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});

// http.createServer(app).listen(80)