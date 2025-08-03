import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import ServicesStats from "@/components/ServicesStats";
import TeamExperts from "@/components/TeamExperts";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { FiMonitor, FiCloud, FiCode, FiGrid, FiShield } from "react-icons/fi";
import {
  FiActivity, // for AI in healthcare
  FiZap, // for drug discovery acceleration
  FiCpu, // for automation
  FiTarget, // for tailored, precise AI solutions
} from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varentra - Discovering The Hidden Futures</title>
        <meta
          name="description"
          content="Empowering Progress Through Intelligent Solutions"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image
              src="/hero-image.jpg"
              alt="Healthcare Technology"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>REDEFINING HEALTHCARE</span>
            <h1 className={styles.title}>
              Discovering The Hidden <br />
              Futures.
            </h1>
            <p className={styles.description}>
              Empowering progress through intelligent solutions
            </p>
            <button className={styles.readMore}>READ MORE</button>
          </div>
        </section>
        <section className={styles.serviceCardsSection}>
          <div className={styles.serviceCardsGrid}>
            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FiActivity size={32} />
              </div>
              <h3>AI-Powered Healthcare & Drug Discovery Solutions</h3>
              <p>
                Revolutionizing healthcare with cutting-edge AI models and
                automation.
              </p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FiZap size={32} />
              </div>
              <h3>De Novo Drug Design & Discovery</h3>
              <p>
                We develop state-of-the-art de novo drug design models to
                accelerate drug discovery, optimizing molecular generation for
                targeted therapeutics.
              </p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FiCpu size={32} />
              </div>
              <h3>AI-driven Healthcare Automation</h3>
              <p>
                We build custom AI solutions to automate complex healthcare
                processes, from medical diagnostics to hospital management,
                improving efficiency and accuracy.
              </p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <FiTarget size={32} />
              </div>
              <h3>Tailored AI Solutions for Your Needs</h3>
              <p>
                We provide end-to-end AI development, solving unique healthcare
                challenges with intelligent, scalable, and secure AI models.
              </p>
            </a>
          </div>
        </section>
        +
        <section className={styles.whoWeBring}>
          <div className={styles.whoWeBringContainer}>
            <div className={styles.whoWeBringContent}>
              <span className={styles.sectionTag}>WHO WE BRING</span>
              <h2 className={styles.sectionTitle}>
                Exclusive Technology
                <br />
                to Provide IT Solutions
                <br />& Services
              </h2>
              <p className={styles.sectionDescription}>
                We have over 20+ years of experience in all stages of software
                design, development, maintenance, and support.
              </p>

              <div className={styles.servicesList}>
                <div className={styles.servicesColumn}>
                  <div className={styles.serviceItem}>
                    <Image
                      src="/icons/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>IT Professional services</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <Image
                      src="/icons/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>Managed IT services</span>
                  </div>
                </div>
                <div className={styles.servicesColumn}>
                  <div className={styles.serviceItem}>
                    <Image
                      src="/icons/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>Application Development services</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <Image
                      src="/icons/check.svg"
                      alt="check"
                      width={20}
                      height={20}
                    />
                    <span>Maintenance And Support</span>
                  </div>
                </div>
              </div>

              <p className={styles.sectionDescription}>
                Our teams know how to harness the power of data, artificial
                intelligence, modernising core, optimising and automating
                operations to achieve your business goals.
              </p>

              <div className={styles.ctaSection}>
                <button className={styles.moreAboutUs}>
                  MORE ABOUT US
                  <Image
                    src="/icons/arrow-right.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
            <div className={styles.whoWeBringImage}>
              <div className={styles.bannerImage}>
                <Image
                  src="/cta-banner.jpg"
                  alt="Team Banner"
                  fill
                  sizes="100vw"
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.maskImage}>
                <Image
                  src="/cta-mask.png"
                  alt="Team Mask"
                  sizes="100vw"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>
        <ServicesStats />
        <TeamExperts />
        <div className={styles.darkSection}>
          <div className={styles.darkSectionBackground}>
            <Image
              src="/dark-background.jpg"
              alt="Background"
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className={styles.darkOverlay}></div>
          <CTASection />
          <Footer />
        </div>
      </main>
    </>
  );
}
