const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const ks = require("kaliscripter");
const colors = require("colors");
const config = require("./config.json");

if (!config.AppID) {
  ks.error(
    `Please enter a configuration into the ${"config.json".yellow} file.`
  );
  process.exit(1);
}

client.on("ready", () => {
  client.setActivity({
    largeImageKey: config.LargeImage,
    smallImageKey: config.SmallImage,
    largeImageText: config.LargeText,
    smallImageText: config.SmallText,
    details: config.Details,
    state: config.State,
    startTimestamp: Date.now(),
  });

  ks.info("Successfully started!");
  ks.warn("Killing this process will remove the RPC.");
});

client.login({ clientId: config.AppID });
