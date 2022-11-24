"use strict";

var am_sadiq = require('./am.sadiq.json');
var ar_jalalayn = require('./ar.jalalayn.json');
var ar_muyassar = require('./ar.muyassar.json');
var az_mammadaliyev = require('./az.mammadaliyev.json');
var az_musayev = require('./az.musayev.json');
var ber_mensur = require('./ber.mensur.json');
var bg_theophanov = require('./bg.theophanov.json');
var bn_bengali = require('./bn.bengali.json');
var bn_hoque = require('./bn.hoque.json');
var bs_korkut = require('./bs.korkut.json');
var bs_mlivo = require('./bs.mlivo.json');
var cs_hrbek = require('./cs.hrbek.json');
var cs_nykl = require('./cs.nykl.json');
var de_aburida = require('./de.aburida.json');
var de_bubenheim = require('./de.bubenheim.json');
var de_khoury = require('./de.khoury.json');
var de_zaidan = require('./de.zaidan.json');
var dv_divehi = require('./dv.divehi.json');
var en_ahmedali = require('./en.ahmedali.json');
var en_ahmedraza = require('./en.ahmedraza.json');
var en_arberry = require('./en.arberry.json');
var en_daryabadi = require('./en.daryabadi.json');
var en_hilali = require('./en.hilali.json');
var en_itani = require('./en.itani.json');
var en_maududi = require('./en.maududi.json');
var en_mubarakpuri = require('./en.mubarakpuri.json');
var en_pickthall = require('./en.pickthall.json');
var en_qarai = require('./en.qarai.json');
var en_qaribullah = require('./en.qaribullah.json');
var en_sahih = require('./en.sahih.json');
var en_sarwar = require('./en.sarwar.json');
var en_shakir = require('./en.shakir.json');
var en_wahiduddin = require('./en.wahiduddin.json');
var en_yusufali = require('./en.yusufali.json');
var es_bornez = require('./es.bornez.json');
var es_cortes = require('./es.cortes.json');
var es_garcia = require('./es.garcia.json');
var fa_ansarian = require('./fa.ansarian.json');
var fa_ayati = require('./fa.ayati.json');
var fa_bahrampour = require('./fa.bahrampour.json');
var fa_fooladvand = require('./fa.fooladvand.json');
var fa_gharaati = require('./fa.gharaati.json');
var fa_ghomshei = require('./fa.ghomshei.json');
var fa_khorramdel = require('./fa.khorramdel.json');
var fa_khorramshahi = require('./fa.khorramshahi.json');
var fa_makarem = require('./fa.makarem.json');
var fa_moezzi = require('./fa.moezzi.json');
var fa_mojtabavi = require('./fa.mojtabavi.json');
var fa_sadeqi = require('./fa.sadeqi.json');
var fa_safavi = require('./fa.safavi.json');
var fr_hamidullah = require('./fr.hamidullah.json');
var ha_gumi = require('./ha.gumi.json');
var hi_farooq = require('./hi.farooq.json');
var hi_hindi = require('./hi.hindi.json');
var id_indonesian = require('./id.indonesian.json');
var id_jalalayn = require('./id.jalalayn.json');
var id_muntakhab = require('./id.muntakhab.json');
var it_piccardo = require('./it.piccardo.json');
var ja_japanese = require('./ja.japanese.json');
var ko_korean = require('./ko.korean.json');
var ku_asan = require('./ku.asan.json');
var ml_abdulhameed = require('./ml.abdulhameed.json');
var ml_karakunnu = require('./ml.karakunnu.json');
var ms_basmeih = require('./ms.basmeih.json');
var nl_keyzer = require('./nl.keyzer.json');
var nl_leemhuis = require('./nl.leemhuis.json');
var nl_siregar = require('./nl.siregar.json');
var no_berg = require('./no.berg.json');
var pl_bielawskiego = require('./pl.bielawskiego.json');
var ps_abdulwali = require('./ps.abdulwali.json');
var pt_elhayek = require('./pt.elhayek.json');
var ro_grigore = require('./ro.grigore.json');
var ru_abuadel = require('./ru.abuadel.json');
var ru_krachkovsky = require('./ru.krachkovsky.json');
var ru_kuliev_alsaadi = require('./ru.kuliev-alsaadi.json');
var ru_kuliev = require('./ru.kuliev.json');
var ru_muntahab = require('./ru.muntahab.json');
var ru_osmanov = require('./ru.osmanov.json');
var ru_porokhova = require('./ru.porokhova.json');
var ru_sablukov = require('./ru.sablukov.json');
var sd_amroti = require('./sd.amroti.json');
var so_abduh = require('./so.abduh.json');
var sq_ahmeti = require('./sq.ahmeti.json');
var sq_mehdiu = require('./sq.mehdiu.json');
var sq_nahi = require('./sq.nahi.json');
var sv_bernstrom = require('./sv.bernstrom.json');
var sw_barwani = require('./sw.barwani.json');
var ta_tamil = require('./ta.tamil.json');
var tg_ayati = require('./tg.ayati.json');
var th_thai = require('./th.thai.json');
var tr_ates = require('./tr.ates.json');
var tr_bulac = require('./tr.bulac.json');
var tr_diyanet = require('./tr.diyanet.json');
var tr_golpinarli = require('./tr.golpinarli.json');
var tr_ozturk = require('./tr.ozturk.json');
var tr_vakfi = require('./tr.vakfi.json');
var tr_yazir = require('./tr.yazir.json');
var tr_yildirim = require('./tr.yildirim.json');
var tr_yuksel = require('./tr.yuksel.json');
var tt_nugman = require('./tt.nugman.json');
var ug_saleh = require('./ug.saleh.json');
var ur_ahmedali = require('./ur.ahmedali.json');
var ur_jalandhry = require('./ur.jalandhry.json');
var ur_jawadi = require('./ur.jawadi.json');
var ur_junagarhi = require('./ur.junagarhi.json');
var ur_kanzuliman = require('./ur.kanzuliman.json');
var ur_maududi = require('./ur.maududi.json');
var ur_najafi = require('./ur.najafi.json');
var ur_qadri = require('./ur.qadri.json');
var uz_sodik = require('./uz.sodik.json');
var zh_jian = require('./zh.jian.json');
var zh_majian = require('./zh.majian.json');
module.exports = {
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