import type { GalleryImage } from './types';

// Deity/idol close-ups, separate from templeImages.ts (temple architecture). Sourced from
// Wikimedia Commons via the API. Kept deliberately small: most Commons deity-idol photography
// for these regional shrines could not be location-verified against the specific temple this
// platform describes (common Devi names collide across many unrelated shrines), so only
// entries whose file title unambiguously names this exact temple were kept.
export const deityImages: Record<string, GalleryImage[]> = {
  'bahula': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Ma_Bahula%2C_Shri_Bahula_Shaktipeeth_Temple%2C_Ketugram.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Romam1988 / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Ma Bahula, Shri Bahula Shaktipeeth Temple, Ketugram',
    },
  ],
  'jayanti-nartiang': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Jayanti_Devi_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'OPMaurya / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'Jayanti Devi Temple',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/View_from_top_of_Jayanti_Devi_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'OPMaurya / Wikimedia Commons (CC BY-SA 3.0)',
      alt: 'View from top of Jayanti Devi Temple',
    },
  ],
  'narmada-amarkantak': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/NARMADA_DEVI_MAIN_TEMPLE%2C_AMARKANTAK._-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Kailash Mohankar / Wikimedia Commons (CC BY 3.0)',
      alt: 'NARMADA DEVI MAIN TEMPLE, AMARKANTAK. - panoramio',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Narmada_Devi_Temple_..inMadhya_Pradesh_where_river_Narmada_originates.jpg/3840px-Narmada_Devi_Temple_..inMadhya_Pradesh_where_river_Narmada_originates.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
      credit: 'VINEETjangir / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Narmada Devi Temple ..inMadhya Pradesh where river Narmada originates',
    },
  ],
  'manikyamba-draksharamam': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Manikyamba_Ammavari_Temple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Kamalika Basu / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Manikyamba Ammavari Temple',
    },
  ],
  'tara-tarini': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Taratarini_maa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Nayansatya / Wikimedia Commons (CC BY 3.0)',
      alt: 'Taratarini maa',
    },
  ],
  'chinnamastika-chintpurni': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Jai_Mata_Di...Maa_Chintpurni%27s_Durbar_as_seen_from_the_ancient_havan_kund_on_left.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Gopal Aggarwal from India / Wikimedia Commons (CC BY 2.0)',
      alt: 'Jai Mata Di...Maa Chintpurni\'s Durbar as seen from the ancient havan kund on left',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Devotees_tie_red_crimson_threads_on_making_a_wish%2C_and_come_back_and_untie_when_fulfilled...Jai_Mata_Di.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Gopal Aggarwal from India / Wikimedia Commons (CC BY 2.0)',
      alt: 'Devotees tie red crimson threads on making a wish, and come back and untie when fulfilled...Jai Mata Di',
    },
  ],
  'jogadya': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Paatala_Bhairavi_devi_Jogadya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
      credit: 'Bengali brahman boy / Wikimedia Commons (CC BY-SA 4.0)',
      alt: 'Paatala Bhairavi devi Jogadya',
    },
  ],
};
