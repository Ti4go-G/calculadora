function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        
        start(){
            this.clickButtons();
            this.pressEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteChar(){
            this.display.value = this.display.value.slice(0, -1)
        },

        calculate(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta){
                    alert('conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch (error) {
                alert('conta inválida');
                return
            }
        },

        pressEnter(){

            this.display.addEventListener('keyup', (e)=>{
                if(e.keycode == 13){
                    this.calculate();
                }
            })
        },


        clickButtons(){
            document.addEventListener('click', (e) =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);

                
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteChar();
                }
                if(el.classList.contains('btn-eq')){
                    this.calculate();
                }
            });
        },

        btnToDisplay(valor){
            this.display.value += valor;

        }
    }
}


const calculadora = criaCalculadora();
calculadora.start();

