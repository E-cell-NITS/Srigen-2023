import React from "react";
import styles from "./Comingsoon.module.scss";
import About from "../../Components/About/About";
// import Sponsors from "../Sponsors/Sponsors";
import PreviousSponsors from "../Sponsors/PreviousSponsors";
import { Sidelinks } from "../../Components";

const Comingsoon = () => {
  const backgroundColor = "transparent";
  // const bgColor = "transparent";
  const spanColor = "var(--srijan4-gradient-8)";

  const handleGoToBrochure = () => {
    window.open(
      "https://drive.google.com/file/d/13_UqI2r2NkvjfC_lIkhcehV7pebS5Az3/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className={styles.tophead}>
      <Sidelinks />
      <div className={styles.main_content_comingsoon}>
        <div className={styles.topimg}>
          {/* <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1692642838/SriGen4.0/coming%20soon/sriGen2023_logo-removebg-preview_vxwueo.webp"
            alt=""
          /> */}
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1692721416/SriGen4.0/coming%20soon/6-removebg-preview_bnogvg.webp"
            alt=""
          />
        </div>

        <div className={styles.moveleft}>
          <div className={styles.srigen}>
            <h1>SriGen 23</h1>
          </div>

          <div className={styles.diamond}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1692560567/coming%20soon/Illustration_rc1hsj.svg"
              alt=""
              width={200}
            />
          </div>

          <div className={styles.mirrortxt}>
            <h1>SriGen 23</h1>
          </div>

          <div className={styles.circularring}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1034"
              height="141"
              viewBox="0 0 1034 141"
              fill="none"
            >
              <g>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b621fe" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#1fd1f9" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                <path
                  d="M393.35 2.15479C168.086 9.64281 1 37.1261 1 69.8841C1 108.403 232.021 139.629 517 139.629C801.979 139.629 1033 108.403 1033 69.8841C1033 36.0661 854.926 7.86974 618.604 1.49121"
                  stroke="url(#gradient)"
                  strokeWidth="1.70856"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.comingtranslate}>
        <div className={styles.slidercomingmain}>
          <div className={styles.slidetrackcoming}>
            <div className={styles.individualcomingdiv}>
              <svg width="31" height="31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>

              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>

            <div className={styles.individualcomingdiv}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8099 0.764418L17.7527 9.10263C18.3963 10.9264 19.8796 12.3281 21.7368 12.8676L30.228 15.3344L21.8898 18.2771C20.066 18.9207 18.6643 20.404 18.1248 22.2612L15.658 30.7524L12.7153 22.4142C12.0717 20.5905 10.5884 19.1888 8.73118 18.6492L0.239976 16.1825L8.57819 13.2397C10.4019 12.5961 11.8036 11.1128 12.3432 9.25562L14.8099 0.764418Z"
                  fill="white"
                />
              </svg>
              <h1>COMING SOON</h1>
            </div>
          </div>
        </div>
      </div>
      <About backgroundColor={backgroundColor} />

      {/* <Sponsors bgColor={bgColor} /> */}
      <PreviousSponsors spanColor={spanColor} />

      {/* <div className={styles.tshirtsection}>
        <h1>
          <span id={styles.tshirt_iso}>SriGen</span> <span>T-shirt</span>
        </h1>
        <div className={styles.image_tshirt_holder}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1692716266/SriGen4.0/coming%20soon/WhatsApp_Image_2023-08-22_at_20.25.57-removebg-preview_wkchcf.webp"
            alt="T-Shirt"
          />
        </div>

        <div className={styles.btn_buy_shrigen_tshirt}>
          <button>Order Now</button>
        </div>
      </div> */}

      <div className={styles.srijanlogo_bottom}>
        <div className={styles.logo_parent}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1692819661/SriGen4.0/WhatsApp_Image_2023-08-24_at_01.08.14-removebg-preview_hxy0s0.png"
            alt="SriGen logo"
          />
        </div>
      </div>

      <div className={styles.btnholder_brochure}>
        <button onClick={handleGoToBrochure} className={styles.button_download_bro}>
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Comingsoon;
