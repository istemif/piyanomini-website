// ============================================================
// İçerik · Türkçe + İngilizce
// Metinleri buradan düzenle. Modül adları uygulamadan birebir alındı.
// ============================================================

// Tek CTA: App Store linki. Uygulama yayınlanınca burayı güncelle.
export const APP_STORE_URL = "https://apps.apple.com/app/piyanomini/id000000000";

export const CONTACT = {
  email: "istemifurkan@gmail.com",
  instagram: "https://www.instagram.com/piyanomini/",
  instagramHandle: "@piyanomini",
  twitter: "https://x.com/piyanomini",
  blog: "https://www.istemifurkan.com/",
  about: "https://www.istemifurkan.com/",
};

export type Lang = "tr" | "en";

type Module = { code: string; title: string; desc: string; meta: string };
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
  nav: { download: string };
  hero: { title: string; intro: string; cta: string; note: string };
  spec: KV[];
  modules: { eyebrow: string; count: string; lead?: string; items: Module[] };
  tools: { eyebrow: string; count: string; items: Module[] };
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
      title: "Piyanomini: Müzisyenin İsviçre çakısı",
      description:
        "Ritim, teori, işitme, vokal, armoni ve karşı ezgi. Müzik kulağınızı ve teorinizi tek uygulamada geliştirin. Hesap yok, veri yok.",
    },
    edition: "Müzik Eğitimi · iOS",
    nav: { download: "App Store" },
    hero: {
      title: "Müzisyenin İsviçre çakısı.",
      intro:
        "Teori, işitme, ritim, vokal, armoni ve kontrpuan tek uygulamada. Piyanomini; kendiliğinden üretilen egzersizler, gerçek nota yazımı, tuner, metronom ve çalışma kaydıyla müzik pratiğini düzenli ve derli toplu hale getirir.",
      cta: "App Store'dan indir",
      note: "iOS için · 14 gün tam deneme · kart tuzağı yok",
    },
    spec: [
      { label: "Tasarımcı", value: "Müzik öğretmeni" },
      { label: "Kapsam", value: "6 modül · 5 araç · 25+ egzersiz türü" },
      { label: "Deneme", value: "14 gün · tuzaksız" },
      { label: "Fiyat", value: "800₺ · tek seferlik" },
    ],
    modules: {
      eyebrow: "İçindekiler",
      count: "06 Modül",
      lead: "Piyanomini, normalde ayrı ayrı aranan çalışma alanlarını tek yerde toplar. Ritim, teori, işitme ve vokalin yanında; kurallı SATB armonisi, tür kontrpuanı ve kendiliğinden üretilen melodik dikte gibi App Store'da doğrudan karşılığı zor bulunan modüller içerir.",
      items: [
        { code: "RİT", title: "Ritim", desc: "Notada gördüğünüz ritmi doğru zamanda çalın; ritmik sight-reading becerinizi ve zamanlama duygunuzu geliştirin.", meta: "Ritim oyunu" },
        { code: "TEO", title: "Teori", desc: "Tuş bulma, nota okuma, ton bulma ve kurma, dizi tanıma, aralık tanıma ve kurma, akor tanıma ve akor dereceleri.", meta: "9 egzersiz" },
        { code: "İŞT", title: "İşitme", desc: "Ritim tekrarı, ezgi yönü, nota duyma, aralık, akor ve derece duyma, dizi duyma ve melodik dikte.", meta: "8 egzersiz" },
        { code: "VOK", title: "Vokal", desc: "Dizi, arpej ve aralıkları sesinizle söyleyin; entonasyonunuz gerçek zamanlı izlenir.", meta: "3 egzersiz" },
        { code: "ARM", title: "Armoni", desc: "Kurallarına uygun SATB dört ses armonizasyonu; alıştırmalar sınırsızca üretilir.", meta: "SATB · 4 ses" },
        { code: "KAR", title: "Kontrpuan", desc: "Birinciden beşinci türe kadar karşı ezgi çalışın; cantus firmus kendiliğinden üretilir.", meta: "5 tür" },
      ],
    },
    tools: {
      eyebrow: "Araçlar",
      count: "05 Araç",
      items: [
        { code: "TUN", title: "Tuner", desc: "Kromatik tuner; strobe, helix ve grafik görünümleriyle perdeyi hassas izleyin.", meta: "Strobe · Helix · Grafik" },
        { code: "MET", title: "Metronom", desc: "Tiklerini nota değerleriyle programlayın; noktalı notalar, trioleler ve konuşan sayım kullanın.", meta: "Programlanabilir tikler" },
        { code: "ZAM", title: "Zamanlayıcı", desc: "Serbest ya da geri sayımlı çalışın; günlük hedefinizi ve oturum sürenizi takip edin.", meta: "Hedef · Geri sayım" },
        { code: "HAT", title: "Hatırlatıcı", desc: "Seçtiğiniz gün ve saatte çalışma bildirimi alın; istediğiniz zaman değiştirin veya kapatın.", meta: "Gün · Saat" },
        { code: "KAY", title: "Çalışma Kaydı", desc: "Egzersiz oturumlarınızı skor, doğruluk ve süreyle geriye dönük izleyin.", meta: "Skor · Süre" },
      ],
    },
    screens: { eyebrow: "Ekranlar", heading: "Her egzersiz, gerçek nota yazımıyla." },
    principles: {
      eyebrow: "İlkeler",
      note: "Dürüst yazılım",
      heading: "Önce deneyin, sonra karar verin.",
      intro:
        "Piyanomini'yi satın almadan önce tam haliyle kullanabilin istedik. Deneme süresinde özellik kısıtlaması yoktur; süre bittiğinde siz satın almadıkça ücret alınmaz.",
      items: [
        { title: "Tam deneme, kart tuzağı yok", desc: "14 gün boyunca tüm özellikler açıktır. Süre sonunda siz açıkça satın almadıkça hiçbir ücret alınmaz." },
        { title: "Abonelik yok", desc: "Tek seferlik satın alma vardır. Aylık ya da yıllık yenileme yoktur." },
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
      tagline: "Müzik eğitimi · iOS",
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
        updated: "Son güncelleme: 28 Mayıs 2026",
        lead: "Piyanomini'yi kullanarak aşağıdaki şartları kabul etmiş olursunuz.",
        sections: [
          { h: "Lisans", p: "Piyanomini'yi kendi cihazlarınızda, bireysel çalışma ve ders bağlamında kullanabilirsiniz. Satın alma, App Store hesabınız üzerinden size kişisel ve devredilemez bir kullanım hakkı verir. Uygulamayı kopyalayamaz, dağıtamaz, yeniden satamaz veya tersine mühendislik yapamazsınız." },
          { h: "Ücretsiz deneme", p: "Uygulama ilk kullanımdan itibaren 14 gün boyunca tam sürümüyle ücretsiz denenebilir. Deneme süresinde uygulama içinden ödeme başlatılmaz, kart istenmez ve süre sonunda otomatik ücret alınmaz. Süre bittiğinde satın almazsanız erişim kısıtlanır; uygulamayı silip yeniden yüklemek denemeyi sıfırlamayabilir. Abonelik yoktur." },
          { h: "Satın alma ve geri yükleme", p: "Tek seferlik satın alma, uygulamanın tüm özelliklerine kalıcı erişim sağlar ve aynı Apple hesabıyla desteklenen cihazlarda geri yüklenebilir. Yeni özellikler ve güncellemeler dahil edilebilir; ancak uygulamanın kapsamı, teknik gereklilikler veya platform koşulları zaman içinde değişebilir." },
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
      title: "Piyanomini: A musician's Swiss army knife",
      description:
        "Rhythm, theory, ear training, vocal, harmony and counterpoint. Ear training and theory in one app. No account, no data.",
    },
    edition: "Music Education · iOS",
    nav: { download: "App Store" },
    hero: {
      title: "A musician's Swiss army knife.",
      intro:
        "Theory, ear training, rhythm, vocal practice, harmony and counterpoint in one app. Piyanomini brings auto-generated exercises, real notation, a tuner, metronome and practice log into one focused practice system.",
      cta: "Download on the App Store",
      note: "for iOS · 14-day full trial · no surprise charge",
    },
    spec: [
      { label: "Designed by", value: "A music teacher" },
      { label: "Scope", value: "6 modules · 5 tools · 25+ exercise types" },
      { label: "Trial", value: "14 days · no gimmicks" },
      { label: "Price", value: "$25 · one-time" },
    ],
    modules: {
      eyebrow: "Contents",
      count: "06 Modules",
      lead: "Piyanomini brings together study areas musicians usually look for separately. Alongside rhythm, theory, ear training and vocal practice, it includes modules that are hard to find direct equivalents for on the App Store: rule-checked SATB harmony, species counterpoint and auto-generated melodic dictation.",
      items: [
        { code: "RHY", title: "Rhythm", desc: "Play the rhythm you see with the right timing to build rhythmic sight-reading and a steadier sense of time.", meta: "Rhythm game" },
        { code: "THE", title: "Theory", desc: "Key finder, note reading, key identification and construction, scale recognition, interval recognition and construction, chord recognition and chord degrees.", meta: "9 exercises" },
        { code: "EAR", title: "Ear", desc: "Rhythm repeat, pitch direction, perfect pitch, interval hearing, chord hearing, chord degrees, scale hearing and melodic dictation.", meta: "8 exercises" },
        { code: "VOC", title: "Vocal", desc: "Sing scales, arpeggios and intervals while your intonation is tracked in real time.", meta: "3 exercises" },
        { code: "HAR", title: "Harmony", desc: "Rule-checked SATB four-part harmonization; exercises are generated endlessly.", meta: "SATB · 4 voices" },
        { code: "CTP", title: "Counterpoint", desc: "Practice first through fifth species counterpoint; the cantus firmus is auto-generated.", meta: "5 species" },
      ],
    },
    tools: {
      eyebrow: "Tools",
      count: "05 Tools",
      items: [
        { code: "TUN", title: "Tuner", desc: "Chromatic tuner with strobe, helix and graph views for precise pitch tracking.", meta: "Strobe · Helix · Graph" },
        { code: "MET", title: "Metronome", desc: "Program clicks with note values; use dotted notes, triplets and spoken beat counting.", meta: "Programmable clicks" },
        { code: "TMR", title: "Timer", desc: "Practice freely or with a countdown; track your daily goal and session time.", meta: "Goal · Countdown" },
        { code: "RMD", title: "Reminders", desc: "Get practice notifications on the days and times you choose; change or turn them off anytime.", meta: "Day · Time" },
        { code: "LOG", title: "Practice Log", desc: "Review exercise sessions by score, accuracy and time.", meta: "Score · Time" },
      ],
    },
    screens: { eyebrow: "Screens", heading: "Every exercise in real music notation." },
    principles: {
      eyebrow: "Principles",
      note: "Honest software",
      heading: "Try first, then decide.",
      intro:
        "We wanted you to use Piyanomini in full before paying. The trial is not a cut-down demo; when it ends, nothing is charged unless you choose to buy.",
      items: [
        { title: "Full trial, no surprise charge", desc: "All features are available for 14 days. When the trial ends, nothing is charged unless you explicitly buy." },
        { title: "No subscription", desc: "Piyanomini is a one-time purchase. No monthly or yearly renewals." },
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
      tagline: "Music education · iOS",
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
        updated: "Last updated: May 28, 2026",
        lead: "By using Piyanomini, you agree to the following terms.",
        sections: [
          { h: "License", p: "You may use Piyanomini on your own devices for individual practice and in teaching contexts. A purchase gives you a personal, non-transferable right to use the app through your App Store account. You may not copy, distribute, resell or reverse-engineer the app." },
          { h: "Free trial", p: "The app can be tried in full for 14 days from first use. During the trial, no in-app payment is started, no card is requested and no automatic charge is made when the trial ends. After it ends, access is restricted unless you buy. Deleting and reinstalling the app may not reset the trial. There is no subscription." },
          { h: "Purchase and restoration", p: "A one-time purchase gives permanent access to all app features and can be restored on supported devices using the same Apple account. New features and updates may be included, but the app's scope, technical requirements or platform conditions may change over time." },
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
