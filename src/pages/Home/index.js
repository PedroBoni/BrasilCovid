import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import apiDolar from '../../services/apiDolar';

import './style.css';
import FlagBrazil from '../../assets/Flag-Brazil.png';

function Home() {
  const [dataBrasil, setDataBrasil] = useState({});
  const [data, setData] = useState([]);
  const [dataDolar, setDataDolar] = useState({});

  useEffect(() => {
    api.get('/brazil').then(res=>{
        setDataBrasil(res.data.data)
    })
    api.get('/').then(res=>{
        setData(res.data.data)
    })
    apiDolar.get('/').then(res=>{
        setDataDolar(res.data.USD)
    })
  }, []);

  return (
    <div>
      <header>
          <h1 className="title">Brasil Covid-19</h1>
          <img src={FlagBrazil} alt="Bandeira do Brazil Covid-19 Coronavirus"/>
      </header>
      <div className="infoBrazil">
          <h1>Casos Confimados: {dataBrasil.confirmed}</h1>
          <h1>Mortes: {dataBrasil.deaths}</h1>
          <h1>Recuperados: {dataBrasil.recovered}</h1>
      </div>
      <div className="infoGeneral">
          <div className="listInfoStades">
            <div className="tableScroll">
            <table >
                <thead><tr> <th>Estado</th><th>UF</th> <th>Casos</th> <th>Mortes</th><th>Suspeitos</th></tr></thead>
                <tbody>
                {data.map(dataState=>(
                    <tr key={dataState.uid}> 
                        <td>{dataState.state}</td> 
                        <td>{dataState.uf}</td> 
                        <td>{dataState.cases}</td> 
                        <td>{dataState.deaths}</td>
                        <td>{dataState.suspects}</td>
                    </tr>
                ))}

                </tbody>
            </table>
            </div>
            
          </div>
          <div className="mostInfos">
            <div className="taxaDeaths">
                <text>Taxa de letalitade</text>
                <p>Mundo: 0.08%</p>
                <p>Brasil: 8%</p>
            </div>
            <div className="Dolar">
                <p>USD-BRL</p>
                <p>$ {parseFloat(dataDolar.bid).toFixed(2)}</p>
            </div>
            <div className="Update">
                <p>Atualizado</p>
                <p>{dataBrasil.updated_at}</p>
                <p>...</p>
            </div>
          </div>
          
      </div>
    </div> 
  );
}

export default Home;