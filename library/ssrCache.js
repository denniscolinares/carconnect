"use strict";

const redisObj = require("@/library/redis");
const md5 = require("md5");
const { Base64 } = require("js-base64");
const { addQueryArgs } = require("@wordpress/url");

const NODE_BASE_URL = (process.env.NODE_BASE_URL || "").slice(0, -1);
const CACHED_TTL = 7200;

const redis = redisObj({
  name: "pages",
  ttl: CACHED_TTL,
});

const cacheableContent = async ({ req, res, pagePath, queryParams }) => {
	const app = req.app.locals.next;
	
  const IsBypassCache = req.query.hasOwnProperty("force")
      ? req.query.force === "true"
      : false,
    cache = redis;

  delete req.query.force;

  const url = addQueryArgs(`${NODE_BASE_URL}${req.path}`, req.query),
    hashKey = md5(url);

  let cacheData = await cache.get(hashKey);

  try {
    if ([undefined, null].includes(cacheData) || !IsBypassCache) {
      cacheData = await app.renderToHTML(req, res, pagePath, queryParams);
      cacheData = Base64.encode(cacheData);

      await cache.set(hashKey, cacheData);
    }

    return res.send(Base64.decode(cacheData));
  } catch (err) {
    console.error(`Error: Unable to create cache. ${url}`);

    return res.send(await app.renderToHTML(req, res, pagePath, queryParams));
  }
};

module.exports = cacheableContent;
