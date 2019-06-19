
class MainSection {
    constructor() {

        var menu = document.getElementById('main-section');
        
        const product = document.createElement('div');
        const gameCase = document.createElement('div');
        const microSD = document.createElement('div');

        // product.className = 'product';
        product.id = 'product';
        gameCase.id = 'gameCase';
        microSD.id = 'microSD';

        menu.appendChild(product); 
        menu.appendChild(gameCase); 
        menu.appendChild(microSD); 
        
        const proBtn = document.createElement('button');
        const osBtn = document.createElement('button');
        product.appendChild(proBtn);
        product.appendChild(osBtn);


        var btnArr = [];
        
        //

        // const key = document.createElement('input');
        // key.type = 'text';
        // key.className = 'key';
        // key.placeholder = 'key';
        // key.addEventListener('keyup', createRequestPreview);
        
        // menuElement.addEventListener('submit', this.Submit);
        // var musicElement = document.getElementById('#main');

        const MenuEle = new MenuScreen(menu);
        // MenuEle.loadSelect();

    }
    // TODO(you): Add methods as necessary.
}

const app = new MainSection();
