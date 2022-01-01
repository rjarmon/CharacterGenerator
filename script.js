const characterRaces = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling", "Orc of Exandria", "Leonin", "Satyr", "Fairy", "Harengon", "Owlin", "Aarakocra", "Genasi", "Goliath", "Aasimar", "Bugbear", "Firbolg", "Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi", "Triton", "Yuan-ti Pureblood", "Feral Tiefling", "Tortle", "Changeling", "Kalashtar", "Orc of Eberron", "Shifter", "Warforged", "Gith", "Centaur", "Loxodon", "Minotaur", "Simic Hybrid", "Vedalken", "Verdan", "Locathah", "Grung"];

const characterClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer", "Blood Hunter"];

const characterBackgrounds = ["Acolyte", "Acolyte - Baldur's Gate", "Acolyte (Luxonborn)", "Anthropologist", "Archaeologist", "Athlete", "Azorius", "Functionary", "Boros Legionnaire", "Celebrity Adventurer’s Scion", "Charlatan", "Charlatan - Baldur’s Gate", "City Watch / Investigator", "Clan Crafter", "Cloistered Scholar", "Courtier", "Criminal - Baldur’s Gate", "Criminal (Myriad Operative)", "Criminal / Spy", "Dimir Operative", "Entertainer", "Entertainer - Baldur’s Gate", "Faceless", "Faction Agent", "Failed Merchant", "Far Traveler", "Feylost", "Fisher", "Folk Hero", "Folk Hero - Baldur’s Gate", "Gambler", "Gladiator", "Golgari Agent", "Grinner", "Gruul Anarch", "Guild Artisan - Baldur’s Gate", "Guild Artisan / Guild Merchant", "Haunted One", "Hermit", "Hermit - Baldur’s Gate", "House Agent (Cannith)", "House Agent (Deneith)", "House Agent (Ghallanda)", "House Agent (Jorasco)", "House Agent (Kundarak)", "House Agent (Lyrandar)", "House Agent (Medani)", "House Agent (Orien)", "House Agent (Orien)", "House Agent (Orien)", "House Agent (Tharashk)", "House Agent (Thuranni)", "House Agent (Vadalis)", "Inheritor", "Investigator", "Izzet Engineer", "Knight", "Knight of the Order", "Lorehold Student", "Marine", "Mercenary Veteran", "Noble", "Noble - Baldur’s Gate", "Orzhov Representative", "Outlander", "Outlander - Baldur’s Gate", "Pirate", "Plaintiff", "Prismari Student", "Quandrix Student", "Rakdos Cultist", "Rival Intern", "Sage", "Sage - Baldur’s Gate", "Sage (Cobalt Scholar)", "Sailor", "Sailor - Baldur’s Gate", "Sailor (Revelry Pirate)", "Selesnya Initiate", "Shipwright", "Silverquill Student", "Simic Scientist", "Smuggler", "Soldier", "Soldier - Baldur’s Gate", "Spy (Augen Trust)", "Urban Bounty Hunter", "Urchin", "Urchin - Baldur’s Gate", "Uthgardt Tribe Member", "Volstrucker Agent", "Waterdhavian Noble", "Witchlight Hand", "Witherbloom Student"];

rollD6 = () => Math.floor(Math.random() * (6 - 1) + 2);

rollAbilityScores = () => {
    const diceRolls = [];

    let firstD6 = rollD6();
    diceRolls.push(firstD6);

    let secondD6 = rollD6();
    diceRolls.push(secondD6);    

    let thirdD6 = rollD6();
    diceRolls.push(thirdD6);

    let fourthD6 = rollD6();
    diceRolls.push(fourthD6);

    function dropLowest(rolls) {
        rolls = rolls.slice();
        rolls.splice(rolls.indexOf(Math.min.apply(null, rolls)),1);
        return rolls;
    };

    const abilityScore = dropLowest(diceRolls).reduce((a,b) => a + b, 0);
    return abilityScore;
}

const getRace = Math.floor(Math.random() * characterRaces.length);
const characterRace = characterRaces[getRace];

const getClass = Math.floor(Math.random() * characterClasses.length);
const characterClass = characterClasses[getClass];

const getBackground = Math.floor(Math.random() * characterBackgrounds.length);
const characterBackground = characterBackgrounds[getBackground]

const strengthScore = rollAbilityScores();
const dexterityScore = rollAbilityScores();
const constitutionScore = rollAbilityScores();
const intelligenceScore = rollAbilityScores();
const wisdomScore = rollAbilityScores();
const charismaScore = rollAbilityScores();

console.log(`YOUR RANDOMLY GENERATED CHARACTER:\n${characterRace} ${characterClass} - ${characterBackground} background\nStrength [${strengthScore}]\nDexterity [${dexterityScore}]\nConstitution [${constitutionScore}]\nIntelligence [${intelligenceScore}]\nWisdom [${wisdomScore}]\nCharisma [${charismaScore}]`)