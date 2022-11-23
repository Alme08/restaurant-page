import { displayHome } from "./modules/home";
import { displayMenu } from "./modules/menu";
import { displayContact } from "./modules/contact";

const content = document.querySelector('#content');

window.addEventListener('click', e=>{
    switch (e.target.id) {
        case 'home':
            displayHome(content);
            break;

        case 'menu':
            displayMenu(content);
            break;
        
        case 'contact':
            displayContact(content);
            break;
        default:
            break;
    }
})

displayHome(content);