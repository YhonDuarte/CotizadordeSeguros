import {useState} from "react";
import Modal from "./Modal";
import {
    Btn,
    Check,
    Tipo,
    Selectores,
    ContainerForm,
    Formulario,
    Interface,
    Error
} from "./styled";


const MasterPage = () => {
    const [error, setError] = useState(false)
        const [modal, setModal] = useState(false)
            const [spiner, setSpiner] = useState(true)


                const [cotizacion, setCotizacion] = useState({marca: '', year: 0, seguro: ''})


                    const max = new Date().getFullYear(),
                        min = max - 20
                    const years: Array < number > = []
                for (let i = min; i <= max; i++) {
                    years.unshift(i)
                }


                const calcular = (e : any) => {
                    e.preventDefault()

                    if (cotizacion.marca === '' || cotizacion.year < 1 || cotizacion.seguro === '') {
                        setError(true)
                        setTimeout(() => {
                            setError(false)
                        }, 3000);
                    } else {
                        setModal(true)
                        setTimeout(() => {
                            setSpiner(false)
                        }, 2000)

                    }
                }
                const handleChange = (e : any) => {
                    setCotizacion({
                        ...cotizacion,
                        [e.target.name]: e.target.value
                    });
                }


                return (
                    <>
                        <Interface>

                            <Formulario>

                                <h3>Cotiza tu seguro de autos</h3>

                                <ContainerForm>

                                    <Selectores>
                                        <section>
                                            <label>Marca :
                                            </label>
                                            <select name='marca'
                                                onChange={handleChange}>
                                                <option value=''>--Seleccionar--</option>
                                                <option value='Asiatico'>Asiatico</option>
                                                <option value='Americano'>Americano</option>
                                                <option value='Europeo'>Europeo</option>
                                            </select>
                                        </section>
                                        <section>
                                            <label>Año :</label>
                                            <select name='year'
                                                onChange={handleChange}>
                                                <option value={0}>--Seleccionar--</option>
                                                {
                                                years.map(year => <option key={year}
                                                    value={year}>
                                                    {year}</option>)
                                            } </select>

                                        </section>
                                    </Selectores>
                                    <Tipo>
                                        <h4>Tipo de seguro</h4>

                                        <Check onChange={handleChange}>

                                            <input type='radio' value='basico' name='seguro' id='basico'/>
                                            <label htmlFor="basico">Basico</label>

                                            <input type='radio' value='completo' name='seguro' id='completo'/><label htmlFor="completo">Completo</label>


                                        </Check>
                                    </Tipo>
                                    <Btn onClick={calcular}>Cotizar seguro</Btn>
                                </ContainerForm>


                            </Formulario>
                            {
                            error && <Error>Todos los campos son obligatorios</Error>
                        }
                            {
                            modal && <Modal setModal={setModal}
                                cotizacion={cotizacion}
                                setSpiner={setSpiner}
                                spiner={spiner}/>
                        } </Interface>
                    </>
                )
        };
        export default MasterPage
