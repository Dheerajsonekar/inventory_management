const form = document.querySelector('#inventoryForm');
const inventoryList = document.querySelector('#inventoryList');


form.addEventListener('submit', async (e)=>{
    e.preventDefault(); //Prevent the form form auto submiting and auto reloading after pressing on submit button

    const item = {
        itemName: document.querySelector('#itemName').value,
        description: document.querySelector('#description').value,
        price: document.querySelector('#price').value,
        quantity: document.querySelector('#quantity').value
    }

    console.log(item);

    try{
          await axios.post('http://localhost:3000/api/inventory/',  item);
          form.reset();
          await showItems();
    }catch(err){
        console.error('Error at posting data at front end: ', err.response ? err.response.data : err);
    }
})


async function showItems(){
    try{
        const response = await axios.get('http://localhost:3000/api/inventory/');
        const items = response.data;
        inventoryList.innerHTML = '';
        items.forEach(item =>{
            const li = document.createElement('li');
            const buy1 = document.createElement('button');
            buy1.innerText = 'Buy 1';
            buy1.addEventListener('click', ()=>updateQuantity(item.id, 1))
            const buy2 = document.createElement('button');
            buy2.innerText = 'Buy 2';
            buy2.addEventListener('click', ()=>updateQuantity(item.id, 2))
            const buy3 = document.createElement('button');
            buy3.innerText = 'Buy 3';
            buy3.addEventListener('click', ()=>updateQuantity(item.id, 3))
            li.innerHTML = `${item.itemName} - ${item.description} - ${item.price} - ${item.quantity}`;
            li.appendChild(buy1);
            li.appendChild(buy2);
            li.appendChild(buy3);
            inventoryList.appendChild(li);
            
        })
    }catch(err){
        console.error("Error at showing items at front end: ", err);
    }
}

async function updateQuantity(id, number){
    try{
       const response = await axios.get(`http://localhost:3000/api/inventory/${id}`);
       const item = response.data;
       if(item.quantity < number ){
        console.log("not enough quantity to buy");
        return;
       }
       item.quantity = item.quantity - number;
       await axios.put(`http://localhost:3000/api/inventory/${id}`, item);
       await showItems();
    }catch(err){
        console.error("error at updating quantity: ", err);
    }
}

document.addEventListener('DOMContentLoaded', showItems);