import { useState } from 'react'
import ExamCard from '../components/ExamCard'
import type { Exam } from '../components/ExamCard'
import LogoCivil from '../assets/policia_civil.png' 
import { useNavigate } from 'react-router-dom'

const EXAMS: Exam[] = [
  {
    id: 'acadepol',
    title: 'ACADEPOL',
    subtitle: 'Concurso Polícia Civil - ACADEPOL',
    description: 'Prova completa com conhecimentos gerais e específicos.',
    durationMinutes: 15,
  },
  // {
  //   id: 'agente-3',
  //   title: 'Agente 3',
  //   subtitle: 'Cargo: Agente 3 — Polícia Civil',
  //   description: 'Prova objetiva focada em legislação, lógica, português e conhecimentos específicos.',
  //   durationMinutes: 180,
  // },
]

export default function Home() {
  const [selected, setSelected] = useState<Exam | null>(null) 
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 p-6"> 
      <header className="mb-8 flex flex-col items-center">
        <img src={LogoCivil} alt="Polícia Civil" className="w-32 mb-4" />
        <h1 className="text-3xl font-extrabold text-slate-800 text-center">
          Plataforma de Provas da Polícia Civil
        </h1>
        <p className="text-slate-600 mt-2 text-center max-w-xl">
          Selecione abaixo a prova que deseja realizar.
        </p>
      </header>
 
      <section className="w-full mb-8">
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <div className="flex-1 min-w-[200px] max-w-[300px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center cursor-default">
            <h2 className="text-xl font-bold mb-2">Cargos Principais</h2>
            <p className="text-slate-600 text-sm">
              Provas para ingresso nos cargos oficiais da Polícia Civil.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[300px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center cursor-default">
            <h2 className="text-xl font-bold mb-2">Subdivisões</h2>
            <p className="text-slate-600 text-sm">
              Provas específicas para cargos de outras unidades especiais.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] max-w-[300px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center cursor-default">
            <h2 className="text-xl font-bold mb-2">Aperfeiçoamento</h2>
            <p className="text-slate-600 text-sm">
              Simulados e provas de atualização para promoções e treinamento interno.
            </p>
          </div>
        </div>
      </section>
 
      <section className="flex flex-col items-center w-full px-4">
        <div className="flex flex-wrap justify-center w-full mt-6">
          {EXAMS.map((e) => (
            <div key={e.id} className="flex-1 min-w-[280px] max-w-[500px] mx-2">
              <ExamCard exam={e} onSelect={setSelected} />
            </div>
          ))}
        </div>
 
        <div className="mt-8 w-full px-2">
          {selected ? (
            <div className="bg-white p-6 rounded-2xl shadow-md text-center mx-auto max-w-4xl">
              <h3 className="text-xl font-bold">Você selecionou: {selected.title}</h3>
              <p className="text-slate-600 mt-2">Próximos passos:</p>
              <ol className="list-decimal list-inside mt-3 text-slate-700 text-left">
                <li>Revise suas informações pessoais antes de iniciar</li>
                <li>Inicie a prova selecionada com atenção</li>
                <li>Ao finalizar, salve suas respostas em PDF</li>
              </ol>
              <div className="mt-4 flex justify-center gap-3">
                <button
      onClick={() => {
        if (selected) {
          navigate(`/exam/${selected.id}`) 
        }
      }}
      className="bg-gray-900 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-200 cursor-pointer"
    >
      Iniciar Prova
    </button>


              </div>
            </div>
          ) : (
            <div className="text-slate-600 text-center">
              Nenhuma prova selecionada — clique em “Selecionar” em alguma opção acima.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
