import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
// import Botao from '../components/Botao'

// import Questao from '../components/Questao'
import Questionario from '../components/Questionario'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Melhor cor:', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

  // useEffect(() => {
  //   questaoRef.current = questao
  // }, [questao])

  // function respostaFornecida(indice: number) {
  //   setQuestao(questao.responderCom(indice))
  // }

  // function tempoEsgotado() {
  //   if(questaoRef.current.naoRespondida) {
  //     setQuestao(questaoRef.current.responderCom(-1))
  //   }
  // }

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irPraProximoPasso() {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario 
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
      {/* <Questao 
        valor={questao}
        tempoPraResposta={5}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
        /> */}
        {/* <Botao texto="Próxima" href="/resultado" /> */}
    </div>
  )
}
