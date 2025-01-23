import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://randomwordgenerator.com/img/picture-generator/54e9d447425aae14f1dc8460962e33791c3ad6e04e5074417c2f7cd39e4dc4_640.jpg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of creative professionals committed to helping brands
            thrive in the digital space. With expertise in social media
            management, content creation, and audience engagement, we transform
            your online presence into a powerful tool for growth. From designing
            impactful visuals to crafting compelling strategies, we bring
            passion and innovation to every project we take on. Our mission is
            to simplify the complexities of social media while delivering
            measurable results that align with your goals. Whether you’re
            looking to build brand awareness, grow your audience, or boost
            engagement, we’re here to help you stand out and succeed in the
            ever-changing digital landscape.
            <br />
            <br />
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            We specialize in delivering innovative solutions to elevate your
            brand’s digital presence. Our services are tailored to meet your
            needs and drive impactful results:
            <br />
            <br /> - Creative Content Creation
            <br />
            <br /> - Social Media Feed Management
            <br />
            <br /> - Minimal Single Product Campaigns
            <br />
            <br /> - Platform-Specific Strategies
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
