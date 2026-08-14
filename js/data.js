/**
 * Personal Portfolio Profile Data Hub
 * 
 * Customize all your personal info, avatar, bios, interests, favorites, 
 * and links here without needing to modify the HTML markup!
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Angel G. Lopez",
    preferredName: "Angel",
    handle: "@angelglopez",
    title: "Creative Technologist • Gamer • Digital Explorer",
    statusText: "Exploring new digital realms & crafting interactive spaces",
    statusBadge: "🟢 Online & Creating",
    avatar: "assets/avatar.jpg",
    location: "Austin, TX / Digital Realm",
    bioLong: "Hey there! I’m Angel. I’m a passionate creator living at the intersection of modern technology, gaming culture, futuristic aesthetics, and sound design. Whether I’m exploring expansive virtual worlds, curating synthwave and lofi frequencies, or experimenting with interactive interfaces, I love crafting digital experiences that feel alive, intuitive, and personal.",
    quote: "“The future belongs to those who build it with passion, curiosity, and good music.”",
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github", label: "Check my repositories" },
      { name: "Discord", url: "https://discord.com", icon: "discord", handle: "angel#0404", label: "angel#0404" },
      { name: "Steam", url: "https://steamcommunity.com", icon: "steam", label: "Steam Gaming Profile" },
      { name: "Spotify", url: "https://spotify.com", icon: "spotify", label: "Current Playlists" },
      { name: "X (Twitter)", url: "https://x.com", icon: "twitter", label: "Thoughts & Updates" },
      { name: "Email", url: "mailto:angel.lopez.dev@example.com", icon: "mail", handle: "angel.lopez.dev@example.com", label: "Send a direct email" }
    ]
  },

  stats: [
    { value: "5+", label: "Years Exploring Code & Tech", icon: "💻" },
    { value: "2.8k+", label: "Hours in Virtual RPGs", icon: "⚔️" },
    { value: "48+", label: "Curated Sound Playlists", icon: "🎧" },
    { value: "100%", label: "Curiosity & Passion", icon: "⚡" }
  ],

  vibes: [
    {
      icon: "🌙",
      title: "Night Owl Creator",
      desc: "Peak inspiration strikes when the ambient lights kick on and the synthwave plays."
    },
    {
      icon: "🎮",
      title: "Immersive World Explorer",
      desc: "Lover of rich environmental storytelling, deep lore, and stylish art directions."
    },
    {
      icon: "🎧",
      title: "Soundscape Enthusiast",
      desc: "Every mood has its soundtrack. Always hunting for fresh beats and atmospheric tunes."
    },
    {
      icon: "⚡",
      title: "Futuristic Design Buff",
      desc: "Obsessed with clean typography, glowing glass surfaces, and responsive micro-interactions."
    }
  ],

  gearStack: [
    {
      category: "Battle Station & Audio",
      icon: "🖥️",
      items: [
        "Custom 65% Mechanical Keyboard (Lubed Gateron Oil Kings)",
        "34” Ultra-wide 144Hz Curved OLED Monitor",
        "Sennheiser Open-Back Studio Reference Headphones",
        "Razer Viper Wireless & Minimal Desk Mat"
      ]
    },
    {
      category: "Creation & Software",
      icon: "🛠️",
      items: [
        "VS Code (Dark Obsidian Minimalist Theme)",
        "Figma for Visual Layouts & Component Prototyping",
        "Ableton Live & Soundtoys for Audio Experiments",
        "Arc Browser & Terminal Power Tools"
      ]
    },
    {
      category: "Everyday Carry & Lifestyle",
      icon: "🎒",
      items: [
        "Minimalist Matte Black EDC Backpack",
        "Kindle Paperwhite (Sci-Fi & Cyberpunk Novels)",
        "Sony WH-1000XM5 Noise Canceling Headphones",
        "Double-Wall Insulated Cold Brew Flask"
      ]
    }
  ],

  interests: [
    {
      id: "gaming",
      category: "Gaming & Worlds",
      icon: "🎮",
      badge: "Core Passion",
      accent: "cyan",
      title: "Immersive RPGs & High-Stakes Action",
      desc: "From dystopian night-cityscapes to punishing dark fantasy landscapes, gaming is an art form of unmatched immersion and interactive storytelling.",
      currentObsession: "Cyberpunk 2077 (Phantom Liberty), Elden Ring & Hades II",
      tags: ["Open World RPGs", "Roguelikes", "Action Adventure", "Soulslikes", "Indie Gems"],
      stats: [
        { label: "Primary Platform", value: "Custom PC & Steam Deck" },
        { label: "Favorite Genre", value: "Cyberpunk / Dark Fantasy RPGs" },
        { label: "Play Style", value: "Lore Hunter & Explorer" }
      ]
    },
    {
      id: "music",
      category: "Music & Frequencies",
      icon: "🎧",
      badge: "Constant Vibe",
      accent: "violet",
      title: "Synthwave, Cyberpunk & Chill Beats",
      desc: "Music drives my focus and shapes every creative session. I love rich analog synths, driving drum machines, ethereal vocal chops, and deep basslines.",
      currentObsession: "The Midnight, Gunship, HEALTH & Lofi Girl Ambient Night Sessions",
      tags: ["Synthwave", "Darksynth", "Cyberpunk OSTs", "Chillhop", "Alternative Rock"],
      stats: [
        { label: "Daily Listening", value: "6+ Hours" },
        { label: "Preferred Setup", value: "Lossless Audio & DAC" },
        { label: "Favorite Key", value: "D Minor & F Minor" }
      ]
    },
    {
      id: "anime",
      category: "Anime & Animation",
      icon: "🎌",
      badge: "Visual Inspiration",
      accent: "rose",
      title: "Mind-Bending Plots & Mesmerizing Art",
      desc: "Captivated by high-concept science fiction, emotional character arcs, and fluid kinetic fight choreography that pushes visual animation boundaries.",
      currentObsession: "Cyberpunk: Edgerunners, Arcane, Jujutsu Kaisen & Steins;Gate",
      tags: ["Sci-Fi / Cyberpunk", "Psychological Thrillers", "High Fantasy", "Studio Trigger", "MAPPA"],
      stats: [
        { label: "Favorite Era", value: "Modern Cinematic & 90s Classics" },
        { label: "Top Director", value: "Hiroyuki Imaishi & Makoto Shinkai" },
        { label: "Rewatch King", value: "Cowboy Bebop" }
      ]
    },
    {
      id: "cinema",
      category: "Cinema & Storytelling",
      icon: "🎬",
      badge: "Aesthetic Eye",
      accent: "amber",
      title: "Neo-Noir, Sci-Fi & Atmospheric Films",
      desc: "I appreciate meticulous set design, volumetric lighting, memorable color palettes, and storylines that question identity, consciousness, and the future.",
      currentObsession: "Blade Runner 2049, Dune: Part Two, Interstellar & Ex Machina",
      tags: ["Sci-Fi Neo-Noir", "Dystopian Epics", "A24 Psychological", "Soundtrack Driven"],
      stats: [
        { label: "Favorite Cinematographer", value: "Roger Deakins" },
        { label: "Soundtrack Master", value: "Hans Zimmer & Cliff Martinez" },
        { label: "Go-to Genre", value: "Sci-Fi Thriller" }
      ]
    },
    {
      id: "tech",
      category: "Tech & Innovation",
      icon: "⚡",
      badge: "Future Vision",
      accent: "emerald",
      title: "Creative Web, AI & Hardware Modding",
      desc: "Always experimenting with interactive web canvases, fluid CSS animations, modern developer tools, mechanical keyboard builds, and smart ambient desk setups.",
      currentObsession: "WebGL Shaders, Generative UI, Ambient Lighting Sync & Custom Hardware",
      tags: ["Creative Coding", "Modern Web Architecture", "Smart Ecosystems", "Custom Peripherals"],
      stats: [
        { label: "Favorite Tech Stack", value: "Vanilla JS, CSS Variables, Canvas" },
        { label: "Hardware Hobby", value: "Custom Keyboards & Cable Sleeving" },
        { label: "Philosophy", value: "Fast, Lightweight & Beautiful" }
      ]
    }
  ],

  favorites: {
    games: [
      {
        title: "Cyberpunk 2077: Phantom Liberty",
        genre: "Sci-Fi Open World RPG",
        rating: "10 / 10",
        platform: "PC (Ray Tracing Overdrive)",
        image: "assets/game-art.jpg",
        highlight: "Night City is the most atmospheric open-world environment ever created in gaming history.",
        quote: "“Never fade away.”"
      },
      {
        title: "Elden Ring",
        genre: "Action Dark Fantasy RPG",
        rating: "10 / 10",
        platform: "PC",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        highlight: "Unrivaled sense of discovery, breathtaking vistas, and deep rewarding combat mechanics.",
        quote: "“Arise now, ye Tarnished.”"
      },
      {
        title: "Persona 5 Royal",
        genre: "Stylized JRPG / Social Sim",
        rating: "9.8 / 10",
        platform: "PC / Steam Deck",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
        highlight: "Acid jazz soundtrack, god-tier UI art direction, and unforgettable camaraderie.",
        quote: "“Take Your Heart.”"
      },
      {
        title: "Hades & Hades II",
        genre: "Mythological Roguelike",
        rating: "9.9 / 10",
        platform: "PC / Steam Deck",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        highlight: "Flawless combat loop, witty narrative integration upon death, and phenomenal voice acting.",
        quote: "“There is no escape.”"
      }
    ],

    tracks: [
      {
        title: "Sunset & Neon Reverie",
        artist: "The Midnight & Gunship",
        album: "Synthwave Odyssey Vol. 1",
        genre: "Darksynth / Retrowave",
        duration: "4:28",
        cover: "assets/music-art.jpg",
        bpm: 110,
        mood: "Driving at midnight on an empty coastal highway with glowing city lights in the rear-view mirror."
      },
      {
        title: "Nightcall & Cyber Shadows",
        artist: "Kavinsky ft. Lovefoxxx",
        album: "OutRun Classics",
        genre: "Electro / Synthwave",
        duration: "4:19",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        bpm: 98,
        mood: "Atmospheric bassline paired with gritty analog vocoders and cinematic reverberations."
      },
      {
        title: "Resonance of Neo-Tokyo",
        artist: "HOME & Com Truise",
        album: "Chillwave Transmissions",
        genre: "Chillwave / Lo-Fi Synth",
        duration: "3:32",
        cover: "assets/anime-art.jpg",
        bpm: 85,
        mood: "Nostalgic tape flutter, lush chord progressions, and pure warm analog bliss."
      },
      {
        title: "Major Crimes (Night City Radio)",
        artist: "HEALTH & Window Weather",
        album: "Cyberpunk OST",
        genre: "Industrial / Dark Electronic",
        duration: "3:40",
        cover: "assets/game-art.jpg",
        bpm: 125,
        mood: "Heavy crushing beats, ethereal female vocals, and raw dystopian adrenaline."
      }
    ],

    anime: [
      {
        title: "Cyberpunk: Edgerunners",
        studio: "Studio Trigger / CD Projekt Red",
        character: "David Martinez & Lucy",
        quote: "“I couldn’t wait for you to come and clear the cupboard...”",
        image: "assets/anime-art.jpg",
        tag: "Cyberpunk Masterpiece",
        whyILoveIt: "Bursting with hyper-stylized action, intense emotional weight, and an unforgettable tribute to Night City."
      },
      {
        title: "Steins;Gate",
        studio: "White Fox",
        character: "Rintaro Okabe (Hououin Kyouma)",
        quote: "“No one knows what the future holds. That’s why its potential is infinite.”",
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
        tag: "Time Travel Peak",
        whyILoveIt: "Incredible buildup, high-stakes psychological tension, and brilliant emotional payoff."
      },
      {
        title: "Arcane (League of Legends)",
        studio: "Fortiche / Riot Games",
        character: "Vi & Jinx",
        quote: "“In the pursuit of great, we failed to do good.”",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
        tag: "Peak Visual Art",
        whyILoveIt: "Unrivaled painterly animation, rich nuanced character motivations, and jaw-dropping cinematography."
      },
      {
        title: "Cowboy Bebop",
        studio: "Sunrise",
        character: "Spike Spiegel",
        quote: "“Whatever happens, happens.”",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
        tag: "Timeless Classic",
        whyILoveIt: "Legendary jazz score by Yoko Kanno, melancholic space western atmosphere, and effortlessly cool choreography."
      }
    ],

    movies: [
      {
        title: "Blade Runner 2049",
        director: "Denis Villeneuve",
        year: "2017",
        genre: "Sci-Fi Neo-Noir",
        rating: "10 / 10",
        image: "assets/game-art.jpg",
        iconicLine: "“All the best memories are hers.”",
        takeaway: "A visual and acoustic triumph with monumental scale and profound existential philosophy."
      },
      {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: "2014",
        genre: "Sci-Fi / Space Exploration",
        rating: "10 / 10",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        iconicLine: "“Do not go gentle into that good night.”",
        takeaway: "Hans Zimmer’s pipe organ score paired with mind-bending astrophysics and raw father-daughter emotional core."
      },
      {
        title: "Dune: Part Two",
        director: "Denis Villeneuve",
        year: "2024",
        genre: "Epic Sci-Fi",
        rating: "9.9 / 10",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
        iconicLine: "“May thy knife chip and shatter.”",
        takeaway: "Epic world-building, thunderous sound design, and masterclass desert cinematography."
      },
      {
        title: "Spider-Man: Across the Spider-Verse",
        director: "Joaquim Dos Santos, Kemp Powers",
        year: "2023",
        genre: "Animated / Multiverse Sci-Fi",
        rating: "9.8 / 10",
        image: "assets/anime-art.jpg",
        iconicLine: "“Everyone keeps telling me how my story is supposed to go. Nah. Imma do my own thing.”",
        takeaway: "Groundbreaking multimedia art blending comic book printing, watercolor, and dynamic punk aesthetics."
      }
    ]
  },

  themeAccents: [
    { id: "cyan", name: "Cyber Cyan", primary: "#00f0ff", glow: "rgba(0, 240, 255, 0.4)", secondary: "#00a8ff" },
    { id: "emerald", name: "Neon Emerald", primary: "#00ff9d", glow: "rgba(0, 255, 157, 0.4)", secondary: "#00d084" },
    { id: "amber", name: "Solar Amber", primary: "#ffb800", glow: "rgba(255, 184, 0, 0.4)", secondary: "#ff8400" },
    { id: "violet", name: "Hyper Violet", primary: "#b362ff", glow: "rgba(179, 98, 255, 0.4)", secondary: "#8f00ff" },
    { id: "rose", name: "Neon Rose", primary: "#ff2a85", glow: "rgba(255, 42, 133, 0.4)", secondary: "#ff0055" }
  ]
};

// Freeze data to prevent accidental modification at runtime
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}
