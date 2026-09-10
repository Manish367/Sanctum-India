import type { TempleSeedInput } from './types';

// The common frame — Sati's self-immolation and Shiva's grief-stricken Tandava — is shared
// across every Shakti Peetha. Each entry's first two chapters retell that shared frame briefly,
// then the third/fourth chapter narrows to what is specific to that site (which body part fell
// there, and any distinct local legend). This avoids 51 near-identical walls of text while still
// grounding every single page in the same coherent story.

const satiChapter1 = {
  chapterTitle: { english: "Sati's Grief", hindi: 'सती का विषाद' },
  order: 1,
  text: {
    english:
      "Sati, daughter of Daksha Prajapati, married Shiva against her father's wishes. When Daksha held a grand yajna and deliberately excluded Shiva from the invitation, Sati went anyway — uninvited — hoping to reconcile her father and husband.",
    hindi:
      'सती, दक्ष प्रजापति की पुत्री, ने अपने पिता की इच्छा के विरुद्ध शिव से विवाह किया। जब दक्ष ने एक भव्य यज्ञ आयोजित किया और जानबूझकर शिव को निमंत्रण से वंचित रखा, तो सती फिर भी — बिना निमंत्रण के — अपने पिता और पति में सुलह की आशा लिए वहाँ पहुँचीं।',
  },
};

const satiChapter2 = {
  chapterTitle: { english: "The Self-Immolation and Shiva's Tandava", hindi: 'आत्मदाह और शिव का तांडव' },
  order: 2,
  text: {
    english:
      "At the yajna, Daksha publicly insulted Shiva before the assembled gods and sages. Unable to bear the humiliation of her husband, Sati gave up her own life in the sacrificial fire. Grief-stricken and enraged, Shiva arrived, destroyed the yajna, and carried Sati's body across the cosmos in the Rudra Tandava, a dance of cosmic destruction that threatened to unmake creation itself.",
    hindi:
      'यज्ञ में दक्ष ने एकत्रित देवताओं और ऋषियों के समक्ष सार्वजनिक रूप से शिव का अपमान किया। अपने पति के इस अपमान को सहन न कर सकने के कारण सती ने यज्ञकुंड में अपने प्राण त्याग दिए। शोक और क्रोध से भरे शिव वहाँ पहुँचे, यज्ञ को विध्वंस कर दिया, और सती के शरीर को लेकर रुद्र तांडव करते हुए ब्रह्मांड भर में विचरण करने लगे — विनाश का यह नृत्य सृष्टि को ही समाप्त कर देने की कगार पर पहुँच गया।',
  },
};

export const shaktiPeethas: TempleSeedInput[] = [
  {
    slug: 'kamakhya',
    name: 'Kamakhya',
    type: 'shakti-peetha',
    state: 'Assam',
    city: 'Guwahati (Nilachal Hill)',
    deity: 'Devi (as Kamakhya)',
    associatedDeity: 'Umananda',
    bodyPart: 'Yoni (womb/genitals)',
    overview: {
      english:
        'Atop Nilachal Hill overlooking the Brahmaputra, Kamakhya is among the most important Shakti Peethas and a major centre of Tantric worship — unusual for having no idol; the goddess is worshipped directly as a natural rock cleft representing the yoni.',
      hindi:
        'ब्रह्मपुत्र नदी के दृश्य वाले नीलाचल पर्वत पर स्थित कामाख्या सबसे महत्वपूर्ण शक्तिपीठों में से एक और तांत्रिक उपासना का प्रमुख केंद्र है — यह इस दृष्टि से असामान्य है कि यहाँ कोई मूर्ति नहीं है; देवी को सीधे योनि-रूपी प्राकृतिक शिला-दरार के रूप में पूजा जाता है।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'Vishnu Divides the Body', hindi: 'विष्णु द्वारा शरीर का विभाजन' },
        order: 3,
        text: {
          english:
            "To calm Shiva and save creation, Vishnu released his Sudarshana Chakra, cutting Sati's body into pieces as Shiva carried it, so that his grief-driven dance would end. Wherever a part fell to earth, that place became a Shakti Peetha. At Nilachal Hill, tradition holds that Sati's yoni fell, making Kamakhya a site of the goddess's generative, creative power.",
          hindi:
            'शिव को शांत करने और सृष्टि की रक्षा हेतु विष्णु ने अपना सुदर्शन चक्र चलाया, जिससे शिव द्वारा ले जाए जा रहे सती के शरीर के टुकड़े होते गए, और उनका शोकाकुल नृत्य थम गया। जहाँ-जहाँ शरीर का कोई अंग पृथ्वी पर गिरा, वह स्थान शक्तिपीठ बन गया। नीलाचल पर्वत पर परंपरा के अनुसार सती की योनि गिरी थी, जिससे कामाख्या देवी की सृजनात्मक, उत्पादक शक्ति का स्थल बना।',
        },
      },
      {
        chapterTitle: { english: 'The Ambubachi Mela', hindi: 'अंबुबाची मेला' },
        order: 4,
        text: {
          english:
            "Because the site represents the goddess's fertility itself, the temple is closed for three days each June during the Ambubachi Mela, when the goddess is believed to undergo her menstrual cycle — an annual festival unlike almost any other in Indian temple tradition, drawing tantric practitioners and pilgrims from across the country.",
          hindi:
            'चूँकि यह स्थल स्वयं देवी की प्रजनन-शक्ति का प्रतीक है, इसलिए प्रत्येक जून में अंबुबाची मेले के दौरान मंदिर तीन दिनों के लिए बंद रहता है, जब मान्यता है कि देवी को रजस्वला धर्म होता है — यह वार्षिक उत्सव भारतीय मंदिर परंपरा में लगभग अनूठा है, जो देश भर से तांत्रिक साधकों और श्रद्धालुओं को आकर्षित करता है।',
        },
      },
    ],
    history: {
      english:
        "Kamakhya has been a major centre of Tantric Shaktism since at least the early medieval period, referenced in the Kalika Purana and Yogini Tantra. The present temple was rebuilt in the 16th century by the Koch king Naranarayana after an earlier structure was destroyed, following a distinctive beehive-shaped (Nilachal or 'ratna' style) design characteristic of Assamese temple architecture. It remains one of the most active Tantric pilgrimage sites in India.",
      hindi:
        "कामाख्या कम से कम प्रारंभिक मध्यकाल से ही तांत्रिक शाक्त संप्रदाय का प्रमुख केंद्र रहा है, जिसका उल्लेख कालिका पुराण और योगिनी तंत्र में मिलता है। पूर्ववर्ती संरचना नष्ट होने के बाद वर्तमान मंदिर का पुनर्निर्माण 16वीं शताब्दी में कोच राजा नरनारायण ने करवाया, जो असमिया मंदिर स्थापत्य की विशिष्ट छत्ते के आकार की (नीलाचल अथवा 'रत्न' शैली) संरचना में बना है। यह आज भी भारत के सबसे सक्रिय तांत्रिक तीर्थ स्थलों में से एक है।",
    },
    architecture: {
      english:
        'The temple follows a distinctive Assamese "Nilachal" style with a beehive-shaped dome unlike the towering shikharas of North Indian temples. The inner sanctum is partly underground, reached by a flight of stone steps down to a dark chamber where the yoni-shaped rock, kept moist by a natural spring, is worshipped without any conventional idol.',
      hindi:
        "मंदिर एक विशिष्ट असमिया 'नीलाचल' शैली में निर्मित है, जिसका छत्तेनुमा गुंबद उत्तर भारतीय मंदिरों के ऊँचे शिखरों से भिन्न है। भीतरी गर्भगृह आंशिक रूप से भूमिगत है, जहाँ पाषाण सीढ़ियों से उतरकर एक अंधकारमय कक्ष तक पहुँचा जाता है, जहाँ प्राकृतिक स्रोत से सदा नम रहने वाली योनि-आकार की शिला को बिना किसी पारंपरिक मूर्ति के पूजा जाता है।",
    },
    festivals: [
      {
        name: 'Ambubachi Mela',
        date: 'June (Assamese month of Ahaar)',
        description: {
          english: "The temple closes for three days marking the goddess's menstrual cycle, then reopens with a massive fair and Tantric gathering.",
          hindi: 'देवी के रजस्वला धर्म के प्रतीक स्वरूप मंदिर तीन दिनों के लिए बंद रहता है, फिर एक विशाल मेले और तांत्रिक समागम के साथ पुनः खुलता है।',
        },
      },
      {
        name: 'Durga Puja / Navaratri',
        date: 'September/October',
        description: {
          english: "Observed with elaborate rituals in keeping with the temple's Shakta tradition.",
          hindi: 'मंदिर की शाक्त परंपरा के अनुरूप विस्तृत अनुष्ठानों के साथ मनाया जाता है।',
        },
      },
    ],
    travel: {
      airport: 'Lokpriya Gopinath Bordoloi International Airport, Guwahati (~20 km).',
      railway: 'Kamakhya railway station is a dedicated stop near the temple; Guwahati railway station is also close by.',
      road: 'Well connected within Guwahati city; the temple sits atop Nilachal Hill, reachable by a paved approach road.',
    },
    nearbyPlaces: ['Umananda Temple (Peacock Island, Brahmaputra)', 'Basistha Ashram', 'Navagraha Temple'],
    gallery: [],
    sourcesNote: 'Story presented per Kalika Purana/Devi Bhagavata Shakti Peetha tradition. History based on documented 16th-century Koch-era reconstruction.',
  },
  {
    slug: 'kalighat',
    name: 'Kalighat',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Kolkata',
    deity: 'Devi (as Kalika/Kali)',
    associatedDeity: 'Nakulesh',
    bodyPart: 'Toes of the right foot',
    overview: {
      english:
        'On the banks of a former channel of the Hooghly river, Kalighat is one of the most visited Shakti Peethas in India, worshipped as Kali — the site that, by tradition, gave Kolkata (Calcutta) its name.',
      hindi:
        'हुगली नदी की एक पूर्ववर्ती धारा के तट पर स्थित कालीघाट भारत के सर्वाधिक दर्शनार्थियों वाले शक्तिपीठों में से एक है, जहाँ देवी को काली के रूप में पूजा जाता है — परंपरा के अनुसार इसी स्थल से कोलकाता (कलकत्ता) को अपना नाम मिला।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Toes at Kalighat', hindi: 'कालीघाट में पैर की अंगुलियाँ' },
        order: 3,
        text: {
          english:
            "As Vishnu's Sudarshana Chakra divided Sati's body, the toes of her right foot are said to have fallen at this spot on the Hooghly, marking it as a Shakti Peetha worshipped in the fierce, dark form of Kali.",
          hindi:
            'जब विष्णु के सुदर्शन चक्र से सती का शरीर विभाजित हुआ, तो कहा जाता है कि उनके दाहिने पैर की अंगुलियाँ हुगली के इस स्थल पर गिरीं, जिससे यह शक्तिपीठ काली के उग्र, श्याम रूप में पूजा जाने लगा।',
        },
      },
      {
        chapterTitle: { english: 'The Name of a City', hindi: 'एक नगर का नाम' },
        order: 4,
        text: {
          english:
            "Local tradition holds that the name Kolkata (Calcutta) itself derives from 'Kalikkhetro' or 'Kalighat' — the ghat (riverbank steps) of Kali — reflecting how deeply the temple is woven into the city's own identity.",
          hindi:
            "स्थानीय परंपरा के अनुसार कोलकाता (कलकत्ता) नाम स्वयं 'कालीक्षेत्रो' अथवा 'कालीघाट' — काली के घाट — से बना है, जो दर्शाता है कि यह मंदिर नगर की अपनी पहचान से कितनी गहराई से जुड़ा हुआ है।",
        },
      },
    ],
    history: {
      english:
        'Kalighat is mentioned in medieval Bengali texts including the Mangalkavya literature, with the current temple structure built in its present form in the early 19th century (completed around 1809) by the Sabarna Roy Choudhury family, replacing earlier, simpler shrines. It has remained one of the most continuously active pilgrimage and Tantric worship sites in eastern India.',
      hindi:
        'कालीघाट का उल्लेख मध्यकालीन बंगाली साहित्य, जिसमें मंगलकाव्य साहित्य भी सम्मिलित है, में मिलता है; वर्तमान मंदिर संरचना 19वीं शताब्दी के प्रारंभ में (लगभग 1809 में पूर्ण) सबर्ण राय चौधरी परिवार द्वारा निर्मित हुई, जिसने पूर्ववर्ती सरल मंदिरों का स्थान लिया। यह पूर्वी भारत के सबसे निरंतर सक्रिय तीर्थ एवं तांत्रिक उपासना स्थलों में से एक बना हुआ है।',
    },
    architecture: {
      english:
        'Built in the traditional Bengali temple style with a nine-spired (navaratna) roofline, the temple is compact but densely used, centred on a black stone image of Kali with a golden tongue and three golden eyes, established according to the Tantric tradition rather than conventional iconography.',
      hindi:
        'पारंपरिक बंगाली मंदिर शैली में नवरत्न (नौ-शिखर) छत के साथ निर्मित यह मंदिर आकार में छोटा किंतु सघन रूप से उपयोग में रहता है, जिसका केंद्र काली की एक काले पाषाण की प्रतिमा है, जिसकी स्वर्ण जिह्वा और तीन स्वर्ण नेत्र हैं — यह पारंपरिक मूर्तिकला के बजाय तांत्रिक परंपरा के अनुसार स्थापित है।',
    },
    festivals: [
      {
        name: 'Kali Puja',
        date: 'October/November (Amavasya of Kartik, coinciding with Diwali)',
        description: {
          english: "The temple's largest annual festival, marked by continuous worship through the night.",
          hindi: 'मंदिर का सबसे बड़ा वार्षिक उत्सव, जिसमें रात भर निरंतर पूजा होती है।',
        },
      },
      {
        name: 'Durga Puja',
        date: 'September/October',
        description: {
          english: "Observed with major rituals in keeping with Kolkata's broader Durga Puja celebrations.",
          hindi: 'कोलकाता के व्यापक दुर्गा पूजा उत्सवों के अनुरूप बड़े अनुष्ठानों के साथ मनाया जाता है।',
        },
      },
    ],
    travel: {
      airport: 'Netaji Subhas Chandra Bose International Airport, Kolkata (~18 km).',
      railway: "Kolkata's Sealdah and Howrah stations are both well connected nationally; Kalighat metro station sits right by the temple.",
      road: 'Centrally located within Kolkata, easily reached by city road and metro.',
    },
    nearbyPlaces: ['Dakshineswar Kali Temple (across the city)', 'Belur Math', 'Victoria Memorial'],
    gallery: [],
    sourcesNote: 'Story presented per Shakti Peetha tradition as recorded in regional Puranic and Tantric sources. History based on documented 19th-century temple reconstruction records.',
  },
  {
    slug: 'tarapith',
    name: 'Tarapith',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Tarapith, Birbhum district',
    deity: 'Devi (as Tara)',
    associatedDeity: 'Vaman',
    bodyPart: 'Third eye (or eyeball, per some tellings)',
    overview: {
      english:
        'Tarapith, on the banks of the Dwarka river, is among the most important Tantric pilgrimage centres in India, associated with the sage Vashishtha and the goddess Tara — worshipped here in her fierce, protective form.',
      hindi:
        'द्वारका नदी के तट पर स्थित तारापीठ भारत के सबसे महत्वपूर्ण तांत्रिक तीर्थ केंद्रों में से एक है, जो ऋषि वशिष्ठ और देवी तारा से संबद्ध है — यहाँ देवी को उनके उग्र, रक्षक रूप में पूजा जाता है।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Eye at Tarapith', hindi: 'तारापीठ में नेत्र' },
        order: 3,
        text: {
          english:
            'Tradition holds that the third eye, or eyeball, of Sati fell at this site on the Dwarka river, establishing it as a Shakti Peetha connected to sight, perception, and protection.',
          hindi:
            'परंपरा के अनुसार सती का तीसरा नेत्र, अथवा नेत्रगोलक, द्वारका नदी के इस स्थल पर गिरा, जिससे यह शक्तिपीठ दृष्टि, बोध और रक्षा से जुड़ा हुआ माना जाता है।',
        },
      },
      {
        chapterTitle: { english: "Vashishtha's Tantric Sadhana", hindi: 'वशिष्ठ की तांत्रिक साधना' },
        order: 4,
        text: {
          english:
            "The site is closely tied to the sage Vashishtha, who is held in local tradition to have performed intense Tantric worship of Tara here, at one point in an unconventional Vamachara ritual, after which the goddess appeared and blessed him — cementing Tarapith's identity as a premier centre of Tantric Shakta practice.",
          hindi:
            'यह स्थल ऋषि वशिष्ठ से गहराई से जुड़ा है, जिनके विषय में स्थानीय परंपरा मानती है कि उन्होंने यहाँ तारा की गहन तांत्रिक उपासना की, एक अवसर पर अपरंपरागत वामाचार अनुष्ठान द्वारा, जिसके पश्चात् देवी प्रकट होकर उन्हें आशीर्वाद दिया — इसी से तारापीठ की पहचान तांत्रिक शाक्त साधना के प्रमुख केंद्र के रूप में दृढ़ हुई।',
        },
      },
    ],
    history: {
      english:
        'Tarapith developed as a major Tantric centre through the medieval period, closely associated with the Bengal Shakta tradition and the 19th/20th-century saint Bamakhepa, whose samadhi shrine stands within the temple grounds and remains a major draw for pilgrims. The temple and its adjoining cremation ground (mahashmashan) together form one of the most active sites of Tantric practice in eastern India today.',
      hindi:
        'तारापीठ मध्यकाल में एक प्रमुख तांत्रिक केंद्र के रूप में विकसित हुआ, जो बंगाल की शाक्त परंपरा और 19वीं/20वीं शताब्दी के संत बामाखेपा से घनिष्ठ रूप से संबद्ध है, जिनका समाधि-मंदिर परिसर के भीतर ही स्थित है और आज भी श्रद्धालुओं के लिए एक बड़ा आकर्षण है। मंदिर और उसका समीपवर्ती श्मशान (महाश्मशान) मिलकर आज पूर्वी भारत में तांत्रिक साधना के सबसे सक्रिय स्थलों में से एक बनाते हैं।',
    },
    architecture: {
      english:
        "A relatively modest Bengali-style temple structure, its significance resting less on architectural scale than on ritual continuity — the adjoining cremation ground and the goddess's association with Tantric sadhana performed there are central to the site's character.",
      hindi:
        'अपेक्षाकृत सामान्य बंगाली शैली की मंदिर संरचना, जिसका महत्व स्थापत्य के विस्तार से अधिक अनुष्ठानिक निरंतरता में निहित है — समीपवर्ती श्मशान भूमि और वहाँ की जाने वाली तांत्रिक साधना से देवी का संबंध इस स्थल के चरित्र के केंद्र में है।',
    },
    festivals: [
      {
        name: 'Kali Puja',
        date: 'October/November',
        description: {
          english: 'A major annual festival at the temple, drawing large numbers of Tantric practitioners and pilgrims.',
          hindi: 'मंदिर का एक प्रमुख वार्षिक उत्सव, जो बड़ी संख्या में तांत्रिक साधकों और श्रद्धालुओं को आकर्षित करता है।',
        },
      },
      {
        name: "Bamakhepa's death anniversary",
        date: 'Varies (Bengali calendar)',
        description: {
          english: "Observed at the saint's samadhi shrine within the temple complex.",
          hindi: 'मंदिर परिसर के भीतर संत की समाधि पर मनाई जाती है।',
        },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~65 km).',
      railway: 'Rampurhat railway station (~10 km) is the nearest major railhead.',
      road: 'Connected by road to Rampurhat (~10 km) and Kolkata (~260 km).',
    },
    nearbyPlaces: ['Mahashmashan (cremation ground)', "Bamakhepa's samadhi shrine", 'Rampurhat town'],
    gallery: [],
    sourcesNote: 'Story presented per regional Shakta/Tantric tradition. History includes the well-documented Bamakhepa association from the 19th century.',
  },
  {
    slug: 'jwalamukhi',
    name: 'Jwalamukhi',
    type: 'shakti-peetha',
    state: 'Himachal Pradesh',
    city: 'Jwalamukhi, Kangra district',
    deity: 'Devi (as Jwalamukhi/Ambika)',
    associatedDeity: 'Unmatta',
    bodyPart: 'Tongue',
    overview: {
      english:
        "Jwalamukhi — 'she of the flaming mouth' — is a Shakti Peetha where the goddess is worshipped not through an idol but through natural, continuously burning blue flames fed by underground gas vents, considered self-manifest (Swayambhu).",
      hindi:
        "ज्वालामुखी — 'ज्वाला-मुख वाली देवी' — एक ऐसा शक्तिपीठ है जहाँ देवी को किसी मूर्ति से नहीं, बल्कि भूमिगत गैस-निकासों से पोषित प्राकृतिक, निरंतर जलती नीली ज्वालाओं के रूप में पूजा जाता है, जिसे स्वयंभू माना जाता है।",
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: "Sati's Tongue", hindi: 'सती की जिह्वा' },
        order: 3,
        text: {
          english:
            'Tradition holds that Sati\'s tongue fell at this site in the Kangra hills, giving rise to a Shakti Peetha where the goddess is worshipped through fire itself, rather than through a carved or cast image.',
          hindi:
            'परंपरा के अनुसार सती की जिह्वा कांगड़ा की पहाड़ियों के इस स्थल पर गिरी, जिससे एक ऐसा शक्तिपीठ बना जहाँ देवी को किसी उत्कीर्ण अथवा ढली हुई प्रतिमा के बजाय स्वयं अग्नि के रूप में पूजा जाता है।',
        },
      },
      {
        chapterTitle: { english: 'The Undying Flames', hindi: 'अमर ज्वालाएँ' },
        order: 4,
        text: {
          english:
            "Natural flames burn continuously at several points within the sanctum, fed by underground natural gas — a phenomenon that, long before it was scientifically understood, was taken as proof of the goddess's living, self-manifest presence, and remains the temple's central object of worship to this day.",
          hindi:
            'गर्भगृह के भीतर कई स्थानों पर भूमिगत प्राकृतिक गैस से पोषित ज्वालाएँ निरंतर जलती रहती हैं — इस वैज्ञानिक रूप से समझे जाने से बहुत पहले ही इस परिघटना को देवी की सजीव, स्वयंभू उपस्थिति का प्रमाण माना जाता था, और आज भी यह मंदिर की उपासना का केंद्रीय विषय बना हुआ है।',
        },
      },
    ],
    history: {
      english:
        'Jwalamukhi has been an important pilgrimage site since at least the early medieval period, with historical patronage recorded under successive regional rulers of the Kangra hills. The Mughal emperor Akbar is popularly said, per local tradition, to have visited the temple and made an offering of a gold parasol after being unable to extinguish the flames, though the exact historicity of this specific account varies across retellings.',
      hindi:
        'ज्वालामुखी कम से कम प्रारंभिक मध्यकाल से एक महत्वपूर्ण तीर्थ स्थल रहा है, जहाँ कांगड़ा पहाड़ियों के क्रमिक क्षेत्रीय शासकों के अधीन ऐतिहासिक संरक्षण दर्ज है। स्थानीय परंपरा के अनुसार मुगल सम्राट अकबर के विषय में लोकप्रिय रूप से कहा जाता है कि वे मंदिर आए और ज्वालाओं को बुझाने में असफल रहने के बाद एक स्वर्ण छत्र अर्पित किया, यद्यपि इस विशेष प्रसंग की सटीक ऐतिहासिकता विभिन्न कथाओं में भिन्न-भिन्न है।',
    },
    architecture: {
      english:
        'The temple has a distinctive gilt dome and pinnacle, built in a hill-temple style suited to its mountainous Kangra setting. The sanctum contains no conventional idol; a marble pit at its centre hosts several small, continuously burning natural flames.',
      hindi:
        'मंदिर का स्वर्ण-मंडित गुंबद और शिखर विशिष्ट है, जो अपने पर्वतीय कांगड़ा परिवेश के अनुकूल पहाड़ी मंदिर शैली में निर्मित है। गर्भगृह में कोई पारंपरिक मूर्ति नहीं है; इसके केंद्र में एक संगमरमरी गड्ढे में कई छोटी, निरंतर जलती प्राकृतिक ज्वालाएँ स्थित हैं।',
    },
    festivals: [
      {
        name: 'Navaratri (both Chaitra and Sharad)',
        date: 'March/April and September/October',
        description: {
          english: "The temple's largest festival periods, drawing very large numbers of pilgrims to the Kangra valley.",
          hindi: 'मंदिर के सबसे बड़े उत्सव काल, जो कांगड़ा घाटी में बहुत बड़ी संख्या में श्रद्धालुओं को आकर्षित करते हैं।',
        },
      },
    ],
    travel: {
      airport: 'Gaggal Airport, Kangra (~35 km).',
      railway: 'Jwalamukhi Road railway station (narrow gauge) is the nearest rail link; Pathankot is the nearest broad-gauge hub.',
      road: 'Connected by road to Kangra (~35 km) and Dharamshala (~55 km).',
    },
    nearbyPlaces: ['Chamunda Devi Temple', 'Kangra Fort', 'Dharamshala/McLeod Ganj'],
    gallery: [],
    sourcesNote: 'Story presented per Shakti Peetha tradition. The Akbar-related history is a widely circulated local tradition rather than a firmly settled historical record, and is noted as such.',
  },
  {
    slug: 'vimala-puri',
    name: 'Vimala (Bimala)',
    type: 'shakti-peetha',
    state: 'Odisha',
    city: 'Puri',
    deity: 'Devi (as Vimala)',
    associatedDeity: 'Jagannath (as Bhairava for this Peetha)',
    bodyPart: 'Feet',
    overview: {
      english:
        'Uniquely, this Shakti Peetha sits within the Jagannath Temple complex at Puri itself — Vimala is worshipped as consort to Jagannath, and no offering made to Jagannath is considered complete as prasad until it has also been offered to Vimala.',
      hindi:
        'अनूठे रूप से, यह शक्तिपीठ पुरी के जगन्नाथ मंदिर परिसर के भीतर ही स्थित है — विमला को जगन्नाथ की सहचरी के रूप में पूजा जाता है, और जगन्नाथ को अर्पित कोई भी भोग तब तक प्रसाद नहीं माना जाता जब तक वह विमला को भी न चढ़ाया जाए।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Feet at Puri', hindi: 'पुरी में चरण' },
        order: 3,
        text: {
          english:
            "Tradition holds that Sati's feet fell at this coastal site, establishing a Shakti Peetha that would, uniquely, come to share its temple complex with one of Hinduism's most important Vaishnava shrines.",
          hindi:
            'परंपरा के अनुसार सती के चरण इस तटीय स्थल पर गिरे, जिससे एक ऐसा शक्तिपीठ बना जो अनूठे रूप से हिंदू धर्म के सबसे महत्वपूर्ण वैष्णव मंदिरों में से एक के साथ अपना परिसर साझा करता है।',
        },
      },
      {
        chapterTitle: { english: 'Vimala and Jagannath', hindi: 'विमला और जगन्नाथ' },
        order: 4,
        text: {
          english:
            'In a distinctive local theology found nowhere else among the peethas, Vimala is worshipped here as the presiding Shakti of the temple, with Lord Jagannath himself regarded, in this specific context, as her Bhairava — binding the Vaishnava and Shakta traditions together at a single site.',
          hindi:
            'अन्य किसी पीठ में न पाई जाने वाली एक विशिष्ट स्थानीय धर्म-मान्यता में, विमला को यहाँ मंदिर की अधिष्ठात्री शक्ति के रूप में पूजा जाता है, जबकि स्वयं भगवान जगन्नाथ को इस विशेष संदर्भ में उनके भैरव के रूप में माना जाता है — जो वैष्णव और शाक्त परंपराओं को एक ही स्थल पर एक साथ बाँधता है।',
        },
      },
    ],
    history: {
      english:
        "The Jagannath Temple complex, within which the Vimala shrine stands, was substantially built by the Eastern Ganga dynasty king Anantavarman Chodaganga Deva in the 12th century, with continued patronage and expansion by subsequent Odia rulers, including the Gajapati kings. Vimala's shrine has been an integral part of temple ritual for centuries, particularly in the Mahaprasad tradition, where food first offered to Jagannath is subsequently offered to Vimala before being distributed as sanctified prasad.",
      hindi:
        'जगन्नाथ मंदिर परिसर, जिसके भीतर विमला का मंदिर स्थित है, मुख्यतः 12वीं शताब्दी में पूर्वी गंग राजवंश के राजा अनंतवर्मन चोडगंग देव द्वारा निर्मित हुआ, जिसे बाद के ओड़िया शासकों, जिनमें गजपति राजा भी सम्मिलित हैं, का निरंतर संरक्षण और विस्तार प्राप्त हुआ। विमला का मंदिर सदियों से मंदिर के अनुष्ठान का अभिन्न भाग रहा है, विशेषतः महाप्रसाद परंपरा में, जहाँ पहले जगन्नाथ को अर्पित भोजन बाद में विमला को अर्पित किया जाता है, तत्पश्चात् ही उसे पवित्र प्रसाद के रूप में वितरित किया जाता है।',
    },
    architecture: {
      english:
        "The Vimala shrine is a distinct structure within the sprawling Jagannath Temple complex, built in the Kalinga architectural style shared with the main temple, characterised by its curvilinear deul (tower) form typical of Odisha temple architecture.",
      hindi:
        'विमला मंदिर विशाल जगन्नाथ मंदिर परिसर के भीतर एक पृथक संरचना है, जो मुख्य मंदिर के साथ साझा कलिंग स्थापत्य शैली में निर्मित है, जिसकी विशेषता ओडिशा मंदिर स्थापत्य की विशिष्ट वक्ररेखीय देउल (शिखर) संरचना है।',
    },
    festivals: [
      {
        name: 'Durga Puja / Navaratri',
        date: 'September/October',
        description: {
          english: "Marked with elaborate rituals in keeping with the temple's Shakta tradition, alongside the wider Puri festival calendar.",
          hindi: 'मंदिर की शाक्त परंपरा के अनुरूप विस्तृत अनुष्ठानों के साथ, पुरी के व्यापक उत्सव-कैलेंडर के साथ मनाया जाता है।',
        },
      },
    ],
    travel: {
      airport: 'Biju Patnaik International Airport, Bhubaneswar (~60 km).',
      railway: 'Puri railway station is well connected to Bhubaneswar, Kolkata, and other major cities.',
      road: 'Connected by road to Bhubaneswar (~60 km); the shrine lies within the Jagannath Temple complex in central Puri.',
    },
    nearbyPlaces: ['Jagannath Temple main shrine', 'Puri Beach', 'Gundicha Temple'],
    gallery: [],
    sourcesNote: "Story presented per Shakti Peetha tradition as understood within the Jagannath temple's own theological framework. History based on well-documented Eastern Ganga dynasty temple construction records.",
  },
  {
    slug: 'mahalakshmi-kolhapur',
    name: 'Mahalakshmi',
    type: 'shakti-peetha',
    state: 'Maharashtra',
    city: 'Kolhapur',
    deity: 'Devi (as Mahalakshmi/Ambabai)',
    associatedDeity: 'Krodhish (Krodhashish) Bhairava',
    bodyPart: 'Eyes (per Kolhapur tradition) / sometimes listed as the three eyes',
    overview: {
      english:
        "Kolhapur's Mahalakshmi Temple, popularly called Ambabai, is one of the most visited Shakti Peethas in western India, distinguished by an idol carved from black stone set with a large ruby and crystal linga, and by a rare sunset phenomenon where the sun's rays fall directly on the idol on specific days.",
      hindi:
        'कोल्हापुर का महालक्ष्मी मंदिर, जिसे लोकप्रिय रूप से अंबाबाई कहा जाता है, पश्चिम भारत के सर्वाधिक दर्शनार्थियों वाले शक्तिपीठों में से एक है, जिसकी विशेषता काले पाषाण से गढ़ी गई मूर्ति है, जिसमें एक बड़ा माणिक्य और स्फटिक लिंग जड़ा है, तथा एक दुर्लभ सूर्यास्त परिघटना है, जब वर्ष के विशेष दिनों में सूर्य की किरणें सीधे मूर्ति पर पड़ती हैं।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Eyes at Kolhapur', hindi: 'कोल्हापुर में नेत्र' },
        order: 3,
        text: {
          english:
            "Kolhapur tradition holds that the eyes of Sati fell at this site, establishing it as a Shakti Peetha connected to sight and to Lakshmi's watchful, protective grace over the region.",
          hindi:
            'कोल्हापुर की परंपरा के अनुसार सती के नेत्र इस स्थल पर गिरे, जिससे यह शक्तिपीठ दृष्टि और लक्ष्मी की क्षेत्र पर सतत रक्षक कृपा से जुड़ा हुआ माना जाता है।',
        },
      },
      {
        chapterTitle: { english: 'The Kiranotsav', hindi: 'किरणोत्सव' },
        order: 4,
        text: {
          english:
            'On specific days each year (around late January/early February and early November), the setting sun\'s rays are engineered by the temple\'s ancient architecture to fall directly upon the idol, a phenomenon called Kiranotsav that draws large crowds and is considered a mark of the site\'s deliberate, precise ancient design.',
          hindi:
            'वर्ष के विशेष दिनों में (जनवरी के अंत/फरवरी के प्रारंभ और नवंबर के प्रारंभ के आसपास), मंदिर की प्राचीन स्थापत्य-रचना ऐसी है कि अस्तांचल होते सूर्य की किरणें सीधे मूर्ति पर पड़ती हैं — इस परिघटना को किरणोत्सव कहा जाता है, जो बड़ी भीड़ को आकर्षित करती है और इस स्थल की सुनियोजित, परिशुद्ध प्राचीन रचना का प्रमाण मानी जाती है।',
        },
      },
    ],
    history: {
      english:
        'The Mahalakshmi Temple at Kolhapur has a documented history stretching back over a thousand years, with core construction attributed to the Chalukya dynasty around the 7th century CE and significant later expansion under the Shilahara and Yadava dynasties, followed by continued patronage through the Maratha period, including by the Bhosale rulers of Kolhapur state.',
      hindi:
        'कोल्हापुर के महालक्ष्मी मंदिर का दस्तावेज़ीकृत इतिहास एक हज़ार वर्षों से भी अधिक पुराना है, जिसका मूल निर्माण लगभग सातवीं शताब्दी ईस्वी में चालुक्य राजवंश से जोड़ा जाता है, और बाद में शिलाहार तथा यादव राजवंशों के अधीन इसका उल्लेखनीय विस्तार हुआ, इसके पश्चात् मराठा काल में, जिसमें कोल्हापुर रियासत के भोसले शासक भी सम्मिलित हैं, निरंतर संरक्षण मिलता रहा।',
    },
    architecture: {
      english:
        'Built predominantly in the Hemadpanti style of stone construction (dry masonry without mortar, characteristic of medieval Deccan temple architecture), the temple features an elaborately carved shikhara and mandapa, with the black stone Mahalakshmi idol — adorned with a crown, a large ruby, and crystal linga atop her head — as its central focus.',
      hindi:
        'मुख्यतः हेमाडपंती शैली (मध्यकालीन दक्कन मंदिर स्थापत्य की विशिष्ट, बिना गारे की शुष्क पाषाण-निर्माण शैली) में निर्मित इस मंदिर में एक विस्तृत नक्काशीदार शिखर और मंडप है, जिसका केंद्रबिंदु काले पाषाण की महालक्ष्मी प्रतिमा है — जो मुकुट, एक बड़े माणिक्य और सिर पर स्फटिक लिंग से अलंकृत है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "The temple's largest festival period, with elaborate daily rituals across nine nights.",
          hindi: 'मंदिर का सबसे बड़ा उत्सव काल, जिसमें नौ रातों तक प्रतिदिन विस्तृत अनुष्ठान होते हैं।',
        },
      },
      {
        name: 'Kiranotsav',
        date: 'Late January/early February and early November',
        description: {
          english: "A distinctive festival marking the days the setting sun's rays fall directly on the idol.",
          hindi: 'एक विशिष्ट उत्सव, जो उन दिनों को चिह्नित करता है जब अस्तांचल होते सूर्य की किरणें सीधे मूर्ति पर पड़ती हैं।',
        },
      },
    ],
    travel: {
      airport: 'Kolhapur Airport (~8 km).',
      railway: 'Kolhapur (Chhatrapati Shahu Maharaj Terminus) is well connected to Mumbai, Pune, and Goa.',
      road: 'Connected by national highway to Pune (~230 km) and Mumbai (~380 km).',
    },
    nearbyPlaces: ['New Palace, Kolhapur', 'Rankala Lake', 'Panhala Fort'],
    gallery: [],
    sourcesNote: 'Story presented per regional Shakti Peetha tradition; body-part attribution for Kolhapur varies somewhat between texts, and is noted as such. History based on well-documented Chalukya, Shilahara, Yadava, and Maratha-era temple records.',
  },
  {
    slug: 'ambaji',
    name: 'Ambaji',
    type: 'shakti-peetha',
    state: 'Gujarat',
    city: 'Ambaji, Banaskantha district',
    deity: 'Devi (as Amba)',
    associatedDeity: 'Batuk Bhairav',
    bodyPart: 'Heart',
    overview: {
      english:
        'Set at the foothills of the Aravalli range near the Gujarat-Rajasthan border, Ambaji is among the most visited Shakti Peethas in western India, worshipped without any idol — the sanctum holds a visriyantra (a sacred geometric symbol) rather than a conventional image of the goddess.',
      hindi:
        'गुजरात-राजस्थान सीमा के निकट अरावली पर्वतमाला की तलहटी में स्थित अंबाजी पश्चिम भारत के सर्वाधिक दर्शनार्थियों वाले शक्तिपीठों में से एक है, जहाँ देवी को बिना किसी मूर्ति के पूजा जाता है — गर्भगृह में देवी की पारंपरिक प्रतिमा के स्थान पर एक विस्रीयंत्र (एक पवित्र ज्यामितीय प्रतीक) स्थापित है।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Heart at Ambaji', hindi: 'अंबाजी में हृदय' },
        order: 3,
        text: {
          english: "Tradition holds that Sati's heart fell at this site in the Aravalli foothills, establishing a Shakti Peetha connected to devotion and compassion.",
          hindi: 'परंपरा के अनुसार सती का हृदय अरावली की तलहटी के इस स्थल पर गिरा, जिससे यह शक्तिपीठ भक्ति और करुणा से जुड़ा हुआ माना जाता है।',
        },
      },
      {
        chapterTitle: { english: 'Worship Without Form', hindi: 'निराकार उपासना' },
        order: 4,
        text: {
          english:
            "Uniquely, the sanctum contains no idol of the goddess at all. Worship is directed at a golden visriyantra (a geometric yantra) embedded on the wall, viewed through a covering of cloth and ornamentation that leaves only the yantra's outline visible — a form of aniconic worship rare among major Indian temples.",
          hindi:
            'अनूठे रूप से, गर्भगृह में देवी की कोई मूर्ति ही नहीं है। उपासना दीवार पर जड़े एक स्वर्णिम विस्रीयंत्र (एक ज्यामितीय यंत्र) की ओर निर्देशित होती है, जिसे वस्त्र और आभूषणों के आवरण से ढका जाता है, जिससे केवल यंत्र की रूपरेखा ही दिखाई देती है — यह भारत के प्रमुख मंदिरों में दुर्लभ निराकार उपासना का एक रूप है।',
        },
      },
    ],
    history: {
      english:
        "Ambaji has been a significant pilgrimage site since at least the medieval period, with substantial expansion and marble reconstruction of the present temple carried out through the 18th to 20th centuries under various patrons. Gabbar Hill, nearby, is considered the original site of the goddess's manifestation and remains an important adjunct pilgrimage climb.",
      hindi:
        'अंबाजी कम से कम मध्यकाल से एक महत्वपूर्ण तीर्थ स्थल रहा है, जिसमें 18वीं से 20वीं शताब्दी के बीच विभिन्न संरक्षकों के अधीन वर्तमान मंदिर का उल्लेखनीय विस्तार और संगमरमर में पुनर्निर्माण हुआ। समीपवर्ती गब्बर पहाड़ी को देवी के प्राकट्य का मूल स्थल माना जाता है और यह आज भी एक महत्वपूर्ण अतिरिक्त तीर्थ-आरोहण है।',
    },
    architecture: {
      english:
        "The present temple is built largely of white marble with a tall, elaborately carved shikhara topped with a gold kalash (pinnacle) weighing several hundred kilograms. The sanctum's aniconic yantra-based worship distinguishes it structurally and ritually from most other major Shakti temples.",
      hindi:
        'वर्तमान मंदिर मुख्यतः श्वेत संगमरमर से निर्मित है, जिसका ऊँचा, विस्तृत नक्काशीदार शिखर कई सौ किलोग्राम वजनी स्वर्ण कलश से सुशोभित है। गर्भगृह की निराकार यंत्र-आधारित उपासना इसे स्थापत्य और अनुष्ठान दोनों दृष्टि से अधिकांश अन्य प्रमुख शक्ति मंदिरों से भिन्न बनाती है।',
    },
    festivals: [
      {
        name: 'Bhadarvi Poonam Mela',
        date: 'August/September (Bhadrapada Purnima)',
        description: {
          english: "The temple's largest annual fair, drawing enormous numbers of pilgrims who walk to Ambaji from across Gujarat and Rajasthan.",
          hindi: 'मंदिर का सबसे बड़ा वार्षिक मेला, जिसमें गुजरात और राजस्थान भर से अपार संख्या में श्रद्धालु पैदल चलकर अंबाजी पहुँचते हैं।',
        },
      },
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "Observed with major garba celebrations, reflecting Gujarat's strong regional Navaratri tradition.",
          hindi: 'बड़े गरबा उत्सवों के साथ मनाया जाता है, जो गुजरात की सुदृढ़ क्षेत्रीय नवरात्रि परंपरा को प्रतिबिंबित करता है।',
        },
      },
    ],
    travel: {
      airport: 'Maharana Pratap Airport, Udaipur (~180 km) and Ahmedabad Airport (~185 km).',
      railway: 'Ambaji railway station and Abu Road railway station (~20 km) both serve the temple town.',
      road: 'Connected by road to Palanpur (~65 km) and Mount Abu (~45 km).',
    },
    nearbyPlaces: ['Gabbar Hill', 'Kumbhariya Jain Temples', 'Mount Abu (Rajasthan)'],
    gallery: [],
    sourcesNote: 'Story presented per Shakti Peetha tradition. History based on documented temple reconstruction across the 18th-20th centuries.',
  },
  {
    slug: 'hinglaj',
    name: 'Hinglaj Mata',
    type: 'shakti-peetha',
    state: 'Balochistan, Pakistan',
    city: 'Hinglaj, Lasbela district',
    deity: 'Devi (as Hinglaj Mata/Kottari)',
    associatedDeity: 'Bhimlochan',
    bodyPart: 'Brahmarandhra (crown of the head)',
    overview: {
      english:
        'Hinglaj Mata, in a remote gorge of the Hingol range in present-day Balochistan, Pakistan, is regarded by tradition as one of the most powerful Shakti Peethas — the goddess here is worshipped as a natural rock formation within a cave, with no built temple structure around the sanctum itself.',
      hindi:
        'वर्तमान पाकिस्तान के बलूचिस्तान में हिंगोल पर्वतमाला की एक दुर्गम घाटी में स्थित हिंगलाज माता को परंपरा में सबसे शक्तिशाली शक्तिपीठों में से एक माना जाता है — यहाँ देवी को एक गुफा के भीतर प्राकृतिक शिला-संरचना के रूप में पूजा जाता है, गर्भगृह के चारों ओर कोई निर्मित मंदिर संरचना नहीं है।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Crown at Hinglaj', hindi: 'हिंगलाज में मस्तक' },
        order: 3,
        text: {
          english:
            "Tradition holds that the Brahmarandhra — the crown of Sati's head, associated with the topmost energy centre of the body — fell at this remote site, making Hinglaj one of the most spiritually significant, if physically remote, of all the Shakti Peethas.",
          hindi:
            'परंपरा के अनुसार ब्रह्मरंध्र — सती के मस्तक का शीर्ष भाग, जो शरीर के सबसे ऊपरी ऊर्जा-केंद्र से संबद्ध है — इस दुर्गम स्थल पर गिरा, जिससे हिंगलाज भौतिक दृष्टि से दुर्गम होते हुए भी सभी शक्तिपीठों में आध्यात्मिक दृष्टि से सर्वाधिक महत्वपूर्ण स्थलों में से एक बन गया।',
        },
      },
      {
        chapterTitle: { english: 'The Nani Mandir Pilgrimage', hindi: 'नानी मंदिर तीर्थयात्रा' },
        order: 4,
        text: {
          english:
            'Known locally as Nani Mandir, the shrine has long been revered by both Hindu and, notably, some Muslim communities of the region as a site of shared local veneration. Reaching it traditionally required a demanding overland pilgrimage through the Hingol range, still observed today as the annual Hinglaj Yatra.',
          hindi:
            'स्थानीय रूप से नानी मंदिर के नाम से जाना जाने वाला यह मंदिर दीर्घकाल से क्षेत्र के हिंदुओं तथा, उल्लेखनीय रूप से, कुछ मुस्लिम समुदायों द्वारा भी साझा स्थानीय श्रद्धा के स्थल के रूप में सम्मानित रहा है। परंपरागत रूप से यहाँ पहुँचने के लिए हिंगोल पर्वतमाला से होकर एक दुष्कर स्थल-यात्रा आवश्यक थी, जो आज भी वार्षिक हिंगलाज यात्रा के रूप में जारी है।',
        },
      },
    ],
    history: {
      english:
        "Hinglaj has been a significant Shakti pilgrimage site since antiquity, referenced in various Puranic and Tantric texts, and has historically drawn pilgrims from across the Indian subcontinent despite its remote and difficult location. Following the Partition of India in 1947, cross-border pilgrimage from India became largely impractical for most devotees, though the shrine remains an active site of worship within Pakistan, drawing its Hindu community along with pilgrims able to travel there.",
      hindi:
        'हिंगलाज प्राचीन काल से ही एक महत्वपूर्ण शक्ति तीर्थ स्थल रहा है, जिसका उल्लेख विभिन्न पौराणिक और तांत्रिक ग्रंथों में मिलता है, और अपने दुर्गम एवं कठिन स्थान के बावजूद ऐतिहासिक रूप से संपूर्ण भारतीय उपमहाद्वीप से श्रद्धालुओं को आकर्षित करता रहा है। 1947 में भारत विभाजन के पश्चात् भारत से सीमा-पार तीर्थयात्रा अधिकांश भक्तों के लिए काफी हद तक अव्यावहारिक हो गई, यद्यपि यह मंदिर पाकिस्तान के भीतर एक सक्रिय उपासना स्थल बना हुआ है, जो वहाँ के हिंदू समुदाय तथा वहाँ तक पहुँच सकने वाले श्रद्धालुओं को आकर्षित करता है।',
    },
    architecture: {
      english:
        "The sanctum is a natural cave with no conventional built temple superstructure — the goddess is worshipped as a rock formation within the cave, smeared with sindoor (vermilion), reflecting the site's ancient, unbuilt character rather than later monumental construction.",
      hindi:
        'गर्भगृह एक प्राकृतिक गुफा है, जिसकी कोई पारंपरिक निर्मित मंदिर-अधिसंरचना नहीं है — देवी को गुफा के भीतर एक शिला-संरचना के रूप में पूजा जाता है, जिस पर सिंदूर लेपित किया जाता है, जो इस स्थल के प्राचीन, अनिर्मित चरित्र को दर्शाता है, न कि किसी परवर्ती भव्य निर्माण को।',
    },
    festivals: [
      {
        name: 'Hinglaj Yatra',
        date: 'April (varies by year)',
        description: {
          english: "The principal annual pilgrimage, a multi-day overland journey through the Hingol range, drawing thousands of devotees primarily from Pakistan's Hindu community.",
          hindi: 'मुख्य वार्षिक तीर्थयात्रा, जो हिंगोल पर्वतमाला से होकर कई दिनों की स्थल-यात्रा है, जो मुख्यतः पाकिस्तान के हिंदू समुदाय से हज़ारों श्रद्धालुओं को आकर्षित करती है।',
        },
      },
    ],
    travel: {
      airport: 'Jinnah International Airport, Karachi is the nearest major international airport (~250 km).',
      railway: 'No direct rail access; the site is reached overland from Karachi.',
      road: 'Reached via the Makran Coastal Highway from Karachi, followed by a further stretch into the Hingol range.',
    },
    nearbyPlaces: ['Hingol National Park', 'Chandragup mud volcanoes'],
    gallery: [],
    sourcesNote:
      'Located in present-day Pakistan; included here as part of the traditional Shakti Peetha list, which predates the 1947 Partition and the modern India-Pakistan border. Practical pilgrimage access from India is not currently available; this entry is presented for its place in the tradition and its documented ongoing local worship.',
  },
  {
    slug: 'vishalakshi-varanasi',
    name: 'Vishalakshi',
    type: 'shakti-peetha',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    deity: 'Devi (as Vishalakshi)',
    associatedDeity: 'Kaal Bhairav',
    bodyPart: 'Earring (Manikarnika, per Varanasi tradition)',
    overview: {
      english:
        "In the same sacred city as the Kashi Vishwanath Jyotirlinga, the Vishalakshi Shakti Peetha — 'the wide-eyed goddess' — stands as Varanasi's Shakta counterpart, tying the city's Shiva and Devi traditions together, much as Srisailam and Deoghar do elsewhere.",
      hindi:
        "काशी विश्वनाथ ज्योतिर्लिंग वाली उसी पवित्र नगरी में स्थित विशालाक्षी शक्तिपीठ — 'विशाल नेत्रों वाली देवी' — वाराणसी के शाक्त प्रतिरूप के रूप में स्थित है, जो नगरी की शिव और देवी परंपराओं को उसी प्रकार एक साथ जोड़ता है जैसे अन्यत्र श्रीशैलम और देवघर करते हैं।",
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Earring at Kashi', hindi: 'काशी में कर्णभूषण' },
        order: 3,
        text: {
          english:
            "Tradition holds that an earring (Manikarnika) of Sati fell at this site in Varanasi, near the ghat that today bears a closely related name — Manikarnika Ghat, one of the city's principal cremation ghats.",
          hindi:
            'परंपरा के अनुसार सती का एक कर्णभूषण (मणिकर्णिका) वाराणसी के इस स्थल पर गिरा, जो आज उससे निकटता से संबंधित नाम वाले घाट — मणिकर्णिका घाट, नगरी के प्रमुख श्मशान घाटों में से एक — के निकट है।',
        },
      },
      {
        chapterTitle: { english: 'Vishalakshi in the City of Shiva', hindi: 'शिव की नगरी में विशालाक्षी' },
        order: 4,
        text: {
          english:
            "Worshipped as 'the wide-eyed one,' Vishalakshi is considered by tradition to watch over Kashi alongside Vishwanath and Kaal Bhairav, the three together forming the core of the city's protective and presiding deities.",
          hindi:
            "'विशाल नेत्रों वाली' के रूप में पूजी जाने वाली विशालाक्षी को परंपरा में विश्वनाथ और काल भैरव के साथ काशी की रक्षा करने वाली माना जाता है — ये तीनों मिलकर नगरी के रक्षक एवं अधिष्ठाता देवताओं का मूल बनाते हैं।",
        },
      },
    ],
    history: {
      english:
        "The Vishalakshi shrine has been part of Varanasi's dense religious landscape for many centuries, though it is comparatively modest in scale next to the city's largest temples. It has been maintained and periodically renovated by local trusts and devotees through the modern period, remaining an active stop on the city's broader Shakta pilgrimage circuit.",
      hindi:
        'विशालाक्षी मंदिर सदियों से वाराणसी के सघन धार्मिक परिदृश्य का भाग रहा है, यद्यपि नगरी के सबसे बड़े मंदिरों की तुलना में यह अपेक्षाकृत छोटे आकार का है। आधुनिक काल में स्थानीय ट्रस्टों और श्रद्धालुओं द्वारा इसका रखरखाव और समय-समय पर जीर्णोद्धार होता रहा है, और यह नगरी के व्यापक शाक्त तीर्थ-परिपथ का एक सक्रिय पड़ाव बना हुआ है।',
    },
    architecture: {
      english:
        'A relatively compact shrine set within the narrow lanes near Vishwanath Gali, in keeping with the dense urban temple architecture typical of old Varanasi, rather than a large standalone temple complex.',
      hindi:
        'विश्वनाथ गली के निकट संकरी गलियों के बीच स्थित एक अपेक्षाकृत छोटा मंदिर, जो किसी बड़े स्वतंत्र मंदिर परिसर के बजाय पुरानी वाराणसी की सघन शहरी मंदिर स्थापत्य शैली के अनुरूप है।',
    },
    festivals: [
      {
        name: 'Navaratri (September/October, and Chaitra Navaratri)',
        date: 'September/October (and March/April)',
        description: {
          english: "Marked with special rituals in keeping with the city's wider Shakta and Shaiva festival calendar.",
          hindi: 'नगरी के व्यापक शाक्त एवं शैव उत्सव-कैलेंडर के अनुरूप विशेष अनुष्ठानों के साथ मनाई जाती है।',
        },
      },
    ],
    travel: {
      airport: 'Lal Bahadur Shastri International Airport, Varanasi (~25 km).',
      railway: 'Varanasi Junction (Varanasi Cantt) is a major national rail hub.',
      road: 'Located centrally within old Varanasi, near the Kashi Vishwanath Temple and Manikarnika Ghat.',
    },
    nearbyPlaces: ['Kashi Vishwanath Temple', 'Manikarnika Ghat', 'Kaal Bhairav Temple'],
    gallery: [],
    sourcesNote: "Story presented per Shakti Peetha tradition. Some regional lists place Varanasi's Shakti Peetha association at a different body part or nearby shrine; this entry follows the Vishalakshi/Manikarnika tradition most commonly cited.",
  },
  {
    slug: 'kamakshi-kanchipuram',
    name: 'Kamakshi',
    type: 'shakti-peetha',
    state: 'Tamil Nadu',
    city: 'Kanchipuram',
    deity: 'Devi (as Kamakshi)',
    associatedDeity: 'Ekambareshwar (as Bhairava context for this Peetha)',
    bodyPart: 'Navel (per South Indian tradition)',
    overview: {
      english:
        "In Kanchipuram, one of Hinduism's seven sacred cities (Sapta Puri), the Kamakshi Amman Temple presents the goddess in her most complete, benevolent form — seated in padmasana (lotus posture) rather than standing, a distinctive iconographic choice found at very few other Devi temples.",
      hindi:
        'हिंदू धर्म की सप्तपुरियों में से एक कांचीपुरम में स्थित कामाक्षी अम्मन मंदिर देवी को उनके सबसे पूर्ण, कल्याणकारी रूप में प्रस्तुत करता है — यहाँ वे खड़ी नहीं, बल्कि पद्मासन में विराजमान हैं, यह एक विशिष्ट मूर्तिकला-चयन है जो बहुत कम अन्य देवी मंदिरों में मिलता है।',
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: 'The Navel at Kanchipuram', hindi: 'कांचीपुरम में नाभि' },
        order: 3,
        text: {
          english:
            "South Indian tradition holds that Sati's navel fell at Kanchipuram, establishing this Shakti Peetha in one of the seven cities Hindu tradition regards as capable of granting liberation (moksha) to those who die within them.",
          hindi:
            'दक्षिण भारतीय परंपरा के अनुसार सती की नाभि कांचीपुरम में गिरी, जिससे यह शक्तिपीठ उन सात नगरियों में से एक में स्थापित हुआ जिन्हें हिंदू परंपरा में मृत्यु होने पर मोक्ष प्रदान करने में सक्षम माना जाता है।',
        },
      },
      {
        chapterTitle: { english: 'Kamakshi and the Sri Chakra', hindi: 'कामाक्षी और श्री चक्र' },
        order: 4,
        text: {
          english:
            "Adi Shankaracharya is closely associated with this temple in South Indian tradition, credited with establishing a Sri Chakra before the goddess and moderating certain fierce Tantric practices once associated with her worship, shaping the temple's present, more classical form of Shakta devotion.",
          hindi:
            'दक्षिण भारतीय परंपरा में आदि शंकराचार्य इस मंदिर से घनिष्ठ रूप से संबद्ध हैं, जिन्हें देवी के समक्ष श्री चक्र स्थापित करने और कभी उनकी उपासना से जुड़ी कुछ उग्र तांत्रिक प्रथाओं को संयमित करने का श्रेय दिया जाता है, जिससे मंदिर की वर्तमान, अधिक शास्त्रीय शाक्त भक्ति का स्वरूप बना।',
        },
      },
    ],
    history: {
      english:
        "Kanchipuram has been a major religious and political centre since antiquity, serving as a capital of the Pallava dynasty and later patronized by the Chola, Vijayanagara, and Nayak rulers. The Kamakshi Amman Temple in its present form reflects substantial Vijayanagara and later Nayak-period construction and endowment, alongside the site's much older roots as a Shakta pilgrimage centre.",
      hindi:
        'कांचीपुरम प्राचीन काल से ही एक प्रमुख धार्मिक और राजनीतिक केंद्र रहा है, जो पल्लव राजवंश की राजधानी रहा और बाद में चोल, विजयनगर तथा नायक शासकों का संरक्षण प्राप्त हुआ। कामाक्षी अम्मन मंदिर का वर्तमान स्वरूप विजयनगर और बाद के नायक काल के महत्वपूर्ण निर्माण एवं दान को प्रतिबिंबित करता है, साथ ही शाक्त तीर्थ केंद्र के रूप में इस स्थल की कहीं अधिक प्राचीन जड़ों को भी।',
    },
    architecture: {
      english:
        "The temple features a golden vimana (tower) over the sanctum and a large tank (Kamakshi Vilva tirtha), built predominantly in the Dravidian style typical of Tamil Nadu's major temple towns, with successive gopurams and mandapas added across different dynastic periods.",
      hindi:
        'मंदिर में गर्भगृह के ऊपर एक स्वर्णिम विमान (शिखर) और एक विशाल जलाशय (कामाक्षी विल्व तीर्थ) है, जो मुख्यतः तमिलनाडु के प्रमुख मंदिर नगरों की विशिष्ट द्रविड़ शैली में निर्मित है, जिसमें विभिन्न राजवंशीय कालों में क्रमिक गोपुरम और मंडप जोड़े गए।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: 'Marked with elaborate daily rituals, golu (doll displays), and processions.',
          hindi: 'विस्तृत दैनिक अनुष्ठानों, गोलू (पुतला प्रदर्शन) और शोभायात्राओं के साथ मनाई जाती है।',
        },
      },
      {
        name: 'Panguni Uthiram',
        date: 'March/April',
        description: {
          english: 'A major Tamil-calendar festival associated with the temple.',
          hindi: 'तमिल पंचांग का एक प्रमुख उत्सव, जो इस मंदिर से संबद्ध है।',
        },
      },
    ],
    travel: {
      airport: 'Chennai International Airport (~75 km).',
      railway: 'Kanchipuram railway station connects to Chennai and Bengaluru lines.',
      road: 'Connected by national highway to Chennai (~75 km) and Vellore (~65 km).',
    },
    nearbyPlaces: ['Ekambareshwarar Temple', 'Varadharaja Perumal Temple', 'Kailasanathar Temple'],
    gallery: [],
    sourcesNote: "Story presented per South Indian Shakti Peetha tradition; the Adi Shankaracharya association is widely held in this region's tradition. Some pan-Indian Shakti Peetha lists compiled in North/East India omit Kanchipuram or place it differently; this variation is noted rather than resolved.",
  },
  {
    slug: 'mangala-gauri-gaya',
    name: 'Mangala Gauri',
    type: 'shakti-peetha',
    state: 'Bihar',
    city: 'Gaya',
    deity: 'Devi (as Mangala Gauri)',
    associatedDeity: 'Vaidyanath (Shashaan Bhairava, per some texts)',
    bodyPart: 'Breast',
    overview: {
      english:
        "Atop Mangalagauri Hill in Gaya — a city more widely known for Bodh Gaya and its Hindu funerary rites (Pind Daan) — this Shakti Peetha honours the goddess as Mangala Gauri, 'the auspicious fair one,' overlooking one of India's most historically significant pilgrimage towns.",
      hindi:
        "गया में मंगलागौरी पहाड़ी पर स्थित यह शक्तिपीठ — जो नगर बोधगया और हिंदू पितृ-कर्मों (पिंडदान) के लिए अधिक व्यापक रूप से जाना जाता है — देवी को मंगला गौरी, 'शुभ गौर वर्ण वाली देवी', के रूप में सम्मानित करता है, जो भारत के ऐतिहासिक दृष्टि से सबसे महत्वपूर्ण तीर्थ नगरों में से एक को निहारता है।",
    },
    story: [
      satiChapter1,
      satiChapter2,
      {
        chapterTitle: { english: "Sati's Breast at Gaya", hindi: 'गया में सती का वक्षस्थल' },
        order: 3,
        text: {
          english: "Tradition holds that Sati's breast fell at this hilltop site in Gaya, establishing a Shakti Peetha connected to nourishment and the goddess's maternal, sustaining aspect.",
          hindi: 'परंपरा के अनुसार सती का वक्षस्थल गया के इस पर्वत-शिखर स्थल पर गिरा, जिससे यह शक्तिपीठ पोषण और देवी के मातृत्व, पालन-पोषण करने वाले स्वरूप से जुड़ा हुआ माना जाता है।',
        },
      },
      {
        chapterTitle: { english: 'A City of Ancestral Rites', hindi: 'पितृ-कर्मों की नगरी' },
        order: 4,
        text: {
          english:
            "Gaya itself is one of the most important sites in Hindu tradition for Pind Daan and Shraddha rites for deceased ancestors, centred on the Vishnupad Temple. Mangala Gauri's presence on the hill above the city is understood by devotees as part of the same web of sanctity that makes Gaya significant for both the living's devotion and rites for the departed.",
          hindi:
            'गया स्वयं हिंदू परंपरा में दिवंगत पूर्वजों के लिए पिंडदान और श्राद्ध कर्मों हेतु सबसे महत्वपूर्ण स्थलों में से एक है, जिसका केंद्र विष्णुपद मंदिर है। नगर के ऊपर पहाड़ी पर मंगला गौरी की उपस्थिति को भक्तगण उसी पवित्रता के जाल के भाग रूप में समझते हैं, जो गया को जीवितों की भक्ति और दिवंगतों के कर्मों — दोनों के लिए महत्वपूर्ण बनाती है।',
        },
      },
    ],
    history: {
      english:
        'Gaya has been documented as a major pilgrimage centre since ancient times, referenced across the Ramayana, Mahabharata, and numerous Puranas, primarily for its association with ancestral rites at the Vishnupad Temple and the broader Falgu river precinct. The Mangala Gauri shrine atop its namesake hill has been maintained as part of this wider pilgrimage tradition through the medieval and modern periods.',
      hindi:
        'गया प्राचीन काल से ही एक प्रमुख तीर्थ केंद्र के रूप में दस्तावेज़ीकृत है, जिसका उल्लेख रामायण, महाभारत और अनेक पुराणों में मिलता है, मुख्यतः विष्णुपद मंदिर और व्यापक फल्गु नदी क्षेत्र में पितृ-कर्मों से इसके संबंध के कारण। अपने नाम वाली पहाड़ी पर स्थित मंगला गौरी मंदिर का मध्यकाल और आधुनिक काल में इसी व्यापक तीर्थ-परंपरा के भाग रूप में रखरखाव होता रहा है।',
    },
    architecture: {
      english:
        'A relatively modest hilltop shrine reached by a flight of stone steps, modest in architectural scale compared to the major temple complexes of Gaya below, with worship centred on two rounded, breast-shaped stone formations representing the goddess.',
      hindi:
        'पाषाण सीढ़ियों से पहुँचा जाने वाला एक अपेक्षाकृत सामान्य पर्वत-शिखर मंदिर, जो नीचे गया के प्रमुख मंदिर परिसरों की तुलना में स्थापत्य दृष्टि से छोटा है, जहाँ उपासना देवी का प्रतिनिधित्व करने वाली दो गोल, वक्षस्थल-आकार की पाषाण संरचनाओं पर केंद्रित है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: 'Observed with special rituals at the hilltop shrine.',
          hindi: 'पर्वत-शिखर मंदिर में विशेष अनुष्ठानों के साथ मनाई जाती है।',
        },
      },
      {
        name: 'Pitru Paksha',
        date: 'September (fortnight before Sharad Navaratri)',
        description: {
          english: "Not a festival of the Devi shrine itself, but the period that draws the largest pilgrim numbers to Gaya overall, for ancestral rites at the Vishnupad Temple below.",
          hindi: 'यह स्वयं देवी मंदिर का उत्सव नहीं है, बल्कि वह अवधि है जो नीचे विष्णुपद मंदिर में पितृ-कर्मों हेतु समग्र रूप से गया में सबसे अधिक संख्या में श्रद्धालुओं को आकर्षित करती है।',
        },
      },
    ],
    travel: {
      airport: 'Gaya Airport (~7 km), with international connectivity given its proximity to Bodh Gaya.',
      railway: 'Gaya Junction is a major railhead connected to Delhi, Kolkata, and Varanasi.',
      road: 'Connected by national highway to Patna (~100 km) and Varanasi (~250 km).',
    },
    nearbyPlaces: ['Vishnupad Temple', 'Bodh Gaya (Mahabodhi Temple, ~12 km)', 'Barabar Caves'],
    gallery: [],
    sourcesNote: 'Story presented per regional Shakti Peetha tradition. Bhairava attribution for this site varies between texts; this entry notes the commonly cited Vaidyanath/Shashaan association without asserting it as the only version in circulation.',
  },
];
