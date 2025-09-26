import { FOOTER_CONFIG } from "@/store/footer";

export default function Legal() {
  return (
    <div className="relative h-full lg:h-[40rem] bg-gradient-to-b from-[#001136]  to-slate-950 overflow-hidden">
      {/* Background city image overlay */}
      <div
        className="h-1 bg-[#001136] relative z-1"
        style={{
          boxShadow: "0 20px 200px 200px #001136", // downward, soft glow
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/footer-bg.png")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] px-8 py-16">
        <div className="max-w-6xl text-center text-gray-200">
          {/* Header links */}
          <div className="mb-8">
            <div className="flex justify-center space-x-2 text-sm font-medium z-50 ">
              {FOOTER_CONFIG.legal.disclaimer}
            </div>
          </div>

          {/* Main disclaimer text */}
          <div className="space-y-6 text-sm leading-9 text-white">
            <p className="">{FOOTER_CONFIG.legal.content}</p>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-4">
            <p className=" text-sm font-medium">
              {FOOTER_CONFIG.legal.copyright}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </div>
  );
}
