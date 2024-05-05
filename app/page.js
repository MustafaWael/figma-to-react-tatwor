import Logo from "@/components/icons/logo";
import Menu from "@/components/icons/menu";
import Thunder from "@/components/icons/thunder";

import avararImage1 from "@/assets/images/avatars/027689a490eeaeb674d8e2f2c1c4703d.png";
import avararImage2 from "@/assets/images/avatars/79dd1fd91c9f71a0f5b6af96c20ffe1b.png";
import avararImage3 from "@/assets/images/avatars/3c8c1b737269d94cfe4c005301fe2a0b.png";

import headerImage1 from "@/assets/images/header/cedac26d4cdca814280bcfe09127683f.png";
import headerImage2 from "@/assets/images/header/d305afd753ecd74711389e4532a5b7dc.png";
import headerImage3 from "@/assets/images/header/301c391c0428677ec43db56340add9ce.jpg";
import headerImage4 from "@/assets/images/header/7332dc9a2e0da306e6f96bd5a508054e.png";

import sectionImage1 from "@/assets/images/section/f2ed8e6a7b3e5edfaa698706299ea601.png";
import sectionImage2 from "@/assets/images/section/ea36cefdfc0b0221607fec464806054c.png";

import girlImage from "@/assets/images/b1ed60f17781c84fffa6559df06e1f26.png";

import footerImage from "@/assets/images/b7d01f658df30f0d7e06f8ef530f238b.png";

import Image from "next/image";
import Link from "next/link";
import Envelope from "@/components/icons/envelope";
import Circle from "@/components/icons/circle";
import Box from "@/components/icons/box";
import StarBloom from "@/components/icons/starBloom";
import Star from "@/components/icons/star";
import Mail from "@/components/icons/mail";
import Etisalat from "@/components/icons/etisalat";
import SaudiAramco from "@/components/icons/saudiAramco";
import Aljazera from "@/components/icons/aljazera";
import Qatar from "@/components/icons/qatar";
import Talabat from "@/components/icons/talabat";
import Araco from "@/components/icons/araco";
import Facebook from "@/components/icons/facebook";
import Instagram from "@/components/icons/instagram";
import Dribble from "@/components/icons/dribble";
import LinkedIn from "@/components/icons/linkedin";
import Twitter from "@/components/icons/twitter";

export default function Home() {
  return (
    <main>
      <nav className="flex border-b-2 border-brown bg-rosy">
        <span className="border-l-2 border-brown flex-shrink min-w-14 md:min-w-20 flex justify-center items-center">
          <Menu />
        </span>
        <div className="flex flex-grow py-4 text-center justify-between px-0 lg:px-10">
          <div className="flex gap-x-6 items-center mx-auto lg:mx-0 lg:m-0">
            <span className="text-xl lg:text-3xl">تطور</span>
            <Logo />
          </div>
          <ul className="lg:flex gap-x-4 items-center mx-auto hidden">
            <li className="inline-block px-4 text-xl font-light">بيت</li>
            <li className="inline-block px-4 text-xl font-light">خدمة</li>
            <li className="inline-block px-4 text-xl font-light">التسعير</li>
            <li className="inline-block px-4 text-xl font-light">يدعم</li>
          </ul>
          <span className="lg:flex text-xl self-center hidden">اتصال</span>
        </div>
        <span className="border-r-2 border-brown flex-shrink min-w-14 md:min-w-20 flex justify-center items-center">
          <Thunder />
        </span>
      </nav>

      <header className="bg-rosy overflow-hidden">
        <div className="w-[calc(100%-7rem+3.5px)] md:w-[calc(100%-10rem+3px)] mx-auto border-l-2 border-r-2 border-brown flex flex-col ">
          <div className="text-center p-4 pt-14">
            <h1 className="text-3xl sm:text-4xl md:text-7xl leading-[1.3] text-darkBlue mb-6 md:mb-16 font-bold mx-auto">
              قم ببناء وتطوير
              <br /> وإدارة علامتك <br />
              التجارية
            </h1>
            <p className="text-darkBlue leading-10 text-xl md:text-3xl max-w-[550px] md:max-w-[700px] mx-auto">
              نحن نطبق علامتك التجارية من أجلك بدون أي متاعب لضمان بقاء مواد
              الاتصال الخاصة بك على العلامة التجارية باستمرار.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:mt-32 gap-4 items-center mt-6">
            <button className="w-[232px] h-[72px] md:w-[232px] md:h-[72px] rounded-3xl md:text-2xl border-2 border-darkBlue ease-in-out will-change-[transform,shadow] transition-all shadow-[0_0_0_0px_#3a405a] hover:shadow-[0_0_0_6px_#3a405a] active:shadow-[0_0_0_0px_#3a405a] active:scale-95">
              شغل الفيديو
            </button>
            <button className="w-[232px] h-[72px] md:w-[232px] md:h-[72px] rounded-3xl md:text-2xl border-2 border-darkBlue bg-darkBlue text-white ease-in-out will-change-[transform,shadow] transition-all shadow-[0_0_0_0px_#3a405a] hover:shadow-[0_0_0_6px_#3a405a] active:shadow-[0_0_0_0px_#3a405a] active:scale-95">
              البدء
            </button>
          </div>

          <div className="flex items-center gap-x-2 mx-auto mt-12 flex-row-reverse sm:hidden">
            <p className="text-right text-xs">
              أكثر من
              <br /> 1000 عميل راضٍ
            </p>
            <div className="flex flex-row-reverse">
              <Image
                src={avararImage3}
                width={40}
                height={43}
                alt="avatar"
                className="w-[40px] h-[43px] rounded-full border border-darkBlue -mr-2 z-20"
              />
              <Image
                src={avararImage2}
                width={40}
                height={43}
                alt="avatar"
                className="w-[40px] h-[43px] rounded-full border border-darkBlue -mr-2 z-10"
              />
              <Image
                src={avararImage1}
                width={40}
                height={43}
                alt="avatar"
                className="w-[40px] h-[43px] rounded-full border border-darkBlue z-0"
              />
            </div>
          </div>

          <div className="mt-8 sm:mt-28 translate-x-24 translate-y-3 sm:translate-y-0 sm:-translate-x-0 pt-4">
            <div className="masonry w-[500px]">
              <div className="brick order-4 mb-6 h-[400px] w-[240px] sm:h-[200px] sm:w-[800px] object-cover block">
                <Image
                  src={headerImage2}
                  alt="header image"
                  className="h-[400px] sm:h-[200px] sm:w-[800px] object-cover block"
                />
              </div>

              <div className="brick order-3 sm:flex sm:flex-col mb-6 w-[300px] sm:h-[200px] h-[272px] sm:w-[1000px] sm:-translate-x-0">
                <div className="hidden sm:flex items-center gap-x-2 mb-2 flex-row-reverse self-start">
                  <p className="text-right text-[0.65rem]">
                    أكثر من
                    <br /> 1000 عميل راضٍ
                  </p>
                  <div className="flex flex-row-reverse">
                    <Image
                      src={avararImage3}
                      width={30}
                      height={30}
                      alt="avatar"
                      className="w-[30px] h-[30px] rounded-full border border-darkBlue -mr-2 z-20"
                    />
                    <Image
                      src={avararImage2}
                      width={30}
                      height={30}
                      alt="avatar"
                      className="w-[30px] h-[30px] rounded-full border border-darkBlue -mr-2 z-10"
                    />
                    <Image
                      src={avararImage1}
                      width={30}
                      height={30}
                      alt="avatar"
                      className="w-[30px] h-[30px] rounded-full border border-darkBlue z-0"
                    />
                  </div>
                </div>

                <Image
                  src={headerImage4}
                  alt="header image"
                  className="w-[400px] sm:h-[200px] h-[272px] sm:w-[1000px] object-cover block"
                />
              </div>

              <div className="brick order-4 sm:translate-y-3 mb-6">
                <Image
                  src={headerImage1}
                  alt="header image"
                  className="h-[260px] sm:h-[250px] sm:w-[700px] object-cover block"
                />
              </div>

              <div className="brick order-2 m-0 sm:mb-6 -translate-x-16 md:translate-x-0">
                <Image
                  src={headerImage3}
                  alt="header image"
                  className="h-[410px] sm:h-[250px] w-[200px] sm:w-[700px] object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-darkBlue py-28 px-4 md:px-16 lg:px-28 flex flex-col justify-center md:flex-row md:items-center">
          <div className="flex flex-col justify-center text-center">
            <span className="text-rosy text-7xl font-bold lg:text-9xl">
              294
            </span>
            <span className="text-rosy text-2xl mt-3">مشاريع مكتملة</span>
          </div>

          <div className="border-b border-lightBlue my-24 w-[200px] mx-auto md:rotate-90" />

          <div className="flex flex-col justify-center text-center">
            <span className="text-rosy text-7xl font-bold lg:text-9xl">25</span>
            <span className="text-rosy text-2xl mt-3">كسب الجائزة</span>
          </div>

          <div className="border-b border-lightBlue my-24 w-[200px] mx-auto md:rotate-90" />

          <div className="flex flex-col justify-center text-center">
            <span className="text-rosy text-7xl font-bold lg:text-9xl">10</span>
            <span className="text-rosy text-2xl mt-3">فـــروع</span>
          </div>
        </section>

        <section className="bg-white py-28 px-4 md:px-16">
          <h2 className="text-right text-3xl md:text-5xl md:leading-[1.3] text-darkBlue font-bold mb-6 leading-[2.8rem] mx-auto">
            منصة العلامة التجارية <br /> المصممة لدعم الشركات
            <br /> الناشئة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-lightBlue py-8 px-4 flex flex-col justify-between">
              <Envelope className="mb-8" />
              <h3 className="text-right text-2xl md:text-3xl text-darkBlue font-bold mb-6 leading-10">
                التمييز &nbsp; العلامي
              </h3>

              <p className="text-right text-xl text-darkBlue leading-10">
                مراجعة تعريف ريادي الأعمال للتخطيط للعلامات التجارية مرة أخرى،
                هدف العلامة التجارية هو التمييز &nbsp; لمؤسستك.
              </p>

              <Link
                href="#"
                className="text-lg md:text-xl font-bold mt-6 block border-b pb-1 border-b-darkBlue w-fit"
              >
                تعرّف أكثر
              </Link>
            </div>

            <div className="bg-lightBlue py-8 px-4 flex flex-col justify-between">
              <Circle className="mb-8" />
              <h3 className="text-right text-2xl md:text-3xl text-darkBlue font-bold mb-6 leading-10">
                تطوير
              </h3>

              <p className="text-right text-xl text-darkBlue leading-10">
                تصميم وتطوير موقع إبداعي. نقوم بتخصيص جميع المواقع لتناسب
                احتياجاتك، سواء كان ذلك موقعًا للتسوق عبر الإنترنت أو غيره.
              </p>

              <Link
                href="#"
                className="text-lg md:text-xl font-bold mt-6 block border-b pb-1 border-b-darkBlue w-fit"
              >
                تعرّف أكثر
              </Link>
            </div>

            <div className="bg-lightBlue py-8 px-4 flex flex-col justify-between">
              <Box className="mb-8" />
              <h3 className="text-right text-2xl md:text-3xl text-darkBlue font-bold mb-6 leading-10">
                UI/UX
              </h3>

              <p className="text-right text-xl text-darkBlue leading-10">
                نجعل التطبيقات المعقدة سهلة للمستخدمين. سنكون سعداء بتنفيذ
                أفكارك في واجهة مستخدم سلسة وتجربة مستخدم ذات معنى.
              </p>

              <Link
                href="#"
                className="text-lg md:text-xl font-bold mt-6 block border-b pb-1 border-b-darkBlue w-fit"
              >
                تعرّف أكثر
              </Link>
            </div>

            <div className="bg-lightBlue py-8 px-4 flex flex-col justify-between">
              <StarBloom className="mb-8" />
              <h3 className="text-right text-2xl md:text-3xl text-darkBlue font-bold mb-6 leading-10">
                الترويج
              </h3>

              <p className="text-right text-xl text-darkBlue leading-10">
                تكامل وسائل التواصل الاجتماعي. كن واثقًا بأننا نعرف ونفهم أهمية
                وسائل التواصل الاجتماعي.
              </p>

              <Link
                href="#"
                className="text-lg md:text-xl font-bold mt-6 block border-b pb-1 border-b-darkBlue w-fit"
              >
                تعرّف أكثر
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-rosy p-4 overflow-hidden md:flex py-14">
          <div className="md:px-28 md:py-12 mb-10 md:flex md:flex-col md:gap-12">
            <h2 className="text-3xl md:text-5xl md:leading-[1.3] text-darkBlue font-bold mb-6 leading-[2.8rem]">
              نحن نفكر كإستراتيجيات. نحن نعمل كمبدعين.
            </h2>

            <p className="text-xl md:text-2xl text-darkBlue leading-10 mb-4">
              الرؤى والرؤى تصميم العلامة التجارية تصميم العلامة التجارية التصميم
              الرقمي
            </p>

            <div className="hidden md:block">
              <button className="w-full h-[72px] md:text-xl mx-auto rounded-3xl border-2 border-darkBlue bg-darkBlue text-white ease-in-out will-change-[transform,shadow] transition-all shadow-[0_0_0_0px_#3a405a] hover:shadow-[0_0_0_6px_#3a405a] active:shadow-[0_0_0_0px_#3a405a] active:scale-95">
                العمل الإبداعي
              </button>
            </div>
          </div>

          <div className="flex gap-x-3 md;gap-x-8 flex-nowrap w-[600px] mb-12">
            <div className="relative overflow-hidden min-w-[320px] md:min-w-[400px]">
              <div className="flex items-center justify-center absolute -right-8 -top-4 size-32 rounded-full border-l-2 -rotate-[30deg] border-darkBlue bg-rosy">
                <Star className="-translate-x-2" />
              </div>
              <Image
                src={sectionImage1}
                alt="section image"
                className="h-[500px] object-cover object-right rounded-tr-[4rem] bg-darkBlue"
              />
            </div>
            <div className="min-w-[500px] md:min-w-[400px]">
              <Image
                src={sectionImage2}
                alt="section image"
                className="h-[500px] object-cover bg-darkBlue"
              />
            </div>
          </div>

          <div className="md:hidden">
            <button className="w-full h-[72px] mx-auto rounded-3xl border-2 border-darkBlue bg-darkBlue text-white">
              العمل الإبداعي
            </button>
          </div>
        </section>

        <section className="bg-white py-28 px-4 xl:px-24">
          <h2
            className="text-3xl lg:text-5xl lg:leading-[1.4] text-darkBlue font-bold mb-6 leading-[2.8rem] text-center"
            style={{ wordSpacing: "4px" }}
          >
            هذه فقط عدد قليل من <br /> الشركات التي تشاركنا معها
          </h2>

          <div className="lg:flex gap-x-8 justify-between mt-28">
            <div className="lg:flex lg:w-[636px] ">
              <div>
                <div>
                  <Image
                    src={girlImage}
                    alt="girl image"
                    className="object-cover rounded-xl lg:max-w-[484px] bg-rosy"
                  />
                </div>

                <div>
                  <button className="w-full h-[72px] text-xl md:text-2xl rounded-md -mt-3 border-2 border-darkBlue bg-darkBlue text-white">
                    UI/UX مشروع
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:-rotate-90 lg:origin-center lg:translate-x-[calc(100%-112px)]">
                <button className="lg:w-[calc(450px)] md:text-2xl my-2 lg:mb-1 w-[calc(100%-40px)] mx-auto h-[72px] text-xl rounded-md border-2 border-darkBlue bg-darkBlue text-white">
                  العلامة التجارية
                </button>

                <button className="lg:w-[calc(520px)] md:text-2xl w-[calc(100%-80px)] mx-auto h-[72px] text-xl rounded-md border-2 border-darkBlue bg-darkBlue text-white">
                  الترقية
                </button>
              </div>
            </div>

            <div className="flex justify-center items-center max-w-[400px] mx-auto">
              <div className="flex flex-col items-center max-w-[400px]">
                <p className="text-center text-xl md:text-2xl text-darkBlue mt-12 lg:hidden leading-[2]">
                  تحقق من العمل الرائع الذي قمنا به معاً كل علامة تجارية فريدة
                  مع منتجات مختلفة، الجمهور المستهدف، وأهداف الأعمال.
                </p>
                <p className="text-center text-xl md:text-2xl text-darkBlue mt-12 lg:hidden leading-[2]">
                  هذا هو السبب في أننا نستخدم أفضل الأدوات التكنولوجية في الفصل
                  لتحليل الكميات الكبيرة
                </p>

                <p className="text-center text-xl md:text-2xl text-darkBlue mt-12 hidden lg:block leading-[2]">
                  تحقق من العمل الرائع الذي قمنا به معاً كل علامة تجارية فريدة
                  مع منتجات مختلفة، الجمهور المستهدف، وأهداف الأعمال. هذا هو
                  السبب في أننا نستخدم أفضل الأدوات التكنولوجية في الفصل لتحليل
                  الكميات الكبيرة
                </p>

                <button className="lg:w-fit w-full md:text-xl lg:px-14 lg:mx-auto h-[72px] rounded-full mt-12 border-2 border-darkBlue bg-darkBlue text-white ease-in-out will-change-[transform,shadow] transition-all shadow-[0_0_0_0px_#3a405a] hover:shadow-[0_0_0_6px_#3a405a] active:shadow-[0_0_0_0px_#3a405a] active:scale-95">
                  شاهد كل العمل
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lightBlue py-16 px-4 xl:px-24">
          <h2 className="text-3xl md:text-5xl md:leading-[1.3] text-darkBlue font-bold leading-[2.8rem] text-center">
            المستقبل مثير.
            <br /> دعنا نشكّله سوية.
          </h2>

          <p className="text-xl md:text-2xl text-darkBlue leading-10 text-center mt-14">
            ابدأ ببناء علامتك التجارية اليوم مع أفضل فريق
            <br /> العلامات التجارية، دعنا نعطي فرصة لجعل <br />
            علامتك التجارية أفضل.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-14">
            <button className="md:w-fit md:text-xl md:px-16 w-full lg:px-14 h-[72px] rounded-full bg-darkBlue ease-in-out will-change-[transform,shadow] transition-all text-white shadow-[0_0_0_0px_#3a405a] hover:shadow-[0_0_0_6px_#3a405a] active:shadow-[0_0_0_0px_#3a405a] active:scale-95">
              بدء العمل
            </button>
            <div className="md:w-fit md:px-16 md:text-xl w-full lg:px-14 h-[72px] rounded-full bg-darkBlue/15 flex justify-center items-center gap-x-3 ease-in-out will-change-[transform,shadow] transition-all shadow-[0_0_0_0px_#d9dde3] hover:shadow-[0_0_0_6px_#d9dde3]">
              <Mail />
              <input
                dir="ltr"
                type="email"
                className="bg-transparent w-[165px] md:w-[204px] border-none outline-none placeholder:text-darkBlue/70"
                placeholder="اكتب بريدك الإلكتروني"
              />
            </div>
          </div>

          <hr className="my-16 border-[1.5px] border-darkBlue" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-10 justify-center items-center">
            <Etisalat className="md:justify-self-center lg:w-44 lg:h-44" />
            <SaudiAramco className="justify-self-end md:justify-self-center lg:w-44 lg:h-44" />
            <Aljazera className="md:justify-self-center lg:w-44 lg:h-44" />
            <Qatar className="justify-self-end md:justify-self-center lg:w-44 lg:h-44 lg:-translate-y-16" />
            <Talabat className="md:justify-self-center lg:w-44 lg:h-44 lg:-translate-y-16" />
            <Araco className="justify-self-end md:justify-self-center lg:w-44 lg:h-44 lg:-translate-y-16" />
          </div>
        </section>
      </main>

      <footer className="bg-darkBlue px-4 md:px-16 pt-20">
        <div className="lg:flex justify-between gap-x-20">
          <div className="lg:max-w-[400px]">
            <div className="flex gap-x-6 items-center mx-auto lg:mx-0 lg:m-0">
              <span className="text-3xl md:text-4xl text-rosy">تطور</span>
              <Logo fillPath="rgba(249, 222, 201, 1)" />
            </div>

            <p className="text-white text-xl mt-12 leading-[3rem]">
              نحن نطبق علامتك التجارية من أجلك، بدون إزعاج. لضمان أن تبقى مواد
              الاتصال الخاصة بك ثابتة على العلامة التجارية.
            </p>
          </div>

          <div className="lg:flex hidden gap-x-16 my-20 lg:m-0">
            <div>
              <h2 className="text-rosy font-bold mb-8 text-2xl">الدعم</h2>
              <ul className="flex flex-col gap-y-8 text-sm md:text-lg text-lightBlue/70">
                <li>
                  <Link href={"#"}>مقالات الدعم</Link>
                </li>
                <li>
                  <Link href={"#"}>التدوين</Link>
                </li>
                <li>
                  <Link href={"#"}>برنامج المنتسبين</Link>
                </li>
                <li>
                  <Link href={"#"}>ابحث عن مدرب العلامة التجارية</Link>
                </li>
                <li>
                  <Link href={"#"}>سياسة الخصوصية</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-rosy font-bold mb-8 text-2xl">أوراكل</h2>
              <ul className="flex flex-col gap-y-8 text-sm md:text-lg text-lightBlue/70">
                <li>
                  <Link href={"#"}>العمل</Link>
                </li>
                <li>
                  <Link href={"#"}>حول</Link>
                </li>
                <li>
                  <Link href={"#"}>الخدمات</Link>
                </li>
                <li>
                  <Link href={"#"}>الاتصال</Link>
                </li>
                <li>
                  <Link href={"#"}>المهن</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex justify-between shrink-0 my-20 lg:my-0 md">
            <div className="flex gap-x-16 my-20 md:m-0 lg:hidden">
              <div>
                <h2 className="text-rosy font-bold mb-8 text-2xl">الدعم</h2>
                <ul className="flex flex-col gap-y-8 text-sm text-lightBlue/70">
                  <li>
                    <Link href={"#"}>مقالات الدعم</Link>
                  </li>
                  <li>
                    <Link href={"#"}>التدوين</Link>
                  </li>
                  <li>
                    <Link href={"#"}>برنامج المنتسبين</Link>
                  </li>
                  <li>
                    <Link href={"#"}>ابحث عن مدرب العلامة التجارية</Link>
                  </li>
                  <li>
                    <Link href={"#"}>سياسة الخصوصية</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-rosy font-bold mb-8 text-2xl">أوراكل</h2>
                <ul className="flex flex-col gap-y-8 text-sm text-lightBlue/70">
                  <li>
                    <Link href={"#"}>العمل</Link>
                  </li>
                  <li>
                    <Link href={"#"}>حول</Link>
                  </li>
                  <li>
                    <Link href={"#"}>الخدمات</Link>
                  </li>
                  <li>
                    <Link href={"#"}>الاتصال</Link>
                  </li>
                  <li>
                    <Link href={"#"}>المهن</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-rosy mb-8">
                آخر أخبار العلامة التجارية
              </h2>

              <div>
                <Image
                  src={footerImage}
                  alt="footer image"
                  className="w-[257px] h-[196px] object-center bg-lightBlue"
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="border border-rosy/50 mt-12" />

        <div className="flex justify-center py-6">
          <div className="max-w-[302px] md:max-w-fit">
            <ul className="flex flex-wrap gap-12 justify-center">
              <li className="size-[52px] rounded-full bg-white flex justify-center items-center">
                <Link href={"#"}>
                  <span className="sr-only">facebook</span>
                  <Facebook />
                </Link>
              </li>
              <li className="size-[52px] rounded-full bg-white flex justify-center items-center">
                <Link href={"#"}>
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </Link>
              </li>
              <li className="size-[52px] rounded-full bg-white flex justify-center items-center">
                <Link href={"#"}>
                  <span className="sr-only">Dribble</span>
                  <Dribble />
                </Link>
              </li>
              <li className="size-[52px] rounded-full bg-white flex justify-center items-center">
                <Link href={"#"}>
                  <span className="sr-only">LinkedIn</span>
                  <LinkedIn />
                </Link>
              </li>
              <li className="size-[52px] rounded-full bg-white flex justify-center items-center">
                <Link href={"#"}>
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
