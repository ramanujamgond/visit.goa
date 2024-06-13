import SearchLocationDatePicker from "../searchlocationdatepicker/SearchLocationDatePicker";
import styles from "./hero.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <div className="container relative h-[100%]">
        <div className="flex items-center justify-center flex-col h-[100%]">
          <div className="text-[54px] font-bold text-[#323232] text-center">
            Discover the wonders of <br />
            <span className="text-[#FF6535]">Bharatstay</span> with us
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
