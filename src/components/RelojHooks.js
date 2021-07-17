import React, {useState, useEffect} from 'react'

function Reloj({hour})
{
    return <h3>{hour}</h3>;
}

export default function RelojHooks(){
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        let timer;

        if(visible){
            timer = setInterval(()=>{
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        } else{
            clearInterval(timer)
        }

        return () => {
            console.log("fase de desmontaje")
            clearInterval(timer)
        }
    }, [visible])

    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hour={hour} />}
            <button onClick={() => setVisible(true)}>iniciar</button>
            <button onClick={() => setVisible(false)}>detener</button>
        </>
    )
}
