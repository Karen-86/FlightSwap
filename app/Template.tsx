"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Navbar,
  Footer,
  InputDemo,
  InputCalendarDemo,
  ComboboxDemo,
  VoucherCard,
  ActivityCard,
  ReasonCard,
  TestimonialCard,
  CarouselDemo,
  AccordionDemo,
} from "@/components/index.js";
import Image from "next/image";
import localData from "@/localData";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import useJoiValidation from "@/hooks/joi-validation/useJoiValidation";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flight-swap.vercel.app";

const {
  heroCoverImage,
  heroCoverMobileImage,
  whatsappIcon,
  clouds1Image,
  // clouds2Image,
  VideoThumbnailImage,

  Voucher1Image,
  Voucher2Image,
  Voucher3Image,

  Activity1Image,
  Activity2Image,
  MarkIcon,

  Reason1Icon,
  Reason2Icon,
  Reason3Icon,

  Testimonial1Image,
  Testimonial2Image,
  Testimonial3Image,
} = localData.images;

const {
  arrowRightIcon,
  userIcon,
  phoneIcon,
  emailIcon,
  flowerIcon,
  patternIcon,
  playIcon,
  airplaneLeftIcon,
  airplaneRightIcon,
  barIcon,
  starIcon,
} = localData.svgs;

const Template = () => {
  return (
    <>
      <header
        className=" hero sm:min-h-[100vh] pt-[20px] lg:pt-[40px]  relative flex flex-col bg-no-repeat bg-bottom bg-contain "
        style={{ backgroundImage: `url(${clouds1Image})` }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] sm:hidden -z-1"></div>
        <Image
          fill={true}
          src={heroCoverImage}
          alt="background image"
          className="-z-1 absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
        />
        <Image
          fill={true}
          src={heroCoverMobileImage}
          alt="background image"
          className="-z-1 absolute top-0 left-0 w-full h-full object-cover  sm:hidden"
        />
        <Navbar />
        <ShowcaseSection />
        <FormBlock />
      </header>
      <main className="home-page">
        <InstructionSection />
        <VouchersSection />
        <ActivitiesSection />
        <WhyUsSection />
        <RoutesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      {/* <Footer /> */}
      <style>
        {`
          @media(min-width: 460px) {
            .hero {
              margin-bottom: 400px;
            }
          }
          @media(min-width: 640px) {
            .hero {
              margin-bottom: 270px;
            }
          }
          @media(min-width: 1024px) {
            .hero {
              margin-bottom: 180px;
            }
          }
        `}
      </style>
    </>
  );
};

const FormBlock = () => {
  type ValidationResult = {
    error?: {
      details: {
        path: string[];
        message: string;
      }[];
    };
  };

  const [state, setState] = useState({
    fromCountry: "",
    toCountry: "",
    departure: "",
    return: "",
    passengers: "",
    fullName: "",
    phone: "",
    email: "",
  });

  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [result, setResult] = useState<ValidationResult>({});
  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const { validateContact } = useJoiValidation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = validateContact(state);
    console.log(errorMessages, "ddd");
    if (!error) {
      console.log("Submit");
      const init = () => {
        const form = e.target as any;

        const from = form.from?.value?.trim();
        const to = form.to?.value?.trim();
        const departure = form.departure?.value?.trim();
        const _return = form.return?.value?.trim();
        const passengers = form.passengers?.value?.trim();
        const fullName = form.fullName?.value?.trim();
        const phone = form.phone?.value?.trim();
        const email = form.email?.value?.trim();
        const image = form.image?.defaultValue;
        console.log(departure, 'departure')
        const CONTENT =
          (from ? `<p><strong>From</strong>: ${from}</p>` : "") +
          (to ? `<p><strong>To</strong>: ${to}</p>` : "") +
          (departure ? `<p><strong>Departure</strong>: ${departure}</p>` : "") +
          (_return ? `<p><strong>Return</strong>: ${_return}</p>` : "") +
          (passengers ? `<p><strong>Passengers</strong>: ${passengers}</p>` : "") +
          (fullName ? `<p><strong>Full Name</strong>: ${fullName}</p>` : "") +
          (phone ? `<p><strong>Phone</strong>: ${phone}</p>` : "") +
          (email ? `<p><strong>Email</strong>: ${email}</p>` : "") +
          (image ? `<img src="${image}" width='200' style="height:auto;"  />` : "");
        form.CONTENT.value = CONTENT;

        sendEmail({
          event: e,
          service: "service_7ztktwq",
          template: "template_kc4c9uc",
          form: e.target,
          public_key: "-sDfzp5WqUVPrUP6-",
          setIsLoading: setIsLoading,
        });
      };
      init();
    }
    if (!error) return;
    setWasSubmitted(true);
  };

  useEffect(() => setResult(validateContact(state)), [state]);

  useEffect(() => {
    if (!wasSubmitted) return;
    const errors: Record<string, string> = {};
    result?.error?.details.forEach((item) => {
      if (errors[item.path[0]]) return;
      errors[item.path[0]] = item.message;
    });
    setErrorMessages(errors);
  }, [result, wasSubmitted]);

  const { sendEmail } = useGlobalContext();

  const [countries] = useState([
    { id: "1", label: "Afghanistan", value: "Afghanistan" },
    { id: "2", label: "Albania", value: "Albania" },
    { id: "3", label: "Algeria", value: "Algeria" },
    { id: "4", label: "Andorra", value: "Andorra" },
    { id: "5", label: "Angola", value: "Angola" },
    { id: "6", label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
    { id: "7", label: "Argentina", value: "Argentina" },
    { id: "8", label: "Armenia", value: "Armenia" },
    { id: "9", label: "Australia", value: "Australia" },
    { id: "10", label: "Austria", value: "Austria" },
    { id: "11", label: "Azerbaijan", value: "Azerbaijan" },
    { id: "12", label: "Bahamas", value: "Bahamas" },
    { id: "13", label: "Bahrain", value: "Bahrain" },
    { id: "14", label: "Bangladesh", value: "Bangladesh" },
    { id: "15", label: "Barbados", value: "Barbados" },
    { id: "16", label: "Belarus", value: "Belarus" },
    { id: "17", label: "Belgium", value: "Belgium" },
    { id: "18", label: "Belize", value: "Belize" },
    { id: "19", label: "Benin", value: "Benin" },
    { id: "20", label: "Bhutan", value: "Bhutan" },
    { id: "21", label: "Bolivia", value: "Bolivia" },
    { id: "22", label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
    { id: "23", label: "Botswana", value: "Botswana" },
    { id: "24", label: "Brazil", value: "Brazil" },
    { id: "25", label: "Brunei", value: "Brunei" },
    { id: "26", label: "Bulgaria", value: "Bulgaria" },
    { id: "27", label: "Burkina Faso", value: "Burkina Faso" },
    { id: "28", label: "Burundi", value: "Burundi" },
    { id: "29", label: "Cabo Verde", value: "Cabo Verde" },
    { id: "30", label: "Cambodia", value: "Cambodia" },
    { id: "31", label: "Cameroon", value: "Cameroon" },
    { id: "32", label: "Canada", value: "Canada" },
    { id: "33", label: "Central African Republic", value: "Central African Republic" },
    { id: "34", label: "Chad", value: "Chad" },
    { id: "35", label: "Chile", value: "Chile" },
    { id: "36", label: "China", value: "China" },
    { id: "37", label: "Colombia", value: "Colombia" },
    { id: "38", label: "Comoros", value: "Comoros" },
    { id: "39", label: "Congo (Congo-Brazzaville)", value: "Congo (Congo-Brazzaville)" },
    { id: "40", label: "Costa Rica", value: "Costa Rica" },
    { id: "41", label: "Croatia", value: "Croatia" },
    { id: "42", label: "Cuba", value: "Cuba" },
    { id: "43", label: "Cyprus", value: "Cyprus" },
    { id: "44", label: "Czechia (Czech Republic)", value: "Czechia (Czech Republic)" },
    { id: "45", label: "Democratic Republic of the Congo", value: "Democratic Republic of the Congo" },
    { id: "46", label: "Denmark", value: "Denmark" },
    { id: "47", label: "Djibouti", value: "Djibouti" },
    { id: "48", label: "Dominica", value: "Dominica" },
    { id: "49", label: "Dominican Republic", value: "Dominican Republic" },
    { id: "50", label: "Ecuador", value: "Ecuador" },
    { id: "51", label: "Egypt", value: "Egypt" },
    { id: "52", label: "El Salvador", value: "El Salvador" },
    { id: "53", label: "Equatorial Guinea", value: "Equatorial Guinea" },
    { id: "54", label: "Eritrea", value: "Eritrea" },
    { id: "55", label: "Estonia", value: "Estonia" },
    { id: "56", label: "Eswatini", value: "Eswatini" },
    { id: "57", label: "Ethiopia", value: "Ethiopia" },
    { id: "58", label: "Fiji", value: "Fiji" },
    { id: "59", label: "Finland", value: "Finland" },
    { id: "60", label: "France", value: "France" },
    { id: "61", label: "Gabon", value: "Gabon" },
    { id: "62", label: "Gambia", value: "Gambia" },
    { id: "63", label: "Georgia", value: "Georgia" },
    { id: "64", label: "Germany", value: "Germany" },
    { id: "65", label: "Ghana", value: "Ghana" },
    { id: "66", label: "Greece", value: "Greece" },
    { id: "67", label: "Grenada", value: "Grenada" },
    { id: "68", label: "Guatemala", value: "Guatemala" },
    { id: "69", label: "Guinea", value: "Guinea" },
    { id: "70", label: "Guinea-Bissau", value: "Guinea-Bissau" },
    { id: "71", label: "Guyana", value: "Guyana" },
    { id: "72", label: "Haiti", value: "Haiti" },
    { id: "73", label: "Honduras", value: "Honduras" },
    { id: "74", label: "Hungary", value: "Hungary" },
    { id: "75", label: "Iceland", value: "Iceland" },
    { id: "76", label: "India", value: "India" },
    { id: "77", label: "Indonesia", value: "Indonesia" },
    { id: "78", label: "Iran", value: "Iran" },
    { id: "79", label: "Iraq", value: "Iraq" },
    { id: "80", label: "Ireland", value: "Ireland" },
    { id: "81", label: "Israel", value: "Israel" },
    { id: "82", label: "Italy", value: "Italy" },
    { id: "83", label: "Jamaica", value: "Jamaica" },
    { id: "84", label: "Japan", value: "Japan" },
    { id: "85", label: "Jordan", value: "Jordan" },
    { id: "86", label: "Kazakhstan", value: "Kazakhstan" },
    { id: "87", label: "Kenya", value: "Kenya" },
    { id: "88", label: "Kiribati", value: "Kiribati" },
    { id: "89", label: "Kuwait", value: "Kuwait" },
    { id: "90", label: "Kyrgyzstan", value: "Kyrgyzstan" },
    { id: "91", label: "Laos", value: "Laos" },
    { id: "92", label: "Latvia", value: "Latvia" },
    { id: "93", label: "Lebanon", value: "Lebanon" },
    { id: "94", label: "Lesotho", value: "Lesotho" },
    { id: "95", label: "Liberia", value: "Liberia" },
    { id: "96", label: "Libya", value: "Libya" },
    { id: "97", label: "Liechtenstein", value: "Liechtenstein" },
    { id: "98", label: "Lithuania", value: "Lithuania" },
    { id: "99", label: "Luxembourg", value: "Luxembourg" },
    { id: "100", label: "Madagascar", value: "Madagascar" },
    { id: "101", label: "Malawi", value: "Malawi" },
    { id: "102", label: "Malaysia", value: "Malaysia" },
    { id: "103", label: "Maldives", value: "Maldives" },
    { id: "104", label: "Mali", value: "Mali" },
    { id: "105", label: "Malta", value: "Malta" },
    { id: "106", label: "Marshall Islands", value: "Marshall Islands" },
    { id: "107", label: "Mauritania", value: "Mauritania" },
    { id: "108", label: "Mauritius", value: "Mauritius" },
    { id: "109", label: "Mexico", value: "Mexico" },
    { id: "110", label: "Micronesia", value: "Micronesia" },
    { id: "111", label: "Moldova", value: "Moldova" },
    { id: "112", label: "Monaco", value: "Monaco" },
    { id: "113", label: "Mongolia", value: "Mongolia" },
    { id: "114", label: "Montenegro", value: "Montenegro" },
    { id: "115", label: "Morocco", value: "Morocco" },
    { id: "116", label: "Mozambique", value: "Mozambique" },
    { id: "117", label: "Myanmar (Burma)", value: "Myanmar (Burma)" },
    { id: "118", label: "Namibia", value: "Namibia" },
    { id: "119", label: "Nauru", value: "Nauru" },
    { id: "120", label: "Nepal", value: "Nepal" },
    { id: "121", label: "Netherlands", value: "Netherlands" },
    { id: "122", label: "New Zealand", value: "New Zealand" },
    { id: "123", label: "Nicaragua", value: "Nicaragua" },
    { id: "124", label: "Niger", value: "Niger" },
    { id: "125", label: "Nigeria", value: "Nigeria" },
    { id: "126", label: "North Korea", value: "North Korea" },
    { id: "127", label: "North Macedonia", value: "North Macedonia" },
    { id: "128", label: "Norway", value: "Norway" },
    { id: "129", label: "Oman", value: "Oman" },
    { id: "130", label: "Pakistan", value: "Pakistan" },
    { id: "131", label: "Palau", value: "Palau" },
    { id: "132", label: "Palestine State", value: "Palestine State" },
    { id: "133", label: "Panama", value: "Panama" },
    { id: "134", label: "Papua New Guinea", value: "Papua New Guinea" },
    { id: "135", label: "Paraguay", value: "Paraguay" },
    { id: "136", label: "Peru", value: "Peru" },
    { id: "137", label: "Philippines", value: "Philippines" },
    { id: "138", label: "Poland", value: "Poland" },
    { id: "139", label: "Portugal", value: "Portugal" },
    { id: "140", label: "Qatar", value: "Qatar" },
    { id: "141", label: "Romania", value: "Romania" },
    { id: "142", label: "Russia", value: "Russia" },
    { id: "143", label: "Rwanda", value: "Rwanda" },
    { id: "144", label: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
    { id: "145", label: "Saint Lucia", value: "Saint Lucia" },
    { id: "146", label: "Saint Vincent and the Grenadines", value: "Saint Vincent and the Grenadines" },
    { id: "147", label: "Samoa", value: "Samoa" },
    { id: "148", label: "San Marino", value: "San Marino" },
    { id: "149", label: "Sao Tome and Principe", value: "Sao Tome and Principe" },
    { id: "150", label: "Saudi Arabia", value: "Saudi Arabia" },
    { id: "151", label: "Senegal", value: "Senegal" },
    { id: "152", label: "Serbia", value: "Serbia" },
    { id: "153", label: "Seychelles", value: "Seychelles" },
    { id: "154", label: "Sierra Leone", value: "Sierra Leone" },
    { id: "155", label: "Singapore", value: "Singapore" },
    { id: "156", label: "Slovakia", value: "Slovakia" },
    { id: "157", label: "Slovenia", value: "Slovenia" },
    { id: "158", label: "Solomon Islands", value: "Solomon Islands" },
    { id: "159", label: "Somalia", value: "Somalia" },
    { id: "160", label: "South Africa", value: "South Africa" },
    { id: "161", label: "South Korea", value: "South Korea" },
    { id: "162", label: "South Sudan", value: "South Sudan" },
    { id: "163", label: "Spain", value: "Spain" },
    { id: "164", label: "Sri Lanka", value: "Sri Lanka" },
    { id: "165", label: "Sudan", value: "Sudan" },
    { id: "166", label: "Suriname", value: "Suriname" },
    { id: "167", label: "Sweden", value: "Sweden" },
    { id: "168", label: "Switzerland", value: "Switzerland" },
    { id: "169", label: "Syria", value: "Syria" },
    { id: "170", label: "Tajikistan", value: "Tajikistan" },
    { id: "171", label: "Tanzania", value: "Tanzania" },
    { id: "172", label: "Thailand", value: "Thailand" },
    { id: "173", label: "Timor-Leste", value: "Timor-Leste" },
    { id: "174", label: "Togo", value: "Togo" },
    { id: "175", label: "Tonga", value: "Tonga" },
    { id: "176", label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
    { id: "177", label: "Tunisia", value: "Tunisia" },
    { id: "178", label: "Turkey", value: "Turkey" },
    { id: "179", label: "Turkmenistan", value: "Turkmenistan" },
    { id: "180", label: "Tuvalu", value: "Tuvalu" },
    { id: "181", label: "Uganda", value: "Uganda" },
    { id: "182", label: "Ukraine", value: "Ukraine" },
    { id: "183", label: "United Arab Emirates", value: "United Arab Emirates" },
    { id: "184", label: "United Kingdom", value: "United Kingdom" },
    { id: "185", label: "United States of America", value: "United States of America" },
    { id: "186", label: "Uruguay", value: "Uruguay" },
    { id: "187", label: "Uzbekistan", value: "Uzbekistan" },
    { id: "188", label: "Vanuatu", value: "Vanuatu" },
    { id: "189", label: "Vatican City", value: "Vatican City" },
    { id: "190", label: "Venezuela", value: "Venezuela" },
    { id: "191", label: "Vietnam", value: "Vietnam" },
    { id: "192", label: "Yemen", value: "Yemen" },
    { id: "193", label: "Zambia", value: "Zambia" },
    { id: "194", label: "Zimbabwe", value: "Zimbabwe" },
  ]);

  const [passengers] = useState([
    { label: "Adult", value: "adult" },
    { label: "Child", value: "child" },
    { label: "Infant", value: "infant" },
  ]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const callback = (key = "", value = "") => {
    setState((prev) => ({ ...prev, [key]: value.toString() }));
  };

  const [active, setActive] = useState("left");

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div className="form-block">
        <div className="container">
          <div className="relative min-h-[200px]">
            <div className="form-block-content my-[3rem] sm:m-0 w-full top-[20px] sm:top-[auto] sm:bottom-0 right-0  sm:translate-y-[50%] px-[10px] sm:px-[20px] py-[20px]   min-h-[200px] bg-white/60 backdrop-blur-md rounded-3xl transform-y-100 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              <div className="border flex relative border-white rounded-full bg-white max-w-[330px]  mx-auto mb-[2rem]">
                <button
                  className={`flex-1 relative z-2 p-2 cursor-pointer duration-300 ${active == "left" ? "text-white" : ""}`}
                  onClick={() => setActive("left")}
                >
                  Round Trip
                </button>
                <button
                  className={`flex-1 relative z-2 p-2 cursor-pointer duration-300 ${active == "right" ? "text-white" : ""}`}
                  onClick={() => setActive("right")}
                >
                  One Way
                </button>
                <div
                  className={`overlay bg-primary w-[50%] h-full rounded-full absolute ${
                    active == "right" ? "transform-[translateX(100%)]" : ""
                  } duration-300`}
                ></div>
              </div>

              <form
                id="contact-form-2 "
                action="#/"
                method="POST"
                className={`${wasSubmitted ? "was-submitted" : ""}`}
                onSubmit={onSubmit}
              >
                <div className="field-group text-left grid gap-x-[10px] gap-y-[15px] mb-[2.5rem]">
                  <ComboboxDemo
                    className="!mb-0"
                    label="From"
                    placeholder="Country"
                    defaultItems={countries}
                    callback={(item: any) => callback("fromCountry", item.value)}
                    errorMessage={errorMessages.fromCountry}
                  />
                  <input type="text" name="from" defaultValue={state.fromCountry} className="hidden" />

                  <ComboboxDemo
                    className="!mb-0"
                    label="To"
                    placeholder="Country"
                    defaultItems={countries}
                    callback={(item: any) => callback("toCountry", item.value)}
                    errorMessage={errorMessages.toCountry}
                  />
                  <input type="text" name="to" defaultValue={state.toCountry} className="hidden" />

                  <InputCalendarDemo
                    className="!mb-0"
                    placeholder="Date"
                    label="Departure"
                    triggerClassName="[&>svg]:stroke-primary"
                    callback={(value: any) => callback("departure",value )}
                    errorMessage={errorMessages.departure}
                  />
                  <input type="text" name="departure" defaultValue={state.departure} className="hidden" />

                  <InputCalendarDemo
                    className={`!mb-0 duration-300 ${active == "right" ? "opacity-30 pointer-events-none" : ""}`}
                    placeholder="Date"
                    label="Return"
                    triggerClassName="[&>svg]:stroke-primary"
                    callback={(value: any) => callback("return", value)}
                    errorMessage={errorMessages.return}
                  />
                  <input type="text" name="return" defaultValue={state.return} className="hidden" />

                  <ComboboxDemo
                    className="!mb-0"
                    label="Passengers"
                    placeholder="Passengers"
                    defaultItems={passengers}
                    noSearch={true}
                    callback={(item: any) => callback("passengers", item.value)}
                    errorMessage={errorMessages.passengers}
                    // inputClassName={errorMessages.fullName ? "is-invalid" : "is-valid"}
                  />
                  <input type="text" name="passengers" defaultValue={state.passengers} className="hidden" />

                  <InputDemo
                    label="Full Name"
                    placeholder="Full Name"
                    className="!mb-0"
                    name="fullName"
                    type="text"
                    value={state.fullName}
                    callback={handleOnChange}
                    endIcon={userIcon}
                    errorMessage={errorMessages.fullName}
                    inputClassName={errorMessages.fullName ? "is-invalid" : "is-valid"}
                  />

                  <InputDemo
                    label="Phone"
                    placeholder="Phone"
                    className="!mb-0"
                    name="phone"
                    type="text"
                    value={state.phone}
                    callback={handleOnChange}
                    endIcon={phoneIcon}
                    errorMessage={errorMessages.phone}
                    inputClassName={errorMessages.phone ? "is-invalid" : "is-valid"}
                  />
                  <InputDemo
                    label="Email"
                    placeholder="Email"
                    className="!mb-0"
                    name="email"
                    type="text"
                    value={state.email}
                    callback={handleOnChange}
                    endIcon={emailIcon}
                    errorMessage={errorMessages.email}
                    inputClassName={errorMessages.email ? "is-invalid" : "is-valid"}
                  />
                </div>
                <input
                  type="text"
                  name="image"
                  defaultValue={`${siteUrl}/assets/images/logo.png`}
                  className="hidden"
                />
                <input type="text" name="CONTENT" className="hidden" />
                <input type="text" name="to_email" defaultValue="karenabgaryan27@gmail.com" className="hidden" />
                <div className="flex justify-center">
                  <Button disabled={isLoading} className="">
                    <img className="w-[24px] h-[24px]" src={whatsappIcon} alt="" />
                    Get Quote
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media(min-width: 460px) {
            .form-block-content {
              position: absolute;
            }
            .field-group {
              grid-template-columns: 1fr 1fr;
            }
            
          }
          @media(min-width: 1024px) {
            .field-group {
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

const ShowcaseSection = () => {
  const [inView1, setIsInView1] = useState(false);

  return (
    <motion.div className="showcase flex-1" viewport={{ amount: 0.3 }} onViewportEnter={() => setIsInView1(true)}>
      <div className="container relative">
        <h1 className="text-6xl text-white font-urbanist font-bold  leading-[0.7] sm:leading-[1] text-center sm:text-left max-w-[400px] mx-auto sm:max-w-none mb-[1rem]">
          <span
            className={`text-[2.188rem] sm:text-[4rem] lg:text-[6.188rem]  mr-3 ${inView1 ? "lazy-animate" : ""}`}
            data-lazy="fade"
            style={{ transitionDelay: ".5s" }}
          >
            Up to 40% Off
          </span>
          <span
            className={`text-[2.188rem] sm:text-[3rem] lg:text-[4.063rem] text-right sm:block ${inView1 ? "lazy-animate" : ""}`}
            data-lazy="fade"
          >
            Delta & American Airlines
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-white max-w-[350px] sm:max-w-[560px] mx-auto sm:mr-0 sm:ml-auto text-center sm:text-right leading-[1.7] mb-[1rem] text-shadow-lg">
          Exclusive discounts powered by unused airline vouchers. Real tickets. Fast support on WhatsApp.
        </h2>
        <div className="flex justify-center sm:justify-end">
          <Button className="" variant="default">
            Get my quote {arrowRightIcon}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const InstructionSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isOverlayHidden, setIsOverlayHidden] = useState(false);
  const [inView1, setIsInView1] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <motion.section className="instruction !pb-0" viewport={{ amount: 0.3 }} onViewportEnter={() => setIsInView1(true)}>
      <div className="absolute hidden [@media(min-width:1300px)]:block w-[7vw] [@media(min-width:1910px)]:w-auto [&>svg]:w-full">
        {airplaneLeftIcon}
      </div>

      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary mb-[0.7rem]">
          {flowerIcon}
          Explainer Video
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            How
          </span>
          <span className="text-primary">FlightSwap Works</span>{" "}
        </div>

        <div
          className={`video-wrapper bg-white shadow-xs rounded-2xl p-[5px] sm:p-[12px] ${inView1 ? "lazy-animate" : ""}`}
          data-lazy="fade"
        >
          <div className="video-settings">
            {/* <div className="inline-flex h-[25px] w-[50px] items-center justify-center gap-1 hover:bg-neutral-50 cursor-pointer rounded-sm duration-300">
              <span>{circleIcon}</span>
              <span className="text-gray-500">{circleIcon}</span>
              <span className="text-gray-200">{circleIcon}</span>
            </div> */}
            <span className=" block py-[0.1%] px-3 mb-[0.4%]">{barIcon}</span>
          </div>
          <div className="h-0 pt-[56.25%] shadow-sm relative rounded-2xl overflow-hidden cursor-pointer group bg-black">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              // poster="/poster-image.jpg"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              controls
              // autoPlay
              loop
              muted
            >
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            {/* {isOverlayHidden && (
              <iframe
                className="absolute inset-0 w-full h-full z-10"
                src={`https://www.youtube.com/embed/${'WoTFTtw04dQ'}?enablejsapi=1`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )} */}
            <div
              onClick={() => {
                if (!videoRef.current) return;
                videoRef.current.play();
                setIsVideoPlaying(true);
                setIsOverlayHidden(true);
              }}
              className={`absolute w-full h-full top-0 left-0 ${
                isOverlayHidden ? "opacity-0 pointer-events-none" : ""
              } duration-300`}
            >
              <Image fill={true} src={VideoThumbnailImage} alt="image" className=" absolute top-0 left-0 w-full h-full" />
              <div className="overlay absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.03)] duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="will-change-transform group-active:scale-105 group-hover:scale-110 duration-300 absolute top-1/2 left-1/2 -translate-1/2 w-[40px] h-[40px] sm:w-[120px] sm:h-[120px] rounded-full bg-white/60 flex items-center justify-center [&>svg]:w-[12px] sm:[&>svg]:w-[36px]">
                {playIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const VouchersSection = () => {
  const vouchers = [
    {
      image: Voucher1Image,
      title: "Travelers sell us unused vouchers",
      description: "Lorem ipsum dolor sit amet consectetur. In ac tincidunt erat turpis in. Felis facilisis pellentesque",
    },
    {
      image: Voucher2Image,
      title: "We convert them into airline tickets",
      description: "Lorem ipsum dolor sit amet consectetur. In ac tincidunt erat turpis in. Felis facilisis pellentesque",
    },
    {
      image: Voucher3Image,
      title: "You fly cheaper — up to 40% off",
      description: "Lorem ipsum dolor sit amet consectetur. In ac tincidunt erat turpis in. Felis facilisis pellentesque",
    },
  ];

  return (
    <section className="relative">
      <div className="absolute hidden [@media(min-width:1300px)]:block w-[7vw] [@media(min-width:1910px)]:w-auto [&>svg]:w-full right-0 top-[-150px]">
        {airplaneRightIcon}
      </div>
      <div className="container">
        <h2 className="h2 text-center w-fit mx-auto relative !text-xl sm:!text-3xl max-w-[830px] leading-[1.6] !mb-[1rem] sm:!mb-[2rem]">
          We buy unused vouchers before they <span className="text-primary">expire and turn them into real flight savings</span>
        </h2>

        <div className="card-group flex gap-[18px] lg:gap-[30px] flex-wrap justify-center items-start">
          {vouchers.map((voucher, index) => {
            return <VoucherCard key={index} {...voucher} index={index} className={index == 1 ? "lg:mt-[32px]" : ""} />;
          })}
        </div>
      </div>
    </section>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      image: Activity1Image,
      title: "Buy Discounted Tickets",
      description: "Delta & American Airlines — Economy, Premium Economy, and Business",
    },
    {
      image: Activity2Image,
      title: "Sell Your Voucher",
      description: "Turn your soon-to-expire voucher into instant cash",
    },
  ];

  return (
    <section
      className={`relative bg-[length:100%_auto] bg-top bg-no-repeat bg-none sm:bg-[url('/assets/images/rest/clouds-2.png')]`}
    >
      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary ">
          {flowerIcon}
          Choose Your Path
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            What do you
          </span>
          <span className="text-primary">want to do today?</span>
        </div>

        <div className="card-group flex gap-[24px] flex-wrap">
          <ActivityCard
            {...activities[0]}
            index={0}
            button={
              <Button className="">
                <img className="w-[24px] h-[24px]" src={whatsappIcon} alt="" />
                Get My Quote
              </Button>
            }
          />
          <ActivityCard
            {...activities[1]}
            index={1}
            button={
              <Button className="">
                <img className="w-[24px] h-[24px]" src={MarkIcon} alt="" />
                Submit voucher
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const reasons = [
    {
      image: Reason1Icon,
      title: "Real savings",
      description: "Up to 40% vs major sites (Expedia/Kayak)",
    },
    {
      image: Reason2Icon,
      title: "Fast booking",
      description: "Quotes within hours; e-ticket delivered to your email",
    },
    {
      image: Reason3Icon,
      title: "Safe & transparent",
      description: "Verified deals, direct support",
    },
    {
      image: Reason1Icon,
      title: "Top airlines",
      description: "Delta & American Airlines",
    },
  ];

  return (
    <section
      className={`relative bg-[length:100%_auto] bg-top bg-no-repeat bg-none sm:bg-[url('/assets/images/rest/clouds-3.png')]`}
    >
      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary">
          {flowerIcon}
          Why FlightSwap
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            Why travelers
          </span>
          <span className="text-primary"> choose FlightSwap</span>
        </div>

        <div className="card-group gap-x-[18px] gap-y-[35px] grid [@media(min-width:460px)]:grid-cols-2 xl:!grid-cols-4">
          {reasons.map((reason, index) => {
            return <ReasonCard key={index} {...reason} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

const RoutesSection = () => {
  const [inView, setIsInView] = useState(false);

  return (
    <motion.section className={`relative  routes-section`} onViewportEnter={() => setIsInView(true)} viewport={{ amount: 0.3 }}>
      <div className="absolute bottom-[100px] hidden [@media(min-width:1300px)]:block w-[7vw] [@media(min-width:1910px)]:w-auto [&>svg]:w-full">
        {airplaneLeftIcon}
      </div>

      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary">
          {flowerIcon}
          Why FlightSwap
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            Why travelers
          </span>
          <span className="text-primary"> choose FlightSwap</span>
        </div>

        <div className={`${inView ? "lazy-animate" : ""}`} data-lazy="fade-up">
          <div className={`table-wrapper overflow-x-auto pb-[0.5rem] mb-[1.5rem] `}>
            <table className="border-none text-left text-sm border-collapse  w-full">
              <thead>
                <tr>
                  <th>
                    <div className="border px-4 py-7 bg-white font-bold text-xl whitespace-nowrap rounded-tl-2xl">Route</div>
                  </th>
                  <th>
                    <div className="border px-4 py-7 bg-white font-bold text-xl whitespace-nowrap text-center">Cabin</div>
                  </th>
                  <th>
                    <div className="border px-4 py-7 bg-white font-bold text-xl whitespace-nowrap text-center">Regular Price</div>
                  </th>
                  <th>
                    <div className="border px-4 py-7 bg-white font-bold text-xl whitespace-nowrap text-center">
                      FlightSwap Price
                    </div>
                  </th>
                  <th>
                    <div className="border px-4 py-7 bg-white font-bold text-xl whitespace-nowrap text-center rounded-tr-2xl">
                      You Save
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold whitespace-nowrap ">New York → Miami</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold text-center whitespace-nowrap">Economy</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$280</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$169</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$111</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold whitespace-nowrap">Los Angeles → Boston</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold text-center whitespace-nowrap">Premium Economy</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$620</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$399</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$221</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold whitespace-nowrap">Dallas → San Francisco</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold text-center whitespace-nowrap">Economy</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$340</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$205</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$135</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold whitespace-nowrap rounded-bl-2xl">
                      Chicago → New York
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border font-semibold text-center whitespace-nowrap">Business</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$1,150</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center">$720</div>
                  </td>
                  <td>
                    <div className="px-4 py-7 bg-white border text-primary font-semibold text-center  rounded-br-2xl">$430</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center">
            <Button className="" variant="default">
              Get a personal quote {arrowRightIcon}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const TestimonialsSection = () => {
  const [inView, setIsInView] = useState(false);
  const testimonials = [
    {
      image: Testimonial1Image,
      description: "“Saved $230 on my Miami trip. Booking was smooth and legit.”",
      fullName: "Sarah M., NYC",
      date: "2 days ago",
    },
    {
      image: Testimonial2Image,
      description: "“I sold my unused voucher in one day and got paid fast.”",
      fullName: "Kevin L., Dallas",
      date: "2 days ago",
    },
    {
      image: Testimonial3Image,
      description: "“Got Premium Economy for less than regular Economy. Crazy.”",
      fullName: "Amanda R., LA",
      date: "2 days ago",
    },
    {
      image: Testimonial1Image,
      description: "“Saved $230 on my Miami trip. Booking was smooth and legit.”",
      fullName: "Sarah M., NYC",
      date: "2 days ago",
    },
    {
      image: Testimonial2Image,
      description: "“I sold my unused voucher in one day and got paid fast.”",
      fullName: "Kevin L., Dallas",
      date: "2 days ago",
    },
    {
      image: Testimonial3Image,
      description: "“Got Premium Economy for less than regular Economy. Crazy.”",
      fullName: "Amanda R., LA",
      date: "2 days ago",
    },
  ];

  const isMobile = useIsMobile();

  return (
    <motion.section
      className={`relative overflow-hidden bg-[length:100%_auto] bg-top bg-no-repeat bg-none sm:bg-[url('/assets/images/rest/clouds-2.png')]`}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ amount: 0.3 }}
    >
      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary">
          {flowerIcon}
          Testimonials
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4  sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            Loved by
          </span>
          <span className="text-primary">smart flyers</span>
        </div>

        <div className="flex gap-x-3 gap-y-1 items-center justify-center flex-wrap mb-[2.5rem]">
          <h5 className="text-bold uppercase font-bold font-outfit">TripAdvisor</h5>
          <span>4,9</span>
          <div className="flex gap-1 [&>svg]:w-3">
            {starIcon} {starIcon}
            {starIcon}
            {starIcon}
            {starIcon}
          </div>
          <span>Based on 28 reviews</span>
        </div>

        {/* <div className="card-group flex gap-10">
          {testimonials.map((item,index) => {
            return <TestimonialCard key={index} {...item} />
          })}
          
        </div> */}

        <div className={`${inView ? "lazy-animate" : ""} `} data-lazy="fade-up">
          <CarouselDemo
            className="custom-carousel"
            autoplay={true}
            items={testimonials}
            loop={true}
            align={isMobile ? "center" : "start"}
          >
            {({ item, index }) => <TestimonialCard {...item} index={index} />}
          </CarouselDemo>
        </div>
      </div>
    </motion.section>
  );
};

const FAQSection = () => {
  const [inView1, setIsInView1] = useState(false);
  const [inView2, setIsInView2] = useState(false);

  const buyersFAQ = [
    {
      trigger: "Why cheaper than other sites?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
    {
      trigger: "Is it safe and legal?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
    {
      trigger: "How fast do I get my ticket?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
    {
      trigger: "What payment methods do you accept?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
  ];
  const sellersFAQ = [
    {
      trigger: "What vouchers do you buy?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
    {
      trigger: "How do I get paid?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
    {
      trigger: "What if my voucher is close to expiring?",
      content:
        "Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.",
    },
  ];

  return (
    <section className={``}>
      <div className="container">
        <h2 className="shadow flex w-fit mx-auto items-center text-sm gap-2 rounded-full bg-white py-[6px] px-[13px] text-primary">
          {flowerIcon}
          FAQ
        </h2>
        <div className="h2 text-center w-fit mx-auto relative">
          <span className="[&>svg]:-mb-4 [&>svg]:-ml-4 sm:[&>svg]:-mb-4 sm:[&>svg]:-ml-6 [&>svg]:w-5 sm:[&>svg]:w-7 inline-block mr-1 sm:mr-2">
            {patternIcon}
            Have
          </span>
          <span className="text-primary">any Questions ?</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[70px]">
          <div className="col flex-1 lg:max-w-[390px]">
            <h3 className="font-carter-one text-xl sm:text-4xl mb-[1rem] text-center lg:text-start">For Buyers</h3>
            <p className="p1 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit
              pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="" variant="default">
                Get my quote {arrowRightIcon}
              </Button>
            </div>
          </div>
          <motion.div
            className={`col flex-1 ${inView1 ? "lazy-animate" : ""}`}
            onViewportEnter={() => setIsInView1(true)}
            viewport={{ amount: 0.3 }}
            data-lazy="fade-up"
          >
            <AccordionDemo triggerClassName="" items={buyersFAQ} />
          </motion.div>
        </div>
        <br />
        <br />

        <div className="flex flex-col lg:flex-row gap-[70px]">
          <div className="col flex-1 lg:max-w-[390px] lg:order-1">
            <h3 className="font-carter-one text-xl sm:text-4xl mb-[1rem] text-center lg:text-start">For Sellers</h3>
            <p className="p1 text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur. Cras lectus consectetur purus phasellus. Porta et at egestas ut sit
              pellentesque. Nulla sagittis nulla imperdiet nisi placerat felis libero vel sit. Eu at.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button className="" variant="default">
                Sell my voucher {arrowRightIcon}
              </Button>
            </div>
          </div>
          <motion.div
            className={`col flex-1 ${inView2 ? "lazy-animate" : ""}`}
            onViewportEnter={() => setIsInView2(true)}
            viewport={{ amount: 0.3 }}
            data-lazy="fade-up"
          >
            <AccordionDemo triggerClassName="" items={sellersFAQ} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Template;
