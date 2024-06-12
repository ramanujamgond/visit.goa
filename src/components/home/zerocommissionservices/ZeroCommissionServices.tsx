import ZeroCommissonOta from "./zerocommissonota/ZeroCommissonOta";
import styles from "./zerocommissionservices.module.scss";
import ServicesOffered from "./servicesoffered/ServicesOffered";

const ZeroCommissionServices = () => {
  return (
    <div className={styles.background_pattern}>
      <div className="container">
        <ZeroCommissonOta />
        <ServicesOffered />
      </div>
    </div>
  );
};
export default ZeroCommissionServices;
