import React from 'react';

import ComParamentro from './components/ComParametro';
import ComFilhos from './components/ComFilho';
import Primeiro from './components/Primeiro';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condiocinal from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

import './App.css'

export default (props) => (
  <div className="App">

    <Card titulo="#06 - Condicional V2">
      <CondicionalComIf numero={10} />
    </Card>

    <Card titulo="#05 - Condicional V1">
      <Condiocinal numero={11} />
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao />
    </Card>

    <Card titulo="#03 - Componente Com Filhos">
      <ComFilhos>
        <ul>
          <li>Antonio</li>
          <li>Bia</li>
          <li>Milena</li>
          <li>Moises</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#02- Componente Com Parametro">
      <ComParamentro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componete">
      <Primeiro />
    </Card>

    {/* <Card titulo="Conteudo">
      Exercicio X
    </Card> */}

  </div>
)