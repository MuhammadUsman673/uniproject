import {
  ClipboardCheck,
  Facebook,
  Instagram,
  Linkedin,
  PhoneCall,
  X,
  Youtube,
} from "lucide-vue-next";

export const FOOTER_CONFIG = {
  header: {
    title: "Get Clarity with Us!",
    buttons: [
      {
        id: "schedule",
        text: "Schedule Your Call",
        icon: ClipboardCheck,
        variant: "outline" as const,
        className: "bg-transparent",
        path: "/comp",
      },
      {
        id: "call-now",
        text: "Let's Talk Now",
        icon: PhoneCall,
        variant: "default" as const,
        className: "bg-red-600 hover:bg-red-500",
        path: "/pop-up",
      },
    ],
  },
  contact: {
    logos: [
      { src: "/logo/cs.svg", alt: "CS Logo" },
      { src: "/logo/footer-logo.svg", alt: "Footer Logo" },
    ],
    trustpilot: {
      rating: 4.2,
      text: "Trustpilot",
    },
    helpline: "9785-800-008",
    socialMedia: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: X, href: "#", label: "Twitter" },
      { icon: Youtube, href: "#", label: "YouTube" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  },
  navigation: {
    company: {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Terms & Conditions", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "Disclaimer", href: "#" },
        { text: "Blogs", href: "#" },
        {
          text: "Careers ",
          href: "#",
          badge: true,
          badgeText: "We Are Hiring",
        },
      ],
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Top Universities", href: "#" },
        { text: "Experts", href: "#" },
        { text: "Scholarships", href: "#" },
        { text: "Referral", href: "#" },
        { text: "Sitemap", href: "#" },
      ],
    },
  },
  programs: [
    {
      title: "Online MBA",
      items: [
        "Manipal Online University",
        "OP Jindal University",
        "NMIMS Online",
        "Amity University Online",
        "Chandigarh University",
      ],
    },
    {
      title: "Executive MBA",
      items: [
        "NMIMS Online",
        "DY Patil Navi Mumbai",
        "IIM Lucknow",
        "SP Jain",
        "IIM Kozhikode",
      ],
    },
    {
      title: "MCA",
      items: [
        "Amity University Online",
        "Lovely Professional University",
        "Chandigarh University",
        "Mangalayatan University",
        "Sharda University",
      ],
    },
    {
      title: "BBA",
      items: [
        "Amity University Online",
        "NMIMS Online",
        "Chandigarh University",
        "Manipal Online University",
        "Dr. D.Y. Patil Vidyapeeth University Pune",
      ],
    },
    {
      title: "BCom",
      items: [
        "Amity University Online",
        "NMIMS Online",
        "Sikkim Manipal University",
        "Amrita Vishwa Vidyapeetham",
        "Mizoram University",
      ],
    },
    {
      title: "BCA",
      items: [
        "Amity University Online",
        "Chandigarh University",
        "Manipal Online University",
        "Sharda University",
        "Bharati Vidyapeeth",
      ],
    },
    {
      title: "PGDM",
      items: [
        "Welingkar Institute of Management",
        "Goo Institute of Management",
        "MIT Pune",
        "IMT CDI",
        "MDI Gurgaon",
      ],
    },
    {
      title: "DBA",
      items: [
        "Golden Gate University",
        "Westcliff University",
        "Swiss School of Business Management",
        "Edgewood College",
        "Rushford University Online",
      ],
    },
  ],
  specializations: [
    {
      title: "BBA Specialisations",
      items: [
        "Banking and Financial Markets",
        "Business Intelligence and Analytics",
        "Digital Marketing",
        "Human Resource Management (HRM)",
        "Marketing",
      ],
    },
    {
      title: "MBA Specialisations",
      items: [
        "Digital Marketing & E-commerce",
        "Business Intelligence & Analytics",
        "Healthcare Management",
        "Finance",
        "International Business",
      ],
    },
    {
      title: "BCA Specialisations",
      items: [
        "Cyber Security",
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data Analytics",
        "Data Science & Analytics",
        "Cloud Computing",
      ],
    },
    {
      title: "MCA Specialisations",
      items: [
        "Cyber Security & Blockchain",
        "Cloud Computing & IoT",
        "Artificial Intelligence & Data Science",
        "Full Stack Development & DevOps",
        "Mobile Computing & Networking",
      ],
    },
    {
      title: "PGCM Specialisations",
      items: [
        "Business Analytics",
        "Digital Marketing",
        "Project Management",
        "Operations Management",
        "Human Resource Management",
      ],
    },
    {
      title: "PGDM Specialisations",
      items: [
        "Operations Management",
        "Project Management",
        "Human Resource Management",
        "Information Technology Management",
        "Marketing Management",
      ],
    },
    {
      title: "LLM Specialisations",
      items: [
        "Corporate and Financial Law",
        "AI and Emerging Technologies",
        "Intellectual Property and Technology Law",
        "Dispute Resolution",
      ],
    },
    {
      title: "B.Com Specialisations",
      items: [
        "E-commerce",
        "E-Accounting",
        "International Finance & Accounting",
      ],
    },
    {
      title: "M.Com Specialisations",
      items: ["Financial Management", "FinTech"],
    },
    {
      title: "MA Specialisations",
      items: [
        "English",
        "Sociology",
        "Political Science",
        "Education",
        "Psychology",
      ],
    },
    {
      title: "BA Specialisations",
      items: ["English", "Sociology", "Political Science"],
    },
  ],
  legal: {
    disclaimer: "Disclaimer | Terms & Conditions | Our Policy",
    content: `College Sathi aims to provide unbiased and precise information, along with comparative guidance on universities and their programs, to admission aspirants. The content on the College Sathi website—encompassing texts, graphics, images, blogs, videos, and university logos—is intended solely for informational purposes and should not be viewed as a substitute for offerings from academic partners. While we strive for accuracy and present information in good faith, College Sathi makes no warranties regarding the completeness or reliability of the content and will not be liable for any errors, omissions, or resulting damages from its use.`,
    copyright: "© Collegesathi 2025. All Rights Reserved.",
  },
} as const;
