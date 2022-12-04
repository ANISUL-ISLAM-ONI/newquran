"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE = './src/quranfiles/translations/';
var am_sadiq = BASE + 'am.sadiq.json';
var ar_jalalayn = BASE + 'ar.jalalayn.json';
var ar_muyassar = BASE + 'ar.muyassar.json';
var az_mammadaliyev = BASE + 'az.mammadaliyev.json';
var az_musayev = BASE + 'az.musayev.json';
var ber_mensur = BASE + 'ber.mensur.json';
var bg_theophanov = BASE + 'bg.theophanov.json';
var bn_bengali = BASE + 'bn.bengali.json';
var bn_hoque = BASE + 'bn.hoque.json';
var bs_korkut = BASE + 'bs.korkut.json';
var bs_mlivo = BASE + 'bs.mlivo.json';
var cs_hrbek = BASE + 'cs.hrbek.json';
var cs_nykl = BASE + 'cs.nykl.json';
var de_aburida = BASE + 'de.aburida.json';
var de_bubenheim = BASE + 'de.bubenheim.json';
var de_khoury = BASE + 'de.khoury.json';
var de_zaidan = BASE + 'de.zaidan.json';
var dv_divehi = BASE + 'dv.divehi.json';
var en_ahmedali = BASE + 'en.ahmedali.json';
var en_ahmedraza = BASE + 'en.ahmedraza.json';
var en_arberry = BASE + 'en.arberry.json';
var en_daryabadi = BASE + 'en.daryabadi.json';
var en_hilali = BASE + 'en.hilali.json';
var en_itani = BASE + 'en.itani.json';
var en_maududi = BASE + 'en.maududi.json';
var en_mubarakpuri = BASE + 'en.mubarakpuri.json';
var en_pickthall = BASE + 'en.pickthall.json';
var en_qarai = BASE + 'en.qarai.json';
var en_qaribullah = BASE + 'en.qaribullah.json';
var en_sahih = BASE + 'en.sahih.json';
var en_sarwar = BASE + 'en.sarwar.json';
var en_shakir = BASE + 'en.shakir.json';
var en_wahiduddin = BASE + 'en.wahiduddin.json';
var en_yusufali = BASE + 'en.yusufali.json';
var es_bornez = BASE + 'es.bornez.json';
var es_cortes = BASE + 'es.cortes.json';
var es_garcia = BASE + 'es.garcia.json';
var fa_ansarian = BASE + 'fa.ansarian.json';
var fa_ayati = BASE + 'fa.ayati.json';
var fa_bahrampour = BASE + 'fa.bahrampour.json';
var fa_fooladvand = BASE + 'fa.fooladvand.json';
var fa_gharaati = BASE + 'fa.gharaati.json';
var fa_ghomshei = BASE + 'fa.ghomshei.json';
var fa_khorramdel = BASE + 'fa.khorramdel.json';
var fa_khorramshahi = BASE + 'fa.khorramshahi.json';
var fa_makarem = BASE + 'fa.makarem.json';
var fa_moezzi = BASE + 'fa.moezzi.json';
var fa_mojtabavi = BASE + 'fa.mojtabavi.json';
var fa_sadeqi = BASE + 'fa.sadeqi.json';
var fa_safavi = BASE + 'fa.safavi.json';
var fr_hamidullah = BASE + 'fr.hamidullah.json';
var ha_gumi = BASE + 'ha.gumi.json';
var hi_farooq = BASE + 'hi.farooq.json';
var hi_hindi = BASE + 'hi.hindi.json';
var id_indonesian = BASE + 'id.indonesian.json';
var id_jalalayn = BASE + 'id.jalalayn.json';
var id_muntakhab = BASE + 'id.muntakhab.json';
var it_piccardo = BASE + 'it.piccardo.json';
var ja_japanese = BASE + 'ja.japanese.json';
var ko_korean = BASE + 'ko.korean.json';
var ku_asan = BASE + 'ku.asan.json';
var ml_abdulhameed = BASE + 'ml.abdulhameed.json';
var ml_karakunnu = BASE + 'ml.karakunnu.json';
var ms_basmeih = BASE + 'ms.basmeih.json';
var nl_keyzer = BASE + 'nl.keyzer.json';
var nl_leemhuis = BASE + 'nl.leemhuis.json';
var nl_siregar = BASE + 'nl.siregar.json';
var no_berg = BASE + 'no.berg.json';
var pl_bielawskiego = BASE + 'pl.bielawskiego.json';
var ps_abdulwali = BASE + 'ps.abdulwali.json';
var pt_elhayek = BASE + 'pt.elhayek.json';
var ro_grigore = BASE + 'ro.grigore.json';
var ru_abuadel = BASE + 'ru.abuadel.json';
var ru_krachkovsky = BASE + 'ru.krachkovsky.json';
var ru_kuliev_alsaadi = BASE + 'ru.kuliev-alsaadi.json';
var ru_kuliev = BASE + 'ru.kuliev.json';
var ru_muntahab = BASE + 'ru.muntahab.json';
var ru_osmanov = BASE + 'ru.osmanov.json';
var ru_porokhova = BASE + 'ru.porokhova.json';
var ru_sablukov = BASE + 'ru.sablukov.json';
var sd_amroti = BASE + 'sd.amroti.json';
var so_abduh = BASE + 'so.abduh.json';
var sq_ahmeti = BASE + 'sq.ahmeti.json';
var sq_mehdiu = BASE + 'sq.mehdiu.json';
var sq_nahi = BASE + 'sq.nahi.json';
var sv_bernstrom = BASE + 'sv.bernstrom.json';
var sw_barwani = BASE + 'sw.barwani.json';
var ta_tamil = BASE + 'ta.tamil.json';
var tg_ayati = BASE + 'tg.ayati.json';
var th_thai = BASE + 'th.thai.json';
var tr_ates = BASE + 'tr.ates.json';
var tr_bulac = BASE + 'tr.bulac.json';
var tr_diyanet = BASE + 'tr.diyanet.json';
var tr_golpinarli = BASE + 'tr.golpinarli.json';
var tr_ozturk = BASE + 'tr.ozturk.json';
var tr_vakfi = BASE + 'tr.vakfi.json';
var tr_yazir = BASE + 'tr.yazir.json';
var tr_yildirim = BASE + 'tr.yildirim.json';
var tr_yuksel = BASE + 'tr.yuksel.json';
var tt_nugman = BASE + 'tt.nugman.json';
var ug_saleh = BASE + 'ug.saleh.json';
var ur_ahmedali = BASE + 'ur.ahmedali.json';
var ur_jalandhry = BASE + 'ur.jalandhry.json';
var ur_jawadi = BASE + 'ur.jawadi.json';
var ur_junagarhi = BASE + 'ur.junagarhi.json';
var ur_kanzuliman = BASE + 'ur.kanzuliman.json';
var ur_maududi = BASE + 'ur.maududi.json';
var ur_najafi = BASE + 'ur.najafi.json';
var ur_qadri = BASE + 'ur.qadri.json';
var uz_sodik = BASE + 'uz.sodik.json';
var zh_jian = BASE + 'zh.jian.json';
var zh_majian = BASE + 'zh.majian.json';
var _default = {
  'Amharic : Muhammed Sadiq and Muhammed Sani Habib': am_sadiq,
  'Arabic : Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti': ar_jalalayn,
  'Arabic : King Fahad Quran Complex': ar_muyassar,
  'Azerbaijani : Vasim Mammadaliyev and Ziya Bunyadov': az_mammadaliyev,
  'Azerbaijani : Alikhan Musayev': az_musayev,
  'Amazigh : Ramdane At Mansour': ber_mensur,
  'Bulgarian : Tzvetan Theophanov': bg_theophanov,
  'Bengali : Muhiuddin Khan': bn_bengali,
  'Bengali : Zohurul Hoque': bn_hoque,
  'Bosnian : Besim Korkut': bs_korkut,
  'Bosnian : Mustafa Mlivo': bs_mlivo,
  'Czech : Preklad I. Hrbek': cs_hrbek,
  'Czech : A. R. Nykl': cs_nykl,
  'German : Abu Rida Muhammad ibn Ahmad ibn Rassoul': de_aburida,
  'German : A. S. F. Bubenheim and N. Elyas': de_bubenheim,
  'German : Adel Theodor Khoury': de_khoury,
  'German : Amir Zaidan': de_zaidan,
  'Divehi : Office of the President of Maldives': dv_divehi,
  'English : Ahmed Ali': en_ahmedali,
  'English : Ahmed Raza Khan': en_ahmedraza,
  'English : A. J. Arberry': en_arberry,
  'English : Abdul Majid Daryabadi': en_daryabadi,
  'English : Muhammad Taqi-ud-Din al-Hilali and Muhammad Muhsin Khan': en_hilali,
  'English : Talal Itani': en_itani,
  'English : Abul Ala Maududi': en_maududi,
  'English : Safi-ur-Rahman al-Mubarakpuri': en_mubarakpuri,
  'English : Mohammed Marmaduke William Pickthall': en_pickthall,
  'English : Ali Quli Qarai': en_qarai,
  'English : Hasan al-Fatih Qaribullah and Ahmad Darwish': en_qaribullah,
  'English : Saheeh International': en_sahih,
  'English : Muhammad Sarwar': en_sarwar,
  'English : Mohammad Habib Shakir': en_shakir,
  'English : Wahiduddin Khan': en_wahiduddin,
  'English : Abdullah Yusuf Ali': en_yusufali,
  'Spanish : Raúl González Bórnez': es_bornez,
  'Spanish : Julio Cortes ': es_cortes,
  'Spanish : Muhammad Isa García': es_garcia,
  'Persian : Hussain Ansarian': fa_ansarian,
  'Persian : AbdolMohammad Ayati': fa_ayati,
  'Persian : Abolfazl Bahrampour': fa_bahrampour,
  'Persian : Mohammad Mahdi Fooladvand': fa_fooladvand,
  'Persian : Mohsen Gharaati': fa_gharaati,
  'Persian : Mahdi Elahi Ghomshei': fa_ghomshei,
  'Persian : Mostafa Khorramdel': fa_khorramdel,
  'Persian : Bahaoddin Khorramshahi': fa_khorramshahi,
  'Persian : Naser Makarem Shirazi': fa_makarem,
  'Persian : Mohammad Kazem Moezzi': fa_moezzi,
  'Persian : Sayyed Jalaloddin Mojtabavi': fa_mojtabavi,
  'Persian : Mohammad Sadeqi Tehrani': fa_sadeqi,
  'Persian : Sayyed Mohammad Reza Safavi': fa_safavi,
  'French : Muhammad Hamidullah': fr_hamidullah,
  'Hausa : Abubakar Mahmoud Gumi': ha_gumi,
  'Hindi : Muhammad Farooq Khan and Muhammad Ahmed ': hi_farooq,
  'Hindi : Suhel Farooq Khan and Saifur Rahman Nadwi': hi_hindi,
  'Indonesian : Indonesian Ministry of Religious Affairs': id_indonesian,
  'Indonesian : Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti': id_jalalayn,
  'Indonesian : Muhammad Quraish Shihab et al.': id_muntakhab,
  'Italian : Hamza Roberto Piccardo': it_piccardo,
  'Japanese : Japanese National': ja_japanese,
  'Korean : Korean National': ko_korean,
  'Kurdish : Burhan Muhammad-Amin': ku_asan,
  'Malayalam : Cheriyamundam Abdul Hameed and Kunhi Mohammed Parappoor': ml_abdulhameed,
  'Malayalam : Muhammad Karakunnu and Vanidas Elayavoor': ml_karakunnu,
  'Malay : Abdullah Muhammad Basmeih': ms_basmeih,
  'Dutch : Salomo Keyzer': nl_keyzer,
  'Dutch : Fred Leemhuis': nl_leemhuis,
  'Dutch : Sofian S. Siregar': nl_siregar,
  'Norwegian : Einar Berg': no_berg,
  'Polish : Józefa Bielawskiego': pl_bielawskiego,
  'Pashto : Abdulwali Khan': ps_abdulwali,
  'Portuguese : Samir El-Hayek ': pt_elhayek,
  'Romanian : George Grigore': ro_grigore,
  'Russian : Abu Adel': ru_abuadel,
  'Russian : Ignaty Yulianovich Krachkovsky': ru_krachkovsky,
  'Russian : Elmir Kuliev (with Abd ar-Rahman as-Saadis commentaries)': ru_kuliev_alsaadi,
  'Russian : Elmir Kuliev': ru_kuliev,
  'Russian : Ministry of Awqaf, Egypt': ru_muntahab,
  'Russian : Magomed-Nuri Osmanovich Osmanov': ru_osmanov,
  'Russian : V. Porokhova': ru_porokhova,
  'Russian : Gordy Semyonovich Sablukov': ru_sablukov,
  'Sindhi : Taj Mehmood Amroti': sd_amroti,
  'Somali : Mahmud Muhammad Abduh': so_abduh,
  'Albanian : Sherif Ahmeti': sq_ahmeti,
  'Albanian : Feti Mehdiu': sq_mehdiu,
  'Albanian : Hasan Efendi Nahi': sq_nahi,
  'Swedish : Knut Bernström': sv_bernstrom,
  'Swahili : Ali Muhsin Al-Barwani': sw_barwani,
  'Tamil : Jan Turst Foundation': ta_tamil,
  'Tajik : AbdolMohammad Ayati': tg_ayati,
  'Thai : King Fahad Quran Complex': th_thai,
  'Turkish : Suleyman Ates': tr_ates,
  'Turkish : Alİ Bulaç': tr_bulac,
  'Turkish : Diyanet Isleri': tr_diyanet,
  'Turkish : Abdulbaki Golpinarli': tr_golpinarli,
  'Turkish : Yasar Nuri Ozturk': tr_ozturk,
  'Turkish : Diyanet Vakfi': tr_vakfi,
  'Turkish : Elmalili Hamdi Yazir': tr_yazir,
  'Turkish : Suat Yildirim': tr_yildirim,
  'Turkish : Edip Yüksel': tr_yuksel,
  'Tatar : Yakub Ibn Nugman': tt_nugman,
  'Uyghur : Muhammad Saleh': ug_saleh,
  'Urdu : Ahmed Ali': ur_ahmedali,
  'Urdu : Fateh Muhammad Jalandhry': ur_jalandhry,
  'Urdu : Syed Zeeshan Haider Jawadi': ur_jawadi,
  'Urdu : Muhammad Junagarhi': ur_junagarhi,
  'Urdu : Ahmed Raza Khan': ur_kanzuliman,
  'Urdu : Abul Aala Maududi': ur_maududi,
  'Urdu : Muhammad Hussain Najafi': ur_najafi,
  'Urdu : Tahir ul Qadri': ur_qadri,
  'Uzbek : Muhammad Sodik Muhammad Yusuf': uz_sodik,
  'Chinese : Ma Jian': zh_jian,
  'Chinese : Ma Jian (Traditional)': zh_majian
};
exports["default"] = _default;