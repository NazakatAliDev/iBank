import { useState } from "react";
import Ellipse_57 from "../../assets/Ellipse_57.png";
import Ellipse_58 from "../../assets/Ellipse_58.png";
import Ellipse_59 from "../../assets/Ellipse_59.png";
import Ellipse_60 from "../../assets/Ellipse_60.png";
import Ellipse_64 from "../../assets/Ellipse_64.svg";
import Edit from "../../assets/Edit.svg";
import User from "../../assets/User.svg";
import Painter from "../../assets/Painter.svg";
import side from "../../assets/side.svg";
import side2 from "../../assets/side2.svg";
import img from "../../assets/img.svg";
import logincar_3 from "../../assets/logincar_3.svg";
import Vector_2 from "../../assets/Vector_2.svg";
import Vector_5 from "../../assets/Vector_5.svg";
import Ellipse_63 from "../../assets/Ellipse_63.svg";
import Login_1 from "../../assets/Login_1.svg";
import Vector_4 from "../../assets/Vector_4.svg";
import transfer_2 from "../../assets/transfer_2.svg";
import Users_1 from "../../assets/Users_1.svg";
import s_1 from "../../assets/s_1.svg";
import Account_2 from "../../assets/Account_2.svg";
import Account from "../../assets/Account.svg";
import History_transfer from "../../assets/History_transfer.svg";
import Daftar from "../../assets/Daftar.svg";
import Admin from "../../assets/Admin.svg";
import Reset_Password from "../../assets/Reset_Password.svg";
import Forgot_Password from "../../assets/Forgot_Password.svg";
import w_1 from "../../assets/w_1.svg";
import transfer_3 from "../../assets/transfer_3.svg";
import Inlove_2 from "../../assets/Inlove_2.svg";
import twitter from "../../assets/twitter.png";
import ins from "../../assets/ins.png";
import link from "../../assets/link.png";

const Index: React.FC = () => {
  const [darkmode, setDarkMode] = useState<boolean>(false);
  function setMode(): void {
    setDarkMode(!darkmode);
  }

  return (
    <>
      <div className={`h-auto w-full overflow-hidden mx-auto px-4 md:px-6 lg:px-8 ${darkmode ? "bg-black" : ""}`}>
        <button className={`${darkmode ? "dark:bg-white dark:text-black" : ""} bg-[black] text-white px-[25px] py-[5px] rounded-[10px] float-end my-[5px]`} onClickCapture={setMode}>
          {darkmode ? "Light" : "Dark"}mode
        </button>
        <div className="text-center mt-6">
          <a href="/login">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
          </a>
        </div>
        <header>
          <div className={`header_container h-auto w-full mx-auto overflow-hidden ${darkmode ? "dark:text-white" : ""}`}>
            <h1 className={`text-center text-[28px] font-bold my-[25px]`}>Ulasan proyek</h1>
            <div className="hero_section md:flex justify-center">
              <div className="basis-[58%]">
                <div className="flex items-center overflow-hidden">
                  <img src={Ellipse_57} alt="" className="z-10" />
                  <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Deskrips</h3>
                </div>
                <div className="h-auto w-[80%] ml-[32px] mt-[20px]">
                  <p>
                    IBankCare adalah platform di mana anda dapat mengelola keuangan anda. Bagaimana jika anda mengelola beberapa kartu kredit yang anda miliki ke dalam satu akun yang sama, tentu <br /> akan lebih mudah bukan. anda juga bisa melihat statistik pengeluaran keuangan anda selama harian, mingguan atau bulanan. bahkan anda juga bisa melakukan transaksi lebih dari satu user secara bersamaan, hal ini tentunya akan mempersingkat waktu anda dalam melakukan transaksi dengan user-user lainnya.
                  </p>
                </div>
              </div>
              <div className="basis-[40%] md:mt-[0px] mt-[30px]">
                <div className="flex items-center">
                  <img src={Ellipse_58} alt="" className="z-10" />
                  <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Alur Kerja</h3>
                </div>
                <div className="icon-box">
                  <div className="grid grid-cols-2 mt-[20px] ml-[25px]">
                    <div>
                      <div className="bg-[#f4ecd4] h-[46px] w-[46px] rounded-[50%]">
                        <center>
                          <img src={Edit} className="pt-[18px]" />
                        </center>
                      </div>
                      <p>Riset</p>
                    </div>

                    <div>
                      <div className="bg-[#e5f4fb] h-[46px] w-[46px] rounded-[50%]">
                        <center>
                          <img src={User} className="pt-[18px]" />
                        </center>
                      </div>
                      <p>Persona Pengguna</p>
                    </div>

                    <div className="mt-[15px]">
                      <div className="bg-[#f7eeff] h-[46px] w-[46px] rounded-[50%]">
                        <center>
                          <img src={Painter} className="pt-[18px]" />
                        </center>
                      </div>
                      <p>Desain Ui/UX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className={`${darkmode ? "dark:text-white" : ""} py-8 px-4 sm:px-6 lg:px-8`}>
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:basis-3/4 text-center md:text-left md:pr-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold lg:text-center">
                Mengapa Membuat
                <br />
                Studi Kasus seperti ini
              </h1>
            </div>

            <div className="md:basis-1/4 mt-6 md:mt-0">
              <img src={side} alt="" className="w-full max-w-xs md:max-w-none lg:relative lg:top-[55px]" />
            </div>
          </div>
        </section>

        <section className={`overflow-hidden ${darkmode ? "dark:text-white" : ""}`}>
          <div className="w-[1050px] mx-auto">
            <div className="flex items-center">
              <img src={Ellipse_59} alt="" className="z-10" />
              <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Deskrips</h3>
            </div>
            <p className="md:w-[85%] md:mx-auto p-[10px]">
              Utamanya saya memulai studi kasus ini berdasarkan pengalaman saya dalam melakukan transaksi, bukankah lebih mudah jika memang kita bisa mengelola beberapa kartu rekening kita kedalam satu aplikasi atau platform yang sama, hanya sebatas angan-angan saja, kurang tau juga realisasi atau hukum-hukum yang menaunginya bagaimana.
              <br />
              <br /> Selain itu juga berbicara mengenai pengiriman uang kepada beberapa user, Masih menjadi pertanyaan dibenak saya, kenapa sistem perbankan kita tidak menerapkan sistem pemberian nama unik tiap-tiap user, agar nantinya user tidak harus memasukkan nomor rekening yang begitu panjang.
              <br /> <br />
              Akan tetapi mungkin dibalik itu semua, pihak bank mungkin memiliki alasan tersendiri, dengan tidak memberi nama unik tiap-tiap user, ya mungkin nama unik atau identitas unik itu ya nomor rekeningnya itu sendiri. Selain itu saat ini dalam proses transfer uang kita tidak bisa langsung serentak secara bersamaan mengtransfer uang tersebut ke beberapa user lainnya. Menurut saya dengan adanya fitur mengtransfer ke lebih dari satu user bisa sangat mempersingkat waktu, dengan catatan nominal yang disebut haruslah sama jumlahnya.
            </p>
          </div>
        </section>

        <section>
          <div className={`h-auto w-full mx-auto md:flex justify-center mt-[70px] ${darkmode ? "dark:text-white" : ""}`}>
            <div className="basis-[58%] ">
              <div className="flex items-center">
                <img src={Ellipse_60} alt="" className="z-10" />
                <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Masalah</h3>
              </div>
              <ul className="list-disc ml-[45px] mt-[25px] text-[16px] leading-8">
                <li>Kurang efisien dalam mengirim uang ke dua user atau lebih</li>
                <li>Pengiriman dana masih menggunakan sistem nomor rekening</li>
                <li>Informasi statistik penggunaan saldo rekening</li>
                <li>
                  Informasi penggunaan saldo rekening baik itu pengiriman transfer uang <br /> maupun pembayaran debit
                </li>
              </ul>
            </div>
            <div className="basis-[40%]">
              <img src={side2} className="mx-auto mt-[20px] h-[235px]" />
            </div>
          </div>
        </section>

        <section className={`${darkmode ? "dark:text-white" : ""}`}>
          <div className="h-auto w-full pl-[8px] mt-[70px]">
            <div className="flex items-center">
              <img src={Ellipse_59} alt="" className="z-10" />
              <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Solusi</h3>
            </div>
            <ul className="list-disc ml-[45px] mt-[25px] text-[16px] leading-8">
              <li>
                Membuat tampilan antarmuka bagaimana user mengirim <br /> uang atau balance ke user lainnya
              </li>
              <li>
                membuat tampilan dashboard bagaimana user mengelola <br /> akun miliknya ketika memiliki lebih dari satu nomor rekening
              </li>
              <li>
                membuat tampilan antarmuka ketika user ingin mengirim <br /> uang atau balance ke lebih dari satu user
              </li>
            </ul>
          </div>
        </section>

        <section className={`${darkmode ? "dark:text-white" : ""}`}>
          <div className="h-auto w-full pl-[8px] mt-[70px]">
            <div className="flex items-center">
              <img src={Ellipse_58} alt="" className="z-10" />
              <h3 className="text-[18px] font-bold z-20 relative right-[12px]">Model Pendapatan / Keuntungan</h3>
            </div>
            <ul className="list-disc ml-[45px] mt-[25px] leading-8 text-[16px]">
              <li>Biaya admin yang dikirim ketika mengirim berbeda bank</li>
              <li>
                Makin banyak orang yang mengintegrasikan rekening mereka kedalam platform <br /> ini akan
              </li>
              <p>
                meningkatkan kemungkinan pemakaian platform ini untuk tujuan <br /> pengiriman atau transaksi lainyya{" "}
              </p>
            </ul>
          </div>
        </section>

        <section className="overflow-hidden">
          <h1 className={`${darkmode ? "dark:text-white" : ""} font-bold text-3xl text-center my-8`}>Persona Pengguna</h1>
          <p className={`text-center text-base mb-6 ${darkmode ? "dark:text-white" : ""}`}>Untuk menyelesaikan studi kasus, saya mencoba untuk membuat user persona atau persona yang dirasakan oleh pengguna berdasarkan karakteristik tiap-tiap pengguna tersebut.</p>
          <div className="flex flex-col lg:flex-row w-full mt-20 h-auto">
            <div className="md:h-[800px] h-[700px] w-full lg:w-[310px] mx-auto lg:mx-4 bg-[#f9fbfd] rounded-2xl grid grid-flow-row place-content-start text-center pt-12">
              <img src={img} alt="Tanjirou Kamadou" className="mx-auto" />
              <h3 className="mt-4 font-bold text-xl">Tanjirou Kamadou</h3>
              <div className="rounded-2xl h-40 w-full bg-[#e3f5ff] mt-8 mx-auto text-left px-3 py-2">
                <p className="text-sm mt-[30px]">
                  Age: 35 <br />
                  Status: Single <br />
                  Job: Wiraswasta <br />
                  Location: Ohayo
                </p>
              </div>
              <p className="mt-10 text-base text-left px-3">Tanjirou Kamadou adalah seorang yang memiliki bisnis di bidang FnB. Setiap akhir bulan ia melakukan pembagian gaji ke karyawannya secara manual, dengan cara mengirim uang gajian tersebut ke masing-masing rekening dari para pegawainya tersebut. Ia menginginkan sebuah solusi agar ia mampu melakukan proses tersebut secara efisien.</p>
            </div>

            <div className="flex flex-wrap flex-grow justify-center gap-6 mx-auto h-auto w-full lg:w-4/5">
              <div className="h-[290px] w-full lg:w-[400px] bg-[#f7fcfe] rounded-2xl py-3 mb-6">
                <h3 className="pt-2 ml-5 font-bold text-lg ">Tujuan</h3>
                <ul className="list-disc mx-5 mt-4 pl-5 text-base leading-6">
                  <li>Memudahkan pelaku bisnis dalam melakukan transfer ke banyak user.</li>
                  <li>Mempermudah pengelolaan rekening dalam satu platform yang sama.</li>
                  <li>Menyediakan informasi statistik penggunaan saldo atau dana dalam rekening.</li>
                  <li>Pengiriman aman, karena disertai dengan validasi user yang dituju.</li>
                </ul>
              </div>

              <div className="h-[280px] w-full lg:w-[400px] bg-[#fffafa] rounded-2xl py-3 mb-6">
                <h3 className="pt-2 ml-5 font-bold text-lg">Frustasi</h3>
                <ul className="list-disc mx-5 mt-4 pl-5 text-base leading-6">
                  <li>Terlalu lama jika harus mengirim satu persatu ke tiap user yang ingin ditransfer.</li>
                  <li>Pengiriman ke user lain masih memakai nomor rekening, akan lebih mudah jika memakai username.</li>
                  <li>Tidak adanya fitur statistik.</li>
                </ul>
              </div>

              <div className="h-[200px] w-full lg:w-[400px] bg-[#f7fff7] rounded-2xl py-3 mb-6">
                <h3 className="pt-2 ml-5 font-bold text-lg">Pengaruh</h3>
                <ul className="list-disc mx-5 mt-4 pl-5 text-base leading-6">
                  <li>Rekanan bisnis</li>
                  <li>Social Media</li>
                  <li>Iklan online</li>
                </ul>
              </div>

              <div className="h-[230px] w-full lg:w-[400px] bg-[#fffdf7] rounded-2xl py-3 mb-6">
                <h3 className="pt-2 ml-5 font-bold text-lg">Kepribadian</h3>
                <ul className="list-disc mx-5 mt-4 pl-5 text-base leading-6">
                  <li>Ramah</li>
                  <li>Pemikir</li>
                  <li>Kritis</li>
                  <li>Tidak Sabaran</li>
                </ul>
              </div>

              <div className="h-[200px] w-full lg:w-[400px] bg-[#fdf9fd] rounded-2xl py-3 mb-6 ">
                <h3 className="pt-2 ml-5 font-bold text-lg">Teknologi / Platform</h3>
                <ul className="list-disc mx-5 mt-4 pl-5 text-base leading-6">
                  <li>Website</li>
                  <li>Aplikasi Smartphone</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`overflow-hidden ${darkmode ? "dark:text-white" : ""}`}>
          <h1 className="font-bold text-[36px] text-center my-[30px]">Desain UI/UX</h1>
          <p className="text-center text-[16px]">
            Untuk menyelesaikan studi kasus, saya mencoba untuk membuat user persona atau persona yang dirasaka <br />
            oleh pengguna berdasarkan karakteristik tiap-tiap pengguna tersebut{" "}
          </p>

          <div className="h-auto w-full mx-auto ">
            <img src={logincar_3} alt="" className="mx-auto h-[150px] md:h-[200px] lg:h-[250px] relative top-[8px] md:top-[12px]" />
            <img src={Vector_2} className="mx-auto relative w-[200px] md:w-[200px] lg:w-[250px] right-[50px] md:right-[100px] lg:right-[150px] hidden md:block" />
          </div>

          <div className="h-auto w-full md:flex ">
            <div className="mx-auto md:h-auto md:w-[48%] w-full flex justify-center items-center relative">
              <img src={Ellipse_63} className="mx-auto lg:h-[450px] z-10 h-[350px]" />
              <img src={Login_1} className="z-20 lg:h-[300px] h-[250px] absolute bottom-10 lg:bottom-20" />
            </div>
            <div className="mx-auto h-auto md:w-[48%] pt-[60px] px-[20px] w-full ">
              <h3 className="pt-[10px]  font-bold text-[20px]">Halaman Login</h3>
              <p className="text-[19px]">Halaman login yang informatif</p> <br />
              <p className="leading-8 mt-[30px]">
                Mengkombinasikan halaman login dengan menambahkan <br />
                elemen-elemen yang bisa menambah informasi untuk pengguna baru
              </p>
            </div>
          </div>

          <div className="relative w-full h-auto mx-auto  overflow-hidden flex justify-center items-center">
            <img src={Vector_4} alt="" className="w-[800px] h-auto object-cover mr-[120px] hidden md:block" />
            <img src={transfer_2} alt="" className="absolute inset-0 w-[300px] mx-auto  object-cover m-auto ml-[250px]" />
          </div>

          <div className="h-auto w-full flex flex-col md:flex-row">
            <div className="order-2 md:order-1 mx-auto h-auto md:w-[48%] pt-[60px] px-[20px] w-full">
              <h3 className="pt-[10px] font-bold text-[20px]">Halaman Transfer</h3>
              <p className="text-[19px]">Halaman Transfer yang mudah dipahami</p> <br />
              <p className="leading-8 mt-[30px]">
                Pengguna dapat dengan mudah mengirim ke beberapa pengguna
                <br />
                lainnya.
              </p>
            </div>
            <div className="order-1 md:mt-[0px] mt-[10px] md:order-2 mx-auto md:h-auto md:w-[48%] w-full flex justify-center items-center relative">
              <img src={Ellipse_64} className="mx-auto lg:h-[450px] z-10 h-[350px]" alt="Ellipse" />
              <img src={Users_1} className="z-20 lg:h-[360px] h-[250px] absolute" alt="Users" />
            </div>
          </div>
          <div className="relative w-full h-auto mx-auto  flex items-center justify-center overflow-hidden">
            <img src={Vector_5} alt="" className="w-full max-w-[750px] h-auto ml-[10px] hidden md:block" />
            <img src={s_1} alt="" className="absolute w-[250px] h-auto mx-auto" />
          </div>

          <div className="h-auto w-full md:flex ">
            <div className="mx-auto md:h-auto md:w-[48%] w-full flex justify-center items-center relative">
              <img src={Ellipse_63} className="mx-auto lg:h-[450px] z-10 h-[350px]" />
              <img src={Account_2} className="z-20 lg:h-[370px] h-[250px] absolute" />
            </div>
            <div className="mx-auto h-auto md:w-[48%] pt-[60px] px-[20px] w-full">
              <h3 className="pt-[10px]  font-bold text-[20px]">Halaman Profil</h3>
              <p className="text-[19px]">Halaman Profil untuk manajemen kartu</p> <br />
              <p className="leading-8 mt-[30px]">
                Memberikan opsi bagi para pengguna yang ingin mengintegrasikan kartu kredit miliknya, sehingga memudahkan pengguna dalam
                <br />
                mengelola keuangan mereka.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className={`font-bold text-[36px] text-center my-[80px] ${darkmode ? "dark:text-white" : ""}`}>Halaman Lainnya</h1>
          <div className="h-auto w-full flex flex-wrap justify-center">
            <img src={Daftar} alt="" className="w-[50%]" />
            <img src={History_transfer} alt="" className="w-[50%]" />
            <img src={Account} alt="" className="w-[50%]" />
            <img src={Admin} alt="" className="w-[50%]" />
            <img src={Reset_Password} alt="" className="w-[50%]" />
            <img src={Forgot_Password} alt="" className="w-[50%]" />
            <img src={transfer_3} alt="" className="w-[50%]" />
            <img src={w_1} alt="" className="w-[50%]" />
          </div>
        </section>

        <section className={`${darkmode ? "dark:text-white" : ""}`}>
          <img src={Inlove_2} alt="" className="mx-auto md:h-[160px] h-[100px]" />
          <h1 className="font-bold md:text-[36px] text-center my-[30px] text-[20px]">Terima Kasih Atas Perhatiannya</h1>
          <p className="text-center md:text-[16px] text-[14px]">
            Tak usah sungkan untuk memberi kritik dan saran pada kolom komentar, sangat senang
            <br />
            ketika mendapati desain yang saya buat mendapat kritik dan saran.
          </p>
        </section>
      </div>

      <footer>
        <div className="bg-[#FFEABE] py-8 px-4 sm:px-6 md:px-8 mt-[25px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Tutorify</h3>
              <p className="leading-6 sm:leading-8 mt-2">
                Learn more than just
                <br />a language
              </p>
              <div className="flex gap-3 mt-4">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
                <img src={ins} alt="Instagram" className="w-6 h-6" />
                <img src={link} alt="LinkedIn" className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Discover</h3>
              <ul className="space-y-2 mt-2">
                <li className="leading-6 sm:leading-8">Pricing</li>
                <li className="leading-6 sm:leading-8">Refund Policy</li>
                <li className="leading-6 sm:leading-8">FAQ’s</li>
                <li className="leading-6 sm:leading-8">Testimonials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Company</h3>
              <ul className="space-y-2 mt-2">
                <li className="leading-6 sm:leading-8">About</li>
                <li className="leading-6 sm:leading-8">How it Works</li>
                <li className="leading-6 sm:leading-8">Term</li>
                <li className="leading-6 sm:leading-8">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Contact</h3>
              <p className="leading-6 sm:leading-8 mt-2">Support Email</p>
              <p className="leading-6 sm:leading-8">fitoutfit@support.com</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFEABE] py-3">
          <p className="text-center text-sm sm:text-base font-bold">Copyright © by fitoutfit. Created with love.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
