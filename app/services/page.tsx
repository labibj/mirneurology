import Image from "next/image";
import LogoSlider from "../_components/LogoSlider";
import dataLogoSlider from "../_data/logo-slider-data.json";
import dataLogoSliderSm from "../_data/logo-slider-data-sm.json";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function Services() {
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
      <div className="relative flex xl:h-80 lg:h-48 h-auto items-center xl:mb-0 mb-8 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none py-3 lg:py-0 mt-56 sub-page-banner">
            <Image
              src="/illustration-logos.webp"
              alt="illustration-logos"
              className="absolute top-0 left-0 hidden xl:block"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
              loading="lazy"
            />
            <div className="max-w-7xl xl:w-7/12 lg:w-10/12 w-full mx-auto hidden lg:block relative text-center">
                <h2 className="title-h2 text-white"><span className="text-primary">SEO Services</span> To Boost Your Websites Performance</h2>
                <Link href="" className="btn-primary rounded-full">
                    BOOK A CALL
                </Link>
            </div>
      </div>
      <div className="lg:py-16 py-8 lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div>
                <Image
                    src="/img-video-placeholder.webp"
                    alt="img-video-placeholder"
                    className="w-full rounded-3xl border border-[#02C088] transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl"
                    width={571}
                    height={321}
                    loading="lazy"
                />
            </div>
            <div className="self-center lg:pr-20">
                <p className="mb-5">Pearl Lemon is one of the leading SEO agencies in London. Hire our award-winning SEO specialists to double your organic traffic. Book a call to learn how we can set an SEO strategy for your business.</p>
                <p className="mb-5">Our services are designed to get your website <span className="text-secondary">ranking HIGHER in search results.</span> Let us help you with your <span className="text-secondary">SEO Services In London</span></p>
                <p className="text-tertiary">Higher Rankings &gt; More Traffic &gt; More Conversions.</p>
            </div>
        </div>
      </div>      
      <div className="relative xl:h-[1367px] max-w-[1920px] mx-auto w-full flex flex-col lg:px-0 px-5 pt-8 lg:pt-0">
        <Image
          src="/illustration-8.webp"
          alt="illustration-8"
          className="absolute top-0 left-0 mx-auto object-contain hidden lg:block"
          width={1195}
          height={1367}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative lg:pt-12">
          <div className="lg:w-11/12 w-full mx-auto text-center lg:mb-20 mb-4">
            <h3 className="title-h3 text-[#1A70BA]">We Are A Full-Service SEO Agency</h3>
            <p className="font-medium">We are a full-service London <span className="text-secondary font-semibold">SEO agency</span>, serving clients across the globe! If there&rsquo;s an SEO service that you require that isn&rsquo;t listed below, let us know, and we&rsquo;ll incorporate it into your <span className="text-secondary font-semibold">bespoke SEO strategy!</span></p>
          </div>
          <div className="w-10/12 mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">Local SEO</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">SEO Audit</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">WordPress SEO</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">E-Commerce SEO</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">Technical SEO</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
            <div className="card lg:items-start items-center text-center lg:text-left bg-white border border-[#1A70BA]  flex flex-col p-8 relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl">
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
              <div className="title-h5 text-[#1A70BA]">International SEO</div>
              <p className="mb-5 font-medium">Dominate the SERPs and generate more local business! We use proven local ranking factors to BOOST your organic visibility and increase your bottom line.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
          </div>
        </div>
      </div>      
      <div className="lg:py-16 lg:py-0 py-8 lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">Some Of Our Clients</h3>
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 items-center justify-items-center">
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
      <div className="lg:pt-32 lg:pb-48 py-8 lg:px-0 px-5 relative">
        <Image
          src="/illustration-9.webp"
          alt="illustration-9"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden xl:block"
          width={1920}
          height={724}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto flex lg:flex-row flex-col relative">
          <div className="lg:w-9/12 w-full mx-auto flex lg:flex-row flex-col">
            <div className="lg:w-6/12 w-full lg:text-left text-center">
              <h4 className="title-h4 text-[#1A70BA]">Our Approach To Organic Search</h4>
              <p className="mb-3">As an London SEO agency, we don&rsquo;t take a &rsquo;one solution fits all&rsquo; approach - our SEO team will design and implement bespoke campaigns for our clients. Many SEO service companies focus on optimising solely for Google.</p>
              <p className="mb-3">However, we recognise the need to get the perfect balance between essentially &rsquo;optimising for your customers&rsquo; - to ensure that they get the best experience when they visit your site, whilst also increasing your visibility on the search engine results pages.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
            <div className="lg:w-6/12 lg:pl-16 w-full self-center">
              <Image
                src="/img-organic-search.webp"
                alt="img-organic-search"
                className="w-full"
                width={388}
                height={243}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>      
      <div className="relative xl:h-[557px] flex flex-col justify-center xl:py-0 lg:py-16 py-8 xl:px-0 px-5  bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none">
        <Image
          src="/illustration-10.webp"
          alt="illustration-10"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden xl:block"
          width={1920}
          height={557}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="lg:w-7/12 mx-auto text-white text-center">
            <h2 className="title-h2">Why Not Book A Call?</h2>
            <p className="mb-5">We would love to help you with a bespoke SEO service in London. Pearl Lemon can get you ranking better for improvement in the long-run. Book a call today!</p>
            <Link href="" className="btn-primary rounded-full">
              BOOK A CALL
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:py-32 py-8 lg:px-0 px-5 relative">
        <div className="w-full max-w-7xl mx-auto flex gap-12">
          <div className="lg:w-5/12 self-center">
            <Image
              src="/img-london-seo-services.webp"
              alt="img-london-seo-services"
              className="w-full border-2 border-[#02C088] rounded-2xl"
              width={538}
              height={358}
              loading="lazy"
            />
          </div>
          <div className="lg:w-7/12">
            <h2 className="title-h2 text-[#1A70BA]">London SEO Services</h2>
            <p className="mb-5">We understand that getting your search engine optimization right is vital to your success. We are an SEO Company London clients can trust - check out <span className="text-secondary">our core values</span></p>
            <p className="mb-5">Our leading SEO services are what London businesses need to boost their online presence and increase their visibility in the search engines. Check out our <span className="text-secondary">case studies</span> to see how our SEO agency in London has helped businesses like yours succeed.</p>
            <p className="mb-8">Here at Pearl Lemon, all of our results-driven campaigns are bespoke to suit our clients&rsquo; individual needs. We essentially provide affordable SEO services London businesses require to stand out amongst the competition. As a top-notch SEO agency London, we ensure your online success with tailored strategies- <span className="text-secondary">get a free SEO audit.</span></p>
            <Link href="" className="btn-primary rounded-full">
              BOOK A CALL
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center xl:py-0 lg:py-16 py-8 xl:px-0 px-5 bg-[#e8f1f8] xl:bg-transparent">
        <Image
          src="/illustration-11-top.webp"
          alt="illustration-11-top"
          className="absolute top-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={138}
          loading="lazy"
        />
        <Image
          src="/illustration-11-bottom.webp"
          alt="illustration-11-bottom"
          className="absolute bottom-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={133}
          loading="lazy"
        />
        <div className="bg-[#E9F1F9] lg:mt-[137px] lg:mb-[132px]">
          <div className="w-full max-w-7xl mx-auto relative flex lg:flex-row lg:pb-12">
            <div className="lg:w-7/12 lg:pr-24">
              <h2 className="title-h2 text-[#1A70BA]">Bespoke SEO Services Designed to Bring Your Company Success</h2>
              <p className="mb-5">Our founder & <span className="text-secondary">SEO Consultant</span>, Deepak Shukla, lives in Fulham Broadway, London. Before entering the world of online marketing, Deepak worked for Deloitte (as a tax consultant) and Wavemaker, so he has an in-depth understanding of how a business operates in the city.</p>
              <p className="mb-5">With that said, he&rsquo;s also travelled to over 50 countries - which enables him to collaborate with clients from all over the world. He has even met some of his clients in Israel and Amsterdam!</p>
              <p className="mb-5">Deepak is an award-winning London SEO Consultant, so you can rest assured that your company and campaign is in good hands. Deepak goes far beyond just London though, he has brought success to clients in the United States, throughout the United Kingdom, Germany, Malta, Estonia, Czech Republic and more.As an esteemed SEO agency London, Deepak&rsquo;s expertise transcends borders, ensuring exceptional results worldwide.</p>
              <p className="mb-12">As an SEO expert, London based, Dee has also been featured in countless press releases including podcasts, blog posts, and webinars.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
            <div className="lg:w-4/12 self-center">
              <Image
                src="/img-bespoke-seo.webp"
                alt="img-bespoke-seo"
                className="w-full"
                width={500}
                height={545}
                loading="lazy"
              />
            </div>
          </div>
        </div>        
      </div>
      <div className="relative flex xl:h-80 lg:h-48 h-auto items-center xl:mb-0 mb-8 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none py-3 lg:py-0">
        <Image
          src="/illustration-logos.webp"
          alt="illustration-logos"
          className="absolute top-0 left-0 hidden xl:block"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }} // optional
          loading="lazy"
        />
        <div className="max-w-7xl xl:w-7/12 lg:w-10/12 w-full mx-auto hidden lg:block">
          <LogoSlider data={dataLogoSlider} />
        </div>
        <div className="max-w-7xl xl:w-7/12 lg:w-10/12 w-full mx-auto block lg:hidden">
          <LogoSlider data={dataLogoSliderSm} />
        </div>
      </div>
      <div className="xl:py-32 lg:py-16 py-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-7/12 w-full pr-16">
              <Image
                src="/schedule-consultation-today.webp"
                alt="schedule-consultation-today"
                className="hidden lg:block"
                width={599}
                height={296}
                loading="lazy"
              />                
            </div>
            <div className="lg:w-5/12 w-full self-center lg:text-left text-center">
              <h4 className="title-h4 text-[#1A70BA]">Schedule a Consultation today!</h4>
              <Image
                src="/schedule-consultation-today.webp"
                alt="schedule-consultation-today"
                className="block lg:hidden mb-8"
                width={599}
                height={296}
                loading="lazy"
              />
              <form>
                <div className="flex flex-col gap-6">
                <label className="sr-only">Enter Website</label>
                  <div className="input-field">                      
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Enter website" id="" />
                  </div>
                  <label className="sr-only">Your email</label>
                  <div className="input-field">                      
                    <input type="email" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your email" id="" />
                  </div>
                  <label className="sr-only">Your phone</label>
                  <div className="input-field">                      
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your phone" id="" />
                  </div>
                  <div className="flex w-full justify-center lg:justify-start">
                    <button type="submit" className="btn-secondary rounded-full">Get My Audit</button>
                  </div>
                </div>
              </form>
            </div>              
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center xl:py-0 lg:py-16 py-8 xl:px-0 px-5 bg-[#e8f1f8] xl:bg-transparent">
        <Image
          src="/illustration-12-top.webp"
          alt="illustration-12-top"
          className="absolute top-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={138}
          loading="lazy"
        />
        <Image
          src="/illustration-12-bottom.webp"
          alt="illustration-12-bottom"
          className="absolute bottom-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={133}
          loading="lazy"
        />
        <div className="bg-[#E9F1F9] lg:mt-[69px] lg:mb-[120px]">
          <div className="w-full max-w-7xl mx-auto relative">
            <div className="text-center mb-10">
              <h2 className="title-h2 text-[#1A70BA]">How Pearl Lemon SEO Services Works</h2>
              <p className="lg:mb-20">Choosing Pearl Lemon as your SEO Agency is a simple and painless process.</p>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-16">
              <div className="card bg-white px-6 py-12 rounded-2xl border-2 border-[#02C088] transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-2xl overflow-hidden">
                <div className="title-h4 text-[#1A70BA]">First Step:</div>
                <p>Book a call with our Head of Business Development, Ion, to discuss your needs and desires for your SEO campaign. He will design and outline the best package for you to ensure that we are the perfect SEO agency, London based, for you.</p>
              </div>
              <div className="card bg-white px-6 py-12 rounded-2xl border-2 border-[#02C088] transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-2xl overflow-hidden">
                <div className="title-h4 text-[#1A70BA]">First Step:</div>
                <p>Book a call with our Head of Business Development, Ion, to discuss your needs and desires for your SEO campaign. He will design and outline the best package for you to ensure that we are the perfect SEO agency, London based, for you.</p>
              </div>
              <div className="card bg-white px-6 py-12 rounded-2xl border-2 border-[#02C088] transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-2xl overflow-hidden">
                <div className="title-h4 text-[#1A70BA]">First Step:</div>
                <p>Book a call with our Head of Business Development, Ion, to discuss your needs and desires for your SEO campaign. He will design and outline the best package for you to ensure that we are the perfect SEO agency, London based, for you.</p>
              </div>
              <div className="card bg-white px-6 py-12 rounded-2xl border-2 border-[#02C088] transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-2xl overflow-hidden">
                <div className="title-h4 text-[#1A70BA]">First Step:</div>
                <p>Book a call with our Head of Business Development, Ion, to discuss your needs and desires for your SEO campaign. He will design and outline the best package for you to ensure that we are the perfect SEO agency, London based, for you.</p>
              </div>
            </div>
          </div>
        </div>        
      </div>
      <div className="lg:py-20 py-8 lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">Testimonials</h3>
          <p className="lg:mb-5 mb-2 font-medium">What <span className="text-secondary">Our Patients</span> Say About Our Neurology Services in Hagerstown.</p>
          <p className="lg:mb-12 mb-2 font-medium">Here at <span className="text-secondary">Pearl Lemon</span>, we can help your company grow. We are THE SEO agency London businesses know, love and trust!</p>
          <div className="mx-auto w-full rounded-full border border-[#02C088] bg-white relative text-center transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-2xl lg:px-56 lg:py-16">
            <div className="title-h5 text-[#1A70BA]">Our Neurology Services in Hagerstown.</div>
            <p className="leading-8">Once your form is filled out, our team of SEO will have an onboarding call with you to be sure we understand your answers and to ask any additional questions we may have. As a bonus, we get a little bit of extra time to get to know you</p>
            <div className="inline-flex flex-col items-center gap-2 absolute -bottom-24 left-0 right-0 mx-auto">
              <div className="rounded-circle">
                <Image
                  src="/alsaba.webp"
                  alt="alsaba"
                  className="rounded-full border border-[#1A70BA] shadow-lg"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <div className="self-center">
                <div className="text-[#1A70BA] text-2xl font-semibold">ALSABA</div>
                <div className="text-[#02C088] text-sm font-normal">Graphic Designer</div>
              </div>
            </div>
          </div>          
        </div>
      </div>
      <div className="relative flex xl:min-h-[653px] items-center xl:mb-0 mb-8 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none py-3 lg:py-0">
        <Image
          src="/illustration-13.webp"
          alt="illustration-13"
          className="absolute top-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={653}
          loading="lazy"
        />
        <div className="max-w-7xl w-full mx-auto lg:w-6/12 text-white text-center relative lg:mt-20">
          <h2 className="title-h2">SEO Case Studies</h2>
          <p className="mb-12">Here at Pearl Lemon, one of our core values is transparency. We are proud of this value as it sets us apart as an SEO company London businesses love. <span className="text-primary">We provide our clients with an extensive collection of case studies and reviews to demonstrate the results and experience they can expect when working with us.</span></p>
          <Link href="" className="btn-primary rounded-full">
            BOOK A CALL
          </Link>          
        </div>
      </div>
      <div className="py-3 lg:py-16">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex lg:flex-row flex-col gap-8 lg:mb-48">
            <div className="lg:w-5/12">
              <Image
                src="/img-insurance-1.webp"
                alt="img-insurance-1"
                className="w-full border border-[#02C088] rounded-2xl"
                width={576}
                height={324}
                loading="lazy"
              />
            </div>
            <div className="lg:w-7/12 self-center lg:pr-24">
              <p className="mb-12 font-medium">We accept Medicare, Medicaid, and almost all commercial insurance as payment. Our billing staff is happy to help patients who may require a payment plan. For questions related to insurance or billing, reach out to us at +1 (301) 797-7600. Copayments and outstanding balances are expected to be paid at the time of service. We appreciate a 24 hour cancellation notice, otherwise a fee may apply. Please note that health insurance does not cover auto-accident related treatment.</p>
              <Link href="" className="btn-primary rounded-full">
                SEE MORE!
              </Link> 
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">            
            <div className="lg:w-7/12 self-center lg:pr-24">
              <p className="mb-12 font-medium">We accept Medicare, Medicaid, and almost all commercial insurance as payment. Our billing staff is happy to help patients who may require a payment plan. For questions related to insurance or billing, reach out to us at +1 (301) 797-7600. Copayments and outstanding balances are expected to be paid at the time of service. We appreciate a 24 hour cancellation notice, otherwise a fee may apply. Please note that health insurance does not cover auto-accident related treatment.</p>
              <Link href="" className="btn-primary rounded-full">
                SEE MORE!
              </Link> 
            </div>
            <div className="lg:w-5/12">
              <Image
                src="/img-insurance-1.webp"
                alt="img-insurance-1"
                className="w-full border border-[#02C088] rounded-2xl"
                width={576}
                height={324}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center py-3 lg:py-0 bg-[#e8f1f8] xl:bg-transparent">
        <Image
          src="/illustration-14-top.webp"
          alt="illustration-14"
          className="absolute top-0 left-0 right-0 mx-auto hidden xl:block"
          width={1920}
          height={653}
          loading="lazy"
        />
      </div>
      <div className="relative max-w-[1920px] mx-auto w-full flex flex-col lg:pb-16 lg:pt-0 py-8 bg-[#e8f1f8] xl:bg-transparent xl:px-0 px-5">
        <Image
          src="/illustration-7.webp"
          alt="illustration-7"
          className="absolute top-0 left-0 mx-auto hidden lg:block"
          width={1920}
          height={1450}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative lg:pt-32">
          <div className="lg:w-6/12 w-full mx-auto text-center lg:mb-20 mb-5">
            <h3 className="title-h3 text-[#1A70BA]">We&rsquo;d Love To Hear From You!</h3>
            <p className="mb-5 font-medium">If you have any questions, please do get in touch with us! If you&rsquo;d prefer to speak directly to a consultant, <Link href={''} className="text-secondary">Book A Call!</Link></p>
          </div>
          <div className="lg:w-7/12 w-full mx-auto lg:mb-24 mb-8">
            <form>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Name</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="" />
                  </div>
                </div>
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Email</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="" />
                  </div>
                </div>
                <div>
                  <label className="label text-[#1A70BA] mb-2 block">Phone</label>
                  <div className="input-field">                  
                    <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="" />
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
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-12 gap-8 items-center justify-items-center">
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
