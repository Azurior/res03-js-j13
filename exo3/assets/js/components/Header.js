import { Nav } from './Nav.js';

let Header = {  
    data (){
      return {
        navs : [
                {
                    li : "Accueil"
                },
                {
                    li : "A propos"
                },
                {
                    li : "Contact"
                }
            ]
        }
    },
    components : {  
      Nav  
    },
    template: `  
		<header>
		<Nav/>
		</header>
	`
};  
  
export { Header };