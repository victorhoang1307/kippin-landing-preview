/* ─── Kippin Landing V13 — Client Interactivity & Bilingual Dictionary (VI / EN) ─── */

(() => {
  const I18N = {
    vi: {
      pageTitle: 'Kippin — Không gian xem an toàn cho bé, do ba mẹ tự tay chọn',
      header: {
        homeAria: 'Trang chủ Kippin',
        navAria: 'Điều hướng chính',
        mobileNavAria: 'Menu di động',
        menuAria: 'Mở menu điều hướng',
        cta: 'Đăng ký / Đăng nhập',
      },
      nav: {
        intro: 'Giới thiệu',
        features: 'Vì sao chọn Kippin',
        inside: 'Bên trong ứng dụng',
        compare: 'So sánh',
        faq: 'Hỏi đáp',
        tvGuide: 'Cài đặt Smart TV',
      },
      hero: {
        title: 'Không gian xem an toàn cho bé, do ba mẹ tự tay chọn',
        subtitle:
          'Thêm kênh và playlist con yêu thích từ YouTube hoặc tự tải video của gia đình lên. Không thuật toán tự trôi, không quảng cáo, không YouTube Shorts.',
        primaryCta: 'Đăng ký / Đăng nhập',
        secondaryCta: 'Cài đặt trên Smart TV',
        imgAlt: 'Nhóm bạn nhỏ Boro, Lumi, Kip và Mori vui chơi trên đồi cỏ xanh dưới bầu trời trong trẻo',
      },
      video: {
        title: 'An tâm trao điều khiển TV cho con mỗi ngày',
        body:
          'Thay vì nơm nớp lo thuật toán đẩy con sang những clip nhảm nhí hay quảng cáo ồn ào, ba mẹ chỉ cần chọn sẵn các kênh hoạt hình, kể chuyện và khám phá lành mạnh một lần duy nhất.',
        linkLabel: 'Xem cách Kippin hoạt động trong 1 phút',
        playAria: 'Mở trình xem thử cách Kippin hoạt động',
        imgAlt: 'Em bé ngồi trên thảm phòng khách nắng ấm xem phim hoạt hình lành mạnh trên Smart TV',
      },
      features: {
        heading: 'Ba mẹ chọn một lần, con xem lành mạnh mỗi ngày',
        subheading:
          'Mọi tính năng của Kippin đều xoay quanh một lời hứa giản dị: chỉ những gì ba mẹ duyệt mới xuất hiện trên màn hình của con.',
        r1Title: '100% kênh và video do chính ba mẹ chọn',
        r1Body:
          'Dán link kênh hoặc playlist từ YouTube mà con yêu thích, hoặc tự tải những video kỷ niệm của gia đình lên. Không có luồng gợi ý tự động từ người lạ — con chỉ dạo chơi trong khu vườn an toàn ba mẹ đã trồng.',
        r1Alt: 'Hai chị em nằm trên thảm phòng khách vui vẻ xem hoạt hình trên máy tính bảng',
        r2Title: 'Tạm biệt YouTube Shorts và quảng cáo xen ngang',
        r2Body:
          'Kippin tự động gạt bỏ hoàn toàn các video ngắn dưới 60 giây gây xao nhãng, tắt sạch quảng cáo chen ngang và khóa mọi đường link nhảy ra ngoài ứng dụng để giữ trọn sự tập trung tự nhiên của trẻ.',
        r2Alt: 'Nhóm bạn Boro, Lumi, Kip và Mori vui hát giữa những ngôi sao và nốt nhạc',
        r3Title: 'Xem trọn vẹn từng câu chuyện theo đúng thứ tự tập',
        r3Body:
          'Khi con đang say sưa theo dõi một bộ phim hoạt hình dài kỳ hay chuỗi bài học vẽ, Kippin tự động phát tập tiếp theo ngay trong bộ đó — không bao giờ nhảy cóc sang video nhảm nhí của kênh lạ.',
        r3Alt: 'Bé gái ôm thỏ bông ngồi trên ghế sofa sáng nắng xem câu chuyện hoạt hình',
        r4Title: 'Mở lên TV phòng khách chỉ với 6 chữ số',
        r4Body:
          'Hoạt động mượt mà trên Sony, TCL, Xiaomi, Casper và Chromecast with Google TV. Ba mẹ chỉ cần nhập mã 6 ký tự trên điện thoại là kết nối xong — không cần đăng nhập tài khoản Google của người lớn lên TV.',
        r4Link: 'Xem hướng dẫn cài đặt Smart TV →',
        r4Alt: 'Màn hình ghép nối 6 ký tự trên Kippin Smart TV kết hợp danh sách kênh Whitelist trên điện thoại ba mẹ',
      },
      inside: {
        heading: 'Bên trong ứng dụng Kippin',
        subheading:
          'Giao diện trong trẻo, không nút bấm rối mắt cho bé — quản lý kênh gọn nhẹ cho ba mẹ trên cả Web, Tablet và Smart TV.',
        galleryAria: 'Hình ảnh giao diện bên trong ứng dụng Kippin',
      },
      compare: {
        heading: 'Kippin khác gì YouTube Kids & YouTube thường?',
        subheading:
          'Thay vì thả con vào biển hàng triệu video rồi cố lọc cái xấu (Blacklist), Kippin chỉ mở ra đúng những kênh ba mẹ đã gật đầu (Whitelist).',
        tableAria: 'Bảng so sánh Kippin, YouTube Kids và YouTube',
        colFeature: 'Tiêu chí',
        colYtKids: 'YouTube Kids',
        colYt: 'YouTube thường',
        r1Label: 'Nguồn video cho bé',
        r1Kippin: 'Ba mẹ thêm kênh/playlist YouTube hoặc tự tải lên',
        r1YtKids: 'Thuật toán tự lọc (Blacklist)',
        r1Yt: 'Thuật toán tự do đẩy xu hướng',
        r2Label: 'Video ngắn (Shorts ≤ 60s)',
        r2Kippin: 'Chặn cứng 100%',
        r2YtKids: 'Vẫn xuất hiện Shorts',
        r2Yt: 'Lướt vô tận dễ gây nghiện',
        r3Label: 'Quảng cáo & Link ngoài',
        r3Kippin: 'Không quảng cáo, khóa sạch link ngoài',
        r3YtKids: 'Có quảng cáo xen kẽ',
        r3Yt: 'Nhiều quảng cáo & bình luận mở',
        r4Label: 'Xem theo Series của kênh',
        r4Kippin: 'Tự chuyển tập tiếp theo trong cùng bộ',
        r4YtKids: 'Gợi ý trộn lẫn sang kênh khác',
        r4Yt: 'Tự nhảy sang video ngẫu nhiên',
        r5Label: 'Kết nối Smart TV',
        r5Kippin: 'Nhập mã 6 số, không cần login Google',
        r5YtKids: 'Phải đăng nhập tài khoản Google',
        r5Yt: 'Dùng chung tài khoản người lớn',
      },
      safety: {
        heading: '100% tập trung vào sự bình yên của trẻ nhỏ',
        subheading:
          'Không quảng cáo ẩn, không bán dữ liệu hành vi, không thuật toán câu kéo thời gian xem của con.',
        s1Big: '100%',
        s1Label: 'Ba mẹ tự duyệt',
        s2Big: '0%',
        s2Label: 'Shorts ≤ 60s',
        s3Big: '0%',
        s3Label: 'Quảng cáo',
        s4Big: '6 số',
        s4Label: 'Ghép nối TV',
      },
      faq: {
        heading: 'Câu hỏi thường gặp của ba mẹ',
        q1: 'Ba mẹ thêm video cho con bằng cách nào?',
        a1:
          'Trong Góc Ba Mẹ, bạn chỉ cần dán đường dẫn kênh hoặc playlist từ YouTube (ví dụ: kênh kể chuyện, tiếng Anh, học vẽ, khám phá khoa học) hoặc tự tải video riêng của gia đình lên. Ngay lập tức, video sẽ xuất hiện gọn gàng trên kệ phim của bé.',
        q2: 'Con có thể tự tìm kiếm sang kênh lạ ngoài danh sách không?',
        a2:
          'Hoàn toàn không. Giao diện của bé không có ô tìm kiếm mở ra ngoài Internet và không hiển thị video gợi ý từ các kênh chưa được ba mẹ thêm vào Whitelist.',
        q3: 'Làm sao để mở Kippin trên TV phòng khách?',
        a3:
          'Kippin có ứng dụng dành riêng cho Android TV và Google TV (Sony, TCL, Xiaomi, Casper, Chromecast with Google TV). Khi mở ứng dụng trên TV, màn hình hiện mã 6 ký tự — ba mẹ nhập mã này trên điện thoại là kết nối xong, không cần gõ mật khẩu Google lên TV.',
        q4: 'Nhà có hai bé ở độ tuổi khác nhau thì dùng chung được không?',
        a4:
          'Được ngay trong cùng một tài khoản gia đình. Ba mẹ có thể tạo hồ sơ riêng với nhân vật đại diện cho từng bé và gán danh sách kênh phù hợp đúng độ tuổi của mỗi con.',
        q5: 'Vì sao Kippin chặn toàn bộ video ngắn dưới 60 giây (Shorts)?',
        a5:
          'Nhịp cắt cảnh dồn dập dưới 60 giây khiến não trẻ bị kích thích liên tục, dễ cáu gắt khi tắt màn hình và giảm sự kiên nhẫn với sách vở. Kippin tự động lọc bỏ mọi clip ngắn ≤ 60 giây để con chỉ xem các câu chuyện và bài học có đầu có cuối.',
      },
      closing: {
        heading: 'Bắt đầu tạo góc xem lành mạnh cho con ngay hôm nay',
        subtitle:
          'Tạo hồ sơ riêng cho bé, duyệt những kênh con yêu thích và kết nối lên Smart TV phòng khách chỉ trong 2 phút.',
        primaryCta: 'Đăng ký / Đăng nhập',
        secondaryCta: 'Hướng dẫn cài Smart TV',
      },
      footer: {
        tagline: 'Không gian xem an toàn cho bé, do ba mẹ tự tay chọn lọc mỗi ngày.',
        colExplore: 'Khám phá',
        colFamily: 'Dành cho gia đình',
        signIn: 'Đăng ký / Đăng nhập',
        tvSetup: 'Cài đặt Android TV',
        tvStandby: 'Màn hình chờ TV',
        legal: 'Điều khoản & Bảo mật',
        rights: 'Bảo lưu mọi quyền.',
        cc:
          'Hình minh họa phim mẫu: Wing It!, Spring, Caminandes: Llamigos, Cosmos Laundromat, Sprite Fright & HERO © Blender Foundation (CC-BY 4.0).',
      },
      tour: {
        title: '3 bước tạo góc xem an toàn trên Kippin',
        closeAria: 'Đóng cửa sổ',
        tab1: '1. Ba mẹ chọn kênh',
        tab2: '2. Con xem liền mạch',
        tab3: '3. Mở lên Smart TV',
        cap1:
          'Thêm kênh hoặc playlist từ YouTube, hoặc tự tải video của gia đình lên. Tự động lọc bỏ 100% Shorts ≤ 60 giây và quảng cáo.',
        cap2:
          'Trình phát toàn màn hình không nút rối mắt, tự động chuyển sang tập tiếp theo trong cùng bộ phim mà ba mẹ đã duyệt.',
        cap3:
          'Nhập mã 6 ký tự lên Sony, TCL, Xiaomi hoặc Google TV ở phòng khách là bé xem được ngay — không cần đăng nhập Google.',
        cta: 'Bắt đầu tạo hồ sơ cho bé',
      },
      toast: {
        prefix: 'Bản xem trước giao diện: Nút này sẽ chuyển tới ',
        suffix: ' trên kippin.app',
      },
    },

    en: {
      pageTitle: 'Kippin — A joyful, safe viewing space handpicked by parents',
      header: {
        homeAria: 'Kippin Home',
        navAria: 'Main navigation',
        mobileNavAria: 'Mobile navigation',
        menuAria: 'Open navigation menu',
        cta: 'Sign In / Get Started',
      },
      nav: {
        intro: 'Overview',
        features: 'Why Kippin',
        inside: 'Inside the App',
        compare: 'Comparison',
        faq: 'FAQ',
        tvGuide: 'Smart TV Setup',
      },
      hero: {
        title: 'A joyful, safe viewing space handpicked by parents',
        subtitle:
          'Add the YouTube channels and playlists you trust, or upload your own family videos. No algorithmic rabbit holes, no ads, and zero YouTube Shorts.',
        primaryCta: 'Sign In / Get Started',
        secondaryCta: 'Smart TV Setup',
        imgAlt: 'Kippin friends Boro, Lumi, Kip, and Mori playing happily on a green meadow hill under a clear sky',
      },
      video: {
        title: 'Hand over the TV remote with real peace of mind',
        body:
          'Stop worrying about autoplay drifting into noisy ads or mindless clips. Pick wholesome cartoons, stories, and science channels once—and let your kids explore safely every day.',
        linkLabel: 'See how Kippin works in 1 minute',
        playAria: 'Open interactive Kippin walkthrough',
        imgAlt: 'Happy child sitting on a sunlit living room rug watching wholesome animation on a Smart TV',
      },
      features: {
        heading: 'Pick once as a parent, let kids watch happily every day',
        subheading:
          'Everything in Kippin is built around one simple promise: only what you approve ever appears on your child’s screen.',
        r1Title: '100% channels and videos chosen by you',
        r1Body:
          'Paste your child’s favorite YouTube channels or playlists, or upload family videos of your own. With zero algorithmic recommendations from strangers, kids only explore the safe garden you planted.',
        r1Alt: 'Two siblings lying happily on a sunlit living room rug watching animated stories on a tablet',
        r2Title: 'Goodbye YouTube Shorts and noisy ad breaks',
        r2Body:
          'Kippin automatically filters out rapid-fire clips under 60 seconds, removes every ad break, and locks external links so kids stay calm and focused.',
        r2Alt: 'Kippin friends Boro, Lumi, Kip, and Mori singing among pastel stars and musical notes',
        r3Title: 'Follow whole stories from episode to episode',
        r3Body:
          'When your child loves an animated series or drawing lesson, Kippin automatically plays the next episode in that exact series—never jumping sideways into random viral clips.',
        r3Alt: 'Young girl hugging a plush bunny on a sunlit linen sofa while watching a story',
        r4Title: 'Connect your living-room Smart TV with a 6-digit code',
        r4Body:
          'Works smoothly on Sony, TCL, Xiaomi, Casper, and Chromecast with Google TV. Enter a 6-character code from your phone and start watching—no adult Google login required on the family TV.',
        r4Link: 'Read the Smart TV setup guide →',
        r4Alt: 'Kippin Smart TV 6-character pairing screen alongside the Parent Whitelist mobile view',
      },
      inside: {
        heading: 'Inside the Kippin app',
        subheading:
          'A calm, clutter-free player for kids—paired with effortless channel curation for parents across Web, Tablet, and Smart TV.',
        galleryAria: 'Screenshots inside the Kippin app',
      },
      compare: {
        heading: 'How is Kippin different from YouTube Kids & YouTube?',
        subheading:
          'Instead of dropping kids into millions of clips and hoping filters catch the bad ones (Blacklist), Kippin only opens the exact channels you approve (Whitelist).',
        tableAria: 'Comparison of Kippin, YouTube Kids, and standard YouTube',
        colFeature: 'Feature',
        colYtKids: 'YouTube Kids',
        colYt: 'Standard YouTube',
        r1Label: 'Video source for kids',
        r1Kippin: 'Parents add YouTube channels/playlists or upload',
        r1YtKids: 'Automated filter (Blacklist)',
        r1Yt: 'Unrestricted trending algorithm',
        r2Label: 'Short clips (Shorts ≤ 60s)',
        r2Kippin: 'Hard-blocked 100%',
        r2YtKids: 'Shorts still appear',
        r2Yt: 'Endless addictive Shorts feed',
        r3Label: 'Ads & external links',
        r3Kippin: 'Zero ads, external links locked',
        r3YtKids: 'Contains video ad breaks',
        r3Yt: 'Heavy ads & open comments',
        r4Label: 'Series episode playback',
        r4Kippin: 'Auto-plays next episode in series',
        r4YtKids: 'Mixes suggestions from other channels',
        r4Yt: 'Jumps to random viral videos',
        r5Label: 'Smart TV connection',
        r5Kippin: '6-character code, no Google login',
        r5YtKids: 'Requires Google account sign-in',
        r5Yt: 'Shares adult Google account',
      },
      safety: {
        heading: '100% focused on calm, healthy childhoods',
        subheading:
          'No hidden ads, no behavioral tracking, and zero engagement-maximizing traps.',
        s1Big: '100%',
        s1Label: 'Parent Approved',
        s2Big: '0%',
        s2Label: 'Shorts ≤ 60s',
        s3Big: '0%',
        s3Label: 'Video Ads',
        s4Big: '6-Code',
        s4Label: 'Smart TV Pair',
      },
      faq: {
        heading: 'Frequently asked questions',
        q1: 'How do parents add videos for their kids?',
        a1:
          'Inside the Parent Dashboard, simply paste any YouTube channel or playlist link (such as storytelling, English phonics, drawing lessons, or nature documentaries) or upload your own family videos. They appear neatly on your child’s shelf right away.',
        q2: 'Can kids search for unapproved channels on their own?',
        a2:
          'Never. The kid view has no open web search bar and never displays suggested videos from channels outside your family Whitelist.',
        q3: 'How do we install Kippin on our living-room TV?',
        a3:
          'Kippin runs natively on Android TV and Google TV (Sony, TCL, Xiaomi, Casper, Chromecast with Google TV). Open the TV app to see a 6-character code, enter it on your phone, and your approved channels sync instantly without typing a Google password on the TV.',
        q4: 'Can siblings of different ages have separate profiles?',
        a4:
          'Yes—within a single family account, you can create individual profiles with playful avatars for each child and assign age-appropriate channels to each profile.',
        q5: 'Why does Kippin block all videos under 60 seconds (Shorts)?',
        a5:
          'Rapid-fire clips under 60 seconds overstimulate young brains and make screen transitions harder. Filtering out ≤ 60s clips keeps viewing calm and centered on complete stories and lessons.',
      },
      closing: {
        heading: 'Start building a joyful, safe viewing space today',
        subtitle:
          'Create profiles for your kids, approve the channels you love, and pair your living-room Smart TV in under 2 minutes.',
        primaryCta: 'Sign In / Get Started',
        secondaryCta: 'Smart TV Setup Guide',
      },
      footer: {
        tagline: 'Safe, joyful videos for kids—handpicked by parents every day.',
        colExplore: 'Explore',
        colFamily: 'For Families',
        signIn: 'Sign In / Get Started',
        tvSetup: 'Android TV Setup',
        tvStandby: 'TV Standby Screen',
        legal: 'Terms & Privacy',
        rights: 'All rights reserved.',
        cc:
          'Sample open-movie artwork: Wing It!, Spring, Caminandes: Llamigos, Cosmos Laundromat, Sprite Fright & HERO © Blender Foundation (CC-BY 4.0).',
      },
      tour: {
        title: 'How Kippin works in 3 simple steps',
        closeAria: 'Close dialog',
        tab1: '1. Approve channels',
        tab2: '2. Calm series play',
        tab3: '3. Pair Smart TV',
        cap1:
          'Add trusted YouTube channels or playlists, or upload family videos. Kippin automatically strips out 100% of Shorts ≤ 60s and ads.',
        cap2:
          'A clean full-screen kid player automatically advances to the next episode in the same approved series—zero distracting sidebars.',
        cap3:
          'Enter a 6-character code on Sony, TCL, Xiaomi, or Google TV to watch together in the living room without signing into Google.',
        cta: 'Create your child’s profile',
      },
      toast: {
        prefix: 'Design Preview: This action opens ',
        suffix: ' on kippin.app',
      },
    },
  };

  const TOUR_SLIDES = [
    { img: 'assets/app-screen-6.webp', capKey: 'tour.cap1' },
    { img: 'assets/app-screen-2.webp', capKey: 'tour.cap2' },
    { img: 'assets/screen-tv-whitelist.webp', capKey: 'tour.cap3' },
  ];

  let currentLang = 'vi';
  let currentTourStep = 0;
  let toastTimer = null;

  function resolveKey(dict, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), dict);
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'vi';
    const dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n'));
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-aria'));
      if (val) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-alt'));
      if (val) el.setAttribute('alt', val);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    renderTourStep(currentTourStep);

    try {
      localStorage.setItem('kippin_preview_lang', currentLang);
    } catch (_) {
      /* ignore storage errors in restricted contexts */
    }
  }

  function renderTourStep(stepIdx) {
    currentTourStep = stepIdx;
    const slide = TOUR_SLIDES[stepIdx] || TOUR_SLIDES[0];
    const imgEl = document.getElementById('tour-preview-img');
    const capEl = document.getElementById('tour-preview-caption');
    if (imgEl) imgEl.src = slide.img;
    if (capEl) {
      const text = resolveKey(I18N[currentLang], slide.capKey);
      if (text) capEl.textContent = text;
    }

    document.querySelectorAll('.tour-tab').forEach((btn, idx) => {
      const active = idx === stepIdx;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  // Initial locale detection (?lang=en|vi -> localStorage -> default 'vi')
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  let initialLang = 'vi';
  if (queryLang === 'en' || queryLang === 'vi') {
    initialLang = queryLang;
  } else {
    try {
      const saved = localStorage.getItem('kippin_preview_lang');
      if (saved === 'en' || saved === 'vi') initialLang = saved;
    } catch (_) {
      /* default vi */
    }
  }
  applyLanguage(initialLang);

  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-lang');
      applyLanguage(next);
      const url = new URL(window.location.href);
      if (next === 'en') {
        url.searchParams.set('lang', 'en');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.toString());
    });
  });

  // Mobile navigation drawer
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !drawer.hidden;
      drawer.hidden = isOpen;
      menuBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Native Light-Dismiss Tour Dialog + Safari Fallback (Modern Web Guidance: light-dismiss-a-dialog)
  const tourDialog = document.getElementById('tour-dialog');
  if (tourDialog) {
    document.querySelectorAll('[data-open-tour]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        renderTourStep(0);
        tourDialog.showModal();
      });
    });

    document.querySelectorAll('.tour-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const idx = Number(tab.getAttribute('data-tour-step') || '0');
        renderTourStep(idx);
      });
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      tourDialog.addEventListener('click', (event) => {
        if (event.target !== tourDialog) return;
        const rect = tourDialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        tourDialog.close();
      });
    }
  }

  // Static Preview Host App-Route Interceptor (Prevents 404 on GitHub Pages / file://)
  const isPreviewHost =
    window.location.protocol === 'file:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.endsWith('.github.io');

  const toastEl = document.getElementById('route-toast');
  if (isPreviewHost && toastEl) {
    document.querySelectorAll('[data-route]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const route = link.getAttribute('data-route') || '/login';
        if (tourDialog && tourDialog.open) tourDialog.close();
        const t = I18N[currentLang].toast;
        toastEl.textContent = `${t.prefix}${route}${t.suffix}`;
        toastEl.hidden = false;
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastEl.hidden = true;
        }, 3200);
      });
    });
  }
})();
