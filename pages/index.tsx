import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import ServicesStats from "@/components/ServicesStats";
import TeamExperts from "@/components/TeamExperts";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varentra - Discovering The Hidden Futures</title>
        <meta name="description" content="Empowering Progress Through Intelligent Solutions" />
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
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>REDEFINING HEALTHCARE</span>
            <h1 className={styles.title}>Discovering The Hidden <br/>Futures.</h1>
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
                <Image src="/icons/tech-consulting.svg" alt="Technology Consulting" width={32} height={32} />
              </div>
              <h3>Technology Consulting</h3>
              <p>Expertise in IT consultancy for the many companies, for their different working areas.</p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image src="/icons/cloud-security.svg" alt="Cloud solutions & IT security" width={32} height={32} />
              </div>
              <h3>Cloud solutions & IT security</h3>
              <p>Expertise in cloud solutions and IT security for various companies in different sectors.</p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image src="/icons/software-dev.svg" alt="Software Development" width={32} height={32} />
              </div>
              <h3>Software Development</h3>
              <p>Expertise in custom software development for diverse businesses across various sectors.</p>
            </a>

            <a href="#" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Image src="/icons/business-process.svg" alt="Business process solutions" width={32} height={32} />
              </div>
              <h3>Business process solutions</h3>
              <p>Expertise in optimizing business processes for companies across multiple industries.</p>
            </a>

          </div>
        </section>

        <section className={styles.whoWeBring}>
          <div className={styles.whoWeBringContent}>
            <span className={styles.sectionTag}>WHO WE BRING</span>
            <h2 className={styles.sectionTitle}>
              Exclusive Technology<br />
              to Provide IT Solutions<br />
              & Services
            </h2>
            <p className={styles.sectionDescription}>
              We have over 20+ years of experience in all stages of software design,
              development, maintenance, and support.
            </p>

            <div className={styles.servicesList}>
              <div className={styles.servicesColumn}>
                <div className={styles.serviceItem}>
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} />
                  <span>IT Professional services</span>
                </div>
                <div className={styles.serviceItem}>
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} />
                  <span>Managed IT services</span>
                </div>
              </div>
              <div className={styles.servicesColumn}>
                <div className={styles.serviceItem}>
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} />
                  <span>Application Development services</span>
                </div>
                <div className={styles.serviceItem}>
                  <Image src="/icons/check.svg" alt="check" width={20} height={20} />
                  <span>Maintenance And Support</span>
                </div>
              </div>
            </div>

            <p className={styles.sectionDescription}>
              Our teams know how to harness the power of data, artificial intelligence,
              modernising core, optimising and automating operations to achieve
              your business goals.
            </p>

            <div className={styles.ctaSection}>
              <button className={styles.moreAboutUs}>
                MORE ABOUT US
                <Image src="/icons/arrow-right.svg" alt="arrow" width={16} height={16} />
              </button>
              
            </div>
          </div>
          <div className={styles.whoWeBringImage}>
            <div className={styles.bannerImage}>
              <Image
                src="/cta-banner.jpg"
                alt="Team Banner"
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.maskImage}>
              <Image
                src="/cta-mask.png"
                alt="Team Mask"
                fill
                priority
                style={{ objectFit: 'contain' }}
              />
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
              priority
              style={{ objectFit: 'cover' }}
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
