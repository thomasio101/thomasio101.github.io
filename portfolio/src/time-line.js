import "time-line.css";

export class TimeLineCustomElement {
	header = "Work experience"

  items = [
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
}
