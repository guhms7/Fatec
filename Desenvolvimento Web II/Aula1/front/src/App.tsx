function App() {
  return (
    <>
    <Carro/>
    </>
  )
}

function Carro(){
  const marcas = ["Chevrolet", "Ford", "Fiat", "VW"];
  return marcas.map(function(item, indice){
    return(
    <div style={{backgroundColor:"yellow"}}>
      <div>Marca: {item}</div>
      <div>Modelo: Onix</div>
      <div>Placa: 12A12BDS</div>
    </div>
    )
  });

}
  


export default App
