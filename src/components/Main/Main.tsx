import { Ecosystem } from "../Ecosystem/Ecosystem";
import { Footer } from "../Footer/Footer";
import { HypothesesOnTheFuture } from "../HypothesesOnTheFuture/HypothesesOnTheFuture";
import { LandOfWisdom } from "../LandOfWisdom/LandOfWisdom";
import { News } from "../News/News";
import { OurMission } from "../OurMission/OurMission";
import { OurProjects } from "../OurProjects/OurProjects";
import { WhyIsItImportant } from "../WhyIsItImportant/WhyIsItImportant";
import { WriteToUs } from "../WriteToUs/WriteToUs";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles["main"]}>
      <LandOfWisdom />
      <OurMission />
      <WhyIsItImportant />
      <HypothesesOnTheFuture />
      <OurProjects />
      <Ecosystem />
      <News />
      <WriteToUs />
      <Footer />
    </div>
  );
};
