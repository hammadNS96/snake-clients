const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf8');


  return conn;
};

module.exports = { connect };
