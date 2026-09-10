import shailaputriImg from '../assets/Shailaputri.png';
import brahmacchariniImg from '../assets/Brahmacharini.png';
import chandraghantaImg from '../assets/Chandraghanta.png';
import kushmandaImg from '../assets/Kushmanda.png';
import skandamataImg from '../assets/Skandamata.png';
import katyayaniImg from '../assets/Katyayani.png';
import kalaratriImg from '../assets/Kalaratri.png';
import mahagauriImg from '../assets/Mahagauri.png';
import siddhidatriImg from '../assets/Siddhidhatri.png';
import navdurgaCompositeImg from '../assets/NavDurga All Roops.png';

export interface NavdurgaForm {
  slug: string;
  order: number;
  name: string;
  transliteration: string;
  tithi: string;
  meaning: {
    hindi: string;
    english: string;
  };
  iconography: {
    hindi: string;
    english: string;
  };
  story: {
    hindi: string;
    english: string;
  };
  significance: {
    hindi: string;
    english: string;
  };
  ritual: {
    hindi: string;
    english: string;
  };
  image: {
    url: string;
    alt: string;
    credit: string;
  };
}

// Devotional illustrations for the nine forms and the composite hero image were supplied directly
// by the site owner (client/src/assets). All written content below — meaning, iconography, story,
// significance, ritual — is original writing based on well-established, widely-shared Hindu
// tradition, not copied from any single source.
export const navdurgaForms: NavdurgaForm[] = [
  {
    slug: 'shailaputri',
    order: 1,
    name: 'शैलपुत्री',
    transliteration: 'Shailaputri',
    tithi: 'Pratipada — Day 1',
    meaning: {
      hindi: '"शैल" अर्थात् पर्वत और "पुत्री" अर्थात् पुत्री — पर्वतराज हिमालय की पुत्री।',
      english: '"Shaila" means mountain and "putri" means daughter — the daughter of the Himalayas.',
    },
    iconography: {
      hindi: 'दो भुजाओं में विराजमान, दाहिने हाथ में त्रिशूल और बाएँ हाथ में कमल धारण किए, वृषभ (नंदी) पर सवार।',
      english: 'Depicted with two arms, holding a trident in her right hand and a lotus in her left, seated upon the bull Nandi.',
    },
    story: {
      hindi:
        'पौराणिक कथा के अनुसार, सती ने अपने पिता दक्ष द्वारा शिव के अपमान से क्षुब्ध होकर यज्ञकुंड में अपने प्राण त्याग दिए थे। अगले जन्म में वे हिमालयराज की पुत्री के रूप में जन्मीं और शैलपुत्री कहलाईं — यही रूप आगे चलकर पुनः शिव की अर्धांगिनी बना।',
      english:
        "According to tradition, Sati immolated herself in the sacrificial fire after her father Daksha insulted Shiva. In her next birth she was born as the daughter of the Himalayas, becoming Shailaputri — the form in which she would once again become Shiva's consort.",
    },
    significance: {
      hindi: 'शैलपुत्री नवरात्रि की यात्रा का प्रारंभ बिंदु हैं — वे प्रकृति और मूल शक्ति की प्रतीक मानी जाती हैं, और पार्वती के रूप में पूजी जाती हैं।',
      english: 'Shailaputri marks the starting point of the Navaratri journey — she is seen as a symbol of nature and primal energy, and is worshipped as an early form of Parvati.',
    },
    ritual: {
      hindi:
        'नवरात्रि के पहले दिन घटस्थापना (कलश-स्थापना) की जाती है, जिससे नौ दिनों के व्रत और पूजा का आरंभ होता है। भक्त इस दिन घी का भोग अर्पित करते हैं और अपने नौ दिवसीय संकल्प की शुरुआत करते हैं।',
      english: "Ghatasthapana (the ritual installation of the sacred kalash) is performed on this first day, marking the start of the nine-day vrat and worship. Devotees offer ghee and begin their nine-day resolve on this day.",
    },
    image: {
      url: shailaputriImg,
      alt: 'Devotional illustration of Devi Shailaputri, seated on Nandi with a trident and lotus',
      credit: '',
    },
  },
  {
    slug: 'brahmacharini',
    order: 2,
    name: 'ब्रह्मचारिणी',
    transliteration: 'Brahmacharini',
    tithi: 'Dwitiya — Day 2',
    meaning: {
      hindi: '"ब्रह्म" अर्थात् तप और "चारिणी" अर्थात् आचरण करने वाली — कठोर तपस्या करने वाली देवी।',
      english: '"Brahma" here means penance/austerity and "charini" means one who practises it — the goddess of intense tapasya.',
    },
    iconography: {
      hindi: 'दो भुजाओं में, दाहिने हाथ में जपमाला (रुद्राक्ष माला) और बाएँ हाथ में कमंडल धारण किए, श्वेत वस्त्रों में सुशोभित।',
      english: 'Depicted with two arms, holding a rosary of prayer beads in her right hand and a kamandalu (water pot) in her left, dressed simply in white.',
    },
    story: {
      hindi:
        'यह पार्वती का वह रूप है जब उन्होंने शिव को पति रूप में पाने के लिए हजारों वर्षों तक कठोर तपस्या की — कभी केवल पत्तों पर जीवित रहीं (इसीलिए उन्हें अपर्णा भी कहा जाता है), और अंततः अन्न-जल का त्याग तक कर दिया।',
      english: 'This is the form of Parvati during her thousand-year penance to win Shiva as her husband — for a time she lived on nothing but leaves (hence her other name, Aparna), and eventually gave up even that.',
    },
    significance: {
      hindi: 'ब्रह्मचारिणी तप, संयम और दृढ़ संकल्प की प्रतीक हैं — वे सिखाती हैं कि सच्ची इच्छा-शक्ति और अनुशासन से कोई भी लक्ष्य पाया जा सकता है।',
      english: 'Brahmacharini symbolises penance, self-discipline and unwavering resolve — she teaches that true willpower and discipline can achieve any goal.',
    },
    ritual: {
      hindi: 'इस दिन भक्त शक्कर या शक्कर-मिश्रित दूध का भोग अर्पित करते हैं और संयम, त्याग व एकाग्रता पर ध्यान केंद्रित करते हैं।',
      english: 'On this day devotees offer sugar, or milk sweetened with sugar, and focus their meditation on restraint, renunciation and concentration.',
    },
    image: {
      url: brahmacchariniImg,
      alt: 'Devotional illustration of Devi Brahmacharini with a rosary and kamandalu',
      credit: '',
    },
  },
  {
    slug: 'chandraghanta',
    order: 3,
    name: 'चंद्रघंटा',
    transliteration: 'Chandraghanta',
    tithi: 'Tritiya — Day 3',
    meaning: {
      hindi: '"चंद्र" अर्थात् चंद्रमा और "घंटा" अर्थात् घंटी — जिनके ललाट पर घंटी के आकार का अर्धचंद्र सुशोभित है।',
      english: '"Chandra" means moon and "ghanta" means bell — she who wears a bell-shaped crescent moon upon her forehead.',
    },
    iconography: {
      hindi: 'स्वर्णिम कांति, दस भुजाओं में विविध अस्त्र-शस्त्र धारण किए, तीन नेत्र, सिंह पर सवार।',
      english: 'Golden-complexioned, bearing an array of weapons across her ten arms, with three eyes, riding a lion.',
    },
    story: {
      hindi:
        'शिव से विवाह के पश्चात् पार्वती ने अपने ललाट पर अर्धचंद्र धारण किया — यही रूप चंद्रघंटा कहलाया। युद्ध के लिए सन्नद्ध यह रूप शौर्य और सौम्यता दोनों का संगम है।',
      english: "After her marriage to Shiva, Parvati began adorning her forehead with the crescent moon — this became her form as Chandraghanta, battle-ready yet composed, a union of ferocity and grace.",
    },
    significance: {
      hindi: 'चंद्रघंटा वीरता और कृपा के संतुलन की प्रतीक हैं — कहा जाता है कि उनकी घंटी की ध्वनि नकारात्मक शक्तियों का नाश करती है।',
      english: "Chandraghanta represents the balance of bravery and grace — her bell is said to sound out and destroy negative forces.",
    },
    ritual: {
      hindi: 'इस दिन दूध या खीर का भोग अर्पित किया जाता है, और देवी को लाल पुष्प चढ़ाए जाते हैं।',
      english: 'Milk or kheer (rice pudding) is offered on this day, along with red flowers.',
    },
    image: {
      url: chandraghantaImg,
      alt: 'Devotional illustration of Devi Chandraghanta riding a tiger',
      credit: '',
    },
  },
  {
    slug: 'kushmanda',
    order: 4,
    name: 'कूष्माण्डा',
    transliteration: 'Kushmanda',
    tithi: 'Chaturthi — Day 4',
    meaning: {
      hindi: '"कु" अर्थात् थोड़ा, "उष्मा" अर्थात् ऊर्जा/ताप, और "अण्ड" अर्थात् अंड — अपनी मंद मुसकान से ब्रह्मांड की रचना करने वाली देवी।',
      english: '"Ku" (a little), "ushma" (warmth/energy) and "anda" (cosmic egg) — the goddess who is said to have created the universe with her gentle smile.',
    },
    iconography: {
      hindi: 'आठ भुजाओं में कमंडल, धनुष-बाण, कमल, चक्र, गदा तथा अमृत-कलश धारण किए, सिंह अथवा व्याघ्र पर सवार।',
      english: 'Depicted with eight arms holding a kamandalu, bow and arrow, lotus, discus, mace and a pot of nectar, riding a lion or tiger.',
    },
    story: {
      hindi:
        'माना जाता है कि जब सृष्टि में सर्वत्र अंधकार था, तब कूष्माण्डा ने अपनी मंद हास्य से ब्रह्मांड की रचना की। वे सूर्य के गर्भ में निवास करती हैं और उसे ऊर्जा प्रदान करती हैं।',
      english: 'It is said that when the universe lay in total darkness, Kushmanda created it with her gentle smile. She is believed to reside within the sun itself, giving it its radiant energy.',
    },
    significance: {
      hindi: 'कूष्माण्डा सृजनात्मक ऊर्जा और ब्रह्मांडीय प्रकाश की स्रोत मानी जाती हैं।',
      english: 'Kushmanda is regarded as the source of creative energy and cosmic light.',
    },
    ritual: {
      hindi: 'इस दिन मालपुए का भोग तथा कुम्हड़े (कूष्माण्ड/पेठा) से बने व्यंजन अर्पित करने की परंपरा है।',
      english: 'It is traditional on this day to offer malpua (a sweet pancake) and dishes made from pumpkin (kushmanda/petha).',
    },
    image: {
      url: kushmandaImg,
      alt: 'Devotional illustration of Devi Kushmanda riding a lion',
      credit: '',
    },
  },
  {
    slug: 'skandamata',
    order: 5,
    name: 'स्कंदमाता',
    transliteration: 'Skandamata',
    tithi: 'Panchami — Day 5',
    meaning: {
      hindi: '"स्कंद" अर्थात् कार्तिकेय और "माता" अर्थात् माँ — देवसेनापति स्कंद (कार्तिकेय) की माता।',
      english: '"Skanda" refers to Kartikeya, commander of the divine armies, and "mata" means mother — the mother of Skanda.',
    },
    iconography: {
      hindi: 'चार भुजाओं में विराजमान, गोद में शिशु स्कंद को बिठाए, एक हाथ में कमल धारण किए, सिंह पर सवार।',
      english: 'Depicted with four arms, cradling the infant Skanda in her lap, holding a lotus in one hand, seated upon a lion.',
    },
    story: {
      hindi: 'यह पार्वती का वह रूप है जब वे कार्तिकेय की माता बनीं — कार्तिकेय को आगे चलकर देवताओं की सेना का नेतृत्व कर तारकासुर का वध करना था।',
      english: 'This is the form of Parvati as mother of Kartikeya, who was destined to lead the army of the gods and slay the demon Tarakasura.',
    },
    significance: {
      hindi: 'स्कंदमाता मातृत्व, वात्सल्य और संरक्षण की भावना का प्रतीक हैं।',
      english: 'Skandamata embodies motherhood, tenderness and protective love.',
    },
    ritual: {
      hindi: 'इस दिन केले का भोग अर्पित किया जाता है, और पूजा में माँ के वात्सल्य रूप पर विशेष ध्यान दिया जाता है।',
      english: "Bananas are offered on this day, and worship centres particularly on the goddess's nurturing, maternal aspect.",
    },
    image: {
      url: skandamataImg,
      alt: 'Devotional illustration of Devi Skandamata with the infant Skanda, seated on a lion',
      credit: '',
    },
  },
  {
    slug: 'katyayani',
    order: 6,
    name: 'कात्यायनी',
    transliteration: 'Katyayani',
    tithi: 'Shashthi — Day 6',
    meaning: {
      hindi: 'महर्षि कात्यायन के आश्रम में पुत्री रूप में जन्म लेने के कारण देवी कात्यायनी कहलाईं।',
      english: 'Named for having been born as the daughter of the sage Katyayana, after his long penance to have the goddess born to him.',
    },
    iconography: {
      hindi: 'चार भुजाओं में विराजमान, स्वर्णिम कांति, हाथ में खड्ग और कमल धारण किए, सिंह पर सवार।',
      english: 'Depicted with four arms and a golden complexion, bearing a sword and lotus, seated upon a lion.',
    },
    story: {
      hindi: 'महिषासुर के अत्याचार से त्रस्त होकर सभी देवताओं ने अपने-अपने तेज से एक संयुक्त शक्ति उत्पन्न की, जिसने महर्षि कात्यायन के आश्रम में जन्म लिया — यही कात्यायनी, महिषासुर-वध के लिए प्रकट हुई योद्धा देवी।',
      english: 'Tormented by the demon Mahishasura, the gods combined their collective radiance into a single power, which took birth in the hermitage of the sage Katyayana — this warrior form, Katyayani, arose specifically to slay Mahishasura.',
    },
    significance: {
      hindi: 'कात्यायनी साहस और वीरता की प्रतीक हैं — दुर्गा-महिषासुर संग्राम की कथा में वे केंद्रीय भूमिका निभाती हैं।',
      english: 'Katyayani represents courage and valour, and holds a central place in the narrative of the battle between the goddess and Mahishasura.',
    },
    ritual: {
      hindi: 'इस दिन मधु (शहद) का भोग अर्पित किया जाता है; लोक-परंपरा में अविवाहित कन्याएँ भी इस दिन देवी की आराधना करती हैं।',
      english: 'Honey is offered on this day; in folk tradition, unmarried women also worship her on this day.',
    },
    image: {
      url: katyayaniImg,
      alt: 'Devotional illustration of Devi Katyayani riding a lion, bearing a sword',
      credit: '',
    },
  },
  {
    slug: 'kalaratri',
    order: 7,
    name: 'कालरात्रि',
    transliteration: 'Kalaratri',
    tithi: 'Saptami — Day 7',
    meaning: {
      hindi: '"काल" अर्थात् समय/मृत्यु और "रात्रि" अर्थात् रात्रि — नवदुर्गा का सबसे उग्र रूप।',
      english: '"Kala" means time or death, and "ratri" means night — the fiercest of the nine forms.',
    },
    iconography: {
      hindi: 'श्याम वर्ण, बिखरे केश, तीन नेत्र, चार भुजाओं में खड्ग और लौह-कील धारण किए, गर्दभ पर सवार। भयंकर रूप के बावजूद वे शुभंकरी भी कहलाती हैं, क्योंकि वे सदैव भक्तों का शुभ करती हैं।',
      english: "Dark-complexioned, with dishevelled hair, three eyes, bearing a sword and an iron hook across four arms, riding a donkey. Despite her fearsome form she is also called Shubhankari — 'the auspicious one' — for she always brings good to her devotees.",
    },
    story: {
      hindi: 'दुष्ट शक्तियों के संहार हेतु पार्वती ने अपना गौर वर्ण त्यागकर यह श्याम, उग्र रूप धारण किया — कालरात्रि अज्ञान और अंधकार के विनाश की प्रतीक हैं।',
      english: 'To destroy evil forces, Parvati shed her fair complexion and took on this dark, fierce form — Kalaratri stands for the destruction of ignorance and darkness.',
    },
    significance: {
      hindi: 'कालरात्रि भय और बुराई पर विजय की देवी हैं — उनका भयावह रूप भक्तों के लिए नहीं, अपितु दुष्ट शक्तियों के लिए है।',
      english: 'Kalaratri is the goddess of triumph over fear and evil — her terrifying form is meant not for her devotees, but for malevolent forces.',
    },
    ritual: {
      hindi: 'इस दिन गुड़ का भोग अर्पित किया जाता है, और कई स्थानों पर रात्रि-जागरण की परंपरा निभाई जाती है।',
      english: 'Jaggery is offered on this day, and in many places devotees keep a night-long vigil (jagran).',
    },
    image: {
      url: kalaratriImg,
      alt: 'Devotional illustration of Devi Kalaratri, dark-complexioned, riding a donkey',
      credit: '',
    },
  },
  {
    slug: 'mahagauri',
    order: 8,
    name: 'महागौरी',
    transliteration: 'Mahagauri',
    tithi: 'Ashtami — Day 8',
    meaning: {
      hindi: '"महा" अर्थात् महान और "गौरी" अर्थात् गौर वर्ण वाली — अत्यंत उज्ज्वल कांति वाली देवी।',
      english: '"Maha" means great and "Gauri" means fair-complexioned — the goddess of radiant, luminous beauty.',
    },
    iconography: {
      hindi: 'चार भुजाओं में विराजमान, गौर वर्ण, वृषभ अथवा श्वेत गजराज पर सवार, हाथों में त्रिशूल और डमरू धारण किए।',
      english: 'Depicted with four arms and a fair complexion, riding a bull or a white elephant, holding a trident and a damaru (drum).',
    },
    story: {
      hindi: 'दीर्घ तपस्या से पार्वती का शरीर श्याम पड़ गया था; प्रसन्न होकर शिव ने उन्हें गंगाजल से स्नान कराया, जिससे उनका वर्ण पुनः उज्ज्वल गौर हो गया — यही रूप महागौरी कहलाया।',
      english: "Parvati's body darkened through her long penance; pleased with her devotion, Shiva bathed her with the waters of the Ganga, restoring her radiant, fair complexion — this became her form as Mahagauri.",
    },
    significance: {
      hindi: 'महागौरी शांति, पवित्रता और घोर तपस्या के पश्चात् प्राप्त शांति का प्रतीक हैं।',
      english: 'Mahagauri symbolises purity and the calm that follows intense penance and struggle.',
    },
    ritual: {
      hindi: 'अष्टमी के दिन अनेक घरों में कन्या-पूजन किया जाता है, जिसमें छोटी कन्याओं को देवी का साक्षात् रूप मानकर पूजा जाता है; नारियल का भोग अर्पित किया जाता है।',
      english: "Kanya Pujan — the ritual worship of young girls as living forms of the goddess — is widely performed on this Ashtami day in many households; coconut is offered.",
    },
    image: {
      url: mahagauriImg,
      alt: 'Devotional illustration of Devi Mahagauri, fair-complexioned, riding a bull',
      credit: '',
    },
  },
  {
    slug: 'siddhidatri',
    order: 9,
    name: 'सिद्धिदात्री',
    transliteration: 'Siddhidatri',
    tithi: 'Navami — Day 9',
    meaning: {
      hindi: '"सिद्धि" अर्थात् दिव्य सिद्धियाँ/सिद्धता और "दात्री" अर्थात् देने वाली — सिद्धियाँ प्रदान करने वाली देवी।',
      english: '"Siddhi" means spiritual accomplishment or supernatural power, and "datri" means giver — the goddess who bestows these attainments.',
    },
    iconography: {
      hindi: 'चार भुजाओं में विराजमान, कमल-आसन पर स्थित, हाथों में कमल, गदा, शंख और चक्र धारण किए।',
      english: 'Depicted with four arms, seated upon a lotus, holding a lotus, mace, conch and discus.',
    },
    story: {
      hindi:
        'कहा जाता है कि सिद्धिदात्री की कृपा से ही शिव ने अष्ट सिद्धियाँ प्राप्त कीं, और यही कारण है कि उन्हें अर्धनारीश्वर रूप में भी पूजा जाता है — देवी की शक्ति और शिव के तप का संयुक्त रूप।',
      english: "It is said that it was through Siddhidatri's grace that Shiva attained all eight siddhis — which is why he is also worshipped in his Ardhanarishvara form, representing the union of the goddess's shakti and his own tapas.",
    },
    significance: {
      hindi: 'सिद्धिदात्री नवरात्रि यात्रा की परिणति और देवी-शक्ति की पूर्णता का प्रतीक हैं।',
      english: "Siddhidatri marks the culmination of the Navaratri journey — the fullness and completion of the goddess's power.",
    },
    ritual: {
      hindi: 'नवमी के दिन अंतिम कन्या-पूजन अथवा हवन संपन्न किया जाता है, जिसके साथ नौ दिवसीय व्रत पूर्ण होता है; अगले दिन विजयादशमी (दशहरा) मनाई जाती है।',
      english: 'A final Kanya Pujan or havan (fire ritual) is performed on Navami, completing the nine-day vrat; Vijayadashami (Dussehra) follows the next day.',
    },
    image: {
      url: siddhidatriImg,
      alt: 'Devotional illustration of Devi Siddhidatri seated on a lotus',
      credit: '',
    },
  },
];

export const navdurgaHeroImage = {
  url: navdurgaCompositeImg,
  alt: 'Maa Durga in her complete form at the centre, surrounded by all nine forms of Navdurga',
  credit: '',
};
