import Image from "next/image";
import LogoSlider from "./_components/LogoSlider";
import dataLogoSlider from "./_data/logo-slider-data.json";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  async function handleSubmit(event: any) {
    event.preventDafualt();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
    console.log(data);
   }
  return (
    <main className="">
      <div className="grid grid-cols-2 w-full max-w-7xl mx-auto grid lg:grid-cols-2 lg:pt-56">
        <div  className="self-center">
          <h1 className="title-h1"><span className="font-bold">Top Rated Neurology Clinic</span> in Hagerstown</h1>
          <h2 className="title-h2">Your well-being is our priority</h2>
          <p className="text-xl text-[#8C8C8C] font-bold mb-6">We are an experienced team of neurologists operating in the Hagerstown area.</p>
          <form>
              <div className="flex flex-col gap-5">
                <div className="input-field">
                  <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Email" id="name" />
                </div>
                <div className="input-field">
                  <input type="email" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Phone" id="phone" />
                </div>
                <div className="flex w-full">
                  <button type="submit" className="btn-secondary w-full">Send</button>
                </div>
              </div>
          </form>
        </div>
        <div>
          <Image
            src="/top-rated-neurology.jpg"
            alt="top-rated-neurology"
            className=""
            width={734}
            height={714}
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative flex h-80 items-center">
            <Image
              src="/illustration-logos.webp"
              alt="illustration-logos"
              className="absolute top-0 left-0"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
              loading="lazy"
            />
            <div className="max-w-7xl mx-auto">
              <LogoSlider data={dataLogoSlider} />
            </div>            
      </div>
      <div className="relative h-[987px] flex flex-col justify-center">
        <Image
          src="/illustration-reviews.webp"
          alt="illustration-reviews"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain"
          width={1920}
          height={987}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative flex flex-col">
          <div className="text-center w-7/12 mx-auto mb-5">
            <h3 className="title-h3">Reviews</h3>
            <p className="leading-[48px]">The reason we've received numerous awards? <span className="text-primary font-bold">Our patients appreciate</span> our care, which is the true measure of a neurology clinic's success.</p>
          </div>              
          <div className="text-center">
            <div className="flex flex-col gap-1 mb-10">
              <span className="text-4xl font-semibold">636+</span>
              <span className="text-xs">TOTAL REVIEWS</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-semibold">636+</span>
                <span className="text-xs">TOTAL REVIEWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">Testimonials</h3>
          <p className="mb-5 font-medium">What <span className="text-secondary font-extrabold">Our Patients</span> Say About Our Neurology Services in Hagerstown.</p>
          <p className="mb-12 font-medium">Here at <span className="text-secondary font-extrabold">Pearl Lemon,</span> we can help your company grow.</p>
          <div className="text-sm leading-8 mx-auto w-9/12 mb-5">
            I highly recommend their team! We&rsquo;ve been working w/Pearl Lemon for 4-6 months now after we found them on LinkedIn. We&rsquo;ve seen our traffic increase 3x organically and our keywords improve overall by +24.4 w/several page 1 results. What I love most about Pearl Lemon is their speed of delivery, willingness to go the extra mile and appreciation of our needs. We&rsquo;re busy – so they have made the process as turn-key as possible. From getting involved in YouTube SEO, producing content and more – I highly recommend their team
          </div>
          <div className="inline-flex text-left gap-2">
            <div className="rounded-circle">
              <Image
                src="/laura-faint.jpg"
                alt="laura-faint"
                className=""
                width={62}
                height={62}
                loading="lazy"
              />
            </div>
            <div className="self-center">
              <div className="text-[#02C088] text-base font-semibold">Laura Faint</div>
              <div className="text-sm">Head of Growth at AJ&Smart GmbH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[708px] flex flex-col justify-center mb-32">
        <Image
          src="/illustration-1.webp"
          alt="illustration-1"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain"
          width={1920}
          height={708}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative">
          <div className="flex gap-8">
            <div className="w-7/12">
              <Image
                src="/neurological-clinic.webp"
                alt="neurological-clinic"
                className="object-cover	"
                width={650}
                height={438}
                loading="lazy"
              />
            </div>
            <div className="self-center w-5/12">
              <h3 className="title-h3">Looking for a Neurological Clinic That Delivers Exceptional Care?</h3>
              <p className="mb-5 font-medium">Finding a <span className="text-primary font-bold">neurologist</span> you can trust to address your neurological issues effectively among the many specialists in London can be quite challenging!</p>
              <p className="mb-5 font-medium">It can often be hard to determine which specialist truly has the expertise, skills, and experience in diagnostics and <span className="text-primary font-bold">treatment to deliver impactful</span>, lasting improvements to your health.</p>
              <p className="mb-5 font-medium">That&rsquo;s where we step in. That's where <span className="text-tertiary font-bold">Mir Neurological Clinic</span> provides exceptional care.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[1802px] max-w-[1920px] mx-auto w-full flex flex-col">
        <Image
          src="/illustration-2.webp"
          alt="illustration-2"
          className="absolute top-0 left-0 mx-auto object-contain"
          width={1285}
          height={1802}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative pt-24">
          <div className="w-11/12 mx-auto text-center mb-20">
            <h3 className="title-h3 text-[#1A70BA]">Our Featured Services</h3>
            <p className="mb-5 font-medium">Enhance Your Health Today with Our <span className="text-secondary font-extrabold">Proven Neurology Services.</span></p>
            <p className="font-medium">The neurology field is more competitive than ever. You need a clinic with the <span className="text-secondary font-extrabold">expertise to place your health where it belongs:</span> in the hands of top specialists. As a full-service neurology clinic, we have the tools, experience, and proven success to do just that and more.</p>
          </div>
          <div className="w-10/12 mx-auto grid grid-cols-3 gap-16">
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Migraine</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Dizziness</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Seizure</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Head Injury</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Stroke</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Multiple Sclerosis </div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Neuropathy</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Alzheimer’s Disease</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
              <div className="mb-5">
                <Image
                  src="/icon-migraine.svg"
                  alt="icon-migraine"
                  className=""
                  width={66}
                  height={90}
                  loading="lazy"
                />
              </div>
              <div className="title-h5 text-[#1A70BA]">Botox</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto py-16">
        <div className="flex gap-2 justify-center">
          <Image
            src="/we-practice-what-we-preach.webp"
            alt="we-practice-what-we-preach"
            className=""
            width={623}
            height={431}
            loading="lazy"
          />
          <div className="rounded-r-2xl bg-gradient-to-t from-[#1A70BA] to-[#02C088] flex flex-col justify-center px-12 break-normal text-center w-4/12">
            <div className="text-white font-semibold text-lg">&rsquo;We Practice What<br /> We Preach!&rsquo;</div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-28 bg-[#e8f1f8]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-10/12 mx-auto text-center mb-20">
            <h3 className="title-h3 text-[#1A70BA]">Neurology Service Excellence Awards</h3>
            <div className="w-5/12 mx-auto text-center mb-5">
              <p className="font-medium">Our exceptional <span className="text-secondary">treatments are acknowledged.</span> We&rsquo;re recognized in the health industry.</p>
            </div>
            <p className="font-medium">You're seeking the best <span className="text-secondary">neurological services</span> for your health. Top-rated neurology centers like Mayo Clinic, UC Health, and Cleveland Clinic recognize <span className="text-secondary">Mir Neurological Clinic</span> as one of the US's leading neurological providers.</p>
          </div>
          <div className="w-9/12 mx-auto flex">
            <div className="w-5/12">
              <p className="mb-10"><strong>Mayo Clinic</strong>, based in Rochester, Minnesota, is a renowned nonprofit medical group known for world-class healthcare, innovative research, and excellence in education. With a focus on patient-centered care, <span className="text-secondary">Mayo Clinic provides</span> specialized treatments across many medical fields, attracting patients globally.</p>
              <p className="mb-10"><strong>UC Health</strong> is a leading healthcare provider affiliated with the University of Cincinnati. Known for its advanced medical research, education, and comprehensive care, UC Health offers <span className="text-secondary">specialized treatments across</span> various medical disciplines.</p>
              <p className=""><strong>Cleveland Clinic</strong> is a renowned healthcare institution known for its innovative medical research, advanced treatments, and <span className="text-secondary">comprehensive patient</span> care across various specialties, attracting patients from around the world.</p>
            </div>
            <div className="w-7/12 pl-16">
              <Image
                src="/excellence-awards.webp"
                alt="excellence-awards"
                className="w-full"
                width={495}
                height={391}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[881px] flex flex-col justify-center -mt-12">
        <Image
          src="/illustration-3.webp"
          alt="illustration-3"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain"
          width={1920}
          height={881}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="w-9/12 mx-auto flex text-white">
            <div className="w-6/12 pr-12">
              <h4 className="title-h4 text-[#ffffff]">Ready to Schedule an Appointment at Mir Neurology for Your Health Checkup?</h4>
              <h4 className="title-h4 text-[#ffffff]">You've Come To The Right Place.</h4>
              <p className="mb-10">As top <span className="text-[#29F09E]">neurologist specialists</span> treating patients worldwide, we pride ourselves on showing our dedication to your health and well-being.</p>
              <p className="mb-10">If you're tired of seeking neurology care from various sources, and want a team that offers valuable, <span className="text-[#29F09E]">legitimate treatments</span> with clear communication, transparency, and dedication to your health—then Mir Neurology is the perfect choice. </p>
              <p className="mb-10"><span className="text-[#29F09E]">Our clinical</span> team offers complete care for various neurological diseases, including Alzheimer's and Parkinson's, epilepsy, multiple sclerosis, and more. Contact us to start your journey toward <span className="text-[#29F09E]">personalized treatment</span> and improved health.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
            <div className="w-6/12">
              <Image
                src="/schedule-an-appointment.webp"
                alt="schedule-an-appointment"
                className="w-full"
                width={495}
                height={391}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-40 -mt-24 bg-[#e8f1f8]">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">We Have Worked With:</h3>
          <div className="grid grid-cols-6 gap-8">
            <div>
              <Image
                src="/brands/logo-1.webp"
                alt="logo-1"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-2.webp"
                alt="logo-2"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-3.webp"
                alt="logo-3"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-4.webp"
                alt="logo-4"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-5.webp"
                alt="logo-5"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-6.webp"
                alt="logo-6"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-7.webp"
                alt="logo-7"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-8.webp"
                alt="logo-8"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-9.webp"
                alt="logo-9"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-10.webp"
                alt="logo-10"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-11.webp"
                alt="logo-11"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src="/brands/logo-12.webp"
                alt="logo-12"
                className=""
                width={145}
                height={113}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[724px] flex flex-col justify-center -m-24">
        <Image
          src="/illustration-4.webp"
          alt="illustration-4"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain"
          width={1920}
          height={724}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative">
          <div className="flex gap-8">
            <div className="w-6/12">
              <Image
                src="/insurance-information.webp"
                alt="insurance-information"
                className="w-full"
                width={554}
                height={315}
                loading="lazy"
              />
            </div>
            <div className="self-center w-6/12">
              <h3 className="title-h3">Insurance Information</h3>
              <p className="mb-5 font-medium">We accept Medicare, Medicaid, and almost all commercial insurance as payment. Our billing staff is happy to help patients who may require a payment plan. For questions related to insurance or billing, reach out to us at +1 (301) 797-7600. Copayments and outstanding balances are expected to be paid at the time of service. We appreciate a 24 hour cancellation notice, otherwise a fee may apply. Please note that health insurance does not cover auto-accident related treatment.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-40">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-10/12 mx-auto">          
            <div className="text-center mb-24">
              <h3 className="title-h3 text-[#1A70BA]">Watch Our Case Study Videos</h3>
              <p className="">Talk is cheap, so we don&rsquo;t just say what we can do – we can show you! <span className="text-primary">Our rankings</span> SEO campaigns have a track record of not just ranking our client&rsquo;s sites on page 1 of Google but much more besides. You can expect an <span className="text-primary">improved user experience</span>, more traffic, better conversion rates, increased brand awareness and more.</p>
            </div>          
            <div className="grid grid-cols-3 gap-8 mb-32">
              <div>
                <Image
                  src="/case-study.webp"
                  alt="case-study"
                  className="border-2 border-[#02C088] rounded-3xl drop-shadow-lg hover:drop-shadow-xl"
                  width={349}
                  height={203}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/case-study.webp"
                  alt="case-study"
                  className="border-2 border-[#02C088] rounded-3xl drop-shadow-lg hover:drop-shadow-xl"
                  width={349}
                  height={203}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/case-study.webp"
                  alt="case-study"
                  className="border-2 border-[#02C088] rounded-3xl drop-shadow-lg hover:drop-shadow-xl"
                  width={349}
                  height={203}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-5/12 self-center">
                <h4 className="title-h4 text-[#1A70BA]">Schedule a Consultation today!</h4>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="input-field">
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Enter website" id="" />
                    </div>
                    <div className="input-field">
                      <input type="email" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your email" id="" />
                    </div>
                    <div className="input-field">
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your phone" id="" />
                    </div>
                    <div className="flex w-full">
                      <button type="submit" className="btn-secondary rounded-full">Get My Audit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-7/12 pl-16">
                <Image
                  src="/schedule-consultation-today.webp"
                  alt="schedule-consultation-today"
                  className=""
                  width={599}
                  height={296}
                  loading="lazy"
                />                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto w-full flex flex-col mb-24">
        <Image
          src="/illustration-5.webp"
          alt="illustration-5"
          className="absolute top-0 left-0 mx-auto"
          width={1920}
          height={4000}
          loading="lazy"
        />
        <Image
          src="/illustration-6.webp"
          alt="illustration-6"
          className="absolute top-[22.5%] right-0"
          width={1500}
          height={1885}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative pt-48">
          <div className="w-6/12 mx-auto text-center mb-20">
            <h3 className="title-h3 text-[#1A70BA]">How do we Deliver our SEO Services? Overdeliver - For every client.</h3>
            <p className="mb-5 font-medium"><span className="text-secondary">6 Stages</span> from Discovery to Reporting</p>
          </div>
          <div className="w-11/12 mx-auto flex flex-col gap-12">
            <div className="flex justify-between">
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-1-discovery-call.webp"
                  alt="stage-1-discovery-call"
                  className=""
                  width={403}
                  height={410}
                  loading="lazy"
                />
              </div>
              <div className="w-6/12">
                <h4 className="title-h4 text-[#1A70BA]">Stage 1 – Discovery Call</h4>
                <div className="title-h6">CUSTOMER DISCOVERY CALL</div>
                <p className="mb-12">At this stage, we take the time to fully understand your health concerns and goals. We&rsquo;ll ask questions to gain insight into:</p>
                <ul className="list-none with-bullets pl-12 pr-32 flex flex-col gap-2 mb-12">
                  <li><span className="icon-bullet">&bull;</span> Your medical history, current health issues, and the care you seek from us.</li>
                  <li><span className="icon-bullet">&bull;</span> Other treatments you&rsquo;ve tried or are currently undergoing, and their effectiveness.</li>
                  <li><span className="icon-bullet">&bull;</span> Your specific symptoms and how they impact your daily life.</li>
                  <li><span className="icon-bullet">&bull;</span> Your healthcare objectives and how you hope a neurologist specialist can assist you.</li>
                </ul>
                <p className="mb-12">This conversation is a dialogue. We listen carefully to your story and concerns and encourage you to ask us questions to ensure we are the right fit for your neurological care.</p>
                <Link href="" className="btn-primary rounded-full">
                  BOOK A CALL
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-5/12 pr-6">
                <h4 className="title-h4 text-[#1A70BA]">Stage 2 – Discovery Call</h4>
                <div className="title-h6">OUR AUDIT SERVICE</div>
                <p className="mb-12">Conducting a thorough evaluation of your neurological condition is crucial.</p>                
                <p className="mb-12">This allows us to identify the underlying issues affecting your health and well-being.</p>
                <p className="mb-12">Our specialists will perform a personalized assessment tailored to your specific needs and offer actionable recommendations for your treatment plan, rather than a generic approach used for every patient.</p>
                <Link href="" className="btn-primary rounded-full">
                  REQUEST AUDIT
                </Link>
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-2.webp"
                  alt="stage-2"
                  className=""
                  width={437}
                  height={379}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-3.webp"
                  alt="stage-3"
                  className=""
                  width={361}
                  height={351}
                  loading="lazy"
                />
              </div>
              <div className="w-6/12">
                <h4 className="title-h4 text-[#1A70BA]">Stage 3</h4>
                <div className="title-h6">Neurology Treatment Plan</div>
                <p className="mb-12">Following our assessment and diagnosis, we'll develop a personalized treatment plan designed for your specific neurological needs.</p>                
                <p className="mb-12">We will continuously adjust our treatment approach based on your progress, ensuring you receive the most effective care. Additionally, we will keep you informed of all steps and decisions before implementing them.</p>
                <Link href="" className="btn-primary rounded-full">
                  FIND IT MORE
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-5/12 pr-6">
                <h4 className="title-h4 text-[#1A70BA]">Stage 4</h4>
                <div className="title-h6">Treatment Implementation</div>
                <p className="mb-12">Once we agree on your personalized treatment plan, we'll begin the process. Your care will be managed by our skilled neurology specialists, and we'll keep you closely informed throughout your treatment journey.</p>
                <Link href="" className="btn-primary rounded-full">
                  OUR SERVICE
                </Link>
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-4.webp"
                  alt="stage-4"
                  className=""
                  width={415}
                  height={362}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-5.webp"
                  alt="stage-5"
                  className=""
                  width={387}
                  height={504}
                  loading="lazy"
                />
              </div>
              <div className="w-6/12">
                <h4 className="title-h4 text-[#1A70BA]">Stage 5</h4>
                <div className="title-h6">Neurology Consultation</div>
                <p className="mb-12">During your consultation, we'll provide you with resources for a deeper understanding of your condition and potential treatments. We empower you with knowledge and tools to help you actively participate in your care both during our work together and beyond.</p>                
                <p className="mb-12">We believe in transparency and in equipping you with the information you need.A poor healthcare provider may keep you in the dark about your treatment options, but that's not our approach. </p>
                <p className="mb-12">We want you to understand the strategies and treatments we use for your neurological health, offering you resources to review at your convenience.</p>
                <Link href="" className="btn-primary rounded-full">
                  CHECK OUT OUR COURESS
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-5/12 pr-6">
                <h4 className="title-h4 text-[#1A70BA]">Stage 6</h4>
                <div className="title-h6">Neurology Report</div>
                <p className="mb-12">The data we gather helps us translate insights into strategies for your neurological health. We will provide clear, digestible reports and data audits, using this information to maximize the effectiveness of our treatment.</p>
                <p className="mb-12">Our neurology analytics continually identify opportunities to enhance care, adjust treatment plans, or explore new approaches for better outcomes. For instance, if a particular treatment approach leads to high patient dissatisfaction, we may need to reassess its suitability or relevance.</p>
                <p className="mb-12">Effective neurology care often requires long-term planning and adjustments to ensure consistent, measurable improvement. Quality analytics involves more than tracking specific outcomes; it's a comprehensive analysis of performance designed to drive positive results. For more details about our services and locations, please reach out to us.</p>
                <Link href="" className="btn-primary rounded-full">
                  LEARN MORE
                </Link>
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-6.webp"
                  alt="stage-6"
                  className=""
                  width={550}
                  height={366}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>        
      </div>
      <div className="w-full max-w-7xl mx-auto relative py-16">
        <div className="mb-40">
          <div className="text-center">
            <h3 className="title-h3 text-[#1A70BA]">OUR MISSION</h3>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden">
              <Image
                src="/img-card-our-mission.webp"
                alt="img-card-our-mission"
                className="w-full rounded-t-3xl"
                width={356}
                height={180}
                loading="lazy"
              />
              <div className="p-8 border-b border-black">
                <h4 className="title-h4 text-[#1A70BA]">Essential SEO Tactics for Improving Online Visibility</h4>
                <Link href={''} className="text-secondary">READ MORE »</Link>              
              </div>
              <div className="px-8 py-4">
                March 11, 2024 No Comments
              </div>
            </div>
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden lg:mt-10 lg:-mb-10">
              <Image
                src="/img-card-our-mission.webp"
                alt="img-card-our-mission"
                className="w-full rounded-t-3xl"
                width={356}
                height={180}
                loading="lazy"
              />
              <div className="p-8 border-b border-black">
                <h4 className="title-h4 text-[#1A70BA]">Essential SEO Tactics for Improving Online Visibility</h4>
                <Link href={''} className="text-secondary">READ MORE »</Link>              
              </div>
              <div className="px-8 py-4">
                March 11, 2024 No Comments
              </div>
            </div>
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden">
              <Image
                src="/img-card-our-mission.webp"
                alt="img-card-our-mission"
                className="w-full rounded-t-3xl"
                width={356}
                height={180}
                loading="lazy"
              />
              <div className="p-8 border-b border-black">
                <h4 className="title-h4 text-[#1A70BA]">Essential SEO Tactics for Improving Online Visibility</h4>
                <Link href={''} className="text-secondary">READ MORE »</Link>              
              </div>
              <div className="px-8 py-4">
                March 11, 2024 No Comments
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            <h3 className="title-h3 text-black">SEO FAQs</h3>
          </div>
          <div className="grid grid-cols-2 gap-16 w-10/12 mx-auto lg:mt-12">
            <div>
              <ul className="list-none list-faq flex flex-col gap-6 text-lg font-medium">
                <li>What Is SEO? <AiOutlineRight className="icon-right" /></li>
                <li>Why Is SEO Important? <AiOutlineRight className="icon-right" /></li>
                <li>Why Is SEO Important For Small Business? <AiOutlineRight className="icon-right" /></li>
                <li>How to Hire an SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>What Does An SEO Service Do? <AiOutlineRight className="icon-right" /></li>
                <li>What Does An SEO Service Do? <AiOutlineRight className="icon-right" /></li>
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
              </ul>
            </div>
            <div>
              <ul className="list-none list-faq flex flex-col gap-6 text-lg font-medium">
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>Why Is SEO Important? <AiOutlineRight className="icon-right" /></li>
                <li>Why Is SEO Important For Small Business? <AiOutlineRight className="icon-right" /></li>
                <li>How to Hire an SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>What Does An SEO Service Do? <AiOutlineRight className="icon-right" /></li>
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
                <li>How do I choose the best SEO Agency? <AiOutlineRight className="icon-right" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto w-full flex flex-col pb-16">
        <Image
          src="/illustration-7.webp"
          alt="illustration-7"
          className="absolute top-0 left-0 mx-auto"
          width={1920}
          height={1450}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative pt-32">
          <div className="w-6/12 mx-auto text-center mb-20">
            <h3 className="title-h3 text-[#1A70BA]">We&rsquo;d Love To Hear From You!</h3>
            <p className="mb-5 font-medium">If you have any questions, please do get in touch with us! If you&rsquo;d prefer to speak directly to a consultant, <Link href={''} className="text-secondary">Book A Call!</Link></p>
          </div>
          <div className="w-7/12 mx-auto mb-24">
            <form>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Name</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="name" />
                  </div>
                </div>
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Email</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="name" />
                  </div>
                </div>
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Phone</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="name" />
                  </div>
                </div>
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Message</label>
                  <div className="input-field">
                    <textarea className="w-full focus:outline-none placeholder:text-slate-500 p-3" cols={6} rows={6}></textarea>
                  </div>
                </div>
                <div className="flex w-full">
                  <button type="submit" className="btn-secondary w-full">Contact Us</button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center">
            <div className="text-center">
              <h3 className="title-h3 text-[#1A70BA]">Check Out Some Of Our Awards From The Last Few Years</h3>
            </div>
            <div className="grid grid-cols-6 gap-12 items-center">
              <div>
                <Image
                  src="/awards/img-awards-1.webp"
                  alt="img-awards-1"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/awards/img-awards-2.webp"
                  alt="img-awards-2"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/awards/img-awards-3.webp"
                  alt="img-awards-3"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/awards/img-awards-4.webp"
                  alt="img-awards-4"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/awards/img-awards-5.webp"
                  alt="img-awards-5"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
              <div>
                <Image
                  src="/awards/img-awards-6.webp"
                  alt="img-awards-6"
                  className=""
                  width={178}
                  height={256}
                  loading="lazy"
                />
              </div>
            </div>
          </div>          
        </div>
      </div>
    </main>
  );
}
