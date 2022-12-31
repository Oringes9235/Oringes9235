// 修改下面一行可以更待设置的时间到时出现的文字，比如"新年快乐"、"永远爱你"等。
var zhufuyu = "祝你能在2023年里 - 不劳而获、无功受禄、坐享其成、坐收渔翁之利！！！";
// 修改下面一行可以设置倒计时时间，注意格式保持不要变。
var daojishi = "2023/1/1 00:00:00";
// 修改下面一行可以设置倒计时的时候出现的提示文字。
var tishi = "让我们一起为2023倒计时吧";

document.getElementById("label").innerHTML = tishi;
class Snowflake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = 0;
    this.alpha = 0;

    this.reset();
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth);
    this.y = this.randBetween(0, -window.innerHeight);
    this.vx = this.randBetween(-3, 3);
    this.vy = this.randBetween(2, 5);
    this.radius = this.randBetween(1, 4);
    this.alpha = this.randBetween(0.1, 0.9);
  }

  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.radius > window.innerHeight) {
      this.reset();
    }
  }
}

class Snow {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", () => this.onResize());
    this.onResize();
    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);

    this.createSnowflakes();
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createSnowflakes() {
    const flakes = window.innerWidth / 4;

    this.snowflakes = [];

    for (let s = 0; s < flakes; s++) {
      this.snowflakes.push(new Snowflake());
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let flake of this.snowflakes) {
      flake.update();

      this.ctx.save();
      this.ctx.fillStyle = "#FFF";
      this.ctx.beginPath();
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.globalAlpha = flake.alpha;
      this.ctx.fill();
      this.ctx.restore();
    }
    requestAnimationFrame(this.updateBound);
  }
}

const snow = new Snow();

////////////////////////////////////////////////////////////
// Simple CountDown Clock

const d = document.getElementById("d");
const hhh = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");
var flagg = false;

function getTrueNumber(num) {
  return num < 10 ? "0" + num : num;
}

function calculateRemainingTime() {
  const comingYear = new Date().getFullYear() + 1;
  // const comingDate = new Date(`Jan 1, ${comingYear} 00:00:00`);
  // const comingDate = new Date(`Dec 29, 2022 09:20:30`);
  const comingDate = new Date(daojishi);

  const now = new Date();
  const remainingTime = comingDate.getTime() - now.getTime();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

  d.innerHTML = getTrueNumber(days);
  hhh.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  return remainingTime;
}

function initCountdown() {
  const interval = setInterval(() => {
    const remainingTimeInMs = calculateRemainingTime();
    console.log("remainingTimeInMs=", remainingTimeInMs)
    if (remainingTimeInMs <= 0 && flagg == false) {
      flagg = true;
      goNextStep();
      return;
    }

    if (remainingTimeInMs <= 1000) {
      clearInterval(interval);
      initCountdown();
    }
  }, 1000);
}

function goNextStep() {
  // const d = document.getElementById("middleId");
  // d.innerHTML = "";
  snow.canvas.remove();
  const bbody = document.getElementById("bbody");
  bbody.innerHTML = "<h1 id=h1h1h1>"+zhufuyu+"</h1><canvas id=canvas></canvas>";
  var h1h1h1 = document.getElementById("h1h1h1");
  var font_size = "1000%";
  if (zhufuyu.length <=5) {
    font_size = "600%";
  } else if (zhufuyu.length <=8) {
    font_size = "400%";
  } else if (zhufuyu.length <=12) {
    font_size = "300%";
  } else if (zhufuyu.length <=15) {
    font_size = "200%";
  } else if (zhufuyu.length <=20) {
    font_size = "100%";
  } else if (zhufuyu.length <=30) {
    font_size = "100%";
  } else {
    font_size = "80%";
  }
  h1h1h1.style.setProperty("font-size", font_size)
  dedede();
}

initCountdown();

function dodododo() {
  var gl = c.getContext( 'webgl', { preserveDrawingBuffer: true } )
  ,	w = c.width = window.innerWidth
  ,	h = c.height = window.innerHeight

  ,	webgl = {}
  ,	opts = {
    projectileAlpha: .8,
    projectileLineWidth: 1.3,
    fireworkAngleSpan: .5,
    baseFireworkVel: 3,
    addedFireworkVel: 3,
    gravity: .03,
    lowVelBoundary: -.2,
    xFriction: .995,
    baseShardVel: 1,
    addedShardVel: .2,
    fireworks: 1000,
    baseShardsParFirework: 10,
    addedShardsParFirework: 10,
    shardFireworkVelMultiplier: .3,
    initHueMultiplier: 1/360,
    runHueAdder: .1/360
  }

  webgl.vertexShaderSource = `
  uniform int u_mode;
  uniform vec2 u_res;
  attribute vec4 a_data;
  varying vec4 v_color;

  vec3 h2rgb( float h ){
    return clamp( abs( mod( h * 6. + vec3( 0, 4, 2 ), 6. ) - 3. ) -1., 0., 1. );
  }
  void clear(){
    gl_Position = vec4( a_data.xy, 0, 1 );
    v_color = vec4( 0, 0, 0, a_data.w );
  }
  void draw(){
    gl_Position = vec4( vec2( 1, -1 ) * ( ( a_data.xy / u_res ) * 2. - 1. ), 0, 1 );
    v_color = vec4( h2rgb( a_data.z ), a_data.w );
  }
  void main(){
    if( u_mode == 0 )
      draw();
    else
      clear();
  }
  `;
  webgl.fragmentShaderSource = `
  precision mediump float;
  varying vec4 v_color;

  void main(){
    gl_FragColor = v_color;
  }
  `;

  webgl.vertexShader = gl.createShader( gl.VERTEX_SHADER );
  gl.shaderSource( webgl.vertexShader, webgl.vertexShaderSource );
  gl.compileShader( webgl.vertexShader );

  webgl.fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
  gl.shaderSource( webgl.fragmentShader, webgl.fragmentShaderSource );
  gl.compileShader( webgl.fragmentShader );

  webgl.shaderProgram = gl.createProgram();
  gl.attachShader( webgl.shaderProgram, webgl.vertexShader );
  gl.attachShader( webgl.shaderProgram, webgl.fragmentShader );

  gl.linkProgram( webgl.shaderProgram );
  gl.useProgram( webgl.shaderProgram );

  webgl.dataAttribLoc = gl.getAttribLocation( webgl.shaderProgram, 'a_data' );
  webgl.dataBuffer = gl.createBuffer();

  gl.enableVertexAttribArray( webgl.dataAttribLoc );
  gl.bindBuffer( gl.ARRAY_BUFFER, webgl.dataBuffer );
  gl.vertexAttribPointer( webgl.dataAttribLoc, 4, gl.FLOAT, false, 0, 0 );

  webgl.resUniformLoc = gl.getUniformLocation( webgl.shaderProgram, 'u_res' );
  webgl.modeUniformLoc = gl.getUniformLocation( webgl.shaderProgram, 'u_mode' );

  gl.viewport( 0, 0, w, h );
  gl.uniform2f( webgl.resUniformLoc, w, h );

  gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
  gl.enable( gl.BLEND );

  gl.lineWidth( opts.projectileLineWidth );

  webgl.data = [];

  webgl.clear = function(){
    
    gl.uniform1i( webgl.modeUniformLoc, 1 );
    var a = .1;
    webgl.data = [
      -1, -1, 0, a,
      1, -1, 0, a,
      -1,  1, 0, a,
      -1,  1, 0, a,
      1, -1, 0, a,
      1,  1, 0, a
    ];
    webgl.draw( gl.TRIANGLES );
    gl.uniform1i( webgl.modeUniformLoc, 0 );
    webgl.data.length = 0;
  }
  webgl.draw = function( glType ){
    
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( webgl.data ), gl.STATIC_DRAW );
    gl.drawArrays( glType, 0, webgl.data.length / 4 );
  }

  var	fireworks = []
    ,	tick = 0
    ,	sins = []
    ,	coss = []
    ,	maxShardsParFirework = opts.baseShardsParFirework + opts.addedShardsParFirework
    ,	tau = 6.283185307179586476925286766559;

  for( var i = 0; i < maxShardsParFirework; ++i ){
    sins[ i ] = Math.sin( tau * i / maxShardsParFirework );
    coss[ i ] = Math.cos( tau * i / maxShardsParFirework );
  }

  function Firework(){
    this.reset();
    this.shards = [];
    for( var i = 0; i < maxShardsParFirework; ++i )
      this.shards.push( new Shard( this ) );
  }
  Firework.prototype.reset = function(){
    
    var angle = -Math.PI / 2 + ( Math.random() - .5 )* opts.fireworkAngleSpan
      ,	vel = opts.baseFireworkVel + opts.addedFireworkVel * Math.random();
    
    this.mode = 0;
    this.vx = vel * Math.cos( angle );
    this.vy = vel * Math.sin( angle );
    
    this.x = Math.random() * w;
    this.y = h;
    
    this.hue = tick * opts.initHueMultiplier;
    
  }
  Firework.prototype.step = function(){
    
    if( this.mode === 0 ){
      
      var ph = this.hue
        ,	px = this.x
        ,	py = this.y;
      
      this.hue += opts.runHueAdder;
    
      this.x += this.vx *= opts.xFriction;
      this.y += this.vy += opts.gravity;
      
      webgl.data.push(
        px, py, ph, opts.projectileAlpha * .2,
        this.x, this.y, this.hue, opts.projectileAlpha * .2 );
      
      if( this.vy >= opts.lowVelBoundary ){
        this.mode = 1;

        this.shardAmount = opts.baseShardsParFirework + opts.addedShardsParFirework * Math.random() | 0;

        var baseAngle = Math.random() * tau
          ,	x = Math.cos( baseAngle )
          ,	y = Math.sin( baseAngle )
          ,	sin = sins[ this.shardAmount ]
          ,	cos = coss[ this.shardAmount ];

        for( var i = 0; i < this.shardAmount; ++i ){

          var vel = opts.baseShardVel + opts.addedShardVel * Math.random();
          this.shards[ i ].reset( x * vel, y * vel )
          var X = x;
          x = x * cos - y * sin;
          y = y * cos + X * sin;
        }
      }

    } else if( this.mode === 1 ) {
      
      this.ph = this.hue
      this.hue += opts.runHueAdder;
      
      var allDead = true;
      for( var i = 0; i < this.shardAmount; ++i ){
        var shard = this.shards[ i ];
        if( !shard.dead ){
          shard.step();
          allDead = false;
        }
      }
      
      if( allDead )
        this.reset();
    }
    
  }
  function Shard( parent ){
    this.parent = parent;
  }
  Shard.prototype.reset = function( vx, vy ){
    this.x = this.parent.x;
    this.y = this.parent.y;
    this.vx = this.parent.vx * opts.shardFireworkVelMultiplier + vx;
    this.vy = this.parent.vy * opts.shardFireworkVelMultiplier + vy;
    this.starty = this.y;
    this.dead = false;
    this.tick = 1;
  }
  Shard.prototype.step = function(){
    
    this.tick += .05;
    
    var px = this.x
      ,	py = this.y;
    
    this.x += this.vx *= opts.xFriction;
    this.y += this.vy += opts.gravity;
    
    var proportion = 1 - ( this.y - this.starty ) / ( h - this.starty );
    
    webgl.data.push(
      px, py, this.parent.ph, opts.projectileAlpha / this.tick,
      this.x, this.y, this.parent.hue, opts.projectileAlpha / this.tick );
    
    if( this.y > h )
      this.dead = true;
  }

  function anim(){
    
    window.requestAnimationFrame( anim )
    
    webgl.clear();
    
    ++tick;
    
    if( fireworks.length < opts.fireworks )
      fireworks.push( new Firework );
    
    fireworks.map( function( firework ){ firework.step(); } );
    
    webgl.draw( gl.LINES );
  }
  anim();

  window.addEventListener( 'resize', function(){
    
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    
    gl.viewport( 0, 0, w, h );
    gl.uniform2f( webgl.resUniformLoc, w, h );
  })
  window.addEventListener( 'click', function( e ){
    var firework = new Firework();
    firework.x = e.clientX;
    firework.y = e.clientY;
    firework.vx = 0;
    firework.vy = 0;
    fireworks.push( firework );
  });


}

function dedede() {
  let W = window.innerWidth;
  let H = window.innerHeight;
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const maxConfettis = 150;
  const particles = [];

  const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
  ];

  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color =
      possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function() {
      context.beginPath();
      context.lineWidth = this.r / 2;
      context.strokeStyle = this.color;
      context.moveTo(this.x + this.tilt + this.r / 3, this.y);
      context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
      return context.stroke();
    };
  }

  function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
      results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
      particle = particles[i];

      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
      particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

      if (particle.y <= H) remainingFlakes++;

      // If a confetti has fluttered out of view,
      // bring it back to above the viewport and let if re-fall.
      if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
        particle.x = Math.random() * W;
        particle.y = -30;
        particle.tilt = Math.floor(Math.random() * 10) - 20;
      }
    }

    return results;
  }

  window.addEventListener(
    "resize",
    function() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    false
  );

  // Push new confetti objects to `particles[]`
  for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
  }

  // Initialize
  canvas.width = W;
  canvas.height = H;
  Draw();
}
