import React, { useState, useRef, useEffect } from 'react';
import { INITIAL_OPTIONS, PREDEFINED_ANSWERS } from '../../../data/chatbotFaq';
import { askGeminiAI } from '../../../services/geminiService';
import styles from './Chatbot.module.css';

const WHATSAPP_NUMBER = '584246676099';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría recibir atención personalizada sobre sus servicios.')}`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! 👋 Bienvenido a **Cordero y León, C.A.** ¿En qué podemos ayudarte hoy? Selecciona una opción o indícanos tu duda:',
      options: INITIAL_OPTIONS
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option) => {
    if (option.isWhatsapp) {
      window.open(WHATSAPP_LINK, '_blank');
      return;
    }

    if (option.id === 'custom_question') {
      setShowInput(true);
      setMessages((prev) => [
        ...prev,
        { sender: 'user', text: option.label },
        {
          sender: 'bot',
          text: 'Por favor escribe tu duda a continuación y con gusto nuestra IA te responderá (o puedes contactar a un asesor por WhatsApp en cualquier momento):',
          showWhatsappBtn: true
        }
      ]);
      return;
    }

    // Predefined answer
    const answer = PREDEFINED_ANSWERS[option.id];
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: option.label },
      {
        sender: 'bot',
        text: answer,
        options: INITIAL_OPTIONS,
        showWhatsappBtn: true
      }
    ]);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userQuery = inputText.trim();
    setInputText('');

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: userQuery }
    ]);

    setIsTyping(true);

    const aiResponse = await askGeminiAI(userQuery);

    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: aiResponse,
        options: INITIAL_OPTIONS,
        showWhatsappBtn: true
      }
    ]);
  };

  // Helper to parse simple markdown bolding **text**
  const renderFormattedText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className={styles.chatbotWrapper}>
      {/* Botón Flotante */}
      <button
        className={`${styles.chatbotFloatBtn} ${isOpen ? styles.active : ''}`}
        onClick={toggleChat}
        aria-label="Asistente Virtual CYL"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
        {!isOpen && <span className={styles.badge}>Chat CYL</span>}
      </button>

      {/* Ventana de Chat */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <header className={styles.chatHeader}>
            <div className={styles.botAvatar}>
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div className={styles.botInfo}>
              <h4>Asistente Virtual CYL</h4>
              <span className={styles.status}>
                <span className={styles.statusDot}></span> En línea
              </span>
            </div>
            <button className={styles.closeBtn} onClick={toggleChat} aria-label="Cerrar chat">
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          <div className={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.messageRow} ${
                  msg.sender === 'user' ? styles.userRow : styles.botRow
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className={styles.msgAvatar}>
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                )}

                <div className={styles.messageBubble}>
                  <div className={styles.messageText}>
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* WhatsApp redirect button if requested */}
                  {msg.showWhatsappBtn && (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.msgWhatsappBtn}
                    >
                      <span className="material-symbols-outlined">chat</span>
                      Hablar con un Asesor por WhatsApp
                    </a>
                  )}

                  {/* Options Chips */}
                  {msg.options && (
                    <div className={styles.optionsList}>
                      {msg.options.map((opt) => (
                        <button
                          key={opt.id}
                          className={`${styles.optionChip} ${
                            opt.isWhatsapp ? styles.whatsappChip : ''
                          }`}
                          onClick={() => handleOptionClick(opt)}
                        >
                          <span className="material-symbols-outlined">{opt.icon}</span>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageRow} ${styles.botRow}`}>
                <div className={styles.msgAvatar}>
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Formulario de texto libre si activó "¿No consigues la respuesta?" */}
          {showInput && (
            <form className={styles.chatFooter} onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Escribe tu consulta aquí..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isTyping}
              />
              <button type="submit" disabled={!inputText.trim() || isTyping}>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
