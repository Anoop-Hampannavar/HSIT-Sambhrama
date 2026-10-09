export interface CoordinatorContact {
  name: string;
  phone?: string;
  role?: string;
}

export interface EventCoordinators {
  event: string;
  contacts: CoordinatorContact[];
}

export const eventCoordinators: EventCoordinators[] = [
  {
    event: "Inauguration (Flex & Flash Mob) & Anchoring",
    contacts: [
      { name: "Santosh Kotinatot (ME)", phone: "7676043085" },
      { name: "Onkar Jaganur (EEE)", phone: "9741012245" },
      { name: "Nayan Bongale (ECE)", role: "Anchoring" },
      { name: "Shreyas Upadhye", phone: "9482340883" },
      { name: "Anoop Hampannavar (CSE)" }
    ]
  },
  {
    event: "Food Fest",
    contacts: [
      { name: "Rohit Sankeshwari (ECE)", phone: "8867036321" },
      { name: "Ritika Aparadh", phone: "7259132105" },
      { name: "Megha Sakkappanavar", phone: "8971103175" },
      { name: "Shayamgouda Ningnuri (ECE)" }
    ]
  },
  {
    event: "Mind Games",
    contacts: [
      { name: "Vaishnavi Patil", phone: "8310950175" },
      { name: "Ashwat B.", phone: "9591193066" },
      { name: "Preeti Dhanawadi" }
    ]
  },
  {
    event: "Ramp Walk",
    contacts: [
      { name: "Rakhi Naik (ECE)", phone: "9448746822" },
      { name: "Srushti Humashyal (CSE)", phone: "7019856323" },
      { name: "Pramod Pujari (CSE)", phone: "7795516587" },
      { name: "Karthik Uramratti (ECE)" },
      { name: "Anchan (ECE)" },
      { name: "Nayan Bongale" }
    ]
  },
  {
    event: "Treasure Hunt",
    contacts: [
      { name: "Basavaraj Nerli", phone: "9148699665" },
      { name: "Akash Hiremath", phone: "9663938442" },
      { name: "Sanjana Naddhage", phone: "7204706531" },
      { name: "Amruta Prabhunatti" },
      { name: "Gundu Yandolli" }
    ]
  },
  {
    event: "Box Cricket",
    contacts: [
      { name: "Suraj Huddar (CSE)", phone: "6360696143" },
      { name: "Prateek Dhange (ECE)", phone: "7411505732" },
      { name: "Prashant Anigaddi (Mech)", phone: "9663438577" },
      { name: "Manoj Talawar (EEE)", phone: "6364684229" }
    ]
  },
  {
    event: "Tug of War",
    contacts: [
      { name: "Chetan Mantur (CSE)", phone: "8310209400" },
      { name: "Gundu Yandolli (ECE)", phone: "7380765826" },
      { name: "Vishal Pattar (CSE)", phone: "7619405393" },
      { name: "Ramesh Bastawad (EEE)", phone: "9686048159" }
    ]
  },
  {
    event: "Kannada Habba & Evening Artist Function",
    contacts: [
      { name: "Shyamgouda Ningnuri (ECE)", phone: "8618660605" },
      { name: "Karthik Uramratti (ECE)", phone: "8431439932" },
      { name: "Vishal Pattar (CSE)", phone: "7619405393" }
    ]
  }
];

export const staffCoordinators = [
  "Prof. S. R. Malluramath (Convener)",
  "Prof. S. M. Patil (Convener)",
  "Prof. S. B. Patil (CSE)",
  "Prof. A. U. Neshti (EEE)",
  "Prof. B. P. Khot (ECE)",
  "Prof. P. M. Kokitkar (ME)",
  "Prof. I. N. Kambar (FY)"
];
