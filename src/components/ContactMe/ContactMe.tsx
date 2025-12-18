import { SectionTitle } from "@components/ui/SectionTitle/SectionTitle";
import styles from "./ContactMe.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "@components/Toast/Toast";

export const ContactMe = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const contactInfo = [
    {
      icon: "ri-map-pin-line",
      title: "Location",
      content: "Mendoza, Argentina",
    },
    {
      icon: "ri-mail-line",
      title: "Email",
      content: "contact@francogonzalez.dev",
    },
    {
      icon: "ri-phone-line",
      title: "Phone",
      content: "+54 261 252 1316",
    },
  ];

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current)
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast({ message: "Mail Sended", type: "success" });
            form.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            toast({ message: "FAILED try again", type: "success" });
          }
        );
  };
  return (
    <section className={`${styles.sectionContactMe}`} id="contact">
      <SectionTitle
        subtitle="Interested in working together? Fill out the form below and I'll get back to you as soon as possible."
        title="Get In Touch"
      />
      <div className={styles.containerInfo}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            flex: 0.8,
          }}
        >
          <div className={styles.info}>
            {/* contact Info */}
            <div className={styles.contact}>
              <h3 className={styles.heading}>Contact Information</h3>
              {contactInfo.map((item) => (
                <div className={styles.itemsInfo}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "rgba(var(--primary-rgb), 10%)" }}
                  >
                    <i className={item.icon} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "bold" }}>{item.title}</h4>
                    <p style={{ color: "var(--textMuted)" }}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <h3 className={styles.heading}>Availability</h3>
              <div className={styles.availability}>
                <p className={styles.paragraph}>
                  I'm currently{" "}
                  <span className={styles.available}>available</span> for new
                  opportunities.
                </p>
                <p className={styles.paragraph}>
                  Looking for remote positions and interesting projects where I
                  can contribute my Full Stack expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
            style={{ width: "100%" }}
          >
            <div className={styles.nameAndEmail}>
              <div className={styles.inputForm}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" name="user_name" />
              </div>
              <div className={styles.inputForm}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" name="user_email" />
              </div>
            </div>
            <div className={styles.inputForm}>
              <label htmlFor="">Subject</label>
              <input type="text" placeholder="Subject" name="Subject" />
            </div>
            <div className={styles.inputForm}>
              <label htmlFor="">Message</label>
              <textarea placeholder="Message" name="message" />
            </div>
            <button className={styles.sendBtn} type="submit">
              Send Mesagge
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
