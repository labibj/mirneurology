"use client"

import { useState } from "react"

import { FaAngleDown } from "react-icons/fa6";


interface FAQAccordionOneProps {
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQAccordionOne({ questions }: FAQAccordionOneProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [answerHeights, setAnswerHeights] = useState<number[]>(
    Array(questions.length).fill(0),
  )

  const toggleQuestion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx)
    const newAnswerHeights = Array(questions.length).fill(0)
    if (activeIndex !== idx)
      newAnswerHeights[idx] = document.getElementById(
        `answer-${idx}`,
      )?.scrollHeight
    setAnswerHeights(newAnswerHeights)
  }

  return (
    <div
      className={``}
    >
      {/* Questions */}
      <div className="flex flex-col items-center justify-center w-full text-lg lg:text-base gap-4">
        {questions.map(({ question, answer }, idx) => (
          <div key={idx} className="cursor-pointer w-full">
            <div
              className="flex justify-between gap-5 min-h-10 text-left hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              {activeIndex === idx ?
                <span className="font-normal lg:text-xl text-lg transition-all duration-300 text-secondary">{question}
                </span>
                :
                <span className="font-normal lg:text-xl text-lg transition-all duration-300 text-black">{question}
                </span>
              }
              {/* Toggle Button */}
              <div className="relative top-1">
                {activeIndex === idx ? <FaAngleDown className='transition-all duration-300 rotate-180 text-secondary' /> : <FaAngleDown className='transition-all duration-300 rotate-0' />}
              </div>
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-500"
              style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
            >
              <div className="faq-answer overflow-hidden text-left">
                <p className="lg:mt-0 mt-2 py-1 font-normal leading-normal whitespace-pre-line text-base lg:text-lg">{answer}</p>
              </div>              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}