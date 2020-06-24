const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

const host = "https://local-company.appshouse.com";

let client = feathers();

const init = () => {
  const socket = io(host, {
    transports: ["websocket"],
    forceNew: true,
  });

  client.configure(
    socketio(socket, {
      timeout: 30 * 1000,
    })
  );
  client.configure(auth({ storage: window.localStorage }));

  return client;
};

export { client, init };
