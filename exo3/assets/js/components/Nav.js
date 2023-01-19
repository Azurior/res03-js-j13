let Nav = {  
    data() {  
        return {  
             
        } 
    },
    props : [
        "li"
        ],
    template: `  
		<nav>
    		<ul>   
        		<li v-for="nav in navs" :li="nav.li">
        		    
        		</li>
    		</ul>
		</nav>
	`
};  
  
export { Nav };