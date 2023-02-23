import lock from "../images/lock.png";
import share from "../images/share.png";
import users from "../images/users.png";
import question from "../images/question.png";
import SubImage from "../images/image 12.png"
import viewsImg1 from "../images/courseImg.png"
import viewsImg2 from "../images/image 13.png"
import waec from "../images/Waec.png"
import jamb from "../images/jamb.png"
import neco from "../images/Neco.png"

export const Card = [
  {
    icon: question,
    title: "Past Questions",
    desc: "Learn past questions in levels and get rewards for it",
  },
  {
    icon: users,
    title: "Stay Motivated",
    desc: "We make the site and content easy for user to understand easily come back",
  },
  {
    icon: lock,
    title: "Engage students",
    desc: "We let students at various levels have access where they can share their success together.",
  },
  {
    icon: share,
    title: "Share the Success",
    desc: "We believe in sharing your success board will encourage others to work toward their own goal",
  },
];

export const FooterLink = [
  {
    path: "/contact",
    label: "Contact us",
  },
  {
    path: "/road-map",
    label: "Road map",
  },
  {
    path: "/suport",
    label: "Support",
  },
];

export const FooterLink2 = [
  {
    path: "/privacy",
    label: "Term and Condition",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/suport",
    label: "Support",
  },
];

export const creditedCourses = [
  {
    image: SubImage,
    subject:' Mathematics',
    path: '#',
  },
  {
    image: SubImage,
    subject:'English',
    path: '#',
  }
]

export const ViewsData = [
  {
    img: viewsImg1,
    subject: "mathematics",
    path: "#",
  },
  {
    img: viewsImg2,
    subject: "english",
    path: "#",
  }
]

export const PathData = [
  {
    img: waec,
    title: "waec",
    desc: "Explore questions from year 2000 - 2021",
  },
  {
    img: jamb,
    title: "jamb",
    desc: "Explore questions from year 2000 - 2021",
  },
  {
    img: neco,
    title: "neco",
    desc: "Explore questions from year 2000 - 2021",
  }
]
