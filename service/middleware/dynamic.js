const puppeteer = require('puppeteer');
const ua = require('useragent');

/**
	Middleware to check its user agent
*/
const RENDER_CACHE = new Map();

function isBot (useragent) {
	const agent = ua.is(useragent);
	return !agent.webkit && !agent.opera && !agent.ie &&
        !agent.chrome && !agent.safari && !agent.mobile_safari &&
        !agent.firefox && !agent.mozilla && !agent.android;
}

const uAgentMiddleware = async (req, res, next) => {
	const local_url = `${process.env.BASE_URL}${req.originalUrl}`
	console.log(`${process.env.BASE_URL}${req.originalUrl}`)

	if (!isBot(req.headers['user-agent'])) {
		next ()
	} else {

		try {
			if (RENDER_CACHE.has(local_url)) {
			    var htmls = RENDER_CACHE.get(local_url)
			    res.send(htmls);
			    return;
		  	}
			const browser = await puppeteer.launch({
			  'args' : [
			    '--no-sandbox',
			    '--disable-setuid-sandbox'
			  ]
			})
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

module.exports = uAgentMiddleware