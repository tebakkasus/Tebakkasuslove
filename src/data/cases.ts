export interface CaseItem {
  vignette: string;
  hints: string[];
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface MedicalBlock {
  id: string;
  name: string;
  emoji: string;
}

export const MEDICAL_BLOCKS: MedicalBlock[] = [
  { id: "ipd", name: "Penyakit Dalam", emoji: "🫀" },
  { id: "pediatri", name: "Pediatri", emoji: "👶" },
  { id: "bedah", name: "Bedah Umum", emoji: "🔪" },
  { id: "obgyn", name: "Obstetri & Ginekologi", emoji: "🤰" },
  { id: "saraf", name: "Neurologi", emoji: "🧠" },
  { id: "jiwa", name: "Psikiatri", emoji: "🧘" },
  { id: "mata", name: "Ilmu Penyakit Mata", emoji: "👁️" },
  { id: "tht", name: "THT-KL", emoji: "👂" },
  { id: "kulit", name: "Dermatologi", emoji: "🧴" },
  { id: "kardio", name: "Kardiologi", emoji: "❤️" },
  { id: "pulmo", name: "Pulmonologi", emoji: "🫁" },
  { id: "ortho", name: "Ortopedi", emoji: "🦴" },
  { id: "forensik", name: "Forensik & Medikolegal", emoji: "🔍" },
  { id: "radiologi", name: "Radiologi", emoji: "📸" },
  { id: "anestesi", name: "Anestesiologi", emoji: "💉" },
  { id: "farmako", name: "Farmakologi", emoji: "💊" },
  { id: "mikro", name: "Mikrobiologi", emoji: "🦠" },
  { id: "komunitas", name: "Kedokteran Komunitas", emoji: "🏘️" },
];

export const CASES_DATABASE: Record<string, CaseItem[]> = {
  ipd: [
    {
      vignette: "Seorang pria berusia 55 tahun datang ke IGD dengan keluhan nyeri dada substernal yang menjalar ke lengan kiri sejak 2 jam yang lalu. Pasien memiliki riwayat hipertensi dan diabetes mellitus tipe 2. Pada pemeriksaan fisik, TD 160/100 mmHg, nadi 100x/menit, akral dingin. EKG menunjukkan ST elevasi di lead II, III, aVF. Troponin I meningkat.",
      hints: [
        "Pria 55 tahun dengan nyeri dada akut dan riwayat penyakit metabolik.",
        "Nyeri menjalar ke lengan kiri, onset mendadak 2 jam lalu.",
        "TD tinggi, takikardi, akral dingin — tanda gangguan perfusi.",
        "EKG: ST elevasi di lead inferior (II, III, aVF).",
        "Troponin I meningkat — penanda kerusakan miokard."
      ],
      options: ["STEMI Inferior", "Angina Pektoris Stabil", "Perikarditis Akut", "Diseksi Aorta", "Emboli Paru"],
      answerIndex: 0,
      explanation: "Diagnosis: STEMI Inferior. ST elevasi di lead II, III, aVF menunjukkan infark miokard akut pada dinding inferior jantung. Troponin yang meningkat mengkonfirmasi nekrosis miokard. Tatalaksana awal: Dual antiplatelet, antikoagulan, dan reperfusi (PCI primer atau fibrinolitik)."
    },
    {
      vignette: "Wanita 45 tahun datang dengan keluhan lemas dan pucat sejak 3 bulan terakhir. Pasien vegetarian ketat. Pemeriksaan fisik: konjungtiva anemis, lidah atrofi dan licin, parestesia pada kedua kaki. Lab: Hb 8 g/dL, MCV 110 fL, retikulosit rendah. Apusan darah tepi menunjukkan makrositosis dan hipersegmentasi neutrofil.",
      hints: [
        "Wanita dengan anemia kronis dan diet vegetarian ketat.",
        "Keluhan parestesia — keterlibatan neurologis.",
        "Lidah atrofi dan licin (glossitis atrofi).",
        "MCV tinggi (>100 fL) — anemia makrositik.",
        "Hipersegmentasi neutrofil — ciri khas defisiensi B12/folat."
      ],
      options: ["Anemia Defisiensi Besi", "Anemia Defisiensi Vitamin B12", "Anemia Hemolitik", "Anemia Aplastik", "Thalassemia"],
      answerIndex: 1,
      explanation: "Diagnosis: Anemia Defisiensi Vitamin B12 (Anemia Megaloblastik). Diet vegetarian ketat menyebabkan defisiensi B12. Temuan kunci: anemia makrositik (MCV >100), hipersegmentasi neutrofil, gejala neurologis (parestesia), dan glossitis atrofi. Tatalaksana: suplementasi Vitamin B12 intramuskular."
    },
  ],
  pediatri: [
    {
      vignette: "Bayi laki-laki usia 6 bulan dibawa ke IGD dengan keluhan diare cair lebih dari 10x/hari sejak 3 hari yang lalu. Muntah 5x/hari. Demam subfebris. Pada pemeriksaan fisik: mata cekung, turgor kulit menurun, ubun-ubun besar cekung, mukosa mulut kering. BB sebelum sakit 7 kg, BB saat ini 6.3 kg.",
      hints: [
        "Bayi 6 bulan dengan diare akut dan muntah berulang.",
        "Diare cair >10x/hari selama 3 hari — dehidrasi risiko tinggi.",
        "Tanda dehidrasi: mata cekung, turgor menurun, UUB cekung.",
        "Penurunan BB: 7 kg → 6.3 kg = kehilangan 10% BB.",
        "Dehidrasi berat (>10% kehilangan BB) — butuh rehidrasi IV."
      ],
      options: ["Dehidrasi Ringan", "Dehidrasi Sedang", "Dehidrasi Berat", "Intoleransi Laktosa", "Invaginasi"],
      answerIndex: 2,
      explanation: "Diagnosis: Diare Akut dengan Dehidrasi Berat. Kehilangan BB 10% (700g/7kg) mengindikasikan dehidrasi berat. Tanda klinis: mata cekung, turgor menurun, UUB cekung. Tatalaksana: Plan C WHO — resusitasi cairan IV dengan Ringer Laktat 30 mL/kg dalam 1 jam pertama, dilanjutkan 70 mL/kg dalam 5 jam berikutnya."
    },
  ],
  bedah: [
    {
      vignette: "Pria 28 tahun datang dengan nyeri perut kanan bawah sejak 12 jam lalu. Awalnya nyeri di ulu hati, kemudian berpindah ke kanan bawah. Demam 38.5°C, mual. PF: McBurney sign (+), Rovsing sign (+), Psoas sign (+). Lab: Leukosit 15.000/μL.",
      hints: [
        "Pria muda dengan nyeri perut akut yang berpindah lokasi.",
        "Nyeri awal epigastrium → migrasi ke kuadran kanan bawah.",
        "Demam dan mual menyertai nyeri perut.",
        "McBurney sign (+), Rovsing sign (+), Psoas sign (+).",
        "Leukositosis (15.000/μL) — tanda inflamasi/infeksi akut."
      ],
      options: ["Kolesistitis Akut", "Apendisitis Akut", "Batu Ureter", "Divertikulitis", "Perforasi Gaster"],
      answerIndex: 1,
      explanation: "Diagnosis: Apendisitis Akut. Nyeri visceral awal di epigastrium yang bermigrasi ke titik McBurney adalah klasik apendisitis. Tanda McBurney, Rovsing, dan Psoas yang positif mengkonfirmasi iritasi peritoneal lokal. Tatalaksana: Apendektomi (laparoskopi atau terbuka)."
    },
  ],
  obgyn: [
    {
      vignette: "Wanita 30 tahun G2P1A0 usia kehamilan 34 minggu datang dengan keluhan perdarahan pervaginam berwarna merah segar tanpa nyeri. Perdarahan terjadi tiba-tiba saat istirahat. PF: Uterus supel, tidak nyeri tekan, DJJ baik. USG menunjukkan plasenta menutupi seluruh OUI.",
      hints: [
        "Wanita hamil trimester 3 dengan perdarahan tanpa nyeri.",
        "Perdarahan merah segar, onset mendadak saat istirahat.",
        "Uterus supel, tidak nyeri tekan — bukan solusio.",
        "DJJ baik — janin tidak distress.",
        "USG: plasenta menutupi seluruh OUI — plasenta previa totalis."
      ],
      options: ["Solusio Plasenta", "Plasenta Previa Totalis", "Vasa Previa", "Ruptur Uteri", "Kehamilan Ektopik"],
      answerIndex: 1,
      explanation: "Diagnosis: Plasenta Previa Totalis. Ciri khas: perdarahan antepartum tanpa nyeri (painless bleeding), darah merah segar, uterus tidak tegang. USG mengkonfirmasi plasenta menutupi seluruh ostium uteri internum. Tatalaksana: rawat inap, tokolitik jika ada kontraksi, SC elektif pada usia kehamilan 37-38 minggu."
    },
  ],
  saraf: [
    {
      vignette: "Pria 65 tahun datang dengan kelemahan separuh tubuh kanan dan bicara pelo yang terjadi mendadak 1 jam yang lalu saat beraktivitas. Riwayat hipertensi tidak terkontrol dan fibrilasi atrium. PF: TD 180/100, hemiparesis dekstra, afasia motorik. CT scan kepala: infark di area MCA kiri.",
      hints: [
        "Pria lansia dengan defisit neurologis fokal mendadak.",
        "Hemiparesis kanan dan gangguan bicara — hemisfer kiri.",
        "Onset saat aktivitas, riwayat hipertensi dan AF.",
        "Afasia motorik — lesi di area Broca (frontal kiri).",
        "CT scan: infark area MCA kiri — stroke iskemik."
      ],
      options: ["Stroke Hemoragik", "Stroke Iskemik", "TIA", "Meningitis", "Tumor Otak"],
      answerIndex: 1,
      explanation: "Diagnosis: Stroke Iskemik akut pada teritori MCA kiri. Onset mendadak defisit neurologis fokal (hemiparesis kanan + afasia motorik) dengan CT scan menunjukkan infark. Fibrilasi atrium merupakan sumber emboli kardiak. Tatalaksana: jika <4.5 jam → trombolisis IV (alteplase). Antikoagulan jangka panjang untuk AF."
    },
  ],
  jiwa: [
    {
      vignette: "Wanita 22 tahun dibawa keluarga karena sering berbicara sendiri dan merasa ada yang mengontrol pikirannya sejak 2 bulan lalu. Pasien yakin tetangganya memasang kamera di rumahnya. Tidur terganggu, menarik diri dari lingkungan, fungsi sehari-hari menurun drastis. Tidak ada riwayat penggunaan zat.",
      hints: [
        "Wanita muda dengan perubahan perilaku subakut (2 bulan).",
        "Berbicara sendiri — kemungkinan halusinasi auditorik.",
        "Merasa ada yang mengontrol pikiran — thought insertion/control.",
        "Waham persekutorik (tetangga memasang kamera).",
        "Gejala >1 bulan, fungsi menurun, tanpa penggunaan zat — memenuhi kriteria skizofrenia."
      ],
      options: ["Gangguan Bipolar", "Skizofrenia", "Gangguan Delusional", "Gangguan Cemas", "Depresi Berat dengan Psikotik"],
      answerIndex: 1,
      explanation: "Diagnosis: Skizofrenia. Memenuhi kriteria DSM-5: ≥2 gejala (halusinasi, waham, disorganisasi) selama >1 bulan, fungsi menurun signifikan, durasi >6 bulan (termasuk prodromal). Gejala Schneider first-rank: thought control. Tatalaksana: antipsikotik (risperidon/olanzapin), psikoedukasi keluarga."
    },
  ],
  mata: [
    {
      vignette: "Pria 60 tahun datang dengan keluhan penglihatan kabur mendadak pada mata kanan sejak tadi pagi. Tidak ada nyeri. Riwayat DM tipe 2 sejak 15 tahun. PF: visus OD 1/60, funduskopi menunjukkan perdarahan vitreus, neovaskularisasi diskus, dan eksudat keras.",
      hints: [
        "Pria 60 tahun, penglihatan kabur mendadak, tanpa nyeri.",
        "Riwayat DM 15 tahun — komplikasi mikrovaskular kronik.",
        "Visus sangat menurun (1/60).",
        "Perdarahan vitreus — perdarahan dalam bola mata.",
        "Neovaskularisasi diskus — retinopati diabetik proliferatif."
      ],
      options: ["Katarak Senilis", "Retinopati Diabetik Proliferatif", "Glaukoma Akut", "Ablasio Retina", "ARMD"],
      answerIndex: 1,
      explanation: "Diagnosis: Retinopati Diabetik Proliferatif (PDR). DM lama (15 tahun) menyebabkan iskemia retina kronik → neovaskularisasi. Pembuluh darah baru rapuh → perdarahan vitreus → penurunan visus mendadak. Tatalaksana: fotokoagulasi laser panretinal, anti-VEGF intravitreal, kontrol gula darah ketat."
    },
  ],
  tht: [
    {
      vignette: "Anak laki-laki 5 tahun dibawa dengan keluhan hidung tersumbat, napas berbunyi saat tidur (snoring), dan sering bernapas lewat mulut sejak 6 bulan lalu. Sering mengalami infeksi telinga berulang. PF: adenoid face, pembesaran tonsil T3-T3, rongga hidung sempit.",
      hints: [
        "Anak dengan obstruksi napas kronik dan snoring.",
        "Bernapas lewat mulut — obstruksi nasal/orofaringeal.",
        "Infeksi telinga berulang — disfungsi tuba Eustachius.",
        "Adenoid face — wajah khas hipertrofi adenoid.",
        "Tonsil T3-T3 — obstruksi hampir total orofaring."
      ],
      options: ["Rhinitis Alergi", "Hipertrofi Adenoid dan Tonsilitis Kronik", "Polip Nasi", "Deviasi Septum", "Sinusitis Kronik"],
      answerIndex: 1,
      explanation: "Diagnosis: Hipertrofi Adenoid dan Tonsilitis Kronik. Trias: obstruksi napas (snoring, mouth breathing), adenoid facies, dan OMA berulang akibat disfungsi tuba Eustachius. Tonsil T3-T3 menunjukkan kissing tonsils. Indikasi tonsilektomi-adenoidektomi."
    },
  ],
  kulit: [
    {
      vignette: "Pria 25 tahun datang dengan keluhan bercak kemerahan bersisik tebal putih keperakan di siku dan lutut bilateral sejak 1 tahun. Keluhan hilang timbul, memberat saat stres. PF: plak eritematosa berbatas tegas dengan skuama putih tebal. Auspitz sign (+), fenomena Koebner (+).",
      hints: [
        "Pria muda dengan lesi kulit kronik-rekuren di area ekstensor.",
        "Bercak kemerahan bersisik — lesi papuloskuamosa.",
        "Skuama putih keperakan tebal — silver scale.",
        "Auspitz sign (+) — titik perdarahan saat skuama dikelupas.",
        "Fenomena Koebner (+) — lesi muncul di area trauma. Patognomonik psoriasis."
      ],
      options: ["Dermatitis Atopik", "Psoriasis Vulgaris", "Tinea Korporis", "Pitiriasis Rosea", "Lupus Diskoid"],
      answerIndex: 1,
      explanation: "Diagnosis: Psoriasis Vulgaris. Lesi klasik: plak eritematosa berbatas tegas dengan skuama putih keperakan (silver scale) di area ekstensor. Auspitz sign dan fenomena Koebner merupakan tanda patognomonik. Tatalaksana: topikal (kortikosteroid, vitamin D analog), fototerapi, atau sistemik (metotreksat) untuk kasus berat."
    },
  ],
  kardio: [
    {
      vignette: "Wanita 65 tahun datang dengan keluhan sesak napas yang memberat saat berbaring (orthopnea) dan terbangun malam hari karena sesak (PND) sejak 2 minggu. Riwayat hipertensi 20 tahun. PF: JVP meningkat, ronki basah di kedua basal paru, hepatomegali, edema tungkai bilateral. Ekokardiografi: EF 30%.",
      hints: [
        "Wanita lansia dengan sesak napas progresif.",
        "Orthopnea dan PND — tanda gagal jantung kiri.",
        "Riwayat hipertensi lama — penyebab kardiomiopati.",
        "JVP meningkat, hepatomegali, edema — tanda gagal jantung kanan.",
        "EF 30% — gagal jantung sistolik/HFrEF."
      ],
      options: ["PPOK Eksaserbasi", "Gagal Jantung Kongestif", "Pneumonia", "Efusi Pleura", "Emboli Paru"],
      answerIndex: 1,
      explanation: "Diagnosis: Gagal Jantung Kongestif (CHF/HFrEF). EF 30% menunjukkan disfungsi sistolik berat. Tanda gagal jantung kiri (orthopnea, PND, ronki) dan kanan (JVP meningkat, hepatomegali, edema) menunjukkan gagal jantung biventrikular. Tatalaksana: ACEi/ARB, beta-blocker, diuretik, MRA, restriksi cairan dan garam."
    },
  ],
  pulmo: [
    {
      vignette: "Pria 60 tahun, perokok berat 30 tahun, datang dengan batuk kronik berdahak, sesak napas saat aktivitas ringan sejak 1 tahun. PF: barrel chest, ekspirasi memanjang, wheezing bilateral. Spirometri: FEV1/FVC <70%, FEV1 45% prediksi, tidak reversibel dengan bronkodilator.",
      hints: [
        "Pria perokok berat dengan batuk kronik dan sesak progresif.",
        "Barrel chest — hiperinflasi paru kronik.",
        "Ekspirasi memanjang dan wheezing — obstruksi jalan napas.",
        "Spirometri: FEV1/FVC <70%, irresibel — obstruksi menetap.",
        "FEV1 45% prediksi — PPOK derajat berat (GOLD 3)."
      ],
      options: ["Asma Bronkial", "PPOK", "Fibrosis Paru", "Bronkiektasis", "Kanker Paru"],
      answerIndex: 1,
      explanation: "Diagnosis: PPOK (Penyakit Paru Obstruktif Kronik) derajat berat (GOLD 3). Riwayat merokok + obstruksi ireversibel pada spirometri. FEV1 30-49% prediksi = GOLD 3. Tatalaksana: berhenti merokok, bronkodilator kerja panjang (LABA+LAMA), rehabilitasi paru, vaksinasi influenza dan pneumokokus."
    },
  ],
  ortho: [
    {
      vignette: "Wanita 70 tahun jatuh terpeleset di kamar mandi. Keluhan nyeri hebat di pangkal paha kanan, tidak bisa berdiri. PF: tungkai kanan memendek, eksorotasi, nyeri hebat saat digerakkan. Riwayat osteoporosis. Rontgen pelvis AP: fraktur pada collum femoris kanan, Garden III.",
      hints: [
        "Wanita lansia jatuh — mekanisme low-energy trauma.",
        "Nyeri pangkal paha, tidak bisa weight-bearing.",
        "Tungkai memendek dan eksorotasi — deformitas fraktur hip.",
        "Riwayat osteoporosis — faktor risiko fraktur fragilitas.",
        "Fraktur collum femoris Garden III — displaced, risiko AVN tinggi."
      ],
      options: ["Fraktur Intertrokanter", "Fraktur Collum Femoris", "Dislokasi Hip", "Fraktur Pelvis", "Fraktur Shaft Femur"],
      answerIndex: 1,
      explanation: "Diagnosis: Fraktur Collum Femoris Garden III (displaced). Pada lansia dengan osteoporosis, fraktur ini sering terjadi akibat trauma ringan. Garden III = incomplete displacement. Risiko tinggi avascular necrosis (AVN) caput femoris. Tatalaksana pada lansia: hemiarthroplasty (bipolar). Pada pasien muda: internal fixation (cancellous screw)."
    },
  ],
  forensik: [
    {
      vignette: "Jenazah pria ditemukan di kamar tidur dengan posisi tergantung. Pada pemeriksaan luar: lebam mayat sesuai posisi tergantung (di tungkai dan lengan bawah), kaku mayat positif di seluruh tubuh, jejas jerat oblique di leher, tidak ditemukan tanda perlawanan. Simpul jerat berada di regio mastoid kiri.",
      hints: [
        "Jenazah ditemukan dalam posisi tergantung.",
        "Lebam mayat sesuai posisi — distribusi hipostatik.",
        "Kaku mayat menyeluruh — perkiraan waktu kematian 6-12 jam.",
        "Jejas jerat oblique (miring ke atas) di leher.",
        "Simpul di regio mastoid — typical hanging. Tidak ada tanda perlawanan."
      ],
      options: ["Penjeratan (Strangulasi Ligatur)", "Gantung Diri (Asfiksia Mekanik)", "Pencekikan", "Pembunuhan Tersamar", "Kematian Mendadak"],
      answerIndex: 1,
      explanation: "Diagnosis: Gantung Diri (Suicidal Hanging). Ciri khas: jejas jerat oblique/miring ke atas (berbeda dengan strangulasi ligatur yang horizontal), simpul di regio mastoid (typical hanging), lebam mayat sesuai posisi, tidak ada tanda perlawanan (defense wound). Pada medikolegal, penting membedakan hanging dari strangulasi untuk penentuan manner of death."
    },
  ],
  radiologi: [
    {
      vignette: "Pria 50 tahun datang dengan batuk darah dan penurunan BB. Riwayat merokok 25 tahun. Rontgen toraks PA menunjukkan massa radioopak di hilus kanan dengan coin lesion di lapangan atas paru kanan. CT scan thorax: massa 4 cm di bronkus utama kanan dengan limfadenopati mediastinum.",
      hints: [
        "Pria perokok berat dengan hemoptisis dan weight loss.",
        "Rontgen: massa di hilus — lokasi sentral.",
        "Coin lesion di lapangan atas paru.",
        "CT scan: massa 4 cm di bronkus utama + limfadenopati.",
        "Perokok + massa sentral + limfadenopati → curiga keganasan paru."
      ],
      options: ["TB Paru", "Kanker Paru", "Pneumonia", "Sarkoidosis", "Metastasis Paru"],
      answerIndex: 1,
      explanation: "Diagnosis: Kanker Paru (suspek karsinoma bronkogenik). Perokok berat dengan hemoptisis, penurunan BB, massa hilus, dan limfadenopati mediastinum merupakan red flags keganasan paru. Lokasi sentral (bronkus utama) mengarah ke small cell atau squamous cell carcinoma. Langkah selanjutnya: bronkoskopi + biopsi untuk konfirmasi histopatologi, staging dengan PET-CT."
    },
  ],
  anestesi: [
    {
      vignette: "Wanita 35 tahun akan menjalani operasi SC emergency. Dilakukan spinal anestesi. 5 menit pasca injeksi, pasien mengeluh sesak, TD turun ke 70/40 mmHg, nadi 50x/menit, mual. Blok sensoris setinggi T2. Kesadaran mulai menurun.",
      hints: [
        "Pasien pasca spinal anestesi dengan hemodinamik tidak stabil.",
        "Hipotensi berat dan bradikardia — blokade simpatis.",
        "Sesak napas — kemungkinan paralisis otot pernapasan.",
        "Blok sensoris T2 — level terlalu tinggi (high spinal).",
        "Penurunan kesadaran — hipoperfusi serebral. Total spinal anesthesia."
      ],
      options: ["Syok Anafilaktik", "Total Spinal Anesthesia", "Emboli Air Ketuban", "Syok Kardiogenik", "Reaksi Vasovagal"],
      answerIndex: 1,
      explanation: "Diagnosis: Total Spinal Anesthesia. Komplikasi serius spinal anestesi dimana agen anestesi naik terlalu tinggi, menyebabkan blokade simpatis total (hipotensi, bradikardia), paralisis otot pernapasan, dan penurunan kesadaran. Tatalaksana: ABC, intubasi, efedrin/adrenalin untuk hipotensi, atropin untuk bradikardia, cairan IV agresif."
    },
  ],
  farmako: [
    {
      vignette: "Pria 55 tahun dengan riwayat gout datang untuk kontrol. Pasien sedang mengonsumsi allopurinol 300 mg/hari. Ia mengeluh timbul ruam kulit merah yang meluas di seluruh tubuh sejak 1 minggu, disertai demam tinggi, mata merah, dan lesi di mukosa mulut. PF: epidermal detachment >30% TBSA, Nikolsky sign (+).",
      hints: [
        "Pasien mengonsumsi allopurinol — obat pencetus reaksi kulit berat.",
        "Ruam merah meluas dengan demam tinggi.",
        "Keterlibatan mukosa (mata, mulut) — bukan reaksi ringan.",
        "Epidermal detachment >30% TBSA — nekrolisis epidermal.",
        "Nikolsky sign (+), >30% TBSA — Toxic Epidermal Necrolysis (TEN)."
      ],
      options: ["Stevens-Johnson Syndrome", "Toxic Epidermal Necrolysis", "Eritema Multiforme", "Drug Rash", "Pemfigus Vulgaris"],
      answerIndex: 1,
      explanation: "Diagnosis: Toxic Epidermal Necrolysis (TEN). Reaksi obat berat yang mengancam jiwa. SJS: <10% TBSA, SJS-TEN overlap: 10-30%, TEN: >30% TBSA. Allopurinol adalah salah satu obat pencetus tersering. Tatalaksana: hentikan obat pencetus segera, rawat di burn unit/ICU, perawatan luka, cairan IV, pertimbangkan IVIG atau siklosporin."
    },
  ],
  mikro: [
    {
      vignette: "Anak perempuan 8 tahun datang dengan demam tinggi 5 hari, nyeri retro-orbital, mialgia berat, dan ruam petekiae di ekstremitas. Tourniquet test (+). Lab: trombosit 80.000/μL, hematokrit meningkat 22% dari baseline. Tinggal di daerah endemis dan banyak genangan air.",
      hints: [
        "Anak dengan demam tinggi 5 hari di daerah endemis.",
        "Nyeri retro-orbital dan mialgia — gejala khas infeksi virus.",
        "Ruam petekiae dan tourniquet test (+) — kebocoran vaskular.",
        "Trombositopenia (<100.000) — penanda infeksi dengue.",
        "Hemokonsentrasi (Ht naik >20%) — tanda dengue hemorrhagic fever."
      ],
      options: ["Demam Tifoid", "Dengue Hemorrhagic Fever", "Malaria", "Chikungunya", "Leptospirosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Dengue Hemorrhagic Fever (DHF). Kriteria WHO: demam 2-7 hari, manifestasi perdarahan (petekiae, tourniquet +), trombositopenia (<100.000), dan bukti kebocoran plasma (hemokonsentrasi >20%). Vektor: nyamuk Aedes aegypti. Tatalaksana: suportif — cairan IV kristaloid, monitor hematokrit tiap 4-6 jam, hindari NSAID."
    },
  ],
  komunitas: [
    {
      vignette: "Sebuah puskesmas melaporkan 15 kasus diare berdarah dalam 1 minggu di satu kelurahan. Semua pasien mengonsumsi air dari sumber yang sama. Kultur feses menunjukkan bakteri gram negatif batang non-motil. Kepala puskesmas diminta menentukan jenis kejadian dan langkah pengendalian.",
      hints: [
        "15 kasus diare berdarah dalam 1 minggu — peningkatan insiden.",
        "Satu kelurahan, sumber air yang sama — common source.",
        "Memenuhi kriteria KLB (Kejadian Luar Biasa) — peningkatan kasus >2x.",
        "Bakteri gram negatif batang non-motil — curiga Shigella.",
        "Langkah: lapor Dinkes <24 jam, investigasi epidemiologi, intervensi air bersih."
      ],
      options: ["Endemi", "Kejadian Luar Biasa (KLB)", "Pandemi", "Wabah Siklis", "Sporadis"],
      answerIndex: 1,
      explanation: "Diagnosis: Kejadian Luar Biasa (KLB) Disentri Basiler. Memenuhi kriteria KLB Permenkes: peningkatan kasus >2x dari biasa di wilayah dan waktu tertentu. Sumber: kontaminasi air (common source outbreak). Agen: Shigella (gram negatif batang non-motil). Langkah: lapor Dinkes <24 jam, penyelidikan epidemiologi (W1-W2), intervensi sumber air, pengobatan massal, penyuluhan PHBS."
    },
  ],
};
