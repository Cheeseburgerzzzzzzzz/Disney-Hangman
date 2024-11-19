const wordList = [
    {
        "word": "mickey mouse",
        "hint": "The mouse who built an empire and never ages."
    },
    {
        "word": "donald duck",
        "hint": "Wears no pants but somehow gets angry about everything."
    },
    {
        "word": "goofy",
        "hint": "A dog that talks, walks, and somehow has a pet dog."
    },
    {
        "word": "cinderella",
        "hint": "Lost her shoe but found a prince. Priorities."
    },
    {
        "word": "elsa",
        "hint": "The queen who’s too cool for everyone, literally."
    },
    {
        "word": "simba",
        "hint": "Ran away from responsibility but still became king."
    },
    {
        "word": "scar",
        "hint": "The uncle who redefines family betrayal."
    },
    {
        "word": "ariel",
        "hint": "Traded her voice for legs. Bold choice."
    },
    {
        "word": "ursula",
        "hint": "The sea witch who collects voices like trophies."
    },
    {
        "word": "tinker bell",
        "hint": "A pixie with glitter and attitude."
    },
    {
        "word": "peter pan",
        "hint": "The boy who refuses to adult."
    },
    {
        "word": "moana",
        "hint": "Crossed the ocean without Wi-Fi."
    },
    {
        "word": "maui",
        "hint": "A demigod who can’t stop singing about himself."
    },
    {
        "word": "aladdin",
        "hint": "A street rat who lucked out with a genie."
    },
    {
        "word": "jasmine",
        "hint": "Princess goals: owns a tiger and hates mansplaining."
    },
    {
        "word": "genie",
        "hint": "The ultimate wingman trapped in a lamp."
    },
    {
        "word": "jafar",
        "hint": "The sorcerer with a snake obsession."
    },
    {
        "word": "belle",
        "hint": "Loves books and somehow falls for a literal beast."
    },
    {
        "word": "beast",
        "hint": "The guy with anger issues who got a makeover."
    },
    {
        "word": "gaston",
        "hint": "Loves himself more than anyone else ever could."
    },
    {
        "word": "anna",
        "hint": "The sister who sings her way out of everything."
    },
    {
        "word": "olaf",
        "hint": "A snowman who dreams of summer. Sure, Jan."
    },
    {
        "word": "rapunzel",
        "hint": "Spent her life in a tower but still has perfect hair."
    },
    {
        "word": "pascal",
        "hint": "A chameleon that’s cooler than you’ll ever be."
    },
    {
        "word": "woody",
        "hint": "A cowboy who’s always getting overshadowed by a spaceman."
    },
    {
        "word": "buzz lightyear",
        "hint": "Thinks he’s the real deal. Spoiler: he’s not."
    },
    {
        "word": "lotso",
        "hint": "A pink bear with abandonment issues and a temper."
    },
    {
        "word": "sully",
        "hint": "The furry blue guy who just wants to be loved."
    },
    {
        "word": "mike wazowski",
        "hint": "One giant eye and a whole lot of sass."
    },
    {
        "word": "boo",
        "hint": "The toddler who’s braver than most adults."
    },
    {
        "word": "nemo",
        "hint": "The fish who got lost and made us cry."
    },
    {
        "word": "dory",
        "hint": "Forgets everything but still saves the day."
    },
    {
        "word": "marlin",
        "hint": "A dad with anxiety who crossed the ocean for his kid."
    },
    {
        "word": "crush",
        "hint": "A turtle who’s more chill than anyone should be."
    },
    {
        "word": "lightning mcqueen",
        "hint": "A racecar with catchphrases and questionable life choices."
    },
    {
        "word": "mater",
        "hint": "The tow truck who proves friendship is everything."
    },
    {
        "word": "arendelle",
        "hint": "The kingdom that freezes over every time Elsa sneezes."
    },
    {
        "word": "pride rock",
        "hint": "Where lions stand dramatically to look important."
    },
    {
        "word": "pixar",
        "hint": "The studio that makes adults cry over toys and robots."
    },
    {
        "word": "andy",
        "hint": "The kid who outgrew his toys—and our childhoods."
    },
    {
        "word": "sid",
        "hint": "The kid who probably grew up to be a criminal."
    },
    {
        "word": "zootopia",
        "hint": "Where animals wear clothes and solve crimes."
    },
    {
        "word": "judy hopps",
        "hint": "A bunny with big dreams and a badge."
    },
    {
        "word": "nick wilde",
        "hint": "The fox who’s too cool for the rules."
    },
    {
        "word": "pumbaa",
        "hint": "The warthog with a gas problem and a big heart."
    },
    {
        "word": "timon",
        "hint": "The meerkat who runs on sarcasm and bugs."
    },
    {
        "word": "hades",
        "hint": "The god of the underworld with fabulous blue hair."
    },
    {
        "word": "hercules",
        "hint": "The guy who went from zero to hero—eventually."
    },
    {
        "word": "megara",
        "hint": "The woman who’s not singing for her ex."
    },
    {
        "word": "stitch",
        "hint": "An alien who destroys everything but still looks cute."
    },
    {
        "word": "lilo",
        "hint": "The kid with big vibes and bigger dreams."
    },
    {
        "word": "tarzan",
        "hint": "The jungle guy who doesn’t believe in shirts."
    },
    {
        "word": "jane",
        "hint": "The explorer who fell for the guy raised by apes."
    },
    {
        "word": "kuzco",
        "hint": "The emperor who turned into a llama and somehow stayed arrogant."
    },
    {
        "word": "yzma",
        "hint": "The villain who takes sarcasm to the next level."
    },
    {
        "word": "tiana",
        "hint": "Turned a frog into a prince—and made gumbo."
    },
    {
        "word": "dr facilier",
        "hint": "A villain with style, shadows, and a deal you’ll regret."
    },
    {
        "word": "mulan",
        "hint": "Saved China but still had to deal with matchmaking drama."
    },
    {
        "word": "mushu",
        "hint": "The dragon who’s tiny but mighty."
    },
    {
        "word": "bambi",
        "hint": "The deer who broke your heart in 10 minutes."
    },
    {
        "word": "thumper",
        "hint": "The bunny with life advice no one asked for."
    },
    {
        "word": "dumbo",
        "hint": "The elephant who proved big ears are a superpower."
    },
    {
        "word": "pinocchio",
        "hint": "The puppet who lies like it’s his job."
    },
    {
        "word": "jiminy cricket",
        "hint": "A bug with better morals than most people."
    },
    {
        "word": "maleficent",
        "hint": "The villain who got her own redemption arc."
    },
    {
        "word": "aurora",
        "hint": "A princess who naps through most of her own story."
    },
    {
        "word": "pocahontas",
        "hint": "Painted with all the colors of historical inaccuracies."
    },
    {
        "word": "snow white",
        "hint": "The original princess who couldn’t resist a snack."
    },
    {
        "word": "seven dwarfs",
        "hint": "The roommates who made whistling while working a thing."
    },
    {
        "word": "chip",
        "hint": "A teacup with a crack and a lot of charm."
    },
    {
        "word": "mrs potts",
        "hint": "The mom who doubles as a tea set."
    },
    {
        "word": "be our guest",
        "hint": "The song that turns dinner into a Broadway show."
    },
    {
        "word": "hakuna matata",
        "hint": "The philosophy that solves absolutely nothing."
    },
    {
        "word": "circle of life",
        "hint": "The song that makes holding up a baby lion dramatic."
    },
    {
        "word": "let it go",
        "hint": "The anthem you can’t escape, no matter how hard you try."
    },
    {
        "word": "part of your world",
        "hint": "A mermaid’s wishlist for legs and chaos."
    },
    {
        "word": "under the sea",
        "hint": "The crab’s argument for staying underwater forever."
    },
    {
        "word": "supercalifragilisticexpialidocious",
        "hint": "The word that’s impossible to spell or forget."
    }
];