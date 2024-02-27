import {
  // Button,
  Speakers,
  Sponsors,
  About,
  GalleryCarousel,
  Hero,
  EventTab,
  Sidelinks,
} from "../../Components";

import style from "./Home.module.scss";

const Home = () => {
  // const backgroundColor = "var(--srijan4-gradient-4)";
  const backgroundColor = "transparent";

  return (
    <main className={style.home}>
      <Sidelinks />
      {/* <h1>Home Page for Srijan 2023</h1>
      <Button type="button" /> */}
      <Hero />
      <About backgroundColor={backgroundColor} />
      <GalleryCarousel />
      <EventTab />
      <Speakers />

      <Sponsors />
    </main>
  );
};

export default Home;
