class GameSection{
    constructor(gameCaseDiv) {
        
        //this.toggleFunc = this.toggleFunc.bind(this);

        var btnArr = [];
        var caseNum = ["不需要", 5, 10, 20, 30];
        for(var i=0; i< 5; i++){
            var tmpBtn = document.createElement('button');
            if (caseNum[i] == "不需要")
                tmpBtn.id = "0";
            else
                tmpBtn.id = caseNum[i];

            tmpBtn.innerText = caseNum[i];            
            tmpBtn.classList.add("gameCase");
            tmpBtn.onclick = () => {this.toggleFunc(this)};
            gameCaseDiv.appendChild(tmpBtn); 
        }
    }

    toggleFunc(){
        var choosenBtn = event.target;
        var caseArr = document.querySelectorAll(".gameCase");
        console.log(choosenBtn);
        
        for(var ele of caseArr){   
            ele.classList.remove("choosen");
            ele.classList.add("unchoosen");
        }
        choosenBtn.classList.remove("unchoosen");
        choosenBtn.classList.add("choosen");
    }
}