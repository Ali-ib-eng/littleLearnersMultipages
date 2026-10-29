import styles from "./FilterTabs.module.css";

interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

const FilterTabs = ({ tabs, active, onChange }: FilterTabsProps) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`${styles.tab} ${tab === active ? styles.active : ""}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;