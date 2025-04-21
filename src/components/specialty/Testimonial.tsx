
import React from 'react';
import styles from "@/styles/specialties.module.scss";

const Testimonial = () => {
  return (
    <section className='witSp' style={{minHeight:'10vh'}}>
      <div className={styles.testimonial}>
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-black">
          "s10.ai is a game-changer. Its specialty-specific AI scribe not only streamlines my documentation but also ensures compliant CDI, making my workflow faster, cleaner, and worry-free."
        </h3>
        <footer>
          <p className="text-lg font-semibold text-black">Dr. A. Patel</p>
          <p className="text-md text-gray-700">Internal Medicine</p>
        </footer>
      </div>
    </section>
  );
};

export default Testimonial;
