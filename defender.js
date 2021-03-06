var mysql = require('mysql');
var config = require('./config.json');


var db_config = {
  host: config.host,
    user: config.user,
    password: config.password,
    database: "defender"
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);


  connection.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;
