// import React from "react";
import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events } from "../sections";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="container mx-auto py-8">
        <section id="aboutus" className="py-8">
          <Aboutus />
        </section>

        <section id="events" className="py-8">
          <Events />
        </section>

        <section id="contributors" className="py-8">
          <Contributors />
        </section>

        <section id="faq" className="py-8">
          <FAQ />
        </section>
      </div>
    </>
  );
};

export default Home;
