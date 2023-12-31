const countries = [
  { name: "Австралія", code: "AU" },
  { name: "Австрія", code: "AT" },
  { name: "Азербайджан", code: "AZ" },
  { name: "Албанія", code: "AL" },
  { name: "Алжир", code: "DZ" },
  { name: "Американське Самоа", code: "AS" },
  { name: "Ангілья", code: "AI" },
  { name: "Ангола", code: "AO" },
  { name: "Андорра", code: "AD" },
  { name: "Антарктида", code: "AQ" },
  { name: "Антигуа і Барбуда", code: "AG" },
  { name: "Аргентина", code: "AR" },
  { name: "Армения", code: "AM" },
  { name: "Аруба", code: "AW" },
  { name: "Афганістан", code: "AF" },
  { name: "Багамські Острови", code: "BS" },
  { name: "Бангладеш", code: "BD" },
  { name: "Барбадос", code: "BB" },
  { name: "Бахрейн", code: "BH" },
  { name: "Беліз", code: "BZ" },
  { name: "Бельгія", code: "BE" },
  { name: "Бенін", code: "BJ" },
  { name: "Бермудські Острови", code: "BM" },
  { name: "Білорусь", code: "BY" },
  { name: "Болгарія", code: "BG" },
  { name: "Болівія", code: "BO" },
  { name: "Боснія і Герцеговина", code: "BA" },
  { name: "Ботсвана", code: "BW" },
  { name: "Бразилія", code: "BR" },
  { name: "Бруней", code: "BN" },
  { name: "Буркіна-Фасо", code: "BF" },
  { name: "Бурунді", code: "BI" },
  { name: "Бутан", code: "BT" },
  { name: "В’єтнам", code: "VN" },
  { name: "Вануату", code: "VU" },
  { name: "Ватикан", code: "VA" },
  { name: "Велика Британія", code: "GB" },
  { name: "Венесуела", code: "VE" },
  { name: "Вірменія", code: "AM" },
  { name: "Віргінські Острови (Британія)", code: "VG" },
  { name: "Віргінські Острови (США)", code: "VI" },
  { name: "Габон", code: "GA" },
  { name: "Гаїті", code: "HT" },
  { name: "Гамбія", code: "GM" },
  { name: "Гана", code: "GH" },
  { name: "Гваделупа", code: "GP" },
  { name: "Гватемала", code: "GT" },
  { name: "Гвінея", code: "GN" },
  { name: "Гвінея-Бісау", code: "GW" },
  { name: "Гернсі", code: "GG" },
  { name: "Гібралтар", code: "GI" },
  { name: "Гондурас", code: "HN" },
  { name: "Гонконг", code: "HK" },
  { name: "Гренада", code: "GD" },
  { name: "Гренландія", code: "GL" },
  { name: "Греція", code: "GR" },
  { name: "Грузія", code: "GE" },
  { name: "Данія", code: "DK" },
  { name: "Джерсі", code: "JE" },
  { name: "Джибуті", code: "DJ" },
  { name: "Домініка", code: "DM" },
  { name: "Домініканська Республіка", code: "DO" },
  { name: "Еквадор", code: "EC" },
  { name: "Екваторіальна Гвінея", code: "GQ" },
  { name: "Еритрея", code: "ER" },
  { name: "Есватіні", code: "SZ" },
  { name: "Естонія", code: "EE" },
  { name: "Ефіопія", code: "ET" },
  { name: "Єгипет", code: "EG" },
  { name: "Ємен", code: "YE" },
  { name: "Замбія", code: "ZM" },
  { name: "Зімбабве", code: "ZW" },
  { name: "Ізраїль", code: "IL" },
  { name: "Індія", code: "IN" },
  { name: "Індонезія", code: "ID" },
  { name: "Ірак", code: "IQ" },
  { name: "Іран", code: "IR" },
  { name: "Ірландія", code: "IE" },
  { name: "Ісландія", code: "IS" },
  { name: "Іспанія", code: "ES" },
  { name: "Італія", code: "IT" },
  { name: "Йорданія", code: "JO" },
  { name: "Кабо-Верде", code: "CV" },
  { name: "Казахстан", code: "KZ" },
  { name: "Камбоджа", code: "KH" },
  { name: "Камерун", code: "CM" },
  { name: "Канада", code: "CA" },
  { name: "Катар", code: "QA" },
  { name: "Кенія", code: "KE" },
  { name: "Киргизстан", code: "KG" },
  { name: "Кирибаті", code: "KI" },
  { name: "Китай", code: "CN" },
  { name: "Кіпр", code: "CY" },
  { name: "Кіргизія", code: "KG" },
  { name: "Кірибаті", code: "KI" },
  { name: "Колумбія", code: "CO" },
  { name: "Комори", code: "KM" },
  { name: "Конго", code: "CG" },
  { name: "Коста-Рика", code: "CR" },
  { name: "Кот-дʼІвуар", code: "CI" },
  { name: "Куба", code: "CU" },
  { name: "Кувейт", code: "KW" },
  { name: "Лаос", code: "LA" },
  { name: "Латвія", code: "LV" },
  { name: "Лесото", code: "LS" },
  { name: "Литва", code: "LT" },
  { name: "Ліберія", code: "LR" },
  { name: "Ліван", code: "LB" },
  { name: "Лівія", code: "LY" },
  { name: "Ліхтенштейн", code: "LI" },
  { name: "Люксембург", code: "LU" },
  { name: "Маврикій", code: "MU" },
  { name: "Мавританія", code: "MR" },
  { name: "Мадагаскар", code: "MG" },
  { name: "Майотта", code: "YT" },
  { name: "Макао", code: "MO" },
  { name: "Македонія", code: "MK" },
  { name: "Малаві", code: "MW" },
  { name: "Малайзія", code: "MY" },
  { name: "Малі", code: "ML" },
  { name: "Мальдіви", code: "MV" },
  { name: "Мальта", code: "MT" },
  { name: "Марокко", code: "MA" },
  { name: "Мартиніка", code: "MQ" },
  { name: "Маршаллові Острови", code: "MH" },
  { name: "Мексика", code: "MX" },
  { name: "Мозамбік", code: "MZ" },
  { name: "Молдова", code: "MD" },
  { name: "Монако", code: "MC" },
  { name: "Монголія", code: "MN" },
  { name: "Монтсеррат", code: "MS" },
  { name: "М`янма", code: "MM" },
  { name: "Намібія", code: "NA" },
  { name: "Науру", code: "NR" },
  { name: "Непал", code: "NP" },
  { name: "Нігер", code: "NE" },
  { name: "Нігерія", code: "NG" },
  { name: "Нідерланди", code: "NL" },
  { name: "Нікарагуа", code: "NI" },
  { name: "Німеччина", code: "DE" },
  { name: "Ніуе", code: "NU" },
  { name: "Нова Зеландія", code: "NZ" },
  { name: "Нова Каледонія", code: "NC" },
  { name: "Норвегія", code: "NO" },
  { name: "Обʼєднані Арабські Емірати", code: "AE" },
  { name: "Оман", code: "OM" },
  { name: "Острів Буве", code: "BV" },
  { name: "Острів Мен", code: "IM" },
  { name: "Острів Норфолк", code: "NF" },
  { name: "Острів Різдва", code: "CX" },
  { name: "Острів Херд і Остріви Макдональд", code: "HM" },
  { name: "Острів Ян-Майен", code: "SJ" },
  { name: "Пакистан", code: "PK" },
  { name: "Палау", code: "PW" },
  { name: "Палестина", code: "PS" },
  { name: "Панама", code: "PA" },
  { name: "Папуа-Нова Гвінея", code: "PG" },
  { name: "Парагвай", code: "PY" },
  { name: "Перу", code: "PE" },
  { name: "Південна Корея", code: "KR" },
  { name: "Південний Судан", code: "SS" },
  { name: "Південний Судан", code: "GS" },
  { name: "Південно-Африканська Республіка", code: "ZA" },
  { name: "Північна Корея", code: "KP" },
  { name: "Північні Маріанські Острови", code: "MP" },
  { name: "Польща", code: "PL" },
  { name: "Португалія", code: "PT" },
  { name: "Пуерто-Ріко", code: "PR" },
  { name: "Реюньйон", code: "RE" },
  { name: "Росія", code: "RU" },
  { name: "Руанда", code: "RW" },
  { name: "Румунія", code: "RO" },
  { name: "Сальвадор", code: "SV" },
  { name: "Самоа", code: "WS" },
  { name: "Сан-Марино", code: "SM" },
  { name: "Сан-Томе і Принсіпі", code: "ST" },
  { name: "Саудівська Аравія", code: "SA" },
  { name: "Свазіленд", code: "SZ" },
  { name: "Сейшельські Острови", code: "SC" },
  { name: "Сен-Бартельмі", code: "BL" },
  { name: "Сен-Мартен", code: "MF" },
  { name: "Сенегал", code: "SN" },
  { name: "Сент-Вінсент і Гренадини", code: "VC" },
  { name: "Сент-Кіттс і Невіс", code: "KN" },
  { name: "Сент-Люсія", code: "LC" },
  { name: "Сербія", code: "RS" },
  { name: "Сейшельські Острови", code: "SC" },
  { name: "Сінгапур", code: "SG" },
  { name: "Сирія", code: "SY" },
  { name: "Словаччина", code: "SK" },
  { name: "Словенія", code: "SI" },
  { name: "Соломонові Острови", code: "SB" },
  { name: "Сомалі", code: "SO" },
  { name: "Судан", code: "SD" },
  { name: "Суринам", code: "SR" },
  { name: "Сша", code: "US" },
  { name: "Сьєрра-Леоне", code: "SL" },
  { name: "Таджикистан", code: "TJ" },
  { name: "Таїланд", code: "TH" },
  { name: "Танзанія", code: "TZ" },
  { name: "Тайвань", code: "TW" },
  { name: "Того", code: "TG" },
  { name: "Токелау", code: "TK" },
  { name: "Тонга", code: "TO" },
  { name: "Тринідад і Тобаго", code: "TT" },
  { name: "Тувалу", code: "TV" },
  { name: "Туніс", code: "TN" },
  { name: "Туреччина", code: "TR" },
  { name: "Туркменістан", code: "TM" },
  { name: "Уганда", code: "UG" },
  { name: "Угорщина", code: "HU" },
  { name: "Узбекистан", code: "UZ" },
  { name: "Україна", code: "UA" },
  { name: "Уругвай", code: "UY" },
  { name: "Фіджі", code: "FJ" },
  { name: "Філіппіни", code: "PH" },
  { name: "Фінляндія", code: "FI" },
  { name: "Фолклендські Острови", code: "FK" },
  { name: "Франція", code: "FR" },
  { name: "Французька Гвіана", code: "GF" },
  { name: "Французька Полінезія", code: "PF" },
  { name: "Французькі Південні та Антарктичні Території", code: "TF" },
  { name: "Хорватія", code: "HR" },
  { name: "Центральноафриканська Республіка", code: "CF" },
  { name: "Чад", code: "TD" },
  { name: "Чехія", code: "CZ" },
  { name: "Чилі", code: "CL" },
  { name: "Чорногорія", code: "ME" },
  { name: "Швейцарія", code: "CH" },
  { name: "Швеція", code: "SE" },
  { name: "Шрі-Ланка", code: "LK" },
  { name: "Ямайка", code: "JM" },
  { name: "Японія", code: "JP" },
];

export default countries;