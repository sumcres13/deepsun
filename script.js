const page = document.body.dataset.page || "home";

document.getElementById("site-header-mount").innerHTML = `
  <header class="site-header" id="site-header">
    <div class="header-inner container-wide">
      <a class="company-brand" href="index.html" aria-label="B &amp; T 合同会社 ホーム" data-i18n-aria="companyHome"><span data-i18n="companyName">B &amp; T 合同会社</span></a>
      <nav class="desktop-nav" aria-label="メインナビゲーション" data-i18n-aria="mainNavigation">
        <a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a>
        <a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a>
        <a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a>
        <a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a>
      </nav>
      <div class="header-actions"><button class="language-toggle" type="button" id="language-switch" aria-label="英語に切り替える"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3 12h18"></path></svg><span class="language-target" lang="en">English</span></button><button class="menu-toggle" type="button" id="menu-toggle" aria-label="メニューを開く" data-i18n-aria="openMenu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="モバイルナビゲーション" data-i18n-aria="mobileNavigation" hidden><a href="index.html" ${page === "home" ? 'aria-current="page"' : ""} data-i18n="navHome">ホーム</a><a href="about.html" ${page === "about" ? 'aria-current="page"' : ""} data-i18n="navAbout">私たちについて</a><a href="stores.html" ${page === "stores" ? 'aria-current="page"' : ""} data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" ${page === "reservation" ? 'aria-current="page"' : ""} data-i18n="navReservePlain">ご予約</a></nav>
  </header>`;

document.getElementById("site-footer-mount").innerHTML = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a class="footer-company" href="index.html" data-i18n="companyName">B &amp; T 合同会社</a><p data-i18n="footerStatement">市川・南八幡のアジアンダイニング＆バー。</p></div>
    <div><h2 data-i18n="contactLabel">お問い合わせ</h2><p><span data-i18n="addressFull">千葉県市川市南八幡5-17-10</span></p><a href="tel:0473033560">047-303-3560</a></div>
    <div class="footer-nav"><h2 data-i18n="navigationLabel">ナビゲーション</h2><a href="index.html" data-i18n="navHome">ホーム</a><a href="about.html" data-i18n="navAbout">私たちについて</a><a href="stores.html" data-i18n="navStore">店舗・アクセス</a><a href="reservation.html" data-i18n="navReservePlain">ご予約</a></div>
  </div><div class="container footer-bottom"><span>© <span id="year">2026</span> <span data-i18n="companyName">B &amp; T 合同会社</span> <span data-i18n="rightsReserved">無断転載を禁じます。</span></span><a href="#main-content" data-i18n="footerBack">ページ上部へ ↑</a></div></footer>`;

const en = {
  "navHome": "Home",
  "navAbout": "About us",
  "navStore": "Store & access",
  "navReservePlain": "Reservations",
  "companyName": "B &amp; T 合同会社",
  "companyHome": "B & T 合同会社 home",
  "footerStatement": "Asian Dining &amp; Bar in Minami-Yawata, Ichikawa.",
  "heroLine1": "A taste of spice",
  "heroLine2": "in Minami-Yawata.",
  "heroCopy": "Welcome to Asian Dining &amp; Bar DEEPSUN.<br class=\"desktop-break\">Pull up a chair for curry, naan, and a meal worth sharing.",
  "heroReserve": "Reserve a table",
  "heroAccess": "Store & access",
  "heroImageAlt": "Asian Dining & Bar DEEPSUN storefront in Minami-Yawata, Ichikawa",
  "aboutTitle": "<span class=\"about-heading-line\">A place to share</span><span class=\"about-heading-line\">a meal in Ichikawa.</span>",
  "aboutBody": "DEEPSUN is an Asian dining spot and bar in Minami-Yawata, Ichikawa. Settle in at a wooden table for fragrant curries, naan, and time to catch up.",
  "aboutLink": "About us",
  "diningImageAlt": "Wooden tables and window-side bench seating at DEEPSUN",
  "homeStoreInfoLabel": "STORE INFORMATION",
  "shopName": "DEEPSUN",
  "homeQuality1Title": "Indian & Asian flavors",
  "homeQuality1Text": "Enjoy curry, naan, and dishes filled with the fragrance of spices.",
  "homeQuality2Title": "A place to settle in",
  "homeQuality2Text": "Take your time over lunch or dinner at our wooden tables and bench seating.",
  "homeQuality3Title": "Enjoy at the restaurant or at home",
  "homeQuality3Text": "Dine in or order through our delivery partners.",
  "snsTitle": "Find DEEPSUN on LINE",
  "snsCopy": "Add the restaurant as a friend.",
  "lineFollow": "Connect on LINE",
  "homeReserveTitle": "Reservations & inquiries",
  "homeReserveCopy": "Find reservation methods and delivery services here.",
  "reservePage": "Reservations",
  "aboutPageTitle": "About us",
  "repRole": "<span class=\"company-name-inline\">B &amp; T 合同会社</span> / Representative Director",
  "representativeName": "ACHARYA HOM NATH",
  "representativeAlt": "ACHARYA HOM NATH, representative director of B & T 合同会社",
  "ceoP1": "Welcome to DEEPSUN. We wanted to give Minami-Yawata a place where you can slow down over fragrant curry and warm naan. Drop by for lunch during the workday or bring family and friends for dinner. All of us at DEEPSUN look forward to welcoming you.",
  "valuesTitle": "What matters to us",
  "value1Title": "Fragrant spices",
  "value1Text": "Take in the aroma of spices over curry and naan.",
  "value2Title": "A warm welcome",
  "value2Text": "Come in for lunch on your own or settle in with family and friends for dinner.",
  "value3Title": "Time around the table",
  "value3Text": "Enjoy your meal and take your time catching up.",
  "waterFeatureTitle": "Care in every glass",
  "waterFeatureText": "We use Kangen Water made with an Enagic LeveLuk K8. It’s one of the details we take care of so you can relax and enjoy your meal.",
  "waterFeatureAlt": "Enagic LeveLuk K8 with water pouring into a glass",
  "companyTitle": "Company overview",
  "companyNameLabel": "Company",
  "companyRepLabel": "Owner",
  "companyRepValue": "ACHARYA HOM NATH",
  "companyBusinessLabel": "Business",
  "companyBusiness": "Operates Asian Dining &amp; Bar DEEPSUN.",
  "companyLocationLabel": "Restaurant address",
  "storesPageTitle": "Store & access",
  "storeCuisine": "Asian Dining &amp; Bar",
  "addressLabel": "Address",
  "addressFull": "5-17-10 Minami-Yawata, Ichikawa, Chiba",
  "hoursLabel": "Hours",
  "hoursValue": "Lunch 11:00–15:00 / Dinner 17:00–23:00",
  "closedLabel": "Closed",
  "closedValue": "No regular closing day",
  "phoneLabel": "Phone",
  "galleryTitle": "Inside DEEPSUN",
  "slideOne": "Window seating",
  "slideTwo": "Bar counter",
  "slideThree": "Dining room",
  "locationTitle": "Location",
  "mapTitle": "Map to Asian Dining & Bar DEEPSUN",
  "storeImageAlt": "The DEEPSUN entrance beneath its green storefront sign",
  "bookingTitle": "Reservations & inquiries",
  "bookingIntro": "Call us to reserve a table. Find menus and restaurant details on Tabelog.",
  "telephoneTitle": "Reserve by phone",
  "telephoneAction": "Call now",
  "deliveryTitle": "Delivery",
  "deliveryIntro": "Order from DEEPSUN through one of our delivery partners.",
  "orderAction": "Order now",
  "uberAlt": "Uber Eats",
  "demaeAlt": "Demae-can",
  "rocketAlt": "Rocket Now",
  "lineAlt": "LINE",
  "mainNavigation": "Main navigation",
  "mobileNavigation": "Mobile navigation",
  "openMenu": "Open menu",
  "closeMenu": "Close menu",
  "contactLabel": "CONTACT",
  "navigationLabel": "NAVIGATION",
  "previousPhoto": "Previous photo",
  "nextPhoto": "Next photo",
  "galleryPhotos": "Choose a gallery photo",
  "photoOne": "Photo 1",
  "photoTwo": "Photo 2",
  "photoThree": "Photo 3",
  "skipLink": "Skip to content",
  "footerBack": "BACK TO TOP ↑",
  "rightsReserved": "All rights reserved.",
  "shopPhoneLabel": "Restaurant phone",
  "interiorWideAlt": "Bottle shelves and kitchen counter at DEEPSUN",
  "interiorDetailAlt": "A leafy plant beside the wooden tables at DEEPSUN",
  "ceoCatch": "A place to share<br>a good meal.",
  "tabelogTitle": "Tabelog",
  "tabelogAlt": "Tabelog",
  "tabelogDetails": "Menus & restaurant information",
  "tabelogAction": "Open Tabelog",
  "slideFour": "Entrance seating",
  "interiorEntranceAlt": "Wooden tables and bench seating near the DEEPSUN entrance",
  "photoFour": "Photo 4"
};

const ja = {
  "companyName": "B &amp; T 合同会社",
  "companyHome": "B & T 合同会社 ホーム",
  "footerStatement": "市川・南八幡のアジアンダイニング＆バー。",
  "heroLine1": "市川・南八幡で、",
  "heroLine2": "スパイス香るひととき。",
  "heroCopy": "アジアンダイニング＆バー DEEPSUNへようこそ。<br class=\"desktop-break\">カレーやナンを囲んで、くつろぎのひとときを。",
  "heroImageAlt": "市川・南八幡のアジアンダイニング＆バー DEEPSUNの外観",
  "aboutTitle": "<span class=\"about-heading-line\">スパイスを囲む、</span><span class=\"about-heading-line\">南八幡の食卓。</span>",
  "aboutBody": "DEEPSUNは、市川・南八幡にあるアジアンダイニング＆バーです。スパイスの香りが広がるカレーやナンを、木のテーブルを囲んでお楽しみください。",
  "diningImageAlt": "DEEPSUNの木のテーブルと窓際のソファ席",
  "shopName": "DEEPSUN（ディープサン）",
  "homeQuality1Title": "インド・アジアン料理を身近に",
  "homeQuality1Text": "カレーやナンをはじめ、スパイスが香る料理をお楽しみください。",
  "homeQuality2Title": "気軽にくつろげる店内",
  "homeQuality2Text": "木のテーブルとソファ席で、ランチも夕食もゆっくりお楽しみいただけます。",
  "homeQuality3Title": "お店でも、ご自宅でも",
  "homeQuality3Text": "店内でのお食事に加え、各種デリバリーサービスからもご注文いただけます。",
  "snsTitle": "DEEPSUNとLINEでつながる",
  "snsCopy": "お店のLINEはこちらから。",
  "repRole": "<span class=\"company-name-inline\">B &amp; T 合同会社</span> / 代表取締役",
  "representativeName": "ACHARYA HOM NATH",
  "representativeAlt": "B & T 合同会社の代表取締役 ACHARYA HOM NATH",
  "value1Title": "スパイスの香り",
  "value1Text": "カレーとナンを囲んで、スパイスの豊かな香りをお楽しみください。",
  "value2Title": "気軽に立ち寄れる場所",
  "value2Text": "お一人でのランチも、ご家族やご友人との夕食も歓迎します。",
  "value3Title": "食卓を囲む時間",
  "value3Text": "木のテーブルを囲んで、食事と会話をゆっくりお楽しみください。",
  "companyRepValue": "ACHARYA HOM NATH",
  "companyBusiness": "アジアンダイニング＆バー DEEPSUNの運営",
  "shopPhoneLabel": "店舗電話番号",
  "storeCuisine": "アジアンダイニング＆バー",
  "addressFull": "千葉県市川市南八幡5-17-10",
  "hoursValue": "ランチ 11:00–15:00 / ディナー 17:00–23:00",
  "closedValue": "なし",
  "galleryTitle": "DEEPSUNの店内",
  "slideOne": "窓際の席",
  "slideTwo": "バーカウンター",
  "slideThree": "ダイニング",
  "mapTitle": "アジアンダイニング＆バー DEEPSUNの地図",
  "storeImageAlt": "緑色の看板が目印のDEEPSUNの店舗入口",
  "interiorWideAlt": "DEEPSUNのボトル棚とキッチンカウンター",
  "interiorDetailAlt": "DEEPSUNの観葉植物と木のテーブル席",
  "bookingIntro": "ご予約はお電話で承ります。メニューや店舗情報は食べログでご覧いただけます。",
  "deliveryIntro": "DEEPSUNのお料理を、各デリバリーサービスからご注文いただけます。",
  "ceoCatch": "おいしい食事を、<br>気軽に囲める場所に。",
  "tabelogTitle": "食べログ",
  "tabelogAlt": "食べログ",
  "tabelogDetails": "メニュー・店舗情報をご覧いただけます",
  "tabelogAction": "食べログを見る",
  "aboutLink": "私たちについて",
  "valuesTitle": "DEEPSUNが大切にしていること",
  "slideFour": "入口側の席",
  "interiorEntranceAlt": "DEEPSUNの入口近くにある木のテーブルとソファ席",
  "photoFour": "写真 4"
};
document.querySelectorAll("[data-i18n]").forEach(element => {
  if (ja[element.dataset.i18n] !== undefined) element.innerHTML = ja[element.dataset.i18n];
});
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
  const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
  const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
  if (ja[key] !== undefined) element.setAttribute(attribute, ja[key]);
});
const originalText = new Map();
document.querySelectorAll("[data-i18n]").forEach(element => originalText.set(element, element.innerHTML));
const originalAttributes = new Map();
document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => originalAttributes.set(element, { aria: element.getAttribute("aria-label"), alt: element.getAttribute("alt"), title: element.getAttribute("title") }));
const tabelogLink = document.querySelector("[data-english-href]");
const tabelogJapaneseHref = tabelogLink?.getAttribute("href");
const languageButton = document.getElementById("language-switch");
let language = "ja";
try { language = localStorage.getItem("deepsunLanguage") === "en" ? "en" : "ja"; } catch {}
function renderLanguage(nextLanguage){
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => { element.innerHTML = language === "ja" ? originalText.get(element) : en[element.dataset.i18n] ?? originalText.get(element); });
  document.querySelectorAll("[data-i18n-aria], [data-i18n-alt], [data-i18n-title]").forEach(element => {
    const key = element.dataset.i18nAria || element.dataset.i18nAlt || element.dataset.i18nTitle;
    const attribute = element.dataset.i18nAria ? "aria-label" : element.dataset.i18nAlt ? "alt" : "title";
    const original = originalAttributes.get(element)?.[element.dataset.i18nAria ? "aria" : element.dataset.i18nAlt ? "alt" : "title"];
    element.setAttribute(attribute, language === "ja" ? original : en[key] ?? original);
  });
  const switchLabel = languageButton.querySelector(".language-target");
  switchLabel.textContent = language === "ja" ? "English" : "日本語";
  switchLabel.lang = language === "ja" ? "en" : "ja";
  languageButton.setAttribute("aria-label", language === "ja" ? "英語に切り替える" : "Switch to Japanese");
  const descriptions = {
    "ja": {
      "home": "千葉県市川市南八幡のアジアンダイニング＆バー DEEPSUN。お店のご紹介、アクセス、ご予約、デリバリーをご案内します。",
      "about": "B & T 合同会社が運営するDEEPSUN。代表 ACHARYA HOM NATHからのご挨拶と会社概要。",
      "stores": "市川・南八幡のDEEPSUNの住所、営業時間、電話番号、店内写真とアクセスをご案内します。",
      "reservation": "DEEPSUNの電話予約と食べログの店舗情報、Uber Eats・出前館・Rocket Nowのデリバリーをご案内します。"
    },
    "en": {
      "home": "Asian Dining & Bar DEEPSUN in Minami-Yawata, Ichikawa, Chiba. Explore our restaurant, reservations, and delivery.",
      "about": "Meet ACHARYA HOM NATH, representative director of B & T 合同会社 and Asian Dining & Bar DEEPSUN.",
      "stores": "Find DEEPSUN opening hours, address, phone, dining-room photos, and directions.",
      "reservation": "Call DEEPSUN to reserve a table, find our Tabelog listing, or order with Uber Eats, Demae-can, and Rocket Now."
    }
  };
  document.querySelector('meta[name="description"]').content = descriptions[language][page];
  document.title = (language === "ja"
    ? {home:"ホーム",about:"私たちについて",stores:"店舗・アクセス",reservation:"ご予約"}
    : {home:"Home",about:"About us",stores:"Store & access",reservation:"Reservations"})[page] + " | DEEPSUN";
  if (tabelogLink) tabelogLink.setAttribute("href", language === "en" ? tabelogLink.dataset.englishHref : tabelogJapaneseHref);
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuToggle && mobileNav) menuToggle.setAttribute("aria-label", mobileNav.hidden ? (language === "ja" ? "メニューを開く" : "Open menu") : (language === "ja" ? "メニューを閉じる" : "Close menu"));
}

const header = document.getElementById("site-header");
const mobileNav = document.getElementById("mobile-nav");
const menuToggle = document.getElementById("menu-toggle");
renderLanguage(language);
languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ja" ? "en" : "ja";
  try { localStorage.setItem("deepsunLanguage", nextLanguage); } catch {}
  renderLanguage(nextLanguage);
});
function updateHeader(){ header.classList.toggle("is-scrolled", window.scrollY > 24); }
updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
menuToggle.addEventListener("click",()=>{ const opening=mobileNav.hidden; mobileNav.hidden=!opening; header.classList.toggle("menu-open",opening); menuToggle.setAttribute("aria-expanded",String(opening)); menuToggle.setAttribute("aria-label",opening?(language === "ja" ? "メニューを閉じる" : "Close menu"):(language === "ja" ? "メニューを開く" : "Open menu")); });
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.hidden=true;header.classList.remove("menu-open");menuToggle.setAttribute("aria-expanded","false");}));

const carousel = document.querySelector(".gallery-carousel");
if (carousel) {
  const track = carousel.querySelector(".gallery-track");
  const cards = [...track.querySelectorAll(".gallery-card")];
  const dots = [...carousel.querySelectorAll(".gallery-dots button")];
  const positions = ["current", "next", "behind", "previous"];
  const interval = 5000;
  let current = 0;
  let timer;
  let touchStart;

  function showCard(index) {
    current = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const offset = (i - current + cards.length) % cards.length;
      card.dataset.position = positions[offset];
      card.setAttribute("aria-hidden", String(positions[offset] === "behind"));
      if (i === current) dots[i].setAttribute("aria-current", "true");
      else dots[i].removeAttribute("aria-current");
    });
  }

  function moveTo(index) {
    showCard(index);
    clearTimeout(timer);
    timer = setTimeout(() => moveTo(current + 1), interval);
  }

  moveTo(0);

  carousel.querySelector(".gallery-prev").addEventListener("click", () => moveTo(current - 1));
  carousel.querySelector(".gallery-next").addEventListener("click", () => moveTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => moveTo(i)));
  track.addEventListener("touchstart", event => {
    const touch = event.touches.length === 1 ? event.touches[0] : null;
    touchStart = touch && { x: touch.clientX, y: touch.clientY };
  }, { passive: true });
  track.addEventListener("touchend", event => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) > Math.max(45, Math.abs(dy))) moveTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
}

const reveals=document.querySelectorAll(".reveal");
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:"0px 0px 30px 0px"});reveals.forEach(element=>observer.observe(element));}else reveals.forEach(element=>element.classList.add("is-visible"));
document.getElementById("year").textContent=new Date().getFullYear();
