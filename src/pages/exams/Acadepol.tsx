import React, { useState } from 'react'
import { jsPDF } from 'jspdf'

export default function Acadepol() {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleChange = (q: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [q]: value }))
  }

  const saveAsPDF = () => {
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Respostas da Prova ACADEPOL', 10, 10)
    doc.setFontSize(12)

    let y = 20
    Object.entries(answers).forEach(([key, value]) => {
      const text = `${key}: ${value}`
      const lines = doc.splitTextToSize(text, 180)
      lines.forEach((line: string) => {
        doc.text(line, 10, y)
        y += 7
        if (y > 280) {
          doc.addPage()
          y = 10
        }
      })
    })

    doc.save('respostas_acadepol.pdf')
  }

  const questions = [
    { q: 'Q1', text: '1) Qual das sequências estão corretas?' },
    { q: 'Q2', text: '2) Quais as funções dos códigos "Q"?' },
    {
      q: 'Q3',
      text:
        '3) Porque não se deve efetuar uma modulação no padrão sem os códigos "Q" ou de "0 à 7"?',
    },
    { q: 'Q4', text: '4) Quais as funções dos códigos de 0 à 7?' },
    {
      q: 'Q5',
      text: '5) O que deve ser feito caso um cidadão dispare de dentro de uma favela por uma vez?',
    },
    { q: 'Q6', text: '6) O que deve ser feito antes de efetuar uma prisão à um indivíduo?' },
    {
      q: 'Q7',
      text:
        '7) O que deve ser feito caso você está em uma QRU, porém recebe o chamado de uma ação blipada no BC?',
    },
    {
      q: 'Q8',
      text: '8) "QAP CENTRAL TO PRECISANDO DE UM QRR EM UM CARRO AQUI RAPIDO". O que está errado?',
    },
    { q: 'Q9', text: '9) Qual seria a forma correta para pedir apoio à algum veículo?' },
    {
      q: 'Q10',
      text: '10) Se você ver um policial da civil em patrulhamento sozinho, o que você faria?',
    },
    {
      q: 'Q11',
      text: '11) Me fale a função de cada Subdivisão da guarnição (GARRA, DEIC, GOE)',
    },
    { q: 'Q12', text: '12) Cite qual a forma correta de ser feita uma investigação a uma facção?' },
    { q: 'Meta', text: 'Qual sua meta na nossa guarnição?' },
    { q: 'Experiência', text: 'Me conte sua experiência até o momento:' },
    { q: 'Sugestão', text: 'Me cite uma sugestão para a guarnição' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center text-white">
      {/* Cabeçalho */}
      <header className="w-full max-w-4xl bg-blue-950 text-white p-6 rounded-2xl shadow-lg text-center mb-8">
        <h1 className="text-3xl font-bold">Prova ACADEPOL</h1>
        <p className="mt-2 text-gray-300">
          Plataforma de Provas da Polícia Civil — Preencha suas respostas cuidadosamente.
        </p>
      </header>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-4xl flex flex-col gap-6 border-t-4 border-blue-900">
        {/* QRA e ID */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Seu QRA"
            className="bg-gray-700 text-white border border-gray-600 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-900"
            onChange={(e) => handleChange('QRA', e.target.value)}
          />
          <input
            type="text"
            placeholder="Seu ID"
            className="bg-gray-700 text-white border border-gray-600 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-900"
            onChange={(e) => handleChange('ID', e.target.value)}
          />
        </div>

        {/* Questão 1 - Múltipla escolha com radios */}
        <div>
          <p className="font-semibold text-blue-400">{questions[0].text}</p>
          <div className="flex flex-col mt-2 gap-2">
            {[
              'qsl, qsm, qst, qtv',
              'qra, qsl, qap, qst',
              'qrr, qsl, qtv, qth',
              'qap, qth, qsl, qsm',
            ].map((option, idx) => (
              <label key={idx} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="Q1"
                  value={option}
                  onChange={(e) => handleChange('Q1', e.target.value)}
                  className="accent-blue-400"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Demais questões até a 12 */}
        {questions.slice(1, 12).map((item) => (
          <div key={item.q}>
            <p className="font-semibold text-blue-400">{item.text}</p>
            <textarea
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-900"
              rows={2}
              onChange={(e) => handleChange(item.q, e.target.value)}
            />
          </div>
        ))}

        {/* Perguntas Pessoais */}
        <h2 className="text-xl font-bold text-blue-400">Perguntas pessoais</h2>
        {questions.slice(12).map((item) => (
          <div key={item.q}>
            <p className="font-semibold text-blue-400">{item.text}</p>
            <textarea
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-900"
              rows={3}
              onChange={(e) => handleChange(item.q, e.target.value)}
            />
          </div>
        ))}

        {/* Botão salvar PDF */}
        <button
          className="mt-6 bg-blue-900 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-blue-800 hover:scale-105 transition transform duration-200 cursor-pointer"
          onClick={saveAsPDF}
        >
          Finalizar Prova e Salvar PDF
        </button>
      </div>
    </div>
  )
}
