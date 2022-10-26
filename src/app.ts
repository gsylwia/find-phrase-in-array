const inputData: string[] = ["koń", "słoń", "żyrafa", "słońce", "żyrandol", "lama", "chmura", "para", "zające", "małpa", "słowik", "lampa", "mapa","parasol", "końce"];


// {mess: "", data: [[]]} interface
// return type
const findPhraseInArray = (array: string[], phrase: string): (string | number)[][]  => {

   if (phrase.length < 2) {
      return "Szukanej frazy nie ma w tablicy"
   }

   const arrPhrases: (string | number)[][] = []
   array.forEach((el, index) => {
      if (el.includes(phrase)) {
         const arrPhrase: (string | number)[] = [el, index];
         arrPhrases.push(arrPhrase);
      }
   });

   if (arrPhrases.length == 0) {
      return "Szukanej frazy nie ma w tablicy"
   }
    
   return arrPhrases
};

console.log(findPhraseInArray(inputData, "oń"));