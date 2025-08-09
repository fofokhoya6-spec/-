
// script.js - multilingual FAQ bot (static matching)
let language = 'ar';
const chat = document.getElementById('chat');
const inputArea = document.getElementById('input-area');
const userInput = () => document.getElementById('user-input');

const QnA = {
  ar: {
    welcome: "السلام عليكم ورحمة الله وبركاته 👋 كيف أستطيع مساعدتك؟",
    help: "يمكنك السؤال عن: أيام التسجيل، أيام استلام البطاقة، الإعارة (داخلية/خارجية)، أنواع الرصيد، تقديم كتب هدية، الأنشطة.",
    // Q&A entries
    "ايام التسجيل": "أيام التسجيل: يوم الاثنين صباحًا على الساعة 9:30 وصباحًا ومساءً، والمساء على الساعة 13:30.",
    "ايام الحصول على البطاقة": "أيام الحصول على البطاقة: يوم الثلاثاء صباحًا ومساءً بنفس توقيت التسجيل. (البطاقات الممغنطة تُسلم بواسطة الإجراءات الإلكترونية)",
    "الاعارة": "الإعارة: داخلية وخارجية. الإعارة الداخلية: يمكن استعارة كتاب واحد لكل طالب أو اثنين كحد أقصى. الإعارة الخارجية: لمدة 15 يومًا قابلة للتمديد عبر الحجز عبر برنامج PMB (للبطاقات الممغنطة). للبطاقات الورقية يتم التسجيل في سجل خاص للإعارة الخارجية.",
    "انواع الرصيد": "أنواع الرصيد: رصيد الأطفال في فضاء الطفل بالطابق السفلي (000-100-200-300)، كتب شبه مدرسي متوسط وثانوي في الطابق الثاني المخصص للشباب (400-500-600-700-800-900)، الطابق الثالث مخصص للباحثين (مصنفات بحثية)، أصناف أخرى لا تحتوي على رصيد حاليًا.",
    "تقديم هدية": "لتقديم مجموعة كتب هدية: توجه إلى مصلحة الاقتناء والتزويد لإكمال الإجراءات والإجابة عن استفساراتك.",
    "الانشطة": "أهم النشاطات: أنشطة ثقافية وتقافيهة موجهة حسب الأصناف ومناسبة للأعياد والمناسبات الوطنية. لمعرفة المواعيد تابعوا الصفحة الرسمية للمكتبة على فيسبوك."
  },
  fr: {
    welcome: "Bonjour 👋 Comment puis-je vous aider ?",
    help: "Vous pouvez demander : jours d'inscription, jours de retrait de la carte, prêt (interne/externe), types de collections, offrir des livres, activités.",
    "ايام التسجيل": "Jours d'inscription : le lundi matin à 9h30 et le soir à 13h30.",
    "ايام الحصول على البطاقة": "Jours de retrait de la carte : le mardi matin et soir aux mêmes horaires que l'inscription. (Cartes magnétiques délivrées par procédure électronique)",
    "الاعارة": "Prêt : interne et externe. Prêt interne : un livre par étudiant ou deux au maximum. Prêt externe : 15 jours renouvelables via réservation via le logiciel PMB (pour les cartes magnétiques). Pour les cartes papier, inscription dans un registre spécial de prêt externe.",
    "انواع الرصيد": "Types de collections : collections enfants dans l'espace enfant au sous-sol (000-100-200-300), livres scolaires et péri-scolaires au 2ème étage pour jeunes (400-900), 3ème étage pour chercheurs (ouvrages de recherche). Autres catégories n'ont pas de collection actuellement.",
    "تقديم هدية": "Pour offrir une collection de livres : adressez-vous au service d'acquisition et d'approvisionnement pour compléter les procédures et répondre à vos questions.",
    "الانشطة": "Activités principales : activités culturelles liées aux collections et aux fêtes/nationales. Pour connaître les dates, suivez la page Facebook officielle de la bibliothèque."
  },
  en: {
    welcome: "Hello 👋 How can I help you?",
    help: "You can ask about: registration days, card pickup days, borrowing (internal/external), collection types, donating books, activities.",
    "ايام التسجيل": "Registration days: Monday morning at 9:30 and in the evening at 13:30.",
    "ايام الحصول على البطاقة": "Card pickup days: Tuesday morning and evening at the same times as registration. (Magnetic cards are issued via electronic procedures)",
    "الاعارة": "Borrowing: internal and external. Internal borrowing: one book per student or two max. External borrowing: 15 days renewable by reservation via PMB software (for magnetic cards). For paper cards, borrowers are registered in a special external lending register.",
    "انواع الرصيد": "Collection types: children's collection in the children's space in the basement (000-100-200-300), school-related books for teens on the 2nd floor (400-900), 3rd floor for researchers (research works). Other categories currently have no holdings.",
    "تقديم هدية": "To donate a set of books: contact the Acquisitions department to complete procedures and answer your questions.",
    "الانشطة": "Main activities: cultural activities linked to collections and national occasions. To know dates follow the library's official Facebook page."
  }
};

function setLanguage(lang){
  language = lang;
  document.getElementById('language-select').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
  document.getElementById('input-area').style.display = 'flex';
  clearChat();
  addBotMessage(QnA[language].welcome);
  addBotMessage(QnA[language].help);
  // set placeholder
  const placeholders = {ar: 'اكتب سؤالك هنا...', fr: 'Écrivez votre question...', en: 'Type your question...'};
  document.getElementById('user-input').placeholder = placeholders[language];
}

function clearChat(){ document.getElementById('chat').innerHTML = ''; }

function addBotMessage(text){
  const div = document.createElement('div'); div.className='msg bot'; div.textContent = text; document.getElementById('chat').appendChild(div); document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
}
function addUserMessage(text){
  const div = document.createElement('div'); div.className='msg user'; div.textContent = text; document.getElementById('chat').appendChild(div); document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
}

function sendMessage(){
  const text = document.getElementById('user-input').value.trim();
  if(!text) return;
  addUserMessage(text);
  document.getElementById('user-input').value='';
  // match keywords (simplified)
  const lookupKeys = Object.keys(QnA[language]).filter(k=>k!=='welcome' && k!=='help');
  let answered=false;
  // normalize: lower and remove diacritics? keep simple
  const txt = text.toLowerCase();
  for(const key of lookupKeys){
    // check if user text contains Arabic keywords or english/fr keywords
    if(language==='ar'){
      // check Arabic keywords and also some Latin words
      const keywords = [key, key.replace(/\s+/g,'')];
      for(const kw of keywords){
        if(txt.includes(kw) || txt.includes(kw.replace(/ال/,'').trim())){ addBotMessage(QnA[language][key]); answered=true; break; }
      }
    } else {
      // check if user typed english or french words matching common terms
      const enKeyMap = {
        'ايام التسجيل': ['registration','inscription','register','inscription'],
        'ايام الحصول على البطاقة': ['card','carte','بطاقة','pickup','retirer'],
        'الاعارة': ['borrow','borrowing','prêt','emprunt'],
        'انواع الرصيد': ['collection','رصيد','collection','types','types de collection'],
        'تقديم هدية': ['donate','donation','offrir','cadeau'],
        'الانشطة': ['activity','activit','activité','أنشطة','activités']
      };
      const kws = enKeyMap[key]||[];
      for(const kw of kws){
        if(txt.includes(kw.toLowerCase())){ addBotMessage(QnA[language][key]); answered=true; break; }
      }
    }
    if(answered) break;
  }
  if(!answered){
    addBotMessage(QnA[language].default);
  }
}
