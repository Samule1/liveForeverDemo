var script = "loopCrash.js";
var argument = 1;

var spawn = require("child_process").spawn;
start();

function start(){
  var process = spawn('node',[script]);

  process.stdout.on('data', function (data){
    console.log("Console log from child process: " + data.toString('utf8'));
  });

  process.stdout.on('close', function (data){
    console.log('restrarting the application..');
    delete(process);
    start();

  });
}
