export const SPEC_LIST: {
  title: string;
  showMore?: boolean;
  link?: string;
  list: { [key: string]: string };
}[] = [
  {
    title: "Exterior",
    list: {
      "Body Style": "Hatchback",
      "Exterior Colour": "Blue",
      Length: "175”",
      Wheelbase: "106”",
      Width: "69.7”",
      "Full Width": "N/A",
      Clearance: "6”",
    },
  },
  {
    showMore: true,
    link: "#",
    title: "Interior",
    list: {
      Seating: "5 adults",
      "Interior Colour": "N/A",
      "Head Room Front": "41”",
      "Head Room Rear": "37”",
      "Leg Room Front": "42”",
      "Leg Room Rear": "33”",
      "Shoulder Room Front": "54”",
    },
  },
  {
    title: "BEV Performance",
    list: {
      Horsepower: "107 hp",
      MPGe: "102",
      "Top Speed": "90 mph",
    },
  },
  {
    showMore: true,
    title: "Charging",
    list: {
      "Electric Range": "73 Mi.",
      "Battery Size": "24 kWh",
      "Cost to charge (full)": "$2.50",
    },
  },
];
