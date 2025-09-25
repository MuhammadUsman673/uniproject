import {
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  PhoneCall,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="container mx-auto text-neutral-200 py-10">
      {/* Header Section */}

      <header className="flex flex-col md:flex-row justify-between rounded-2xl items-center  py-10 px-4 lg:px-10 bg-[#192E50] bg-opacity-90 mx-4 lg:mx-10 ">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="ml-2 text-3xl lg:text-4xl font-semibold">
            Get Clarity with Us!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
          <Button
            size={"lg"}
            variant={"outline"}
            className=" bg-transparent  p-2 rounded flex items-center justify-center"
          >
            <Calendar />
            <span>Schedule Your Call</span>
          </Button>
          <Button
            size={"lg"}
            className="bg-red-600 hover:bg-red-500 p-2 rounded flex items-center justify-center"
          >
            <PhoneCall />
            <span>Let's Talk Now</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-6">
        <div className=" grid lg:grid-cols-3 gap-y-4">
          {/* Trustpilot and Contact */}
          <div className="flex flex-col gap-4  my-6">
            <div className="flex gap-4">
              <div className="border w-fit h-fit text-2xl p-1 rounded-full bg-red-600 font-black text-neutral-200">
                CS
              </div>
              <div className="relative mb-2 w-fit">
                <span className="text-xl lg:text-4xl text-neutral-200">
                  College<strong>sathi</strong>
                </span>
                <span className="absolute -bottom-2 lg:-bottom-3 right-2 text-sm lg:text-lg text-neutral-200">
                  .com
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white w-fit text-black p-2 pr-10 rounded-xl">
              <div className=" text-green-700 text-2xl p-1 rounded">★</div>
              <span className="font-bold  text-3xl">Trustpilot </span>
            </div>

            <div className="flex space-x-2 my-4">
              <a
                href="#"
                className="text-neutral-200  bg-red-600 p-2 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-200  bg-red-600 p-2 rounded-full"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-neutral-200  bg-red-600 p-2 rounded-full"
              >
                <X />
              </a>
              <a
                href="#"
                className="text-neutral-200  bg-red-600 p-2 rounded-full"
              >
                <Youtube />
              </a>
              <a
                href="#"
                className="text-neutral-200  bg-red-600 p-2 rounded-full"
              >
                <Linkedin />
              </a>
            </div>
            <div className=" w-fit  text-white px-4 py-1.5 font-semibold border border-gray-200 rounded-sm relative">
              <span className="absolute -top-3 left-2/6 transform -translate-x-1/2  text-white px-4 py-0.5 rounded-full text-[8px] bg-[#EC1E24] ">
                HELPLINE
              </span>
              9785-800-008
            </div>
          </div>

          {/* Links and Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <hr className="border-red-500 border-2 w-50" />
            <ul className="space-y-3 mt-3">
              <li>
                <a href="#" className="hover:text-neutral-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-green-500">
                  Careers (Hiring)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">Quick Links</h3>
            <hr className="border-red-500 border-2  w-50" />

            <ul className="space-y-3 mt-3">
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Top Universities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Experts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Referral
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-1 my-6 border-b w-full" />

        {/* Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-bold mb-6">Online MBA</h3>
            <ul className=" space-y-3">
              <li>Manipal Online University</li>
              <li>OP Jindal University</li>
              <li>NMIMS Online</li>
              <li>Amity University Online</li>
              <li>Chandigarh University</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Executive MBA</h3>
            <ul className="space-y-3">
              <li>NMIMS Online</li>
              <li>DY Patil Navi Mumbai</li>
              <li>IIM Lucknow</li>
              <li>SP Jain</li>
              <li>IIM Kozhikode</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">MCA</h3>
            <ul className="space-y-3">
              <li>Amity University Online</li>
              <li>Lovely Professional University</li>
              <li>Chandigarh University</li>
              <li>Mangalayatan University</li>
              <li>Sharda University</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">BBA</h3>
            <ul className="space-y-3">
              <li>Amity University Online</li>
              <li>NMIMS Online</li>
              <li>Chandigarh University</li>
              <li>Manipal Online University</li>
              <li>Dr. D.Y. Patil Vidyapeeth University Pune</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">BCom</h3>
            <ul className="space-y-3">
              <li>Amity University Online</li>
              <li>NMIMS Online</li>
              <li>Sikkim Manipal University</li>
              <li>Amrita Vishwa Vidyapeetham</li>
              <li>Mizoram University</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">BCA</h3>
            <ul className="space-y-3">
              <li>Amity University Online</li>
              <li>Chandigarh University</li>
              <li>Manipal Online University</li>
              <li>Sharda University</li>
              <li>Bharati Vidyapeeth</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">PGDM</h3>
            <ul className="space-y-3">
              <li>Welingkar Institute of Management</li>
              <li>Goo Institute of Management</li>
              <li>MIT Pune</li>
              <li>IMT CDI</li>
              <li>MDI Gurgaon</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">DBA</h3>
            <ul className="space-y-3">
              <li>Golden Gate University</li>
              <li>Westcliff University</li>
              <li>Swiss School of Business Management</li>
              <li>Edgewood College</li>
              <li>Rushford University Online</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-1 my-6 border-b w-full" />

        {/* Programs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-autol ">
          <div>
            <h3 className="text-white font-bold mb-6">BBA Specialisations</h3>
            <ul className="space-y-3">
              <li>Banking and Financial Markets</li>
              <li>Business Intelligence and Analytics</li>
              <li>Digital Marketing</li>
              <li>Human Resource Management (HRM)</li>
              <li>Marketing</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">MBA Specialisations</h3>
            <ul className="space-y-3">
              <li>Digital Marketing & E-commerce</li>
              <li>Business Intelligence & Analytics</li>
              <li>Healthcare Management</li>
              <li>Finance</li>
              <li>International Business</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">BCA Specialisations</h3>
            <ul className="space-y-3">
              <li>Cyber Security</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Data Science & Big Data Analytics</li>
              <li>Data Science & Analytics</li>
              <li>Cloud Computing</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">MCA Specialisations</h3>
            <ul className="space-y-3">
              <li>Cyber Security & Blockchain</li>
              <li>Cloud Computing & IoT</li>
              <li>Artificial Intelligence & Data Science</li>
              <li>Full Stack Development & DevOps</li>
              <li>Mobile Computing & Networking</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">PGCM Specialisations</h3>
            <ul className="space-y-3">
              <li>Business Analytics</li>
              <li>Digital Marketing</li>
              <li>Project Management</li>
              <li>Operations Management</li>
              <li>Human Resource Management</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">PGDM Specialisations</h3>
            <ul className="space-y-3">
              <li>Operations Management</li>
              <li>Project Management</li>
              <li>Human Resource Management</li>
              <li>Information Technology Management</li>
              <li>Marketing Management</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">LLM Specialisations</h3>
            <ul className="space-y-3">
              <li>Corporate and Financial Law</li>
              <li>AI and Emerging Technologies</li>
              <li>Intellectual Property and Technology Law</li>
              <li>Dispute Resolution</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">B.Com Specialisations</h3>
            <ul className="space-y-3">
              <li>E-commerce</li>
              <li>E-Accounting</li>
              <li>International Finance & Accounting</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">M.Com Specialisations</h3>
            <ul className="space-y-3">
              <li>Financial Management</li>
              <li>FinTech</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">MA Specialisations</h3>
            <ul className="space-y-3">
              <li>English</li>
              <li>Sociology</li>
              <li>Political Science</li>
              <li>Education</li>
              <li>Psychology</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">BA Specialisations</h3>
            <ul className="space-y-3">
              <li>English</li>
              <li>Sociology</li>
              <li>Political Science</li>
              <li>
                <a href="#" className="hover:text-neutral-200">
                  View All
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="relative mt-10  Bg-center bg-cover flex items-center justify-center px-4 text-center"
          // style={{
          //   backgroundImage: "url('/logo/footer-bg.png')",
          // }}
        >
          {/* Dark overlay */}
          <div className="absolute  "></div>

          {/* Content */}
          <div className="relative text-gray-200 text-sm ">
            <p className="mb-2">Disclaimer | Terms & Conditions | Our Policy</p>
            <p className="leading-7">
              College Sathi aims to provide unbiased and precise information,
              along with comparative guidance on universities and their
              programs, to admission aspirants. The content on the College Sathi
              website—encompassing texts, graphics, images, blogs, videos, and
              university logos—is intended solely for informational purposes and
              should not be viewed as a substitute for offerings from academic
              partners. While we strive for accuracy and present information in
              good faith, College Sathi makes no warranties regarding the
              completeness or reliability of the content and will not be liable
              for any errors, omissions, or resulting damages from its use.
            </p>
            <p className="mt-10">© Collegesathi 2025. All Rights Reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
