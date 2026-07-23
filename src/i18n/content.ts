// ============================================================
// İçerik · Türkçe + İngilizce
// Metinleri buradan düzenle. Modül adları uygulamadan birebir alındı.
// ============================================================

// Tek CTA: App Store linki. Uygulama yayınlanınca burayı güncelle.
export const APP_STORE_URL = "https://apps.apple.com/app/piyanomini/id000000000";

export const CONTACT = {
  email: "hello@istemifurkan.com",
  instagram: "https://www.instagram.com/piyanomini/",
  instagramHandle: "@piyanomini",
  twitter: "https://x.com/piyanomini",
  blog: "https://www.istemifurkan.com/",
  about: "https://www.istemifurkan.com/",
};

export type Lang = "tr" | "en";

type Module = { code: string; title: string; desc: string; meta: string };
type Category = { title: string; tagline: string; count: string; items: string[] };
type Feature = { title: string; desc: string; meta: string };
type Product = { name: string; kind: string; desc: string; meta: string; href: string };
type KV = { label: string; value: string };
type LegalDoc = {
  eyebrow: string;
  title: string;
  titleTag: string;
  updated: string;
  lead: string;
  sections: { h: string; p: string }[];
  contactHeading: string;
  contactText: string;
};

type Strings = {
  htmlLang: string;
  meta: { title: string; description: string };
  edition: string;
  nav: { ars: string; manus: string; principles: string; download: string };
  hero: { title: string; intro: string; cta: string; note: string; modes: string[] };
  spec: KV[];
  products: {
    eyebrow: string;
    count: string;
    heading: string;
    intro: string;
    items: Product[];
  };
  ars: { eyebrow: string; note: string; heading: string; intro: string };
  modules: { eyebrow: string; count: string; lead?: string; items: Category[] };
  system: {
    eyebrow: string;
    count: string;
    heading: string;
    intro: string;
    items: Feature[];
  };
  tools: { eyebrow: string; count: string; items: Module[] };
  manus: {
    eyebrow: string;
    count: string;
    heading: string;
    intro: string;
    availability: string;
    chapters: Category[];
    principlesHeading: string;
    principlesIntro: string;
    features: Feature[];
  };
  screens: { eyebrow: string; heading: string };
  principles: {
    eyebrow: string;
    note: string;
    heading: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  footer: {
    cta: string;
    download: string;
    siteLabel: string;
    contactLabel: string;
    tagline: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  legal: { backHome: string; privacy: LegalDoc; terms: LegalDoc };
};

export const content: Record<Lang, Strings> = {
  tr: {
    htmlLang: "tr",
    meta: {
      title: "Piyanomini · Ars ve Manus",
      description:
        "Piyanomini Ars ile müziği çalışın; Piyanomini Manus ile piyanoyu adım adım öğrenin. Müzik öğretmeni tarafından tasarlanan iki iOS uygulaması.",
    },
    edition: "Müzik Eğitimi · iOS",
    nav: {
      ars: "Ars",
      manus: "Manus",
      principles: "İlkeler",
      download: "App Store",
    },
    hero: {
      title: "Müziği öğrenmek ve çalışmak için iki yol.",
      intro:
        "Ars, ritimden armoni ve kontrpuana uzanan bir müzik çalışma alanıdır. Manus, bir yıl boyunca piyano eğitimine eşlik eden doğrusal ve etkileşimli bir kitaptır. İkisi de müziği dinleyerek, anlayarak ve yaparak öğrenmek için tasarlandı.",
      cta: "Ars'ı App Store'dan indir",
      note: "Manus · iPad için geliştiriliyor",
      modes: ["Piyanomini · Ars", "Piyanomini · Manus"],
    },
    spec: [
      { label: "Tasarımcı", value: "Müzik öğretmeni" },
      { label: "Ars", value: "8 konu · 32 alıştırma" },
      { label: "Manus", value: "1 yıllık piyano yolculuğu" },
      { label: "Cihazlar", value: "iPhone · iPad" },
      { label: "Yaklaşım", value: "Dinle · Anla · Uygula" },
    ],
    products: {
      eyebrow: "Piyanomini",
      count: "02 Uygulama",
      heading: "Aynı eğitim yaklaşımı, iki farklı ihtiyaç.",
      intro: "Ars düzenli ve derin müzik pratiği için; Manus piyano eğitimini baştan sona takip eden bir kitap deneyimi için tasarlandı.",
      items: [
        {
          name: "Ars",
          kind: "Müzik çalışma alanı",
          desc: "Kulağı, nota okumasını, teoriyi, vokali, armoniyi ve kontrpuanı tek bir konu düzeninde çalıştırır. Üretken alıştırmalar, öğretmen ödevleri ve gerçek nota yazımı içerir.",
          meta: "iPhone · iPad · 8 konu · 32 alıştırma",
          href: "#ars",
        },
        {
          name: "Manus",
          kind: "Etkileşimli piyano kitabı",
          desc: "Piyanoya ilk dokunuştan nota okumaya ve müzikal ifadeye uzanan bir yıllık yol arkadaşlığı. Sayfaları kaydırın, örnekleri dinleyin, çalın ve yazın.",
          meta: "iPad · 1 yıllık program · Yakında",
          href: "#manus",
        },
      ],
    },
    ars: {
      eyebrow: "Piyanomini · Ars",
      note: "iPhone · iPad",
      heading: "Duy. Oku. Kur. Söyle. Yaz.",
      intro: "Ars müziği sekiz konu etrafında birleştirir: ritimden nota ve aralığa, melodiden armoni ve kontrpuana. Konuyu etkileşimli anlatımla öğrenin; gerçek nota yazımıyla, kulağınızla ve sesinizle çalışın.",
    },
    modules: {
      eyebrow: "İçindekiler",
      count: "08 Konu · 32 Alıştırma",
      lead: "Uygulamanın yeni içindekiler düzeni, alıştırmaları çalışma biçimine göre değil konuya göre toplar. Her konuya okuyarak, kurarak, duyarak, söyleyerek veya yazarak farklı bir kapıdan girebilirsiniz.",
      items: [
        {
          title: "Ritim",
          tagline: "Duy · Oku · Yaz",
          count: "3 alıştırma",
          items: ["Tekrar", "Okuma", "Dikte"],
        },
        {
          title: "Nota & Dizek",
          tagline: "Oku · Duy",
          count: "3 alıştırma",
          items: ["Tuş Bulma", "Nota Okuma", "Nota Duyma"],
        },
        {
          title: "Aralık",
          tagline: "Duy · Oku · Kur",
          count: "4 alıştırma",
          items: ["Kıyaslama", "Tanıma", "Kurma", "Duyma"],
        },
        {
          title: "Dizi & Ton",
          tagline: "Oku · Kur · Duy",
          count: "5 alıştırma",
          items: ["Ton Bulma", "Ton Kurma", "Dizi Tanıma", "Dizi Kurma", "Dizi Duyma"],
        },
        {
          title: "Akor",
          tagline: "Oku · Kur · Duy",
          count: "5 alıştırma",
          items: ["Tanıma", "Kurma", "Duyma", "Derece Tanıma", "Derece Duyma"],
        },
        {
          title: "Melodi",
          tagline: "Duy · Söyle · Oku · Yaz",
          count: "6 alıştırma",
          items: ["Yön Tahmini", "Duy ve Söyle", "Deşifre Solfej", "Deşifre Çalma", "Dikte", "Transpozisyon"],
        },
        {
          title: "Entonasyon",
          tagline: "Söyle",
          count: "3 alıştırma",
          items: ["Dizi", "Aralık", "Arpej"],
        },
        {
          title: "Armoni & Kontrpuan",
          tagline: "Yaz",
          count: "3 alıştırma",
          items: ["Armoni", "Cantus Firmus", "Karşı Ezgi"],
        },
      ],
    },
    system: {
      eyebrow: "Çalışma Sistemi",
      count: "Öğrenci · Öğretmen",
      heading: "Kavramdan uygulamaya, aynı yerde.",
      intro: "Piyanomini yalnızca soru sormaz. Konuyu açıklar, alıştırmayı üretir, sonucu kaydeder ve öğretmenle çalışmayı kolaylaştırır.",
      items: [
        { title: "Nedir · Nasıl", desc: "Ritim, nota, aralık, dizi-ton, akor, armoni ve kontrpuan için etkileşimli konu anlatımları. Örnekleri dinleyin, işaretlere dokunun ve dar alıştırmalarla hemen deneyin.", meta: "7 rehber" },
        { title: "Kişiye göre alıştırma", desc: "Anahtar, ses aralığı, tonalite, tempo, zorluk ve soru havuzunu çalışmanıza göre ayarlayın. Sorular her oturumda yeniden üretilir.", meta: "Canlı üretim" },
        { title: "Ödevi doğrudan aç", desc: "Öğretmen seçtiği alıştırmayı ve ayarlarını link ya da kısa kod olarak gönderir. Öğrenci dokunduğunda aynı çalışma hazır açılır; hesap gerekmez.", meta: "Link · Kod" },
        { title: "Egzersiz kâğıdı üret", desc: "Ritim, nota, aralık, akor, transpozisyon ve armoni için yazdırılabilir PDF çalışma kâğıtları hazırlayın ve paylaşın.", meta: "6 PDF türü" },
      ],
    },
    tools: {
      eyebrow: "Ars · Araçlar",
      count: "06 Araç",
      items: [
        { code: "TUN", title: "Tuner", desc: "Kromatik tuner; strobe ve grafik görünümleriyle perdeyi hassas izleyin.", meta: "Strobe · Grafik" },
        { code: "MET", title: "Metronom", desc: "Tiklerini nota değerleriyle programlayın; noktalı notalar, trioleler ve konuşan sayım kullanın.", meta: "Programlanabilir tikler" },
        { code: "SÜR", title: "Süre", desc: "Serbest ya da geri sayımlı çalışın; günlük hedefinizi ve oturum sürenizi takip edin.", meta: "Hedef · Geri sayım" },
        { code: "SÖZ", title: "Sözlük", desc: "Nota yazımı ve müzik teorisi terimlerini uygulamadan çıkmadan hızla bulun.", meta: "Teori · Notasyon" },
        { code: "HAT", title: "Hatırlatıcı", desc: "Seçtiğiniz gün ve saatte çalışma bildirimi alın; istediğiniz zaman değiştirin veya kapatın.", meta: "Gün · Saat" },
        { code: "GEÇ", title: "Geçmiş", desc: "Tüm egzersiz oturumlarını tek yerde; skor, doğruluk ve süreyle geriye dönük inceleyin.", meta: "Birleşik kayıt" },
      ],
    },
    manus: {
      eyebrow: "Piyanomini · Manus",
      count: "iPad · Türkçe / English",
      heading: "Bir menü değil, ilerledikçe açılan bir kitap.",
      intro: "Manus, piyano öğrenen öğrenciye ve öğretmenine bir yıl boyunca eşlik eden yatay bir kitap deneyimidir. Kaldığınız sayfayı hatırlar; her konu açıklama, dinleme, dokunma, çalma ve yazma arasında doğal bir sıra kurar.",
      availability: "Manus şu anda geliştiriliyor ve iPad için hazırlanıyor.",
      chapters: [
        {
          title: "Ses & Dokunuş",
          tagline: "Dinle · Keşfet · Çal",
          count: "Başlangıç",
          items: ["Piyanoya İlk Dokunuş", "Kol Ağırlığıyla Dokunuş", "Güzel Ses Üretme"],
        },
        {
          title: "Ritim & Müzik Yazısı",
          tagline: "Gör · Say · Yaz",
          count: "Temel",
          items: ["Müzik Yazısı", "Yatay Eksen", "Süre Değerleri", "Ölçü", "Ritim Yazma"],
        },
        {
          title: "Nota Okuma",
          tagline: "Bul · Oku · Çal",
          count: "Dikey Eksen",
          items: ["Tuş Bulma", "Dizek", "Sol Anahtarı", "Nota Tanıma"],
        },
        {
          title: "Uygulama",
          tagline: "Dene · Tekrar Et",
          count: "Etkileşimli",
          items: ["Çalınabilir Örnekler", "Ritim Oyunları", "Üretilen Çalışma Sayfaları", "Dinlenebilir Notalar"],
        },
      ],
      principlesHeading: "Kitabın farkı, daha ilk seste başlar.",
      principlesIntro: "Manus hızlı sonuç görüntüsü üretmek yerine sağlam bir müzikal temel kurar. Ses, okuma, teknik ve ifade birbirinden ayrılmaz; her yeni beceri öğrenciyi kendi başına müzik çözmeye biraz daha yaklaştırır.",
      features: [
        { title: "Önce ses", desc: "İlk notalar dengeli bir parmak ve serbest kol ağırlığıyla, birbirinden ayrı üretilir. Amaç hemen çok nota çalmak değil; gerginliksiz, dolgun ve dinlenmiş bir ses kurmaktır.", meta: "Ağırlık · Denge · Ton" },
        { title: "Klavye bir bütündür", desc: "El aylarca beş komşu tuşa kapatılmaz. Öğrenci en baştan klavyede dolaşır; notayı sabit el pozisyonu ya da parmak numarasıyla karıştırmaz.", meta: "Konum değil · Coğrafya" },
        { title: "Okuma gerçekten okumadır", desc: "Müzik yazısı ilk derslerden itibaren yatay ve dikey iki eksen olarak ele alınır. Öğrenci işareti görür, sesi düşünür ve klavyedeki yerini bağımsızca bulur.", meta: "Gör · Düşün · Bul" },
        { title: "İfade sona bırakılmaz", desc: "Bağlı, bağsız ve kısa çalma biçimleri; nüanslar ve müzikal karakter daha başlangıç repertuvarında yer alır. Doğru tuş kadar, sesin nasıl söylendiği de önemlidir.", meta: "Artikülasyon · Nüans" },
        { title: "Teknik, müziğin aracıdır", desc: "Hareketler soyut parmak jimnastiği olarak değil, istenen sesi ve karakteri üretmek için öğrenilir. Teknik, dinleme ve müzikal imgeyle birlikte gelişir.", meta: "Hareket → Ses → Anlam" },
        { title: "Hedef bağımsız müzisyen", desc: "Temel baştan doğru kurulduğunda öğrenci yeni bir parçayı kendi başına okuyabilir, anlayabilir ve karakterini oluşturabilir. Öğretmene bağımlılık zamanla azalır.", meta: "Oku · Anla · Yorumla" },
      ],
    },
    screens: { eyebrow: "Ekranlar", heading: "Her egzersiz, gerçek nota yazımıyla." },
    principles: {
      eyebrow: "İlkeler",
      note: "Ars · Dürüst yazılım",
      heading: "Önce deneyin, sonra karar verin.",
      intro:
        "Piyanomini'yi satın almadan önce tam haliyle kullanabilin istedik. Deneme süresinde özellik kısıtlaması yoktur; süre bittiğinde siz satın almadıkça ücret alınmaz.",
      items: [
        { title: "Tam deneme, kart tuzağı yok", desc: "14 gün boyunca tüm özellikler açıktır. Süre sonunda siz açıkça satın almadıkça hiçbir ücret alınmaz." },
        { title: "Abonelik yok", desc: "Tek seferlik satın alma vardır. Aylık ya da yıllık yenileme yoktur." },
        { title: "Aile Paylaşımı dahil", desc: "Tek satın alma, Apple Aile Paylaşımı grubundaki 6 kişiye kadar herkes için geçerli. Bir kez alın, aileniz birlikte kullansın." },
        { title: "Hesap yok, internet gerekmez", desc: "Kayıt, e-posta ya da şifre istemez. Egzersizler, ayarlar ve kayıtlar cihazınızda kalır." },
        { title: "Reklam, takip, veri yok", desc: "Analitik, reklam ya da izleme aracı kullanmıyoruz; kişisel verinizi toplamıyoruz." },
        { title: "Öğretmenin yerini almaz", desc: "Öğretmeninizle yürüttüğünüz çalışmayı desteklemek için tasarlandı; onun yerine geçmek için değil." },
        { title: "Doldurma yok", desc: "Her modül gerçek bir çalışma ihtiyacından doğdu. Listeyi kalabalık göstermek için konmuş bölüm yoktur." },
      ],
    },
    footer: {
      cta: "Bugün başlayın.",
      download: "App Store'dan indir",
      siteLabel: "Site",
      contactLabel: "İletişim",
      tagline: "Ars · Manus · Müzik eğitimi",
      rights: "Tüm hakları saklıdır.",
      privacy: "Gizlilik",
      terms: "Kullanım Şartları",
    },
    legal: {
      backHome: "← Ana sayfa",
      privacy: {
        eyebrow: "Gizlilik",
        title: "Gizlilik Politikası",
        titleTag: "Gizlilik Politikası · Piyanomini",
        updated: "Son güncelleme: 28 Mayıs 2026",
        lead: "Piyanomini gizliliğe saygı duyar. Kısacası: kişisel veri toplamıyoruz; uygulama verileriniz cihazınızda kalır.",
        sections: [
          { h: "Veri toplamıyoruz", p: "Piyanomini hesap, kayıt ya da giriş gerektirmez. Adınızı, e-postanızı veya başka bir kişisel bilginizi istemez ve saklamayız." },
          { h: "Verileriniz cihazınızda kalır", p: "İlerlemeniz, ayarlarınız, hatırlatmalarınız ve çalışma kayıtlarınız yalnızca cihazınızda saklanır. Bizim sunucularımıza gönderilmez; zaten bir sunucumuz yok. Uygulamayı silerseniz bu yerel veriler de silinebilir. Satın alma durumunuz Apple hesabınız üzerinden geri yüklenebilir. Temel egzersizler internet bağlantısı olmadan çalışır; satın alma, satın almayı geri yükleme ve dış bağlantılar ilgili Apple ya da üçüncü taraf servis bağlantısını gerektirebilir." },
          { h: "Analitik, izleme ve reklam yok", p: "Üçüncü taraf analiz, izleme veya reklam araçları kullanmıyoruz. Davranışınızı takip etmiyoruz." },
          { h: "Mikrofon", p: "Tuner, vokal ve akort ölçümü gibi mikrofon gerektiren özellikler için mikrofon erişimi istenir. Ses yalnızca perde analizi amacıyla cihazınızda anlık olarak işlenir; kaydedilmez, saklanmaz ve hiçbir yere gönderilmez. Mikrofon iznini dilediğiniz an cihaz ayarlarından geri alabilirsiniz." },
          { h: "Bildirimler", p: "Çalışma hatırlatıcıları, seçtiğiniz gün ve saatlere göre iOS tarafından cihazınızda zamanlanır. Hatırlatma bilgileriniz bize gönderilmez." },
          { h: "Satın almalar", p: "Satın almalar Apple App Store üzerinden gerçekleşir ve Apple tarafından işlenir. Ödeme bilgilerinize erişimimiz yoktur. Uygulama, yalnızca satın alma durumunu doğrulamak ve erişimi açmak için Apple'ın sağladığı işlem durumunu kullanır." },
          { h: "İletişim ve dış bağlantılar", p: "Uygulama içinden e-posta, WhatsApp, Instagram veya web sitesi gibi dış bağlantılar açabilirsiniz. Bu servisleri kullanırsanız, paylaşmayı seçtiğiniz bilgiler ilgili servisin gizlilik politikasına tabidir." },
          { h: "Çocuklar", p: "Kişisel veri toplamadığımız, reklam ve takip kullanmadığımız için Piyanomini çocuklar ve öğrenciler tarafından güvenle kullanılabilir." },
          { h: "Değişiklikler", p: "Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikleri bu sayfada yayımlarız." },
        ],
        contactHeading: "İletişim",
        contactText: "Sorularınız için:",
      },
      terms: {
        eyebrow: "Yasal",
        title: "Kullanım Şartları",
        titleTag: "Kullanım Şartları · Piyanomini",
        updated: "Son güncelleme: 10 Haziran 2026",
        lead: "Piyanomini'yi kullanarak aşağıdaki şartları kabul etmiş olursunuz.",
        sections: [
          { h: "Lisans", p: "Piyanomini'yi kendi cihazlarınızda, bireysel çalışma ve ders bağlamında kullanabilirsiniz. Satın alma, App Store hesabınız üzerinden size kişisel ve devredilemez bir kullanım hakkı verir; bu hak, Apple Aile Paylaşımı yoluyla aile grubunuzdaki üyelerle paylaşılabilir. Uygulamayı kopyalayamaz, dağıtamaz, yeniden satamaz veya tersine mühendislik yapamazsınız." },
          { h: "Ücretsiz deneme", p: "Uygulama ilk kullanımdan itibaren 14 gün boyunca tam sürümüyle ücretsiz denenebilir. Deneme süresinde uygulama içinden ödeme başlatılmaz, kart istenmez ve süre sonunda otomatik ücret alınmaz. Süre bittiğinde satın almazsanız erişim kısıtlanır; uygulamayı silip yeniden yüklemek denemeyi sıfırlamayabilir. Abonelik yoktur." },
          { h: "Satın alma ve geri yükleme", p: "Tek seferlik satın alma, uygulamanın tüm özelliklerine kalıcı erişim sağlar; aynı Apple hesabıyla desteklenen cihazlarda ya da Apple Aile Paylaşımı grubunuzdaki üyeler tarafından geri yüklenebilir. Yeni özellikler ve güncellemeler dahil edilebilir; ancak uygulamanın kapsamı, teknik gereklilikler veya platform koşulları zaman içinde değişebilir." },
          { h: "İade", p: "Satın almalar Apple App Store üzerinden gerçekleşir. İade talepleri Apple'ın iade politikasına tabidir ve doğrudan Apple'a iletilir; ödeme bilgilerinize erişimimiz yoktur." },
          { h: "Fikri mülkiyet", p: "Uygulama, tasarımı, egzersizleri, yazılımı, görsel ve işitsel içerikleri ile Piyanomini markası Piyanomini'ye aittir ve telif hakkıyla korunur." },
          { h: "Sorumluluğun sınırlandırılması", p: "Piyanomini eğitim ve pratik amacıyla sunulur; öğretmen, uzman değerlendirmesi veya profesyonel hizmet yerine geçmez. Uygulama 'olduğu gibi' sağlanır. Yasaların izin verdiği ölçüde, kullanımından doğabilecek dolaylı zararlardan sorumlu değiliz." },
          { h: "Değişiklikler", p: "Bu şartları zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yer alır; uygulamayı kullanmaya devam etmeniz güncel şartları kabul ettiğiniz anlamına gelir." },
        ],
        contactHeading: "İletişim",
        contactText: "Sorularınız için:",
      },
    },
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Piyanomini · Ars and Manus",
      description:
        "Practise music with Piyanomini Ars and learn piano step by step with Piyanomini Manus. Two iOS apps designed by a music teacher.",
    },
    edition: "Music Education · iOS",
    nav: {
      ars: "Ars",
      manus: "Manus",
      principles: "Principles",
      download: "App Store",
    },
    hero: {
      title: "Two ways to learn and practise music.",
      intro:
        "Ars is a music practice space spanning rhythm, harmony and counterpoint. Manus is a linear, interactive book that accompanies a full year of piano learning. Both are built around learning by listening, understanding and doing.",
      cta: "Download Ars on the App Store",
      note: "Manus · in development for iPad",
      modes: ["Piyanomini · Ars", "Piyanomini · Manus"],
    },
    spec: [
      { label: "Designed by", value: "A music teacher" },
      { label: "Ars", value: "8 topics · 32 exercises" },
      { label: "Manus", value: "A full year of piano" },
      { label: "Devices", value: "iPhone · iPad" },
      { label: "Approach", value: "Listen · Understand · Do" },
    ],
    products: {
      eyebrow: "Piyanomini",
      count: "02 Apps",
      heading: "One teaching approach, two different needs.",
      intro: "Ars is made for focused, deep music practice. Manus turns a full piano-learning journey into a book you can touch, hear and play.",
      items: [
        {
          name: "Ars",
          kind: "Music practice space",
          desc: "Train your ear, notation reading, theory, voice, harmony and counterpoint in one topic-led system. Includes generative exercises, teacher assignments and real music notation.",
          meta: "iPhone · iPad · 8 topics · 32 exercises",
          href: "#ars",
        },
        {
          name: "Manus",
          kind: "Interactive piano book",
          desc: "A year-long companion from the first touch of a piano key to reading and musical expression. Swipe through the pages, listen, play and write.",
          meta: "iPad · One-year programme · Coming soon",
          href: "#manus",
        },
      ],
    },
    ars: {
      eyebrow: "Piyanomini · Ars",
      note: "iPhone · iPad",
      heading: "Hear. Read. Build. Sing. Write.",
      intro: "Ars brings music together around eight topics: from rhythm, notes and intervals to melody, harmony and counterpoint. Learn through interactive lessons, then practise with real notation, your ear and your voice.",
    },
    modules: {
      eyebrow: "Contents",
      count: "08 Topics · 32 Exercises",
      lead: "The new contents structure groups exercises by musical topic, not by practice mode. Enter each subject through reading, building, hearing, singing or writing.",
      items: [
        {
          title: "Rhythm",
          tagline: "Hear · Read · Write",
          count: "3 exercises",
          items: ["Repeat", "Reading", "Dictation"],
        },
        {
          title: "Notes & Staff",
          tagline: "Read · Hear",
          count: "3 exercises",
          items: ["Key Finder", "Note Reading", "Perfect Pitch"],
        },
        {
          title: "Intervals",
          tagline: "Hear · Read · Build",
          count: "4 exercises",
          items: ["Comparison", "Recognition", "Construction", "Hearing"],
        },
        {
          title: "Scales & Keys",
          tagline: "Read · Build · Hear",
          count: "5 exercises",
          items: ["Key Identification", "Key Construction", "Scale Recognition", "Scale Construction", "Scale Hearing"],
        },
        {
          title: "Chords",
          tagline: "Read · Build · Hear",
          count: "5 exercises",
          items: ["Recognition", "Construction", "Hearing", "Degree Recognition", "Degree Hearing"],
        },
        {
          title: "Melody",
          tagline: "Hear · Sing · Read · Write",
          count: "6 exercises",
          items: ["Pitch Direction", "Sing Back", "Sight-Singing", "Sight-Reading", "Dictation", "Transposition"],
        },
        {
          title: "Intonation",
          tagline: "Sing",
          count: "3 exercises",
          items: ["Scale", "Interval", "Arpeggio"],
        },
        {
          title: "Harmony & Counterpoint",
          tagline: "Write",
          count: "3 exercises",
          items: ["Harmony", "Cantus Firmus", "Counterpoint"],
        },
      ],
    },
    system: {
      eyebrow: "Practice System",
      count: "Student · Teacher",
      heading: "From concept to practice, in one place.",
      intro: "Piyanomini does more than ask questions. It explains the topic, generates the exercise, records the result and makes teacher-led practice easier.",
      items: [
        { title: "What · How", desc: "Interactive lessons for rhythm, notes, intervals, scales and keys, chords, harmony and counterpoint. Listen to examples, touch the notation and try focused exercises immediately.", meta: "7 guides" },
        { title: "Practice made personal", desc: "Adjust the clef, range, key, tempo, difficulty and question pool to fit the work. Questions are generated afresh for every session.", meta: "Live generation" },
        { title: "Open the exact assignment", desc: "A teacher sends the chosen exercise and its settings as a link or short code. The same practice opens ready to go, with no account required.", meta: "Link · Code" },
        { title: "Make a worksheet", desc: "Create and share printable PDF worksheets for rhythm, notes, intervals, chords, transposition and harmony.", meta: "6 PDF types" },
      ],
    },
    tools: {
      eyebrow: "Ars · Tools",
      count: "06 Tools",
      items: [
        { code: "TUN", title: "Tuner", desc: "Chromatic tuner with strobe and graph views for precise pitch tracking.", meta: "Strobe · Graph" },
        { code: "MET", title: "Metronome", desc: "Program clicks with note values; use dotted notes, triplets and spoken beat counting.", meta: "Programmable clicks" },
        { code: "TMR", title: "Timer", desc: "Practice freely or with a countdown; track your daily goal and session time.", meta: "Goal · Countdown" },
        { code: "GLO", title: "Glossary", desc: "Look up notation and music-theory terms without leaving the app.", meta: "Theory · Notation" },
        { code: "RMD", title: "Reminders", desc: "Get practice notifications on the days and times you choose; change or turn them off anytime.", meta: "Day · Time" },
        { code: "HIS", title: "History", desc: "Review every exercise session in one place by score, accuracy and time.", meta: "Unified log" },
      ],
    },
    manus: {
      eyebrow: "Piyanomini · Manus",
      count: "iPad · Türkçe / English",
      heading: "Not a menu, but a book that unfolds as you progress.",
      intro: "Manus is a horizontal book experience that accompanies a piano student and teacher for a full year. It remembers your page and gives each subject a natural sequence through explanation, listening, touch, playing and writing.",
      availability: "Manus is currently in development for iPad.",
      chapters: [
        {
          title: "Sound & Touch",
          tagline: "Listen · Explore · Play",
          count: "Beginning",
          items: ["First Touch at the Piano", "Touch with Arm Weight", "Shaping a Beautiful Sound"],
        },
        {
          title: "Rhythm & Music Writing",
          tagline: "See · Count · Write",
          count: "Foundation",
          items: ["Music Writing", "Horizontal Axis", "Duration Values", "Measure", "Rhythm Writing"],
        },
        {
          title: "Reading Music",
          tagline: "Find · Read · Play",
          count: "Vertical Axis",
          items: ["Key Finder", "The Staff", "The Treble Clef", "Note Recognition"],
        },
        {
          title: "Practice",
          tagline: "Try · Repeat",
          count: "Interactive",
          items: ["Playable Examples", "Rhythm Games", "Generated Worksheets", "Scores You Can Hear"],
        },
      ],
      principlesHeading: "The difference begins with the very first sound.",
      principlesIntro: "Manus does not chase the appearance of quick progress. It builds a durable musical foundation in which sound, reading, technique and expression are inseparable, and every new skill moves the student towards independent musicianship.",
      features: [
        { title: "Sound comes first", desc: "The first notes are made separately with a balanced finger and free arm weight. The goal is not to play many notes at once, but to establish a full, relaxed and carefully heard tone.", meta: "Weight · Balance · Tone" },
        { title: "The keyboard is one whole", desc: "The hand is not confined to five neighbouring keys for months. Students travel across the keyboard from the beginning, without confusing notes with a fixed hand position or finger number.", meta: "Geography · Not position" },
        { title: "Reading means real reading", desc: "Music writing is introduced from the first lessons through its horizontal and vertical axes. Students see the sign, imagine the sound and find its place on the keyboard independently.", meta: "See · Think · Find" },
        { title: "Expression is not postponed", desc: "Detached, connected and short touches, dynamics and musical character all appear in the early repertoire. How a sound speaks matters as much as pressing the right key.", meta: "Articulation · Dynamics" },
        { title: "Technique serves the music", desc: "Movement is learned as a way to produce a desired sound and character, not as isolated finger gymnastics. Technique grows together with listening and musical imagination.", meta: "Movement → Sound → Meaning" },
        { title: "The goal is independence", desc: "With a sound foundation, students learn to read, understand and shape a new piece on their own. Their dependence on the teacher gradually decreases.", meta: "Read · Understand · Interpret" },
      ],
    },
    screens: { eyebrow: "Screens", heading: "Every exercise in real music notation." },
    principles: {
      eyebrow: "Principles",
      note: "Ars · Honest software",
      heading: "Try first, then decide.",
      intro:
        "We wanted you to use Piyanomini in full before paying. The trial is not a cut-down demo; when it ends, nothing is charged unless you choose to buy.",
      items: [
        { title: "Full trial, no surprise charge", desc: "All features are available for 14 days. When the trial ends, nothing is charged unless you explicitly buy." },
        { title: "No subscription", desc: "Piyanomini is a one-time purchase. No monthly or yearly renewals." },
        { title: "Family Sharing included", desc: "One purchase covers up to 6 people in your Apple Family Sharing group. Buy once, use it together as a family." },
        { title: "No account, no internet", desc: "No sign-up, email or password. Exercises, settings and logs stay on your device." },
        { title: "No ads, tracking or data", desc: "We use no analytics, advertising or tracking tools, and we collect no personal data." },
        { title: "Doesn't replace your teacher", desc: "Designed to support the work you do with your music teacher, not to replace them." },
        { title: "No filler", desc: "Every module comes from a real practice need. Nothing is there just to make the list look longer." },
      ],
    },
    footer: {
      cta: "Start today.",
      download: "Download on the App Store",
      siteLabel: "Site",
      contactLabel: "Contact",
      tagline: "Ars · Manus · Music education",
      rights: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    legal: {
      backHome: "← Home",
      privacy: {
        eyebrow: "Privacy",
        title: "Privacy Policy",
        titleTag: "Privacy Policy · Piyanomini",
        updated: "Last updated: May 28, 2026",
        lead: "Piyanomini respects your privacy. In short: we collect no personal data; your app data stays on your device.",
        sections: [
          { h: "We collect no data", p: "Piyanomini requires no account, sign-up or login. We never ask for or store your name, email or any other personal information." },
          { h: "Your data stays on your device", p: "Your progress, settings, reminders and practice logs are stored only on your device. They are never sent to our servers; we don't have any. If you delete the app, this local data may be deleted as well. Your purchase status can be restored through your Apple account. Core exercises work without an internet connection; purchases, purchase restoration and external links may require a connection to Apple or the relevant third-party service." },
          { h: "No analytics, tracking or ads", p: "We use no third-party analytics, tracking or advertising tools. We don't track your behaviour." },
          { h: "Microphone", p: "Features that require microphone input, such as the tuner, vocal practice and tuning measurement, request microphone access. Audio is processed on your device in real time for pitch analysis only; it is never recorded, stored or sent anywhere. You can revoke microphone access at any time in your device settings." },
          { h: "Notifications", p: "Practice reminders are scheduled locally by iOS on the days and times you choose. Your reminder information is not sent to us." },
          { h: "Purchases", p: "Purchases are made through the Apple App Store and handled by Apple. We have no access to your payment details. The app only uses the transaction status provided by Apple to verify purchases and unlock access." },
          { h: "Contact and external links", p: "The app may open external links such as email, WhatsApp, Instagram or the website. If you use those services, any information you choose to share is handled under that service's privacy policy." },
          { h: "Children", p: "Because we collect no personal data and use no ads or tracking, Piyanomini can be used safely by children and students." },
          { h: "Changes", p: "We may update this policy from time to time. We will post any significant changes on this page." },
        ],
        contactHeading: "Contact",
        contactText: "For questions:",
      },
      terms: {
        eyebrow: "Legal",
        title: "Terms of Use",
        titleTag: "Terms of Use · Piyanomini",
        updated: "Last updated: June 10, 2026",
        lead: "By using Piyanomini, you agree to the following terms.",
        sections: [
          { h: "License", p: "You may use Piyanomini on your own devices for individual practice and in teaching contexts. A purchase gives you a personal, non-transferable right to use the app through your App Store account; this right may be shared with members of your family group via Apple Family Sharing. You may not copy, distribute, resell or reverse-engineer the app." },
          { h: "Free trial", p: "The app can be tried in full for 14 days from first use. During the trial, no in-app payment is started, no card is requested and no automatic charge is made when the trial ends. After it ends, access is restricted unless you buy. Deleting and reinstalling the app may not reset the trial. There is no subscription." },
          { h: "Purchase and restoration", p: "A one-time purchase gives permanent access to all app features and can be restored on supported devices using the same Apple account, or by members of your Apple Family Sharing group. New features and updates may be included, but the app's scope, technical requirements or platform conditions may change over time." },
          { h: "Refunds", p: "Purchases are made through the Apple App Store. Refund requests are subject to Apple's refund policy and handled directly by Apple; we have no access to your payment details." },
          { h: "Intellectual property", p: "The app, its design, exercises, software, visual and audio content, and the Piyanomini brand belong to Piyanomini and are protected by copyright." },
          { h: "Limitation of liability", p: "Piyanomini is provided for education and practice; it does not replace a teacher, expert assessment or professional service. The app is provided 'as is'. To the extent permitted by law, we are not liable for any indirect damages arising from its use." },
          { h: "Changes", p: "We may update these terms from time to time. The current version is always available on this page; continuing to use the app means you accept the current terms." },
        ],
        contactHeading: "Contact",
        contactText: "For questions:",
      },
    },
  },
};
