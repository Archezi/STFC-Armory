/*
 1. Origins Saru
 2. Cadet Hikaru Sulu
 3.
 4.
 5.
 6.
 7.
 8. 
*/

officers = [
  // Origins Saru *
  {
    name: "Origins Saru",
    grade: "Common ",
    portrait: "origins_saru.png",
    crew: "Discovery origins",
    faction: "Federation",
    class: "Science",
    description: [
      "Lieutenant Saru was born to a life of constant fear. His people, the Kelpiens, are a prey species on their home planet of Kaminar. No strangers to death, the Kelpiens have evolved to sense the presence of danger, a trait which has brought Saru no shortage of success... and pain.",
      "Saru did not share his people's apathy toward their place in the ecosystem. He resented being prey and sought to find a way out. Utilizing some broken alien technology, he managed to send a message out to the void, hoping that someone would hear it. Someone did.",
      "Captain Philippa Georgiou of the USS Shenzhou was impressed by Saru's ingenuity and his bravery. So impressed that she broke several Starfleet laws and offered him a place on her crew.",
      "Saru has spent the years since tirelessly working to earn the respect of his peers. He has risen through the ranks of Starfleet and was even assigned to the Shenzhou bridge as its Science Officer.",
    ],
    captainAbility: {
      abilityName: "Vigilant",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Origins Saru increases the Defense of all the Officers on the ship by 10.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5",
        },
      ],
    },
    officerAbility: {
      abilityName: "Prey Instinct",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription:
        "Origins Saru increases the Hull Health of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "12%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "15%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Cadet Hikaru Sulu *
  {
    name: "Cadet Hikaru Sulu",
    grade: "Common ",
    portrait: "cadet_hikaru_sulu.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Command",
    description: [
      "Sulu proved a gifted pilot even during his time at the Academy, good enough to earn a place on Red Squad, the elite team of the Academy's best.",
    ],
    captainAbility: {
      abilityName: "Big Shot",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Cadet Sulu increases the damage of the first shots of the ship by 5% for the first round.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Fighting Spirit",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Cadet Sulu increases the Attack of all the Officers on the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "12%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "15%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Cadet James T. Kirk *
  {
    name: "Cadet James T. Kirk",
    grade: "Common ",
    portrait: "cadet_james_t_kirk.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Command",
    description: [
      "Even in the Academy, Kirk showed leadership and initiative in extreme abundance. High test scores and academic performance combined with easy camaraderie allowed him to excel, despite a few stunts that put him on the instructors' radars.",
    ],
    captainAbility: {
      abilityName: "Motivational",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Cadet Kirk increases the Attack, Defense and Health of all Officers on the Bridge by 8%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "6%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "6%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Tactician",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Origins Saru increases the Hull Health of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "12%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "4",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "8",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "88",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Cadet Leonard McCoy *
  {
    name: "Cadet Leonard McCoy",
    grade: "Common ",
    portrait: "cadet_leonard_mccoy.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Science",
    description: [
      "When a bad divorce left Leonard McCoy with very little other than the clothes on his back and the bones in his body, he decided to join Starfleet and put his medical expertise to good use. He rapidly befriended James Kirk, and the two stuck together throughout their years at the Academy.",
    ],
    captainAbility: {
      abilityName: "Doctor",
      abilityIcon: "OfficerAbility_ico_ability_type_47.png",
      abilityDescription:
        "Cadet McCoy increases the Health of all Officers on the ship by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Psychologist",
      abilityIcon: "OfficerAbility_ico_ability_type_2.png",
      abilityDescription:
        "During combat, Cadet McCoy increases the effectiveness of the Captain Maneuver by 4%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "4%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "6%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "8%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "10%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "12%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Cadet Montgomery Scott *
  {
    name: "Cadet Montgomery Scott",
    grade: "Common ",
    portrait: "cadet_montgomery_scott.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Science",
    description: [
      "Montgomery Scott's time in the Academy was punctuated by successes and failures in equal measure, most notably his attempt to prove that transporter range could be extended to cover an entire star system. His test subject, Admiral Archer's prize beagle, never re-materialized.",
    ],
    captainAbility: {
      abilityName: "Sturdy Ship",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription: "Cadet Scotty increases the Ship Hull Health by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "2",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5",
        },
      ],
    },
    officerAbility: {
      abilityName: "Warp Theory",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription:
        "Origins Saru increases the Hull Health of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "1",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "2",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "3",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "4",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "5",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Cadet Nyota Uhura *
  {
    name: "Cadet Nyota Uhura",
    grade: "Common ",
    portrait: "cadet_nyota_uhura.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Engineering",
    description: [
      "While in the academy, Uhura proved to be an incredible xenolinguist and diligent worker. She spent many long nights in the long-range sensor lab tracking transmissions.",
    ],
    captainAbility: {
      abilityName: "Scan the enemy",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription:
        "Cadet Uhura decreases the Weapon Damage of the opponent's ship by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Negotiations",
      abilityIcon: "OfficerAbility_ico_ability_type_16.png",
      abilityDescription:
        "Cadet Uhura increases the Shield Health of the ship by 5%",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "9%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "11%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "14%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Domitia *
  {
    name: "Domitia",
    grade: "Common ",
    portrait: "domitia.png",
    crew: "SURVEYORS & MINERS",
    faction: "Romulan",
    class: "Science",
    description: [
      "Domitia is an expert in astro-geology; her knowledge of asteroid mining is considerable, and she's one of the few Romulans who has worked outside of the Romulan Star Empire. She's especially interested in the Federation's approach to dilithium mining using precision phasers.",
    ],
    captainAbility: {
      abilityName: "Dilithium Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription:
        "Domitia increases the Mining Rate of the ship by 40% when mining Dilithium.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "30%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Hurry Home",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription:
        "As long as the Cargo of the ship is full, Domitia increases its Warp speed by 25%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "75%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "100%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "130%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "6",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "12",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "30",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "72",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "120",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Gaila *
  {
    name: "Gaila",
    grade: "Common ",
    portrait: "gaila.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Engineering",
    description: [
      "Though a full-fledged officer with commendations for service in both the sciences and in engineering, Gaila still looks upon her time in the academy most fondly. After several postings, she's found herself working alongside Lucia's crew, and thoroughly enjoying it - especially since most of the male members of the team are non-human, and less susceptible to the pheremones she produces.",
    ],
    captainAbility: {
      abilityName: "Parsteel Hunter",
      abilityIcon: "OfficerAbility_ico_ability_type_4.png",
      abilityDescription:
        "Gaila increases the Parsteel rewards for defeating a Hostile by 25%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Critical Avoidance",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription:
        "If the opponent is a Hostile, Gaila decreases the damage from its Critical Hits by 10%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "30%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "40%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "50%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "6",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "12",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "30",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "72",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "120",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Geoffrey Hadley *
  {
    name: "Geoffrey Hadley",
    grade: "Common ",
    portrait: "geoffrey_hadley.png",
    crew: "SHAKEDOWN CRUISE",
    faction: "Federation",
    class: "Engineering",
    description: [
      "Geoffrey Hadley is a science officer with expertise in biology, geology, and chemistry. Gregarious and curious, Hadley signed up with Starfleet to see new worlds and experience new cultures; he often chats with visitors to the ships he serves on, and his friendly demeanor makes him a friend to many. Hadley's also shown some interest in navigation and helm, though he hasn't requested transfer to the Command and Operations division as of yet.",
    ],
    captainAbility: {
      abilityName: "Galaxy Traveler",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription: "Hadley increases the Warp Speed of the ship by 15%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Survey Trainer",
      abilityIcon: "OfficerAbility_ico_ability_type_70.png",
      abilityDescription:
        "Hadley increases Ship Experience gained on Survey ships by 20%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "40%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "50%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "60%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "7",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "14",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "35",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "77",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "140",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Helvia *
  {
    name: "Helvia",
    grade: "Common ",
    portrait: "helvia.png",
    crew: "SURVEYORS & MINERS",
    faction: "Romulan",
    class: "Command",
    description: [
      "Helvia's expertise in parsteel refinement has made a good career for her, but her general antipathy towards the maneuvering and politicking inherent in the Romulan Merchant Marine has prevented her from rising particularly high. She's actually quite comfortable with this; she'd rather have satisfying work than a fancy title.",
    ],
    captainAbility: {
      abilityName: "Parsteel Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription:
        "Helvia increases the Mining Rate of the ship by 40% when mining Parsteel.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "30%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Gold Rush",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription:
        "As long as the Cargo of the ship is empty, Helvia increases its Warp speed by 25%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "75%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "100%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "125%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "4",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "8",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "88",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Instructor Spock *
  {
    name: "Instructor Spock",
    grade: "Common ",
    portrait: "instructor_spock.png",
    crew: "ANOTHER TIME",
    faction: "Federation",
    class: "Science",
    description: [
      "Instructor Spock put together the Kobayashi Maru test to try and prepare cadets for the pressures and stresses of taking starships into dangerous and difficult situations. He especially wanted to stress the lesson that some situations couldn't be beaten, no matter how clever or skilled the officers in question are.",
    ],
    captainAbility: {
      abilityName: "Knowledgeable",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Instructor Spock increases the Weapon Damage of the ship by 5%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Kobayashi Maru",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription:
        " Instructor Spock increases the Shield Deflection, Armor and Dodge of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "12%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "6",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "15",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "36",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Jabilo M'Benga *
  {
    name: "Jabilo M'Benga",
    grade: "Common ",
    portrait: "jabilo_m_benga.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Science",
    description: [
      `Doctor Jabilo M'Benga is a human doctor who works for Starfleet, specializing in Vulcan physiology and medicine.

      M'Benga spent many years on Vulcan before its destruction at the hands of Nero and now has close ties to the Vulcan Science Academy on New Vulcan.
      
      He works with Doctor McCoy aboard the USS Enterprise as part of the medical staff.`,
    ],
    captainAbility: {
      abilityName: "Break Through",
      abilityIcon: "OfficerAbility_ico_ability_type_20.png",
      abilityDescription:
        " When defending the Station, M'Benga increases the Armor Piercing, Shield Piercing and Accuracy of the ship by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Slip Through",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription:
        "When defending the station, M'Benga increases Dodge, Armor and Shield Deflection by 10%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "16%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "22%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "30%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "40%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "5",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "10",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // K'Bisch *
  {
    name: "K'Bisch",
    grade: "Common ",
    portrait: "k_bisch.png",
    crew: "SURVEYORS & MINERS",
    faction: "Klingon",
    class: "Engineering",
    description: [
      "K'Bisch is a somewhat disgruntled Klingon warrior and freighter commander. His common birth has forced him to work his way up the ranks through whatever postings were available, such as captaining freighters and commanding mining excursions.",
    ],
    captainAbility: {
      abilityName: "Tritanium Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription:
        "K'Bisch increases the Mining Rate of the ship by 40% when mining Tritanium.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "30%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Defensive Mining",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription:
        "As long as the ship is mining, K'Bisch reduces the damage dealt by attacking opponents by 10%",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "12%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "14%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "16%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "5",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "10",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Komal *
  {
    name: "Komal",
    grade: "Common ",
    portrait: "komal.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Engineering",
    description: [
      "Komal is unusual among Klingons in that he actually prefers to be an engineer. He puts up a proper front when around his fellows, but in his heart of hearts, he'd rather be wrenching than fighting. He's found success on Klaa's crew, as Klaa's competitive nature and Kras's measured attitude have worked in tandem to allow Komal to spend his efforts on engineering.",
    ],
    captainAbility: {
      abilityName: "Battleship Specialist",
      abilityIcon: "OfficerAbility_ico_ability_type_72.png",
      abilityDescription:
        "When inside a Battleship, Komal increases Weapon Damage against players by 20%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Resist Kinetic",
      abilityIcon: "OfficerAbility_ico_ability_type_18.png",
      abilityDescription:
        " If the opponent is a player, Komal decreases the damage made by its Kinetic Weapons by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "5",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "10",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Mae Darwin *
  {
    name: "Mae Darwin",
    grade: "Common ",
    portrait: "mae_darwin.png",
    crew: "SHAKEDOWN CRUISE",
    faction: "Federation",
    class: "Engineering",
    description: [
      "Mae is the second shift navigator on the Enterprise. Brave and dutiful, Mae is loyal to her fellow crewmen, willing to sacrifice greatly for them.",
    ],
    captainAbility: {
      abilityName: "Defending Power",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "When the ship is attacked by a player, Darwin increases the Weapon Damage by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Interceptor Trainer",
      abilityIcon: "OfficerAbility_ico_ability_type_71.png",
      abilityDescription:
        "Darwin increases the Ship Experience gained on Interceptors by 20%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "40%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "50%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "60%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "6",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "12",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "30",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "72",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "120",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Next Gen Crusher *
  {
    name: "Next Gen Crusher",
    grade: "Common ",
    portrait: "next_gen_crusher.png",
    crew: "NEXT GEN",
    faction: "Federation",
    class: "Science",
    description: [
      `Having lost her parents as a child, Beverly Crusher had to become independent at an early age, an independence that left her feeling isolated and unable to relate to children in her age group. She became inspired to pursue medicine after witnessing her grandmother use organic remedies to treat those wounded in the tragic disaster on the Arvada III colony.
      While she doesn’t always think before speaking, Crusher has worked hard to become more conscious of others’ feelings, knowing how important her bedside manner will be as she pursues her medical career. Now, as part of Starfleet, she has been identified as one of the most promising up-and-coming doctors in the academy.`,
    ],
    captainAbility: {
      abilityName: "Hypospray",
      abilityIcon: "OfficerAbility_ico_ability_type_47.png",
      abilityDescription:
        "Next Gen Crusher increases the Health of all Officers on the ship by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "The Dancing Doctor",
      abilityIcon: "OfficerAbility_ico_ability_type_2.png",
      abilityDescription:
        "During combat, Next Gen Crusher increases the effectiveness of the Captain Maneuver by 4%",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "4%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "6%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "8%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "10%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "12%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "6",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "15",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "36",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Next Gen Data *
  {
    name: "Next Gen Data",
    grade: "Common ",
    portrait: "next_gen_data.png",
    crew: "NEXT GEN",
    faction: "Federation",
    class: "Command",
    description: [
      `Data is a Soong-type android, the fifth of six developed by Dr. Noonien Soong. Deactivated and abandoned by his creator, he was eventually found by the USS Tripoli on Omicron Theta. With Starfleet realizing Data’s potential upon reactivation, and the android searching for a purpose, he was admitted into the Starfleet Academy.
      Despite excelling scholastically, as well as in all physical examinations, Data still found himself dealing with major obstacles that threatened his Starfleet career, facing prejudice from some of the other cadets and officers, as well as struggling with the social and psychological elements of his training. However, Data is determined to overcome these challenges to become the most effective Starfleet officer he can be.`,
    ],
    captainAbility: {
      abilityName: "The Measure of a Man",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Next Gen Data increases the Attack, Defense and Health of all Officers on the Bridge by 8%",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "6%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "6%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Power Play",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Next Gen Data increases the Weapon damage of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "12%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "9",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "88",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Next Gen La Forge *
  {
    name: "Next Gen La Forge",
    grade: "Common ",
    portrait: "next_gen_la_forge.png",
    crew: "NEXT GEN",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Geordi La Forge is no stranger to overcoming adversity, having dealt with a birth defect that left him blind. Upon receiving his first VISOR at the age of eight which allowed him to see for the first time in his life, he became fascinated with the inner workings of its technology, as well as all technology around him.
      La Forge’s thirst for knowledge, along with his natural talent for engineering has made him a stand-out in his academy class. With his specializations in antimatter power and Dilithium regulators – subjects that often confound even the most experienced of engineers – Geordi has already garnered a reputation as something of a wunderkind in his field.`,
    ],
    captainAbility: {
      abilityName: "Timeless",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription:
        "Next Gen La Forge decreases the Weapon Damage of the opponent's ship by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Rerouting Power",
      abilityIcon: "OfficerAbility_ico_ability_type_16.png",
      abilityDescription:
        "Next Gen La Forge increases the Shield Health of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "9%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "11%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "14%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "6",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "15",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "36",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Next Gen Riker *
  {
    name: "Next Gen Riker",
    grade: "Common ",
    portrait: "next_gen_riker.png",
    crew: "NEXT GEN",
    faction: "Federation",
    class: "Command",
    description: [
      `With ancestors that include Thaddius Riker, a Union Army Colonel, William Riker’s family name gave him a lot to live up to. Raised by his father in the harsh Tundra of Alaska, Riker dreamed of a life in Starfleet as a child, craving adventure and excitement that Alaska simply couldn’t give him.
      Despite his natural charisma and talent for decision making, his now-strained relationship with his father has left Riker with something of a rebellious streak, as he constantly clashes with his peers and his commanding officers. And with his middling performance in Starfleet Academy belying his lofty ambitions, Riker will need to shape up if he wants to achieve his ultimate goal of becoming a Starfleet Captain.`,
    ],
    captainAbility: {
      abilityName: "The Riker Maneuver",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Next Gen Riker increases the damage of the first shots of the ship by 5% for the first round.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "The Riker Lean",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Next Gen Riker increases the Attack of all the Officers on the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "12%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "15%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "6",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "15",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "36",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Next Gen Troi *
  {
    name: "Next Gen Troi",
    grade: "Common ",
    portrait: "next_gen_troi.png",
    crew: "NEXT GEN",
    faction: "Federation",
    class: "Science",
    description: [
      `An aspiring Starfleet counsellor, Deanna Troi is half Betazoid and half Human, and has extra-sensory empathy, giving her a keen insight into the emotional state of those around her. However, her ability is limited when it comes to beings with different brain structures to Humans and Betazoids, and so she spends as much time as she can studying the psychology of unfamiliar species.
      Having suffered through tragedy at an early age from the loss of her sister, Troi chose to dedicate her life to helping others through loss and trauma, and help heal those who have suffered emotional damage. With an unmatched sense of compassion, and a penchant for quick thinking and decision making, Troi can be a tremendous asset for Starfleet.`,
    ],
    captainAbility: {
      abilityName: "Face of the Enemy",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "Next Gen Troi increases the Weapon Damage of the ship by 5%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Empathic",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription:
        "Next Gen Troi increases the Shield Deflection, Armor and Dodge of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "12%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "6",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "15",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "36",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Origins Stamets *
  {
    name: "Origins Stamets",
    grade: "Common ",
    portrait: "origins_stamets.png",
    crew: "Discovery origins",
    faction: "Federation",
    class: "Engineering",
    description: [
      `When one thinks of a 'genius', they probably imagine someone very much like Paul Stamets. Trained as an astromycologist, Stamets sought to shatter conventional thinking around biology and physics. In fact, he did not believe in the concept of biology and physics as separate sciences. He believed in biology as physics. He believed that to truly advance humanity, one needed to transcend traditional wisdom and expand the borders of scientific discovery.
      To that end, he and his research partner Straal began work on a project - A new technology that would change the galaxy as we know it. Combining astrobiology with astroengineering, they set out to create a new method of space travel, one that would utilize a renewable fuel source to send ships farther than they ever could before, at speeds no-one thought possible.
      Unfortunately, several setbacks would prevent them from reaching their full potential. However, no matter what stands in his way, no matter how many obstacles he needs to surmount, Paul Stamets will never give up on his ultimate goal... To revolutionize scientific exploration and change the galaxy for the better.`,
    ],
    captainAbility: {
      abilityName: "Biologist",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription:
        "Origins Stamets increases the Health of all the Officers on the ship by 10.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "2",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5",
        },
      ],
    },
    officerAbility: {
      abilityName: "No Time To Waste",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription:
        "Origins Stamets increases the Warp Speed of the ship by 30%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "34%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "38%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "42%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "45%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "3",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "7",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "35",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Rukor
  {
    name: "Rukor",
    grade: "Common ",
    portrait: "rukor.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Command",
    description: [
      "Rukor is young and eager to earn fame. She is coincidentally thought of as reckless and bumbling, as her eagerness has lead her to many mistakes. Never the less, the kid is thought of as a good luck charm; the more she screws up, the more her shipmates think the next battle will turn out well.",
    ],
    captainAbility: {
      abilityName: "Explorer Specialist",
      abilityIcon: "OfficerAbility_ico_ability_type_73.png",
      abilityDescription:
        "When inside an Explorer, Rukor increases the Weapon Damage against players by 20%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Energy Boost",
      abilityIcon: "OfficerAbility_ico_ability_type_29.png",
      abilityDescription:
        "If the opponent is a player, Rukor increases the damage made by the Energy Weapons of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "7",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "14",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "35",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "77",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "140",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Sesha *
  {
    name: "Sesha",
    grade: "Common ",
    portrait: "origins_saru.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Science",
    description: [
      "A cunning, if somewhat scatterbrained member of the Outlaws crew, Sesha has spent most of her adult life being experimented on, which gave her accelerated cell regeneration. Sesha is known for her emotional intelligence, outside-the-box thinking, and a disarming personality. However, some say that her personality is a ruse, hiding a more conniving and manipulative mind underneath...",
    ],
    captainAbility: {
      abilityName: "Always on Guard",
      abilityIcon: "OfficerAbility_ico_ability_type_132.png",
      abilityDescription:
        "If the opponent is an Eclipse hostile (including Armada Targets), Sesha has a 20% chance to reduce the opponent's Critical Hit Chance by 15%",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Intimidation",
      abilityIcon: "OfficerAbility_ico_ability_type_136.png",
      abilityDescription:
        "For the first three rounds of combat, when fighting Eclipse hostiles (including Armada Targets), Sesha increases the Critical Damage Bonus of the ship by 20%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "50%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "70%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "90%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "10",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "15",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "35",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "65",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Shev Akria *
  {
    name: "Shev Akria",
    grade: "Common ",
    portrait: "shev_akria.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Engineering",
    description: [
      "Shev's competitive nature and combative skill set makes him a capable security officer. He is an excellent marksman with a hand phaser.",
    ],
    captainAbility: {
      abilityName: "Tritanium Hunter",
      abilityIcon: "OfficerAbility_ico_ability_type_4.png",
      abilityDescription:
        "Shev increases the Tritanium rewards for defeating a Hostile by 25%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Justice Dealer",
      abilityIcon: "OfficerAbility_ico_ability_type_29.png",
      abilityDescription:
        "If the opponent is a Hostile, Shev increases the damage of the Energy weapons of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "5",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "10",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // T'Laan *
  {
    name: "T'Laan",
    grade: "Common ",
    portrait: "t_laan.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Science",
    description: [
      "T'Laan is an incredibly intelligent vulcan cadet in the academy. Though she had initially wanted to return to her people and help in the settling of New Vulcan, her experience with Lucia, Grace, Shev, and Vel convinced her to stay in the academy and Starfleet.",
    ],
    captainAbility: {
      abilityName: "Thorough Scans",
      abilityIcon: "OfficerAbility_ico_ability_type_10.png",
      abilityDescription: "T'Laan increases the Ship Experience gained by 15%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Objective Defense",
      abilityIcon: "OfficerAbility_ico_ability_type_18.png",
      abilityDescription:
        "If the opponent is a Hostile, T'Laan decreases the Damage done by its Kinetic Weapons by 5%. Works against Hostiles of level 51 and under.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "4",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "8",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "88",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Tiza *
  {
    name: "Tiza",
    grade: "Common ",
    portrait: "tiza.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Command",
    description: [
      `One of the last of the Mirani alien race, Tiza and the other Mirani were forced out of their territory a century ago by Eclipse, who took over that area to create the Exchange.

      A handful of survivors managed to escape, building new lives for themselves on previously deserted planets. While most records of the Mirani have since been wiped out by Eclipse, they were known as technological pioneers in their prime, and that talent has been passed on to the new generation of Mirani, including Tiza.
      
      Now, as the leader of the remaining Mirani, Tiza believes it’s time to take back their systems from Eclipse.`,
    ],
    captainAbility: {
      abilityName: "Security Breach",
      abilityIcon: "OfficerAbility_ico_ability_type_139.png",
      abilityDescription:
        "When fighting Eclipse hostiles (including Armada Targets), for the first three rounds of combat, Tiza decreases the Shield Mitigation of the opponent by 4%",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "1%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Mirani Technology",
      abilityIcon: "OfficerAbility_ico_ability_type_137.png",
      abilityDescription:
        "When fighting Eclipse hostiles (including Armadas), Tiza has a 35% chance to increase Shield Deflection, Armor and Dodge by 100% for the whole combat.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "35%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "45%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "55%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "65%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "75%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "10",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "15",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "35",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "65",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "75",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Vartoq *
  {
    name: "Vartoq",
    grade: "Common ",
    portrait: "vartoq.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Science",
    description: [
      "'Grim' Vartoq is the sort of warrior his fellow Klingons respect but don't like to be around. Incessantly somber and spiritual, Vartoq honors his fallen foes with shouts to warn the dead and battlefield rites. He rarely partakes in bloodwine, only sings in dirges, and seems to take no joy in earning honor, just the grim satisfaction in a job well done.",
    ],
    captainAbility: {
      abilityName: "Interceptor Specialist",
      abilityIcon: "OfficerAbility_ico_ability_type_71.png",
      abilityDescription:
        "When inside an Interceptor, Vartoq increases the Weapon Damage against players by 20%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Kinetic Boost",
      abilityIcon: "OfficerAbility_ico_ability_type_30.png",
      abilityDescription:
        "Origins Saru increases the Hull Health of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "6",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "12",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "30",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "72",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "120",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Vel K'Bentayr *
  {
    name: "Vel K'Bentayr",
    grade: "Common ",
    portrait: "vel_k_bentayr.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Science",
    description: [
      "Vel K'Bentayr is a Monchezkin medical cadet; his tendency to narrate his feelings and actions in literal terms makes many think him strange, but his efficiency in diagnosing illness and emergency medical procedures earns him a lot of social leeway.",
    ],
    captainAbility: {
      abilityName: "Dilithium Hunter",
      abilityIcon: "OfficerAbility_ico_ability_type_4.png",
      abilityDescription:
        "Vel increases the Dilithium rewards for defeating a Hostile by 25%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Chirurgical Precision",
      abilityIcon: "OfficerAbility_ico_ability_type_30.png",
      abilityDescription:
        "If the opponent is a Hostile, Vel increases the damage made by the Kinetic Weapons of the ship by 5%.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "5",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "10",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
  // Zahra *
  {
    name: "Zahra",
    grade: "Common ",
    portrait: "zahra.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Engineering",
    description: [
      "Zahra grew up on a frontier Federation colony, and grew up learning the value of self reliance and adaptability. She's handy with a phaser, scrappy in a fist-fights, knows a few things about picking locks, and knows how to repair a variety of starship systems. Though she officially pursued engineering, she's subbed in as added security on away teams several times.",
    ],
    captainAbility: {
      abilityName: "Station Expert",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription:
        "When defending the Station, Zahra increases the ship's Hull Health by 10%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Home Engineer",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription:
        "When defending the Station, Zahra increases the Weapon Damage by 5%",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "10%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "15%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "20%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "4",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "8",
        officerXp: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "20",
        officerXp: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "7885",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "",
        traitsIcon: "",
        traitLevel: [
          {
            traitLvl: "",
            traitCost: "",
          },
        ],
      },
    ],
  },
];
