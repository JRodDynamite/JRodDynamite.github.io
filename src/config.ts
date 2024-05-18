import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://jsonhere.com/", // replace this with your deployed domain
  author: "Jason Estibeiro",
  desc: "Jason Estibeiro's personal website. Sharing thoughts on technology, software development, and life in general.",
  title: "Jason Estibeiro",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/JRodDynamite",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "StackOverflow",
    href: "https://stackoverflow.com/users/2932244",
    linkTitle: `${SITE.title} on Pinterest`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jroddynamite",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hey@jsonhere.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/JRodDynamite",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
