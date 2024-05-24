import qrcode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";

const wwebVersion = "2.2412.54";

const client = new Client({
  authStrategy: new LocalAuth(),
  webVersionCache: {
    type: "remote",
    remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("client is ready:)");
});

client.on("message", async (message) => {
  if (message.body === "!ping") {
    await message.reply("pong");
  }
});

client.initialize();
