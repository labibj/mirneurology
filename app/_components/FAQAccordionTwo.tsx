"use client"

import { useState } from "react"

import { FaAngleDown } from "react-icons/fa6";


interface FAQAccordionTwoProps {
  questions: {
    question: string
    answer: string
  }[]
}

export default function FAQAccordionTwo({ questions }: FAQAccordionTwoProps) {
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
      <div className="flex flex-col items-center justify-center w-full px-2 text-lg lg:text-base gap-4">
        {questions.map(({ question, answer }, idx) => (
          <div key={idx} className="cursor-pointer w-full">
            <div
              className="flex items-center justify-between min-h-10 text-left hover:cursor-pointer"
              onClick={() => toggleQuestion(idx)}
            >
              {/* Title */}
              {/* <span className="lg:ml-4 font-normal lg:text-xl text-lg text-black">
                {question}
              </span> */}
              {activeIndex === idx ?
                <span className="lg:ml-4 font-normal lg:text-xl text-lg transition-all duration-300 text-secondary">{question}
                </span>
                :
                <span className="lg:ml-4 font-normal lg:text-xl text-lg transition-all duration-300 text-black">{question}
                </span>
              }
              {/* Toggle Button */}
              <div>
                {activeIndex === idx ? <FaAngleDown className='transition-all duration-300 rotate-180 text-secondary' /> : <FaAngleDown className='transition-all duration-300 rotate-0' />}
              </div>
            </div>
            {/* Answer */}
            <div
              id={`answer-${idx}`}
              className="overflow-hidden transition-all duration-500"
              style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
            >
              <div className="faq-answer lg:mx-4 overflow-hidden text-left">
                <p className="lg:mt-0 mt-2 py-1 font-normal leading-normal whitespace-pre-line text-base lg:text-lg">{answer}</p>
              </div>              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}