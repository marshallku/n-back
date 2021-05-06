export function OXKeyPad(checkAnswer: (answer: boolean) => void) {
    const keyPad = document.createElement("div");
    const oButton = document.createElement("button");
    const xButton = document.createElement("button");

    oButton.innerText = "O";
    xButton.innerText = "X";

    keyPad.append(oButton);
    keyPad.append(xButton);

    oButton.addEventListener("click", () => {
        checkAnswer(true);
    });
    xButton.addEventListener("click", () => {
        checkAnswer(false);
    });

    keyPad.classList.add("keypad", "keypad--ox");

    return keyPad;
}

export function NumberKeyPad(checkAnswer: (answer: number) => void) {
    const keyPad = document.createElement("form");
    const input = document.createElement("input");
    const wrapper = document.createElement("div");
    const buttons = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
    ];
    const touchable = "ontouchstart" in window;

    input.readOnly = touchable;
    input.autofocus = !touchable;

    input.type = "number";

    buttons.forEach((button, i) => {
        if (i <= 9) {
            button.innerText = `${i}`;
            button.addEventListener("click", () => {
                input.value += `${i}`;
            });
        } else if (i === 10) {
            button.innerText = "del";
            button.addEventListener("click", () => {
                input.value = input.value.substr(0, input.value.length - 1);
            });
        } else if (i === 11) {
            button.innerText = "0";
            button.addEventListener("click", () => {
                input.value += "0";
            });
        } else {
            button.innerText = "OK";
        }

        button.type = `${i <= 11 ? "button" : "submit"}`;

        wrapper.append(button);
    });

    keyPad.append(input);
    keyPad.append(wrapper);

    keyPad.addEventListener("submit", (e) => {
        e.preventDefault();
        checkAnswer(+input.value);
        input.value = "";
    });

    keyPad.classList.add("keypad", "keypad--numbers");

    return keyPad;
}
