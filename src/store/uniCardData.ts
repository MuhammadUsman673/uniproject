  export type UniversityCardData = {
    category?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    courses?: any;
    budget?: string;
    universityName: string;
    rating: string;
    reviews: number;
    approvals: string;
    features: string[];
    imageUrl: string;
    logoUrl?: string;
    tag?: string;
    admissionClosing: string;
  };

  export const allUniversityCardsData: UniversityCardData[] = [
    {
      universityName: "Manipal Online University",
      rating: "4.6/5",
      reviews: 178,
      approvals: "AICTE | NAAC | NBA | QS | UGC",
      features: ["No-Cost EMI Available", "Flexible Payment Options"],
      imageUrl: "/images/cambridge.png",
      logoUrl: "/logo/Manipal.svg",
      tag: "Trending",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Jain Online University",
      rating: "4.5/5",
      reviews: 200,
      approvals: "UGC | DEB",
      features: ["Flexible Payment Options"],
      imageUrl: "/images/uni.png",
      logoUrl: "/logo/Manipal.svg",
      tag: "Top Rated by Students",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Amity Online University",
      rating: "4.7/5",
      reviews: 150,
      approvals: "AICTE | NIRF",
      features: ["No-Cost EMI Available"],
      imageUrl: "/images/cambridge.png",
      logoUrl: "/logo/Manipal.svg",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Lovely Professional University",
      rating: "4.4/5",
      reviews: 180,
      approvals: "UGC | WES",
      features: ["Scholarship Available"],
      imageUrl: "/images/uni.png",
      logoUrl: "/logo/Manipal.svg",
      tag: "Popular Choice",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Symbiosis Online",
      rating: "4.8/5",
      reviews: 220,
      approvals: "NAAC | DEB",
      features: ["Guaranteed Placement Assistance"],
      imageUrl: "/images/cambridge.png",
      logoUrl: "/logo/Manipal.svg",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "IGNOU Online",
      rating: "4.3/5",
      reviews: 300,
      approvals: "UGC | AICTE",
      features: ["Government Approved"],
      imageUrl: "/images/uni.png",
      logoUrl: "/logo/Manipal.svg",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Bharati Vidyapeeth",
      rating: "4.2/5",
      reviews: 160,
      approvals: "NIRF | NAAC",
      features: ["Modern Curriculum"],
      imageUrl: "/images/cambridge.png",
      logoUrl: "/logo/Manipal.svg",
      tag: "New Admission",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Sikkim Manipal University",
      rating: "4.0/5",
      reviews: 190,
      approvals: "DEB | UGC",
      features: ["Weekend Classes"],
      imageUrl: "/images/uni.png",
      logoUrl: "/logo/Manipal.svg",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Chandigarh University",
      rating: "4.9/5",
      reviews: 250,
      approvals: "AICTE | QS",
      features: ["Industry Ready Courses"],
      imageUrl: "/images/cambridge.png",
      logoUrl: "/logo/Manipal.svg",
      tag: "Highly Rated",
      admissionClosing: "29 JULY",
    }, // Extra dummy cards for "View More"
    {
      universityName: "Example University 10",
      rating: "4.1/5",
      reviews: 120,
      approvals: "UGC",
      features: ["Flexible Schedule"],
      imageUrl: "/images/uni.png",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Example University 11",
      rating: "4.2/5",
      reviews: 130,
      approvals: "NAAC",
      features: ["Online Library"],
      imageUrl: "/images/cambridge.png",
      admissionClosing: "29 JULY",
    },
    {
      universityName: "Example University 12",
      rating: "4.3/5",
      reviews: 140,
      approvals: "AICTE",
      features: ["Dedicated Mentors"],
      imageUrl: "/images/uni.png",
      admissionClosing: "29 JULY",
    },
  ];