import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQSection = () => {
    const navigate = useNavigate();
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {questions.map((question, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button
                                type="button"
                                onClick={() => toggleQuestion(index)}
                                className="flex items-center justify-between w-full px-4 py-4 sm:py-5 sm:px-6"
                            >
                                <span className="flex text-base font-semibold text-black sm:text-lg">{question.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 sm:w-6 sm:h-6 ${openQuestion === index ? '' : '-rotate-180'}`}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div style={{ display: openQuestion === index ? 'block' : 'none' }} className="px-4 pb-4 text-sm text-black sm:px-6 sm:pb-5 sm:text-base">
                                <p>{question.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p onClick={() => navigate('/contact')} className="text-center text-gray-600 text-base mt-9 sm:text-lg">
                    Still have questions?{' '}
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
                        Contact our support
                    </span>
                </p>
            </div>
        </section>
    );
};

const questions = [
    {
        question: 'What is the refund policy?',
        answer: "LERN HUB operates a strict no-refunds policy for all purchased paid courses. Once a course purchase is confirmed, payment cannot be refunded. This policy applies to all courses, irrespective of the price, duration or the learner's progress within the course. Contact our counselors through the chat support on our website for more information."
    },
    {
        question: 'I need to purchase a course. Whom should I contact?',
        answer: 'To purchase a course, contact our counselors through the chat support on our website. Look for the chat option on the bottom right of the homepage. Name the course you’re interested in, and the counseling team will guide you through the admission process.'
    },
    {
        question: 'I am not able to view my enrolled course. What to do/whom to contact?',
        answer: 'To access your enrolled course, ensure you have logged in at LERN HUB. If the course is still not visible, email your payment receipt to support@lernhub.com for assistance within 24 hours.'
    },
    {
        question: 'What is an experience portal? How to use it?',
        answer: "Our experience portal offers real-time industrial projects for students and professionals. Contact our counselors through the chat support on our website for more information on how to use it."
    }
];

export default FAQSection;
