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
      abilityIcon: "OfficerAbility_ico_ability_type_Isogen_Miner.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Cybernetic_Tactician.png",
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
      abilityIcon: "OfficerAbility_ico_ability_Plasma_Backlash.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Powered_Armor.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Always_Enthusiast.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Shields_Refactor.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_War_of_Endurance.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Shatter_Defenses.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Fight the_Collective.png",
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
      abilityIcon:
        "OfficerAbility_ico_ability_type_Cybernetic_Enhancements.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Advanced_Mining.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Isogen_Mining.png",
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
      abilityIcon: "OfficerAbility_ico_ability_Plasma_Backlash.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Battleship_Trainer.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Grizzled_Veteran.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Military_Training.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Modifications.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Energy_Absorber.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Modifications.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Energy_Absorber.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Do_Not_Test_Me.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Ranking Fire.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Protective.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Learned_from_the_Best.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Overwhelming_Fire.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Reinforcements.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Firewall_Protection.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Data_Miner.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Modifications.png",
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
      abilityIcon: "OfficerAbility_ico_ability_type_Energy_Absorber.png",
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
];
