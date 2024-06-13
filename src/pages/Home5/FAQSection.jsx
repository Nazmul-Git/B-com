import React from 'react';
import { Accordion } from 'react-bootstrap';
import faqImg1 from '../../assets/images/faq/h7-img1.png';
import Acordion from '../../components/Acordion/Acordion';

const FAQSection = ({ activeItem, itemsArray }) => {
    const faqData = [
        {
            question: 'Can I get my order sooner?',
            answer: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish. Stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion.',
        },
        {
            question: 'These cases are perfectly simple',
            answer: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish. Stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion.',
        },
        {
            question: 'How can I get support?',
            answer: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish. Stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion.',
        }
    ];

    const formatIndex = (index) => {
        return index < 9 ? `0${index + 1}` : `${index + 1}`;
    };

    const dataToRender = itemsArray.length > 0 ? itemsArray.map(index => faqData[index]) : faqData;

    return (
        <div className="rs-faq faq-style1 faq-modify3 pt-130 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="faq-img">
                            <img src={faqImg1} alt="FAQ Illustration" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-24 md-pl-15">
                        <div className="sec-title mb-40">
                            <h2 className="title pb-25">
                                Compare quotes and get life insurance in the right way
                            </h2>
                            <div className="heading-border-line pre-heading-line1 left-style"></div>
                            <p className="desc pt-40">
                                Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae elementum.
                            </p>
                        </div>
                        <div className="faq-content">
                            <Accordion defaultActiveKey={activeItem} className='accordion'>
                                {
                                    dataToRender &&
                                    dataToRender.map((faq, index) => (
                                        <Acordion
                                            faq={faq}
                                            index={index}
                                            formatIndex={formatIndex}
                                        />
                                    ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
