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
    {
      vignette: "Pria 40 tahun datang dengan keluhan nyeri sendi metatarsofalangeal I (MTP-1) kaki kanan yang sangat hebat, terjadi mendadak tengah malam. Sendi bengkak, merah, hangat. Riwayat sering makan jeroan dan minum alkohol. Lab: asam urat serum 12 mg/dL. Aspirasi cairan sendi menunjukkan kristal berbentuk jarum dengan birefringence negatif.",
      hints: [
        "Pria dengan nyeri sendi akut monoartikular, onset malam hari.",
        "Sendi MTP-1 (podagra) — lokasi klasik artritis gout.",
        "Riwayat konsumsi jeroan dan alkohol — pencetus hiperurisemia.",
        "Asam urat serum sangat tinggi (12 mg/dL).",
        "Kristal jarum birefringence negatif — kristal monosodium urat (MSU)."
      ],
      options: ["Artritis Septik", "Artritis Gout Akut", "Pseudogout", "Artritis Reumatoid", "Osteoartritis"],
      answerIndex: 1,
      explanation: "Diagnosis: Artritis Gout Akut. Serangan akut monoartikular di MTP-1 (podagra) adalah presentasi klasik. Kristal MSU (jarum, birefringence negatif) pada aspirasi sendi merupakan gold standard diagnosis. Tatalaksana akut: NSAID (indometasin), kolkisin, atau kortikosteroid. Profilaksis: allopurinol setelah serangan mereda."
    },
    {
      vignette: "Wanita 30 tahun datang dengan keluhan sering haus berlebihan (polidipsi), sering kencing (poliuria), dan penurunan berat badan 8 kg dalam 2 bulan meskipun nafsu makan meningkat. PF: IMT 18, turgor kulit menurun. Lab: GDS 450 mg/dL, pH darah 7.2, keton darah positif kuat, HbA1c 13%.",
      hints: [
        "Wanita muda dengan trias polidipsi, poliuria, dan penurunan BB.",
        "Nafsu makan meningkat tapi BB turun — katabolisme berat.",
        "GDS sangat tinggi (450 mg/dL) — hiperglikemia berat.",
        "pH 7.2, keton positif kuat — asidosis metabolik ketoasidosis.",
        "HbA1c 13% — kontrol glikemik sangat buruk. Ketoasidosis Diabetikum."
      ],
      options: ["DM Tipe 2", "Ketoasidosis Diabetikum (KAD)", "Hiperosmolar Hiperglikemik", "Diabetes Insipidus", "Tirotoksikosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Ketoasidosis Diabetikum (KAD). Trias KAD: hiperglikemia (>250 mg/dL), asidosis metabolik (pH <7.3), ketosis. Lebih sering pada DM tipe 1. Tatalaksana: resusitasi cairan NaCl 0.9%, insulin drip IV, koreksi kalium, monitor ketat elektrolit dan AGD."
    },
    {
      vignette: "Pria 62 tahun datang dengan keluhan BAB hitam (melena) sejak 3 hari dan lemas. Riwayat konsumsi NSAID jangka panjang untuk nyeri lutut. PF: konjungtiva anemis, TD 100/60 mmHg, nadi 110x/menit. Lab: Hb 7 g/dL. Endoskopi: ulkus di antrum gaster dengan dasar bersih, ukuran 2 cm.",
      hints: [
        "Pria lansia dengan melena (BAB hitam) — perdarahan saluran cerna atas.",
        "Riwayat NSAID jangka panjang — risiko ulkus peptikum.",
        "Tanda anemia dan syok hipovolemik ringan.",
        "Hb sangat rendah (7 g/dL) — perdarahan signifikan.",
        "Endoskopi: ulkus antrum gaster — ulkus peptikum et causa NSAID."
      ],
      options: ["Varises Esofagus", "Ulkus Peptikum", "Mallory-Weiss Syndrome", "Kanker Gaster", "Gastritis Erosif"],
      answerIndex: 1,
      explanation: "Diagnosis: Ulkus Peptikum (Ulkus Gaster) akibat NSAID. NSAID menghambat prostaglandin → gangguan proteksi mukosa → ulserasi. Klasifikasi Forrest IIc (dasar bersih). Tatalaksana: hentikan NSAID, PPI dosis tinggi IV, transfusi PRC jika Hb <7, tes H. pylori dan eradikasi jika positif."
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
    {
      vignette: "Anak perempuan 4 tahun dibawa dengan keluhan demam tinggi 5 hari, ruam merah di seluruh tubuh yang muncul hari ke-4 demam. Mata merah bilateral tanpa sekret, bibir merah pecah-pecah, lidah strawberry, pembengkakan telapak tangan dan kaki, serta pembesaran KGB servikal unilateral >1.5 cm. Lab: trombosit 550.000, LED 80, CRP tinggi.",
      hints: [
        "Anak dengan demam tinggi >5 hari — demam persisten.",
        "Konjungtivitis bilateral non-purulenta — bukan infeksi bakteri.",
        "Perubahan mukosa oral (bibir pecah, strawberry tongue) dan ruam.",
        "Perubahan ekstremitas (edema telapak tangan/kaki) + limfadenopati servikal.",
        "Trombositosis, LED tinggi — memenuhi ≥4/5 kriteria Kawasaki Disease."
      ],
      options: ["Campak", "Kawasaki Disease", "Scarlet Fever", "Stevens-Johnson Syndrome", "Demam Rematik"],
      answerIndex: 1,
      explanation: "Diagnosis: Kawasaki Disease. Memenuhi ≥4/5 kriteria klinis utama: (1) konjungtivitis bilateral, (2) perubahan mukosa oral, (3) ruam polimorfik, (4) perubahan ekstremitas, (5) limfadenopati servikal. Komplikasi utama: aneurisma arteri koroner. Tatalaksana: IVIG 2g/kg dosis tunggal + aspirin dosis tinggi, diikuti aspirin dosis rendah 6-8 minggu."
    },
    {
      vignette: "Bayi perempuan usia 2 hari, lahir cukup bulan, tampak kuning pada wajah dan dada. Lahir dari ibu golongan darah O, ayah golongan darah A. Lab: bilirubin total 18 mg/dL (indirek dominan), golongan darah bayi A positif, Coombs test direk (+). Hb 14 g/dL, retikulosit 8%.",
      hints: [
        "Neonatus ikterus pada hari ke-2 — ikterus patologis (muncul <24 jam atau bilirubin tinggi).",
        "Ibu golongan O, bayi golongan A — inkompatibilitas ABO.",
        "Bilirubin indirek dominan — hemolisis ekstravaskuler.",
        "Coombs test direk (+) — antibodi maternal pada eritrosit bayi.",
        "Retikulosit tinggi (8%) — eritropoiesis kompensatorik terhadap hemolisis."
      ],
      options: ["Ikterus Fisiologis", "Inkompatibilitas ABO", "Inkompatibilitas Rhesus", "Atresia Bilier", "Sepsis Neonatal"],
      answerIndex: 1,
      explanation: "Diagnosis: Ikterus Neonatorum akibat Inkompatibilitas ABO. Ibu golongan O memiliki anti-A dan anti-B IgG yang menembus plasenta dan menyerang eritrosit bayi golongan A. Coombs test direk positif mengkonfirmasi proses imun. Tatalaksana: fototerapi intensif, jika bilirubin sangat tinggi atau gagal fototerapi → transfusi tukar."
    },
    {
      vignette: "Anak laki-laki 3 tahun datang dengan keluhan bengkak di seluruh tubuh sejak 1 minggu. Bengkak dimulai dari kelopak mata saat bangun tidur, kemudian meluas ke perut dan tungkai. PF: edema palpebra, asites, edema pretibial pitting. Lab: albumin 1.8 g/dL, kolesterol 350 mg/dL, urinalisis protein +++, eritrosit (-). Fungsi ginjal normal.",
      hints: [
        "Anak dengan edema generalisata onset subakut.",
        "Edema palpebra pagi hari — khas edema renal.",
        "Hipoalbuminemia berat (1.8 g/dL) — kehilangan protein masif.",
        "Proteinuria masif (+++) tanpa hematuria — penyakit glomerular.",
        "Trias: edema, hipoalbuminemia, proteinuria masif + hiperkolesterolemia = Sindrom Nefrotik."
      ],
      options: ["Sindrom Nefritik", "Sindrom Nefrotik", "Gagal Jantung Kongestif", "Kwashiorkor", "Sirosis Hepatis"],
      answerIndex: 1,
      explanation: "Diagnosis: Sindrom Nefrotik. Pada anak, tersering adalah Minimal Change Disease (MCD). Kriteria: proteinuria masif (>40 mg/m²/jam), hipoalbuminemia (<2.5 g/dL), edema, dan hiperkolesterolemia. Tatalaksana lini pertama: prednison 2 mg/kg/hari (maks 60 mg) selama 4-6 minggu, kemudian alternating dose 4 minggu. Sebagian besar MCD responsif steroid."
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
    {
      vignette: "Wanita 50 tahun datang dengan keluhan nyeri kolik di perut kanan atas menjalar ke punggung kanan sejak 6 jam lalu, disertai mual dan muntah. Riwayat nyeri serupa berulang setelah makan berlemak. PF: Murphy sign (+), nyeri tekan hipokondrium kanan. Lab: leukosit 14.000/μL. USG: batu multipel di kandung empedu dengan penebalan dinding >4 mm dan cairan perikolesistik.",
      hints: [
        "Wanita 50 tahun (4F: female, forty, fat, fertile) dengan nyeri kolik bilier.",
        "Nyeri kanan atas menjalar ke punggung — kolik bilier khas.",
        "Riwayat nyeri berulang setelah makan berlemak — batu empedu simptomatik.",
        "Murphy sign (+) — iritasi kandung empedu saat inspirasi.",
        "USG: batu, penebalan dinding, cairan perikolesistik — kolesistitis akut."
      ],
      options: ["Pankreatitis Akut", "Kolesistitis Akut", "Hepatitis Akut", "Ulkus Duodenum Perforasi", "Abses Hepar"],
      answerIndex: 1,
      explanation: "Diagnosis: Kolesistitis Akut. Kriteria Tokyo: (1) tanda lokal (Murphy sign, nyeri kanan atas), (2) tanda sistemik (demam, leukositosis), (3) temuan imaging (USG: batu, penebalan dinding, cairan perikolesistik). Tatalaksana: antibiotik IV + kolesistektomi laparoskopi early (dalam 72 jam)."
    },
    {
      vignette: "Pria 45 tahun dibawa ke IGD setelah kecelakaan motor. Pasien sadar, mengeluh nyeri dada kiri dan sesak. PF: TD 90/60, nadi 120x/menit, JVP meningkat, trakea deviasi ke kanan, suara napas menghilang di hemitoraks kiri, perkusi hipersonor di kiri. SpO2 85%.",
      hints: [
        "Trauma dada dengan hemodinamik tidak stabil.",
        "Sesak napas berat dengan hipoksia (SpO2 85%).",
        "JVP meningkat + hipotensi — obstruksi venous return.",
        "Trakea deviasi ke kontralateral — mediastinal shift.",
        "Perkusi hipersonor + suara napas hilang di kiri — tension pneumothorax."
      ],
      options: ["Hemotoraks Masif", "Tension Pneumothorax", "Tamponade Jantung", "Flail Chest", "Kontusio Paru"],
      answerIndex: 1,
      explanation: "Diagnosis: Tension Pneumothorax. Diagnosis klinis (jangan tunggu rontgen!): hipersonor, suara napas hilang, trakea deviasi, JVP meningkat, hipotensi. Merupakan keadaan darurat yang mengancam jiwa. Tatalaksana segera: needle decompression di ICS 2 midclavicular line, dilanjutkan pemasangan chest tube (WSD) di ICS 5 anterior axillary line."
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
    {
      vignette: "Wanita 26 tahun G1P0A0 usia kehamilan 32 minggu datang dengan keluhan nyeri kepala hebat, pandangan kabur, dan nyeri ulu hati. TD 180/110 mmHg, proteinuria +3. Lab: trombosit 90.000/μL, SGOT 250 U/L, SGPT 280 U/L, LDH 800 U/L. Apusan darah tepi: schistocytes (+).",
      hints: [
        "Primigravida dengan hipertensi berat di trimester 3.",
        "Nyeri kepala, pandangan kabur — tanda impending eklampsia.",
        "TD 180/110, proteinuria +3 — preeklampsia berat.",
        "Trombositopenia + peningkatan enzim hati + LDH tinggi.",
        "Schistocytes pada apusan darah — hemolisis mikroangiopatik → HELLP Syndrome."
      ],
      options: ["Preeklampsia Ringan", "HELLP Syndrome", "Eklampsia", "Fatty Liver of Pregnancy", "Hepatitis Akut"],
      answerIndex: 1,
      explanation: "Diagnosis: HELLP Syndrome (Hemolysis, Elevated Liver enzymes, Low Platelet). Komplikasi berat preeklampsia. Kriteria: hemolisis (LDH >600, schistocytes), peningkatan enzim hati (SGOT/SGPT >70), trombositopenia (<100.000). Tatalaksana: stabilisasi ibu (MgSO4, antihipertensi), terminasi kehamilan segera (SC), dan kortikosteroid jika <34 minggu."
    },
    {
      vignette: "Wanita 28 tahun datang dengan keluhan terlambat haid 8 minggu, nyeri perut kiri bawah mendadak, dan perdarahan pervaginam sedikit berwarna cokelat tua. PF: TD 90/60, nadi 120x/menit, nyeri tekan abdomen kiri bawah, nyeri goyang porsio (+). β-hCG: 3.500 mIU/mL. USG transvaginal: massa adneksa kiri dengan cairan bebas di kavum Douglas, uterus kosong.",
      hints: [
        "Wanita usia reproduktif dengan amenorea dan nyeri perut akut.",
        "Tanda syok hipovolemik — perdarahan intraabdominal.",
        "Nyeri goyang porsio (+) — iritasi peritoneum pelvis.",
        "β-hCG positif tapi uterus kosong pada USG.",
        "Massa adneksa + cairan bebas di Douglas — kehamilan ektopik terganggu."
      ],
      options: ["Abortus Imminens", "Kehamilan Ektopik Terganggu", "Kista Ovarium Terpuntir", "Mola Hidatidosa", "Abortus Inkompletus"],
      answerIndex: 1,
      explanation: "Diagnosis: Kehamilan Ektopik Terganggu (KET). β-hCG positif dengan uterus kosong dan massa adneksa mengarah ke kehamilan ektopik. Ruptur menyebabkan perdarahan intraabdominal (cairan bebas Douglas) dan syok. Tatalaksana: laparotomi/laparoskopi emergensi → salpingektomi, resusitasi cairan dan transfusi darah."
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
    {
      vignette: "Wanita 25 tahun datang dengan keluhan kelemahan kedua tungkai yang naik ke atas dalam 3 hari. Awalnya kesemutan di ujung kaki, kemudian tidak bisa berjalan. 2 minggu lalu pasien mengalami diare akut. PF: paraparesis flaksid, refleks fisiologis menghilang, gangguan sensoris pola glove-stocking. Fungsi otonom terganggu (retensi urin).",
      hints: [
        "Wanita muda dengan kelemahan ascending progresif.",
        "Riwayat infeksi sebelumnya (diare) — post-infectious.",
        "Paraparesis flaksid — LMN pattern, bukan UMN.",
        "Refleks menghilang + gangguan sensoris glove-stocking.",
        "Ascending paralysis + arefleksia + post-infection = Guillain-Barré Syndrome."
      ],
      options: ["Mielitis Transversa", "Guillain-Barré Syndrome", "Myasthenia Gravis", "Poliomielitis", "Multiple Sclerosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Guillain-Barré Syndrome (GBS). Polineuropati demielinisasi akut pasca-infeksi (sering Campylobacter jejuni). Ciri khas: ascending paralysis, arefleksia, gangguan sensoris, disfungsi otonom. LP: disosiasi sitoalbumin (protein tinggi, sel normal). Tatalaksana: IVIG 0.4g/kg/hari selama 5 hari atau plasmaferesis. Monitor fungsi pernapasan — risiko gagal napas."
    },
    {
      vignette: "Pria 70 tahun dibawa keluarga karena tremor tangan kanan saat istirahat yang memberat sejak 1 tahun, berjalan lambat dengan langkah pendek-pendek, dan sulit memulai gerakan. PF: resting tremor tangan kanan (pill-rolling), rigiditas cogwheel di ekstremitas atas, bradikinesia, postur membungkuk, gait shuffling.",
      hints: [
        "Pria lansia dengan tremor istirahat progresif.",
        "Tremor saat istirahat (resting tremor) — bukan essential tremor.",
        "Rigiditas cogwheel — peningkatan tonus khas ekstrapiramidal.",
        "Bradikinesia + kesulitan inisiasi gerakan — gangguan basal ganglia.",
        "Trias: resting tremor + rigiditas + bradikinesia = Penyakit Parkinson."
      ],
      options: ["Essential Tremor", "Penyakit Parkinson", "Parkinsonism Vaskular", "Progressive Supranuclear Palsy", "Huntington Disease"],
      answerIndex: 1,
      explanation: "Diagnosis: Penyakit Parkinson idiopatik. Trias kardinal: resting tremor (pill-rolling), rigiditas (cogwheel), dan bradikinesia. Gejala biasanya asimetris di awal. Patologi: degenerasi neuron dopaminergik di substansia nigra. Tatalaksana: levodopa/carbidopa (gold standard), dopamine agonist, MAO-B inhibitor."
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
    {
      vignette: "Pria 35 tahun dibawa ke IGD oleh polisi karena ditemukan di jalan sedang berteriak-teriak, menari, dan mengaku sebagai presiden. Keluarga menyatakan pasien tidak tidur 5 hari, sangat bersemangat, banyak bicara, dan menghamburkan uang untuk membeli barang mewah. Tidak ada riwayat penggunaan zat. Riwayat episode depresi berat 2 tahun lalu.",
      hints: [
        "Pria dengan perilaku hiperaktif dan grandiose delusion.",
        "Tidak tidur 5 hari, energi berlebih — penurunan kebutuhan tidur.",
        "Flight of ideas, pressure of speech, spending spree — gejala manik.",
        "Riwayat episode depresi sebelumnya — bipolaritas.",
        "Episode manik + riwayat depresi = Gangguan Bipolar I, episode manik."
      ],
      options: ["Skizofrenia", "Gangguan Bipolar I", "Gangguan Skizoafektif", "Intoksikasi Zat", "Gangguan Kepribadian Narsisistik"],
      answerIndex: 1,
      explanation: "Diagnosis: Gangguan Bipolar I, episode manik. Memenuhi kriteria DSM-5 episode manik: mood elasi/iritabel ≥1 minggu, ≥3 gejala (grandiosity, penurunan tidur, pressure of speech, flight of ideas, spending spree). Riwayat episode depresi mengkonfirmasi bipolar. Tatalaksana: mood stabilizer (lithium/valproat) + antipsikotik atipik. Hospitalisasi jika ada bahaya."
    },
    {
      vignette: "Wanita 20 tahun dibawa oleh teman karena ditemukan di kamar dengan bekas sayatan di pergelangan tangan. Pasien mengatakan merasa kosong, sering berubah mood drastis, takut ditinggalkan, dan sudah 3 kali mencoba bunuh diri. Riwayat hubungan interpersonal tidak stabil, idealisasi dan devaluasi bergantian terhadap orang dekat.",
      hints: [
        "Wanita muda dengan self-harm dan percobaan bunuh diri berulang.",
        "Perasaan kosong kronik dan instabilitas mood.",
        "Fear of abandonment — ketakutan ditinggalkan yang intens.",
        "Pola hubungan tidak stabil (idealisasi-devaluasi/splitting).",
        "Self-harm + instabilitas mood + fear of abandonment + splitting = Borderline Personality Disorder."
      ],
      options: ["Depresi Mayor", "Borderline Personality Disorder", "Gangguan Bipolar II", "PTSD", "Gangguan Histrionik"],
      answerIndex: 1,
      explanation: "Diagnosis: Borderline Personality Disorder (BPD). Memenuhi ≥5/9 kriteria DSM-5: (1) upaya menghindari abandonment, (2) hubungan tidak stabil, (3) gangguan identitas, (4) impulsivitas, (5) self-harm/suicidal, (6) instabilitas afektif, (7) perasaan kosong, (8) kemarahan tidak terkontrol, (9) ideasi paranoid. Tatalaksana: Dialectical Behavior Therapy (DBT) sebagai terapi utama."
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
    {
      vignette: "Wanita 55 tahun datang dengan keluhan nyeri mata kanan hebat, mata merah, pandangan kabur, melihat halo di sekitar cahaya, disertai mual dan muntah. Onset mendadak malam hari. PF: visus OD 1/300, injeksi siliar, kornea edema (keruh), pupil mid-dilatasi non-reaktif, TIO OD 55 mmHg (palpasi keras seperti batu). Mata kiri normal.",
      hints: [
        "Nyeri mata akut hebat dengan mual muntah — bukan konjungtivitis biasa.",
        "Mata merah dengan injeksi siliar — peradangan dalam.",
        "Kornea keruh, halo vision — edema kornea akibat TIO tinggi.",
        "Pupil mid-dilatasi fixed — blok pupil.",
        "TIO 55 mmHg (normal <21) — glaukoma akut sudut tertutup."
      ],
      options: ["Konjungtivitis Akut", "Glaukoma Akut Sudut Tertutup", "Uveitis Anterior", "Keratitis", "Endoftalmitis"],
      answerIndex: 1,
      explanation: "Diagnosis: Glaukoma Akut Sudut Tertutup (Acute Angle-Closure Glaucoma). Kedaruratan oftalmologi! Blok pupil menyebabkan penutupan sudut iridokorneal → TIO naik drastis. Tatalaksana darurat: timolol tetes, pilokarpin 2%, asetazolamid IV/oral, manitol IV. Definitif: laser iridotomi perifer. Mata kontralateral juga perlu iridotomi profilaksis."
    },
    {
      vignette: "Pria 30 tahun datang dengan keluhan mata kanan merah, nyeri, fotofobia, dan pandangan kabur sejak 3 hari. Riwayat nyeri punggung bawah kronik yang kaku di pagi hari. PF: injeksi perikorneal, flare dan cells di bilik mata depan, pupil miosis ireguler (sinekia posterior), TIO normal. Keratic precipitates halus di endotel kornea.",
      hints: [
        "Pria muda dengan mata merah nyeri + fotofobia — bukan konjungtivitis.",
        "Injeksi perikorneal — peradangan segmen anterior.",
        "Flare dan cells di bilik mata depan — reaksi inflamasi aqueous.",
        "Sinekia posterior — perlengketan iris ke lensa.",
        "Riwayat nyeri punggung (spondilitis ankilosa) — uveitis anterior terkait HLA-B27."
      ],
      options: ["Konjungtivitis Bakterial", "Uveitis Anterior Akut", "Glaukoma Akut", "Skleritis", "Keratitis Herpes"],
      answerIndex: 1,
      explanation: "Diagnosis: Uveitis Anterior Akut (Iritis). Asosiasi kuat dengan HLA-B27 dan spondilitis ankilosa. Temuan khas: injeksi perikorneal, flare/cells di COA, sinekia posterior, keratic precipitates. Tatalaksana: kortikosteroid topikal (prednisolon asetat 1%), sikloplegik (atropin/siklopentolat) untuk mencegah sinekia dan mengurangi nyeri."
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
    {
      vignette: "Pria 45 tahun datang dengan keluhan telinga kanan berdenging dan pendengaran menurun sejak 6 bulan. Keluhan disertai vertigo berputar episodik yang berlangsung 20-60 menit, disertai mual. PF: nistagmus horizontal saat serangan, tes Rinne (+) bilateral, Weber lateralisasi ke kiri. Audiometri: tuli sensorineural telinga kanan pada frekuensi rendah.",
      hints: [
        "Pria dengan tinnitus, pendengaran turun, dan vertigo episodik.",
        "Vertigo berputar 20-60 menit — bukan BPPV (detik) atau vestibular neuritis (hari).",
        "Trias: vertigo + tinnitus + tuli sensorineural — gangguan koklea-vestibular.",
        "Tuli sensorineural frekuensi rendah — khas hidrops endolimfatik.",
        "Trias klasik + durasi serangan 20 menit - 12 jam = Penyakit Meniere."
      ],
      options: ["BPPV", "Penyakit Meniere", "Vestibular Neuritis", "Neuroma Akustik", "Otosklerosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Penyakit Meniere (Hidrops Endolimfatik). Kriteria: ≥2 episode vertigo spontan 20 menit - 12 jam, tuli sensorineural frekuensi rendah-sedang, tinnitus/fullness aural. Patofisiologi: akumulasi endolimfe berlebihan. Tatalaksana: diet rendah garam, diuretik (HCT), betahistin, antiemetik saat serangan."
    },
    {
      vignette: "Pria 50 tahun datang dengan keluhan suara serak (hoarseness) progresif sejak 3 bulan dan sensasi mengganjal di tenggorok. Riwayat merokok 30 tahun dan minum alkohol. Penurunan BB 5 kg. Laringoskopi indirek: massa eksofitik di plika vokalis kanan, plika vokalis kanan terfiksir. KGB servikal kanan teraba, keras, tidak nyeri.",
      hints: [
        "Suara serak progresif >2 minggu pada perokok berat — red flag.",
        "Riwayat merokok + alkohol — faktor risiko keganasan kepala-leher.",
        "Penurunan berat badan — tanda keganasan.",
        "Massa eksofitik di plika vokalis dengan fiksasi — invasi lokal.",
        "Limfadenopati servikal keras, tidak nyeri — metastasis KGB → Karsinoma Laring."
      ],
      options: ["Laringitis Kronik", "Karsinoma Laring", "Polip Plika Vokalis", "Nodul Plika Vokalis", "Papiloma Laring"],
      answerIndex: 1,
      explanation: "Diagnosis: Karsinoma Laring (Squamous Cell Carcinoma). Faktor risiko utama: merokok dan alkohol. Hoarseness >2 minggu pada perokok harus dievaluasi untuk keganasan. Fiksasi plika vokalis menunjukkan invasi otot/kartilago (≥T3). Tatalaksana: biopsi konfirmasi, staging CT/MRI, terapi sesuai stadium (laringektomi ± radioterapi/kemoterapi)."
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
    {
      vignette: "Anak 8 tahun datang dengan keluhan gatal hebat terutama malam hari di sela jari tangan, pergelangan tangan, dan lipatan ketiak. Beberapa anggota keluarga juga mengalami keluhan serupa. PF: papul dan vesikel kecil di sela jari, terowongan (burrow) linear keabu-abuan, ekskoriasi bekas garukan.",
      hints: [
        "Anak dengan pruritus nokturnal (gatal malam) — khas infestasi parasit.",
        "Lokasi: sela jari, pergelangan tangan, lipat ketiak — predileksi khas.",
        "Anggota keluarga juga terkena — penyakit menular kontak langsung.",
        "Terowongan (burrow) linear — tanda patognomonik.",
        "Burrow di sela jari + pruritus nokturnal + penularan keluarga = Skabies."
      ],
      options: ["Dermatitis Kontak", "Skabies", "Prurigo", "Dermatitis Atopik", "Impetigo"],
      answerIndex: 1,
      explanation: "Diagnosis: Skabies (kudis). Infestasi Sarcoptes scabiei var. hominis. Patognomonik: terowongan (burrow) di predileksi khas (sela jari, pergelangan tangan, areola, genitalia). Pruritus memburuk malam hari karena tungau aktif. Tatalaksana: permetrin 5% krim (seluruh tubuh dari leher ke bawah, didiamkan 8-12 jam), obati seluruh anggota keluarga bersamaan, cuci dan jemur linen."
    },
    {
      vignette: "Wanita 35 tahun datang dengan keluhan bercak putih kehilangan warna di wajah, tangan, dan lutut yang meluas perlahan sejak 6 bulan. Tidak gatal. PF: makula depigmentasi berbatas tegas, permukaan rata, rambut di area lesi memutih (poliosis). Pemeriksaan lampu Wood menunjukkan lesi berfluoresensi terang.",
      hints: [
        "Bercak putih (depigmentasi) progresif di beberapa lokasi.",
        "Tidak gatal — bukan infeksi jamur.",
        "Makula depigmentasi berbatas tegas — kehilangan melanosit total.",
        "Poliosis (rambut putih di area lesi) — destruksi melanosit folikular.",
        "Fluoresensi terang pada lampu Wood — amelanosis total → Vitiligo."
      ],
      options: ["Pitiriasis Versicolor", "Vitiligo", "Pitiriasis Alba", "Lepra (Morbus Hansen)", "Post-inflammatory Hypopigmentation"],
      answerIndex: 1,
      explanation: "Diagnosis: Vitiligo. Penyakit autoimun yang menyerang melanosit. Lesi: makula/patch depigmentasi (bukan hipopigmentasi) berbatas tegas. Fluoresensi bright white pada lampu Wood. Sering terkait penyakit autoimun lain (tiroid, DM tipe 1). Tatalaksana: kortikosteroid topikal, inhibitor kalsineurin (tacrolimus), fototerapi NB-UVB, atau terapi kombinasi."
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
    {
      vignette: "Pria 22 tahun atlet basket tiba-tiba kolaps di lapangan saat pertandingan. Ditemukan tidak sadar, tidak bernapas, dan tidak teraba nadi. Riwayat pingsan saat olahraga 2x sebelumnya. Riwayat keluarga: paman meninggal mendadak usia 30 tahun. EKG sebelumnya (saat medical check-up): hipertrofi ventrikel kiri, gelombang Q abnormal di lead lateral.",
      hints: [
        "Atlet muda dengan cardiac arrest saat aktivitas berat.",
        "Riwayat sinkop saat olahraga — aritmia terkait exercise.",
        "Riwayat keluarga sudden cardiac death (paman usia 30 tahun).",
        "EKG: LVH + gelombang Q abnormal di lateral.",
        "Sudden cardiac death pada atlet muda + LVH + family history = Hypertrophic Cardiomyopathy (HCM)."
      ],
      options: ["Sindrom Brugada", "Hypertrophic Cardiomyopathy", "Arrhythmogenic RV Cardiomyopathy", "Long QT Syndrome", "Commotio Cordis"],
      answerIndex: 1,
      explanation: "Diagnosis: Hypertrophic Cardiomyopathy (HCM). Penyebab tersering sudden cardiac death pada atlet muda. Autosomal dominan dengan mutasi gen protein sarkomer. EKG: LVH, Q abnormal, T inversi. Patofisiologi: penebalan asimetris septum interventrikular → obstruksi LVOT → aritmia ventrikel saat exercise. Tatalaksana: hindari olahraga kompetitif, beta-blocker, pertimbangkan ICD untuk pencegahan SCD."
    },
    {
      vignette: "Anak 10 tahun datang dengan keluhan sesak napas saat aktivitas dan palpitasi. 3 minggu lalu mengalami radang tenggorok yang tidak diobati. PF: demam 38.5°C, murmur pansistolik di apeks yang menjalar ke aksila, pembesaran sendi lutut kanan yang merah dan nyeri (artritis migrans). Lab: LED 60 mm/jam, ASTO titer tinggi, CRP (+).",
      hints: [
        "Anak dengan gejala jantung setelah infeksi tenggorok.",
        "Faringitis Streptokokus 2-4 minggu sebelumnya — pencetus.",
        "Murmur baru (insufisiensi mitral) — karditis reumatik.",
        "Artritis migrans sendi besar — manifestasi mayor.",
        "ASTO tinggi + karditis + artritis = memenuhi kriteria Jones → Demam Rematik Akut."
      ],
      options: ["Endokarditis Infektif", "Demam Rematik Akut", "Artritis Septik", "Kawasaki Disease", "Lupus Eritematosus Sistemik"],
      answerIndex: 1,
      explanation: "Diagnosis: Demam Rematik Akut. Reaksi imunologi pasca infeksi Streptococcus beta-hemolyticus group A. Memenuhi Kriteria Jones: 2 manifestasi mayor (karditis + artritis migrans) + bukti infeksi streptokokus (ASTO tinggi). Tatalaksana: benzatin penisilin (eradikasi + profilaksis sekunder jangka panjang), aspirin untuk artritis, kortikosteroid jika karditis berat."
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
    {
      vignette: "Pria 30 tahun datang ke IGD dengan sesak napas berat, wheezing, dan batuk yang memberat sejak 6 jam. Riwayat asma sejak kecil, terakhir menggunakan inhaler 2 hari lalu. PF: takipnea 32x/menit, retraksi interkostal, wheezing ekspirasi dan inspirasi bilateral, bicara terputus-putus (hanya beberapa kata). SpO2 88%, peak flow 35% dari prediksi.",
      hints: [
        "Pria muda dengan riwayat asma dan sesak akut berat.",
        "Wheezing inspirasi DAN ekspirasi — obstruksi berat.",
        "Hanya bisa bicara beberapa kata — tidak bisa kalimat lengkap.",
        "SpO2 88%, peak flow <40% prediksi — asma serangan berat.",
        "Retraksi interkostal + bicara terputus + PEF <40% = Asma Eksaserbasi Akut Berat."
      ],
      options: ["PPOK Eksaserbasi", "Asma Eksaserbasi Akut Berat", "Pneumotoraks Spontan", "Anafilaksis", "Gagal Jantung Akut"],
      answerIndex: 1,
      explanation: "Diagnosis: Asma Eksaserbasi Akut Berat. Klasifikasi berat: bicara hanya beberapa kata, retraksi, peak flow <40%, SpO2 <90%. Tatalaksana: oksigen target SpO2 93-95%, nebulisasi salbutamol + ipratropium bromida, kortikosteroid sistemik (metilprednisolon IV), pertimbangkan MgSO4 IV. Jika tidak respons → ancaman gagal napas, siapkan ICU."
    },
    {
      vignette: "Pria 35 tahun datang dengan keluhan batuk produktif berdahak >3 bulan, demam hilang-timbul, keringat malam, penurunan BB 10 kg dalam 3 bulan. Riwayat kontak dengan pasien TB. PF: suara napas bronkial dan ronki di apeks paru kanan. Rontgen toraks: infiltrat di apeks kanan dengan kavitas. BTA sputum: +3.",
      hints: [
        "Batuk produktif kronik >2 minggu — curiga TB.",
        "Demam, keringat malam, penurunan BB — gejala konstitusional.",
        "Riwayat kontak TB — epidemiologi mendukung.",
        "Infiltrat apeks dengan kavitas — lokasi dan temuan khas TB.",
        "BTA +3 — tuberkulosis paru aktif terkonfirmasi."
      ],
      options: ["Pneumonia Komunitas", "Tuberkulosis Paru", "Kanker Paru", "Abses Paru", "Bronkiektasis Terinfeksi"],
      answerIndex: 1,
      explanation: "Diagnosis: Tuberkulosis Paru BTA Positif (kasus baru). Memenuhi kriteria: batuk ≥2 minggu + gejala konstitusional + kontak TB + rontgen khas (infiltrat apeks dengan kavitas) + BTA +3. Tatalaksana: OAT kategori 1 (2RHZE/4RH) — fase intensif 2 bulan (Rifampisin, INH, Pirazinamid, Etambutol), fase lanjutan 4 bulan (Rifampisin, INH)."
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
    {
      vignette: "Anak laki-laki 7 tahun jatuh dari sepeda dengan tangan menumpu. Keluhan nyeri dan bengkak di pergelangan tangan kiri. PF: deformitas dinner fork di distal radius, nyeri tekan, ROM terbatas. Tidak ada gangguan neurovaskular distal. Rontgen: fraktur distal radius dengan angulasi dorsal dan fragmen distal terdorong ke dorsal.",
      hints: [
        "Anak jatuh dengan mekanisme FOOSH (fall on outstretched hand).",
        "Nyeri dan bengkak pergelangan tangan — fraktur distal radius.",
        "Deformitas dinner fork — angulasi dorsal fragmen distal.",
        "Neurovaskular distal intak — tidak ada komplikasi akut.",
        "Fraktur distal radius dengan dorsal angulation = Fraktur Colles."
      ],
      options: ["Fraktur Smith", "Fraktur Colles", "Fraktur Galeazzi", "Fraktur Monteggia", "Fraktur Scaphoid"],
      answerIndex: 1,
      explanation: "Diagnosis: Fraktur Colles. Fraktur distal radius tersering, akibat FOOSH. Ciri khas: deformitas dinner fork (dorsal angulation/displacement). Berbeda dengan fraktur Smith (volar angulation = garden spade deformity). Tatalaksana: closed reduction + below-elbow cast (jika stabil), ORIF jika tidak stabil atau intraartikular. Komplikasi: malunion, CTS, CRPS."
    },
    {
      vignette: "Pria 20 tahun cedera saat bermain sepak bola. Saat berlari, kaki kanan tertanam di tanah dan tubuh berputar ke dalam. Terdengar bunyi 'pop'. Lutut bengkak dalam 2 jam. PF: efusi sendi lutut kanan, Lachman test (+), anterior drawer test (+), pivot shift test (+). McMurray test (-).",
      hints: [
        "Atlet muda dengan trauma lutut saat pivoting.",
        "Bunyi 'pop' saat cedera — ruptur ligamen.",
        "Efusi cepat (<2 jam) — hemarthrosis akut.",
        "Lachman (+), anterior drawer (+), pivot shift (+) — instabilitas anterior.",
        "Ketiga tes positif = ruptur ACL (Anterior Cruciate Ligament)."
      ],
      options: ["Ruptur ACL", "Ruptur PCL", "Ruptur Meniskus Medial", "Ruptur LCL", "Dislokasi Patela"],
      answerIndex: 0,
      explanation: "Diagnosis: Ruptur ACL (Anterior Cruciate Ligament). Mekanisme: non-contact pivoting/cutting/decelerating. Bunyi 'pop' + hemarthrosis akut (<2 jam) sangat sugestif. Lachman test paling sensitif. Tatalaksana: RICE awal, MRI konfirmasi, rekonstruksi ACL arthroskopi (autograft hamstring/patellar tendon) terutama pada atlet muda aktif + rehabilitasi."
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
    {
      vignette: "Jenazah wanita ditemukan di rumahnya. Pada pemeriksaan: lebam mayat merah cherry di seluruh tubuh, tidak ada tanda kekerasan. Di ruangan ditemukan kompor gas menyala tanpa ventilasi memadai. Sianosis tidak ditemukan. Analisis darah: kadar karboksihemoglobin (COHb) 65%.",
      hints: [
        "Jenazah di ruangan tertutup dengan kompor gas menyala.",
        "Lebam mayat merah cherry — warna khas, bukan sianosis.",
        "Tidak ada tanda kekerasan — bukan pembunuhan.",
        "Ruangan tanpa ventilasi + sumber pembakaran = CO exposure.",
        "COHb 65% (letal >60%) — keracunan karbon monoksida."
      ],
      options: ["Keracunan Sianida", "Keracunan Karbon Monoksida", "Keracunan Organofosfat", "Asfiksia Mekanik", "Kematian Mendadak Kardiak"],
      answerIndex: 1,
      explanation: "Diagnosis: Kematian akibat Keracunan Karbon Monoksida (CO). CO berikatan dengan hemoglobin 200-250x lebih kuat dari O2 → membentuk karboksihemoglobin → hipoksia jaringan. Lebam mayat cherry-red/merah terang adalah patognomonik. COHb >60% biasanya fatal. Berbeda dengan sianida (bau bitter almond, darah merah terang tapi mekanisme beda)."
    },
    {
      vignette: "Seorang dokter diminta untuk menentukan usia perkiraan jenazah yang ditemukan. Temuan: lebam mayat sudah menetap (tidak hilang dengan penekanan), kaku mayat mulai menghilang, perut mulai membengkak kehijauan (diskolorisasi abdomen), bau busuk mulai tercium, larva lalat stadium 1 ditemukan di lubang hidung dan mulut.",
      hints: [
        "Lebam mayat menetap — >12-24 jam post-mortem.",
        "Kaku mayat mulai menghilang — >24-36 jam post-mortem.",
        "Diskolorisasi kehijauan abdomen — dekomposisi awal.",
        "Bau busuk tercium — pembusukan dimulai.",
        "Larva lalat stadium 1 — sesuai entomologi forensik 24-48 jam."
      ],
      options: ["6-12 jam post-mortem", "24-48 jam post-mortem", "3-5 hari post-mortem", "1-2 minggu post-mortem", "<6 jam post-mortem"],
      answerIndex: 1,
      explanation: "Perkiraan: 24-48 jam post-mortem. Kombinasi tanda: (1) lebam menetap (fixed >12-24 jam), (2) rigor mortis mulai menghilang (mulai hilang 24-36 jam), (3) tanda dekomposisi awal (diskolorisasi abdomen hijau dimulai ~24 jam dari area caecum), (4) larva lalat stadium 1 (~24 jam). Penentuan waktu kematian menggunakan kombinasi perubahan post-mortem dan entomologi forensik."
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
    {
      vignette: "Wanita 40 tahun mengalami kecelakaan lalu lintas. Penurunan kesadaran GCS 8. CT scan kepala tanpa kontras: lesi hiperdens bentuk bikonveks (lenticular) di regio temporal kanan, midline shift ke kiri 8 mm. Fraktur temporal kanan tampak pada bone window.",
      hints: [
        "Trauma kepala dengan penurunan kesadaran — cedera intrakranial.",
        "CT: lesi hiperdens (darah segar) di temporal.",
        "Bentuk bikonveks (lentikular) — khas perdarahan epidural.",
        "Fraktur temporal — laserasi arteri meningea media.",
        "Epidural hematoma + midline shift = indikasi operasi cito."
      ],
      options: ["Subdural Hematoma Akut", "Epidural Hematoma", "Perdarahan Subaraknoid", "Kontusio Serebri", "Diffuse Axonal Injury"],
      answerIndex: 1,
      explanation: "Diagnosis: Epidural Hematoma (EDH). CT scan: hiperdens bikonveks (lentikular) — berbeda dengan subdural yang cresentic (bulan sabit). Biasanya akibat ruptur arteri meningea media karena fraktur os temporal. Klasik: lucid interval (perbaikan sementara lalu deteriorasi). Tatalaksana: kraniotomi evakuasi hematoma jika midline shift >5 mm atau volume >30 mL."
    },
    {
      vignette: "Bayi 3 bulan dibawa karena rewel dan muntah proyektil non-bilier setelah menyusu. USG abdomen: gambaran target sign/donut sign di kuadran kanan atas abdomen. Terdapat massa sausage-shaped yang teraba di abdomen kanan.",
      hints: [
        "Bayi dengan muntah proyektil non-bilier — obstruksi saluran cerna proksimal.",
        "Rewel episodik (kolik) pada bayi — nyeri abdomen intermiten.",
        "USG: target sign/donut sign — potongan transversal intususepsi.",
        "Massa sausage-shaped teraba — invaginasi usus yang teraba.",
        "Target sign + sausage mass pada bayi = Intususepsi."
      ],
      options: ["Stenosis Pilorus Hipertrofik", "Intususepsi", "Volvulus Midgut", "Hirschsprung Disease", "Hernia Inguinalis Inkarserata"],
      answerIndex: 1,
      explanation: "Diagnosis: Intususepsi. Invaginasi segmen usus ke dalam segmen distalnya, tersering ileokolik. Puncak usia 5-10 bulan. USG: target sign (donat) pada potongan transversal, pseudokidney sign pada potongan longitudinal. Tatalaksana: reduksi non-operatif dengan enema udara/barium/salin (di bawah panduan fluoroskopi/USG), operasi jika gagal atau ada tanda peritonitis."
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
    {
      vignette: "Pria 50 tahun pasca operasi laparotomi dengan anestesi umum. Di ruang pemulihan, pasien mengalami menggigil hebat (shivering), suhu 34.5°C. SpO2 fluktuatif. Pasien gelisah. Sebelum operasi suhu normal 36.8°C. Ruang operasi bersuhu rendah, operasi berlangsung 4 jam, irigasi cairan dingin digunakan.",
      hints: [
        "Pasca anestesi umum dengan menggigil dan suhu rendah.",
        "Suhu turun dari 36.8°C ke 34.5°C — hipotermia perioperatif.",
        "Operasi lama (4 jam) dengan cairan irigasi dingin.",
        "Anestesi umum mengganggu termoregulasi sentral.",
        "Hipotermia perioperatif — risiko koagulopati, infeksi luka, dan aritmia."
      ],
      options: ["Syok Sepsis", "Hipotermia Perioperatif", "Hipertermia Maligna", "Reaksi Transfusi", "Awareness Under Anesthesia"],
      answerIndex: 1,
      explanation: "Diagnosis: Hipotermia Perioperatif. Definisi: suhu inti <36°C perioperatif. Faktor risiko: anestesi umum (vasodilatasi + gangguan termoregulasi), ruang OK dingin, operasi lama, irigasi cairan dingin. Komplikasi: shivering (meningkatkan O2 consumption 200-400%), koagulopati, surgical site infection, aritmia. Pencegahan: forced-air warming, cairan IV hangat, meningkatkan suhu OK."
    },
    {
      vignette: "Pasien 40 tahun akan dilakukan intubasi endotrakeal untuk operasi elektif. Penilaian jalan napas: Mallampati IV, jarak tiromental <6 cm, buka mulut <3 cm, leher pendek dan tebal, IMT 42. Setelah induksi dan pemberian pelumpuh otot, laringoskopi direk gagal visualisasi glotis (Cormack-Lehane Grade IV) dalam 3 kali percobaan.",
      hints: [
        "Pasien obesitas dengan prediksi jalan napas sulit.",
        "Mallampati IV — hanya palatum durum yang terlihat.",
        "Jarak tiromental <6 cm, buka mulut terbatas — anatomi sulit.",
        "Gagal intubasi 3x (cannot intubate) — situasi darurat.",
        "Cormack-Lehane IV (tidak terlihat glotis) = Difficult Airway, cannot intubate."
      ],
      options: ["Laringospasme", "Difficult Airway (Cannot Intubate)", "Bronkospasme", "Aspirasi", "Edema Laring"],
      answerIndex: 1,
      explanation: "Diagnosis: Difficult Airway — Cannot Intubate. Algoritma ASA Difficult Airway: setelah 3x gagal intubasi, harus segera mengikuti langkah berikutnya. Jika can ventilate: gunakan supraglottic airway (LMA) atau videolaryngoscope atau intubasi fiberoptik. Jika cannot ventilate-cannot intubate (CVCI): krikotirotomi darurat. Kunci: selalu assessment jalan napas preoperatif dan siapkan plan B."
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
    {
      vignette: "Petani 40 tahun dibawa ke IGD setelah ditemukan tidak sadar di sawah dengan mulut berbusa. Tercium bau bawang putih. PF: pupil miosis pinpoint bilateral, bradikardia 45x/menit, hipersalivasi, lakrimasi, diare, bronkospasme berat, fasikulasi otot. Ditemukan botol pestisida kosong di dekatnya.",
      hints: [
        "Petani tidak sadar dengan botol pestisida — intoksikasi.",
        "Bau bawang putih — khas organofosfat.",
        "Miosis pinpoint — efek muskarinik berlebih.",
        "SLUDGE: Salivasi, Lakrimasi, Urinasi, Diare, GI cramps, Emesis.",
        "Sindrom kolinergik (muskarinik + nikotinik) = Keracunan Organofosfat."
      ],
      options: ["Keracunan Karbamat", "Keracunan Organofosfat", "Keracunan Sianida", "Overdosis Opioid", "Keracunan Jamur"],
      answerIndex: 1,
      explanation: "Diagnosis: Keracunan Organofosfat (inhibitor asetilkolinesterase ireversibel). Organofosfat menghambat AChE → akumulasi asetilkolin → stimulasi berlebih reseptor muskarinik (SLUDGE, miosis, bradikardia, bronkospasme) dan nikotinik (fasikulasi, paralisis). Tatalaksana: dekontaminasi, Atropin (antimuskarinik) dosis tinggi titrasi sampai sekret kering, Pralidoxim/2-PAM (reaktivator AChE) dalam 24 jam pertama."
    },
    {
      vignette: "Wanita 25 tahun datang dengan keluhan jantung berdebar, tremor halus, banyak berkeringat, penurunan BB meskipun nafsu makan meningkat, dan mata menonjol (eksoftalmos) bilateral. Dokter meresepkan propiltiourasil (PTU) 300 mg/hari. Setelah 3 minggu terapi, pasien datang dengan demam tinggi 40°C, sakit tenggorok berat, dan lemas. Lab: leukosit 1.200/μL, neutrofil absolut 200/μL.",
      hints: [
        "Pasien hipertiroid yang diterapi PTU — obat antitiroid.",
        "Demam tinggi dan sakit tenggorok setelah 3 minggu terapi.",
        "Leukopenia berat (1.200/μL) — supresi sumsum tulang.",
        "Neutrofil absolut 200/μL (<500) — agranulositosis.",
        "Agranulositosis akibat PTU — efek samping serius obat antitiroid."
      ],
      options: ["Tiroid Storm", "Agranulositosis akibat PTU", "Infeksi Bakteri Biasa", "Anemia Aplastik", "Lupus Drug-Induced"],
      answerIndex: 1,
      explanation: "Diagnosis: Agranulositosis akibat Propiltiourasil (PTU). Efek samping serius obat antitiroid (PTU, metimazol) dengan insiden ~0.2-0.5%. Definisi: ANC <500/μL. Gejala: demam, infeksi berat (faringitis, sepsis). Tatalaksana: hentikan PTU segera, rawat inap, antibiotik spektrum luas, G-CSF, isolasi. Alternatif terapi hipertiroid: radioiodine ablation atau tiroidektomi."
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
    {
      vignette: "Pria 30 tahun datang dengan keluhan demam tinggi menggigil periodik setiap 48 jam (tertiana), disertai berkeringat banyak dan lemas. Baru pulang dari Papua 2 minggu lalu. PF: splenomegali, konjungtiva anemis. Lab: Hb 9 g/dL, trombosit 100.000. Apusan darah tepi tebal dan tipis: ditemukan parasit intraeritrositik bentuk cincin (ring form), beberapa eritrosit mengandung multiple rings.",
      hints: [
        "Demam periodik tertiana (48 jam) — siklus eritrositik parasit.",
        "Riwayat dari Papua — daerah endemis malaria.",
        "Splenomegali + anemia — destruksi eritrosit oleh parasit.",
        "Parasit intraeritrositik ring form pada apusan darah.",
        "Multiple rings dalam satu eritrosit — khas Plasmodium falciparum."
      ],
      options: ["Demam Tifoid", "Malaria Falciparum", "Leptospirosis", "Dengue", "Babesiosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Malaria Falciparum. P. falciparum: paling berbahaya, dapat menyebabkan malaria serebral, severe anemia, dan multi-organ failure. Ciri apusan: multiple ring forms per eritrosit, bentuk accole/applique, banana-shaped gametocyte. Tatalaksana malaria falciparum: Artemisinin-based Combination Therapy (ACT) — DHP (Dihidroartemisinin-Piperakuin) selama 3 hari."
    },
    {
      vignette: "Pria 28 tahun datang dengan keluhan diare berdarah dan berlendir (disentri), nyeri perut kolik, dan tenesmus sejak 3 hari. Demam tinggi. Baru makan di warung pinggir jalan. Lab: leukosit 18.000/μL. Kultur feses: bakteri gram negatif batang, non-motil, laktosa negatif. Hasil serotyping menunjukkan Shigella flexneri.",
      hints: [
        "Diare berdarah berlendir (disentri) dengan tenesmus.",
        "Demam tinggi + leukositosis — disentri basiler.",
        "Riwayat makan di tempat kurang higienis — transmisi fekal-oral.",
        "Gram negatif batang, non-motil, laktosa negatif — bukan E. coli.",
        "Serotyping: Shigella flexneri — disentri basiler tersering di negara berkembang."
      ],
      options: ["Kolera", "Disentri Basiler (Shigelosis)", "Disentri Ameba", "Infeksi E. coli O157", "Salmonelosis"],
      answerIndex: 1,
      explanation: "Diagnosis: Disentri Basiler (Shigelosis). Shigella — gram negatif, non-motil, laktosa negatif. Transmisi fekal-oral dengan inoculum sangat rendah (10-100 organisme). Menyerang mukosa kolon → invasi dan destruksi → diare berdarah-berlendir. Tatalaksana: rehidrasi + antibiotik (siprofloksasin atau azitromisin). Pencegahan: higiene tangan dan sanitasi makanan/air."
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
    {
      vignette: "Seorang dokter puskesmas ingin mengetahui hubungan antara kebiasaan merokok dan kejadian PPOK di wilayahnya. Ia mengambil 50 pasien PPOK (kasus) dan 50 orang tanpa PPOK (kontrol) dari populasi yang sama, kemudian meneliti riwayat merokok mereka di masa lalu. Hasil: OR = 4.5 (95% CI: 2.1-9.7).",
      hints: [
        "Penelitian dimulai dari outcome (PPOK) → melihat exposure (merokok) di masa lalu.",
        "Ada kelompok kasus (PPOK) dan kontrol (non-PPOK) — desain perbandingan.",
        "Menelusuri riwayat paparan di masa lalu — bersifat retrospektif.",
        "Menggunakan Odds Ratio (OR) sebagai ukuran asosiasi.",
        "Desain retrospektif + kasus-kontrol + OR = Studi Kasus-Kontrol (Case-Control Study)."
      ],
      options: ["Studi Kohort", "Studi Kasus-Kontrol", "Studi Cross-Sectional", "Randomized Controlled Trial", "Studi Ekologi"],
      answerIndex: 1,
      explanation: "Jawaban: Studi Kasus-Kontrol. Desain analitik observasional retrospektif. Dimulai dari outcome (kasus vs kontrol) → meneliti paparan di masa lalu. Ukuran asosiasi: Odds Ratio (OR). OR 4.5 artinya perokok memiliki odds 4.5x lebih tinggi untuk PPOK dibanding non-perokok. CI 95% tidak melewati 1 → signifikan secara statistik. Keuntungan: efisien untuk penyakit langka, murah, cepat."
    },
    {
      vignette: "Dinas Kesehatan Kota X ingin menurunkan angka stunting. Data menunjukkan prevalensi stunting 30% di balita. Program intervensi berupa pemberian makanan tambahan dan edukasi gizi dilakukan selama 1 tahun. Evaluasi dilakukan dengan mengukur z-score TB/U pada balita sebelum dan sesudah intervensi. Hasil: prevalensi stunting turun menjadi 22%.",
      hints: [
        "Program kesehatan masyarakat untuk mengatasi stunting.",
        "Intervensi: PMT + edukasi gizi — upaya promotif dan preventif.",
        "Pengukuran sebelum dan sesudah intervensi — evaluasi program.",
        "Z-score TB/U — indikator stunting (< -2 SD = stunted).",
        "Penurunan 30% → 22% — evaluasi efektivitas intervensi = Evaluasi Program Kesehatan."
      ],
      options: ["Surveilans Epidemiologi", "Evaluasi Program Kesehatan", "Skrining Penyakit", "Penelitian Eksperimental", "Health Technology Assessment"],
      answerIndex: 1,
      explanation: "Jawaban: Evaluasi Program Kesehatan. Mengukur efektivitas dan dampak intervensi kesehatan masyarakat. Stunting: TB/U z-score < -2 SD (WHO). Penurunan 30% → 22% = absolute reduction 8%, relative reduction 26.7%. Evaluasi program mencakup: input, proses, output, outcome, dan dampak. Program PMT dan edukasi gizi merupakan intervensi spesifik untuk pencegahan stunting sesuai program 1000 HPK."
    },
  ],
};
