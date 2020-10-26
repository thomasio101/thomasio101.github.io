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
}
