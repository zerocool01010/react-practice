import React, {useEffect} from "react"

const Componentnew = () => {

    useEffect(()=> {
        console.log('se esta montando el componente')
        return () => {
            console.log('desmontando')
        }
    }, [])

    return <p>Soy nuevo</p>
}

export default Componentnew