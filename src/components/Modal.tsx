import {Dispatch, SetStateAction} from "react"
import {Contenido, VentanaModal, BtnCerrar, Spiner} from "./styled"


const Modal = ({setModal, cotizacion, setSpiner, spiner} : {
    setModal: Dispatch < SetStateAction < boolean >>,
    cotizacion: {
        year: number,
        marca: string,
        seguro: string
    },
    setSpiner: Dispatch < SetStateAction < boolean >>,
    spiner: boolean
}) => {


    let cantidad: number = 0;
    const base: number = 2000;

    if (cotizacion.marca === 'Asiatico') {

        cantidad = base * 1.15
        const diferencia = new Date().getFullYear() - cotizacion.year
        const total = ((diferencia * 3) * cantidad) / 100;
        cantidad = cantidad - total

    }
    if (cotizacion.marca === 'Americano') {

        cantidad = base * 1.2
        const diferencia = new Date().getFullYear() - cotizacion.year
        const total = ((diferencia * 3) * cantidad) / 100;
        cantidad = cantidad - total


    }
    if (cotizacion.marca === 'Europeo') {

        cantidad = base * 1.25
        const diferencia = new Date().getFullYear() - cotizacion.year
        const total = ((diferencia * 3) * cantidad) / 100;
        cantidad = cantidad - total


    }

    if (cotizacion.seguro === 'basico') {

        cantidad = 1.30 * cantidad
    } else {
        cantidad = cantidad * 1.50
    }

    const cerrar = () => {
        setModal(false)
        setSpiner(true)
    }


    return (
        <VentanaModal>
            <div>

                <h3>Resumen de cotizacion</h3>

                {
                spiner ? <Spiner>
                    <section></section>
                    <p>Calculando su cotizacion...</p>
                </Spiner> : <Contenido>
                    <p>
                        Marca: {
                        cotizacion.marca
                    }</p>
                    <p>
                        Año: {
                        cotizacion.year
                    }</p>
                    <p>Tipo: {
                        cotizacion.seguro
                    } </p>

                    <h4>Total: ${
                        Math.round(cantidad)
                    }</h4>
                    <BtnCerrar onClick={cerrar}>Aceptar</BtnCerrar>
                </Contenido>
            } </div>
        </VentanaModal>
    )
}

export default Modal
