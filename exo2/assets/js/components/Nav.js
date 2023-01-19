let Nav = {  
    data() {  
        return {  
            texts : [  
                "Accueil",  
                "A propos",  
                "Contact"  
            ]  
        } 
    },  
    template: `  
		<nav>
    		<ul>   
        		<li v-for="text in texts">
        		    {{ text }}
        		</li>
    		</ul>
		</nav>
	`
};  
  
export { Nav };