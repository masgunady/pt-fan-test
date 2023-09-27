const jumlahKata = (string) => {

const cutLastString = [...string];
cutLastString.pop();

const joinString = cutLastString.join("");
const container = [];

const sanitizeString = joinString
.toLowerCase()
.replace(".","")
.replace(",","")
.replace("-","")
.split(" ");

for (let i = 0; i < sanitizeString.length; i++) {
    for (let j = 0; j < sanitizeString[i].length; j++)
        if (sanitizeString[i].charCodeAt(j) < 97 || sanitizeString[i].charCodeAt(j) > 122) {
            container.push(1);
        }
}
return console.log(sanitizeString.length - container.length);
};

jumlahKata("Saat meng*ecat tembok, Agung dib_antu oleh Raihan.");
jumlahKata("Berapa u(mur minimal[ untuk !mengurus ktp?");
jumlahKata("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.");