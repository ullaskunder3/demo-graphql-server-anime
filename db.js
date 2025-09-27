export const characters = [
  // One Piece
  {
    id: "1",
    name: "Monkey D. Luffy",
    role: "Captain",
    abilities: ["Gomu Gomu no Mi", "Haki", "Gear Second", "Gear Fourth"],
    episodes: ["1", "2", "5"],
  },
  {
    id: "2",
    name: "Roronoa Zoro",
    role: "Swordsman",
    abilities: ["Santoryu", "Asura", "Haki"],
    episodes: ["1", "3", "6"],
  },
  // Battle Through the Heavens
  {
    id: "3",
    name: "Xiao Yan",
    role: "Main Protagonist",
    abilities: ["Dou Qi", "Flame Power", "Heavenly Flames"],
    episodes: ["7", "8", "9"],
  },
  {
    id: "4",
    name: "Yao Lao",
    role: "Mentor",
    abilities: ["Alchemist", "Flame Master"],
    episodes: ["7", "8", "9"],
  },
  // Perfect World
  {
    id: "5",
    name: "Shi Hao",
    role: "Main Protagonist",
    abilities: ["Golden Body", "Dao of Heaven", "Celestial Demon"],
    episodes: ["10", "11", "12"],
  },
  // Renegade Immortal
  {
    id: "6",
    name: "Wang Lin",
    role: "Main Protagonist",
    abilities: ["Cultivation", "Soul Power", "Astral Strike"],
    episodes: ["13", "14", "15"],
  },
  {
    id: "7",
    name: "Mo Jian Chen",
    role: "Antagonist",
    abilities: ["Demonic Power", "Flame Mastery"],
    episodes: ["13", "14", "15"],
  },
  // One Piece (Continued)
  {
    id: "8",
    name: "Nami",
    role: "Navigator",
    abilities: ["Weather Manipulation", "Navigation"],
    episodes: ["2", "3", "6"],
  },
  // Battle Through the Heavens (Continued)
  {
    id: "9",
    name: "Xun Er",
    role: "Love Interest",
    abilities: ["Mystic Flame", "Alchemist"],
    episodes: ["7", "8", "9"],
  },
  // Perfect World (Continued)
  {
    id: "10",
    name: "Wu Da",
    role: "Fellow Cultivator",
    abilities: ["Physical Strength", "Heaven's Guidance"],
    episodes: ["10", "11", "12"],
  },
];

export const episodes = [
  // One Piece
  {
    id: "1",
    title: "I’m Luffy! The Man Who’s Gonna Be King of the Pirates!",
    description:
      "Luffy sets out to become the King of the Pirates and recruit his crew.",
    airDate: "1999-10-20",
    characters: ["1", "2"],
  },
  {
    id: "2",
    title: "Enter the Great Swordsman! Zoro",
    description:
      "Luffy meets Zoro, the swordsman, and saves him from the Marines.",
    airDate: "1999-10-27",
    characters: ["1", "2", "8"],
  },
  // Battle Through the Heavens
  {
    id: "7",
    title: "The Lost Flame",
    description:
      "Xiao Yan discovers his past power and uncovers secrets of his family's legacy.",
    airDate: "2017-09-03",
    characters: ["3", "4"],
  },
  {
    id: "8",
    title: "The Flame King’s Trial",
    description:
      "Xiao Yan faces an ancient trial to awaken the true power of the Heavenly Flames.",
    airDate: "2017-09-10",
    characters: ["3", "4", "9"],
  },
  // Perfect World
  {
    id: "10",
    title: "Rise of the Golden Body",
    description:
      "Shi Hao awakens his Golden Body and begins his journey to becoming a powerful cultivator.",
    airDate: "2016-10-01",
    characters: ["5", "10"],
  },
  {
    id: "11",
    title: "The Dao of Heaven’s Path",
    description:
      "Shi Hao seeks the Dao of Heaven and begins unlocking his hidden abilities.",
    airDate: "2016-10-08",
    characters: ["5"],
  },
  // Renegade Immortal
  {
    id: "13",
    title: "Wang Lin's First Battle",
    description:
      "Wang Lin faces his first battle after obtaining the power of cultivation.",
    airDate: "2018-11-11",
    characters: ["6", "7"],
  },
  {
    id: "14",
    title: "Demonic Powers Unleashed",
    description:
      "Wang Lin begins to tap into demonic powers after his intense training.",
    airDate: "2018-11-18",
    characters: ["6", "7"],
  },
  {
    id: "15",
    title: "The Immortal Realm’s First Trial",
    description:
      "Wang Lin enters the immortal realm and faces his first trial to advance his cultivation.",
    airDate: "2018-11-25",
    characters: ["6"],
  },
];

export const reviews = [
  // One Piece
  {
    id: "1",
    rating: 5,
    content:
      "This episode was a perfect start! Luffy's personality and Zoro’s fight were incredible.",
    episodeId: "1",
    viewerId: "1",
  },
  {
    id: "2",
    rating: 4,
    content:
      "Great episode, though the pacing felt a bit slow. Still, the character dynamics are fantastic.",
    episodeId: "2",
    viewerId: "2",
  },
  // Battle Through the Heavens
  {
    id: "3",
    rating: 5,
    content:
      "The battle scenes are just spectacular! Xiao Yan's powers are amazing!",
    episodeId: "7",
    viewerId: "3",
  },
  {
    id: "4",
    rating: 4,
    content:
      "The trial was intense. Xiao Yan’s growth is a highlight of the show.",
    episodeId: "8",
    viewerId: "4",
  },
  // Perfect World
  {
    id: "5",
    rating: 5,
    content:
      "Shi Hao’s Golden Body transformation was jaw-dropping! The stakes keep rising.",
    episodeId: "10",
    viewerId: "5",
  },
  {
    id: "6",
    rating: 4,
    content:
      "The Dao of Heaven's Path is an interesting concept, but I feel like the pacing could improve.",
    episodeId: "11",
    viewerId: "6",
  },
  // Renegade Immortal
  {
    id: "7",
    rating: 5,
    content:
      "Wang Lin's first battle was phenomenal! His cultivation path is one of the most intriguing.",
    episodeId: "13",
    viewerId: "7",
  },
  {
    id: "8",
    rating: 5,
    content:
      "The demonic powers are something else! Wang Lin’s journey is going to be epic.",
    episodeId: "14",
    viewerId: "8",
  },
  {
    id: "9",
    rating: 4,
    content:
      "I love the Immortal Realm’s trials. I’m excited to see how Wang Lin advances.",
    episodeId: "15",
    viewerId: "9",
  },
];

export const viewers = [
  {
    id: "1",
    name: "Ichiro Tanaka",
    favoriteCharacter: "Monkey D. Luffy",
    verified: true,
  },
  {
    id: "2",
    name: "Haruto Kimura",
    favoriteCharacter: "Roronoa Zoro",
    verified: false,
  },
  {
    id: "3",
    name: "Akira Yamada",
    favoriteCharacter: "Xiao Yan",
    verified: true,
  },
  {
    id: "4",
    name: "Mei Ling",
    favoriteCharacter: "Yao Lao",
    verified: false,
  },
  {
    id: "5",
    name: "Liu Wei",
    favoriteCharacter: "Shi Hao",
    verified: true,
  },
  {
    id: "6",
    name: "Jin Bao",
    favoriteCharacter: "Wu Da",
    verified: false,
  },
  {
    id: "7",
    name: "Lei Jun",
    favoriteCharacter: "Wang Lin",
    verified: true,
  },
  {
    id: "8",
    name: "Cheng Zhi",
    favoriteCharacter: "Mo Jian Chen",
    verified: false,
  },
  {
    id: "9",
    name: "Xian Li",
    favoriteCharacter: "Xun Er",
    verified: true,
  },
  {
    id: "10",
    name: "Qiu Lian",
    favoriteCharacter: "Nami",
    verified: true,
  },
];
