import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./accordeon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from '../image/company-arrow.svg';

function BasicExample() {
  return (
    <section className="accordion">
      <div className="container accordion-container">
        <div className="accordion__wrapper">
          <div className="accordion-question">
            <h2 className="question-title">Ответы на часто задаваемые вопросы</h2>
            <p className="question-text">Прозрачные комиссии, наличие
              большие резервы и отличная репутация гарантируют успех
              ваших обменных операций!</p>
            <button className="question-btn">Посмотреть все <img src={arrow} alt="" className='question-arrow-btn' /></button>
          </div>
          <div className="accordion-block">
            <Accordion defaultActiveKey="0" className='my-accordion'>
              <Accordion.Item eventKey="0" className='my-accordion-item'>
                <Accordion.Header>Как пополнить баланс аккаунта Bitok?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='my-accordion-item'>
                <Accordion.Header>Как пополнить баланс аккаунта Bitok?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='my-accordion-item'>
                <Accordion.Header>Как пополнить баланс аккаунта Bitok?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='my-accordion-item'>
                <Accordion.Header>Как пополнить баланс аккаунта Bitok?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='my-accordion-item'>
                <Accordion.Header>Где посмотреть текущий курс валют?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className='my-accordion-item'>
                <Accordion.Header>Где посмотреть текущий курс валют?</Accordion.Header>
                <Accordion.Body>
                  Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных  операций! Прозрачные комиссии, наличие большие резервы и отличная репутация гарантируют успех ваших обменных операций!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicExample;

