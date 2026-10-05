import { Link } from "react-scroll";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { profile, navLinks, footerServices } from "../data/resumeData";

const socialIcons = [
  { href: profile.social.linkedin, Icon: FaLinkedinIn },
  { href: profile.social.instagram, Icon: FaInstagram },
  { href: profile.social.facebook, Icon: FaFacebookF },
  { href: profile.social.twitter, Icon: FaTwitter },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-border py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <h2 className="font-display text-ink font-semibold text-lg mb-6">
            About Me
          </h2>
          <p className="text-muted">Technology Analyst @ Infosys</p>
          <p className="text-muted">React Native Developer</p>
          <p className="text-muted">IEEE Volunteer</p>

          <h2 className="font-display text-ink font-semibold text-lg mt-8 mb-4">
            Contact Me
          </h2>
          <ul className="flex gap-3">
            {socialIcons.map(({ href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:bg-brand hover:text-white hover:border-brand transition-colors"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-ink font-semibold text-lg mb-6">
            Links
          </h2>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-muted hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-ink font-semibold text-lg mb-6">
            Services
          </h2>
          <ul className="space-y-3 text-muted">
            {footerServices.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-ink font-semibold text-lg mb-6">
            Have a Question?
          </h2>
          <ul className="space-y-4 text-muted">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-brand" />
              <span>{profile.address}</span>
            </li>
            <li className="flex gap-3 items-start">
              <FaPhone className="mt-1 shrink-0 text-brand" />
              <a href={`tel:${profile.phone}`} className="hover:text-brand">
                {profile.phone}
              </a>
            </li>
            {profile.emails.map((email) => (
              <li key={email} className="flex gap-3 items-start">
                <FaEnvelope className="mt-1 shrink-0 text-brand" />
                <a href={`mailto:${email}`} className="hover:text-brand">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-border pt-8 text-muted">
        <p>
          Copyright &copy; {year} All rights reserved | made with{" "}
          <span className="text-brand">&hearts;</span> {profile.name}
        </p>
      </div>
    </footer>
  );
}
