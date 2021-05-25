const quizArray = [
    { at_num: "1", mass: "1.0079", name: "Hydrogen", symbol: "H" },
    { at_num: "2", mass: "4.0026", name: "Helium", symbol: "He" },
    { at_num: "3", mass: "6.941", name: "Lithium", symbol: "Li" },
    { at_num: "4", mass: "9.0122", name: "Beryllium", symbol: "Be" },
    { at_num: "5", mass: "10.811", name: "Boron", symbol: "B" },
    { at_num: "6", mass: "12.0107", name: "Carbon", symbol: "C" },
    { at_num: "7", mass: "14.0067", name: "Nitrogen", symbol: "N" },
    { at_num: "8", mass: "15.9994", name: "Oxygen", symbol: "O" },
    { at_num: "9", mass: "18.9984", name: "Fluorine", symbol: "F" },
    { at_num: "10", mass: "20.1797", name: "Neon", symbol: "Ne" },
    { at_num: "11", mass: "22.9897", name: "Sodium", symbol: "Na" },
    { at_num: "12", mass: "24.305", name: "Magnesium", symbol: "Mg" },
    { at_num: "13", mass: "26.9815", name: "Aluminum", symbol: "Al" },
    { at_num: "14", mass: "28.0855", name: "Silicon", symbol: "Si" },
    { at_num: "15", mass: "30.9738", name: "Phosphorus", symbol: "P" },
    { at_num: "16", mass: "32.065", name: "Sulfur", symbol: "S" },
    { at_num: "17", mass: "35.453", name: "Chlorine", symbol: "Cl" },
    { at_num: "18", mass: "39.948", name: "Argon", symbol: "Ar" },
    { at_num: "19", mass: "39.0983", name: "Potassium", symbol: "K" },
    { at_num: "20", mass: "40.078", name: "Calcium", symbol: "Ca" },
    { at_num: "21", mass: "44.9559", name: "Scandium", symbol: "Sc" },
    { at_num: "22", mass: "47.867", name: "Titanium", symbol: "Ti" },
    { at_num: "23", mass: "50.9415", name: "Vanadium", symbol: "V" },
    { at_num: "24", mass: "51.9961", name: "Chromium", symbol: "Cr" },
    { at_num: "25", mass: "54.938", name: "Manganese", symbol: "Mn" },
    { at_num: "26", mass: "55.845", name: "Iron", symbol: "Fe" },
    { at_num: "27", mass: "58.9332", name: "Cobalt", symbol: "Co" },
    { at_num: "28", mass: "58.6934", name: "Nickel", symbol: "Ni" },
    { at_num: "29", mass: "63.546", name: "Copper", symbol: "Cu" },
    { at_num: "30", mass: "65.39", name: "Zinc", symbol: "Zn" },
    { at_num: "31", mass: "69.723", name: "Gallium", symbol: "Ga" },
    { at_num: "32", mass: "72.64", name: "Germanium", symbol: "Ge" },
    { at_num: "33", mass: "74.9216", name: "Arsenic", symbol: "As" },
    { at_num: "34", mass: "78.96", name: "Selenium", symbol: "Se" },
    { at_num: "35", mass: "79.904", name: "Bromine", symbol: "Br" },
    { at_num: "36", mass: "83.8	", name: "Krypton", symbol: "Kr" },
    { at_num: "37", mass: "85.4678", name: "Rubidium", symbol: "Rb" },
    { at_num: "38", mass: "87.62", name: "Strontium", symbol: "Sr" },
    { at_num: "39", mass: "88.9059", name: "Yttriu", symbol: "Y" },
    { at_num: "40", mass: "91.224", name: "Zirconium", symbol: "Zr" },
    { at_num: "41", mass: "92.9064", name: "Niobium", symbol: "Nb" },
    { at_num: "42", mass: "95.94", name: "Molybdenum", symbol: "Mo" },
    { at_num: "43", mass: "98", name: "Technetium", symbol: "Tc" },
    { at_num: "44", mass: "101.07", name: "Ruthenium", symbol: "Ru" },
    { at_num: "45", mass: "102.905", name: "Rhodium", symbol: "Rh" },
    { at_num: "46", mass: "106.42", name: "Palladium", symbol: "Pd" },
    { at_num: "47", mass: "107.868", name: "Silver", symbol: "Ag" },
    { at_num: "48", mass: "112.411", name: "Cadmium", symbol: "Cd" },
    { at_num: "49", mass: "114.818", name: "Indium", symbol: "In" },
    { at_num: "50", mass: "118.71", name: "Tin", symbol: "Sn" },
    { at_num: "51", mass: "121.76", name: "Antimony", symbol: "Sb" },
    { at_num: "52", mass: "127.6", name: "Tellurium", symbol: "Te" },
    { at_num: "53", mass: "126.904", name: "Iodine", symbol: "I" },
    { at_num: "54", mass: "131.293", name: "Xenon", symbol: "Xe" }];

 /*   { at_num: "55", mass: "132.905", name: "Cesium", symbol: "Cs" },
    { at_num: "56", mass: "137.327", name: "Barium", symbol: "Ba" },
    { at_num: "57", mass: "138.905", name: "Lanthanum", symbol: "La" },
    { at_num: "58", mass: "140.116", name: "Cerium", symbol: "Ce" },
    { at_num: "59", mass: "140.907", name: "Praseodymium", symbol: "Pr" },
    { at_num: "60", mass: "144.24", name: "Neodymium", symbol: "Nd" },
    { at_num: "61", mass: "145", name: "Promethium", symbol: "Pm" },
    { at_num: "62", mass: "150.36", name: "Samarium", symbol: "Sm" },
    { at_num: "63", mass: "151.964", name: "Europium", symbol: "Eu" },
    { at_num: "64", mass: "157.25", name: "Gadolinium", symbol: "Gd" },
    { at_num: "65", mass: "158.925", name: "Terbium", symbol: "Tb" },
    { at_num: "66", mass: "162.5", name: "Dysprosium", symbol: "Dy" },
    { at_num: "67", mass: "164.930", name: "Holmium", symbol: "Ho" },
    { at_num: "68", mass: "167.259", name: "Erbium", symbol: "Er" },
    { at_num: "69", mass: "168.934", name: "Thulium", symbol: "Tm" },
    { at_num: "70", mass: "173.04", name: "Ytterbium", symbol: "Yb" },
    { at_num: "71", mass: "174.967", name: "Lutetium", symbol: "Lu" },
    { at_num: "72", mass: "178.49", name: "Hafnium", symbol: "Hf" },
    { at_num: "73", mass: "180.947", name: "Tantalum", symbol: "Ta" },
    { at_num: "74", mass: "183.84", name: "Tungsten", symbol: "W" },
    { at_num: "75", mass: "186.207", name: "Rhenium", symbol: "Re" },
    { at_num: "76", mass: "190.23", name: "Osmium", symbol: "Os" },
    { at_num: "77", mass: "196.966", name: "Iridium", symbol: "Ir" },
    { at_num: "78", mass: "192.217", name: "Platinum", symbol: "Pt" },
    { at_num: "79", mass: "195.078", name: "Gold", symbol: "Au" },
    { at_num: "80", mass: "200.59", name: "Mercury", symbol: "Hg" },
    { at_num: "81", mass: "204.383", name: "Thallium", symbol: "Tl" },
    { at_num: "82", mass: "207.2", name: "Lead", symbol: "Pb" },
    { at_num: "83", mass: "208.980", name: "Bismuth", symbol: "Bi" },
    { at_num: "84", mass: "209", name: "Polonium", symbol: "Po" },
    { at_num: "85", mass: "210", name: "Astatine", symbol: "At" },
    { at_num: "86", mass: "222", name: "Radon", symbol: "Rn" },
    { at_num: "87", mass: "223", name: "Francium", symbol: "Fr" },
    { at_num: "88", mass: "226", name: "Radium", symbol: "Ra" },
    { at_num: "89", mass: "227", name: "Actinium", symbol: "Ac" },
    { at_num: "90", mass: "232.038", name: "Thorium", symbol: "Th" },
    { at_num: "91", mass: "231.035", name: "Protactinium ", symbol: "Pa" },
    { at_num: "92", mass: "238.028", name: "Uranium", symbol: "U" },
    { at_num: "93", mass: "237", name: "Neptunium", symbol: "Np" },
    { at_num: "94", mass: "244", name: "Plutonium", symbol: "Pu" },
    { at_num: "95", mass: "243", name: "Americium", symbol: "Am" },
    { at_num: "96", mass: "247", name: "Curium", symbol: "Cm" },
    { at_num: "97", mass: "247", name: "Berkelium", symbol: "Bk" },
    { at_num: "98", mass: "251", name: "Californium", symbol: "Cf" },
    { at_num: "99", mass: "252", name: "Einsteinium", symbol: "Es" },
    { at_num: "100", mass: "257", name: "Fermium", symbol: "Fm" },
    { at_num: "101", mass: "258", name: "Mendelevium", symbol: "Md" },
    { at_num: "102", mass: "259", name: "Nobelium", symbol: "No" },
    { at_num: "103", mass: "262", name: "Lawrencium", symbol: "Lr" },
    { at_num: "104", mass: "261", name: "Rutherfordium", symbol: "Rf" },
    { at_num: "105", mass: "262", name: "Dubnium", symbol: "Db" },
    { at_num: "106", mass: "266", name: "Seaborgium", symbol: "Sg" },
    { at_num: "107", mass: "264", name: "Bohrium", symbol: "Bh" },
    { at_num: "108", mass: "277", name: "Hassium", symbol: "Hs" },
    { at_num: "109", mass: "268", name: "Meitnerium", symbol: "Mt" },
    { at_num: "110", mass: "261.9", name: "Darmstadtium", symbol: "Ds" },
    { at_num: "111", mass: "271.8", name: "Roentgenium", symbol: "Rg" },
    { at_num: "112", mass: "285", name: "Copernicium", symbol: "Cn" },
    { at_num: "113", mass: "286", name: "Ununtrium", symbol: "Uut" },
    { at_num: "114", mass: "289", name: "Flerovium", symbol: "Fl" },
    { at_num: "115", mass: "288", name: "Ununpentium", symbol: "Uup" },
    { at_num: "116", mass: "293", name: "Livermorium", symbol: "Lv	" },
    { at_num: "117", mass: "260.9", name: "Ununseptium", symbol: "Uus" },
    { at_num: "118", mass: "294", name: "Ununoctium", symbol: "Uuo" }
];*/

var serveQuestions = [];
var displayQuestions = [];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function Get_four_options(given, current_at_num) {
    var atNum = [];
    var Options = [];
    var answers = [];
    var correctAnswerposition = getRandomIntInclusive(1,4);
    for (; atNum.length < 3;) {
        var newRandomNumber = getRandomIntInclusive(1, 30);
        if (!atNum.includes(newRandomNumber) && newRandomNumber!=current_at_num) {
            atNum.push(newRandomNumber);
        }
    }
    atNum.map((num, i) => {
        Options.push(quizArray.find(({ at_num }) => at_num === num.toString()))
    });
    atNum = [];
    if (given === 1) {
        Options.map((details) => {
            answers.push({
                answerText: details.name,
                isCorrect: false
            })
        })
        var correct = (quizArray.find(({ at_num }) => at_num === current_at_num.toString()));
        answers.splice(correctAnswerposition,0,({
            answerText: correct.name,
            isCorrect: true
        }));
        return (answers);
    }
    else if (given === 2) {
        {
            Options.map((details) => {
                answers.push({
                    answerText: details.name,
                    isCorrect: false
                })
            })
            var correct = (quizArray.find(({ at_num }) => at_num === current_at_num.toString()));
            answers.splice(correctAnswerposition,0,({
                answerText: correct.name,
                isCorrect: true
            }));
            return (answers);
        }
    }
    else if (given === 3) {
        {
            Options.map((details) => {
                answers.push({
                    answerText: details.at_num,
                    isCorrect: false
                })
            })
            var correct = (quizArray.find(({ at_num }) => at_num === current_at_num.toString()));
            answers.splice(correctAnswerposition,0,({
                answerText: correct.at_num,
                isCorrect: true
            }));
            return (answers);
        }
    }
    else if (given === 4) {
        {
            Options.map((details) => {
                answers.push({
                    answerText: details.mass,
                    isCorrect: false
                })
            })
            var correct = (quizArray.find(({ at_num }) => at_num === current_at_num.toString()));
            answers.splice(correctAnswerposition,0,({
                answerText: correct.mass,
                isCorrect: true
            }));
            return (answers);
        }
    }
    else if (given === 5) {
        {
            Options.map((details) => {
                answers.push({
                    answerText: details.at_num,
                    isCorrect: false
                })
            })
            var correct = (quizArray.find(({ at_num }) => at_num === current_at_num.toString()));
            answers.splice(correctAnswerposition,0,({
                answerText: correct.at_num,
                isCorrect: true
            }));
            return (answers);
        }
    }

}
function getRandomQuestions() {
    var atNum = [];
    for (; atNum.length < 10;) {
        var newRandomNumber = getRandomIntInclusive(1, 30);
        if (!atNum.includes(newRandomNumber)) {
            atNum.push(newRandomNumber);
        }
    }
    atNum.map((num, i) => {
        serveQuestions.push(quizArray.find(({ at_num }) => at_num === num.toString()))
    });
    atNum = [];
    serveQuestions.map((details) => {
        var type = getRandomIntInclusive(1, 5);
        var quesblock = [];
        if (type === 1) {
            var ques = "what is the name of the element with atomic number " + details.at_num.toString();
            var answerOptions = Get_four_options(type, details.at_num);
            quesblock.push({ questionText: ques, answerOptions: answerOptions });
        }
        else if (type === 2) {
            var ques = "what is the name of the element with atomic mass " + details.mass.toString();
            var answerOptions = Get_four_options(type, details.at_num);
            quesblock.push({ questionText: ques, answerOptions: answerOptions });
        }
        else if (type === 3) {
            var ques = "what is the atomic number of the element " + details.name.toString();
            var answerOptions = Get_four_options(type, details.at_num);
            quesblock.push({ questionText: ques, answerOptions: answerOptions });
        }
        else if (type === 4) {
            var ques = "what is the atomic mass of the element " + details.name.toString();
            var answerOptions = Get_four_options(type, details.at_num);
            quesblock.push({ questionText: ques, answerOptions: answerOptions });
        }
        else if (type === 5) {
            var ques = "what is the atomic number of the element with element symbol " + details.symbol.toString();
            var answerOptions = Get_four_options(type, details.at_num);
            quesblock.push({ questionText: ques, answerOptions: answerOptions });
        }
        displayQuestions.push(quesblock);
    })
    return (displayQuestions);
}
export const questjson = getRandomQuestions();
