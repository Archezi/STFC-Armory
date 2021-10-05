officersRare = [
  // Ahvix
  {
    name: "Ahvix",
    grade: "Rare ",
    portrait: "ahvix.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Ahvix is a visitor to our galaxy, albeit an unwilling one. After an incident with her ship, Ahvix found herself stranded here, in the company of Mudd and his crew of Rogues. At first, they were unsure of this unknown alien but Ahvix quickly proved herself as a reliable and skilled officer and became an invaluable asset to the crew.
      While she still searches for a way home to this day, Ahvix has found something most unexpected in this strange, new galaxy... Friends.`,
    ],
    captainAbility: {
      abilityName: "Chirurgical Precision",
      abilityIcon: "OfficerAbility_ico_ability_type_141.png",
      abilityDescription:
        "When fighting Eclipse hostiles (including Armada Targets), for the first three rounds of combat, Ahvix increases the chances of a Critical Hit by 20%",
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
      abilityName: "Shield Remodulation",
      abilityIcon: "OfficerAbility_ico_ability_type_140.png",
      abilityDescription:
        "When fighting Eclipse hostiles (including Armadas), Ahvix has a 25% chance to decrease the Shield Deflection, Armor and Dodge of the opponent by 40% .",
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "35%",
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
        shards: "30",
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
        shards: "85",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "95",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "175",
        officerXp: "500000",
        credits: "10000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Survivor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Ash Tyler
  {
    name: "Ash Tyler",
    grade: "Rare ",
    portrait: "ash_tyler.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Many of us are dealt a bad hand in life. While some might lament their misfortune, others turn their bad luck into opportunities. Then, there are people like Ash Tyler, who take that hand and throw it back in your face.
      Ash grew up on Earth, near Washington D.C. He lived a simple life along with his mother. The two had little, but they had each other. Ash enlisted in Starfleet in the hopes of securing a better life for both of them.
      He served honorably aboard the USS Yeager until the Battle at the Binary Stars. There, he was captured, tortured, and subjected to horrific experiments. He had just about given up hope of escape until he was rescued by Captain Gabriel Lorca.
      Lorca gave Tyler a second chance and a spot on his bridge. Ash leaped at the chance and went on to prove himself as a capable and relentlessly loyal security officer.`,
    ],
    captainAbility: {
      abilityName: "Hold Position",
      abilityIcon: "OfficerAbility_ico_ability_type_148.png",
      abilityDescription: `
      When defending on a Capture Node, Ash Tyler gives all Officers on the ship a bonus of 60% to their Attack.
      Increasing Attack may result in an increase in Damage
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "The Beast Inside",
      abilityIcon: "OfficerAbility_ico_ability_type_149.png",
      abilityDescription: `
      At the start of each round, if the opponent is Burning, Ash Tyler increases the damage of the ship by 50% of the total Attack of all officers on the ship (cumulative).
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "70%",
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
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "115",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "155",
        officerXp: "250000",
        credits: "4800",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "225",
        officerXp: "500000",
        credits: "12000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Survivor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Azetbur
  {
    name: "Azetbur",
    grade: "Rare ",
    portrait: "azetbur.png",
    crew: "DISCOVERY CREW",
    faction: "Klingon",
    class: "Science",
    description: [
      `Azetbur is Gorkon's daughter, and is known for decisive follow-through in battle. Her study of the sciences has provided her father tactical advantages in several engagements. Despite the lowly tricks inherent in using quirks of physics to attain victory, there is nothing more honorable than victory.`,
    ],
    captainAbility: {
      abilityName: "Armor is Obsolete",
      abilityIcon: "OfficerAbility_ico_ability_type_28.png",
      abilityDescription: `
      When hitting the enemy with a Kinetic weapon attack, Azetbur has a 20% chance of causing a Hull Breach for 2 rounds on the opponent's ship.
(Weapons with multiple shots will only trigger this ability once per attack.)
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
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
      abilityName: "Contribution",
      abilityIcon: "OfficerAbility_ico_ability_type_22.png",
      abilityDescription: `
      Every time the ship hits the opponent with a weapon attack, Azetbur increases the Armor Piercing of the ship by 10%.
(Weapons with multiple shots will only trigger this ability once per attack.)
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
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "54",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "108",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "144",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "216",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Chancellor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Ruthless",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Barot
  {
    name: "Barot",
    grade: "Rare",
    portrait: "barot.png",
    crew: "SURVEYORS & MINERS",
    faction: "Klingon",
    class: "Science",
    description: [`Barot increases the rate of Crystal Mining by 40%.`],
    captainAbility: {
      abilityName: "Crystal Mining",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription: `
      When defending on a Capture Node, Ash Tyler gives all Officers on the ship a bonus of 60% to their Attack.
      Increasing Attack may result in an increase in Damage
        `,
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
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Deceptive Weakness",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      When the ship becomes attacked while mining, at the beginning of combat, Barot decreases the opponent's Hull Health by 10%.
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
        shards: "18",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "36",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "72",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "108",
        officerXp: "250000",
        credits: "1200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "198",
        officerXp: "500000",
        credits: "4800",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Surveyor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Miner",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Beverly Crusher
  {
    name: "Ash Tyler",
    grade: "Rare",
    portrait: "ash_tyler.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `As the Chief Medical Officer on the USS Enterprise-D, Doctor Beverly Crusher balances her renowned booksmarts with a strong sense of empathy for all those she treats. Furthermore, she also acts as something of a mother figure and unofficial therapist for the rest of the Enterprise crew, her reputation for being a great listener and giving out insightful advice preceding her.
      However, even with her usually gentle and caring nature, there is a steel inside Dr. Crusher that has allowed her to step up into a leadership role when needed. Able to make the tough decisions, and commanding the respect of those around her, Doctor Crusher has even helped the Enterprise crew survive a Borg attack through her quick thinking and decisive actions.`,
    ],
    captainAbility: {
      abilityName: "First, Do No Harm",
      abilityIcon: "OfficerAbility_ico_ability_type_178.png",
      abilityDescription: `
      When fighting Hostiles and Armadas, Beverly Crusher restores Shield Health each round equal to 200% of the Health of all Officers on the ship.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "100%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "100%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Unshakeable Moral Code",
      abilityIcon: "OfficerAbility_ico_ability_type_179.png",
      abilityDescription: `
      When fighting Hostiles and Armadas, Beverly Crusher increases Armor, Shield Deflection, and Dodge by 150% of the Defense of all Officers on the ship.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "150%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "200%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "250%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "300%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "350%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "105",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "145",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "215",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Doctor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Captain Tilly
  {
    name: "Captain Tilly",
    grade: "Rare",
    portrait: "captain_tilly.png",
    crew: "TERRAN EMPIRE",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Unlike her USS Discovery counterpart, Captain Tilly is charismatic, ruthless, and bloodthirsty. Leaving a trail of destruction in her wake in any system she targets, her reputation has garnered her several nicknames, including “The Slayer of Sorna Prime”, “The Witch of Wurna Minor", and “Captain Killy” – each of which she relishes.`,
    ],
    captainAbility: {
      abilityName: "Ruthlessness",
      abilityIcon: "OfficerAbility_ico_ability_type_156.png",
      abilityDescription: `
      When attacking on a capture node, at the start of each turn, as long as the opponent's ship has a Hull Breach, Captain Tilly increases the Armor Piercing, Shield Piercing and Accuracy of the ship by 50% of the total Defense of all Officers on the ship (cumulative).
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Sadistic",
      abilityIcon: "OfficerAbility_ico_ability_type_153.png",
      abilityDescription: `
      At the start of each round, if the opponent has a Hull Breach, Captain Tilly increases the Armor, Shield deflection and Dodge by 50% of the total Health of all Officers on the ship (cumulative).
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "70%",
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
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "110",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "150",
        officerXp: "250000",
        credits: "4500",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "225",
        officerXp: "500000",
        credits: "10000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Ruthless",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Chang
  {
    name: "Chang",
    grade: "Rare",
    portrait: "chang.png",
    crew: "KLINGON PATRIOTS",
    faction: "Klingon",
    class: "Command",
    description: [
      `Chang is a Klingon of the old ways through and through, despite his cultured affectation. He is seen as merciless by the enemies of the Empire, as he has repeatedly fired upon fleeing vessels, civilian ships, and escape pods.`,
    ],
    captainAbility: {
      abilityName: "Cry Havoc",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      As long as the opponent's ship Hull Health is under 60%, Chang increases the Damage of the weapons by 10%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Dogs of War",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      If the ship deals a Critical Hit to the opponent's ship while it has a Hull Breach, Chang has a 30% chance of delaying its next weapon attack by 1 round.
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Ruthless",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Decius
  {
    name: "Decius",
    grade: "Rare",
    portrait: "decius.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Science",
    description: [
      `Decius has served under multiple commanders throughout his career. His friends on the senate have ensured that he finds preferable appointments; he has served repeatedly against the Klingons, and has become intimately familiar with their strengths and weaknesses.`,
    ],
    captainAbility: {
      abilityName: "Reckless",
      abilityIcon: "OfficerAbility_ico_ability_type_20.png",
      abilityDescription: `
      When fighting a ship with a bigger Strength, Decius increases Accuracy, Armor Piercing and Shield Piercing of the ship by 10%.
        `,
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
      abilityName: "Honor Guard",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      Every time the ship gets hit by a weapon attack, Decius increases its Weapon Damage by 6%.
(Weapons with multiple shots will only trigger this ability once per attack.)
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "6%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "7%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "8%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "9%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "10%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "30",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "45",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "90",
        officerXp: "100000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "120",
        officerXp: "250000",
        credits: "4000",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "180",
        officerXp: "500000",
        credits: "10000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Patriotic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Emperor Georgiou
  {
    name: "Emperor Georgiou",
    grade: "Rare",
    portrait: "emperor_georgiou.png",
    crew: "TERRAN EMPIRE",
    faction: "Neutral",
    class: "Command",
    description: [
      `Her Imperial Majesty, Mother of the Fatherland, Overlord of Vulcan – Emperor Philippa Georgiou carries many titles. They tell the story of her all-encompassing rule over the Terran Empire. Taking what she wants and crushing any who dare oppose her, the Emperor sees herself as untouchable, despite the many enemies she has made along the way.`,
    ],
    captainAbility: {
      abilityName: "Imperatorial Attack",
      abilityIcon: "OfficerAbility_ico_ability_type_157.png",
      abilityDescription: `
      When attacking a player during a takeover, Emperor Georgiou decreases the Defense of all officers on the opponent's ship by 100%.
Decreasing Defense may lead to a decrease in opponent's mitigation
        `,
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
      abilityName: "Bombardment",
      abilityIcon: "OfficerAbility_ico_ability_type_155.png",
      abilityDescription: `
      When attacking a player on a capture node, at the start of each round, Emperor Georgiou increases the number of shots of each weapon by 0.17. (cumulative)
Weapon shots are rounded to the nearest whole number
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "17%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "34%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "115",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "155",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "220",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Ruthless",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Joachim
  {
    name: "Joachim",
    grade: "Rare",
    portrait: "joachim.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Science",
    description: [
      `Joachim has been with Khan since the beginning when they were both selected for a top-secret genetic engineering experiment. Acting as a calm balance to Khan’s fury, Joachim found himself acting as his friend’s moral compass for many years. It was he who counseled for leniency, mercy, and kindness.
      Joachim’s benevolent nature and merciful heart have not endeared him to the rest of the Augments. In their eyes, he is naive with the mind of a child but he has Khan’s ears and so demands their respect.
      Despite his calm exterior, Joachim should never be underestimated. An expert in dozens of Earth’s martial arts and sparring partner to Khan himself, it is rare that Joachim is caught by surprise and even rarer that he is bested.`,
    ],
    captainAbility: {
      abilityName: "Patient Tactician",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      When attacking a Station, Joachim has 50% chances of greatly increasing the mitigation of the ship for the first round of combat.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Unflinching Resolve",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      When attacking a Station, Joachim decreases the Weapon Damage of all opponent's Ships and Defense Platforms by 10%
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "500000",
        credits: "1000",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "1250000",
        credits: "4000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "2500000",
        credits: "10000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Tactical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // John Harrison
  {
    name: "John Harrison",
    grade: "Rare",
    portrait: "john_harrison.png",
    crew: "SECTION 31",
    faction: "Federation",
    class: "Science",
    description: [
      `John Harrison is the identity that Section 31 placed on Khan Noonien Singh's mind after they discovered the Botany Bay; they also altered his face and appearance, to give him fewer connections to his past.

      When awakened from his long sleep, John worked with Alexander Marcus to advance Federation science and Section 31 military capabilities several generations, providing them with long-range torpedoes, superior shields, advanced phasers, and the personal transporter.
      
      Eventually, Khan's own personality emerged, and he rebelled against Admiral Marcus's controls.`,
    ],
    captainAbility: {
      abilityName: "Weapon Designer",
      abilityIcon: "OfficerAbility_ico_ability_type_33.png",
      abilityDescription: `
      When fighting a ship with a bigger Strength, Decius increases Accuracy, Armor Piercing and Shield Piercing of the ship by 10%.
        `,
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
      abilityName: "Sabotage",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      For the first round of combat, John Harrison ignores 60% of the opponent's shield.
      `,
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
          rankBonus: "100%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "57",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "114",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "152",
        officerXp: "250000",
        credits: "4800",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "228",
        officerXp: "500000",
        credits: "12000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Criminal",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Keenser
  {
    name: "Keenser",
    grade: "Rare",
    portrait: "keenser.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Keenser is the first Roylan to enter Starfleet, and is an excellent engineer. By Roylan standards, he is abnormally tall; this made him the target of ridicule on his home world. He learned that stoicism was the best method of dealing with bullies, and has since become remarkably laconic. Never the less, his skills have made him a regular on the Enterprise, and is one of Scotty's most dependable friends.`,
    ],
    captainAbility: {
      abilityName: "Emergency Repairs",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription: `
      As long as it is in the Station, Keenser increases the Hull Health of the ship by 20%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "7%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Fine Tuning",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      As long as it is in the station, Keenser increases the Shield Health of the ship by 20%
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "30%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "35%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Kerla
  {
    name: "Kerla",
    grade: "Rare",
    portrait: "kerla.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Klingon",
    class: "Engineering",
    description: [
      `Kerla is a talented military mind; though he began his career as a lowly engineering officer, his tactical skill has risen him high in Gorkon's esteem.`,
    ],
    captainAbility: {
      abilityName: "Evasive Maneuvers",
      abilityIcon: "OfficerAbility_ico_ability_type_14.png",
      abilityDescription: `
      When the shields are depleted during battle, Kerla increases the Dodge of the ship by 50%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Attack Maneuvers",
      abilityIcon: "OfficerAbility_ico_ability_type_26.png",
      abilityDescription: `
      Kerla increases the Critical Hit Damage by 20% when firing with a Kinetic Weapon.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "25%",
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Advisor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Reliable",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Kumak
  {
    name: "Kumak",
    grade: "Rare",
    portrait: "kumak.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Command",
    description: [
      `Kumak was the tactical officer aboard the Narada. Before the destruction of Romulus, Kumak was an expert with a mining laser, able to bore impressively precise seams into asteroids. That skill transferred over surprisingly well to shooting down Federation starships.`,
    ],
    captainAbility: {
      abilityName: "Discipline",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      At the beginning of each round, Kumak increases the stats of all Officers on the ship by 5%.
        `,
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
      abilityName: "Watch the World burn",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      As long as the enemy ship is Burning, Kumak increases the Armor, Shield Deflection and Dodge of the ship by 40%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "50%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Marksman",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Tactical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Krell
  {
    name: "Krell",
    grade: "Rare",
    portrait: "krell.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Klingon",
    class: "Engineering",
    description: [
      `Krell is a member of Klingon Intelligence and specializes in counter-intelligence against Starfleet and the Federation. He's been involved in the theft of several starship schematics, and has personally tested out the analyses of Starfleet vessel weakness; after all, theft is dishonorable, except in the name of victory for the Klingon Empire.`,
    ],
    captainAbility: {
      abilityName: "Retribution",
      abilityIcon: "OfficerAbility_ico_ability_type_28.png",
      abilityDescription: `
      Every time the ship loses Shield Health from a weapon attack, Krell has a 30% chance of dealing a Hull Breach to the opponent for 1 round.
(Weapons with multiple shots will only trigger this maneuver once per attack.)
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "7%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Federation Contacts",
      abilityIcon: "OfficerAbility_ico_ability_type_35.png",
      abilityDescription: `
      Krell increases the Damage against Federation ships by 25% of the crew's Defense.
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Spy",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Kuron
  {
    name: "Kuron",
    grade: "Rare",
    portrait: "kuron.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Command",
    description: [
      `Boisterous, loud, and joyful - especially in battle - Kuron is the sort of Klingon warrior that leads as much by example and inspiration as by fear and command. Kuron often sings opera during battle, punctuating his vibrato with the crashing of torpedo strikes and explosions of superheated plasma.`,
    ],
    captainAbility: {
      abilityName: "No Negotiations",
      abilityIcon: "OfficerAbility_ico_ability_type_30.png",
      abilityDescription: `
      Kuron has a 50% chance to automatically recharge all kinetic weapons on the first turn.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Merciless Pursue",
      abilityIcon: "OfficerAbility_ico_ability_type_3.png",
      abilityDescription: `
      After destroying a ship, Kuron increases the Impulse Speed by 25% until his ship's next battle or its return to the Station.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "35%",
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
        shards: "30",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "45",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "90",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "120",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "180",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Charismatic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Leonard McCoy
  {
    name: "Leonard McCoy",
    grade: "Rare",
    portrait: "leonard_mc_coy.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `Leonard 'Bones' McCoy is the chief medical officer of the Enterprise, and a good friend and advisor to Captain Kirk. McCoy's skill as a surgeon is renowned, and his work on the Enterprise has included curing diseases, transfusing blood from augments into tribbles, operating on torpedoes, and resuscitating dead captains.`,
    ],
    captainAbility: {
      abilityName: "I'm a Doctor, not a ...",
      abilityIcon: "OfficerAbility_ico_ability_type_42.png",
      abilityDescription: `
      McCoy gives a bonus of 20% to all the Officer Abilities of the Officers on the bridge during combat.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "7%",
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
      abilityName: "Excellent Medicine",
      abilityIcon: "OfficerAbility_ico_ability_type_18.png",
      abilityDescription: `
      Every time the ship gets hit by a weapon attack, McCoy increases the Defense of all the officers on the Bridge by 10%.
(Weapons with multiple shots will only trigger this ability once per attack.)
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Doctor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Livis
  {
    name: "Livis",
    grade: "Rare",
    portrait: "livis.png",
    crew: "NERO'S CREW",
    faction: "Klingon",
    class: "Engineering",
    description: [
      `Livis manned the comms and operations systems on board the Narada. Loyalty to Romulus came first for Livis, and vengeance became the only motivation left for him.`,
    ],
    captainAbility: {
      abilityName: "Wartime Repairs",
      abilityIcon: "OfficerAbility_ico_ability_type_8.png",
      abilityDescription: `
      Livis decreases the time needed to repair the ship by 10% if it is a Battleship.
        `,
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
      abilityName: "Bolstered",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription: `
      If the ship is a Battleship, Livis increases its maximum Hull Health by 20%.
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Ambitious",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Patriotic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Mara
  {
    name: "Mara",
    grade: "Rare",
    portrait: "mara.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Science",
    description: [
      `Mara is Kang's wife and science officer. She is gentle, for a Klingon, but has aided her husband in countless battles. Where Kang commands, Mara coaxes; between the both of them, the soldiers are brought to their best performance.`,
    ],
    captainAbility: {
      abilityName: "Icy Analyst",
      abilityIcon: "OfficerAbility_ico_ability_type_34.png",
      abilityDescription: `
      When fighting Interceptors, Mara increases the Weapon damage of the ship by 20%.
        `,
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
      abilityName: "Wife of a Dahar",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      As long as the opponent ship has a Hull Breach, Mara decreases its Dodge by 20% at the end of each round.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "30%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "35%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Warrior",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Manipulative",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Marla McGivers
  {
    name: "Marla McGivers",
    grade: "Rare",
    portrait: "marla_mc_givers.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Marla McGivers was one of Starfleet’s top historians and a specialist in the late-20th century Eugenics Wars. This put her in a rather unique position; she is one of the only people in the galaxy to know of Khan’s true history.
      Marla was appalled by Starfleet’s treatment of Khan during his trial and subsequent sentencing. To her, Khan was the greatest discovery in the history of the Federation. Shortly after Khan was imprisoned once more, Marla handed in her resignation. She couldn’t possibly stay with an organization that would spit in the face of discovery.
      Marla now works with the Augments, attempting to act as their link to modern humanity. As the only one of them who truly understands this new galaxy, Marla has proven herself a valuable ally to the Augments.`,
    ],
    captainAbility: {
      abilityName: "History Repeats Itself",
      abilityIcon: "OfficerAbility_ico_ability_type_8.png",
      abilityDescription: `
      Marla increases the Repair Speed of the ship by 20%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Let Me Help You",
      abilityIcon: "OfficerAbility_ico_ability_type_2.png",
      abilityDescription: `
      Marla increases the Attack, Defense and Health of the captain by 50%
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "70%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "80%",
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
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "57",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "114",
        officerXp: "500000",
        credits: "1150",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "152",
        officerXp: "1250000",
        credits: "4600",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "2500000",
        credits: "11500",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Marlena Moreau
  {
    name: "Marlena Moreau",
    grade: "Rare",
    portrait: "marlena_moreau.png",
    crew: "SHAKEDOWN CRUISE",
    faction: "Federation",
    class: "Science",
    description: [
      `Marlena Moreau is an up and coming officer in the science division, with an expertise in stellar cartography and astrophysics. She's known for her warm personality and diligent work ethic, often putting in extra hours to help out her fellow officers. She's shown considerable aptitude for people management and morale, so Christopher Pike picked her out for potential command training in the future.`,
    ],
    captainAbility: {
      abilityName: "Keep Going",
      abilityIcon: "OfficerAbility_ico_ability_type_15.png",
      abilityDescription: `
      After winning a battle, Moreau heals the Shield Health by 40%.
        `,
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
      abilityName: "No Fear",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      Moreau decreases the Armor Piercing, Shield Piercing and Accuracy of Hostiles by 30%.
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
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "57",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "114",
        officerXp: "100000",
        credits: "1200",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "152",
        officerXp: "250000",
        credits: "4800",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "228",
        officerXp: "500000",
        credits: "12000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Mirek
  {
    name: "Mirek",
    grade: "Rare",
    portrait: "mirek.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Klingon",
    class: "Science",
    description: [
      `Mirek is Charvanek's younger sister, and a capable science officer. Her expertise is in deflection fields and radiation phenomena, and has aided her sister in tracking wilier Klingon opponents.`,
    ],
    captainAbility: {
      abilityName: "Burning Vengeance",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `
      Every time the ship gets hit by a weapon attack, Mirek has a 20% chance of Burning the opponent's ship for 1 round.
(Weapons with multiple shots will only trigger this maneuver once per attack.)
        `,
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
      abilityName: "Acid bitterness",
      abilityIcon: "OfficerAbility_ico_ability_type_35.png",
      abilityDescription: `
      Krell increases the Damage against Federation ships by 25% of the crew's Defense.
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Patriotic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Navi
  {
    name: "Navi",
    grade: "Rare",
    portrait: "navi.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Neutral",
    class: "Science",
    description: [
      `Exceptional from birth, Navi was one of the chosen few to be subjected to the Augment experiments of the 1990s. However, unlike many of her fellow subjects, she managed to retain her humanity, compassion, and level-headedness.
      Navi and Khan quickly became friends during the experiments and their subsequent training. Where Khan was equal parts calculating and raw fury, Navi was compassionate and calm. She acted as a positive influence on Khan and was often the only one who could talk him down.
      After Khan freed Navi from her cryosleep, she saw immediately that he was in desperate need of her counsel. He had become consumed by rage and his desire for vengeance. Only she could pull him back from the brink of darkness.
      Of course, she is still willing to bend the rules as necessary, if it means that she can better serve Khan and her Augment family, so long as it does not involve cruelty or unnecessary violence.
      Though she finds herself in a strange, hostile galaxy, she is determined to hold on to her most precious possession… Her kind heart.`,
    ],
    captainAbility: {
      abilityName: "Drastic Measures",
      abilityIcon: "OfficerAbility_ico_ability_type_27.png",
      abilityDescription: `
      At the start of each round, if the ship has a Hull Breach, Navi increases the Critical Hit damage bonus by 20% for this round.
        `,
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
      abilityName: "Guardian Angel",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      At the start of each round, if the ship has a Hull Breach, Navi increases the Armor, Shield Deflection and Dodge of the ship by 50% for this round.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "85%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "110%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "140%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "85",
        officerXp: "500000",
        credits: "1150",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "145",
        officerXp: "1250000",
        credits: "4600",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "195",
        officerXp: "2500000",
        credits: "11500",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Reliable",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Nyota Uhura
  {
    name: "Nyota Uhura",
    grade: "Rare",
    portrait: "nyota_uhura.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Nyota Uhura is the Chief Communications Officer aboard the Federation flagship, the USS Enterprise. She met James T. Kirk and Spock at Starfleet Academy in 2255 and went on to serve with them on their five-year mission.

      Uhura has an incredible talent for xenolinguistics, showing an acute capability to recognize multiple alien languages and engage in spoken Klingon.
      
      She was instrumental in the detection of Nero's attack on Vulcan and was a key player in the capture of Khan Noonien Singh on Kronos in 2259.`,
    ],
    captainAbility: {
      abilityName: "Hailing Frequencies Open",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      When the shield is depleted, Uhura has a 50% chance of delaying the next opponent weapon fire by one Round.
        `,
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
      abilityName: "Target That Signal",
      abilityIcon: "OfficerAbility_ico_ability_type_46.png",
      abilityDescription: `
      Uhura increases the Accuracy of the ship she's in by 40%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "60%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "70%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "80%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "54",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "108",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "144",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "216",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Resourceful",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // One of Ten
  {
    name: "One of Ten",
    grade: "Rare ",
    portrait: "krell.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Command",
    description: [
      `An engineer assigned to active duty aboard the USS Westchester, Daniel Morgan was a promising young officer with a potentially bright future in Starfleet Operations. However, when the Westchester encountered the Borg in the mid 23rd century, this future was irrevocably altered. With his fellow crewmates quickly assimilated into the Borg Collective, Morgan was the last to undergo this procedure. With a fateful last-minute intervention from a Starfleet rescue fleet, the assimilation of Morgan was interrupted and he was returned to the care of the Federation. With both the memories and scars of the incident now a part of him for the rest of his life, Morgan uses his brief experience as part of the Collective in order to combat the Borg threat.`,
    ],
    captainAbility: {
      abilityName: "Adaptive Shielding",
      abilityIcon: "OfficerAbility_ico_ability_type_91.png",
      abilityDescription: `
      The ship mitigates 5% more damage to the Shield Health instead of the Hull Health.
        `,
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
      abilityName: "Bodyguard",
      abilityIcon: "OfficerAbility_ico_ability_type_13.png",
      abilityDescription: `
      The Protected Cargo is increased by 30%
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
        shards: "40",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "65",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "3000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "125",
        officerXp: "",
        credits: "1300",
        badge: "1",
        activeNanoprobe: "25000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "170",
        officerXp: "",
        credits: "5200",
        badge: "2",
        activeNanoprobe: "100000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "250",
        officerXp: "",
        credits: "13000",
        badge: "4",
        activeNanoprobe: "500000",
      },
    ],
    traits: [
      {
        traitName: "Assimilated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Cybernetic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Pan
  {
    name: "Pan",
    grade: "Rare ",
    portrait: "pan.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Pan, like all of the Augments, was taken from his family as a child and subjected to experimentation in the 1990s. However, Pan’s body reacted badly to the DNA resequencing. Where Khan and the other survivors were rewarded with heightened reflexes, incredible strength and superhuman intelligence, Pan was left in a coma.
      He was kept alive on life support while comatose, and was eventually saved and cryogenically frozen with Khan and the other Augments.
      Now, he has been awoken from his coma, after two hundred years, to a completely new world and a startling new set of abilities. He has struggled to come to terms with his new skills and the vast array of incredible technologies this universe has to offer. He has even been known to cause catastrophic ship failures due to his lack of experience and general clumsiness.
      Still, despite these flaws, Pan remains a loyal and trusted member of Khan’s family and they will stand beside him, for better or worse.`,
    ],
    captainAbility: {
      abilityName: "Getting Up To Speed",
      abilityIcon: "OfficerAbility_ico_ability_type_3.png",
      abilityDescription: `
      Pan increases the Impulse Speed of the ship by 20%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "5%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Mistakes Were Made",
      abilityIcon: "OfficerAbility_ico_ability_type_129.png",
      abilityDescription: `
      At the start of each round, Pan has a 25% chance of applying a Hull Breach to his own ship for 3 rounds.
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
          rankBonus: "45%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "55%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "65%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "50",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "80",
        officerXp: "500000",
        credits: "1050",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "140",
        officerXp: "1250000",
        credits: "4400",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "190",
        officerXp: "2500000",
        credits: "10500",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Survivor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Paul Stamets
  {
    name: "Paul Stamets",
    grade: "Common ",
    portrait: "paul_stamets.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `When, in generations to come, students at Starfleet Academy study the brightest minds in Federation history, one name will stand out from all others; Paul Stamets.
      A genius in every sense of the word, Stamets rose through the ranks of Starfleet based on his masteries of biology, physics and quantum mechanics. He, along with a beloved friend, created technologies that would propel Starfleet to even greater heights, but none more so than his patented Spore Drive.
      When the war started, this marvelous technology was co-opted by Starfleet and pressed into service against the Klingons. Stamets loathed the idea of his creation being mishandled by incompetent warmongers and so insisted on managing the technology himself.
      Since then, he has seen the Discovery through countless unwinnable battles and treacherous situations, always counting on his brilliant mind to carry them to victory.`,
    ],
    captainAbility: {
      abilityName: "Network Navigator",
      abilityIcon: "OfficerAbility_ico_ability_type_146.png",
      abilityDescription: `
      Stamets increases the Cost Efficiency of Jumping and Summoning with the Discovery by 20%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "3%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Snarky Genius",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      When defending against a Player, Stamets decreases the opponent's Armor Piercing by 40%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "40%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "80%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "120%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "160%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "200%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11,000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Inventor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Physicist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Raphaël DuPont
  {
    name: "Raphaël DuPont",
    grade: "Rare",
    portrait: "rapha_l_dupont.png",
    crew: "SURVEYORS & MINERS",
    faction: "Federation",
    class: "Command",
    description: [
      `The Dupont name carries with it an immense weight. Socialites, artists, leaders. In France, the Dupont name is royalty.
      So it is fair to say that Raphaël Dupont, second son of esteemed artist Aumier Dupont, had something of an advantage over his peers.
      Given the best education his father could provide, Raphaël proved to be something of a prodigy of mathematics. His grasp of thermodynamics and theoretical physics would earn him high praise in the academic field. However, he quickly grew bored of the endless stream of peer reviews and university lectures. He found himself enthralled by tales of material miners beyond Federation space. He longed for the danger, the adrenaline, the freedom! But instead, he was stuck on Earth, bound by Federation laws and regulation. He had had enough. It was time for him to forge his own path.
      Stealing away one dark night with his family’s prized starship under his possession, he took off beyond the stars, seeking fortune and the adventure of a lifetime.`,
    ],
    captainAbility: {
      abilityName: "Grade III Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_159.png",
      abilityDescription: `
      Raphaël DuPont increases the rate of G3 Crystal, Gas and Ore Mining by 35%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Hidden Stash",
      abilityIcon: "OfficerAbility_ico_ability_type_13.png",
      abilityDescription: `
      Raphaël DuPont increases the Protected Cargo by 50%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "150%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "200%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Explorer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Rima
  {
    name: "Rima",
    grade: "Rare ",
    portrait: "rima.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Command",
    description: [
      `A billionaire in his previous life, Rima is the only human who voluntarily signed up to be part of the Augment experiments, believing himself to be a prime specimen for such procedures.
      At the height of the Augments’ power, Rima committed himself to regaining the wealth he had lost along the way. He remained neutral during the Eugenics Wars, using stealth tactics and his natural cunning to stay alive.
      However, once the humans started rounding up the last surviving Augments, Rima was faced with the reality that his horde of wealth was about to collapse yet again and soon found himself allied with Khan.
      While he is still a loyal member of Khan’s crew, he has never lied about his true intentions: to rebuild the financial empire he once sat atop.`,
    ],
    captainAbility: {
      abilityName: "You'll pay for that",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      At the start of each round, if the ship has a Hull Breach, Rima increases the Damage of the ship by 40% for this round.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Systems Critical",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `
      At the start of each round, if the ship has a Hull Breach, Rima adds 5% to Critical Hit chances
      `,
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
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "60",
        officerXp: "50000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "90",
        officerXp: "500000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "150",
        officerXp: "1250000",
        credits: "4500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "200",
        officerXp: "2500000",
        credits: "11000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Augment",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Charismatic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Ro Mudd
  {
    name: "Krell",
    grade: "Rare ",
    portrait: "ro_mudd.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Command",
    description: [
      `Harry Mudd’s half-Human, half-Bajoran daughter, she grew a deep resentment towards her father after being abandoned by him at an early age. However, she couldn’t resist following in his footsteps, becoming one of the most notorious thieves and smugglers in the galaxy.

      With her eventual goal to take over her father’s operations, Ro is driven by ambition, rather than the ego and cynicism that drives Harry, and wants to build a sustainable empire beyond her father’s schemes and vanity projects.`,
    ],
    captainAbility: {
      abilityName: "Endless Ambition",
      abilityIcon: "OfficerAbility_ico_ability_type_2.png",
      abilityDescription: `
      Ro Mudd increases her stats by 50% when she is the captain.
        `,
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
      abilityName: "Fatal Charm",
      abilityIcon: "OfficerAbility_ico_ability_type_35.png",
      abilityDescription: `
      At the start of combat, Ro Mudd has a 20% chance of increasing the Damage dealt by the ship by 300% of the total Attack of all officers on the ship for the whole combat.
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
        shards: "30",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "45",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "85",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "110",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "160",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Ambitious",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Criminal",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Saru
  {
    name: "Saru",
    grade: "Rare ",
    portrait: "saru.png",
    crew: "MUDD'S COMPANY",
    faction: "Federation",
    class: "Command",
    description: [
      `Commander Saru knows better than anyone what it is to feel fear. He lived his life on Kaminar constantly afraid, waiting for death to come, but it never did. Instead, he used his ingenuity to escape and forged a new life in Starfleet.
      Ever since the Battle at the Binary Stars, Saru has continued to excel, proving to all who encounter him that he represents the best Starfleet has to offer. He is compassionate, wise, measured and cautious. All elements of a great Starfleet officer.
      Though his evolutionary tendency toward fear may hold him back at times, Saru has proven time and again that he will not let anything stop him from achieving his goals or protecting those closest to him.`,
    ],
    captainAbility: {
      abilityName: "Precautions",
      abilityIcon: "OfficerAbility_ico_ability_type_132.png",
      abilityDescription: `
      When fighting players, every time your ship is hit by a Critical Hit, Saru decreases the Critical Hit Chance of the opponent's ship by 10%.
        `,
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
      abilityName: "Avoid Danger",
      abilityIcon: "OfficerAbility_ico_ability_type_19.png",
      abilityDescription: `
      When fighting players, Saru decreases the opponent's weapon damage by 30%.
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
        shards: "32",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "48",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "96",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "128",
        officerXp: "250000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "192",
        officerXp: "500000",
        credits: "10500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Uncompromising",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Cautious",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Seven of Ten
  {
    name: "Seven of Ten",
    grade: "Rare ",
    portrait: "seven_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Science",
    description: [
      `Even the Romulan Empire, with all of its power, cannot stop the unrelenting Borg assault. In the initial days of the invasion, the Romulans were content to watch from the sidelines as their enemies were assimilated, relying on their famed defensive fleets and intelligence agencies to protect them. They were mistaken. Decius, once a proud leader in the Romulan military, was taken captive by the Borg during a routine patrol of the Neutral Zone border. They had no warning and no chance of victory against a Borg Cube. He was subjected to the horrifying assimilation process and was forced to turn his brilliant strategic mind against his homeworld.`,
    ],
    captainAbility: {
      abilityName: "Resistance is Futile",
      abilityIcon: "OfficerAbility_ico_ability_type_94.png",
      abilityDescription: `
      When fighting a Borg Tactical Probe, Seven of Ten has a 20% chance of increasing the number of shots of each weapon by 2.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "35%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "35%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Strengthen the Unimatrix",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Seven of Ten increases the Health of every Officer on the ship by 60%.
      `,
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
          rankBonus: "100%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "40",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "65",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "3000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "125",
        officerXp: "",
        credits: "1300",
        badge: "1",
        activeNanoprobe: "25000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "170",
        officerXp: "",
        credits: "5200",
        badge: "2",
        activeNanoprobe: "100000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "250",
        officerXp: "",
        credits: "13000",
        badge: "4",
        activeNanoprobe: "500000",
      },
    ],
    traits: [
      {
        traitName: "Assimilated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Spock
  {
    name: "Spock",
    grade: "Rare ",
    portrait: "spock.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Spock is a half-Vulcan, half-Human Commander in Starfleet, serving as First Officer aboard the USS Enterprise. Spock began his career as an instructor at Starfleet Academy having refused an invitation to join the Vulcan Science Academy, where he created the infamous Kobayashi Maru test simulation.

      Spock witnessed the destruction of his homeworld, Vulcan, first-hand while assisting in a rescue attempt. He briefly took the Captain's chair of the Enterprise before relinquishing the position to James T. Kirk. Since then, Spock has been Kirk's trusted Commander and Chief Science Officer.
      
      Spock has had the paradoxical honor of being acquainted with his older self, albeit from a parallel reality, whom he has turned to for guidance on occasion.`,
    ],
    captainAbility: {
      abilityName: "Logical",
      abilityIcon: "OfficerAbility_ico_ability_type_45.png",
      abilityDescription: `
      Spock increases the Accuracy of the ship by 15% at the beginning of each Round in combat.
        `,
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
      abilityName: "Illogical",
      abilityIcon: "OfficerAbility_ico_ability_type_16.png",
      abilityDescription: `
      While the ship has Morale, Spock restores Shield Health to an amount equal to 25% of the Defense of the Officers on the ship.
      `,
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
          rankBonus: "100%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "400%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "750%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "57",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "114",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "152",
        officerXp: "250000",
        credits: "4800",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "228",
        officerXp: "500000",
        credits: "12000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Scientist",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Stonn
  {
    name: "Stonn",
    grade: "Rare ",
    portrait: "stonn.png",
    crew: "SURVEYORS & MINERS",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Stonn is a geologist and surveyor; upon his first meeting with T'Pring he was enamored with her, and pursued her. After Spock and T'Pring dissolved their betrothal, Stonn and T'Pring were married.`,
    ],
    captainAbility: {
      abilityName: "Ore Miner",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription: `
      Stonn increases the Mining Rate of the ship by 40% when mining Ore.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "20%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Pack Rat",
      abilityIcon: "OfficerAbility_ico_ability_type_1.png",
      abilityDescription: `
      Stonn increases the Cargo size of the ship by 20%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "20%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "25%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "30%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "35%",
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
        shards: "18",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "36",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "72",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "108",
        officerXp: "250000",
        credits: "1200",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "198",
        officerXp: "500000",
        credits: "4800",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Surveyor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Tal
  {
    name: "Tal",
    grade: "Rare ",
    portrait: "tal.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Engineering",
    description: [
      `Tal is Charvanek's second in command. An orderly and efficient man, he has devoted his career to supporting his captain in all her endeavors, as through her efforts, he sees a glorious future for Romulus.`,
    ],
    captainAbility: {
      abilityName: "Loyal Officer",
      abilityIcon: "OfficerAbility_ico_ability_type_32.png",
      abilityDescription: `
      When fighting Battleships, Tal increases the Weapon damage of the ship by 20%
        `,
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
      abilityName: "Resistance",
      abilityIcon: "OfficerAbility_ico_ability_type_35.png",
      abilityDescription: `
      As long as the opponent ship is Burning, Tal decreases its Hull Health by 5% each turn.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "5%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "6%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "7%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "8%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "10%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "51",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "102",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "136",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "204",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Advisor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Patriotic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Tasha Yar
  {
    name: "Tasha Yar",
    grade: "Rare ",
    portrait: "tasha_yar.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Natasha Yar has her beginnings on the failed Federation colony Turkana IV, where she was born in 2337. Orphaned at a young age, she spent her early years fighting for survival and eking out an existence for herself and her sister. Tasha managed to escape Turkana IV in 2352 and joined Starfleet soon after. The lawlessness of Tasha’s harsh beginnings were her inspiration for becoming a Starfleet security officer, and her bravery and warrior’s soul allowed her to flourish in the role. Tasha’s mastery of martial arts and hand-to-hand combat make her a formidable opponent and a valued chief of security on the USS Enterprise-D.

      In her free time, Tasha likes to hone her aikido skills on the holodeck and participate in martial-arts and parrises squares tournaments with other members of the Enterprise crew.`,
    ],
    captainAbility: {
      abilityName: "Security Officer",
      abilityIcon: "OfficerAbility_ico_ability_type_132.png",
      abilityDescription: `
      asha Yar reduces the Crit Chance of Mission Hostiles (yellow hostiles) by 10%.
        `,
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
      abilityName: "Code of Honor",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      As long as the opponent ship is Burning, Tal decreases its Hull Health by 5% each turn.
      `,
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
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "110",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "150",
        officerXp: "250000",
        credits: "4500",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "215",
        officerXp: "500000",
        credits: "10000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Security",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // TOS Hikaru Sulu
  {
    name: "TOS Hikaru Sulu",
    grade: "Rare ",
    portrait: "tos_hikaru_sulu.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Hikaru Sulu, born in San Francisco, USA, in 2237, is the helmsman of the USS Enterprise. A naturally gifted pilot, Sulu has a reputation as one of the most skilled hands in Starfleet. He is an expert in close combat, particularly with bladed weapons, and has a keen interest in antique firearms. Sulu is trained in judo techniques and is an amateur botanist.
      Sulu is a charismatic and energetic member of James T. Kirk’s bridge crew and one that the Captain trusts with his life.`,
    ],
    captainAbility: {
      abilityName: "Optimist At Heart",
      abilityIcon: "OfficerAbility_ico_ability_type_6.png",
      abilityDescription: `
      At the start of each round, TOS Hikaru Sulu has a 55% chance of inspiring Morale for one round.
        `,
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
      abilityName: "I'll Protect You!",
      abilityIcon: "OfficerAbility_ico_ability_type_167.png",
      abilityDescription: `
      If the ship is an Explorer, at the start of each turn, if the ship has Morale, TOS Hikaru Sulu increases its Critical Hit Chance by 6% for that round.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "6%",
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "110",
        officerXp: "100000",
        credits: "1125",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "140",
        officerXp: "250000",
        credits: "4500",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "215",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Pilot",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Perceptive",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // TOS Leonard McCoy
  {
    name: "TOS Leonard McCoy",
    grade: "Rare ",
    portrait: "tos_leonard_mccoy.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `Leonard “Bones” McCoy was born in Georgia, USA in 2227. He studied medicine in the mid 2240s in Mississippi, where he gained a reputation as a practical joker. His steady hand and impeccable memory made him a naturally gifted doctor, and when he joined Starfleet, quickly rose through the ranks and gained a position on the flagship of the Federation, the Enterprise. There, he took on the role of Chief Medical Officer and Head of Life Sciences.
      McCoy is a regular volunteer for away team excursions and has been involved in many large-scale medical operations that have saved multiple civilizations from outbreaks and serious ecological disaster.`,
    ],
    captainAbility: {
      abilityName: "We're Rescuing You!",
      abilityIcon: "OfficerAbility_ico_ability_type_166.png",
      abilityDescription: `
      When defending, TOS Leonard McCoy increases the Shield Deflection, Armor, and Dodge of the ship by 300% of the Health of all Officers on the ship.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "100%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "100%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Just An Old Country Doctor",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      If the ship is an Explorer, TOS Leonard McCoy increases the Attack, Defense, and Health of all Officers on the ship by 20%.
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
        shards: "34",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "50",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "105",
        officerXp: "100000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "135",
        officerXp: "250000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "200",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Doctor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // TOS Montgomery Scott
  {
    name: "TOS Montgomery Scott",
    grade: "Rare ",
    portrait: "tos_montgomery_scott.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Montgomery Scott was born in Scotland, Earth in the year 2222. A self described “old Aberdeen pub-crawler”, Scotty is no stranger to having his crew’s back in both the good times and the bad.
      As soon as he came of age, Scotty joined Starfleet and began his training as an engineer. From these humble beginnings, he rose to the ranks of second officer and chief engineer of the USS Enterprise - a position he diligently maintained for nearly three decades. Through his tenure as chief engineer, he garnered a well-earned reputation as a “miracle worker” of sorts - when it came to the Enterprise, no issue was too big or too complicated for Scotty to handle.
      A prime authority in his field, Scotty’s knowledge of Constitution-class starships eventually outgrew the knowledge of those who designed them, including Enterprise designer Lawrence “Larry” Marvick.
      A man gifted with a degree of technical skills and expertise rarely paralleled among his counterparts, Scotty is of paramount importance to the makeup of the Enterprise crew. With his arrival in this strange, new timeline, Scotty brings with him a keen sense of curiosity, and a willingness to learn anything he can about his new surroundings.`,
    ],
    captainAbility: {
      abilityName: "A Garbage Scow!!",
      abilityIcon: "OfficerAbility_ico_ability_type_168.png",
      abilityDescription: `
      TOS Scotty increases the Warp Range of Explorers by 4.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "3",
        },
        {
          synergyClass: "Command",
          synergyBonus: "3",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "2",
        },
      ],
    },
    officerAbility: {
      abilityName: "She'll launch on time",
      abilityIcon: "OfficerAbility_ico_ability_type_170.png",
      abilityDescription: `
      TOS Scotty increases the Repair Cost Efficiency of the ship by 10%.
This ability is applied after all other bonuses from research and/or your station and stacked on top.
      `,
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
        shards: "37",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "110",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "155",
        officerXp: "250000",
        credits: "4700",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "220",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Genius",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // TOS Nyota Uhura
  {
    name: "TOS Nyota Uhura",
    grade: "Rare ",
    portrait: "tos_nyota_uhura.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Many speak of “unsung heroes” aboard starships. Those intrepid souls who man the engines, run vital diagnostics or keep the very lights on. Their work will win them no fame, nor will they go down in history as heroes, but they are vital nonetheless.
      And none aboard the Enterprise could claim to be more vital than Lieutenant Nyota Uhura.
      Multi-lingual from a young age, Uhura had a fascination with language and communication. She was fluent in Swahili by the time she could walk and had an aptitude for mathematics before she started school.
      No-one was surprised when this prodigy enlisted in Starfleet.
      Uhura quickly made a name for herself as someone intelligent, reliable and extremely capable. She was assigned to the USS Enterprise as its department head of the communications section and was directly responsible for communications aboard Starfleet’s flagship vessel.
      Her quick-thinking, diplomatic nature and intelligence won many victories for the Enterprise. Her skillset was so varied that she was even able to man the helm, navigation, and main science station when the need arose.`,
    ],
    captainAbility: {
      abilityName: "Sorry, Neither",
      abilityIcon: "OfficerAbility_ico_ability_type_164.png",
      abilityDescription: `
      When fighting players, as long as the ship has Morale, TOS Nyota Uhura decreases the opponent's Critical Hit Chance by 10%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "100%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "100%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Modulation Frequency Found",
      abilityIcon: "OfficerAbility_ico_ability_type_165.png",
      abilityDescription: `
      When fighting players, as long as the ship has Morale, TOS Nyota Uhura removes 8% from the Shield Mitigation of the opponent's ship.
Shield Mitigation determines the amount of damage dealt to the shield health
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
          rankBonus: "12%",
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
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "105",
        officerXp: "100000",
        credits: "1125",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "145",
        officerXp: "250000",
        credits: "4500",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "215",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Resourceful",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Analytical",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // TOS Pavel Chekov
  {
    name: "TOS Pavel Chekov",
    grade: "Rare ",
    portrait: "tos_pavel_chekov.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Born in Russia, Earth in the year 2245, Pavel Andreievich Chekov was an only child with dreams and aspirations that would eventually take him to the stars and beyond.
      At the age of 22, Chekov was granted his first assignment when he was allocated a role among the crew of the USS Enterprise - the vessel he would come to know as home for the majority of his career. Under the command of James T. Kirk, Chekov would eventually rise to the roles of navigator and security chief of the Enterprise.
      A strong navigator with a keen sense of direction and orientation even in the most strenuous of environments, Chekov is a vitally important component of the USS Enterprise’s reputation.`,
    ],
    captainAbility: {
      abilityName: "Young Genius",
      abilityIcon: "OfficerAbility_ico_ability_type_169.png",
      abilityDescription: `
      TOS Chekov increases the Impulse Speed of Explorers by 10.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "10",
        },
        {
          synergyClass: "Command",
          synergyBonus: "5",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10",
        },
      ],
    },
    officerAbility: {
      abilityName: "Security Plans",
      abilityIcon: "OfficerAbility_ico_ability_type_171.png",
      abilityDescription: `
      When attacked while on a Capture or Mining Node by a player, TOS Chekov decreases the opponent's damage by 30%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
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
          rankBonus: "150%",
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
        shards: "60",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "105",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "140",
        officerXp: "250000",
        credits: "4450",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "205",
        officerXp: "500000",
        credits: "11250",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Engineer",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Genius",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Two of Ten
  {
    name: "Two of Ten",
    grade: "Rare ",
    portrait: "two_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Science",
    description: [
      `The vast majority of those who make up the overwhelming numbers of the Borg were not born into the Collective. At one point in time, they were all individuals with their own unique lives, hopes and aspirations. Two of Ten, known in their former life as Darrohk, was one of those individuals.

      At the height of their military career, Darrohk was a commanding officer aboard the Lhohnu - a shining jewel in the Romulan Star Empire's mining fleet. At one point in time, the Lhohnu oversaw the acquisition of more than twenty percent of the Empire’s entire Dilithium reserves. Specializing in mining expeditions in some of the more tumultuous and dangerous systems in the galaxy, Darrohk and their fellow crew aboard the Lhohnu were a force to be reckoned with in the excavation business.
      
      It was during one of these fateful runs to an outlying system where Darrohk would first encounter the Borg. The Borg’s attack was swift and merciless, with the entire crew of the Lhohnu apprehended and assimilated into the Collective in a matter of minutes. It wasn’t long until Darrohk, now known as Two of Ten, was assisting the Collective in apprehending and assimilating their former Romulan brothers and sisters.
      
      However, Two of Ten’s time in the Collective was to be cut short when, after successfully holding back the Mega Cube, the Romulans were able to liberate them and thousands of other Borg drones from the Collective. While their time in the Collective was brief, they would go on to bear the physical and mental scars of their experiences with the Borg - experiences that would make it impossible to ever resume a normal life. Instead, Two of Ten found solace in Letik and her congregation, and would go on to assist them in their Doomsday plot. Tragically, it was only a matter of time until Two of Ten’s augmented body began to suffer the effects of the reclamation effort. Considered nothing more than a hindrance, they were now abandoned by Letik and her followers.
      
      Castigated by modern Romulan society, and abandoned by Letik and her cabal of Doomsday conspirators, Two of Ten now finds themself alone in a galaxy that has wrought an abundance of hardships upon them. However, this ever-resourceful Romulan will persevere, refusing to buckle under the weight of a fate they never asked for.`,
    ],
    captainAbility: {
      abilityName: "Storage Optimization",
      abilityIcon: "OfficerAbility_ico_ability_type_1.png",
      abilityDescription: `
      Two of Ten increases the Cargo size of the ship by 20%.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5%",
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
      abilityName: "Extraction Protocol",
      abilityIcon: "OfficerAbility_ico_ability_type_175.png",
      abilityDescription: `
      Two of Ten increases the rate of G3 and G4 Crystal, Gas and Ore Mining by 50%.
      `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "55%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "60%",
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
        shards: "40",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "3000",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "65",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "3000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "125",
        officerXp: "",
        credits: "1300",
        badge: "1",
        activeNanoprobe: "25000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "170",
        officerXp: "",
        credits: "5200",
        badge: "2",
        activeNanoprobe: "100000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "250",
        officerXp: "",
        credits: "13000",
        badge: "4",
        activeNanoprobe: "500000",
      },
    ],
    traits: [
      {
        traitName: "Assimilated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Cybernetic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Vemet
  {
    name: "Vemet",
    grade: "Rare ",
    portrait: "tos_montgomery_scott.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Science",
    description: [
      `Vemet worked on the Narada for years; a friend of Nero's and a constant voice of caution and reason, Vemet helped steer the crew through many a difficult situation. When Nero called for revenge, Vemet advised care and planning, but provided his service all the same.`,
    ],
    captainAbility: {
      abilityName: "Romulan Tenacity",
      abilityIcon: "OfficerAbility_ico_ability_type_39.png",
      abilityDescription: `
      If the ship survives an attack that depletes its shields and is destroyed in one of the following attacks during the same battle, the battle is lost but Vemet heals 5% of the Hull Health and the ship survives.
        `,
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
      abilityName: "Feel the Heat",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `
      At the beginning of each round, if the opponent's ship is Burning, Vemet decreases its Shield Health by an amount equal to 25% of the Health of all Officers on the ship.
      `,
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
          rankBonus: "100%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "400%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "750%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "54",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "108",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "144",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "216",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Advisor",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Cautious",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Wesley Crusher
  {
    name: "Wesley Crusher",
    grade: "Rare ",
    portrait: "wesley_crusher.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Wesley Crusher is a gifted young officer with the hopes of one day becoming a leader within the ranks of the Federation. As the son of the USS Enterprise’s Chief Medical Officer, Doctor Beverly Crusher, Wesley has grown up almost exclusively on starships. Despite his young age, Crusher has been recognized as a remarkable talent for science and navigation, and was given the rank of Acting-Ensign so that he could have first-hand bridge experience prior to his acceptance to Starfleet Academy.

      Wesley’s father, Jack Crusher, lost his life on an away mission when the boy was only five years old. Growing up without his father has meant that Wesley has become an independent thinker, one who has many role models among the crew that works around him. He has a special attachment to Captain Picard himself, and many of the other bridge officers on the Enterprise.`,
    ],
    captainAbility: {
      abilityName: "When The Bough Breaks",
      abilityIcon: "OfficerAbility_ico_ability_184.png",
      abilityDescription: `
      Wesley Crusher increases Weapon Damage against Hostiles and Armadas by 100% of Crew Attack.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Traveler's Scion",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Wesley Crusher increases his own stats by 20%.
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
          rankBonus: "70%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "100%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "200%",
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
        shards: "70",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "115",
        officerXp: "100000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "155",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "230",
        officerXp: "500000",
        credits: "11000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Resourceful",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Genius",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Worf
  {
    name: "Worf",
    grade: "Rare ",
    portrait: "worf.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Fearless warrior. A man of two worlds.

      Worf, son of Mogh, is a Klingon warrior and Starfleet officer. At a young age, Worf lived on the Khitomer colony, which was eventually attacked by Romulan forces, leaving him orphaned. Luckily, he was rescued by a Federation vessel, the USS Intrepid, where he was adopted by the Rozhenko family. Worf grew up surrounded by humans, but kept close ties to his ancestral home. As the first of his kind to ever serve in Starfleet, he has constantly faced ridicule and rejection from fellow Klingons. Worf fights twice as hard for his honor, and has become a battle-sharpened edge as a result.
      
      Worf’s place as Chief Security aboard the Enterprise came after a stint as conn officer. He regularly reports to away team duty as the front line of defense for the landing party. Worf is a fearless and formidable warrior, with a bat’leth, or helming the tactical controls of a starship.`,
    ],
    captainAbility: {
      abilityName: "Headlong Into Battle",
      abilityIcon: "OfficerAbility_ico_ability_type_9.png",
      abilityDescription: `
      After winning a battle, Worf increases the Warp Speed of the ship by 70%. This bonus does not stack, and is removed when returning to your station.
        `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "15%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "15%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Only Fools Have No Fear",
      abilityIcon: "OfficerAbility_ico_ability_type_189.png",
      abilityDescription: `
      Worf increases all Mitigation stats against non-player targets by 20%.
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
        shards: "38",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "55",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "115",
        officerXp: "100000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "155",
        officerXp: "250000",
        credits: "4800",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "225",
        officerXp: "500000",
        credits: "12000",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Security",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Dedicated",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
  // Yuki Sulu
  {
    name: "Yuki Sulu",
    grade: "Rare ",
    portrait: "yuki_sulu.png",
    crew: "SECTION 31",
    faction: "Federation",
    class: "Engineering",
    description: [
      `Since joining Section 31, Yuki Sulu, Hikari Sulu's sister, has been involved in the management of John Harrison and an operation that resulted in a significant portion of both the Klingon Empire and the Romulan Star Empire's navies being destroyed, as well as the recovery of the last piece of red matter.`,
    ],
    captainAbility: {
      abilityName: "Disrupting Field",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      Yuki Sulu decreases the Shield Health of the opponent's ship by 10% each round.
        `,
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
      abilityName: "Romulan Grudge",
      abilityIcon: "OfficerAbility_ico_ability_type_37.png",
      abilityDescription: `
      Yuki Sulu increases the Weapon Damage against Romulan ships by 25% of the Health of the crew on the ship.
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
        shards: "36",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "54",
        officerXp: "10000",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "108",
        officerXp: "100000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "144",
        officerXp: "250000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "216",
        officerXp: "500000",
        credits: "11500",
        badge: "2",
      },
    ],
    traits: [
      {
        traitName: "Spy",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 1500,
          },
          {
            traitLvl: 2,
            traitCost: 2700,
          },
          {
            traitLvl: 3,
            traitCost: 3800,
          },
        ],
      },
      {
        traitName: "Patriotic",
        traitTier: 1,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 7600,
          },
          {
            traitLvl: 2,
            traitCost: 6000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 8850,
          },
        ],
      },
    ],
  },
];
