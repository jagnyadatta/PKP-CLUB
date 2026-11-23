import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { setServers } from "node:dns";
import { Program } from "../models/program.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

try {
  setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {}

const defaultPrograms = [
  {
    type: "festival",
    name: "ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା",
    date: "ମାର୍ଚ୍ଚ ୧୫-୨୦, ୨୦୨୪",
    category: "religious",
    tag: "ମହାମେଳଣ",
    badgeColor: "bg-amber-400 text-stone-900",
    location: "ମୁଖ୍ୟ ମନ୍ଦିର ପ୍ରାଙ୍ଗଣ",
    duration: "୬ ଦିନ",
    participants: "୫୦୦+",
    description: "ପାରମ୍ପାରିକ ପଞ୍ଚୁଦୋଳ ଯାତ୍ରା ଉତ୍ସବ ଓ ଭକ୍ତିଭାବପୂର୍ଣ୍ଣ ଆୟୋଜନ",
    highlights: ["ରଥଯାତ୍ରା", "ଭକ୍ତିଗୀତ", "ପ୍ରସାଦ ବିତରଣ", "ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ"],
    image: "",
    isActive: true,
  },
  {
    type: "festival",
    name: "ମା' ଗଜଲକ୍ଷ୍ମୀ ପୂଜା",
    date: "ଜୁନ ୧୦-୧୨, ୨୦୨୪",
    category: "religious",
    tag: "ଧାର୍ମିକ ପୂଜା",
    badgeColor: "bg-rose-400 text-white",
    location: "ଗଜଲକ୍ଷ୍ମୀ ମନ୍ଦିର",
    duration: "୩ ଦିନ",
    participants: "୩୦୦+",
    description: "ଧାର୍ମିକ ପୂଜା ଓ ସାମୁଦାୟିକ ଭୋଜି ଅନୁଷ୍ଠାନ",
    highlights: ["ବିଶେଷ ପୂଜା", "ସାମୁଦାୟିକ ଭୋଜି", "ଆରତୀ", "ପ୍ରସାଦ"],
    image: "",
    isActive: true,
  },
  {
    type: "festival",
    name: "ଦଣ୍ଡନାଚ ପର୍ବ",
    date: "ସେପ୍ଟେମ୍ବର ୫-୭, ୨୦୨୪",
    category: "cultural",
    tag: "ଲୋକନୃତ୍ୟ",
    badgeColor: "bg-emerald-400 text-stone-900",
    location: "ସମୁଦାୟ ଭବନ",
    duration: "୩ ଦିନ",
    participants: "୪୦୦+",
    description: "ପାରମ୍ପାରିକ ନୃତ୍ୟ ଓ ସାଂସ୍କୃତିକ ପ୍ରଦର୍ଶନୀ",
    highlights: ["ଦଣ୍ଡନାଚ", "ପାରମ୍ପାରିକ ନୃତ୍ୟ", "ସଙ୍ଗୀତ", "ପ୍ରଦର୍ଶନୀ"],
    image: "",
    isActive: true,
  },
  {
    type: "sport",
    name: "Annual Cricket Tournament 2024",
    year: "2024",
    category: "cricket",
    teams: "ପାଇକରାପୁର vs ବ୍ରାହ୍ମଣଦେଓ",
    venue: "ମା ବରୁଣାଇ ମୈଦାନ",
    date: "ମାର୍ଚ୍ଚ ୧୫, ୨୦୨୪",
    result: "ପାଇକରାପୁର ବିଜୟୀ (୫୮ ରନରେ)",
    winner: "ପାଇକରାପୁର ଟିମ୍",
    runnerUp: "ବ୍ରାହ୍ମଣଦେଓ ଟିମ୍",
    manOfMatch: "ଶ୍ରୀ. ରଜନୀକାନ୍ତ ଦଳେଇ",
    description: "ବାର୍ଷିକ କ୍ରିକେଟ୍ ପ୍ରତିଯୋଗିତା",
    highlights: ["ରଜନୀକାନ୍ତଙ୍କ ୭୫ ରନ", "୩ ଉଇକେଟ୍ ନେଇ ଅମରେଶ", "ଶେଷ ଓଭରରେ ରୋମାଞ୍ଚକ ଜୟ"],
    image: "",
    isActive: true,
  },
  {
    type: "sport",
    name: "Volleyball Premier League 2024",
    year: "2024",
    category: "volleyball",
    teams: "ପାଇକରାପୁର-A vs ପାଇକରାପୁର-B",
    venue: "ଇନଡୋର ଷ୍ଟାଡିୟମ",
    date: "ଫେବୃଆରୀ ୨୮, ୨୦୨୪",
    result: "ପାଇକରାପୁର-A ବିଜୟୀ (୩-୧ ସେଟରେ)",
    winner: "ପାଇକରାପୁର-A ଟିମ୍",
    runnerUp: "ପାଇକରାପୁର-B ଟିମ୍",
    manOfMatch: "ଶ୍ରୀ. ରୀତିକ ଦଳେଇ",
    description: "ଭଲିବଲ୍ ପ୍ରିମିୟର ଲିଗ୍ ୨୦୨୪",
    highlights: ["ରୀତିକଙ୍କ ଶକ୍ତିଶାଳୀ ସ୍ମାସ", "ସୁଦୀପ୍ଙ୍କ ବ୍ଲକ", "ଚମତ୍କାର ରକ୍ଷଣ"],
    image: "",
    isActive: true,
  },
];

const seedPrograms = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB.");

    const count = await Program.countDocuments();
    if (count === 0) {
      await Program.insertMany(defaultPrograms);
      console.log(`Seeded ${defaultPrograms.length} initial programs successfully.`);
    } else {
      console.log(`Programs collection already has ${count} records. Skipping seed.`);
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedPrograms();
