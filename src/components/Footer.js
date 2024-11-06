import logo from "@/assets/images/main-logo.png";
import Link from "next/link";
// import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer>
        <section className="footer1">
          <Link href="/">
            <Image
              src={logo.src}
              alt="img-card"
              width={100}
              height={50}
              priority
            />
          </Link>
          <section className="footer2">
            A TO Z SPORTS | POWERED BY CUT EDGE TECHNOLOGY
          </section>
          {/* <nav><Link href="/">Contact us</Link></nav> */}
          <div className="social-media">
            <a href="https://www.facebook.com/cutedgetech">
              <FaFacebookF color="white" />
            </a>
            <a href="https://linkedin.com/company/cutedgetechnology">
              <FaLinkedinIn color="white" />
            </a>

            <a href="https://instagram.com/cutedgetechnology">
              <FaInstagram color="white" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
// export default dynamic(() => Promise.resolve(Footer), { ssr: false });
export default Footer;
