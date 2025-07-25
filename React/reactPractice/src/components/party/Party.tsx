import { useState } from "react"

const Party = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const onSubmit = async () => {
        try {
            const response = await fetch(`https://api.agify.io/?name=${name}`);
            const json = await response.json();
            setAge(json.age)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        setAge(0)
    }

    return (
        <>
            <div>
                <input type="text" onChange={onChange} value={name} />
            </div>
            <div>
                <button onClick={onSubmit} style={{ padding: "10px" }}>Click</button>
            </div>
            <h1>{name} : {age}</h1>
        </>
    );
}

export default Party;
