// Функція перетворення стрічки в масив слів
function StringToWord (array) {
  // Майбутній масив слів
  let words = []
  let word = ''
  // Цилк розбиття стрічки в масив слів
  for (let i = 0; i < array.length + 1; i++) {
    // Перевірка на пробіл
    if (array[i] === ' ' || i === array.length) {
      words.push(word)
      word = ''
    }
    else {
      word += array[i]
    }
  }
  // Повернення масиву слів
  return words
}

let str1 = "Петро не прийшов на пару у вівторок";
let str2 = "Геймер грає в доту так контрстрайк";
let str3 = "Я люблю маму";


console.log("Стрічки : \n" + str1 + "\n" + str2 + "\n"+ str3);
console.log("Масив слів із стрічок : \n" + StringToWord(str1) + "\n" + StringToWord(str2) + "\n"+ StringToWord(str3))