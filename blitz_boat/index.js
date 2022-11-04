const WebSocket = require("ws");
const { Bot } = require("./Bot");
const { GameMessage } = require("./GameInterface");

const webSocket = new WebSocket("ws://0.0.0.0:8765");
let bot;

webSocket.onopen = function () {
  bot = new Bot();
  if (process.env.TOKEN) {
    webSocket.send(
      JSON.stringify({ type: "REGISTER", token: process.env.TOKEN })
    );
  } else {
    webSocket.send(JSON.stringify({ type: "REGISTER", teamName: "MyBot" }));
  }
};

webSocket.onmessage = function (raw) {
  const parsed = JSON.parse(raw.data.toString());
  const {data} = new GameMessage(parsed)

  console.log(`Playing tick ${data.currentTick} of ${data.totalTicks}`);

  webSocket.send(
    JSON.stringify({
      type: "COMMAND",
      tick: data.currentTick,
      action: bot.getNextMove(data),
    })
  );
};
