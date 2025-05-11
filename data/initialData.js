const initialMaterials = [
    {
        subjectId: 1,
        title: 'Pengenalan Matematika Dasar',
        content: `# Matematika Dasar

## Bilangan
- Bilangan Bulat
- Bilangan Pecahan
- Bilangan Desimal

## Operasi Dasar
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian

## Contoh Soal
1. 5 + 3 = ?
2. 10 - 4 = ?
3. 6 × 2 = ?
4. 8 ÷ 2 = ?`
    },
    {
        subjectId: 2,
        title: 'Pengenalan IPA',
        content: `# Ilmu Pengetahuan Alam

## Materi IPA
1. Makhluk Hidup
2. Benda Mati
3. Energi
4. Gaya

## Contoh Penerapan
- Fotosintesis pada tumbuhan
- Rantai makanan
- Siklus air`
    },
    {
        subjectId: 3,
        title: 'Pengenalan IPS',
        content: `# Ilmu Pengetahuan Sosial

## Materi IPS
1. Sejarah
2. Geografi
3. Ekonomi
4. Sosiologi

## Contoh Penerapan
- Peradaban kuno
- Peta dan globe
- Sistem ekonomi
- Masyarakat dan budaya`
    },
    {
        subjectId: 4,
        title: 'Bahasa Indonesia',
        content: `# Bahasa Indonesia

## Materi
1. Tata Bahasa
2. Ejaan
3. Sastra
4. Menulis

## Contoh Penerapan
- Kalimat efektif
- Puisi dan prosa
- Menulis karangan
- Berbicara di depan umum`
    },
    {
        subjectId: 5,
        title: 'Bahasa Inggris',
        content: `# English Language

## Topics
1. Grammar
2. Vocabulary
3. Speaking
4. Writing

## Examples
- Present tense
- Daily conversation
- Writing essays
- Reading comprehension`
    },
    {
        subjectId: 6,
        title: 'Agama Islam',
        content: `# Pendidikan Agama Islam

## Materi
1. Aqidah
2. Ibadah
3. Akhlak
4. Sejarah Islam

## Contoh Penerapan
- Rukun Iman
- Rukun Islam
- Akhlak terpuji
- Sejarah Nabi Muhammad SAW`
    },
    {
        subjectId: 3,
        title: 'Jelajah Nusantara',
        content: `# Bab 1: Jelajah Nusantara

Indonesia adalah negara yang kaya akan keindahan alam dan budaya. Setiap daerah di Indonesia memiliki ciri khasnya sendiri yang mempesona. Salah satu kekayaan alam yang ada di Indonesia adalah gunung berapi, pantai yang indah, dan hutan tropis yang masih asri. Setiap tempat di Indonesia menawarkan pengalaman yang unik dan menarik.

## Gunung Bromo – Keindahan Alam yang Mempesona
Gunung Bromo adalah salah satu gunung berapi yang terkenal di Indonesia, terletak di Jawa Timur. Keindahan alamnya yang luar biasa menjadi daya tarik utama bagi para wisatawan. Setiap pagi, ribuan wisatawan datang untuk menyaksikan matahari terbit yang begitu indah di atas kawah Bromo. Pemandangan yang menakjubkan ini disertai dengan kabut yang menutupi lautan pasir, menciptakan suasana yang misterius dan menenangkan.

## Pantai Kuta – Pesona Pantai yang Memukau
Pantai Kuta terletak di Bali dan menjadi salah satu pantai yang paling terkenal di Indonesia. Pantai ini memiliki pasir putih yang lembut dan air laut yang jernih, sangat cocok untuk berjemur atau berenang. Ombak di Pantai Kuta terkenal besar dan kuat, menjadikannya tempat yang ideal bagi para peselancar dari berbagai belahan dunia.

## Taman Nasional Komodo – Rumah bagi Komodo dan Keanekaragaman Hayati
Taman Nasional Komodo terletak di Nusa Tenggara Timur, dan terkenal sebagai habitat asli dari komodo, hewan purba yang hanya dapat ditemukan di Indonesia. Taman nasional ini memiliki keanekaragaman hayati yang sangat kaya, mulai dari flora hingga fauna.`
    },
    {
        subjectId: 5,
        title: 'Greeting and Parting',
        content: `# Greeting and Parting

## Greeting (Salam Pertemuan)
Greeting adalah ungkapan salam yang biasa digunakan untuk menyapa seseorang yang kita kenal. Ungkapan greeting juga digunakan untuk memulai percakapan dengan seseorang.

### Contoh Greetings dan Responnya:
| Greetings | Response |
|-----------|----------|
| Hello/hai | Hello/hai |
| How are you? | I'm fine, thank you |
| Nice to meet you | Nice to meet you too |
| Good morning | Morning |
| How's your life? | I'm good |

## Parting (Salam Perpisahan)
Parting merupakan sebuah ungkapan salam yang biasa digunakan saat hendak berpisah dari seseorang.

### Contoh Parting:
- Good bye
- Good night
- See you
- Bye, nice to see you
- See you next time

## Contoh Dialog
Jeno: "Hi, Mark. How are you?"
Mark: "Hi, Jen. I'm fine"
Jeno: "Where are you going?" 
Mark: "I wanna go to traditional market. My mom asked me to buy fresh meat" 
Jeno: "May I come with you? I'm not too busy now" 
Mark: "Sure, let's go" 
One hour later… 
Mark: "Jen, thanks for accompany me today" 
Jeno: "It's ok. My pleasure" 
Mark: "See you later, Jen" 
Jeno: "See you"

## Latihan Dialog
Faiz and Rizqi is in the cinema to watch a movie. Suddenly they meets Aji, Friend of Faiz outside of the cinema.

Faiz : Hello Aji, Good Afternoon.
Aji : Good Afternoon, Faiz (1)..........................?
Faiz: I'm fine thank you and how about you? 
Aji : (2).................................
Faiz : Oh, this is my friend, Rizki.
Aji : Hello Rizki, my name is Aji. (3)...........................
Rizki : Hi, my name is Rizki. Nice to meet you too.
Faiz : Well Aji, I think we have to go now, the movie is started to play.
Aji : Oh okay, (4)...........................
Faiz : See you.`
    },
    {
        subjectId: 6,
        title: 'Menghadirkan Salat dan Zikir dalam Kehidupan',
        content: `# Bab 1 : Menghadirkan Salat dan Zikir dalam Kehidupan

Islam ibaratnya sebuah bangunan. Syahadat sebagai pondasinya, salat sebagai tiang-tiangnya, dan dakwah sebagai atap yang melindunginya. Jika pondasi bangunan itu kokoh, atapnya pun bagus, tapi tiang-tiangnya roboh atau tidak ada, bagaimana kira-kira bangunan itu? Begitu pula dengan bangunan keberagamaan kita. Al-Baihaqi meriwayatkan sebuah hadis, "Salat itu adalah tiang agama (Islam), maka barang siapa mendirikannya maka sungguh ia telah mendirikan agama (Islam) itu dan barang siapa yang meninggalkannya maka sungguh ia telah merobohkan agama (Islam) itu."

Zikir dimaknai dengan menyebut atau mengingat Allah Swt. Dengan zikir, seseorang dapat mengaitkan diri atau mengkomunikasikan keadaannya kepada Allah Swt. Dengan zikir, ia dapat menitipkan diri dan mengarahkan aktivitasnya kepada-Nya. Oleh karena itu, zikir dapat menenangkan hati.

## Makna Salat dan Zikir

### Makna Salat
Secara bahasa, salat diartikan sebagai doa atau doa meminta kebaikan. Menurut istilah, salat dipahami sebagai semua perkataan dan perbuatan yang dimulai dengan takbir (takbiratul ihram) dan diakhiri dengan salam. 

Jika kita selalu mengingat Allah Swt. dengan selalu menjaga salat maka kita akan mendapatkan ketenteraman hati. Salat mendorong kita untuk untuk berfikir bersih dan selalu berada di jalan yang benar. Kita akan terjaga dari perilaku keji dan munkar, apabila hati selalu ingat kepada-Nya.

Rasulullah saw bersabda, "Orang yang memelihara salat akan mendapatkan cahaya, petunjuk, dan keselamatan pada hari kiamat. Begitu pula, orang yang tidak memeliharanya, ia tidak akan memperoleh hal tersebut. la akan bersama Qarun, Fir'aun, Hamman, dan Ubay bin Khalaf di hari kiamat. (H.R. Ahmad dan al-Tabrani dari 'Abdullah bin 'Umar)

### Makna Zikir
Arti zikir menurut bahasa adalah ingat, sedangkan menurut istilah, zikir diartikan dengan mengingat Allah Swt. sebagai upaya untuk mendekatkan diri pada-Nya. Kita diperintahkan untuk selalu berzikir kepada-Nya dengan mengagungkan kekuasaan dan kebesaran-Nya agar terhindar dari kesombongan. Zikir dapat dilaksanakan dengan mudah tanpa persiapan dan waktu yang khusus. Seorang muslim bisa memanfaatkan waktu yang luang untuk berzikir.

Adapun cara berzikir sebagai berikut:

1) Zikir dengan hati yaitu dengan cara bertafakur dan merenungkan ciptaan Allah Swt. sehingga timbul dalam pikiran bahwa Allah Swt. adalah Zat Yang Maha Kuasa.

2) Zikir dengan ucapan, yaitu pengucapan lafal-lafal yang di dalamnya terdapat keagunhan nama-Nya. Contohnya adalah tahmid, tasbih, tahlil, takbir, membaca Al-Qur'an, dan salawat.

3) Menaati perintah-Nya dan menjauhi larangan-Nya merupakan zikir dengan perbuatan.`
    },
    {
        subjectId: 3,
        title: 'Keberagaman Lingkungan Sekitar',
        content: `# Bab 1 : Keberagaman Lingkungan Sekitar

Manusia tidak bisa hidup sendiri sehingga perlu berinteraksi dengan sekitarnya. Kita sebagai makhluk hidup harus sama-sama menjaga keseimbangan di lingkungan sekitar. Alam yang terjaga kelestariannya dan aturan di masyarakat yang ditaati dapat menciptakan kehidupan yang harmonis. 

## Berkenalan dengan Alam

Setelah bumi terbentuk dan dapat dihuni manusia, berbagai perubahan pada bumi masih terjadi. Kini, bumi sedang mengalami pemanasan global (global warming). Pemanasan global terjadi akibat efek rumah kaca, polusi udara, polusi air, dan polusi tanah. Penyebab rusaknya bumi karena perilaku manusia itu sendiri. Alam menyediakan berbagai hal yang dibutuhkan oleh manusia, di antaranya barang-barang tambang seperti logam sebagai bahan dasar untuk membuat berbagai benda, contohnya kendaraan bermotor. Hal tersebut merupakan dampak positif dari hubungan antara manusia dan alam. Namun, interaksi manusia dan lingkungan juga dapat menimbulkan pencemaran lingkungan sebagai dampak negatif. Sebagai contoh, kegiatan ekonomi manusia telah menghasilkan emisi gas pencemaran di berbagai negara.

## Pencemaran Udara

Pencemaran udara dapat terjadi karena emisi gas yang dihasilkan selama proses pembakaran. Pembakaran tersebut menghasilkan gas karbon dioksida (CO2). Kandungan CO2 yang berlebih di atmosfer dapat menyebabkan efek rumah kaca. Akumulasi emisi gas hasil pembakaran yang ada di atmosfer tersebut mempunyai karakteristik dapat ditembus panas matahari, tetapi sulit untuk memantulkan kembali panas matahari. Dampaknya, panas matahari terperangkap di udara sehingga suhu permukaan bumi menjadi naik.

## Pencemaran Air

Pencemaran air disebabkan oleh konsentrasi zat berbahaya di dalam air yang berlangsung lama dan menimbulkan dampak tertentu. Penggunaan bahan peledak dalam penangkapan ikan dan pembuangan limbah industri ke sungai/laut merupakan contoh pencemaran air.

## Pencemaran Tanah
Pencemaran tanah terjadi karena tanah kehilangan komponen penting sebagai daya dukungnya. Penggunaan pestisida berlebihan dan pembuangan limbah industri ke tanah merupakan contoh pencemaran tanah. Tidak semua penggunaan pestisida mengenai hama sasaran. Kurang lebih hanya 20 persen pestisida yang mengenai hama, sedangkan 80 persen lainnya jatuh ke tanah. Dampaknya tanah menjadi tidak produktif untuk aktivitas pertanian. Hal ini dapat memengaruhi ketahanan pangan. Penggunaan bahan kimia berlebihan pada pertanian dapat berdampak pada kesehatan.`
    },
    {
        subjectId: 2,
        title: 'Pengenalan Sel dan Mikroskop',
        content: `# Bab 1 : Pengenalan Sel dan Mikroskop

## Apa itu sel?
Ketika kalian melihat bunga yang indah di taman, terlintaskah di kepala, mengapa bunga-bunga tersebut memiliki warna-warna yang indah? Kira-kira apa yang menyusunnya? Sekarang mari bandingkan dengan bangunan kelas. Apa yang menyusun bangunan ini? Material apa yang membentuknya? 

Ruangan kelas tersusun dari batu bata, semen, pasir, dan bahan material lainnya. Nah, bunga-bunga yang berada di taman tersebut pun tersusun dari bagian-bagian kecil yang disebut dengan sel. Bukan hanya bunga saja, tetapi seluruh makhluk hidup tersusun dari sel. Dari sini dapat ditarik kesimpulan bahwa sel merupakan unit atau bagian terkecil yang menyusun tubuh makhluk hidup.

Sel begitu kecil dan tidak terlihat oleh mata kita, tetapi hal tersebut tidak menghalangi para ilmuwan untuk meneliti sel. Mereka berusaha menciptakan suatu alat untuk mengamati sel, kemudian melalui proses serta penelitian yang panjang akhirnya terciptalah suatu teori tentang sel. Teori sel tersebut menyatakan bahwa :
1. Seluruh makhluk hidup tersusun atas sel 
2. Sel adalah unit dasar dari struktur dan fungsi makhluk hidup 
3. Seluruh sel berasal dari sel sebelumnya. 

Teori sel ini berlaku untuk seluruh makhluk hidup, baik itu besar maupun kecil. Teori tersebut, mendorong para ilmuwan untuk mempelajari tentang makhluk hidup beserta ciri-cirinya. 

## Penemuan Mikroskop
Para ilmuwan yang meneliti tentang sel membutuhkan suatu alat untuk meneliti bagian-bagian sel. Tanpa alat tersebut teori tentang sel tidak akan tercipta, dan tentu saja penelitian tentang tubuh makhluk hidup tidak akan dapat dilakukan. Seorang ilmuwan asal Inggris bernama Robert Hooke pada tahun 1663 menciptakan sebuah mikroskop. Beliau mengamati sayatan gabus dari kulit kayu pohon ek.

Pada tahun 1674, seorang ilmuwan asal Belanda bernama Antonie Van Leeuwenhoek menciptakan sebuah mikroskop, beliau mengamati sampel dari air danau, kerokan dari gigi dan gusi, serta air dari talang hujan. Leeuwenhoek sangat terkejut melihat berbagai macam bentuk organisme tersebut. Beliau menyebut organisme tersebut animalcula yang artinya binatang yang sangat kecil.

Meski pada saat itu, mereka belum memiliki alat-alat yang canggih, namun rasa ingin tahu mereka yang tinggi tidak menghalangi mereka untuk menggali lebih dalam tentang sel dan alam sekitar. Penemuan mereka menjadi titik terang bagi ilmuwan lain untuk meneliti sel.`
    },
    {
        subjectId: 1,
        title: 'Bilangan Bulat dan Operasinya',
        content: `# Materi 1: Bilangan Bulat dan Operasinya

## Pengertian Bilangan Bulat
Bilangan bulat adalah bilangan yang terdiri dari:
- Bilangan bulat positif: {1, 2, 3, 4, ...}
- Nol: {0}
- Bilangan bulat negatif: {..., -3, -2, -1}

Secara matematis, himpunan bilangan bulat disimbolkan dengan huruf ℤ, yaitu dari kata Zahlen (bahasa Jerman) yang berarti angka/bilangan.

Contoh bilangan bulat:
-5, -3, 0, 2, 7, 10 semuanya termasuk bilangan bulat.

## Operasi Penjumlahan Bilangan Bulat
### Aturan Penjumlahan:
1. Jika kedua bilangan bertanda sama, hasilnya adalah jumlah kedua bilangan dan diberi tanda yang sama.
   Contoh:
   - (+5) + (+3) = +8
   - (–4) + (–6) = –10

2. Jika berbeda tanda, maka:
   - Kurangkan nilai mutlaknya
   - Ambil tanda dari bilangan yang nilai mutlaknya lebih besar.
   Contoh:
   - (+7) + (–10) = –3
   - (–9) + (+4) = –5

## Operasi Pengurangan Bilangan Bulat
### Cara menghitung pengurangan:
Ubahlah pengurangan menjadi penjumlahan dengan mengubah bilangan kedua menjadi lawannya.
Contoh:
- 8 – (–2) = 8 + 2 = 10
- –5 – (+3) = –5 + (–3) = –8
- –6 – (–4) = –6 + 4 = –2

## Operasi Perkalian Bilangan Bulat
### Aturan Tanda:
- (+) × (+) = (+)
- (–) × (–) = (+)
- (+) × (–) = (–)
- (–) × (+) = (–)

Contoh:
- (–3) × (–4) = +12
- (–5) × (+2) = –10
- (+6) × (–3) = –18

## Operasi Pembagian Bilangan Bulat
### Aturan Tanda Sama seperti Perkalian:
- Jika tanda sama → hasil positif
- Jika tanda berbeda → hasil negatif

Contoh:
- (–12) ÷ (–4) = +3
- (–20) ÷ (+5) = –4
- (+15) ÷ (–3) = –5`
    }
];

const initialQuizzes = [
    {
        subjectId: 1,
        title: 'Quiz Matematika Dasar',
        questions: [
            {
                question: 'Berapakah hasil dari 5 + 3?',
                options: ['6', '7', '8', '9'],
                correctAnswer: 2
            },
            {
                question: 'Berapakah hasil dari 10 - 4?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 2
            },
            {
                question: 'Berapakah hasil dari 6 × 2?',
                options: ['10', '12', '14', '16'],
                correctAnswer: 1
            }
        ]
    },
    {
        subjectId: 2,
        title: 'Quiz IPA Dasar',
        questions: [
            {
                question: 'Proses pembuatan makanan pada tumbuhan disebut?',
                options: ['Respirasi', 'Fotosintesis', 'Pencernaan', 'Fotosintesis'],
                correctAnswer: 1
            },
            {
                question: 'Sumber energi utama di bumi adalah?',
                options: ['Matahari', 'Bulan', 'Bintang', 'Planet'],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 3,
        title: 'Quiz IPS Dasar',
        questions: [
            {
                question: 'Ibu kota Indonesia adalah?',
                options: ['Jakarta', 'Bandung', 'Surabaya', 'Medan'],
                correctAnswer: 0
            },
            {
                question: 'Mata uang Indonesia adalah?',
                options: ['Dollar', 'Rupiah', 'Ringgit', 'Baht'],
                correctAnswer: 1
            }
        ]
    },
    {
        subjectId: 4,
        title: 'Quiz Bahasa Indonesia',
        questions: [
            {
                question: 'Kalimat yang benar adalah?',
                options: [
                    'Saya pergi ke sekolah',
                    'Saya pergi kesekolah',
                    'Saya pergi ke-sekolah',
                    'Saya pergi ke sekolah.'
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 5,
        title: 'English Quiz',
        questions: [
            {
                question: 'What is the meaning of "Hello"?',
                options: ['Selamat tinggal', 'Halo', 'Terima kasih', 'Sampai jumpa'],
                correctAnswer: 1
            }
        ]
    },
    {
        subjectId: 6,
        title: 'Quiz Agama Islam',
        questions: [
            {
                question: 'Berapa jumlah rukun iman?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 2
            },
            {
                question: 'Berapa jumlah rukun islam?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 1
            }
        ]
    },
    {
        subjectId: 3,
        title: 'Quiz Jelajah Nusantara',
        questions: [
            {
                question: 'Di mana letak Gunung Bromo?',
                options: ['Bali', 'Jawa Timur', 'Sumatera'],
                correctAnswer: 1
            },
            {
                question: 'Apa yang menjadi daya tarik utama di Gunung Bromo?',
                options: ['Air terjun', 'Matahari terbit', 'Lautan pasir'],
                correctAnswer: 1
            },
            {
                question: 'Pantai Kuta terkenal karena apa?',
                options: ['Pasir putih dan ombak besar', 'Hutan tropis', 'Gunung berapi'],
                correctAnswer: 0
            },
            {
                question: 'Apa yang membuat Pantai Kuta cocok untuk peselancar?',
                options: ['Airnya yang sangat dingin', 'Ombaknya yang besar dan kuat', 'Banyaknya pohon kelapa'],
                correctAnswer: 1
            },
            {
                question: 'Taman Nasional Komodo terkenal sebagai habitat hewan apa?',
                options: ['Harimau', 'Komodo', 'Gajah'],
                correctAnswer: 1
            },
            {
                question: 'Selain komodo, hewan apa yang dapat ditemukan di Taman Nasional Komodo?',
                options: ['Rusa', 'Singa', 'Panda'],
                correctAnswer: 0
            },
            {
                question: 'Apa yang bisa dilakukan di sekitar pulau Komodo selain melihat komodo?',
                options: ['Berburu', 'Menyelam dan snorkeling', 'Mandi air panas'],
                correctAnswer: 1
            },
            {
                question: 'Apa yang membuat Taman Nasional Komodo terkenal di dunia?',
                options: ['Keanekaragaman hayati dan komodo yang hanya ada di sana', 'Air terjun yang tinggi', 'Hutan tropis yang lebat'],
                correctAnswer: 0
            },
            {
                question: 'Apa yang bisa dilihat di Pantai Kuta saat matahari terbenam?',
                options: ['Langit oranye kemerahan', 'Gunung berapi yang aktif', 'Awan hitam gelap'],
                correctAnswer: 0
            },
            {
                question: 'Mengapa Gunung Bromo dianggap sebagai tempat yang misterius?',
                options: ['Karena sering terjadi hujan', 'Karena adanya kabut yang menutupi lautan pasir', 'Karena banyak binatang liar'],
                correctAnswer: 1
            }
        ]
    },
    {
        subjectId: 5,
        title: 'Quiz Greeting and Parting',
        questions: [
            {
                question: 'Complete the dialog: "Good Afternoon, Faiz (1)..........................?"',
                options: [
                    'nice to meet you',
                    'where are you?',
                    'How are you?',
                    'glad to see you',
                    'how is your mother?'
                ],
                correctAnswer: 2
            },
            {
                question: 'Complete the dialog: "I\'m fine thank you and how about you?"',
                options: [
                    'I\'m fine too.',
                    'nice to meet you.',
                    'good to see you.',
                    'see you later.',
                    'good afternoon.'
                ],
                correctAnswer: 0
            },
            {
                question: 'Complete the dialog: "Hello Rizki, my name is Aji. (3)..........................."',
                options: [
                    'How are you?',
                    'Good afternoon.',
                    'Nice to meet you.',
                    'Glad to see you.',
                    'See you later.'
                ],
                correctAnswer: 2
            },
            {
                question: 'Complete the dialog: "Oh okay, (4)..........................."',
                options: [
                    'Where are you going?',
                    'See you later.',
                    'How are you?',
                    'Nice to meet you.',
                    'How are you?'
                ],
                correctAnswer: 1
            },
            {
                question: 'Ciko : .................., where are you going?',
                options: [
                    'Good night.',
                    'Good morning',
                    'Good afternoon',
                    'Good bye.',
                    'Nice to meet you.'
                ],
                correctAnswer: 2
            },
            {
                question: 'Ester: I\'m Ester. How do you do?\nFitri: .............. I\'m Fitriyani Maida.',
                options: [
                    'Are you ok?',
                    'How are you?',
                    'How do you do.',
                    'I am fine.',
                    'Good morning.'
                ],
                correctAnswer: 3
            },
            {
                question: 'Bobby : Hi, Ace. ..........\nAce : Great! How about you?\nBobby: It\'s good, thanks.',
                options: [
                    'What are you doing?',
                    'Where have you been?',
                    'What is she doing?',
                    'Glad to see you.',
                    'How\'s life?'
                ],
                correctAnswer: 4
            },
            {
                question: 'The way to ask someone\'s news is?',
                options: [
                    'How is life?',
                    'Where are you?',
                    'What is that?',
                    'Do you like it?',
                    'When is your birthday?'
                ],
                correctAnswer: 0
            },
            {
                question: 'It\'s seven o\'clock in the morning.\nGina will go to school. She says......... to his parents.',
                options: [
                    'Good night',
                    'Good afternoon',
                    'Good bye.',
                    'Good morning.',
                    'Good day.'
                ],
                correctAnswer: 3
            },
            {
                question: 'It\'s nine o\'clock in the night.\nGia will go to sleep. He says....... to his parents',
                options: [
                    'Good night',
                    'Good afternoon',
                    'Good bye.',
                    'Good morning',
                    'Good day'
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 6,
        title: 'Quiz Salat dan Zikir',
        questions: [
            {
                question: 'Apa yang diibaratkan sebagai pondasi dalam bangunan agama Islam?',
                options: ['Salat', 'Syahadat', 'Dakwah', 'Zikir'],
                correctAnswer: 1
            },
            {
                question: 'Menurut hadis yang diriwayatkan oleh Al-Baihaqi, apa yang disebut sebagai tiang agama?',
                options: ['Syahadat', 'Salat', 'Zikir', 'Dakwah'],
                correctAnswer: 1
            },
            {
                question: 'Apa makna salat secara bahasa?',
                options: [
                    'Mengingat Allah',
                    'Doa meminta kebaikan',
                    'Perbuatan baik',
                    'Mengagungkan nama-Nya'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa yang dimaksud dengan zikir?',
                options: [
                    'Mengingat Allah Swt.',
                    'Melakukan salat',
                    'Membaca Al-Qur\'an',
                    'Mengajarkan agama'
                ],
                correctAnswer: 0
            },
            {
                question: 'Apa yang akan didapatkan oleh orang yang memelihara salat menurut Rasulullah saw?',
                options: [
                    'Kesengsaraan',
                    'Cahaya, petunjuk, dan keselamatan',
                    'Kekayaan',
                    'Ketidakpastian'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa yang menjadi ciri khas dari zikir?',
                options: [
                    'Harus dilakukan di tempat khusus',
                    'Dapat dilakukan kapan saja dan di mana saja',
                    'Memerlukan waktu yang lama',
                    'Hanya bisa dilakukan oleh orang tertentu'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa yang dimaksud dengan zikir dengan hati?',
                options: [
                    'Mengucapkan lafaz-lafaz tertentu',
                    'Bertafakur dan merenungkan ciptaan Allah',
                    'Melakukan salat',
                    'Membaca Al-Qur\'an'
                ],
                correctAnswer: 1
            },
            {
                question: 'Contoh zikir dengan ucapan adalah:',
                options: [
                    'Merenungkan ciptaan Allah',
                    'Menjauhi larangan-Nya',
                    'Membaca Al-Qur\'an dan salawat',
                    'Melakukan amal baik'
                ],
                correctAnswer: 2
            },
            {
                question: 'Apa yang termasuk dalam zikir dengan perbuatan?',
                options: [
                    'Mengucapkan tasbih',
                    'Mengingat nama Allah',
                    'Membaca doa',
                    'Menaati perintah Allah dan menjauhi larangan-Nya'
                ],
                correctAnswer: 3
            },
            {
                question: 'Mengapa zikir penting dalam kehidupan seorang Muslim?',
                options: [
                    'Agar terhindar dari kesombongan',
                    'Untuk mendapatkan harta',
                    'Agar dikenal banyak orang',
                    'Untuk mendapatkan kekuasaan'
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 3,
        title: 'Quiz Keberagaman Lingkungan',
        questions: [
            {
                question: 'Apa yang dimaksud dengan pemanasan global?',
                options: [
                    'Proses pembentukan bumi',
                    'Peningkatan suhu permukaan bumi akibat efek rumah kaca',
                    'Penurunan suhu bumi',
                    'Proses pengolahan limbah'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa penyebab utama dari pemanasan global?',
                options: [
                    'Aktivitas vulkanik',
                    'Pergerakan lempeng tektonik',
                    'Perubahan musim',
                    'Efek rumah kaca dan polusi'
                ],
                correctAnswer: 3
            },
            {
                question: 'Apa yang dapat terjadi akibat pencemaran udara?',
                options: [
                    'Meningkatnya kualitas udara',
                    'Penurunan suhu bumi',
                    'Terperangkapnya panas matahari di atmosfer',
                    'Meningkatnya jumlah oksigen'
                ],
                correctAnswer: 2
            },
            {
                question: 'Contoh pencemaran air yang disebabkan oleh manusia adalah:',
                options: [
                    'Penggunaan air hujan',
                    'Pembuangan limbah industri ke sungai',
                    'Penyaringan air tanah',
                    'Penangkapan ikan dengan jaring'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa dampak dari pencemaran tanah?',
                options: [
                    'Tanah kehilangan komponen penting dan tidak produktif',
                    'Tanah menjadi lebih subur',
                    'Meningkatnya hasil pertanian',
                    'Penurunan jumlah hama'
                ],
                correctAnswer: 0
            },
            {
                question: 'Mengapa penggunaan pestisida berlebihan dapat berbahaya?',
                options: [
                    'Pestisida hanya mengenai hama sasaran',
                    'Pestisida dapat meningkatkan hasil pertanian',
                    'Hanya 20% pestisida yang mengenai hama, sisanya mencemari tanah',
                    'Pestisida tidak berpengaruh pada kesehatan'
                ],
                correctAnswer: 2
            },
            {
                question: 'Apa yang dapat dilakukan untuk menjaga keseimbangan lingkungan?',
                options: [
                    'Mengabaikan aturan masyarakat',
                    'Mengurangi penggunaan bahan kimia berbahaya',
                    'Meningkatkan polusi udara',
                    'Menggunakan lebih banyak pestisida'
                ],
                correctAnswer: 1
            },
            {
                question: 'Apa yang dimaksud dengan efek rumah kaca?',
                options: [
                    'Proses pembentukan gas berbahaya',
                    'Peningkatan jumlah tanaman',
                    'Proses pengolahan limbah',
                    'Penyerapan panas oleh gas di atmosfer'
                ],
                correctAnswer: 3
            },
            {
                question: 'Apa yang menjadi dampak negatif dari interaksi manusia dengan alam?',
                options: [
                    'Meningkatnya keanekaragaman hayati',
                    'Pencemaran lingkungan',
                    'Peningkatan kualitas hidup',
                    'Penemuan sumber daya baru'
                ],
                correctAnswer: 1
            },
            {
                question: 'Mengapa penting untuk menjaga kelestarian alam?',
                options: [
                    'Untuk menciptakan kehidupan yang harmonis',
                    'Agar manusia dapat hidup sendiri',
                    'Agar dapat meningkatkan polusi',
                    'Untuk mengurangi interaksi sosial'
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 2,
        title: 'Quiz Sel dan Mikroskop',
        questions: [
            {
                question: 'Apa yang dimaksud dengan sel?',
                options: [
                    'Bagian terkecil dari makhluk hidup',
                    'Bagian dari bangunan',
                    'Alat untuk mengamati benda kecil',
                    'Jenis tanaman'
                ],
                correctAnswer: 0
            },
            {
                question: 'Apa kesimpulan yang dapat ditarik tentang sel?',
                options: [
                    'Sel hanya ada pada tumbuhan',
                    'Sel adalah unit dasar dari struktur dan fungsi makhluk hidup',
                    'Sel hanya ada pada hewan',
                    'Sel tidak berfungsi dalam makhluk hidup'
                ],
                correctAnswer: 1
            },
            {
                question: 'Siapa ilmuwan yang menciptakan mikroskop pertama kali?',
                options: [
                    'Charles Darwin',
                    'Louis Pasteur',
                    'Antonie Van Leeuwenhoek',
                    'Robert Hooke'
                ],
                correctAnswer: 3
            },
            {
                question: 'Apa yang diamati oleh Robert Hooke dengan mikroskopnya?',
                options: [
                    'Sayatan gabus dari kulit kayu pohon ek',
                    'Sampel dari air danau',
                    'Struktur bunga',
                    'Hewan besar'
                ],
                correctAnswer: 0
            },
            {
                question: 'Siapa ilmuwan yang mengamati berbagai bentuk organisme kecil dan menyebutnya animalcula?',
                options: [
                    'Robert Hooke',
                    'Antonie Van Leeuwenhoek',
                    'Gregor Mendel',
                    'Louis Pasteur'
                ],
                correctAnswer: 1
            },
            {
                question: 'Teori sel menyatakan bahwa:',
                options: [
                    'Sel hanya ada pada hewan',
                    'Sel adalah bagian terbesar dari makhluk hidup',
                    'Seluruh makhluk hidup tersusun atas sel',
                    'Sel tidak memiliki fungsi'
                ],
                correctAnswer: 2
            },
            {
                question: 'Mengapa penemuan mikroskop penting dalam penelitian sel?',
                options: [
                    'Tanpa mikroskop, sel tidak dapat dilihat',
                    'Mikroskop hanya digunakan untuk melihat benda besar',
                    'Mikroskop tidak berfungsi untuk penelitian',
                    'Mikroskop hanya digunakan oleh ilmuwan tertentu'
                ],
                correctAnswer: 0
            },
            {
                question: 'Apa yang menjadi motivasi para ilmuwan untuk meneliti sel?',
                options: [
                    'Rasa ingin tahu yang tinggi',
                    'Untuk menciptakan alat baru',
                    'Untuk mengubah teori yang ada',
                    'Untuk menemukan obat-obatan'
                ],
                correctAnswer: 0
            },
            {
                question: 'Apa yang terjadi jika tidak ada alat seperti mikroskop dalam penelitian sel?',
                options: [
                    'Penelitian dapat dilakukan dengan mudah',
                    'Penelitian tidak memerlukan alat',
                    'Semua makhluk hidup dapat dilihat dengan mata telanjang',
                    'Teori tentang sel tidak akan tercipta'
                ],
                correctAnswer: 3
            },
            {
                question: 'Apa yang dapat kita pelajari dari penemuan Antonie Van Leeuwenhoek?',
                options: [
                    'Pentingnya alat dalam penelitian',
                    'Bahwa sel tidak penting',
                    'Bahwa semua ilmuwan harus memiliki alat canggih',
                    'Bahwa penelitian tidak memerlukan rasa ingin tahu'
                ],
                correctAnswer: 0
            }
        ]
    },
    {
        subjectId: 1,
        title: 'Quiz Bilangan Bulat',
        questions: [
            {
                question: '1. -8 + 5 =',
                options: ['3', '-3', '-13', '13'],
                correctAnswer: 1
            },
            {
                question: '2. (-3) - (-7) =',
                options: ['-10', '4', '-4', '10'],
                correctAnswer: 1
            },
            {
                question: '3. 9 + (-6) =',
                options: ['-3', '3', '15', '-15'],
                correctAnswer: 1
            },
            {
                question: '4. (-4) × 6 =',
                options: ['-24', '24', '-10', '10'],
                correctAnswer: 0
            },
            {
                question: '5. (-10) ÷ (-2) =',
                options: ['5', '-5', '-8', '8'],
                correctAnswer: 0
            },
            {
                question: '6. 12 - (-3) =',
                options: ['9', '-9', '15', '-15'],
                correctAnswer: 2
            },
            {
                question: '7. -6 + (-4) =',
                options: ['-10', '10', '-2', '2'],
                correctAnswer: 0
            },
            {
                question: '8. (-5)^2 =',
                options: ['25', '-25', '10', '-10'],
                correctAnswer: 0
            },
            {
                question: '9. (-2) × (-3) × (-1) =',
                options: ['6', '-6', '-1', '1'],
                correctAnswer: 1
            },
            {
                question: '10. Urutan bilangan dari terkecil ke terbesar: 0, -4, 2, -1',
                options: [
                    '-4, -1, 0, 2',
                    '0, -1, -4, 2',
                    '2, 0, -1, -4',
                    '-1, -4, 0, 2'
                ],
                correctAnswer: 0
            }
        ]
    }
];

module.exports = { initialMaterials, initialQuizzes }; 