import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import CopyButton from "../components/CopyButton.jsx";
import SocialLinks from "../components/SocialLinks.jsx";

/** Contact page. Props: profile, socials */
export default function Contact({ profile, socials }) {
  return (
    <>
      <SectionHeading
        as="h1"
        title="Contact"
        intro="Looking for a student developer, an intern, or a collaborator? Send a message and I will reply as soon as I can."
      />

      <div className="contact-grid">
        <section aria-label="Contact details">
          <ul className="details">
            <li>
              <Mail size={20} aria-hidden="true" />
              <div>
                <div className="details__row">
                  <p className="details__label">Email</p>
                  <CopyButton text={profile.email} label="email address" />
                </div>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            <li>
              <Phone size={20} aria-hidden="true" />
              <div>
                <div className="details__row">
                  <p className="details__label">Phone</p>
                  <CopyButton text={profile.phone} label="phone number" />
                </div>
                <p>{profile.phone}</p>
              </div>
            </li>
            <li>
              <MapPin size={20} aria-hidden="true" />
              <div>
                <p className="details__label">Location</p>
                <p>{profile.location}</p>
              </div>
            </li>
          </ul>

          <p className="details__label find">Find me online</p>
          <SocialLinks socials={socials} variant="page" />
        </section>

        <section aria-label="Send a message">
          <ContactForm recipient={profile.email} />
        </section>
      </div>
    </>
  );
}
