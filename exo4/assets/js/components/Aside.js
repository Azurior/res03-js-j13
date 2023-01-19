import { Nav } from './Nav.js';

let Aside = {  
    data (){
      return {
        Asides : [
                {
                    title : "Utilisateurs",
                    links : [
                        "Liste des utilisateurs",
                        "Ajouter un utilisateur",
                        "Statitiques utilisateur"
                        ]
                },
                {
                    title : "Produits",
                    links : [
                        "Liste des produits",
                        "Ajouter un produit",
                        "Statistique des produits"
                        ]
                },
                {
                    title : "Catégories",
                    links : [
                        "Liste des catégories de produits",
                        "Ajouter une catégorie de produits"
                        ]
                }
            ]
        }
    },
    components : {  
      Nav  
    },
    template: `  
		<aside>
		<Nav :Asides="this.Asides"/>
		</aside>
	`
};  
  
export { Aside };