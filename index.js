const fetch   = require('node-superfetch'),
      fs      = require('fs'),
      log     = require('./dep/logger.js'),
      colors  = require('./dep/colors'),
      config  = require('./config.json');

postSong();

setInterval(function postSong() {
  let data = fs.readFileSync('../Snip.txt', 'utf8');
  fetch.get(`http://127.0.0.1/postSongData?data=${data.toString()}`)
       .then(res => log.print(1, `${colors.cyan('Post')} ${colors.green('->')} Successfully posted data!`));
}, config.timeout);
