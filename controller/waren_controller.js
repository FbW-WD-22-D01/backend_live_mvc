// Functionen Datenbank  - Produkte

export function showAllProducts(req, res){
    
    // über das Model die Datenbank nach allen Produkten fragen
    
    const result = [{name: 'Eis'}, {name: 'Cola'}]
    res.json(result)
}


function deleteProdduct(){
    
}

function changeProductInfo(){

}