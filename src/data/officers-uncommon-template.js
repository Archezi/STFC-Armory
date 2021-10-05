officersUncommon = [
  // Airiam *
  {
    name: "Airiam",
    grade: "Uncommon ",
    portrait: "airiam.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Horribly wounded in a tragic shuttle accident, Lieutenant Airiam was saved by an experimental procedure. Following the aftermath of the accident, Airiam received cybernetic augmentations. These enhanced her senses, allowed her to make complex decisions in nano-seconds and improved her physical strength and agility.
      These upgrades, along with her intelligence and courage, made her a natural fit for the bridge of the USS Discovery. It was not long before Airiam rose up the ranks of Starfleet, eventually achieving the rank of Lieutenant Commander.
      Though her past will always be shadowed by her tragedy, Airiam’s future remains bright.`,
    ],
    captainAbility: {
      abilityName: "Isogen Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_151.png",
      abilityDescription: "Airiam increases the mining speed of Isogen by 40%.",
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Cybernetic Tactician",
      abilityIcon: "OfficerAbility_ico_ability_type_152.png",
      abilityDescription:
        "When defending on a Capture Node, at the start of each round, Airiam has a 60% chance of Burning the opponent for this round.",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "70%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "80%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "90%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "95%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "25",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "50",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "170",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Arix *
  {
    name: "Arix",
    grade: "Uncommon ",
    portrait: "arix.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Science",
    description: [
      `Arix never lost his sense of patriotism, but he found the flame of vengeance burned out in him after Nero's fall. Together with Vella he journeyed to the alternate Romulus and found a world familiar yet different. His love for Vella swept him along in her scheme to end the Enterprise, but he ultimately betrayed her purpose, paving the way for Kirk and Spock to escape, and the remnants of Section 31 to acquire the last portion of red matter.`,
    ],
    captainAbility: {
      abilityName: "Plasma Backlash",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `Every time the opponent is hit by an energy weapon attack, Arix has a 10% chance of Burning it.
        (Weapons with multiple shots will only trigger this maneuver once per attack.)`,
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
      abilityName: "Powered Armor",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
        As long as the ship's Hull Health is under 70% of its value at the start of combat, Arix increases its Armor by 15%
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
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
        shards: "10",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Surveyor",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Arkady Ivanov *
  {
    name: "Airiam",
    grade: "Uncommon ",
    portrait: "arkady_ivanov.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Arkady is one of the youngest officers on the Enterprise, yet is also one of the most brilliant. He can do subspace transferral calculations in his head, manage the transporter's controls like an artist, and even substitute for Montgomery Scott as the chief engineer of the Enterprise. Humble and focused on the job, Kirk and crew rely on the russian whiz kid to see them through.`,
    ],
    captainAbility: {
      abilityName: "Always Enthusiast",
      abilityIcon: "OfficerAbility_ico_ability_type_6.png",
      abilityDescription: `When the shield is depleted, Arkady has a 50% chance of inspiring Morale to the ship for 3 rounds.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Shields Refactor",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Arkady increases the Shield Health of the ship by 10%.
        `,
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
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // D'jaoki *
  {
    name: "D'jaoki",
    grade: "Uncommon ",
    portrait: "d_jaoki.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Command",
    description: [
      `D'jaoki relishes the adrenaline of combat, the exhilaration of pitting one’s strength against a foe’s and the thrill of a well fought victory. The idea of leaving this behind to sit, safe on the homeworld, disgusts him. While he eventually accepted command of his own starship, he outwardly preferred the company of the rank and file crew than that of his superiors.`,
    ],
    captainAbility: {
      abilityName: "War of Endurance",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `Every time the opponent is hit by an energy weapon attack, Arix has a 10% chance of Burning it.
        (Weapons with multiple shots will only trigger this maneuver once per attack.)`,
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Shatter Defenses",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      At the beginning of each round, if the opponent is Burning, D'jaoki decreases the opponent's Armor, Shield Deflection and Dodge by 20% of the crew's Health.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "100%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "250%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "500%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "18",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Eight of Ten *
  {
    name: "Eight of Ten",
    grade: "Uncommon ",
    portrait: "eight_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Engineering",
    description: [
      `During the Borg onslaught, Azetbur took it upon herself to covertly enter Borg-occupied space in an attempt to study and understand this dangerous new enemy. Unfortunately, her curiosity would prove treacherous, as she was quickly captured and assimilated into the Collective. Where Azetbur, daughter of Gorkon, of the House of Makok once stood, there now remains only Eight of Ten. Tormented by the loss of his daughter to the Borg Collective, Chancellor Gorkon will stop at nothing until she is returned to her former self.`,
    ],
    captainAbility: {
      abilityName: "Fight the Collective",
      abilityIcon: "OfficerAbility_ico_ability_type_124.png",
      abilityDescription: `When fighting a Borg ship, Eight of Ten increases the Chance of dealing a critical hit by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Cybernetic Enhancements",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Eight of Ten increases the Attack of every Officer on the ship by 45%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "45%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "55%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "65%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "75%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "85%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "20",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "40",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "500",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "90",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "5000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "140",
        officerXp: "",
        credits: "1300",
        badge: "1",
        activeNanoprobe: "50000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "",
        credits: "5200",
        badge: "2",
        activeNanoprobe: "200000",
      },
    ],
    traits: [
      {
        traitName: "Assimilated",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Elea Mäkinen *
  {
    name: "Elea Mäkinen",
    grade: "Uncommon ",
    portrait: "elea_m_kinen.png",
    crew: "SURVEYORS & MINERS",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Born in Helsinki, Finland to an influential Starfleet dynasty, Elea Mäkinen had very little say in her future. Her parents expected her to follow in their footsteps and enlist in Starfleet, to carry on the family legacy.
      It’s too bad she had no interest in it.
      Elea was a natural geologist. She would spend days exploring the vast woods of her home country, searching for rare minerals or fascinating ruins. So it was to no-one’s surprise that, when it came time for her to enlist, she chose instead to pursue a career in academics. Unfortunately, her family did not agree with this particular decision and elected to cut Elea off. She was left on her own, with nobody to count on but herself.
      Elea took this incredible challenge in her stride, graduating top of her class. She dedicated herself to finding new materials that she could stake her claim to.
      Her expertise has made Elea adept at identifying and safely collecting rare materials. Every crew she’s worked with has praised her natural leadership and immense knowledge... despite her lack of social graces.`,
    ],
    captainAbility: {
      abilityName: "Advanced Mining",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription: `Elea Mäkinen increases the Mining Speed of the ship by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Isogen Mining",
      abilityIcon: "OfficerAbility_ico_ability_type_151.png",
      abilityDescription: `
      Elea Mäkinen increases the rate of Isogen Mining by 20%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "60%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "80%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "100%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Frank Leslie *
  {
    name: "Frank Leslie",
    grade: "Uncommon ",
    portrait: "frank_leslie.png",
    crew: "SHAKEDOWN CRUISE",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Frank Leslie is one of the hard-working crewmen keeping the Enterprise in working order. Remarkably flexible and broad in his skill set, Frank has manned navigation, astrophysics, the warp core, and even security throughout his time on the Enterprise.`,
    ],
    captainAbility: {
      abilityName: "Minor Damage Control",
      abilityIcon: "OfficerAbility_ico_ability_type_16.png",
      abilityDescription: `As long as the ship's Hull Health is under 35% of its value at the beginning of combat, Leslie restores it by 5% at the end of each round.`,
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
      abilityName: "Battleship Trainer",
      abilityIcon: "OfficerAbility_ico_ability_type_72.png",
      abilityDescription: `
      Frank Leslie increases the Ship Experience gained on Battleships by 20% each turn.
        `,
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Goon *
  {
    name: "Goon",
    grade: "Uncommon ",
    portrait: "goon.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Science",
    description: [
      `A former Starfleet MACO veteran, Goon has seen his fair share of battles, the memories of which have stuck with him. Becoming disillusioned by Starfleet’s perceived hypocrisy – in particular, the actions displayed by Kirk and his ilk – Goon left Starfleet to use his considerable talents and arsenal elsewhere, now acting as Mudd’s weapons expert.

      Always willing to give you a blunt and honest opinion, occasionally to his detriment, he’s also the first person Mudd will call if he ever finds himself outgunned.`,
    ],
    captainAbility: {
      abilityName: "Grizzled Veteran",
      abilityIcon: "OfficerAbility_ico_ability_type_133.png",
      abilityDescription: `When fighting Hostiles, Goon increases the chances of dealing a Critical Hit by 20% for the first round of combat.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
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
      abilityName: "Military Training",
      abilityIcon: "OfficerAbility_ico_ability_type_10.png",
      abilityDescription: `
      Goon increases the Ship XP gained by the ship from fighting by 15%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "25%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "35%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "50",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "85",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "130",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Grace Chen *
  {
    name: "Grace Chen",
    grade: "Uncommon ",
    portrait: "grace_chen.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Science",
    description: [
      `Grace Chen is a crackerjack pilot and a clever inventor. She designed and built her own leg enhancements - necessary for her to walk - and has an insatiable love for all things fast.`,
    ],
    captainAbility: {
      abilityName: "Modifications",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `Chen increases the Dodge, Shield Deflection and Armor of the ship by 20% against Hostiles. Works against Hostiles of level 51 and under.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Energy Absorber",
      abilityIcon: "OfficerAbility_ico_ability_type_17.png",
      abilityDescription: `
      If the opponent is a Hostile, Chen decreases the damage done by its Energy Weapons by 10%. Works against Hostiles of level 51 and under.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "20%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "25%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "30%",
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
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Pilot",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Hendorff *
  {
    name: "Hendorff",
    grade: "Uncommon ",
    portrait: "grace_chen.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Science",
    description: [
      `Grace Chen is a crackerjack pilot and a clever inventor. She designed and built her own leg enhancements - necessary for her to walk - and has an insatiable love for all things fast.`,
    ],
    captainAbility: {
      abilityName: "Modifications",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `Chen increases the Dodge, Shield Deflection and Armor of the ship by 20% against Hostiles. Works against Hostiles of level 51 and under.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Energy Absorber",
      abilityIcon: "OfficerAbility_ico_ability_type_73.png",
      abilityDescription: `
      If the opponent is a Hostile, Chen decreases the damage done by its Energy Weapons by 10%. Works against Hostiles of level 51 and under.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "20%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "25%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "30%",
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
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Pilot",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Hikaru Sulu *
  {
    name: "Hikaru Sulu",
    grade: "Uncommon ",
    portrait: "hikaru_sulu.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Hikaru Sulu is the helmsman of the Enterprise. Sulu's diverse skill set includes command, astrophysics, botany, and fencing; his talents have helped the crew of the Enterprise survive a variety of crises, and he has proved to be impressively intimidating in the chair.`,
    ],
    captainAbility: {
      abilityName: "Do Not Test Me",
      abilityIcon: "OfficerAbility_ico_ability_type_6.png",
      abilityDescription: `When the ship is getting hit by a Critical Hit, Sulu has a 40% chance of inspiring Morale to the ship for one round.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Ranking Fire",
      abilityIcon: "OfficerAbility_ico_ability_type_29.png",
      abilityDescription: `
      When the ship has Morale, Sulu increases the total damage made by Energy Weapons by 15%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "25%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Pilot",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Hugh Culber
  {
    name: "Hugh Culber",
    grade: "Uncommon ",
    portrait: "hugh_culber.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `Empathy. Compassion. Integrity. Three qualities every good doctor should hold. When it comes to Dr. Hugh Culber, however, he doesn’t just uphold these qualities... He exemplifies them.
      Hugh decided to enrol in medical school after a chance meeting with an impressive doctor after a hiking accident. He excelled immediately, graduating top of his class.
      During the Human-Klingon war of 2256, Culber served onboard the USS Discovery as its chief medical officer. He served with his husband, Paul Stamets and was known as a man with unwavering integrity and an iron will.`,
    ],
    captainAbility: {
      abilityName: "Protective",
      abilityIcon: "OfficerAbility_ico_ability_type_150.png",
      abilityDescription: `When defending on a Capture Node, Hugh Culber increases Armor by 50% of the total Health of the Officers on the ship.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "50%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Learned from the Best",
      abilityIcon: "OfficerAbility_ico_ability_type_146.png",
      abilityDescription: `
      Hugh increases the Cost Efficiency of Jumping and Summoning with the Discovery by 5%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "15%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "20%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "25%",
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
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Doctor",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Javaid
  {
    name: "Javaid",
    grade: "Uncommon ",
    portrait: "javaid.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Command",
    description: [
      `Javaid organized the ore mining teams when the Narada was a simple mining vessel. Most of his team thought he was tough but fair. When Nero took the Narada through the black hole into the past, Javaid traded out the mining lasers for plasma rifles, and started organizing security teams.`,
    ],
    captainAbility: {
      abilityName: "Overwhelming Fire",
      abilityIcon: "OfficerAbility_ico_ability_type_31.png",
      abilityDescription: `Javaid increases the Shield Piercing of the ship by 20%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Reinforcements",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      If the ship is a Battleship, Javaid increases its Armor by 15%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "25%",
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
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Inventor",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Joaquin
  {
    name: "Joaquin",
    grade: "Uncommon ",
    portrait: "joaquin.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Command",
    description: [
      `While all of the Augments show incredible levels of intelligence, none can match the engineering prowess of Joaquin. The others joke that he was born with a wrench in hand and his extensive knowledge of all things mechanical have served him well, even in this strange, new galaxy.
      Like many of his family, Joaquin is skeptical of this future they now live in. In his mind, new technology and amazing tools take away the initiative of a good engineer. Despite his doubts, he has thrown himself into his work, now that he is free to do so. He has taken a special interest in starships. After all, it is only thanks to the Botany Bay that any of them survived this long.`,
    ],
    captainAbility: {
      abilityName: "Firewall Protection",
      abilityIcon: "OfficerAbility_ico_ability_type_1.png",
      abilityDescription: `Joaquin increases the Protected Cargo of the ship by 50%`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Data Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_80.png",
      abilityDescription: `
      Joaquin increases the Mining Rate of the ship by 40% when mining Corrupted Data and Decoded Data.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "80%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "100000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "250000",
        credits: "1050",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "500000",
        credits: "4200",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Kati
  {
    name: "Kati",
    grade: "Uncommon ",
    portrait: "kati.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Science",
    description: [
      `Kati is the only survivor of the Northern European Augments. As the rest of her region burned in nuclear flames, Kati fled to India with a promise of clemency from Khan. Since then, she has been his loyal friend and advisor.
      While all of the Augments are combat specialists, none of them hold a candle to Kati when it comes to handling weaponry. Blades, hammers, guns or slingshots. If it could kill, Kati knew how to use it.
      Unlike the rest of her family, Kati does not resent this new galaxy she has found herself in. She relishes the opportunity to experiment with new weapons technology and she will welcome the chance to use those weapons against Khan’s enemies.`,
    ],
    captainAbility: {
      abilityName: "Hail of Fire",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `At the start of each round, if the target of the ship is a Defense Platform, Kati increases the Chances of a Critical Hit by 4% for that round.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "3%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Enhanced Weaponry",
      abilityIcon: "OfficerAbility_ico_ability_type_27.png",
      abilityDescription: `
      When attacking a Station, Kati increases the Critical Hit Damage by 15%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "25%",
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
        shards: "20",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "40",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "80",
        officerXp: "100000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "120",
        officerXp: "250000",
        credits: "1150",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "200",
        officerXp: "500000",
        credits: "4600",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Klaa
  {
    name: "Klaa",
    grade: "Uncommon ",
    portrait: "klaa.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Command",
    description: [
      `Klaa is a young and impetuous lieutenant in the Klingon Defense Force; his eagerness to prove his prowess and honor in battle has led him into some tricky tactical situations. Thus far, Kras's advice, Klaa's loyal crew, and Klaa's ferocity have earned only victories. This has only fed Klaa's ambition.`,
    ],
    captainAbility: {
      abilityName: "Hot Pursuit",
      abilityIcon: "OfficerAbility_ico_ability_type_3.png",
      abilityDescription: `Klaa increases the Impulse Speed of the ship by 25%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Critical Strike",
      abilityIcon: "OfficerAbility_ico_ability_type_27.png",
      abilityDescription: `
      Klaa increases the Critical Hit Damage of the ship by 8%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "8%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "13%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "17%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Koth
  {
    name: "Koth",
    grade: "Uncommon ",
    portrait: "koth.png",
    crew: "STARFLEET ACADEMY",
    faction: "KLINGON PATRIOTS",
    class: "Engineering",
    description: [
      `Koth was the warden of the prison moon Rura Penthe; after the sabotage and subsequent destruction of the moon, Koth joined Gorkon's staff and has been serving with some small distinction.`,
    ],
    captainAbility: {
      abilityName: "Interceptor Overseer",
      abilityIcon: "OfficerAbility_ico_ability_type_8.png",
      abilityDescription: `Koth decreases the time needed to repair the ship by 20% if it is an Interceptor.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Open Them Up",
      abilityIcon: "OfficerAbility_ico_ability_type_30.png",
      abilityDescription: `
      As long as the opponent's ship has a Hull Breach, Koth increases the damage dealt by Kinetic Weapons by 5%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "15%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "20%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "25%",
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
        shards: "14",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "28",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Security",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // L'Nar
  {
    name: "L'Nar",
    grade: "Uncommon ",
    portrait: "l_nar.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Engineering",
    description: [
      `L'Nar led a failed attempt to destroy the heart of the Romulan Empire; he allied with Section 31 to launch an assault on Qo'nos and attempted to deposit the last remnant of red matter in the High Council chamber. Unfortunately, he chose his allies poorly, as Section 31 ultimately betrayed him and stole the red matter.`,
    ],
    captainAbility: {
      abilityName: "Romulan Health",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `L'Nar increases the Health of the Officers on the Bridge by 20%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Klingon Pursue",
      abilityIcon: "OfficerAbility_ico_ability_type_36.png",
      abilityDescription: `
      L'Nar increases the Damage against Klingon ships by 25% of the crew's Attack.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "35%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "75%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "175%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "500%",
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
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Spy",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Linkasa
  {
    name: "Linkasa",
    grade: "Uncommon ",
    portrait: "linkasa.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Engineering",
    description: [
      `Linkasa is a prickly and cold Klingon lady; she has rebuffed the advances of her peers bloodily. She is also a capable engineer, earning glory for the Empire by keeping its fleet in good repair.`,
    ],
    captainAbility: {
      abilityName: "Way of the Klingon",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `After winning a battle, Linkasa increases the Defense of all the Officers on the ship by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Defensive Tactics",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      At the start of combat, Linkasa increases the Armor of the ship by 25% of the total Attack of the crew.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "35%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "75%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "175%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "500%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Lucia Gonzales
  {
    name: "Lucia Gonzales",
    grade: "Uncommon ",
    portrait: "lucia_gonzales.png",
    crew: "STARFLEET ACADEMY",
    faction: "Federation",
    class: "Command",
    description: [
      `Lucia Gonzales is the easy-going leader of a troupe of the Academy's finest. Lucia specializes in diplomacy; it shows in the ease with which she appraises others and makes friends, including the frosty vulcan T'Laan and the pugnacious andorian Shev Akria.`,
    ],
    captainAbility: {
      abilityName: "Solution Finder",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `If the opponent is a Hostile, Gonzales increases the chances of dealing a Critical Hit by 8%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "1%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Problem Solver",
      abilityIcon: "OfficerAbility_ico_ability_type_27.png",
      abilityDescription: `
      If the opponent is a Hostile, Gonzales increases the damage of Critical Hits by 5%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "15%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "20%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "30%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Diplomat",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // M'Ral
  {
    name: "M'Ral",
    grade: "Uncommon ",
    portrait: "m_ral.png",
    crew: "KLINGON PATRIOTS",
    faction: "Klingon",
    class: "Command",
    description: [
      `M'Ral is a junior assault officer in Gorkon's fleet; she's picked up the nickname 'Screaming Blade' for her piercing war cries when she charges with a bat'leth in hand.`,
    ],
    captainAbility: {
      abilityName: "On the Hunt",
      abilityIcon: "OfficerAbility_ico_ability_type_22.png",
      abilityDescription: `Chen increases the Dodge, Shield Deflection and Armor of the ship by 20% against Hostiles. Works against Hostiles of level 51 and under.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Strengthener",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      M'ral increases the total Attack of all Officers on the bridge by 10%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "10%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "20%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "25%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "30%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Montgomery Scott
  {
    name: "Montgomery Scott",
    grade: "Uncommon ",
    portrait: "montgomery_scott.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Montgomery Scott is the eccentric but brilliant chief engineer of the Enterprise. Though his early career suffered due to an incident involving a transporter experiment and Admiral Archer's beagle, he has gone on to see the Enterprise through thick and thin. His care has kept the ship functioning through the wear and tear of daily use and unexpected crises alike.`,
    ],
    captainAbility: {
      abilityName: "Miracle Worker",
      abilityIcon: "OfficerAbility_ico_ability_type_44.png",
      abilityDescription: `Scotty reduces the time needed to repair the ship by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Born Engineer",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription: `
      Scotty increases the total Hull Health of the ship by 10% of its original Hull Health.
        `,
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
        shards: "16",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "32",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "64",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "96",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Inventor",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Nine of Ten
  {
    name: "Nine of Ten",
    grade: "Uncommon ",
    portrait: "nine_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Command",
    description: [
      `When the USS Sterling went missing in action at the borders of Borg-occupied space, Cadet Gonzales was among the first crew assigned to investigate the ship’s disappearance. However, it was not long before members of this search party were greeted with the same fate as the Sterling’s crew - a forced, painful assimilation into the Borg Collective. Lucia Gonzales is dead. All that remains is Nine of Ten, Septenary Adjunct of Unimatrix Twelve.`,
    ],
    captainAbility: {
      abilityName: "Borg Polarization",
      abilityIcon: "OfficerAbility_ico_ability_type_123.png",
      abilityDescription: `When fighting a Borg ship, Nine of Ten decreases the Chance of dealing a critical hit of the opponent by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Adapt & Overcome",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Nine of Ten increases the Defense of every Officer on the ship by 45%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "45%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "55%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "65%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "75%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "85%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "20",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "40",
        activeNanoprobe: "500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "90",
        activeNanoprobe: "5000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "140",
        activeNanoprobe: "50000",
        credits: "1300",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "275",
        activeNanoprobe: "200000",
        credits: "5200",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Assimilated",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Officer 0718
  {
    name: "Officer 0718",
    grade: "Uncommon ",
    portrait: "officer_0718.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Science",
    description: [
      `Officer 0718 is a cybernetic life form created when the Enterprise was temporarily controlled by a mysterious alien entity. He has the ability to interface directly with the Enterprise's computer and input commands and data more rapidly than the rest of the crew. When not on duty, 0718 often spends time in the botanical lab.`,
    ],
    captainAbility: {
      abilityName: "Station Knowledge",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `0718 Increases the Critical Hit Chances by 4% when defending the Station.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "4%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "4%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Computer Precision",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      0718 increases the Defense of all Officers on the ship by 5%.
        `,
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Origins Burnham
  {
    name: "Origins Burnham",
    grade: "Uncommon ",
    portrait: "origins_burnham.png",
    crew: "DISCOVERY ORIGINS",
    faction: "Federation",
    class: "Command",
    description: [
      `A true prodigy, Commander Michael Burnham was raised by Ambassador Sarek on the Vulcan homeworld. She was intended to act as a bridge between Vulcan and human societies, a living testament to the potential of both species. Unfortunately, anti-human bias among the elite prevented Michael from ascending as far as she deserved.
      Crestfallen, Michael elected instead to enlist in Starfleet, where she was put under the command of one Captain Phillipa Georgiou, of the USS Shenzhou. Burnham and Georgiou formed a strong bond, and Michael eventually earned a place at Captain Georgiou's right hand, as her first officer.`,
    ],
    captainAbility: {
      abilityName: "Vulcan Hello",
      abilityIcon: "OfficerAbility_ico_ability_type_7",
      abilityDescription: `Origins Burnham increases the Attack of all the Officers on the ship by 15.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5",
        },
        {
          synergyClass: "Command",
          synergyBonus: "2",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5",
        },
      ],
    },
    officerAbility: {
      abilityName: "Risk-Taker",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      Origins Burnham increases the Weapon Damage of the ship by 7%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "11%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "16%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "20%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "25%",
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
        officerXp: "750",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "25",
        officerXp: "7500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "50",
        officerXp: "75000",
        credits: "500",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "100",
        officerXp: "150000",
        credits: "1500",
        badge: "",
      },
    ],
    traits: [
      {
        traitName: "Resourceful",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Otto
  {
    name: "Otto",
    grade: "Uncommon ",
    portrait: "otto.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Otto is a genetically engineered human Augment and one of Khan’s most trusted lieutenants. Out of all of the augments, he has always been among the physically strongest. His tenacity, savagery, and ruthlessness are matched only by Khan himself.
      Like the rest of his Augment family, Otto was put into a cryogenic sleep when they fled the Earth in 1996. He was not awoken by Starfleet. Instead, he was used as emotional leverage against Khan, a fact that enrages Otto to this day.
      Now that he is free, Otto is eager to unleash 300 years of unspent aggression and bloodlust on an unsuspecting galaxy.`,
    ],
    captainAbility: {
      abilityName: "Smash the Defenses",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `At the start of each round, if the target of the ship is a Defense Platform, Otto increases the damage of the ship by 20% for that round.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Brute Force",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Otto increases the Attack of each officer on the Bridge of the ship by 20%.
        `,
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
        shards: "16",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "32",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "64",
        officerXp: "100000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "96",
        officerXp: "250000",
        credits: "110",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "4400",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Paul Zhou
  {
    name: "Paul Zhou",
    grade: "Uncommon ",
    portrait: "paul_zhou.png",
    crew: "SECTION 31",
    faction: "Federation",
    class: "Command",
    description: [
      `Paul Zhou's a recent recruit to Section 31, brought in for his clever tactical thinking. He's on the forefront of several developing operations for the organization.`,
    ],
    captainAbility: {
      abilityName: "Fresh perspectives",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `Paul Zhou increases the Defense of all Officers on the bridge of the ship by 15%`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "6%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Upper hand",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      As long as the ship has Morale, Paul Zhou increases the Shield deflection, Armor and Dodge of the ship by 30% of the crew's Defense.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "80%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "160%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "300%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "18",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "36",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "72",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "108",
        officerXp: "125000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "198",
        officerXp: "250000",
        credits: "4800",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Spy",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Qa'ug
  {
    name: "Qa'ug",
    grade: "Uncommon ",
    portrait: "qa_ug.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Science",
    description: [
      `Qa'ug has served as part of the Kronos Planetary Defense Squadron for the majority of his term under the command of General Tavrak. He is as skilled with a Bat'leth as he is behind the helm of a D4 cruiser.`,
    ],
    captainAbility: {
      abilityName: "Excel under Pressure",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `When the ship gets a Hull Breach from the opponent, Qa'ug decreases all the stats of the officers on the opponent's ship by 35%.`,
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
      abilityName: "Blood and Honor",
      abilityIcon: "OfficerAbility_ico_ability_type_21.png",
      abilityDescription: `
      When the ship gets a Hull Breach from the opponent, Qa'ug increases Accuracy by 30%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "50%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "60%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "70%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Severus
  {
    name: "Severus",
    grade: "Uncommon ",
    portrait: "severus.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Engineering",
    description: [
      `Severus is a hard-working engineering officer, focused on bringing success to the Romulan Star Empire by any means necessary.`,
    ],
    captainAbility: {
      abilityName: "Spreading Fire",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `When the ship is Burning from the opponent, Severus decreases the opponent's Hull Health by 10% each round.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Exploit Overheat",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      When the ship is Burning from the opponent, Severus increases the Damage of the ship by 20%.`,
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Tilly
  {
    name: "Tilly",
    grade: "Uncommon ",
    portrait: "tilly.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Don’t let her awkward demeanour fool you, Sylvia Tilly is an engineering prodigy. Tilly rated herself the greatest theoretical engineer in Starfleet academy. She was so impressive, in fact, that she was fast-tracked to serve on the USS Discovery, a science vessel built to test experimental warp technology.
      Tilly had always dreamed of becoming a captain, but feared that her social anxiety would hold her back. However, with the help of her good friend, Michael Burnham, she excelled in her training and was quickly promoted to the rank of Ensign by the time the Klingon war had ended.
      Tilly is motivated, compassionate and thoroughly dedicated to the ideals of Starfleet. There is no doubt in the mind of anyone who has served with her that she would make a remarkable captain.`,
    ],
    captainAbility: {
      abilityName: "The Power of Math",
      abilityIcon: "OfficerAbility_ico_ability_type_147.png",
      abilityDescription: `At the start of combat, when defending from a player attack, Tilly decreases the opponent's Shield Health by 10% of its starting Shield Health.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Hold Your Horses!",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      Every time the ship is hit by an opponent's weapon attack, Tilly has a 30% chance to decrease the opponent's officers Attack by 15% (cumulative)
Decreasing Attack may result in a decrease in Damage
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "35%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "40%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "45%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "30",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "55",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "95",
        officerXp: "125000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "185",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Vella
  {
    name: "Vella",
    grade: "Uncommon ",
    portrait: "vella.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Science",
    description: [
      `Vella's thirst for vengeance carried on after Nero's defeat at the hands of Kirk, Spock, and the Enterprise. Together with Arix she made her way to the Romulus of this alternate past and agreed to make use of the last speck of red matter in a bid to destroy Spock and the Enterprise.`,
    ],
    captainAbility: {
      abilityName: "Overmatch",
      abilityIcon: "OfficerAbility_ico_ability_type_33.png",
      abilityDescription: `If the opponent's ship is an Explorer, Vella increases the damage of weapons by 10%.`,
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
      abilityName: "Sturdy Companion",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Vella increases the total Health of all Officers on the ship by 5%.
        `,
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
        shards: "12",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "24",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "48",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "84",
        officerXp: "125000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "168",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Vixis
  {
    name: "Vixis",
    grade: "Uncommon ",
    portrait: "vixis.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Science",
    description: [
      `Vixis is foremost among Klaa's warriors, and mans the targeting scanners. Her impressive muscles have earned her plenty of compliments and suitors, but she has no interest in the trivialities of the bedroom; her focus is on battle and glory, as any true warrior's should be.`,
    ],
    captainAbility: {
      abilityName: "Fake Communiques",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `At the beginning of each round, Vixis has a 6% chance of delaying the opponent Weapon Fire by one round.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "1%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "2%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Energy Absorption",
      abilityIcon: "OfficerAbility_ico_ability_type_small_17.png",
      abilityDescription: `
      Vixis decreases the Energy Weapon Damage of opponent players by 10%.
        `,
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
          rankBonus: "15%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "20%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "30%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Woteln
  {
    name: "Woteln",
    grade: "Uncommon ",
    portrait: "woteln.png",
    crew: "KLINGON PATRIOTS",
    faction: "Klingon",
    class: "Science",
    description: [
      `A junior officer in Gorkon's fleet; called 'Sleepy' by his peers for his tendency to doze off on night watches.`,
    ],
    captainAbility: {
      abilityName: "Scattering Field",
      abilityIcon: "OfficerAbility_ico_ability_type_32.png",
      abilityDescription: `If the opponent's ship is a Battleship, Woteln increases the Damage of the weapons by 10%.`,
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
      abilityName: "Interceptor Affinity",
      abilityIcon: "OfficerAbility_ico_ability_type_14.png",
      abilityDescription: `
      If the ship is an Interceptor, Woteln increases its Dodge value by 15%.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "15%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "25%",
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
        shards: "14",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "28",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "56",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "98",
        officerXp: "125000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "182",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
  // Yan'agh
  {
    name: "Yan'agh",
    grade: "Uncommon ",
    portrait: "yan_agh.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Engineering",
    description: [
      `Yan'agh is a dour Klingon consigned to the engine room. Though he dreamed long of service in battle, he failed to meet Gorkon's standard. Kang gave him a second chance, but Yan'aghs skills proved more valuable by the warp core with a coil spanner in hand than on the front line with a disruptor rifle.`,
    ],
    captainAbility: {
      abilityName: "Klingon Tactics",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `When the opponent's ship Shield Health is depleted, Yan'agh increases the Weapon Damage by 10%.`,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Wolf among the ships",
      abilityIcon: "OfficerAbility_ico_ability_type_37.png",
      abilityDescription: `
      Yan'agh increases the Damage against Romulan ships by 25% of the crew's Health.
        `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "35%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "75%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "175%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "500%",
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
        shards: "20",
        officerXp: "2500",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "40",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "80",
        officerXp: "125000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "150",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: "1",
            traitCost: "1500",
          },
          {
            traitLvl: "2",
            traitCost: "2700",
          },
          {
            traitLvl: "3",
            traitCost: "3800",
          },
        ],
      },
    ],
  },
];
