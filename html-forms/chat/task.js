const chatWidget = document.querySelector(".chat-widget");
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.getElementById("chat-widget__messages");

const date = new Date();
let hour = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");

// Открытие чата
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

// Oтветы от робота
function robotResponse () {
    const robotSms = [
        "Я ничего не хочу знать",
        "Я ничего не понимаю",
        "Я не хочу отвечать тебе на твои вопросы",
        "Ответ найдете в интеренте",
        "ХА-ХА-ХА, ищи сам, я тебе не раб",
        "БЛА-БЛА-БЛА",
        "Что тебе надо от меня? Приставай к другим.",
        "Чтооооооооооо???",
        "Ой, всё... Отстань от меня со своими тупыми вопросами",
        "Всё давай, мне некогда отвечать",
        "Уходиииииииииии",
        "ЛА-ЛА-ЛА-ЛА, я тебя не слышу",
      ];
    
      const randomIndexResponse = Math.floor(Math.random() * robotSms.length);
      const randomResponse  = robotSms[randomIndexResponse];

      setTimeout(() => {
        messages.innerHTML += `<div class="message">
                    <div class="message__time">${hour}:${minutes}</div>
                    <div class="message__text">${randomResponse}</div>
                </div>`;
      }, 1000);
    };

    // Отправка сообщения
    chatWidgetInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && chatWidgetInput.value.trim() !== "") {
          messages.innerHTML += `<div class="message message_client">
                      <div class="message__time">${hour}:${minutes}</div>
                      <div class="message__text">${chatWidgetInput.value}</div>
                  </div>`;
          chatWidgetInput.value = "";
    
          // Робот нам отвечает
          setTimeout(robotResponse, 1000);
          resetTimer();
        }
      });

    //   function scroll () {          
    //     messages.lastElementChild.scrollIntoView({behavior: "smooth"});
    // };
