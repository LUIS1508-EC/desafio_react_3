const Buscador = ({buscacolaborador}) => {
const buscar = (e) => {
buscacolaborador(e.target.value)
}
 
return(

    <form>

        <input type="search" placeholder="Busca aca al colaborador" onChange={buscar} />

    </form>
)

}

export default Buscador