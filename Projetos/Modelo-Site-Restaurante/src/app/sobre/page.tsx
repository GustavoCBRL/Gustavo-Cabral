import 'bootstrap/dist/css/bootstrap.min.css'


export default function Funcionarios(){
    const names = ["Carla Ribeiro", "Lucas Silva", "Mariana Souza", "Rafael Costa"];
    return(
       
        <>
        <div className='container text-center ml-200 mr-200 py-3  '>
            <h2 className='mt-4 mb-4'>Colaboradores</h2>
            <ul className='list-group'>
                {names.map(name => (
                    <li className="list-group-item" key={name}>{name}</li>
                ))}
            </ul>
        </div>
        </>
     
    )

}




