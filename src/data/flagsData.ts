export interface FlagQuestion {
  id: string;
  countryName: string;
  countryNameEn: string;
  countryCode: string; // ISO 2-letter for flagcdn
  flagUrl: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
    isCorrect: boolean;
  }[];
  clues: [
    { level: 'Dễ (Màu sắc & Bố cục)'; hint: string },
    { level: 'Trung bình (Biểu tượng đặc trưng)'; hint: string },
    { level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)'; hint: string }
  ];
  sheldonCorrectComment: string;
  sheldonIncorrectComment: string;
  vexillologyFact: string;
  funFactSnippet: string;
}

export const SHELDON_INTROS = [
  "Chào mừng quý vị khán giả đến với 'Tiến sĩ Sheldon Cooper và Tiến sĩ Amy Farrah Fowler hân hạnh giới thiệu: Sheldon Cooper Vui cùng Quốc kỳ' (Sheldon Cooper's Fun with Flags)! Tôi là Tiến sĩ Sheldon Cooper, Nhà Vật lý Lý thuyết xuất chúng của Học viện Công nghệ California (Caltech). Hôm nay, chúng ta sẽ bắt đầu một hành trình khai sáng thị giác thông qua bộ môn khoa học tuyệt mỹ: Vexillology (Kỳ học - khoa học nghiên cứu về cờ). Hãy chứng minh với tôi rằng bộ não của bạn không chỉ dùng để điều khiển các cơ quan nội tạng!",
  "Xin chào những tâm hồn khao khát tri thức! Đây là 'Fun with Flags'. Hôm nay, bạn gái tôi - Tiến sĩ Amy Farrah Fowler đang bận phân tích thùy trán của loài gặm nhấm, nên tôi sẽ độc quyền dẫn dắt bạn qua những mảnh vải chứa đựng linh hồn của các nền văn minh. Cố gắng đừng làm tôi thất vọng như cách Penny làm thất vọng các giáo viên trung học của cô ấy nhé!",
  "Bazinga! Chào mừng trở lại với chương trình phát sóng trên web hấp dẫn nhất vũ trụ có thể quan sát được: 'Vui cùng Quốc kỳ cùng Tiến sĩ Sheldon Cooper'. Hãy thắt dây an toàn trí tuệ lại, vì kỳ học hôm nay sẽ thách thức mọi tế bào thần kinh của bạn!"
];

export const SHELDON_BAZINGA_JOKES = [
  "Bạn có biết tại sao cờ Thụy Sĩ lại có hình vuông và dấu cộng màu trắng không? Bởi vì dấu cộng mang lại cảm giác tích cực, và người Thụy Sĩ ghét những đường viền không cân đối! Bazinga!",
  "Leonard từng nói với tôi rằng môn Kỳ học nhàm chán hơn việc xem sơn khô. Thế là tôi đã dán cờ Mozambique lên cửa phòng cậu ấy suốt 3 tuần! Bazinga!",
  "Bạn có biết cờ Nepal là lá cờ duy nhất không phải hình chữ nhật? Phải mất 24 bước tính toán hình học Euclide trong Hiến pháp năm 1990 chỉ để vẽ ra nó! Quá đỗi hoàn mỹ!",
  "Nếu bạn nghĩ cờ chỉ là một tấm giẻ rách trên cột sắt, xin hãy tự cách ly mình khỏi xã hội văn minh ngay lập tức! Bazinga!",
  "Quốc kỳ duy nhất hiện nay không có màu đỏ, trắng hoặc xanh lam là Jamaica. Giờ thì bạn thông minh hơn 87% cư dân tại Pasadena rồi đấy!"
];

export const SHELDON_APPROVAL_TIERS = [
  { minScore: 0, title: "Cấp độ Penny", desc: "Bạn có chắc bạn không nhầm cờ với khăn trải bàn nhà hàng Cheesecake Factory không?", icon: "🧀" },
  { minScore: 20, title: "Cấp độ Howard Wolowitz", desc: "Chỉ là một kỹ sư có bằng Thạc sĩ. Khá hơn người thường một chút, nhưng chưa đủ để bay vào vũ trụ tri thức của tôi.", icon: "🚀" },
  { minScore: 50, title: "Cấp độ Rajesh Koothrappali", desc: "Có hiểu biết nhất định về các chòm sao trên cờ Brazil, nhưng vẫn còn lúng túng khi đối mặt với cờ châu Phi.", icon: "🔭" },
  { minScore: 90, title: "Cấp độ Leonard Hofstadter", desc: "Vật lý thực nghiệm tạm chấp nhận được. Bạn có thể là bạn cùng phòng của tôi... sau khi ký thỏa thuận 140 trang.", icon: "👓" },
  { minScore: 140, title: "Cấp độ Tiến sĩ Amy Farrah Fowler", desc: "Tuyệt vời! Bạn sở hữu một cấu trúc vỏ não vận động kỳ học xuất sắc xứng đáng làm đồng dẫn chương trình!", icon: "🔬" },
  { minScore: 200, title: "Cấp độ Tiến sĩ Sheldon Cooper", desc: "Kinh ngạc! Bạn vừa đạt đến cảnh giới Vexillologist tối thượng! Bazinga! Hãy nhận một tràng pháo tay danh dự từ tôi!", icon: "👑" },
];

export const FLAGS_DATASET: FlagQuestion[] = [
  {
    id: "flag-nepal",
    countryName: "Nepal",
    countryNameEn: "Nepal",
    countryCode: "np",
    flagUrl: "https://flagcdn.com/np.svg",
    options: [
      { letter: 'A', text: 'Bhutan', isCorrect: false },
      { letter: 'B', text: 'Nepal', isCorrect: true },
      { letter: 'C', text: 'Tây Tạng', isCorrect: false },
      { letter: 'D', text: 'Myanmar', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ màu đỏ thẫm (crimson) viền xanh lam đậm. Điểm chấn động nhất: Đây là quốc kỳ duy nhất trên thế giới KHÔNG PHẢI hình tứ giác!'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Gồm hai hình tam giác xếp chồng lên nhau, tam giác phía trên chứa biểu tượng mặt trăng lưỡi liềm trắng tỏa 8 tia sáng, tam giác dưới chứa mặt trời trắng 12 tia sáng.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Hình dáng biểu thị hai đỉnh dãy Himalaya hùng vĩ. Hiến pháp nước này dành riêng một phụ lục toán học phức tạp gồm 24 bước hình học thước kẻ và compa để dựng chuẩn tỷ lệ cờ!'
      }
    ],
    sheldonCorrectComment: "Chính xác tuyệt đối! Bazinga! Bạn biết đấy, tỷ lệ toán học phi chữ nhật của cờ Nepal là một trong những kiệt tác hình học vĩ đại nhất của nhân loại. Tôi đoán ngay cả Leonard cũng phải mất ít nhất 3 ngày để tính chu vi của nó!",
    sheldonIncorrectComment: "Trời đất ơi! Sai một cách thê thảm! Bạn vừa nhầm lẫn cờ Nepal duy nhất trên hành tinh này sao? Cờ của nó không có 4 góc vuông! Một đứa trẻ lớp mẫu giáo cũng nhận ra sự khác biệt hình học cơ bản này!",
    vexillologyFact: "Quốc kỳ Nepal là quốc kỳ duy nhất trên thế giới không có dạng hình chữ nhật hoặc hình vuông. Màu đỏ thẫm là màu của hoa đỗ quyên (quốc hoa), còn viền xanh biểu trưng cho hòa bình.",
    funFactSnippet: "Năm 1962, Nepal đã đưa hẳn công thức dựng hình học Euclide của lá cờ vào Điều 5 của Hiến pháp, đảm bảo bất kỳ nhà toán học nào cũng có thể vẽ chính xác tuyệt đối."
  },
  {
    id: "flag-mozambique",
    countryName: "Mozambique",
    countryNameEn: "Mozambique",
    countryCode: "mz",
    flagUrl: "https://flagcdn.com/mz.svg",
    options: [
      { letter: 'A', text: 'Angola', isCorrect: false },
      { letter: 'B', text: 'Zimbabwe', isCorrect: false },
      { letter: 'C', text: 'Mozambique', isCorrect: true },
      { letter: 'D', text: 'Namibia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Bố cục gồm ba dải màu ngang chính: xanh lá cây, đen (viền trắng) và vàng, kèm theo một tam giác màu đỏ ở phía cán cờ.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Trong tam giác đỏ có ngôi sao vàng năm cánh, trên đó là một cuốn sách mở, chiếc cuốc nông nghiệp và một khẩu súng trường tấn công hiện đại có gắn lưỡi lê!'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Đây là quốc kỳ duy nhất của một quốc gia thành viên Liên Hợp Quốc khắc họa rõ nét khẩu súng trường tấn công tự động AK-47 (Kalashnikov) của Liên Xô, biểu thị tinh thần quốc phòng và đấu tranh giành độc lập.'
      }
    ],
    sheldonCorrectComment: "Chính xác! Mozambique! Một khẩu súng trường AK-47, một chiếc cuốc và một cuốn sách. Sự kết hợp độc nhất vô nhị giữa quốc phòng, nông nghiệp và giáo dục. Thật đáng khen khi bạn không nhầm với Angola!",
    sheldonIncorrectComment: "Sai rồi! Có phải bạn vừa đoán mò không? Hãy nhìn kỹ lại đi: Quốc kỳ duy nhất khắc họa khẩu AK-47 mà bạn cũng không nhớ thì làm sao phân biệt được các hạt hạ nguyên tử trong máy gia tốc Large Hadron Collider?",
    vexillologyFact: "Khẩu súng AK-47 tượng trưng cho sự cảnh giác và phòng thủ đất nước; cuốn sách tượng trưng cho tầm quan trọng của giáo dục; chiếc cuốc tượng trưng cho nền nông nghiệp tổ quốc.",
    funFactSnippet: "Từng có nhiều cuộc tranh luận trong quốc hội Mozambique về việc loại bỏ khẩu AK-47 khỏi quốc kỳ để hướng tới hòa bình, nhưng đến nay biểu tượng này vẫn được người dân giữ lại."
  },
  {
    id: "flag-bhutan",
    countryName: "Bhutan",
    countryNameEn: "Bhutan",
    countryCode: "bt",
    flagUrl: "https://flagcdn.com/bt.svg",
    options: [
      { letter: 'A', text: 'Bhutan', isCorrect: true },
      { letter: 'B', text: 'Wales', isCorrect: false },
      { letter: 'C', text: 'Sri Lanka', isCorrect: false },
      { letter: 'D', text: 'Mông Cổ', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Lá cờ được chia đôi theo đường chéo từ góc dưới bên trái lên góc trên bên phải, gồm hai nửa màu vàng nghệ và màu cam đỏ rực rỡ.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa đường chéo là một sinh vật thần thoại màu trắng vĩ đại đang sải dài cơ thể, móng vuốt nắm chặt bốn viên ngọc quý tỏa sáng.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Sinh vật này là Rồng Sấm Druk (Druk Gyalpo) trong truyền thuyết Phật giáo Tây Tạng, tượng trưng cho tên gọi bản địa của đất nước này: Druk Yul - Vùng đất của Rồng Sấm!'
      }
    ],
    sheldonCorrectComment: "Xuất sắc! Đó chính là Vương quốc Bhutan! Rồng Sấm Druk cầm những viên ngọc mani đại diện cho sự thịnh vượng và bảo hộ. Tôi rất thích Bhutan, bởi họ đo lường Tổng Hạnh phúc Quốc gia thay vì GDP tầm thường!",
    sheldonIncorrectComment: "Ôi trời ơi, sai rồi! Bạn thấy rồng mà nghĩ ngay đến Xứ Wales sao? Rồng của Xứ Wales màu đỏ trên nền xanh trắng, còn đây là Rồng Sấm Druk màu trắng trên nền vàng cam của Bhutan! Thật nông cạn!",
    vexillologyFact: "Màu vàng trên cờ biểu thị quyền lực thế tục của Quốc vương, màu cam đỏ biểu thị truyền thống tâm linh Phật giáo Drukpa Kagyu, và chú rồng trắng thuần khiết không tì vết thể hiện lòng trung thành của nhân dân.",
    funFactSnippet: "Bốn viên ngọc trong móng vuốt của Rồng Druk thể hiện sự giàu có và an ninh trọn vẹn của vương quốc vùng Himalaya này."
  },
  {
    id: "flag-seychelles",
    countryName: "Seychelles",
    countryNameEn: "Seychelles",
    countryCode: "sc",
    flagUrl: "https://flagcdn.com/sc.svg",
    options: [
      { letter: 'A', text: 'Mauritius', isCorrect: false },
      { letter: 'B', text: 'Cộng hòa Trung Phi', isCorrect: false },
      { letter: 'C', text: 'Seychelles', isCorrect: true },
      { letter: 'D', text: 'Vanuatu', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Gồm 5 dải màu sặc sỡ: xanh dương, vàng, đỏ, trắng, xanh lá cây, tất cả cùng tỏa ra theo dạng rẻ quạt từ một điểm duy nhất ở góc dưới bên trái.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Không có huy hiệu hay động vật phức tạp, nhưng các dải màu xiên chéo tạo cảm giác chuyển động quang học năng động hướng về tương lai.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Được thông qua năm 1996 tại một đảo quốc Ấn Độ Dương. Màu sắc biểu trưng cho bầu trời và đại dương (xanh), ánh mặt trời ban sự sống (vàng), con người và quyết tâm làm việc (đỏ), công lý (trắng) và thảm thực vật trù phú (xanh lá).'
      }
    ],
    sheldonCorrectComment: "Bazinga! Chính xác là Seychelles! Bố cục 5 dải màu tỏa xiên của nó thỏa mãn các nguyên tắc quang học và động lực học một cách ngoạn mục. Tôi thậm chí đã cân nhắc may một chiếc áo thun Flash dựa trên góc nghiêng này!",
    sheldonIncorrectComment: "Sai bét! Đó là Seychelles - một trong những lá cờ rực rỡ và dễ nhận diện nhất trên Ấn Độ Dương. Đừng nói với tôi bạn nhầm nó với vạch kẻ kiểm tra màn hình TV cổ lỗ sĩ đấy nhé!",
    vexillologyFact: "Thiết kế này được áp dụng từ ngày 18 tháng 6 năm 1996. Dải màu xòe ra tượng trưng cho một quốc gia trẻ trung, năng động đang tiến bước về tương lai.",
    funFactSnippet: "Seychelles là quốc gia nhỏ nhất châu Phi theo diện tích và dân số, nhưng lá cờ của họ lại có thiết kế táo bạo bậc nhất lục địa đen."
  },
  {
    id: "flag-dominica",
    countryName: "Dominica",
    countryNameEn: "Dominica",
    countryCode: "dm",
    flagUrl: "https://flagcdn.com/dm.svg",
    options: [
      { letter: 'A', text: 'Dominica', isCorrect: true },
      { letter: 'B', text: 'Cộng hòa Dominica', isCorrect: false },
      { letter: 'C', text: 'Grenada', isCorrect: false },
      { letter: 'D', text: 'Saint Lucia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ màu xanh lục với cây thánh giá ba màu (vàng, đen, trắng), ở tâm là một đĩa tròn màu đỏ bao quanh bởi 10 ngôi sao xanh lá.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa đĩa đỏ là hình ảnh một chú vẹt Sisserou quý hiếm đang đậu trên cành cây hướng về bên trái.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Hãy chú ý lông ngực của chú vẹt: Đây là một trong hai quốc kỳ duy nhất trên toàn thế giới có chứa màu TÍM (màu cực hiếm trong lịch sử sản xuất thuốc nhuộm cờ)!'
      }
    ],
    sheldonCorrectComment: "Đúng rồi! Dominica! Và hãy nhớ phân biệt rõ giữa Thịnh vượng chung Dominica và Cộng hòa Dominica, trừ khi bạn muốn tôi bắt bạn viết bản kiểm điểm địa lý dài 50 trang!",
    sheldonIncorrectComment: "Ôi trời ơi! Đừng bao giờ nhầm Dominica với Cộng hòa Dominica! Và đặc biệt, màu TÍM trên ngực chú vẹt Sisserou là chi tiết hiếm nhất trong toàn bộ giới Vexillology! Bạn làm tôi thất vọng quá!",
    vexillologyFact: "Màu tím từng cực kỳ đắt đỏ vì được chiết xuất từ ốc ốc gai biển (murex snail), khiến hầu như không quốc gia nào dùng màu tím trên quốc kỳ. Dominica là ngoại lệ đặc biệt nhờ vẹt Sisserou.",
    funFactSnippet: "10 ngôi sao xanh lá cây viền quanh chú vẹt đại diện cho 10 giáo xứ (parishes) của hòn đảo này."
  },
  {
    id: "flag-switzerland",
    countryName: "Thụy Sĩ",
    countryNameEn: "Switzerland",
    countryCode: "ch",
    flagUrl: "https://flagcdn.com/ch.svg",
    options: [
      { letter: 'A', text: 'Đan Mạch', isCorrect: false },
      { letter: 'B', text: 'Thụy Sĩ', isCorrect: true },
      { letter: 'C', text: 'Na Uy', isCorrect: false },
      { letter: 'D', text: 'Áo', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền màu đỏ tươi với một dấu chữ thập màu trắng đậm ở chính giữa. Tỷ lệ lá cờ là 1:1 (hình vuông chuẩn xác).'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Bốn nhánh của chữ thập trắng đều có chiều dài lớn hơn chiều rộng đúng 1/6 theo quy định lập pháp liên bang!'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Cùng với Vatican, đây là một trong hai quốc gia có chủ quyền duy nhất trên thế giới sở hữu quốc kỳ chính thức hình vuông hoàn hảo.'
      }
    ],
    sheldonCorrectComment: "Chính xác! Thụy Sĩ! Một hình vuông 1:1 đối xứng tuyệt đối. Thiết kế này mang lại cho hệ thần kinh của tôi sự thanh thản kỳ lạ, không giống như sự hỗn loạn mất cân đối trong căn hộ của Penny!",
    sheldonIncorrectComment: "Bạn đùa tôi đấy à? Nhầm cờ Thụy Sĩ? Dấu thập đỏ quốc tế (Red Cross) thực chất là màu đảo ngược của lá cờ này để vinh danh người sáng lập Henri Dunant đấy!",
    vexillologyFact: "Quốc kỳ Thụy Sĩ bắt nguồn từ cờ trận thời Trung cổ của bang Schwyz. Chỉ trên biển (thương thuyền hàng hải), Thụy Sĩ mới dùng cờ hình chữ nhật 2:3 theo luật quốc tế.",
    funFactSnippet: "Năm 2017, Luật Bảo vệ Quốc kỳ Thụy Sĩ quy định nghiêm ngặt về tông màu đỏ 'Swiss Red' nhằm tránh việc các nhãn hàng sô cô la làm sai lệch màu cờ."
  },
  {
    id: "flag-vatican",
    countryName: "Vatican",
    countryNameEn: "Vatican City",
    countryCode: "va",
    flagUrl: "https://flagcdn.com/va.svg",
    options: [
      { letter: 'A', text: 'San Marino', isCorrect: false },
      { letter: 'B', text: 'Malta', isCorrect: false },
      { letter: 'C', text: 'Monaco', isCorrect: false },
      { letter: 'D', text: 'Thành Vatican', isCorrect: true },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Lá cờ hình vuông tỷ lệ 1:1, chia dọc thành hai dải màu bằng nhau: bên trái vàng kim (gold/yellow), bên phải trắng bạc (silver/white).'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Ở nửa màu trắng có hai chiếc chìa khóa bắt chéo buộc dây đỏ, phía trên đội chiếc mũ miện Giáo hoàng (Tiara) ba tầng.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: "Hai chiếc chìa khóa đại diện cho 'Chìa khóa Nước Trời' trao cho Thánh Phêrô (Peter) - một bằng vàng mở thiên đường và một bằng bạc mở thế gian."
      }
    ],
    sheldonCorrectComment: "Bazinga! Tòa thánh Vatican! Bạn có để ý hai màu vàng và trắng đặt cạnh nhau đã phá vỡ 'Quy tắc màu sắc' (Rule of tincture) kinh điển trong huy hiệu học không? Kim loại không được đặt cạnh kim loại, nhưng Giáo hoàng không quan tâm!",
    sheldonIncorrectComment: "Sai rồi! Đó là Thành Vatican - quốc gia có diện tích nhỏ nhất thế giới nằm trọn trong lòng Roma. Cố gắng ghi nhớ chiếc chìa khóa của Thánh Peter nhé!",
    vexillologyFact: "Quy tắc màu sắc (Rule of Tincture) trong huy hiệu học cấm đặt kim loại (vàng/bạc) đè lên nhau, nhưng cờ Vatican và cờ Vương quốc Jerusalem thời Thập Tự Chinh là hai ngoại lệ nổi tiếng nhất.",
    funFactSnippet: "Nhiều trang web và thậm chí emoji từng vẽ sai quốc kỳ Vatican vì nhầm lẫn chi tiết chỏm đế của vương miện giáo hoàng!"
  },
  {
    id: "flag-isle-of-man",
    countryName: "Đảo Man (Isle of Man)",
    countryNameEn: "Isle of Man",
    countryCode: "im",
    flagUrl: "https://flagcdn.com/im.svg",
    options: [
      { letter: 'A', text: 'Malta', isCorrect: false },
      { letter: 'B', text: 'Đảo Man (Isle of Man)', isCorrect: true },
      { letter: 'C', text: 'Sicily', isCorrect: false },
      { letter: 'D', text: 'Gibraltar', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ hoàn toàn màu đỏ thẫm rực rỡ, chính giữa có một biểu tượng kim loại kỳ lạ trông như ba chân người.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Biểu tượng đó là Triskelion (Tam túc) gồm 3 chiếc chân mặc áo giáp sắt trắng, gắn cựa vàng ở gót, co gập khớp gối và nối vào nhau ở hông.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: "Khẩu hiệu gắn liền với biểu tượng này là: 'Quocunque jeceris stabit' (Dù bạn ném nó đi đâu, nó vẫn sẽ đứng vững trên đôi chân)."
      }
    ],
    sheldonCorrectComment: "Chính xác! Đảo Man! Biểu tượng Triskelion ba chân bọc giáp quay vòng đối xứng bậc 3 (rotational symmetry C3). Về mặt vật lý học, mô men quán tính của nó xoay cực kỳ ổn định!",
    sheldonIncorrectComment: "Sai lầm đáng xấu hổ! Ba chiếc chân bọc thép chạy vòng tròn độc nhất vô nhị mà bạn cũng không biết ư? Đó là Isle of Man, hòn đảo thuộc Vương quyền Anh nổi tiếng với giải đua xe máy nguy hiểm nhất hành tinh TT!",
    vexillologyFact: "Biểu tượng Triskelion có nguồn gốc từ thần thoại Celtic và Bắc Âu cổ đại, xuất hiện trên đồng tiền và con dấu của các vị vua người Viking thống trị hòn đảo này từ thế kỷ 13.",
    funFactSnippet: "Dù bạn lật lá cờ sang mặt sau hay mặt trước, quy định kỳ học của Đảo Man yêu cầu ba chiếc chân giáp luôn phải chạy theo chiều kim đồng hồ."
  },
  {
    id: "flag-brazil",
    countryName: "Brazil",
    countryNameEn: "Brazil",
    countryCode: "br",
    flagUrl: "https://flagcdn.com/br.svg",
    options: [
      { letter: 'A', text: 'Colombia', isCorrect: false },
      { letter: 'B', text: 'Brazil', isCorrect: true },
      { letter: 'C', text: 'Argentina', isCorrect: false },
      { letter: 'D', text: 'Bolivia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền xanh lá cây tươi tốt với một hình thoi lớn màu vàng ở trung tâm, bên trong hình thoi là một quả cầu màu xanh thẫm.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: "Quả cầu xanh có một dải băng trắng uốn lượn mang dòng chữ phương châm bằng tiếng Bồ Đào Nha: 'ORDEM E PROGRESSO' (Trật tự và Tiến bộ)."
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Các ngôi sao trên quả cầu thể hiện chính xác bầu trời thiên văn đêm nhìn từ Rio de Janeiro lúc 8:30 sáng ngày 15/11/1889, ngày thành lập nền cộng hòa!'
      }
    ],
    sheldonCorrectComment: "Bravo! Brazil! Khẩu hiệu 'Trật tự và Tiến bộ' lấy cảm hứng từ triết học Thực chứng của Auguste Comte: 'Tình yêu làm nguyên lý, Trật tự làm nền tảng, Tiến bộ làm mục đích'. Một tâm hồn khoa học không thể không yêu lá cờ này!",
    sheldonIncorrectComment: "Sai! Bạn vừa chọn nhầm lá cờ Brazil với 27 ngôi sao đại diện cho 26 bang và 1 đặc khu liên bang. Tôi hy vọng kiến thức thiên văn của bạn không tệ đến mức không nhận ra chòm sao Nam Thập Tự!",
    vexillologyFact: "Các ngôi sao trên cờ Brazil gồm chòm sao Nam Thập Tự (Crux), Thiên Cáp, Thiên Lang, Bọ Cạp... được vẽ theo góc nhìn của một người quan sát từ bên ngoài thiên cầu nhìn vào.",
    funFactSnippet: "Mỗi khi Brazil thành lập một bang mới, luật quy định cờ phải được sửa đổi để thêm một ngôi sao tương ứng, tương tự như cờ Mỹ."
  },
  {
    id: "flag-canada",
    countryName: "Canada",
    countryNameEn: "Canada",
    countryCode: "ca",
    flagUrl: "https://flagcdn.com/ca.svg",
    options: [
      { letter: 'A', text: 'Canada', isCorrect: true },
      { letter: 'B', text: 'Peru', isCorrect: false },
      { letter: 'C', text: 'Áo', isCorrect: false },
      { letter: 'D', text: 'Liban', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Gồm hai sọc đỏ ở hai bên và một khoảng trắng hình vuông rộng gấp đôi ở giữa (gọi là Canadian Pale).'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa nền trắng là một chiếc lá cây phong (Maple leaf) màu đỏ cách điệu với 11 đỉnh nhọn.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Lá phong ban đầu có 13 đỉnh, nhưng các nhà khoa học đã đưa nó vào hầm gió khí động học và nhận thấy mẫu 11 đỉnh ít bị mờ nhòe nhất khi gió thổi mạnh!'
      }
    ],
    sheldonCorrectComment: "Đúng rồi! Canada! Thí nghiệm hầm gió khí động học của Hội đồng Nghiên cứu Quốc gia Canada để tìm ra số đỉnh lá phong tối ưu là minh chứng cho thấy: Không có gì hoàn hảo nếu thiếu bàn tay của Vật lý học!",
    sheldonIncorrectComment: "Thật không thể tin nổi! Bạn không nhận ra lá phong Canada? Ngay cả một con gấu Bắc cực say ngủ cũng biết điều này!",
    vexillologyFact: "Lá cờ Đại phong (The Great Canadian Flag Debate) đã gây ra cuộc tranh luận nảy lửa kéo dài nhiều tháng tại Quốc hội Canada trước khi được Nữ hoàng Elizabeth II phê chuẩn năm 1965.",
    funFactSnippet: "Tỷ lệ 1:2 với ô trắng ở giữa có kích thước bằng cả hai ô đỏ cộng lại được Hội đồng Kỳ học quốc tế đặt tên riêng là 'Canadian Pale'."
  },
  {
    id: "flag-south-africa",
    countryName: "Nam Phi",
    countryNameEn: "South Africa",
    countryCode: "za",
    flagUrl: "https://flagcdn.com/za.svg",
    options: [
      { letter: 'A', text: 'Vanuatu', isCorrect: false },
      { letter: 'B', text: 'Nam Phi', isCorrect: true },
      { letter: 'C', text: 'Jamaica', isCorrect: false },
      { letter: 'D', text: 'Zimbabwe', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Một trong những lá cờ sặc sỡ nhất với 6 màu: đỏ, xanh lam, xanh lục, đen, vàng và trắng.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: "Có dải màu xanh lá cây hình chữ 'Y' nằm ngang phân nhánh từ phía cán cờ và chạy dài về phía đuôi cờ."
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Được thiết kế bởi Fred Brownell để thay thế cờ thời Apartheid nhân dịp Nelson Mandela đắc cử năm 1994, tượng trưng cho sự hội tụ của nhiều sắc tộc thành một khối thống nhất.'
      }
    ],
    sheldonCorrectComment: "Chính xác! Nam Phi - Quốc gia Cầu vồng! Ban đầu lá cờ này chỉ dự định dùng tạm thời trong cuộc bầu cử 1994, nhưng vì nó quá đẹp và hài hòa nên người dân đã giữ lại vĩnh viễn. Một thắng lợi của nghệ thuật thị giác!",
    sheldonIncorrectComment: "Sai bét! Đó là Nam Phi! Làm sao bạn có thể nhầm lẫn chữ Y hội tụ màu xanh lục rực rỡ này được chứ? Howard chắc chắn sẽ đồng cảm với sự nhầm lẫn ngớ ngẩn này của bạn.",
    vexillologyFact: "Tại thời điểm được thông qua, đây là quốc kỳ duy nhất trên thế giới có tới 6 màu mà không cần dùng đến bất kỳ huy hiệu hay hình vẽ chi tiết nào.",
    funFactSnippet: "Màu cờ kết hợp các màu sắc lịch sử của người Boer (Hà Lan/Anh: đỏ, trắng, xanh) và màu của phong trào ANC (đen, xanh lục, vàng)."
  },
  {
    id: "flag-jamaica",
    countryName: "Jamaica",
    countryNameEn: "Jamaica",
    countryCode: "jm",
    flagUrl: "https://flagcdn.com/jm.svg",
    options: [
      { letter: 'A', text: 'Jamaica', isCorrect: true },
      { letter: 'B', text: 'Tanzania', isCorrect: false },
      { letter: 'C', text: 'Bahamas', isCorrect: false },
      { letter: 'D', text: 'Grenada', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Gồm một chữ thập chéo màu vàng kim (Saltire) chia cờ thành 4 tam giác: hai tam giác trên/dưới màu xanh lục, hai tam giác hai bên màu đen.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: "Ý nghĩa khẩu hiệu: 'Khó khăn vẫn có, nhưng mặt trời luôn chiếu rọi và đất đai mãi xanh tươi'."
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Kể từ khi Mauritania đổi cờ năm 2017, Jamaica là quốc gia có chủ quyền DUY NHẤT trên Trái Đất mà quốc kỳ KHÔNG có bất kỳ màu nào trong 3 màu đỏ, trắng hoặc xanh lam!'
      }
    ],
    sheldonCorrectComment: "Bazinga! Jamaica! Đây là câu đố vexillological kinh điển mà tôi thường dùng để bẫy những kẻ tự nhận mình là thiên tài! Không đỏ, không trắng, không xanh lam - một sự độc lập màu sắc thuần khiết!",
    sheldonIncorrectComment: "Sai rồi! Đáp án là Jamaica! Bạn vừa bỏ qua sự thật kỳ học nổi tiếng nhất thế kỷ 21: Lá cờ duy nhất nói KHÔNG với bộ ba màu đỏ-trắng-xanh lam phổ biến!",
    vexillologyFact: "Màu đen tượng trưng cho sức mạnh và sự kiên cường của nhân dân; màu vàng tượng trưng cho ánh nắng và nguồn tài nguyên thiên nhiên; màu xanh lục tượng trưng cho nông nghiệp trù phú.",
    funFactSnippet: "Trước năm 2017, Mauritania cũng không có màu đỏ, trắng, xanh; nhưng sau khi họ thêm hai sọc đỏ vào cờ, Jamaica chính thức trở thành quốc gia duy nhất giữ kỷ lục này."
  },
  {
    id: "flag-south-korea",
    countryName: "Hàn Quốc",
    countryNameEn: "South Korea",
    countryCode: "kr",
    flagUrl: "https://flagcdn.com/kr.svg",
    options: [
      { letter: 'A', text: 'Nhật Bản', isCorrect: false },
      { letter: 'B', text: 'Hàn Quốc', isCorrect: true },
      { letter: 'C', text: 'Đài Loan', isCorrect: false },
      { letter: 'D', text: 'Singapore', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ màu trắng tinh khiết, ở trung tâm là hình tròn Thái Cực hai nửa đỏ và xanh dương lượn sóng.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Bốn góc xung quanh có 4 quẻ Bát quái màu đen gồm các vạch liền và vạch đứt (Càn, Khôn, Khảm, Ly).'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Tên gọi của lá cờ là Taegeukgi. 4 quẻ đại diện cho 4 nguyên tố: Trời (Càn), Đất (Khôn), Nước (Khảm), Lửa (Ly), vận hành theo triết lý cân bằng nhị phân của Kinh Dịch!'
      }
    ],
    sheldonCorrectComment: "Rất tốt! Taegeukgi của Hàn Quốc! Các vạch liền và đứt của 4 quẻ quái thực chất là hệ thống số nhị phân nguyên thủy cổ xưa. Là một nhà khoa học, tôi đánh giá cao logic toán học này!",
    sheldonIncorrectComment: "Không đúng! Đó là Taegeukgi của Hàn Quốc! Bạn không thể nhận ra vòng tròn Âm Dương Thái Cực và 4 quẻ bát quái sao? Đừng nói là bạn nghĩ đây là logo của hãng nước ngọt Pepsi nhé!",
    vexillologyFact: "Nền trắng tượng trưng cho sự trong sạch, hòa bình và màu áo trắng truyền thống của người Triều Tiên. Thái cực đỏ (Dương) và xanh (Âm) thể hiện sự hài hòa vĩnh cửu của vũ trụ.",
    funFactSnippet: "Góc nghiêng chính xác của đường phân chia Thái cực và khoảng cách giữa các vạch quẻ đen được quy định chi tiết đến từng milimét trong Pháp lệnh Quốc kỳ Hàn Quốc."
  },
  {
    id: "flag-albania",
    countryName: "Albania",
    countryNameEn: "Albania",
    countryCode: "al",
    flagUrl: "https://flagcdn.com/al.svg",
    options: [
      { letter: 'A', text: 'Montenegro', isCorrect: false },
      { letter: 'B', text: 'Serbia', isCorrect: false },
      { letter: 'C', text: 'Albania', isCorrect: true },
      { letter: 'D', text: 'Bắc Macedonia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ hoàn toàn là một màu đỏ thẫm rực lửa, không có sọc hay đường phân chia nào.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa nổi bật một con đại bàng hai đầu màu đen tuyền đang giương cánh kiêu hãnh.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Bắt nguồn từ con dấu của người anh hùng dân tộc Gjergj Kastrioti Skanderbeg ở thế kỷ 15, người đã lãnh đạo cuộc kháng chiến chống lại Đế quốc Ottoman.'
      }
    ],
    sheldonCorrectComment: "Chính xác! Albania - 'Vùng đất của những chú Đại bàng' (Shqipëria)! Đại bàng hai đầu nhìn về hai hướng Đông và Tây kế thừa từ di sản Đế chế Byzantine cổ kính. Một lựa chọn thẩm mỹ đầy uy lực!",
    sheldonIncorrectComment: "Sai rồi! Đó là Albania! Một con đại bàng hai đầu đen ngòm trên nền đỏ thắm nổi bật đến vậy mà bạn cũng để tuột mất điểm số sao?",
    vexillologyFact: "Người Albania gọi đất nước của mình là Shqipëria, nghĩa đen là 'Đất nước của chim đại bàng'. Lá cờ này đã tồn tại qua nhiều thế kỷ và nhiều chế độ chính trị.",
    funFactSnippet: "Trong thời kỳ Xã hội chủ nghĩa, lá cờ từng được thêm một ngôi sao vàng viền đỏ phía trên đầu đại bàng, trước khi quay lại mẫu cờ truyền thống thuần túy năm 1992."
  },
  {
    id: "flag-kiribati",
    countryName: "Kiribati",
    countryNameEn: "Kiribati",
    countryCode: "ki",
    flagUrl: "https://flagcdn.com/ki.svg",
    options: [
      { letter: 'A', text: 'Fiji', isCorrect: false },
      { letter: 'B', text: 'Kiribati', isCorrect: true },
      { letter: 'C', text: 'Tuvalu', isCorrect: false },
      { letter: 'D', text: 'Samoa', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nửa trên màu đỏ, nửa dưới gồm 6 dải sóng lượn màu trắng và xanh lam xen kẽ tượng trưng cho đại dương.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Một vầng mặt trời màu vàng với 17 tia sáng đang mọc lên từ những ngọn sóng, và một cánh chim biển màu vàng bay lượn phía trên.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Loài chim vàng đó là chim Cốc biển (Frigatebird), tượng trưng cho sự tự do và sức mạnh làm chủ biển khơi của đảo quốc trải dài trên 4 bán cầu Trái Đất này.'
      }
    ],
    sheldonCorrectComment: "Bazinga! Kiribati! Bạn có biết rằng Kiribati là quốc gia duy nhất trên thế giới có lãnh thổ nằm ở cả 4 bán cầu: Bắc, Nam, Đông và Tây không? Tọa độ địa lý của họ thú vị hệt như lá cờ này vậy!",
    sheldonIncorrectComment: "Sai rồi! Đó là Kiribati ở Thái Bình Dương! Nhìn những đợt sóng và cánh chim Frigatebird đó xem, làm sao bạn có thể nhầm sang quốc gia khác được?",
    vexillologyFact: "17 tia sáng mặt trời đại diện cho 16 hòn đảo thuộc quần đảo Gilbert và đảo Banaba. 3 dải sóng màu xanh tượng trưng cho 3 nhóm đảo chính: Gilbert, Phoenix và Line Islands.",
    funFactSnippet: "Kiribati cũng là quốc gia đón ánh bình minh đầu tiên của mỗi năm mới trên Trái Đất tại Đảo Thiên Niên Kỷ (Caroline Island)."
  },
  {
    id: "flag-vietnam",
    countryName: "Việt Nam",
    countryNameEn: "Vietnam",
    countryCode: "vn",
    flagUrl: "https://flagcdn.com/vn.svg",
    options: [
      { letter: 'A', text: 'Trung Quốc', isCorrect: false },
      { letter: 'B', text: 'Việt Nam', isCorrect: true },
      { letter: 'C', text: 'Burkina Faso', isCorrect: false },
      { letter: 'D', text: 'Somalia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ màu đỏ tươi hình chữ nhật tỷ lệ chuẩn 2:3, với một ngôi sao vàng năm cánh lớn ở chính tâm.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Ngôi sao vàng có một đỉnh hướng thẳng đứng lên trên, các cánh sao được tính toán cân xứng bằng bán kính đường tròn ngoại tiếp.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Năm cánh sao vàng tượng trưng cho sự đại đoàn kết của năm tầng lớp nhân dân: Sĩ, Nông, Công, Thương, Binh cùng chung tay xây dựng đất nước.'
      }
    ],
    sheldonCorrectComment: "Chính xác! Cờ đỏ sao vàng của Việt Nam! Đơn giản, ấn tượng thị giác mạnh mẽ và mang tính biểu tượng lịch sử sâu sắc. Ngay cả một người theo chủ nghĩa tối giản khắt khe như tôi cũng phải gật đầu!",
    sheldonIncorrectComment: "Trời ơi! Bạn không nhận ra lá cờ đỏ sao vàng của Việt Nam sao? Đừng nói bạn bị nhầm lẫn vì Trung Quốc có 5 ngôi sao, còn Việt Nam chỉ có MỘT ngôi sao lớn duy nhất ở giữa nhé!",
    vexillologyFact: "Lá cờ đỏ sao vàng xuất hiện lần đầu tiên trong cuộc Khởi nghĩa Nam Kỳ năm 1940 và chính thức trở thành quốc kỳ của nước Việt Nam Dân chủ Cộng hòa từ năm 1945.",
    funFactSnippet: "Hình dáng và tỷ lệ của ngôi sao vàng được quy định chuẩn hóa cực kỳ nghiêm ngặt trong Hiến pháp Việt Nam để đảm bảo khi may cờ, các góc nhọn luôn đạt độ chính xác toán học."
  },
  {
    id: "flag-greece",
    countryName: "Hy Lạp",
    countryNameEn: "Greece",
    countryCode: "gr",
    flagUrl: "https://flagcdn.com/gr.svg",
    options: [
      { letter: 'A', text: 'Uruguay', isCorrect: false },
      { letter: 'B', text: 'Israel', isCorrect: false },
      { letter: 'C', text: 'Phần Lan', isCorrect: false },
      { letter: 'D', text: 'Hy Lạp', isCorrect: true },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Gồm 9 sọc ngang màu xanh lam và trắng xen kẽ nhau, góc trên bên trái có một ô vuông màu xanh chứa dấu thập trắng.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Màu xanh lam tượng trưng cho biển Aegea và bầu trời Địa Trung Hải, màu trắng tượng trưng cho những ngọn sóng biển tinh khiết.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: "9 sọc ngang tương ứng chính xác với 9 âm tiết trong khẩu hiệu cách mạng bất hủ: 'E-leuf-the-ri-a i Tha-na-tos' (Tự do hay là Chết)!"
      }
    ],
    sheldonCorrectComment: "Bazinga! Hy Lạp! Nơi sản sinh ra các nhà toán học vĩ đại như Pythagoras, Euclid và Archimedes! 9 sọc tương ứng 9 âm tiết 'Eleftheria i Thanatos' - một sự hòa quyện tuyệt hảo giữa ngôn ngữ học và kỳ học!",
    sheldonIncorrectComment: "Sai rồi! Đó là Hy Lạp! Làm sao bạn có thể nhầm dấu thập Chính thống giáo và 9 sọc xanh trắng của quê hương môn Triết học và Hình học cơ chứ?",
    vexillologyFact: "Dấu thập trắng ở góc đại diện cho Giáo hội Chính thống giáo Đông phương, tôn giáo truyền thống của người Hy Lạp trong các cuộc đấu tranh giành độc lập từ Đế chế Ottoman.",
    funFactSnippet: "Ngoài giả thuyết 9 âm tiết, một số học giả cho rằng 9 sọc còn tượng trưng cho 9 nàng thơ (Muses) trong thần thoại Hy Lạp cổ đại."
  },
  {
    id: "flag-mexico",
    countryName: "Mexico",
    countryNameEn: "Mexico",
    countryCode: "mx",
    flagUrl: "https://flagcdn.com/mx.svg",
    options: [
      { letter: 'A', text: 'Ý', isCorrect: false },
      { letter: 'B', text: 'Mexico', isCorrect: true },
      { letter: 'C', text: 'Ireland', isCorrect: false },
      { letter: 'D', text: 'Hungary', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Ba dải màu dọc bằng nhau theo thứ tự: xanh lục, trắng và đỏ.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa dải màu trắng là quốc huy vô cùng chi tiết miêu tả một con đại bàng vàng đứng trên cây xương rồng mọc từ tảng đá trên hồ nước.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Con đại bàng đang dùng mỏ và móng vuốt quắp một con rắn chuông - cảnh tượng trong thần thoại chỉ dẫn người Aztec lập nên kinh đô Tenochtitlan huyền thoại!'
      }
    ],
    sheldonCorrectComment: "Chính xác! Mexico! Và xin đừng ai gọi đây là cờ nước Ý có gắn hình chim! Quốc huy của Mexico là một bài học lịch sử sống động về nền văn minh Aztec mà ai cũng nên biết!",
    sheldonIncorrectComment: "Không đúng! Nếu không có quốc huy con đại bàng ăn rắn trên cây xương rồng, bạn có thể nhầm với Ý. Nhưng với quốc huy chi tiết thế này mà vẫn chọn sai thì tôi cạn lời!",
    vexillologyFact: "Huy hiệu trên cờ dựa trên truyền thuyết Aztec: Thần chiến tranh Huitzilopochtli đã truyền dạy họ đi tìm nơi nào có đại bàng đậu trên cây xương rồng ngậm rắn để xây dựng kinh đô.",
    funFactSnippet: "Tỷ lệ cờ Mexico là 4:7, khác với tỷ lệ 2:3 của cờ nước Ý, và tông màu xanh lá cây cũng sẫm hơn đáng kể."
  },
  {
    id: "flag-barbados",
    countryName: "Barbados",
    countryNameEn: "Barbados",
    countryCode: "bb",
    flagUrl: "https://flagcdn.com/bb.svg",
    options: [
      { letter: 'A', text: 'Barbados', isCorrect: true },
      { letter: 'B', text: 'Bahamas', isCorrect: false },
      { letter: 'C', text: 'Saint Vincent và Grenadines', isCorrect: false },
      { letter: 'D', text: 'Trinidad và Tobago', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Ba dải dọc bằng nhau: hai dải ngoài màu xanh lam đậm (biển và trời), dải giữa màu vàng cát óng ả.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Nằm chính giữa dải vàng là một đầu cây đinh ba (Trident) màu đen sắc nhọn.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Phần cán của cây đinh ba bị gãy rời! Chi tiết gãy này tượng trưng cho việc Barbados đoạn tuyệt hoàn toàn với thân phận thuộc địa của Đế quốc Anh khi giành độc lập năm 1966!'
      }
    ],
    sheldonCorrectComment: "Tuyệt vời! Barbados! Cây đinh ba gãy của thần biển Neptune thể hiện sự phá vỡ xiềng xích thuộc địa. Bạn đã ghi nhớ chi tiết này tốt hơn cả cách Penny ghi nhớ thực đơn món chay!",
    sheldonIncorrectComment: "Sai rồi! Đó là cây đinh ba gãy của Barbados! Không phải cờ của Aquaman, mà là một quốc gia độc lập vùng biển Caribe!",
    vexillologyFact: "Ba mũi nhọn của cây đinh ba đại diện cho ba nguyên tắc dân chủ: Chính quyền của dân, do dân và vì dân.",
    funFactSnippet: "Năm 2021, Barbados chính thức phế truất Nữ hoàng Anh để trở thành một nước cộng hòa, biến cây đinh ba gãy càng thêm phần ý nghĩa lịch sử."
  },
  {
    id: "flag-papua-new-guinea",
    countryName: "Papua New Guinea",
    countryNameEn: "Papua New Guinea",
    countryCode: "pg",
    flagUrl: "https://flagcdn.com/pg.svg",
    options: [
      { letter: 'A', text: 'Fiji', isCorrect: false },
      { letter: 'B', text: 'Papua New Guinea', isCorrect: true },
      { letter: 'C', text: 'Quần đảo Solomon', isCorrect: false },
      { letter: 'D', text: 'Vanuatu', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Cờ chia chéo thành hai tam giác bằng nhau: tam giác dưới màu đen, tam giác trên màu đỏ rực rỡ.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Ở tam giác đen có 5 ngôi sao trắng tạo thành chòm sao Nam Thập Tự; ở tam giác đỏ có hình một chú chim vàng đang sải cánh.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Chú chim rực rỡ đó là Chim thiên đường Raggiana (Kumul). Lá cờ này được thiết kế bởi một nữ sinh 15 tuổi tên là Susan Karike trong một cuộc thi toàn quốc năm 1971!'
      }
    ],
    sheldonCorrectComment: "Chính xác! Papua New Guinea! Một nữ sinh 15 tuổi thiết kế lá cờ này và đánh bại tất cả các nhà thiết kế trưởng thành. Điều này chứng minh rằng tuổi tác không quyết định sự vượt trội của trí tuệ!",
    sheldonIncorrectComment: "Sai lầm rồi! Đó là Papua New Guinea! Làm sao có thể quên sự kết hợp tuyệt đẹp giữa chòm sao Nam Thập Tự và loài Chim Thiên Đường sải cánh bay được chứ?",
    vexillologyFact: "Đỏ và đen từ lâu đã là màu truyền thống của nhiều bộ tộc bản địa Papua New Guinea, tượng trưng cho sức mạnh, máu và lòng dũng cảm.",
    funFactSnippet: "Susan Karike, tác giả bản thiết kế khi mới 15 tuổi, sau này đã trở thành một biểu tượng nữ quyền và văn hóa được cả quốc gia tôn vinh."
  },
  {
    id: "flag-sri-lanka",
    countryName: "Sri Lanka",
    countryNameEn: "Sri Lanka",
    countryCode: "lk",
    flagUrl: "https://flagcdn.com/lk.svg",
    options: [
      { letter: 'A', text: 'Bhutan', isCorrect: false },
      { letter: 'B', text: 'Thái Lan', isCorrect: false },
      { letter: 'C', text: 'Sri Lanka', isCorrect: true },
      { letter: 'D', text: 'Campuchia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Toàn bộ cờ được bao quanh bởi một đường viền màu vàng kim dày. Bên trái có hai sọc đứng màu xanh lục và cam.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Phần lớn diện tích bên phải là hình chữ nhật màu đỏ thẫm với hình một chú sư tử vàng dũng mãnh nắm chặt thanh kiếm trong chân trước.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Ở 4 góc của khung màu đỏ thẫm là 4 chiếc lá bồ đề (Bo leaves), biểu thị 4 phẩm chất cao quý của Phật giáo: Từ, Bi, Hỷ, Xả (Metta, Karuna, Mudita, Upekkha).'
      }
    ],
    sheldonCorrectComment: "Bazinga! Sri Lanka! Cờ Sư tử (Lion Flag) - chú sư tử vàng đại diện cho người Sinhala, còn hai sọc xanh và cam đại diện cho người Hồi giáo Moor và người Tamil. Một thiết kế đa sắc tộc mẫu mực!",
    sheldonIncorrectComment: "Sai rồi! Đó là cờ Sri Lanka! Chú sư tử vàng cầm kiếm Kastane oai vệ thế kia mà bạn lại đoán trượt sang nước khác sao?",
    vexillologyFact: "Lá cờ Sri Lanka là một trong những lá cờ cổ xưa nhất có nguồn gốc từ vị vua đầu tiên Vijaya thế kỷ thứ 5 TCN, tái sinh qua nhiều biến thiên lịch sử.",
    funFactSnippet: "Bốn chiếc lá bồ đề ở 4 góc được thêm vào năm 1972 để thay thế cho 4 ngọn giáo, phản ánh tầm ảnh hưởng sâu sắc của cây Bồ Đề linh thiêng Jaya Sri Maha Bodhi."
  },
  {
    id: "flag-cyprus",
    countryName: "Síp (Cyprus)",
    countryNameEn: "Cyprus",
    countryCode: "cy",
    flagUrl: "https://flagcdn.com/cy.svg",
    options: [
      { letter: 'A', text: 'Kosovo', isCorrect: false },
      { letter: 'B', text: 'Malta', isCorrect: false },
      { letter: 'C', text: 'Síp (Cyprus)', isCorrect: true },
      { letter: 'D', text: 'Crete', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ hoàn toàn màu trắng tinh, chính giữa nổi bật hình bóng toàn bộ bản đồ hòn đảo này.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Bản đồ có màu vàng đồng (copper/ochre), bên dưới có hai cành cây ô liu màu xanh lá bắt chéo.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: "Màu đồng của bản đồ đại diện cho quặng đồng phong phú của hòn đảo (chính từ 'Cuprum' - đồng trong tiếng Latin bắt nguồn từ tên đảo Síp). Cùng với Kosovo, đây là một trong hai quốc gia duy nhất vẽ bản đồ lãnh thổ lên quốc kỳ!"
      }
    ],
    sheldonCorrectComment: "Chính xác! Đảo Síp! Tên gọi nguyên tố Đồng (Copper - Cu trong Bảng Tuần hoàn các nguyên tố hóa học của tôi) bắt nguồn từ chính hòn đảo này! Khoa học hóa học và kỳ học hội tụ ở đây!",
    sheldonIncorrectComment: "Không đúng! Đó là Síp! Chỉ có Síp và Kosovo là vẽ bản đồ lên cờ, nhưng bản đồ màu đồng của Síp là độc nhất vô nhị trên hành tinh!",
    vexillologyFact: "Hiến pháp Síp cấm dùng màu xanh lam (gợi nhớ Hy Lạp) và màu đỏ (gợi nhớ Thổ Nhĩ Kỳ) trên quốc kỳ nhằm duy trì hòa bình trung lập giữa hai cộng đồng cư dân.",
    funFactSnippet: "Lá cờ được thiết kế bởi İsmet Güney, một họa sĩ người Síp gốc Thổ Nhĩ Kỳ, được cả hai cộng đồng lựa chọn năm 1960."
  },
  {
    id: "flag-kazakhstan",
    countryName: "Kazakhstan",
    countryNameEn: "Kazakhstan",
    countryCode: "kz",
    flagUrl: "https://flagcdn.com/kz.svg",
    options: [
      { letter: 'A', text: 'Uzbekistan', isCorrect: false },
      { letter: 'B', text: 'Kazakhstan', isCorrect: true },
      { letter: 'C', text: 'Kyrgyzstan', isCorrect: false },
      { letter: 'D', text: 'Turkmenistan', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Nền cờ màu xanh da trời (sky blue) đồng nhất, tượng trưng cho bầu trời vô tận trên thảo nguyên Trung Á.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa là mặt trời vàng 32 tia sáng, bên dưới là một con đại bàng thảo nguyên (Steppe eagle) vàng đang sải cánh.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: "Dọc theo mép cán cờ bên trái có một dải hoa văn trang trí truyền thống của người Kazakh mang tên 'koshkar-muiz' (sừng cừu đực)."
      }
    ],
    sheldonCorrectComment: "Rất chuẩn xác! Kazakhstan! Đại bàng thảo nguyên tung cánh bên dưới mặt trời 32 tia sáng. Sân bay vũ trụ Baikonur - nơi đưa Yuri Gagarin vào không gian - nằm ngay tại Kazakhstan đấy!",
    sheldonIncorrectComment: "Sai rồi! Đó là Kazakhstan! Bạn không thể nhận ra màu xanh da trời thảo nguyên và con đại bàng vàng biểu tượng tự do của họ sao?",
    vexillologyFact: "Màu xanh da trời có ý nghĩa thiêng liêng đối với các dân tộc Turkic cổ đại, đại diện cho thần bầu trời Tengri và sự hòa bình bất diệt.",
    funFactSnippet: "Dải hoa văn sừng cừu ở bên cán cờ là một ví dụ hiếm hoi về việc tích hợp nghệ thuật dệt thảm thủ công truyền thống vào quy chuẩn kỳ học hiện đại."
  },
  {
    id: "flag-cambodia",
    countryName: "Campuchia",
    countryNameEn: "Cambodia",
    countryCode: "kh",
    flagUrl: "https://flagcdn.com/kh.svg",
    options: [
      { letter: 'A', text: 'Lào', isCorrect: false },
      { letter: 'B', text: 'Thái Lan', isCorrect: false },
      { letter: 'C', text: 'Campuchia', isCorrect: true },
      { letter: 'D', text: 'Myanmar', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Gồm 3 dải ngang: hai dải ngoài màu xanh lam, dải giữa màu đỏ có chiều rộng gấp đôi hai dải ngoài.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Chính giữa dải đỏ là hình ảnh một công trình kiến trúc tôn giáo cổ đại màu trắng với 3 ngọn tháp.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Công trình đó là quần thể đền Angkor Wat - kỳ quan tôn giáo lớn nhất thế giới. Campuchia là một trong số rất ít quốc gia đưa hình một tòa nhà có thật lên quốc kỳ!'
      }
    ],
    sheldonCorrectComment: "Chính xác! Vương quốc Campuchia! Ngôi đền Angkor Wat được xây dựng từ thế kỷ 12 với sự tính toán thiên văn học chính xác tới từng phân độ. Thật xứng đáng được tôn vinh trên quốc kỳ!",
    sheldonIncorrectComment: "Sai rồi! Ngôi đền Angkor Wat với 3 ngọn tháp trắng rõ như ban ngày mà bạn lại đoán sai sao? Tôi sẽ phải cho bạn mượn cuốn Bách khoa toàn thư thế giới của tôi!",
    vexillologyFact: "Màu đỏ tượng trưng cho lòng dũng cảm của nhân dân, màu xanh lam tượng trưng cho tình đoàn kết và Hoàng gia, còn ngôi đền Angkor Wat tượng trưng cho sự toàn vẹn lãnh thổ và Phật giáo.",
    funFactSnippet: "Dù trải qua nhiều biến cố chính trị và thay đổi chế độ trong thế kỷ 20, hình ảnh đền Angkor Wat hầu như luôn hiện diện trong mọi phiên bản quốc kỳ Campuchia."
  },
  {
    id: "flag-kenya",
    countryName: "Kenya",
    countryNameEn: "Kenya",
    countryCode: "ke",
    flagUrl: "https://flagcdn.com/ke.svg",
    options: [
      { letter: 'A', text: 'Tanzania', isCorrect: false },
      { letter: 'B', text: 'Uganda', isCorrect: false },
      { letter: 'C', text: 'Kenya', isCorrect: true },
      { letter: 'D', text: 'Ethiopia', isCorrect: false },
    ],
    clues: [
      {
        level: 'Dễ (Màu sắc & Bố cục)',
        hint: 'Ba dải màu ngang: đen, đỏ (viền trắng ở hai rìa) và xanh lục.'
      },
      {
        level: 'Trung bình (Biểu tượng đặc trưng)',
        hint: 'Nằm chính giữa lá cờ là một chiếc khiên truyền thống của chiến binh Maasai màu đen, đỏ, trắng cùng hai ngọn giáo bắt chéo nhau.'
      },
      {
        level: 'Khó & Độc đáo (Ý nghĩa lịch sử & Bí mật Kỳ học)',
        hint: 'Màu đen đại diện cho người dân bản địa châu Phi; màu đỏ đại diện cho máu đổ trong cuộc chiến giành tự do; xanh lục là tài nguyên thiên nhiên; và chiếc khiên biểu thị tinh thần sẵn sàng bảo vệ nền hòa bình độc lập.'
      }
    ],
    sheldonCorrectComment: "Bazinga! Kenya! Chiếc khiên Maasai cùng hai ngọn giáo chéo thể hiện tính phòng thủ chiến lược. Nếu tôi phải ra trận bảo vệ bảng tuần hoàn hóa học của mình, tôi cũng sẽ cầm chiếc khiên này!",
    sheldonIncorrectComment: "Không đúng! Đó là Kenya! Một chiếc khiên chiến binh châu Phi dũng mãnh thế kia mà bạn cũng không nhận diện được ư? Cần nghiêm túc xem lại kiến thức địa lý châu Phi đấy!",
    vexillologyFact: "Chiếc khiên Maasai truyền thống được làm từ da bò đực và nhuộm màu tự nhiên, là biểu tượng trường tồn của lòng quả cảm Đông Phi.",
    funFactSnippet: "Hai dải viền trắng mỏng bao quanh dải đỏ được thêm vào khi thiết kế cờ độc lập năm 1963 để biểu thị khát vọng hòa bình và sự đoàn kết giữa các dân tộc."
  }
];
