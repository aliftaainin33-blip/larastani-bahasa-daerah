const state = {
  lang: localStorage.getItem("larastani_lang") || "id",
  current: "home",
  stream: null,
  lastImage: null,
  speech: localStorage.getItem("larastani_speech") !== "false"
};

const translations = {
  id: {
    brandSub:"Plant Clinic untuk Petani Lansia", heroTitle:"Teknologi yang memahami bahasa petani.", heroText:"Informasi lebih dekat, mudah dimengerti, dan bermanfaat untuk membantu merawat tanaman.", start:"Mulai", chooseLanguage:"Pilih bahasa", languageHint:"Pilih bahasa yang paling Anda kuasai sehari-hari.", languageNote:"Semua bahasa menggunakan kata sederhana dan akrab di telinga petani.",
    menuTitle:"Menu Utama",menuSubtitle:"Pilih layanan yang Anda butuhkan.",diagnosis:"Diagnosa Tanaman",diagnosisSmall:"Foto tanaman untuk melihat kemungkinan penyakit",info:"Informasi Penyakit",infoSmall:"Gejala, penyebab, dan pencegahan",solution:"Solusi & Pengendalian",solutionSmall:"Langkah perawatan yang mudah diikuti",expert:"Tanya Pakar",expertSmall:"Tanya lewat teks atau suara",history:"Riwayat",historySmall:"Lihat hasil pemeriksaan sebelumnya",
    benefit1Title:"Mudah dipahami",benefit1:"Informasi menggunakan bahasa sehari-hari.",benefit2Title:"Lebih percaya diri",benefit2:"Petani lebih nyaman menggunakan teknologi.",benefit3Title:"Lebih cepat",benefit3:"Membantu mengenali masalah tanaman.",benefit4Title:"Lebih dekat",benefit4:"Menjembatani teknologi dan komunikasi.",photoTitle:"Foto Tanaman",photoHint:"Foto daun atau tanaman yang ingin diperiksa.",cameraReady:"Siap mengambil foto",cameraHint:"Arahkan kamera ke bagian tanaman yang bermasalah.",upload:"Pilih Foto",camera:"Kamera",analyze:"Analisis Tanaman",photoTips:"Tips foto yang bagus",tip1:"Pastikan daun terlihat jelas.",tip2:"Gunakan cahaya yang cukup.",tip3:"Dekatkan kamera ke bagian yang bermasalah.",tip4:"Hindari foto yang terlalu buram.",sampleTitle:"Contoh bagian daun",sampleText:"Bintik atau perubahan warna dapat membantu proses pemeriksaan.",
    resultTitle:"Hasil Diagnosa",resultHint:"Hasil awal berdasarkan foto yang dikirim.",detail:"Lihat Rincian",demoNote:"Hasil ini adalah simulasi prototipe, bukan diagnosis pertanian profesional. Untuk keputusan penting, konsultasikan dengan penyuluh atau pakar.",detailTitle:"Rincian Penyakit",symptom:"Gejala",cause:"Penyebab",prevention:"Pencegahan",solutionCard:"Solusi",fullSolution:"Solusi Lengkap",solutionTitle:"Solusi & Pengendalian",solutionHint:"Langkah sederhana yang bisa dilakukan petani.",step1Title:"Pisahkan daun yang parah",step1Text:"Buang bagian yang sangat terserang agar masalah tidak cepat menyebar.",step2Title:"Kurangi kelembapan",step2Text:"Atur jarak tanam dan sirkulasi udara di sekitar tanaman.",step3Title:"Gunakan pengendalian yang sesuai",step3Text:"Gunakan pengendalian nabati atau produk terdaftar sesuai aturan.",step4Title:"Pantau kembali",step4Text:"Foto kembali beberapa hari kemudian untuk melihat perubahan.",expertTitle:"Tanya Pakar",expertHint:"Bisa bertanya lewat teks atau suara.",botGreeting:"Halo. Ada yang bisa dibantu?",questionPlaceholder:"Tulis pertanyaan tentang tanaman...",historyTitle:"Riwayat Pemeriksaan",historyHint:"Pemeriksaan yang tersimpan di perangkat ini.",clearHistory:"Hapus Riwayat",navHome:"Beranda",navHistory:"Riwayat",navSettings:"Setelan"
  },
  jv: {
    brandSub:"Plant Clinic kanggo Petani Lansia",heroTitle:"Teknologi sing ngerti basa petani.",heroText:"Informasi luwih cedhak, gampang dimangerteni, lan migunani kanggo ngrawat tanduran.",start:"Wiwiti",chooseLanguage:"Pilih basa",languageHint:"Pilih basa sing paling sampeyan kuasai saben dina.",languageNote:"Kabeh basa nggunakake tembung sederhana lan akrab kanggo petani.",menuTitle:"Menu Utama",menuSubtitle:"Pilih layanan sing sampeyan butuhake.",diagnosis:"Diagnosa Tanduran",diagnosisSmall:"Foto tanduran kanggo ndeleng kemungkinan penyakit",info:"Informasi Penyakit",infoSmall:"Gejala, sebab, lan pencegahan",solution:"Solusi & Pangendalian",solutionSmall:"Langkah perawatan sing gampang ditindakake",expert:"Takon Pakar",expertSmall:"Takon nganggo tulisan utawa swara",history:"Riwayat",historySmall:"Deleng pemeriksaan sadurunge",benefit1Title:"Gampang dipahami",benefit1:"Informasi nganggo basa saben dina.",benefit2Title:"Luwih percaya diri",benefit2:"Petani luwih nyaman nganggo teknologi.",benefit3Title:"Luwih cepet",benefit3:"Mbantu ngenali masalah tanduran.",benefit4Title:"Luwih cedhak",benefit4:"Nggandhengake teknologi lan komunikasi.",photoTitle:"Foto Tanduran",photoHint:"Foto godhong utawa tanduran sing arep dipriksa.",cameraReady:"Siap njupuk foto",cameraHint:"Arahake kamera menyang tanduran sing bermasalah.",upload:"Pilih Foto",camera:"Kamera",analyze:"Analisis Tanduran",photoTips:"Tips foto sing apik",tip1:"Godhong kudu katon cetha.",tip2:"Gunakake cahya sing cukup.",tip3:"Cedhakake kamera menyang bagean sing bermasalah.",tip4:"Aja nganggo foto sing burem.",sampleTitle:"Tuladha godhong",sampleText:"Bintik utawa owah-owahan warna bisa mbantu pemeriksaan.",resultTitle:"Hasil Diagnosa",resultHint:"Hasil awal adhedhasar foto.",detail:"Deleng Rincian",demoNote:"Hasil iki simulasi prototipe, dudu diagnosis profesional.",detailTitle:"Rincian Penyakit",symptom:"Gejala",cause:"Penyebab",prevention:"Pencegahan",solutionCard:"Solusi",fullSolution:"Solusi Lengkap",solutionTitle:"Solusi & Pangendalian",solutionHint:"Langkah sederhana kanggo petani.",step1Title:"Pisahake godhong sing parah",step1Text:"Buang bagean sing kena banget supaya ora nyebar.",step2Title:"Kurangi kelembapan",step2Text:"Atur jarak tandur lan sirkulasi udara.",step3Title:"Gunakake pangendalian sing cocog",step3Text:"Gunakake pengendalian nabati utawa produk sing wis terdaftar.",step4Title:"Pantau maneh",step4Text:"Foto maneh sawetara dina sabanjure.",expertTitle:"Takon Pakar",expertHint:"Bisa takon liwat tulisan utawa swara.",botGreeting:"Sugeng rawuh. Ana sing bisa dibantu?",questionPlaceholder:"Tulis pitakon babagan tanduran...",historyTitle:"Riwayat Pemeriksaan",historyHint:"Pemeriksaan sing disimpen ing piranti iki.",clearHistory:"Busak Riwayat",navHome:"Ngarep",navHistory:"Riwayat",navSettings:"Setelan"
  },
  su: {brandSub:"Plant Clinic pikeun Patani Lansia",heroTitle:"Téknologi anu ngarti kana basa patani.",heroText:"Inpormasi leuwih deukeut, gampang kaharti, jeung mangpaat pikeun miara pepelakan.",start:"Mimitian",chooseLanguage:"Pilih basa",languageHint:"Pilih basa anu paling biasa dipaké sapopoé.",languageNote:"Kabéh basa maké kecap basajan anu biasa kadéngé ku patani."},
  mad: {brandSub:"Plant Clinic untuk Petani Lansia",heroTitle:"Teknologi se ngarteh basa petani.",heroText:"Informasi se lebbi deket, gampang e pahami, ben berguna.",start:"Mulai",chooseLanguage:"Pilih basa",languageHint:"Pilih basa se paling biasa e pake.",languageNote:"Kabbi basa ngangguy kata se sederhana ben akrab."},
  ban: {brandSub:"Plant Clinic kanggo Petani Lansia",heroTitle:"Teknologi sane ngartos basa petani.",heroText:"Informasi langkung cedak, gampang kaartos, tur miguna.",start:"Wiwiti",chooseLanguage:"Pilih basa",languageHint:"Pilih basa sane paling biasa kaanggén.",languageNote:"Basa nganggen kecap sederhana tur akrab."
  }
};

const voiceUiTranslations={
  id:{voiceMainTitle:"Tanya Pakar dengan Suara",voiceMainHint:"Tekan lalu bicara. Bahasa mengikuti pilihan di halaman awal.",readAnswer:"Bacakan"},
  jv:{voiceMainTitle:"Takon Pakar nganggo Swara",voiceMainHint:"Pencet banjur ngomong. Basa manut pilihan ing halaman awal.",readAnswer:"Wacakake"},
  su:{voiceMainTitle:"Tanya Ahli ku Sora",voiceMainHint:"Pencet tuluy nyarios. Basa nuturkeun pilihan di halaman awal.",readAnswer:"Bacakeun"},
  mad:{voiceMainTitle:"Tanya Ahli Ngangguy Suara",voiceMainHint:"Pencet lalu ngomong. Basa ngikut pilihan e halaman awal.",readAnswer:"Bacakan"},
  ban:{voiceMainTitle:"Tanya Ahli Antuk Suara",voiceMainHint:"Pencet banjur matur. Basa manut pilihan ring halaman awal.",readAnswer:"Bacayang"}
};

const aiChatTranslations={
id:{
expertTitle:"Tanya Pakar",expertHint:"Ceritakan kondisi tanaman dengan bebas. Tidak harus memilih pertanyaan.",
aiSideText:"Penceritaannya bebas. Petani bisa menjelaskan kondisi tanaman sedetail mungkin.",aiCanHelp:"Bisa membantu:",aiHelp1:"Mengenali kemungkinan masalah",aiHelp2:"Menjelaskan gejala dan penyebab",aiHelp3:"Memberi langkah penanganan",aiHelp4:"Menjawab pertanyaan lanjutan",selectedLanguage:"Bahasa mengikuti pilihan di halaman awal",aiExpertLabel:"(AI Pakar Pertanian)",aiHeadText:"Ceritakan masalah tanaman dengan bahasa sehari-hari.",clearChat:"Hapus Chat",botGreeting:"Halo. Ceritakan saja kondisi tanamanmu dengan detail. Misalnya jenis tanaman, perubahan daun, lokasi, cuaca, dan sejak kapan terjadi.",readAnswer:"🔊 Bacakan",voiceHint:"Tekan mikrofon untuk berbicara atau ketik cerita di sini.",exampleLabel:"Contoh:",example1:"Daun menguning + bintik",example2:"Layu setelah hujan",example3:"Cara bercerita detail",questionPlaceholder:"Ceritakan kondisi tanaman secara detail...",infoPanelTitle:"Informasi Tambahan",miniDisease:"Bercak Daun",tipsTitle:"Tips untuk petani",tipA:"Sebutkan jenis tanaman.",tipB:"Ceritakan warna/bentuk gejala.",tipC:"Sebutkan kapan gejala mulai muncul.",tipD:"Ceritakan kondisi cuaca/lahan."
},
jv:{
expertTitle:"Takon Pakar",expertHint:"Ceritakna kondisi tanduran sakarepmu. Ora kudu milih pitakon.",
aiSideText:"Ceritane bebas. Petani bisa nerangake kondisi tanduran kanthi rinci.",aiCanHelp:"Bisa mbantu:",aiHelp1:"Ngenali kemungkinan masalah",aiHelp2:"Nerangake gejala lan penyebab",aiHelp3:"Menehi langkah penanganan",aiHelp4:"Njawab pitakon sabanjure",selectedLanguage:"Basa manut pilihan ing halaman awal",aiExpertLabel:"(AI Pakar Pertanian)",aiHeadText:"Ceritakna masalah tanduran nganggo basa saben dina.",clearChat:"Busak Chat",botGreeting:"Sugeng rawuh. Critakna kondisi tanduranmu kanthi rinci. Contone jinis tanduran, owah-owahan godhong, lokasi, cuaca, lan wiwit kapan.",readAnswer:"🔊 Wacakake",voiceHint:"Pencet mikrofon kanggo ngomong utawa ketik crita ing kene.",exampleLabel:"Conto:",example1:"Godhong kuning + bintik",example2:"Layu sawise udan",example3:"Cara crita kanthi rinci",questionPlaceholder:"Ceritakna kondisi tanduran kanthi rinci...",infoPanelTitle:"Informasi Tambahan",miniDisease:"Bercak Godhong",tipsTitle:"Tips kanggo petani",tipA:"Sebutna jinis tanduran.",tipB:"Ceritakna warna/bentuk gejala.",tipC:"Sebutna kapan gejala wiwit muncul.",tipD:"Ceritakna kondisi cuaca/lahan."
},
su:{
expertTitle:"Tanya Ahli",expertHint:"Caritakeun kaayaan pepelakan sacara bébas. Teu kudu milih patalékan.",aiSideText:"Caritana bébas. Patani bisa ngajelaskeun kaayaan pepelakan sacara rinci.",aiCanHelp:"Bisa ngabantu:",aiHelp1:"Ngenalkeun kamungkinan masalah",aiHelp2:"Ngajelaskeun gejala jeung sabab",aiHelp3:"Méré léngkah penanganan",aiHelp4:"Ngajawab patalékan salajengna",selectedLanguage:"Basa nuturkeun pilihan di halaman awal",aiExpertLabel:"(AI Ahli Pertanian)",aiHeadText:"Caritakeun masalah pepelakan ku basa sapopoé.",clearChat:"Hapus Chat",botGreeting:"Wilujeng sumping. Caritakeun kaayaan pepelakan anjeun sacara rinci. Contona jinis pepelakan, parobahan daun, lokasi, cuaca, jeung ti iraha kajadian.",readAnswer:"🔊 Bacakeun",voiceHint:"Pencet mikropon pikeun nyarios atawa ketik carita di dieu.",exampleLabel:"Conto:",example1:"Daun konéng + bintik",example2:"Layu sanggeus hujan",example3:"Cara nyaritakeun sacara rinci",questionPlaceholder:"Caritakeun kaayaan pepelakan sacara rinci...",infoPanelTitle:"Inpormasi Tambahan",miniDisease:"Bercak Daun",tipsTitle:"Tips pikeun patani",tipA:"Sebutkeun jinis pepelakan.",tipB:"Caritakeun warna/bentuk gejala.",tipC:"Sebutkeun iraha gejala mimiti muncul.",tipD:"Caritakeun kaayaan cuaca/lahan."
},
mad:{
expertTitle:"Tanya Ahli",expertHint:"Caritaagi kondisi tanaman secara bebas. Tak perlu milih pertanyaan.",aiSideText:"Caritana bebas. Petani bisa ngajelasagi kondisi tanaman secara rinci.",aiCanHelp:"Bisa mabantu:",aiHelp1:"Ngarteni kemungkinan masalah",aiHelp2:"Nerangagi gejala ben penyebab",aiHelp3:"Maberi langkah penanganan",aiHelp4:"Njawab pertanyaan selanjutnya",selectedLanguage:"Basa ngikut pilihan e halaman awal",aiExpertLabel:"(AI Pakar Pertanian)",aiHeadText:"Caritaagi masalah tanaman nganggun basa sehari-hari.",clearChat:"Hapus Chat",botGreeting:"Salamet datang. Caritaagi kondisi tanaman secara rinci. Contona jenis tanaman, perubahan daun, lokasi, cuaca, ben mulai kapan.",readAnswer:"🔊 Bacakan",voiceHint:"Pencet mikrofon kaangguy ngomong otaba ketik cerita e dinna.",exampleLabel:"Contoh:",example1:"Daun kuning + bintik",example2:"Layu setelah hujan",example3:"Cara carita rinci",questionPlaceholder:"Caritaagi kondisi tanaman secara rinci...",infoPanelTitle:"Informasi Tambahan",miniDisease:"Bercak Daun",tipsTitle:"Tips kaangguy petani",tipA:"Sebutagi jenis tanaman.",tipB:"Caritaagi warna/bentuk gejala.",tipC:"Sebutagi kapan gejala mulai muncul.",tipD:"Caritaagi kondisi cuaca/lahan."
},
ban:{
expertTitle:"Tanya Ahli",expertHint:"Ceritayang kondisi tetanduran bebas. Nenten kedah milih pitaken.",aiSideText:"Ceritane bebas. Petani prasida ngajelasang kondisi tetanduran secara rinci.",aiCanHelp:"Prasida nulung:",aiHelp1:"Ngenalin kemungkinan masalah",aiHelp2:"Nerangin gejala miwah panyebab",aiHelp3:"Maberi langkah penanganan",aiHelp4:"Ngewales pitaken salanturnyane",selectedLanguage:"Basa manut pilihan ring halaman awal",aiExpertLabel:"(AI Pakar Pertanian)",aiHeadText:"Ceritayang masalah tetanduran antuk basa sehari-hari.",clearChat:"Hapus Chat",botGreeting:"Rahajeng rauh. Ceritayang kondisi tetanduran sacara rinci. Contona jenis tetanduran, perubahan daun, lokasi, cuaca, miwah saking kapan.",readAnswer:"🔊 Bacayang",voiceHint:"Pencet mikrofon antuk matur utawi ketik carita ring dini.",exampleLabel:"Conto:",example1:"Daun kuning + bintik",example2:"Layu sasampun hujan",example3:"Cara carita rinci",questionPlaceholder:"Ceritayang kondisi tetanduran sacara rinci...",infoPanelTitle:"Informasi Tambahan",miniDisease:"Bercak Daun",tipsTitle:"Tips antuk petani",tipA:"Sebutang jenis tetanduran.",tipB:"Ceritayang warna/bentuk gejala.",tipC:"Sebutang kapan gejala mulai muncul.",tipD:"Ceritayang kondisi cuaca/lahan."
}};

function t(key){
  return (translations[state.lang] && translations[state.lang][key]) || aiChatTranslations[state.lang]?.[key] || voiceUiTranslations[state.lang]?.[key] || translations.id[key] || key;
}

function applyLanguage(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  document.querySelectorAll(".lang-option").forEach(btn=>btn.classList.toggle("selected",btn.dataset.lang===state.lang));
}

function showScreen(id, push=true){
  if(state.stream){ stopCamera(); }
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  const target=document.getElementById(id);
  if(!target) return;
  target.classList.add("active");
  state.current=id;
  window.scrollTo({top:0,behavior:"smooth"});
  document.querySelectorAll(".bottom-nav button[data-go]").forEach(b=>b.classList.toggle("active",b.dataset.go===id || (id==="home"&&b.dataset.go==="menu")));
  if(id==="history") renderHistory();
  if(push) history.pushState({id}, "", "#"+id);
}

function toast(msg){
  const el=document.getElementById("toast"); el.textContent=msg; el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2200);
}

document.querySelectorAll("[data-go]").forEach(el=>el.addEventListener("click",()=>showScreen(el.dataset.go)));
document.querySelectorAll("[data-back]").forEach(el=>el.addEventListener("click",()=>showScreen("menu")));

document.getElementById("startBtn").addEventListener("click",()=>showScreen("menu"));
document.querySelectorAll(".lang-option").forEach(btn=>btn.addEventListener("click",()=>{
  state.lang=btn.dataset.lang; localStorage.setItem("larastani_lang",state.lang); applyLanguage();
  toast(state.lang==="jv" ? "Basa Jawa dipilih." : "Bahasa dipilih.");
}));

// Camera
const video=document.getElementById("cameraVideo"), photo=document.getElementById("photoPreview"), empty=document.getElementById("cameraEmpty");
async function startCamera(){
  try{
    state.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:false});
    video.srcObject=state.stream; video.hidden=false; empty.hidden=true; photo.hidden=true;
  }catch(e){ toast("Kamera tidak dapat dibuka. Coba gunakan Pilih Foto."); }
}
function stopCamera(){ if(state.stream){state.stream.getTracks().forEach(t=>t.stop());state.stream=null;} video.hidden=true; }
document.getElementById("cameraBtn").addEventListener("click",startCamera);
document.getElementById("captureBtn").addEventListener("click",()=>{
  if(!state.stream){ toast("Aktifkan kamera dulu atau pilih foto."); return; }
  const c=document.createElement("canvas"); c.width=video.videoWidth||800; c.height=video.videoHeight||600;
  c.getContext("2d").drawImage(video,0,0,c.width,c.height);
  state.lastImage=c.toDataURL("image/jpeg",.88); photo.src=state.lastImage; photo.hidden=false; video.hidden=true; empty.hidden=true; stopCamera();
});
document.getElementById("fileInput").addEventListener("change",e=>{
  const f=e.target.files[0]; if(!f)return;
  const r=new FileReader(); r.onload=()=>{state.lastImage=r.result;photo.src=state.lastImage;photo.hidden=false;video.hidden=true;empty.hidden=true;}; r.readAsDataURL(f);
});
document.getElementById("analyzeBtn").addEventListener("click",()=>{
  if(!state.lastImage){toast("Pilih atau ambil foto tanaman terlebih dahulu.");return;}
  document.getElementById("resultImage").src=state.lastImage;
  saveHistory();
  showScreen("result");
});

function saveHistory(){
  const items=JSON.parse(localStorage.getItem("larastani_history")||"[]");
  items.unshift({date:new Date().toLocaleString("id-ID"),disease:"Bercak Daun (Cercospora)",confidence:"85%",image:state.lastImage});
  localStorage.setItem("larastani_history",JSON.stringify(items.slice(0,10)));
}
function renderHistory(){
  const box=document.getElementById("historyList"), items=JSON.parse(localStorage.getItem("larastani_history")||"[]");
  if(!items.length){box.innerHTML='<div class="empty">🗂️ Belum ada riwayat pemeriksaan.</div>';return;}
  box.innerHTML=items.map((x,i)=>`<div class="history-item"><div><b>🌿 ${x.disease}</b><br><small>${x.date} · Keyakinan ${x.confidence}</small></div><button class="secondary" onclick="openHistory(${i})">Lihat</button></div>`).join("");
}
window.openHistory=(i)=>{const items=JSON.parse(localStorage.getItem("larastani_history")||"[]");if(items[i]?.image){state.lastImage=items[i].image;document.getElementById("resultImage").src=items[i].image;showScreen("result");}};
document.getElementById("clearHistory").addEventListener("click",()=>{localStorage.removeItem("larastani_history");renderHistory();toast("Riwayat dihapus.");});

// Expert chat
function botAnswer(q){
  const s=q.toLowerCase();
  const lang=state.lang;
  const common={
    id:{
      intro:"Terima kasih sudah menceritakan kondisinya secara detail.",
      cause:"Dari cerita yang kamu sampaikan, kemungkinan masalahnya berkaitan dengan penyakit atau gangguan pada daun. Kondisi lembap dan sirkulasi udara yang kurang dapat memperparah bercak daun.",
      solve:"Coba pisahkan bagian daun yang sudah parah, jaga kebersihan lahan, atur jarak tanaman agar udara lebih lancar, dan pantau perubahan beberapa hari ke depan.",
      ask:"Kalau bisa, tambahkan jenis tanaman, umur tanaman, sejak kapan gejala muncul, kondisi cuaca, dan apakah ada serangga atau jamur yang terlihat.",
      when:"Pantau kembali dalam 3–7 hari. Jika gejala makin menyebar atau tanaman menurun, konsultasikan dengan penyuluh pertanian.",
      generic:"Saya sudah membaca cerita kamu. Untuk membantu lebih tepat, jelaskan jenis tanaman, gejala yang terlihat, bagian tanaman yang terkena, kapan mulai terjadi, serta kondisi cuaca atau lahan."
    },
    jv:{
      intro:"Matur nuwun wis nyritakake kondisine kanthi rinci.",
      cause:"Saka critamu, kemungkinan masalah ana hubungane karo penyakit utawa gangguan ing godhong. Kahanan lembap lan sirkulasi udara sing kurang bisa nggawe bercak godhong saya parah.",
      solve:"Coba pisahake godhong sing wis parah, jaga kebersihan lahan, atur jarak tandur supaya udara luwih lancar, lan pantau owah-owahan sawetara dina.",
      ask:"Yen bisa, tambahna jinis tanduran, umur tanduran, wiwit kapan gejala katon, kahanan cuaca, lan apa ana serangga utawa jamur sing katon.",
      when:"Pantau maneh sajrone 3–7 dina. Yen gejala tambah nyebar utawa tanduran saya mudhun, konsultasi karo penyuluh pertanian.",
      generic:"Aku wis maca critamu. Supaya luwih tepat, critakna jinis tanduran, gejala, bagean sing kena, wiwit kapan, lan kahanan cuaca utawa lahan."
    },
    su:{
      intro:"Hatur nuhun parantos nyaritakeun kaayaanana sacara rinci.",
      cause:"Tina carita anjeun, masalahna bisa patali jeung panyakit atawa gangguan dina daun. Kaayaan baseuh jeung sirkulasi hawa anu kurang bisa ngajadikeun bercak daun beuki parah.",
      solve:"Coba pisahkeun daun anu parah, jaga kabersihan lahan, atur jarak tanam sangkan hawa lancar, sarta pantau sababaraha poé.",
      ask:"Lamun bisa, tambahkeun jinis pepelakan, umur pepelakan, iraha gejala mimiti muncul, kaayaan cuaca, jeung naha aya serangga atawa jamur.",
      when:"Pantau deui dina 3–7 poé. Lamun gejala beuki sumebar atawa pepelakan beuki goréng, konsultasi ka panyuluh.",
      generic:"Kuring geus maca carita anjeun. Supaya leuwih tepat, caritakeun jinis pepelakan, gejala, bagian anu kapangaruhan, iraha mimiti, jeung kaayaan cuaca atawa lahan."
    },
    mad:{
      intro:"Terema kasih sampiyan la nyaritagi kondisina secara rinci.",
      cause:"Dari carita sampiyan, kemungkinan masalah ada kaitanna ben penyakit otaba gangguan e daun. Kondisi lembap ben sirkulasi udara kurang bisa mabuat bercak makin parah.",
      solve:"Coba pisahagi daun se parah, jaga kebersihan lahan, atur jarak tanam supaya udara lancar, ben pantau perubahan beberapa are.",
      ask:"Mon bisa, tambahagi jenis tanaman, umur tanaman, mulai kapan gejala muncul, kondisi cuaca, ben apa ada serangga otaba jamur se e lihat.",
      when:"Pantau pole 3–7 are. Mon gejala makin nyebar otaba tanaman makin lemah, konsultasi ka penyuluh pertanian.",
      generic:"Sengkok la maca carita sampiyan. Supaya lebbi tepat, caritaagi jenis tanaman, gejala, bagian se kena, mulai kapan, ben kondisi cuaca otaba lahan."
    },
    ban:{
      intro:"Suksma sampun nyaritayang kondisi sacara rinci.",
      cause:"Saking carita sane sampun kaaturang, kemungkinan masalah patali sareng penyakit utawi gangguan ring daun. Kondisi lembap miwah sirkulasi udara kirang becik prasida ngawinang bercak tambah parah.",
      solve:"Coba pisahang daun sane parah, jaga kebersihan lahan, atur jarak tanam mangda udara lancar, tur pantau perubahan sawatara rahina.",
      ask:"Yening prasida, tambahayang jenis tetanduran, umur tetanduran, saking kapan gejala medal, kondisi cuaca, miwah wenten serangga utawi jamur sane katingal.",
      when:"Pantau malih ring 3–7 rahina. Yening gejala makin nyebar utawi tetanduran makin lemah, konsultasi sareng penyuluh.",
      generic:"Sampun maca carita sameton. Mangda langkung tepat, ceritayang jenis tetanduran, gejala, bagian sane kena, saking kapan, miwah kondisi cuaca utawi lahan."
    }
  }[lang]||common.id;

  // Answer based on the user's actual story. Quick examples are only shortcuts; free-form input works too.
  if(/penyebab|sebab|panyebab|why|kenapa|mengapa/.test(s)) return common.intro+" "+common.cause+" "+common.ask;
  if(/atasi|solusi|obat|treatment|cara|harus.*dilakukan|ngatasi|penanganan/.test(s)) return common.intro+" "+common.solve+" "+common.when;
  if(/kapan|pantau|cek lagi|periksa lagi/.test(s)) return common.when+" "+common.ask;
  if(q.length>80) return common.intro+" "+common.cause+" "+common.solve+" "+common.ask;
  return common.generic;
}
function addChat(text,type){
  const box=document.getElementById("chatMessages"), div=document.createElement("div"); div.className="chat "+type;
  div.innerHTML=type==="user"
    ? `<div><p>${escapeHtml(text)}</p></div><span class="avatar">🧑‍🌾</span>`
    : `<span class="avatar">👨‍🌾</span><div><b>LarasTani</b><p>${escapeHtml(text)}</p><button class="read-answer" type="button">🔊 ${escapeHtml(t("readAnswer"))}</button></div>`;
  if(type==="bot") div.querySelector(".read-answer")?.addEventListener("click",()=>speak(text));
  box.appendChild(div); box.scrollTop=box.scrollHeight;
  if(type==="bot" && state.speech) speak(text);
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
async function sendQuestion(q){
  q = (q || document.getElementById("questionInput").value).trim();

  if(!q) return;

  const input = document.getElementById("questionInput");
  const status = document.getElementById("voiceStatus");

  if(input){
    input.value = "";
    updateCharCount();
  }

  addChat(q, "user");

  if(status){
    status.textContent = "LarasTani sedang menganalisis...";
  }

  try {
    const response = await fetch("/api/tanya-pakar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: q,
        language: state.lang
      })
    });

    const data = await response.json();

    if(!response.ok){
      throw new Error(data.answer || "Server mengalami masalah");
    }

    addChat(data.answer, "bot");

    if(status){
      status.textContent = "";
    }

    if(state.speech){
      speak(data.answer);
    }

  } catch(error) {
    console.error(error);

    const errorText =
      state.lang === "jv"
        ? "Nyuwun pangapunten, LarasTani lagi ngalami gangguan."
        : state.lang === "su"
        ? "Hapunten, LarasTani nuju ngalaman gangguan."
        : state.lang === "mad"
        ? "Sapora, LarasTani sedang ngalami gangguan."
        : state.lang === "ban"
        ? "Ampura, LarasTani sedang ngalami gangguan."
        : "Maaf, LarasTani sedang mengalami gangguan.";

    addChat(errorText, "bot");

    if(status){
      status.textContent = "";
    }
  }
}
document.getElementById("sendBtn").addEventListener("click",()=>sendQuestion());
document.getElementById("questionInput").addEventListener("keydown",e=>{if(e.key==="Enter")sendQuestion()});
document.querySelectorAll("[data-question]").forEach(b=>b.addEventListener("click",()=>sendQuestion(b.dataset.question)));

// Voice input — petani bisa langsung berbicara.
let activeRecognition=null;

function startVoiceQuestion(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){
    toast("Browser ini belum mendukung input suara. Gunakan Chrome/Edge/Safari terbaru.");
    return;
  }
  if(activeRecognition){ activeRecognition.stop(); return; }

  const rec=new SR();
  activeRecognition=rec;
  rec.lang={id:"id-ID",jv:"jv-ID",su:"su-ID",mad:"id-ID",ban:"id-ID"}[state.lang]||"id-ID";
  rec.interimResults=false;
  rec.maxAlternatives=1;

  const main=document.getElementById("voiceMainBtn");
  const wave=document.getElementById("voiceWave");
  const status=document.getElementById("voiceStatus");
  main?.classList.add("listening"); wave?.classList.add("active");
  if(status) status.textContent="🎙️ Mendengarkan... Silakan bicara.";

  rec.onresult=e=>{
    const spoken=e.results[0][0].transcript;
    document.getElementById("questionInput").value=spoken;
    if(status) status.textContent="✓ Pertanyaan diterima. Menjawab...";
    sendQuestion(spoken);
  };
  rec.onerror=e=>{
    if(status) status.textContent=e.error==="not-allowed"
      ? "Izin mikrofon ditolak. Aktifkan mikrofon di browser."
      : "Suara belum terbaca. Coba lagi.";
  };
  rec.onend=()=>{
    activeRecognition=null;
    main?.classList.remove("listening"); wave?.classList.remove("active");
    setTimeout(()=>{if(status) status.textContent="";},1800);
  };
  rec.start();
}

document.getElementById("voiceMainBtn")?.addEventListener("click",startVoiceQuestion);
document.getElementById("voiceBtn")?.addEventListener("click",startVoiceQuestion);

// Speech output
function speak(text){
  if(!("speechSynthesis" in window)){ toast("Browser ini belum mendukung fitur bacakan."); return; }
  speechSynthesis.cancel();
  const locale={id:"id-ID",jv:"jv-ID",su:"su-ID",mad:"id-ID",ban:"id-ID"}[state.lang]||"id-ID";
  const u=new SpeechSynthesisUtterance(text);
  u.lang=locale; u.rate=.88;
  const voices=speechSynthesis.getVoices();
  u.voice=voices.find(v=>v.lang.toLowerCase()===locale.toLowerCase())
    || voices.find(v=>v.lang.toLowerCase().startsWith(locale.split("-")[0].toLowerCase()))
    || null;
  speechSynthesis.speak(u);
}
document.getElementById("speakPage").addEventListener("click",()=>speak(document.querySelector(".screen.active")?.innerText.slice(0,1200)||"LarasTani"));
document.getElementById("speechToggle").addEventListener("change",e=>{state.speech=e.target.checked;localStorage.setItem("larastani_speech",state.speech)});
document.getElementById("largeTextToggle").addEventListener("change",e=>document.body.classList.toggle("large-text",e.target.checked));

// Settings
const modal=document.getElementById("settingsModal");
function openSettings(){modal.classList.add("show");document.getElementById("speechToggle").checked=state.speech;}
document.getElementById("settingsBtn").addEventListener("click",openSettings);
document.getElementById("navSettings").addEventListener("click",openSettings);
document.getElementById("closeSettings").addEventListener("click",()=>modal.classList.remove("show"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});

// Browser back/forward
window.addEventListener("popstate",e=>showScreen(e.state?.id||"menu",false));

// Initial
applyLanguage();
if(location.hash && document.getElementById(location.hash.slice(1))) showScreen(location.hash.slice(1),false);

function updateCharCount(){
  const el=document.getElementById("questionInput"), c=document.getElementById("charCount");
  if(el&&c)c.textContent=el.value.length;
}
document.getElementById("questionInput")?.addEventListener("input",updateCharCount);
document.getElementById("questionInput")?.addEventListener("keydown",e=>{
  if(e.key==="Enter" && !e.shiftKey){e.preventDefault();sendQuestion();}
});
document.getElementById("clearChat")?.addEventListener("click",()=>{
  const box=document.getElementById("chatMessages");
  if(!box)return;
  box.innerHTML=`<div class="chat bot"><span class="avatar">🌱</span><div><b>LarasTani</b><p>${escapeHtml(t("botGreeting"))}</p><button class="read-answer" type="button">🔊 ${escapeHtml(t("readAnswer"))}</button></div></div>`;
  box.querySelector(".read-answer")?.addEventListener("click",()=>speak(t("botGreeting")));
});
