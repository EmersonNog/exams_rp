import React from 'react'

export type Exam = {
  id: string
  title: string
  subtitle?: string
  description?: string
  durationMinutes?: number
}

type Props = {
  exam: Exam
  onSelect: (exam: Exam) => void
}

export default function ExamCard({ exam, onSelect }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-800">{exam.title}</h2>
        {exam.subtitle && <p className="text-sm text-slate-500 mt-1">{exam.subtitle}</p>}
        {exam.description && <p className="text-slate-600 mt-4">{exam.description}</p>}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Duração: {exam.durationMinutes ?? '-'} min
        </div>
        <button
  onClick={() => onSelect(exam)}
  className="bg-gray-900 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-gray-800 hover:scale-105 transition transform duration-200 cursor-pointer"
>
  Selecionar
</button>

      </div>
    </article>
  )
}
