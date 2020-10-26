import "stylesheet.css";

export class App {
  workExperience = [
    {
      title: "Expert Meijer",
      description: `At Expert Meijer, a local electronics store, I've been developing internal applications
      to increase customer interaction and improve the efficiency of business processes. Here, I learnt to be
      flexible and apply iterative design processes to continually ensure the product aligns with the client's vision.`,
      imageSrc: "expert.png",
      data: [
        {
          label: "Timeframe",
          value: "Summer 2018 - Now",
        },
      ],
    },
    {
      title: "TDM Digital Signage (BlueRed)",
      description: `At BlueRed I was tasked with the initial phase of developing a brand-new product,
      expanding the company into new and diverse markets. Here, I gained valuable experience in developing
      scalable web applications and coordinating with management.`,
      imageSrc: "bluered.png",
      data: [
        {
          label: "Timeframe",
          value: "Summer 2020",
        },
      ],
    },
  ];

  education = [
    {
      title: "Havo (NG / NT)",
      description: `In highschool I graduated with in honors in two subjects; Nature & health and nature & technology.
      Besides these core subjects, I studied the West-Frisian language and got near-perfect grades in English.
      I also took part in some of the school's hackathons which introduced me to various new concepts in software engineering and mechatronics.`,
      imageSrc: "matrix-lyceum.png",
      data: [
        {
          label: "Graduation",
          value: "Summer 2020",
        },
        {
          label: "Grade",
          value: "Cum Laude",
        },
      ],
    },
    {
      title: "BA - Software Engineering",
      description: `I'm currently studying software engineering at the NHL-Stenden university of applied sciences in Leeuwarden,
      though I will consider reducing my time spent on this course to pursue a career.`,
      imageSrc: "nhl-stenden.png",
      data: [
        {
          label: "Enrollment",
          value: "Summer 2020",
        },
      ],
    },
  ];

  frameworks = [
    {
      title: "Aurelia",
      description: `I've used Aurelia to develop a large internal application at Expert Meijer, over the course of developing
      this application I learnt to apply creative thinking and good software engineering principles to increase my productivity to a
      level which is nearly unatainable with other frameworks. Besides this, this portfolio has also been made using Aurelia!`,
      imageSrc: "aurelia.svg",
      data: [
        {
          label: "Demo",
          value: "This portfolio on GitHub",
          url: "https://github.com/thomasio101/thomasio101.github.io/",
        },
      ],
    },
    {
      title: "React",
      description: `Since the addition of React hooks, React has become one of the best frameworks out there.
      I've primarily used React to develop small SPAs, though I've also made my fair share of React apps containing dozens of
      pages, complex business logic and real-time communication with the server. My most complex React project to-date was the
      predecessor of the Aurelia-based internal application at Expert Meijer.`,
      imageSrc: "react.png",
    },
    {
      title: "VueJS",
      description: `Vue was one of the first proper UI frameworks I ever used. Even though I don't use it much anymore,
      I still take it into consideration whenever I start to develop a new application.`,
      imageSrc: "vue.png",
    },
    {
      title: "ASP.NET Core",
      description: `After having used it to build back ends for various applications, I can say the robust ecosystem
      Microsoft has created drastically improves my productivity in developing large CRUD apps, though it does ocassionally make
      me long for the flexibility stacks such as Express with Node provide.`,
      imageSrc: "asp.netCore.png",
    },
    {
      title: "Express",
      description: `Express is by far my most used framework as its middleware-centered architecture enables a gradual development process.
      Besides this, its flexibility allows me to develop apps that cater to very specific needs, without the bloat which frameworks such as
      ASP.NET Core come with.`,
      imageSrc: "express.png"
    }
  ];

  languages = [
    {
      title: "JavaScript"
    },
    {
      title: "TypeScript"
    },
    {
      title: "Python"
    },
    {
      title: "C#"
    },
    {
      title: "Java"
    },
    {
      title: "Dart"
    }
  ]
}
