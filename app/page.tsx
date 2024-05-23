import Image from "next/image";
import LogoSlider from "./_components/LogoSlider";
import dataLogoSlider from "./_data/logo-slider-data.json";
import dataLogoSliderSm from "./_data/logo-slider-data-sm.json";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import FAQAccordionColOne from './_components/FAQAccordionOne';
import FAQAccordionColTwo from './_components/FAQAccordionTwo';

const questionsColOne = [
  {
    question: "What services does Mir Neurology Clinic offer? How does virtual healthcare ensure privacy?",
    answer:
      "Mir Neurology Clinic offers comprehensive neurological care, including diagnosis, treatment, and management of various neurological disorders and conditions.",
  },
  {
    question: "How can I schedule an appointment online?",
    answer:
      "To schedule an appointment online, visit our website, click 'Book Appointment', and fill out the necessary information form.",
  },
  {
    question: "What conditions do you treat at Mir Neurology?",
    answer:
      "We treat migraines, epilepsy, Parkinson's disease, multiple sclerosis, neuropathies, stroke, and other complex neurological conditions at Mir Neurology Clinic.",
  },
  {
    question: "What are the clinic’s operating hours currently?",
    answer:
      "Our clinic operates Monday to Friday, 9 AM to 5 PM. We are closed on weekends and public holidays.",
  },
  {
    question: "Do you accept all major insurance plans?",
    answer:
      "Yes, we accept most major insurance plans. Please check with our office or your provider for specific coverage details.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring your insurance card, ID, referral forms, medical records, and a list of current medications to your appointment.",
  },
  {
    question: "How can I access my medical records?",
    answer:
      "You can access your medical records through our patient portal. Log in with your credentials to view and download your records.",
  },
  {
    question: "Are telehealth services available at Mir Neurology?",
    answer:
      "Yes, we offer telehealth consultations for patients who prefer remote appointments. Schedule through our website or call our office.",
  },
];

const questionsColTwo = [
  {
    question: "What are the signs of a stroke?",
    answer:
      "Signs of a stroke include sudden numbness, confusion, trouble speaking, vision problems, dizziness, and severe headache. Seek immediate medical attention.",
  },
  {
    question: "How can I prepare for a neurology appointment?",
    answer:
      "Prepare for your neurology appointment by listing symptoms, bringing medical history, and noting any questions or concerns you might have.",
  },
  {
    question: "What treatments are available for migraines?",
    answer:
      "Treatments for migraines include medications, lifestyle changes, stress management, and preventive therapies tailored to individual patient needs and responses.",
  },
  {
    question: "How do I know if I need a neurologist?",
    answer:
      "If experiencing chronic headaches, seizures, numbness, weakness, or memory problems, a neurologist can help diagnose and treat these symptoms.",
  },
  {
    question: "What is the process for new patient registration?",
    answer:
      "New patients can register by completing the registration form on our website or by visiting our clinic and filling it out in person.",
  },
  {
    question: "How often should I visit a neurologist?",
    answer:
      "Visit frequency depends on your condition. Some may need regular check-ups, while others might only require annual or bi-annual visits.",
  },
  {
    question: "What diagnostic tests are performed at your clinic?",
    answer:
      "Our clinic performs EEGs, EMGs, MRI scans, CT scans, and other diagnostic tests to accurately diagnose and treat neurological conditions.",
  },
  {
    question: "How do I refill my prescription medications?",
    answer:
      "To refill prescriptions, contact our office or request through the patient portal. Allow 48 hours for processing and approval.",
  },
];

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
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full max-w-7xl mx-auto lg:pt-56 xl:pb-0 pt-24 pb-8 px-5 xl:px-0 intro-banner">
        <div  className="self-center lg:text-left text-center">
          <h1 className="title-h1"><span className="font-bold">Mir Neurology</span> Best Neurology Clinic in Hagerstown</h1>
          <h2 className="title-h2">Take Charge Of Your Health Journey Today!</h2>
          <Image
            src="/top-rated-neurology.jpg"
            alt="top-rated-neurology"
            className="block lg:hidden mb-4"
            width={734}
            height={714}
            loading="lazy"
          />
          <p className="text-xl text-[#8C8C8C] font-semibold mb-6">We are an experienced team of neurologists operating in the Hagerstown area.</p>
          <form>
              <div className="flex flex-col gap-5">                
                <div className="input-field">
                  <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Email" id="" />
                </div>                
                <div className="input-field">
                  <input type="email" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Phone" id="" />
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
            className="hidden lg:block"
            width={734}
            height={714}
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative flex flex-col justify-center xl:h-80 lg:h-48 h-auto items-center xl:mb-0 mb-8 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none py-3 lg:py-0">
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
            <div className="text-white font-bold text-base relative mb-3">As Featured In:</div>
            <div className="max-w-7xl xl:w-7/12 lg:w-10/12 w-full mx-auto hidden lg:block">
              <LogoSlider data={dataLogoSlider} />
            </div>
            <div className="max-w-7xl xl:w-7/12 lg:w-10/12 w-full mx-auto block lg:hidden">
              <LogoSlider data={dataLogoSliderSm} />
            </div>
      </div>
      <div className="relative xl:h-[987px] lg:h-[535px] flex flex-col justify-center bg-gradient-to-t from-[#1A70BA] to-[#02C088] lg:bg-none lg:py-0 py-8 lg:px-0 px-5">
        <Image
          src="/illustration-reviews.webp"
          alt="illustration-reviews"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden lg:block"
          width={1920}
          height={987}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative flex flex-col">
          <div className="text-center lg:w-7/12 w-full mx-auto mb-5">
            <h3 className="title-h3">Reviews</h3>
            <p className="xl:leading-[48px] lg:leading-[24px]">Insights from <span className="text-primary font-bold">our patients.</span> Real experiences, Real impact. </p>
          </div>              
          <div className="text-center">
            <div className="flex flex-col gap-1 xl:mb-10 lg:mb-5 mb-4">
              <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">636+</span>
              <span className="text-xs">TOTAL REVIEWS</span>
            </div>
            <div className="grid grid-cols-3 xl:gap-8 lg:gap-4 gap-4">
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">171+</span>
                <span className="text-xs">ON GOOGLE</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">121+</span>
                <span className="text-xs">ON TRUSTPILOT</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">141+</span>
                <span className="text-xs">ON GLASSDOOR</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">63+</span>
                <span className="text-xs">ON FACEBOOK</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">11+</span>
                <span className="text-xs">ON YELL</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">30+</span>
                <span className="text-xs">ON UPWORK</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">68+</span>
                <span className="text-xs">ON CLUTCH</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">20+</span>
                <span className="text-xs">ON INDEED</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="xl:text-4xl lg:text-3xl text-2xl font-semibold">11+</span>
                <span className="text-xs">ON DESIGN RUSH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-16 py-8 lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">Testimonials</h3>
          <p className="lg:mb-5 mb-2 font-medium"><span className="text-secondary font-extrabold">Patients&rsquo;</span> Experiences Regarding Our Neurology Services in Hagerstown. </p>
          <div className="text-sm leading-8 mx-auto lg:w-9/12 w-full mb-5">
            Mir Neurology in Hagerstown has truly been a beacon of hope for me. From the moment I walked through their doors, I felt heard, understood, and cared for. The expertise of the team combined with their genuine compassion has made all the difference in my journey towards better health. I can't thank them enough for their dedication to improving lives. Highly recommended!
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
              <div className="text-sm">Successfully Treated Patient</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:h-[708px] lg:h-[550px] flex flex-col justify-center lg:mb-16 mb-0 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none lg:py-0 py-8 lg:px-0 px-5">
        <Image
          src="/illustration-1.webp"
          alt="illustration-1"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden xl:block"
          width={1920}
          height={708}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative">
          <div className="flex lg:flex-row flex-col lg:gap-8">
            <div className="lg:w-7/12 w-full">
              <Image
                src="/neurological-clinic.webp"
                alt="neurological-clinic"
                className="object-cover	hidden lg:block"
                width={650}
                height={438}
                loading="lazy"
              />
            </div>
            <div className="self-center lg:w-5/12 w-full text-center lg:text-left">
              <h3 className="title-h3">Searching for the Best Neurological Clinic in Hagerstown?</h3>
              <Image
                src="/neurological-clinic.webp"
                alt="neurological-clinic"
                className="object-cover	block lg:hidden mb-5 mx-auto"
                width={650}
                height={438}
                loading="lazy"
              />
              <p className="mb-5 font-medium">It is not easy to choose a competent <span className="text-primary font-bold">neurologist</span> among the many specialists in USA who can help you treat your neurological problems!</p>
              <p className="mb-5 font-medium">It can sometimes be very difficult to be able to choose a specialist who has the right level of knowledge, expertise and experience in the diagnosis and <span className="text-primary font-bold">treatment of your health</span> that can bring about significant changes in your health.</p>
              <p className="mb-5 font-medium">This is where <span className="lg:text-tertiary text-primary font-bold">Mir Neurology Clinic</span> comes into play. We offer outstanding service in that regard.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:m-h-[1802px] max-w-[1920px] mx-auto w-full flex flex-col lg:px-0 px-5 pt-8 lg:pt-0 lg:pb-32">
        <Image
          src="/illustration-2.webp"
          alt="illustration-2"
          className="absolute top-0 left-0 mx-auto object-contain hidden lg:block"
          width={1285}
          height={1802}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative lg:pt-12">
          <div className="lg:w-11/12 w-full mx-auto text-center lg:mb-20 mb-4">
            <h3 className="title-h3 text-[#1A70BA]">What We Do Best At Mir Neurology Clinic</h3>
            <p className="mb-5 font-medium">We Offer <span className="text-secondary font-extrabold">Excellent Neurology Services</span> that You Can Use to Improve Your Health.</p>
            <p className="font-medium">The neurology field is more competitive and more complex than ever. You need a neurology clinic with the expertise to place your health where it belongs: in the hands of a team of specialists. As a full-service neurology clinic, we are able to put this and so much more in our repertoire.</p>
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
              <div className="title-h5 text-[#1A70BA]">Migraine</div>
              <p className="mb-5 font-medium">We provide individualized treatment for migraines combining advanced therapy and individually planned care to reduce frequency and/or severity of migraines to improve patients&rsquo; quality of life at Mir Neurology Clinic.</p>
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
              <div className="title-h5 text-[#1A70BA]">Dizziness</div>
              <p className="mb-5 font-medium">It involves a guided approach by our specialists to identifying and managing dizziness according to one&rsquo;s body using a wide range of assessment and treatment methods for treating the causes of imbalance and instability.</p>
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
              <div className="title-h5 text-[#1A70BA]">Seizure</div>
              <p className="mb-5 font-medium">We offer seizure management services by conducting our mild diagnosis and seizure treatment and developing individualized treatment plans and long-term seizure management that will make the patient to achieve increased seizure control and good functioning of their daily life.</p>
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
              <div className="title-h5 text-[#1A70BA]">Head Injury</div>
              <p className="mb-5 font-medium">Working at the forefront of modern neurology, Mir Neurology Clinic specializes in the diagnosis and treatment of head injuries by utilizing the most advanced intervention techniques and promoting recovery and brain health through rehabilitation.</p>
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
              <div className="title-h5 text-[#1A70BA]">Stroke</div>
              <p className="mb-5 font-medium">With our team of doctors and specialists, we provide timely and long-term management for stroke patients by performing advanced interventions to prevent damage and guide recovery.</p>
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
              <div className="title-h5 text-[#1A70BA]">Multiple Sclerosis</div>
              <p className="mb-5 font-medium">We treat Multiple Sclerosis by employing the most advanced medications and developing personalized care to reduce flare symptoms and provide the best quality of life.</p>
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
              <div className="title-h5 text-[#1A70BA]">Neuropathy</div>
              <p className="mb-5 font-medium">Mir Neurology is a leading provider of neuropathy treatment that utilizes emerging treatments and individualized care to alleviate pain, improve functionality, and promote nerve health.</p>
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
              <div className="title-h5 text-[#1A70BA]">Alzheimer&rsquo;s Disease</div>
              <p className="mb-5 font-medium">We also have a specialty clinic for Alzheimer&rsquo;s disease patients and we provide stage-1 and stage-2 management with early diagnosis, advanced care and boosting the quality of life of the patients and their caretakers.</p>
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
              <div className="title-h5 text-[#1A70BA]">Botox</div>
              <p className="mb-5 font-medium">Our Botox treatments are specifically focused on neurological conditions that cause chronic migraines and muscle spasticity, and our medical professionals perform Botox injections with the goal of reducing discomfort rather than like a beauty treatment.</p>
              <div>
                <Link href={''} className="border-b-2 border-b-[#02C088]">LEARN MORE</Link>
              </div>              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-7xl mx-auto lg:py-16 py-8 lg:px-0 px-5">
        <div className="lg:w-9/12 md:w-10/12 mx-auto flex lg:flex-row flex-col gap-2 justify-center">
          <Image
            src="/we-practice-what-we-preach.webp"
            alt="we-practice-what-we-preach"
            className="self-center md:w-full lg:w-auto"
            width={623}
            height={431}
            loading="lazy"
          />
          <div className="lg:rounded-r-2xl lg:rounded-l-none rounded-xl bg-gradient-to-t from-[#1A70BA] to-[#02C088] flex flex-col justify-center px-12 break-normal text-center lg:w-4/12 w-full lg:py-0 py-8">
            <div className="text-white font-semibold text-lg">&rsquo;We Practice What<br /> We Preach!&rsquo;</div>
          </div>
        </div>
      </div> */}
      <div className="lg:pt-16 lg:pb-28 py-8 bg-[#e8f1f8] lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto">
          <div className="lg:w-10/12 w-full mx-auto text-center lg:mb-20 mb-5">
            <h3 className="title-h3 text-[#1A70BA]">Years Of Experience Combined With Cutting Edge Technology</h3>
            <Image
                src="/excellence-awards.webp"
                alt="excellence-awards"
                className="w-full lg:hidden block mb-8"
                width={495}
                height={391}
                loading="lazy"
              />
            <div className="lg:w-5/12 w-full mx-auto text-center mb-5">
              <p className="font-medium">We&rsquo;re recognized in the health industry as <span className="text-secondary">top healthcare provider</span> in Hagerstown.</p>
            </div>
            <p className="font-medium">You&rsquo;re seeking the best <span className="text-secondary">neurological services</span> for your health. Top-rated centers such as Mayo Clinic, UC Health, and Cleveland Clinic acknowledge <span className="text-secondary">Mir Neurology Clinic</span> as a leading US neurological provider.</p>
          </div>
          <div className="lg:w-9/12 w-full mx-auto flex lg:flex-row flex-col">
            <div className="lg:w-5/12 w-full lg:text-left text-center">
              <p className="lg:mb-10 mb-4">At <strong>Mir Neurology</strong> in Hagerstown, we offer comprehensive care for various neurological disorders using state-of-the-art diagnostic tools. Our highly trained specialists are committed to providing personalized treatment plans for conditions ranging from migraines to Parkinson's disease, ensuring tailored care for each patient. <strong>Mir Neurology Clinic</strong> is admired by many as seen on healthgrades.</p>
              <p className="lg:mb-10 mb-4">We prioritize a patient-centered approach, involving patients and families in the treatment process. Mir Neurology Clinic garners admiration from many, as highlighted in MediFind. Our collaborative method enhances understanding and empowers informed decision-making, creating a supportive environment for managing and recovering from neurological conditions.</p>
              <p className=""><strong>Mir Neurology</strong> stays at the forefront of neurological science through continuous research and professional development. Many admire Mir Neurology Clinic, a sentiment reflected on WebMD. We integrate the latest advancements into our practice, providing cutting-edge treatments to enhance our patients&rsquo; quality of life. Our compassionate approach ensures the highest standard of care.</p>
            </div>
            <div className="lg:w-7/12 lg:pl-16 w-full">
              <Image
                src="/excellence-awards.webp"
                alt="excellence-awards"
                className="w-full hidden lg:block"
                width={495}
                height={391}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative xl:h-[881px] flex flex-col justify-center lg:-mt-12 bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none xl:py-0 lg:py-16 py-8 lg:px-0 px-5">
        <Image
          src="/illustration-3.webp"
          alt="illustration-3"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden xl:block"
          width={1920}
          height={881}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="lg:w-9/12 w-full mx-auto flex lg:flex-row flex-col text-white">
            <div className="lg:w-6/12 lg:pr-12 w-full lg:text-left text-center">
              <h4 className="title-h4 text-[#ffffff]">Discover Exceptional Neurological Care</h4>
              <h5 className="title-h5 text-[#ffffff]">Experience Advanced, Compassionate Neurology Services at Mir Neurology</h5>
              <Image
                src="/schedule-an-appointment.webp"
                alt="schedule-an-appointment"
                className="w-full block lg:hidden"
                width={495}
                height={391}
                loading="lazy"
              />
              <p className="lg:mb-10 mb-4">Choose <span className="text-[#29F09E]">Mir Neurology</span> in Hagerstown for top-tier neurological care. With advanced diagnostics and personalized treatment plans, we address conditions like migraines, epilepsy, and multiple sclerosis.</p>
              <p className="lg:mb-10 mb-4">Experience our patient-centered approach, involving your family in treatment decisions. We ensure clear communication and empower you to make informed health choices. </p>
              <p className="lg:mb-10 mb-4">Benefit from cutting-edge advancements at <span className="text-[#29F09E]">Mir Neurology</span>. Our commitment to innovative and compassionate care enhances your well-being, providing the highest standard of neurological services.</p>
              <Link href="" className="btn-primary rounded-full">
                Get An Appointment
              </Link>
            </div>
            <div className="w-6/12">
              <Image
                src="/schedule-an-appointment.webp"
                alt="schedule-an-appointment"
                className="w-full hidden lg:block"
                width={495}
                height={391}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-40 lg:py-16 xl:-mt-24 bg-[#e8f1f8] lg:py-0 py-8 lg:px-0 px-5">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h3 className="title-h3 text-[#1A70BA]">We Have Worked With:</h3>
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
      <div className="relative xl:h-[724px] flex flex-col justify-center xl:-m-24 xl:py-0 lg:py-16 py-8 xl:px-0 px-5  bg-gradient-to-t from-[#1A70BA] to-[#02C088] xl:bg-none">
        <Image
          src="/illustration-4.webp"
          alt="illustration-4"
          className="absolute top-0 left-0 right-0 bottom-0 mx-auto object-contain hidden xl:block"
          width={1920}
          height={724}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto text-white relative">
          <div className="flex lg:flex-row flex-col lg:gap-8 items-center">
            <div className="w-6/12">
              <Image
                src="/insurance-information.webp"
                alt="insurance-information"
                className="w-full hidden lg:block"
                width={554}
                height={315}
                loading="lazy"
              />
            </div>
            <div className="self-center lg:w-6/12 lg:text-left text-center">
              <h3 className="title-h3">Insurance Information</h3>
              <Image
                src="/insurance-information.webp"
                alt="insurance-information"
                className="w-full block lg:hidden mb-4"
                width={554}
                height={315}
                loading="lazy"
              />
              <p className="mb-5 font-medium">At Mir Neurology, we strive to make healthcare accessible. We accept Medicare, Medicaid, and most commercial insurances. Our billing team is ready to assist with payment plans if needed. For insurance or billing inquiries, call us at +1 (301) 797-7600. Copayments and outstanding balances are due at the time of service. We request a 24-hour notice for cancellations to avoid fees. Please be aware that auto-accident related treatments are not covered by health insurance.</p>
              <Link href="" className="btn-primary rounded-full">
                BOOK A CALL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-40 lg:py-16 py-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-10/12 mx-auto">          
            <div className="text-center xl:mb-24 mb-8">
              <h3 className="title-h3 text-[#1A70BA]">Watch Our Neurological Case Study Videos</h3>
              <p className="">Explore the transformative outcomes of our specialized care through case study videos at <span className="text-secondary">Mir Neurology</span>. Witness our advanced diagnostics, personalized treatments, and compassionate support in real patient stories. From managing migraines to epilepsy and multiple sclerosis, see how we enhance lives. Visit our website to delve into these inspiring narratives and discover the exceptional care at <span className="text-secondary">Mir Neurology</span>.</p>
            </div>          
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
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
            {/* <div className="flex flex-col lg:flex-row">
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
                    <div className="input-field">                      
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Enter website" id="" />
                    </div>
                    <div className="input-field">                      
                      <input type="email" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your email" id="" />
                    </div>
                    <div className="input-field">                      
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="Your phone" id="" />
                    </div>
                    <div className="flex w-full justify-center lg:justify-start">
                      <button type="submit" className="btn-secondary rounded-full">Get My Audit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="lg:w-7/12 w-full pl-16">
                <Image
                  src="/schedule-consultation-today.webp"
                  alt="schedule-consultation-today"
                  className="hidden lg:block"
                  width={599}
                  height={296}
                  loading="lazy"
                />                
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto w-full flex flex-col xl:mb-24 mb-0 lg:px-0 px-5 bg-[#e8f1f8] lg:bg-transparent">
        <Image
          src="/illustration-5.webp"
          alt="illustration-5"
          className="absolute top-0 left-0 mx-auto hidden lg:block"
          width={1920}
          height={4000}
          loading="lazy"
        />
        <Image
          src="/illustration-6.webp"
          alt="illustration-6"
          className="absolute top-[22.5%] right-0 hidden lg:block"
          width={1500}
          height={1885}
          loading="lazy"
        />
        <div className="w-full max-w-7xl mx-auto relative xl:pt-48 lg:pt-24 lg:pb-0 py-8 lg:text-left text-center">
          <div className="lg:w-6/12 w-full mx-auto text-center lg:mb-20 mb-5">
            <h3 className="title-h3 text-[#1A70BA]">How Do We Deliver Our Neurological Services?</h3>
            <p className="font-medium"><span className="text-secondary">6 Stages</span> of Our Treatment Process</p>
          </div>
          <div className="lg:w-11/12 w-full mx-auto flex flex-col gap-12">
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full self-center">
                <Image
                  src="/stage-1-discovery-call.webp"
                  alt="stage-1-discovery-call"
                  className="hidden lg:block"
                  width={403}
                  height={410}
                  loading="lazy"
                />
              </div>
              <div className="lg:w-6/12 w-full">
                <h4 className="title-h4 text-[#1A70BA]">Stage 1</h4>
                <div className="title-h6">Referral</div>
                <Image
                  src="/stage-1-discovery-call.webp"
                  alt="stage-1-discovery-call"
                  className="block lg:hidden mb-4 mx-auto"
                  width={403}
                  height={410}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-3">Our process begins with a referral from a primary care physician or another specialist. This step ensures that patients come to us with an initial understanding of their condition and the need for specialized neurological care.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Initial contact through primary care or specialist referral</li>
                  <li><span className="icon-bullet">&bull;</span> Collection of preliminary patient information and medical history</li>
                  <li><span className="icon-bullet">&bull;</span> Scheduling of the first appointment</li>
                  <li><span className="icon-bullet">&bull;</span> Coordination with referring physician for seamless transition</li>
                </ul>
                <p className="lg:mb-12 mb-6">By starting with a referral, we ensure that each patient receives the focused and specialized attention necessary for their neurological care.</p>
                <Link href="" className="btn-primary rounded-full">
                  Give Us A Call
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full lg:pr-6">
                <h4 className="title-h4 text-[#1A70BA]">Stage 2</h4>
                <div className="title-h6">Assessment</div>
                <Image
                  src="/stage-2.webp"
                  alt="stage-2"
                  className="block lg:hidden mb-4 mx-auto"
                  width={437}
                  height={379}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-6">During the assessment phase, we conduct a thorough evaluation of the patient's neurological status. This includes a detailed review of medical history, symptoms, and initial tests to gather all necessary information.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Comprehensive review of medical history and current symptoms</li>
                  <li><span className="icon-bullet">&bull;</span> Neurological examination and initial diagnostic tests</li>
                  <li><span className="icon-bullet">&bull;</span> Patient and family interviews to gather comprehensive background information</li>
                  <li><span className="icon-bullet">&bull;</span> Identification of potential neurological issues</li>
                </ul>
                <p>Our detailed assessment phase lays the groundwork for accurate diagnosis and effective treatment planning.</p>
                <Link href="" className="btn-primary rounded-full">
                  Book An Appointment
                </Link>
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-2.webp"
                  alt="stage-2"
                  className="hidden lg:block"
                  width={437}
                  height={379}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full self-center">
                <Image
                  src="/stage-3.webp"
                  alt="stage-3"
                  className="hidden lg:block"
                  width={361}
                  height={351}
                  loading="lazy"
                />
              </div>
              <div className="lg:w-6/12 w-full">
                <h4 className="title-h4 text-[#1A70BA]">Stage 3</h4>
                <div className="title-h6">Diagnosis</div>
                <Image
                  src="/stage-3.webp"
                  alt="stage-3"
                  className="block lg:hidden mb-4 mx-auto"
                  width={361}
                  height={351}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-6">In the diagnosis stage, we utilize advanced diagnostic tools and techniques to pinpoint the exact nature of the neurological disorder. Accurate diagnosis is crucial for developing a tailored treatment plan.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Utilization of imaging studies (MRI, CT scans, etc.)</li>
                  <li><span className="icon-bullet">&bull;</span> Electrodiagnostic tests (EEG, EMG) as needed</li>
                  <li><span className="icon-bullet">&bull;</span> Interpretation of test results by experienced neurologists</li>
                  <li><span className="icon-bullet">&bull;</span> Confirmation and communication of diagnosis to patient and family</li>
                </ul>
                <p className="lg:mb-12 mb-6">With a precise diagnosis, we can move forward with confidence in creating an effective treatment strategy.</p>
                <Link href="" className="btn-primary rounded-full">
                  Get Diagnosed Today
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full lg:pr-6">
                <h4 className="title-h4 text-[#1A70BA]">Stage 4</h4>
                <div className="title-h6">Treatment</div>
                <Image
                  src="/stage-4.webp"
                  alt="stage-4"
                  className="block lg:hidden mb-4 mx-auto"
                  width={415}
                  height={362}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-6">Our treatment phase is customized to each patient's specific neurological condition, incorporating the latest medical advances and therapeutic techniques. We aim to improve quality of life and manage symptoms effectively.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Development of personalized treatment plans</li>
                  <li><span className="icon-bullet">&bull;</span> Medication management and prescription</li>
                  <li><span className="icon-bullet">&bull;</span> Physical therapy and rehabilitation programs</li>
                  <li><span className="icon-bullet">&bull;</span> Surgical options if necessary, with pre and post-operative care</li>
                </ul>
                <p className="lg:mb-12 mb-6">Tailored treatments ensure that each patient receives the most appropriate and effective care for their condition.</p>
                <Link href="" className="btn-primary rounded-full">
                  OUR SERVICE
                </Link>
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-4.webp"
                  alt="stage-4"
                  className="hidden lg:block"
                  width={415}
                  height={362}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full self-center">
                <Image
                  src="/stage-5.webp"
                  alt="stage-5"
                  className="hidden lg:block"
                  width={387}
                  height={504}
                  loading="lazy"
                />
              </div>
              <div className="lg:w-6/12 w-full">
                <h4 className="title-h4 text-[#1A70BA]">Stage 5</h4>
                <div className="title-h6">Follow-up</div>
                <Image
                  src="/stage-5.webp"
                  alt="stage-5"
                  className="block lg:hidden mb-4 mx-auto"
                  width={387}
                  height={504}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-6">Follow-up is essential to monitor progress, adjust treatments, and provide ongoing support. Regular check-ins helps us to ensure that the treatment plan remains effective over time.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Scheduled follow-up appointments to monitor progress</li>
                  <li><span className="icon-bullet">&bull;</span> Adjustment of treatment plans based on patient response</li>
                  <li><span className="icon-bullet">&bull;</span> Continuous communication with patients for support and guidance</li>
                  <li><span className="icon-bullet">&bull;</span> Evaluation of treatment outcomes and long-term planning</li>
                </ul>
                <p className="lg:mb-12 mb-6">Consistent follow-up care is key to maintaining and improving neurological health over the long term.</p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="lg:w-5/12 w-full lg:pr-6 pr-0">
                <h4 className="title-h4 text-[#1A70BA]">Stage 6</h4>
                <div className="title-h6">Management</div>
                <Image
                  src="/stage-6.webp"
                  alt="stage-6"
                  className="block lg:hidden mb-4 mx-auto"
                  width={550}
                  height={366}
                  loading="lazy"
                />
                <p className="lg:mb-12 mb-6">Long-term management focuses on sustaining health improvements and preventing recurrence of symptoms. This stage involves lifestyle modifications, continuous monitoring, and supportive care.</p>
                <p className="lg:mb-12 mb-6">Follow-up is essential to monitor progress, adjust treatments, and provide ongoing support. Regular check-ins helps us to ensure that the treatment plan remains effective over time.</p>
                <ul className="list-none with-bullets lg:pl-12 lg:pr-32 flex flex-col gap-2 lg:mb-12 mb-6">
                  <li><span className="icon-bullet">&bull;</span> Implementation of long-term care strategies</li>
                  <li><span className="icon-bullet">&bull;</span> Lifestyle and dietary recommendations for neurological health</li>
                  <li><span className="icon-bullet">&bull;</span> Continuous monitoring and regular health evaluations</li>
                  <li><span className="icon-bullet">&bull;</span> Support groups and counseling for patients and families</li>
                </ul>
                <p className="lg:mb-12 mb-6">Effective management ensures that patients lead healthier lives with minimized impact from neurological conditions.</p>                
              </div>
              <div className="w-5/12 self-center">
                <Image
                  src="/stage-6.webp"
                  alt="stage-6"
                  className="hidden lg:block"
                  width={550}
                  height={366}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>        
      </div>
      <div className="w-full max-w-7xl mx-auto relative lg:py-16 py-8 xl:px-0 px-5">
        <div className="lg:mb-40 mb-8">
          <div className="text-center">
            <h3 className="title-h3 text-[#1A70BA]">OUR BLOG</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-10 gap-8">
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col lg:text-left text-center relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden">
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
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col lg:text-left text-center relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden lg:mt-10 lg:-mb-10">
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
            <div className="card bg-white border-2 border-[#1A70BA]  flex flex-col lg:text-left text-center relative rounded-3xl transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-xl overflow-hidden">
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
            <h3 className="title-h3 text-black">Neurology FAQs</h3>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 lg:w-10/12 w-full mx-auto lg:mt-12">
            <div><FAQAccordionColOne questions={questionsColOne} /></div>
            <div><FAQAccordionColTwo questions={questionsColTwo} /></div>
          </div>
        </div>
      </div>
      <div className="relative max-w-[1920px] mx-auto w-full flex flex-col lg:pt-0 pt-8 bg-[#e8f1f8] xl:bg-transparent xl:px-0 px-5">
        <Image
          src="/illustration-7.webp"
          alt="illustration-7"
          className="absolute top-0 left-0 mx-auto hidden lg:block"
          width={1920}
          height={130}
          loading="lazy"
        />
        <div className="bg-[#e8f1f8] lg:mt-[128px] lg:pb-32 pb-8">
          <div className="w-full max-w-7xl mx-auto relative">
            <div className="lg:w-6/12 w-full mx-auto text-center lg:mb-20 mb-5">
              <h3 className="title-h3 text-[#1A70BA]">We&rsquo;d Love To Hear From You!</h3>
              <p className="mb-5 font-medium">Have questions? Reach out to us anytime! Prefer speaking directly to a consultant? <Link href={''} className="text-secondary">Schedule a Call Now!</Link></p>
            </div>
            <div className="lg:w-7/12 w-full mx-auto">
              <form>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="label text-[#1A70BA] mb-2 block" htmlFor="name">Name</label>
                    <div className="input-field">                  
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="name" />
                    </div>
                  </div>
                  <div>
                    <label className="label text-[#1A70BA] mb-2 block" htmlFor="email">Email</label>
                    <div className="input-field">                  
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="email" />
                    </div>
                  </div>
                  <div>
                    <label className="label text-[#1A70BA] mb-2 block" htmlFor="phone">Phone</label>
                    <div className="input-field">                  
                      <input type="text" className="w-full focus:outline-none placeholder:text-slate-500 p-3" placeholder="" id="phone" />
                    </div>
                  </div>
                  <div>
                    <label className="label text-[#1A70BA] mb-2 block" htmlFor="message">Message</label>
                    <div className="input-field">
                      <textarea className="w-full focus:outline-none placeholder:text-slate-500 p-3" cols={6} rows={6} id="message"></textarea>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <button type="submit" className="btn-secondary w-full">Contact Us</button>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="text-center">
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
            </div> */}
          </div>
        </div>        
      </div>
    </main>
  );
}
