function Calculator() {

    this.display = document.querySelector('.display')

        this.start = () => {
            this.clickButtons();
            this.pressEnter();
        }

    this.btnToDisplay = (value) => {
        this.display.value += value;
        this.display.focus();

    }

    this.clearDisplay = () => this.display.value = '';

    this.deleteChar = () => this.display.value = this.display.value.slice(0, -1)

    this.calculate = () => {
        let calc = this.display.value;

        try {
            calc = eval(calc);
            if (!calc) {
                alert('conta inválida');
                return;
            }
            this.display.value = String(calc);
        } catch (error) {
            alert('conta inválida');
            return
        }
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keycode == 13) {
                this.calculate();
            }
        })
    }

    this.clickButtons = () => {
        document.addEventListener('click', (e) => {
            const element = e.target;

            if (element.classList.contains('btn-num')) {
                this.btnToDisplay(element.innerText);
            }
            if (element.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (element.classList.contains('btn-del')) {
                this.deleteChar();
            }
            if (element.classList.contains('btn-eq')) {
                this.calculate();
            }
        });
    }

}

const calculator = new Calculator();
calculator.start();

