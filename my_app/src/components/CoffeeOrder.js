import { useState } from "react";

function CoffeeOrder(prop) {

    const [coffee, setCoffee] = useState({})

    const handleOnChange = (e) => {

        setCoffee({
            ...coffee,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = () => {
        fetch('https://island-bramble.glitch.me/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(coffee)
        })
    }





    return (
        <div>
            <h1>Coffee Order</h1>
            <input type="text" placeholder="name" onChange={handleOnChange} name="UserName" />
            <input type="text" placeholder="coffee type" onChange={handleOnChange} name="coffeeType" />
            <input type="text" placeholder="total" onChange={handleOnChange} name="price" />
            <input type="text" placeholder="size" onChange={handleOnChange} name="size" />
            <button type="submit" onSubmit={handleOnSubmit}>Submit</button>
        </div>

    )
}

export default CoffeeOrder;