"use client";
import Image from "next/image";
import Check from "@/public/check.svg";

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-[20px] py-[48px] lg:py-[60px]">
      <h1 className="text-white text-center font-medium text-2xl lg:text-[42px]">
        Flexible Plans for Every Fighter
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-gray-400 lg:text-[18px]">
        Choose the plan that best fits your training needs. No hidden fees!
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        {/* Free Trial Plan */}
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Free Trial
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Start Training with StrikeMMA.AI for Free
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
              $0<span className="text-[#5F7896]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Limited Feature Access
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Access to Community
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Basic Support
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button>
        </div>

        {/* Pro Plan */}
        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Pro
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              For the Serious Fighters
            </p>
            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
              $50<span className="text-[#F4F8FA]">/mo</span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                AI-Powered Training Plans
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Performance Tracking
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Expert Tips & Tutorials
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Match Analysis
              </li>
              <li className="flex items-center gap-x-2">
                <Image src={Check} alt="included" width={20} height={20} />
                Community Engagement
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Enterprise
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Perfect for Professional Fighters and Teams
            </p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">Custom</h2>
            <p className="pt-4 text-[16px] text-[#36485C]">
              Get a Dedicated Account Manager
            </p>
            <p className="pt-2 text-[16px] text-[#36485C]">
              Our enterprise plan offers comprehensive solutions and dedicated
              support for large organizations managing extensive training
              programs.
            </p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
