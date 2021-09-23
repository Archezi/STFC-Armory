officers = [
  // Alexander Marcus
  {
    name: "Alexander Marcus",
    grade: "Epic",
    portrait: "alexander_marcus.png",
    crew: "SECTION 31",
    faction: "Federation",
    class: "Command",
    description: [
      `Alexander Marcus was a senior admiral in Starfleet and a member of Section 31, the clandestine organization hidden within the Federation. Admiral Marcus spearheaded the significant military build-up of Starfleet forces after the Nero incident; he viewed the Klingon Empire as a grave threat to the Federation, and believed war with them was inevitable.

      Kirk and Khan worked together to put an end to Alexander Marcus's scheme to strike the Klingon homeworld of Kronos, though the alliance didn't last.`,
    ],
    captainAbility: {
      abilityName: "Overpower",
      abilityIcon: "OfficerAbility_ico_ability_type_6.png",
      abilityDescription: `
      At the start of each round, if the opponent's Hull Health is under 80% of its starting total, Alexander Marcus has 80% chance of inspiring Morale to the ship for 3 rounds.
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
      abilityName: "Shady Methods",
      abilityIcon: "OfficerAbility_ico_ability_type_31.png",
      abilityDescription: `
      At the start of battle, Alexander Marcus increases the Shield Piercing of the ship by 100% of the Defense of the crew on the ship.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "200%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "400%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "800%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "1600%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "120",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "120",
        officerXp: "50000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "240",
        officerXp: "500000",
        credits: "4800",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "360",
        officerXp: "1250000",
        credits: "12000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "960",
        officerXp: "2500000",
        credits: "26400",
        badge: "4",
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
        traitTier: 2,
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
      {
        traitName: "Admiral",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Carol Marcus
  {
    name: "Carol Marcus",
    grade: "Epic",
    portrait: "carol_marcus.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Science",
    description: [
      `Born to the famous Starfleet Admiral, Alexander Marcus, and raised in London, Carol Marcus has been exceptional from the beginning. She is one of Starfleet’s most valued science officers, with a particular eye for advanced weapons. Carol was a part of the USS Enterprise crew that stopped Khan during his attack on Earth.`,
    ],
    captainAbility: {
      abilityName: "Applied Science",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      When defending in battle against a player, Carol decreases the Weapon Damage from opponents by 40%.
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
      abilityName: "Weapons Expert",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      Carol increases the Weapon Damage by 20%.
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
        shards: "90",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "90",
        officerXp: "50000",
        credits: "1000",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "180",
        officerXp: "500000",
        credits: "4000",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "270",
        officerXp: "1250000",
        credits: "10000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "720",
        officerXp: "2500000",
        credits: "22000",
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
        traitName: "Physicist",
        traitTier: 2,
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
      {
        traitName: "Focused",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Christopher Pike
  {
    name: "Christopher Pike",
    grade: "Epic",
    portrait: "christopher_pike.png",
    crew: "SHAKEDOWN CRUISE",
    faction: "Federation",
    class: "Command",
    description: [
      `The first captain of the USS Enterprise, Christopher Pike is known for being strong, defiant and unwaveringly loyal to Starfleet. He was forced to give up command of the ship when he was taken captive by Nero. After the defeat of the Narada, Pike was promoted to the rank of Admiral and continues to serve as one of Starfleet’s most decorated and well-respected officers.`,
    ],
    captainAbility: {
      abilityName: "Teaching Moments",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Christopher Pike increases the effectiveness of all Officer Abilities that trigger in combat by 2x20%.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "40%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "20%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "40%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Advanced Training",
      abilityIcon: "OfficerAbility_ico_ability_type_10.png",
      abilityDescription: `
      Christopher Pike increases the Ship XP earned by combat by 20%.
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "24200",
        badge: "4",
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
        traitTier: 2,
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
      {
        traitName: "Admiral",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Data
  {
    name: "Data",
    grade: "Epic",
    portrait: "data.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `Although he’s one of the most advanced technologies in the universe, in both his mental and physical abilities, what’s most remarkable about the USS Enterprise-D’s resident android officer is his humanity. Throughout his many adventures and challenges with the Enterprise crew, he has shown curiosity, a sense of humor, and even compassion. Furthermore, he often engages in the most human of hobbies, such as painting and reading.
      While many have questioned whether or not Data can be considered a truly sentient being due to being an A.I., those who know him best believe that he is truly alive, having seen first hand his growth, both as an officer and as a friend.`,
    ],
    captainAbility: {
      abilityName: "Positronic Precision",
      abilityIcon: "OfficerAbility_ico_ability_type_176.png",
      abilityDescription: `
      When fighting Hostiles and Armadas, Data increases the Critical Hit Chance by 17%.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "3%",
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
      abilityName: "Effort Yields Its Own Rewards",
      abilityIcon: "OfficerAbility_ico_ability_type_177.png",
      abilityDescription: `
      When fighting non-player targets (including Mission Hostiles), Data increases Armor Piercing, Shield Piercing, and Accuracy by 60%.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "60%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "120%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "180%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "240%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "23000",
        badge: "4",
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
        traitName: "Tactical",
        traitTier: 2,
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
      {
        traitName: "Android",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Deanna Troi
  {
    name: "Deanna Troi",
    grade: "Epic",
    portrait: "deanna_troi.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `An empathic guide, and a voice of conscience.

      Deanna Troi is the half-human, half-Betazoid counselor aboard the USS Enterprise. Her passion for the emotional wellbeing of her fellow crewmates is only rivalled by her love of chocolate. As a member of the senior staff, and a regular presence on the bridge, Troi has become an invaluable advisor to Captain Picard in times of great strife. Her expertise has placed her front and center during many first contact situations, with her empathic abilities - being able to read the emotions of others - a key tool in sensing vital information at critical times.
      
      Troi is a beloved member of the Enterprise crew, and in her downtime enjoys socializing with her friends in Ten Forward, exercising, or joining the weekly poker night. Deanna has a close relationship with her mother, Lwaxanna Troi, who frequently visits the Enterprise. Deanna is also quick to action and decisive when needs arise, and is a fully trained command officer.`,
    ],
    captainAbility: {
      abilityName: "Telepathic Predictions",
      abilityIcon: "OfficerAbility_ico_ability_type_132.png",
      abilityDescription: `
      At the start of each round, if the opponent's Hull Health is under 80% of its starting total, Alexander Marcus has 80% chance of inspiring Morale to the ship for 3 rounds.
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
      abilityName: "Nemesis",
      abilityIcon: "OfficerAbility_ico_ability_type_188.png",
      abilityDescription: `
      Deanna Troi increases Weapon Damage against Romulan Hostiles and Romulan Armadas by 100%
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "150%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "200%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "250%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "23000",
        badge: "4",
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
        traitName: "Perceptive",
        traitTier: 2,
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
      {
        traitName: "Empathic",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Eurydice
  {
    name: "Eurydice",
    grade: "Epic",
    portrait: "eurydice.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Engineering",
    description: [
      `Born into poverty by parents who abandoned her, Eurydice had to learn how to survive on her own from an early age, spending her early years as a pirate and scavenger. She quickly learned that knowing the right people can help you survive anywhere, as she became a black market arbiter, setting up sellers with buyers, specializing in ships and parts, and making a living off the small profits she earned along the way.

      Able to read almost anyone’s body language, she can be as manipulative or as straight-talking as any given deal needs her to be. Due to the cost of supporting a daughter, Eurydice tends to live payday to payday, though she harbors dreams of finding a better life for her family.`,
    ],
    captainAbility: {
      abilityName: "Opportunist",
      abilityIcon: "OfficerAbility_ico_ability_type_138.png",
      abilityDescription: `
      When the ship loses Shield Health from a weapon attack, Eurydice increases the damage of the weapons by 10% (cumulative).
(Weapons with multiple shots will only trigger this maneuver once per attack.)
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
      abilityName: "Delta Quadrant Technology",
      abilityIcon: "OfficerAbility_ico_ability_type_134.png",
      abilityDescription: `
      When the shields are depleted, Eurydice has a 35% chance to heal the Shield Health by 5%.
          `,
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
        shards: "95",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "95",
        officerXp: "50000",
        credits: "900",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "190",
        officerXp: "500000",
        credits: "3600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "285",
        officerXp: "1250000",
        credits: "9000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "760",
        officerXp: "2500000",
        credits: "20000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Deceptive",
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
        traitTier: 2,
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
      {
        traitName: "Trader",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Five of Ten
  {
    name: "Five of Ten",
    grade: "Epic",
    portrait: "five_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Engineering",
    description: [
      `No amount of ferocity, determination or fighting spirit will save you when the Borg come. Jaylah learned this lesson the hard way. The once soft spoken Starfleet cadet, who so famously survived alone against Krall and his Swarm had finally met a foe she could not evade. She was taken, along with several other of her fellow cadets and subjected to the horrors of Borg assimilation. As the last remnants of her free will were robbed from her, she cried a single tear. Not for herself, but for the friends she would be forced to hurt.`,
    ],
    captainAbility: {
      abilityName: "Weaponry is irrelevant",
      abilityIcon: "OfficerAbility_ico_ability_type_172.png",
      abilityDescription: `
      Five of Ten Increases the Shield deflection, Armor and Dodge by 200% of the total Health of all Officers on the ship.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "400%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "400%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "200%",
        },
      ],
    },
    officerAbility: {
      abilityName: "You will be assimilated",
      abilityIcon: "OfficerAbility_ico_ability_type_4.png",
      abilityDescription: `
      Five of Ten increases the amount of resources dropped from hostiles by 20%.
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
        shards: "125",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "125",
        officerXp: "",
        credits: "1350",
        badge: "",
        activeNanoprobe: "6000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "250",
        officerXp: "",
        credits: "5250",
        badge: "1",
        activeNanoprobe: "120000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "375",
        officerXp: "",
        credits: "13225",
        badge: "2",
        activeNanoprobe: "500000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "960",
        officerXp: "2500000",
        credits: "30000",
        badge: "4",
        activeNanoprobe: "1150000",
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
        traitName: "Ruthless",
        traitTier: 2,
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
      {
        traitName: "Relentless",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Gabriel Lorca
  {
    name: "Gabriel Lorca",
    grade: "Epic",
    portrait: "gabriel_lorca.png",
    crew: "TERRAN EMPIRE",
    faction: "Neutral",
    class: "Science",
    description: [
      `Captain Gabriel Lorca is one of Starfleet’s most decorated officers. During the Federation-Klingon war, Lorca was trusted with the command of the USS Discovery. This put him in a position to lead the conflict from the front lines, and develop highly experimental technologies that could mean life or death for Starfleet.`,
    ],
    captainAbility: {
      abilityName: "Manipulation",
      abilityIcon: "OfficerAbility_ico_ability_type_154.png",
      abilityDescription: `
      When fighting players, at the start of each round, if the opponent has Hull Breach, Lorca decreases the opponent's Weapon damage by 100% for this turn.
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
      abilityName: "Quick Thinking",
      abilityIcon: "OfficerAbility_ico_ability_type_28.png",
      abilityDescription: `
      At the beginning of each round, Lorca has a 50% chance of dealing Hull Breach to the opponent's ship for 2 rounds.
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
          rankBonus: "75%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "900",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "3600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "9000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "20000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Deceptive",
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
        traitTier: 2,
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
      {
        traitName: "Leader",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Gary Mitchell
  {
    name: "Gary Mitchell",
    grade: "Epic",
    portrait: "gary_mitchell.png",
    crew: "AUXILIARY CONTROLS",
    faction: "Federation",
    class: "Command",
    description: [
      `An operations officer on the Enterprise with remarkable psionic potential for a human. Gary was a friend of Kirk's in the academy. Kirk advised Gary that in the academy you either think or sink; Gary took that notion to heart.`,
    ],
    captainAbility: {
      abilityName: "Home Protector",
      abilityIcon: "OfficerAbility_ico_ability_type_7.png",
      abilityDescription: `
      Mitchell increases the Stats of all Officers on Board by 20% when defending the Station.
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
      abilityName: "Think or Sink",
      abilityIcon: "OfficerAbility_ico_ability_type_38.png",
      abilityDescription: `
      When getting hit by a Critical Hit, Mitchell increases the ship Weapon Damage by 30% for one round.
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
        shards: "110",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "110",
        officerXp: "50000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "220",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "330",
        officerXp: "1250000",
        credits: "11500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "880",
        officerXp: "2500000",
        credits: "25300",
        badge: "4",
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
        traitName: "Tactical",
        traitTier: 2,
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
      {
        traitName: "Psionic",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Geordi La Forge
  {
    name: "Geordi La Forge",
    grade: "Epic",
    portrait: "geordi_la_forge.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Engineering",
    description: [
      `For all the obstacles thrown at him, Geordi has never let anything keep him down for long. Driven by his unquenchable thirst for knowledge and a fascination with any and all technology in the known universe, he has become one of the most skilled and respected engineers of his generation. Meanwhile, his unerring work ethic and loyalty has earned him the respect of everyone around him.
      But aside from his prodigious abilities in his field, Geordi is often the heart of the USS Enterprise-D crew. Treating everyone with the utmost request and kindness, to the point where even Data understood what friendship meant from his bond with Geordi, he is one of the most popular officers on board the Enterprise.`,
    ],
    captainAbility: {
      abilityName: "Field-Strip a Fusion Reactor",
      abilityIcon: "OfficerAbility_ico_ability_type_180.png",
      abilityDescription: `
      Geordi La Forge increases the rewards dropped by defeated Armada Targets by 50%.
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
          synergyBonus: "10%",
        },
      ],
    },
    officerAbility: {
      abilityName: "The Mind's Eye",
      abilityIcon: "OfficerAbility_ico_ability_type_181.png",
      abilityDescription: `
      Geordi La Forge increases Weapon Damage against Klingon Hostiles and Klingon Armadas by 100%.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "150%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "200%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "250%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "23000",
        badge: "4",
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
        traitName: "Physicist",
        traitTier: 2,
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
      {
        traitName: "Adaptable",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Georgiou
  {
    name: "Georgiou",
    grade: "Epic",
    portrait: "georgiou.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Despite a life filled with great loss, Philippa Georgiou never lost her hope for a brighter future. A true idealist, Georgiou sought to find the best in everyone. Her stalwart leadership, bright outlook and fierce determination made her a respected captain and a beloved friend.
      She was also not one to let rules stop her from making the right decisions. She arguably went against General Order One when she allowed Saru, a member of a pre-warp civilization, to join Starfleet.
      However, despite this, she was well respected by both her subordinates and superiors. Everyone knew that, when the chips were down, you could count on having Philippa Georgiou by your side.`,
    ],
    captainAbility: {
      abilityName: "Never Fire First",
      abilityIcon: "OfficerAbility_ico_ability_type_145.png",
      abilityDescription: `
      At the start of each round, if the opponent is Burning , Captain Georgiou decreases the Attack of all Officers on the opponent's ship by 100% for that round.
Decreasing Attack may result in a decrease in Damage
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
      abilityName: "Deceptive Warfare",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `
      At the beginning of each round, Georgiou has a 50% chance of Burning the opponent's ship for 2 rounds.
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
          rankBonus: "75%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "24200",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Captain",
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
        traitTier: 2,
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
      {
        traitName: "Astronomer",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Gorkon
  {
    name: "Gorkon",
    grade: "Epic",
    portrait: "gorkon.png",
    crew: "KLINGON PATRIOTS",
    faction: "Federation",
    class: "Command",
    description: [
      `Gorkon, an accomplished general, is respected and feared by the Klingon Empire's enemies. He is seen as a rising star in Klingon politics, and is expected to take a seat on the High Council within the decade.`,
    ],
    captainAbility: {
      abilityName: "Quick Victory",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `
      Gorkon increases the chances of dealing a Critical Hit by 10% for the first 2 Rounds.
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
      abilityName: "Creating Opportunities",
      abilityIcon: "OfficerAbility_ico_ability_type_40.png",
      abilityDescription: `
      When the ship hits the opponent with a Critical Hit, Gorkon has a 70% chance of causing a Hull Breach for three rounds on the opponent's ship.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "70%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "75%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "80%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "85%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "24200",
        badge: "4",
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
        traitTier: 2,
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
      {
        traitName: "Relentless",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Harcourt Fenton Mudd
  {
    name: "Harcourt Fenton Mudd",
    grade: "Epic",
    portrait: "harcourt_fenton_mudd.png",
    crew: "TNG CREW",
    faction: "Neutral",
    class: "Command",
    description: [
      `Harcourt Fenton Mudd. Thief. Swindler and con man. Liar and rogue. He goes by many pejoratives, but perhaps the most accurate of them all is opportunist. For years, Mudd has made a living by trying to con and extort everyone he’s ever met.
      Though he always gives different accounts of where he came from, one element of his story always remains the same: his claims to have faced injustices that many will never know. With that chip on his shoulder, he believes in taking what he wants, and doing whatever necessary to get ahead. Whether it’s ships, weapons, creatures, - as long as he can sell it, he will try to steal it!
      After the Borg laid waste to the galaxy, Mudd saw an opening to build his own criminal empire. After all, who was going to stop him? With all the major factions rebuilding and healing, Mudd knows that now was the time to strike. However, with his new ambitions comes more notoriety. And more notoriety means more targets on his back.`,
    ],
    captainAbility: {
      abilityName: "The Ultimate Con",
      abilityIcon: "OfficerAbility_ico_ability_type_128.png",
      abilityDescription: `
      When the ship takes damage from an Armada Target weapon attack, Harry Mudd decreases the Weapon Damage of that Armada Target by 10% for this round.
(Weapons with multiple shots will only trigger this maneuver once per attack.)
            `,
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
      abilityName: "Down but Never Out",
      abilityIcon: "OfficerAbility_ico_ability_type_29.png",
      abilityDescription: `
      When the ship's Shield Health is depleted, Harry Mudd increases the Weapon Damage of the ship by 200% for the rest of the combat.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "200%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "250%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "300%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "350%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "400%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "950",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "3800",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "9500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "21000",
        badge: "4",
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
        traitName: "Thief",
        traitTier: 2,
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
      {
        traitName: "Rogue",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Harcourt Fenton Mudd
  {
    name: "Harcourt Fenton Mudd",
    grade: "Epic",
    portrait: "geordi_la_forge.png",
    crew: "MUDD'S COMPANY",
    faction: "Neutral",
    class: "Science",
    description: [
      `Harcourt Fenton Mudd. Many call him a thief, a liar, a rogue, a con-man. He is all of these things. But he is, above all, a survivor.
      Arriving in our universe through a complicated series of mycellial networks, this alternate Mudd might, at first, seem similar to our own. Indeed, he is charming, quick witted and incredibly intelligent but this Mudd has one crucial differentiating factor. There is no line he will not cross.
      The cruel fate he suffered at the hands of Klingon captors hardened Mudd, turning him ruthless. It showed him that there can be no room for morals in the fight for survival. This new outlook, as well as his penchant for cons and thievery, put him at odds with the crew of the USS Discovery, who have proven to be a mighty thorn in his side. Now that Mudd is here, he will do whatever it takes to make it out alive… and maybe wreak a little havoc while he’s at it.`,
    ],
    captainAbility: {
      abilityName: "Two steps ahead",
      abilityIcon: "OfficerAbility_ico_ability_type_142.png",
      abilityDescription: `
      Harcourt Fenton Mudd has a 40% chance to raise shield mitigation to 98% for the first two rounds of combat.
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
      abilityName: "823 ways to die",
      abilityIcon: "OfficerAbility_ico_ability_type_131.png",
      abilityDescription: `
      Harcourt Fenton Mudd has a 20% chance to double the shots of all the weapons of the ship for the first round of combat.
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "950",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "3800",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "9500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "21000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Escape Artist",
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
        traitTier: 2,
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
      {
        traitName: "Mastermind",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // James T. Kirk
  {
    name: "James T. Kirk",
    grade: "Epic",
    portrait: "geordi_la_forge.png",
    crew: "ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `James Tiberius Kirk is the Captain of the USS Enterprise, the flagship of the Federation. Kirk was born on January 4th, 2233 aboard a fleeing shuttlecraft during the attack on the USS Kelvin by the time-traveling Romulan vessel, the Narada.

      He joined Starfleet after some persuasion on the part of Captain Christopher Pike and was promoted to First Officer on his first mission aboard. Acting-Captain Spock relinquished command of the USS Enterprise to Kirk in the aftermath of the destruction of the planet Vulcan. Kirk remains the only Starfleet Cadet to ever "beat" the Kobayashi Maru simulation test at Starfleet Academy.
      
      He was instrumental in the capture of the renegade, Khan, and uncovered a conspiracy by Section 31 operatives to provoke the Klingon Empire into open war.`,
    ],
    captainAbility: {
      abilityName: "Leader",
      abilityIcon: "OfficerAbility_ico_ability_type_41.png",
      abilityDescription: `
      As long as the ship has Morale, Kirk gives all Officers on the ship a bonus of 40% to all their stats.
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
      abilityName: "Inspirational",
      abilityIcon: "OfficerAbility_ico_ability_type_6.png",
      abilityDescription: `
      At the beginning of each round, Kirk has a 50% chance of inspiring Morale to the ship for 2 rounds.
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
          rankBonus: "75%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "24200",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Captain",
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
        traitTier: 2,
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
      {
        traitName: "Impulsive",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Jaylah
  {
    name: "Jaylah",
    grade: "Epic",
    portrait: "jaylah.png",
    crew: "JAYLAH",
    faction: "Federation",
    class: "Engineering",
    description: [
      `When Jaylah was born, her parents read the markings on her face, hoping to foretell something about their child’s life. Upon her face they read one word: "Fierce". Jaylah is skilled, intelligent and incredibly strong willed. During her first encounter with the Swarm, her family’s ship was destroyed and her father killed by Krall and his men. Jaylah was left stranded on a strange planet with only her wits and skill to depend on. Not only did she survive this ordeal, she was instrumental in the eventual defeat of Krall and the Swarm. Since then, Jaylah has committed herself to studying at Starfleet Academy. Despite her lack of social graces, she has proven herself to be a mechanic and fighter without equal among her fellow students. Her bravery, ferocity and unwavering determination will ensure a bright future wherever it takes her.`,
    ],
    captainAbility: {
      abilityName: "Scavenger",
      abilityIcon: "OfficerAbility_ico_ability_type_125.png",
      abilityDescription: `
      Jaylah increases the amount of resources you get from killing hostiles by 100% while on the Franklin and Franklin-A.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "0%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "0%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "0%",
        },
      ],
    },
    officerAbility: {
      abilityName: "The Beats and Shouting!",
      abilityIcon: "OfficerAbility_ico_ability_type_173.png",
      abilityDescription: `
      When Jaylah is on the Franklin and fighting Swarm hostiles, Jaylah increases the number of shots of the Franklin and Franklin-A by 1.
          `,
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
        shards: "130",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "800",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "3400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "8750",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "19000",
        badge: "4",
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
        traitName: "Survivor",
        traitTier: 2,
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
      {
        traitName: "Adaptable",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Jean-Luc Picard
  {
    name: "Jean-Luc Picard",
    grade: "Epic",
    portrait: "jean_luc_picard.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Jean-Luc Picard is the legendary captain of the Federation’s flagship, the USS Enterprise. His service to Starfleet has been a lifelong pursuit - one fuelled by a fascination for what lies out beyond the final frontier of space. Picard’s first command was the USS Stargazer, a ship that saw countless missions and battles over the years.

      Aside from his duties as captain, Picard is an avid enthusiast of archaeology, history, the written arts, and diplomacy. His extensive experience on the front lines of many disputes has given him a formidable reputation both within and outside the Federation.
      
      Picard has been directly involved with many key flashpoints of human history during his career. Picard has survived innumerable life-threatening situations, thanks to his own ingenuity, but also the trust he places in his fine crew.`,
    ],
    captainAbility: {
      abilityName: "Make It So",
      abilityIcon: "OfficerAbility_ico_ability_type_182.png",
      abilityDescription: `
      Jean-Luc Picard increases the effectiveness of all Officer Abilities that trigger in combat by 2x10%.

This ability receives the same synergy bonus from all TNG Officers, regardless of class.
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
          synergyBonus: "50%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Engage",
      abilityIcon: "OfficerAbility_ico_ability_type_183.png",
      abilityDescription: `
      Jean-Luc Picard increases Critical Damage against Hostiles and Armadas by 5%.
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
        shards: "180",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "180",
        officerXp: "50000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "275",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "275",
        officerXp: "1250000",
        credits: "11500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "25000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Captain",
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
        traitTier: 2,
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
      {
        traitName: "Archaelogist",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Kang
  {
    name: "Kang",
    grade: "Epic",
    portrait: "kang.png",
    crew: "BLOOD & HONOR",
    faction: "Klingon",
    class: "Command",
    description: [
      `Kang is seen as a skilled officer in the Klingon military; Starfleet Intelligence believes he will be the next Gorkon. Kang is skilled in both warfare and diplomacy, and keeps himself and his officers to an iron code.`,
    ],
    captainAbility: {
      abilityName: "Dahar Master",
      abilityIcon: "OfficerAbility_ico_ability_type_28.png",
      abilityDescription: `
      At the start of battle, Kang has a 80% chance of dealing a Hull Breach to the opponent for 3 rounds.
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
      abilityName: "Blood Oath",
      abilityIcon: "OfficerAbility_ico_ability_type_21.png",
      abilityDescription: `
      At the start of battle, Kang increases the Accuracy of the ship by 100% of the Attack of the crew on the ship.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "200%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "400%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "800%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "1600%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "95",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "95",
        officerXp: "50000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "190",
        officerXp: "500000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "285",
        officerXp: "1250000",
        credits: "10500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "760",
        officerXp: "2500000",
        credits: "23100",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Diplomat",
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
        traitTier: 2,
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
      {
        traitName: "Leader",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Khan Noonien Singh
  {
    name: "Khan Noonien Singh",
    grade: "Epic",
    portrait: "khan_noonien_singh.png",
    crew: "KHAN'S CREW",
    faction: "Neutral",
    class: "Command",
    description: [
      `Khan Noonien Singh is one of the greatest threats that Starfleet and the USS Enterprise has ever faced. Khan is a genetically engineered human Augment, a product of the late-20th century Eugenic Wars which saw Earth dominated and almost destroyed.
      After being driven from Earth in 1996, Khan and the rest of the surviving Augments drifted through space for almost 300 years. Frozen and unaware, it was by pure chance that they were happened upon by Admiral Marcus of Starfleet. Marcus stole Khan’s identity and wiped away all the memories of his Augment family.
      When Khan reclaimed his memories, he killed Admiral Marcus and launched a one-man war on the Federation, only to be defeated by the crew of the USS Enterprise. Since then, Khan has lain dormant, frozen inside a Starfleet holding facility. Starfleet may think itself safe, but no prison can hold Khan Noonien Singh for long.`,
    ],
    captainAbility: {
      abilityName: "Ruthless Mastermind",
      abilityIcon: "OfficerAbility_ico_ability_type_81.png",
      abilityDescription: `
      Geordi La Forge increases the rewards dropped by defeated Armada Targets by 50%.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Savage Tenacity",
      abilityIcon: "OfficerAbility_ico_ability_type_24.png",
      abilityDescription: `
      Every time the Ship is hit by a Ship or Defense Platform weapon attack, Khan increases the Critical Hit Chances by 1% (cumulative).
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "1%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "2%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "3%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "4%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "5%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "110",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "110",
        officerXp: "50000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "220",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "330",
        officerXp: "1250000",
        credits: "11500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "880",
        officerXp: "2500000",
        credits: "25300",
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
        traitName: "Criminal",
        traitTier: 2,
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
      {
        traitName: "Mastermind",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Kras
  {
    name: "Kras",
    grade: "Epic",
    portrait: "geordi_la_forge.png",
    crew: "GLORY IN THE KILL",
    faction: "Klingon",
    class: "Science",
    description: [
      `Kras has served in advisory roles for some time now; more a scientist and negotiator than a commander, but a warrior all the same. Behind many of the rising stars in the Klingon forces, Kras has quietly imparted knowledge and experience. Koloth, Kor, and Kang all count Kras as mentor in their early career. Recently, Kras has turned his attention to Klaa and his crew.`,
    ],
    captainAbility: {
      abilityName: "Art of War",
      abilityIcon: "OfficerAbility_ico_ability_type_74.png",
      abilityDescription: `
      Kras decreases the effectiveness of the opponent's Captain's Maneuver by 20%.
            `,
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
      abilityName: "Know your Enemy",
      abilityIcon: "OfficerAbility_ico_ability_type_11.png",
      abilityDescription: `
      Kras decreases the Attack, Defense and Health of all the Officers on the Bridge of the opponent's ship by 20%.
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
        shards: "95",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "95",
        officerXp: "50000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "190",
        officerXp: "500000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "285",
        officerXp: "1250000",
        credits: "1050",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "760",
        officerXp: "2500000",
        credits: "23100",
        badge: "4",
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
        traitName: "Analytical",
        traitTier: 2,
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
      {
        traitName: "Specialist",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Liviana Charvanek
  {
    name: "Liviana Charvanek",
    grade: "Epic",
    portrait: "liviana_charvanek.png",
    crew: "ROMULAN PATRIOTS",
    faction: "Romulan",
    class: "Command",
    description: [
      `Liviana Charvanek only recently earned her command, but has distinguished herself as a clever and ruthless strategist, and a true daughter of Romulus. While she favors to strike from positions of strength, she has earned the respect of the Klingons by her ability to fight them toe to toe.`,
    ],
    captainAbility: {
      abilityName: "Romulan Tactician",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `
      When the ship's Hull Health goes under 80% of its value at the start of combat, Charvanek has a 80% chance of Burning the opponent for 3 rounds.
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
      abilityName: "Mind Games",
      abilityIcon: "OfficerAbility_ico_ability_type_22.png",
      abilityDescription: `
      At the start of combat, Charvanek increases the Armor Piercing of the ship by 100% of the Health of the crew on the ship.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "200%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "400%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "800%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "1600%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "95",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "95",
        officerXp: "50000",
        credits: "1050",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "190",
        officerXp: "500000",
        credits: "4200",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "285",
        officerXp: "1250000",
        credits: "10500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "760",
        officerXp: "2500000",
        credits: "23100",
        badge: "4",
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
        traitName: "Tactical",
        traitTier: 2,
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
      {
        traitName: "Leader",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Michael Burnham
  {
    name: "Michael Burnham",
    grade: "Epic",
    portrait: "michael_burnham.png",
    crew: "DISCOVERY CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `Once meant to stand as the living embodiment of Human and Vulcan potential, Michael Burnham’s life took a disastrous turn after the Battle at the Binary Stars. Branded a mutineer and sentenced to imprisonment for life, she had given up all hope of living up to her incredible potential.
      However, the war was not finished and Burnham still had a part to play. She was brought aboard the USS Discovery to serve under Captain Gabriel Lorca. She would pay off her debt to society by helping him win the war against the Klingons.
      Lorca gave her the greatest gift she ever could have received... Something to fight for. Michael has come to see the Discovery’s crew as her own family and will stop at nothing to defend them.`,
    ],
    captainAbility: {
      abilityName: "Steadfast",
      abilityIcon: "OfficerAbility_ico_ability_type_143.png",
      abilityDescription: `
      Michael Burnham increases the Impulse Speed of the ship by 15.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "5",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "10",
        },
      ],
    },
    officerAbility: {
      abilityName: "Intuitive",
      abilityIcon: "OfficerAbility_ico_ability_type_139.png",
      abilityDescription: `
      When fighting players, for each weapon attack that hits the opponent, Michael Burnham removes 30% of the total Attack of all Officers on your Ship from the opponent's Shield Health.
(Weapons with multiple shots will only trigger this ability once per attack.)
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "30%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "55%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "85%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "300%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "450%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "110",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "110",
        officerXp: "50000",
        credits: "1150",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "220",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "330",
        officerXp: "1250000",
        credits: "11500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "880",
        officerXp: "2500000",
        credits: "25000",
        badge: "4",
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
        traitTier: 2,
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
      {
        traitName: "Impulsive",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Nero
  {
    name: "Nero",
    grade: "Epic",
    portrait: "Nnero.png",
    crew: "NERO'S CREW",
    faction: "Romulan",
    class: "Engineering",
    description: [
      `Nero is a Romulan mining ship Captain who comes from an alternate future. In his timeline's 2387, Nero witnessed the destruction of his homeworld of Romulus.

      The untimely efforts of Ambassador Spock to contain the supernova that engulfed his planet resulted in the creation of an artificial black hole, which created this offshoot reality. On arrival, Nero's vessel, the Narada, was heavily damaged in combat with the USS Kelvin, leaving Nero and his crew stranded.
      
      Nero lost his family when the disaster occurred and on that day, promised himself retribution against Spock for his failure.`,
    ],
    captainAbility: {
      abilityName: "Joy In Vengeance",
      abilityIcon: "OfficerAbility_ico_ability_type_43.png",
      abilityDescription: `
      At the beginning of each round, if the opponent's ship is Burning, Nero increases the Damage of the weapons by 40%.
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
      abilityName: "See the Flaws",
      abilityIcon: "OfficerAbility_ico_ability_type_23.png",
      abilityDescription: `
      Every time the ship strikes the opponent with a weapon attack, Nero has a 25% chance of Burning it for two rounds.
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "24200",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Captain",
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
        traitTier: 2,
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
      {
        traitName: "Intimidating",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Six of Ten
  {
    name: "Six of Ten",
    grade: "Epic",
    portrait: "six_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Command",
    description: [
      `One of the first Klingons to experience the Borg’s invasion of the Alpha Quadrant, Kras fell prey to an assimilation fleet while overseeing a routine mining expedition. Although Kras was a skilled warrior, he was unfamiliar with this formidable new enemy, and his simple mining fleet was swiftly overwhelmed by Borg forces. Kras once served an important advisory role among the Klingon Empire. Now, he speaks on behalf of the Borg, imparting their message - All will be assimilated, and resistance is futile.`,
    ],
    captainAbility: {
      abilityName: "We are the Borg",
      abilityIcon: "OfficerAbility_ico_ability_type_12.png",
      abilityDescription: `
      Every time the ship hits an opponent with a weapon attack, Six of Ten decreases the opponent's Shield Health by 20% of the total Defense of all officers on the ship.
(Weapons with multiple shots will only trigger this maneuver once per attack.)
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "40%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "10%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "40%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Defenses are irrelevant",
      abilityIcon: "OfficerAbility_ico_ability_type_127.png",
      abilityDescription: `
      When attacking an Armada Target, every time the ship hits the opponent with a weapon attack, Six of Ten increases the Accuracy, Armor Piercing and Shield Piercing of the ship by 5% of the total Attack of all officers on the ship.
(Weapons with multiple shots will only trigger this ability once per attack.)
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
        shards: "115",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "115",
        officerXp: "",
        credits: "1300",
        badge: "",
        activeNanoprobe: "5000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "230",
        officerXp: "",
        credits: "5200",
        badge: "1",
        activeNanoprobe: "110000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "345",
        officerXp: "",
        credits: "13000",
        badge: "2",
        activeNanoprobe: "475000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "920",
        officerXp: "",
        credits: "28600",
        badge: "4",
        activeNanoprobe: "1100000",
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
        traitName: "Ruthless",
        traitTier: 2,
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
      {
        traitName: "Relentless",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Ten of Ten
  {
    name: "Ten of Ten",
    grade: "Epic",
    portrait: "ten_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Engineering",
    description: [
      `Tribbles are a fuzzy, simple species that are widely considered harmless, once their reproductive nature is kept under control. However, beneath their furry exterior lies the potential for galactic ruin. The Borg understand that the secrets to the Tribbles’s rapid asexual reproduction could be used as a weapon of mass destruction. 10 of 10 is the first test and if the Borg are not stopped, millions of this fluffy terror will flood across our universe.`,
    ],
    captainAbility: {
      abilityName: "Multiplicative Extraction",
      abilityIcon: "OfficerAbility_ico_ability_type_126.png",
      abilityDescription: `
      Ten of Ten increases the speed of Parsteel, Tritanium and Dilithium Mining by 50%.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "75%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "75%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "25%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Tribble Mining Collective",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription: `
      Ten of Ten increases the Mining Speed of the ship by 80%.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "80%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "120%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "140%",
        },
        {
          rankName: "COMMANDER V",
          rankBonus: "160%",
        },
      ],
    },
    ranks: [
      {
        rankLvl: "1",
        maxLvl: "5",
        shards: "115",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "115",
        officerXp: "",
        credits: "1300",
        badge: "",
        activeNanoprobe: "5000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "230",
        officerXp: "",
        credits: "5200",
        badge: "1",
        activeNanoprobe: "110000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "345",
        officerXp: "",
        credits: "13000",
        badge: "2",
        activeNanoprobe: "475000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "920",
        officerXp: "",
        credits: "28600",
        badge: "4",
        activeNanoprobe: "1100000",
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
        traitName: "Miner",
        traitTier: 2,
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
      {
        traitName: "Fluffy",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // Three Of Ten
  {
    name: "Three Of Ten",
    grade: "Epic",
    portrait: "three_of_ten.png",
    crew: "UNIMATRIX TWELVE",
    faction: "Borg",
    class: "Command",
    description: [
      `Once considered one of the most intelligent and beautiful members of Vulcan society, much of that has been washed away by the Borg’s assimilation process, leaving T’Pring a husk of her former self. Now deployed as a ruthless and efficient drone, Three of Ten is used to help expand the Borg’s range of influence and turmoil. Whatever existed of this matriarch to a happy family has become another soldier in the Borg’s ongoing mission to control the galaxy.`,
    ],
    captainAbility: {
      abilityName: "Efficient Gas Acquisition",
      abilityIcon: "OfficerAbility_ico_ability_type_5.png",
      abilityDescription: `
      Three Of Ten increases Gas mining speed by 60%.
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "45%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "30%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "45%",
        },
      ],
    },
    officerAbility: {
      abilityName: "Resource Protection Protocols",
      abilityIcon: "OfficerAbility_ico_ability_type_1.png",
      abilityDescription: `
      Three Of Ten increases Protected Cargo by 300%.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "300%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "350%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "400%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "450%",
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
        shards: "115",
        officerXp: "",
        credits: "",
        badge: "",
        activeNanoprobe: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "115",
        officerXp: "",
        credits: "1300",
        badge: "",
        activeNanoprobe: "5000",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "230",
        officerXp: "",
        credits: "5200",
        badge: "1",
        activeNanoprobe: "110000",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "345",
        officerXp: "",
        credits: "13000",
        badge: "2",
        activeNanoprobe: "475000",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "920",
        officerXp: "",
        credits: "28600",
        badge: "4",
        activeNanoprobe: "1100000",
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
        traitName: "Miner",
        traitTier: 2,
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
      {
        traitName: "Calculated",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // TOS James T. Kirk
  {
    name: "TOS James T. Kirk",
    grade: "Epic",
    portrait: "tos_james_t_kirk.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `Explorer. Diplomat. Hero.
      James Tiberius Kirk has been called many things, but most just call him... Captain.
      Born in Iowa on Earth in 2233, Kirk was raised by his loving parents; George and Winona Kirk. Their teachings, in particular those of his father, inspired a young Kirk to enlist in Starfleet.
      Though he had some blemishes on his record from certain events in the Academy, Kirk proved himself as a reliable man with a noble spirit.
      Kirk was a natural leader and quickly climbed the ranks as a Starfleet officer. After a tour of duty aboard the USS Farragut, Kirk found himself assigned to Starfleet’s most prolific vessel; The USS Enterprise. In 2265, at the age of thirty-two, Kirk was granted command of the Enterprise from Captain Pike. It was the proudest day of his father’s life.
      Kirk went on to serve with distinction. Under his steadfast leadership, the Enterprise has survived wars, natural disasters, time travel and near galactic destruction. They became legends.
      Throughout it all, Kirk has never lost sight of his childhood dream. To explore, to see new worlds and meet new civilizations... To boldly go, where no-one has gone before.`,
    ],
    captainAbility: {
      abilityName: "3D Strategist",
      abilityIcon: "OfficerAbility_ico_ability_type_160.png",
      abilityDescription: `
      When fighting players, at the start of each turn, as long as the ship has Morale, TOS James T. Kirk increases the damage of energy weapons by 50% of the total Defense of all Officers on the ship (cumulative).
            `,
      abilitySynergyBonus: [
        {
          synergyClass: "Science",
          synergyBonus: "50%",
        },
        {
          synergyClass: "Command",
          synergyBonus: "25%",
        },
        {
          synergyClass: "Engineering",
          synergyBonus: "50%",
        },
      ],
    },
    officerAbility: {
      abilityName: "It's all we have to go on",
      abilityIcon: "OfficerAbility_ico_ability_type_161.png",
      abilityDescription: `
      At the start of each round, if the ship's Health is above 30% of its starting value, TOS James T. Kirk has a 75% chance to inspire Morale to the ship for this round.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "75%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "80%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "85%",
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
        shards: "110",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "110",
        officerXp: "50000",
        credits: "1200",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "220",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "330",
        officerXp: "1250000",
        credits: "11500",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "880",
        officerXp: "2500000",
        credits: "25000",
        badge: "4",
      },
    ],
    traits: [
      {
        traitName: "Captain",
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
        traitTier: 2,
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
      {
        traitName: "Impulsive",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // TOS Spock
  {
    name: "TOS Spock",
    grade: "Epic",
    portrait: "tos_spock.png",
    crew: "TOS ENTERPRISE CREW",
    faction: "Federation",
    class: "Science",
    description: [
      `They say a Captain is only as good as his First Officer. If that is indeed the case, then Captain Kirk can rest easy knowing that his First Officer is one of the finest in the galaxy.
      Spock, a given name as his full name is unpronounceable to humans, is a human/Vulcan hybrid born on Vulcan in 2230. His hybrid status caused him no shortage of pain in his childhood, but the love of his mother and the wisdom of his father allowed him to overcome his aggressors.
      A prodigy even by Vulcan standards, Spock was destined for greatness. He was even granted a place in the prestigious Vulcan Science Academy, which he declined in favor of Starfleet.
      He was granted a place on the Enterprise, where he served as Captain Pike’s Science Officer. He forged a close relationship with his Captain and was intended to eventually take over command of the vessel.
      However, through a series of unexpected events, command of the Enterprise went to James T. Kirk, a result which neither pleased nor disappointed Spock. Command simply exists, and he will do whatever is logical.
      With Spock’s sage wisdom and unshakeable composure, he was able to guide the Enterprise and its Captain through their many trials.`,
    ],
    captainAbility: {
      abilityName: "Live Long",
      abilityIcon: "OfficerAbility_ico_ability_type_160.png",
      abilityDescription: `
      When defending, at the start of each turn, TOS Spock restores Shield Health to an amount equal to 100% of the Defense of the Officers on the ship (restores the Shield Health of all your ships if the ship is defending the station). 
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
      abilityName: "Prosper",
      abilityIcon: "OfficerAbility_ico_ability_type_163.png",
      abilityDescription: `
      When fighting players, as long as the ship has Morale, TOS Spock decreases the Critical Hit Damage bonus of the opponent's ship by 50%.
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "50%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "75%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "100%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "125%",
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
        shards: "105",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "105",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "210",
        officerXp: "500000",
        credits: "4400",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "320",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "820",
        officerXp: "2500000",
        credits: "24000",
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
        traitName: "Genius",
        traitTier: 2,
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
      {
        traitName: "Calculated",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
  // William T. Riker
  {
    name: "William T. Riker",
    grade: "Epic",
    portrait: "william_t_riker.png",
    crew: "TNG CREW",
    faction: "Federation",
    class: "Command",
    description: [
      `William Thomas Riker is the First Officer of the USS Enterprise-D, holding the rank of Commander. Riker’s impressive resumé includes a stint on board the USS Hood, under Captain DeSoto, and as an operations officer aboard the USS Potemkin.

      Riker was given the nickname of “Number One” by Captain Jean-Luc Picard shortly after their first meeting; a moniker that has followed him since. As one of the most charismatic and popular members of the Enterprise crew, Riker is a constant when it comes to social gatherings as well as official functions. He takes part in contests such as Anbo-jyutsu and the infamous team sport of Parrises Squares. He is responsible for organizing a regular poker night with other members of the senior staff. Riker is also an accomplished trombone player and champion marksman with a phaser.
      
      William Riker is a man who is brave in the face of adversity and willing to do his utmost for the Federation. His loyalty is without question, and his honor is his bond.`,
    ],
    captainAbility: {
      abilityName: "Vibrant Authority",
      abilityIcon: "OfficerAbility_ico_ability_type_186.png",
      abilityDescription: `
      William T. Riker increases Weapon Damage against Armada Targets by 100% every round (cumulative).
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
      abilityName: "The Icarus Factor",
      abilityIcon: "OfficerAbility_ico_ability_type_187.png",
      abilityDescription: `
      William T. Riker increases Weapon Damage against Federation Hostiles and Federation Armadas by 100%
          `,
      abilityRankBonus: [
        {
          rankName: "ENSIGN I",
          rankBonus: "100%",
        },
        {
          rankName: "LIEUTENANT JG II",
          rankBonus: "150%",
        },
        {
          rankName: "LIEUTENANT III",
          rankBonus: "200%",
        },
        {
          rankName: "LT. COMMANDER IV",
          rankBonus: "250%",
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
        shards: "100",
        officerXp: "",
        credits: "",
        badge: "",
      },
      {
        rankLvl: "2",
        maxLvl: "10",
        shards: "100",
        officerXp: "50000",
        credits: "1100",
        badge: "",
      },
      {
        rankLvl: "3",
        maxLvl: "15",
        shards: "200",
        officerXp: "500000",
        credits: "4600",
        badge: "1",
      },
      {
        rankLvl: "4",
        maxLvl: "20",
        shards: "300",
        officerXp: "1250000",
        credits: "11000",
        badge: "2",
      },
      {
        rankLvl: "5",
        maxLvl: "30",
        shards: "800",
        officerXp: "2500000",
        credits: "23000",
        badge: "4",
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
        traitName: "Charismatic",
        traitTier: 2,
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
      {
        traitName: "Charming",
        traitTier: 3,
        traitsIcon: "traitsIcon.png",
        traitLevel: [
          {
            traitLvl: 1,
            traitCost: 10000,
          },
          {
            traitLvl: 2,
            traitCost: 4000,
          },
          {
            traitLvl: 3,
            traitCost: 7000,
          },
          {
            traitLvl: 4,
            traitCost: 10000,
          },
          {
            traitLvl: 5,
            traitCost: 15000,
          },
          {
            traitLvl: 6,
            traitCost: 23000,
          },
          {
            traitLvl: 7,
            traitCost: 42000,
          },
          {
            traitLvl: 8,
            traitCost: 68000,
          },
          {
            traitLvl: 9,
            traitCost: 107000,
          },
        ],
      },
    ],
  },
];
