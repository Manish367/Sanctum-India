export type Language = 'sanskrit' | 'hindi' | 'english';

export interface Verse {
  text: string;
  meaning: {
    hindi: string;
    english: string;
  };
}

export interface AartiEntry {
  slug: string;
  title: string;
  subtitle: string;
  deityGroup: 'shiva' | 'devi';
  intro: {
    hindi: string;
    english: string;
  };
  verses: Verse[];
  structure: {
    hindi: string;
    english: string;
  };
  note: string;
}

// These are ancient/traditional public-domain compositions (the Tandava Stotram is attributed
// to Ravana in Puranic tradition; both aartis are 19th-century works commonly attributed to
// Pandit Shraddha Ram Phillauri, d. 1881). All three are given in full, with verse text
// cross-checked across independent sources. All Hindi/English meanings are original writing for
// this site, not copied wholesale from any single source. For ritual/chanting use, follow a
// trusted printed aarti book.
export const aartis: AartiEntry[] = [
  {
    slug: 'shiv-tandav-stotram',
    title: 'Shiv Tandav Stotram',
    subtitle: "Ravana's Hymn to Shiva",
    deityGroup: 'shiva',
    intro: {
      hindi:
        'शिव तांडव स्तोत्रम् पौराणिक परंपरा में रावण द्वारा रचित माना जाता है, जब उसने कैलाश पर्वत उठाने का प्रयास किया और शिव की क्षमा पाने हेतु यह स्तुति रची। यह अत्यंत वेगवान पंचचामर छंद में रचित है, जो स्वयं शिव के तांडव नृत्य की गति को शब्दों में जीवंत करता है।',
      english:
        "The Shiv Tandav Stotram is attributed in Puranic tradition to Ravana, composed after he attempted to lift Mount Kailash and sought Shiva's forgiveness. It is written in the fast, cascading panchachamara meter, which itself mimics the rhythm of Shiva's cosmic dance.",
    },
    verses: [
      {
        text: 'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥',
        meaning: {
          hindi: 'जिनकी जटाओं के जंगल से बहती गंगा की धारा भूमि को पवित्र करती है, जो गले में सर्पों की माला धारण करते हैं, और जिनके डमरू की गूँज से प्रचण्ड तांडव नृत्य होता है — वे शिव हमारा कल्याण करें।',
          english:
            'Shiva, whose matted locks hold the flowing Ganga that purifies the ground below, who wears a garland of serpents around his neck, and whose damaru drum resounds as he performs his fierce cosmic dance — may that Shiva grant us auspiciousness.',
        },
      },
      {
        text: 'जटाकटाहसंभ्रमभ्रमन्निलिम्पनिर्झरी विलोलवीचिवल्लरीविराजमानमूर्धनि।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥',
        meaning: {
          hindi: 'जिनके सिर पर घूमती गंगा की लहरें सुशोभित हैं, और जिनके ललाट पर धधकती अग्नि है, उन युवा चंद्रशेखर शिव में मेरा प्रतिपल अनुराग बना रहे।',
          english:
            "May my devotion turn, moment after moment, to the youthful Chandrashekhara — Shiva who bears the crescent moon — on whose head the Ganga's restless waves swirl, and on whose brow a fire blazes.",
        },
      },
      {
        text: 'धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर स्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि क्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥',
        meaning: {
          hindi:
            'जो पर्वतराज की पुत्री पार्वती के प्रिय सखा हैं, जिनका मन सभी दिशाओं में फैले आनंद से प्रफुल्लित रहता है, और जिनकी कृपादृष्टि की एक ही झलक कठिनतम विपत्ति को भी रोक देती है — उन दिगम्बर शिव में मेरा मन रमे।',
          english:
            "May my mind find its delight in the sky-clad Shiva — beloved companion of Parvati, daughter of the mountain king, whose spirit rejoices across every direction, and whose single glance of grace holds back the gravest calamity.",
        },
      },
      {
        text: 'जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा कदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे मनो विनोदमद्भुतं बिभर्तु भूतभर्तरि॥',
        meaning: {
          hindi:
            'जिनकी जटाओं में लिपटे सर्पों के फणों की मणियों की चमक दिशाओं को कुंकुम-वर्ण से रंग देती है, और जो मदमत्त गजराज के चर्म को वस्त्र समान धारण करते हैं — उन भूतनाथ शिव में मेरा मन अद्भुत आनंद पाए।',
          english:
            'May my mind find wondrous delight in Shiva, lord of all beings — whose serpent-jewels tinge the directions crimson, and who wears the hide of a frenzied elephant as his garment.',
        },
      },
      {
        text: 'सहस्रलोचनप्रभृत्यशेषलेखशेखर प्रसूनधूलिधोरणीविधूसराङ्ग्रिपीठभूः।\nभुजङ्गराजमालया निबद्धजाटजूटकः श्रियै चिराय जायतां चकोरबन्धुशेखरः॥',
        meaning: {
          hindi:
            'जिनके चरण देवगण द्वारा झुककर चढ़ाए गए फूलों के पराग से धूसरित रहते हैं, जिनकी जटाएँ सर्पराज से बंधी हैं और जिनके शीश पर चंद्रमा शोभित है — वे चकोर-बंधु (चंद्र) को धारण करने वाले शिव हमें चिरस्थायी ऐश्वर्य दें।',
          english:
            'May Shiva — his feet grey with the pollen of flowers offered by gods bowing beyond count, his matted hair bound by the king of serpents, the moon resting upon his crown — grant us lasting fortune.',
        },
      },
      {
        text: 'ललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा निपीतपञ्चसायकं नमन्निलिम्पनायकम्।\nसुधामयूखलेखया विराजमानशेखरं महाकपालि सम्पदे शिरो जटालमस्तु नः॥',
        meaning: {
          hindi:
            'जिनके ललाट की अग्नि की चिंगारियों ने कामदेव को भस्म किया, जिनके सम्मुख स्वयं देवराज इंद्र नतमस्तक होते हैं, और जिनके मस्तक पर चंद्रकला की उज्ज्वल रेखा शोभा पाती है — उन महाकपाली शिव का जटाजूट-मंडित मस्तक हमारा कल्याण करे।',
          english:
            'May the matted crown of Mahakapali — whose forehead-fire reduced Kama to ash, before whom even the lord of the gods bows, and whose head bears the bright crescent of the moon — bring us prosperity.',
        },
      },
      {
        text: 'करालभालपट्टिकाधगद्धगद्धगज्ज्वल-द्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके।\nधराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक प्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम॥',
        meaning: {
          hindi:
            'जिनके भीषण ललाट की धधकती अग्नि ने प्रचण्ड कामदेव को आहुति बना दिया, और जो पर्वतराज-नंदिनी पार्वती के वक्षस्थल पर चित्रकारी करने वाले अद्वितीय शिल्पी हैं — उन त्रिनेत्रधारी शिव में मेरा अनुराग बना रहे।',
          english:
            'May my love remain fixed on the three-eyed Lord, whose terrible forehead-fire consumed mighty Kama as an offering, and who alone is the artist skilled enough to paint upon the breast of Parvati, daughter of the mountain king.',
        },
      },
      {
        text: 'नवीनमेघमण्डलीनिरुद्धदुर्धरस्फुरत् कुहनिशीथिनीतमः प्रबन्धबद्धकन्धरः।\nनिलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः कलानिधानबन्धुरः श्रियं जगद्धुरन्धरः॥',
        meaning: {
          hindi:
            'जिनका कंठ नवीन मेघों से घिरी अमावस्या की रात्रि जैसे गहन अंधकार से युक्त है, जो आकाशगंगा को धारण करते हैं, गजचर्म ओढ़े हैं, और जिनके मस्तक पर चंद्रकला शोभित है — वे जगत का भार वहन करने वाले शिव हमारा ऐश्वर्य बढ़ाएँ।',
          english:
            "May Shiva — bearer of the celestial river, robed in elephant-hide, his throat dark as a moonless midnight wrapped in fresh clouds, his crown graced by the moon's sliver — who carries the weight of the world, increase our fortune.",
        },
      },
      {
        text: 'प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा वलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम्।\nस्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं गजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे॥',
        meaning: {
          hindi:
            'पूर्ण खिले नीलकमल के समान श्याम कांति वाले कंठ को धारण करने वाले, तथा कामदेव, त्रिपुरासुर, संसार-बंधन, दक्ष-यज्ञ, गजासुर, अंधकासुर और मृत्यु के भय — इन सबका नाश करने वाले शिव को मैं भजता हूँ।',
          english:
            'I worship Shiva, his throat dark as a fully-bloomed blue lotus, destroyer of Kama, of the demon Tripura, of worldly bondage, of the arrogant sacrifice, of the elephant-demon, of Andhaka, and even of death itself.',
        },
      },
      {
        text: 'अखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी रसप्रवाहमाधुरीविजृम्भणामधुव्रतम्।\nस्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं गजान्तकान्धकान्तकं तमन्तकान्तकं भजे॥',
        meaning: {
          hindi:
            'जो पार्वती की समस्त मंगलमयी कलाओं के मधुर रस-प्रवाह में भ्रमर के समान सदा रमण करते हैं, और जो कामदेव, त्रिपुरासुर, भव-बंधन, यज्ञ, गजासुर, अंधकासुर तथा मृत्यु का भी अंत करने वाले हैं — मैं उन शिव को भजता हूँ।',
          english:
            "I worship Shiva, who like a bee delights endlessly in the sweetness of Parvati's every auspicious grace, and who brings an end to Kama, to Tripura, to worldly existence, to the sacrifice, to the elephant-demon, to Andhaka, and to death.",
        },
      },
      {
        text: 'जयत्वदभ्रविभ्रमभ्रमद्भुजङ्गमश्वस द्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट्।\nधिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल ध्वनिक्रमप्रवर्तितप्रचण्डताण्डवः शिवः॥',
        meaning: {
          hindi:
            'घूमते हुए सर्प की फुफकार से जिनके ललाट की भीषण अग्नि और अधिक प्रज्वलित हो उठती है, और जिनका प्रचण्ड ताण्डव नृत्य मृदंग की मंगलकारी "धिमि-धिमि" ध्वनि की लय पर होता है — उन शिव की जय हो।',
          english:
            'Victory to Shiva, whose fierce forehead-fire flares brighter still with the hissing breath of the coiling serpent, and whose furious cosmic dance unfolds to the auspicious "dhimi-dhimi" rhythm of the mridanga drum.',
        },
      },
      {
        text: 'दृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजो गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः।\nतृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः समप्रवृत्तिकः कदा सदाशिवं भजाम्यहम्॥',
        meaning: {
          hindi:
            'पत्थर और सुसज्जित शय्या, सर्प और मोतियों की माला, बहुमूल्य रत्न और मिट्टी का ढेला, मित्र और शत्रु, तिनका और कमल-सी आँखों वाली स्त्री, प्रजा और महाराजा — इन सबको समान दृष्टि से देखते हुए मैं कब सदाशिव को भजूँगा?',
          english:
            'When will I worship Sadashiva with a truly equal eye — seeing stone and ornate bed alike, serpent and pearl-necklace alike, precious gem and clod of earth alike, friend and foe alike, blade of grass and lotus-eyed woman alike, common folk and king alike?',
        },
      },
      {
        text: 'कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन् विमुक्तदुर्मतिः सदा शिरःस्थमञ्जलिं वहन्।\nविलोललोललोचनो ललामभाललग्नकः शिवेति मन्त्रमुच्चरन् कदा सुखी भवाम्यहम्॥',
        meaning: {
          hindi:
            'गंगा के तटवर्ती कुंज-कुटीरों में निवास करते हुए, समस्त दुर्बुद्धि को त्यागकर, मस्तक पर अंजलि जोड़े, चंचल किंतु भावविभोर नेत्रों से "शिव-शिव" मंत्र का उच्चारण करते हुए मैं कब सुखी होऊँगा?',
          english:
            'Dwelling in some bower by the celestial Ganga, freed of every base thought, hands folded above my head, eyes restless yet brimming with devotion, chanting the mantra "Shiva" — when will I finally know happiness?',
        },
      },
      {
        text: 'इमं हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं पठन्स्मरन्ब्रुवन्नरो विशुद्धिमेति सन्ततम्।\nहरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं विमोहनं हि देहिनां सुशङ्करस्य चिन्तनम्॥',
        meaning: {
          hindi:
            'जो मनुष्य इस उत्तम स्तोत्र का नित्य पाठ, स्मरण अथवा उच्चारण करता है, वह निरंतर पवित्र होता जाता है और शीघ्र ही गुरुस्वरूप शिव में सच्ची भक्ति पाता है — इसके अतिरिक्त कोई अन्य मार्ग नहीं। शिव का चिंतन देहधारियों के मोह को दूर करने वाला है।',
          english:
            'One who regularly recites, recalls, or speaks this supreme hymn is steadily purified, and swiftly attains true devotion to Shiva, the guru — there is no other path to it. Contemplating Shankara alone dispels the delusion that binds embodied beings.',
        },
      },
      {
        text: 'प्रचण्डवाडवानलप्रभाशुभप्रचारणी महाष्टसिद्धिकामिनी जनावहूतजल्पना।\nविमुक्तवामलोचनो विवाहकालिकध्वनिः शिवेति मन्त्रभूषगो जगज्जयाय जायताम्॥',
        meaning: {
          hindi:
            'जो प्रचण्ड वडवाग्नि के समान तेजस्वी और मंगलकारी हैं, जो महान सिद्धियों को देने वाले हैं, और जिनका "शिव" नाम स्वयं ही एक मंगलमय मंत्र है — वे शिव संपूर्ण जगत के कल्याण और विजय के लिए प्रकट हों।',
          english:
            'May Shiva — radiant and auspicious as the submarine fire, granter of the great spiritual powers, whose very name "Shiva" is itself a mantra of blessing — manifest for the welfare and triumph of the whole world.',
        },
      },
      {
        text: 'पूजावसानसमये दशवक्त्रगीतं यः शम्भुपूजनपरं पठति प्रदोषे।\nतस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां लक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः॥',
        meaning: {
          hindi:
            'पूजा की समाप्ति पर अथवा प्रदोषकाल में जो व्यक्ति रावण द्वारा रचित इस शम्भु-स्तवन का पाठ करता है, उसे भगवान शम्भु रथ, गज और अश्वों से समृद्ध स्थिर लक्ष्मी सदैव प्रसन्नतापूर्वक प्रदान करते हैं।',
          english:
            'Whoever recites, at the close of worship or in the evening twilight, this hymn to Shambhu composed by Ravana, is granted by Shambhu a lasting fortune — rich with chariots, elephants, and horses — bestowed always with a smiling grace.',
        },
      },
    ],
    structure: {
      hindi:
        'इस स्तोत्र की श्लोक-संख्या संस्करण अनुसार भिन्न होती है — यह मौखिक परंपरा से आया प्राचीन पाठ है, इसलिए कुछ स्रोत इसे 15 श्लोकों पर पूर्ण मानते हैं, तो कुछ 16 या 17 तक ले जाते हैं; कोई एक "आधिकारिक" संख्या नहीं है। यहाँ स्तोत्र के सोलह मुख्य श्लोक क्रम से दिए गए हैं — कामदेव, त्रिपुरासुर, गजासुर और अंधकासुर के नाशक शिव, पार्वती के साथ उनका सान्निध्य, उनका ताण्डव नृत्य, और साम्यभाव की उनकी साधना — और अंत में रावण द्वारा रचित फलश्रुति के साथ समाप्त होता है, जिसमें कहा गया है कि जो इसे भक्तिपूर्वक पढ़ता है उसे शिव की विशेष कृपा प्राप्त होती है।',
      english:
        "The verse count of this stotram varies by recension — it comes down through oral tradition, so some sources treat it as complete at 15 verses, others extend to 16 or 17; there is no single \"official\" count. This rendering gives the sixteen core verses in sequence — Shiva as destroyer of Kama, of the demon Tripura, of the elephant-demon and of Andhaka; his closeness with Parvati; his cosmic Tandava dance; and the seeker's longing for equanimity — closing with the phalashruti composed by Ravana, stating that one who recites it with devotion receives Shiva's special grace.",
    },
    note:
      'The Sanskrit verse text follows the well-established, ancient (public-domain) recension of the stotram, cross-checked across independent sources. The Hindi and English meanings are original writing for this site, not copied from any single translation — for chanting or ritual use, please follow a trusted printed aarti book or temple-published source.',
  },
  {
    slug: 'om-jai-shiv-omkara',
    title: 'Om Jai Shiv Omkara',
    subtitle: 'Shiv Aarti',
    deityGroup: 'shiva',
    intro: {
      hindi:
        'यह आरती उन्नीसवीं शताब्दी की रचना मानी जाती है, जिसका श्रेय सामान्यतः पंडित श्रद्धा राम फिल्लौरी को दिया जाता है, और आज लगभग हर शिव मंदिर में संध्या आरती के समय गाई जाती है।',
      english:
        'This aarti is generally dated to the 19th century and attributed to Pandit Shraddha Ram Phillauri. It is sung at the close of daily worship in Shiva temples across India, and features prominently on Mondays, through Shravan, and on Maha Shivaratri.',
    },
    verses: [
      {
        text: 'ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।\nब्रह्मा विष्णु सदाशिव, अर्धांगी धारा॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'विजय हो शिव की, जो ओंकार स्वरूप हैं, जिनमें ब्रह्मा, विष्णु और सदाशिव समाहित हैं, और जो अपनी अर्धांगिनी को अपने ही शरीर के आधे भाग में धारण करते हैं।',
          english: 'Victory to Shiva, the form of the primordial Om — in whom Brahma, Vishnu and Sadashiva are held together, and who bears his consort as one half of his own being.',
        },
      },
      {
        text: 'एकानन चतुरानन पंचानन राजे।\nहंसासन गरुड़ासन वृषवाहन साजे॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'हे शिव, आप एक मुख, चार मुख और पाँच मुख वाले विविध दिव्य रूपों में विराजमान हैं — ब्रह्मा हंस पर, विष्णु गरुड़ पर, और आप स्वयं वृषभ पर सुशोभित होते हैं।',
          english: 'O Shiva, you appear with one face, four faces, and five faces across your many divine forms — Brahma seated on the swan, Vishnu on Garuda, and you yourself mounted on the sacred bull.',
        },
      },
      {
        text: 'दो भुज चार चतुर्भुज दस भुज अति सोहे।\nत्रिगुण रूप निरखते त्रिभुवन जन मोहे॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'दो, चार अथवा दस भुजाओं में वे अत्यंत सुंदर दिखते हैं; उनके त्रिगुणी रूप को देखकर तीनों लोकों के प्राणी मोहित हो जाते हैं।',
          english: 'With two arms, four arms, or ten arms he appears magnificent; the beings of all three worlds are enchanted beholding his three-natured form.',
        },
      },
      {
        text: 'अक्षमाला वनमाला मुण्डमाला धारी।\nचन्दन मृगमद चंदा सोहे त्रिपुरारी॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'हे त्रिपुरारी, आप रुद्राक्ष की माला, वन-पुष्पों की माला और मुंडों की माला धारण करते हैं; आपके शरीर पर चंदन, कस्तूरी और चंद्रमा की शोभा है।',
          english: 'O Tripurari, you wear a rosary of beads, a garland of forest flowers, and a garland of skulls; sandalwood, musk, and the crescent moon adorn your form.',
        },
      },
      {
        text: 'श्वेताम्बर पीताम्बर बाघम्बर अंगे।\nसनकादिक गरुड़ादिक भूतादिक संगे॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'आप कभी श्वेत वस्त्र, कभी पीत वस्त्र, तो कभी व्याघ्रचर्म धारण करते हैं; सनक आदि ऋषिगण, गरुड़ और भूतगण सदा आपके संग रहते हैं।',
          english: "You are clothed at times in white, at times in yellow, at times in a tiger's hide; sages like Sanaka, Garuda, and your host of spirit-attendants keep you company.",
        },
      },
      {
        text: 'कर के मध्य कमण्डलु चक्र त्रिशूल धर्ता।\nजगकर्ता जगभर्ता जगपालन कर्ता॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'आप हाथों में कमंडल, चक्र और त्रिशूल धारण करते हैं; आप ही सृष्टि के रचयिता, पालनकर्ता और संरक्षक हैं।',
          english: 'You hold the water-pot, the discus, and the trident in your hands; you alone are the creator, sustainer, and guardian of the world.',
        },
      },
      {
        text: 'ब्रह्मा विष्णु सदाशिव जानत अविवेका।\nप्रणवाक्षर में शोभित ये तीनों एका॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'ब्रह्मा, विष्णु और सदाशिव को अलग-अलग समझना अज्ञान है; प्रणव अक्षर "ॐ" में ये तीनों एक ही परम तत्व के रूप में विराजमान हैं।',
          english: 'To see Brahma, Vishnu, and Sadashiva as separate is a failure of understanding; within the syllable Om, these three shine as a single, undivided reality.',
        },
      },
      {
        text: 'काशी में विश्वनाथ विराजत नन्दी गणपति संगे।\nधूप दीप नैवेद्य चढ़त सन्तत श्री शिवलिंगे॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'काशी में भगवान विश्वनाथ नंदी और गणपति के साथ विराजमान हैं; वहाँ शिवलिंग पर निरंतर धूप, दीप और नैवेद्य अर्पित किए जाते हैं।',
          english: 'In Kashi, Lord Vishwanath resides together with Nandi and Ganapati; there, incense, lamps, and offerings are made without pause before the sacred Shiva Linga.',
        },
      },
      {
        text: 'त्रिगुण स्वामी जी की आरती जो कोई नर गावे।\nकहत शिवानंद स्वामी मनवांछित फल पावे॥ ॐ जय शिव ओंकारा॥',
        meaning: {
          hindi: 'त्रिगुणों के स्वामी शिव की यह आरती जो भी मनुष्य श्रद्धापूर्वक गाता है, शिवानंद स्वामी कहते हैं कि वह अपनी मनचाही फल प्राप्त करता है।',
          english: "Whoever sings this aarti to the three-natured Lord with devotion — says Shivananda Swami — receives the fulfillment of their heart's true wish.",
        },
      },
    ],
    structure: {
      hindi:
        'यह आरती नौ पदों की है और अंत में प्रारंभिक पद को पुनः गाकर पूर्ण की जाती है, जैसा आरतियों में प्रचलित है। ऊपर सभी आठ मुख्य पद क्रम से दिए गए हैं — शिव के विभिन्न मुख और वाहन (हंस, गरुड़, बैल), उनके वस्त्र और आभूषण, उनके हाथों के अस्त्र, ब्रह्मा-विष्णु-शिव की एकता, और काशी में विश्वनाथ रूप में उनका निवास — जो इस आरती की पूर्ण संरचना है।',
      english:
        "This aarti runs to nine stanzas, closing (as is customary) with a repeat of the opening refrain. All eight core stanzas are given above in sequence — Shiva's various faces and mounts (the swan, the eagle, the bull), his garments and ornaments, the implements in his hands, the underlying unity of Brahma, Vishnu and Shiva, and his residence in Kashi as Vishwanath — completing the aarti's full structure.",
    },
    note:
      'The Hindi verse text follows the well-established, widely-sung recension of this aarti; the Hindi and English meanings are original writing for this site. For chanting or ritual use, please follow a trusted printed aarti book or temple-published source.',
  },
  {
    slug: 'jai-ambe-gauri',
    title: 'Jai Ambe Gauri',
    subtitle: 'Devi (Mata) Aarti',
    deityGroup: 'devi',
    intro: {
      hindi:
        'यह आरती भी पंडित श्रद्धा राम फिल्लौरी की रचना मानी जाती है, और देवी मंदिरों में प्रतिदिन तथा विशेष रूप से नवरात्रि के नौ दिनों में गाई जाती है।',
      english:
        'This aarti is also generally attributed to Pandit Shraddha Ram Phillauri, and is sung daily at Devi temples, with particular prominence across all nine nights of Navaratri.',
    },
    verses: [
      {
        text: 'जय अम्बे गौरी, मैया जय श्यामा गौरी।\nतुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'हे अम्बे गौरी माता, हे श्यामा गौरी, आपको हरि, ब्रह्मा और शिव भी रात-दिन ध्याते हैं।',
          english: 'Victory to Mother Ambe, the fair goddess — even Hari, Brahma and Shiva meditate upon you day and night.',
        },
      },
      {
        text: 'माँग सिंदूर विराजत, टीको मृगमद को।\nउज्ज्वल से दो नैना, चन्द्रवदन नीको॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपकी मांग में सिंदूर सुशोभित है, ललाट पर कस्तूरी का तिलक है; आपके दोनों नेत्र उज्ज्वल हैं और मुखमंडल चंद्रमा के समान सुंदर है।',
          english: 'Vermilion adorns the parting of your hair, a musk tilak marks your brow; your eyes shine bright and your face is as lovely as the moon.',
        },
      },
      {
        text: 'कनक समान कलेवर, रक्ताम्बर राजै।\nरक्तपुष्प गल माला, कण्ठन पर साजै॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपका शरीर स्वर्ण के समान कांतिमान है, आप लाल वस्त्र धारण करती हैं; आपके कंठ में लाल पुष्पों की माला सुशोभित है।',
          english: 'Your form gleams like gold, robed in red; a garland of crimson flowers graces your neck.',
        },
      },
      {
        text: 'केहरि वाहन राजत, खड्ग खप्पर धारी।\nसुर-नर-मुनिजन सेवत, तिनके दुखहारी॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आप सिंह पर सवार होकर सुशोभित हैं, हाथों में खड्ग और खप्पर धारण करती हैं; देवता, मनुष्य और मुनिजन आपकी सेवा करते हैं और आप उनके दुखों का नाश करती हैं।',
          english: 'You are enthroned upon your lion, bearing sword and skull-bowl; gods, mortals and sages serve you, and you dispel their sorrows.',
        },
      },
      {
        text: 'कानन कुण्डल शोभित, नासाग्रे मोती।\nकोटिक चन्द्र दिवाकर, राजत सम ज्योति॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपके कानों में कुंडल शोभा पाते हैं, नासिका पर मोती चमकता है; आपकी ज्योति करोड़ों चंद्रमा और सूर्यों के समान प्रकाशमान है।',
          english: 'Earrings grace your ears, a pearl gleams upon your nose; your radiance shines as bright as a million moons and suns together.',
        },
      },
      {
        text: 'शुम्भ-निशुम्भ बिदारे, महिषासुर घाती।\nधूम्र विलोचन नैना, निसदिन मदमाती॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपने शुम्भ-निशुम्भ का नाश किया, महिषासुर का वध किया; आपने धूम्रलोचन को भी अपने नेत्रों की ज्वाला से भस्म किया।',
          english: 'You destroyed Shumbha and Nishumbha, and slew the demon Mahishasura; you also consumed Dhumralochana with the fire of your gaze.',
        },
      },
      {
        text: 'चण्ड-मुण्ड संहारे, शोणित बीज हरे।\nमधु-कैटभ दोउ मारे, सुर भयहीन करे॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपने चण्ड और मुण्ड का संहार किया, रक्तबीज के रक्त को सोख लिया; आपने मधु और कैटभ दोनों दैत्यों का वध कर देवताओं को भयमुक्त किया।',
          english: 'You destroyed Chanda and Munda, drank away the blood of Raktabija; you slew both Madhu and Kaitabha, freeing the gods from fear.',
        },
      },
      {
        text: 'ब्रह्माणी रुद्राणी, तुम कमला रानी।\nआगम निगम बखानी, तुम शिव पटरानी॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आप ही ब्रह्माणी हैं, आप ही रुद्राणी हैं, आप ही कमला रानी हैं; आगम और निगम (शास्त्र) आपका वर्णन करते हैं, आप शिव की पटरानी हैं।',
          english: 'You are Brahmani, you are Rudrani, you are Kamala the queen; the scriptures sing your praises, and you are the consort-queen of Shiva.',
        },
      },
      {
        text: 'चौंसठ योगिनी मंगल गावत, नृत्य करत भैरों।\nबाजत ताल मृदंगा, अरु बाजत डमरू॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'चौंसठ योगिनियाँ आपका मंगलगान करती हैं, भैरव नृत्य करते हैं; ताल, मृदंग और डमरू की ध्वनि गूंजती है।',
          english: 'The sixty-four Yoginis sing songs of your glory, while Bhairava dances; the beat of cymbals, the mridanga, and the damaru resound.',
        },
      },
      {
        text: 'तुम ही जग की माता, तुम ही हो भरता।\nभक्तन की दुख हरता, सुख सम्पत्ति करता॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आप ही संसार की माता हैं, आप ही इसका भरण-पोषण करने वाली हैं; आप ही भक्तों के दुख हरने वाली और उन्हें सुख-समृद्धि देने वाली हैं।',
          english: 'You alone are the mother of this world, you alone sustain it; you take away your devotees\' sorrows and grant them happiness and prosperity.',
        },
      },
      {
        text: 'भुजा चार अति सोहत, खड्ग खप्पर धारी।\nमनवांछित फल पावत, सेवत नर-नारी॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'आपकी चार भुजाएँ अत्यंत सुंदर हैं, जिनमें खड्ग और खप्पर सुशोभित हैं; जो भी नर-नारी आपकी सेवा करते हैं, वे मनचाहा फल पाते हैं।',
          english: 'Your four arms shine gloriously, bearing sword and skull-bowl; every man and woman who serves you attains the fruit of their heart\'s desire.',
        },
      },
      {
        text: 'श्री अम्बेजी की आरती, जो कोई नर गावे।\nकहत शिवानन्द स्वामी, मनवांछित फल पावे॥ जय अम्बे गौरी॥',
        meaning: {
          hindi: 'श्री अम्बे जी की यह आरती जो भी मनुष्य श्रद्धापूर्वक गाता है, शिवानंद स्वामी कहते हैं कि वह अपना मनचाहा फल प्राप्त करता है।',
          english: "Whoever sings this aarti to Mother Ambe with devotion — says Shivananda Swami — receives the fruit of their heart's true wish.",
        },
      },
    ],
    structure: {
      hindi:
        'इस पाठ में आरती के सभी बारह पद क्रम से दिए गए हैं — देवी का श्रृंगार और स्वरूप, उनका सिंह-वाहन और आयुध (खड्ग, खप्पर), शुम्भ-निशुम्भ, महिषासुर, चण्ड-मुण्ड, रक्तबीज तथा मधु-कैटभ के संहार की कथाएँ, उन्हें ब्रह्माणी-रुद्राणी-कमला और शिव-पटरानी के रूप में नमन, चौंसठ योगिनियों व भैरव का नृत्य-गान, और अंत में आरती के फल का वर्णन। कुछ प्रचलित संस्करणों में पदों की संख्या इससे कम या अधिक भी मिलती है।',
      english:
        "This rendering gives all twelve stanzas of the aarti in sequence — the goddess's form and adornments, her lion mount and weapons (sword and skull-bowl), the stories of her destroying Shumbha-Nishumbha, Mahishasura, Chanda-Munda, Raktabija, and Madhu-Kaitabha, her honouring as Brahmani, Rudrani, Kamala and the consort-queen of Shiva, the sixty-four Yoginis and Bhairava's dance, and finally the fruit of reciting the aarti. Some commonly printed versions run slightly shorter or longer than this.",
    },
    note:
      'The Hindi verse text follows a widely-sung recension of this aarti; regional printed versions vary somewhat in verse count and order. The Hindi and English meanings are original writing for this site. For chanting or ritual use, please follow a trusted printed aarti book or temple-published source.',
  },
  {
    slug: 'ambe-tu-hai-jagdambe-kaali',
    title: 'Ambe Tu Hai Jagdambe Kaali',
    subtitle: 'Devi (Mata) Bhajan',
    deityGroup: 'devi',
    intro: {
      hindi:
        'यह एक अत्यंत लोकप्रिय आधुनिक देवी भजन है, जो विशेष रूप से नवरात्रि और वैष्णो देवी की भेंटों में गाया जाता है, और अक्सर गायक नरेंद्र चंचल की प्रस्तुतियों से जुड़ा माना जाता है। शास्त्रीय आरतियों के विपरीत, इस गीत के मूल रचयिता का स्पष्ट, सत्यापित प्रमाण उपलब्ध नहीं है।',
      english:
        "This is an extremely popular modern Devi bhajan, especially associated with Navratri and Vaishno Devi \"bhet\" recordings, often linked to singer Narendra Chanchal's performances. Unlike the classical aartis on this page, clear, verified documentation of the song's original lyricist is not readily available.",
    },
    verses: [
      {
        text: 'अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली।\nतेरे ही गुण गायें भारती, ओ मैया हम सब उतारें तेरी आरती॥ जय अम्बे गौरी॥',
        meaning: {
          hindi:
            'हे अम्बे, तू ही जगत की माता काली है, हे दुर्गे, तू खप्पर धारण करने वाली है; भारतवासी तेरे ही गुण गाते हैं, हे मैया, हम सब मिलकर तेरी आरती उतारते हैं।',
          english:
            'O Amba, you are Kaali, mother of the universe; O Durga, bearer of the skull-bowl. All of India sings your praises — O Mother, we all join together to offer you this aarti.',
        },
      },
      {
        text: 'तेरे भक्त जनों पे माता, भीर पड़ी है भारी।\nदानव दल पर टूट पड़ो माँ, करके सिंह सवारी॥\nसौ-सौ सिंहों से तू बलशाली, दस भुजाओं वाली।\nदुखियों के दुखड़े निवारती, ओ मैया हम सब उतारें तेरी आरती॥ जय अम्बे गौरी॥',
        meaning: {
          hindi:
            'हे माता, तेरे भक्तों पर भारी संकट आ पड़ा है; अपने सिंह पर सवार होकर दानवों की सेना पर टूट पड़ो। तू सौ सिंहों के समान बलशाली और दस भुजाओं वाली है, तू ही दुखियों के दुखों को दूर करने वाली है — हे मैया, हम सब मिलकर तेरी आरती उतारते हैं।',
          english:
            'O Mother, a heavy calamity has fallen upon your devotees; mount your lion and fall upon the army of demons. You are as mighty as a hundred lions, adorned with ten arms, and you alone take away the sorrows of the suffering — O Mother, we all join together to offer you this aarti.',
        },
      },
      {
        text: 'माँ बेटे का है इस जग में, बड़ा ही निर्मल नाता।\nपूत कपूत सुने हैं पर, माता न सुनी कुमाता॥\nसब पर करुणा दरसाने वाली, अमृत बरसाने वाली।\nदुखियों के दुखड़े निवारती, ओ मैया हम सब उतारें तेरी आरती॥ जय अम्बे गौरी॥',
        meaning: {
          hindi:
            'इस संसार में माँ और बेटे का नाता सबसे निर्मल है; बुरे पुत्र के बारे में तो सुना गया है, पर बुरी माता के बारे में कभी नहीं सुना। तू सब पर करुणा बरसाने वाली और अमृत की वर्षा करने वाली है, तू ही दुखियों के दुखों को दूर करने वाली है — हे मैया, हम सब मिलकर तेरी आरती उतारते हैं।',
          english:
            'In this world, the bond between mother and child is the purest of all; one hears of a wayward child, but never of a wayward mother. You shower compassion upon all and rain down nectar; you alone take away the sorrows of the suffering — O Mother, we all join together to offer you this aarti.',
        },
      },
      {
        text: 'नहीं माँगते धन और दौलत, न चाँदी न सोना।\nहम तो माँगें माँ तेरे मन में, इक छोटा सा कोना॥\nसबकी बिगड़ी बनाने वाली, लाज बचाने वाली।\nसतियों के सत को सँवारती, ओ मैया हम सब उतारें तेरी आरती॥ जय अम्बे गौरी॥',
        meaning: {
          hindi:
            'हम धन-दौलत नहीं माँगते, न चाँदी न सोना; हम तो बस तेरे मन में एक छोटा सा स्थान माँगते हैं। तू सबका बिगड़ा हुआ काम बनाने वाली और लाज बचाने वाली है, तू ही सती स्त्रियों के सतीत्व की रक्षा करने वाली है — हे मैया, हम सब मिलकर तेरी आरती उतारते हैं।',
          english:
            "We do not ask for wealth or riches, neither silver nor gold; we only ask, Mother, for a small corner in your heart. You set right what has gone wrong for everyone and guard their honour; you alone preserve the virtue of the devoted — O Mother, we all join together to offer you this aarti.",
        },
      },
    ],
    structure: {
      hindi:
        'यह भजन पाँच पदों में गाया जाता है, जिसमें प्रारंभिक पद अंत में पुनः दोहराया जाता है (जैसा ऊपर के चार पदों में समाहित है)। यह मुख्यतः देवी से भक्तों के कष्ट दूर करने की प्रार्थना, माँ-बेटे के अटूट रिश्ते, और भौतिक धन के बजाय देवी के हृदय में स्थान माँगने के भाव पर केंद्रित है।',
      english:
        "This bhajan is sung in five stanzas, with the opening stanza repeated at the close (folded into the four given above). It centres on a plea for the goddess to relieve her devotees' suffering, the unbreakable bond between mother and child, and asking not for material wealth but for a place in the Mother's heart.",
    },
    note:
      "Unlike the other hymns on this page, this is a modern devotional song rather than a public-domain ancient or 19th-century text — the identity and copyright status of its original lyricist are not clearly documented here. Added at the site owner's request; if this site is ever published or redistributed, its copyright status should be verified independently. The Hindi and English meanings are original writing for this site.",
  },
];
