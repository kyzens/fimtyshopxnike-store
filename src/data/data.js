import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Play With Electric Nike",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Running Shoes",
      rating: "4.9",
      btn: "Beli Sekarang",
      img: psale2,
      price: "5000000",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Running Shoes",
      rating: "4.5",
      btn: "Beli Sekarang",
      img: psale1,
      price: "5000000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: psale3,
      price: "5000000",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Tujuan kami adalah untuk memajukan dunia. Kami mengambil tindakan dengan membangun komunitas, melindungi planet kita, dan meningkatkan akses ke olahraga.",
  btn: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "Kilauan hidup pada Nike Sneakers Air Lancing Shoes, bola basket OG yang memberi sentuhan baru pada apa yang paling Anda ketahui: overlay yang dijahit dengan tahan lama, hasil akhir yang bersih, dan jumlah flash yang sempurna untuk membuat Anda bersinar.",
  btn: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product7,
      price: "3500000",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product2,
      price: "3500000",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product3,
      price: "3500000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product4,
      price: "3500000",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product5,
      price: "3500000",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product6,
      price: "3500000",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product1,
      price: "3500000",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product9,
      price: "3500000",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product10,
      price: "3500000",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product12,
      price: "3500000",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product11,
      price: "3500000",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Beli Sekarang",
      img: product8,
      price: "3500000",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Model khas Jordan Brands selama beberapa tahun terakhir, Jayson Tatum akan meluncurkan Air Jordan 37 musim ini sebelum mendapatkan sneaker khas pertamanya dengan Jumpman, yang dikabarkan sedang dalam pengerjaan baru-baru ini melalui Twitter-nya.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 Menit",
      by: "Jared Ebanks",
      btn: "Lihat Cerita"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Tiba di waktu yang tepat untuk Musim Gugur, pengambilan Zoom Freak 4 yang akan datang ini tampaknya menarik inspirasi dari Thanksgiving. Oranye dan coklat, dua bahan pokok liburan, digunakan di seluruh bagian atas, membalut bagian yang tidak bermandikan warna abu-abu.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "41 Menit",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
      by: "Michael Le",
      btn: "Lihat Cerita"
    },
    {
      title: "Nike Air Max Plus",
      text: "Nike Air Max Plus telah menikmati pengungkapan beberapa jalur warna beberapa bulan terakhir ini. Dan saat kami secara resmi memulai musim Musim Gugur, satu set tambahan telah ditambahkan ke kalender, termasuk warna abu-abu dan oranye yang baru terungkap ini.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
      time: "2 Jam",
      url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
      like: "5/5",
      by: "Michael Le",
      btn: "Lihat Cerita"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG seri populer AJ1s dengan pemblokiran warna populer dengan rasa Yellow Toe asli. Jalur warna diungkapkan kembali PE oleh musisi Zach Myers, hampir empat tahun kemudian, para fanatik Jordan akhirnya akan mendapatkan bidikan mereka untuk rilis GR.",
      img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
      time: "7 Bulan",
      url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
      like: "5/5",
      by: "Sneaker News",
      btn: "Lihat Cerita"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "Coloryway Bred dari Zoom GT Cut 2 akan menjadi yang pertama dirilis Jumat ini, Untuk Anggota Nike Nation World Wide sementara colorway Sabrina Ionescus ditetapkan untuk tanggal rilis 13 Oktober. Sementara itu, nikmati gambar resmi dari kedua jalur warna di bawah ini.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
      time: "1 Bulan",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Lihat Cerita"
    },
    {
      title: "Puma Announces Breanna",
      text: "Untuk pertama kalinya dalam lebih dari satu dekade, siluet bola basket khas dibuat untuk salah satu bintang WNBA terbaik dan tercerdas, Peraih Medali Emas Olimpiade dan superstar Seattle Storm Breanna Stewart. Puma Stewie 1 Quiet Fire akan tersedia Jumat ini.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
      time: "25 Hari",
      url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Lihat Cerita"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "Mulai dari lace toggles hingga makeover yang terinspirasi gaya kota, Nike Air Force 1 telah menghadirkan sejumlah modifikasi unik. Namun di sini, merek tersebut menurunkan beberapa tingkat, memilih jalur warna sederhana yang terutama dipimpin oleh warna hitam dan Laser Oranye.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
      time: "6 Hari",
      like: "4/5",
      by: "Micael Le",
      btn: "Lihat Cerita"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "Dunia Sanrio sangat luas dan penuh dengan banyak karakter ikonik. Namun, hanya sedikit anggota keluarga yang menyaingi pengaruh besar Hello Kitty, yang menjadi maskot untuk segala hal, mulai dari pernak-pernik Pringles hingga kolaborasi sepatu kets.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
      time: "5 Hari",
      like: "4/5",
      by: "Micael Le",
      btn: "Lihat Cerita"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "Estetika malam hari yang terlihat di sini diterapkan pada panel kulit hitam berjatuhan dari konstruksi lidah bagian atas dan jala berlubang sementara Royal trim dan Swooshes kaki depan memberikan intrik tambahan pada palet yang digelapkan.",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
      time: "5 Hari",
      like: "4/5",
      by: "Micael Le",
      btn: "Lihat Cerita"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About FimtyShop"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "Berita"},
      {link: "Karir"},
      {link: "Investor"},
    ],
    [
      {link: "Status Pesanan"},
      {link: "Opsi Pembayaran"},
      {link: "Saldo Kartu Hadiah"},
      {link: "Hubungi Kami"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Kartu Hadiah"},
      {link: "Promosi"},
      {link: "Temukan Toko"},
      {link: "Signup"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };