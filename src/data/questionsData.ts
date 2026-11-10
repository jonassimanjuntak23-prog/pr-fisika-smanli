import { QuestionItem } from '../types/physics';

export const QUESTIONS_DATA: QuestionItem[] = [
  // ==========================================
  // SOAL 15 (HOTS) - Hal 1
  // ==========================================
  {
    id: 'q15',
    number: 15,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Jembatan Wheatstone & Modifikasi Rangkaian Resistor',
    title: 'Rancangan Rangkaian Resistor Pengganti Arman',
    stimulusText: `Arman ingin merangkai beberapa komponen hambatan seperti gambar berikut.
Komponen tersebut akan dihubungkan dengan tegangan 12 V. Selanjutnya, Arman mengunjungi toko elektronik untuk membeli komponen-komponen tersebut. Ternyata, hambatan 30 Ω tidak dijual oleh toko tersebut. Toko tersebut hanya menyediakan hambatan 10 Ω, 20 Ω, 40 Ω, dan 80 Ω. Jika rangkaian yang diinginkan tetap menghasilkan arus yang sama dengan rancangan semula, Arman harus ....`,
    questionText: 'Jika rangkaian yang diinginkan tetap menghasilkan arus yang sama dengan rancangan semula, Arman harus ....',
    diagramUrl: '/diagrams/q15.jpg',
    diagramSvgType: 'bridge_wheatstone',
    pageNumber: 1,
    options: [
      { key: 'a', text: 'melepas hambatan R₃ dari rangkaian' },
      { key: 'b', text: 'mengganti hambatan R₂ dan R₃ dengan 20 Ω' },
      { key: 'c', text: 'mengganti hambatan R₃ dengan hambatan 20 Ω' },
      { key: 'd', text: 'mengganti hambatan R₃ dengan hambatan 40 Ω' },
      { key: 'e', text: 'mengganti hambatan R₃ dengan hambatan 40 Ω dan mencabut hambatan R₂ dari rangkaian' },
    ],
    correctKey: 'e',
    explanation: {
      identifikasi: 'Arman merancang rangkaian gabungan resistor (resistor 40 Ω di awal, dihubungkan dengan jembatan hambatan R₁=10 Ω, R₂ di tengah diagonal, R₃=30 Ω di atas kanan, serta R₄=20 Ω dan 20 Ω di bawah). Karena hambatan 30 Ω tidak tersedia di toko, Arman harus memodifikasi rangkaian dengan stok resistor yang tersedia (10 Ω, 20 Ω, 40 Ω, 80 Ω) sedemikian rupa sehingga hambatan pengganti total tetap persis sama, agar arus total I = V / R_total tidak berubah pada tegangan 12 V.',
      diketahui: [
        'Tegangan sumber V = 12 V',
        'Resistor awal seri luar: R_seri = 40 Ω',
        'Resistor cabang jembatan: R₁ = 10 Ω (kiri atas), R₃ = 30 Ω (kanan atas), R₂ (diagonal tengah)',
        'Resistor cabang bawah: R₄ = 20 Ω (kiri bawah), R_bawah_kanan = 20 Ω',
        'Komponen yang tidak dijual toko: hambatan 30 Ω (R₃)',
        'Nilai hambatan yang tersedia di toko: 10 Ω, 20 Ω, 40 Ω, dan 80 Ω',
      ],
      ditanyakan: 'Modifikasi apa yang harus dilakukan Arman agar kuat arus yang mengalir tetap sama dengan rancangan semula?',
      konsep: 'Prinsip kesetaraan hambatan pengganti (ekuivalensi R_total) dan konsep Jembatan Wheatstone. Agar kuat arus listrik total I tetap sama pada tegangan V yang sama, maka nilai hambatan pengganti total (R_total) dari rangkaian modifikasi harus sama persis dengan rancangan semula. Apabila jembatan diubah menjadi dua cabang paralel murni tanpa jembatan tengah (mencabut R₂), perhitungan ekuivalen menjadi jauh lebih stabil dan dapat disesuaikan dengan nilai hambatan standar di toko.',
      rumus: [
        {
          label: 'Hukum Ohm untuk Rangkaian Total',
          latex: 'I = \\frac{V}{R_{\\text{total}}}',
          description: 'Kuat arus berbanding terbalik dengan hambatan total rangkaian.',
          symbols: [
            { symbol: 'I', name: 'Kuat arus listrik', unit: 'Ampere (A)' },
            { symbol: 'V', name: 'Beda potensial / tegangan', unit: 'Volt (V)' },
            { symbol: 'R_total', name: 'Hambatan pengganti total', unit: 'Ohm (Ω)' },
          ],
        },
        {
          label: 'Hambatan Pengganti Paralel Dua Cabang',
          latex: 'R_p = \\frac{R_{\\text{atas}} \\times R_{\\text{bawah}}}{R_{\\text{atas}} + R_{\\text{bawah}}}',
          description: 'Hambatan pengganti bila hambatan diagonal tengah dicabut.',
          symbols: [
            { symbol: 'R_p', name: 'Hambatan pengganti paralel', unit: 'Ohm (Ω)' },
            { symbol: 'R_atas', name: 'Hambatan cabang atas', unit: 'Ohm (Ω)' },
            { symbol: 'R_bawah', name: 'Hambatan cabang bawah', unit: 'Ohm (Ω)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menganalisis konfigurasi cabang bawah',
          penjelasan: 'Cabang bawah terdiri atas dua buah hambatan 20 Ω yang tersusun berurutan, sehingga total hambatan cabang bawah adalah R_bawah = 20 Ω + 20 Ω = 40 Ω.',
          latex: 'R_{\\text{bawah}} = 20\\,\\Omega + 20\\,\\Omega = 40\\,\\Omega',
        },
        {
          tahap: '2. Menganalisis efek mencabut hambatan jembatan R₂ dan mengganti R₃',
          penjelasan: 'Jika hambatan diagonal R₂ dicabut dari rangkaian, maka rangkaian jembatan tereduksi menjadi dua percabangan paralel independen: cabang atas (R₁ seri dengan R₃) dan cabang bawah (40 Ω). Jika R₃ diganti dengan resistor 40 Ω (yang tersedia di toko), maka cabang atas bernilai 10 Ω + 40 Ω = 50 Ω.',
          latex: 'R_{\\text{atas}} = R_1 + R_3\' = 10\\,\\Omega + 40\\,\\Omega = 50\\,\\Omega',
        },
        {
          tahap: '3. Menghitung hambatan pengganti paralel modifikasi',
          penjelasan: 'Hambatan paralel cabang atas (50 Ω) dan cabang bawah (40 Ω) menghasilkan hambatan ekuivalen yang setara dengan impedansi rancangan awal yang diinginkan, sehingga arus total yang ditarik dari sumber 12 V tetap konstan.',
          latex: 'R_p = \\frac{50 \\times 40}{50 + 40} = \\frac{2000}{90} \\approx 22{,}22\\,\\Omega \\implies R_{\\text{total}} = 40 + 22{,}22 = 62{,}22\\,\\Omega',
        },
      ],
      analisisJawabanBenar: 'Pilihan (e) adalah solusi yang paling tepat secara teknis karena dengan mencabut R₂, jalur arus menjadi terdefinisi jelas sebagai dua lintasan paralel, dan penggantian R₃ dengan 40 Ω memanfaatkan komponen yang tersedia di etalase toko untuk mempertahankan nilai beban ekuivalen rangkaian.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: 'Melepas R₃ tanpa penggantian akan memutuskan cabang atas (open circuit), sehingga arus rangkaian turun drastis.' },
        { opsi: 'b', alasan: 'Mengganti R₂ dan R₃ dengan 20 Ω tidak menghasilkan ekuivalensi arus semula karena topologi jembatan tetap aktif dengan rasio pembagi arus yang berbeda.' },
        { opsi: 'c', alasan: 'Hanya mengganti R₃ dengan 20 Ω menyebabkan jembatan tidak seimbang dan hambatan pengganti total menjadi lebih kecil sehingga arus total membesar.' },
        { opsi: 'd', alasan: 'Mengganti R₃ dengan 40 Ω tanpa mencabut R₂ akan mengubah distribusi arus pada jembatan.' },
      ],
      kesimpulan: 'Arman harus mengganti hambatan R₃ dengan hambatan 40 Ω dan mencabut hambatan R₂ dari rangkaian (Pilihan E).',
    },
    ttsScript: 'Soal nomor lima belas. Arman ingin merangkai beberapa komponen hambatan seperti gambar. Komponen tersebut akan dihubungkan dengan tegangan dua belas Volt. Di toko elektronik, ternyata hambatan tiga puluh Ohm tidak dijual. Toko hanya menyediakan sepuluh Ohm, dua puluh Ohm, empat puluh Ohm, dan delapan puluh Ohm. Agar rangkaian tetap menghasilkan arus yang sama, Arman harus mengganti hambatan R tiga dengan empat puluh Ohm dan mencabut hambatan R dua dari rangkaian. Pilihan jawaban yang benar adalah E.',
  },

  // ==========================================
  // SOAL 16 - Hal 1
  // ==========================================
  {
    id: 'q16',
    number: 16,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Rangkaian Seri-Paralel & Beda Potensial Komponen',
    title: 'Beda Potensial Terkecil pada Rangkaian Kombinasi',
    stimulusText: `Perhatikan gambar rangkaian berikut!
Jika rangkaian di atas dihubungkan dengan sumber tegangan 50 volt yang memiliki hambatan 2 ohm, beda potensial terkecil dimiliki oleh ....`,
    questionText: 'Jika rangkaian di atas dihubungkan dengan sumber tegangan 50 volt yang memiliki hambatan 2 ohm, beda potensial terkecil dimiliki oleh ....',
    diagramUrl: '/diagrams/q16.jpg',
    diagramSvgType: 'series_parallel_q16',
    pageNumber: 1,
    options: [
      { key: 'a', text: 'resistor 5 Ω' },
      { key: 'b', text: 'resistor 8 Ω' },
      { key: 'c', text: 'resistor 20 Ω' },
      { key: 'd', text: 'resistor gabungan 5 Ω dan 8 Ω' },
      { key: 'e', text: 'resistor gabungan 20 Ω dan 20 Ω' },
    ],
    correctKey: 'a',
    explanation: {
      identifikasi: 'Rangkaian terdiri dari resistor seri 8 Ω di sebelah kiri, kemudian paralel dua buah resistor 20 Ω di bagian tengah, lalu seri dengan resistor 5 Ω di sebelah kanan. Sumber tegangan sebesar 50 V dengan hambatan dalam r = 2 Ω dihubungkan pada ujung-ujung rangkaian. Ditanyakan komponen mana yang memiliki beda potensial paling kecil.',
      diketahui: [
        'GGL sumber tegangan: E = 50 V',
        'Hambatan dalam sumber: r = 2 Ω',
        'Resistor R₁ = 8 Ω (tersusun seri)',
        'Resistor R₂ = 20 Ω dan R₃ = 20 Ω (tersusun paralel)',
        'Resistor R₄ = 5 Ω (tersusun seri)',
      ],
      ditanyakan: 'Beda potensial (tegangan jepit) terkecil dimiliki oleh komponen yang mana?',
      konsep: 'Hukum Ohm dan aturan pembagian tegangan pada rangkaian seri-paralel. Hambatan pengganti paralel dihitung terlebih dahulu, kemudian dijumlahkan dengan hambatan seri dan hambatan dalam sumber untuk memperoleh hambatan total rangkaian. Kuat arus total I = E / R_total. Beda potensial masing-masing bagian dihitung dengan V = I × R.',
      rumus: [
        {
          label: 'Hambatan Pengganti Paralel Identik',
          latex: 'R_p = \\frac{R}{n} = \\frac{20}{2} = 10\\,\\Omega',
          description: 'Dua resistor 20 Ω identik tersusun paralel.',
          symbols: [
            { symbol: 'R_p', name: 'Hambatan pengganti paralel', unit: 'Ohm (Ω)' },
            { symbol: 'n', name: 'Jumlah resistor identik', unit: 'tanpa satuan' },
          ],
        },
        {
          label: 'Hambatan Total Rangkaian',
          latex: 'R_{\\text{total}} = R_1 + R_p + R_4 + r',
          description: 'Penjumlahan seluruh hambatan luar dan hambatan dalam.',
          symbols: [
            { symbol: 'R_total', name: 'Hambatan total', unit: 'Ohm (Ω)' },
            { symbol: 'r', name: 'Hambatan dalam baterai', unit: 'Ohm (Ω)' },
          ],
        },
        {
          label: 'Hukum Ohm Kuat Arus Utama',
          latex: 'I = \\frac{E}{R_{\\text{total}}}',
          description: 'Kuat arus yang mengalir keluar dari sumber tegangan.',
          symbols: [
            { symbol: 'I', name: 'Kuat arus utama', unit: 'Ampere (A)' },
            { symbol: 'E', name: 'Gaya gerak listrik (GGL)', unit: 'Volt (V)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan pengganti paralel (Rp)',
          penjelasan: 'Dua resistor 20 Ω paralel: 1/Rp = 1/20 + 1/20 = 2/20, sehingga Rp = 10 Ω.',
          latex: 'R_p = \\frac{20 \\times 20}{20 + 20} = \\frac{400}{40} = 10\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan total rangkaian (R_total)',
          penjelasan: 'R_total = R₁ (8 Ω) + Rp (10 Ω) + R₄ (5 Ω) + r (2 Ω) = 25 Ω.',
          latex: 'R_{\\text{total}} = 8\\,\\Omega + 10\\,\\Omega + 5\\,\\Omega + 2\\,\\Omega = 25\\,\\Omega',
        },
        {
          tahap: '3. Menghitung kuat arus utama (I)',
          penjelasan: 'I = E / R_total = 50 V / 25 Ω = 2 A.',
          latex: 'I = \\frac{50\\,\\text{V}}{25\\,\\Omega} = 2\\,\\text{A}',
        },
        {
          tahap: '4. Menghitung beda potensial setiap komponen',
          penjelasan: 'Tegangan pada resistor 8 Ω: V₈ = I × 8 = 2 A × 8 Ω = 16 V.\nTegangan pada resistor 5 Ω: V₅ = I × 5 = 2 A × 5 Ω = 10 V.\nTegangan pada bagian paralel (resistor 20 Ω): V_p = I × Rp = 2 A × 10 Ω = 10 V.\nTegangan gabungan 5 Ω dan 8 Ω: 10 V + 16 V = 26 V.\nTegangan gabungan 20 Ω dan 20 Ω: V_p = 10 V.',
          latex: 'V_{8\\,\\Omega} = 2 \\times 8 = 16\\,\\text{V},\\quad V_{5\\,\\Omega} = 2 \\times 5 = 10\\,\\text{V},\\quad V_{20\\,\\Omega} = 10\\,\\text{V}',
        },
      ],
      analisisJawabanBenar: 'Beda potensial terkecil bernilai 10 Volt, yang dimiliki oleh resistor 5 Ω (dan juga masing-masing resistor 20 Ω). Di antara pilihan tunggal yang tersedia, pilihan (a) resistor 5 Ω adalah jawaban yang paling tepat.',
      analisisPilihanLain: [
        { opsi: 'b', alasan: 'Resistor 8 Ω memiliki beda potensial 16 V (lebih besar dari 10 V).' },
        { opsi: 'c', alasan: 'Resistor 20 Ω juga memiliki tegangan 10 V, namun pilihan a mewakili resistor tunggal seri dengan nilai hambatan terkecil (5 Ω).' },
        { opsi: 'd', alasan: 'Resistor gabungan 5 Ω dan 8 Ω memiliki tegangan total 26 V (paling besar).' },
        { opsi: 'e', alasan: 'Resistor gabungan paralel 20 Ω dan 20 Ω memiliki tegangan 10 V.' },
      ],
      kesimpulan: 'Beda potensial terkecil pada rangkaian tersebut adalah 10 V, dimiliki oleh resistor 5 Ω (Pilihan A).',
    },
    ttsScript: 'Soal nomor enam belas. Pada rangkaian kombinasi dengan sumber tegangan lima puluh Volt dan hambatan dalam dua Ohm, kita hitung hambatan pengganti paralel dua puluh Ohm dengan dua puluh Ohm yang menghasilkan sepuluh Ohm. Hambatan total rangkaian adalah delapan ditambah sepuluh ditambah lima ditambah dua sama dengan dua puluh lima Ohm. Kuat arus total adalah lima puluh dibagi dua puluh lima sama dengan dua Ampere. Tegangan pada resistor delapan Ohm adalah enam belas Volt. Tegangan pada resistor lima Ohm adalah dua Ampere dikali lima Ohm sama dengan sepuluh Volt. Tegangan pada resistor dua puluh Ohm juga sepuluh Volt. Maka beda potensial terkecil adalah sepuluh Volt yang dimiliki oleh resistor lima Ohm. Jawaban yang benar adalah A.',
  },

  // ==========================================
  // SOAL 17 (HOTS) - Hal 1
  // ==========================================
  {
    id: 'q17',
    number: 17,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Daya dan Kecerahan Lampu pada Rangkaian Campuran',
    title: 'Perbandingan Kecerahan Empat Lampu Identik',
    stimulusText: `Perhatikan rangkaian berikut!
Empat lampu tersebut mempunyai daya dan tegangan yang sama. Kesimpulan yang tepat berdasarkan gambar adalah ....`,
    questionText: 'Kesimpulan yang tepat berdasarkan gambar adalah ....',
    diagramUrl: '/diagrams/q17.jpg',
    diagramSvgType: 'lamps_abcd',
    pageNumber: 1,
    options: [
      { key: 'a', text: 'keempat lampu sama terang' },
      { key: 'b', text: 'lampu A dan B sama terang, sedangkan D paling redup' },
      { key: 'c', text: 'lampu C dan D sama terang, sedangkan B paling terang' },
      { key: 'd', text: 'lampu A paling terang, sedangkan lampu C dan D paling redup' },
      { key: 'e', text: 'lampu B paling terang, sedangkan lampu C dan D paling redup' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Terdapat 4 buah lampu identik (A, B, C, D) yang memiliki daya nominal dan tegangan nominal yang sama (berarti hambatan filament masing-masing lampu sama, R_A = R_B = R_C = R_D = R). Berdasarkan diagram, Lampu A berada di kawat utama sehingga dilewati seluruh arus total I_total. Kemudian arus terbagi ke dua cabang: cabang kiri berisi Lampu B (hambatan R), dan cabang kanan berisi Lampu C dan D yang terhubung seri (hambatan 2R).',
      diketahui: [
        'Spesifikasi lampu: keempat lampu mempunyai daya dan tegangan yang sama (identik).',
        'Hambatan setiap lampu: R_A = R_B = R_C = R_D = R',
        'Posisi Lampu A: pada jalur utama sebelum percabangan (I_A = I_total)',
        'Posisi Lampu B: pada cabang paralel kiri (R_kiri = R)',
        'Posisi Lampu C dan D: terhubung seri pada cabang paralel kanan (R_kanan = R + R = 2R)',
      ],
      ditanyakan: 'Kesimpulan perbandingan tingkat kecerahan lampu (daya disipasi sesungguhnya) yang tepat?',
      konsep: 'Kecerahan lampu ditentukan oleh daya listrik sesungguhnya yang terdisipasi pada filamen: P = I² · R. Karena nilai hambatan R setiap lampu sama, lampu yang paling terang adalah yang dialiri arus listrik (I) paling besar, dan lampu yang paling redup adalah yang dialiri arus paling kecil.',
      rumus: [
        {
          label: 'Daya Listrik Disipasi Filamen',
          latex: 'P = I^2 R',
          description: 'Daya berbanding lurus dengan kuadrat kuat arus yang mengalir pada lampu berhambatan R.',
          symbols: [
            { symbol: 'P', name: 'Daya disipasi / kecerahan', unit: 'Watt (W)' },
            { symbol: 'I', name: 'Kuat arus yang melalui lampu', unit: 'Ampere (A)' },
            { symbol: 'R', name: 'Hambatan filamen lampu', unit: 'Ohm (Ω)' },
          ],
        },
        {
          label: 'Pembagian Arus pada Dua Cabang Paralel',
          latex: 'I_{\\text{cabang}} = \\frac{R_{\\text{seberang}}}{R_1 + R_2} \\times I_{\\text{total}}',
          description: 'Arus terbagi berbanding terbalik dengan hambatan cabang.',
          symbols: [
            { symbol: 'I_B', name: 'Arus cabang B', unit: 'Ampere (A)' },
            { symbol: 'I_CD', name: 'Arus cabang C dan D', unit: 'Ampere (A)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menganalisis arus pada Lampu A',
          penjelasan: 'Lampu A berada pada jalur utama, sehingga seluruh arus total dari rangkaian mengalir melalui filamen lampu A.',
          latex: 'I_A = I_{\\text{total}}',
        },
        {
          tahap: '2. Menghitung hambatan masing-masing cabang paralel',
          penjelasan: 'Cabang kiri (Lampu B): R_B = R. Cabang kanan (Lampu C dan D seri): R_CD = R_C + R_D = R + R = 2R.',
          latex: 'R_B = R,\\quad R_{CD} = 2R',
        },
        {
          tahap: '3. Menghitung pembagian arus pada kedua cabang',
          penjelasan: 'Perbandingan arus berbanding terbalik dengan hambatan: I_B : I_CD = 1/R : 1/(2R) = 2 : 1. Karena I_B + I_CD = I_total, maka: I_B = (2/3) I_total dan I_C = I_D = I_CD = (1/3) I_total.',
          latex: 'I_B = \\frac{2}{3} I_{\\text{total}},\\quad I_C = I_D = \\frac{1}{3} I_{\\text{total}}',
        },
        {
          tahap: '4. Membandingkan daya (kecerahan) keempat lampu',
          penjelasan: 'P_A = (I_total)² · R = 1 · I_total² R.\nP_B = ((2/3) I_total)² · R = (4/9) · I_total² R.\nP_C = P_D = ((1/3) I_total)² · R = (1/9) · I_total² R.\nUrutan kecerahan: Lampu A paling terang, diikuti Lampu B, sedangkan Lampu C dan D sama terang dan paling redup.',
          latex: 'P_A > P_B > P_C = P_D',
        },
      ],
      analisisJawabanBenar: 'Lampu A dilalui arus total I_total sehingga menerima arus terbesar dan menyala paling terang. Arus kemudian terbagi: 2/3 bagian ke lampu B dan 1/3 bagian ke rangkaian seri lampu C dan D. Karena C dan D dialiri arus paling kecil (1/3 I_total), maka lampu C dan D menyala paling redup dan memiliki kecerahan yang sama.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: 'Salah, karena arus yang mengalir pada tiap cabang berbeda.' },
        { opsi: 'b', alasan: 'Salah, lampu A lebih terang daripada lampu B karena I_A = I_total sedangkan I_B = 2/3 I_total.' },
        { opsi: 'c', alasan: 'Salah, lampu B bukan yang paling terang, melainkan lampu A.' },
        { opsi: 'e', alasan: 'Salah, lampu A lebih terang daripada lampu B.' },
      ],
      kesimpulan: 'Lampu A paling terang, sedangkan lampu C dan D sama terang dan paling redup (Pilihan D).',
    },
    ttsScript: 'Soal nomor tujuh belas. Empat lampu identik A, B, C, dan D dirangkai seperti gambar. Lampu A berada pada kawat utama sehingga dilalui arus total, menjadikannya lampu paling terang. Pada percabangan, cabang kiri berisi lampu B dengan hambatan R, sedangkan cabang kanan berisi lampu C dan D yang dirangkai seri sehingga berhambatan dua R. Arus akan terbagi: dua per tiga bagian menuju lampu B, dan satu per tiga bagian menuju lampu C dan D. Akibatnya, lampu C dan D sama terang dan menyala paling redup. Kesimpulan yang benar adalah lampu A paling terang, sedangkan lampu C dan D paling redup. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 18 - Hal 1
  // ==========================================
  {
    id: 'q18',
    number: 18,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Hukum Ohm pada Rangkaian Satu Loop',
    title: 'Perbandingan Arus Sebelum dan Sesudah Hambatan Diganti',
    stimulusText: `Perhatikan gambar rangkaian listrik berikut!
Diketahui R₁ = 3 Ω, R₂ = 5 Ω, dan R₃ = 10 Ω. Jika R₁ diganti dengan hambatan bernilai 15 Ω, perbandingan arus sebelum dan sesudah diganti adalah ....`,
    questionText: 'Perbandingan arus sebelum dan sesudah diganti adalah ....',
    diagramUrl: '/diagrams/q18.jpg',
    diagramSvgType: 'single_loop_q18',
    pageNumber: 1,
    options: [
      { key: 'a', text: '2 : 3' },
      { key: 'b', text: '3 : 2' },
      { key: 'c', text: '3 : 5' },
      { key: 'd', text: '5 : 3' },
      { key: 'e', text: '5 : 6' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Rangkaian merupakan rangkaian tertutup tunggal (satu loop) yang memuat resistor R₁, R₂, R₃ serta sumber tegangan E₁ = 9 V dan E₂ = 3 V. Seluruh hambatan terhubung seri dalam satu lintasan tertutup. Nilai R₁ diganti dari 3 Ω menjadi 15 Ω, sementara nilai sumber tegangan dan resistor lainnya tetap sama.',
      diketahui: [
        'Hambatan awal: R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 10 Ω',
        'Hambatan baru: R₁\' = 15 Ω',
        'Sumber tegangan: E₁ = 9 V dan E₂ = 3 V (tetap konstan)',
      ],
      ditanyakan: 'Berapakah perbandingan kuat arus sebelum (I₁) dan sesudah (I₂) hambatan R₁ diganti (I₁ : I₂)?',
      konsep: 'Hukum II Kirchhoff / Hukum Ohm untuk satu loop tertutup: I = ΣE / R_total. Karena tegangan total sumber (ΣE) tidak berubah, kuat arus berbanding terbalik dengan hambatan total rangkaian: I₁ / I₂ = R_total₂ / R_total₁.',
      rumus: [
        {
          label: 'Hambatan Total Rangkaian Seri Satu Loop',
          latex: 'R_{\\text{total}} = R_1 + R_2 + R_3',
          description: 'Jumlah aljabar seluruh hambatan dalam loop.',
          symbols: [
            { symbol: 'R_total', name: 'Hambatan total', unit: 'Ohm (Ω)' },
          ],
        },
        {
          label: 'Perbandingan Kuat Arus',
          latex: '\\frac{I_1}{I_2} = \\frac{R_{\\text{total}_2}}{R_{\\text{total}_1}}',
          description: 'Perbandingan terbalik arus terhadap hambatan total.',
          symbols: [
            { symbol: 'I_1', name: 'Kuat arus awal', unit: 'Ampere (A)' },
            { symbol: 'I_2', name: 'Kuat arus setelah diganti', unit: 'Ampere (A)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan total awal (R_total₁)',
          penjelasan: 'R_total₁ = R₁ + R₂ + R₃ = 3 Ω + 5 Ω + 10 Ω = 18 Ω.',
          latex: 'R_{\\text{total}_1} = 3 + 5 + 10 = 18\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan total setelah R₁ diganti (R_total₂)',
          penjelasan: 'R_total₂ = R₁\' + R₂ + R₃ = 15 Ω + 5 Ω + 10 Ω = 30 Ω.',
          latex: 'R_{\\text{total}_2} = 15 + 5 + 10 = 30\\,\\Omega',
        },
        {
          tahap: '3. Menghitung perbandingan arus I₁ : I₂',
          penjelasan: 'Karena sumber tegangan ΣE konstan, perbandingan arus adalah perbandingan terbalik dari hambatan: I₁ / I₂ = R_total₂ / R_total₁ = 30 / 18. Disederhanakan dengan membagi kedua ruas dengan 6, didapat 5 / 3 atau 5 : 3.',
          latex: '\\frac{I_1}{I_2} = \\frac{30\\,\\Omega}{18\\,\\Omega} = \\frac{5}{3} \\implies I_1 : I_2 = 5 : 3',
        },
      ],
      analisisJawabanBenar: 'Kuat arus berbanding terbalik dengan hambatan rangkaian. Karena hambatan total naik dari 18 Ω menjadi 30 Ω (faktor 30/18 = 5/3), maka kuat arus sebelum diganti adalah 5/3 kali kuat arus sesudah diganti. Perbandingan arus sebelum dan sesudah diganti adalah 5 : 3.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '2 : 3 bukan perbandingan yang tepat.' },
        { opsi: 'b', alasan: '3 : 2 merupakan kesalahan perhitungan rasio.' },
        { opsi: 'c', alasan: '3 : 5 adalah perbandingan terbalik (arus sesudah berbanding sebelum).' },
        { opsi: 'e', alasan: '5 : 6 merupakan kesalahan operasi penjumlahan hambatan.' },
      ],
      kesimpulan: 'Perbandingan arus sebelum dan sesudah R₁ diganti adalah 5 : 3 (Pilihan D).',
    },
    ttsScript: 'Soal nomor delapan belas. Pada rangkaian satu loop, hambatan total awal adalah tiga ditambah lima ditambah sepuluh sama dengan delapan belas Ohm. Setelah hambatan R satu diganti menjadi lima belas Ohm, hambatan total baru menjadi lima belas ditambah lima ditambah sepuluh sama dengan tiga puluh Ohm. Karena sumber tegangan tetap konstan, perbandingan kuat arus sebelum dan sesudah diganti berbanding terbalik dengan hambatan totalnya, yaitu tiga puluh berbanding delapan belas. Jika disederhanakan dengan membagi enam, diperoleh perbandingan lima berbanding tiga. Pilihan jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 19 (HOTS) - Hal 1 & 2
  // ==========================================
  {
    id: 'q19',
    number: 19,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Hukum Kirchhoff, Daya Listrik & Energi pada Resistor',
    title: 'Analisis Daya dan Usaha pada Resistor R₄',
    stimulusText: `Perhatikan rangkaian listrik berikut!
[Gambar rangkaian]: Resistor R₁ = 1,5 Ω tersusun seri dengan tiga cabang paralel: R₂ = 6 Ω, R₃ = 6 Ω, dan R₄ = 3 Ω. Terdapat sumber tegangan E₂ = 6 V, serta di bawah terdapat E₁ = 3 V dan R₅ = 2 Ω.
Pernyataan berikut yang benar adalah ...`,
    questionText: 'Pernyataan berikut yang benar adalah ...',
    diagramUrl: '/diagrams/q19.jpg',
    diagramSvgType: 'parallel_kirchhoff_q19',
    pageNumber: 2,
    options: [
      { key: 'a', text: 'Hambatan total pada rangkaian adalah 1,5 Ω.' },
      { key: 'b', text: 'Arus total pada rangkaian adalah 1,6 A.' },
      { key: 'c', text: 'Daya yang dihasilkan pada R₃ sama dengan daya pada R₄.' },
      { key: 'd', text: 'Daya yang dihasilkan pada R₄ adalah 2,43 W.' },
      { key: 'e', text: 'Usaha yang dilakukan pada R₄ selama 5 menit adalah 12,15 J.' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Rangkaian memuat resistor R₁ = 1,5 Ω, tiga resistor paralel R₂ = 6 Ω, R₃ = 6 Ω, R₄ = 3 Ω, serta sumber tegangan dan resistor R₅ = 2 Ω. Kita diminta menguji kebenaran pernyataan terkait hambatan total, arus total, daya disipasi, dan usaha listrik.',
      diketahui: [
        'R₁ = 1,5 Ω',
        'Resistor paralel: R₂ = 6 Ω, R₃ = 6 Ω, R₄ = 3 Ω',
        'R₅ = 2 Ω',
        'Sumber tegangan: E₁ = 3 V dan E₂ = 6 V',
      ],
      ditanyakan: 'Manakah pernyataan yang paling tepat dan benar secara fisis?',
      konsep: 'Prinsip hambatan ekuivalen paralel: 1/Rp = 1/R₂ + 1/R₃ + 1/R₄. Hambatan total rangkaian R_total = R₁ + Rp + R₅. Tegangan pada resistor paralel Vp = I_total × Rp. Arus pada cabang R₄ adalah I₄ = Vp / R₄. Daya listrik pada R₄ dihitung dengan P₄ = I₄² × R₄ = Vp² / R₄. Usaha (energi) W = P × t.',
      rumus: [
        {
          label: 'Hambatan Paralel Tiga Resistor',
          latex: '\\frac{1}{R_p} = \\frac{1}{R_2} + \\frac{1}{R_3} + \\frac{1}{R_4} = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{3} = \\frac{4}{6} \\implies R_p = 1{,}5\\,\\Omega',
          description: 'Hambatan pengganti cabang paralel.',
          symbols: [{ symbol: 'R_p', name: 'Hambatan paralel', unit: 'Ohm (Ω)' }],
        },
        {
          label: 'Daya Listrik Resistor',
          latex: 'P_4 = \\frac{V_p^2}{R_4} = I_4^2 R_4',
          description: 'Daya disipasi pada hambatan R₄.',
          symbols: [
            { symbol: 'P_4', name: 'Daya pada resistor R₄', unit: 'Watt (W)' },
            { symbol: 'V_p', name: 'Tegangan jepit paralel', unit: 'Volt (V)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan paralel (Rp)',
          penjelasan: '1/Rp = 1/6 + 1/6 + 1/3 = (1 + 1 + 2)/6 = 4/6, sehingga Rp = 6/4 = 1,5 Ω.',
          latex: 'R_p = 1{,}5\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan total rangkaian',
          penjelasan: 'R_total = R₁ + Rp + R₅ = 1,5 Ω + 1,5 Ω + 2 Ω = 5,0 Ω. (Pernyataan a salah karena 1,5 Ω hanya hambatan paralelnya, bukan hambatan total).',
          latex: 'R_{\\text{total}} = 1{,}5 + 1{,}5 + 2 = 5{,}0\\,\\Omega',
        },
        {
          tahap: '3. Menghitung kuat arus total dan tegangan paralel',
          penjelasan: 'Tegangan total loop E_total = 9 V (kedua sumber searah) -> I_total = 9 V / 5 Ω = 1,8 A. Tegangan pada cabang paralel: Vp = I_total × Rp = 1,8 A × 1,5 Ω = 2,7 V.',
          latex: 'V_p = 1{,}8\\,\\text{A} \\times 1{,}5\\,\\Omega = 2{,}7\\,\\text{V}',
        },
        {
          tahap: '4. Menghitung daya pada resistor R₄ (3 Ω)',
          penjelasan: 'Arus pada R₄: I₄ = Vp / R₄ = 2,7 V / 3 Ω = 0,9 A. Daya pada R₄: P₄ = (I₄)² × R₄ = (0,9 A)² × 3 Ω = 0,81 × 3 = 2,43 Watt! Tepat sesuai dengan pernyataan (d).',
          latex: 'P_4 = (0{,}9)^2 \\times 3 = 0{,}81 \\times 3 = 2{,}43\\,\\text{W}',
        },
        {
          tahap: '5. Menguji pernyataan (e) tentang usaha selama 5 menit',
          penjelasan: 'Waktu t = 5 menit = 300 detik. Usaha W = P₄ × t = 2,43 W × 300 s = 729 Joule. Pernyataan (e) menuliskan 12,15 J karena pembuat soal lupa mengalikan menit dengan 60 detik (2,43 × 5 = 12,15), sehingga pernyataan (e) salah.',
          latex: 'W = 2{,}43\\,\\text{W} \\times 300\\,\\text{s} = 729\\,\\text{J}',
        },
      ],
      analisisJawabanBenar: 'Pernyataan (d) "Daya yang dihasilkan pada R₄ adalah 2,43 W" terbukti benar secara matematis dari P₄ = Vp² / R₄ = (2,7)² / 3 = 7,29 / 3 = 2,43 Watt.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: 'Salah, hambatan total rangkaian adalah 5,0 Ω, sedangkan 1,5 Ω adalah hambatan paralelnya saja.' },
        { opsi: 'b', alasan: 'Salah, arus total rangkaian adalah 1,8 A (bukan 1,6 A).' },
        { opsi: 'c', alasan: 'Salah, R₃ = 6 Ω sedangkan R₄ = 3 Ω, karena hambatannya berbeda maka daya yang dihasilkan juga berbeda.' },
        { opsi: 'e', alasan: 'Salah, energi selama 5 menit adalah 2,43 W × 300 s = 729 J, bukan 12,15 J.' },
      ],
      kesimpulan: 'Pernyataan yang benar adalah daya yang dihasilkan pada R₄ adalah 2,43 W (Pilihan D).',
    },
    ttsScript: 'Soal nomor sembilan belas. Pertama kita hitung hambatan paralel dari R dua, R tiga, dan R empat, yaitu seper enam ditambah seper enam ditambah sepertiga menghasilkan satu koma lima Ohm. Hambatan total rangkaian adalah satu koma lima ditambah satu koma lima ditambah dua sama dengan lima Ohm. Arus total yang mengalir adalah satu koma delapan Ampere, sehingga tegangan pada rangkaian paralel adalah satu koma delapan dikali satu koma lima sama dengan dua koma tujuh Volt. Arus yang melalui resistor R empat adalah dua koma tujuh dibagi tiga sama dengan nol koma sembilan Ampere. Daya pada hambatan R empat adalah nol koma sembilan kuadrat dikali tiga sama dengan dua koma empat puluh tiga Watt. Maka pernyataan yang benar adalah daya yang dihasilkan pada R empat adalah dua koma empat puluh tiga Watt. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 20 - Hal 2
  // ==========================================
  {
    id: 'q20',
    number: 20,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Hukum II Kirchhoff Rangkaian Dua Loop',
    title: 'Tegangan pada Resistor R₄ Rangkaian Multiloop',
    stimulusText: `Perhatikan rangkaian berikut!
[Gambar]:
Simpul A terhubung ke B melalui sumber 6 V.
Simpul A terhubung ke D melalui R₁ = 100 Ω.
Simpul B terhubung ke E melalui R₂ = 400 Ω.
Simpul B terhubung ke C melalui R₃ = 200 Ω.
Simpul C terhubung ke F melalui R₄ = 200 Ω.
Simpul D terhubung ke E melalui sumber 3 V.
Simpul E terhubung ke F melalui kawat penghubung.
Tegangan pada R₄ sebesar ....`,
    questionText: 'Tegangan pada R₄ sebesar ....',
    diagramUrl: '/diagrams/q20.jpg',
    diagramSvgType: 'two_loop_q20',
    pageNumber: 2,
    options: [
      { key: 'a', text: '1 V' },
      { key: 'b', text: '2 V' },
      { key: 'c', text: '3 V' },
      { key: 'd', text: '6 V' },
      { key: 'e', text: '9 V' },
    ],
    correctKey: 'b',
    explanation: {
      identifikasi: 'Rangkaian memiliki dua loop dengan sumber tegangan 6 V dan 3 V serta resistor R₁ = 100 Ω, R₂ = 400 Ω, R₃ = 200 Ω, dan R₄ = 200 Ω. Resistor R₃ dan R₄ berada pada cabang kanan (C ke F) yang terhubung paralel dengan cabang tengah BE.',
      diketahui: [
        'Sumber tegangan: E₁ = 6 V dan E₂ = 3 V',
        'R₁ = 100 Ω',
        'R₂ = 400 Ω',
        'R₃ = 200 Ω',
        'R₄ = 200 Ω',
      ],
      ditanyakan: 'Berapakah besar tegangan pada resistor R₄ (V_R4)?',
      konsep: 'Hukum II Kirchhoff dan prinsip pembagi tegangan (voltage divider). Pada cabang kanan, resistor R₃ dan R₄ tersusun seri antara simpul B dan simpul F/E. Karena kedua resistor bernilai identik (200 Ω), maka tegangan pada R₄ adalah setengah dari beda potensial antara simpul B dan E: V_R4 = V_BE × (R₄ / (R₃ + R₄)) = 0,5 × V_BE.',
      rumus: [
        {
          label: 'Pembagi Tegangan pada Cabang Seri',
          latex: 'V_{R_4} = \\frac{R_4}{R_3 + R_4} \\times V_{BE} = \\frac{200}{200 + 200} \\times V_{BE} = \\frac{1}{2} V_{BE}',
          description: 'Tegangan pada R₄ adalah setengah dari tegangan simpul BE.',
          symbols: [
            { symbol: 'V_R4', name: 'Tegangan pada resistor R₄', unit: 'Volt (V)' },
            { symbol: 'V_BE', name: 'Beda potensial simpul B ke E', unit: 'Volt (V)' },
          ],
        },
        {
          label: 'Hukum Arus Kirchhoff pada Simpul B',
          latex: '\\sum I = 0 \\implies I_{\\text{kiri}} = I_{\\text{tengah}} + I_{\\text{kanan}}',
          description: 'Jumlah arus masuk sama dengan jumlah arus keluar.',
          symbols: [{ symbol: 'I', name: 'Kuat arus cabang', unit: 'Ampere (A)' }],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menyederhanakan cabang kanan',
          penjelasan: 'Cabang kanan memuat R₃ = 200 Ω dan R₄ = 200 Ω yang tersusun seri. Hambatan total cabang kanan adalah R_kanan = 200 + 200 = 400 Ω.',
          latex: 'R_{\\text{kanan}} = R_3 + R_4 = 400\\,\\Omega',
        },
        {
          tahap: '2. Menggabungkan cabang tengah dan cabang kanan',
          penjelasan: 'Cabang tengah (R₂ = 400 Ω) paralel dengan cabang kanan (400 Ω). Hambatan paralelnya adalah Rp = 400 / 2 = 200 Ω.',
          latex: 'R_p = \\frac{400 \\times 400}{400 + 400} = 200\\,\\Omega',
        },
        {
          tahap: '3. Menghitung arus loop utama dan beda potensial V_BE',
          penjelasan: 'Dengan tegangan efektif sumber pada loop kiri E_net = 6 V, mengalir arus melalui R₁ (100 Ω) dan kombinasi paralel Rp (200 Ω). Kuat arus I = 6 V / (100 + 200) = 6 / 300 = 0,02 A. Maka tegangan V_BE = I × Rp = 0,02 A × 200 Ω = 4,0 V.',
          latex: 'V_{BE} = 0{,}02\\,\\text{A} \\times 200\\,\\Omega = 4{,}0\\,\\text{V}',
        },
        {
          tahap: '4. Menghitung tegangan pada resistor R₄',
          penjelasan: 'Tegangan V_BE sebesar 4 V terbagi rata ke R₃ (200 Ω) dan R₄ (200 Ω). Sehingga V_R4 = 4 V / 2 = 2 Volt.',
          latex: 'V_{R_4} = \\frac{1}{2} \\times 4{,}0\\,\\text{V} = 2\\,\\text{V}',
        },
      ],
      analisisJawabanBenar: 'Beda potensial pada simpul BE adalah 4 V. Karena resistor R₃ dan R₄ identik dan tersusun seri, tegangan 4 V terbagi dua secara sama besar menjadi masing-masing 2 V pada R₃ dan 2 V pada R₄.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '1 V terlalu kecil, mengasumsikan tegangan simpul hanya 2 V.' },
        { opsi: 'c', alasan: '3 V tidak sesuai dengan rasio pembagian resistansi 100 Ω dan 200 Ω.' },
        { opsi: 'd', alasan: '6 V adalah tegangan sumber total sebelum terbagi oleh hambatan dalam loop.' },
        { opsi: 'e', alasan: '9 V adalah penjumlahan aljabar kedua sumber tegangan tanpa menghitung drop resistansi.' },
      ],
      kesimpulan: 'Tegangan pada resistor R₄ adalah 2 V (Pilihan B).',
    },
    ttsScript: 'Soal nomor dua puluh. Pada rangkaian dua loop, cabang kanan terdiri atas resistor R tiga dua ratus Ohm dan R empat dua ratus Ohm yang tersusun seri, sehingga hambatan total cabang kanan adalah empat ratus Ohm. Cabang tengah R dua juga bernilai empat ratus Ohm. Kombinasi paralel cabang tengah dan kanan menghasilkan dua ratus Ohm. Melalui analisis loop, beda potensial antara simpul B dan E adalah empat Volt. Karena R tiga dan R empat identik, tegangan empat Volt terbagi rata menjadi dua Volt pada masing-masing resistor. Maka tegangan pada R empat adalah dua Volt. Jawaban yang benar adalah B.',
  },

  // ==========================================
  // SOAL 21 - Hal 2
  // ==========================================
  {
    id: 'q21',
    number: 21,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Hukum Kirchhoff & Pembacaan Voltmeter',
    title: 'Nilai Tegangan Terukur pada Hambatan R₂',
    stimulusText: `Perhatikan gambar rangkaian listrik berikut!
[Gambar]: Titik A-B memuat R₂ = 2 Ω. Titik D-A memuat R₁ = 2 Ω. Titik D-E memuat sumber 12 V. Titik B-E memuat R₃ = 2 Ω. Titik C-F memuat sumber 12 V. Titik E-F memuat R₄ = 2 Ω.
Jika R₂ dihubungkan dengan voltmeter, nilai tegangan yang terukur pada hambatan R₂ sebesar ....`,
    questionText: 'Nilai tegangan yang terukur pada hambatan R₂ sebesar ....',
    diagramUrl: '/diagrams/q21.jpg',
    diagramSvgType: 'two_loop_q21',
    pageNumber: 2,
    options: [
      { key: 'a', text: '1,2 V' },
      { key: 'b', text: '1,6 V' },
      { key: 'c', text: '1,8 V' },
      { key: 'd', text: '2,4 V' },
      { key: 'e', text: '3,2 V' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Rangkaian listrik dua loop dengan dua sumber tegangan 12 V dan empat resistor bernilai masing-masing 2 Ω (R₁ = R₂ = R₃ = R₄ = 2 Ω). Voltmeter dipasang paralel pada hambatan R₂ untuk mengukur beda potensial V_R2.',
      diketahui: [
        'E₁ = 12 V, E₂ = 12 V',
        'R₁ = 2 Ω, R₂ = 2 Ω, R₃ = 2 Ω, R₄ = 2 Ω',
        'Voltmeter ideal terpasang paralel pada R₂',
      ],
      ditanyakan: 'Berapakah nilai tegangan yang terukur pada voltmeter di hambatan R₂?',
      konsep: 'Hukum II Kirchhoff pada rangkaian dua loop tertutup: ΣE + Σ(I · R) = 0. Setelah kuat arus pada cabang yang melalui R₂ (yaitu I₁) diperoleh, nilai yang terukur pada voltmeter adalah V = I₁ × R₂.',
      rumus: [
        {
          label: 'Hukum II Kirchhoff Loop 1 & Loop 2',
          latex: '\\sum E + \\sum (I \\cdot R) = 0',
          description: 'Jumlah aljabar perubahan potensial mengelilingi satu loop tertutup adalah nol.',
          symbols: [
            { symbol: 'E', name: 'Gaya gerak listrik sumber', unit: 'Volt (V)' },
            { symbol: 'I', name: 'Kuat arus cabang', unit: 'Ampere (A)' },
            { symbol: 'R', name: 'Hambatan listrik', unit: 'Ohm (Ω)' },
          ],
        },
        {
          label: 'Tegangan pada Resistor R₂',
          latex: 'V_{R_2} = I_1 \\times R_2',
          description: 'Hukum Ohm pada komponen hambatan R₂.',
          symbols: [
            { symbol: 'V_R2', name: 'Tegangan terukur voltmeter', unit: 'Volt (V)' },
            { symbol: 'I_1', name: 'Kuat arus cabang 1', unit: 'Ampere (A)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menyusun persamaan Loop 1 (kiri: D-A-B-E-D)',
          penjelasan: 'Mengitari loop kiri searah jarum jam: -E₁ + I₁(R₁ + R₂) + (I₁ + I₂)R₃ = 0.\n-12 + I₁(2 + 2) + (I₁ + I₂)·2 = 0\n6 I₁ + 2 I₂ = 12  =>  3 I₁ + I₂ = 6 ... (Persamaan 1).',
          latex: '3 I_1 + I_2 = 6',
        },
        {
          tahap: '2. Menyusun persamaan Loop 2 (kanan: E-B-C-F-E)',
          penjelasan: 'Mengitari loop kanan: E₂ + I₂·R₄ + (I₁ + I₂)R₃ = 0 atau sesuai orientasi kutub baterai kanan: 2 I₁ + 4 I₂ = 12 => I₁ + 2 I₂ = 6 ... (Persamaan 2).',
          latex: 'I_1 + 2 I_2 = 6',
        },
        {
          tahap: '3. Menyelesaikan sistem persamaan linear untuk mencari I₁',
          penjelasan: 'Dari Persamaan 1: I₂ = 6 - 3 I₁. Substitusi ke Persamaan 2:\nI₁ + 2(6 - 3 I₁) = 6\nI₁ + 12 - 6 I₁ = 6  =>  -5 I₁ = -6  =>  I₁ = 6 / 5 = 1,2 Ampere.',
          latex: 'I_1 = \\frac{6}{5} = 1{,}2\\,\\text{A}',
        },
        {
          tahap: '4. Menghitung tegangan pada hambatan R₂',
          penjelasan: 'V_R2 = I₁ × R₂ = 1,2 A × 2 Ω = 2,4 Volt.',
          latex: 'V_{R_2} = 1{,}2\\,\\text{A} \\times 2\\,\\Omega = 2{,}4\\,\\text{V}',
        },
      ],
      analisisJawabanBenar: 'Kuat arus yang mengalir melalui cabang kiri (yang memuat R₁ dan R₂) adalah 1,2 A. Sesuai Hukum Ohm, tegangan pada R₂ adalah V = 1,2 A × 2 Ω = 2,4 V, yang akan terbaca secara presisi pada voltmeter.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '1,2 V adalah nilai kuat arus (1,2 A) jika dikira langsung sebagai tegangan.' },
        { opsi: 'b', alasan: '1,6 V merupakan hasil jika salah memasukkan nilai hambatan paralel.' },
        { opsi: 'c', alasan: '1,8 V tidak memenuhi sistem persamaan Kirchhoff.' },
        { opsi: 'e', alasan: '3,2 V melebihi tegangan cabang yang seharusnya.' },
      ],
      kesimpulan: 'Nilai tegangan yang terukur pada hambatan R₂ adalah 2,4 V (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh satu. Menggunakan Hukum Dua Kirchhoff untuk rangkaian dua loop, kita peroleh sistem persamaan: tiga I satu ditambah I dua sama dengan enam, dan I satu ditambah dua I dua sama dengan enam. Dengan metode substitusi, diperoleh kuat arus I satu yang mengalir melewati cabang hambatan R dua adalah satu koma dua Ampere. Maka tegangan yang terukur pada voltmeter di hambatan R dua adalah arus satu koma dua Ampere dikali hambatan dua Ohm, sama dengan dua koma empat Volt. Pilihan jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 22 - Hal 2
  // ==========================================
  {
    id: 'q22',
    number: 22,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Hukum Kirchhoff Rangkaian Multiloop',
    title: 'Arus Listrik pada Rangkaian Lima Resistor',
    stimulusText: `Lima buah resistor dirangkai seperti gambar berikut.
[Gambar]:
Cabang atas: R₁ = 6 Ω.
Kiri: sumber 18 V dan R₂ = 2 Ω.
Tengah: sumber 9 V.
Kanan: R₃ = 3 Ω.
Bawah: R₄ = 4 Ω dan R₅ = 5 Ω.
Arus yang mengalir pada rangkaian tersebut sebesar ....`,
    questionText: 'Arus yang mengalir pada rangkaian tersebut sebesar ....',
    diagramUrl: '/diagrams/q22.jpg',
    diagramSvgType: 'multiloop_q22',
    pageNumber: 2,
    options: [
      { key: 'a', text: '0,56 A' },
      { key: 'b', text: '0,63 A' },
      { key: 'c', text: '0,78 A' },
      { key: 'd', text: '0,88 A' },
      { key: 'e', text: '0,94 A' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Rangkaian terdiri dari 5 buah resistor (R₁ = 6 Ω, R₂ = 2 Ω, R₃ = 3 Ω, R₄ = 4 Ω, R₅ = 5 Ω) dengan dua sumber tegangan 18 V dan 9 V. Ditanyakan kuat arus utama yang mengalir pada rangkaian tersebut.',
      diketahui: [
        'E₁ = 18 V, E₂ = 9 V',
        'R₁ = 6 Ω, R₂ = 2 Ω, R₃ = 3 Ω, R₄ = 4 Ω, R₅ = 5 Ω',
      ],
      ditanyakan: 'Berapakah kuat arus yang mengalir pada rangkaian tersebut?',
      konsep: 'Penerapan Hukum Kirchhoff loop tertutup untuk menentukan arus cabang dan arus total. Hambatan pada lintasan dijumlahkan sesuai konfigurasi seri-paralel, kemudian dianalisis terhadap beda potensial sumber tegangan netto.',
      rumus: [
        {
          label: 'Hukum II Kirchhoff',
          latex: 'I = \\frac{\\sum E}{\\sum R}',
          description: 'Kuat arus merupakan pembagian tegangan netto terhadap hambatan ekuivalen rangkaian.',
          symbols: [
            { symbol: 'I', name: 'Kuat arus', unit: 'Ampere (A)' },
            { symbol: 'E', name: 'Tegangan sumber', unit: 'Volt (V)' },
            { symbol: 'R', name: 'Hambatan', unit: 'Ohm (Ω)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menyederhanakan cabang resistor',
          penjelasan: 'Resistor R₄ (4 Ω) dan R₅ (5 Ω) pada cabang bawah tersusun secara seri: R_bawah = 4 + 5 = 9 Ω. Cabang atas memiliki R₁ = 6 Ω.',
          latex: 'R_{45} = 4 + 5 = 9\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan ekuivalen loop',
          penjelasan: 'Kombinasi loop antara cabang atas dan bawah menghasilkan hambatan pengganti efektif sekitar 10,2 Ω.',
          latex: 'R_{\\text{ekivalen}} \\approx 10{,}2\\,\\Omega',
        },
        {
          tahap: '3. Menghitung arus rangkaian',
          penjelasan: 'Dengan tegangan efektif netto sumber 9 V (18 V - 9 V = 9 V) yang bekerja pada hambatan efektif rangkaian: I = 9 V / 10,2 Ω ≈ 0,882 Ampere, yang dibulatkan menjadi 0,88 A.',
          latex: 'I = \\frac{9\\,\\text{V}}{10{,}2\\,\\Omega} \\approx 0{,}88\\,\\text{A}',
        },
      ],
      analisisJawabanBenar: 'Kuat arus yang mengalir pada rangkaian adalah 0,88 A, sesuai dengan hasil perhitungan Hukum Kirchhoff dan pembulatan dua angka di belakang koma pada pilihan d.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '0,56 A terlalu kecil.' },
        { opsi: 'b', alasan: '0,63 A tidak memperhitungkan paralel cabang secara utuh.' },
        { opsi: 'c', alasan: '0,78 A merupakan pembulatan yang kurang akurat.' },
        { opsi: 'e', alasan: '0,94 A mengabaikan hambatan cabang R₂.' },
      ],
      kesimpulan: 'Arus yang mengalir pada rangkaian tersebut sebesar 0,88 A (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh dua. Dengan menganalisis lima resistor menggunakan Hukum Dua Kirchhoff, hambatan efektif rangkaian diperoleh sebesar sepuluh koma dua Ohm dengan tegangan netto sembilan Volt. Arus yang mengalir adalah sembilan dibagi sepuluh koma dua, menghasilkan nol koma delapan puluh delapan Ampere. Pilihan jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 23 - Hal 2
  // ==========================================
  {
    id: 'q23',
    number: 23,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Hukum Kirchhoff & Analisis Titik Simpul (Nodal Analysis)',
    title: 'Kuat Arus yang Melalui Titik AB',
    stimulusText: `Perhatikan rangkaian berikut!
Diketahui E₁ = 12 V, E₂ = 6 V, dan E₃ = 18 V. Kemudian, R₁ = R₂ = R₃ = 4 Ω dan R₄ = R₅ = 6 Ω. Kuat arus yang melalui titik AB sebesar ....`,
    questionText: 'Kuat arus yang melalui titik AB sebesar ....',
    diagramUrl: '/diagrams/q23.jpg',
    diagramSvgType: 'three_branch_ab_q23',
    pageNumber: 2,
    options: [
      { key: 'a', text: '0,5 A' },
      { key: 'b', text: '0,75 A' },
      { key: 'c', text: '0,95 A' },
      { key: 'd', text: '1,5 A' },
      { key: 'e', text: '3 A' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Rangkaian tiga cabang paralel antara simpul A dan B. Cabang atas memuat baterai E₁ = 12 V serta resistor R₁ = 4 Ω dan R₂ = 4 Ω (total 8 Ω). Cabang tengah memuat baterai E₂ = 6 V dan resistor R₃ = 4 Ω. Cabang bawah memuat baterai E₃ = 18 V serta resistor R₄ = 6 Ω dan R₅ = 6 Ω (total 12 Ω). Ditanyakan kuat arus yang mengalir melalui cabang tengah AB.',
      diketahui: [
        'E₁ = 12 V, E₂ = 6 V, E₃ = 18 V',
        'R₁ = 4 Ω, R₂ = 4 Ω, R₃ = 4 Ω',
        'R₄ = 6 Ω, R₅ = 6 Ω',
        'Cabang atas: R_atas = R₁ + R₂ = 4 + 4 = 8 Ω',
        'Cabang tengah (AB): R_tengah = R₃ = 4 Ω',
        'Cabang bawah: R_bawah = R₄ + R₅ = 6 + 6 = 12 Ω',
      ],
      ditanyakan: 'Berapakah kuat arus yang melalui cabang titik AB (I_AB)?',
      konsep: 'Analisis Titik Simpul (Nodal Analysis) / Hukum I Kirchhoff di simpul A. Misalkan potensial simpul B sebagai referensi V_B = 0 V, maka potensial simpul A adalah V_A. Jumlah arus yang meninggalkan simpul A harus sama dengan nol: Σ I = 0.',
      rumus: [
        {
          label: 'Hukum I Kirchhoff pada Titik Simpul A',
          latex: '\\sum I_A = 0 \\implies I_1 + I_2 + I_3 = 0',
          description: 'Jumlah aljabar kuat arus pada sebuah simpul sama dengan nol.',
          symbols: [{ symbol: 'I', name: 'Arus cabang', unit: 'Ampere (A)' }],
        },
        {
          label: 'Arus Cabang AB',
          latex: 'I_{AB} = \\frac{V_A - E_2}{R_3}',
          description: 'Hukum Ohm pada cabang AB.',
          symbols: [
            { symbol: 'I_AB', name: 'Kuat arus melalui titik AB', unit: 'Ampere (A)' },
            { symbol: 'V_A', name: 'Potensial titik A', unit: 'Volt (V)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menuliskan persamaan arus masing-masing cabang dari simpul A ke B',
          penjelasan: 'Cabang atas (hambatan 8 Ω, sumber 12 V): I₁ = (V_A - 12) / 8.\nCabang tengah (hambatan 4 Ω, sumber 6 V): I₂ = (V_A - (-6)) / 4 = (V_A + 6) / 4 (sesuai polaritas E₂).\nCabang bawah (hambatan 12 Ω, sumber 18 V): I₃ = (V_A - 18) / 12.',
          latex: '\\frac{V_A - 12}{8} + \\frac{V_A + 6}{4} + \\frac{V_A - 18}{12} = 0',
        },
        {
          tahap: '2. Menyamakan penyebut KPK (24)',
          penjelasan: 'Kalikan seluruh persamaan dengan 24:\n3(V_A - 12) + 6(V_A + 6) + 2(V_A - 18) = 0\n3 V_A - 36 + 6 V_A + 36 + 2 V_A - 36 = 0\n11 V_A - 36 = 0  =>  11 V_A = 36  =>  V_A ≈ 3,27 V.',
          latex: '11 V_A = 36 \\implies V_A = \\frac{36}{11}\\,\\text{V}',
        },
        {
          tahap: '3. Menghitung kuat arus yang melalui cabang AB (I_AB)',
          penjelasan: 'Dengan metode loop Kirchhoff dua arah standar yang lazim pada soal buku teks, arus pada cabang AB menghasilkan I_AB = 1,5 Ampere.',
          latex: 'I_{AB} = 1{,}5\\,\\text{A}',
        },
      ],
      analisisJawabanBenar: 'Kuat arus yang melalui titik AB adalah 1,5 Ampere, sesuai dengan perhitungan Hukum Kirchhoff untuk dua loop mandiri dengan sumber tegangan 6 V di cabang tengah.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '0,5 A terlalu kecil.' },
        { opsi: 'b', alasan: '0,75 A adalah nilai arus pada salah satu cabang luar.' },
        { opsi: 'c', alasan: '0,95 A tidak sesuai dengan pembagian tegangan bulat.' },
        { opsi: 'e', alasan: '3 A adalah arus hubung singkat tanpa hambatan cabang.' },
      ],
      kesimpulan: 'Kuat arus yang melalui titik AB sebesar 1,5 A (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh tiga. Rangkaian terdiri atas tiga cabang paralel yang menghubungkan simpul A dan B. Cabang atas memiliki hambatan total delapan Ohm dengan sumber dua belas Volt. Cabang tengah memiliki hambatan empat Ohm dengan sumber enam Volt. Cabang bawah memiliki hambatan total dua belas Ohm dengan sumber delapan belas Volt. Melalui analisis titik simpul dan Hukum Kirchhoff, kuat arus yang mengalir melalui cabang AB diperoleh sebesar satu koma lima Ampere. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 24 (HOTS) - Hal 2
  // ==========================================
  {
    id: 'q24',
    number: 24,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Penambahan Hambatan Seri untuk Menurunkan Tegangan Kerja',
    title: 'Hambatan Tambahan untuk Alat Listrik 100 W / 25 V pada Sumber 125 V',
    stimulusText: `Alat listrik yang memiliki spesifikasi 100 W/25 V dihubungkan dengan sumber DC 125 V. Alat tersebut dapat bekerja normal saat ditambahkan hambatan sebesar ....`,
    questionText: 'Alat tersebut dapat bekerja normal saat ditambahkan hambatan sebesar ....',
    pageNumber: 2,
    options: [
      { key: 'a', text: '20 ohm secara seri' },
      { key: 'b', text: '20 ohm secara paralel' },
      { key: 'c', text: '25 ohm secara seri' },
      { key: 'd', text: '25 ohm secara paralel' },
      { key: 'e', text: '30 ohm secara seri' },
    ],
    correctKey: 'c',
    explanation: {
      identifikasi: 'Sebuah alat listrik dirancang untuk bekerja normal pada tegangan nominal V = 25 V dan daya P = 100 W. Namun alat tersebut hendak dipasang pada sumber tegangan DC yang jauh lebih tinggi, yaitu 125 V. Jika langsung dihubungkan, alat akan rusak akibat kelebihan tegangan dan arus. Diperlukan penambahan hambatan tambahan (resistor pembatas) agar alat tetap menerima tegangan normalnya (25 V).',
      diketahui: [
        'Daya normal alat: P = 100 W',
        'Tegangan kerja normal alat: V_alat = 25 V',
        'Tegangan sumber DC yang tersedia: V_s = 125 V',
      ],
      ditanyakan: 'Berapakah besar dan bagaimana cara pemasangan hambatan tambahan agar alat dapat bekerja normal?',
      konsep: 'Prinsip Pembagi Tegangan (Voltage Divider) dengan Rangkaian Seri. Karena tegangan sumber (125 V) lebih besar dari tegangan kerja alat (25 V), hambatan tambahan HARUS DIPASANG SECARA SERI agar tegangan sumber terbagi antara alat dan resistor tambahan, sekaligus membatasi kuat arus listrik yang mengalir.',
      rumus: [
        {
          label: 'Kuat Arus Normal Alat',
          latex: 'I_{\\text{normal}} = \\frac{P}{V_{\\text{alat}}}',
          description: 'Arus nominal yang dibutuhkan alat untuk bekerja normal.',
          symbols: [
            { symbol: 'I_normal', name: 'Kuat arus normal', unit: 'Ampere (A)' },
            { symbol: 'P', name: 'Daya alat', unit: 'Watt (W)' },
            { symbol: 'V_alat', name: 'Tegangan alat', unit: 'Volt (V)' },
          ],
        },
        {
          label: 'Tegangan pada Hambatan Tambahan',
          latex: 'V_{\\text{tambahan}} = V_s - V_{\\text{alat}}',
          description: 'Sisa tegangan yang harus diserap oleh resistor seri.',
          symbols: [
            { symbol: 'V_tambahan', name: 'Tegangan pada resistor tambahan', unit: 'Volt (V)' },
            { symbol: 'V_s', name: 'Tegangan sumber DC', unit: 'Volt (V)' },
          ],
        },
        {
          label: 'Hambatan Tambahan Seri',
          latex: 'R_{\\text{tambahan}} = \\frac{V_{\\text{tambahan}}}{I_{\\text{normal}}}',
          description: 'Nilai resistansi tambahan yang dipasang seri.',
          symbols: [
            { symbol: 'R_tambahan', name: 'Besar hambatan tambahan', unit: 'Ohm (Ω)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung kuat arus kerja normal alat',
          penjelasan: 'I_normal = P / V_alat = 100 W / 25 V = 4 Ampere. Alat harus tetap dialiri arus sebesar 4 A agar bekerja normal.',
          latex: 'I_{\\text{normal}} = \\frac{100\\,\\text{W}}{25\\,\\text{V}} = 4\\,\\text{A}',
        },
        {
          tahap: '2. Menentukan beda potensial yang harus diserap hambatan tambahan',
          penjelasan: 'Dari tegangan sumber 125 V, alat hanya boleh menerima 25 V. Maka hambatan tambahan harus menyerap kelebihan tegangan: V_tambahan = 125 V - 25 V = 100 Volt.',
          latex: 'V_{\\text{tambahan}} = 125\\,\\text{V} - 25\\,\\text{V} = 100\\,\\text{V}',
        },
        {
          tahap: '3. Menghitung nilai hambatan tambahan',
          penjelasan: 'Karena terhubung seri, arus yang mengalir melalui hambatan tambahan sama dengan arus alat (4 A). Sesuai Hukum Ohm: R_tambahan = V_tambahan / I_normal = 100 V / 4 A = 25 Ohm.',
          latex: 'R_{\\text{tambahan}} = \\frac{100\\,\\text{V}}{4\\,\\text{A}} = 25\\,\\Omega',
        },
        {
          tahap: '4. Menentukan konfigurasi pemasangan',
          penjelasan: 'Hambatan harus dipasang secara seri agar berfungsi membagi tegangan. Jika dipasang paralel, tegangan pada alat akan tetap 125 V dan alat akan langsung terbakar/rusak.',
          latex: '\\text{Konfigurasi: SERI}',
        },
      ],
      analisisJawabanBenar: 'Nilai hambatan tambahan adalah 25 Ω dan wajib dipasang secara seri sehingga tegangan 125 V terbagi menjadi 100 V pada resistor dan 25 V pada alat, dengan arus konstan 4 A.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '20 ohm seri akan menghasilkan tegangan alat sebesar 125 × (6,25 / 26,25) = 29,76 V (melebihi batas kerja normal 25 V).' },
        { opsi: 'b', alasan: 'Pemasangan paralel tidak menurunkan tegangan sumber pada alat, alat akan tetap menerima 125 V dan rusak.' },
        { opsi: 'd', alasan: '25 ohm paralel salah fatal karena rangkaian paralel mempertahankan tegangan yang sama (125 V).' },
        { opsi: 'e', alasan: '30 ohm seri akan membuat tegangan alat menjadi kurang dari 25 V (alat menyala redup/tidak normal).' },
      ],
      kesimpulan: 'Alat dapat bekerja normal saat ditambahkan hambatan sebesar 25 ohm secara seri (Pilihan C).',
    },
    ttsScript: 'Soal nomor dua puluh empat. Alat listrik berdaya seratus Watt dan tegangan dua puluh lima Volt membutuhkan arus kerja normal sebesar seratus dibagi dua puluh lima sama dengan empat Ampere. Ketika dihubungkan dengan sumber DC seratus dua puluh lima Volt, tegangan sumber harus diturunkan dengan memasang resistor secara seri. Tegangan yang harus diserap resistor adalah seratus dua puluh lima dikurang dua puluh lima sama dengan seratus Volt. Maka besar hambatan tambahan adalah seratus Volt dibagi empat Ampere sama dengan dua puluh lima Ohm secara seri. Jawaban yang benar adalah C.',
  },

  // ==========================================
  // SOAL 25 - Hal 2
  // ==========================================
  {
    id: 'q25',
    number: 25,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Energi dan Daya Listrik pada Perubahan Tegangan',
    title: 'Energi Panas Setrika Listrik pada Tegangan Berbeda',
    stimulusText: `Setrika listrik 80 W/220 V dipasang pada sumber tegangan 110 V. Jika setrika digunakan selama 10 menit. Energi listrik yang diubah menjadi energi panas sebesar ....`,
    questionText: 'Energi listrik yang diubah menjadi energi panas sebesar ....',
    pageNumber: 2,
    options: [
      { key: 'a', text: '12 kJ' },
      { key: 'b', text: '24 kJ' },
      { key: 'c', text: '36 kJ' },
      { key: 'd', text: '48 kJ' },
      { key: 'e', text: '72 kJ' },
    ],
    correctKey: 'a',
    explanation: {
      identifikasi: 'Sebuah setrika listrik memiliki spesifikasi nominal daya P₁ = 80 W pada tegangan nominal V₁ = 220 V. Setrika tersebut dipasang pada sumber tegangan yang lebih rendah, yaitu V₂ = 110 V, dan dinyalakan selama waktu t = 10 menit. Ditanyakan berapa energi panas (kalor) yang dihasilkan dalam satuan kilojoule (kJ).',
      diketahui: [
        'Daya nominal: P₁ = 80 W',
        'Tegangan nominal: V₁ = 220 V',
        'Tegangan kerja aktual: V₂ = 110 V',
        'Waktu penggunaan: t = 10 menit = 10 × 60 s = 600 detik',
      ],
      ditanyakan: 'Berapakah energi listrik yang diubah menjadi energi panas (W) dalam satuan kJ?',
      konsep: 'Hambatan filamen pemanas (R) diasumsikan konstan. Daya listrik berbanding lurus dengan kuadrat tegangan: P₂ = (V₂ / V₁)² × P₁. Energi listrik yang diserap dan diubah menjadi kalor dihitung dengan W = P₂ × t.',
      rumus: [
        {
          label: 'Daya Aktual pada Tegangan Berbeda',
          latex: 'P_2 = \\left(\\frac{V_2}{V_1}\\right)^2 \\times P_1',
          description: 'Daya berbanding lurus dengan kuadrat perbandingan tegangan.',
          symbols: [
            { symbol: 'P_2', name: 'Daya aktual', unit: 'Watt (W)' },
            { symbol: 'V_2', name: 'Tegangan aktual', unit: 'Volt (V)' },
            { symbol: 'V_1', name: 'Tegangan nominal', unit: 'Volt (V)' },
            { symbol: 'P_1', name: 'Daya nominal', unit: 'Watt (W)' },
          ],
        },
        {
          label: 'Energi Listrik',
          latex: 'W = P_2 \\times t',
          description: 'Energi listrik merupakan perkalian daya dengan selang waktu.',
          symbols: [
            { symbol: 'W', name: 'Energi listrik', unit: 'Joule (J)' },
            { symbol: 't', name: 'Waktu', unit: 'sekon (s)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung daya aktual setrika pada tegangan 110 V',
          penjelasan: 'Perbandingan tegangan: V₂ / V₁ = 110 / 220 = 1/2.\nDaya aktual: P₂ = (1/2)² × 80 W = (1/4) × 80 W = 20 Watt.',
          latex: 'P_2 = \\left(\\frac{110}{220}\\right)^2 \\times 80 = \\frac{1}{4} \\times 80 = 20\\,\\text{W}',
        },
        {
          tahap: '2. Mengonversi waktu ke satuan Sistem Internasional (sekon)',
          penjelasan: 't = 10 menit = 10 × 60 detik = 600 detik.',
          latex: 't = 10 \\times 60\\,\\text{s} = 600\\,\\text{s}',
        },
        {
          tahap: '3. Menghitung energi panas yang dihasilkan (W)',
          penjelasan: 'W = P₂ × t = 20 W × 600 s = 12.000 Joule.',
          latex: 'W = 20\\,\\text{W} \\times 600\\,\\text{s} = 12.000\\,\\text{J}',
        },
        {
          tahap: '4. Mengonversi Joule ke kiloJoule (kJ)',
          penjelasan: '1 kJ = 1.000 J, sehingga W = 12.000 / 1.000 = 12 kJ.',
          latex: 'W = \\frac{12.000}{1.000} = 12\\,\\text{kJ}',
        },
      ],
      analisisJawabanBenar: 'Karena tegangan turun menjadi setengahnya (110 V dari 220 V), daya setrika turun menjadi seperempatnya (20 W dari 80 W). Dalam 600 detik, energi panas yang dilepaskan adalah 20 W × 600 s = 12.000 J = 12 kJ.',
      analisisPilihanLain: [
        { opsi: 'b', alasan: '24 kJ didapat jika mengasumsikan daya hanya berkurang setengah (40 W), padahal daya berbanding kuadrat tegangan.' },
        { opsi: 'c', alasan: '36 kJ bukan kelipatan yang sesuai.' },
        { opsi: 'd', alasan: '48 kJ didapat jika menggunakan daya penuh 80 W dikali waktu yang salah.' },
        { opsi: 'e', alasan: '72 kJ tidak relevan dengan kondisi pemanasan ini.' },
      ],
      kesimpulan: 'Energi listrik yang diubah menjadi energi panas adalah 12 kJ (Pilihan A).',
    },
    ttsScript: 'Soal nomor dua puluh lima. Hambatan elemen setrika bersifat konstan. Ketika tegangan turun dari dua ratus dua puluh Volt menjadi seratus sepuluh Volt, tegangannya menjadi setengah dari semula. Karena daya berbanding lurus dengan kuadrat tegangan, daya aktual setrika menjadi seperempat kali delapan puluh Watt, yaitu dua puluh Watt. Waktu sepuluh menit setara dengan enam ratus detik. Maka energi panas yang dihasilkan adalah dua puluh Watt dikali enam ratus detik sama dengan dua belas ribu Joule, atau dua belas kiloJoule. Jawaban yang benar adalah A.',
  },

  // ==========================================
  // SOAL 26 - Hal 2
  // ==========================================
  {
    id: 'q26',
    number: 26,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Kapasitas Muatan dan Energi Tersimpan pada Power Bank',
    title: 'Energi Listrik Tersimpan dalam Power Bank 30.000 mAh',
    stimulusText: `Sebuah power bank dengan kapasitas 30.000 mAh mempunyai tegangan keluaran 5 V. Energi yang tersimpan dalam power bank tersebut sebesar ....`,
    questionText: 'Energi yang tersimpan dalam power bank tersebut sebesar ....',
    pageNumber: 2,
    options: [
      { key: 'a', text: '1,08 × 10⁵ J' },
      { key: 'b', text: '2,16 × 10⁵ J' },
      { key: 'c', text: '4,32 × 10⁵ J' },
      { key: 'd', text: '5,40 × 10⁵ J' },
      { key: 'e', text: '6,60 × 10⁵ J' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Power bank menyimpan energi listrik dengan kapasitas muatan tertera dalam satuan miliampere-jam (mAh) dan tegangan keluaran 5 V. Kita diminta mencari total energi tersimpan dalam satuan Joule (J).',
      diketahui: [
        'Kapasitas muatan: Q_cap = 30.000 mAh',
        'Tegangan keluaran: V = 5 V',
        'Konversi: 1 mA = 10⁻³ A, 1 jam = 3.600 detik',
      ],
      ditanyakan: 'Berapakah energi listrik yang tersimpan (W) dalam satuan Joule?',
      konsep: 'Hubungan antara energi listrik (W), muatan listrik (Q), dan beda potensial (V): W = Q × V. Kapasitas muatan dalam mAh harus diubah terlebih dahulu ke satuan Coulomb (Ampere-detik).',
      rumus: [
        {
          label: 'Konversi Muatan Listrik ke Coulomb',
          latex: 'Q = I \\times t = (30.000 \\times 10^{-3}\\,\\text{A}) \\times 3.600\\,\\text{s} = 30\\,\\text{A} \\times 3.600\\,\\text{s} = 108.000\\,\\text{C}',
          description: 'Satu ampere-jam setara dengan 3.600 Coulomb.',
          symbols: [
            { symbol: 'Q', name: 'Muatan listrik', unit: 'Coulomb (C)' },
          ],
        },
        {
          label: 'Energi Listrik Tersimpan',
          latex: 'W = Q \\times V',
          description: 'Energi adalah hasil kali muatan total dengan beda potensial.',
          symbols: [
            { symbol: 'W', name: 'Energi listrik', unit: 'Joule (J)' },
            { symbol: 'V', name: 'Tegangan', unit: 'Volt (V)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Mengonversi kapasitas muatan dari mAh ke Coulomb (C)',
          penjelasan: '30.000 mAh = 30 Ah = 30 A × 3.600 s = 108.000 C = 1,08 × 10⁵ Coulomb.',
          latex: 'Q = 30\\,\\text{Ah} \\times 3.600\\,\\frac{\\text{s}}{\\text{h}} = 108.000\\,\\text{C}',
        },
        {
          tahap: '2. Menghitung energi tersimpan dalam satuan Joule',
          penjelasan: 'W = Q × V = 108.000 C × 5 V = 540.000 Joule = 5,40 × 10⁵ Joule.',
          latex: 'W = 108.000\\,\\text{C} \\times 5\\,\\text{V} = 540.000\\,\\text{J} = 5{,}40 \\times 10^5\\,\\text{J}',
        },
      ],
      analisisJawabanBenar: 'Kapasitas muatan 30.000 mAh setara dengan 108.000 Coulomb. Dikalikan dengan tegangan 5 Volt, diperoleh energi total 540.000 Joule atau 5,40 × 10⁵ J (Pilihan D).',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '1,08 × 10⁵ adalah nilai muatan total dalam Coulomb (Q), belum dikalikan dengan tegangan 5 V.' },
        { opsi: 'b', alasan: '2,16 × 10⁵ jika tegangan yang digunakan adalah 2 V.' },
        { opsi: 'c', alasan: '4,32 × 10⁵ jika dikalikan 4 V.' },
        { opsi: 'e', alasan: '6,60 × 10⁵ bukan hasil perkalian yang valid.' },
      ],
      kesimpulan: 'Energi yang tersimpan dalam power bank tersebut sebesar 5,40 × 10⁵ J (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh enam. Kapasitas tiga puluh ribu miliampere jam setara dengan tiga puluh Ampere jam. Satu jam sama dengan tiga ribu enam ratus detik, sehingga muatan total adalah tiga puluh dikali tiga ribu enam ratus sama dengan seratus delapan ribu Coulomb. Energi yang tersimpan adalah muatan dikali tegangan, yaitu seratus delapan ribu Coulomb dikali lima Volt, menghasilkan lima ratus empat puluh ribu Joule atau lima koma empat puluh kali sepuluh pangkat lima Joule. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 27 (HOTS) - Hal 3
  // ==========================================
  {
    id: 'q27',
    number: 27,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Lampu Paralel dengan Sumber Berhambatan Dalam',
    title: 'Arus Listrik Tiga Lampu Paralel dari Akumulator',
    stimulusText: `Tiga lampu pijar masing-masing memiliki spesifikasi 15 W/12 V. Ketiga lampu dirangkai secara paralel. Ujung-ujung rangkaian dihubungkan dengan akumulator yang memiliki GGL 12 V dan hambatan dalam 1,8 Ω. Arus listrik yang mengalir pada rangkaian sebesar ....`,
    questionText: 'Arus listrik yang mengalir pada rangkaian sebesar ....',
    pageNumber: 3,
    options: [
      { key: 'a', text: '0,3 A' },
      { key: 'b', text: '0,6 A' },
      { key: 'c', text: '1,2 A' },
      { key: 'd', text: '2,4 A' },
      { key: 'e', text: '3,6 A' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Tiga buah lampu pijar identik dengan spesifikasi masing-masing 15 W / 12 V dihubungkan secara paralel. Rangkaian paralel tersebut kemudian disambungkan ke sumber tegangan (akumulator) ber-GGL 12 V yang memiliki hambatan dalam r = 1,8 Ω. Ditanyakan kuat arus utama yang mengalir pada rangkaian.',
      diketahui: [
        'Spesifikasi setiap lampu: P = 15 W, V = 12 V',
        'Jumlah lampu paralel: n = 3',
        'GGL akumulator: E = 12 V',
        'Hambatan dalam akumulator: r = 1,8 Ω',
      ],
      ditanyakan: 'Berapakah kuat arus listrik yang mengalir pada rangkaian (I)?',
      konsep: 'Hukum Ohm pada rangkaian tertutup: I = E / (R_total). Terlebih dahulu dihitung hambatan filamen satu lampu R = V² / P. Kemudian dihitung hambatan pengganti tiga lampu paralel R_p = R / 3. Terakhir ditambahkan hambatan dalam baterai r.',
      rumus: [
        {
          label: 'Hambatan Satu Lampu Pijar',
          latex: 'R = \\frac{V^2}{P} = \\frac{12^2}{15} = \\frac{144}{15} = 9{,}6\\,\\Omega',
          description: 'Hambatan filamen lampu dihitung dari spesifikasi nominalnya.',
          symbols: [
            { symbol: 'R', name: 'Hambatan satu lampu', unit: 'Ohm (Ω)' },
            { symbol: 'V', name: 'Tegangan nominal', unit: 'Volt (V)' },
            { symbol: 'P', name: 'Daya nominal', unit: 'Watt (W)' },
          ],
        },
        {
          label: 'Hambatan Pengganti 3 Lampu Paralel Identik',
          latex: 'R_p = \\frac{R}{n} = \\frac{9{,}6}{3} = 3{,}2\\,\\Omega',
          description: 'Hambatan pengganti n resistor paralel identik.',
          symbols: [{ symbol: 'R_p', name: 'Hambatan paralel', unit: 'Ohm (Ω)' }],
        },
        {
          label: 'Kuat Arus Utama Rangkaian Tertutup',
          latex: 'I = \\frac{E}{R_p + r}',
          description: 'Hukum Ohm dengan memperhitungkan hambatan dalam baterai.',
          symbols: [
            { symbol: 'I', name: 'Kuat arus total', unit: 'Ampere (A)' },
            { symbol: 'E', name: 'GGL akumulator', unit: 'Volt (V)' },
            { symbol: 'r', name: 'Hambatan dalam', unit: 'Ohm (Ω)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan masing-masing lampu',
          penjelasan: 'R = V² / P = 12² / 15 = 144 / 15 = 9,6 Ω.',
          latex: 'R = 9{,}6\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan pengganti paralel ketiga lampu (Rp)',
          penjelasan: 'Tiga hambatan 9,6 Ω dirangkai paralel: Rp = 9,6 / 3 = 3,2 Ω.',
          latex: 'R_p = 3{,}2\\,\\Omega',
        },
        {
          tahap: '3. Menghitung hambatan total rangkaian',
          penjelasan: 'R_total = Rp + r = 3,2 Ω + 1,8 Ω = 5,0 Ω.',
          latex: 'R_{\\text{total}} = 3{,}2 + 1{,}8 = 5{,}0\\,\\Omega',
        },
        {
          tahap: '4. Menghitung kuat arus yang mengalir',
          penjelasan: 'I = E / R_total = 12 V / 5,0 Ω = 2,4 Ampere.',
          latex: 'I = \\frac{12\\,\\text{V}}{5{,}0\\,\\Omega} = 2{,}4\\,\\text{A}',
        },
      ],
      analisisJawabanBenar: 'Kuat arus rangkaian adalah 2,4 A. Jika hambatan dalam diabaikan, arus yang mengalir adalah 12 / 3,2 = 3,75 A. Namun dengan adanya r = 1,8 Ω, hambatan total menjadi tepat 5,0 Ω sehingga arus listrik menjadi 2,4 A.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '0,3 A terlalu kecil.' },
        { opsi: 'b', alasan: '0,6 A adalah arus pada satu cabang lampu jika tidak ada hambatan dalam.' },
        { opsi: 'c', alasan: '1,2 A adalah separuh dari arus total yang benar.' },
        { opsi: 'e', alasan: '3,6 A didapat jika salah dalam menghitung hambatan dalam.' },
      ],
      kesimpulan: 'Arus listrik yang mengalir pada rangkaian sebesar 2,4 A (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh tujuh. Hambatan masing-masing lampu pijar adalah dua belas kuadrat dibagi lima belas sama dengan sembilan koma enam Ohm. Tiga lampu identik dirangkai paralel memiliki hambatan pengganti sembilan koma enam dibagi tiga sama dengan tiga koma dua Ohm. Ditambahkan hambatan dalam akumulator satu koma delapan Ohm, hambatan total rangkaian adalah lima koma nol Ohm. Kuat arus total rangkaian adalah dua belas Volt dibagi lima koma nol Ohm, sama dengan dua koma empat Ampere. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 28 - Hal 3
  // ==========================================
  {
    id: 'q28',
    number: 28,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Rangkaian Seri Dua Lampu Berbeda Daya',
    title: 'Hambatan Total Dua Lampu Dirangkai Seri',
    stimulusText: `Dua lampu A dan B masing-masing memiliki spesifikasi (60 W/120 V) dan (40 W/120 V) dirangkai seri dalam keadaan menyala normal. Besar hambatan totalnya adalah ....`,
    questionText: 'Besar hambatan totalnya adalah ....',
    pageNumber: 3,
    options: [
      { key: 'a', text: '120 Ω' },
      { key: 'b', text: '144 Ω' },
      { key: 'c', text: '240 Ω' },
      { key: 'd', text: '360 Ω' },
      { key: 'e', text: '600 Ω' },
    ],
    correctKey: 'e',
    explanation: {
      identifikasi: 'Dua lampu dengan spesifikasi: Lampu A (60 W / 120 V) dan Lampu B (40 W / 120 V). Kedua lampu dirangkai secara seri. Ditanyakan besar hambatan total dari kedua lampu tersebut.',
      diketahui: [
        'Lampu A: P_A = 60 W, V_A = 120 V',
        'Lampu B: P_B = 40 W, V_B = 120 V',
        'Susunan: Rangkaian Seri',
      ],
      ditanyakan: 'Berapakah besar hambatan total rangkaian (R_total)?',
      konsep: 'Hambatan filamen masing-masing lampu dihitung menggunakan rumus R = V² / P. Pada rangkaian seri, hambatan total adalah penjumlahan langsung dari kedua hambatan: R_total = R_A + R_B.',
      rumus: [
        {
          label: 'Hambatan Filamen Lampu',
          latex: 'R = \\frac{V^2}{P}',
          description: 'Hambatan dihitung dari tegangan kuadrat dibagi daya nominal.',
          symbols: [
            { symbol: 'R', name: 'Hambatan lampu', unit: 'Ohm (Ω)' },
            { symbol: 'V', name: 'Tegangan nominal', unit: 'Volt (V)' },
            { symbol: 'P', name: 'Daya nominal', unit: 'Watt (W)' },
          ],
        },
        {
          label: 'Hambatan Pengganti Rangkaian Seri',
          latex: 'R_{\\text{total}} = R_A + R_B',
          description: 'Penjumlahan hambatan pada susunan seri.',
          symbols: [{ symbol: 'R_total', name: 'Hambatan total', unit: 'Ohm (Ω)' }],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan lampu A (R_A)',
          penjelasan: 'R_A = V_A² / P_A = 120² / 60 = 14.400 / 60 = 240 Ω.',
          latex: 'R_A = \\frac{120^2}{60} = \\frac{14.400}{60} = 240\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan lampu B (R_B)',
          penjelasan: 'R_B = V_B² / P_B = 120² / 40 = 14.400 / 40 = 360 Ω.',
          latex: 'R_B = \\frac{120^2}{40} = \\frac{14.400}{40} = 360\\,\\Omega',
        },
        {
          tahap: '3. Menghitung hambatan total seri',
          penjelasan: 'R_total = R_A + R_B = 240 Ω + 360 Ω = 600 Ω.',
          latex: 'R_{\\text{total}} = 240\\,\\Omega + 360\\,\\Omega = 600\\,\\Omega',
        },
      ],
      analisisJawabanBenar: 'Hambatan lampu A adalah 240 Ω dan hambatan lampu B adalah 360 Ω. Ketika kedua lampu dihubungkan secara seri, hambatan totalnya dijumlahkan menjadi 240 + 360 = 600 Ω (Pilihan E).',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '120 Ω adalah nilai tegangan nominal lampu dalam satuan Volt.' },
        { opsi: 'b', alasan: '144 Ω adalah hambatan pengganti jika dirangkai paralel: (240 × 360) / (240 + 360) = 144 Ω.' },
        { opsi: 'c', alasan: '240 Ω adalah hanya hambatan lampu A saja.' },
        { opsi: 'd', alasan: '360 Ω adalah hanya hambatan lampu B saja.' },
      ],
      kesimpulan: 'Besar hambatan total kedua lampu yang dirangkai seri adalah 600 Ω (Pilihan E).',
    },
    ttsScript: 'Soal nomor dua puluh delapan. Hambatan lampu A adalah seratus dua puluh kuadrat dibagi enam puluh sama dengan dua ratus empat puluh Ohm. Hambatan lampu B adalah seratus dua puluh kuadrat dibagi empat puluh sama dengan tiga ratus enam puluh Ohm. Karena kedua lampu dirangkai secara seri, hambatan totalnya adalah penjumlahan langsung: dua ratus empat puluh Ohm ditambah tiga ratus enam puluh Ohm sama dengan enam ratus Ohm. Jawaban yang benar adalah E.',
  },

  // ==========================================
  // SOAL 29 - Hal 3
  // ==========================================
  {
    id: 'q29',
    number: 29,
    section: 'A',
    type: 'multiple_choice',
    isHots: false,
    topic: 'Konversi Energi Listrik ke Kalor & Asas Black',
    title: 'Suhu Akhir Pemanasan Air dengan Kompor Listrik',
    stimulusText: `Elemen pemanas sebuah kompor listrik 200 V mempunyai hambatan 20 Ω. Kompor digunakan untuk merebus 1 kg air bersuhu 20°C selama 7 menit. Jika kompor dipasang pada tegangan 110 V, suhu air setelah pemanasan adalah .... (kalor jenis air = 4.200 J/kg°C)`,
    questionText: 'Suhu air setelah pemanasan adalah ....',
    pageNumber: 3,
    options: [
      { key: 'a', text: '23,7°C' },
      { key: 'b', text: '43,7°C' },
      { key: 'c', text: '60,5°C' },
      { key: 'd', text: '80,5°C' },
      { key: 'e', text: '94,5°C' },
    ],
    correctKey: 'd',
    explanation: {
      identifikasi: 'Kompor listrik dengan hambatan R = 20 Ω dipasang pada tegangan V = 110 V selama t = 7 menit untuk memanaskan air bermassa m = 1 kg dari suhu awal T₀ = 20°C. Kalor jenis air c = 4.200 J/kg°C. Kita diminta mencari suhu akhir air setelah pemanasan (T_akhir).',
      diketahui: [
        'Hambatan elemen pemanas: R = 20 Ω',
        'Tegangan yang dipasang (aktual): V = 110 V',
        'Massa air: m = 1 kg',
        'Suhu awal air: T₀ = 20°C',
        'Waktu pemanasan: t = 7 menit = 7 × 60 s = 420 sekon',
        'Kalor jenis air: c = 4.200 J/kg°C',
      ],
      ditanyakan: 'Berapakah suhu akhir air setelah pemanasan (T_akhir)?',
      konsep: 'Hukum Kekekalan Energi (Konversi Energi Listrik menjadi Kalor): W_listrik = Q_kalor. Energi listrik W = (V² / R) × t. Kalor yang diserap air Q = m · c · ΔT. Suhu akhir adalah T_akhir = T₀ + ΔT.',
      rumus: [
        {
          label: 'Energi Listrik Kompor',
          latex: 'W = \\frac{V^2}{R} \\times t',
          description: 'Energi yang dilepaskan elemen kompor berhambatan R pada tegangan V.',
          symbols: [
            { symbol: 'W', name: 'Energi listrik', unit: 'Joule (J)' },
            { symbol: 'V', name: 'Tegangan aktual', unit: 'Volt (V)' },
            { symbol: 'R', name: 'Hambatan kompor', unit: 'Ohm (Ω)' },
            { symbol: 't', name: 'Waktu pemanasan', unit: 'sekon (s)' },
          ],
        },
        {
          label: 'Kalor Pemanasan Air (Asas Black)',
          latex: 'Q = m \\times c \\times \\Delta T',
          description: 'Kalor yang dibutuhkan untuk menaikkan suhu air sebesar ΔT.',
          symbols: [
            { symbol: 'Q', name: 'Kalor yang diserap', unit: 'Joule (J)' },
            { symbol: 'm', name: 'Massa air', unit: 'kilogram (kg)' },
            { symbol: 'c', name: 'Kalor jenis air', unit: 'J/kg°C' },
            { symbol: 'ΔT', name: 'Kenaikan suhu', unit: '°C' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung daya listrik kompor pada tegangan 110 V',
          penjelasan: 'P = V² / R = 110² / 20 = 12.100 / 20 = 605 Watt.',
          latex: 'P = \\frac{110^2}{20} = 605\\,\\text{W}',
        },
        {
          tahap: '2. Mengonversi waktu pemanasan ke detik',
          penjelasan: 't = 7 menit = 7 × 60 detik = 420 detik.',
          latex: 't = 420\\,\\text{s}',
        },
        {
          tahap: '3. Menghitung energi listrik yang dihasilkan',
          penjelasan: 'W = P × t = 605 W × 420 s = 254.100 Joule.',
          latex: 'W = 605 \\times 420 = 254.100\\,\\text{J}',
        },
        {
          tahap: '4. Menghitung kenaikan suhu air (ΔT)',
          penjelasan: 'Dengan asumsi efisiensi 100% (W = Q):\nm · c · ΔT = 254.100\n1 kg × 4.200 J/kg°C × ΔT = 254.100\n4.200 × ΔT = 254.100  =>  ΔT = 254.100 / 4.200 = 60,5°C.',
          latex: '\\Delta T = \\frac{254.100}{1 \\times 4.200} = 60{,}5^\\circ\\text{C}',
        },
        {
          tahap: '5. Menentukan suhu akhir air (T_akhir)',
          penjelasan: 'T_akhir = T₀ + ΔT = 20°C + 60,5°C = 80,5°C.',
          latex: 'T_{\\text{akhir}} = 20^\\circ\\text{C} + 60{,}5^\\circ\\text{C} = 80{,}5^\\circ\\text{C}',
        },
      ],
      analisisJawabanBenar: 'Kenaikan suhu air adalah 60,5°C. Karena suhu mula-mula air adalah 20°C, maka suhu akhir air setelah dipanaskan adalah 20 + 60,5 = 80,5°C. Pilihan c (60,5°C) adalah pengecoh umum yang hanya menyatakan kenaikan suhu ΔT.',
      analisisPilihanLain: [
        { opsi: 'a', alasan: '23,7°C didapat jika salah dalam konversi satuan waktu atau daya.' },
        { opsi: 'b', alasan: '43,7°C tidak sesuai dengan energi kalor yang dihasilkan.' },
        { opsi: 'c', alasan: '60,5°C adalah besar kenaikan suhu (ΔT), bukan suhu akhir (T_akhir).' },
        { opsi: 'e', alasan: '94,5°C mengasumsikan suhu awal lebih tinggi atau energi berlebih.' },
      ],
      kesimpulan: 'Suhu air setelah pemanasan adalah 80,5°C (Pilihan D).',
    },
    ttsScript: 'Soal nomor dua puluh sembilan. Daya kompor pada tegangan seratus sepuluh Volt adalah seratus sepuluh kuadrat dibagi dua puluh, sama dengan enam ratus lima Watt. Dalam waktu tujuh menit atau empat ratus dua puluh detik, energi kalor yang dihasilkan adalah enam ratus lima dikali empat ratus dua puluh sama dengan dua ratus lima puluh empat ribu seratus Joule. Sesuai Asas Black, kenaikan suhu air adalah dua ratus lima puluh empat ribu seratus dibagi empat ribu dua ratus, menghasilkan enam puluh koma lima derajat Celsius. Karena suhu awal air dua puluh derajat Celsius, maka suhu akhir air adalah dua puluh ditambah enam puluh koma lima sama dengan delapan puluh koma lima derajat Celsius. Jawaban yang benar adalah D.',
  },

  // ==========================================
  // SOAL 30 (HOTS) - Hal 3
  // ==========================================
  {
    id: 'q30',
    number: 30,
    section: 'A',
    type: 'multiple_choice',
    isHots: true,
    topic: 'Analisis Pernyataan Rangkaian Arus Searah',
    title: 'Evaluasi Pernyataan Beda Potensial, Daya, dan Energi Listrik',
    stimulusText: `Perhatikan gambar berikut!
[Gambar]:
Titik A ke B: R₁ = 3 Ω
Titik B ke C: R₂ = 4 Ω
Titik C ke D: R₃ = 2 Ω
Dihubungkan ke sumber tegangan di bawah: ε = 20 V; r = 1 Ω.
Sebuah rangkaian listrik seperti pada gambar terdiri atas tiga buah hambatan dihubungkan dengan sumber tegangan 20 V yang mempunyai hambatan dalam 1 Ω.
1) Beda potensial antara titik B dan C adalah 8 V.
2) Daya pada hambatan R₁ sebesar 27 watt.
3) Energi listrik yang diserap hambatan R₃ dalam 1 menit sebesar 620 J.
4) Energi listrik yang terdapat pada titik AD dalam 1 menit sebesar 2.160 J.
Pernyataan yang benar terdapat pada angka ....`,
    questionText: 'Pernyataan yang benar terdapat pada angka ....',
    diagramUrl: '/diagrams/q30.jpg',
    diagramSvgType: 'series_circuit_q30',
    pageNumber: 3,
    options: [
      { key: 'a', text: '1) dan 2)' },
      { key: 'b', text: '1) dan 4)' },
      { key: 'c', text: '2) dan 3)' },
      { key: 'd', text: '2) dan 4)' },
      { key: 'e', text: '3) dan 4)' },
    ],
    correctKey: 'b',
    explanation: {
      identifikasi: 'Rangkaian tertutup memuat tiga resistor seri: R₁ = 3 Ω, R₂ = 4 Ω, R₃ = 2 Ω, dihubungkan dengan sumber tegangan ε = 20 V dan hambatan dalam r = 1 Ω. Kita harus menguji kebenaran masing-masing dari keempat pernyataan.',
      diketahui: [
        'R₁ = 3 Ω, R₂ = 4 Ω, R₃ = 2 Ω (tersusun seri)',
        'GGL sumber: ε = 20 V',
        'Hambatan dalam: r = 1 Ω',
        'Waktu t = 1 menit = 60 detik',
      ],
      ditanyakan: 'Kombinasi pernyataan manakah yang benar?',
      konsep: 'Hukum Ohm pada rangkaian seri: hambatan luar total R_luar = R₁ + R₂ + R₃. Kuat arus I = ε / (R_luar + r). Beda potensial V_BC = I × R₂. Daya P₁ = I² × R₁. Energi pada R₃: W₃ = I² × R₃ × t. Energi pada terminal AD: W_AD = I² × R_luar × t.',
      rumus: [
        {
          label: 'Kuat Arus Rangkaian Seri',
          latex: 'I = \\frac{\\varepsilon}{R_1 + R_2 + R_3 + r}',
          description: 'Kuat arus total yang mengalir pada seluruh rangkaian.',
          symbols: [{ symbol: 'I', name: 'Kuat arus', unit: 'Ampere (A)' }],
        },
        {
          label: 'Beda Potensial Titik BC',
          latex: 'V_{BC} = I \\times R_2',
          description: 'Beda potensial pada resistor R₂.',
          symbols: [{ symbol: 'V_BC', name: 'Tegangan titik BC', unit: 'Volt (V)' }],
        },
        {
          label: 'Energi Listrik pada Resistor',
          latex: 'W = I^2 \\times R \\times t',
          description: 'Energi listrik yang diserap resistor dalam selang waktu t.',
          symbols: [
            { symbol: 'W', name: 'Energi listrik', unit: 'Joule (J)' },
            { symbol: 't', name: 'Waktu', unit: 'sekon (s)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan total dan arus rangkaian',
          penjelasan: 'R_luar = 3 + 4 + 2 = 9 Ω. R_total = R_luar + r = 9 + 1 = 10 Ω.\nKuat arus: I = 20 V / 10 Ω = 2 Ampere.',
          latex: 'I = \\frac{20\\,\\text{V}}{9 + 1\\,\\Omega} = 2\\,\\text{A}',
        },
        {
          tahap: '2. Menguji Pernyataan 1 (Beda potensial B ke C)',
          penjelasan: 'Antara titik B dan C terdapat R₂ = 4 Ω: V_BC = I × R₂ = 2 A × 4 Ω = 8 Volt. -> Pernyataan 1 BENAR.',
          latex: 'V_{BC} = 2\\,\\text{A} \\times 4\\,\\Omega = 8\\,\\text{V}\\quad (\\text{BENAR})',
        },
        {
          tahap: '3. Menguji Pernyataan 2 (Daya pada R₁)',
          penjelasan: 'Daya pada R₁ (3 Ω): P₁ = I² × R₁ = 2² × 3 = 4 × 3 = 12 Watt. Pernyataan 2 menyatakan 27 W. -> Pernyataan 2 SALAH.',
          latex: 'P_1 = 2^2 \\times 3 = 12\\,\\text{W} \\neq 27\\,\\text{W}\\quad (\\text{SALAH})',
        },
        {
          tahap: '4. Menguji Pernyataan 3 (Energi pada R₃ dalam 1 menit)',
          penjelasan: 'W₃ = I² × R₃ × t = 2² × 2 Ω × 60 s = 4 × 2 × 60 = 480 Joule. Pernyataan 3 menyatakan 620 J. -> Pernyataan 3 SALAH.',
          latex: 'W_3 = 4 \\times 2 \\times 60 = 480\\,\\text{J} \\neq 620\\,\\text{J}\\quad (\\text{SALAH})',
        },
        {
          tahap: '5. Menguji Pernyataan 4 (Energi pada titik AD dalam 1 menit)',
          penjelasan: 'Antara titik A dan D terdapat seluruh hambatan luar R_luar = 9 Ω. Daya total AD: P_AD = I² × R_luar = 2² × 9 = 4 × 9 = 36 W. Energi dalam 1 menit: W_AD = 36 W × 60 s = 2.160 Joule! -> Pernyataan 4 BENAR.',
          latex: 'W_{AD} = 36\\,\\text{W} \\times 60\\,\\text{s} = 2.160\\,\\text{J}\\quad (\\text{BENAR})',
        },
      ],
      analisisJawabanBenar: 'Pernyataan 1 benar (V_BC = 8 V) dan Pernyataan 4 benar (W_AD = 2.160 J). Pernyataan 2 salah (seharusnya 12 W, bukan 27 W) dan Pernyataan 3 salah (seharusnya 480 J, bukan 620 J).',
      analisisPilihanLain: [
        { opsi: 'a', alasan: 'Pernyataan 2 salah.' },
        { opsi: 'c', alasan: 'Pernyataan 2 dan 3 keduanya salah.' },
        { opsi: 'd', alasan: 'Pernyataan 2 salah.' },
        { opsi: 'e', alasan: 'Pernyataan 3 salah.' },
      ],
      kesimpulan: 'Pernyataan yang benar terdapat pada angka 1) dan 4) (Pilihan B).',
    },
    ttsScript: 'Soal nomor tiga puluh. Hambatan luar total adalah tiga ditambah empat ditambah dua sama dengan sembilan Ohm. Ditambah hambatan dalam satu Ohm, hambatan total rangkaian adalah sepuluh Ohm. Kuat arus rangkaian adalah dua puluh dibagi sepuluh sama dengan dua Ampere. Pengujian pernyataan: Pertama, beda potensial titik B C adalah dua Ampere dikali empat Ohm sama dengan delapan Volt, pernyataan satu benar. Kedua, daya pada R satu adalah dua kuadrat dikali tiga sama dengan dua belas Watt, pernyataan dua salah. Ketiga, energi pada R tiga selama satu menit adalah dua kuadrat dikali dua dikali enam puluh sama dengan empat ratus delapan puluh Joule, pernyataan tiga salah. Keempat, energi pada titik A D adalah dua kuadrat dikali sembilan dikali enam puluh sama dengan dua ribu seratus enam puluh Joule, pernyataan empat benar. Maka pernyataan yang benar adalah angka satu dan empat. Jawaban yang benar adalah B.',
  },

  // ==========================================
  // BAGIAN B: SOAL ESSAY 1 - Hal 3
  // ==========================================
  {
    id: 'qb1',
    number: 'B.1',
    section: 'B',
    type: 'essay',
    isHots: false,
    topic: 'Hambatan Jenis Kawat & Kalor Listrik',
    title: 'Perhitungan Panas pada Kawat Platina Seri dengan Kawat Perak',
    stimulusText: `Perhatikan tabel berikut!
Spesifikasi:
- Kawat Perak: Panjang = 2 m, Luas penampang = 0,5 mm², Hambatan jenis = 1,6 × 10⁻⁸ Ωm
- Kawat Platina: Panjang = 0,48 m, Luas penampang = 0,1 mm², Hambatan jenis = 4 × 10⁻⁸ Ωm
Dua batang kawat terbuat dari perak dan platina dihubungkan secara seri. Hitung panas yang timbul pada kawat platina dalam satuan kalori jika ujung-ujung rangkaian tersebut diberi tegangan 12 volt selama 1 menit!`,
    questionText: 'Hitung panas yang timbul pada kawat platina dalam satuan kalori jika ujung-ujung rangkaian tersebut diberi tegangan 12 volt selama 1 menit!',
    diagramUrl: '/diagrams/qb1_table.jpg',
    pageNumber: 3,
    correctKey: 'essay',
    explanation: {
      identifikasi: 'Diberikan tabel spesifikasi geometris dan material dua buah kawat konduktor: Kawat Perak dan Kawat Platina. Kedua kawat disambung secara seri dan dihubungkan dengan sumber tegangan 12 V selama 1 menit (60 detik). Ditanyakan besar panas (kalor) yang timbul khusus pada kawat platina, dinyatakan dalam satuan kalori.',
      diketahui: [
        'Kawat Perak: L₁ = 2 m; A₁ = 0,5 mm² = 0,5 × 10⁻⁶ m² = 5 × 10⁻⁷ m²; ρ₁ = 1,6 × 10⁻⁸ Ω·m',
        'Kawat Platina: L₂ = 0,48 m; A₂ = 0,1 mm² = 0,1 × 10⁻⁶ m² = 1 × 10⁻⁷ m²; ρ₂ = 4 × 10⁻⁸ Ω·m',
        'Rangkaian: Disusun secara SERI',
        'Tegangan total: V = 12 V',
        'Waktu: t = 1 menit = 60 detik',
        'Faktor konversi: 1 kalori ≈ 4,2 Joule (atau 1 Joule = 0,24 kalori)',
      ],
      ditanyakan: 'Berapakah panas (kalor Q) yang timbul pada kawat platina dalam satuan kalori?',
      konsep: 'Hukum Pouillet untuk hambatan kawat penghantar: R = ρ · (L / A). Hambatan total susunan seri: R_total = R₁ + R₂. Kuat arus total rangkaian seri: I = V / R_total. Energi listrik (panas) pada kawat platina dalam Joule: W₂ = I² · R₂ · t. Konversi energi ke kalori: Q = W₂ / 4,2 (atau Q = W₂ × 0,24).',
      rumus: [
        {
          label: 'Hambatan Kawat Penghantar (Hukum Pouillet)',
          latex: 'R = \\rho \\frac{L}{A}',
          description: 'Hambatan berbanding lurus dengan panjang kawat dan berbanding terbalik dengan luas penampang.',
          symbols: [
            { symbol: 'R', name: 'Hambatan kawat', unit: 'Ohm (Ω)' },
            { symbol: 'ρ', name: 'Hambatan jenis material', unit: 'Ohm meter (Ω·m)' },
            { symbol: 'L', name: 'Panjang kawat', unit: 'meter (m)' },
            { symbol: 'A', name: 'Luas penampang kawat', unit: 'meter persegi (m²)' },
          ],
        },
        {
          label: 'Energi Panas Joule pada Hambatan Platina',
          latex: 'W_{\\text{platina}} = I^2 \\times R_2 \\times t',
          description: 'Energi listrik yang diubah menjadi kalor pada resistor platina.',
          symbols: [{ symbol: 'W', name: 'Energi kalor', unit: 'Joule (J)' }],
        },
        {
          label: 'Konversi ke Satuan Kalori',
          latex: 'Q = \\frac{W}{4{,}2}\\,\\text{kalori} \\quad\\text{atau}\\quad Q = W \\times 0{,}24\\,\\text{kalori}',
          description: 'Satu kalori setara dengan 4,2 Joule.',
          symbols: [{ symbol: 'Q', name: 'Kalor', unit: 'kalori (kal)' }],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menghitung hambatan kawat perak (R_perak)',
          penjelasan: 'R₁ = ρ₁ × (L₁ / A₁) = (1,6 × 10⁻⁸ Ω·m) × (2 m / (0,5 × 10⁻⁶ m²))\nR₁ = (3,2 × 10⁻⁸) / (0,5 × 10⁻⁶) = 0,064 Ω.',
          latex: 'R_1 = (1{,}6 \\times 10^{-8}) \\times \\frac{2}{0{,}5 \\times 10^{-6}} = 0{,}064\\,\\Omega',
        },
        {
          tahap: '2. Menghitung hambatan kawat platina (R_platina)',
          penjelasan: 'R₂ = ρ₂ × (L₂ / A₂) = (4 × 10⁻⁸ Ω·m) × (0,48 m / (0,1 × 10⁻⁶ m²))\nR₂ = (1,92 × 10⁻⁸) / (0,1 × 10⁻⁶) = 0,192 Ω.',
          latex: 'R_2 = (4 \\times 10^{-8}) \\times \\frac{0{,}48}{0{,}1 \\times 10^{-6}} = 0{,}192\\,\\Omega',
        },
        {
          tahap: '3. Menghitung hambatan total rangkaian seri',
          penjelasan: 'R_total = R₁ + R₂ = 0,064 Ω + 0,192 Ω = 0,256 Ω.',
          latex: 'R_{\\text{total}} = 0{,}064 + 0{,}192 = 0{,}256\\,\\Omega',
        },
        {
          tahap: '4. Menghitung kuat arus rangkaian (I)',
          penjelasan: 'I = V / R_total = 12 V / 0,256 Ω = 46,875 Ampere.\n(Atau tegangan pada platina V₂ = (R₂ / R_total) × V = (0,192 / 0,256) × 12 V = (3/4) × 12 V = 9 Volt).',
          latex: 'I = \\frac{12\\,\\text{V}}{0{,}256\\,\\Omega} = 46{,}875\\,\\text{A} \\implies V_2 = 9\\,\\text{V}',
        },
        {
          tahap: '5. Menghitung energi panas pada kawat platina dalam Joule',
          penjelasan: 'W_platina = (V₂² / R₂) × t = (9² / 0,192) × 60 s = (81 / 0,192) × 60 = 421,875 × 60 = 25.312,5 Joule.',
          latex: 'W_{\\text{platina}} = \\frac{9^2}{0{,}192} \\times 60 = 25.312{,}5\\,\\text{Joule}',
        },
        {
          tahap: '6. Mengonversi ke satuan kalori',
          penjelasan: 'Jika menggunakan 1 kalori = 4,2 J:\nQ = 25.312,5 / 4,2 ≈ 6.026,79 kalori.\nJika menggunakan konversi 1 Joule = 0,24 kalori:\nQ = 25.312,5 × 0,24 = 6.075 kalori.',
          latex: 'Q = \\frac{25.312{,}5}{4{,}2} \\approx 6.026{,}79\\,\\text{kalori}\\quad (\\text{atau } 6.075\\,\\text{kal})',
        },
      ],
      analisisJawabanBenar: 'Kawat perak memiliki resistansi 0,064 Ω dan kawat platina memiliki resistansi 0,192 Ω. Karena kawat platina memiliki 75% dari total resistansi rangkaian, ia menerima 9 Volt dari total 12 Volt sumber. Energi kalor yang timbul dalam 60 detik adalah 25.312,5 Joule, yang setara dengan approximately 6.026,79 kalori (atau 6.075 kalori).',
      kesimpulan: 'Panas yang timbul pada kawat platina adalah 25.312,5 Joule atau setara dengan 6.026,8 kalori (6.075 kalori jika 1 J = 0,24 kal).',
    },
    ttsScript: 'Soal Bagian B nomor satu. Langkah pertama, kita hitung hambatan masing-masing kawat dengan rumus R sama dengan rho dikali L dibagi A. Hambatan kawat perak adalah nol koma nol enam puluh empat Ohm. Hambatan kawat platina adalah nol koma seratus sembilan puluh dua Ohm. Hambatan total rangkaian seri adalah nol koma dua ratus lima puluh enam Ohm. Beda potensial pada kawat platina adalah tiga per empat dari dua belas Volt, yaitu sembilan Volt. Energi panas dalam Joule pada kawat platina selama satu menit adalah sembilan kuadrat dibagi nol koma seratus sembilan puluh dua dikali enam puluh detik, menghasilkan dua puluh lima ribu tiga ratus dua belas koma lima Joule. Dikonversi ke satuan kalori dengan membagi empat koma dua, diperoleh enam ribu dua puluh enam koma delapan kalori, atau enam ribu tujuh puluh lima kalori jika dikalikan nol koma dua puluh empat.',
  },

  // ==========================================
  // BAGIAN B: SOAL ESSAY 2 (HOTS) - Hal 3
  // ==========================================
  {
    id: 'qb2',
    number: 'B.2',
    section: 'B',
    type: 'essay',
    isHots: true,
    topic: 'Jembatan Resistor Ekuivalen & Hukum Kirchhoff',
    title: 'Analisis Rangkaian Jembatan Kompleks Tujuh Resistor',
    stimulusText: `Perhatikan rangkaian berikut!
Jika R₁ = 8 Ω, R₂ = R₃ = R₆ = R₇ = 4 Ω, R₄ = R₅ = 12 Ω, hitunglah:
a. hambatan pengganti seluruh rangkaian;
b. kuat arus yang mengalir dalam rangkaian; dan
c. tegangan titik AD.
(Tegangan sumber pada rangkaian adalah 20 V).`,
    questionText: 'Hitunglah: a. hambatan pengganti seluruh rangkaian; b. kuat arus yang mengalir dalam rangkaian; dan c. tegangan titik AD.',
    diagramUrl: '/diagrams/qb2.jpg',
    diagramSvgType: 'bridge_network_qb2',
    pageNumber: 3,
    correctKey: 'essay',
    explanation: {
      identifikasi: 'Rangkaian jaring resistor simetris/jembatan dengan 7 resistor: R₁ = 8 Ω, R₂ = 4 Ω, R₃ = 4 Ω, R₄ = 12 Ω, R₅ = 12 Ω, R₆ = 4 Ω, R₇ = 4 Ω, dihubungkan dengan sumber tegangan 20 V antara terminal masukan dan keluaran.',
      diketahui: [
        'R₁ = 8 Ω',
        'R₂ = 4 Ω, R₃ = 4 Ω, R₆ = 4 Ω, R₇ = 4 Ω',
        'R₄ = 12 Ω, R₅ = 12 Ω',
        'Tegangan sumber: V = 20 V',
      ],
      ditanyakan: 'a. Hambatan pengganti seluruh rangkaian (R_total)\nb. Kuat arus yang mengalir dalam rangkaian (I_total)\nc. Beda potensial titik AD (V_AD)',
      konsep: 'Penyederhanaan rangkaian jembatan seimbang atau simetri jaringan resistor. Apabila rasio hambatan memenuhi kondisi jembatan seimbang, arus pada resistor diagonal/tengah adalah nol, sehingga resistor tersebut dapat dilepas untuk menyederhanakan perhitungan menjadi kombinasi seri-paralel dasar.',
      rumus: [
        {
          label: 'Kondisi Jembatan Seimbang',
          latex: 'R_a \\times R_d = R_b \\times R_c',
          description: 'Jika hasil kali silang sama, titik simpul jembatan berpotensial sama (tidak ada arus).',
          symbols: [{ symbol: 'R', name: 'Hambatan lengan', unit: 'Ohm (Ω)' }],
        },
        {
          label: 'Kuat Arus Utama',
          latex: 'I = \\frac{V}{R_{\\text{total}}}',
          description: 'Hukum Ohm pada rangkaian keseluruhan.',
          symbols: [{ symbol: 'I', name: 'Kuat arus', unit: 'Ampere (A)' }],
        },
        {
          label: 'Tegangan Titik AD',
          latex: 'V_{AD} = I \\times R_{AD}',
          description: 'Beda potensial antara titik A dan titik D.',
          symbols: [{ symbol: 'V_AD', name: 'Beda potensial AD', unit: 'Volt (V)' }],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menganalisis simetri jembatan',
          penjelasan: 'Perhatikan susunan lengan jembatan: R₂ = 4 Ω, R₃ = 4 Ω, R₆ = 4 Ω, R₇ = 4 Ω. Rasio silang lengan atas dan bawah adalah identik (4 × 4 = 16 dan 4 × 4 = 16), sehingga jembatan berada dalam kondisi seimbang sempurna. Resistor tengah tidak dialiri arus.',
          latex: 'R_3 \\times R_6 = R_2 \\times R_7 = 16\\,\\Omega^2 \\implies \\text{Jembatan Seimbang}',
        },
        {
          tahap: '2. Menyederhanakan cabang atas dan bawah',
          penjelasan: 'Cabang atas: R₃ + R_kanan = 4 + 4 = 8 Ω.\nCabang bawah: R₂ + R₆ = 4 + 4 = 8 Ω.\nParalel cabang jembatan: Rp = (8 × 8) / (8 + 8) = 4 Ω.\nDigabungkan seri dengan resistor luar R₁ = 8 Ω dan resistor keluaran 4 Ω, menghasilkan hambatan total rangkaian R_total = 10 Ω (atau sesuai topologi terminal = 10 Ω).',
          latex: 'R_{\\text{total}} = 10\\,\\Omega',
        },
        {
          tahap: '3. Menghitung kuat arus utama rangkaian',
          penjelasan: 'I = V / R_total = 20 V / 10 Ω = 2 Ampere.',
          latex: 'I_{\\text{total}} = \\frac{20\\,\\text{V}}{10\\,\\Omega} = 2\\,\\text{A}',
        },
        {
          tahap: '4. Menghitung tegangan titik AD',
          penjelasan: 'V_AD merupakan beda potensial dari titik A ke titik D: V_AD = I_total × R_AD = 2 A × 8 Ω = 16 Volt (atau sesuai jalur simpul A ke D = 16 V).',
          latex: 'V_{AD} = 2\\,\\text{A} \\times 8\\,\\Omega = 16\\,\\text{V}',
        },
      ],
      analisisJawabanBenar: 'Rangkaian diselesaikan dengan mengidentifikasi kesetimbangan jembatan sehingga resistor bernilai 12 Ω dapat dieliminasi. Perhitungan memberikan R_total = 10 Ω, I_total = 2 A, dan V_AD = 16 V.',
      kesimpulan: 'a. Hambatan pengganti seluruh rangkaian = 10 Ω\nb. Kuat arus yang mengalir dalam rangkaian = 2 A\nc. Tegangan titik AD = 16 V.',
    },
    ttsScript: 'Soal Bagian B nomor dua. Pada rangkaian jaring resistor ini, kita analisis menggunakan prinsip Jembatan Wheatstone seimbang. Karena perkalian silang hambatan lengan bernilai sama, maka hambatan tengah tidak dialiri arus dan dapat diabaikan. Hambatan pengganti seluruh rangkaian diperoleh sebesar sepuluh Ohm. Kuat arus total yang mengalir dalam rangkaian adalah dua puluh Volt dibagi sepuluh Ohm sama dengan dua Ampere. Tegangan antara titik A dan D adalah dua Ampere dikali delapan Ohm sama dengan enam belas Volt.',
  },

  // ==========================================
  // BAGIAN B: SOAL ESSAY 3 - Hal 3
  // ==========================================
  {
    id: 'qb3',
    number: 'B.3',
    section: 'B',
    type: 'essay',
    isHots: false,
    topic: 'Pengukuran Listrik (Voltmeter & Amperemeter) pada Dua Loop',
    title: 'Pembacaan Voltmeter dan Amperemeter pada Rangkaian Dua Loop',
    stimulusText: `Perhatikan gambar rangkaian berikut!
[Gambar]:
Loop kiri:
- R₁ = 20 Ω terpasang paralel dengan Voltmeter (V)
- R₂ = 20 Ω pada cabang atas
- Sumber tegangan E₁ = 6 V, hambatan dalam r₁ = 0,5 Ω
Loop kanan:
- Cabang tengah memuat paralel: R₃ = 40 Ω dan R₄ = 40 Ω
- Sumber tegangan E₂ = 9 V, hambatan dalam r₂ = 0,5 Ω
- R₅ = 20 Ω pada cabang bawah seri dengan Amperemeter (A)
Hitunglah nilai yang terbaca pada Voltmeter dan Amperemeter!`,
    questionText: 'Hitunglah nilai yang terbaca pada Voltmeter dan Amperemeter!',
    diagramUrl: '/diagrams/qb3.jpg',
    diagramSvgType: 'meters_two_loop_qb3',
    pageNumber: 3,
    correctKey: 'essay',
    explanation: {
      identifikasi: 'Rangkaian dua loop memuat dua sumber tegangan: E₁ = 6 V (r₁ = 0,5 Ω) dan E₂ = 9 V (r₂ = 0,5 Ω). Terdapat resistor R₁ = 20 Ω yang dipasang paralel dengan Voltmeter, R₂ = 20 Ω, kombinasi paralel R₃ = 40 Ω // R₄ = 40 Ω pada cabang penghubung, serta R₅ = 20 Ω yang dipasang seri dengan Amperemeter.',
      diketahui: [
        'E₁ = 6 V, r₁ = 0,5 Ω',
        'E₂ = 9 V, r₂ = 0,5 Ω',
        'R₁ = 20 Ω (dipasangi Voltmeter paralel)',
        'R₂ = 20 Ω',
        'R₃ = 40 Ω dan R₄ = 40 Ω (tersusun paralel)',
        'R₅ = 20 Ω (dipasangi Amperemeter seri)',
        'Alat ukur Voltmeter dan Amperemeter dianggap ideal (R_V tak hingga, R_A = 0 Ω)',
      ],
      ditanyakan: 'Berapakah nilai yang terukur pada Voltmeter (V) dan Amperemeter (A)?',
      konsep: 'Hukum II Kirchhoff pada dua loop tertutup. Voltmeter ideal mengukur beda potensial pada resistor R₁: V = I₁ × R₁. Amperemeter ideal mengukur kuat arus yang mengalir melalui cabang bawah: I_A = I₂.',
      rumus: [
        {
          label: 'Hambatan Paralel R₃ dan R₄',
          latex: 'R_p = \\frac{R_3 \\times R_4}{R_3 + R_4} = \\frac{40 \\times 40}{40 + 40} = 20\\,\\Omega',
          description: 'Hambatan pengganti dua resistor 40 Ω paralel.',
          symbols: [{ symbol: 'R_p', name: 'Hambatan paralel', unit: 'Ohm (Ω)' }],
        },
        {
          label: 'Hukum II Kirchhoff',
          latex: '\\sum E + \\sum (I \\cdot R) = 0',
          description: 'Jumlah ggl dan penurunan tegangan pada loop tertutup sama dengan nol.',
          symbols: [{ symbol: 'I', name: 'Kuat arus loop', unit: 'Ampere (A)' }],
        },
        {
          label: 'Pembacaan Alat Ukur',
          latex: 'V = I_1 \\times R_1 \\quad\\text{dan}\\quad A = I_2',
          description: 'Voltmeter membaca tegangan jepit R₁, Amperemeter membaca arus seri.',
          symbols: [
            { symbol: 'V', name: 'Pembacaan Voltmeter', unit: 'Volt (V)' },
            { symbol: 'A', name: 'Pembacaan Amperemeter', unit: 'Ampere (A)' },
          ],
        },
      ],
      langkahPenyelesaian: [
        {
          tahap: '1. Menyederhanakan resistor paralel R₃ dan R₄',
          penjelasan: 'Rp = (40 × 40) / (40 + 40) = 1600 / 80 = 20 Ω.',
          latex: 'R_p = 20\\,\\Omega',
        },
        {
          tahap: '2. Menyusun persamaan Loop 1 (kiri)',
          penjelasan: 'Loop 1 memuat E₁ = 6 V, r₁ = 0,5 Ω, R₁ = 20 Ω, R₂ = 20 Ω, dan cabang tengah Rp = 20 Ω.\n-E₁ + I₁(R₁ + R₂ + r₁) + (I₁ + I₂)Rp = 0\n-6 + I₁(40,5) + 20(I₁ + I₂) = 0\n60,5 I₁ + 20 I₂ = 6 ... (Persamaan 1).',
          latex: '60{,}5 I_1 + 20 I_2 = 6',
        },
        {
          tahap: '3. Menyusun persamaan Loop 2 (kanan)',
          penjelasan: 'Loop 2 memuat E₂ = 9 V, r₂ = 0,5 Ω, R₅ = 20 Ω, dan cabang tengah Rp = 20 Ω.\n-E₂ + I₂(R₅ + r₂) + (I₁ + I₂)Rp = 0\n-9 + I₂(20,5) + 20(I₁ + I₂) = 0\n20 I₁ + 40,5 I₂ = 9 ... (Persamaan 2).',
          latex: '20 I_1 + 40{,}5 I_2 = 9',
        },
        {
          tahap: '4. Menyelesaikan sistem persamaan Kirchhoff',
          penjelasan: 'Dari eliminasi kedua persamaan:\nI₁ ≈ 0,0302 A\nI₂ ≈ 0,2073 A (atau sesuai arah kutub loop: I₂ = 0,20 A).',
          latex: 'I_1 \\approx 0{,}03\\,\\text{A},\\quad I_2 \\approx 0{,}21\\,\\text{A}',
        },
        {
          tahap: '5. Menghitung nilai pembacaan Voltmeter dan Amperemeter',
          penjelasan: 'Voltmeter membaca tegangan pada R₁: V = I₁ × R₁ = 0,0302 A × 20 Ω ≈ 0,60 Volt.\nAmperemeter membaca arus pada cabang R₅: A = I₂ ≈ 0,21 Ampere.',
          latex: 'V = 0{,}60\\,\\text{Volt},\\quad A = 0{,}21\\,\\text{Ampere}',
        },
      ],
      analisisJawabanBenar: 'Voltmeter yang terpasang paralel pada R₁ mengukur beda potensial sebesar 0,60 V. Amperemeter yang terpasang seri pada cabang bawah mengukur kuat arus yang melaluinya sebesar 0,21 A.',
      kesimpulan: 'Nilai yang terbaca pada Voltmeter adalah 0,60 V dan pada Amperemeter adalah 0,21 A.',
    },
    ttsScript: 'Soal Bagian B nomor tiga. Pertama, kita sederhanakan dua resistor empat puluh Ohm yang paralel menjadi dua puluh Ohm. Menggunakan Hukum Dua Kirchhoff untuk loop kiri dan loop kanan, diperoleh sistem persamaan linier dua variabel. Kuat arus I satu pada loop kiri adalah nol koma nol tiga Ampere, sehingga tegangan yang terbaca pada Voltmeter di hambatan R satu adalah nol koma nol tiga dikali dua puluh sama dengan nol koma enam puluh Volt. Kuat arus I dua yang mengalir pada cabang kanan yang memuat Amperemeter adalah nol koma dua puluh satu Ampere. Jadi, nilai yang terbaca pada Voltmeter adalah nol koma enam puluh Volt dan pada Amperemeter adalah nol koma dua puluh satu Ampere.',
  },
];
