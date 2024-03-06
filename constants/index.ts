import { UrlObject } from "url";

//About page demo data
export const yourSuccessDemoData = [
  {
    id: 1,
    title: "Dynamic Class and Syllabus Management",
    description:
      "Streamline your academic journey with The Student Diwan, where managing classes, routines, and syllabi is simplified through our intuitive platform, ensuring that educators and students are always in sync.",
  },
  {
    id: 2,
    title: "Efficient Grade and Examination Modules",
    description:
    "Our platform automates and simplifies grading and exam administration, offering a transparent and accessible way for students to track their academic progress and for educators to manage assessments."
  },
  {
    id: 3,
    title: "Robust Department and Event Management",
    description:
    "Organize and coordinate across different departments seamlessly while keeping the school community informed and engaged through our integrated event calendar and notification system."
  },
  {
    id: 4,
    title: "Financial and Fee Management System",
    description:
    "Simplify the complexities of school finance with our integrated system for managing student fees and school expenses, promoting efficiency and financial transparency."
  },
  {
    id: 5,
    title: "Library and Resource Management",
    description:
    "Access a wealth of knowledge through our digital library management system, making it easy for students and educators to find and utilize educational resources effectively."
  },
  {
    id: 6,
    title: "Personalized Noticeboard and Communication Tools",
    description:
    "Keep the educational community connected with personalized announcements and a dynamic communication platform, enhancing collaboration and information sharing."
  },
];

// service page data
export const serviceData = [
  {
    id: 1,
    title: "Swipe & Invest",
    description:
    "Invest effortlessly with the swipe of your card, seamlessly integrating investing into your daily transactions."
  },
  {
    id: 2,
    title: "Savings As You Shop",
    description:
    "Enjoy effortless savings as you shop, making financial growth a natural byproduct of your everyday spending habits."
  },
  {
    id: 3,
    title: "Early Returns, Intant Gratification",
    description:
    "Get returns on your savings even before making significant investments, ensuring your money works for you from the start."
  },
];

interface footerLinks {
  title: string;
  links: { title: string; url: string | object }[];
}

// Footer links
export const footerLinks = [
  // About
  {
    title: "About",
    links: [
      { title: "About Us", url: "/about" },
      { title: "Our Services", url: "/services" },
      { title: "How It Works", url: "/" },
      { title: "Become a Partner", url: "/" },
    ],
  },
  // Community
  {
    title: "Community",
    links: [
      { title: "Token", url: "/" },
      { title: "Discussion", url: "/" },
      { title: "Voting", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Help Center", url: "/" },
    ],
  },
];

// interface IFooterLinks {
//   title: string;
//   links: {
//     title: string;
//     url: UrlObject;
//   }[];
// }[];

// //footer links
// export const footerLinks: IFooterLinks = [
//   //about
//   {
//     title: "About",
//     links: [
//       { title: "About Us", url: "/" },
//       { title: "Our Services", url: "/" },
//       { title: "How It Works", url: "/" },
//       { title: "Become a Partner ", url: "/" },
//     ],
//   },
//   //Community
//   {
//     title: "Community",
//     links: [
//       { title: "Token", url: "/" },
//       { title: "Discussion", url: "/" },
//       { title: "Voting", url: "/" },
//       { title: "Blog", url: "/" },
//       { title: "Help Center", url: "/" },
//     ],
//   },
// ];
interface IMenuItems {
  label: string;
  link: string;
  key: string;
}

export const menuItems: IMenuItems[] = [
  {
    label: "Home",
    link: "/",
    key: "home",
  },
  {
    label: "About",
    link: "/about",
    key: "about",
  },
  {
    label: "Services",
    link: "/services",
    key: "services",
  },
];
