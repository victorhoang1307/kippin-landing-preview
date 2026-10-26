/* ─── Kippin Landing V16 — Bilingual Dictionary (VI / EN), Locale UI Screens & Popup Lightbox Gallery ─── */

(() => {
  const I18N = {
    vi: {
      pageTitle: 'Kippin — Không gian xem an toàn cho con, do ba mẹ chọn lọc',
      header: {
        homeAria: 'Trang chủ Kippin',
        navAria: 'Điều hướng chính',
        mobileNavAria: 'Menu di động',
        menuAria: 'Mở menu điều hướng',
        login: 'Đăng nhập',
        signup: 'Bắt đầu miễn phí',
      },
      nav: {
        intro: 'Về Kippin',
        features: 'Tính năng',
        inside: 'Bên trong ứng dụng',
        compare: 'So sánh',
        faq: 'Hỏi đáp',
      },
      hero: {
        title: 'Không gian xem an toàn cho\u00A0con, do ba\u00A0mẹ chọn\u00A0lọc',
        subtitle:
          'Gom các bộ video bản quyền đã mua và kênh YouTube ba mẹ duyệt cho từng độ tuổi 2–12+ vào một nơi. Không thuật toán tự trôi, không Shorts, không quảng cáo.',
        primaryCta: 'Bắt đầu miễn phí',
        imgAlt: 'Nhóm nhân vật Boro, Lumi, Kip, Pip và Mori vui chơi trên đồi cỏ xanh',
      },
      story: {
        title: 'Vì sao Kippin ra đời',
        p1:
          'Mở trực tiếp YouTube cho con thì khó chặn triệt để video gợi ý ngoài luồng, quảng cáo và Shorts.',
        p2:
          'Ngược lại, lưu video chọn lọc trên máy tính hay Google Drive thì khi ba mẹ đi làm, con nhỏ ở nhà không tự mở từng file rời rạc được — nhờ ông bà mở hộ cũng bất tiện.',
        imgAlt: 'Em bé ngồi trên thảm phòng khách tự mở chương trình yêu thích trên Smart TV',
        imgCap: 'Ở nhà con tự mở xem trên Smart TV hoặc iPad, người nhà không phải thao tác hộ.',
      },
      what: {
        title: 'Kippin là gì?',
        lead:
          'Kippin là kho video cá nhân cho từng gia đình — ba mẹ đưa gì vào, con chỉ xem đúng nội dung đó từ 3 nguồn:',
        s1Title: 'Từ YouTube',
        s1Body:
          'Chọn từ 100+ kênh lọc sẵn theo độ tuổi hoặc dán link kênh, danh sách phát bất kỳ.',
        s2Title: 'Từ Google Drive',
        s2Body:
          'Nhập trực tiếp thư mục video lưu trên đám mây về kho riêng, không lo giới hạn lượt xem.',
        s3Title: 'Từ máy tính & ổ cứng',
        s3Body:
          'Tải lên các bộ video học tập đã mua hoặc video gia đình tự quay để lưu trữ lâu dài.',
      },
      features: {
        heading: 'Cách Kippin vận hành mỗi ngày',
        subheading: 'Tổ chức gọn một lần cho ba mẹ, mở xem đơn giản cho con.',
        r1Title: 'Tự động xếp thành kệ phim chia Mùa và Tập',
        r1Body:
          'Video từ cả ba nguồn được xếp thành kệ phim có ảnh bìa, chia rõ Kênh, Mùa và Tập. Ba mẹ cũng có thể chia sẻ riêng từng thư mục cho người thân hoặc gia đình bạn bè qua liên kết.',
        r1Alt: 'Mẹ và bé trai ngồi trên ghế sofa chọn tập học tiếng Anh trên máy tính bảng',
        r2Title: 'Phát liền mạch từng bộ, không quảng cáo và không Shorts',
        r2Body:
          'Trình phát riêng của Kippin chặn 100% quảng cáo, Shorts và video gợi ý ngoài danh sách. Hết một bài, ứng dụng tự mở tập kế tiếp cùng bộ và lưu vị trí đang xem dở.',
        r2Alt: 'Hai anh chị em cùng xem chương trình khoa học và hoạt hình trên máy tính bảng',
        r3Title: 'Ứng dụng độc lập trên Smart TV để con tự mở ở nhà',
        r3Body:
          'Cài trực tiếp trên Android TV, Google TV và iPad để con ngồi xa chọn tập bằng điều khiển. Không dùng chung ứng dụng YouTube người lớn, không cần ông bà mở máy tính hộ.',
        r3Alt:
          'Hai anh em ngồi trên ghế sofa phòng khách dùng điều khiển chọn chương trình vũ trụ trên Smart TV',
        r4Title: 'Tách hồ sơ theo độ tuổi và xem nhật ký từ xa',
        r4Body:
          'Mỗi anh chị em có hồ sơ riêng, chỉ hiển thị đúng kênh và bộ video được gán. Phụ huynh khóa cài đặt bằng mã PIN và xem lịch sử từng tập con đã mở ngay trên điện thoại.',
        r4Alt:
          'Hai anh em chênh lệch độ tuổi ngồi trên ghế sofa chọn hồ sơ xem video riêng trên máy tính bảng',
      },
      inside: {
        heading: 'Bên trong ứng dụng Kippin',
        subheading:
          'Bấm vào từng ảnh để phóng to giao diện dành cho con và trang quản lý của ba mẹ.',
        galleryAria: 'Hình ảnh giao diện thực tế bên trong ứng dụng Kippin',
        s1OpenAria: 'Phóng to ảnh Trang chủ của con',
        s1Alt:
          'Trang chủ của con với các kênh đã duyệt TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, Numberblocks và hàng Xem tiếp',
        s1Cap: 'Trang chủ của con — Kênh đã duyệt và mục Xem tiếp',
        s2OpenAria: 'Phóng to ảnh Kệ phim gia đình',
        s2Alt:
          'Kệ phim gia đình chia bộ video bản quyền Oxford Read & Discover theo Mùa 1, Mùa 2, Mùa 3 và từng Tập',
        s2Cap: 'Kệ phim gia đình — Bộ video bản quyền chia theo Mùa và Tập',
        s3OpenAria: 'Phóng to ảnh Trình phát video theo tập',
        s3Alt:
          'Trình phát video 2 cột hiển thị đếm ngược chuyển sang Tập 02 và danh sách Tập 02 đến Tập 06 cùng bộ ở cột bên phải',
        s3Cap: 'Trình phát video — Tự mở tập kế tiếp cùng bộ, không gợi ý kênh lạ',
        s4OpenAria: 'Phóng to ảnh Màn hình chọn hồ sơ',
        s4Alt:
          'Màn hình chọn hồ sơ riêng theo từng độ tuổi 4t, 7t, 10t, 12t và mục Phụ huynh có khóa PIN',
        s4Cap: 'Chọn hồ sơ — Tách riêng nội dung theo tuổi, khóa cài đặt bằng PIN',
        s5OpenAria: 'Phóng to ảnh Quản lý kênh của ba mẹ',
        s5Alt:
          'Trang Quản lý kênh với danh mục 108 kênh thiếu nhi chọn lọc theo độ tuổi 2–4, 5–7, 8–10, 11+ và ô dán link YouTube',
        s5Cap: 'Quản lý kênh — Chọn từ 100+ kênh gợi ý theo tuổi hoặc dán link YouTube',
        s6OpenAria: 'Phóng to ảnh Nhật ký xem video',
        s6Alt: 'Nhật ký xem video chi tiết từng tập phim và thời lượng xem của mỗi hồ sơ con',
        s6Cap: 'Nhật ký xem — Theo dõi từng tập và thời lượng xem của mỗi con',
      },
      compare: {
        heading: 'Kippin khác gì so với YouTube và Google Drive?',
        subheading:
          'Kết hợp danh mục kênh chọn lọc từ YouTube với kho lưu trữ bộ video bản quyền của gia đình trong một ứng dụng duy nhất.',
        colFeature: 'Nhu cầu thực tế',
        colYt: 'YouTube thường',
        colDrive: 'Mở từ Google Drive',
        r1Label: 'Gom kênh YouTube & bộ video bản quyền đã mua',
        r1Kippin: 'Chung một kệ phim có ảnh bìa trực quan',
        r1Yt: 'Không tải được bộ video bản quyền lên dùng riêng',
        r1Drive: 'Chỉ mở file lưu sẵn, không gom được kênh YouTube',
        r2Label: 'Phát các bộ video bản quyền đã mua',
        r2Kippin: 'Chia theo Mùa/Tập, không nghẽn lượt xem, chia sẻ thư mục qua liên kết',
        r2Yt: 'Không có kho lưu trữ riêng cho gia đình',
        r2Drive: 'Tên file rời rạc khó chọn; hay báo lỗi vượt quá lượt xem',
        r3Label: 'Kiểm soát thuật toán, Shorts & Quảng cáo',
        r3Kippin: '100% kênh ba mẹ duyệt (100+ kênh 2–12+ tuổi), 0 Shorts, 0 quảng cáo',
        r3Yt: 'Tự gợi ý kênh lạ, luồng lướt Shorts liên tục & chèn quảng cáo',
        r3Drive: 'Không quảng cáo nhưng không có thư viện kênh theo độ tuổi',
        r4Label: 'Giữ mạch tập dài kỳ',
        r4Kippin: 'Tự chuyển đúng tập kế tiếp cùng bộ & nhớ chính xác đoạn xem dở',
        r4Yt: 'Dễ tự chuyển sang kênh khác ngoài bộ đang học',
        r4Drive: 'Hết 1 file là dừng, không nhớ vị trí đang xem dở',
        r5Label: 'Xem trên Smart TV phòng khách',
        r5Kippin: 'App Smart TV độc lập, bấm dễ bằng remote, không cần đăng nhập Google',
        r5Yt: 'Dùng chung app người lớn (Google đã ngừng app TV riêng từ 07/2024)',
        r5Drive: 'Không có giao diện kệ phim cho trẻ trên TV',
      },
      safety: {
        heading: 'An tâm trọn vẹn trong từng khung hình',
        subheading:
          'Không quảng cáo ẩn, không bán dữ liệu hành vi, không thuật toán kéo dài giờ xem.',
        s1Big: '100%',
        s1Label: 'Nội dung ba mẹ chọn',
        s2Big: '0',
        s2Label: 'Video ngắn Shorts',
        s3Big: '0',
        s3Label: 'Quảng cáo xen ngang',
        s4Big: '0',
        s4Label: 'Gợi ý từ kênh lạ',
      },
      faq: {
        heading: 'Câu hỏi thường gặp',
        q1: 'Ba mẹ thêm nội dung cho con bằng những cách nào?',
        a1:
          'Có 3 nguồn: chọn từ 100+ kênh YouTube lọc sẵn theo tuổi (hoặc dán link kênh, danh sách phát bất kỳ), nhập thư mục video từ Google Drive, hoặc tải file trực tiếp từ máy tính và ổ cứng.',
        q2: 'Đưa bộ video bản quyền đang lưu trên Google Drive lên Kippin có lợi gì?',
        a2:
          'Các file rời rạc được xếp thành kệ phim có ảnh bìa chia theo Mùa và Tập, tự mở tập tiếp theo, nhớ vị trí xem dở và phát trên Smart TV không bị khóa lượt xem. Ba mẹ cũng có thể chia sẻ riêng từng thư mục cho người thân hoặc gia đình bạn bè qua liên kết.',
        q3: 'Con lớn 8–12+ tuổi có kênh phù hợp không hay chỉ dành cho bé mầm non?',
        a3:
          'Danh mục gợi ý có nhóm riêng cho lứa tuổi 8–10 và 11+ với nhiều kênh khoa học, vũ trụ, lịch sử, toán và hội họa như TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, VTV7... cùng bất kỳ kênh chuyên sâu nào ba mẹ tự dán link thêm.',
        q4: 'Vì sao con dễ dừng xem đúng giờ hơn so với khi mở YouTube thường?',
        a4:
          'Kippin loại bỏ luồng lướt Shorts vô tận, quảng cáo chen ngang và các đề xuất giật gân cuối video — chỉ giữ mạch tập trong bộ đang xem nên con không bị cuốn sang hàng chục video ngoài ý muốn.',
        q5: 'Mở Kippin trên Smart TV phòng khách như thế nào?',
        a5:
          'Ba mẹ tải ứng dụng Kippin trên Android TV hoặc Google TV (Sony, TCL, Xiaomi, Casper, Chromecast) rồi liên kết nhanh bằng điện thoại — kệ video của từng con sẽ đồng bộ lên TV mà không cần đăng nhập tài khoản Google cá nhân.',
        q6: 'Con có tự tìm kiếm sang kênh lạ ngoài danh sách đã duyệt được không?',
        a6:
          'Không. Ô tìm kiếm trên Kippin chỉ trả kết quả nằm trong những kênh và bộ video mà ba mẹ đã gán riêng cho hồ sơ của bé đó.',
      },
      closing: {
        heading: 'Tạo kệ video riêng cho con chỉ trong vài phút',
        subtitle:
          'Tải bộ video bản quyền của gia đình và chọn những kênh đầu tiên hợp độ tuổi của con.',
        primaryCta: 'Bắt đầu miễn phí',
      },
      footer: {
        tagline: 'Không gian xem an toàn cho con, do ba mẹ chọn lọc mỗi ngày.',
        colExplore: 'Khám phá',
        colFamily: 'Dành cho gia đình',
        signUp: 'Đăng ký miễn phí',
        signIn: 'Đăng nhập',
        tvSetup: 'Cài đặt Android TV',
        legal: 'Điều khoản & Bảo mật',
        rights: 'Bảo lưu mọi quyền.',
        cc:
          'Tên kênh và hình thu nhỏ YouTube trong ảnh minh họa thuộc về chủ sở hữu tương ứng. Kippin giúp phụ huynh tự tổ chức nguồn xem an toàn từ YouTube và tệp lưu trữ hợp pháp của gia đình.',
      },
      gallery: {
        title: 'Giao diện thực tế bên trong Kippin',
        closeAria: 'Đóng cửa sổ',
        prevAria: 'Ảnh trước',
        nextAria: 'Ảnh tiếp theo',
        tabsAria: 'Chọn màn hình',
        cta: 'Bắt đầu miễn phí',
      },
      toast: {
        prefix: 'Bản xem trước giao diện: Nút này sẽ chuyển tới ',
        suffix: ' trên kippin.app',
      },
    },

    en: {
      pageTitle: 'Kippin — A safe viewing space for kids, curated by parents',
      header: {
        homeAria: 'Kippin Home',
        navAria: 'Main navigation',
        mobileNavAria: 'Mobile navigation',
        menuAria: 'Open navigation menu',
        login: 'Log In',
        signup: 'Start for Free',
      },
      nav: {
        intro: 'Why Kippin',
        features: 'Features',
        inside: 'Inside the App',
        compare: 'Compare',
        faq: 'FAQ',
      },
      hero: {
        title: 'A safe viewing space for\u00A0kids, curated by\u00A0parents',
        subtitle:
          'Bring your purchased licensed video sets and parent-approved YouTube channels for ages 2–12+ onto one clean shelf. Zero algorithmic drift, zero Shorts, zero ads.',
        primaryCta: 'Start for Free',
        imgAlt: 'Kippin characters Boro, Lumi, Kip, Pip, and Mori playing on a green hill',
      },
      story: {
        title: 'Why Kippin exists',
        p1:
          'Streaming directly on YouTube makes it hard to block stray suggestions, ads, and Shorts.',
        p2:
          'Conversely, storing selected videos on a computer or Google Drive leaves young kids unable to open scattered files while parents are at work—and asking grandparents to navigate folders is inconvenient.',
        imgAlt: 'Child sitting comfortably on a living-room rug opening an approved show on Smart TV',
        imgCap: 'At home, kids open approved shows on Smart TV or iPad on their own.',
      },
      what: {
        title: 'What is Kippin?',
        lead:
          'Kippin is a private video library for each family—kids only watch what parents add, from three sources:',
        s1Title: 'From YouTube',
        s1Body:
          'Pick from 100+ age-sorted kids’ channels or paste any channel or playlist link.',
        s2Title: 'From Google Drive',
        s2Body:
          'Import cloud video folders directly into your library with zero playback-quota errors.',
        s3Title: 'From computer & drives',
        s3Body:
          'Upload purchased learning sets or family videos for organized, long-term streaming.',
      },
      features: {
        heading: 'How Kippin works every day',
        subheading: 'Set up once by parents, effortless to open for kids.',
        r1Title: 'Organized automatically into Season and Episode shelves',
        r1Body:
          'Videos from all three sources appear on illustrated shelves sorted by Channel, Season, and Episode. Parents can also privately share individual folders with relatives or family friends via a link.',
        r1Alt: 'Mother and young son on a sunlit sofa picking an English episode on a tablet',
        r2Title: 'Seamless series playback—zero ads and zero Shorts',
        r2Body:
          'Kippin’s dedicated player blocks 100% of ads, Shorts, and outside suggestions. When an episode finishes, it plays the next one in order and saves exact watch progress.',
        r2Alt: 'Two siblings watching science and animated stories together on a tablet',
        r3Title: 'Standalone Smart TV app kids can open on their own',
        r3Body:
          'Install directly on Android TV, Google TV, and iPad so kids sit back and pick episodes by remote—without opening the adult YouTube app or needing grandparents to set up a computer.',
        r3Alt:
          'Two siblings on a living-room sofa using a TV remote to watch a space documentary on Smart TV',
        r4Title: 'Age-matched profiles and remote watch history',
        r4Body:
          'Each sibling gets a separate profile showing only their assigned channels and video sets. Parents lock settings with a PIN and check watched episodes right from their phone.',
        r4Alt:
          'Younger sister and older brother sitting on a sunlit sofa picking their own age-matched profiles on a tablet',
      },
      inside: {
        heading: 'Inside the Kippin app',
        subheading:
          'Click any screen to zoom into the kid viewing experience and parent dashboard.',
        galleryAria: 'Real screenshots inside the Kippin application',
        s1OpenAria: 'Zoom Kid’s Home screenshot',
        s1Alt:
          'Kid’s Home screen with approved channels TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, Numberblocks, and Continue Watching',
        s1Cap: 'Kid’s Home — Approved channels and Continue Watching',
        s2OpenAria: 'Zoom Family Shelf screenshot',
        s2Alt:
          'Family Shelf organizing Oxford Read & Discover licensed videos into Season 1, Season 2, Season 3, and Episodes',
        s2Cap: 'Family Shelf — Purchased video sets organized by Season & Episode',
        s3OpenAria: 'Zoom Series Player screenshot',
        s3Alt:
          'Two-column Series Player showing 4-second countdown to Ep 02 alongside Ep 02–06 in the Up Next sidebar',
        s3Cap: 'Series Player — Auto-plays next episode in order, zero outside suggestions',
        s4OpenAria: 'Zoom Profile Switcher screenshot',
        s4Alt:
          'Profile Switcher showing separate child profiles for ages 4, 7, 10, 12 and PIN-locked Parents mode',
        s4Cap: 'Profile Switcher — Age-separated spaces with Parent PIN lock',
        s5OpenAria: 'Zoom Manage Channels screenshot',
        s5Alt:
          'Manage Channels dashboard showing 108 curated kids channels filtered by ages 2–4, 5–7, 8–10, 11+ plus YouTube URL input',
        s5Cap: 'Manage Channels — Pick from 100+ age-sorted channels or paste a YouTube URL',
        s6OpenAria: 'Zoom Activity Log screenshot',
        s6Alt: 'Watch Activity Log tracking watched episodes and duration across child profiles',
        s6Cap: 'Activity Log — Track watched episodes and duration per child',
      },
      compare: {
        heading: 'How does Kippin compare to YouTube and Google Drive?',
        subheading:
          'Combining curated YouTube channels and a private vault for purchased family video sets in one app.',
        colFeature: 'Everyday need',
        colYt: 'Standard YouTube',
        colDrive: 'Playing from Google Drive',
        r1Label: 'Combine YouTube channels & purchased licensed videos',
        r1Kippin: 'Unified on one illustrated shelf with cover art',
        r1Yt: 'Cannot upload purchased licensed sets privately',
        r1Drive: 'Plays stored files only; cannot include YouTube channels',
        r2Label: 'Stream purchased licensed video sets',
        r2Kippin: 'Season & Episode shelves, zero quota errors, folder sharing via link',
        r2Yt: 'No private family video vault',
        r2Drive: 'Raw filenames; frequent download-quota blocks',
        r3Label: 'Control algorithms, Shorts & ads',
        r3Kippin: '100% parent-approved (100+ channels for ages 2–12+), 0 Shorts, 0 ads',
        r3Yt: 'Pushes unapproved channels, endless Shorts & ad breaks',
        r3Drive: 'Ad-free, but no age-sorted channel directory',
        r4Label: 'Multi-episode series continuity',
        r4Kippin: 'Auto-plays next episode in series & saves exact watch progress',
        r4Yt: 'Easily drifts into unrelated channels after a video',
        r4Drive: 'Stops after one file; never saves playback position',
        r5Label: 'Living-room Smart TV experience',
        r5Kippin: 'Standalone Smart TV app, easy remote browsing, no Google login on TV',
        r5Yt: 'Shares adult YouTube app (standalone kids TV app retired July 2024)',
        r5Drive: 'No kid-friendly TV shelf for remote navigation',
      },
      safety: {
        heading: 'Built for focused, distraction-free viewing',
        subheading:
          'No hidden ads, no behavioral data selling, and no algorithms engineered to extend screen time.',
        s1Big: '100%',
        s1Label: 'Parent-Selected Content',
        s2Big: '0',
        s2Label: 'YouTube Shorts',
        s3Big: '0',
        s3Label: 'Ad Interruptions',
        s4Big: '0',
        s4Label: 'Stranger Suggestions',
      },
      faq: {
        heading: 'Frequently asked questions',
        q1: 'How can parents add videos and channels for their kids?',
        a1:
          'From three sources: pick from 100+ age-sorted YouTube channels (or paste any channel or playlist URL), import folders from Google Drive, or upload files directly from your computer or drive.',
        q2: 'We store purchased licensed videos on Google Drive—how is Kippin better?',
        a2:
          'Loose files become an illustrated shelf sorted by Season and Episode that auto-plays the next video, saves watch progress, and streams on Smart TV without quota blocks. You can also privately share folders with relatives or family friends via a link.',
        q3: 'Are there channels for 8–12+ year olds, or is it mostly for preschoolers?',
        a3:
          'Our catalog includes dedicated tiers for ages 8–10 and 11+ featuring science, space, history, math, and art channels like TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, and VTV7—plus any specialized channel you paste yourself.',
        q4: 'Why is it easier for kids to stop watching on time compared to YouTube?',
        a4:
          'Kippin removes endless Shorts feeds, ad interruptions, and sensational end-screen suggestions—keeping playback strictly inside the series your child is watching.',
        q5: 'How do we watch Kippin on our living-room Smart TV?',
        a5:
          'Install the standalone Kippin app on Android TV or Google TV (Sony, TCL, Xiaomi, Casper, Chromecast) and link from your phone—each child’s shelf syncs without signing your personal Google account into the TV.',
        q6: 'Can kids search for unapproved channels outside our list?',
        a6:
          'No. Search inside Kippin only returns videos from the channels and sets you have assigned to that child’s profile.',
      },
      closing: {
        heading: 'Set up your child’s video shelf in minutes',
        subtitle:
          'Upload your family’s purchased video sets and pick your first age-matched channels.',
        primaryCta: 'Start for Free',
      },
      footer: {
        tagline: 'A safe viewing space for kids, curated by parents every day.',
        colExplore: 'Explore',
        colFamily: 'For Families',
        signUp: 'Start for Free',
        signIn: 'Log In',
        tvSetup: 'Android TV Setup',
        legal: 'Terms & Privacy',
        rights: 'All rights reserved.',
        cc:
          'YouTube channel names and thumbnails shown in interface previews belong to their respective owners. Kippin helps parents organize safe viewing from YouTube and lawful family media files.',
      },
      gallery: {
        title: 'Inside the Kippin App',
        closeAria: 'Close gallery',
        prevAria: 'Previous screen',
        nextAria: 'Next screen',
        tabsAria: 'Select screen',
        cta: 'Start for Free',
      },
      toast: {
        prefix: 'Design Preview: This action opens ',
        suffix: ' on kippin.app',
      },
    },
  };

  const GALLERY_SCREENS = [
    { num: 1, capKey: 'inside.s1Cap', altKey: 'inside.s1Alt' },
    { num: 2, capKey: 'inside.s2Cap', altKey: 'inside.s2Alt' },
    { num: 3, capKey: 'inside.s3Cap', altKey: 'inside.s3Alt' },
    { num: 4, capKey: 'inside.s4Cap', altKey: 'inside.s4Alt' },
    { num: 5, capKey: 'inside.s5Cap', altKey: 'inside.s5Alt' },
    { num: 6, capKey: 'inside.s6Cap', altKey: 'inside.s6Alt' },
  ];

  let currentLang = 'vi';
  let currentGalleryStep = 0;
  let toastTimer = null;

  function resolveKey(dict, path) {
    return path
      .split('.')
      .reduce((acc, part) => (acc && Object.hasOwn(acc, part) ? acc[part] : null), dict);
  }

  function screenAssetPath(num, lang) {
    const folder = lang === 'vi' ? 'vi' : 'en';
    return `assets/${folder}/screen-${num}.webp`;
  }

  function renderGalleryStep(stepIdx) {
    const total = GALLERY_SCREENS.length;
    currentGalleryStep = ((stepIdx % total) + total) % total;
    const item = GALLERY_SCREENS[currentGalleryStep];
    const dict = I18N[currentLang];

    const imgEl = document.getElementById('gallery-preview-img');
    const capEl = document.getElementById('gallery-preview-caption');
    const counterEl = document.getElementById('gallery-counter');

    if (imgEl) {
      const nextModalSrc = screenAssetPath(item.num, currentLang);
      if (imgEl.getAttribute('src') !== nextModalSrc) {
        imgEl.setAttribute('src', nextModalSrc);
      }
      const altText = resolveKey(dict, item.altKey);
      if (altText && imgEl.getAttribute('alt') !== altText) imgEl.setAttribute('alt', altText);
    }
    if (capEl) {
      const capText = resolveKey(dict, item.capKey);
      if (capText && capEl.textContent !== capText) capEl.textContent = capText;
    }
    if (counterEl) {
      const nextCount = `${currentGalleryStep + 1} / ${total}`;
      if (counterEl.textContent !== nextCount) counterEl.textContent = nextCount;
    }

    document.querySelectorAll('.gallery-dot').forEach((btn, idx) => {
      const active = idx === currentGalleryStep;
      btn.classList.toggle('is-active', active);
      if (active) {
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.removeAttribute('aria-current');
      }
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'vi';
    const dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    if (document.title !== dict.pageTitle) document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n'));
      if (val !== null && el.textContent !== val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-aria'));
      if (val !== null && el.getAttribute('aria-label') !== val) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-alt'));
      if (val !== null && el.getAttribute('alt') !== val) el.setAttribute('alt', val);
    });

    // Swap real UI screenshots: Vietnamese UI for 'vi', English UI for all non-'vi' locales
    document.querySelectorAll('img[data-ui-screen]').forEach((img) => {
      const num = Number(img.getAttribute('data-ui-screen') || '1');
      const nextSrc = screenAssetPath(num, currentLang);
      if (img.getAttribute('src') !== nextSrc) {
        img.setAttribute('src', nextSrc);
      }
    });

    // Update CSS custom properties for mobile stacked comparison cards (responsive-table)
    const compareTable = document.getElementById('compare-table');
    if (compareTable && dict.compare) {
      compareTable.style.setProperty('--label-kippin', '"Kippin"');
      compareTable.style.setProperty('--label-yt', JSON.stringify(dict.compare.colYt));
      compareTable.style.setProperty('--label-drive', JSON.stringify(dict.compare.colDrive));
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    renderGalleryStep(currentGalleryStep);

    try {
      localStorage.setItem('kippin_preview_lang', currentLang);
    } catch (_) {
      /* ignore storage errors in restricted contexts */
    }
  }

  // Initial query & storage detection (?lang=en|vi)
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
      try {
        const url = new URL(window.location.href);
        if (next === 'en') {
          url.searchParams.set('lang', 'en');
        } else {
          url.searchParams.delete('lang');
        }
        window.history.replaceState({}, '', url.toString());
      } catch (_) {
        /* ignore replaceState in restricted origins */
      }
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

  // Native Light-Dismiss Popup Lightbox Gallery + Safari Fallback (Modern Web Guidance: light-dismiss-a-dialog)
  const galleryDialog = document.getElementById('gallery-dialog');
  if (galleryDialog) {
    document.querySelectorAll('[data-gallery-open]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const idx = Number(trigger.getAttribute('data-gallery-open') || '0');
        renderGalleryStep(idx);
        galleryDialog.showModal();
      });
    });

    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => renderGalleryStep(currentGalleryStep - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => renderGalleryStep(currentGalleryStep + 1));
    }

    document.querySelectorAll('.gallery-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = Number(dot.getAttribute('data-gallery-step') || '0');
        renderGalleryStep(idx);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (!galleryDialog.open) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        renderGalleryStep(currentGalleryStep - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        renderGalleryStep(currentGalleryStep + 1);
      }
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      galleryDialog.addEventListener('click', (event) => {
        if (event.target !== galleryDialog) return;
        const rect = galleryDialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (isDialogContent) return;
        galleryDialog.close();
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
        if (galleryDialog && galleryDialog.open) galleryDialog.close();
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
