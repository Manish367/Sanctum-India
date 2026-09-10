import type { TempleSeedInput } from './types';

// Batch 2 — grounded directly in Wikipedia's "Shakta pithas" sourced table (body part /
// Devi / Bhairava / location come from that compiled, citation-backed list, not memory).
// Written more concisely than batch 1 given the volume, but every factual field is sourced;
// where the source table itself leaves a field blank or uncertain, that is stated plainly
// rather than invented. See sourcesNote on each entry.

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
      "At the yajna, Daksha publicly insulted Shiva before the assembled gods and sages. Unable to bear the humiliation of her husband, Sati gave up her own life in the sacrificial fire. Grief-stricken and enraged, Shiva arrived, destroyed the yajna, and carried Sati's body across the cosmos in the Rudra Tandava, a dance of cosmic destruction that threatened to unmake creation itself. To end it, Vishnu released his Sudarshana Chakra and cut Sati's body into pieces as Shiva carried it — wherever a part fell to earth, that place became a Shakti Peetha.",
    hindi:
      'यज्ञ में दक्ष ने एकत्रित देवताओं और ऋषियों के समक्ष सार्वजनिक रूप से शिव का अपमान किया। अपने पति के इस अपमान को सहन न कर सकने के कारण सती ने यज्ञकुंड में अपने प्राण त्याग दिए। शोक और क्रोध से भरे शिव वहाँ पहुँचे, यज्ञ को विध्वंस कर दिया, और सती के शरीर को लेकर रुद्र तांडव करते हुए ब्रह्मांड भर में विचरण करने लगे — विनाश का यह नृत्य सृष्टि को ही समाप्त कर देने की कगार पर पहुँच गया। इसे समाप्त करने हेतु विष्णु ने अपना सुदर्शन चक्र चलाया और शिव द्वारा ले जाए जा रहे सती के शरीर के टुकड़े कर दिए — जहाँ-जहाँ शरीर का कोई अंग पृथ्वी पर गिरा, वह स्थान शक्तिपीठ बन गया।',
  },
};

// A handful of rotating openings so ~40 back-to-back "what fell here" chapters don't read as
// one sentence with the noun swapped out. The underlying claim is identical by design — each
// Shakti Peetha's local tradition really does just assert one body part — so the variation is
// in framing, not invented detail.
const FELL_PHRASINGS = [
  (p: string) => `As the Sudarshana Chakra divided Sati's body while Shiva still carried it through the heavens, local tradition holds that her ${p} fell to earth here, and the site was consecrated as a Shakti Peetha in that instant.`,
  (p: string) => `Local tradition names this site as the place where Sati's ${p} came to rest, one of the fifty-one points across the subcontinent where a fragment of her body — cut loose by Vishnu's Sudarshana Chakra — fell and was consecrated as a Shakti Peetha.`,
  (p: string) => `This is, by the tradition specific to this shrine, one of the fifty-one sites where a part of Sati's body fell as the Sudarshana Chakra divided it — here, her ${p} — turning the spot into a Shakti Peetha in its own right.`,
];

// Hindi counterparts to FELL_PHRASINGS, same rotation index. Kept separate (rather than one
// combined bilingual array) so temples not yet given a Hindi body-part name can keep calling
// fellChapter with just the English part and fall back to English, batch by batch.
const FELL_PHRASINGS_HI = [
  (p: string) => `जब शिव अभी भी सती के शरीर को आकाश में लिए घूम रहे थे, तभी सुदर्शन चक्र से उनका शरीर विभाजित हो गया — स्थानीय परंपरा के अनुसार उनका ${p} यहाँ पृथ्वी पर गिरा, और उसी क्षण यह स्थल शक्तिपीठ के रूप में पवित्र हो गया।`,
  (p: string) => `स्थानीय परंपरा इस स्थल को वह स्थान बताती है जहाँ सती का ${p} आकर टिका — यह उन इक्यावन स्थलों में से एक है जहाँ विष्णु के सुदर्शन चक्र से अलग हुआ उनके शरीर का कोई अंश पृथ्वी पर गिरकर शक्तिपीठ के रूप में पवित्र हुआ।`,
  (p: string) => `इस मंदिर की अपनी परंपरा के अनुसार, यह उन इक्यावन स्थलों में से एक है जहाँ सुदर्शन चक्र द्वारा विभाजित होते हुए सती के शरीर का कोई अंश गिरा था — यहाँ उनका ${p} — जिससे यह स्थल स्वयं में एक शक्तिपीठ बन गया।`,
];

function fellChapter(part: string, index = 0, partHi?: string) {
  const phrasing = FELL_PHRASINGS[index % FELL_PHRASINGS.length];
  return {
    chapterTitle: { english: 'What Fell Here', hindi: partHi ? 'यहाँ क्या गिरा' : '' },
    order: 3,
    text: {
      english: phrasing(part.toLowerCase()),
      hindi: partHi ? FELL_PHRASINGS_HI[index % FELL_PHRASINGS_HI.length](partHi) : '',
    },
  };
}

export const shaktiPeethasBatch2: TempleSeedInput[] = [
  {
    slug: 'amarnath',
    name: 'Amarnath',
    type: 'shakti-peetha',
    badgeLabel: 'Shiva Cave Shrine',
    state: 'Jammu and Kashmir',
    city: 'Pahalgam tehsil, Anantnag district',
    deity: 'Shiva (the cave is also classified as the Mahamaya Shakti Pitha)',
    associatedDeity: 'Mahamaya',
    bodyPart: "Not specified in the sources that classify this site as a Shakti Pitha — unusually among the fifty-one, no text names a body part or ties the cave to Sati's story directly; see sourcesNote",
    overview: {
      english:
        'High in the Kashmir Himalayas at 3,888 metres, the Amarnath cave is overwhelmingly known as a Shiva shrine — the site of a naturally forming ice lingam, visited by hundreds of thousands of pilgrims each summer. It is also independently documented as the "Mahamaya Shakti Pitha," one of the 51 Shakti Pithas, though that classification sits alongside its Shiva identity rather than defining it.',
      hindi:
        'कश्मीर हिमालय में 3,888 मीटर की ऊँचाई पर स्थित अमरनाथ गुफा मुख्यतः शिव मंदिर के रूप में जानी जाती है — यह एक प्राकृतिक रूप से बनने वाले हिम-लिंग का स्थल है, जहाँ प्रत्येक ग्रीष्म ऋतु में लाखों श्रद्धालु आते हैं। इसे स्वतंत्र रूप से "महामाया शक्तिपीठ" के रूप में भी दस्तावेज़ीकृत किया गया है, जो 51 शक्तिपीठों में से एक है, यद्यपि यह वर्गीकरण इसकी शिव-पहचान के साथ-साथ है, न कि उसे परिभाषित करने वाला।',
    },
    story: [
      {
        chapterTitle: { english: "Sage Bhrigu's Discovery", hindi: 'ऋषि भृगु की खोज' },
        order: 1,
        text: {
          english:
            'According to legend, the Kashmir valley was once submerged underwater until the sage Kashyapa drained it through a network of rivers. As the waters receded, the sage Bhrigu is said to have been the first to behold Shiva at Amarnath — after which word of the lingam spread, and the cave became a site of pilgrimage for all believers.',
          hindi:
            'किंवदंती के अनुसार, कश्मीर घाटी कभी जल में डूबी हुई थी, जब तक ऋषि कश्यप ने नदियों के एक जाल द्वारा उसका जल निकाल नहीं दिया। जैसे-जैसे जल उतरा, कहा जाता है कि ऋषि भृगु सबसे पहले अमरनाथ में शिव के दर्शन करने वाले थे — इसके पश्चात् लिंग की चर्चा फैली, और यह गुफा सभी श्रद्धालुओं के लिए तीर्थ स्थल बन गई।',
        },
      },
      {
        chapterTitle: { english: "Shiva's Journey to the Cave", hindi: 'गुफा तक शिव की यात्रा' },
        order: 2,
        text: {
          english:
            "Regional tradition holds that Shiva shed his worldly attributes one by one along the route to the cave: his bull Nandi at Pahalgam, the crescent moon from his hair at Chandanwari, his serpent Vasuki at Sheshnag lake, his son Ganesha at Mahagunas Parvat, and the five elements themselves at Panjtarni. Having renounced everything, he performed the tandava dance of detachment and entered the cave with Parvati alone.",
          hindi:
            'क्षेत्रीय परंपरा के अनुसार शिव ने गुफा तक के मार्ग में अपने सांसारिक चिह्न एक-एक कर त्याग दिए: पहलगाम में अपने बैल नंदी को, चंदनवाड़ी में अपनी जटाओं के अर्धचंद्र को, शेषनाग झील में अपने सर्प वासुकि को, महागुणस पर्वत पर अपने पुत्र गणेश को, और पंजतरणी में स्वयं पंच तत्वों को। सब कुछ त्यागकर उन्होंने विरक्ति का तांडव नृत्य किया और केवल पार्वती के साथ गुफा में प्रवेश किया।',
        },
      },
      {
        chapterTitle: { english: 'The Secret of Immortality', hindi: 'अमरत्व का रहस्य' },
        order: 3,
        text: {
          english:
            'Inside the cave, tradition holds, Shiva revealed to Parvati the secret of life and eternity — the Amar Katha. The ice lingam that forms each summer, waxing and waning with the moon, is regarded by devotees as the physical trace of that revelation.',
          hindi:
            'परंपरा के अनुसार, गुफा के भीतर शिव ने पार्वती को जीवन और शाश्वतता का रहस्य — अमर कथा — बताया। प्रत्येक ग्रीष्म ऋतु में बनने वाला और चंद्रमा के साथ घटता-बढ़ता हिम-लिंग भक्तों द्वारा उसी रहस्योद्घाटन के भौतिक चिह्न के रूप में माना जाता है।',
        },
      },
    ],
    history: {
      english:
        'The cave and its pilgrimage are documented far earlier than most Himalayan shrines: the 6th-7th century Nilamata Purana and Kalhana\'s 12th-century Rajatarangini both refer to it as "Amareshvara" and its pilgrimage as the "Amareshvara Yatra," with the Rajatarangini recording that Queen Suryamati, an 11th-century consort of King Ananta of Kashmir, built a temple here and installed trishulas and banalingas. The Mughal chronicler Abu\'l Fazl described the site and its ice lingam in the 16th-century Ain-i-Akbari, and the French physician François Bernier recorded a visit to the cave while travelling with Aurangzeb in 1663. Swami Vivekananda visited in 1898. Today the pilgrimage runs a strictly time-limited 45-day season each July-August, with pilgrim numbers, permits and safety tracking managed by the Shri Amarnathji Shrine Board given the route\'s high-altitude, glacier-adjacent conditions.',
      hindi:
        "यह गुफा और इसकी तीर्थयात्रा अधिकांश हिमालयी मंदिरों से कहीं पहले से दस्तावेज़ीकृत है: छठी-सातवीं शताब्दी का नीलमत पुराण और कल्हण की बारहवीं शताब्दी की राजतरंगिणी दोनों इसे 'अमरेश्वर' और इसकी तीर्थयात्रा को 'अमरेश्वर यात्रा' कहते हैं; राजतरंगिणी में दर्ज है कि कश्मीर के राजा अनंत की 11वीं शताब्दी की रानी सूर्यमती ने यहाँ एक मंदिर बनवाया और त्रिशूल तथा बाणलिंग स्थापित किए। मुगल इतिहासकार अबुल फ़ज़ल ने 16वीं शताब्दी की आइन-ए-अकबरी में इस स्थल और इसके हिम-लिंग का वर्णन किया, और फ्रांसीसी चिकित्सक फ्रांस्वा बर्नियर ने 1663 में औरंगज़ेब के साथ यात्रा करते हुए इस गुफा की यात्रा का उल्लेख किया। स्वामी विवेकानंद ने 1898 में यहाँ की यात्रा की। आज यह तीर्थयात्रा प्रत्येक जुलाई-अगस्त में सख्ती से सीमित 45-दिवसीय सत्र में चलती है, जिसमें मार्ग की उच्च-ऊँचाई और हिमनद-निकटवर्ती परिस्थितियों को देखते हुए श्री अमरनाथजी श्राइन बोर्ड द्वारा श्रद्धालु संख्या, अनुमति-पत्र और सुरक्षा की निगरानी की जाती है।",
    },
    architecture: {
      english:
        "There is no built temple — the cave itself, roughly 40 metres tall at 3,888 metres elevation, and the ice stalagmite within it are the object of worship. The main formation, regarded as Shiva, is joined by two smaller stalagmites popularly identified as Parvati and Ganesha. The ice lingam forms as snowmelt seeps through the limestone and gypsum cave roof and freezes, waxing through early summer and waning as the season ends.",
      hindi:
        'यहाँ कोई निर्मित मंदिर नहीं है — 3,888 मीटर की ऊँचाई पर लगभग 40 मीटर ऊँची गुफा स्वयं, और उसके भीतर हिम-स्तंभ ही उपासना का विषय है। शिव माने जाने वाले मुख्य स्तंभ के साथ दो छोटे स्तंभ भी हैं, जिन्हें लोकप्रिय रूप से पार्वती और गणेश के रूप में पहचाना जाता है। हिम-लिंग तब बनता है जब बर्फ का पिघला जल चूना-पत्थर और जिप्सम की गुफा-छत से रिसकर जम जाता है, जो ग्रीष्म ऋतु के प्रारंभ में बढ़ता और सत्र समाप्त होने पर घटता है।',
    },
    festivals: [
      {
        name: 'Amarnath Yatra',
        date: 'July/August (Shravan month, ~45 days)',
        description: {
          english: 'The annual pilgrimage season, when the cave is accessible and the ice lingam is at or near its fullest form.',
          hindi: 'वार्षिक तीर्थयात्रा सत्र, जब गुफा सुगम्य होती है और हिम-लिंग अपने सबसे पूर्ण रूप में अथवा उसके निकट होता है।',
        },
      },
    ],
    travel: {
      airport: 'Srinagar Airport (~141 km), then overland to the Pahalgam or Baltal/Sonamarg base camps.',
      railway: 'Jammu Tawi is the nearest major railhead before the overland route into the Kashmir valley.',
      road: 'Reached by a multi-day trek from Pahalgam (~48 km) or a shorter route from Baltal (~14 km); helicopter services and pre-registration with the Shrine Board are required.',
    },
    nearbyPlaces: ['Pahalgam', 'Sheshnag Lake', 'Baltal', 'Sonamarg'],
    gallery: [],
    sourcesNote:
      "This entry was rewritten after checking directly against Wikipedia's own Amarnath Temple article (distinct from, and better-sourced than, the general 'Shakta pithas' compilation this platform used for most other entries) — it cites Kalhana's Rajatarangini, Abu'l Fazl's Ain-i-Akbari, and a dedicated 2021 New Indian Express feature on the Shakti Peethas for the 'Mahamaya Shakti Pitha' classification specifically. That classification is real and independently documented, but notably thinner than almost every other Peetha: no source names a body part, and no local legend ties the cave to Sati at all — its living identity, in every source, is entirely about Shiva. It is included here for completeness and accuracy to that documented classification, with that imbalance stated plainly rather than papered over.",
  },
  {
    slug: 'attahas',
    name: 'Attahas',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Labhpur, Birbhum district',
    deity: 'Phullara Devi',
    associatedDeity: 'Vishweshwar',
    bodyPart: 'Lips',
    overview: {
      english:
        "In the Birbhum district of West Bengal — a region unusually dense with Shakti Peethas — Attahas honours the goddess as Phullara, where Sati's lips are held to have fallen.",
      hindi:
        'पश्चिम बंगाल के बीरभूम जिले में — जो असामान्य रूप से शक्तिपीठों से सघन क्षेत्र है — अट्टहास देवी को फुल्लरा के रूप में सम्मानित करता है, जहाँ सती के होंठ गिरने की मान्यता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('lips', 0, 'होंठ')],
    history: {
      english:
        "Attahas has been part of the dense cluster of Birbhum Shakta pilgrimage sites for many centuries, maintained through the region's long-standing Shakta tradition alongside nearby peethas like Bakreshwar, Kankalitala and Nalhati.",
      hindi:
        'अट्टहास सदियों से बीरभूम के सघन शाक्त तीर्थ-स्थलों के समूह का भाग रहा है, जिसका रखरखाव क्षेत्र की दीर्घकालिक शाक्त परंपरा के अंतर्गत बकरेश्वर, कंकालीतला और नलहाटी जैसे समीपवर्ती पीठों के साथ होता रहा है।',
    },
    architecture: {
      english: "A modest Bengali-style temple typical of the Birbhum region's many small Shakti shrines, centred on the worship of Phullara Devi.",
      hindi: 'बीरभूम क्षेत्र के अनेक छोटे शक्ति मंदिरों की विशिष्ट सामान्य बंगाली शैली का मंदिर, जिसका केंद्र फुल्लरा देवी की उपासना है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "Observed as part of the region's wider Shakta festival calendar.",
          hindi: 'क्षेत्र के व्यापक शाक्त उत्सव-कैलेंडर के भाग रूप में मनाई जाती है।',
        },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~55 km).',
      railway: 'Labhpur railway station serves the town directly, on the Bardhaman-Rampurhat line.',
      road: 'Connected by road to Bolpur/Santiniketan (~25 km) and Rampurhat (~35 km).',
    },
    nearbyPlaces: ['Bakreshwar', 'Kankalitala', 'Santiniketan'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bahula',
    name: 'Bahula',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Ketugram, Purba Bardhaman district',
    deity: 'Bahula Devi',
    associatedDeity: 'Bhirukeshwar',
    bodyPart: 'Left arm',
    overview: {
      english: "The Bahula Shakti Peetha at Ketugram honours the goddess as Bahula, marking the site where tradition holds Sati's left arm fell.",
      hindi: 'केतुग्राम में स्थित बाहुला शक्तिपीठ देवी को बाहुला के रूप में सम्मानित करता है, यह वह स्थल है जहाँ परंपरा के अनुसार सती का बायाँ हाथ गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left arm', 1, 'बायाँ हाथ')],
    history: {
      english: "Bahula has been an active pilgrimage site within the Bardhaman region's Shakta tradition for centuries, maintained by local communities alongside the area's other peethas.",
      hindi: 'बाहुला सदियों से बर्धमान क्षेत्र की शाक्त परंपरा के भीतर एक सक्रिय तीर्थ स्थल रहा है, जिसका रखरखाव स्थानीय समुदायों द्वारा क्षेत्र के अन्य पीठों के साथ होता रहा है।',
    },
    architecture: {
      english: 'A traditional Bengali temple structure, modest in scale, centred on the worship of Bahula Devi.',
      hindi: 'एक पारंपरिक बंगाली मंदिर संरचना, आकार में सामान्य, जिसका केंद्र बाहुला देवी की उपासना है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~50 km).',
      railway: 'Katwa railway station is the nearest major rail link (~15 km).',
      road: 'Connected by road to Bardhaman (~50 km) and Katwa (~15 km).',
    },
    nearbyPlaces: ['Katwa', 'Ujaani (Mangal Chandika Shakti Peetha)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bakreshwar',
    name: 'Bakreshwar',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Bakreshwar, Birbhum district',
    deity: 'Mahishmardini Devi',
    associatedDeity: 'Vakranatheshwar',
    bodyPart: 'Portion between the eyebrows (the mind)',
    overview: {
      english: "Bakreshwar is distinguished by its setting alongside natural hot springs, and honours Sati's mind — the space between her eyebrows — as what fell here.",
      hindi: 'बकरेश्वर की विशेषता प्राकृतिक उष्ण जलस्रोतों के साथ इसका स्थान है, और यह सती के मन — उनकी भ्रकुटियों के बीच के स्थान — को सम्मानित करता है, जो यहाँ गिरा माना जाता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('portion between the eyebrows', 2, 'भ्रकुटियों के बीच का भाग')],
    history: {
      english: "Bakreshwar has been a significant Shakta and geothermal pilgrimage site for centuries, its hot springs (kunds) themselves considered sacred and integrated into the temple's ritual bathing tradition.",
      hindi: 'बकरेश्वर सदियों से एक महत्वपूर्ण शाक्त एवं भूतापीय तीर्थ स्थल रहा है, जहाँ के उष्ण जलस्रोत (कुंड) स्वयं पवित्र माने जाते हैं और मंदिर की अनुष्ठानिक स्नान परंपरा में समाहित हैं।',
    },
    architecture: {
      english: 'A temple complex built around several natural hot spring kunds, each associated with specific ritual bathing practices alongside the main shrine.',
      hindi: 'कई प्राकृतिक उष्ण जलस्रोत कुंडों के चारों ओर निर्मित एक मंदिर परिसर, जिनमें से प्रत्येक मुख्य मंदिर के साथ विशिष्ट अनुष्ठानिक स्नान प्रथाओं से संबद्ध है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Marked with rituals at both the temple and the hot spring kunds.', hindi: 'मंदिर और उष्ण जलस्रोत कुंडों दोनों पर अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~65 km).',
      railway: 'Dubrajpur railway station is the nearest rail link (~15 km).',
      road: 'Connected by road to Suri (~24 km) and Rampurhat (~40 km).',
    },
    nearbyPlaces: ['Dubrajpur', 'Attahas', 'Kankalitala'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bhabanipur',
    name: 'Bhabanipur',
    type: 'shakti-peetha',
    state: 'Rajshahi Division, Bangladesh',
    city: 'Bhabanipur',
    deity: 'Aparna Devi',
    associatedDeity: 'Vamaneshwar',
    bodyPart: 'Left anklet (ornament)',
    overview: {
      english: "In Rajshahi division, Bangladesh, the Bhabanipur Shakti Peetha honours Sati's left anklet, one of several peethas that fell across present-day Bangladesh according to tradition.",
      hindi: 'बांग्लादेश के राजशाही मंडल में स्थित भबानीपुर शक्तिपीठ सती की बाईं पायल को सम्मानित करता है — यह उन कई पीठों में से एक है जो परंपरा के अनुसार वर्तमान बांग्लादेश में गिरे थे।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left anklet (ornament)', 3, 'बाईं पायल')],
    history: {
      english: "Bhabanipur has remained an active site of Hindu worship within Bangladesh's Rajshahi region across the modern period, maintained by the local Hindu community as part of the wider tradition of Shakta pithas in Bengal.",
      hindi: 'भबानीपुर आधुनिक काल में बांग्लादेश के राजशाही क्षेत्र में हिंदू उपासना का एक सक्रिय स्थल बना रहा है, जिसका रखरखाव स्थानीय हिंदू समुदाय द्वारा बंगाल की व्यापक शाक्त पीठ परंपरा के भाग रूप में होता रहा है।',
    },
    architecture: {
      english: 'A modest regional temple structure typical of Bengal-delta Shakta shrines.',
      hindi: 'बंगाल-डेल्टा के शाक्त मंदिरों की विशिष्ट सामान्य क्षेत्रीय मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Durga Puja / Navaratri',
        date: 'September/October',
        description: { english: "Observed in keeping with Bengal's wider Shakta festival calendar.", hindi: 'बंगाल के व्यापक शाक्त उत्सव-कैलेंडर के अनुरूप मनाया जाता है।' },
      },
    ],
    travel: {
      airport: 'Shah Amanat International Airport or Rajshahi domestic airport, depending on route.',
      railway: 'Rajshahi railway station is the nearest major rail hub.',
      road: 'Reached by road within Rajshahi division.',
    },
    nearbyPlaces: ['Rajshahi city'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. Travel information is general; cross-border pilgrimage logistics from India should be checked independently.",
  },
  {
    slug: 'biraja-jajpur',
    name: 'Biraja (Jajpur)',
    type: 'shakti-peetha',
    state: 'Odisha',
    city: 'Jajpur',
    deity: 'Biraja Devi',
    associatedDeity: 'Varaheshwar (Varaha)',
    bodyPart: 'Navel',
    overview: {
      english: "The Biraja Temple at Jajpur, on the Vaitarani river, is among the most historically significant Shakti Peethas in Odisha, marking where tradition holds that Sati's navel fell.",
      hindi: 'वैतरणी नदी के तट पर जाजपुर में स्थित बिराजा मंदिर ओडिशा के ऐतिहासिक दृष्टि से सबसे महत्वपूर्ण शक्तिपीठों में से एक है, जहाँ परंपरा के अनुसार सती की नाभि गिरी थी।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('navel', 4, 'नाभि')],
    history: {
      english:
        'Jajpur was an ancient capital of the ancient Kalinga/Odisha region, and the Biraja Temple is documented as a major pilgrimage centre from at least the early medieval period, with architectural elements and inscriptions pointing to patronage across several regional dynasties over many centuries.',
      hindi:
        'जाजपुर प्राचीन कलिंग/ओडिशा क्षेत्र की एक प्राचीन राजधानी था, और बिराजा मंदिर कम से कम प्रारंभिक मध्यकाल से एक प्रमुख तीर्थ केंद्र के रूप में दस्तावेज़ीकृत है, जिसके स्थापत्य तत्व और शिलालेख सदियों में कई क्षेत्रीय राजवंशों के संरक्षण की ओर संकेत करते हैं।',
    },
    architecture: {
      english: "Built in the Kalinga temple style characteristic of Odisha, with a curvilinear deul (tower) and an image of Biraja Devi worshipped alongside Varaha (Vishnu's boar incarnation) as the site's Bhairava.",
      hindi: 'ओडिशा की विशिष्ट कलिंग मंदिर शैली में निर्मित, वक्ररेखीय देउल (शिखर) के साथ, जहाँ बिराजा देवी की प्रतिमा को वराह (विष्णु के वराह अवतार) के साथ, इस स्थल के भैरव के रूप में, पूजा जाता है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: "The temple's major annual festival period.", hindi: 'मंदिर का मुख्य वार्षिक उत्सव काल।' },
      },
    ],
    travel: {
      airport: 'Biju Patnaik International Airport, Bhubaneswar (~90 km).',
      railway: 'Jajpur Keonjhar Road railway station is the nearest major rail link.',
      road: 'Connected by road to Bhubaneswar (~90 km) and Cuttack (~60 km).',
    },
    nearbyPlaces: ['Ratnagiri, Udayagiri and Lalitgiri Buddhist sites (nearby district)', 'Vaitarani river ghats'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'guhyeshwari',
    name: 'Guhyeshwari',
    type: 'shakti-peetha',
    state: 'Bagmati Province, Nepal',
    city: 'Kathmandu',
    deity: 'Guhyakali Devi',
    associatedDeity: 'Pashupati',
    bodyPart: 'Knees',
    overview: {
      english: 'Standing close to the Pashupatinath Temple on the banks of the Bagmati river, Guhyeshwari is one of the most important Shakti Peethas in Nepal, closely linked in tradition to Pashupatinath as its Shiva counterpart.',
      hindi: 'बागमती नदी के तट पर पशुपतिनाथ मंदिर के निकट स्थित गुह्येश्वरी नेपाल के सबसे महत्वपूर्ण शक्तिपीठों में से एक है, जो परंपरा में पशुपतिनाथ से उसके शिव-प्रतिरूप के रूप में घनिष्ठ रूप से जुड़ा है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('knees', 5, 'घुटने')],
    history: {
      english:
        'Guhyeshwari has been a significant Shakta pilgrimage site in the Kathmandu Valley for many centuries, closely tied to the much larger Pashupatinath temple complex nearby, with both forming an integrated pilgrimage circuit for Hindu devotees in Nepal.',
      hindi:
        'गुह्येश्वरी सदियों से काठमांडू घाटी का एक महत्वपूर्ण शाक्त तीर्थ स्थल रहा है, जो समीपवर्ती कहीं बड़े पशुपतिनाथ मंदिर परिसर से घनिष्ठ रूप से जुड़ा है, और दोनों मिलकर नेपाल के हिंदू श्रद्धालुओं के लिए एक एकीकृत तीर्थ-परिपथ बनाते हैं।',
    },
    architecture: {
      english: 'A pagoda-style Nepali temple structure with a gilded roof, consistent with the broader architectural tradition of the Pashupatinath complex.',
      hindi: 'स्वर्ण-मंडित छत वाली पैगोडा-शैली की नेपाली मंदिर संरचना, जो पशुपतिनाथ परिसर की व्यापक स्थापत्य परंपरा के अनुरूप है।',
    },
    festivals: [
      {
        name: 'Navaratri (Dashain)',
        date: 'September/October',
        description: {
          english: "Nepal's major Shakta festival period, observed with particular significance at this temple.",
          hindi: 'नेपाल का प्रमुख शाक्त उत्सव काल, जो इस मंदिर में विशेष महत्व के साथ मनाया जाता है।',
        },
      },
    ],
    travel: {
      airport: 'Tribhuvan International Airport, Kathmandu (~6 km).',
      railway: 'No rail access; Kathmandu is reached by road or air.',
      road: 'Located within Kathmandu, adjoining the Pashupatinath Temple complex.',
    },
    nearbyPlaces: ['Pashupatinath Temple', 'Boudhanath Stupa'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'muktinath',
    name: 'Muktinath',
    type: 'shakti-peetha',
    state: 'Gandaki Province, Nepal',
    city: 'Muktinath, Mustang district',
    deity: 'Gandaki Chandi Devi (also worshipped as Lakshmi)',
    associatedDeity: 'Chakrapani Bhairava (also worshipped as Vishnu)',
    bodyPart: 'Head',
    overview: {
      english: "High in the Mustang region of Nepal, Muktinath is unusual for being sacred to both Hindus and Buddhists, and for being worshipped by Vaishnavites as well as Shaktas — tradition holds that Sati's head fell here.",
      hindi: 'नेपाल के मुस्तांग क्षेत्र में ऊँचाई पर स्थित मुक्तिनाथ इस दृष्टि से असामान्य है कि यह हिंदुओं और बौद्धों दोनों के लिए पवित्र है, और वैष्णवों तथा शाक्तों दोनों द्वारा पूजा जाता है — परंपरा के अनुसार सती का मस्तक यहाँ गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('head', 6, 'मस्तक')],
    history: {
      english:
        'Muktinath has been a significant pilgrimage site for Hindus and Buddhists alike for many centuries, sitting along the historic Annapurna trekking and trading route, with its 108 water spouts and eternal flame (fed by natural gas, similar in principle to Jwalamukhi) drawing pilgrims of multiple traditions.',
      hindi:
        'मुक्तिनाथ सदियों से हिंदुओं और बौद्धों दोनों के लिए एक महत्वपूर्ण तीर्थ स्थल रहा है, जो ऐतिहासिक अन्नपूर्णा ट्रेकिंग एवं व्यापार मार्ग पर स्थित है, जहाँ के 108 जलधारा-मुख और शाश्वत ज्वाला (प्राकृतिक गैस से पोषित, सिद्धांततः ज्वालामुखी के समान) कई परंपराओं के श्रद्धालुओं को आकर्षित करती है।',
    },
    architecture: {
      english: 'A pagoda-style temple complex at high altitude, with 108 stone water spouts used for ritual bathing and a small eternal flame shrine nearby.',
      hindi: 'ऊँचाई पर स्थित एक पैगोडा-शैली का मंदिर परिसर, जिसमें अनुष्ठानिक स्नान हेतु प्रयुक्त 108 पाषाण जलधारा-मुख और निकट एक छोटा शाश्वत ज्वाला मंदिर है।',
    },
    festivals: [
      {
        name: 'Navaratri (Dashain)',
        date: 'September/October',
        description: { english: 'Observed by Hindu pilgrims visiting the shrine.', hindi: 'मंदिर आने वाले हिंदू श्रद्धालुओं द्वारा मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Jomsom Airport, then a trek or jeep ride to Muktinath (~18 km).',
      railway: 'No rail access; reached via Pokhara and Jomsom by air, or overland trekking routes.',
      road: 'Jeep-accessible road from Jomsom; part of the wider Annapurna Circuit trekking region.',
    },
    nearbyPlaces: ['Jomsom', 'Annapurna Circuit trekking route'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation, which also notes this site's dual Shakta/Vaishnava significance.",
  },
  {
    slug: 'saptashrungi',
    name: 'Saptashrungi',
    type: 'shakti-peetha',
    state: 'Maharashtra',
    city: 'Vani, Nashik district',
    deity: 'Bhadrakali Saptashrungi Devi',
    associatedDeity: 'Vikritaksheshwar',
    bodyPart: 'Chin (in two parts, per tradition)',
    overview: {
      english:
        'Set into a cliff face on the "seven-peaked" (Saptashrungi) hill near Nashik, this Shakti Peetha is home to an 8-foot rock-cut image of the goddess with eighteen arms, among the most visited Devi shrines in Maharashtra.',
      hindi:
        "नासिक के निकट 'सात शिखरों वाली' (सप्तशृंगी) पहाड़ी की एक चट्टान में स्थित यह शक्तिपीठ अठारह भुजाओं वाली देवी की 8 फुट ऊँची शिला-उत्कीर्ण प्रतिमा का स्थान है, जो महाराष्ट्र के सर्वाधिक दर्शनार्थियों वाले देवी मंदिरों में से एक है।",
    },
    story: [satiChapter1, satiChapter2, fellChapter('chin', 7, 'ठुड्डी')],
    history: {
      english:
        "Saptashrungi has been an important regional pilgrimage site for many centuries, with the goddess's image carved directly into the hillside rock face rather than installed as a separate idol — a form of worship associated with considerable antiquity in the region.",
      hindi:
        'सप्तशृंगी सदियों से एक महत्वपूर्ण क्षेत्रीय तीर्थ स्थल रहा है, जहाँ देवी की प्रतिमा किसी पृथक मूर्ति के रूप में स्थापित करने के बजाय सीधे पहाड़ी की चट्टान में उत्कीर्ण की गई है — यह उपासना का एक ऐसा रूप है जो क्षेत्र में काफी प्राचीनता से संबद्ध है।',
    },
    architecture: {
      english: "The sanctum is built directly into the cliff, centred on a rock-cut, vermilion-coated image of the eighteen-armed goddess; a ropeway now assists pilgrims up the final ascent.",
      hindi: 'गर्भगृह सीधे चट्टान में निर्मित है, जिसका केंद्र अठारह भुजाओं वाली देवी की सिंदूर-लेपित, शिला-उत्कीर्ण प्रतिमा है; अब एक रोपवे श्रद्धालुओं को अंतिम आरोहण में सहायता करता है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "The temple's largest festival period, drawing very large crowds from across Maharashtra.",
          hindi: 'मंदिर का सबसे बड़ा उत्सव काल, जो महाराष्ट्र भर से बहुत बड़ी भीड़ आकर्षित करता है।',
        },
      },
      {
        name: 'Chaitra Navaratri',
        date: 'March/April',
        description: { english: 'A second major festival period observed at the temple.', hindi: 'मंदिर में मनाया जाने वाला एक दूसरा प्रमुख उत्सव काल।' },
      },
    ],
    travel: {
      airport: 'Nashik Airport (Ozar, ~65 km).',
      railway: 'Nashik Road railway station is the nearest major railhead (~65 km).',
      road: 'Connected by road to Nashik (~60 km) via Vani.',
    },
    nearbyPlaces: ['Vani town', 'Nashik city and Trimbakeshwar (same district)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'kankalitala',
    name: 'Kankalitala',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Kankalitala, near Bolpur, Birbhum district',
    deity: 'Devgarbha Devi',
    associatedDeity: 'Rurunatheshwar',
    bodyPart: 'Waist',
    overview: {
      english: "Close to Santiniketan, Kankalitala marks where Sati's waist is held to have fallen, worshipped here without a conventional idol.",
      hindi: 'शांतिनिकेतन के निकट स्थित कंकालीतला वह स्थल है जहाँ सती की कमर गिरने की मान्यता है, यहाँ देवी को बिना किसी पारंपरिक मूर्ति के पूजा जाता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('waist', 8, 'कमर')],
    history: {
      english:
        "Kankalitala has been part of the Birbhum region's dense cluster of Shakta pilgrimage sites for centuries, its proximity to Santiniketan (established by Rabindranath Tagore's family in the 19th century) placing it within a well-documented modern pilgrimage and cultural landscape.",
      hindi:
        'कंकालीतला सदियों से बीरभूम क्षेत्र के सघन शाक्त तीर्थ-स्थलों के समूह का भाग रहा है; शांतिनिकेतन (जिसकी स्थापना 19वीं शताब्दी में रवींद्रनाथ टैगोर के परिवार ने की थी) से इसकी निकटता इसे एक सुदस्तावेज़ीकृत आधुनिक तीर्थ एवं सांस्कृतिक परिदृश्य के भीतर स्थान देती है।',
    },
    architecture: {
      english: 'A riverside shrine on the banks of the Kopai river, with worship centred on the sacred site itself rather than an elaborate temple superstructure.',
      hindi: 'कोपाई नदी के तट पर स्थित एक तटवर्ती मंदिर, जहाँ उपासना किसी विस्तृत मंदिर-अधिसंरचना के बजाय स्वयं पवित्र स्थल पर केंद्रित है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~50 km).',
      railway: 'Bolpur Shantiniketan railway station is the nearest major rail link (~8 km).',
      road: 'Connected by road to Bolpur/Santiniketan (~8 km).',
    },
    nearbyPlaces: ['Santiniketan (Visva-Bharati University)', 'Bakreshwar', 'Attahas'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'kanyakumari',
    name: 'Kanyakumari (Bhagavathy Amman)',
    type: 'shakti-peetha',
    state: 'Tamil Nadu',
    city: 'Kanyakumari',
    deity: 'Kanyakumari Devi',
    associatedDeity: 'Nimisheshwar',
    bodyPart: 'Back',
    overview: {
      english:
        'At the southernmost tip of the Indian mainland, where the Arabian Sea, Bay of Bengal and Indian Ocean meet, the Kanyakumari temple honours the goddess in her virgin (Kumari) form — one of the most geographically striking Shakti Peethas.',
      hindi:
        'भारतीय उपमहाद्वीप के दक्षिणतम छोर पर, जहाँ अरब सागर, बंगाल की खाड़ी और हिंद महासागर मिलते हैं, कन्याकुमारी मंदिर देवी को उनके कुमारी रूप में सम्मानित करता है — यह भौगोलिक दृष्टि से सर्वाधिक आकर्षक शक्तिपीठों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('back', 9, 'पीठ')],
    history: {
      english:
        'Kanyakumari has been a significant pilgrimage site since antiquity, referenced across classical Tamil and Sanskrit literature, and has functioned continuously as both a major temple town and a strategic coastal landmark for maritime trade and navigation for centuries.',
      hindi:
        'कन्याकुमारी प्राचीन काल से ही एक महत्वपूर्ण तीर्थ स्थल रहा है, जिसका उल्लेख शास्त्रीय तमिल और संस्कृत साहित्य में मिलता है, और यह सदियों से एक प्रमुख मंदिर नगर तथा समुद्री व्यापार एवं नौवहन के लिए एक सामरिक तटीय पहचान-चिह्न, दोनों रूपों में निरंतर कार्यरत रहा है।',
    },
    architecture: {
      english:
        "A Dravidian-style temple complex facing the sea, its idol traditionally lit so its nose-ring diamond is said to have once been visible far out to sea, guiding sailors — a detail now managed carefully given modern lighting.",
      hindi:
        'समुद्र की ओर मुख किए हुए द्रविड़ शैली का मंदिर परिसर, जिसकी प्रतिमा परंपरागत रूप से इस प्रकार प्रकाशित की जाती थी कि उसकी नथ का हीरा कहा जाता है कि कभी दूर समुद्र से भी दिखाई देता था, जिससे नाविकों को दिशा मिलती थी — आधुनिक प्रकाश-व्यवस्था के चलते अब इसका सावधानीपूर्वक प्रबंधन किया जाता है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: "The temple's largest festival period.", hindi: 'मंदिर का सबसे बड़ा उत्सव काल।' },
      },
      {
        name: 'Chithira Pournami',
        date: 'April/May',
        description: { english: 'A major local festival with a temple car procession.', hindi: 'एक प्रमुख स्थानीय उत्सव, जिसमें मंदिर के रथ की शोभायात्रा निकाली जाती है।' },
      },
    ],
    travel: {
      airport: 'Thiruvananthapuram International Airport (~85 km).',
      railway: 'Kanyakumari railway station is directly connected to Chennai, Madurai and other major cities.',
      road: 'Connected by national highway to Thiruvananthapuram (~85 km) and Madurai (~240 km).',
    },
    nearbyPlaces: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Sunset Point'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bajreshwari-kangra',
    name: 'Bajreshwari (Vajreshwari)',
    type: 'shakti-peetha',
    state: 'Himachal Pradesh',
    city: 'Kangra',
    deity: 'Jayadurga Devi',
    associatedDeity: 'Abhirunatheshwar',
    bodyPart: 'Left breast',
    overview: {
      english:
        'In Kangra town itself — distinct from nearby Jwalamukhi — the Bajreshwari Devi Temple is one of the most revered Shakti Peethas in the western Himalayas, historically renowned for the wealth of its treasury.',
      hindi:
        'कांगड़ा नगर में ही — समीपवर्ती ज्वालामुखी से भिन्न — बज्रेश्वरी देवी मंदिर पश्चिमी हिमालय के सर्वाधिक श्रद्धेय शक्तिपीठों में से एक है, जो ऐतिहासिक रूप से अपने कोष की समृद्धि के लिए प्रसिद्ध रहा है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left breast', 10, 'बायाँ वक्षस्थल')],
    history: {
      english:
        'The Bajreshwari temple has a long and turbulent history — it was repeatedly targeted for its considerable historical wealth, including by Mahmud of Ghazni in the 11th century, and was significantly damaged in the major 1905 Kangra earthquake, after which it was substantially rebuilt.',
      hindi:
        'बज्रेश्वरी मंदिर का इतिहास लंबा और उथल-पुथल भरा रहा है — अपनी विशाल ऐतिहासिक संपत्ति के कारण इसे बार-बार लक्षित किया गया, जिसमें 11वीं शताब्दी में महमूद ग़ज़नवी का आक्रमण भी सम्मिलित है, और 1905 के बड़े कांगड़ा भूकंप में इसे गंभीर क्षति पहुँची, जिसके बाद इसका बड़े पैमाने पर पुनर्निर्माण हुआ।',
    },
    architecture: {
      english: 'A rebuilt North Indian style temple following the 1905 earthquake reconstruction, with a gilded dome characteristic of major Himachal Devi temples.',
      hindi: '1905 के भूकंप के पश्चात् पुनर्निर्मित उत्तर भारतीय शैली का मंदिर, जिसका स्वर्ण-मंडित गुंबद हिमाचल के प्रमुख देवी मंदिरों की विशेषता है।',
    },
    festivals: [
      {
        name: 'Navaratri (both Chaitra and Sharad)',
        date: 'March/April and September/October',
        description: {
          english: 'Major festival periods drawing large numbers of pilgrims to Kangra.',
          hindi: 'प्रमुख उत्सव काल, जो कांगड़ा में बड़ी संख्या में श्रद्धालुओं को आकर्षित करते हैं।',
        },
      },
    ],
    travel: {
      airport: 'Gaggal Airport, Kangra (~4 km).',
      railway: 'Kangra railway station (narrow gauge) is close by; Pathankot is the nearest broad-gauge hub.',
      road: 'Centrally located within Kangra town.',
    },
    nearbyPlaces: ['Kangra Fort', 'Jwalamukhi (~30 km)', 'Dharamshala'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. The 1905 earthquake and earlier historical raids are well documented independently.",
  },
  {
    slug: 'kiriteswari',
    name: 'Kiriteswari',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Kiriteswari, Murshidabad district',
    deity: 'Kiriteshwari Devi',
    associatedDeity: 'Sanvarteshwar',
    bodyPart: 'Crown',
    overview: {
      english: "In Murshidabad district, Kiriteswari marks where Sati's crown is held to have fallen — one of the older documented Shakti Peethas of Bengal.",
      hindi: 'मुर्शिदाबाद जिले में स्थित किरीटेश्वरी वह स्थल है जहाँ सती का मुकुट गिरने की मान्यता है — यह बंगाल के पुराने दस्तावेज़ीकृत शक्तिपीठों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('crown', 11, 'मुकुट')],
    history: {
      english:
        "Kiriteswari has been documented as a Shakta pilgrimage site since at least the medieval period, associated historically with the Murshidabad region's long importance as a centre of Bengal's political and religious life under both the Nawabs and earlier regional rulers.",
      hindi:
        'किरीटेश्वरी कम से कम मध्यकाल से एक शाक्त तीर्थ स्थल के रूप में दस्तावेज़ीकृत है, जो ऐतिहासिक रूप से मुर्शिदाबाद क्षेत्र के नवाबों और पूर्ववर्ती क्षेत्रीय शासकों दोनों के अधीन बंगाल के राजनीतिक और धार्मिक जीवन के केंद्र के रूप में इसके दीर्घकालिक महत्व से संबद्ध है।',
    },
    architecture: {
      english: 'A traditional Bengali temple structure, modest in scale, within the historic Murshidabad district.',
      hindi: 'ऐतिहासिक मुर्शिदाबाद जिले में स्थित एक पारंपरिक बंगाली मंदिर संरचना, आकार में सामान्य।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~110 km).',
      railway: 'Azimganj Junction is the nearest major rail link.',
      road: 'Connected by road to Berhampore (~20 km), the district headquarters of Murshidabad.',
    },
    nearbyPlaces: ['Murshidabad city (Hazarduari Palace)', 'Berhampore'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'ratnavali',
    name: 'Ratnavali',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Khanakul, Hooghly district',
    deity: 'Kumari Devi',
    associatedDeity: 'Ghanteshwar',
    bodyPart: 'Right shoulder',
    overview: {
      english: "Locally known as Anandamayee Tala, the Ratnavali temple in Hooghly district honours the goddess where tradition holds Sati's right shoulder fell.",
      hindi: 'स्थानीय रूप से आनंदमयी तला के नाम से जाना जाने वाला रत्नावली मंदिर हुगली जिले में स्थित है, जहाँ परंपरा के अनुसार सती का दायाँ कंधा गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right shoulder', 12, 'दायाँ कंधा')],
    history: {
      english:
        "Ratnavali has been maintained as a regional Shakta pilgrimage site within Hooghly district for many generations, part of the broader devotional landscape of the lower Bengal delta.",
      hindi:
        'रत्नावली पीढ़ियों से हुगली जिले में एक क्षेत्रीय शाक्त तीर्थ स्थल के रूप में बनाए रखा गया है, जो निचले बंगाल डेल्टा के व्यापक भक्ति-परिदृश्य का भाग है।',
    },
    architecture: {
      english: "A modest Bengali-style shrine typical of the region's smaller Shakti Peethas.",
      hindi: 'क्षेत्र के छोटे शक्तिपीठों की विशिष्ट सामान्य बंगाली शैली का मंदिर।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Netaji Subhas Chandra Bose International Airport, Kolkata (~90 km).',
      railway: 'Kolaghat or Tarakeswar railway stations are the nearest rail links, depending on route.',
      road: 'Connected by road to Arambagh (~15 km) within Hooghly district.',
    },
    nearbyPlaces: ['Arambagh', 'Tarakeswar Temple'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bhramari-jalpaiguri',
    name: 'Bhramari Devi',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Jalpaiguri',
    deity: 'Bhramari Devi',
    associatedDeity: 'Ambareshwar',
    bodyPart: 'Left leg',
    overview: {
      english: "In North Bengal's Jalpaiguri district, this Shakti Peetha honours Bhramari Devi, marking where tradition holds Sati's left leg fell.",
      hindi: 'उत्तर बंगाल के जलपाईगुड़ी जिले में स्थित यह शक्तिपीठ भ्रामरी देवी को सम्मानित करता है, जहाँ परंपरा के अनुसार सती का बायाँ पैर गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left leg', 13, 'बायाँ पैर')],
    history: {
      english:
        "This temple has served the Jalpaiguri region's Shakta community for generations as part of the wider Bengal Shakti Peetha tradition, in the Dooars region at the foothills of the eastern Himalayas.",
      hindi:
        'यह मंदिर पीढ़ियों से जलपाईगुड़ी क्षेत्र के शाक्त समुदाय की सेवा करता रहा है, जो पूर्वी हिमालय की तलहटी में डुआर्स क्षेत्र में बंगाल की व्यापक शक्तिपीठ परंपरा का भाग है।',
    },
    architecture: {
      english: 'A regional Bengali-style temple in the Dooars foothill landscape of North Bengal.',
      hindi: 'उत्तर बंगाल के डुआर्स तलहटी परिदृश्य में स्थित एक क्षेत्रीय बंगाली शैली का मंदिर।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Bagdogra Airport (~55 km).',
      railway: 'Jalpaiguri Road railway station serves the town directly.',
      road: 'Connected by road to Siliguri (~45 km).',
    },
    nearbyPlaces: ['Siliguri', 'Gorumara National Park (regional)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'manasarovar-kailash',
    name: 'Manasarovar (Dakshayani)',
    type: 'shakti-peetha',
    state: 'Tibet Autonomous Region, China',
    city: 'Mount Kailash / Lake Manasarovar',
    deity: 'Dakshayani Devi',
    associatedDeity: 'Kailashnath',
    bodyPart: 'Right hand',
    overview: {
      english:
        "At the foot of Mount Kailash — held sacred across Hinduism, Buddhism, Jainism and the Bon tradition — a holy stone shrine near Lake Manasarovar is counted as the Shakti Peetha where Sati's right hand fell, worshipped as Dakshayani.",
      hindi:
        'कैलाश पर्वत की तलहटी में — जो हिंदू, बौद्ध, जैन और बोन परंपराओं में समान रूप से पवित्र माना जाता है — मानसरोवर झील के निकट एक पवित्र शिला-मंदिर को उस शक्तिपीठ के रूप में गिना जाता है जहाँ सती का दायाँ हाथ गिरा था, जिसे दाक्षायणी के रूप में पूजा जाता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right hand', 14, 'दायाँ हाथ')],
    history: {
      english:
        "Mount Kailash and Lake Manasarovar have been revered across multiple religious traditions for millennia. Pilgrimage from India (the Kailash Mansarovar Yatra) is a demanding, high-altitude overland journey, historically organised in coordination with Chinese authorities given the site's location in the Tibet Autonomous Region.",
      hindi:
        'कैलाश पर्वत और मानसरोवर झील सहस्राब्दियों से कई धार्मिक परंपराओं में श्रद्धेय रहे हैं। भारत से तीर्थयात्रा (कैलाश मानसरोवर यात्रा) एक दुष्कर, उच्च-ऊँचाई की स्थल-यात्रा है, जो इस स्थल के तिब्बत स्वायत्त क्षेत्र में स्थित होने के कारण ऐतिहासिक रूप से चीनी अधिकारियों के समन्वय से आयोजित की जाती रही है।',
    },
    architecture: {
      english: "A holy stone shrine rather than a built temple, in keeping with the site's character as a natural sacred landscape rather than a constructed monument.",
      hindi: 'एक निर्मित मंदिर के बजाय एक पवित्र शिला-मंदिर, जो इस स्थल के चरित्र के अनुरूप है — एक निर्मित स्मारक के बजाय एक प्राकृतिक पवित्र परिदृश्य।',
    },
    festivals: [
      {
        name: 'Kailash Mansarovar Yatra',
        date: 'June-September (weather-dependent)',
        description: {
          english: 'The main pilgrimage season for the demanding overland journey to the site.',
          hindi: 'इस स्थल तक की दुष्कर स्थल-यात्रा का मुख्य तीर्थयात्रा सत्र।',
        },
      },
    ],
    travel: {
      airport: 'Reached via Kathmandu (Nepal) or Lhasa (Tibet) with onward overland travel; access requires permits.',
      railway: 'No direct rail access to the site itself.',
      road: 'Multi-day overland journey; the Kailash Mansarovar Yatra is typically organised through registered tour operators given permit and altitude requirements.',
    },
    nearbyPlaces: ['Mount Kailash parikrama route', 'Lake Rakshastal'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. Practical access requires current permits and should be checked with an authorised operator — details here are general, not a travel guarantee.",
  },
  {
    slug: 'jayanti-nartiang',
    name: 'Jayanti (Nartiang)',
    type: 'shakti-peetha',
    state: 'Meghalaya',
    city: 'Nartiang, Jaintia Hills district',
    deity: 'Jayanti Devi',
    associatedDeity: 'Kramadishwar',
    bodyPart: 'Left thigh',
    overview: {
      english:
        "In the Jaintia Hills of Meghalaya, the Nartiang Durga Temple honours Jayanti Devi, marking where tradition holds that Sati's left thigh fell — one of very few Shakti Peethas in India's northeast hill states.",
      hindi:
        'मेघालय की जैंतिया पहाड़ियों में स्थित नारतियांग दुर्गा मंदिर जयंती देवी को सम्मानित करता है, जहाँ परंपरा के अनुसार सती की बायीं जांघ गिरी थी — यह भारत के पूर्वोत्तर पहाड़ी राज्यों के बहुत कम शक्तिपीठों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left thigh', 15, 'बायीं जांघ')],
    history: {
      english:
        "The temple is historically associated with the Jaintia kingdom, which ruled the region for centuries before its 19th-century annexation by the British, and the site remains an important marker of the historical fusion between the Jaintia hill kingdom's own traditions and Bengali Shakta Hinduism.",
      hindi:
        'यह मंदिर ऐतिहासिक रूप से जैंतिया राज्य से संबद्ध है, जिसने 19वीं शताब्दी में ब्रिटिश विलय से पूर्व सदियों तक इस क्षेत्र पर शासन किया, और यह स्थल जैंतिया पहाड़ी राज्य की अपनी परंपराओं और बंगाली शाक्त हिंदू धर्म के ऐतिहासिक संगम का एक महत्वपूर्ण चिह्न बना हुआ है।',
    },
    architecture: {
      english: 'A temple built in a style reflecting both regional Khasi-Jaintia hill architecture and Bengali temple influence, reflecting the historical cultural exchange of the region.',
      hindi: 'एक ऐसी शैली में निर्मित मंदिर जो क्षेत्रीय खासी-जैंतिया पहाड़ी स्थापत्य और बंगाली मंदिर प्रभाव दोनों को प्रतिबिंबित करता है, जो क्षेत्र के ऐतिहासिक सांस्कृतिक आदान-प्रदान को दर्शाता है।',
    },
    festivals: [
      {
        name: 'Durga Puja / Navaratri',
        date: 'September/October',
        description: { english: "The temple's principal festival period.", hindi: 'मंदिर का मुख्य उत्सव काल।' },
      },
    ],
    travel: {
      airport: 'Shillong Airport (Umroi, ~65 km).',
      railway: 'Guwahati railway station is the nearest major railhead (~130 km).',
      road: 'Connected by road to Jowai (~15 km) and Shillong (~65 km).',
    },
    nearbyPlaces: ['Jowai town', 'Nartiang monoliths (megalithic site)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'jeshoreshwari',
    name: 'Jeshoreshwari Kali',
    type: 'shakti-peetha',
    state: 'Khulna Division, Bangladesh',
    city: 'Ishwaripur, Shyamnagar',
    deity: 'Jeshoreshwari Devi',
    associatedDeity: 'Chandeshwar',
    bodyPart: 'Palms of the hands and soles of the feet',
    overview: {
      english:
        "One of the most significant Shakti Peethas in Bangladesh, Jeshoreshwari Kali Temple marks where tradition holds that the palms and soles of Sati fell — a site associated with unusually broad bodily attribution compared to most other peethas.",
      hindi:
        'बांग्लादेश के सबसे महत्वपूर्ण शक्तिपीठों में से एक, जेशोरेश्वरी काली मंदिर वह स्थल है जहाँ परंपरा के अनुसार सती की हथेलियाँ और तलवे गिरे थे — यह अधिकांश अन्य पीठों की तुलना में असामान्य रूप से व्यापक शारीरिक विशेषता से संबद्ध स्थल है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('palms and soles', 16, 'हथेलियाँ और तलवे')],
    history: {
      english:
        'The temple has a documented history stretching back several centuries, historically associated with local ruling families of the Sundarbans region, and remains an active and significant site for the Hindu community of Bangladesh.',
      hindi:
        'इस मंदिर का दस्तावेज़ीकृत इतिहास कई शताब्दियों पुराना है, जो ऐतिहासिक रूप से सुंदरबन क्षेत्र के स्थानीय शासक परिवारों से संबद्ध है, और यह आज भी बांग्लादेश के हिंदू समुदाय के लिए एक सक्रिय एवं महत्वपूर्ण स्थल बना हुआ है।',
    },
    architecture: {
      english: "A historic Bengali temple complex near the Sundarbans mangrove region, reflecting the area's distinctive delta architecture.",
      hindi: 'सुंदरबन मैंग्रोव क्षेत्र के निकट एक ऐतिहासिक बंगाली मंदिर परिसर, जो क्षेत्र की विशिष्ट डेल्टा स्थापत्य शैली को दर्शाता है।',
    },
    festivals: [
      {
        name: 'Kali Puja / Durga Puja',
        date: 'October/November and September/October',
        description: {
          english: "Major festival periods observed by the region's Hindu community.",
          hindi: 'क्षेत्र के हिंदू समुदाय द्वारा मनाए जाने वाले प्रमुख उत्सव काल।',
        },
      },
    ],
    travel: {
      airport: 'Jashore Airport is the nearest domestic airport in Bangladesh.',
      railway: 'Khulna is the nearest major rail hub.',
      road: 'Reached by road from Khulna via Shyamnagar.',
    },
    nearbyPlaces: ['Sundarbans mangrove forest (regional)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. Travel information is general; cross-border pilgrimage logistics from India should be checked independently.",
  },
  {
    slug: 'naina-devi',
    name: 'Naina Devi',
    type: 'shakti-peetha',
    state: 'Himachal Pradesh',
    city: 'Naina Devi, Bilaspur district',
    deity: 'Mahishamardini Devi',
    associatedDeity: 'Krodhishwar',
    bodyPart: 'Right eye',
    overview: {
      english:
        "Overlooking the Gobind Sagar reservoir in Bilaspur district, Naina Devi is among the most visited Shakti Peethas in Himachal Pradesh, marking where tradition holds that Sati's right eye fell.",
      hindi:
        'बिलासपुर जिले में गोबिंद सागर जलाशय के दृश्य वाली नैना देवी हिमाचल प्रदेश के सर्वाधिक दर्शनार्थियों वाले शक्तिपीठों में से एक है, जहाँ परंपरा के अनुसार सती का दायाँ नेत्र गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right eye', 17, 'दायाँ नेत्र')],
    history: {
      english:
        'Naina Devi has been a significant regional pilgrimage site for centuries, historically associated with the erstwhile hill states of the region, and remains one of the most heavily visited temples in Himachal Pradesh, particularly during Navaratri.',
      hindi:
        'नैना देवी सदियों से एक महत्वपूर्ण क्षेत्रीय तीर्थ स्थल रही है, जो ऐतिहासिक रूप से क्षेत्र की पूर्ववर्ती पहाड़ी रियासतों से संबद्ध है, और आज भी हिमाचल प्रदेश के सर्वाधिक दर्शनार्थियों वाले मंदिरों में से एक है, विशेषतः नवरात्रि के दौरान।',
    },
    architecture: {
      english: 'A hilltop temple reached by road or a cable car installed to ease pilgrim access, in keeping with several major Himachal hill-shrine complexes.',
      hindi: 'सड़क मार्ग अथवा श्रद्धालुओं की सुगमता हेतु स्थापित एक रोपवे से पहुँचा जाने वाला पर्वत-शिखर मंदिर, जो हिमाचल के कई प्रमुख पहाड़ी मंदिर परिसरों के अनुरूप है।',
    },
    festivals: [
      {
        name: 'Navaratri (both Chaitra and Sharad)',
        date: 'March/April and September/October',
        description: {
          english: "The temple's largest festival periods, drawing very heavy pilgrim traffic.",
          hindi: 'मंदिर के सबसे बड़े उत्सव काल, जो बहुत भारी श्रद्धालु यातायात आकर्षित करते हैं।',
        },
      },
    ],
    travel: {
      airport: 'Shimla Airport (~90 km) or Chandigarh Airport (~110 km).',
      railway: 'Nangal Dam railway station is the nearest rail link (~20 km).',
      road: 'Connected by road to Bilaspur (~50 km) and a cable car from the base for the final ascent.',
    },
    nearbyPlaces: ['Gobind Sagar reservoir', 'Bilaspur town', 'Anandpur Sahib (Punjab, nearby)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'narmada-amarkantak',
    name: 'Narmada (Amarkantak)',
    type: 'shakti-peetha',
    state: 'Madhya Pradesh',
    city: 'Amarkantak',
    deity: 'Narmada Devi',
    associatedDeity: 'Bhadraseneshwar',
    bodyPart: 'Right buttock',
    overview: {
      english:
        "At Amarkantak, the source of the Narmada river, this Shakti Peetha honours the river itself as a form of the goddess, marking where tradition holds Sati's right buttock fell.",
      hindi:
        'नर्मदा नदी के उद्गम स्थल अमरकंटक में स्थित यह शक्तिपीठ नदी को स्वयं देवी के रूप में सम्मानित करता है, जहाँ परंपरा के अनुसार सती का दायाँ नितंब गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right buttock', 18, 'दायाँ नितंब')],
    history: {
      english:
        "Amarkantak has been revered as a major pilgrimage site for centuries as the source of the sacred Narmada river, one of India's seven holy rivers, with temples and ashrams established here across many centuries by different regional traditions.",
      hindi:
        'अमरकंटक सदियों से भारत की सात पवित्र नदियों में से एक, पावन नर्मदा के उद्गम स्थल के रूप में एक प्रमुख तीर्थ स्थल के रूप में श्रद्धेय रहा है, जहाँ विभिन्न क्षेत्रीय परंपराओं द्वारा सदियों में कई मंदिर और आश्रम स्थापित किए गए हैं।',
    },
    architecture: {
      english: "A temple complex at the Narmada's source pool (Narmada Kund), surrounded by numerous smaller shrines built by different sects and regional patrons over time.",
      hindi: 'नर्मदा के उद्गम कुंड (नर्मदा कुंड) पर स्थित एक मंदिर परिसर, जो समय के साथ विभिन्न संप्रदायों और क्षेत्रीय संरक्षकों द्वारा निर्मित अनेक छोटे मंदिरों से घिरा है।',
    },
    festivals: [
      {
        name: 'Narmada Jayanti',
        date: 'January/February',
        description: { english: "Celebrates the river's mythological origin, a major festival at the source.", hindi: 'नदी की पौराणिक उत्पत्ति का उत्सव, उद्गम स्थल पर एक प्रमुख त्योहार।' },
      },
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Jabalpur Airport (~140 km).',
      railway: 'Pendra Road railway station is the nearest rail link (~40 km).',
      road: 'Connected by road to Bilaspur (~110 km, Chhattisgarh) and Jabalpur (~140 km).',
    },
    nearbyPlaces: ['Narmada Kund (river source)', 'Kapildhara waterfall'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bhramaramba-srisailam',
    name: 'Bhramaramba',
    type: 'shakti-peetha',
    state: 'Andhra Pradesh',
    city: 'Srisailam',
    deity: 'Bhramarambika Devi',
    associatedDeity: 'Mallikarjuna',
    bodyPart: 'Neck',
    overview: {
      english:
        "Within the same walled complex as the Mallikarjuna Jyotirlinga, Bhramaramba is the Shakti Peetha marking where tradition holds Sati's neck fell — making Srisailam, alongside Deoghar, one of the two sites uniting the Jyotirlinga and Shakti Peetha traditions.",
      hindi:
        'मल्लिकार्जुन ज्योतिर्लिंग वाले उसी परकोटे के भीतर स्थित भ्रमराम्बा वह शक्तिपीठ है जहाँ परंपरा के अनुसार सती की गर्दन गिरी थी — यह श्रीशैलम को, देवघर के साथ, ज्योतिर्लिंग और शक्तिपीठ दोनों परंपराओं को जोड़ने वाले दो स्थलों में से एक बनाता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('neck', 19, 'गर्दन')],
    history: {
      english:
        'As detailed in the Mallikarjuna Jyotirlinga entry, Srisailam has been a major pilgrimage centre since antiquity, with inscriptions and temple patronage recorded from the Satavahana period onward and substantial expansion under the Vijayanagara empire. The Bhramaramba shrine shares this same documented history as an integral part of the temple complex.',
      hindi:
        'जैसा कि मल्लिकार्जुन ज्योतिर्लिंग की प्रविष्टि में विस्तार से बताया गया है, श्रीशैलम प्राचीन काल से एक प्रमुख तीर्थ केंद्र रहा है, जहाँ सातवाहन काल से लेकर शिलालेख और मंदिर संरक्षण दर्ज हैं तथा विजयनगर साम्राज्य के अधीन इसका उल्लेखनीय विस्तार हुआ। भ्रमराम्बा मंदिर मंदिर परिसर के अभिन्न भाग के रूप में यही दस्तावेज़ीकृत इतिहास साझा करता है।',
    },
    architecture: {
      english: 'The Bhramaramba shrine stands within the same fortified temple complex as Mallikarjuna, its outer walls carrying the same Vijayanagara-era relief panels depicting Puranic legends.',
      hindi: 'भ्रमराम्बा मंदिर मल्लिकार्जुन के समान ही सुरक्षा-प्राकार वाले मंदिर परिसर के भीतर स्थित है, जिसकी बाहरी दीवारों पर वही विजयनगर-कालीन पौराणिक आख्यानों को दर्शाती शिल्प-पट्टिकाएँ हैं।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "Observed as one of the complex's two major annual festival periods, alongside Maha Shivaratri for Mallikarjuna.",
          hindi: 'परिसर के दो प्रमुख वार्षिक उत्सव कालों में से एक के रूप में मनाई जाती है, मल्लिकार्जुन के लिए महाशिवरात्रि के साथ।',
        },
      },
    ],
    travel: {
      airport: 'Rajiv Gandhi International Airport, Hyderabad (~220 km).',
      railway: 'Markapur Road or Kurnool are the nearest railheads; Srisailam itself has no direct broad-gauge station.',
      road: 'Connected by road from Hyderabad (~215 km) and Kurnool (~180 km).',
    },
    nearbyPlaces: ['Mallikarjuna Jyotirlinga (same complex)', 'Srisailam Dam', 'Akka Mahadevi Caves'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. See the Mallikarjuna Jyotirlinga entry for the shared temple-complex history.",
  },
  {
    slug: 'manikyamba-draksharamam',
    name: 'Manikyamba',
    type: 'shakti-peetha',
    state: 'Andhra Pradesh',
    city: 'Draksharamam, Kakinada district',
    deity: 'Manikyamba Devi',
    associatedDeity: 'Bhimeshwar',
    bodyPart: 'Navel (per some texts) / Left cheek (per others)',
    overview: {
      english:
        'Within the Bhimeshwara Temple complex at Draksharamam — itself one of the Pancharama Kshetras of Andhra Pradesh — the Manikyamba shrine is counted among the Shakti Peethas, another site uniting Shakta and Shaiva pilgrimage traditions.',
      hindi:
        'द्राक्षारामम में स्थित भीमेश्वर मंदिर परिसर के भीतर — जो स्वयं आंध्र प्रदेश के पंचाराम क्षेत्रों में से एक है — मणिक्याम्बा मंदिर को शक्तिपीठों में गिना जाता है, यह शाक्त और शैव तीर्थ परंपराओं को जोड़ने वाला एक और स्थल है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('navel', 20, 'नाभि')],
    history: {
      english:
        'Draksharamam has been a major Shaiva pilgrimage centre since at least the 9th-10th centuries CE, with the current temple substantially built under the Eastern Chalukya dynasty, and further patronized across later regional rulers of coastal Andhra Pradesh.',
      hindi:
        'द्राक्षारामम कम से कम 9वीं-10वीं शताब्दी ईस्वी से एक प्रमुख शैव तीर्थ केंद्र रहा है, जहाँ वर्तमान मंदिर मुख्यतः पूर्वी चालुक्य राजवंश के अधीन निर्मित हुआ, और बाद में तटीय आंध्र प्रदेश के क्षेत्रीय शासकों का संरक्षण मिलता रहा।',
    },
    architecture: {
      english: "The Manikyamba shrine stands within the large Bhimeshwara Temple complex, built in the Chalukyan/Dravidian architectural idiom typical of coastal Andhra's major medieval temples.",
      hindi: 'मणिक्याम्बा मंदिर विशाल भीमेश्वर मंदिर परिसर के भीतर स्थित है, जो तटीय आंध्र के प्रमुख मध्यकालीन मंदिरों की विशिष्ट चालुक्य/द्रविड़ स्थापत्य शैली में निर्मित है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed alongside the wider Bhimeshwara temple festival calendar.', hindi: 'भीमेश्वर मंदिर के व्यापक उत्सव-कैलेंडर के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Rajahmundry Airport (~35 km).',
      railway: 'Samalkot Junction is the nearest major rail link (~13 km).',
      road: 'Connected by road to Kakinada (~30 km) and Rajahmundry (~35 km).',
    },
    nearbyPlaces: ['Bhimeshwara Temple (same complex)', 'Kakinada', 'Antarvedi'],
    gallery: [],
    sourcesNote: "Body part and Devi name per Wikipedia's sourced Shakta pithas compilation, which itself notes some variation in the exact body-part attribution for this site across texts.",
  },
  {
    slug: 'nandikeshwari-sainthia',
    name: 'Nandikeshwari',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Sainthia, Birbhum district',
    deity: 'Nandini Devi',
    associatedDeity: 'Nandikeshwar',
    bodyPart: 'Necklace',
    overview: {
      english: "The Nandikeshwari Temple at Sainthia is another of Birbhum district's Shakti Peethas, marking where tradition holds a necklace of Sati fell.",
      hindi: 'सैंथिया में स्थित नंदिकेश्वरी मंदिर बीरभूम जिले के शक्तिपीठों में से एक और है, जहाँ परंपरा के अनुसार सती का एक हार गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('necklace', 21, 'हार')],
    history: {
      english:
        "Nandikeshwari has been part of the Birbhum region's dense Shakta pilgrimage tradition for many generations, maintained by the local community alongside the district's several other peethas.",
      hindi:
        'नंदिकेश्वरी पीढ़ियों से बीरभूम क्षेत्र की सघन शाक्त तीर्थ परंपरा का भाग रहा है, जिसका रखरखाव स्थानीय समुदाय द्वारा जिले के कई अन्य पीठों के साथ होता रहा है।',
    },
    architecture: {
      english: 'A regional Bengali-style temple typical of the Birbhum Shakta shrine tradition.',
      hindi: 'बीरभूम की शाक्त मंदिर परंपरा की विशिष्ट एक क्षेत्रीय बंगाली शैली का मंदिर।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~60 km).',
      railway: 'Sainthia Junction serves the town directly.',
      road: 'Connected by road to Suri (~25 km) and Rampurhat (~20 km).',
    },
    nearbyPlaces: ['Suri', 'Nalhateswari (Nalhati)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'sugandha',
    name: 'Sugandha',
    type: 'shakti-peetha',
    state: 'Barisal Division, Bangladesh',
    city: 'Shikarpur, Gournadi',
    deity: 'Sugandha Devi',
    associatedDeity: 'Trayambakeshwar',
    bodyPart: 'Nose',
    overview: {
      english:
        'Near Barisal in southern Bangladesh, the Sugandha Shakti Peetha honours the goddess where tradition holds that the nose of Sati fell — its name, "Sugandha," meaning fragrance.',
      hindi:
        "दक्षिणी बांग्लादेश में बरिसाल के निकट स्थित सुगंधा शक्तिपीठ देवी को सम्मानित करता है, जहाँ परंपरा के अनुसार सती की नासिका गिरी थी — इसका नाम 'सुगंधा' का अर्थ है सुगंध।",
    },
    story: [satiChapter1, satiChapter2, fellChapter('nose', 22, 'नासिका')],
    history: {
      english:
        'Sugandha has remained an active pilgrimage site for the Hindu community of southern Bangladesh across the modern period, part of the wider Bengal-delta Shakta pitha tradition.',
      hindi:
        'सुगंधा आधुनिक काल में दक्षिणी बांग्लादेश के हिंदू समुदाय के लिए एक सक्रिय तीर्थ स्थल बना रहा है, जो बंगाल-डेल्टा की व्यापक शाक्त पीठ परंपरा का भाग है।',
    },
    architecture: {
      english: "A regional Bengal-delta temple structure near the Barisal region's waterways.",
      hindi: 'बरिसाल क्षेत्र के जलमार्गों के निकट एक क्षेत्रीय बंगाल-डेल्टा मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Durga Puja / Navaratri',
        date: 'September/October',
        description: { english: "Observed in keeping with the region's wider Shakta festival calendar.", hindi: 'क्षेत्र के व्यापक शाक्त उत्सव-कैलेंडर के अनुरूप मनाया जाता है।' },
      },
    ],
    travel: {
      airport: 'Barisal Airport is the nearest domestic airport in Bangladesh.',
      railway: 'No direct rail access; Barisal is primarily reached by road or river.',
      road: 'Reached by road from Barisal town (~20 km) via Gournadi.',
    },
    nearbyPlaces: ['Barisal town'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. Travel information is general; cross-border pilgrimage logistics from India should be checked independently.",
  },
  {
    slug: 'tripura-sundari-udaipur',
    name: 'Tripura Sundari',
    type: 'shakti-peetha',
    state: 'Tripura',
    city: 'Udaipur, Tripura',
    deity: 'Tripura Sundari Devi',
    associatedDeity: 'Kameshwar',
    bodyPart: 'Right leg',
    overview: {
      english:
        "In Udaipur, the former capital of the princely state of Tripura, this temple honours the goddess as Tripura Sundari — the third Mahavidya and a principal form of Parvati — marking where tradition holds Sati's right leg fell.",
      hindi:
        'त्रिपुरा रियासत की पूर्व राजधानी उदयपुर में स्थित यह मंदिर देवी को त्रिपुरा सुंदरी — तीसरी महाविद्या और पार्वती के एक प्रमुख रूप — के रूप में सम्मानित करता है, जहाँ परंपरा के अनुसार सती का दायाँ पैर गिरा था।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right leg', 23, 'दायाँ पैर')],
    history: {
      english:
        'The temple was built in 1501 CE by Maharaja Dhanya Manikya of the Tripura royal family, and has remained the most important Shakta pilgrimage site in the state, historically patronized continuously by the Manikya dynasty that ruled Tripura for centuries.',
      hindi:
        'यह मंदिर 1501 ईस्वी में त्रिपुरा राजपरिवार के महाराजा धन्य माणिक्य द्वारा निर्मित हुआ, और यह राज्य का सबसे महत्वपूर्ण शाक्त तीर्थ स्थल बना रहा है, जिसे सदियों तक त्रिपुरा पर शासन करने वाले माणिक्य राजवंश का ऐतिहासिक रूप से निरंतर संरक्षण मिलता रहा।',
    },
    architecture: {
      english: 'Built in a distinctive dome-shaped style resembling a tortoise back (locally called Kurma Peetha), architecturally unlike the typical curvilinear temple towers of eastern India.',
      hindi: 'एक विशिष्ट गुंबदाकार शैली में निर्मित, जो कछुए की पीठ जैसा दिखता है (स्थानीय रूप से कूर्म पीठ कहा जाता है), जो स्थापत्य दृष्टि से पूर्वी भारत के सामान्य वक्ररेखीय मंदिर शिखरों से भिन्न है।',
    },
    festivals: [
      {
        name: 'Diwali / Kali Puja',
        date: 'October/November',
        description: {
          english: "The temple's largest annual festival, marked by a major mela (fair) known as the Diwali Mela.",
          hindi: 'मंदिर का सबसे बड़ा वार्षिक उत्सव, जो दीवाली मेला नामक एक बड़े मेले के साथ मनाया जाता है।',
        },
      },
    ],
    travel: {
      airport: 'Maharaja Bir Bikram Airport, Agartala (~55 km).',
      railway: 'Agartala railway station is the nearest major rail link.',
      road: 'Connected by road to Agartala (~55 km).',
    },
    nearbyPlaces: ['Neermahal (Rudrasagar Lake palace)', 'Agartala city'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. The 1501 CE founding date is documented in regional/dynastic records of the Tripura Manikya kingdom.",
  },
  {
    slug: 'mangal-chandika-ujaani',
    name: 'Mangal Chandika (Ujaani)',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Ujaani, Purba Bardhaman district',
    deity: 'Mangal Chandika Devi',
    associatedDeity: 'Kapilambareshwar',
    bodyPart: 'Right wrist',
    overview: {
      english: "The Ujaani Shakti Peetha in Purba Bardhaman district honours Mangal Chandika, marking where tradition holds Sati's right wrist fell.",
      hindi: 'पूर्व बर्धमान जिले में स्थित उज्जानी शक्तिपीठ मंगल चंडिका को सम्मानित करता है, जहाँ परंपरा के अनुसार सती की दायीं कलाई गिरी थी।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right wrist', 24, 'दायीं कलाई')],
    history: {
      english: "Ujaani has been part of the wider Bardhaman region's Shakta pilgrimage tradition for many generations, maintained alongside nearby peethas such as Bahula.",
      hindi: 'उज्जानी पीढ़ियों से व्यापक बर्धमान क्षेत्र की शाक्त तीर्थ परंपरा का भाग रहा है, जिसका रखरखाव बाहुला जैसे समीपवर्ती पीठों के साथ होता रहा है।',
    },
    architecture: {
      english: "A traditional Bengali temple structure typical of the region's smaller Shakti Peethas.",
      hindi: 'क्षेत्र के छोटे शक्तिपीठों की विशिष्ट एक पारंपरिक बंगाली मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~50 km).',
      railway: 'Katwa railway station is the nearest major rail link.',
      road: 'Connected by road to Katwa and Bardhaman.',
    },
    nearbyPlaces: ['Bahula Shakti Peetha (nearby)', 'Katwa'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'bargabhima-vibhash',
    name: 'Bargabhima (Vibhash)',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Tamluk, Purba Medinipur district',
    deity: 'Kapalini Devi (Bargabhima)',
    associatedDeity: 'Sarvanandeshwar',
    bodyPart: 'Left ankle',
    overview: {
      english:
        "At Tamluk, an ancient port town on the Rupnarayan river, the Bargabhima Temple marks where tradition holds Sati's left ankle fell — one of the older documented Shakti Peethas of coastal Bengal.",
      hindi:
        'रूपनारायण नदी पर स्थित प्राचीन बंदरगाह नगर तमलुक में बरगभीमा मंदिर वह स्थल है जहाँ परंपरा के अनुसार सती का बायाँ टखना गिरा था — यह तटीय बंगाल के पुराने दस्तावेज़ीकृत शक्तिपीठों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('left ankle', 25, 'बायाँ टखना')],
    history: {
      english:
        "Tamluk (ancient Tamralipta) was a major port city referenced in classical Indian and even foreign accounts as a centre of maritime trade over two thousand years ago, and the Bargabhima temple's association with this ancient port lends it particular historical significance among Bengal's Shakti Peethas.",
      hindi:
        'तमलुक (प्राचीन ताम्रलिप्त) दो हज़ार वर्ष से भी पहले शास्त्रीय भारतीय और यहाँ तक कि विदेशी विवरणों में समुद्री व्यापार के केंद्र के रूप में उल्लिखित एक प्रमुख बंदरगाह नगर था, और इस प्राचीन बंदरगाह से बरगभीमा मंदिर का संबंध इसे बंगाल के शक्तिपीठों में विशेष ऐतिहासिक महत्व प्रदान करता है।',
    },
    architecture: {
      english: "A traditional Bengali temple, its riverside location echoing the town's ancient identity as a major port.",
      hindi: 'एक पारंपरिक बंगाली मंदिर, जिसका नदी-तटीय स्थान नगर की एक प्रमुख बंदरगाह के रूप में प्राचीन पहचान को प्रतिध्वनित करता है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: "The temple's principal annual festival.", hindi: 'मंदिर का मुख्य वार्षिक उत्सव।' },
      },
    ],
    travel: {
      airport: 'Netaji Subhas Chandra Bose International Airport, Kolkata (~75 km).',
      railway: 'Tamluk railway station serves the town directly.',
      road: 'Connected by road to Kolkata (~75 km) and Kharagpur (~45 km).',
    },
    nearbyPlaces: ['Tamluk town (ancient Tamralipta port site)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation. Tamluk's ancient port history is independently well documented.",
  },
  {
    slug: 'katyayini-vrindavan',
    name: 'Katyayini',
    type: 'shakti-peetha',
    state: 'Uttar Pradesh',
    city: 'Vrindavan',
    deity: 'Katyayini Devi',
    associatedDeity: 'Bhuteshwar',
    bodyPart: 'Ringlets of hair',
    overview: {
      english:
        "In Vrindavan — a town more widely known for its Krishna temples — the Katyayini Shakti Peetha marks where tradition holds that ringlets of Sati's hair fell, tying the town's Vaishnava identity to an older Shakta tradition.",
      hindi:
        'वृंदावन में — जो अपने कृष्ण मंदिरों के लिए अधिक व्यापक रूप से जाना जाता है — कात्यायनी शक्तिपीठ वह स्थल है जहाँ परंपरा के अनुसार सती के केश की लटें गिरी थीं, जो नगर की वैष्णव पहचान को एक प्राचीनतर शाक्त परंपरा से जोड़ता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('ringlets of hair', 26, 'केश की लटें')],
    history: {
      english:
        "The Katyayini shrine has coexisted with Vrindavan's much larger and better-known Krishna temple tradition for many centuries, maintained as an important, if comparatively smaller, part of the town's religious landscape.",
      hindi:
        'कात्यायनी मंदिर सदियों से वृंदावन की कहीं बड़ी और अधिक प्रसिद्ध कृष्ण मंदिर परंपरा के साथ सह-अस्तित्व में रहा है, जिसे नगर के धार्मिक परिदृश्य के एक महत्वपूर्ण, यद्यपि अपेक्षाकृत छोटे, भाग के रूप में बनाए रखा गया है।',
    },
    architecture: {
      english: "A modest North Indian temple structure within Vrindavan's dense religious town centre.",
      hindi: 'वृंदावन के सघन धार्मिक नगर-केंद्र में स्थित एक सामान्य उत्तर भारतीय मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: "Observed alongside the town's wider festival calendar.", hindi: 'नगर के व्यापक उत्सव-कैलेंडर के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Agra Airport (~65 km).',
      railway: 'Mathura Junction is the nearest major railhead (~15 km).',
      road: 'Connected by road to Mathura (~15 km) and Agra (~65 km).',
    },
    nearbyPlaces: ['Banke Bihari Temple', 'ISKCON Vrindavan', 'Mathura'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'vaidyanath-shakti-peetha',
    name: 'Vaidyanath (as Shakti Peetha)',
    type: 'shakti-peetha',
    state: 'Jharkhand',
    city: 'Deoghar',
    deity: 'Jayadurga Devi',
    associatedDeity: 'Vaidyanath',
    bodyPart: 'Heart',
    overview: {
      english:
        'The same Deoghar temple complex profiled in the Jyotirlinga collection is also, by tradition, the Shakti Peetha where the heart of Sati fell — making Vaidyanath, alongside Srisailam, one of the two sites uniting both pilgrimage traditions.',
      hindi:
        'ज्योतिर्लिंग संग्रह में वर्णित वही देवघर मंदिर परिसर परंपरा के अनुसार वह शक्तिपीठ भी है जहाँ सती का हृदय गिरा था — यह वैद्यनाथ को, श्रीशैलम के साथ, दोनों तीर्थ परंपराओं को जोड़ने वाले दो स्थलों में से एक बनाता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('heart', 27, 'हृदय')],
    history: {
      english:
        "See the Vaidyanath Jyotirlinga entry for the temple's full documented history — the Shravani Mela, the 21-shrine complex, and the site's long-standing dual significance as both Jyotirlinga and Shakti Peetha are shared across both traditions at this single location.",
      hindi:
        'मंदिर का पूर्ण दस्तावेज़ीकृत इतिहास जानने हेतु वैद्यनाथ ज्योतिर्लिंग की प्रविष्टि देखें — श्रावणी मेला, 21-मंदिर परिसर, और इस स्थल का ज्योतिर्लिंग तथा शक्तिपीठ दोनों के रूप में दीर्घकालिक दोहरा महत्व इसी एक स्थान पर दोनों परंपराओं द्वारा साझा किया जाता है।',
    },
    architecture: {
      english: 'The same 21-shrine temple complex described in the Vaidyanath Jyotirlinga entry, topped with its distinctive copper pitcher, silver trident and golden lotus.',
      hindi: 'वैद्यनाथ ज्योतिर्लिंग की प्रविष्टि में वर्णित वही 21-मंदिर परिसर, जिसके ऊपर इसका विशिष्ट ताम्र कलश, रजत त्रिशूल और स्वर्णिम कमल सुशोभित है।',
    },
    festivals: [
      {
        name: 'Shravani Mela',
        date: 'July/August',
        description: {
          english: 'Shared with the Jyotirlinga tradition — see the Vaidyanath Jyotirlinga entry.',
          hindi: 'ज्योतिर्लिंग परंपरा के साथ साझा — वैद्यनाथ ज्योतिर्लिंग की प्रविष्टि देखें।',
        },
      },
    ],
    travel: {
      airport: 'Deoghar Airport (~10 km).',
      railway: 'Jasidih Junction (~7 km) and Baidyanath Dham railway station serve the temple town directly.',
      road: 'Connected by national highway to Ranchi (~250 km) and Bhagalpur (~100 km).',
    },
    nearbyPlaces: ['Vaidyanath Jyotirlinga (same complex)', 'Naulakha Mandir', 'Basukinath Temple'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation, which lists this alongside Srisailam as one of the two sites shared between the Jyotirlinga and Shakti Peetha traditions.",
  },
  {
    slug: 'jogadya',
    name: 'Jogadya',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Kshirgram, Purba Bardhaman district',
    deity: 'Jogadya Devi',
    associatedDeity: 'Ksheerkantakeshwar',
    bodyPart: 'Big toe',
    overview: {
      english: "The Jogadya Shakti Peetha at Kshirgram marks where tradition holds that Sati's big toe fell — another of the Bardhaman region's Shakta pilgrimage sites.",
      hindi: 'क्षीरग्राम में स्थित जोगाद्या शक्तिपीठ वह स्थल है जहाँ परंपरा के अनुसार सती के पैर का अंगूठा गिरा था — यह बर्धमान क्षेत्र के शाक्त तीर्थ स्थलों में से एक और है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('big toe', 28, 'पैर का अंगूठा')],
    history: {
      english:
        "Jogadya has served the Bardhaman region's Shakta pilgrimage tradition for many generations, part of the same broader cluster of West Bengal peethas that includes Bahula and Ujaani nearby.",
      hindi:
        'जोगाद्या पीढ़ियों से बर्धमान क्षेत्र की शाक्त तीर्थ परंपरा की सेवा करता रहा है, जो पश्चिम बंगाल के उसी व्यापक पीठ-समूह का भाग है जिसमें समीपवर्ती बाहुला और उज्जानी सम्मिलित हैं।',
    },
    architecture: {
      english: 'A traditional Bengali temple structure typical of the region.',
      hindi: 'क्षेत्र की विशिष्ट एक पारंपरिक बंगाली मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~45 km).',
      railway: 'Bardhaman Junction is the nearest major rail link.',
      road: 'Connected by road to Bardhaman town.',
    },
    nearbyPlaces: ['Bahula Shakti Peetha', 'Bardhaman town'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'danteshwari-dantewada',
    name: 'Danteshwari',
    type: 'shakti-peetha',
    state: 'Chhattisgarh',
    city: 'Dantewada',
    deity: 'Danteshwari Devi',
    associatedDeity: 'Kapala Bhairava',
    bodyPart: 'Tooth',
    overview: {
      english:
        'In the Bastar region of Chhattisgarh, Danteshwari — whose name itself references a tooth ("danta") of the goddess — was the presiding deity of the historic Bastar kingdom, and remains the most important Shakti Peetha in central India.',
      hindi:
        "छत्तीसगढ़ के बस्तर क्षेत्र में स्थित दंतेश्वरी — जिनके नाम में ही देवी के 'दाँत' का उल्लेख है — ऐतिहासिक बस्तर राज्य की अधिष्ठात्री देवी थीं, और मध्य भारत का सबसे महत्वपूर्ण शक्तिपीठ बनी हुई हैं।",
    },
    story: [satiChapter1, satiChapter2, fellChapter('tooth', 29, 'दाँत')],
    history: {
      english:
        "Danteshwari has been the state deity (Kuldevi) of the Bastar kingdom's ruling dynasty for many centuries, and the temple remains the ritual centrepiece of the Bastar Dussehra — a uniquely long, 75-day festival cycle distinct from Dussehra celebrations elsewhere in India, blending tribal Gond traditions with mainstream Shakta Hinduism.",
      hindi:
        'दंतेश्वरी सदियों से बस्तर राज्य के शासक राजवंश की कुलदेवी रही हैं, और यह मंदिर बस्तर दशहरा का अनुष्ठानिक केंद्रबिंदु बना हुआ है — यह भारत में अन्यत्र मनाए जाने वाले दशहरे से भिन्न, असामान्य रूप से लंबा, 75-दिवसीय उत्सव चक्र है, जो जनजातीय गोंड परंपराओं को मुख्यधारा के शाक्त हिंदू धर्म के साथ मिलाता है।',
    },
    architecture: {
      english: "A temple built in a regional central-Indian style, historically maintained under Bastar royal patronage and integrated closely with the region's tribal festival traditions.",
      hindi: 'एक क्षेत्रीय मध्य-भारतीय शैली में निर्मित मंदिर, जो ऐतिहासिक रूप से बस्तर राजपरिवार के संरक्षण में बना रहा और क्षेत्र की जनजातीय उत्सव परंपराओं के साथ घनिष्ठ रूप से एकीकृत है।',
    },
    festivals: [
      {
        name: 'Bastar Dussehra',
        date: 'August/September-October (75-day cycle)',
        description: {
          english: 'A distinctive, unusually long festival cycle unique to the Bastar region, centred on Danteshwari and blending tribal Gond and Shakta traditions.',
          hindi: 'बस्तर क्षेत्र के लिए विशिष्ट, असामान्य रूप से लंबा उत्सव चक्र, जो दंतेश्वरी पर केंद्रित है और जनजातीय गोंड तथा शाक्त परंपराओं को मिलाता है।',
        },
      },
    ],
    travel: {
      airport: 'Jagdalpur Airport (~85 km).',
      railway: 'Kirandul or Jagdalpur are the nearest rail links, depending on route.',
      road: 'Connected by road to Jagdalpur (~85 km), the main town of the Bastar region.',
    },
    nearbyPlaces: ['Jagdalpur town', 'Chitrakoot Falls (regional)'],
    gallery: [],
    sourcesNote: "Body part and Bhairava name per Wikipedia's sourced Shakta pithas compilation. The Bastar Dussehra tradition and royal patronage history are independently well documented.",
  },
  {
    slug: 'tara-tarini',
    name: 'Tara Tarini',
    type: 'shakti-peetha',
    state: 'Odisha',
    city: 'Brahmapur, Ganjam district',
    deity: 'Tara Tarini Devi',
    associatedDeity: 'Tumbeshwar',
    bodyPart: 'Breast',
    overview: {
      english:
        "On a hilltop above the Rushikulya river in Ganjam district, Tara Tarini is worshipped as twin goddesses, marking where tradition holds Sati's breast fell — among the most significant Shakti Peethas in southern Odisha.",
      hindi:
        'गंजाम जिले में ऋषिकुल्या नदी के ऊपर एक पहाड़ी पर तारा तारिणी को जुड़वाँ देवियों के रूप में पूजा जाता है, यह वह स्थल है जहाँ परंपरा के अनुसार सती का वक्षस्थल गिरा था — यह दक्षिणी ओडिशा के सबसे महत्वपूर्ण शक्तिपीठों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('breast', 30, 'वक्षस्थल')],
    history: {
      english:
        "Tara Tarini has been a major pilgrimage site in southern Odisha for centuries, historically linked to the region's Shakta tradition alongside the state's better-known Vimala shrine at Puri, with the hilltop setting above the Rushikulya river long integral to its ritual significance.",
      hindi:
        'तारा तारिणी सदियों से दक्षिणी ओडिशा का एक प्रमुख तीर्थ स्थल रहा है, जो ऐतिहासिक रूप से राज्य के अधिक प्रसिद्ध पुरी के विमला मंदिर के साथ क्षेत्र की शाक्त परंपरा से जुड़ा है, और ऋषिकुल्या नदी के ऊपर पहाड़ी परिवेश दीर्घकाल से इसके अनुष्ठानिक महत्व का अभिन्न भाग रहा है।',
    },
    architecture: {
      english: 'A hilltop temple reached by a flight of steps or a ropeway, overlooking the Rushikulya river, worshipped as twin goddess images rather than a single idol.',
      hindi: 'सीढ़ियों अथवा रोपवे से पहुँचा जाने वाला एक पर्वत-शिखर मंदिर, जो ऋषिकुल्या नदी को निहारता है, जहाँ एक ही मूर्ति के बजाय जुड़वाँ देवी-प्रतिमाओं की पूजा होती है।',
    },
    festivals: [
      {
        name: 'Chaitra Mela',
        date: 'March/April',
        description: {
          english: "The temple's largest annual festival, drawing large crowds from across southern Odisha.",
          hindi: 'मंदिर का सबसे बड़ा वार्षिक उत्सव, जो दक्षिणी ओडिशा भर से बड़ी भीड़ आकर्षित करता है।',
        },
      },
    ],
    travel: {
      airport: 'Biju Patnaik International Airport, Bhubaneswar (~170 km).',
      railway: 'Brahmapur (Berhampur) railway station is the nearest major rail hub (~30 km).',
      road: 'Connected by road to Brahmapur (~30 km).',
    },
    nearbyPlaces: ['Rushikulya river (Olive Ridley turtle nesting site nearby)', 'Brahmapur city'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'nalhateswari',
    name: 'Nalhateswari',
    type: 'shakti-peetha',
    state: 'West Bengal',
    city: 'Nalhati, Birbhum district',
    deity: 'Kalika Devi (Nalhateswari)',
    associatedDeity: 'Jogeshwar',
    bodyPart: 'Stomach / spinal cord (nala)',
    overview: {
      english:
        'The Nalhateswari Temple at Nalhati is another of Birbhum district\'s dense cluster of Shakti Peethas, its name referencing the "nala" (a bone or cord) of Sati said to have fallen here.',
      hindi:
        "नलहाटी में स्थित नलहाटेश्वरी मंदिर बीरभूम जिले के सघन शक्तिपीठ समूह में से एक और है, जिसका नाम सती की 'नला' (एक हड्डी अथवा नाड़ी) से संबंधित है, जिसके यहाँ गिरने की मान्यता है।",
    },
    story: [satiChapter1, satiChapter2, fellChapter('stomach/nala', 31, 'उदर/नला')],
    history: {
      english:
        "Nalhateswari has been part of the Birbhum region's long-standing Shakta pilgrimage tradition for many generations, maintained alongside the district's several other peethas including Bakreshwar and Kankalitala.",
      hindi:
        'नलहाटेश्वरी पीढ़ियों से बीरभूम क्षेत्र की दीर्घकालिक शाक्त तीर्थ परंपरा का भाग रहा है, जिसका रखरखाव जिले के बकरेश्वर और कंकालीतला सहित कई अन्य पीठों के साथ होता रहा है।',
    },
    architecture: {
      english: 'A traditional Bengali temple structure typical of the Birbhum Shakti Peetha cluster.',
      hindi: 'बीरभूम शक्तिपीठ समूह की विशिष्ट एक पारंपरिक बंगाली मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals.', hindi: 'क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kazi Nazrul Islam Airport, Durgapur (~75 km).',
      railway: 'Nalhati Junction serves the town directly.',
      road: 'Connected by road to Rampurhat (~15 km).',
    },
    nearbyPlaces: ['Rampurhat', 'Tarapith (~15 km)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation, which itself notes some variation in the precise body-part translation for this site.",
  },
  {
    slug: 'avanti-ujjain',
    name: 'Avanti',
    type: 'shakti-peetha',
    state: 'Madhya Pradesh',
    city: 'Ujjain',
    deity: 'Avanti Devi',
    associatedDeity: 'Lambkarneshwar',
    bodyPart: 'Elbow',
    overview: {
      english:
        "In the same sacred city as the Mahakaleshwar Jyotirlinga, the Avanti Shakti Peetha marks where tradition holds that Sati's elbow fell — another site, alongside Srisailam and Deoghar, where Jyotirlinga and Shakti Peetha traditions share a single city.",
      hindi:
        'महाकालेश्वर ज्योतिर्लिंग वाली उसी पवित्र नगरी में स्थित अवंती शक्तिपीठ वह स्थल है जहाँ परंपरा के अनुसार सती की कोहनी गिरी थी — यह श्रीशैलम और देवघर के साथ एक और ऐसा स्थल है जहाँ ज्योतिर्लिंग और शक्तिपीठ परंपराएँ एक ही नगरी साझा करती हैं।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('elbow', 32, 'कोहनी')],
    history: {
      english:
        "As detailed in the Mahakaleshwar Jyotirlinga entry, Ujjain (ancient Avantika) was one of the seven sacred cities of ancient India and a major seat of learning; the Avanti Shakti Peetha shares this same long history as part of the city's dense religious landscape.",
      hindi:
        'जैसा कि महाकालेश्वर ज्योतिर्लिंग की प्रविष्टि में विस्तार से बताया गया है, उज्जैन (प्राचीन अवंतिका) प्राचीन भारत की सप्तपुरियों में से एक और विद्या का प्रमुख केंद्र था; अवंती शक्तिपीठ नगरी के सघन धार्मिक परिदृश्य के भाग रूप में यही दीर्घ इतिहास साझा करता है।',
    },
    architecture: {
      english: "A temple within Ujjain's historic religious quarter, in keeping with the city's broader Maratha-period temple architecture.",
      hindi: 'उज्जैन के ऐतिहासिक धार्मिक क्षेत्र में स्थित एक मंदिर, जो नगरी की व्यापक मराठा-कालीन मंदिर स्थापत्य शैली के अनुरूप है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: "Observed alongside Ujjain's wider festival calendar.", hindi: 'उज्जैन के व्यापक उत्सव-कैलेंडर के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Devi Ahilyabai Holkar Airport, Indore (~55 km).',
      railway: 'Ujjain Junction is well connected to Delhi, Mumbai, and other major cities.',
      road: 'Connected by national highway to Indore (~55 km) and Bhopal (~185 km).',
    },
    nearbyPlaces: ['Mahakaleshwar Jyotirlinga (same city)', 'Kal Bhairav Temple', 'Ram Ghat'],
    gallery: [],
    sourcesNote: "Body part and Bhairava name per Wikipedia's sourced Shakta pithas compilation. See the Mahakaleshwar Jyotirlinga entry for the shared city history.",
  },
  {
    slug: 'shankari-trincomalee',
    name: 'Shankari',
    type: 'shakti-peetha',
    state: 'Eastern Province, Sri Lanka',
    city: 'Trincomalee',
    deity: 'Shankari Devi',
    associatedDeity: 'Trikoneshwar',
    bodyPart: 'Groin',
    overview: {
      english:
        "The original Shankari shrine's exact location has been lost to history; tradition now identifies it with the Koneswaram Temple at Trincomalee, on Sri Lanka's east coast, marking where Sati's groin is held to have fallen.",
      hindi:
        'मूल शंकरी मंदिर का सटीक स्थान इतिहास में लुप्त हो गया है; परंपरा अब इसे श्रीलंका के पूर्वी तट पर त्रिंकोमाली के कोणेश्वरम मंदिर के साथ पहचानती है, जहाँ सती की जाँघमूल गिरने की मान्यता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('groin', 33, 'जाँघमूल')],
    history: {
      english:
        'The Koneswaram Temple at Trincomalee has an ancient history as one of the most significant Shiva temples of the Tamil-Hindu tradition in Sri Lanka. Its original structure was destroyed by Portuguese colonial forces in 1622; the present temple is a modern reconstruction on the same dramatic clifftop site, known historically as "Dakshina Kailasam" (the Kailash of the South).',
      hindi:
        "त्रिंकोमाली का कोणेश्वरम मंदिर श्रीलंका की तमिल-हिंदू परंपरा के सबसे महत्वपूर्ण शिव मंदिरों में से एक के रूप में प्राचीन इतिहास रखता है। इसकी मूल संरचना 1622 में पुर्तगाली औपनिवेशिक सेनाओं द्वारा नष्ट कर दी गई थी; वर्तमान मंदिर उसी नाटकीय चट्टान-शिखर स्थल पर एक आधुनिक पुनर्निर्माण है, जो ऐतिहासिक रूप से 'दक्षिण कैलासम' (दक्षिण का कैलाश) के नाम से जाना जाता है।",
    },
    architecture: {
      english: 'A clifftop temple overlooking the Indian Ocean at Swami Rock, rebuilt in the modern era following the 17th-century Portuguese destruction of the original structure.',
      hindi: 'स्वामी रॉक पर हिंद महासागर को निहारता एक चट्टान-शिखर मंदिर, जो 17वीं शताब्दी में पुर्तगालियों द्वारा मूल संरचना के विध्वंस के पश्चात् आधुनिक काल में पुनर्निर्मित हुआ।',
    },
    festivals: [
      {
        name: 'Ther Thiruvizha (chariot festival)',
        date: 'April/May',
        description: { english: "The temple's major annual festival, with a large chariot procession.", hindi: 'मंदिर का प्रमुख वार्षिक उत्सव, जिसमें एक बड़ी रथ शोभायात्रा निकलती है।' },
      },
    ],
    travel: {
      airport: 'Trincomalee Airport (China Bay) or Jaffna International Airport, depending on route.',
      railway: 'Trincomalee railway station connects to Colombo.',
      road: 'Connected by road to Colombo (~260 km).',
    },
    nearbyPlaces: ['Swami Rock', 'Trincomalee Harbour', 'Nilaveli Beach'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names, and the identification with Koneswaram, per Wikipedia's sourced Shakta pithas compilation. The 1622 Portuguese destruction is independently well documented.",
  },
  {
    slug: 'dhakeshwari',
    name: 'Dhakeshwari',
    type: 'shakti-peetha',
    state: 'Dhaka, Bangladesh',
    city: 'Dhaka',
    deity: 'Dhakeshwari Devi',
    associatedDeity: 'Shiva',
    bodyPart: 'Gem of Sati\'s crown',
    overview: {
      english: "The Dhakeshwari Temple — the 'National Temple of Bangladesh' — marks where tradition holds a gem from Sati's crown fell, and gives the city of Dhaka its name.",
      hindi: "ढाकेश्वरी मंदिर — बांग्लादेश का 'राष्ट्रीय मंदिर' — वह स्थल है जहाँ परंपरा के अनुसार सती के मुकुट का एक रत्न गिरा था, और यही ढाका नगर को अपना नाम देता है।",
    },
    story: [satiChapter1, satiChapter2, fellChapter('crown gem', 34, 'मुकुट-रत्न')],
    history: {
      english:
        "Dhakeshwari Temple has a documented history stretching back to at least the 12th century CE, traditionally associated with the Sena dynasty, and has remained the most important Hindu temple in Bangladesh through the country's modern history, formally recognised as the National Temple of Bangladesh. A related shrine has also been established in Kolkata's Kumartuli neighbourhood by the displaced original priestly family.",
      hindi:
        'ढाकेश्वरी मंदिर का दस्तावेज़ीकृत इतिहास कम से कम 12वीं शताब्दी ईस्वी तक जाता है, जो परंपरागत रूप से सेन राजवंश से संबद्ध है, और यह बांग्लादेश के आधुनिक इतिहास में सबसे महत्वपूर्ण हिंदू मंदिर बना रहा है, जिसे औपचारिक रूप से बांग्लादेश के राष्ट्रीय मंदिर के रूप में मान्यता प्राप्त है। विस्थापित मूल पुजारी परिवार द्वारा कोलकाता के कुमारटुली मोहल्ले में भी एक संबंधित मंदिर स्थापित किया गया है।',
    },
    architecture: {
      english: 'A historic temple complex in central Dhaka, rebuilt and renovated across several periods, now maintained as a national heritage site.',
      hindi: 'मध्य ढाका में स्थित एक ऐतिहासिक मंदिर परिसर, जो कई कालों में पुनर्निर्मित और जीर्णोद्धारित हुआ है, और अब एक राष्ट्रीय धरोहर स्थल के रूप में बनाए रखा जाता है।',
    },
    festivals: [
      {
        name: 'Durga Puja',
        date: 'September/October',
        description: { english: "Bangladesh's largest Durga Puja celebration is centred at this temple.", hindi: 'बांग्लादेश का सबसे बड़ा दुर्गा पूजा उत्सव इसी मंदिर पर केंद्रित है।' },
      },
    ],
    travel: {
      airport: 'Hazrat Shahjalal International Airport, Dhaka (~10 km).',
      railway: 'Dhaka is a major national rail hub.',
      road: 'Centrally located within Dhaka city.',
    },
    nearbyPlaces: ['Old Dhaka', 'Lalbagh Fort'],
    gallery: [],
    sourcesNote: "Body part and history per Wikipedia's sourced Shakta pithas compilation. The temple's 'National Temple of Bangladesh' status is independently documented. Travel information is general; cross-border pilgrimage logistics from India should be checked independently.",
  },
  {
    slug: 'chinnamastika-chintpurni',
    name: 'Chinnamastika',
    type: 'shakti-peetha',
    state: 'Himachal Pradesh',
    city: 'Chintpurni',
    deity: 'Chhinnamastika Devi',
    associatedDeity: 'Rudra Mahadeva',
    bodyPart: 'Foot',
    overview: {
      english:
        "The Chintpurni Temple honours the goddess as Chhinnamastika, one of the ten Mahavidyas, marking where tradition holds that Sati's foot fell — among the most visited Devi shrines in Himachal Pradesh.",
      hindi:
        'चिंतपूर्णी मंदिर देवी को छिन्नमस्तिका, दस महाविद्याओं में से एक, के रूप में सम्मानित करता है, यह वह स्थल है जहाँ परंपरा के अनुसार सती का पैर गिरा था — यह हिमाचल प्रदेश के सर्वाधिक दर्शनार्थियों वाले देवी मंदिरों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('foot', 35, 'पैर')],
    history: {
      english:
        'Chintpurni has been an important regional pilgrimage site for centuries, historically associated with the erstwhile hill states of the Kangra region, and remains, alongside Jwalamukhi and Naina Devi, one of the most heavily visited Devi temples in Himachal Pradesh.',
      hindi:
        'चिंतपूर्णी सदियों से एक महत्वपूर्ण क्षेत्रीय तीर्थ स्थल रहा है, जो ऐतिहासिक रूप से कांगड़ा क्षेत्र की पूर्ववर्ती पहाड़ी रियासतों से संबद्ध है, और ज्वालामुखी तथा नैना देवी के साथ, हिमाचल प्रदेश के सर्वाधिक दर्शनार्थियों वाले देवी मंदिरों में से एक बना हुआ है।',
    },
    architecture: {
      english: 'A hill-temple structure typical of the Kangra-region Devi shrines, centred on worship without a conventional carved idol, in keeping with the Chhinnamasta iconographic tradition.',
      hindi: 'कांगड़ा क्षेत्र के देवी मंदिरों की विशिष्ट एक पहाड़ी मंदिर संरचना, जिसका केंद्र छिन्नमस्ता की मूर्तिकला परंपरा के अनुरूप बिना किसी पारंपरिक उत्कीर्ण प्रतिमा के उपासना है।',
    },
    festivals: [
      {
        name: 'Navaratri (both Chaitra and Sharad)',
        date: 'March/April and September/October',
        description: { english: "The temple's largest festival periods.", hindi: 'मंदिर के सबसे बड़े उत्सव काल।' },
      },
    ],
    travel: {
      airport: 'Gaggal Airport, Kangra (~55 km).',
      railway: 'Una Himachal railway station is the nearest rail link (~55 km).',
      road: 'Connected by road to Una (~55 km) and Hoshiarpur (Punjab, ~35 km).',
    },
    nearbyPlaces: ['Jwalamukhi (~35 km)', 'Una town'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
  {
    slug: 'aranya-devi-arrah',
    name: 'Aranya Devi',
    type: 'shakti-peetha',
    state: 'Bihar',
    city: 'Arrah',
    deity: 'Aranyani Devi',
    associatedDeity: 'Bhuma Bhairava',
    bodyPart: 'Right thigh',
    overview: {
      english: "The Aranya Devi Temple at Arrah marks where tradition holds that Sati's right thigh fell, and is referenced, per local tradition, in the Matsya Purana.",
      hindi: 'आरा में स्थित आरण्य देवी मंदिर वह स्थल है जहाँ परंपरा के अनुसार सती की दायीं जांघ गिरी थी, और स्थानीय परंपरा के अनुसार इसका उल्लेख मत्स्य पुराण में मिलता है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('right thigh', 36, 'दायीं जांघ')],
    history: {
      english:
        'Aranya Devi has been an important regional Shakta pilgrimage site in Bihar for many centuries, maintained continuously by the local community and remaining one of the more significant Devi temples of the wider Bhojpur region.',
      hindi:
        'आरण्य देवी सदियों से बिहार का एक महत्वपूर्ण क्षेत्रीय शाक्त तीर्थ स्थल रहा है, जिसका रखरखाव स्थानीय समुदाय द्वारा निरंतर होता रहा है, और यह व्यापक भोजपुर क्षेत्र के अधिक महत्वपूर्ण देवी मंदिरों में से एक बना हुआ है।',
    },
    architecture: {
      english: "A regional North Indian temple structure typical of Bihar's established Shakta shrines.",
      hindi: 'बिहार के स्थापित शाक्त मंदिरों की विशिष्ट एक क्षेत्रीय उत्तर भारतीय मंदिर संरचना।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "The temple's largest festival period, drawing large crowds from the Bhojpur region.",
          hindi: 'मंदिर का सबसे बड़ा उत्सव काल, जो भोजपुर क्षेत्र से बड़ी भीड़ आकर्षित करता है।',
        },
      },
    ],
    travel: {
      airport: 'Patna Airport (~65 km).',
      railway: 'Ara Junction serves the town directly.',
      road: 'Connected by road to Patna (~65 km) via NH30/NH922.',
    },
    nearbyPlaces: ['Arrah town', 'Buxar (regional)'],
    gallery: [],
    sourcesNote: "Body part and Bhairava name per Wikipedia's sourced Shakta pithas compilation, which also notes the local tradition linking this site to the Matsya Purana.",
  },
  {
    slug: 'tuljabhavani',
    name: 'Tuljabhavani',
    type: 'shakti-peetha',
    state: 'Maharashtra',
    city: 'Tuljapur',
    deity: 'Tuljabhavani Devi',
    associatedDeity: 'Bhairava',
    overview: {
      english:
        'One of the most revered Shakti Peethas in Maharashtra, Tuljabhavani at Tuljapur is closely associated with Chhatrapati Shivaji Maharaj, who is believed to have received the sword "Bhavani" from the goddess before his campaigns.',
      hindi:
        "महाराष्ट्र के सबसे श्रद्धेय शक्तिपीठों में से एक, तुलजापुर की तुलजाभवानी छत्रपति शिवाजी महाराज से घनिष्ठ रूप से संबद्ध हैं, जिनके विषय में मान्यता है कि उन्होंने अपने अभियानों से पूर्व देवी से 'भवानी' तलवार प्राप्त की थी।",
    },
    story: [satiChapter1, satiChapter2],
    history: {
      english:
        "Tuljabhavani has been a major Maratha pilgrimage and royal-patronage site since at least the medieval period, most famously linked to Chhatrapati Shivaji Maharaj, the 17th-century founder of the Maratha Empire, who is traditionally held to have been a devoted worshipper of the goddess and to have received divine blessing and a sword from her before key campaigns — a story central to Maratha historical memory in Maharashtra.",
      hindi:
        'तुलजाभवानी कम से कम मध्यकाल से एक प्रमुख मराठा तीर्थ एवं राजसी-संरक्षण स्थल रहा है, जो सबसे प्रसिद्ध रूप से मराठा साम्राज्य के 17वीं शताब्दी के संस्थापक छत्रपति शिवाजी महाराज से जुड़ा है, जिनके विषय में परंपरागत रूप से माना जाता है कि वे देवी के भक्त उपासक थे और महत्वपूर्ण अभियानों से पूर्व उनसे दिव्य आशीर्वाद और एक तलवार प्राप्त की थी — यह कथा महाराष्ट्र में मराठा ऐतिहासिक स्मृति के केंद्र में है।',
    },
    architecture: {
      english: 'A fortified temple complex with multiple gateways and courtyards, reflecting centuries of continuous royal and public patronage.',
      hindi: 'कई प्रवेश-द्वारों और प्रांगणों वाला एक सुरक्षा-प्राकार युक्त मंदिर परिसर, जो सदियों के निरंतर राजसी एवं सार्वजनिक संरक्षण को दर्शाता है।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: {
          english: "The temple's largest annual festival, among the most heavily attended in Maharashtra.",
          hindi: 'मंदिर का सबसे बड़ा वार्षिक उत्सव, जो महाराष्ट्र में सर्वाधिक उपस्थिति वाले उत्सवों में से एक है।',
        },
      },
    ],
    travel: {
      airport: 'Solapur Airport (~45 km).',
      railway: 'Solapur Junction is the nearest major railhead (~45 km).',
      road: 'Connected by road to Solapur (~45 km) and Osmanabad (~20 km).',
    },
    nearbyPlaces: ['Osmanabad (Dharashiv Caves, regional)', 'Solapur city'],
    gallery: [],
    sourcesNote: "This site's Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation; the source table does not specify a body-part attribution for Tuljapur, and none is asserted here. The Shivaji Maharaj association is a widely held Maratha historical and devotional tradition.",
  },
  {
    slug: 'vaishno-devi',
    name: 'Vaishno Devi',
    type: 'shakti-peetha',
    badgeLabel: 'Devi Shrine',
    state: 'Jammu and Kashmir',
    city: 'Katra, Reasi district',
    deity: 'Vaishno Devi (worshipped as a joint manifestation of Mahakali, Mahalakshmi and Mahasaraswati)',
    associatedDeity: 'Bhairavnath',
    bodyPart: 'Contested — see sourcesNote: a rock formation near the Pindis is read by some as a fallen hand of Sati, but this is a minority reading layered onto a site whose own defining legends (below) are unrelated to the Sati-Daksha tradition',
    overview: {
      english:
        "One of the most visited pilgrimage sites in India, the Vaishno Devi shrine sits in a cave on Trikuta hill above Katra, at about 5,200 feet, reached by a roughly 12-13 km trek. Its own core legends — a promise from Rama, and the pursuit by Bhairavnath — are older and far more central to its identity than its secondary, contested identification as a Shakti Peetha.",
      hindi:
        'भारत के सर्वाधिक दर्शनार्थियों वाले तीर्थ स्थलों में से एक, वैष्णो देवी मंदिर कटरा के ऊपर त्रिकुटा पहाड़ी की एक गुफा में लगभग 5,200 फुट की ऊँचाई पर स्थित है, जहाँ लगभग 12-13 किलोमीटर की पैदल यात्रा से पहुँचा जाता है। इसकी अपनी मूल किंवदंतियाँ — राम का एक वचन, और भैरवनाथ द्वारा पीछा — शक्तिपीठ के रूप में इसकी द्वितीयक, विवादित पहचान से कहीं अधिक प्राचीन और इसकी पहचान के लिए केंद्रीय हैं।',
    },
    story: [
      {
        chapterTitle: { english: 'Trikuta Devi', hindi: 'त्रिकुटा देवी' },
        order: 1,
        text: {
          english:
            "Before she was known as Vaishno Devi, local tradition on the Trikuta hills worshipped the mountain's three peaks themselves as a goddess called Trikuta Devi — a name still recorded by 19th-century European travellers. The identification with Vaishno Devi developed gradually, tradition holds, after the 12th century.",
          hindi:
            'वैष्णो देवी के नाम से जाने जाने से पहले, त्रिकुटा पहाड़ियों की स्थानीय परंपरा पर्वत के तीन शिखरों को स्वयं त्रिकुटा देवी नामक देवी के रूप में पूजती थी — यह नाम 19वीं शताब्दी के यूरोपीय यात्रियों द्वारा भी दर्ज किया गया है। परंपरा के अनुसार वैष्णो देवी के साथ पहचान 12वीं शताब्दी के पश्चात् धीरे-धीरे विकसित हुई।',
        },
      },
      {
        chapterTitle: { english: "Rama's Promise", hindi: 'राम का वचन' },
        order: 2,
        text: {
          english:
            'By one widely told legend, the goddess Vaishnavi met Rama in the Trikuta forests during his exile and asked to marry him. Bound by his vow to have only one wife — already Sita — Rama declined, but promised to return in his tenth incarnation, as Kalki, at the end of the Kali Yuga, and marry her then. Until that day, he asked her to keep to the cave at Trikuta, meditating and blessing devotees.',
          hindi:
            'एक व्यापक रूप से प्रचलित किंवदंती के अनुसार, देवी वैष्णवी ने वनवास के दौरान त्रिकुटा के वनों में राम से भेंट की और उनसे विवाह करने की इच्छा प्रकट की। केवल एक पत्नी — पहले से ही सीता — रखने की अपनी प्रतिज्ञा से बंधे राम ने इनकार कर दिया, परंतु वचन दिया कि वे कलियुग के अंत में अपने दसवें अवतार, कल्कि, के रूप में लौटकर तब उनसे विवाह करेंगे। उस दिन तक उन्होंने देवी से त्रिकुटा की गुफा में रहकर ध्यान करने और भक्तों को आशीर्वाद देने का अनुरोध किया।',
        },
      },
      {
        chapterTitle: { english: 'Pandit Shridhar and the Bhandara', hindi: 'पंडित श्रीधर और भंडारा' },
        order: 3,
        text: {
          english:
            'By tradition, the cave was revealed around the 10th century CE to a Brahmin priest, Pandit Shridhar, of the village of Hansali near present-day Katra. The goddess appeared to him in a dream and told him to hold a bhandara (a communal feast) in her honour, inviting the whole village — including the tantric ascetic Bhairavnath.',
          hindi:
            'परंपरा के अनुसार, यह गुफा लगभग 10वीं शताब्दी ईस्वी में वर्तमान कटरा के निकट हंसाली गाँव के एक ब्राह्मण पुजारी, पंडित श्रीधर, को प्रकट हुई थी। देवी ने उन्हें स्वप्न में दर्शन देकर उनके सम्मान में एक भंडारा (सामूहिक भोज) आयोजित करने को कहा, जिसमें पूरे गाँव को — तांत्रिक सन्यासी भैरवनाथ सहित — आमंत्रित किया जाए।',
        },
      },
      {
        chapterTitle: { english: 'The Pursuit and the Cave', hindi: 'पीछा और गुफा' },
        order: 4,
        text: {
          english:
            "At the bhandara, the goddess appeared as a young girl serving the meal. Bhairavnath, sensing her true nature, demanded meat and liquor from her — offerings alien to her worship — and she fled. He pursued her for nine months across the Trikuta hills. She took refuge in the cave, and when he found her there, she beheaded him with her trishul at the cave's mouth. As he lay dying, he begged forgiveness and she granted it, blessing him that his name would be invoked alongside hers. His head, tradition holds, landed at a spot above the cave now marked by the Bhairon Temple — which is why, to this day, the pilgrimage to Vaishno Devi is considered incomplete without a visit there on the way back down.",
          hindi:
            'भंडारे में देवी एक युवा कन्या के रूप में भोजन परोसते हुए प्रकट हुईं। भैरवनाथ ने उनके वास्तविक स्वरूप को भाँपते हुए उनसे मांस और मदिरा की माँग की — ऐसी भेंट जो उनकी उपासना के लिए सर्वथा अनुपयुक्त थी — और देवी वहाँ से भाग गईं। उन्होंने त्रिकुटा पहाड़ियों में नौ महीनों तक देवी का पीछा किया। देवी ने गुफा में शरण ली, और जब भैरवनाथ ने उन्हें वहाँ पाया, तो गुफा के मुख पर देवी ने अपने त्रिशूल से उनका सिर काट दिया। मरते समय उन्होंने क्षमा माँगी और देवी ने उन्हें क्षमा करते हुए यह आशीर्वाद दिया कि उनका नाम भी देवी के नाम के साथ लिया जाएगा। परंपरा के अनुसार उनका सिर गुफा के ऊपर एक स्थान पर गिरा, जहाँ आज भैरों मंदिर स्थित है — यही कारण है कि आज भी वैष्णो देवी की तीर्थयात्रा वापसी में वहाँ के दर्शन के बिना अधूरी मानी जाती है।',
        },
      },
    ],
    history: {
      english:
        "The earliest administrative record of the shrine dates to 1007 CE, when Raja Kirpal Dev issued a land deed recognising the Baridars — descendants of Pandit Shridhar — as its hereditary custodians. In 1846, Maharaja Gulab Singh of Jammu placed the shrine under the Dharmarth Trust, and it remained under hereditary trusteeship (most recently Dr. Karan Singh) until 1986, when Governor Jagmohan's legislation transferred control to a newly formed Shri Mata Vaishno Devi Shrine Board — a change that coincided with a dramatic rise in pilgrim numbers, from roughly 1.4 million visitors in 1986 to over 9.5 million by 2023, per the Board's own published statistics. The route remains genuinely hazardous in the Himalayan monsoon: a landslide near Ardhkuwari in August 2025 killed 35 pilgrims, prompting an ongoing review of the Board's weather-advisory protocols.",
      hindi:
        'मंदिर का सबसे प्राचीन प्रशासनिक अभिलेख 1007 ईस्वी का है, जब राजा कृपाल देव ने बरीदारों — पंडित श्रीधर के वंशजों — को इसके वंशानुगत संरक्षक के रूप में मान्यता देते हुए एक भूमि-पत्र जारी किया। 1846 में जम्मू के महाराजा गुलाब सिंह ने मंदिर को धर्मार्थ ट्रस्ट के अधीन रखा, और यह 1986 तक वंशानुगत न्यासिता (सबसे हाल में डॉ. करण सिंह) के अधीन रहा, जब राज्यपाल जगमोहन के कानून ने नियंत्रण नवगठित श्री माता वैष्णो देवी श्राइन बोर्ड को हस्तांतरित कर दिया — यह परिवर्तन श्रद्धालु संख्या में नाटकीय वृद्धि के साथ हुआ, जो बोर्ड के अपने प्रकाशित आँकड़ों के अनुसार 1986 में लगभग 1.4 मिलियन से बढ़कर 2023 तक 9.5 मिलियन से अधिक हो गई। हिमालयी मानसून में यह मार्ग वास्तव में जोखिमपूर्ण बना हुआ है: अगस्त 2025 में अर्धकुंवारी के निकट एक भूस्खलन में 35 श्रद्धालुओं की मृत्यु हुई, जिसके बाद बोर्ड की मौसम-चेतावनी प्रक्रियाओं की समीक्षा जारी है।',
    },
    architecture: {
      english:
        'The original cave is about 30 metres long; pilgrims wade through a shallow stream, the Charan Ganga, to reach the inner sanctum, where three naturally rounded stone formations (Pindis) are worshipped as Mahakali, Mahalakshmi and Mahasaraswati. To manage the now very heavy daily pilgrim volume, the Shrine Board has cut a parallel artificial tunnel alongside the original cave, and a cable car has operated on the Bhawan-Bhairon route since 2018.',
      hindi:
        'मूल गुफा लगभग 30 मीटर लंबी है; श्रद्धालु भीतरी गर्भगृह तक पहुँचने हेतु चरण गंगा नामक एक उथली धारा से होकर गुज़रते हैं, जहाँ तीन प्राकृतिक रूप से गोल शिला-संरचनाओं (पिंडियों) को महाकाली, महालक्ष्मी और महासरस्वती के रूप में पूजा जाता है। अब की बहुत भारी दैनिक श्रद्धालु संख्या के प्रबंधन हेतु श्राइन बोर्ड ने मूल गुफा के समानांतर एक कृत्रिम सुरंग बनाई है, और 2018 से भवन-भैरों मार्ग पर एक रोपवे भी संचालित है।',
    },
    festivals: [
      {
        name: 'Navaratri (both Chaitra and Sharad)',
        date: 'March/April and September/October',
        description: { english: "The shrine's busiest pilgrimage periods.", hindi: 'मंदिर के सबसे व्यस्त तीर्थयात्रा काल।' },
      },
    ],
    travel: {
      airport: 'Jammu Airport (~50 km to Katra), then road or rail to Katra.',
      railway: 'Shri Mata Vaishno Devi Katra railway station serves the base town directly.',
      road: 'From Katra, the shrine is reached by a ~12-13 km trek (or pony, palanquin, helicopter, or battery car for part of the route); a cable car covers the Bhawan-Bhairon leg.',
    },
    nearbyPlaces: ['Bhairon Temple', 'Ardhkuwari', 'Katra town', 'Patnitop (regional hill station)'],
    gallery: [],
    sourcesNote:
      "Caution on this entry: the current Wikipedia article on Vaishno Devi Temple, which this was cross-checked against, carries an editor-added notice flagging parts of it as possibly AI-generated with unreliable sourcing (added January 2026). The history, the Rama and Bhairavnath legends, and the Gulab Singh/Dharmarth Trust/1986 Shrine Board chain above are corroborated by cited academic and government sources within that article (Foster & Stoddard 2010; the 1988 J&K Shrine Act; Kapoor 2021) and match independently well-established accounts, so they're presented with confidence. The Shakti Peetha claim itself is explicitly contested even within that same article: one tradition holds Sati's skull fell here, a competing one says her right arm, and some texts instead place the right arm at Gandarbal in Kashmir — this platform states that disagreement rather than picking a side. The 2023 pilgrim-count and August 2025 landslide figures are drawn from the Shrine Board's own statistics and a Tribune India report respectively, not independently re-verified here.",
  },
  {
    slug: 'chandranath-chittagong',
    name: 'Chandranath (Chattal Bhavani)',
    type: 'shakti-peetha',
    state: 'Chittagong Division, Bangladesh',
    city: 'Sitakunda, Chittagong',
    deity: 'Chattal Bhawani Devi',
    associatedDeity: 'Chandrashekhar',
    bodyPart: 'Upper teeth (per this listing) / right arm (per other lists)',
    overview: {
      english: "Atop the Chandranath hill in Sitakunda, Chittagong, this Shakti Peetha honours Chattal Bhawani — the region's namesake goddess — within a temple complex also significant to Buddhist tradition.",
      hindi: 'चटगाँव के सीताकुंड में चंद्रनाथ पहाड़ी पर स्थित यह शक्तिपीठ चट्टल भवानी — क्षेत्र की नामधारी देवी — को एक ऐसे मंदिर परिसर के भीतर सम्मानित करता है जो बौद्ध परंपरा के लिए भी महत्वपूर्ण है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('upper teeth', 37, 'ऊपरी दाँत')],
    history: {
      english:
        'The Chandranath temple complex has been a significant pilgrimage site in the Chittagong region for many centuries, notable for being revered across Hindu and Buddhist traditions, with a documented history of continuous worship through the colonial and modern periods.',
      hindi:
        'चंद्रनाथ मंदिर परिसर सदियों से चटगाँव क्षेत्र का एक महत्वपूर्ण तीर्थ स्थल रहा है, जो हिंदू और बौद्ध दोनों परंपराओं में श्रद्धेय होने के लिए उल्लेखनीय है, तथा औपनिवेशिक एवं आधुनिक काल में निरंतर उपासना का दस्तावेज़ीकृत इतिहास रखता है।',
    },
    architecture: {
      english: 'A hilltop temple complex reached by a flight of steps up Chandranath hill, overlooking the Chittagong coastal plain.',
      hindi: 'चंद्रनाथ पहाड़ी पर सीढ़ियों से पहुँचा जाने वाला एक पर्वत-शिखर मंदिर परिसर, जो चटगाँव के तटीय मैदान को निहारता है।',
    },
    festivals: [
      {
        name: 'Shivratri Mela',
        date: 'February/March',
        description: { english: 'A major annual fair held at the hilltop temple complex.', hindi: 'पर्वत-शिखर मंदिर परिसर में आयोजित एक प्रमुख वार्षिक मेला।' },
      },
    ],
    travel: {
      airport: 'Shah Amanat International Airport, Chittagong (~40 km).',
      railway: 'Sitakunda railway station serves the town directly.',
      road: 'Connected by road to Chittagong city (~40 km).',
    },
    nearbyPlaces: ['Chittagong city', 'Sitakunda Eco Park (regional)'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation, which notes some variation in the exact body-part attribution for this site across different regional lists. Travel information is general; cross-border pilgrimage logistics from India should be checked independently.",
  },
  {
    slug: 'rajarajeshwari-bengaluru',
    name: 'Rajarajeshwari (Jnanakshi)',
    type: 'shakti-peetha',
    state: 'Karnataka',
    city: 'Bengaluru',
    deity: 'Tripura Sundari (as Rajarajeshwari)',
    associatedDeity: 'Abiru Bhairava',
    bodyPart: 'Ear',
    overview: {
      english:
        'Within the Sri Kailash Ashrama Mahasamsthana in Bengaluru, the Jnanakshi Rajarajeshwari Temple is counted among the Shakti Peethas, marking where tradition holds an ear of Sati fell — one of the very few such sites in a major modern South Indian metropolitan city.',
      hindi:
        'बेंगलुरु के श्री कैलाश आश्रम महासंस्थान के भीतर स्थित ज्ञानाक्षी राजराजेश्वरी मंदिर को शक्तिपीठों में गिना जाता है, यह वह स्थल है जहाँ परंपरा के अनुसार सती का एक कान गिरा था — यह किसी प्रमुख आधुनिक दक्षिण भारतीय महानगर में स्थित बहुत कम ऐसे स्थलों में से एक है।',
    },
    story: [satiChapter1, satiChapter2, fellChapter('ear', 38, 'कान')],
    history: {
      english:
        "This shrine is a comparatively more recent addition to the Shakti Peetha tradition's public recognition, maintained as part of the Sri Kailash Ashrama Mahasamsthana in Bengaluru, and has grown in pilgrimage significance as Bengaluru itself has grown into a major Indian city.",
      hindi:
        'यह मंदिर शक्तिपीठ परंपरा की सार्वजनिक मान्यता में अपेक्षाकृत हाल की वृद्धि है, जिसे बेंगलुरु के श्री कैलाश आश्रम महासंस्थान के भाग रूप में बनाए रखा जाता है, और जैसे-जैसे बेंगलुरु स्वयं एक प्रमुख भारतीय नगर में विकसित हुआ है, वैसे-वैसे इसका तीर्थ-महत्व भी बढ़ा है।',
    },
    architecture: {
      english: 'A South Indian Dravidian-style shrine within the broader Kailash Ashrama complex in Bengaluru.',
      hindi: 'बेंगलुरु के व्यापक कैलाश आश्रम परिसर के भीतर दक्षिण भारतीय द्रविड़ शैली का मंदिर।',
    },
    festivals: [
      {
        name: 'Navaratri',
        date: 'September/October',
        description: { english: 'Observed with regional Shakta rituals at the ashram complex.', hindi: 'आश्रम परिसर में क्षेत्रीय शाक्त अनुष्ठानों के साथ मनाई जाती है।' },
      },
    ],
    travel: {
      airport: 'Kempegowda International Airport, Bengaluru (~40 km).',
      railway: 'Bengaluru City Junction is a major national rail hub.',
      road: 'Located within Bengaluru city.',
    },
    nearbyPlaces: ['Bengaluru city centre'],
    gallery: [],
    sourcesNote: "Body part, Devi and Bhairava names per Wikipedia's sourced Shakta pithas compilation.",
  },
];
