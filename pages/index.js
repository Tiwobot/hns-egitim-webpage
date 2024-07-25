/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return <>
    <IndexNavbar fixed />
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Profesyonel Matematik Eğitimi
              <iframe styles="border-radius:12px" src="https://open.spotify.com/embed/track/4Hhv2vrOTy89HFRcjU3QOx?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Havva Nur Serin ile çocuğunuzun geleceğini garantiye alın.{" "}
              <a
                href="https://www.ibo.org"
                className="text-blueGray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                IB Sertifikası
              </a>
               'na sahip özel dersler ile uluslararası standartlara uygun yurt dışında da kabul gören üst düzey eğitime ulaşmanız artık çok kolay.
            </p>
            <div className="mt-12">
              <a
                href="/"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Bilgi Al
              </a>
              <a
                href="https://www.ibo.org"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
              >
                IB nedir?
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="/img/pattern_nextjs.png"
        alt="..."
      />
    </section>

    <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blueGray-700 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Öğrencimiz için en iyisi!
                </h4>
                <p className="text-md font-light mt-2 text-white">
                HNS Eğitim ile matematikteki hedeflerinize emin adımlarla ilerleyin. Detaylı bilgi almak ve kayıt olmak için bizimle iletişime geçin!
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-user-check"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                    Uzman Öğretmen
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                    Alanında deneyimli ve nitelikli öğretmenlerimiz, her öğrencinin öğrenme tarzına uygun bireysel ders programları sunar.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-star"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      Premium Kalite
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                    Uluslararası standartlarda öğretim materyalleri ve yöntemleri ile öğrencilerimizin potansiyellerini en üst seviyeye çıkarırız.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i class="fas fa-edit"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Özelleştirilmiş Programlar</h6>
                    <p className="mb-4 text-blueGray-500">
                    Her öğrencinin ihtiyaçlarına göre özel olarak hazırlanan ders planlarıyla eksikleri kapatın, güçlü yönlerinizi geliştirin.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i class="fas fa-question"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                    Destek ve İlgi
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                    Sadece ders saatlerinde değil, her zaman yanınızdayız. Sorularınızı çözmek ve başarıya giden yolda size rehberlik etmek için buradayız.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden pb-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-sitemap text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-custom-blue">
              Sınıf ve Konular
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-500">
              Özel derslerimiz ilk okul ve orta okul seviyelerine yönelik olup, MEB'in yayınladığı müfredatı takip etmekle beraber aynı zamanda kişisel gelişim, yaratıcılık ve girişkenliğe yönelik eğitimleride kapsamaktadır. 
            </p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
              target="_blank"
              className="font-bold text-blueGray-500 hover:text-blueGray-700 ease-linear transition-all duration-150"
            >
              Detaylı Bilgi{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src="/img/component-btn.png"
                className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
              />
              <img
                alt="..."
                src="/img/component-profile-card.png"
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
              />
              <img
                alt="..."
                src="/img/component-info-card.png"
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
              />
              <img
                alt="..."
                src="/img/component-info-2.png"
                className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              />
              <img
                alt="..."
                src="/img/component-menu.png"
                className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              />
              <img
                alt="..."
                src="/img/component-btn-pink.png"
                className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Svelte
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      NextJS
                    </p>
                  </div>
                </a>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Angular
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Vue.js
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-drafting-compass text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Kişiselleştirilmiş Dersler
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-500">
            HNS Eğitim olarak, öğrencilerimize sadece bilgi vermekle kalmıyor, aynı zamanda onların öğrenme sürecinde aktif bir şekilde yer almalarını sağlıyoruz. Her öğrencinin benzersiz özelliklerini ve güçlü yönlerini keşfetmelerine destek oluyoruz.
            </p>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-500">
            Deneyimli ve alanında uzman öğretmenimiz, öğrencilerimizin bireysel öğrenme tarzlarına uygun olarak dersler düzenler ve onların ilgi alanlarına yönelik içerikler sunar.
            </p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
              target="_blank"
              className="font-bold text-blueGray-500 hover:text-blueGray-700 ease-linear transition-all duration-150"
            >
              Detaylı Bilgi{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i class="fas fa-desktop"></i>
              </div>
              <h3 className="text-3xl font-semibold text-custom-blue">
                Online Eğitim Materyali
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Öğrencilerimize evlerinin konforunda çalışabilmeleri için materyaller paylaşılır, öğrencimizin talebi doğrultusunda online ders yapılarak konu anlatımı / soru çözümü yapılır.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i class="fas fa-file-alt"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Konu Bazında Eğitim Materyalleri
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i class="fas fa-headset"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Online-Konferans Ders Anlatımları
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                      <i class="fas fa-flask"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Online Testler
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="/img/documentation.png"
            />
          </div>
        </div>
      </div>

      <div className="justify-center text-center flex flex-wrap mt-24">
        <div className="w-full md:w-6/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">HNS ile yeni nesil bir eğitime hazır mısınız?</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            HNS Eğitim is a completly new product built using our past
            experience in web templates. Take the examples we made for you and
            start playing with them.
          </p>
        </div>
      </div>
    </section>

    <section className="block relative z-1 bg-blueGray-600">
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4  -mt-24">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  Login Page
                </h5>
                <Link href="/auth/login" legacyBehavior>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/login.jpg"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  Profile Page
                </h5>
                <Link href="/profile" legacyBehavior>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/profile.jpg"
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  Landing Page
                </h5>
                <Link href="/landing" legacyBehavior>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="/img/landing.jpg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-blueGray-600 overflow-hidden">
      <div className="container mx-auto pb-64">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-code-branch text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
              Since{" "}
              <a
                href="https://tailwindcss.com/?ref=creative"
                className="text-blueGray-300"
                target="_blank"
              >
                Tailwind CSS
              </a>{" "}
              is an open source project we wanted to continue this movement
              too. You can give this version a try to feel the design and also
              test the quality of the code!
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
              target="_blank"
              className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
            >
              Github Star
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-16 bg-blueGray-200 relative pt-32">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <h3 className="font-semibold text-3xl">
              Do you love this Starter Kit?
            </h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>;
}
