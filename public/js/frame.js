
class MainSection {
    constructor() {


        var menu = document.getElementById('main-section');
        
        const product = document.createElement('div');
        const gameCase = document.createElement('div');
        const microSD = document.createElement('div');
        const dashboard = document.createElement('div');
        const submitDiv = document.createElement('div');
        const queryDiv = document.createElement('div');

       
        product.id = 'productDiv';
        gameCase.id = 'gameCaseDiv';
        microSD.id = 'microSDDiv';
        submitDiv.id = "submitDiv";
        queryDiv.id = "queryDiv";


        menu.appendChild(product); 
        menu.appendChild(gameCase); 
        //menu.appendChild(microSD); 
        menu.appendChild(dashboard); 
        menu.appendChild(submitDiv); 
        menu.appendChild(queryDiv); 

        const productP = document.createElement('p');
        productP.textContent = "想買哪隻手機呢 ? \n";
        product.appendChild(productP);

        const proBtn = document.createElement('button');
        const osBtn = document.createElement('button');
        var productArr = [proBtn, osBtn];
        // proBtn.className = "optBtn";
        // osBtn.className = "optBtn";
        //console.log(productArr);
        
        for (var i = 0; i < 2; i++) {
            productArr[i].classList.add("product","optBtn");
            console.log(productArr[i].classList);
             
            productArr[i].onclick = () => { this.toggleFunc(this) };
            product.appendChild(productArr[i]);
        }

        
        proBtn.innerHTML = "S10+";
        proBtn.id = "pro";
        osBtn.innerHTML = "S10";
        osBtn.id = "os";


        const gameContainer = new GameSection(gameCase);
        const submitContainer = new SubmitSection(submitDiv);
        const queryContainer = new QuerySection(queryDiv);

        // const key = document.createElement('input');
        // key.type = 'text';
        // key.className = 'key';
        // key.placeholder = 'key';
        // key.addEventListener('keyup', createRequestPreview);
        
        // menuElement.addEventListener('submit', this.Submit);
        // var musicElement = document.getElementById('#main');
        //this.save_and_render = this.save_and_render.bind(this);
        //this.addListener = this.addListener.bind(this);
        //this.addListener();

    }

    toggleFunc() {
        var choosenBtn = event.target;
        var caseArr = document.querySelectorAll(".product");
        console.log(choosenBtn);

        for (var ele of caseArr) {
            ele.classList.remove("choosen");
            ele.classList.add("unchoosen");
        }
        choosenBtn.classList.remove("unchoosen");
        choosenBtn.classList.add("choosen");
    }

    // addListener(){
    //     //const proBtn = document.querySelector('#');
    //     this.proBtn.onclick = () => {
    //         this.proBtn.classList.toggle("choosen");
    //         this.proBtn.classList.toggle("unchoosen", !this.proBtn.classList.contains("choosen"));
    //     }
    //     this.osBtn.onclick = () => {
    //         this.osBtn.classList.toggle("choosen");
    //         this.osBtn.classList.toggle("unchoosen", !this.osBtn.classList.contains("choosen"));
    //     }
    // }
}