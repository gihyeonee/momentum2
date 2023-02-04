// 1. const로 버튼을 잡음. end
// 2. submit을 막음. end
// 4. input의 값들을 localStorage에 저장함. end
// 3. submit 할 때 input의 값을 불러와야 하니까 input에 들어가는 값들을 const로 지정함. end
// 5. innerText로 보여줌. end
// 6. computer가 random 한 값을 출력함. end
// 7. if 2개의 값을 비교해서 같으면 win이라는 글자를 출력함. end

const test1 = document.querySelector(".test1");
const settingNum = document.querySelector(".settingNum");
const guessNum = document.querySelector(".guessNum");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");

function buttonSubmit(event) {
  event.preventDefault();

  const settingNumForLocalStorage = settingNum.value;
  const guessNumForLocalStorage = guessNum.value;

  localStorage.setItem("userSettingNum", settingNumForLocalStorage);
  localStorage.setItem("userGuessNum", guessNumForLocalStorage);

  const getSettingNum = parseInt(localStorage.getItem("userSettingNum"), 10);
  const getGuessNum = parseInt(localStorage.getItem("userGuessNum"), 10);

  const computerNum = Math.floor(Math.random() * (getSettingNum + 1));

  result.innerText = `You chose ${getGuessNum}, the machine chose ${computerNum}`;

  if (computerNum !== getGuessNum) {
    result2.innerText = "You lost!";
  } else {
    result2.innerText = "You Win!";
    localStorage.removeItem("userSettingNum");
    localStorage.removeItem("userGuessNum");
  }
}

test1.addEventListener("submit", buttonSubmit);
