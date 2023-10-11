const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let ghostSpeed = 1;
let lastKey = "";
let score = 0;
let mapNb = 0;
let levelNb = 0;
let nbGhosts = 4;
const bound = [];

const map_1 = [
  [
    "1",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "2",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "1",
    "]",
    ".",
    "[",
    "-",
    "-",
    "]",
    ".",
    "[",
    "-",
    "-",
    "-",
    "]",
    ".",
    "[",
    "-",
    "-",
    "]",
    ".",
    "[",
    "2",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "_",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "_",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    "1",
    "-",
    "-",
    "-",
    "]",
    " ",
    "b",
    " ",
    "b",
    " ",
    "b",
    " ",
    "[",
    "-",
    "-",
    "-",
    "2",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "^",
    ".",
    "|",
    ".",
    ".",
    ".",
    ".",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    ".",
    ".",
    ".",
    ".",
    "|",
    ".",
    "^",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "|",
    ".",
    "|",
    ".",
    "[",
    "-",
    "2",
    " ",
    "1",
    "]",
    " ",
    "[",
    "2",
    " ",
    "1",
    "-",
    "]",
    ".",
    "|",
    ".",
    "|",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "_",
    ".",
    "|",
    ".",
    ".",
    "p",
    "|",
    " ",
    "|",
    " ",
    " ",
    " ",
    "|",
    " ",
    "|",
    "p",
    ".",
    ".",
    "|",
    ".",
    "_",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    "4",
    "-",
    "-",
    "-",
    "3",
    " ",
    "4",
    "-",
    "-",
    "-",
    "3",
    " ",
    "4",
    "-",
    "-",
    "-",
    "3",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "^",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    "4",
    "]",
    ".",
    "[",
    "-",
    "-",
    "]",
    ".",
    "[",
    "-",
    "-",
    "-",
    "]",
    ".",
    "[",
    "-",
    "-",
    "]",
    ".",
    "[",
    "3",
    ".",
    "|",
  ],
  [
    "|",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    " ",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "|",
  ],
  [
    "4",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "3",
  ],
]; // level-1
const map_2 = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", " ", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", "b", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "1", "]", ".", "b", ".", "[", "2", ".", "|"],
  ["|", ".", "_", ".", ".", ".", ".", ".", "_", ".", "|"],
  ["|", ".", ".", ".", "[", "-", "]", ".", ".", ".", "|"],
  ["|", ".", "^", ".", ".", ".", ".", ".", "^", ".", "|"],
  ["|", ".", "4", "]", ".", "b", ".", "[", "3", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", "b", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
]; //level-2
const map_3 = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", " ", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "7", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "+", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "5", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
]; //level-3
const map_6 = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", " ", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", ".", "^", ".", ".", ".", "^", ".", ".", ".", "^", ".", ".", "|"],
  ["|", ".", "[", "+", "]", ".", "[", "+", "]", ".", "[", "+", "]", ".", "|"],
  ["|", ".", ".", "_", ".", ".", ".", "_", ".", ".", ".", "_", ".", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "+", "]", ".", "[", "+", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", ".", "^", ".", ".", ".", "^", ".", ".", ".", "^", ".", ".", "|"],
  ["|", ".", "[", "+", "]", ".", "[", "+", "]", ".", "[", "+", "]", ".", "|"],
  ["|", ".", ".", "_", ".", ".", ".", "_", ".", ".", ".", "_", ".", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
]; //level-6

const maps = [map_1, map_2, map_3];

class Boundary {
  static width = 40;
  static height = 40;
  constructor({ position, image }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
    this.image = image;
  }
  draw() {
    c.drawImage(
      this.image,
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60
    );
  }
}
class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.firstPosition = position;
    this.velocity = velocity;
    this.radius = 15;
    this.radians = 0.75;
    this.openRate = 0.12;
    this.rotation = 0;
    this.lives = 3;
    this.sound = new Audio()
    this.sound.src="./audio/lose.wav";
  }
  draw() {
    c.save();
    c.translate(
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60
    );
    c.rotate(this.rotation);
    c.translate(
      -(innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x),
      -(this.position.y + 60)
    );
    c.beginPath();
    c.arc(
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    );
    c.lineTo(
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60
    );
    c.fillStyle = "yellow";
    c.fill();
    c.closePath();
    c.restore();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.radians < 0 || this.radians > 0.75) this.openRate = -this.openRate;

    this.radians += this.openRate;
  }
}
class Pellet {
  constructor({ position }) {
    this.position = position;
    this.radius = 3;
  }
  draw() {
    c.beginPath();
    c.arc(
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60,
      this.radius,
      0,
      Math.PI * 2
    );
    c.fillStyle = "white";
    c.fill();
    c.closePath();
  }
}
class PowerUp {
  constructor({ position }) {
    this.position = position;
    this.radius = 8;
  }
  draw() {
    c.beginPath();
    c.arc(
      innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,
      this.position.y + 60,
      this.radius,
      0,
      Math.PI * 2
    );
    c.fillStyle = "white";
    c.fill();
    c.closePath();
  }
}
class Ghost {
  constructor({ position,speed, velocity, color, scared, prevCollisions }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.color = color;
    this.prevCollisions = [];
    this.speed = ghostSpeed;
    this.scared = false;
    this.flash = false;
  }
  draw() {
    c.beginPath();
    c.arc(innerWidth / 2 - (maps[0][0].length * 40) / 2 + this.position.x,this.position.y + 60,this.radius,0,Math.PI * 2);
    c.fillStyle = (this.scared && !this.flash )? "blue" : this.color;
    c.fill();
    c.closePath();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
class Level {
  constructor({levelNb,map,nbOfGhosts,eatenGhost,nextLevel,life}) {
    this.levelNb = levelNb;
    this.map = map;
    this.nbOfGhosts = nbOfGhosts;
    this.eatenGhost = new Ghost({
      position: {
        initial_x: 460 ,
        initial_y: 300 , 
      },
      velocity: {
        initial_x: 0,
        initial_y: 0,
      },
      color: 'red',
      speed: ghostSpeed,
      scared: false,
      prevCollisions: [],      
    });
    this.nextLevel = false;
    this.life = life;
    this.colors = ["red","cyan","Magenta","lime","lime","brown","Maroon","red","yellow","black"];
    this.boundaries = [];
    this.collisions = [];
    this.pellets = [];
    this.remainPellets = [];
    this.powerUps = [];
    this.sound = new Audio();
    this.sound.src="./audio/main.mp3";
    this.keys = {
      w: {
        pressed: false,
      },
      a: {
        pressed: false,
      },
      s: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
    };
    this.ghosts = [];
    this.ghostArray = [
      new Ghost({
        position: {
           //x: 460, //Boundary.width * 11 + Boundary.width / 2,
           //y: 300,     //  Boundary.height * 7 + Boundary.height / 2,
          initial_x: 460 , //Boundary.width * 11 + Boundary.width / 2,
          initial_y: 300 , //Boundary.height * 7 + Boundary.height / 2,
        },
        velocity: {
            // x: ghostSpeed,
            // y: 0,
            initial_x: ghostSpeed,
            initial_y: 0,
        },   
        color: colors[0],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
         // x: Boundary.width * 12 + Boundary.width / 2,
         // y: Boundary.height * 7 + Boundary.height / 2,
          initial_x: Boundary.width * 12 + Boundary.width / 2,
          initial_y: Boundary.height * 7 + Boundary.height / 2,
        },
        velocity: {
          // x: 0,
          // y: -ghostSpeed,
          initial_x: 0,
          initial_y: -ghostSpeed,
        },   
        color: colors[1] ,
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
          //x: Boundary.width * 13 + Boundary.width / 2,
          //y: Boundary.height * 7 + Boundary.height / 2,
          initial_x: Boundary.width * 13 + Boundary.width / 2,
          initial_y: Boundary.height * 7 + Boundary.height / 2,
        },
        velocity: {
          //x: -ghostSpeed,
          //y: 0,
          initial_x: -ghostSpeed,
          initial_y: 0,
        },   
        color: colors[2],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
         // x: Boundary.width * 12 + Boundary.width / 2,
         // y: Boundary.height * 6 + Boundary.height / 2,
          initial_x: Boundary.width * 12 + Boundary.width / 2,
          initial_y: Boundary.height * 6 + Boundary.height / 2,
        },
        velocity: {
          //x: 0,
          //y: -ghostSpeed,
          initial_x: 0,
          initial_y: -ghostSpeed,
        },   
        color: colors[3],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
          //x: Boundary.width * 4 + Boundary.width / 2,
          //y: Boundary.height + Boundary.height / 2,
          initial_x: Boundary.width * 4 + Boundary.width / 2,
          initial_y: Boundary.height + Boundary.height / 2,
        },
        velocity: {
          //x: 0,
         // y: ghostSpeed,
          initial_x: 0,
          initial_y: ghostSpeed,
        },   
        color: colors[4],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
          //x: Boundary.width * 20 + Boundary.width / 2,
          //y: Boundary.height + Boundary.height / 2,
          initial_x: Boundary.width * 20 + Boundary.width / 2,
          initial_y: Boundary.height + Boundary.height / 2,
        },
        velocity: {
          //x: 0,
          //y: ghostSpeed,
          initial_x: 0,
          initial_y: ghostSpeed,
        },   
        color: colors[5],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
          //x: Boundary.width + Boundary.width / 2,
          //y: Boundary.height * 8 + Boundary.height / 2,
          initial_x: Boundary.width + Boundary.width / 2,
          initial_y: Boundary.height * 8 + Boundary.height / 2,
        },
        velocity: {
          //x: ghostSpeed,
          //y: 0,
          initial_x: ghostSpeed,
          initial_y: 0,
        },   
        color: colors[6],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      }),
      new Ghost({
        position: {
          //x: Boundary.width * 23 + Boundary.width / 2,
          //y: Boundary.height * 8 + Boundary.height / 2,
          initial_x: Boundary.width * 23 + Boundary.width / 2,
          initial_y: Boundary.height * 8 + Boundary.height / 2,
        },
        velocity: {
          //x: -ghostSpeed,
          //y: 0,
          initial_x: -ghostSpeed,
          initial_y: 0,
        },   
        color: colors[7],
        scared: false,
        speed: ghostSpeed,
        prevCollisions: []
      })
    ] 
    this.player = [
      new Player({
        position: {
          x: Boundary.width * 12 + Boundary.width / 2,
          y: Boundary.height * 11 + Boundary.height / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
      }),
    ];
    for (let i = 0; i < this.life; i++) {
      this.player.push(
        new Player({
          position: {
            x: Boundary.width + Boundary.width / 2 + 40 * i,
            y: 13 * Boundary.height + Boundary.height / 2,
          },
          velocity: {
            x: 0,
            y: 0,
          },
        })
      );
    }
  }
  reset() {
    this.player[0].position = {
      x: Boundary.width * 12 + Boundary.width / 2,
      y: Boundary.height * 11 + Boundary.height / 2,
    };
    this.player[0].velocity = {
      x: 0,
      y: 0,
    };
    this.player[0].rotation = 0;
    this.ghosts = [];
    this.collisions = [];
       
    for(var i = 0 ; i < levels[levelNb].nbOfGhosts; i++)
    {
       this.ghosts[i] = this.ghostArray[i];
    }

   this.ghosts.forEach(ghost => {
       ghost.position.x = ghost.position.initial_x;
       ghost.position.y = ghost.position.initial_y;
       ghost.velocity.x = 0;
       ghost.velocity.y = 0;      
    })
    
    this.ghosts.forEach(ghost =>{
        setTimeout(()=>{
        ghost.velocity.x = ghost.velocity.initial_x;
        ghost.velocity.y = ghost.velocity.initial_y;
       }, 1500)
    })
  }
     
}

let colors = ["red","cyan","Magenta","lime","brown","Maroon","red","yellow","black"];
/* let ghostArray = [
  new Ghost({
    position: {
       //x: 460, //Boundary.width * 11 + Boundary.width / 2,
       //y: 300,     //  Boundary.height * 7 + Boundary.height / 2,
      initial_x: 460 , //Boundary.width * 11 + Boundary.width / 2,
      initial_y: 300 , //Boundary.height * 7 + Boundary.height / 2,
    },
    velocity: {
        x: ghostSpeed,
        y: 0,
        initial_x: ghostSpeed,
        initial_y: 0,
    },   
    color: colors[0],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
     // x: Boundary.width * 12 + Boundary.width / 2,
     // y: Boundary.height * 7 + Boundary.height / 2,
      initial_x: Boundary.width * 12 + Boundary.width / 2,
      initial_y: Boundary.height * 7 + Boundary.height / 2,
    },
    velocity: {
      x: 0,
      y: -ghostSpeed,
      initial_x: 0,
      initial_y: -ghostSpeed,
    },   
    color: colors[1] ,
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
      //x: Boundary.width * 13 + Boundary.width / 2,
      //y: Boundary.height * 7 + Boundary.height / 2,
      initial_x: Boundary.width * 13 + Boundary.width / 2,
      initial_y: Boundary.height * 7 + Boundary.height / 2,
    },
    velocity: {
      //x: -ghostSpeed,
      //y: 0,
      initial_x: -ghostSpeed,
      initial_y: 0,
    },   
    color: colors[2],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
     // x: Boundary.width * 12 + Boundary.width / 2,
     // y: Boundary.height * 6 + Boundary.height / 2,
      initial_x: Boundary.width * 12 + Boundary.width / 2,
      initial_y: Boundary.height * 6 + Boundary.height / 2,
    },
    velocity: {
      //x: 0,
      //y: -ghostSpeed,
      initial_x: 0,
      initial_y: -ghostSpeed,
    },   
    color: colors[3],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
      //x: Boundary.width * 4 + Boundary.width / 2,
      //y: Boundary.height + Boundary.height / 2,
      initial_x: Boundary.width * 4 + Boundary.width / 2,
      initial_y: Boundary.height + Boundary.height / 2,
    },
    velocity: {
      //x: 0,
     // y: ghostSpeed,
      initial_x: 0,
      initial_y: ghostSpeed,
    },   
    color: colors[4],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
      //x: Boundary.width * 20 + Boundary.width / 2,
      //y: Boundary.height + Boundary.height / 2,
      initial_x: Boundary.width * 20 + Boundary.width / 2,
      initial_y: Boundary.height + Boundary.height / 2,
    },
    velocity: {
      //x: 0,
      //y: ghostSpeed,
      initial_x: 0,
      initial_y: ghostSpeed,
    },   
    color: colors[5],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
      //x: Boundary.width + Boundary.width / 2,
      //y: Boundary.height * 8 + Boundary.height / 2,
      initial_x: Boundary.width + Boundary.width / 2,
      initial_y: Boundary.height * 8 + Boundary.height / 2,
    },
    velocity: {
      //x: ghostSpeed,
      //y: 0,
      initial_x: ghostSpeed,
      initial_y: 0,
    },   
    color: colors[6],
    scared: false,
    speed: ghostSpeed
  }),
  new Ghost({
    position: {
      //x: Boundary.width * 23 + Boundary.width / 2,
      //y: Boundary.height * 8 + Boundary.height / 2,
      initial_x: Boundary.width * 23 + Boundary.width / 2,
      initial_y: Boundary.height * 8 + Boundary.height / 2,
    },
    velocity: {
      //x: -ghostSpeed,
      //y: 0,
      initial_x: -ghostSpeed,
      initial_y: 0,
    },   
    color: colors[7],
    scared: false,
    speed: ghostSpeed
  })]*/

const levels = [
  new Level({
    levelNb: levelNb,
    map: maps[mapNb],
    nbOfGhosts: nbGhosts,
    life: 2,
    nextLevel: false,  
  })
]

function createImage(src) {
  const image = new Image();
  image.src = src;
  return image;
}

map_1.forEach((row,i)=> {
  row.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        bound.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeHorizontal.png"),
          })
        );
        break;
      case "|":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeVertical.png"),
            })
          );
          break;
      case "1":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner1.png"),
            })
          );
          break;
      case "2":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner2.png"),
            })
          );
          break;
      case "3":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner3.png"),
            })
          );
          break;
      case "4":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner4.png"),
            })
          );
          break;
      case "b":
          bound.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/block.png"),
            })
          );
          break;
      case "[":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capLeft.png"),
            })
          );
          break;
      case "]":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capRight.png"),
            })
          );
          break;
      case "_":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capBottom.png"),
            })
          );
          break;
      case "^":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capTop.png"),
            })
          );
          break;
      case "+":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipeCross.png"),
            })
          );
          break;
      case "5":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorTop.png"),
            })
          );
          break;
      case "6":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorRight.png"),
            })
          );
          break;
      case "7":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorBottom.png"),
            })
          );
          break;
      case "8":
          bound.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipeConnectorLeft.png"),
            })
          );
          break;
    }
  })
})

levels[levelNb].map.forEach((row, i) => {
  row.forEach((symbol, j) => {
    switch (symbol) {
      /*
      case "-":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeHorizontal.png"),
          })
        );
        break;
      case "|":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeVertical.png"),
          })
        );
        break;
      case "1":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeCorner1.png"),
          })
        );
        break;
      case "2":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeCorner2.png"),
          })
        );
        break;
      case "3":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeCorner3.png"),
          })
        );
        break;
      case "4":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/pipeCorner4.png"),
          })
        );
        break;
      case "b":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: Boundary.width * j,
              y: Boundary.height * i,
            },
            image: createImage("./img/block.png"),
          })
        );
        break;
      case "[":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/capLeft.png"),
          })
        );
        break;
      case "]":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/capRight.png"),
          })
        );
        break;
      case "_":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/capBottom.png"),
          })
        );
        break;
      case "^":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/capTop.png"),
          })
        );
        break;
      case "+":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/pipeCross.png"),
          })
        );
        break;
      case "5":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            color: "blue",
            image: createImage("./img/pipeConnectorTop.png"),
          })
        );
        break;
      case "6":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            color: "blue",
            image: createImage("./img/pipeConnectorRight.png"),
          })
        );
        break;
      case "7":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            color: "blue",
            image: createImage("./img/pipeConnectorBottom.png"),
          })
        );
        break;
      case "8":
        levels[levelNb].boundaries.push(
          new Boundary({
            position: {
              x: j * Boundary.width,
              y: i * Boundary.height,
            },
            image: createImage("./img/pipeConnectorLeft.png"),
          })
        );
        break;
      */
     case ".":
        levels[levelNb].pellets.push(
          new Pellet({
            position: {
              x: j * Boundary.width + Boundary.width / 2,
              y: i * Boundary.height + Boundary.height / 2,
            },
          })
        );
        break;
      case "p":
        levels[levelNb].powerUps.push(
          new PowerUp({
            position: {
              x: j * Boundary.width + Boundary.width / 2,
              y: i * Boundary.height + Boundary.height / 2,
            },
          })
        );
        break;
    }
  });
});

function circleCollidesWithRectangle({ circle, rectangle }) {
  const padding = Boundary.width / 2 - circle.radius - 1;

  return (
    circle.position.y - circle.radius + circle.velocity.y <=
      rectangle.position.y + rectangle.height + padding &&
    circle.position.x + circle.radius + circle.velocity.x >=
      rectangle.position.x - padding &&
    circle.position.y + circle.radius + circle.velocity.y >=
      rectangle.position.y - padding &&
    circle.position.x - circle.radius + circle.velocity.x <=
      rectangle.position.x + rectangle.width + padding
  );
}

function drawGameOver() {
  c.font = "70px Impact";
  c.textAlign = "center";
  c.fillStyle = "whiteBlue";
  c.fillText("GAME OVER", innerWidth / 2, innerHeight / 2);
  c.fillStyle = "white";
  c.fillText("GAME OVER", canvas.width / 2 + 2, canvas.height / 2 + 2);
  c.font = "50px Impact";
  c.fillStyle = "white";
  c.fillText(
    "Your score is : " + score,
    canvas.width / 2 + 2,
    canvas.height / 2 + 70
  );
  c.fillStyle = "white";
  c.fillText(
    "Your score is : " + score,
    canvas.width / 2 + 2,
    canvas.height / 2 + 72
  );
}

function drawYouWin() {
  c.font = "50px Impact";
  c.textAlign = "center";
  c.fillStyle = "blue";
  c.fillText("You Win!", canvas.width / 2, canvas.height / 2);
  c.fillStyle = "white";
  c.fillText("You Win!", canvas.width / 2 + 2, canvas.height / 2 + 2);
}

function drawScore() {
  c.textAlign = "center";
  c.fillStyle = "white";
  c.font = "25px Impact";
  c.fillText("Score " + score, innerWidth / 2, Boundary.height);
  c.fillStyle = "white";
  c.fillText(`Level ${levelNb+1} `, innerWidth / 2 - 420, Boundary.height);
  c.fillStyle = "white";
  c.fillText("HighScore " + score, innerWidth / 2 + 400, Boundary.height);
}

function ghostInitialPosition() {
  levels[levelNb].eatenGhost.prevCollisions = [] ;
  levels[levelNb].eatenGhost.scared = false ;
  levels[levelNb].ghosts.push(levels[levelNb].eatenGhost) ;
  let ghost = levels[levelNb].ghosts[levels[levelNb].ghosts.length - 1] ;
  ghost.prevCollisions = [];
  ghost.position.x = ghost.position.initial_x;
  ghost.position.y = ghost.position.initial_y;
  ghost.velocity.x = 0;
  ghost.velocity.y = 0;
  setTimeout( () => {
    ghost.velocity.x = ghost.velocity.initial_x;
    ghost.velocity.y = ghost.velocity.initial_y;
  }, 4000);
}

function drawReady() {
  c.textAlign = "center";
  c.fillStyle = "white";
  c.font = "75px Impact";
  c.fillText("READY!", innerWidth / 2, innerHeight / 2);
}

function ghostFlash() {
  var i = 0,
  initialColors = [];
  for (var i = 0; i < levels[levelNb].ghosts.length; i++) {
    initialColors[i] = levels[levelNb].colors[i];
  }
  var colors = [];
  // Create a function to flash the ghost.
  function flash() {
    levels[levelNb].ghosts.forEach((ghost, k = 0) => {
      //ghost.scared = true;
      ghost.flash = true;
      colors = [initialColors[k], "white"];
      ghost.color = colors[i];
      k++;
    });
    i = (i + 1) % colors.length;
  }
let myInterval ;
  // Set a timer to call the flash function every second.
  if(!levels[levelNb].nextLevel){
     myInterval = setInterval (flash, 300) ;
  }else{
    levels[levelNb].ghosts.forEach((ghost) => {
      ghost.flash = false;
      ghost.scared = false;
    });
  }
    
  setTimeout( () => {
    clearInterval(myInterval);
    levels[levelNb].ghosts.forEach((ghost, j = 0) => {
      ghost.flash = false;
      ghost.scared = false;
      ghost.color = levels[levelNb].colors[j];
      j++;
    });
  }, 3000);

}

let animationID;

function animate() {
  var p = 0 ;
  animationID = requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  levels[levelNb].sound.play();

  levels[levelNb].player.forEach((player) => {
    player.draw();
  });
  levels[levelNb].player[p].update();

  if (levels[levelNb].keys.w.pressed && lastKey === "w") {
    for (let i = 0; i < bound.length; i++) {
      const boundary = bound[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...levels[levelNb].player[p],
            velocity: {
              x: 0,
              y: -5,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].player[p].velocity.y = 0;
        break;
      } else {
        levels[levelNb].player[p].velocity.y = -5;
      }
    }
  } else if (levels[levelNb].keys.a.pressed && lastKey === "a") {
    for (let i = 0; i < bound.length; i++) {
      const boundary = bound[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...levels[levelNb].player[p],
            velocity: {
              x: -5,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].player[p].velocity.x = 0;
        break;
      } else {
        levels[levelNb].player[p].velocity.x = -5;
      }
    }
  } else if (levels[levelNb].keys.s.pressed && lastKey === "s") {
    for (let i = 0; i < bound.length; i++) {
      const boundary = bound[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...levels[levelNb].player[p],
            velocity: {
              x: 0,
              y: 5,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].player[p].velocity.y = 0;
        break;
      } else {
        levels[levelNb].player[p].velocity.y = 5;
      }
    }
  } else if (levels[levelNb].keys.d.pressed && lastKey === "d") {
    for (let i = 0; i < bound.length; i++) {
      const boundary = bound[i];
      if (
        circleCollidesWithRectangle({
          circle: {
            ...levels[levelNb].player[p],
            velocity: {
              x: 5,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].player[p].velocity.x = 0;
        break;
      } else {
        levels[levelNb].player[p].velocity.x = 5;
      }
    }
  }

  // detect collision between ghosts and player

 /* for (let i = levels[levelNb].ghosts.length - 1; 0 <= i; i--) {
    const ghost = levels[levelNb].ghosts[i];
    //ghost touch player
    if (
      Math.hypot(
        ghost.position.x - levels[levelNb].player[p].position.x,
        ghost.position.y - levels[levelNb].player[p].position.y
      ) <
      ghost.radius + levels[levelNb].player[p].radius
    ) {
      if (ghost.scared) {
        levels[levelNb].eatenGhost = levels[levelNb].ghosts[i];
        levels[levelNb].ghosts.splice(i, 1);
        score += 100;
        ghostInitialPosition();
      } else {
          levels[levelNb].sound.pause();
          levels[levelNb].player[0].sound.play();
        if (levels[levelNb].life === 0) {
          cancelAnimationFrame(animationID);
          setTimeout(() => {
            drawGameOver();
          }, 500);
        } else {
          levels[levelNb].remainPellets = levels[levelNb].pellets;          
          cancelAnimationFrame(animationID);
          setTimeout(() => {
            resetLevel();
          }, 1000);
        }
      }
    }
  } */

  //power ups go
 /*
  for (let i = levels[levelNb].powerUps.length - 1; 0 <= i; i--) {
    const powerUp = levels[levelNb].powerUps[i];
    powerUp.draw();

    // player collide with powerUp
    if (
      Math.hypot(
        powerUp.position.x - levels[levelNb].player[p].position.x,
        powerUp.position.y - levels[levelNb].player[p].position.y
      ) <
      powerUp.radius + levels[levelNb].player[p].radius
    ) {
      levels[levelNb].powerUps.splice(i, 1);

      levels[levelNb].ghosts.forEach( (ghost) => {       
        ghost.scared = true;
        setTimeout(() => {
          //ghostFlash();
          ghost.scared = false;
          //ghost.flash = true;
        }, 7000);
      });
    }
  }  */ 

  //powerUps go here 
    levels[levelNb].powerUps.forEach((powerUp,  i = powerUp.index) => {
      powerUp.draw();

      // player collide with powerUp
    if (
      Math.hypot(
        powerUp.position.x - levels[levelNb].player[p].position.x,
        powerUp.position.y - levels[levelNb].player[p].position.y
      ) <
      powerUp.radius + levels[levelNb].player[p].radius
    ) {      
      levels[levelNb].powerUps.splice(i,1);
      levels[levelNb].ghosts.forEach( (ghost) => {       
        ghost.scared = true;
        setTimeout(() => {
          //ghostFlash();
          ghost.scared = false;
          //ghost.flash = true;
        }, 7000);
      });
    }

  }) 

  // touch pellets her
  for (let i = levels[levelNb].pellets.length - 1; 0 <= i; i--) {
    //const pellet

    const pellet = levels[levelNb].pellets[i];

    pellet.draw();
    if (
      Math.hypot(
        pellet.position.x - levels[levelNb].player[p].position.x,
        pellet.position.y - levels[levelNb].player[p].position.y
      ) <
      pellet.radius + levels[levelNb].player[p].radius
    ) {
      levels[levelNb].pellets.splice(i, 1);
      score += 10;
    }
  }

  drawScore();

  bound.forEach((boundary) => {
    boundary.draw();
    if (
      circleCollidesWithRectangle({
        circle: levels[levelNb].player[p],
        rectangle: boundary,
      })
    ) {
      levels[levelNb].player[p].velocity.x = 0;
      levels[levelNb].player[p].velocity.y = 0;
    }
  });

  // win condition
  if (levels[levelNb].pellets.length === 0 || levels[levelNb].powerUps.length === 0) {
    if (levelNb === levels.length || levelNb === 9) {
      winCondition = true;     
      cancelAnimationFrame(animationID);
      levels[levelNb].sound.pause();
      drawYouWin();    
    } else {
      cancelAnimationFrame(animationID);
      levels[levelNb].sound.pause();      
      setTimeout(() => {
        loadNextLevel();
      }, 3000);
    }
  }

  levels[levelNb].ghosts.forEach((ghost, i = ghost.index) => {
    ghost.update();
    //ghost touch player
    if (
      Math.hypot(
        ghost.position.x - levels[levelNb].player[p].position.x,
        ghost.position.y - levels[levelNb].player[p].position.y
      ) <
        ghost.radius + levels[levelNb].player[p].radius //&& !ghost.scared 
     )          
     //{
    //   if (levels[levelNb].life === 0) {
    //     cancelAnimationFrame(animationID);
    //     setTimeout(() => {
    //       drawGameOver();
    //     }, 500);
    //   } else {
    //     levels[levelNb].remainPellets = levels[levelNb].pellets;
    //     cancelAnimationFrame(animationID);
    //     setTimeout(() => {
    //       resetLevel();
    //     }, 1000);
    //   }
    // }
    {
      if (ghost.scared) {
         levels[levelNb].eatenGhost = ghost ; 
         levels[levelNb].ghosts.splice(i, 1);         
         score += 100;
         ghostInitialPosition();
      } else {
          levels[levelNb].sound.pause();
          levels[levelNb].player[0].sound.play();
        if (levels[levelNb].life === 0) {
          cancelAnimationFrame(animationID);
          setTimeout(() => {
            drawGameOver();
          }, 500);
        } else {
          levels[levelNb].remainPellets = levels[levelNb].pellets;
          
          cancelAnimationFrame(animationID);
          setTimeout(() => {
            resetLevel();
          }, 1000);
        }
      }
    }
    
    //const collisions = [];
     levels[levelNb].collisions = []; 
    bound.forEach((boundary) => {
      if (
        !levels[levelNb].collisions.includes("right") &&
        circleCollidesWithRectangle({
          circle: {
            ...ghost,
            velocity: {
              x: ghostSpeed,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].collisions.push("right");
      }

      if (
        !levels[levelNb].collisions.includes("left") &&
        circleCollidesWithRectangle({
          circle: {
            ...ghost,
            velocity: {
              x: -ghostSpeed,
              y: 0,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].collisions.push("left");
      }

      if (
        !levels[levelNb].collisions.includes("up") &&
        circleCollidesWithRectangle({
          circle: {
            ...ghost,
            velocity: {
              x: 0,
              y: -ghostSpeed,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].collisions.push("up");
      }

      if (
        !levels[levelNb].collisions.includes("down") &&
        circleCollidesWithRectangle({
          circle: {
            ...ghost,
            velocity: {
              x: 0,
              y: ghostSpeed,
            },
          },
          rectangle: boundary,
        })
      ) {
        levels[levelNb].collisions.push("down");
      }
    });

    // if (!ghost.prevCollisions.includes("left") && ghost.prevCollisions.includes("right") && collisions.includes("up") && collisions.includes("down")) {
    //   collisions.push("back");
    // }

    // if (!collisions.includes("right") && collisions.includes("left") && collisions.includes("up") && collisions.includes("down")) {
    //   collisions.push("back");
    // }

    if (!levels[levelNb].collisions.includes("left") && levels[levelNb].collisions.includes("right") && levels[levelNb].collisions.includes("up") && levels[levelNb].collisions.includes("down")) {
      levels[levelNb].collisions.push("back");
    }

    if (!levels[levelNb].collisions.includes("right") && levels[levelNb].collisions.includes("left") && levels[levelNb].collisions.includes("up") && levels[levelNb].collisions.includes("down")) {
      levels[levelNb].collisions.push("back");
    }

    if (levels[levelNb].collisions.length > ghost.prevCollisions.length)
      ghost.prevCollisions = levels[levelNb].collisions;

    if (JSON.stringify(levels[levelNb].collisions) !== JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push("right");
      else if (ghost.velocity.x < 0) ghost.prevCollisions.push("left");
      else if (ghost.velocity.y > 0) ghost.prevCollisions.push("down");
      else if (ghost.velocity.y < 0) ghost.prevCollisions.push("up");
      else if (ghost.velocity.x > 0 && !ghost.prevCollisions.includes("right"))
        ghost.prevCollisions.push("back");
      else if (ghost.velocity.x < 0 && !ghost.prevCollisions.includes("left"))
        ghost.prevCollisions.push("back");

      const pathways = ghost.prevCollisions.filter((collision) => {
        return !levels[levelNb].collisions.includes(collision);
      });

      const direction = pathways[Math.floor(Math.random() * pathways.length)];

      switch (direction) {
        case "down":
          ghost.velocity.y = ghostSpeed;
          ghost.velocity.x = 0;
          break;

        case "up":
          ghost.velocity.y = -ghostSpeed;
          ghost.velocity.x = 0;
          break;

        case "right":
          ghost.velocity.y = 0;
          ghost.velocity.x = ghostSpeed;
          break;

        case "left":
          ghost.velocity.y = 0;
          ghost.velocity.x = -ghostSpeed;
          break;

        case "back":
          ghost.velocity.x = -ghost.velocity.x;
          ghost.velocity.y = 0;
          break;
      }
      ghost.prevCollisions = [];
    }
  });

  if (levels[levelNb].player[p].velocity.x > 0)
    levels[levelNb].player[p].rotation = 0;
  else if (levels[levelNb].player[p].velocity.x < 0)
    levels[levelNb].player[p].rotation = Math.PI;
  else if (levels[levelNb].player[p].velocity.y > 0)
    levels[levelNb].player[p].rotation = Math.PI / 2;
  else if (levels[levelNb].player[p].velocity.y < 0)
    levels[levelNb].player[p].rotation = Math.PI * 1.5;

} //end of animate

function loadNextLevel() 
{ 
  console.log(levels[levelNb].ghosts[0].prevCollisions);
  levelNb++;
 // console.log(levels[levelNb].ghosts[0].prevCollisions);

  if (levelNb < 3) {
    mapNb = 0;
    nbGhosts = 4;
    ghostSpeed = levelNb === 1 ? 1.2 : 1.4;
  } else if (levelNb >= 3 && levelNb < 6) {
    nbGhosts = 5;
    mapNb = 0;
    if (levelNb === 3) {
      ghostSpeed = 1.5;
    } else if (levelNb === 4) {
      ghostSpeed = 1.7;
    } else {
      ghostSpeed = 1.9;
    }
  } else if (levelNb >= 6 && levelNb < 9) {
    mapNb = 0;
    nbGhosts = 6;
    if (levelNb === 6) {
      ghostSpeed = 2;
    } else if (levelNb === 7) {
      ghostSpeed = 2.1;
    } else {
      ghostSpeed = 2.2;
    }
  } else if (levelNb === 9) {
    nbGhosts = 7;
    mapNb = 0;
    ghostSpeed = 2.4;
  } 
  levels.push(
    new Level({
      levelNb: levelNb,
      map: maps[0],
      nbOfGhosts: nbGhosts,
      life: levels[levelNb - 1].life,
      nextLevel: true,
    })
  );

  levels[levelNb].map.forEach( (row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        /*
        case "-":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeHorizontal.png"),
            })
          );
          break;
        case "|":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeVertical.png"),
            })
          );
          break;
        case "1":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner1.png"),
            })
          );
          break;
        case "2":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner2.png"),
            })
          );
          break;
        case "3":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner3.png"),
            })
          );
          break;
        case "4":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/pipeCorner4.png"),
            })
          );
          break;
        case "b":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage("./img/block.png"),
            })
          );
          break;
        case "[":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capLeft.png"),
            })
          );
          break;
        case "]":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capRight.png"),
            })
          );
          break;
        case "_":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capBottom.png"),
            })
          );
          break;
        case "^":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/capTop.png"),
            })
          );
          break;
        case "+":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipeCross.png"),
            })
          );
          break;
        case "5":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorTop.png"),
            })
          );
          break;
        case "6":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorRight.png"),
            })
          );
          break;
        case "7":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: "blue",
              image: createImage("./img/pipeConnectorBottom.png"),
            })
          );
          break;
        case "8":
          levels[levelNb].boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage("./img/pipeConnectorLeft.png"),
            })
          );
          break;
            */
          case ".":
          levels[levelNb].pellets.push(
            new Pellet({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
            })
          );
          break;
        case "p":
          levels[levelNb].powerUps.push(
            new PowerUp({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
            })
          );
          break;
      }
    });
  }); 

  levels[levelNb].reset();
  console.log(levels[levelNb].ghosts[0].prevCollisions);

  // setTimeout(()=>{
  //   levels[levelNb].ghosts.forEach(ghost => {
  //     ghost.velocity.x = ghost.velocity.initial_x;
  //     ghost.velocity.y = ghost.velocity.initial_y;   
  //   })
  // }, 3000)
     
  animate();
  console.log(levels[levelNb].ghosts[0].prevCollisions);
  console.log(levels[levelNb].ghosts[1].prevCollisions);
}

function resetLevel() {
  levels[levelNb].reset();
  
  levels[levelNb].player.splice(levels[levelNb].life, 1)
  levels[levelNb].life--   
 
  levels[levelNb].pellets = levels[levelNb].remainPellets;

  animate();
}

function startGame() {
  drawReady();
  for(var i =0 ; i < levels[levelNb].nbOfGhosts; i++)
  {
     levels[levelNb].ghosts[i] = levels[levelNb].ghostArray[i];
  }
 levels[levelNb].ghosts.forEach(ghost => {
    ghost.position.x = ghost.position.initial_x;
    ghost.position.y = ghost.position.initial_y;
    ghost.velocity.x = 0;
    ghost.velocity.y = 0;    
  })
  setTimeout(()=>{
    levels[levelNb].ghosts.forEach(ghost => {
      ghost.velocity.x = ghost.velocity.initial_x;
      ghost.velocity.y = ghost.velocity.initial_y;   
    })
  }, 1500)
 
  setTimeout(() => {
    animate();
  }, 3000);

}

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      levels[levelNb].keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      levels[levelNb].keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      levels[levelNb].keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      levels[levelNb].keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "w":
      levels[levelNb].keys.w.pressed = false;
      break;
    case "a":
      levels[levelNb].keys.a.pressed = false;
      break;
    case "s":
      levels[levelNb].keys.s.pressed = false;
      break;
    case "d":
      levels[levelNb].keys.d.pressed = false;
      break;
  }
});
