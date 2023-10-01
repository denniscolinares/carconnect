"use strict";

const config = require("platformsh-config").config();
const Keyv = require("keyv");
const md5 = require("md5");
const _ = require("lodash");

const redisObj = (options) => {
  const defaultObj = {
      name: "",
      ttl: 60,
    },
    data = _.assign(defaultObj, options),
    keyvOption = {
      disable_resubscribing: true,
      namespace: `danteio-${data.name}`,
      adapter: "redis",
      ttl: data.ttl * 1000,
    };

  let keyvObj = {};

  if (config.isValidPlatform()) {
    const credentials = config.credentials("redis");

    keyvObj = new Keyv(
      `redis://${credentials.host}:${credentials.port}`,
      keyvOption
    );
  } else {
    keyvObj = new Keyv(`redis://127.0.0.1:6379`, keyvOption);
  }

  return keyvObj;
};

redisObj().on("error", (err) => {
  console.log("===REDIS CONNECTION ERROR=== ", err);
});

module.exports = redisObj;
