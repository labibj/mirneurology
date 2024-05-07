"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Open_Sans, Manrope } from "next/font/google";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-manrope',
})

const Footer = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "services",
    },
    {
      id: 3,
      link: "about us",
    },
    {
      id: 4,
      link: "FAQ's",
    },
    {
      id: 5,
      link: "blog",
    },
  ];

  return (
    <footer className="w-full lg:py-10 py-8 footer px-5 xl:px-0 bg-gradient-to-t from-[#1A70BA] to-[#02C088] relative">
        <div className="max-w-7xl w-full mx-auto">
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between text-white">
            <div className="text-center lg:text-left lg:w-6/12">
              <div className={manrope.className}><p className="font-semibold mb-3">&copy; 2024 Mir Neurology. All Rights Reserved.</p></div>
              <div className="mb-4">
                <p>Your individual partner in self-care and professional medical advice. For online virtual medical assistance.</p>
                <p>Contact us at <Link href="tel:+16012015580">+1 (301) 797-7600</Link></p>
                <p>Send us an email at <Link href="mailto:admin@mirneurology.com">admin@mirneurology.com</Link></p>
              </div>              

              <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                <Link href="" className="flex items-center gap-2 hover:underline">
                  Careers
                </Link>
                <span>|</span>
                <Link href="/blog" className="flex items-center gap-2 hover:underline">
                  Blog
                </Link>
                <span>|</span>
                <Link href="" className="flex items-center gap-2 hover:underline">
                      Privacy policy
                </Link>
                <span>|</span>
                <Link href="" className="flex items-center gap-2 hover:underline">
                    Terms of us
                </Link>
                <span>|</span>
                <Link href="" className="flex items-center gap-2 hover:underline">
                  Review Us
                </Link>
              </div>

            </div>
            <div className="lg:w-6/12 lg:justify-end justify-center flex gap-3 text-xl">
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
                <FaFacebookF />
              </div>
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
              <FaLinkedinIn />
              </div>
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
              <FaInstagram />
              </div>
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
              <FaTwitter />
              </div>
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
              <FaYoutube />
              </div>
              <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-white hover:text-[#166D99]">
              <FaPinterestP />
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;