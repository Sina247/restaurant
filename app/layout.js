"use client";

import AutoTypingText from "../app/AutoTypingText";
import "../app/bootstrap.rtl.css";
import { useState } from 'react';
import Image from "next/image";
import "../app/globals.css";
import "../app/page.css";

export default function Layout() {
  const messages = ["در رستوران ما", "تجربه اورجینال"];

  const [activeMenu, setActiveMenu] = useState("starters");

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <html>
      <head>
        <title>Crafto - Restaurant</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://craftohtml.themezaa.com/images/apple-touch-icon-114x114.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body>
        {/* Header */}

        <section className="container header">
          <button className="btn m-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
            <Image src="/menu.svg" width="25" height="25" layout="responsive" className="header-menu" alt="menu"></Image>
          </button>

          <div className="offcanvas offcanvas-start" id="offcanvasMenu">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">منو</h5>
            </div>

            <div className="offcanvas-body">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">خانه</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">درباره ما</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">لیست غذا ها</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">داستان ما</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">گالری ما</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">سر اشپز ما</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">وبلاگ ما</a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">ارتباط با ما</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center text-center align-items-center m-3">
            <a href="#" className="header-a">رزرو میز</a>
          </div>
        </section>

        {/* Banner */}

        <section className="container banner">
          <div className="container banner-inner">
            <div className="row banner-on">
              <div className="col-12 banner-doc">
                <div className="banner-box">
                  <div className="banner-out">
                    <p className="banner-p">طعم ایتالیا را در رستوران ما تجربه کنید</p>

                    <div>
                      <span className="banner-span-up">پذیرایی لوکس</span>

                      <span>
                        <AutoTypingText className="auto-typing-text" messages={messages} typingSpeed={120} pauseTime={1500} />
                      </span>
                    </div>

                    <a href="#" className="banner-a">تجربه واقعی</a>

                    <Image src="/icon.webp" width="210" height="210" layout="responsive" className="banner-img" alt="banner"></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food */}

        <section className="container food">
          <div className="food-1">
            <Image src="/food-1.jpg" width="25" height="25" layout="responsive" className="food-img-1" alt="food-1"></Image>
          </div>

          <div className="food-2">
            <Image src="/food-2.jpg" width="25" height="25" layout="responsive" className="food-img-1" alt="food-2"></Image>
          </div>

          <div className="container food-inner">
            <div className="row align-items-center mb-5 food-625">
              <div className="col-xl-5 col-lg-6">
                <span className="food-span-2">فعالیت ما از سال ۱۳۶۳ اغاز شده است</span>

                <h1 className="food-h1">تجربه غذای شگفت‌ انگیز و عالی</h1>

                <p className="food-p">در رستوران ما تجربه‌ای بی‌ نظیر از طعم‌ های اصیل و غذا های لذیذ را تجربه کنید. با محیطی دلپذیر و خدماتی استثنایی هر وعده غذایی به یک خاطره خوش تبدیل می‌شود. از منوی متنوع ما لذت ببرید و لحظاتی فراموش‌ نشدنی را در کنار عزیزانتان سپری کنید</p>

                <div>
                  <div></div>

                  <a href="#" className="banner-a">درباره رستوران</a>
                </div>
              </div>

              <div className="col-xl-7 col-lg-6 food-bowl">
                <Image src="/demo.png" width="25" height="25" layout="responsive" className="food-img-2" alt="food-3"></Image>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 food-100">
              <div className="col food-doc">
                <div className="food-margin">
                  <Image src="/box.svg" width="25" height="25" layout="responsive" className="food-img" alt="food-img"></Image>
                </div>

                <div className="food-60">
                  <span className="food-span">تحویل سریع</span>

                  <p className="mb-0 food-p">در عرض ۳۰ دقیقه</p>
                </div>
              </div>

              <div className="col food-doc">
                <div className="food-margin">
                  <Image src="/award.svg" width="25" height="25" layout="responsive" className="food-img" alt="food-img"></Image>
                </div>

                <div className="food-60">
                  <span className="food-span">غذای بی‌ نظیر</span>

                  <p className="mb-0 food-p">بهترین رستوران بوفه</p>
                </div>
              </div>

              <div className="col food-doc">
                <div className="food-margin">
                  <Image src="/bag.svg" width="25" height="25" layout="responsive" className="food-img" alt="food-img"></Image>
                </div>

                <div className="food-60">
                  <span className="food-span">تحویل گرفتن</span>

                  <p className="mb-0 food-p">غذای خود را بردارید</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}

        <section className="container menu">
          <div className="container menu-inner">
            <div className="row menu-header">
              <div className="col-lg-7 text-center">
                <span className="dish-span">بهترین طعم را انتخاب‌ کنید</span>

                <h2>پر فروش‌ ترین‌ های منو</h2>
              </div>
            </div>

            <div className="row menu-main">
              <div className="menu-button-box">
                <button className="menu-button" onClick={() => handleMenuChange("starters")}>پیش غذا</button>

                <button className="menu-button" onClick={() => handleMenuChange("nonveg")}>حیوانی</button>

                <button className="menu-button" onClick={() => handleMenuChange("vegetarian")}>گیاهی</button>

                <button className="menu-button" onClick={() => handleMenuChange("dessert")}>دسر</button>

                <button className="menu-button" onClick={() => handleMenuChange("drinks")}>نوشیدنی‌</button>
              </div>

              <div className="menu-content">
                {activeMenu === "starters" && (
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-13.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-14.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-15.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۷۲۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-16.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-17.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-18.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeMenu === 'nonveg' && (
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-18.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-17.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-16.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۷۲۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-15.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-14.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-13.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeMenu === "vegetarian" && (
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-13.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-14.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-15.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۷۲۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-16.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-17.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-18.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeMenu === "dessert" && (
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-17.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-18.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-16.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۷۲۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-15.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-13.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-14.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeMenu === "drinks" && (
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-13.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-14.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-15.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۷۲۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 h-100">
                      <ul className="h-100 p-0 m-0">
                        <li className="menu-li">
                          <Image src="/food-16.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">تخم‌ مرغ پخته‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۱,۰۸۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">سرشار از مواد مغذی تازه</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-17.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">برگر سینه مرغ</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۹۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">با کاهوی تازه گوجه‌ در نان تست‌</p>
                          </div>
                        </li>

                        <li className="menu-li">
                          <Image src="/food-18.jpg" width="40" height="40" layout="responsive" className="menu-img" alt="dish"></Image>

                          <div className="menu-detail">
                            <div className="menu-name">
                              <span className="menu-food">سیب‌ زمینی سرخ‌ شده</span>

                              <div className="menu-line"></div>

                              <p className="mb-0 menu-food">۹۰۰,۰۰۰</p>
                            </div>

                            <p className="menu-color">ادویه‌ دار شده با ترکیبی از چاشنی‌ های تند</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-12 text-center">
                <div className="menu-chef">برترین سراشپز</div>

                <div className="menu-text">غذا های منحصر به ‌فرد و خوشمزه از بهترین سراشپز های جهان</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dish */}

        <section className="container dish">
          <div className="container dish-inner">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                <span className="dish-span">انتخاب‌ های خاص و متفاوت</span>

                <h3>غذا های محبوب و خوشمزه</h3>
              </div>
            </div>

            <div className="row dish-450">
              <div className="col-12">
                <div className="dish-container">
                  <div className="dish-item">
                    <div className="dish-355">
                      <Image src="/food-3.jpg" width="40" height="40" layout="responsive" className="dish-img" alt="dish"></Image>

                      <div className="d-flex justify-content-center">
                        <div className="dish-box">
                          <div className="dish-text">
                            <div className="dish-dark">۳,۱۵۰,۰۰۰</div>

                            <div className="dish-light">تومان</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="dish-food">چیپس با طعم تند ملایم</div>

                      <div className="d-flex justify-content-evenly">
                        <span className="dish-color">پنیر</span>

                        <span className="dish-color">فلفل دلمه‌ ای</span>

                        <span className="dish-color">ریحان تازه</span>
                      </div>
                    </div>
                  </div>

                  <div className="dish-item">
                    <div className="dish-355">
                      <Image src="/food-4.jpg" width="40" height="40" layout="responsive" className="dish-img" alt="dish"></Image>

                      <div className="d-flex justify-content-center">
                        <div className="dish-box">
                          <div className="dish-text">
                            <div className="dish-dark">۳,۱۵۰,۰۰۰</div>

                            <div className="dish-light">تومان</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="dish-food">ساندویچ سینه مرغ</div>

                      <div className="d-flex justify-content-evenly">
                        <span className="dish-color">گوجه فرنگی</span>

                        <span className="dish-color">پنیر پارمزان</span>

                        <span className="dish-color">ریحان تازه</span>
                      </div>
                    </div>
                  </div>

                  <div className="dish-item">
                    <div className="dish-355">
                      <Image src="/food-6.jpg" width="40" height="40" layout="responsive" className="dish-img" alt="dish"></Image>

                      <div className="d-flex justify-content-center">
                        <div className="dish-box">
                          <div className="dish-text">
                            <div className="dish-dark">۳,۱۵۰,۰۰۰</div>

                            <div className="dish-light">تومان</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="dish-food">سینی پیش‌ غذا وسوسه‌ انگیز</div>

                      <div className="d-flex justify-content-evenly">
                        <span className="dish-color">خیار</span>

                        <span className="dish-color">قارچ</span>

                        <span className="dish-color">ریحان تازه</span>
                      </div>
                    </div>
                  </div>

                  <div className="dish-item">
                    <div className="dish-355">
                      <Image src="/food-5.jpg" width="40" height="40" layout="responsive" className="dish-img" alt="dish"></Image>

                      <div className="d-flex justify-content-center">
                        <div className="dish-box">
                          <div className="dish-text">
                            <div className="dish-dark">۳,۱۵۰,۰۰۰</div>

                            <div className="dish-light">تومان</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="dish-food">ساندویچ سینه مرغ</div>

                      <div className="d-flex justify-content-evenly">
                        <span className="dish-color">فلفل دلمه‌ ای</span>

                        <span className="dish-color">پنیر پارمزان</span>

                        <span className="dish-color">پنیر گیاهی</span>
                      </div>
                    </div>
                  </div>

                  <div className="dish-item">
                    <div className="dish-355">
                      <Image src="/food-7.jpg" width="40" height="40" layout="responsive" className="dish-img" alt="dish"></Image>

                      <div className="d-flex justify-content-center">
                        <div className="dish-box">
                          <div className="dish-text">
                            <div className="dish-dark">۳,۱۵۰,۰۰۰</div>

                            <div className="dish-light">تومان</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="dish-food">بشقاب پیش‌ غذا وسوسه‌انگیز</div>

                      <div className="d-flex justify-content-evenly">
                        <span className="dish-color">قارچ</span>

                        <span className="dish-color">پنیر پارمزان</span>

                        <span className="dish-color">پنیر هندی</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Move */}

        <div className="move-container">
          <div className="move-text move-orange">مهارت</div>

          <div className="move-text move-black">شگفت‌ انگیز</div>

          <div className="move-text move-orange">خوشمزه</div>

          <div className="move-text move-black">غذا های محلی</div>
        </div>

        {/* Point */}

        <section className="container point">
          <div className="point-1">
            <Image src="/food-8.jpg" width="25" height="25" layout="responsive" className="point-img-2" alt="point-1"></Image>
          </div>

          <div className="point-2">
            <Image src="/food-9.jpg" width="25" height="25" layout="responsive" className="point-img-1" alt="point-2"></Image>
          </div>

          <div className="container point-inner">
            <div className="row justify-content-center h-100">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="point-container">
                  <div className="point-item">
                    <Image src="/quote.jpg" width="25" height="25" layout="responsive" className="point-img-3" alt="point-3"></Image>

                    <h4 className="point-h4">برخورد کارکنان عالی بود و غذا فوق‌ العاده بود. امکانات نیز مناسب بودند. دسر ها و نحوه سرو ان‌ ها را خیلی دوست داشتم. برای یک دورهمی خانوادگی به اینجا آمدیم و این مکان واقعاً من را تحت تأثیر قرار داد.</h4>

                    <span className="point-span">نازنین محمدی</span>

                    <Image src="/person-1.jpg" width="25" height="25" layout="responsive" className="point-img-4" alt="person"></Image>
                  </div>

                  <div className="point-item">
                    <Image src="/quote.jpg" width="25" height="25" layout="responsive" className="point-img-3" alt="point-3"></Image>

                    <h4 className="point-h4">خدمات عالی، غذای خوشمزه و امکانات مناسب! دسر ها فوق‌العاده بودند و طرز ارائه‌ شان را دوست داشتم. ما برای شام خانوادگی اینجا بودیم و اینجا واقعاً تأثیرگذار بود.</h4>

                    <span className="point-span">سینا احمدی</span>

                    <Image src="/person-2.jpg" width="25" height="25" layout="responsive" className="point-img-4" alt="person"></Image>
                  </div>

                  <div className="point-item">
                    <Image src="/quote.jpg" width="25" height="25" layout="responsive" className="point-img-3" alt="point-3"></Image>

                    <h4 className="point-h4">ارتباطات خوب بود و غذا عالی بود. امکانات هم مناسب بودند. دسر ها و نحوه ارائه‌ شان را دوست داشتم. ما برای یک شام خانوادگی اینجا امدیم و این مکان قلبم را تسخیر کرد.</h4>

                    <span className="point-span">علی حسینی</span>

                    <Image src="/person-3.jpg" width="25" height="25" layout="responsive" className="point-img-4" alt="person"></Image>
                  </div>
                </div>

                <div className="col-auto point-star">
                  <div className="point-sell">بیش از ۲۵,۰۰۰ دوستداران غذا از رستوران اصیل ما بازدید کرده‌اند</div>

                  <div className="point-doc">
                    <svg className="point-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>

                    <svg className="point-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>

                    <svg className="point-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>

                    <svg className="point-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>

                    <svg className="point-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}

        <section className="container blog">
          <div className="container blog-inner">
            <div className="row blog-header">
              <div className="col-lg-7 text-center">
                <span className="dish-span">برگرفته از وبلاگ ما</span>

                <h2>جدید ترین نوشته‌ ها</h2>
              </div>
            </div>

            <div className="row blog-500">
              <div className="col-12">
                <ul className="d-flex h-100 p-0 m-0 blog-ul">
                  <li className="blog-li p-2">
                    <figure className="h-100 blog-figure">
                      <div className="blog-79">
                        <a href="#">
                          <Image src="/food-10.jpg" width="40" height="40" layout="responsive" className="blog-img" alt="blog"></Image>
                        </a>
                      </div>

                      <figcaption className="blog-figcaption">
                        <div>
                          <a href="#" className="blog-top-button">رستوران</a>
                        </div>

                        <a href="#" className="blog-a">همیشه به اندازه توانت غذا بخور، نه بیشتر.</a>
                      </figcaption>
                    </figure>
                  </li>

                  <li className="blog-li p-2">
                    <figure className="h-100 blog-figure">
                      <div className="blog-79">
                        <a href="#">
                          <Image src="/food-11.jpg" width="40" height="40" layout="responsive" className="blog-img" alt="blog"></Image>
                        </a>
                      </div>

                      <figcaption className="blog-figcaption">
                        <div>
                          <a href="#" className="blog-top-button">رستوران</a>
                        </div>

                        <a href="#" className="blog-a">زندگی پر از تغییر است، پس دسر را در اولویت بگذار.</a>
                      </figcaption>
                    </figure>
                  </li>

                  <li className="blog-li p-2">
                    <figure className="h-100 blog-figure">
                      <div className="blog-79">
                        <a href="#">
                          <Image src="/food-12.jpg" width="40" height="40" layout="responsive" className="blog-img" alt="blog"></Image>
                        </a>
                      </div>

                      <figcaption className="blog-figcaption">
                        <div>
                          <a href="#" className="blog-top-button">رستوران</a>
                        </div>

                        <a href="#" className="blog-a">غذا های مختلف اساساً برای من اهمیتی ندارد.</a>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <section className="container footer">
          <div className="container footer-up">
            <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 footer-140">
              <div className="col mb-3">
                <div className="d-flex justify-content-center">
                  <Image src="/form.svg" width="40" height="40" layout="responsive" className="footer-img" alt="footer"></Image>
                </div>

                <div className="footer-90">
                  <span className="footer-span">درباره رستوران</span>

                  <p className="footer-p-2">از تجربه غذای عالی در کافه لذت ببرید</p>
                </div>
              </div>

              <div className="col mb-3">
                <div className="d-flex justify-content-center">
                  <Image src="/phone.svg" width="40" height="40" layout="responsive" className="footer-img" alt="footer"></Image>
                </div>

                <div className="footer-90">
                  <span className="footer-span">بیایید صحبت کنیم</span>

                  <p className="footer-p-2">
                    <span className="footer-span-2">تلفن : ۰۹۱۹۱۵۰۱۲۹۳</span>

                    <span className="footer-span-2">فکس :۱۸۰۰۲۲۲۰۰۲</span>
                  </p>
                </div>
              </div>

              <div className="col mb-3">
                <div className="d-flex justify-content-center">
                  <Image src="/mail.svg" width="40" height="40" layout="responsive" className="footer-img" alt="footer"></Image>
                </div>

                <div className="footer-90">
                  <span className="footer-span">رزرو کردن میز</span>

                  <p className="footer-p-2">
                    <a href="#" className="footer-a-2">sina247re@gmail.com</a>
                    <br />
                    <a href="#" className="footer-a-2">info@restaurant.com</a>
                  </p>
                </div>
              </div>

              <div className="col mb-3">
                <div className="d-flex justify-content-center">
                  <Image src="/location.svg" width="40" height="40" layout="responsive" className="footer-img" alt="footer"></Image>
                </div>

                <div className="footer-90">
                  <span className="footer-span">ارتباط با ما</span>

                  <p className="footer-p-2">منتظر حضور گرم شما در رستوران هستیم</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container footer-down">
            <div className="container footer-down-inner">
              <div className="row footer-down-row">
                <div className="col-md-6 col-sm-6 text-center text-sm-start order-3 order-sm-2 order-md-1 d-flex footer-30">
                  <p className="footer-p">
                    تمام حقوق برای
                    <a href="#" className="footer-a"> سینا احمدی </a>
                  </p>
                </div>

                <div className="col-md-6 col-sm-6 text-center text-sm-end order-2 order-sm-3 order-md-3 footer-30">
                  <ul className="d-flex justify-content-end w-100 p-0 m-0">
                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html >
  );
}
