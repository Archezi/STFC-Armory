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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_big_shot.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_fighting_spirit.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_motivational.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_tactician.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_doctor.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_psychologist.png",
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
      abilityIcon: "OfficerAbility_ico_ability_SturdyShip.png",
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
      abilityIcon: "OfficerAbility_ico_ability_WarpTheory.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Scan_the_enemy.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Negotiations.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Dilithium_Miner.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Hurry_Home.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Parsteel_Hunter.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Critical_Avoidance.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Galaxy_Traveler.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Survey_Trainer.png",
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
  // Helvia
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Instructor Spock
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Jabilo M'Benga
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // K'Bisch
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Komal
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Mae Darwin
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Mae Darwin
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Next Gen Crusher
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Next Gen Data
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Next Gen La Forge
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Next Gen Riker
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Next Gen Troi
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
  // Origins Saru
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
      abilityIcon: "OfficerAbility_ico_ability_vigilant.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_small_prey_instinct.png",
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
];
