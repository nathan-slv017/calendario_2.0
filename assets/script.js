const btnBom = document.querySelector('.bom');
const btnMediano = document.querySelector('.medíano');
const btnRuim = document.querySelector('.ruim');
const btnAleatorio = document.querySelector('.anoAleatorio');
   
    let bom = false;
    let mediano = false;
    let ruim = false;


document.addEventListener('click', (e) =>{
    let el = e.target
function active(){
    if(bom == true){
        btnBom.style.backgroundColor = 'rgb(47, 252, 28)'
    }
    if(mediano == true){
        btnMediano.style.backgroundColor = 'rgb(211, 252, 28)'
    }
    if(ruim == true) {
        btnRuim.style.backgroundColor = 'rgb(252, 28, 28)'
    }
    
}
function of(){
    if(bom == false){
        btnBom.style.backgroundColor = ''
    }
    if(mediano == false){
        btnMediano.style.backgroundColor = ''
    }
    if(ruim == false) {
        btnRuim.style.backgroundColor = ''
    }
}
    

    if(el.classList.contains('bom')){
        if(bom == false){
        bom = true
        mediano =  false
        ruim = false
        active()
        of()
        return 
        }
        if(bom == true){
            bom = false
            mediano = false
            ruim = false
            of()
            return 

        }
    }

    if(el.classList.contains('medíano')){
        if(mediano == false){
        bom = false
        mediano =  true
        ruim = false
        active()
        of()
        return 
             
            }
            if(mediano == true){
            bom = false
            mediano = false
            ruim = false
            of()
            return 
            }
    }

    if(el.classList.contains('ruim')){
        if(ruim == false){
            bom = false
            mediano = false
            ruim = true
            active()
            of()
            return 
             
            }
            if(ruim == true){
            bom = false
            mediano = false
            ruim = false
            of()
            return 
            }
    }

    if(el.classList.contains('diaMod')){
        let dia = el;
        if(bom == true){
            if(dia.classList.contains('diaBom')){
                dia.classList.remove('diaBom');
                return
            }

            if(dia.classList.contains('diaMediano')){
                dia.classList.remove('diaMediano');
            }
            if(dia.classList.contains('diaRuim')){
                dia.classList.remove('diaRuim');
            }
            dia.classList.add('diaBom')
        }
    }
   
    if(el.classList.contains('diaMod')){
        let dia = el;
        if(mediano == true){
            if(dia.classList.contains('diaMediano')){
                dia.classList.remove('diaMediano');
                return
            }

            if(dia.classList.contains('diaBom')){
                dia.classList.remove('diaBom');
            }
            if(dia.classList.contains('diaRuim')){
                dia.classList.remove('diaRuim');
            }
            dia.classList.add('diaMediano');
        }
    }

    if(el.classList.contains('diaMod')){
        let dia = el;
        if(ruim == true){
            if(dia.classList.contains('diaRuim')){
                dia.classList.remove('diaRuim');
                return
            }

            if(dia.classList.contains('diaMediano')){
                dia.classList.remove('diaMediano');
            }
            if(dia.classList.contains('diaBom')){
                dia.classList.remove('diaBom');
            }
            dia.classList.add('diaRuim');
        }
    }

    if(el.classList.contains('anoAleatorio')){
        function rand(){
             
            let n = Math.floor(Math.random() *(1.5 + 3) )
            if(n == 4 || n == 5 ){
                 n = 3
            }
            return n

        }
        let todosOsDias = document.querySelectorAll('.diaMod');
        todosOsDias.forEach((dia) =>{
            if(dia.classList.contains('diaBom')){
                dia.classList.remove('diaBom')
            }
            if(dia.classList.contains('diaMediano')){
                dia.classList.remove('diaMediano')
            }
            if(dia.classList.contains('diaRuim')){
                dia.classList.remove('diaRuim')
            }
        })

        todosOsDias.forEach((dia) =>{
            cadaDia = rand();
            if(cadaDia == 1 || cadaDia == 0) {
                dia.classList.add('diaBom');
                
            }
            if(cadaDia == 2) {
                dia.classList.add('diaMediano');
            }
            if(cadaDia == 3 || cadaDia == 4){
                dia.classList.add('diaRuim');
            }
        })
        
    }
});




