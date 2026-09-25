/**
 * YAAZH THEATRE & RESEARCH FOUNDATION
 * blog.js — Blog listing, filtering, search, and full article reader modal
 */

'use strict';

const BLOG_POSTS = [
  {
    id: 'therukoothu',
    title: 'Therukoothu Training Workshop & Performance',
    tamilTitle: 'தெருக்கூத்துப் பயிற்சிப் பட்டறை & அரங்கேற்றம்',
    category: 'folk',
    categoryLabel: 'Folk Arts & Koothu',
    date: 'January 2024',
    publishedDate: 'September 21, 2026',
    duration: '10-Day Workshop + 2 Shows',
    readTime: '4 min read',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsQ1H_oAS2czPeY9ADNIeQO6izuMuxtDQMNwpNYilfoDbtg6XqfnPOMhEj4eYvFMN_hx6M3QTiJzTAsimZRdoFiRQw4M3FYM5NRWU87YJM3IgpfAiZWG2dDrlH1iIAXRo3xmrns98fWn9v2C7dP9tUSkTjxUO4xhANZqJF7MtFP1A5oJbqLn1SPAuOW3uH/s1600/WhatsApp%20Image%202024-01-09%20at%2020.48.48.jpeg',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsQ1H_oAS2czPeY9ADNIeQO6izuMuxtDQMNwpNYilfoDbtg6XqfnPOMhEj4eYvFMN_hx6M3QTiJzTAsimZRdoFiRQw4M3FYM5NRWU87YJM3IgpfAiZWG2dDrlH1iIAXRo3xmrns98fWn9v2C7dP9tUSkTjxUO4xhANZqJF7MtFP1A5oJbqLn1SPAuOW3uH/s1600/WhatsApp%20Image%202024-01-09%20at%2020.48.48.jpeg'
    ],
    blogspotUrl: 'https://yaazhtheatre.blogspot.com/2026/09/therukoothu-training-workshop-and.html',
    director: 'Dr. G. Gobi',
    production: 'Yaazh Theatre and Research Foundation',
    participants: '16 Artists (5 Female, 11 Male)',
    synopsis: 'A groundbreaking 10-day intensive residential workshop and public performance series handing over Therukoothu—the pioneering traditional art form of Tamil theatre—to the younger generation, completely free of cost for marginalized youth.',
    fullContent: {
      lead: '"Handing over Therukoothu, the pioneering art form of Tamil theatre, to the younger generation through intensive training and public community performances."',
      sections: [
        {
          title: 'Objectives & Social Impact',
          text: `Yaazh Theatre and Research Foundation in Puducherry continuously functions through theatre performances, theatre training programs, and theatre-related research. Under this mission, we initiated a landmark project to transmit Therukoothu directly to aspiring young dramatists.\n\nThrough this initiative, traditional Therukoothu masters journey onto formal teaching platforms to establish their own koothu schools. For the young generation, this training transforms their acting craft by immersing them in native Tamil musical, physical, and rhythmic performance methods, instilling deep respect for traditional labor and artistic grandeur.`
        },
        {
          title: 'Free Access For Marginalized Youth',
          text: `This training workshop was conducted entirely as a free project. Yaazh firmly believes that no economically challenged or marginalized student should ever be excluded from exploring and mastering heritage performing arts.`
        },
        {
          title: 'Workshop & Public Performance Records',
          infoBoxes: [
            { label: 'Training Period', val: 'Last 10 days of January 2024' },
            { label: 'Participants', val: '16 Students (5 Female & 11 Male)' },
            { label: 'First Performance', val: 'Art & Craft Village, Ariyankuppam, Puducherry (03.02.2024)' },
            { label: 'Second Performance', val: 'Manthaiveli Ground, Kirumampakkam, Puducherry' }
          ]
        },
        {
          title: 'Instructors & Mentorship',
          list: [
            'A. Senthil — Master Instructor',
            'A. Govindaraj (Sri Senthilkumaran Nadaga Sabha, Karasanur) — Master Instructor',
            'Avinash Santosh (Sri Mayilam Murugan Nadaga Sabai & Therukoothu Training School) — Instructor',
            'M. Adhiraman (State President, I.P.T.A., Puducherry) — Workshop Guidance',
            'Dr. V. Arumugam (Retired Professor, Dept. of Performing Arts, Puducherry) — Academic Advisor',
            'Dr. G. Gobi (Founder & Director, Yaazh Theatre) — Workshop Director'
          ]
        }
      ]
    }
  },
  {
    id: 'savithiribai',
    title: 'Naan Savithiribaiyai Padikiren (I am Reading Savithiribai)',
    tamilTitle: 'நான் சாவித்திரிபாயைப் படிக்கிறேன்',
    category: 'solo',
    categoryLabel: 'Solo Performance',
    date: 'Premiered 2018 / Touring 2026',
    publishedDate: 'September 20, 2026',
    duration: '60 minutes',
    readTime: '5 min read',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZVvOw1znoh2ecv98OKmI5uI-TNkLo7yTJ3eiuVM4ymMin8GswWpVRw2gTBAK7ZjSCFHOSsaUOteg0Rch1ivm_Iz_ymp2cAevnL2fRaLzlTaCIlq-ttQAjy5NLJ5b7W-rmS3VbsCvC1vQlMf6q5nBqUTUjVMiHlRtwZblLk9ill21eDnRwj9uf7Ieb6h2k/s1600/72172458_136146974443140_2478593641900146688_n.jpg',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZVvOw1znoh2ecv98OKmI5uI-TNkLo7yTJ3eiuVM4ymMin8GswWpVRw2gTBAK7ZjSCFHOSsaUOteg0Rch1ivm_Iz_ymp2cAevnL2fRaLzlTaCIlq-ttQAjy5NLJ5b7W-rmS3VbsCvC1vQlMf6q5nBqUTUjVMiHlRtwZblLk9ill21eDnRwj9uf7Ieb6h2k/s1600/72172458_136146974443140_2478593641900146688_n.jpg'
    ],
    blogspotUrl: 'https://yaazhtheatre.blogspot.com/2026/09/naan-savithiribaiyai-padikiren-i-am.html',
    actor: 'P. Arokia Mary Stella',
    production: 'Yaazh Theatre and Research Foundation',
    synopsis: 'A critically acclaimed solo performance portraying the revolutionary life, defiance, and enduring message of Savitribai Phule—pioneer of women’s education in India and champion of social justice.',
    fullContent: {
      lead: '"Battling the rigid social structure, Savitribai not only opened India\'s first school for girls, but also raised her voice against oppression, igniting the eternal clarion call for equality and dignity."',
      sections: [
        {
          title: 'Synopsis of the Play',
          text: `"NAAN SAVITHIRIBAIYAI PADIKIREN (I am Reading Savithiribai)" is a solo performance play performed by P. Arokia Mary Stella, an eminent actor of Tamil modern theatre and a senior actor of Yaazh Theatre group.\n\nThis play is based on the life and thought of Savitribai Phule, the monumental social reformer who pioneered women\'s education and founded the first girls\' school in India. Ahead of her time in both intellect and action, her fearless stand against orthodox conservatism and caste hierarchies paved the road toward equality, universal education, and fundamental human rights.\n\nThis performance text highlights her historic struggle and finds poignant echoes in contemporary society. It has been performed for teachers, development sectors, grassroots rural audiences, literature festivals, and national theatre summits.`
        },
        {
          title: 'Key Production Details',
          infoBoxes: [
            { label: 'Performer', val: 'P. Arokia Mary Stella' },
            { label: 'Duration', val: '60 Minutes (Solo Performance)' },
            { label: 'Language', val: 'Tamil' },
            { label: 'First Attempt', val: 'First-ever solo theatrical series on Savitribai in Tamil' }
          ]
        },
        {
          title: 'Major Performance History',
          list: [
            '6th Theatre Festival, Maatru Nataka Iyyakam, Tirupattur, Tamil Nadu (2018)',
            'Navarang National Theatre Festival, Palakkad, Kerala (2019)',
            'South Indian People’s Theatre Festival, Chennai, Tamil Nadu (2019)',
            'Dhamma Theatre Festival, Neelam Art & Cultural Center, Chennai (2022)',
            'Thiruchi Book Fair 2024, Govt. of Tamil Nadu, Thiruchi (2024)',
            'Chennai Literature Festival 2024, Govt. of Tamil Nadu, Chennai (2024)',
            'Purisai National Theatre Festival, Purisai Kannappa Thambiran School, Vanthavasi (2024)',
            'Chennai Language Festival 5th Edition, DakshinaChitra Heritage Museum, Chennai (2025)'
          ]
        }
      ]
    }
  },
  {
    id: 'athi-naveena',
    title: 'Athi Naveena Kazhivarai (The Ultra-Modern Toilet)',
    tamilTitle: 'அதி நவீன கழிவறை',
    category: 'satire',
    categoryLabel: 'Political & Social Satire',
    date: 'October 2022',
    publishedDate: 'September 20, 2026',
    duration: 'Full-Length Production',
    readTime: '5 min read',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP0PBX-ZYK8rLc4Lqx1MnJYBk4tN5Jbjj9ghfmjZmMbtVZFPCjjwQM8qMCxOIb4MIZvczBf6mjy88N4egc8-GwZivDEzctdgg7RFgAQTboAshx186aNXWPT_NU7jn-DQZbTNcz0-OadgGwCBsFmpEImS_YZEiofhJOdnQ3OPBFrfFlbLYcAL90Aplavz0a/s1280/IMG-20221030-WA0056.jpg.jpeg',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP0PBX-ZYK8rLc4Lqx1MnJYBk4tN5Jbjj9ghfmjZmMbtVZFPCjjwQM8qMCxOIb4MIZvczBf6mjy88N4egc8-GwZivDEzctdgg7RFgAQTboAshx186aNXWPT_NU7jn-DQZbTNcz0-OadgGwCBsFmpEImS_YZEiofhJOdnQ3OPBFrfFlbLYcAL90Aplavz0a/s1280/IMG-20221030-WA0056.jpg.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4zyHnsAQNjGBl4SdDpnjWZhqEkiqMw1h-jm1_qoah9c3oXnBKEDV-Tzig3cQqmGqyP3k4Oes816Fv7L2c5Rx-FLM5YjR4SgI74b33_fxx3dd5t33CoIxgtk78tNb_jjyfhRlCzU9jlHaJ2__g0hvpQJFrJDVkcUVjZ-VXy29bgwcy8M9Kr5Jff5WfSth0/s1280/IMG-20221030-WA0032.jpg.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpbqpaivZ4GzFVYRMIkpntpeKa_lp5UC6fvAzePxVB2hDx3cRkDOMR-jd_xvYuxF6qorp_lne4JV_iVtYAJUDf8c4rgGh7T5tEkKp3G0RgLEb__e9ID84WgzBK9k2rcOCWS2aZmOAPoaMpy2uYosntIvTH1kO7xm3tUwqSgrxoitNM36f67h0etdPOo3lr/s1280/IMG-20221030-WA0029.jpg.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDlp6x8ILVoNKxO38BSv0n8iGqTK7fEGKObPrtxCWJC-yWKcv2qG1QT4Pc_9VkYdfuqdcCvxtD_JygLOMDtGkx7qPsnV-uVP_rmJy_WnW8bSaInRSQtNDmVV6b84KgtZwd_l80MuVeJIFhSBglxfR2ALyI1fJ9S93lTBkvtH4DA1v7iUjvB0Q-LKUr92nb/s1280/IMG-20221030-WA0042.jpg.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlfHAYLdMMZMAjTKbK0JnfwNzDAhy47qwBrOlDe8rQFHDOuz2FTWcvGouHz_HQwS1tv6n8tpwxFJXNSJcvNY-1JgjEGfA56IjEfbay9Lawnlznxl8MsFZrl1-1lsfNaDt_kTeTB68JuqajY0eXWBE7rslJFDRVJOpZXqulJroqjDv2cKuwDP_-0-4Yr5oZ/s1280/IMG-20221030-WA0049.jpg.jpeg'
    ],
    blogspotUrl: 'https://yaazhtheatre.blogspot.com/2026/09/athi-naveena-kazhivarai-play-in-tamil.html',
    playwright: 'G. Gobi',
    director: 'G. Gobi',
    production: 'Yaazh Theatre and Research Foundation',
    synopsis: 'A stinging political and social satire questioning the blind worship of technological modernisation and automated "progress" at the cost of working-class dignity, employment, and human reality.',
    fullContent: {
      lead: '"Does true development lie in high-tech gadgetry and corporate simulation alone, or in building a society that respects human dignity, living wages, and real equality?"',
      sections: [
        {
          title: 'The Premise',
          text: `*The Ultra-Modern Toilet* is an explosive political satire exploring the impact of modernisation, blind obedience, bureaucratic hypocrisy, and the exploitation of ordinary workers carried out under the banner of "development."\n\nThe play revolves around Rasaq, a contract sanitation worker in the municipal Health Department. Dreaming of securing permanent employment, Rasaq is thrilled when an ambitious newly elected politician unveils a futuristic civic project: high-tech ultra-modern automated toilets featuring biometric sensors, digital flushing, and computerized voice assistance.`
        },
        {
          title: 'The Contradiction of Progress',
          text: `Rasaq is instructed to demonstrate this sophisticated toilet to the common public. However, beneath the glitz of foreign technology, bitter realities emerge: basic drinking water and sanitation remain broken elsewhere in the town, and a greedy private contractor schemes to replace human workers with recorded audio tapes.\n\nFearing unemployment, Rasaq and fellow workers are coerced into total silence. The play powerfully demonstrates how technology, disconnected from social ethics, becomes an apparatus of surveillance and dispossession.`
        },
        {
          title: 'Creative Credits',
          infoBoxes: [
            { label: 'Playwright & Director', val: 'Dr. G. Gobi' },
            { label: 'Production Body', val: 'Yaazh Theatre & Research Foundation' },
            { label: 'Theme', val: 'Modernization vs. Sanitation Labor Rights' },
            { label: 'Visual Format', val: 'Ensemble Physical Theatre & Satire' }
          ]
        }
      ]
    }
  },
  {
    id: 'meen-vaangalayo',
    title: 'Meen Vaangalayo Meen (Fish For Sale)',
    tamilTitle: 'மீன் வாங்கலையோ மீன்',
    category: 'children',
    categoryLabel: 'Children’s Theatre & Ecology',
    date: '2023 – 2026',
    publishedDate: 'September 19, 2026',
    duration: '50 minutes',
    readTime: '3 min read',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuVkQL0a6G8x5s26AHTSnDCWgFX1J_uBfu8rmlvchWWwfCYzaZAXQXyj2f4Ze5_cnUFNQabh6iX-W87NfyCm1han-X51wfe1tlEM4IH9idGTB26waKHPok_ET27xm6nk7gUEiqoQhd2dHiF0MXIO6EJSudNFGnrq-sf8iXAmgycz-9hW2lqrmWLN6ClTCX/s1280/_MG_0749.JPG',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuVkQL0a6G8x5s26AHTSnDCWgFX1J_uBfu8rmlvchWWwfCYzaZAXQXyj2f4Ze5_cnUFNQabh6iX-W87NfyCm1han-X51wfe1tlEM4IH9idGTB26waKHPok_ET27xm6nk7gUEiqoQhd2dHiF0MXIO6EJSudNFGnrq-sf8iXAmgycz-9hW2lqrmWLN6ClTCX/s1280/_MG_0749.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKUMeDMghFOkZFSeAJ2V1Asop8bHivV-l0B1D1SxTW9hqrSUMxPA9XNUZj_TnFFVsV31YoGBy2laUoaoP8ct2cbAcNnLunFfuJ2Ryjwpj_xODB7Cad7EDLZCDKqVJEAA03DQE50rhMklhtAvHaLQ8EwwG_LWYqVMNEgRJabo8jczctX1c7GpLwIT9Le2LQ/s1280/IMG_1363.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihrZP8SWqBJVLZpnN3zxOFI0ibENyxSjO36Ueqlh5IeecS7dbV95Jyvn8WBJ3lXuaQmz1z-Ha92ykD_1z1paFy3mMcIOMMpjkBsiWDzxOHZoqyal2G11j82JkKdnTzv8HqrPjVplI0vnrwwFClNFrBYa9pYowtvPt8iEbsqNNmmIG-jZ2xQyrG1v4p0aQl/s1280/IMG_1361.JPG'
    ],
    blogspotUrl: 'https://yaazhtheatre.blogspot.com/2026/09/meen-vaangalayo-meen-tamil-play.html',
    production: 'Yaazh Theatre and Research Foundation',
    milestone: 'Crossed 45+ shows in 2026',
    synopsis: 'An interactive, poetic children’s play celebrating the folklore and ecological wisdom of Neithal (coastal) fishermen, taking young audiences on an enchanting oceanic voyage through songs, dances, and fish fables.',
    fullContent: {
      lead: '"While wandering fishmongers calling out \'Meen Vaangalayo Meen\' disappear from modern city streets, their stories swim forever in the ocean of children’s dreams."',
      sections: [
        {
          title: 'The Story & Experiential Theatre',
          text: `This play revolves around two charismatic storyteller-fishermen belonging to the ancient Tamil Neithal landscape. As they roam from street to street selling their fish, they do not merely sell sea produce—they sell folk fables and aquatic adventures.\n\nThrough kinetic movements, songs, and immersive rhythm, the actors dance like fishes, inviting children into the playing circle to swim and flutter together across the open space. The performance sparks vibrant imaginative faculties, introducing children to marine ecology, the delicate lives of coastal communities, and climate sensitivity.`
        },
        {
          title: 'Performances Milestone',
          text: `In 2026, "Meen Vaangalayo Meen" triumphantly crossed over 45+ public, school, and community performances across Tamil Nadu and Puducherry, making it one of the most loved children\'s theatre productions.`
        },
        {
          title: 'Highlights',
          infoBoxes: [
            { label: 'Duration', val: '50 Minutes' },
            { label: 'Target Audience', val: 'Children, Families & Folk Art Lovers' },
            { label: 'Landscape Focus', val: 'Neithal (Tamil Coastal Ecology)' },
            { label: 'Milestone', val: '45+ Shows & Counting' }
          ]
        }
      ]
    }
  },
  {
    id: 'muttai',
    title: 'MUTTAI (The Egg)',
    tamilTitle: 'முட்டை',
    category: 'social',
    categoryLabel: 'Social Commentary & Dark Comedy',
    date: '2019 – Present',
    publishedDate: 'September 19, 2026',
    duration: 'Full-Length Production',
    readTime: '6 min read',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE5yQQXm6nOPJvrtyCCcQy-7NUxDZBCcz2cMnyeD-gqXZTZTtjiFCpuDzhWWl2GN5FwUiS1hxl1CduDjl8aoh3qm8dQRkg_OHQ-6N5k-aYBu68jcZdwGjVAwRXnJsGM2FAEX70bV_kN27m0pPdBieZyQvF2yUkOx3feQfEL-qhK6VPyApNq0UWdx1PsN8O/s1280/IMG_4036.JPG',
    gallery: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE5yQQXm6nOPJvrtyCCcQy-7NUxDZBCcz2cMnyeD-gqXZTZTtjiFCpuDzhWWl2GN5FwUiS1hxl1CduDjl8aoh3qm8dQRkg_OHQ-6N5k-aYBu68jcZdwGjVAwRXnJsGM2FAEX70bV_kN27m0pPdBieZyQvF2yUkOx3feQfEL-qhK6VPyApNq0UWdx1PsN8O/s1280/IMG_4036.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOKZvFGba-5vsVOD1aaIGwxmlJzuJzZUXGBuz1qpDUFTQ39LCZfOJ_Ip6hrcDGzgSt_Tl82Q4tZXQdJOWE4YNQGI1iF_SdPBAjcruoBNtNnNGc8ItJTvfq8iGCL_BxxQIcWPQ7W0bu0Y82D-mcVrYd-oke48HmjCV32ZKsz_kYcswXBc9lHac7wM6M4Slm/s1280/IMG_3895.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZE4ROSdbY3CIIsLK36EdYGtTSX8meT8AEP_PVp-xhxL9xVeTjxwXRBTCcHu-xSQ93jV0AoTdlN4pm8zcTrbwqZt4qnWdUZz37fDRLLbMdGWYqv6-FMSX6SjzbtW9RsHE1by4n176b7EKV8LGCWa_A2eGWtNoJoqiw7SueyFJmsR3rbgqmShOnRa5jcrU5/s1280/IMG_4136.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWeaAWGATadOLNb26GsYNoKYzrzpy4pq3-EyBx5kNKoKQswOVBTV4uFBTQce4pStaHqjY-E8HPWd0Ozdhrt1_4bBCPQC7-396eop2B9pEiPUTVRlp49a6Aym9l0GRlYqu_78Q8qOr0QX_14Wk6xghANHahD5FIcev9Cz8SZLQoea80WDjApkmJ-HEhNvJ9/s1280/IMG_4498.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4H4yMSXhSYo-wNGOJFyETnXNA2KFZY8bnPrNSsf0oh5_PE8bYXSsemdhueVMm4zD529BLtDHdWyBKA-dMmze2ckXxeYteOcz-GDoXb-yT_1YeY9cONFf-wGwk8pF2eDYWVJD22jbVL8am6CDkSjv8SwVa5TJbyEvulDXm9wwmajiyK7g9eDuBCOQ-szC_/s1280/IMG_4155.JPG'
    ],
    blogspotUrl: 'https://yaazhtheatre.blogspot.com/2026/09/muttai-tamil-play.html',
    playwright: 'Prapanjan (Sahitya Akademi Awardee)',
    director: 'G. Gobi',
    production: 'Yaazh Theatre and Research Foundation',
    synopsis: 'A gripping social commentary adapted from legendary writer Prabanjan, exposing the corrupt mechanics of institutional power, everyday cowardice, and the cruel vulnerability of marginalized citizens caught in the police station machine.',
    fullContent: {
      lead: '"A shattered tray of eggs on a village street transforms into an indictment of societal hypocrisy and the dark machinery of unchecked power."',
      sections: [
        {
          title: 'The Dramatic Narrative',
          text: `Muttai is a socially piercing Tamil play based on the celebrated text of Sahitya Akademi awardee Prabanjan, directed by G. Gobi. It unmasks the fragility of everyday citizens against corrupt institutional machinery through four tragicomic scenes:\n\n1. **The Tea Shop Hypocrisy**: Four villagers passionately denounce the custodial death of a woman inside the local police post. But the moment the accused police inspector walks in, their defiance instantly wilts into obsequious flattery.\n\n2. **The Street Quarrel**: An old man riding an egg-laden bicycle collides with an affluent young motorcyclist. The trays smash, and an idle crowd quickly gathers to transform an old vendor\'s financial ruin into cheap street amusement.\n\n3. **The Police Enquiry**: At the station, the wealthy young man is let off upon paying a bribe, while the battered old egg seller is framed, coerced to buy cigarettes for constables, and thrown into the lockup.\n\n4. **Poovamma’s Cry**: The climactic scene where Poovamma visits her husband in custody, laying bare the terrifying abuse of state power and ordinary human vulnerability.`
        },
        {
          title: 'Major Performances',
          list: [
            'MUTTAI at Gopalankadai Village Cultural Festival (2019)',
            'MUTTAI at Kurunji Vizha, Art & Literature Festival, Ginjee (2019)',
            'Special invitational shows across academic and socio-cultural forums in Tamil Nadu & Puducherry'
          ]
        },
        {
          title: 'Production Team',
          infoBoxes: [
            { label: 'Script', val: 'Prapanjan (Sahitya Akademi Awardee)' },
            { label: 'Direction', val: 'Gobi' },
            { label: 'Genre', val: 'Dark Humour & Political Realism' },
            { label: 'Production', val: 'Yaazh Theatre & Research Foundation' }
          ]
        }
      ]
    }
  }
];

// Current state
let currentFilter = 'all';
let searchQuery = '';
let currentArticleIndex = 0;

function initBlog() {
  renderBlogPosts();
  initFilterTabs();
  initSearch();
  initModalListeners();
  checkUrlHash();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlog);
} else {
  initBlog();
}

// Render the blog grid
function renderBlogPosts() {
  const grid = document.getElementById('blog-grid');
  const emptyState = document.getElementById('blog-empty-state');
  if (!grid) return;

  const filtered = BLOG_POSTS.filter(post => {
    const matchesFilter = currentFilter === 'all' || post.category === currentFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      post.title.toLowerCase().includes(q) ||
      (post.tamilTitle && post.tamilTitle.toLowerCase().includes(q)) ||
      post.synopsis.toLowerCase().includes(q) ||
      (post.director && post.director.toLowerCase().includes(q)) ||
      (post.actor && post.actor.toLowerCase().includes(q)) ||
      (post.playwright && post.playwright.toLowerCase().includes(q)) ||
      post.categoryLabel.toLowerCase().includes(q)
    );
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.add('visible');
    return;
  }

  if (emptyState) emptyState.classList.remove('visible');

  grid.innerHTML = filtered.map((post, idx) => `
    <article class="blog-card" id="card-${post.id}" data-id="${post.id}">
      <div class="blog-card-thumb-wrap">
        <span class="blog-card-badge">${post.categoryLabel}</span>
        <img class="blog-card-thumb" src="${post.coverImage}" alt="${post.title}" loading="lazy" onerror="this.src='../assets/images/gallery-performance.png'">
        ${post.duration ? `<span class="blog-card-duration"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${post.duration}</span>` : ''}
      </div>

      <div class="blog-card-body">
        <div class="blog-meta-row">
          <span class="blog-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${post.date}
          </span>
          <span>•</span>
          <span class="blog-meta-item">${post.readTime}</span>
        </div>

        <h3 class="blog-card-title">${post.title}</h3>
        ${post.tamilTitle ? `<p class="font-literary" style="font-size:0.95rem;color:var(--gold);margin-bottom:0.6rem;">${post.tamilTitle}</p>` : ''}

        <p class="blog-card-synopsis">${post.synopsis}</p>

        <div class="blog-card-meta">
          <span>${post.director ? `Dir: <strong>${post.director}</strong>` : (post.actor ? `Actor: <strong>${post.actor}</strong>` : `Yaazh Foundation`)}</span>
          <span style="color:var(--text-muted);">${post.milestone || 'Archive'}</span>
        </div>

        <div class="blog-card-footer">
          <button class="btn btn-primary btn-read-post" onclick="openArticleModal('${post.id}')">
            Read Article
          </button>
          <a href="${post.blogspotUrl}" target="_blank" rel="noopener noreferrer" class="btn-external-post" title="View on Blogspot" aria-label="View on Blogspot">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// Filter tabs handling
function initFilterTabs() {
  const tabs = document.querySelectorAll('.blog-filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderBlogPosts();
    });
  });
}

// Search handling
function initSearch() {
  const input = document.getElementById('blog-search-input');
  if (!input) return;
  input.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderBlogPosts();
  });
}

// Open full article modal
window.openArticleModal = function(postId) {
  const postIndex = BLOG_POSTS.findIndex(p => p.id === postId);
  if (postIndex === -1) return;

  currentArticleIndex = postIndex;
  const post = BLOG_POSTS[postIndex];

  // Update hash
  if (window.history.pushState) {
    window.history.pushState(null, null, `#${post.id}`);
  } else {
    window.location.hash = post.id;
  }

  // Populate modal header
  document.getElementById('modal-post-category').textContent = post.categoryLabel;
  document.getElementById('modal-post-title').textContent = post.title;
  document.getElementById('modal-header-img').src = post.coverImage;
  document.getElementById('modal-header-img').onerror = function() {
    this.src = '../assets/images/gallery-performance.png';
  };

  const metaStrip = document.getElementById('modal-meta-strip');
  metaStrip.innerHTML = `
    <span><strong>Date:</strong> ${post.date}</span>
    <span>•</span>
    <span><strong>Published:</strong> ${post.publishedDate}</span>
    <span>•</span>
    <span><strong>Format:</strong> ${post.duration}</span>
    ${post.director ? `<span>•</span><span><strong>Direction:</strong> ${post.director}</span>` : ''}
    ${post.actor ? `<span>•</span><span><strong>Performer:</strong> ${post.actor}</span>` : ''}
  `;

  // Lead synopsis
  const leadEl = document.getElementById('modal-lead-synopsis');
  leadEl.innerHTML = post.fullContent.lead;

  // Sections
  const bodyContent = document.getElementById('modal-sections-wrap');
  let sectionsHtml = '';

  post.fullContent.sections.forEach(sec => {
    sectionsHtml += `<h4 class="article-section-heading">${sec.title}</h4>`;

    if (sec.text) {
      const paragraphs = sec.text.split('\n\n');
      sectionsHtml += `<div class="article-prose">${paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('')}</div>`;
    }

    if (sec.infoBoxes && sec.infoBoxes.length) {
      sectionsHtml += `
        <div class="article-info-grid">
          ${sec.infoBoxes.map(b => `
            <div class="article-info-box">
              <div class="article-info-box-label">${b.label}</div>
              <div class="article-info-box-val">${b.val}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (sec.list && sec.list.length) {
      sectionsHtml += `
        <ul class="article-list">
          ${sec.list.map((item, i) => `
            <li class="article-list-item">
              <span class="article-list-num">${i + 1}.</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      `;
    }
  });

  // Gallery
  if (post.gallery && post.gallery.length > 1) {
    sectionsHtml += `<h4 class="article-section-heading">Production Gallery</h4>`;
    sectionsHtml += `
      <div class="article-gallery-grid">
        ${post.gallery.map(img => `
          <div class="article-gallery-item">
            <img src="${img}" alt="${post.title}" loading="lazy" onerror="this.src='../assets/images/gallery-performance.png'">
          </div>
        `).join('')}
      </div>
    `;
  }

  bodyContent.innerHTML = sectionsHtml;

  // Blogspot direct link
  const blogspotLink = document.getElementById('modal-blogspot-link');
  if (blogspotLink) {
    blogspotLink.href = post.blogspotUrl;
  }

  // Prev / Next button state
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  if (prevBtn) prevBtn.disabled = currentArticleIndex === 0;
  if (nextBtn) nextBtn.disabled = currentArticleIndex === BLOG_POSTS.length - 1;

  // Show modal
  const modal = document.getElementById('article-reader-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll modal dialog to top
  const dialog = modal.querySelector('.article-modal-dialog');
  if (dialog) dialog.scrollTop = 0;
};

// Close modal
window.closeArticleModal = function() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  // Clean hash without reload
  if (window.history.pushState) {
    window.history.pushState(null, null, window.location.pathname);
  } else {
    window.location.hash = '';
  }
};

// Navigate to previous / next article
window.navigateArticle = function(direction) {
  const newIndex = currentArticleIndex + direction;
  if (newIndex >= 0 && newIndex < BLOG_POSTS.length) {
    openArticleModal(BLOG_POSTS[newIndex].id);
  }
};

// Copy article link to clipboard
window.copyArticleLink = function() {
  const post = BLOG_POSTS[currentArticleIndex];
  const url = window.location.origin + window.location.pathname + '#' + post.id;
  navigator.clipboard.writeText(url).then(() => {
    alert('Article link copied to clipboard!');
  }).catch(() => {
    prompt('Copy this link:', url);
  });
};

// Modal listeners
function initModalListeners() {
  const modal = document.getElementById('article-reader-modal');
  if (!modal) return;

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('article-modal-backdrop')) {
      closeArticleModal();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeArticleModal();
    }
  });
}

// Deep linking support
function checkUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const post = BLOG_POSTS.find(p => p.id === hash);
    if (post) {
      setTimeout(() => openArticleModal(post.id), 150);
    }
  }
}
