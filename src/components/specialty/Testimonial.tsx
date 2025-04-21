
import React from 'react';
import styles from "@/styles/specialties.module.scss";

const Testimonial = () => {
  return (
    <section className='witSp' style={{minHeight:'10vh'}}>
      <div className={styles.testimonial}>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          This is your Testimonial quote. Use this space to share reviews about you, your services or your business.
        </h3>
        <footer>
          <p className="text-lg font-semibold">Franklin B.</p>
          <p className="text-md">Customer Support</p>
        </footer>
      </div>
    </section>
  );
};

export default Testimonial;
