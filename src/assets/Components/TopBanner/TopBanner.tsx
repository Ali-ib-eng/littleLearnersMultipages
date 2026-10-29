// src/components/layout/Header/TopBanner/TopBanner.tsx

import { FiArrowRight } from 'react-icons/fi';
import styles from './TopBanner.module.css';
interface TopBannerProps{
  text: string;
  href: string;
}
const TopBanner=({text,href}:TopBannerProps)=>{
  return (
    <div className={styles.topbanner}>
      <a className={styles.banner} href={href}>
      <span className={styles.TopBannerText}>{text}</span>
      <FiArrowRight  size="24px"  color='#262626'  />
    </a>
    </div>
  );
}
export default TopBanner;