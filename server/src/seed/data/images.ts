import type { GalleryImage } from './types';

// Sourced from Wikimedia Commons via the API (see scratchpad upgrade_images.py / finalize_images.py).
// Each credit string cites artist + license so attribution stays with the image. Images are served
// at a large (3200px-target) web size, not raw originals, to keep page weight reasonable.
export const templeImages: Record<string, GalleryImage[]> = {
  'katyayini-vrindavan': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Katyayani_Shakti_Peeth_Mandir.jpg/3840px-Katyayani_Shakti_Peeth_Mandir.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Aliva Sahoo / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Katyayani Shakti Peeth Mandir',
    },
  ],
  'jogadya': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Paatala_Bhairavi_devi_Jogadya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Bengali brahman boy / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Paatala Bhairavi devi Jogadya',
    },
  ],
  'somnath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Shree_Somnath_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Prime Minister\'s Office / Wikimedia Commons (GODL-India)',
      alt: 'Shree Somnath Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/SOMNATH_TEMPLE.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Wikimedia Commons contributor / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'SOMNATH TEMPLE',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/3840px-Somanath_mandir_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'B. SurajPatro1997 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Somanath mandir (cropped)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Somnath_Temple_Jyotirlinga.jpg/1920px-Somnath_Temple_Jyotirlinga.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'YAKSH75 / Wikimedia Commons (CC0)',
      alt: 'Somnath Temple Jyotirlinga',
    },
  ],
  'mallikarjuna': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Srisailam-temple-entrance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Chintohere / Wikimedia Commons (Public domain)',
      alt: 'Srisailam-temple-entrance',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/KASS301_Srisailam_Temple_Pond_3D.jpg/3840px-KASS301_Srisailam_Temple_Pond_3D.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'VasuVR / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'KASS301 Srisailam Temple Pond 3D',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/APSS303_Srisailam_town_zoom_view_from_welcome_center2.jpg/3840px-APSS303_Srisailam_town_zoom_view_from_welcome_center2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'VasuVR / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'APSS303 Srisailam town zoom view from welcome center2',
    },
  ],
  'mahakaleshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg/3840px-Mahakaleshwar_Temple%2C_Ujjain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ashverse / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Mahakaleshwar Temple, Ujjain',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/0102221_Mahakaleswar_Mandir_number_2%2C_Un_Madhya_Pradesh_18.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0102221 Mahakaleswar Mandir number 2, Un Madhya Pradesh 18',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Shri_mahakaleshwar_jyotirlinga_temple_Ujjain_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Anchal lilhare / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri mahakaleshwar jyotirlinga temple Ujjain 02',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Shri_mahakaleshwar_jyotirlinga_temple_Ujjain_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Anchal lilhare / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri mahakaleshwar jyotirlinga temple Ujjain 01',
    },
  ],
  'omkareshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Omkareshwar_Temple_02.jpg/3840px-Omkareshwar_Temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Bernard Gagnon / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Omkareshwar Temple 02',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Omkareshwar_Temple_01.jpg/3840px-Omkareshwar_Temple_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Bernard Gagnon / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Omkareshwar Temple 01',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gomukh_ghat%2C_Omkareshwar_02.jpg/3840px-Gomukh_ghat%2C_Omkareshwar_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Bernard Gagnon / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Gomukh ghat, Omkareshwar 02',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Omkareshwar_04.jpg/3840px-Omkareshwar_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Bernard Gagnon / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Omkareshwar 04',
    },
  ],
  'kedarnath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Kedarnath_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Shaq774 at en.wikipedia / Wikimedia Commons (Public domain)',
      alt: 'Kedarnath Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/3840px-Kedarnath_Temple_in_Rainy_season.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Shivam Kumar 766 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kedarnath Temple in Rainy season',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kedarnath_temple_in_uttarakhand.jpg/3840px-Kedarnath_temple_in_uttarakhand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Nehasnaps0306 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kedarnath temple in uttarakhand',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Kedarnath_Temple_Uttarakhand_India.webp?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Niranjanofficial542 / Wikimedia Commons (CC0)',
      alt: 'Kedarnath Temple Uttarakhand India',
    },
  ],
  'bhimashankar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bhimashankar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'SaurabhJain at English Wikipedia / Wikimedia Commons (Public domain)',
      alt: 'Bhimashankar',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Bhimashankar_temple_front.jpg/3840px-Bhimashankar_temple_front.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Mechatron00 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bhimashankar temple front',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Bhimashankar_temple%2C_Maharashtra.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'ସୁରଥ କୁମାର ପାଢ଼ୀ / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Bhimashankar temple, Maharashtra',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Bhimashankar_temple.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pradeep245 / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Bhimashankar temple',
    },
  ],
  'kashi-vishwanath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shri_Kashi_Vishwanath_Temple_7.jpg/3840px-Shri_Kashi_Vishwanath_Temple_7.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gannu03 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Kashi Vishwanath Temple 7',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shri_Kashi_Vishwanath_Temple_2.jpg/1920px-Shri_Kashi_Vishwanath_Temple_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gannu03 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Kashi Vishwanath Temple 2',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Shri_Kashi_Vishwanath_Temple_3.jpg/3840px-Shri_Kashi_Vishwanath_Temple_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gannu03 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Kashi Vishwanath Temple 3',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Shri_Kashi_Vishwanath_Temple_5.jpg/3840px-Shri_Kashi_Vishwanath_Temple_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gannu03 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Kashi Vishwanath Temple 5',
    },
  ],
  'trimbakeshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Trimbakeshwar_Shiva_Temple_2005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Saket Verma / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Trimbakeshwar Shiva Temple 2005',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Trimbakeshwar_nj.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Niraj Suryawanshi / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Trimbakeshwar nj',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Close-up_of_the_shikhara_of_Trimbakeshwar_Shiva_Temple%2C_Trimbak%2C_Maharashtra%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Mr. Debapriya Hore / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Close-up of the shikhara of Trimbakeshwar Shiva Temple, Trimbak, Maharashtra, India',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Trimbakeshwar_Mandir%2C_Pune.jpg/3840px-Trimbakeshwar_Mandir%2C_Pune.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'DesiBoy101 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Trimbakeshwar Mandir, Pune',
    },
  ],
  'vaidyanath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Baba_Baidyanath_Jyotirlinga_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Flashthomsom / Wikimedia Commons (CC0)',
      alt: 'Baba Baidyanath Jyotirlinga Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Prime_Minister_Narendra_Modi_at_Baba_Baidyanath_Temple_in_Deoghar%2C_Jharkhand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Prime Minister\'s Office / Wikimedia Commons (GODL-India)',
      alt: 'Prime Minister Narendra Modi at Baba Baidyanath Temple in Deoghar, Jharkhand',
    },
  ],
  'nageshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Shree_Nageshwar_Jyotirling_temple%2C_Dwarka%2C_Gujarat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'VISHALnpn / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shree Nageshwar Jyotirling temple, Dwarka, Gujarat',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Shri_Nageshwar_Jyotirling_temple%2C_Dwarka%2C_Gujarat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'VISHALnpn / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Nageshwar Jyotirling temple, Dwarka, Gujarat',
    },
  ],
  'rameshwaram': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ramanathaswamy_Temple%2C_Rameshwaram%2C_Tamil_Nadu.jpg/3840px-Ramanathaswamy_Temple%2C_Rameshwaram%2C_Tamil_Nadu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Wanderlusts / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ramanathaswamy Temple, Rameshwaram, Tamil Nadu',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ramanathaswamy_temple7.JPG/1920px-Ramanathaswamy_temple7.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ssriram mt / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ramanathaswamy temple7',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Ramanathaswamy_Temple_night_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Shajinss / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ramanathaswamy Temple night view',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ramanathaswamy_temple_Entrance.jpg/3840px-Ramanathaswamy_temple_Entrance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Wanderlusts / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ramanathaswamy temple Entrance',
    },
  ],
  'grishneshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Grishneshwar_Temple_Ellora.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Shishirdasika / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Grishneshwar Temple Ellora',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Grishneshwar_temple_in_Aurangabad_district.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Rashmi.parab / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Grishneshwar temple in Aurangabad district',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Grishneshwar_Mosque.jpg/3840px-Grishneshwar_Mosque.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Shishirdasika / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Grishneshwar Mosque',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Grishneshwar_temple_%28Sive_view%29_in_Aurangabad_district.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'K.Venkataramana / Wikimedia Commons (CC0)',
      alt: 'Grishneshwar temple (Sive view) in Aurangabad district',
    },
  ],
  'kamakhya': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Kamakhya_Temple%2C_Guwahati.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Kunal Dalui / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Kamakhya Temple, Guwahati',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kamakhya_Temple%2C_Nilanchal_pahad.jpg/3840px-Kamakhya_Temple%2C_Nilanchal_pahad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Medhi jyoti / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kamakhya Temple, Nilanchal pahad',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Maa_Kamakhya_Temple_2.jpg/3840px-Maa_Kamakhya_Temple_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Sonnonn / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Maa Kamakhya Temple 2',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kamakhya_Temple_on_the_Ambubachi_Mela%2C_2023.jpg/3840px-Kamakhya_Temple_on_the_Ambubachi_Mela%2C_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Hrishikeskashyap / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kamakhya Temple on the Ambubachi Mela, 2023',
    },
  ],
  'kalighat': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Kalighat_Kali_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Bernard Gagnon / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Kalighat Kali Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Kalighat_Temple_Kolkata_India_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Hiroki Ogawa / Wikimedia Commons (CC BY 3.0)',
      alt: 'Kalighat Temple Kolkata India - panoramio',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kalighat_Temple_Kolkata_%2838293858642%29.jpg/3840px-Kalighat_Temple_Kolkata_%2838293858642%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ankur P from Pune, India / Wikimedia Commons (CC BY 2.0)',
      alt: 'Kalighat Temple Kolkata (38293858642)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Kalighat_Temple%2C_Kalighat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Discovery Kolkata / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kalighat Temple, Kalighat',
    },
  ],
  'tarapith': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tarapith_Temple_Architecture_12.jpg/1920px-Tarapith_Temple_Architecture_12.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Tarunsamanta / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tarapith Temple Architecture 12',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Tarapith_Temple_04.jpg/3840px-Tarapith_Temple_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Tarunsamanta / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tarapith Temple 04',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tarapith_Temple_01.jpg/3840px-Tarapith_Temple_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Tarunsamanta / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tarapith Temple 01',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tarapith_Kali_temple_at_Tarapith_06.jpg/1920px-Tarapith_Kali_temple_at_Tarapith_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tarapith Kali temple at Tarapith 06',
    },
  ],
  'jwalamukhi': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/0051223_Jwalamukhi_temple%2C_Jvala_ji_Himachal_Pradesh_024.jpg/3840px-0051223_Jwalamukhi_temple%2C_Jvala_ji_Himachal_Pradesh_024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0051223 Jwalamukhi temple, Jvala ji Himachal Pradesh 024',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Photograph_of_the_Jwala_Ji_Mandir_in_Kangra_district%2C_taken_by_Dhanna_Singh_Chahal_%27Patialvi%27%2C_1933.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Dhanna Singh Chahal \'Patialvi\' / Wikimedia Commons (Public domain)',
      alt: 'Photograph of the Jwala Ji Mandir in Kangra district, taken by Dhanna Singh Chahal \'Patialvi\', 1933',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Jwala_mukhi_temple_kangra_dist..JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Mani kopalle / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Jwala mukhi temple kangra dist.',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Jwala_mukhi_Temple_Kangra.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Mani kopalle / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Jwala mukhi Temple Kangra',
    },
  ],
  'vimala-puri': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Minor_temples_in_Jagannath_Puri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Mukherji, Poorno Chander / Wikimedia Commons (Public domain)',
      alt: 'Minor temples in Jagannath Puri',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Mount_Abu%2C_Jain_temple_%28i.e._Adinatha_or_Vimala_Vasahi_Temple%29%2C_view_of_the_interior_-_DPLA_-_104e7518d5741e83ca96446fc4dba116.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Murray, Colin Roderick, 1840-1884; Bourne &amp; Shepherd; Fergusson, James, 1808-1886 / Wikimedia Commons (Public domain)',
      alt: 'Mount Abu, Jain temple (i.e. Adinatha or Vimala Vasahi Temple), view of the interior - DPLA - 104e7518d5741e83ca96446fc4dba116',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Night_view_of_the_Jagannath_Temple_in_Puri.jpg/3840px-Night_view_of_the_Jagannath_Temple_in_Puri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Alfrieak / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Night view of the Jagannath Temple in Puri',
    },
  ],
  'mahalakshmi-kolhapur': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Mahalakshmi_temple%2C_Kolhapur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Own work / Wikimedia Commons (Public domain)',
      alt: 'Mahalakshmi temple, Kolhapur',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Mahalaxmi_Temple%2C_Kolhapur.jpg/3840px-Mahalaxmi_Temple%2C_Kolhapur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Lovelitjadhav / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Mahalaxmi Temple, Kolhapur',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mahalaxmi_Temple%2C_Kolhapur%2C_Maharashtra_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'A.Murali / Wikimedia Commons (CC0)',
      alt: 'Mahalaxmi Temple, Kolhapur, Maharashtra 08',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Jain_Carvings_on_the_wall_at_Kolhapur_Mahalakshmi_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'KGBedits / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Jain Carvings on the wall at Kolhapur Mahalakshmi Temple',
    },
  ],
  'ambaji': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/0081323_Arasuri_Ambaji_mandir%2C_Shakti_Peeth%2C_north_Gujarat_076.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0081323 Arasuri Ambaji mandir, Shakti Peeth, north Gujarat 076',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ambaji_Temple_at_Night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Viral A dave / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Ambaji Temple at Night',
    },
  ],
  'hinglaj': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hawan_at_Hinglaj_Mata_%28Rani_ki_Mandir%29_During_Yanglaj_Yatra_2017_Photo_by_Aliraza_Khatri.jpg/3840px-Hawan_at_Hinglaj_Mata_%28Rani_ki_Mandir%29_During_Yanglaj_Yatra_2017_Photo_by_Aliraza_Khatri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Aliraza Khatri / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Hawan at Hinglaj Mata (Rani ki Mandir) During Yanglaj Yatra 2017 Photo by Aliraza Khatri',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Nani_ki_Mandir2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Bilal Mirza / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Nani ki Mandir2',
    },
  ],
  'vishalakshi-varanasi': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/%E0%AE%95%E0%AE%BE%E0%AE%9A%E0%AE%BF_%E0%AE%B5%E0%AE%BF%E0%AE%9A%E0%AE%BE%E0%AE%B2%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF_%E0%AE%95%E0%AF%8B%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Kailash PL / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'காசி விசாலாட்சி கோயில்',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/%E0%AE%95%E0%AE%BE%E0%AE%9A%E0%AE%BF_%E0%AE%B5%E0%AE%BF%E0%AE%9A%E0%AE%BE%E0%AE%B2%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF_%E0%AE%95%E0%AF%8B%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B5%E0%AF%86%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81.jpg/1920px-%E0%AE%95%E0%AE%BE%E0%AE%9A%E0%AE%BF_%E0%AE%B5%E0%AE%BF%E0%AE%9A%E0%AE%BE%E0%AE%B2%E0%AE%BE%E0%AE%9F%E0%AF%8D%E0%AE%9A%E0%AE%BF_%E0%AE%95%E0%AF%8B%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D_%E0%AE%95%E0%AE%B2%E0%AF%8D%E0%AE%B5%E0%AF%86%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Kailash PL / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'காசி விசாலாட்சி கோயில் கல்வெட்டு',
    },
  ],
  'kamakshi-kanchipuram': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_mandapa_and_several_shrine_vimanas_of_Kamakshi_Amman_Temple%2C_Kanchipuram.jpg/3840px-A_mandapa_and_several_shrine_vimanas_of_Kamakshi_Amman_Temple%2C_Kanchipuram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'A mandapa and several shrine vimanas of Kamakshi Amman Temple, Kanchipuram',
    },
  ],
  'mangala-gauri-gaya': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Mangala_Gauri_Temple_at_Gaya%2C_Bihar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Mumbaipsytrance / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Mangala Gauri Temple at Gaya, Bihar',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/View_of_Gaya_from_Hills_of_Mangla_Gauri.jpg/3840px-View_of_Gaya_from_Hills_of_Mangla_Gauri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ianasaman / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'View of Gaya from Hills of Mangla Gauri',
    },
  ],
  'amarnath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Lord_Amarnath.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Gktambe at English Wikipedia / Wikimedia Commons (Public domain)',
      alt: 'Lord Amarnath',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Cave_Temple_of_Lord_Amarnath.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Gktambe at English Wikipedia / Wikimedia Commons (Public domain)',
      alt: 'Cave Temple of Lord Amarnath',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Painting_of_devotees_in_the_Amarnath_cave_temple._Jammu%2C_Pahari%2C_circa_mid-19th_century.webp?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Unknown authorUnknown author / Wikimedia Commons (Public domain)',
      alt: 'Painting of devotees in the Amarnath cave temple. Jammu, Pahari, circa mid-19th century',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Amarnath_Cave_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Guptaele / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Amarnath Cave Temple',
    },
  ],
  'attahas': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Attohas_Mandir%2C_Bardhaman.jpg/3840px-Attohas_Mandir%2C_Bardhaman.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Attohas Mandir, Bardhaman',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Attahas_Satipith_Mandir.jpg/3840px-Attahas_Satipith_Mandir.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Romam1988 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Attahas Satipith Mandir',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Attohas_Temple.jpg/3840px-Attohas_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Attohas Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Attohas_Mandir.jpg/3840px-Attohas_Mandir.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Attohas Mandir',
    },
  ],
  'bahula': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Shri_Bahula_Shaktipeeth_Temple%2C_Ketugram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Romam1988 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Bahula Shaktipeeth Temple, Ketugram',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Ma_Bahula%2C_Shri_Bahula_Shaktipeeth_Temple%2C_Ketugram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Romam1988 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ma Bahula, Shri Bahula Shaktipeeth Temple, Ketugram',
    },
  ],
  'bakreshwar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bakreswar_Temples_and_Hot_spring_18.jpg/1920px-Bakreswar_Temples_and_Hot_spring_18.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bakreswar Temples and Hot spring 18',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bakreswar_Temples_and_Hot_spring_07.jpg/3840px-Bakreswar_Temples_and_Hot_spring_07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bakreswar Temples and Hot spring 07',
    },
  ],
  'biraja-jajpur': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Front_view_from_left_side_of_Viraja%28also_named_as_Biraja%29_Temple_as_per_list_of_State_Protected_Monuments_in_Odisha._Serial_Number_S-OR-105.jpg/3840px-Front_view_from_left_side_of_Viraja%28also_named_as_Biraja%29_Temple_as_per_list_of_State_Protected_Monuments_in_Odisha._Serial_Number_S-OR-105.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pratap555 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Front view from left side of Viraja(also named as Biraja) Temple as per list of State Protected Monuments in Odisha. Serial Number S-OR-105',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Biraja_Temple%2C_Jajpur%2C_Odisha%2C_India%2C_13th_century.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Odisha1 / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Biraja Temple, Jajpur, Odisha, India, 13th century',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Maa_Biraja_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Krupasindhu Muduli / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Maa Biraja Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Back_view_of_Viraja%28also_named_as_Biraja%29_Temple_as_per_list_of_State_Protected_Monuments_in_Odisha._Serial_Number_S-OR-105.jpg/3840px-Back_view_of_Viraja%28also_named_as_Biraja%29_Temple_as_per_list_of_State_Protected_Monuments_in_Odisha._Serial_Number_S-OR-105.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pratap555 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Back view of Viraja(also named as Biraja) Temple as per list of State Protected Monuments in Odisha. Serial Number S-OR-105',
    },
  ],
  'guhyeshwari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Guhyeshwari_Toran.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Jujubhaju / Wikimedia Commons (CC0)',
      alt: 'Guhyeshwari Toran',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Guhyeshwari_Shaktipeeth_Temple.jpg/3840px-Guhyeshwari_Shaktipeeth_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gaurav Dhwaj Khadka / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Guhyeshwari Shaktipeeth Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Guhyeshwari_Temple_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana_%2828%29.jpg/3840px-Guhyeshwari_Temple_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana_%2828%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Rajesh Dhungana / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Guhyeshwari Temple Pashupatinath Kathmandu Nepal Rajesh Dhungana (28)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Guhyeshwari_Temple_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana_%2817%29.jpg/3840px-Guhyeshwari_Temple_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana_%2817%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Rajesh Dhungana / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Guhyeshwari Temple Pashupatinath Kathmandu Nepal Rajesh Dhungana (17)',
    },
  ],
  'muktinath': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Muktinath_Temple_%281%29.jpg/3840px-Muktinath_Temple_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Faj2323 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Muktinath Temple (1)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Image_of_Muktinath_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ushanpathak / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Image of Muktinath temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Muktinath_Main_Temple_in_2023_-_IMG_3740.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Nepal Trek Adventures / Wikimedia Commons (CC BY 4.0)',
      alt: 'Muktinath Main Temple in 2023 - IMG 3740',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Muktinath_Temple%2C_Mustang%2C_Nepal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Krish Dulal / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Muktinath Temple, Mustang, Nepal',
    },
  ],
  'saptashrungi': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Goddess_Saptashrungi_Devi_Temple1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'AmitUdeshi / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Goddess Saptashrungi Devi Temple1',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Saptashrungi_temple.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Dharmadhyaksha / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Saptashrungi temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Goddess_Saptashrungi_Devi_Temple..jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'AmitUdeshi / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Goddess Saptashrungi Devi Temple.',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Shops_at_Saptashrungi_01.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Dharmadhyaksha / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Shops at Saptashrungi 01',
    },
  ],
  'kankalitala': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_05.jpg/3840px-Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kankalitala Temple complex, Birbhum, West Bengal 05',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_06.jpg/3840px-Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kankalitala Temple complex, Birbhum, West Bengal 06',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_07.jpg/3840px-Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kankalitala Temple complex, Birbhum, West Bengal 07',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_08.jpg/3840px-Kankalitala_Temple_complex%2C_Birbhum%2C_West_Bengal_08.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kankalitala Temple complex, Birbhum, West Bengal 08',
    },
  ],
  'kanyakumari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/The_Kanyakumari_temple.jpg/3840px-The_Kanyakumari_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Prashant Kharote / Wikimedia Commons (CC BY 4.0)',
      alt: 'The Kanyakumari temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Kanyakumari_Vivekananda_Swami_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Sujithshivam511 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kanyakumari Vivekananda Swami temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kanyakumari_vivekananda_temple_3.jpg/3840px-Kanyakumari_vivekananda_temple_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Mujeebcpy / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kanyakumari vivekananda temple 3',
    },
  ],
  'bajreshwari-kangra': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Shri_Bajreshwari_temple_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Glasreifen / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Bajreshwari temple 1',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Shri_Bajreshwari_temple_8_Lions.jpg/3840px-Shri_Bajreshwari_temple_8_Lions.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Glasreifen / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Bajreshwari temple 8 Lions',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Shri_Bajreshwari_temple_7_entry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Glasreifen / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Bajreshwari temple 7 entry',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Shri_Bajreshwari_temple_6.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Glasreifen / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Shri Bajreshwari temple 6',
    },
  ],
  'kiriteswari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kiriteswari_Temple.jpg/3840px-Kiriteswari_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kiriteswari Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Kiriteswari_Temple3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Royroydeb / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kiriteswari Temple3',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kiriteswari_Temple4.jpg/3840px-Kiriteswari_Temple4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Royroydeb / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kiriteswari Temple4',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Kiriteswari_Temple1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Royroydeb / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Kiriteswari Temple1',
    },
  ],
  'ratnavali': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/ANANDAMAYI_TALA_KALI_MANDIR_KRISHNANAGAR_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      credit: 'Wikimedia Commons contributor / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'ANANDAMAYI TALA KALI MANDIR KRISHNANAGAR - panoramio',
    },
  ],
  'bhramari-jalpaiguri': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Jora_Banyan_tree_in_Bhramari_Devi_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'SayandeepDutta / Wikimedia Commons (CC BY 4.0)',
      alt: 'Jora Banyan tree in Bhramari Devi Temple',
    },
  ],
  'manasarovar-kailash': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Manasarovar_with_small_temples.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Andy Engelson / Wikimedia Commons (CC BY 2.0)',
      alt: 'Manasarovar with small temples',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Kailash_stupa_and_temples%2C_Manasarovar_pilgrimage_trail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Andy Engelson / Wikimedia Commons (CC BY 2.0)',
      alt: 'Kailash stupa and temples, Manasarovar pilgrimage trail',
    },
  ],
  'jayanti-nartiang': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Jayanti_Rao_visible_from_temple-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'OPMaurya / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Jayanti Rao visible from temple-1',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Jyanti_Majri_temple_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Harvinder Chandigarh / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Jyanti Majri temple 02',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/View_from_the_stairs%2C_coming_down_the_temple_stairs%2C_Jayanti_Devi_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'OPMaurya / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'View from the stairs, coming down the temple stairs, Jayanti Devi temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Jayanti_Rao_visible_from_temple-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'OPMaurya / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Jayanti Rao visible from temple-2',
    },
  ],
  'jeshoreshwari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/%E0%A6%AF%E0%A6%B6%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%80_%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0%2C_%E0%A6%88%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%80%E0%A6%AA%E0%A7%81%E0%A6%B0%2C_%E0%A6%B6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A6%A8%E0%A6%97%E0%A6%B0%2C_%E0%A6%B8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%80%E0%A6%B0%E0%A6%BE%2C_%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A5%A4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'নিওফাইট / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'যশোরেশ্বরী কালী মন্দির, ঈশ্বরীপুর, শ্যামনগর, সাতক্ষীরা, বাংলাদেশ।',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/%E0%A6%AF%E0%A6%B6%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%80_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0%2C_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'N Islam Photography / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'যশোরেশ্বরী মন্দির, 01',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0%E0%A7%87%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%A8%E0%A7%87_%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87.jpg/3840px-%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0%E0%A7%87%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%A8%E0%A7%87_%E0%A6%A5%E0%A7%87%E0%A6%95%E0%A7%87.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'কুমার দীপ / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'মন্দিরের সামনে থেকে',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jessoreshory_temple.jpg/3840px-Jessoreshory_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Iqbal Mahmud Nayan / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Jessoreshory temple',
    },
  ],
  'naina-devi': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Naina_Devi_Temple%2C_Himachal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'https://www.flickr.com/photos/ramansharma/ / Wikimedia Commons (CC BY 2.0)',
      alt: 'Naina Devi Temple, Himachal',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dhoona_at_mata_naina_devi_mandir.jpg/3840px-Dhoona_at_mata_naina_devi_mandir.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Gurlal Maan / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Dhoona at mata naina devi mandir',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Pilgrims_from_Nawanshehr%2C_Punjab_carring_eternal_flame_to_Naina_Devi_temple_via_bus%2C_Himachal_Pradesh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Shimla Deities / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Pilgrims from Nawanshehr, Punjab carring eternal flame to Naina Devi temple via bus, Himachal Pradesh',
    },
  ],
  'narmada-amarkantak': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/0010522_Narmada_Mandir_Complex%2C_Amarkantak_019.jpg/3840px-0010522_Narmada_Mandir_Complex%2C_Amarkantak_019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0010522 Narmada Mandir Complex, Amarkantak 019',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Amarkantak_narmada_temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Sonu monu / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Amarkantak narmada temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/0010522_Narmada_Mandir_Complex%2C_Amarkantak_036.jpg/3840px-0010522_Narmada_Mandir_Complex%2C_Amarkantak_036.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0010522 Narmada Mandir Complex, Amarkantak 036',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/0010522_Narmada_Mandir_Complex%2C_Amarkantak_087.jpg/3840px-0010522_Narmada_Mandir_Complex%2C_Amarkantak_087.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0010522 Narmada Mandir Complex, Amarkantak 087',
    },
  ],
  'bhramaramba-srisailam': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/2025_West_Gopuram_behind_Bhramaramba_temple_in_Srisailam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Adityamadhav83 / Wikimedia Commons (CC BY 4.0)',
      alt: '2025 West Gopuram behind Bhramaramba temple in Srisailam',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Pedakakani_Temple_%28Sri_Bhramaramba_Malleswara_Swamy_Temple%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Muralikrishna m / Wikimedia Commons (CC BY 4.0)',
      alt: 'Pedakakani Temple (Sri Bhramaramba Malleswara Swamy Temple)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/2025_West_Gopuram_and_Bhramaramba_Devi_temple_view_in_Srisailam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Adityamadhav83 / Wikimedia Commons (CC BY 4.0)',
      alt: '2025 West Gopuram and Bhramaramba Devi temple view in Srisailam',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kalasas_on_Bhramaramba_Mallikarjuna_Temple%27s_Gopuram.JPG/3840px-Kalasas_on_Bhramaramba_Mallikarjuna_Temple%27s_Gopuram.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Anand t83 / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Kalasas on Bhramaramba Mallikarjuna Temple\'s Gopuram',
    },
  ],
  'manikyamba-draksharamam': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Manikyamba_Ammavari_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Kamalika Basu / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Manikyamba Ammavari Temple',
    },
  ],
  'nandikeshwari-sainthia': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Goddess_Nandikeshwari.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Indraprakashinfo / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Goddess Nandikeshwari',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Nakdikeshwari_Idol.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Indraprakashinfo / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Nakdikeshwari Idol',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Statue_of_horses_in_Sainthia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Indraprakashinfo / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Statue of horses in Sainthia',
    },
  ],
  'sugandha': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Goddess_Ugratara.jpg/1920px-Goddess_Ugratara.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'অভিজিৎ দাস / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Goddess Ugratara',
    },
  ],
  'tripura-sundari-udaipur': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Tripura_Sundari_Temple.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Bodhisattwa / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tripura Sundari Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Tripura_Sundari_Temple%2C_Udaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Soman / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Tripura Sundari Temple, Udaipur',
    },
  ],
  'mangal-chandika-ujaani': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Mangalchandi_Temple%2C_Ujani_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
      credit: 'Jonoikobangali / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Mangalchandi Temple, Ujani (2)',
    },
  ],
  'bargabhima-vibhash': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bargabhima%2C_the_ancient_temple_of_Tamluk_in_Purba_Medinipur_district_22.jpg/3840px-Bargabhima%2C_the_ancient_temple_of_Tamluk_in_Purba_Medinipur_district_22.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bargabhima, the ancient temple of Tamluk in Purba Medinipur district 22',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Bargabhima%2C_the_ancient_temple_of_Tamluk_in_Purba_Medinipur_district_19.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bargabhima, the ancient temple of Tamluk in Purba Medinipur district 19',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Bargabhima%2C_the_ancient_temple_of_Tamluk_in_Purba_Medinipur_district_09.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bargabhima, the ancient temple of Tamluk in Purba Medinipur district 09',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Bargabhima%2C_the_ancient_temple_of_Tamluk_in_Purba_Medinipur_district_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pinakpani / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Bargabhima, the ancient temple of Tamluk in Purba Medinipur district 16',
    },
  ],
  'vaidyanath-shakti-peetha': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Baba_Baidyanath_Jyotirlinga_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Flashthomsom / Wikimedia Commons (CC0)',
      alt: 'Baba Baidyanath Jyotirlinga Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Prime_Minister_Narendra_Modi_at_Baba_Baidyanath_Temple_in_Deoghar%2C_Jharkhand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Prime Minister\'s Office / Wikimedia Commons (GODL-India)',
      alt: 'Prime Minister Narendra Modi at Baba Baidyanath Temple in Deoghar, Jharkhand',
    },
  ],
  'danteshwari-dantewada': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/0011122_Dantewada_Danteswari_Mata_Mandir_Chattisgarh_060.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ms Sarah Welch / Wikimedia Commons (CC0)',
      alt: '0011122 Dantewada Danteswari Mata Mandir Chattisgarh 060',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Danteshwari_Temple_%2C_Jagdalpur.jpg/3840px-Danteshwari_Temple_%2C_Jagdalpur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Rajeshjena453 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Danteshwari Temple , Jagdalpur',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Maa_Danteswari_Mandir_Front.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Riskyishwar / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Maa Danteswari Mandir Front',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Danteswari_Temple_0034.jpg/3840px-Danteswari_Temple_0034.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ratnesh1948 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Danteswari Temple 0034',
    },
  ],
  'tara-tarini': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Tara_Tarini_Temple_Ganjam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Government of Odisha / Wikimedia Commons (CC BY 4.0)',
      alt: 'Tara Tarini Temple Ganjam',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tara_Tarini_temple_Of_Ganjam%2C_Odisha.jpg/3840px-Tara_Tarini_temple_Of_Ganjam%2C_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Arpita Tripathy / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tara Tarini temple Of Ganjam, Odisha',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Taratarini_maa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Nayansatya / Wikimedia Commons (CC BY 3.0)',
      alt: 'Taratarini maa',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Taratarini_Temple%2C_Odisha.jpg/3840px-Taratarini_Temple%2C_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Nibedit / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Taratarini Temple, Odisha',
    },
  ],
  'nalhateswari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Nalateswari_Temple_03.jpg/3840px-Nalateswari_Temple_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Tarunsamanta / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Nalateswari Temple 03',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Nalateswari_Temple_at_Nalhati%2C_Birbhum_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pinakpani / Wikimedia Commons (CC BY 4.0)',
      alt: 'Nalateswari Temple at Nalhati, Birbhum 04',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Nalateswari_Temple_at_Nalhati%2C_Birbhum_07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pinakpani / Wikimedia Commons (CC BY 4.0)',
      alt: 'Nalateswari Temple at Nalhati, Birbhum 07',
    },
  ],
  'shankari-trincomalee': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Trincomalee%2C_Temple_Koneswaram_consacr%C3%A9_%C3%A0_Vishnou.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Pierre André Leclercq / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Trincomalee, Temple Koneswaram consacré à Vishnou',
    },
  ],
  'dhakeshwari': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Shiva_temples_Dhakeshwari_Mandir_2_by_Ragib_Hasan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ragib Hasan / Wikimedia Commons (CC BY 2.5)',
      alt: 'Shiva temples Dhakeshwari Mandir 2 by Ragib Hasan',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dhakeshwari_National_Temple_Complex_-_360_Degree_View_-_Dhaka_2015-05-31_2668-2680_Compress.JPG/3840px-Dhakeshwari_National_Temple_Complex_-_360_Degree_View_-_Dhaka_2015-05-31_2668-2680_Compress.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Biswarup Ganguly / Wikimedia Commons (CC BY 3.0)',
      alt: 'Dhakeshwari National Temple Complex - 360 Degree View - Dhaka 2015-05-31 2668-2680 Compress',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Dhakeshwari_temple_main_structure_from_side_by_Ragib_Hasan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ragib Hasan / Wikimedia Commons (CC BY 2.5)',
      alt: 'Dhakeshwari temple main structure from side by Ragib Hasan',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Dhakeshwari_temple_compound_entrance_by_Ragib_Hasan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Ragib Hasan / Wikimedia Commons (CC BY 2.5)',
      alt: 'Dhakeshwari temple compound entrance by Ragib Hasan',
    },
  ],
  'chinnamastika-chintpurni': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Chintpurni_Devi_%281%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Guptaele / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Chintpurni Devi (1)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Chintpurni_Devi_%2829%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Guptaele / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Chintpurni Devi (29)',
    },
  ],
  'aranya-devi-arrah': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Aranya_Devi_Temple%2C_Arrah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'JaggaDaaku / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Aranya Devi Temple, Arrah',
    },
  ],
  'tuljabhavani': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Tuljabhavani_Mandir_Mahadwar_%28Main_entrance_gate%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Anjali Sajan / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Tuljabhavani Mandir Mahadwar (Main entrance gate)',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Tuljabhavani_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'अरविंद धरेप्पा बगले / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tuljabhavani 4',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Tuljabhavani_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'अरविंद धरेप्पा बगले / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tuljabhavani 5',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Tuljabhavani_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'अरविंद धरेप्पा बगले / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Tuljabhavani 2',
    },
  ],
  'vaishno-devi': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mata_Vaishno_Devi_Mandir%2C_Katra.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Lpp3535 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Mata Vaishno Devi Mandir, Katra',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vaishno_Devi_temple_complex_at_night.jpg/3840px-Vaishno_Devi_temple_complex_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Ad47n / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Vaishno Devi temple complex at night',
    },
  ],
  'chandranath-chittagong': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chandranath_Temple_2019-01-16_%2827%29.jpg/3840px-Chandranath_Temple_2019-01-16_%2827%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Shahidul Hasan Roman / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Chandranath Temple 2019-01-16 (27)',
    },
  ],
  'rajarajeshwari-bengaluru': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sri_Rajarajeshwari_Temple_%2C_Bangalore_._05.jpg/1920px-Sri_Rajarajeshwari_Temple_%2C_Bangalore_._05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'Harvinder Chandigarh / Wikimedia Commons (CC BY 4.0)',
      alt: 'Sri Rajarajeshwari Temple , Bangalore . 05',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Arch_of_Rajarajeshwari_Temple%2C_Bangalore_%282025%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Gpkp / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Arch of Rajarajeshwari Temple, Bangalore (2025)',
    },
  ],
};
