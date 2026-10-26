/* ─── Kippin Landing V15 — Client Interactivity, Hero Option Switcher & Bilingual Dictionary (VI / EN) ─── */

(() => {
  const I18N = {
    vi: {
      pageTitle: 'Kippin — Không gian xem an toàn cho con, do chính ba mẹ chọn lọc',
      header: {
        homeAria: 'Trang chủ Kippin',
        navAria: 'Điều hướng chính',
        mobileNavAria: 'Menu di động',
        menuAria: 'Mở menu điều hướng',
        login: 'Đăng nhập',
        signup: 'Bắt đầu miễn phí',
      },
      nav: {
        intro: 'Giới thiệu',
        features: 'Tính năng',
        inside: 'Bên trong ứng dụng',
        compare: 'So sánh',
        faq: 'Hỏi đáp',
      },
      hero: {
        switcherAria: 'Chọn thử bố cục Hero Banner',
        switcherLabel: 'Xem thử bố cục Hero:',
        opt1: 'Option 1: Khung Container gọn gàng',
        opt2: 'Option 2: Toàn màn hình cân xứng 2 bên',
        title: 'Không gian xem an toàn cho con, do chính ba mẹ chọn lọc',
        subtitle:
          'Tải các bộ video bản quyền đã mua lên kệ phim có ảnh bìa, gom cùng những kênh YouTube chất lượng ba mẹ duyệt riêng cho từng độ tuổi. Không thuật toán tự trôi, không quảng cáo xen ngang, không YouTube Shorts.',
        primaryCta: 'Bắt đầu miễn phí',
        imgAlt:
          'Nhóm bạn nhỏ Boro, Lumi, Kip, Pip và Mori vui chơi trên đồi cỏ xanh dưới bầu trời trong trẻo',
      },
      video: {
        title: 'An tâm trao điều khiển cho con mỗi ngày',
        body:
          'Thay vì lo thuật toán tự động chuyển sang các nội dung chưa phù hợp hay quảng cáo cắt ngang mạch xem, ba mẹ chỉ cần chọn sẵn một lần những bộ video bản quyền của gia đình cùng các kênh ngoại ngữ, khoa học, lịch sử và sáng tạo đúng lứa tuổi của con.',
        linkLabel: 'Xem cách Kippin hoạt động trong 1 phút',
        playAria: 'Mở trình xem nhanh cách Kippin hoạt động',
        imgAlt:
          'Em bé ngồi trên thảm phòng khách nắng ấm xem chương trình yêu thích trên Smart TV',
      },
      features: {
        heading: 'Giải quyết trọn vẹn những trăn trở thực tế nhất của ba mẹ',
        subheading:
          'Kết hợp tủ lưu trữ các bộ video bản quyền gia đình đã mua với kho kênh YouTube chọn lọc từ mầm non đến tuổi teen — trong một không gian trong trẻo dành riêng cho con.',
        r1Tag: 'Tủ Đám Mây Gia Đình',
        r1Title: 'Biến kho video bản quyền trên Google Drive thành rạp phim riêng của con',
        r1Body:
          'Nhiều ba mẹ mua sẵn các bộ video ngoại ngữ, truyện kể hay khóa học bản quyền cất trên Google Drive nhưng mở cho con xem rất vất vả vì toàn tên file khô khan, hết 1 bài là dừng và hay bị khóa lượt tải. Với Tủ Đám Mây Gia Đình trên Kippin, ba mẹ tải các bộ video bản quyền đã mua hoặc video kỷ niệm lên thành kệ phim chia theo từng Mùa/Tập có ảnh bìa trực quan — con tự chọn dễ dàng trên cả Smart TV lẫn iPad, và ba mẹ có thể gửi mã PIN 4 số để chia sẻ riêng tư thư mục video gia đình với ông bà.',
        r1Alt:
          'Giao diện thực tế Tủ Đám Mây Gia Đình chia bộ video bản quyền Oxford Read & Discover theo Mùa 1, Mùa 2 và thanh Xem tiếp',
        r1Badge: 'Chia theo Mùa/Tập • Chia sẻ video gia đình qua PIN 4 số',
        r2Tag: '100% Whitelist • 100+ Kênh 2–12+ tuổi',
        r2Title:
          'Xem kênh YouTube hay không thuật toán — kèm thư viện 100+ kênh gợi ý từ mầm non đến tuổi teen',
        r2Body:
          'Dán link kênh hoặc playlist YouTube bất kỳ, hoặc thêm 1 chạm từ thư viện hơn 100 kênh chọn lọc trải rộng cho cả trẻ nhỏ lẫn anh chị lớn 6–12+ tuổi: từ Numberblocks, Bluey, Super Simple Songs đến TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, VTV7. Kippin chỉ hiển thị đúng những gì ba mẹ đã duyệt và tự động lọc sạch 100% video ngắn Shorts, Livestream cùng quảng cáo.',
        r2Alt:
          'Giao diện thực tế Thư viện 100+ kênh YouTube chọn lọc phân theo độ tuổi 2–4, 5–7, 8–10 và 11+ tuổi với TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids',
        r2SubAlt:
          'Hai anh chị em cùng xem chương trình khoa học và hoạt hình trên máy tính bảng',
        r3Tag: 'Giới hạn giờ xem & Giữ mạch tập',
        r3Title:
          'Hết giờ tự chuyển sang màn hình nghỉ mắt — đang xem dở luôn giữ trọn mạch tập',
        r3Body:
          'Ba mẹ chủ động đặt thời lượng xem mỗi ngày cho từng con: khi hết giờ, màn hình tự động khép lại nhẹ nhàng sang chế độ chờ tĩnh lặng thay vì tắt đột ngột gây căng thẳng. Trong suốt giờ xem, trình phát luôn mở đúng tập tiếp theo trong cùng bộ phim hoặc chuỗi bài học và nhớ chính xác vị trí con đang dừng.',
        r3Alt:
          'Bé gái ôm thỏ bông ngồi trên ghế sofa sáng nắng xem trọn vẹn câu chuyện theo từng tập',
        r3SubAlt:
          'Màn hình chờ nghỉ mắt dịu nhẹ trên Kippin khi hết thời lượng xem trong ngày',
        r3Badge: 'Hết giờ xem → Tự chuyển màn hình nghỉ mắt',
        r4Tag: 'Ứng dụng Smart TV độc lập',
        r4Title: 'Đưa con rời màn hình điện thoại nhỏ lên Smart TV phòng khách',
        r4Body:
          'Giúp con ngồi xa bảo vệ thị lực với ứng dụng Kippin độc lập dành riêng cho Android TV và Google TV (Sony, TCL, Xiaomi, Casper, Chromecast). Con dễ dàng dùng điều khiển TV chọn tập yêu thích trong không gian riêng mà không phải mở chung trong ứng dụng YouTube người lớn hay đăng nhập tài khoản Google cá nhân lên TV phòng khách.',
        r4Alt:
          'Giao diện thực tế Kippin trên màn hình Smart TV phòng khách với kệ Xem tiếp và các kênh TED-Ed, Kurzgesagt, Nat Geo Kids, Numberblocks',
        r5Tag: 'Đa hồ sơ 2–12+ tuổi & Nhật ký từ xa',
        r5Title: 'Mỗi con một góc riêng đúng lứa tuổi — ba mẹ yên tâm nắm bắt từ xa',
        r5Body:
          'Em út 3 tuổi nghe đồng dao tiếng Anh còn anh lớn 10 tuổi mê khoa học vũ trụ? Ngay trong một tài khoản gia đình, mỗi con có một hồ sơ riêng và chỉ nhìn thấy những kênh cùng bộ video đúng độ tuổi của mình. Dù đang ở văn phòng, ba mẹ vẫn xem được nhật ký hôm nay con đã xem tập nào ở nhà và bảo vệ cài đặt bằng mã PIN.',
        r5Alt:
          'Giao diện Nhật ký xem video hàng ngày trong Góc Ba Mẹ theo dõi từng tập và thời lượng xem của mỗi con',
        r5SubAlt:
          'Màn hình chọn hồ sơ riêng cho từng độ tuổi với bộ nhân vật Boro, Lumi, Kip và Mori',
      },
      inside: {
        heading: 'Bên trong ứng dụng Kippin',
        subheading:
          'Giao diện hình ảnh trong trẻo để con tự mở tập yêu thích — công cụ quản lý gọn nhẹ cho ba mẹ trên cả Web, iPad và Smart TV.',
        galleryAria: 'Hình ảnh giao diện thực tế bên trong ứng dụng Kippin',
        s1Alt:
          'Tủ Đám Mây Gia Đình chia bộ video bản quyền đã mua theo Mùa 1, Mùa 2 và thanh Xem tiếp',
        s1Cap: 'Tủ Đám Mây Gia Đình — Chia bộ video bản quyền theo Mùa/Tập',
        s2Alt:
          'Trang chủ của Con với kệ Xem tiếp và các kênh TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, Numberblocks',
        s2Cap: 'Trang chủ của Con — Trải rộng từ mầm non đến 12+ tuổi',
        s3Alt: 'Trình phát bài học TED-Ed sạch nút rối mắt kèm hàng Tập tiếp theo',
        s3Cap: 'Trình phát sạch xao nhãng — Giữ trọn mạch tập tiếp theo',
        s4Alt:
          'Thư viện hơn 100 kênh YouTube chọn lọc phân theo độ tuổi 2–4, 5–7, 8–10 và 11+',
        s4Cap: 'Góc Ba Mẹ — Thư viện 100+ kênh YouTube chọn lọc theo tuổi',
        s5Alt:
          'Tải các bộ video bản quyền .mp4 lên Kho lưu trữ gia đình và phân vào từng mùa phim',
        s5Cap: 'Góc Ba Mẹ — Tải hàng loạt bộ video bản quyền đã mua (.mp4)',
        s6Alt:
          'Màn hình chờ nghỉ mắt tĩnh lặng trên Kippin khi hết giờ xem trong ngày',
        s6Cap: 'Màn hình chờ nghỉ mắt — Khép lại giờ xem êm ái mỗi ngày',
        s7Alt:
          'Màn hình chọn hồ sơ theo độ tuổi cho anh chị em với Boro, Lumi, Kip và Mori',
        s7Cap: 'Đa hồ sơ theo độ tuổi — Góc riêng cho từng anh chị em',
        s8Alt:
          'Nhật ký xem video hàng ngày trong Góc Ba Mẹ theo dõi từng tập con đã xem',
        s8Cap: 'Góc Ba Mẹ — Nhật ký xem video hàng ngày từ xa',
      },
      compare: {
        heading: 'Kippin khác gì khi đặt cạnh YouTube và Google Drive?',
        subheading:
          'Kết hợp kho kênh chọn lọc từ YouTube với sự chủ động của tủ lưu trữ đám mây gia đình — trong một không gian xem thiết kế riêng cho trẻ từ 2 đến 12+ tuổi.',
        colFeature: 'Tiêu chí thực tế của ba mẹ',
        colYt: 'YouTube thường',
        colDrive: 'Tự mở bằng Google Drive',
        r1Label: 'Gom chung kênh YouTube & bộ video bản quyền đã mua',
        r1Kippin: 'Chung một kệ phim có ảnh bìa trực quan',
        r1Yt: 'Không tải được bộ video bản quyền đã mua lên dùng riêng (dễ bị khóa bản quyền)',
        r1Drive: 'Chỉ mở được file lưu sẵn, không gom được kênh YouTube',
        r2Label: 'Mở các bộ video bản quyền ba mẹ đã mua',
        r2Kippin:
          'Chia theo Kênh & Mùa/Tập, phát mượt không bị khóa lượt tải; chia sẻ video gia đình với ông bà qua PIN 4 số',
        r2Yt: 'Không có tủ lưu trữ riêng cho gia đình',
        r2Drive: 'Toàn tên file khô khan con khó tự chọn; hay báo lỗi "vượt quá lượt xem/tải"',
        r3Label: 'Kiểm soát thuật toán, Shorts ≤ 60s & Quảng cáo',
        r3Kippin:
          '100% kênh do ba mẹ duyệt (100+ kênh gợi ý 2–12+ tuổi), lọc sạch Shorts & không quảng cáo',
        r3Yt: 'Thuật toán tự gợi ý kênh lạ, luồng lướt Shorts liên tục & chèn quảng cáo',
        r3Drive: 'Không quảng cáo nhưng không có danh mục kênh theo độ tuổi',
        r4Label: 'Giữ mạch tập dài kỳ & Giới hạn giờ xem',
        r4Kippin:
          'Tự chuyển đúng tập tiếp theo, nhớ đoạn xem dở & hết giờ tự chuyển sang màn hình nghỉ mắt êm ái',
        r4Yt: 'Dễ tự nhảy sang kênh khác; thiết kế tối đa hóa thời gian xem',
        r4Drive: 'Hết 1 file là dừng cứng, không lưu vị trí đang xem dở',
        r5Label: 'Xem trên Smart TV phòng khách',
        r5Kippin:
          'Có ứng dụng Smart TV độc lập, điều khiển dễ bằng remote, không cần đăng nhập Google lên TV',
        r5Yt: 'Dùng chung ứng dụng với người lớn (Google đã bỏ app TV riêng cho trẻ từ 07/2024)',
        r5Drive: 'Không có giao diện chọn phim cho trẻ trên TV, bấm bằng remote rất vất vả',
      },
      safety: {
        heading: '100% tập trung vào sự bình yên của trẻ nhỏ',
        subheading:
          'Không quảng cáo ẩn, không bán dữ liệu hành vi, không thuật toán giữ chân con trước màn hình.',
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
        heading: 'Câu hỏi thường gặp của ba mẹ',
        q1: 'Ba mẹ thêm nội dung cho con bằng những cách nào?',
        a1:
          'Ba mẹ có 3 cách rất nhanh trong Góc Ba Mẹ: bấm 1 chạm từ thư viện hơn 100 kênh YouTube gợi ý sẵn cho các lứa tuổi 2–4, 5–7, 8–10 và 11+; dán đường dẫn kênh hoặc playlist YouTube bất kỳ; hoặc tải các bộ video bản quyền đã mua và video kỷ niệm gia đình lên Tủ Đám Mây.',
        q2: 'Nhà mình đang lưu các bộ video bản quyền đã mua trên Google Drive thì đưa lên Kippin khác gì?',
        a2:
          'Các bộ video bản quyền ba mẹ đã mua sẽ hiển thị thành kệ phim có ảnh bìa chia theo từng Mùa/Tập để con tự chọn dễ dàng, tự động chuyển tập tiếp theo, nhớ chính xác đoạn đang xem dở và phát mượt trên Smart TV mà không bao giờ bị lỗi khóa lượt tải như trên Google Drive. Ngoài ra, ba mẹ có thể tạo mã PIN 4 số nếu muốn chia sẻ riêng tư thư mục video kỷ niệm gia đình cho ông bà cùng xem.',
        q3: 'Làm sao để con dừng xem đúng giờ mà không căng thẳng?',
        a3:
          'Ba mẹ đặt giới hạn số phút xem mỗi ngày cho từng hồ sơ của con. Khi hết thời lượng, Kippin tự động chuyển nhẹ nhàng sang màn hình chờ nghỉ mắt tĩnh lặng để báo hiệu kết thúc giờ xem một cách tự nhiên, không cần ba mẹ phải giật điều khiển hay tắt đột ngột.',
        q4: 'Con lớn 8–12 tuổi có kênh phù hợp không hay chỉ dành cho bé mầm non?',
        a4:
          'Thư viện gợi ý của Kippin phân tầng rõ cho trẻ Tiểu học và THCS (8–10 và 11+ tuổi) với hàng chục kênh khoa học, vũ trụ, lịch sử, toán tư duy, kỹ thuật và hội họa chất lượng cao như TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, VTV7... bên cạnh bất kỳ kênh chuyên sâu nào ba mẹ tự thêm.',
        q5: 'Làm sao để mở Kippin trên Smart TV ở phòng khách?',
        a5:
          'Ba mẹ cài ứng dụng Kippin độc lập dành cho Android TV và Google TV (Sony, TCL, Xiaomi, Casper, Chromecast with Google TV) và liên kết nhanh từ điện thoại ba mẹ — toàn bộ kệ kênh cùng bộ video của từng con sẽ đồng bộ lên màn hình lớn mà không cần đăng nhập tài khoản Google cá nhân lên TV.',
        q6: 'Con có thể tự tìm kiếm sang kênh lạ ngoài danh sách ba mẹ duyệt không?',
        a6:
          'Hoàn toàn không. Ô tìm kiếm bên trong Kippin chỉ tìm trong phạm vi các kênh và bộ video mà ba mẹ đã cho phép riêng cho đúng hồ sơ của con — không bao giờ mở ra ngoài Internet hay hiển thị gợi ý từ kênh lạ.',
      },
      closing: {
        heading: 'Tạo rạp phim trong trẻo cho con ngay hôm nay',
        subtitle:
          'Sắp xếp các bộ video bản quyền của gia đình và chọn những kênh đầu tiên hợp độ tuổi của con chỉ trong vài phút.',
        primaryCta: 'Bắt đầu miễn phí',
      },
      footer: {
        tagline: 'Không gian xem an toàn cho con, do chính ba mẹ chọn lọc mỗi ngày.',
        colExplore: 'Khám phá',
        colFamily: 'Dành cho gia đình',
        signUp: 'Đăng ký miễn phí',
        signIn: 'Đăng nhập',
        tvSetup: 'Cài đặt Android TV',
        tvStandby: 'Màn hình chờ TV',
        legal: 'Điều khoản & Bảo mật',
        rights: 'Bảo lưu mọi quyền.',
        cc:
          'Tên kênh và hình thu nhỏ YouTube xuất hiện trong ảnh minh họa thuộc về chủ sở hữu tương ứng. Kippin là công cụ giúp phụ huynh tự tổ chức nguồn xem an toàn từ YouTube và tệp lưu trữ hợp pháp của gia đình.',
      },
      tour: {
        title: '3 bước tạo không gian xem riêng cho con trên Kippin',
        closeAria: 'Đóng cửa sổ',
        tab1: '1. Tải bộ video & Chọn kênh',
        tab2: '2. Chia hồ sơ & Giờ xem',
        tab3: '3. Mở trên Smart TV & iPad',
        cap1:
          'Tải các bộ video bản quyền đã mua lên kệ chia theo Mùa/Tập và chọn nhanh từ thư viện hơn 100 kênh YouTube theo độ tuổi 2–12+.',
        cap2:
          'Tạo hồ sơ riêng cho từng anh chị em trong nhà, đặt giới hạn giờ xem tự chuyển sang màn hình nghỉ mắt và xem nhật ký từ xa.',
        cap3:
          'Thưởng thức mượt mà trên ứng dụng Smart TV phòng khách hoặc iPad — không quảng cáo xen ngang, không Shorts, không gợi ý kênh lạ.',
        alt1: 'Giao diện kệ phim Tủ Đám Mây Gia Đình chia theo Mùa/Tập',
        alt2: 'Màn hình chọn hồ sơ theo độ tuổi cho từng anh chị em trên Kippin',
        alt3: 'Giao diện Kippin trên màn hình Smart TV phòng khách',
        cta: 'Bắt đầu miễn phí',
      },
      toast: {
        prefix: 'Bản xem trước giao diện: Nút này sẽ chuyển tới ',
        suffix: ' trên kippin.app',
      },
    },

    en: {
      pageTitle: 'Kippin — A safe, calm viewing space curated by parents',
      header: {
        homeAria: 'Kippin Home',
        navAria: 'Main navigation',
        mobileNavAria: 'Mobile navigation',
        menuAria: 'Open navigation menu',
        login: 'Log In',
        signup: 'Start for Free',
      },
      nav: {
        intro: 'Overview',
        features: 'Features',
        inside: 'Inside the App',
        compare: 'Compare',
        faq: 'FAQ',
      },
      hero: {
        switcherAria: 'Preview Hero layout options',
        switcherLabel: 'Preview Hero layout:',
        opt1: 'Option 1: Contained 1140px Card',
        opt2: 'Option 2: Balanced Full-Bleed',
        title: 'A safe, calm viewing space for kids—curated by parents',
        subtitle:
          'Organize your purchased licensed video sets onto illustrated season shelves alongside trusted YouTube channels approved for every age. Zero algorithmic drift, zero ad breaks, and zero YouTube Shorts.',
        primaryCta: 'Start for Free',
        imgAlt:
          'Kippin Cozy Guardians Boro, Lumi, Kip, Pip, and Mori playing happily on a green hill under a clear sky',
      },
      video: {
        title: 'Hand over the remote with complete peace of mind',
        body:
          'Instead of worrying about autoplay drifting into unapproved channels or ad interruptions breaking focus, set up your family’s purchased video sets alongside age-appropriate language, science, history, and creative channels just once.',
        linkLabel: 'See how Kippin works in 1 minute',
        playAria: 'Open interactive Kippin walkthrough',
        imgAlt:
          'Child sitting comfortably on a sunlit living-room rug watching a favorite show on Smart TV',
      },
      features: {
        heading: 'Built around the real everyday needs of modern families',
        subheading:
          'Combine a dedicated vault for your family’s purchased licensed videos with handpicked YouTube channels from preschool to pre-teen—all in one calm space built for kids.',
        r1Tag: 'Family Cloud Vault',
        r1Title: 'Turn purchased video sets on Google Drive into your child’s private cinema',
        r1Body:
          'Many parents store purchased language courses, audiobooks, and licensed video sets on Google Drive—only to deal with plain filenames, playback stopping after one file, and download quota errors. With Kippin’s Family Cloud Vault, upload your purchased licensed videos or family memories into illustrated Season & Episode shelves that play smoothly on Smart TV and iPad, with optional 4-digit PIN links to share family folders privately with grandparents.',
        r1Alt:
          'Real Kippin Family Cloud Vault screen organizing Oxford Read & Discover licensed videos into Season 1, Season 2, and Continue Watching',
        r1Badge: 'Seasons & Episodes • Private 4-Digit PIN Family Sharing',
        r2Tag: '100% Whitelist • 100+ Channels for Ages 2–12+',
        r2Title:
          'Enjoy the best of YouTube without the algorithm—plus 100+ curated channels from preschool to pre-teen',
        r2Body:
          'Paste any YouTube channel or playlist link, or add with one tap from over 100 curated channels spanning toddlers to older kids aged 6–12+: from Numberblocks, Bluey, and Super Simple Songs to TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, and VTV7. Kippin shows only what you approve and automatically strips out 100% of Shorts, livestreams, and ads.',
        r2Alt:
          'Real Kippin Parent Dashboard showing 100+ curated YouTube channels filtered by ages 2–4, 5–7, 8–10, and 11+ including TED-Ed, Kurzgesagt, Mark Rober, and Nat Geo Kids',
        r2SubAlt:
          'Two siblings watching science and animated stories together on a tablet',
        r3Tag: 'Daily Screen-Time Limit & Series Flow',
        r3Title:
          'Gentle rest screen when time is up—and seamless episode order while watching',
        r3Body:
          'Set a daily viewing duration for each child: when time wraps up, Kippin transitions calmly to a peaceful standby screen instead of an abrupt shutoff. During viewing time, the player advances cleanly to the next episode in the same series and remembers exact watch progress.',
        r3Alt:
          'Young girl hugging a plush bunny on a sunlit sofa following a multi-episode story',
        r3SubAlt:
          'Calm Kippin Standby screen signaling eye-rest time when the daily timer finishes',
        r3Badge: 'Time’s up → Gentle Standby Screen',
        r4Tag: 'Dedicated Smart TV App',
        r4Title: 'Move kids off small phone screens onto the living-room Smart TV',
        r4Body:
          'Protect young eyes at a healthy distance with Kippin’s standalone app for Android TV and Google TV (Sony, TCL, Xiaomi, Casper, Chromecast). Kids browse their own approved library effortlessly with the TV remote—without sharing the adult YouTube app or signing a personal Google account into the family TV.',
        r4Alt:
          'Real Kippin interface on a living-room Smart TV showing Continue Watching alongside TED-Ed, Kurzgesagt, Nat Geo Kids, and Numberblocks',
        r5Tag: 'Ages 2–12+ Profiles & Remote Activity Log',
        r5Title: 'An age-right space for every sibling—and effortless visibility from afar',
        r5Body:
          'Have a 3-year-old learning phonics and a 10-year-old fascinated by space science? Under one family account, each child gets an individual profile showing only their age-matched channels and video sets. Even from the office, parents can review today’s watch log and keep settings locked behind a PIN.',
        r5Alt:
          'Daily Watch Activity Log in the Kippin Parent Dashboard tracking watched episodes and duration per child',
        r5SubAlt:
          'Individual sibling profile selector featuring Cozy Guardians Boro, Lumi, Kip, and Mori',
      },
      inside: {
        heading: 'Inside the Kippin app',
        subheading:
          'A calm, visual shelf for kids to pick favorite episodes—paired with effortless curation tools for parents across Web, iPad, and Smart TV.',
        galleryAria: 'Real screenshots inside the Kippin application',
        s1Alt:
          'Family Cloud Vault organizing purchased licensed video sets into Season 1, Season 2, and Continue Watching',
        s1Cap: 'Family Cloud Vault — Purchased Video Sets by Season & Episode',
        s2Alt:
          'Kid Home screen with Continue Watching plus TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, and Numberblocks',
        s2Cap: 'Kid Home — Spanning Preschool Through Ages 12+',
        s3Alt: 'Distraction-free TED-Ed lesson player with Up Next episodes in series',
        s3Cap: 'Distraction-Free Player — Seamless Up-Next Series Flow',
        s4Alt:
          'Curated directory of 100+ YouTube channels filtered by ages 2–4, 5–7, 8–10, and 11+',
        s4Cap: 'Parent Corner — 100+ Age-Curated YouTube Channels',
        s5Alt:
          'Batch uploading licensed .mp4 video sets into Family Cloud Vault seasons',
        s5Cap: 'Parent Corner — Batch Upload Purchased Licensed Videos (.mp4)',
        s6Alt: 'Peaceful Kippin Standby screen when daily viewing time concludes',
        s6Cap: 'Calm Standby Screen — Peaceful Daily Screen-Time Wrap-Up',
        s7Alt: 'Multi-age sibling profile selector with Boro, Lumi, Kip, and Mori',
        s7Cap: 'Multi-Age Profiles — Separate Spaces for Every Sibling',
        s8Alt: 'Daily Watch Activity Log in Parent Corner showing watched episodes',
        s8Cap: 'Parent Corner — Remote Daily Watch Activity Log',
      },
      compare: {
        heading: 'How does Kippin compare to YouTube and Google Drive?',
        subheading:
          'Bringing together curated YouTube channels and a private family cloud vault—purpose-built for children ages 2 to 12+.',
        colFeature: 'What parents actually need',
        colYt: 'Standard YouTube',
        colDrive: 'Playing from Google Drive',
        r1Label: 'Combine YouTube channels & purchased licensed videos',
        r1Kippin: 'Unified on one illustrated shelf with cover art',
        r1Yt: 'Cannot host purchased licensed sets privately (copyright blocks)',
        r1Drive: 'Plays stored files only; cannot include YouTube channels',
        r2Label: 'Play purchased licensed video sets smoothly',
        r2Kippin:
          'Organized by Channel & Season/Episode, smooth streaming with zero quota errors; 4-digit PIN sharing for grandparents',
        r2Yt: 'No private family video vault',
        r2Drive: 'Plain filenames kids struggle to pick; frequent download-quota blocks',
        r3Label: 'Control algorithms, Shorts ≤ 60s & ads',
        r3Kippin:
          '100% parent-approved channels (100+ curated for ages 2–12+), zero Shorts & zero ads',
        r3Yt: 'Algorithm pushes unapproved channels, endless Shorts & ad breaks',
        r3Drive: 'Ad-free, but zero curated channels by age group',
        r4Label: 'Series continuity & daily screen-time limit',
        r4Kippin:
          'Auto-plays next episode in order, saves progress & transitions gently to rest standby',
        r4Yt: 'Easily drifts to unrelated channels; built to maximize watch time',
        r4Drive: 'Stops cold after one file; never remembers playback position',
        r5Label: 'Living-room Smart TV experience',
        r5Kippin:
          'Standalone Smart TV app, easy remote navigation, no Google login on TV',
        r5Yt: 'Shares adult YouTube app (standalone kids TV app retired July 2024)',
        r5Drive: 'No kid-friendly TV shelf; tedious folder navigation by remote',
      },
      safety: {
        heading: '100% focused on calm, healthy childhoods',
        subheading:
          'No hidden ads, no behavioral data selling, and no algorithms engineered to keep kids glued to the screen.',
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
          'You have three quick options in the Parent Corner: add with one tap from over 100 curated YouTube channels across ages 2–4, 5–7, 8–10, and 11+; paste any YouTube channel or playlist URL; or upload your purchased licensed video sets and family memories to the Family Cloud Vault.',
        q2: 'We already store purchased licensed videos on Google Drive—how is Kippin better?',
        a2:
          'Your purchased licensed sets become an illustrated shelf organized by Season and Episode so kids can pick episodes visually, auto-advance to the next lesson, resume right where they left off, and stream smoothly on Smart TV without Google Drive quota errors. You can also generate a 4-digit PIN link to share family memory folders privately with grandparents.',
        q3: 'How does Kippin help kids wrap up screen time without tantrums?',
        a3:
          'Set a daily minute allowance for each child’s profile. When the timer finishes, Kippin transitions gently to a calm standby rest screen—signaling the end of viewing time naturally without sudden shutoffs.',
        q4: 'Are there great channels for 8–12+ year olds, or is it mostly for toddlers?',
        a4:
          'Kippin’s curated library has dedicated tiers for elementary and middle-school kids (ages 8–10 and 11+) packed with science, space, history, math, engineering, and art channels like TED-Ed, Kurzgesagt, Mark Rober, Nat Geo Kids, SciShow Kids, Art for Kids Hub, and VTV7—plus any specialized channel you paste yourself.',
        q5: 'How do we watch Kippin on our living-room Smart TV?',
        a5:
          'Install the standalone Kippin app on Android TV or Google TV (Sony, TCL, Xiaomi, Casper, Chromecast with Google TV) and link quickly from your phone—every child’s channels and vault shelves sync to the big screen without signing your personal Google account into the TV.',
        q6: 'Can kids search for unapproved channels outside our list?',
        a6:
          'Never. Search inside Kippin is strictly scoped to the channels and video sets you have approved for that specific child’s profile—never opening the wider web or suggesting outside channels.',
      },
      closing: {
        heading: 'Create a calm, joyful cinema for your child today',
        subtitle:
          'Organize your family’s purchased video sets and pick your first age-matched channels in just a few minutes.',
        primaryCta: 'Start for Free',
      },
      footer: {
        tagline: 'A safe, calm viewing space for kids—curated by parents every day.',
        colExplore: 'Explore',
        colFamily: 'For Families',
        signUp: 'Start for Free',
        signIn: 'Log In',
        tvSetup: 'Android TV Setup',
        tvStandby: 'TV Standby Screen',
        legal: 'Terms & Privacy',
        rights: 'All rights reserved.',
        cc:
          'YouTube channel names and thumbnails shown in interface previews belong to their respective owners. Kippin helps parents organize safe viewing from YouTube and lawful family media files.',
      },
      tour: {
        title: '3 steps to set up your child’s space on Kippin',
        closeAria: 'Close dialog',
        tab1: '1. Upload Sets & Pick Channels',
        tab2: '2. Sibling Profiles & Timer',
        tab3: '3. Watch on Smart TV & iPad',
        cap1:
          'Upload purchased licensed video sets into Season/Episode shelves and add from 100+ curated YouTube channels for ages 2–12+.',
        cap2:
          'Create age-matched profiles for each sibling, set daily screen-time limits with calm standby, and check watch logs remotely.',
        cap3:
          'Stream smoothly on the standalone Smart TV app or iPad—zero ad breaks, zero Shorts, and zero unapproved channel drift.',
        alt1: 'Kippin Family Cloud Vault organized by Season and Episode',
        alt2: 'Multi-age sibling profile selector inside Kippin',
        alt3: 'Kippin interface running on a living-room Smart TV',
        cta: 'Start for Free',
      },
      toast: {
        prefix: 'Design Preview: This action opens ',
        suffix: ' on kippin.app',
      },
    },
  };

  const TOUR_SLIDES = [
    { img: 'assets/app-screen-1.webp', capKey: 'tour.cap1', altKey: 'tour.alt1' },
    { img: 'assets/app-screen-7.webp', capKey: 'tour.cap2', altKey: 'tour.alt2' },
    { img: 'assets/screen-tv-whitelist.webp', capKey: 'tour.cap3', altKey: 'tour.alt3' },
  ];

  let currentLang = 'vi';
  let currentHeroOpt = '1';
  let currentTourStep = 0;
  let toastTimer = null;

  function resolveKey(dict, path) {
    return path
      .split('.')
      .reduce((acc, part) => (acc && Object.hasOwn(acc, part) ? acc[part] : null), dict);
  }

  function applyHeroOption(opt) {
    currentHeroOpt = opt === '2' ? '2' : '1';
    document.body.setAttribute('data-hero-option', currentHeroOpt);

    document.querySelectorAll('.hero-opt-btn').forEach((btn) => {
      const active = btn.getAttribute('data-hero-btn') === currentHeroOpt;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem('kippin_hero_opt', currentHeroOpt);
    } catch (_) {
      /* ignore storage errors in restricted contexts */
    }
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'vi';
    const dict = I18N[currentLang];
    document.documentElement.lang = currentLang;
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-aria'));
      if (val !== null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const val = resolveKey(dict, el.getAttribute('data-i18n-alt'));
      if (val !== null) el.setAttribute('alt', val);
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

    const openTourDialog = document.getElementById('tour-dialog');
    if (openTourDialog && openTourDialog.open) {
      renderTourStep(currentTourStep);
    }

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
    if (imgEl) {
      imgEl.src = slide.img;
      const altText = resolveKey(I18N[currentLang], slide.altKey);
      if (altText) imgEl.alt = altText;
    }
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

  // Initial query & storage detection (?lang=en|vi, ?hero=1|2)
  const params = new URLSearchParams(window.location.search);
  const queryHero = params.get('hero');
  let initialHero = '1';
  if (queryHero === '1' || queryHero === '2') {
    initialHero = queryHero;
  } else {
    try {
      const savedHero = localStorage.getItem('kippin_hero_opt');
      if (savedHero === '1' || savedHero === '2') initialHero = savedHero;
    } catch (_) {
      /* default '1' */
    }
  }
  applyHeroOption(initialHero);

  // Hero Option 1 / Option 2 live switcher buttons
  document.querySelectorAll('.hero-opt-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextOpt = btn.getAttribute('data-hero-btn');
      applyHeroOption(nextOpt);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('hero', currentHeroOpt);
        window.history.replaceState({}, '', url.toString());
      } catch (_) {
        /* ignore replaceState in restricted origins */
      }
    });
  });

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
