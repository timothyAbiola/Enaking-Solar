import React from 'react'
import Cards from './Cards';
import solar from "../src/assets/solar-installation.svg";
import light from "../src/assets/solar-strret-light.svg"
import cctv from '../src/assets/cctv.svg'
import fence from "../src/assets/electric-fence.svg"
import intercom from "../src/assets/wireless-intercom.svg"
import wiring from "../src/assets/home.svg"

const Offer = () => {
  return (
    <>
      <section className="container-fluid" offer='offer' id='offer'>
        <div className="text-center fs-3 fw-semibold my-5">What We Offer</div>
        <div className="d-flex flex-wrap justify-content-center gap-5">
          <Cards
            text="Solar Installation & Maintenance"
            spant="Our expert team specailizes in seamless sollar panel installation,
          bringing renewable energy to your doorstep with precision and care"
            cardImg={solar}
          />
          <Cards
            text="Solar Street Light"
            spant="We specilaize in seemless solar street light installtioins that illuminte your community with sustainble energy solutions"
            cardImg={light}
          />
          <Cards
            text="CCTV Installation"
            spant="We cover every corner, leaving no blind spots. Protect what matters most with our comprehensive CCTV installation services."
            cardImg={cctv}
          />
          <Cards
            text="Electric Fence"
            spant="Elevate your security game with our electric fence expertise - a formidable barrier that keeps your loved ones and assets shielded from potential threats."
            cardImg={fence}
          />
          <Cards
            text="Wireless Intercom"
            spant="Stay connected seemlessly with our cutting-edge wireless intercom systems. Experience crystal-clear communication within your premises."
            cardImg={intercom}
          />
          <Cards
            text="House Wiring"
            spant="From reliable electrical connections to smart home integration, wer're your trusted prtner in ensuring your home's wiring is both safe and cutting-edge."
            cardImg={wiring}
          />
        </div>
      </section>
    </>
  );
}

export default Offer