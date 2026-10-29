import { useState } from "react";
import type { SectionHeaderProps } from "../../interfaces";
import SectionHeader from "../SectionHeader/SectionHeader";

import styles from "./GallerySection.module.css";
import type { GalleryRoom } from "./RoomCard";
import FilterTabs from "./FilterTabs";
import RoomCard from "./RoomCard";

const ALL = "All";

interface GallerySectionProps {
  header: SectionHeaderProps;
  rooms: GalleryRoom[];
}

const GallerySection = ({ header, rooms }: GallerySectionProps) => {
  const [active, setActive] = useState<string>(ALL);

  const tabs = [ALL, ...rooms.map((room) => room.title)];
  const visibleRooms =
    active === ALL ? rooms : rooms.filter((room) => room.title === active);

  return (
    <section className={styles.section}>
      <SectionHeader {...header} />
      <FilterTabs tabs={tabs} active={active} onChange={setActive} />

      <div className={styles.list}>
        {visibleRooms.map(({ id, ...room }) => (
          <RoomCard key={id} {...room} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;