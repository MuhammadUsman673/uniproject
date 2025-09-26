import { GraduationCap } from "lucide-react"; // Generic data structure - any filter can have sub-items
export const courseData = {
  "PG Courses": {
    icon: <GraduationCap />,
    subItems: ["MBA", "M.Com", "MCA", "M.Sc", "MA"],
    specializations: {
      MBA: [
        "Finance",
        "Marketing",
        "Human Resources",
        "Operations",
        "International Business",
      ],
      "M.Com": [
        "Advanced Accounting",
        "Financial Management",
        "Taxation",
        "Auditing",
      ],
      MCA: [
        "Software Engineering",
        "Data Analytics",
        "Cloud Computing",
        "AI & Machine Learning",
      ],
    } as { [key: string]: string[] },
  },
  "UG Courses": {
    icon: <GraduationCap />,
    subItems: [
      "BBA",
      "B.Com",
      "BCA",
      "BAJMC",
      "BBA in Business...",
      "BBA - ACCA",
      "Distance BCom",
      "Online BA",
    ],
    specializations: {
      BBA: [
        "Financial Management",
        "Banking And Insurance",
        "Digital Marketing",
        "Entrepreneurship",
        "Hospital Management",
      ],
      "B.Com": [
        "Accounting & Finance",
        "Banking & Insurance",
        "Taxation",
        "Corporate Accounting",
        "Business Analytics",
      ],
      BCA: [
        "Software Development",
        "Data Science",
        "Cyber Security",
        "Web Development",
        "Mobile App Development",
      ],
      BAJMC: [
        "Print Journalism",
        "Electronic Media",
        "Advertising",
        "Public Relations",
        "Digital Media",
      ],
    } as { [key: string]: string[] },
  },
  "Executive Programs": {
    icon: <GraduationCap />,
    subItems: [
      "Leadership Development",
      "Strategic Management",
      "Digital Transformation",
      "Project Management",
    ],
    specializations: {
      "Leadership Development": [
        "Executive Coaching",
        "Team Leadership",
        "Change Management",
      ],
      "Strategic Management": [
        "Business Strategy",
        "Corporate Planning",
        "Market Analysis",
      ],
    } as { [key: string]: string[] },
  },
  Certification: {
    icon: <GraduationCap />,
    specializations: {} as { [key: string]: string[] },
    subItems: [
      "Professional Certificates",
      "Industry Certifications",
      "Skill-based Certifications",
    ],
  },
  "Doctorate/Ph.D": {
    icon: <GraduationCap />,
    specializations: {} as { [key: string]: string[] },
    subItems: [
      "Management",
      "Commerce",
      "Computer Science",
      "Arts & Humanities",
    ],
  },
};
