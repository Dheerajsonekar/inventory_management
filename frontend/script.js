const form = document.querySelector('#inventoryForm');
const inventoryList = document.querySelector('#inventoryList');


form.addEventListener('submit', async (e)=>{
    e.preventDefault(); //Prevent the form form auto submiting and auto reloading after pressing on submit button

    const item = {
        itemName: document.qeurySelector('#itemName').value,
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
        quantity: document.querySelector('#quantity').value
    }

    console.log(item);

    try{
          await axios.post('', item);
          form.reset();
          await showItems();
    }catch(err){
        console.error('Error at posting data at front end: ', err);
    }
})


async function showItems(){
    try{
        const response = await axios.get('');
        const items = response.data;
        inventoryList.innerHTML = '';
        items.forEach(item =>{
            const li = document.createElement('li');
            li.innerHTML = `${item.itemName} - ${item.description} - ${item.price} - ${item.quantity}`;
            inventoryList.appendChild(li);
            
        })
    }catch(err){
        console.error("Error at showing items at front end: ", err);
    }
}