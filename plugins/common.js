const getDate = {
  name: "getDate",
  version: "1.0.0",
  register: async function (server, options) {
    const currentDate = function () {
      // console.log('options', options);
      const date = new Date();
      return date;
    };

    server.decorate("toolkit", "getDate", currentDate);
  },
};

module.exports = {
  getDate,
};
