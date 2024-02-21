/*Belediyenin koordinatları EPSG:2320 ED50 / TM30 formatında 
bu yüzden koordinatlar EPSG:4326 WGS 84 
 çevrimi yapılarak kullanıldı
 (https://epsg.io/transform#s_srs=2320&t_srs=4326&x=411037.8036000&y=4461041.9881000)
 */

const markers = [
    {
        id: "1",
        tur: "Köpek",
        /* coordinates": [416191.354899999685585, 4464861.50029999949] */
        position: [40.3123222, 29.0136578],
        ilce: "Osmangazi",
        mahalle: "Gündoğdu"
    },
    {
        id: "2",
        tur: "Diğer",
        /*coordinates": [422752.326299999840558, 4467267.704099999741 ]*/
        position: [40.3346213, 29.0905412],
        ilce: "Osmangazi",
        mahalle: "Dürdane"
    },
    {
        id: "3",
        tur: "Köpek",
        /*coordinates": [ 422527.861999999731779, 4433872.334 ] */
        position: [40.0338845, 29.0919195],
        ilce: "Osmangazi",
        mahalle: "Çaybaşı"
    },
    {
        id: "4",
        tur: "Diğer",
        /* coordinates": [ 426054.4309, 4461601.9671 ] */
        position: [40.2839025, 29.1300508],
        ilce: "Osmangazi",
        mahalle: "Demirtaş Barbaros"
    },
    {
        id: "5",
        tur: "Köpek",
        /* coordinates": [ 426460.418499999679625, 4474205.519099999219 ] */
        position: [40.3974281, 29.133373],
        ilce: "Gemlik",
        mahalle: "Engürücük"
    },
    {
        id: "6",
        tur: "Diğer",
        /* coordinates": [ 431296.149000000208616, 4474060.758799999952 ]*/
        position: [40.3965375, 29.1903425],
        ilce: "Gemlik",
        mahalle: "Adliye"
    },
    {
        id: "7",
        tur: "Köpek",
        /* coordinates": [ 393001.691499999724329, 4451413.511399999261 ]*/
        position: [40.1885947, 28.7431512],
        ilce: "Nilüfer",
        mahalle: "Akçalar"
    },
    {
        id: "8",
        tur: "Köpek",
        /* coordinates": [ 386576.409699999727309, 4444946.8504 ] */
        position: [40.1295287, 28.6688583],
        ilce: "Mustafakemalpaşa",
        mahalle: "Akçapınar"
    },
    {
        id: "9",
        tur: "Köpek",
        /* coordinates": [ 392077.856999999843538, 4443913.0083 ]*/
        position: [40.120944, 28.733561],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "10",
        tur: "Köpek",
        /* coordinates": [ 394931.463700000196695, 4444671.0226 ] */
        position: [40.1281303, 28.7669057],
        ilce: "Nilüfer",
        mahalle: "Maksempınarı"
    },
    {
        id: "11",
        tur: "Köpek",
        /* coordinates": [ 402658.246000000275671, 4449303.0537 ]*/
        position: [40.1707675, 28.8568408],
        ilce: "Nilüfer",
        mahalle: "Kayapa"
    },
    {
        id: "12",
        tur: "Diğer",
        /* coordinates": [ 407737.593399999663234, 4470362.3782 ] */
        position: [40.3609615, 28.9134291],
        ilce: "Mudanya",
        mahalle: "Güzelyalı"
    },
    {
        id: "13",
        tur: "Kedi",
        /* coordinates": [ 405627.102099999785423, 4471898.8914 ] */
        position: [40.37456, 28.8883604],
        ilce: "Mudanya",
        mahalle: "ömerbey"
    },
    {
        id: "14",
        tur: "Köpek",
        /* coordinates": [ 415837.260099999606609, 4464103.8308 ] */
        position: [40.3054644, 29.0095925],
        ilce: "Osmangazi",
        mahalle: "Çağlayan"
    },
    {
        id: "15",
        tur: "Köpek",
        /*coordinates": [ 414297.392199999652803, 4462409.477499999106 ] */
        position: [40.2900515, 28.9917088],
        ilce: "Osmangazi",
        mahalle: "Ahmetbey"
    },
    {
        id: "16",
        tur: "Diğer",
        /*coordinates": [ 418428.9051, 4454716.14399999939 ] */
        position: [40.2211902, 29.0412679],
        ilce: "Osmangazi",
        mahalle: "Çukurcaköy"
    },
    {
        id: "17",
        tur: "Diğer",
        /*coordinates": [ 420361.91399999987, 4450511.933 ] */
        position: [40.1835187, 29.0644952],
        ilce: "Osmangazi",
        mahalle: "Orhanbey"
    },
    {
        id: "18",
        tur: "Diğer",
        /*coordinates": [ 420292.771099999547005, 4450600.845899999142 ] */
        position: [40.1843128, 29.0636724],
        ilce: "Osmangazi",
        mahalle: "Nalbantoğlu"
    },
    {
        id: "19",
        tur: "Köpek",
        /* coordinates": [ 395808.709099999628961, 4453991.379399999976 ]*/
        position: [40.2121583, 28.7756882],
        ilce: "Nilüfer",
        mahalle: "Başköy"
    },
    {
        id: "20",
        tur: "Diğer",
        /*coordinates": [ 413734.940000000409782, 4450826.638199999928 ] */
        position: [40.1856975, 28.9866516],
        ilce: "Nilüfer",
        mahalle: "Gümüştepe"
    },
    {
        id: "21",
        tur: "Diğer",
        /*coordinates": [ 411013.1074, 4469663.753399999812 ] */
        position: [40.3550269, 28.9520812],
        ilce: "Mudanya",
        mahalle: "Altıntaş"
    },
    {
        id: "22",
        tur: "Köpek",
        /*coordinates": [ 405631.361999999731779, 4471893.744 ] */
        position: [40.3745141, 28.8884113],
        ilce: "Mudanya",
        mahalle: "Ömerbey"
    },
    {
        id: "23",
        tur: "Köpek",
        /*coordinates": [ 405196.318900000303984, 4472359.848899999633 ] */
        position: [40.3786615, 28.8832203],
        ilce: "Mudanya",
        mahalle: "Şükrüçavuş"
    },
    {
        id: "24",
        tur: "Diğer",
        /* coordinates": [ 405200.046299999579787, 4472353.814099999145 ] */
        position: [40.3786076, 28.8832651],
        ilce: "Mudanya",
        mahalle: "Şükrüçavuş"
    },
    {
        id: "25",
        tur: "Diğer",
        /*coordinates": [ 378024.677400000393391, 4472391.447799999267 ] */
        position: [40.3754136, 28.5633377],
        ilce: "Mudanya",
        mahalle: "Mesudiye"
    },
    {
        id: "26",
        tur: "Diğer",
        /*coordinates": [ 416350.257500000298023, 4453794.458699999377 ] */
        position: [40.212686, 29.0169707],
        ilce: "Osmangazi",
        mahalle: "Dikkaldırım"
    },
    {
        id: "27",
        tur: "Köpek",
        /*coordinates": [ 441985.847799999639392, 4448460.322399999946 ] */
        position: [40.166817, 29.3185635],
        ilce: "Kestel",
        mahalle: "Aksu"
    },
    {
        id: "28",
        tur: "Köpek",
        /*coordinates": [ 439705.200799999758601, 4449240.088099999353 ] */
        position: [40.1736783, 29.29172],
        ilce: "Kestel",
        mahalle: "Gözede"
    },
    {
        id: "29",
        tur: "Diğer",
        /*coordinates": [ 475881.005199999548495, 4479259.626299999654 ] */
        position: [40.4458406, 29.7152864],
        ilce: "İznik",
        mahalle: "Mustafakemalpaşa"
    },
    {
        id: "30",
        tur: "Köpek",
        /*coordinates": [ 424820.513000000268221, 4457701.3318 ] */
        position: [40.2486686, 29.116],
        ilce: "Osmangazi",
        mahalle: "İsmetiye"
    },
    {
        id: "31",
        tur: "Köpek",
        /*coordinates": [ 423901.716599999927, 4473180.11969999969 ] */
        position: [40.3879652, 29.1033603],
        ilce: "Gemlik",
        mahalle: "Gençali"
    },
    {
        id: "32",
        tur: "Diğer",
        /* coordinates": [ 420821.393299999646842, 4471455.216399999335 ] */
        position: [40.3721465, 29.0673013],
        ilce: "Gemlik",
        mahalle: "Kurşunlu"
    },
    {
        id: "33",
        tur: "Köpek",
        /*coordinates": [ 391430.971800000406802, 4443660.888499999419 ] */
        position: [40.1185907, 28.7260166],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "34",
        tur: "Diğer",
        /*coordinates": [ 411869.159199999645352, 4468254.1807 ] */
        position: [40.3424258, 28.9623512],
        ilce: "Mudanya",
        mahalle: "Altıntaş"
    },
    {
        id: "35",
        tur: "Diğer",
        /*coordinates": [ 408490.532100000418723, 4469915.087899999693 ] */
        position: [40.357017, 28.9223557],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "36",
        tur: "Köpek",
        /*coordinates": [ 408192.6069, 4465466.17669999972 ] */
        position: [40.3169262, 28.9194885],
        ilce: "Mudanya",
        mahalle: "Aydınpınar"
    },
    {
        id: "37",
        tur: "Köpek",
        /*coordinates": [ 396188.013500000350177, 4460394.30189999938 ] */
        position: [40.2698555, 28.7791074],
        ilce: "Mudanya",
        mahalle: "Çekrice"
    },
    {
        id: "38",
        tur: "Köpek",
        /*coordinates": [ 439387.410500000230968, 4458118.843299999833 ] */
        position: [40.2536097, 29.2871519],
        ilce: "Kestel",
        mahalle: "Narlıdere"
    },
    {
        id: "39",
        tur: "Köpek",
        /*coordinates": [ 435870.995400000363588, 4459714.2211 ] */
        position: [40.267714, 29.2456639],
        ilce: "Gürsu",
        mahalle: "İpekyolu"
    },
    {
        id: "40",
        tur: "Köpek",
        /*coordinates": [ 422455.333399999886751, 4452962.9308 ] */
        position: [40.2057853, 29.0887773],
        ilce: "Yıldırım",
        mahalle: "Vatan"
    },
    {
        id: "41",
        tur: "Diğer",
        /*coordinates": [ 418699.196999999694526, 4451836.342199999839 ] */
        position: [40.1952851, 29.0448072],
        ilce: "Osmangazi",
        mahalle: "Gaziakdemir"
    },
    {
        id: "42",
        tur: "Köpek",
        /*coordinates": [ 431353.0219, 4474013.6305 ] */
        position: [40.3961178, 29.1910174],
        ilce: "Gemlik",
        mahalle: "Adliye"
    },
    {
        id: "43",
        tur: "Köpek",
        /*coordinates": [ 431421.765399999917, 4473971.8175 ] */
        position: [40.395747, 29.1918315],
        ilce: "Gemlik",
        mahalle: "Adliye"
    },
    {
        id: "44",
        tur: "Köpek",
        /* coordinates": [ 391309.722400000318885, 4449969.691099999472 ] */
        position: [40.1753775, 28.7235315],
        ilce: "Nilüfer",
        mahalle: "Akçalar"
    },
    {
        id: "45",
        tur: "Köpek",
        /*coordinates": [ 390063.800599999725819, 4447534.2409 ] */
        position: [40.1532875, 28.7093229],
        ilce: "Nilüfer",
        mahalle: "Fadıllı"
    },
    {
        id: "46",
        tur: "Diğer",
        /*coordinates": [ 408431.603400000371039, 4469954.8471 ] */
        position: [40.3573686, 28.9216564],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "47",
        tur: "Diğer",
        /* coordinates": [ 408389.004300000146031, 4469981.116499999538 ] */
        position: [40.3576004, 28.9211512],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "48",
        tur: "Diğer",
        /* coordinates": [ 407583.171799999661744, 4470474.200799999759 ] */
        position: [40.3619512, 28.9115952],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "49",
        tur: "Diğer",
        /*coordinates": [ 407768.1228, 4470338.948799999431 ] */
        position: [40.3607539, 28.9137918],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "50",
        tur: "Diğer",
        /* coordinates": [ 407909.380300000309944, 4470243.207299999893 ] */
        position: [40.3599075, 28.9154683],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "51",
        tur: "Diğer",
        /*coordinates": [ 405191.704, 4472365.883799999952 ]  */
        position: [40.3787153, 28.8831651],
        ilce: "Mudanya",
        mahalle: "Şükrüçavuş"
    },
    {
        id: "52",
        tur: "Diğer",
        /*coordinates": [ 405207.856200000271201, 4472341.9218 ] */
        position: [40.3785014, 28.8833588],
        ilce: "Mudanya",
        mahalle: "Şükrüçavuş"
    },
    {
        id: "53",
        tur: "Köpek",
        /* coordinates": [ 407792.175599999725819, 4466125.0424 ] */
        position: [40.3228146, 28.9146833],
        ilce: "Mudanya",
        mahalle: "Aydınpınar"
    },
    {
        id: "54",
        tur: "Köpek",
        /*coordinates": [ 385147.382699999958, 4470610.742699999362 ] */
        position: [40.3603933, 28.6475047],
        ilce: "Mudanya",
        mahalle: "Söğütpınar"
    },
    {
        id: "55",
        tur: "Köpek",
        /*coordinates": [ 380369.4002, 4471824.8737 ] */
        position: [40.3706525, 28.5910449],
        ilce: "Mudanya",
        mahalle: "Mesudiye"
    },
    {
        id: "56",
        tur: "Köpek",
        /*coordinates": [ 437132.626799999736249, 4449527.0447 ] */
        position: [40.1760736, 29.261492],
        ilce: "Kestel",
        mahalle: "Çataltepe"
    },
    {
        id: "57",
        tur: "Köpek",
        /*coordinates": [ 436089.311700000427663, 4449628.828199999407 ] */
        position: [40.1769114, 29.2492338],
        ilce: "Kestel",
        mahalle: "Burhaniye"
    },
    {
        id: "58",
        tur: "Köpek",
        /*coordinates": [ 441773.360000000335276, 4448660.7692 ] */
        position: [40.1686074, 29.3160512],
        ilce: "Kestel",
        mahalle: "Aksu"
    },
    {
        id: "59",
        tur: "Köpek",
        /* coordinates": [ 442232.7856, 4453283.997099999338 ] */
        position: [40.2102723, 29.321029],
        ilce: "Kestel",
        mahalle: "Dudaklı"
    },
    {
        id: "60",
        tur: "Köpek",
        /*coordinates": [ 440014.305100000463426, 4457837.43099999987 ] */
        position: [40.2511207, 29.2945462],
        ilce: "Kestel",
        mahalle: "Narlıdere"
    },
    {
        id: "61",
        tur: "Diğer",
        /* coordinates": [ 470893.428399999625981, 4459163.3189 ] */
        position: [40.2647048, 29.6574143],
        ilce: "Yenişehir",
        mahalle: "Kurtuluş"
    },
    {
        id: "62",
        tur: "Köpek",
        /* coordinates": [ 405451.464499999769032, 4458312.2993 ] */
        position: [40.252207, 28.888301],
        ilce: "Nilüfer",
        mahalle: "Görükle"
    },
    {
        id: "63",
        tur: "Diğer",
        /*coordinates": [ 419875.514299999923, 4450615.1875 ] */
        position: [40.1844022, 29.0587719],
        ilce: "Osmangazi",
        mahalle: "Osmangazi"
    },
    {
        id: "64",
        tur: "Diğer",
        /* coordinates": [ 409790.808899999596179, 4440833.7848 ] */
        position: [40.0953033, 28.9417436],
        ilce: "Osmangazi",
        mahalle: "Doğancı"
    },
    {
        id: "65",
        tur: "Diğer",
        /* coordinates": [ 424107.2478, 4466029.3716 ] */
        position: [40.323595, 29.106631],
        ilce: "Osmangazi",
        mahalle: "Selçukgazi"
    },
    {
        id: "66",
        tur: "Köpek",
        /*coordinates": [ 423012.522300000302494, 4467291.2927 ] */
        position: [40.3348578, 29.0935999],
        ilce: "Osmangazi",
        mahalle: "Dürdane"
    },
    {
        id: "67",
        tur: "Diğer",
        /*coordinates": [ 418824.977800000458956, 4470473.173499999568 ] */
        position: [40.3631119, 29.0439227],
        ilce: "Gemlik",
        mahalle: "Kurşunlu"
    },
    {
        id: "68",
        tur: "Köpek",
        /* coordinates": [ 391658.635599999688566, 4443447.098 ]  */
        position: [40.1166952, 28.7287224],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "69",
        tur: "Köpek",
        /*coordinates": [ 411742.167700000107288, 4467187.414899999276 ] */
        position: [40.3328071, 28.9610042],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "70",
        tur: "Diğer",
        /* coordinates": [ 408003.098199999891222, 4470194.218399999663 ] */
        position: [40.3594767, 28.9165784],
        ilce: "Mudanya",
        mahalle: "Güzelyalı Yalı"
    },
    {
        id: "71",
        tur: "Köpek",
        /*coordinates": [ 407045.981800000183284, 4466082.0884 ] */
        position: [40.3223451, 28.9059114],
        ilce: "Mudanya",
        mahalle: "Aydınpınar"
    },
    {
        id: "72",
        tur: "Köpek",
        /* coordinates": [ 394465.114500000141561, 4462093.274599999189 ] */
        position: [40.2849369, 28.7585765],
        ilce: "Mudanya",
        mahalle: "Orhaniye"
    },
    {
        id: "73",
        tur: "Köpek",
        /*coordinates": [ 388464.8218, 4469072.24699999951 ] */
        position: [40.346992, 28.6868176],
        ilce: "Mudanya",
        mahalle: "Esence"
    },
    {
        id: "74",
        tur: "Köpek",
        /*coordinates": [ 383299.182400000281632, 4471136.1555 ] */
        position: [40.3648671, 28.6256569],
        ilce: "Mudanya",
        mahalle: "Eğerce"
    },
    {
        id: "75",
        tur: "Köpek",
        /* coordinates": [ 387731.501500000245869, 4471198.2629 ] */
        position: [40.3660346, 28.6778146],
        ilce: "Mudanya",
        mahalle: "Esence"
    },
    {
        id: "76",
        tur: "Köpek",
        /* coordinates": [ 434966.313799999654293, 4449774.2388 ] */
        position: [40.1781346, 29.2360354],
        ilce: "Kestel",
        mahalle: "Burhaniye"
    },
    {
        id: "77",
        tur: "Köpek",
        /* coordinates": [ 438552.753499999642372, 4449451.93209999986 ] */
        position: [40.1755024, 29.2781709],
        ilce: "Kestel",
        mahalle: "Çataltepe"
    },
    {
        id: "78",
        tur: "Köpek",
        /*coordinates": [ 440129.25, 4448549.524199999869 ]  */
        position: [40.16749, 29.2967623],
        ilce: "Kestel",
        mahalle: "Aksu"
    },
    {
        id: "79",
        tur: "Köpek",
        /* coordinates": [ 444306.793700000271201, 4454591.1546 ] */
        position: [40.2221839, 29.3452764],
        ilce: "Kestel",
        mahalle: "Gölbaşı"
    },
    {
        id: "80",
        tur: "Köpek",
        /* coordinates": [ 433757.529400000348687, 4459212.5719 ] */
        position: [40.263032, 29.2208713],
        ilce: "Gürsu",
        mahalle: "İğdir Köyü"
    },
    {
        id: "81",
        tur: "Diğer",
        /* coordinates": [ 420220.565799999982, 4450539.5996 ] */
        position: [40.1837544, 29.0628323],
        ilce: "Osmangazi",
        mahalle: "Nalbantoğlu"
    },
    {
        id: "82",
        tur: "Diğer",
        /* coordinates": [ 420393.615299999713898, 4450575.025299999863 ] */
        position: [40.1840899, 29.0648596],
        ilce: "Osmangazi",
        mahalle: "Orhanbey"
    },
    {
        id: "83",
        tur: "Köpek",
        /* coordinates": [ 425326.902499999850988, 4432647.2221 ]  */
        position: [40.0231047, 29.1248506],
        ilce: "Osmangazi",
        mahalle: "Karaislah"
    },
    {
        id: "84",
        tur: "Köpek",
        /* coordinates": [ 421028.153900000266731, 4442591.6446 ] */
        position: [40.1122616, 29.073287],
        ilce: "Osmangazi",
        mahalle: "Kirazlı"
    },
    {
        id: "85",
        tur: "Köpek",
        /* coordinates": [ 418203.422199999914, 4470505.6903 ] */
        position: [40.3633439, 29.036602],
        ilce: "Gemlik",
        mahalle: "Kurşunlu"
    },
    {
        id: "86",
        tur: "Köpek",
        /* coordinates": [ 386242.144000000320375, 4444519.0021 ] */
        position: [40.1256312, 28.665013],
        ilce: "Mustafakemalpaşa",
        mahalle: "Akçapınar"
    },
    {
        id: "87",
        tur: "Köpek",
        /* coordinates": [ 392284.4836, 4444346.082599999383 ] */
        position: [40.1248698, 28.7359121],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "88",
        tur: "Köpek",
        /*coordinates": [ 409744.5773, 4445022.6179 ]  */
        position: [40.1330164, 28.9406163],
        ilce: "Dağyenice",
        mahalle: "Nilüfer"
    },
    {
        id: "89",
        tur: "Köpek",
        /* coordinates": [ 411796.836500000208616, 4467027.668299999088 ] */
        position: [40.3313745, 28.9616695],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "90",
        tur: "Köpek",
        /* coordinates": [ 411679.072999999858439, 4469888.1085 ] */
        position: [40.3571178, 28.9598883],
        ilce: "Mudanya",
        mahalle: "Altıntaş"
    },
    {
        id: "91",
        tur: "Köpek",
        /*coordinates": [ 411237.462600000202656, 4470049.985 ] */
        position: [40.3585285, 28.9546681],
        ilce: "Mudanya",
        mahalle: "Altıntaş"
    },
    {
        id: "92",
        tur: "Diğer",
        /* coordinates": [ 405630.8295, 4471896.4065 ] */
        position: [40.374538, 28.8884046],
        ilce: "Mudanya",
        mahalle: "Ömerbey"
    },
    {
        id: "93",
        tur: "Köpek",
        /*coordinates": [ 439084.681200000457466, 4449437.058 ] */
        position: [40.1754072, 29.2844169],
        ilce: "Kestel",
        mahalle: "Çataltepe"
    },
    {
        id: "94",
        tur: "Köpek",
        /*coordinates": [ 446012.179100000299513, 4448314.6568 ] */
        position: [40.1657739, 29.3658378],
        ilce: "Kestel",
        mahalle: "Ümitalan"
    },
    {
        id: "95",
        tur: "Köpek",
        /* coordinates": [ 442775.357900000177324, 4453278.333499999717 ] */
        position: [40.2102585, 29.3274024],
        ilce: "Kestel",
        mahalle: "Gölbaşı"
    },
    {
        id: "96",
        tur: "Köpek",
        /* coordinates": [ 435060.8755, 4459291.15499999933 ] */
        position: [40.2638418, 29.2361835],
        ilce: "Gürsu",
        mahalle: "İpekyolu"
    },
    {
        id: "97",
        tur: "Köpek",
        /* coordinates": [ 433433.633799999952, 4458723.722799999639 ] */
        position: [40.2586042, 29.2171148],
        ilce: "Gürsu",
        mahalle: "İğdir köYÜ"
    },
    {
        id: "98",
        tur: "Diğer",
        /* coordinates": [ 429418.795300000347197, 4455663.711 ] */
        position: [40.2307205, 29.1702624],
        ilce: "Gürsu",
        mahalle: "Zafer"
    },
    {
        id: "99",
        tur: "Diğer",
        /*coordinates": [ 419058.472799999639392, 4452248.6454 ] */
        position: [40.1990324, 29.048974],
        ilce: "Osmangazi",
        mahalle: "Santral Garaj"
    },
    {
        id: "100",
        tur: "Diğer",
        /* coordinates": [ 414900.211099999957, 4452583.3573 ] */
        position: [40.2016348, 29.0001],
        ilce: "Osmangazi",
        mahalle: "Hüdavendigar"
    },
    {
        id: "101",
        tur: "Köpek",
        /* coordinates": [ 422322.527499999850988, 4456113.4923 ] */
        position: [40.2341427, 29.0868367],
        ilce: "Osmangazi",
        mahalle: "Küçükbalıklı"
    },
    {
        id: "102",
        tur: "Köpek",
        /*coordinates": [ 393677.098699999973, 4453340.851399999112 ] */
        position: [40.2060336, 28.750762],
        ilce: "Nilüfer",
        mahalle: "Başköy"
    },
    {
        id: "103",
        tur: "Köpek",
        /* coordinates": [ 388846.4731, 4444774.6509 ] */
        position: [40.1282812, 28.6955147],
        ilce: "Nilüfer",
        mahalle: "Ayvaköy"
    },
    {
        id: "104",
        tur: "Diğer",
        /* coordinates": [ 391765.530799999833107, 4443928.660199999809 ]*/
        position: [40.1210448, 28.7298953],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "105",
        tur: "Köpek",
        /* coordinates": [ 402569.763899999670684, 4448860.8208 ] */
        position: [40.1667753, 28.8558692],
        ilce: "Nilüfer",
        mahalle: "Kayapa"
    },
    {
        id: "106",
        tur: "Kedi",
        /*coordinates": [ 405203.9512, 4472345.649199999869 ] */
        position: [40.3785345, 28.8833123],
        ilce: "Mudanya",
        mahalle: "Şükrüçavuş"
    },
    {
        id: "107",
        tur: "Diğer",
        /*coordinates": [ 428163.563299999572337, 4448950.914499999955 ] */
        position: [40.170166, 29.1562648],
        ilce: "Yıldırım",
        mahalle: "Balaban"
    },
    {
        id: "108",
        tur: "Köpek",
        /*coordinates": [ 434826.071899999864399, 4449859.58799999952 ] */
        position: [40.1788923, 29.2343804],
        ilce: "Kestel",
        mahalle: "Burhaniye"
    },
    {
        id: "109",
        tur: "Diğer",
        /* coordinates": [ 444580.422600000165403, 4447695.059699999169 ] */
        position: [40.1601009, 29.349085],
        ilce: "Kestel",
        mahalle: "Ümitalan"
    },
    {
        id: "110",
        tur: "Kedi",
        /* coordinates": [ 414017.300599999725819, 4456688.061899999157 ] */
        position: [40.2385052, 28.9891826],
        ilce: "Osmangazi",
        mahalle: "Hamitler"
    },
    {
        id: "111",
        tur: "Diğer",
        /* coordinates": [ 411086.761699999682605, 4461050.332299999893 ] */
        position: [40.2774782, 28.9541457],
        ilce: "Osmangazi",
        mahalle: "Nilüferköy"
    },
    {
        id: "112",
        tur: "Köpek",
        /* coordinates": [ 419927.930599999614, 4470034.758199999109 ]  */
        position: [40.3592708, 29.0569609],
        ilce: "Gemlik",
        mahalle: "Kurşunlu"
    },
    {
        id: "113",
        tur: "Diğer",
        /* coordinates": [ 388166.577100000344217, 4452940.190199999139 ] */
        position: [40.2017097, 28.686123],
        ilce: "Nilüfer",
        mahalle: "Gölyazı"
    },
    {
        id: "114",
        tur: "Köpek",
        /* coordinates": [ 392297.663599999621511, 4443743.835799999535 ] */
        position: [40.119449, 28.7361671],
        ilce: "Nilüfer",
        mahalle: "Unçukuru"
    },
    {
        id: "115",
        tur: "Diğer",
        /* coordinates": [ 411897.722099999897182, 4467915.85909999907 ] */
        position: [40.3393825, 28.962734],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "116",
        tur: "Köpek",
        /*  coordinates": [ 411763.535000000149012, 4467883.9098 ] */
        position: [40.3390807, 28.9611594],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "117",
        tur: "Köpek",
        /* coordinates": [ 411833.045699999667704, 4466894.9012 ] */
        position: [40.3301828, 28.9621138],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "118",
        tur: "Köpek",
        /*coordinates": [ 411769.751400000415742, 4467532.3156 ] */
        position: [40.3359155, 28.9612811],
        ilce: "Mudanya",
        mahalle: "Göynüklü"
    },
    {
        id: "119",
        tur: "Köpek",
        /* coordinates": [ 411223.262900000438094, 4469899.468299999833 ]*/
        position: [40.3571717, 28.9545219],
        ilce: "Mudanya",
        mahalle: "Altıntaş"
    },
    {
        id: "120",
        tur: "Köpek",
        /* coordinates": [ 408864.252399999648333, 4464806.24599999934 ] */
        position: [40.3110577, 28.927483],
        ilce: "Mudanya",
        mahalle: "Çağrışan"
    },
    {
        id: "121",
        tur: "Köpek",
        /* coordinates": [ 391497.254200000315905, 4462929.6743 ] */
        position: [40.2920876, 28.7235431],
        ilce: "Mudanya",
        mahalle: "Hançerli"
    },
    {
        id: "122",
        tur: "Köpek",
        /* coordinates": [ 444062.770100000314415, 4447482.1085 ] */
        position: [40.1581489, 29.3430278],
        ilce: "Kestel",
        mahalle: "Kazancı"
    },
    {
        id: "123",
        tur: "Köpek",
        /* coordinates": [ 443959.692699999548495, 4446848.9187 ] */
        position: [40.1524399, 29.3418731],
        ilce: "Kestel",
        mahalle: "Kazancı"
    },
    {
        id: "124",
        tur: "Diğer",
        /* coordinates": [ 440112.002999999560416, 4457757.432 ] */
        position: [40.2504073, 29.2957019],
        ilce: "Kestel",
        mahalle: "Narlıdere"
    },
    {
        id: "124",
        tur: "Kedi",
        /* coordinates": [ 411037.803600000217557, 4461041.988099999726 ] */
        position: [40.2773979, 28.9535713],
        ilce: "Osmangazi",
        mahalle: "Nilüferköy"
    },

];

export default markers;
