const Hapi = require("@hapi/hapi");

const Path = require("path");
// const mongoose = require('mongoose');
const routers = require("./routes");
const { getDate } = require("../plugins");

const server = Hapi.server({
  port: 9002,
  host: "localhost",
  routes: {
    cors: {
      origin: ["*"], // 允许跨域
    },
    files: {
      relativeTo: Path.join(__dirname, "assets"),
    },
  },
  debug: { request: ["error"] }, // Debug 模式 (只针对开发)
});

// hapi在请求周期内一共具有7个扩展点。 按顺序，它们分别都是
// onRequest,
// onPreAuth,
// onCredentials,
// onPostAuth,
// onPreHandler,
// onPostHandler,
// onPreResponse

server.state("data", {
  ttl: null,
  isSecure: true,
  isHttpOnly: true,
  encoding: "base64json",
  clearInvalid: false, // remove invalid cookies
  strictHeader: true, // don't allow violations of RFC 6265
});

//
server.events.on("log", (event, tags) => {
  if (tags.error) {
    console.log(
      `Server error: ${event.error ? event.error.message : "unknown"}`
    );
  }
});

server.route(routers);
const users = {
  john: {
    username: "john",
    password: "$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm", // '密码: secret'
    name: "John Doe",
    id: "2133d32a",
  },
};
const validate = async (request, username, password) => {
  const user = users[username];
  if (!user) {
    return { credentials: null, isValid: false };
  }
  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};

const init = async () => {
  // 插件注册
  await server.register([
    require("@hapi/basic"),
    require("@hapi/inert"),
    {
      plugin: require("hapi-pino"),
      options: {
        prettifier: true, // 格式化输出
        logEvents: ["response", "onPostStart"],
      },
    },
    {
      plugin: getDate,
      options: {
        name: "zzzz",
      },
    },
  ]);

  // 身份认证
  server.auth.strategy("simple", "basic", { validate });

  await server.start();
  // console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  // console.log(err);
  process.exit(1);
});

init();
