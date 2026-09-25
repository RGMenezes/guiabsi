import StyleContact from "./contact.module.css";
import Image from "next/image";

interface InitAttrs {
  chanel: string;
  children: React.ReactNode;
}

type contact = ({chanel, children}: InitAttrs) => React.ReactNode;

function initContact(): contact {
  interface IconsTypes {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    discord?: string;
    linkedin?: string;
  }

  const icons: IconsTypes = {
    whatsapp: "/images/social_media/logo_whatsapp.png",
    instagram: "/images/social_media/logo_instagram.png",
    facebook: "/images/social_media/logo_facebook.png",
    discord: "/images/social_media/logo_discord.png",
    linkedin: "/images/social_media/logo_linkedin.png"
  };

  return (({chanel, children}) => (
    <>
      <div className={StyleContact.box}>
        <Image
          src={`${icons[chanel]}`}
          alt={`${chanel}`}
          width={40}
          height={40}
        />
        <span className={StyleContact.data}>{children}</span>
      </div>
    </>
  ));
}

const Contact: contact = initContact();
export default Contact;