(() => {
  'use strict';

  const I18N = {
    vi: {
      pageTitle: 'Kippin — Không gian xem an toàn cho bé do ba mẹ chọn lọc',
      header: {
        homeAria: 'Trang chủ Kippin',
        navAria: 'Điều hướng chính',
        openMenuAria: 'Mở menu điều hướng',
        mobileMenuAria: 'Menu thu gọn',
        signInCta: 'Đăng nhập',
      },
      nav: {
        manifesto: 'Triết lý',
        features: 'Cơ chế bảo vệ',
        comparison: 'Đối chiếu',
        tvSetup: 'Cài đặt TV',
      },
      hero: {
        overline: '100% Whitelist · Không thuật toán',
        heading: 'Không gian xem tĩnh lặng, nơi ba mẹ chọn từng khung hình cho con.',
        lead: 'Thêm kênh và danh sách phát tin cậy từ YouTube hoặc tải lên video gia đình tự quay. Không thuật toán dẫn dắt sang nội dung rác, không quảng cáo xen ngang, không vòng xoáy YouTube Shorts.',
        primaryCta: 'Vào bảng điều khiển',
        secondaryCta: 'Hướng dẫn cài Smart TV',
        meta1: '100% kênh do ba mẹ duyệt',
        meta2: 'Chặn cứng video ngắn ≤ 60 giây',
        meta3: 'Ghép nối Android TV bằng mã 6 số',
      },
      stage: {
        tabHome: 'Màn hình của bé',
        tabPair: 'Ghép nối TV 6 số',
        profileMinh: 'Bé Minh · 5 tuổi',
        profileAn: 'Bé An · 8 tuổi',
        badgeMinh: 'Bé Minh · Đã khóa Whitelist',
        badgeAn: 'Bé An · Đã khóa Whitelist',
        chipAll: 'Tất cả',
        chipFilms: 'Phim hoạt hình mở',
        chipNature: 'Khám phá & Mỹ thuật',
        shelfTitle: 'Đang xem dở & Tập tiếp theo',
        shelfFilms: 'Phim hoạt hình mở đã duyệt',
        shelfNature: 'Khám phá thiên nhiên & Mỹ thuật',
        safePill: 'Chỉ kênh ba mẹ duyệt',
        badgeWatching68: '▶ ĐANG XEM • 68%',
        badgeWatching42: '▶ ĐANG XEM • 42%',
        badgeNextEp: '⏭ TẬP TIẾP THEO',
        c1Title: 'Wing It! — S01E02: Cất cánh',
        c1Sub: 'Blender Studio · Hoạt hình không lời',
        c2Title: 'Spring — Mùa xuân trên thảo nguyên',
        c2Sub: 'Blender Studio · Kể chuyện thiên nhiên',
        c3Title: 'Caminandes 3: Llamigos',
        c3Sub: 'Blender Studio · Vui nhộn vùng Andes',
        c4Title: 'Cosmos Laundromat — Du hành',
        c4Sub: 'Blender Studio · Khoa học viễn tưởng',
        c5Title: 'HERO — Phác thảo hoạt họa 2D',
        c5Sub: 'Blender Studio · Mỹ thuật & Sáng tạo',
        c6Title: 'Sprite Fright — Khu rừng nấm',
        c6Sub: 'Blender Studio · Phiêu lưu đồng đội',
        stripFocusPrefix: 'Đang chọn:',
        stripAutoNext: 'Tự chuyển tập cùng kênh',
        pairInst: 'Mở kippin.app trên điện thoại của ba mẹ → mục Ghép nối TV và nhập mã 6 ký tự dưới đây:',
        pairExpires: 'Mã hết hạn sau',
        pairWaiting: 'Đang chờ kết nối...',
        pairNewCode: '↻ Tạo mã 6 số mới',
        captionLeft: 'Giao diện Android TV thực tế · Bấm thẻ hoặc đổi hồ sơ để thử',
        captionRight: '© Blender Foundation (CC-BY 4.0)',
      },
      manifesto: {
        index: '01 / Triết lý an toàn',
        heading: 'An tâm trao điều khiển TV cho con mỗi ngày.',
        col1Tag: 'Cơ chế Blacklist phổ biến',
        col1Title: 'Chặn đuổi theo thuật toán',
        col1Body: 'Phần lớn ứng dụng video trẻ em hiện nay vận hành bằng thuật toán tự động — thả trẻ vào biển hàng triệu video tự do rồi mới cố gắng lọc bỏ nội dung xấu. Chỉ một cú bấm nhầm trên điều khiển cũng đủ kéo con vào vòng xoáy Shorts vô tận.',
        col2Tag: 'Cơ chế 100% Whitelist của Kippin',
        col2Title: 'Đóng cổng trước, mở từng kênh',
        col2Body: 'Kippin đảo ngược hoàn toàn cách tiếp cận đó: màn hình của con mặc định tĩnh lặng. Chỉ những kênh giáo dục, phim hoạt hình và câu chuyện chính thống mà ba mẹ tận tay duyệt mới được phép xuất hiện — dù trên Web, Tablet hay Smart TV phòng khách.',
      },
      bento: {
        index: '02 / Cơ chế bảo vệ cốt lõi',
        heading: 'Ba mẹ chọn một lần, con xem lành mạnh mỗi ngày.',
        lead: 'Mỗi tính năng được thiết kế như một chốt chặn vật lý rõ ràng — thay thế hoàn toàn luồng đề xuất tự động bằng quyền quyết định trực tiếp của phụ huynh.',
        c1Num: '01 · BẢNG DUYỆT WHITELIST',
        c1Title: 'Thêm kênh YouTube tin cậy & video gia đình tự quay',
        c1Desc: 'Dán liên kết kênh hoặc playlist giáo dục từ YouTube, hoặc tải trực tiếp tệp video kỷ niệm gia đình lên không gian riêng của từng bé.',
        c1ArtifactLabel: 'Nguồn phát đang mở cho Bé Minh (bấm gạt thử)',
        s1Meta: 'Playlist YouTube · 18 tập hoạt hình mở',
        s2Meta: 'Kênh YouTube giáo dục · 24 bài hát',
        s3Name: 'Kỷ niệm bé tập xe cuối tuần.mp4',
        s3Meta: 'Video gia đình tự tải lên · 4 tệp riêng',
        c2Num: '02 · BỘ LỌC ĐẦU VÀO',
        c2Title: 'Chặn sạch YouTube Shorts & quảng cáo',
        c2Desc: 'Tự động loại bỏ mọi video ngắn ≤ 60 giây ngay khi đồng bộ, tắt sạch quảng cáo và khóa toàn bộ liên kết dẫn ra ngoài ứng dụng.',
        f1Title: 'Wing It! — S01E02: Cất cánh (03:35)',
        f1Status: 'Đã duyệt',
        f2Title: '#shorts Thử thách kẹo nổ 15 giây (00:15)',
        f2Status: 'Chặn ≤ 60s',
        f3Title: 'Quảng cáo xen ngang & Bình luận tự do',
        f3Status: 'Đã khóa',
        c3Num: '03 · MẠCH PHIM LIỀN MẠCH',
        c3Title: 'Tự chuyển tập kế tiếp trong cùng Series',
        c3Desc: 'Phát trọn vẹn từng mùa và tập phim theo đúng thứ tự của kênh đã duyệt — không bao giờ nhảy ngẫu nhiên sang kênh lạ.',
        epDone: 'Đã xem',
        epNow: '▶ Đang phát',
        epNext: 'Tự phát kế tiếp',
        c4Num: '04 · KẾT NỐI PHÒNG KHÁCH',
        c4Title: 'Ghép nối Android TV bằng mã 6 ký tự',
        c4Desc: 'Không cần đăng nhập tài khoản Google của người lớn lên TV. Nhập 6 ký tự hiển thị trên màn hình TV vào điện thoại ba mẹ là xem ngay.',
        c4Link: 'Xem hướng dẫn cài đặt cho Sony, TCL, Xiaomi & Google TV →',
        hPhoneLabel: '1. Điện thoại ba mẹ',
        hPhoneValue: 'kippin.app → Ghép nối',
        hTvLabel: '2. Smart TV phòng khách',
      },
      compare: {
        index: '03 / Đối chiếu minh bạch',
        heading: 'Kippin khác gì YouTube Kids và YouTube thường?',
        tableAria: 'Bảng so sánh Kippin, YouTube Kids và YouTube',
        colCriterion: 'Tiêu chí',
        colYtKids: 'YouTube Kids',
        colYt: 'YouTube thường',
        r1Criterion: 'Nguồn video cho bé',
        r1Kippin: 'Ba mẹ thêm kênh/playlist YouTube hoặc tự tải lên',
        r1YtKids: 'Thuật toán tự lọc (Blacklist)',
        r1Yt: 'Thuật toán tự do đẩy xu hướng',
        r2Criterion: 'Video ngắn (Shorts ≤ 60s)',
        r2Kippin: 'Chặn cứng 100%',
        r2YtKids: 'Vẫn xuất hiện Shorts',
        r2Yt: 'Đẩy liên tục gây nghiện',
        r3Criterion: 'Quảng cáo & Link ngoài',
        r3Kippin: 'Không quảng cáo, khóa link ngoài',
        r3YtKids: 'Có quảng cáo xen kẽ',
        r3Yt: 'Nhiều quảng cáo & bình luận',
        r4Criterion: 'Xem theo Series của kênh',
        r4Kippin: 'Tự chuyển tập tiếp theo cùng kênh',
        r4YtKids: 'Gợi ý trộn lẫn sang kênh khác',
        r4Yt: 'Tự nhảy sang video ngẫu nhiên',
        r5Criterion: 'Kết nối Android TV',
        r5Kippin: 'Nhập mã 6 số, không cần login Google',
        r5YtKids: 'Phải đăng nhập tài khoản Google',
        r5Yt: 'Dùng chung tài khoản người lớn',
      },
      closing: {
        heading: 'Thiết lập không gian xem an toàn cho con chỉ trong 2 phút.',
        sub: 'Tạo hồ sơ riêng cho từng bé, chọn lọc những kênh giáo dục đầu tiên và ghép nối thẳng lên Smart TV phòng khách.',
        primaryCta: 'Đăng nhập / Bắt đầu',
        secondaryCta: 'Hướng dẫn cài Android TV',
      },
      footer: {
        tagline: 'Không gian xem an toàn cho bé do ba mẹ chọn lọc.',
        ccNotice: 'Poster minh họa trên TV trích từ phim hoạt hình mở của Blender Foundation (CC-BY 4.0): Wing It!, Spring, Sprite Fright, Caminandes, Cosmos Laundromat, HERO.',
        signIn: 'Đăng nhập',
        tvSetup: 'Cài đặt Android TV',
        tvStandby: 'Màn hình chờ TV',
        legal: 'Điều khoản & Bản quyền',
      },
      toast: {
        close: 'Đóng',
      },
    },

    en: {
      pageTitle: 'Kippin — A calm, parent-curated viewing space for kids',
      header: {
        homeAria: 'Kippin Home',
        navAria: 'Main navigation',
        openMenuAria: 'Open navigation menu',
        mobileMenuAria: 'Mobile navigation menu',
        signInCta: 'Sign in',
      },
      nav: {
        manifesto: 'Philosophy',
        features: 'Safeguards',
        comparison: 'Comparison',
        tvSetup: 'TV Setup',
      },
      hero: {
        overline: '100% Whitelist · Zero Algorithm',
        heading: 'A calm viewing space where parents choose every frame.',
        lead: 'Add trusted YouTube channels and playlists or upload your own family videos. No recommendation rabbit holes, no ad interruptions, and zero YouTube Shorts.',
        primaryCta: 'Open Parent Dashboard',
        secondaryCta: 'Smart TV Setup Guide',
        meta1: '100% parent-approved channels',
        meta2: 'Hard-blocks clips ≤ 60 seconds',
        meta3: '6-code Android TV pairing',
      },
      stage: {
        tabHome: 'Kid TV Home',
        tabPair: '6-Code TV Pairing',
        profileMinh: 'Minh · Age 5',
        profileAn: 'An · Age 8',
        badgeMinh: 'Minh · Whitelist Locked',
        badgeAn: 'An · Whitelist Locked',
        chipAll: 'All',
        chipFilms: 'Open Short Films',
        chipNature: 'Nature & Art',
        shelfTitle: 'Continue Watching & Up Next',
        shelfFilms: 'Approved Open Short Films',
        shelfNature: 'Nature Stories & Creative Art',
        safePill: 'Parent-approved only',
        badgeWatching68: '▶ WATCHING • 68%',
        badgeWatching42: '▶ WATCHING • 42%',
        badgeNextEp: '⏭ UP NEXT',
        c1Title: 'Wing It! — S01E02: Liftoff',
        c1Sub: 'Blender Studio · Wordless Animation',
        c2Title: 'Spring — Highland Awakening',
        c2Sub: 'Blender Studio · Visual Nature Story',
        c3Title: 'Caminandes 3: Llamigos',
        c3Sub: 'Blender Studio · Patagonia Comedy',
        c4Title: 'Cosmos Laundromat — First Cycle',
        c4Sub: 'Blender Studio · Sci-Fi Short',
        c5Title: 'HERO — 2D Grease Pencil Art',
        c5Sub: 'Blender Studio · Art & Drawing',
        c6Title: 'Sprite Fright — Forest Trek',
        c6Sub: 'Blender Studio · Adventure 8+',
        stripFocusPrefix: 'Selected:',
        stripAutoNext: 'Auto-plays within channel',
        pairInst: 'Open kippin.app on a parent phone → Pair TV and enter the 6-character code below:',
        pairExpires: 'Code expires in',
        pairWaiting: 'Waiting for connection...',
        pairNewCode: '↻ Generate new 6-code',
        captionLeft: 'Actual Kippin Android TV UI · Click cards or switch profiles to test',
        captionRight: '© Blender Foundation (CC-BY 4.0)',
      },
      manifesto: {
        index: '01 / Safety Philosophy',
        heading: 'Hand over the living-room remote with quiet confidence.',
        col1Tag: 'Conventional Blacklist Apps',
        col1Title: 'Chasing behind the algorithm',
        col1Body: 'Most kids video apps rely on automated blacklists — exposing children to millions of unvetted clips first and trying to filter bad content later. One stray tap on a TV remote can pull kids into an endless Shorts loop.',
        col2Tag: 'Kippin’s 100% Parent Whitelist',
        col2Title: 'Closed by default, opened by you',
        col2Body: 'Kippin flips that model completely: your child’s screen starts quiet and empty. Only the exact educational channels, animated stories, and family recordings you approve ever appear — across Web, Tablet, and Android TV.',
      },
      bento: {
        index: '02 / Core Safeguards',
        heading: 'Curate once as a parent, watch calmly every day.',
        lead: 'Every safeguard works as a deterministic boundary — replacing opaque recommendation feeds with explicit parental intent.',
        c1Num: '01 · WHITELIST SWITCHBOARD',
        c1Title: 'Add trusted YouTube sources & private family videos',
        c1Desc: 'Paste educational YouTube channels or playlists, or upload your own family recordings directly to each child’s profile.',
        c1ArtifactLabel: 'Active sources for Minh (click switches to test)',
        s1Meta: 'YouTube Playlist · 18 open animated shorts',
        s2Meta: 'Educational YouTube Channel · 24 songs',
        s3Name: 'Weekend_Bike_Practice_Park.mp4',
        s3Meta: 'Private family upload · 4 personal clips',
        c2Num: '02 · INGESTION FILTER',
        c2Title: 'Zero YouTube Shorts & zero ads',
        c2Desc: 'Automatically strips out short vertical clips ≤ 60 seconds during sync, removes ad breaks, and locks all external outbound links.',
        f1Title: 'Wing It! — S01E02: Liftoff (03:35)',
        f1Status: 'Approved',
        f2Title: '#shorts 15s Neon Candy Challenge (00:15)',
        f2Status: 'Blocked ≤ 60s',
        f3Title: 'Mid-roll Toy Ads & Open Comments',
        f3Status: 'Locked',
        c3Num: '03 · SERIES CONTINUITY',
        c3Title: 'Seamless Series Auto-Next playback',
        c3Desc: 'Plays the next episode in sequence within the same approved series and channel — never jumping to random viral channels.',
        epDone: 'Watched',
        epNow: '▶ Playing',
        epNext: 'Up next automatically',
        c4Num: '04 · LIVING-ROOM PAIRING',
        c4Title: '6-character Android TV pairing',
        c4Desc: 'No adult Google account sign-in required on your television. Enter the 6-character TV code on your phone and start watching immediately.',
        c4Link: 'Read setup guide for Sony, TCL, Xiaomi & Google TV →',
        hPhoneLabel: '1. Parent phone',
        hPhoneValue: 'kippin.app → Pair TV',
        hTvLabel: '2. Living-room Smart TV',
      },
      compare: {
        index: '03 / Transparent Comparison',
        heading: 'How Kippin compares to YouTube Kids & YouTube',
        tableAria: 'Comparison table of Kippin, YouTube Kids, and YouTube',
        colCriterion: 'Criterion',
        colYtKids: 'YouTube Kids',
        colYt: 'Standard YouTube',
        r1Criterion: 'Video source for kids',
        r1Kippin: 'Parents add YouTube channels/playlists or upload',
        r1YtKids: 'Automated filter (Blacklist)',
        r1Yt: 'Unrestricted trending feed',
        r2Criterion: 'Short clips (Shorts ≤ 60s)',
        r2Kippin: 'Hard-blocked 100%',
        r2YtKids: 'Shorts still appear',
        r2Yt: 'Endless addictive Shorts feed',
        r3Criterion: 'Ads & external links',
        r3Kippin: 'Zero ads, external links locked',
        r3YtKids: 'Contains video ads',
        r3Yt: 'Heavy ads & open comments',
        r4Criterion: 'Channel Series playback',
        r4Kippin: 'Auto-plays next episode in channel',
        r4YtKids: 'Mixes suggestions from other channels',
        r4Yt: 'Jumps to random viral videos',
        r5Criterion: 'Android TV connection',
        r5Kippin: '6-character code, no Google login',
        r5YtKids: 'Requires Google account sign-in',
        r5Yt: 'Shares adult Google account',
      },
      closing: {
        heading: 'Set up your child’s calm viewing space in under 2 minutes.',
        sub: 'Create age-tailored kid profiles, approve your first trusted channels, and pair directly with your living-room Smart TV.',
        primaryCta: 'Sign in / Get started',
        secondaryCta: 'Android TV Setup Guide',
      },
      footer: {
        tagline: 'Safe videos for kids, 100% curated by parents.',
        ccNotice: 'TV interface preview posters from Blender Foundation Open Movies (CC-BY 4.0): Wing It!, Spring, Sprite Fright, Caminandes, Cosmos Laundromat, HERO.',
        signIn: 'Sign in',
        tvSetup: 'Android TV Setup',
        tvStandby: 'TV Standby Screen',
        legal: 'Terms & Copyright',
      },
      toast: {
        close: 'Close',
      },
    },
  };

  const state = {
    lang: 'vi',
    tvTab: 'home', // 'home' | 'pair'
    profile: 'minh', // 'minh' | 'an'
    category: 'all', // 'all' | 'films' | 'nature'
    focusedCardId: 'wing-it',
    remainingSeconds: 14 * 60 + 58,
  };

  function resolveKey(dict, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), dict);
  }

  function updateCurationSummary() {
    const countEl = document.getElementById('curation-count');
    if (!countEl) return;
    const rows = document.querySelectorAll('[data-source-row]');
    let activeSources = 0;
    let totalEps = 0;

    rows.forEach((row) => {
      const btn = row.querySelector('.toggle-switch');
      const isChecked = btn && btn.getAttribute('aria-checked') === 'true';
      row.classList.toggle('is-off', !isChecked);
      if (isChecked) {
        activeSources += 1;
        totalEps += Number(row.getAttribute('data-ep-count') || 0);
      }
    });

    if (activeSources === 0) {
      countEl.textContent =
        state.lang === 'en' ? '0 active · Kid screen paused' : '0 nguồn · Màn hình bé đang tạm khóa';
    } else if (state.lang === 'en') {
      countEl.textContent = `${activeSources} ${activeSources === 1 ? 'source' : 'sources'} · ${totalEps} approved videos`;
    } else {
      countEl.textContent = `${activeSources} nguồn · ${totalEps} tập đã duyệt`;
    }
  }

  function syncTvShelf() {
    const dict = I18N[state.lang];
    const badgeAvatar = document.getElementById('tv-badge-avatar');
    const badgeName = document.getElementById('tv-badge-name');
    const shelfLabel = document.getElementById('tv-shelf-label');

    if (badgeAvatar) {
      badgeAvatar.src = state.profile === 'minh' ? 'assets/avatar-kip.webp' : 'assets/avatar-lumi.webp';
    }
    if (badgeName) {
      badgeName.textContent = state.profile === 'minh' ? dict.stage.badgeMinh : dict.stage.badgeAn;
    }
    if (shelfLabel) {
      if (state.category === 'films') shelfLabel.textContent = dict.stage.shelfFilms;
      else if (state.category === 'nature') shelfLabel.textContent = dict.stage.shelfNature;
      else shelfLabel.textContent = dict.stage.shelfTitle;
    }

    const allCards = Array.from(document.querySelectorAll('.tv-video-card'));
    let matchingCards = [];

    if (state.category === 'all') {
      matchingCards = allCards.filter((c) => c.getAttribute('data-profile') === state.profile);
    } else {
      const catCards = allCards.filter((c) => c.getAttribute('data-cat') === state.category);
      // Prioritize active profile cards first
      catCards.sort((a, b) => {
        const aMatch = a.getAttribute('data-profile') === state.profile ? 0 : 1;
        const bMatch = b.getAttribute('data-profile') === state.profile ? 0 : 1;
        return aMatch - bMatch;
      });
      matchingCards = catCards.slice(0, 3);
    }

    const visibleSet = new Set(matchingCards);
    allCards.forEach((card) => {
      const isVisible = visibleSet.has(card);
      card.hidden = !isVisible;
      card.classList.remove('is-third-visible');
    });

    if (matchingCards[2]) {
      matchingCards[2].classList.add('is-third-visible');
    }

    const focusedStillVisible = matchingCards.some(
      (c) => c.getAttribute('data-card-id') === state.focusedCardId
    );
    if (!focusedStillVisible && matchingCards[0]) {
      state.focusedCardId = matchingCards[0].getAttribute('data-card-id');
    }

    allCards.forEach((card) => {
      const isFocused = card.getAttribute('data-card-id') === state.focusedCardId && !card.hidden;
      card.classList.toggle('is-focused', isFocused);
      if (isFocused) {
        const titleEl = card.querySelector('.tv-card-title');
        const stripTitle = document.getElementById('tv-strip-title');
        if (titleEl && stripTitle) {
          stripTitle.textContent = titleEl.textContent;
        }
      }
    });
  }

  function setTvTab(nextTab) {
    state.tvTab = nextTab;
    const homeTab = document.getElementById('tab-tv-home');
    const pairTab = document.getElementById('tab-tv-pair');
    const homePanel = document.getElementById('panel-tv-home');
    const pairPanel = document.getElementById('panel-tv-pair');

    const isHome = nextTab === 'home';
    if (homeTab) homeTab.setAttribute('aria-selected', String(isHome));
    if (pairTab) pairTab.setAttribute('aria-selected', String(!isHome));

    if (homePanel) {
      homePanel.classList.toggle('is-inactive', !isHome);
      if (isHome) {
        homePanel.removeAttribute('aria-hidden');
        homePanel.removeAttribute('inert');
      } else {
        homePanel.setAttribute('aria-hidden', 'true');
        homePanel.setAttribute('inert', '');
      }
    }

    if (pairPanel) {
      pairPanel.classList.toggle('is-inactive', isHome);
      if (!isHome) {
        pairPanel.removeAttribute('aria-hidden');
        pairPanel.removeAttribute('inert');
      } else {
        pairPanel.setAttribute('aria-hidden', 'true');
        pairPanel.setAttribute('inert', '');
      }
    }
  }

  function applyLanguage(nextLang, updateUrl = true) {
    state.lang = nextLang === 'en' ? 'en' : 'vi';
    const dict = I18N[state.lang];

    document.documentElement.lang = state.lang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-lang-btn') === state.lang;
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = resolveKey(dict, key);
      if (typeof val === 'string') {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = resolveKey(dict, key);
      if (typeof val === 'string') {
        el.setAttribute('aria-label', val);
      }
    });

    syncTvShelf();
    updateCurationSummary();

    if (updateUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      if (state.lang === 'en') {
        url.searchParams.set('lang', 'en');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }

  function generatePairingCode() {
    const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const chars = [];
    for (let i = 0; i < 6; i += 1) {
      chars.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
    document.querySelectorAll('[data-code-slot]').forEach((slot, idx) => {
      slot.textContent = chars[idx] || 'K';
    });
    const formatted = `${chars.slice(0, 3).join('')} – ${chars.slice(3).join('')}`;
    const bentoSync = document.getElementById('bento-sync-code');
    if (bentoSync) {
      bentoSync.textContent = formatted;
    }
    state.remainingSeconds = 15 * 60;
    renderCountdown();
  }

  function renderCountdown() {
    const el = document.getElementById('tv-countdown');
    if (!el) return;
    const mins = Math.floor(state.remainingSeconds / 60);
    const secs = state.remainingSeconds % 60;
    el.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
  }

  let toastTimer = null;
  function showRouteToast(route) {
    const toast = document.getElementById('preview-route-toast');
    const textEl = document.getElementById('preview-route-text');
    if (!toast || !textEl) return;

    textEl.textContent = '';
    const prefix =
      state.lang === 'en'
        ? 'Local HTML Preview · In production Next.js this navigates to '
        : 'Bản xem trước HTML Local · Khi lên Next.js nút này dẫn tới ';
    textEl.appendChild(document.createTextNode(prefix));
    const codeEl = document.createElement('code');
    codeEl.textContent = route;
    textEl.appendChild(codeEl);

    toast.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 4500);
  }

  function init() {
    // Footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    // Initial language from ?lang=en
    const params = new URLSearchParams(window.location.search);
    const initialLang = params.get('lang') === 'en' ? 'en' : 'vi';
    applyLanguage(initialLang, false);

    // Language switcher buttons
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang-btn') || 'vi', true);
      });
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const willOpen = mobileDrawer.hidden;
        mobileDrawer.hidden = !willOpen;
        mobileBtn.setAttribute('aria-expanded', String(willOpen));
      });
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.hidden = true;
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // TV Stage mode tabs
    document.querySelectorAll('[data-tv-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        setTvTab(tab.getAttribute('data-tv-tab') || 'home');
      });
    });

    // Kid Profile switcher
    document.querySelectorAll('[data-profile-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextProfile = btn.getAttribute('data-profile-btn') || 'minh';
        state.profile = nextProfile;
        document.querySelectorAll('[data-profile-btn]').forEach((b) => {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        if (state.tvTab !== 'home') {
          setTvTab('home');
        }
        syncTvShelf();
      });
    });

    // TV Category chips
    document.querySelectorAll('[data-tv-chip]').forEach((chip) => {
      chip.addEventListener('click', () => {
        state.category = chip.getAttribute('data-tv-chip') || 'all';
        document.querySelectorAll('[data-tv-chip]').forEach((c) => {
          c.setAttribute('aria-pressed', String(c === chip));
        });
        syncTvShelf();
      });
    });

    // TV Video Cards focus click
    document.querySelectorAll('.tv-video-card').forEach((card) => {
      card.addEventListener('click', () => {
        state.focusedCardId = card.getAttribute('data-card-id') || 'wing-it';
        syncTvShelf();
      });
    });

    // TV 6-Code generator + live countdown
    const refreshBtn = document.getElementById('tv-refresh-code-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', generatePairingCode);
    }
    setInterval(() => {
      state.remainingSeconds = state.remainingSeconds > 1 ? state.remainingSeconds - 1 : 15 * 60;
      renderCountdown();
    }, 1000);

    // Bento Card 01 interactive whitelist switches
    document.querySelectorAll('[data-source-row] .toggle-switch').forEach((sw) => {
      sw.addEventListener('click', () => {
        const current = sw.getAttribute('aria-checked') === 'true';
        sw.setAttribute('aria-checked', String(!current));
        updateCurationSummary();
      });
    });

    // Intercept Next.js app routes cleanly on static preview host
    document.querySelectorAll('[data-route-preview]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route-preview') || '/login';
        showRouteToast(route);
      });
    });

    const closeToastBtn = document.getElementById('preview-route-close');
    const toast = document.getElementById('preview-route-toast');
    if (closeToastBtn && toast) {
      closeToastBtn.addEventListener('click', () => {
        toast.hidden = true;
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
