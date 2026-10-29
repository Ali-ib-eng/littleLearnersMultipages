import type { GalleryRoom } from "./RoomCard";

import class1 from "../../images/class1.png";
import class2 from "../../images/class2.png";
import class3 from "../../images/class3.png";
import class4 from "../../images/class4.png";


import library1 from "../../images/library1.png";
import library2 from "../../images/library2.png";
import library3 from "../../images/library3.png";
import library4 from "../../images/library4.png";


import science1 from "../../images/scince1.png";
import science2 from "../../images/scince2.png";
import science3 from "../../images/scince3.png";
import science4 from "../../images/scince3.png";


import computer1 from "../../images/computer1.png";
import computer2 from "../../images/computer2.png";
import computer3 from "../../images/computer3.png";
import computer4 from "../../images/computer4.png";


import garden1 from "../../images/garden1.png";
import garden2 from "../../images/garden2.png";
import garden3 from "../../images/garden3.png";
import garden4 from "../../images/garden4.png";


export const GALLERY_HEADER = {
  badge: "Our Gallery",
  title: "Our Rooms Gallery",
  description:
    "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
};

export const GALLERY_ROOMS: GalleryRoom[] = [
  {
    id: 1,
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [class1, class2, class3, class4],
  },
  {
    id: 2,
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [library1, library2, library3, library4],
  },
  {
    id: 3,
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [science1, science2, science3, science4],
  },
  {
    id: 4,
    title: "Computer Lab",
    description:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    images: [computer1, computer2, computer3, computer4],
  },
  {
    id: 5,
    title: "Garden and Nature Area",
    description:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [garden1, garden2, garden3, garden4],
  },
];