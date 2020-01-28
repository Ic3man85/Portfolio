const projects = [
  {
    id: 1,
    title: "LIRI A Command Prompt App,",
    slug: "nodejs-command-prompt-app",
    category: "Node.js",
    images: [
      {
        id: 1,
        url: "./assets/images/Screenshot (13).png"
      },
      {
        id: 2,
        url: "./assets/images/Screenshot (15).png"
      }
    ],
    github: "https://github.com/Ic3man85/LIRI"
  },
  {
    id: 2,
    title: "Eat Da Burger App,",
    slug: "handlebars-eat-da-burger-app",
    category: "Handlebars, MySql",
    images: [
      {
        id: 1,
        url: "./assets/images/eatdaburger.png"
      }
    ],
    github: "https://github.com/Ic3man85/burger",
    website: "https://intense-thicket-51838.herokuapp.com/"
  },
  {
    id: 3,
    title: "Space Game App",
    slug: "react-space-game-app",
    category: "React",
    images: [
      {
        id: 1,
        url: "./assets/images/space-game1.png"
      },
      {
        id: 2,
        url: "./assets/images/space-game2.png"
      }
    ],
    github: "https://github.com/Ic3man85/Space-Game",
    website: "https://shrouded-shore-95137.herokuapp.com/"
  },
  {
    id: 4,
    title: "Perfect Pub Bar App",
    slug: "jquery-space-game-app",
    category: "JQuery",
    images: [
      {
        id: 1,
        url: "./assets/images/perfectpub.png"
      }
    ],
    github: "https://github.com/d-veazie/PerfectPub-v2",
    website: "https://d-veazie.github.io/PerfectPub-v2/page1.html"
  },
  {
    id: 5,
    title: "Burger Board App",
    slug: "burger-board-app",
    category: "MySql",
    images: [
      {
        id: 1,
        url: "./assets/images/burger-board.png"
      }
    ],
    github: "https://github.com/Ic3man85/burger-board",
    website: "https://burger-board.herokuapp.com/admin"
  },
  {
    id: 6,
    title: "Rec Renter App",
    slug: "rec-renter-app",
    category: "React",
    images: [
      {
        id: 1,
        url: "./assets/images/recrenter1.png"
      },
      {
        id: 2,
        url: "./assets/images/recrenter2.png"
      }
    ],
    github: "https://github.com/Ic3man85/RecRenter",
    website: "https://recrenter.herokuapp.com/"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = projects;
