import SearchLocationDatePicker from "../searchlocationdatepicker/SearchLocationDatePicker";
import styles from "./hero.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source
          src="https://videos.pexels.com/video-files/15456863/15456863-hd_1920_1080_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className={`${styles.content} container relative h-full`}>
        <div className="flex items-center justify-center flex-col h-full">
          <div className="text-[54px] font-bold text-white text-center">
            Experience the Magic of <br /> Traveling with VisitGoa
          </div>

          <div className="text-xl font-normal text-center w-2/4">
            Plan your dream vacation with our AI-enabled travel companion and
            experience the best of India.
          </div>
        </div>
        <div className="container relative">
          <SearchLocationDatePicker />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
