const quotes = [
    { text: "A persistência é o caminho do êxito.", author: "Charles Chaplin" },
    { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill" },
    { text: "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.", author: "Friedrich Nietzsche" },
    { text: "É parte da cura o desejo de ser curado.", author: "Séneca" },
    { text: "A mudança é a lei da vida. Aqueles que olham apenas para o passado ou para o presente, com certeza perderão o futuro.", author: "John F. Kennedy" },
    { text: "O maior prazer da vida é fazer o que as pessoas dizem que você não é capaz de fazer.", author: "Walter Bagehot" },
    { text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon" },
    { text: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.", author: "Henry Ford" },
    { text: "A única maneira de fazer um excelente trabalho é amar o que se faz.", author: "Steve Jobs" },
    { text: "Não há caminho para a felicidade. A felicidade é o caminho.", author: "Thich Nhat Hanh" },
    { text: "A vida é 10% o que acontece a você e 90% como você reage a isso.", author: "Charles Swindoll" },
    { text: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.", author: "Winston Churchill" },
    { text: "Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.", author: "Mahatma Gandhi" },
    { text: "Não espere por uma crise para descobrir o que é importante na sua vida.", author: "Platão" },
    { text: "Acredite em milagres, mas não dependa deles.", author: "Immanuel Kant" },
    { text: "O que não nos mata torna-nos mais fortes.", author: "Friedrich Nietzsche" },
    { text: "A nossa maior glória não reside no facto de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.", author: "Confúcio" },
    { text: "O único modo de fazer um excelente trabalho é amando o que você faz.", author: "Steve Jobs" },
    { text: "Tudo o que a mente pode conceber e acreditar, ela pode alcançar.", author: "Napoleon Hill" },
    { text: "A maior glória em viver não está em nunca cair, mas em levantar-se cada vez que caímos.", author: "Nelson Mandela" },
    { text: "Você deve ser a mudança que deseja ver no mundo.", author: "Mahatma Gandhi" },
    { text: "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.", author: "Antoine de Saint-Exupéry" },
    { text: "As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são aquelas que o fazem.", author: "Rob Siltanen" },
    { text: "A sorte favorece a mente preparada.", author: "Louis Pasteur" },
    { text: "Quem nunca cometeu um erro nunca tentou algo novo.", author: "Albert Einstein" },
    { text: "A melhor maneira de prever o futuro é criá-lo.", author: "Peter Drucker" },
    { text: "O sucesso não é o final, o fracasso não é fatal: o que conta é a coragem para continuar.", author: "Winston Churchill" },
    { text: "É melhor conquistar a si mesmo do que vencer mil batalhas.", author: "Buda" },
    { text: "O importante não é vencer todos os dias, mas lutar sempre.", author: "Waldemar Valle Martins" },
    { text: "Se você não sabe para onde está indo, qualquer caminho serve.", author: "Lewis Carroll" },
    { text: "Não se pode ensinar tudo a alguém, pode-se apenas ajudá-lo a encontrar por si mesmo.", author: "Galileu Galilei" },
    { text: "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.", author: "Eleanor Roosevelt" },
    { text: "A melhor maneira de começar algo é parar de falar e começar a fazer.", author: "Walt Disney" },
    { text: "Quem se conhece, vence antes de lutar.", author: "Sun Tzu" },
    { text: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.", author: "Mark Twain" },
    { text: "A grande glória da vida não está em nunca cair, mas em levantar-se cada vez que caímos.", author: "Nelson Mandela" },
    { text: "Não importa o quão devagar você vá, desde que você não pare.", author: "Confúcio" },
    { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { text: "A vida é 10% o que acontece conosco e 90% como reagimos a isso.", author: "Charles Swindoll" }
];

function displayQuote() {
    const today = new Date();
    const index = today.getDate() % quotes.length; 
    document.getElementById('quote-text').innerText = quotes[index].text;
    document.getElementById('quote-author').innerText = `- ${quotes[index].author}`;
}

window.onload = displayQuote;
