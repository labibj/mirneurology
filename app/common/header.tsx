"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone, AiFillMail, AiOutlineRight, AiOutlineDown  } from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";
import { link } from "fs";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [hState, sethState] = useState("top");
    // const router = useRouter();

    useEffect(() => {
      var lastVal = 0;
      window.onscroll = function () {
        let y = window.scrollY;
        if (y > lastVal) {
          sethState("-translate-y-64");
        }
        if (y < lastVal) {
          sethState("translate-y-0 top-0");
        }
        if (y === 0) {
          sethState("translate-y-0 top-0");
        }
        lastVal = y;
      };
    }, []);

  const links = [
    {
      id: 1,
      link: "/",
      name: "home",
    },
    {
      id: 2,
      link: "services",
      name: "services",
    },
    {
      id: 3,
      link: "/",
      name: "about us",
    },
    {
      id: 4,
      link: "/",
      name: "FAQ's",
    },
    {
      id: 5,
      link: "/",
      name: "blog",
    },
  ];

  return (
    <header
      className={ "header transition z-20 nav flex flex-col mx-auto left-0 right-0 top-0 bg-white shadow-lg fixed delay-100 bg-gradient-to-b from-[#1A70BA] to-[#02C088] " + hState }
      >
      <div className="bg-black py-6 w-full px-4 lg:px-0">
        <div className="flex gap-8 max-w-7xl mx-auto justify-center">
          <Link href={''} className="text-[#ffffff] hover:text-[#1A70BA] flex items-center gap-2 text-lg font-bold transition duration-500">
            <AiFillPhone size={24} className="scale-x-[-1]" /> UK: +442071833436
          </Link>
          <Link href={''} className="text-[#ffffff] hover:text-[#1A70BA] flex items-center gap-2 text-lg font-bold transition duration-500">
            <AiFillPhone size={24} className="scale-x-[-1]" /> USA: +16502784421
          </Link>
          <Link href={''} className="text-[#ffffff] hover:text-[#1A70BA] flex items-center gap-2 text-lg font-bold transition duration-500">
            <AiFillMail size={24} /> info@mirneuology.com
          </Link>
          <Link href="" className="btn-primary shadow-none hidden lg:flex items-center self-center ml-5">
            BOOK A CALL
          </Link>
        </div>
      </div>
      <div className="flex items-center w-full lg:items-stretch self-center lg:justify-start justify-between w-full px-4 lg:px-0 lg:py-6 nav max-w-7xl mx-auto lg:gap-8">
        <div className="flex self-center">
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}          
            <a
              className="link-underline link-underline-black"
              href="/"
              rel="noreferrer"
              aria-label="Mir Neurology"
            >
              <span className="hidden">Mir Neurology</span>
              
              <svg width="303" height="48" viewBox="0 0 303 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.538607 10.919C0.600582 10.6468 0.653703 10.3702 0.726746 10.1002C1.01006 9.04718 1.55898 8.15701 2.2717 7.34715C2.88481 6.64885 3.44923 5.90593 4.03799 5.18531C4.15309 5.04476 4.28811 4.91982 4.4187 4.79042C5.28414 3.9181 6.15843 3.06586 7.16553 2.35417C8.03982 1.73618 8.97388 1.2699 9.94777 0.8594C12.7721 -0.334186 15.6296 -0.171323 18.4959 0.665302C18.9652 0.801394 19.4211 0.997722 19.8682 1.19628C20.7824 1.60679 21.743 1.86112 22.6925 2.1623C23.6642 2.47018 24.6027 2.91638 25.3862 3.61469C26.2074 4.34646 26.8714 5.21208 27.3672 6.2138C27.5244 6.53061 27.717 6.83402 27.9272 7.11736C28.8259 8.32879 29.4943 9.64285 29.678 11.1778C29.8374 12.503 29.5607 13.7457 28.9033 14.8768C28.4097 15.7246 27.8697 16.5545 27.2654 17.3242C26.608 18.163 25.6828 18.5423 24.6359 18.5758C23.8656 18.6003 23.1308 18.4107 22.4159 18.1274C22.3008 18.0827 22.1879 18.0359 22.0506 17.9801C21.9024 18.2054 21.7452 18.4218 21.6124 18.6539C21.3291 19.1447 20.9174 19.4972 20.4659 19.8073C19.4034 20.5391 18.2215 20.6841 16.9842 20.5435C16.9753 20.5435 16.9665 20.5413 16.9554 20.5391C16.36 20.4052 15.8487 20.3829 15.3153 20.8871C14.7088 21.4605 13.8456 21.5207 13.031 21.5586C12.8274 21.5676 12.6636 21.5832 12.5751 21.8085C12.5419 21.8933 12.4533 21.9558 12.3892 22.0294C11.6499 22.8905 10.8774 23.7249 10.1846 24.6263C9.84153 25.0725 9.45861 25.1929 8.95838 25.1773C8.47365 25.1617 7.98891 25.1595 7.50639 25.1773C6.7317 25.2063 6.38641 24.4701 6.52143 23.9034C6.60332 23.5554 6.67637 23.2029 6.75384 22.8504C6.32222 22.7121 5.90389 22.5916 5.49441 22.4466C4.3523 22.0428 3.37397 21.3534 2.55501 20.4632C1.70286 19.5351 1.08974 18.4575 1.02777 17.1301C0.987927 16.3113 1.19156 15.6175 1.72278 14.8567C1.59661 14.6604 1.46602 14.4618 1.33986 14.2588C0.908244 13.5583 0.666984 12.7886 0.53418 11.9765C0.538606 11.6218 0.538607 11.2715 0.538607 10.919ZM5.79986 6.01301C5.53647 6.32758 5.28192 6.62431 5.03402 6.92772C4.41427 7.6885 3.76796 8.42919 3.19026 9.22119C2.89588 9.62501 2.67454 10.1069 2.50632 10.5843C2.28498 11.2157 2.34696 11.8627 2.56387 12.503C2.77635 13.1321 3.1637 13.6207 3.61966 14.0714C4.14424 14.5912 4.14645 15.2248 3.58867 15.6822C2.56608 16.5188 2.78299 17.4112 3.21239 18.1831C3.35627 18.4442 3.51784 18.7007 3.7082 18.9261C4.27704 19.5954 5.00968 20.0527 5.76666 20.4476C6.43068 20.7934 7.15889 20.954 7.90038 21.0366C8.56218 21.1102 8.91854 21.6256 8.77024 22.2993C8.71048 22.5737 8.64629 22.8459 8.5821 23.1248C8.7968 23.2096 8.9451 23.1516 9.08897 22.9798C9.80833 22.1275 10.5388 21.282 11.2647 20.4342C11.3068 20.3851 11.34 20.3249 11.3776 20.2713C11.6521 19.8698 11.9819 19.6043 12.5065 19.6177C12.9292 19.631 13.3608 19.5753 13.7792 19.5039C14.1909 19.4325 14.5052 19.2116 14.6535 18.7654C14.7088 18.6003 14.8704 18.4508 15.0187 18.346C15.2909 18.1541 15.5986 18.2211 15.8974 18.3014C16.7761 18.5401 17.6637 18.7052 18.569 18.5155C19.4056 18.3393 20.032 17.8708 20.3928 17.0431C20.3065 16.9739 20.2401 16.9204 20.1715 16.8691C19.5229 16.3849 19.0692 15.7513 18.8147 14.9727C18.611 14.3503 18.6088 13.7234 18.8368 13.1121C18.9143 12.9046 19.0426 12.6882 19.2086 12.5476C19.503 12.3 19.9059 12.3223 20.2202 12.5387C20.5123 12.7395 20.7093 13.2214 20.592 13.6007C20.3928 14.2454 20.623 14.7295 21.09 15.1244C21.9267 15.8317 22.8696 16.3269 23.9343 16.579C24.7134 16.7642 25.3619 16.5768 25.8643 15.9231C25.9573 15.8026 26.0458 15.6755 26.1344 15.5528C26.5151 15.0218 26.929 14.5109 27.2698 13.9531C27.9671 12.8176 28.049 11.6039 27.5952 10.3233C27.3827 10.7026 27.2278 11.0885 26.9799 11.4009C26.1986 12.387 25.207 12.9737 23.9365 13.034C23.3189 13.063 22.9493 12.5097 22.9316 12.0702C22.9072 11.5191 23.3344 11.0551 23.8856 11.0305C24.3327 11.0105 24.7532 10.9011 25.1096 10.6178C25.9219 9.97081 26.172 9.06949 26.0193 8.09008C25.8068 6.7314 24.9657 5.74306 23.9409 4.93098C23.2879 4.41339 22.5022 4.16574 21.7142 3.93149C20.7824 3.65484 20.0475 3.81548 19.5584 4.73465C19.5495 4.7525 19.5362 4.76588 19.5229 4.7815C19.2728 5.10276 18.8678 5.22993 18.5004 5.10277C18.1396 4.97783 17.8673 4.64095 17.8872 4.24383C17.8983 4.00288 17.9891 3.75078 18.1042 3.5366C18.2414 3.27781 18.4406 3.05471 18.6132 2.81376C16.6167 2.04406 14.5804 1.7228 12.4091 2.12661C12.6304 2.42556 12.8407 2.6732 13.0133 2.94762C13.9009 4.34646 14.0979 5.89477 13.9075 7.51448C13.8589 7.92721 13.5932 8.23286 13.2037 8.34218C12.6636 8.49166 12.1058 8.00307 12.0992 7.40739C12.0948 7.13521 12.1302 6.86303 12.1368 6.59084C12.1678 5.08492 11.6941 3.81994 10.4303 2.95654C10.3351 2.89184 10.158 2.87176 10.0496 2.91415C9.08012 3.28227 8.26338 3.92256 7.43999 4.54055C7.38244 4.58294 7.34924 4.72349 7.36695 4.80381C7.47983 5.3281 7.78528 5.69844 8.24788 5.95501C8.7459 6.23165 8.89862 6.82733 8.63301 7.31146C8.37847 7.77327 7.8384 7.92052 7.34924 7.64611C6.90656 7.39623 6.49265 7.11067 6.22262 6.64885C6.10088 6.44137 5.95701 6.2495 5.79986 6.01301Z" fill="white"/>
              <path d="M9.13775 13.9955C8.78361 12.9469 8.66187 11.8894 8.92969 10.8208C9.15768 9.91278 9.62913 9.16539 10.468 8.71696C10.9173 8.47824 11.4375 8.60987 11.6964 9.0293C11.9665 9.46435 11.8779 10.1002 11.4463 10.3523C10.7203 10.7784 10.5986 11.4544 10.6407 12.2062C10.6606 12.5409 10.7447 12.8711 10.7956 13.1879C11.2936 13.1232 11.7407 13.0339 12.1922 13.0094C13.1661 12.9581 14.0692 13.1946 14.7864 13.9063C15.0586 14.1762 15.2644 14.531 15.4482 14.8768C15.6252 15.2136 15.4747 15.758 15.198 15.999C14.8992 16.2577 14.4743 16.3024 14.1378 16.0837C14.0227 16.0079 13.9032 15.9008 13.8457 15.7781C13.6044 15.2538 13.1883 14.9905 12.6548 14.9615C11.132 14.879 9.94565 15.5505 9.03372 16.7664C8.78804 17.0944 8.71499 17.487 8.77476 17.902C8.85223 18.4374 8.36749 19.1871 7.65035 18.9952C7.25415 18.8881 7.06158 18.5824 6.97748 18.2121C6.85574 17.6789 6.90886 17.1457 7.07708 16.6281C7.33605 15.8339 7.78315 15.169 8.40954 14.6313C8.64859 14.4239 8.88321 14.2164 9.13775 13.9955Z" fill="white"/>
              <path d="M17.9317 9.82398C17.6218 10.1207 17.354 10.4286 17.0375 10.6695C16.3071 11.2295 15.4992 11.4035 14.6249 11.0533C14.0671 10.8302 13.8524 10.3148 14.0604 9.72135C14.2176 9.27515 14.7378 9.05874 15.249 9.2283C15.632 9.35547 16.3425 8.97173 16.4244 8.58354C16.4376 8.5233 16.3867 8.44075 16.3535 8.37606C16.037 7.74468 15.8777 7.08877 16.0459 6.37708C16.1765 5.82379 16.6125 5.48245 17.0906 5.56499C17.6262 5.65646 17.9627 6.10936 17.852 6.69611C17.7635 7.16685 17.9295 7.48812 18.2836 7.71345C18.6333 7.93655 19.0008 8.14849 19.3881 8.27789C19.8352 8.42737 20.2668 8.38498 20.6165 7.9544C20.9397 7.55951 21.4953 7.55728 21.8693 7.8897C22.2301 8.21096 22.2943 8.80218 22.0021 9.21714C21.513 9.90875 20.8445 10.2479 20.0167 10.2791C19.273 10.3036 18.5736 10.1207 17.9317 9.82398Z" fill="white"/>
              <path d="M6.19591 12.5721C5.73995 12.4761 5.15783 12.3824 4.5912 12.2263C4.11974 12.0946 3.88734 11.557 4.01793 11.0416C4.13524 10.5753 4.59341 10.2786 5.07372 10.3701C5.58723 10.4682 6.10074 10.5575 6.6076 10.6846C7.08127 10.8051 7.34467 11.2892 7.25835 11.8024C7.18088 12.2575 6.78025 12.5877 6.19591 12.5721Z" fill="white"/>
              <path d="M47.478 16.6731C50.911 16.363 53.8593 15.919 56.4113 15.2542L56.3228 32.1094C56.3228 33.352 57.3343 34.2378 59.1825 34.3716V35.7905C57.0709 35.6567 55.1342 35.5697 53.286 35.5697C51.4378 35.5697 49.4568 35.6589 47.3452 35.7905V34.3716C49.2377 34.1931 50.2049 33.3967 50.2049 32.1094V21.0213C50.2049 18.6252 49.8087 18.0942 47.4758 18.0942V16.6731H47.478ZM52.9805 4.56543C54.873 4.56543 56.325 6.02897 56.325 7.93647C56.325 9.84398 54.7845 11.3521 52.9805 11.3521C51.1766 11.3521 49.5918 9.75474 49.5918 7.93647C49.5918 6.11821 51.1323 4.56543 52.9805 4.56543Z" fill="white"/>
              <path d="M70.8893 32.1092C70.8893 33.3073 71.8565 34.1506 73.5741 34.3715V35.7904C71.7702 35.7011 69.8777 35.5695 67.8547 35.5695C65.8316 35.5695 63.9392 35.6587 62.1353 35.7904V34.3715C63.8949 34.1506 64.7758 33.3073 64.7758 32.1092V21.0211C64.7758 18.6697 64.3796 18.1387 62.1353 18.0941V16.6751C65.3912 16.2312 68.1646 15.8765 70.3204 15.167C70.5838 16.1866 70.7166 17.34 70.7166 18.6273C70.7166 18.7165 70.7609 19.0266 70.7609 19.5576C72.432 17.2507 74.0611 16.0973 76.1284 16.0973C78.2842 16.0973 79.6056 17.2954 79.6056 19.4237C79.6056 21.1528 78.5498 22.217 77.0093 22.217C74.942 22.217 75.0726 19.9547 73.6206 19.9547C72.2571 19.9547 70.8915 21.9068 70.8915 25.3649V32.1092H70.8893Z" fill="white"/>
              <path d="M93.3289 6.33887C95.2656 6.42811 96.8061 6.47273 97.8619 6.47273C99.0948 6.47273 100.591 6.42811 102.439 6.33887L119.644 26.2974V11.8383C119.644 9.48681 118.236 7.97865 115.728 7.84702V6.33887C117.532 6.42811 119.117 6.47273 120.481 6.47273C121.933 6.47273 123.648 6.42811 125.585 6.33887V7.84702C122.988 8.20175 121.669 9.48904 121.669 11.8383V36.4998L119.777 36.6783L99.6216 13.2148V30.2909C99.6216 32.7294 100.941 34.0613 103.495 34.2375V35.7903C101.735 35.7011 100.062 35.6565 98.5658 35.6565C97.0695 35.6565 95.4405 35.7011 93.6808 35.7903V34.2375C96.2771 33.9274 97.5963 32.5955 97.5963 30.2909V10.8633L96.0558 9.17893C95.3077 8.33561 94.8229 7.84926 93.3267 7.84926V6.33887H93.3289Z" fill="white"/>
              <path d="M134.252 25.4562C134.208 25.8555 134.208 26.2549 134.208 26.6096C134.208 31.2233 136.627 33.7956 140.104 33.7956C142.041 33.7956 143.668 32.8653 145.297 30.9132L146.66 32.2005C144.635 35.2614 141.953 36.4148 137.991 36.4148C131.654 36.4148 127.694 32.5998 127.694 26.7903C127.694 20.4476 132.094 16.1016 138.387 16.1016C143.887 16.1016 147.057 19.3387 147.057 25.0166V25.4606H134.252V25.4562ZM141.468 22.7053C141.468 19.689 140.235 18.0046 138.168 18.0046C136.012 18.0046 134.604 19.8675 134.383 23.3278H141.468V22.7053Z" fill="white"/>
              <path d="M161.313 33.0395C163.732 33.0395 165.539 30.5564 165.539 28.6935L165.627 20.3986C165.627 19.156 164.571 18.2702 162.635 18.1364V16.6729C164.306 16.7621 165.89 16.8491 167.256 16.8491C168.223 16.8491 169.633 16.7599 171.524 16.6729V31.4421C171.524 33.7936 171.876 34.3245 174.164 34.3692V35.7881C170.775 35.9666 168.049 36.1428 166.023 36.3637C165.804 35.3887 165.76 34.1907 165.76 32.7271C163.56 35.2102 161.227 36.4083 158.367 36.4083C154.055 36.4083 152.778 34.4562 152.778 30.3757V20.3986C152.778 19.2006 151.897 18.3573 150.138 18.1364V16.6729C151.853 16.7621 153.263 16.8491 154.405 16.8491C155.505 16.8491 156.957 16.7599 158.673 16.6729V29.8023C158.673 31.9307 159.507 33.0395 161.313 33.0395Z" fill="white"/>
              <path d="M186.174 32.1092C186.174 33.3073 187.141 34.1506 188.859 34.3715V35.7904C187.055 35.7011 185.163 35.5695 183.14 35.5695C181.114 35.5695 179.224 35.6587 177.418 35.7904V34.3715C179.178 34.1506 180.059 33.3073 180.059 32.1092V21.0211C180.059 18.6697 179.662 18.1387 177.418 18.0941V16.6751C180.674 16.2312 183.447 15.8765 185.603 15.167C185.867 16.1866 185.999 17.34 185.999 18.6273C185.999 18.7165 186.044 19.0266 186.044 19.5576C187.715 17.2507 189.344 16.0973 191.411 16.0973C193.567 16.0973 194.888 17.2954 194.888 19.4237C194.888 21.1528 193.833 22.217 192.292 22.217C190.225 22.217 190.355 19.9547 188.903 19.9547C187.54 19.9547 186.174 21.9068 186.174 25.3649V32.1092Z" fill="white"/>
              <path d="M208.262 16.0527C214.599 16.0527 219.174 20.1779 219.174 26.2105C219.174 32.2431 214.596 36.3682 208.262 36.3682C201.969 36.3682 197.392 32.1985 197.392 26.2105C197.394 20.1779 201.969 16.0527 208.262 16.0527ZM203.906 25.8558C203.906 31.6207 205.094 34.55 208.262 34.55C211.298 34.55 212.662 31.7991 212.662 26.2551C212.662 20.7111 211.298 17.9156 208.262 17.9156C205.402 17.9156 203.906 20.5772 203.906 25.8558Z" fill="white"/>
              <path d="M221.418 7.75776V6.33884C224.851 6.02873 227.799 5.58476 230.351 4.91992L230.307 32.1091C230.307 33.3518 231.274 34.2375 233.123 34.3714V35.7903C231.011 35.6564 229.074 35.5694 227.226 35.5694C225.378 35.5694 223.441 35.6587 221.33 35.7903V34.3714C223.222 34.1929 224.189 33.3964 224.189 32.1091V10.6848C224.192 8.29097 223.751 7.75776 221.418 7.75776Z" fill="white"/>
              <path d="M246.06 16.0527C252.397 16.0527 256.972 20.1779 256.972 26.2105C256.972 32.2431 252.395 36.3682 246.06 36.3682C239.767 36.3682 235.19 32.1985 235.19 26.2105C235.192 20.1779 239.767 16.0527 246.06 16.0527ZM241.704 25.8558C241.704 31.6207 242.893 34.55 246.06 34.55C249.097 34.55 250.46 31.7991 250.46 26.2551C250.46 20.7111 249.097 17.9156 246.06 17.9156C243.2 17.9156 241.704 20.5772 241.704 25.8558Z" fill="white"/>
              <path d="M260.053 23.4599C260.053 18.98 263.265 16.0976 268.854 16.0976C270.921 16.0976 272.595 16.4523 274.443 17.6504C275.983 16.3631 277.302 15.6982 278.932 15.6982C280.603 15.6982 281.705 16.7178 281.705 18.0051C281.705 19.2478 280.913 20.0018 279.901 20.0018C278.624 20.0018 278.009 18.4937 276.953 18.4937C276.645 18.4937 276.293 18.5829 275.853 18.7592C276.82 20.2673 277.26 21.6863 277.26 23.3729C277.26 26.5231 275.237 28.9615 271.804 29.6264C268.064 30.3805 264.631 29.4055 264.631 31.7548C264.631 33.0844 266.302 33.2629 269.516 33.2629C276.379 33.2629 279.724 35.5252 279.724 40.3597C279.724 44.9288 275.85 47.8113 268.942 47.8113C262.517 47.8113 259.217 45.8592 259.217 42.5774C259.217 40.7591 260.494 39.4272 262.165 39.4272C263.221 39.4272 264.102 40.0474 264.321 40.9353C263.44 41.1138 262.913 41.734 262.913 42.6644C262.913 44.7927 265.069 45.9908 269.25 45.9908C273.21 45.9908 275.324 44.4826 275.324 41.821C275.324 39.5588 273.564 38.7155 270.043 38.7155H268.635C263.046 38.7155 260.142 37.5621 260.142 33.9255C260.142 31.7079 261.461 30.1998 264.19 29.2694C261.417 27.8951 260.053 26.0322 260.053 23.4599ZM265.994 22.9267C265.994 26.2977 266.61 28.116 268.635 28.116C270.483 28.116 271.32 26.387 271.32 22.9267C271.32 19.6003 270.704 17.8712 268.679 17.8712C266.61 17.8712 265.994 19.6003 265.994 22.9267Z" fill="white"/>
              <path d="M303 18.2259C301.371 18.4468 300.756 19.3347 299.919 21.153L289.578 43.463C288.214 46.3901 286.849 47.8536 284.782 47.8536C283.285 47.8536 282.185 46.8787 282.185 45.4575C282.185 43.106 284.208 42.9744 285.97 42.4412C288.347 41.7317 289.489 39.8689 290.767 36.1877L284.607 21.5501C283.814 19.6426 283.287 18.4445 281.262 18.2237V16.6709C283.551 16.7601 285.399 16.8048 286.807 16.8048C288.392 16.8048 290.326 16.7601 292.57 16.6709V18.2237H292.086C290.722 18.2237 290.06 18.5784 290.06 19.4663C290.06 20.1758 290.324 20.7536 290.632 21.4631L294.065 29.7133L297.542 21.8178C297.849 21.0637 298.027 20.3543 298.027 19.7765C298.027 18.7123 297.234 18.2683 295.474 18.2237V16.6709C297.015 16.7601 298.29 16.8048 299.304 16.8048C300.185 16.8048 301.459 16.7601 303 16.6709V18.2259Z" fill="white"/>
              <path d="M16.8092 35.79V34.2372C14.2572 34.0587 12.8937 32.729 12.8937 30.2906V25.3154L11.0013 26.3216V30.2928C11.0013 32.5997 9.63782 33.9293 7.0415 34.2394V35.7922C8.80116 35.703 10.4302 35.6137 11.9265 35.6137C13.4205 35.6115 15.0496 35.7007 16.8092 35.79Z" fill="white"/>
              <path d="M36.4156 6.39241L33.7927 9.00268L26.183 27.3638L22.8828 19.89L22.6394 20.1376L17.1523 23.0535L22.7943 35.7925H24.8196L33.7971 14.1028V30.7349C33.7971 33.1734 32.6528 34.0613 29.7045 34.1059V35.7903C32.3894 35.6565 34.9857 35.5694 37.405 35.5694C39.6494 35.5694 41.9823 35.6587 44.4015 35.7903V34.1929C41.4533 34.0591 40.3089 33.1734 40.3089 30.7773V11.2627C40.3089 8.95583 41.6281 7.98088 44.4015 7.98088V6.33887C42.5091 6.42811 41.0128 6.42811 39.8685 6.42811C38.9543 6.42811 37.7967 6.42811 36.4156 6.39241Z" fill="white"/>
              </svg>
            </a>          
        </div>

        <ul className="navbar hidden lg:flex ml-auto lg:gap-8">
          {/* {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="nav-links px-8 cursor-pointer capitalize font-medium duration-200 link-underline flex items-center"
            >
              <Link href={link} className="transition font-semibold text-xl duration-500 text-[#000000] hover:text-[#166D99]">{name}</Link>
            </li>
          ))} */}
          <li
            className="nav-links font-medium duration-200 link-underline flex items-center group"
          >
            <Link href={''} className="transition text-lg font-medium duration-500 text-[#ffffff] hover:text-[#29F09E] flex items-center">SEO</Link>
          </li>
          <li
            className="nav-links font-medium duration-200 link-underline flex items-center group"
          >
            <Link href={''} className="transition text-lg font-medium duration-500 text-[#ffffff] hover:text-[#29F09E] flex items-center">PPC</Link>
          </li>
          <li
            className="nav-links font-medium duration-200 link-underline flex items-center group"
          >
            <Link href={''} className="transition text-lg font-medium duration-500 text-[#ffffff] hover:text-[#29F09E] flex items-center">About</Link>
          </li>
          <li
            className="nav-links font-medium duration-200 link-underline flex items-center group"
          >
            <Link href={''} className="transition text-lg font-medium duration-500 text-[#ffffff] hover:text-[#29F09E] flex items-center">Contact Us</Link>
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-gray-500 lg:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {/* {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))} */}
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={'/'} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">Home</Link>
            </li>
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl group"
            >
              <Link onClick={() => setNav(!nav)} href={''} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">Services</Link>
              {/* <ul className="group-hover:block hidden fixed top-20 left-0 right-0">
                <li
                  className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link href={'/'} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">Submenu Item</Link>
                </li>
              </ul> */}
            </li>
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={'/'} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">About Us</Link>
            </li>
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={'/'} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">FAQ&rsquo;s</Link>
            </li>            
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={'/'} className="transition font-semibold text-xl duration-500 text-[#ffffff] hover:text-[#166D99]">Blog</Link>
            </li>
          </ul>        
        )}
      </div>
    </header>
  );
};

export default Header;