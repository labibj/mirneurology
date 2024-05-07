import type { Metadata } from "next";
import { Open_Sans, Manrope } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

export const metadata: Metadata = {
    title: "Mir Neurology",
    description: "Mir Neurology Spine Center",
    robots: {
      index: false,
      follow: false,
    },
  };


const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    //👇 Add variable to our object
    variable: '--font-manrope',
})

export default function Blog() {
    return (
    <main className="">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-64 lg:pb-20 pt-28 pb-8 max-w-5xl mx-auto px-5 xl:px-0">
            <div className="lg:pr-16">
                <div className={manrope.className}>
                    <span className="title-h4 text-secondary block lg:mb-5 mb-0">FEATURED</span>
                </div>
                <h2 className={manrope.className}>
                    <span className="title-h2 block lg:mb-5 mb-3">
                        <span className="block">Your Complete</span>
                        <span className="block">Guide To Remote</span>
                        <span className="block">Patient Monitoring</span>
                    </span>
                </h2>
                <Image
                    src="/img-blog-intro-banner.webp"
                    alt="img-blog-intro-banner"
                    className="w-full block lg:hidden mb-3 border-2 border-[#02C088] rounded-xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl"
                    width={591}
                    height={394}
                    loading="lazy"
                />
                <p className="mb-5">With a growth rate of 18.2% nationwide, it&rsquo;s clear to see that healthcare organizations are realizing the benefits of RPM for patients and providers alike.</p>
                <p className="mb-5">Curious whether RPM is the right fit for your organization? Find everything in this comprehensive article you need to know about RPM and how to implement it.</p>
                <div>
                    <Link href={"/blog/navigating-mental-health-during-the-holidays"} className="btn-primary">View blog</Link>
                </div>
            </div>
            <div className="self-center">
                <Image
                    src="/img-blog-intro-banner.webp"
                    alt="img-blog-intro-banner"
                    className="w-full hidden lg:block border-2 border-[#02C088] rounded-xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl"
                    width={591}
                    height={394}
                    loading="lazy"
                />
            </div>
        </div>
        <div className="py-16 bg-gradient-to-t from-[#1A70BA] to-[#02C088]">
            <div className="max-w-7xl w-full mx-auto px-5 xl:px-0">
                <div className="relative mb-10">
                    <AiOutlineSearch size={25} className="absolute top-3 left-3 text-black" />
                    <input type="text" className="w-full bg-white border border-white focus:border-white placeholder:text-slate-500 text-black pt-3 pl-12 pb-3 pr-3 rounded-lg" placeholder="Search for your favourite topics... " id="" />
                </div>
                <div className="flex flex-wrap lg:gap-6 gap-3 lg:w-11/12 mx-auto justify-center">
                    <Link href={''} className="btn-primary">All Posts(142)</Link>
                    <Link href={''} className="btn-transparent">All Posts(142)</Link>
                    <Link href={''} className="btn-transparent">Billing & Coding Guides (3)</Link>
                    <Link href={''} className="btn-transparent">Credentialing (14)</Link>
                    <Link href={''} className="btn-transparent">Medical Billing (46)</Link>
                    <Link href={''} className="btn-transparent">Medical Virtual Assistant (13)</Link>
                    <Link href={''} className="btn-transparent">Medicare Chronic Care Management (3)</Link>
                    <Link href={''} className="btn-transparent">Neo News (1)</Link>
                    <Link href={''} className="btn-transparent">Press Release (1)</Link>
                    <Link href={''} className="btn-transparent">Remote Patient Monitoring (17)</Link>
                    <Link href={''} className="btn-transparent">Revenue Cycle Management (13)</Link>
                    <Link href={''} className="btn-transparent">Technology (5)</Link>
                </div>
            </div>
        </div>
        <div className="lg:pt-16 lg:pb-8 pt-16 pb-8 max-w-7xl w-full mx-auto px-5 xl:px-0">
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-12 mb-16 lg:mb-0">
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-blog flex flex-col lg:mb-16">
                    <div className="aspect-[4/3] relative mb-5">
                        <Image
                            src="/img-healthcare-ppc-marketing.webp"
                            alt="img-healthcare-ppc-marketing"
                            className="object-cover absolute h-full drop-shadow-xl border-[3px] border-[#009AFF] rounded-3xl"
                            width={492}
                            height={334}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col grow">
                        <div className="grow">
                            <div className={manrope.className}><div className="title-h3 font-bold mb-5 text-center lg:text-left">
                                <Link href={''} className="">Healthcare PPC Marketing: 9 Expert Tips For Medical Professionals In 2023</Link>
                            </div></div>
                            <p className="mb-4 text-center lg:text-left">Are you looking to launch a PPC (pay-per-click) advertising campaign for your medical practice marketing? Not sure where to start? …</p>
                        </div>                        
                        <div className="flex justify-center lg:justify-start">
                            <Link href={'/blog/navigating-mental-health-during-the-holidays'} className="link-read-more flex gap-1 items-center font-semibold hover:underline">Read More...</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pagination">
                <Link href={''}>1</Link>
                <Link href={''}>2</Link>
                <Link href={''}>3</Link>
                <Link href={''}>.</Link>
                <Link href={''}>.</Link>
                <Link href={''}>.</Link>
                <Link href={''}>.</Link>
                <Link href={''}>.</Link>
                <Link href={''}>24</Link>
            </div>
        </div>
        
    </main>
    );
}