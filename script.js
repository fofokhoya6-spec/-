
let language = 'ar';
const messages = {
    ar: {
        welcome: "السلام عليكم ورحمة الله وبركاته 🌸 كيف يمكنني مساعدتك اليوم؟",
        help: "يمكنك السؤال عن: أوقات العمل، شروط التسجيل، أقسام المكتبة، طريقة استعارة كتاب، النظام الداخلي.",
        default: "عذرًا، لم أفهم سؤالك."
    },
    fr: {
        welcome: "Bonjour 🌸 Comment puis-je vous aider aujourd'hui ?",
        help: "Vous pouvez demander: horaires d'ouverture, conditions d'inscription, sections de la bibliothèque, comment emprunter un livre, règlement intérieur.",
        default: "Désolé, je n'ai pas compris votre question."
    },
    en: {
        welcome: "Hello 🌸 How can I help you today?",
        help: "You can ask about: opening hours, registration conditions, library sections, how to borrow a book, internal rules.",
        default: "Sorry, I didn't understand your question."
    }
};

function setLanguage(lang) {
    language = lang;
    document.getElementById('language-select').style.display = 'none';
    document.getElementById('chat-box').style.display = 'block';
    document.getElementById('input-box').style.display = 'flex';
    addMessage(messages[language].welcome, 'bot');
    addMessage(messages[language].help, 'bot');
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = sender;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (text === '') return;
    addMessage(text, 'user');
    input.value = '';

    let reply = messages[language].default;

    if (text.includes("عمل") || text.toLowerCase().includes("hours")) {
        reply = language === 'ar' ? "أوقات العمل: من الأحد إلى الخميس، 8:00 - 16:00." :
                language === 'fr' ? "Horaires: Dimanche à Jeudi, 8h00 - 16h00." :
                "Opening hours: Sunday to Thursday, 8:00 AM - 4:00 PM.";
    }
    else if (text.includes("تسجيل") || text.toLowerCase().includes("register")) {
        reply = language === 'ar' ? "شروط التسجيل: بطاقة تعريف، صورتان، استمارة التسجيل." :
                language === 'fr' ? "Conditions d'inscription: Carte d'identité, 2 photos, formulaire d'inscription." :
                "Registration: ID card, 2 photos, registration form.";
    }

    addMessage(reply, 'bot');
}
