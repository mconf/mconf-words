
const NON_ALPHABETICAL = /[.,º/#!?$%^&*;:{}=\\_`~()]/g;
const WHITESPACE = /\s+/g;
const SINGLE_SPACE = ' ';

const PRONOUNS = {
  pessoais: /^(eu|me|mim|comigo|tu|te|ti|contigo|ele|ela|se|si|cosigo|o|a|lhe|nós|nos|conosco|vós|vos|convosco|eles|elas|os|as|lhes)$/g,
  possessivos: /^(meu|minha|meus|minhas|teu|tua|teus|tuas|seu|sua|seus|suas|nosso|nossa|nossos|nossas|vosso|vossa|vossos|vossas)$/g,
  demonstrativos: /^(este|esta|estes|estas|isto|esse|essa|esses|essas|isso|aquele|aquela|aqueles|aquelas|aquilo|mesmo|mesma|mesmos|mesmas|próprio|própria|próprios|próprias|semelhante|semelhantes|tal|tais)$/g,
  indefinidos: /^(tudo|todo|toda|todos|todas|algo|alguém|algum|alguma|alguns|algumas|um|uma|uns|umas|nada|ninguém|nenhum|nenhuma|nenhuns|nenhumas|certo|certa|certos|certas|qualquer|quaisquer|bastante|bastantes|mesmo|mesma|mesmos|mesmas|outrem|outro|outra|outros|outras|cada|vários|várias|fulano|sicrano|beltrano)$/g,
  relativos: /^(qual|quais|cujo|cuja|cujos|cujas|que|quanto|quantos|quanta|quantas|quem|onde|como|quando)$/g,
  tratamento: /^(relator|relatora|relatores|relatoras|autor|autora|autores|autoras|apelante|apelantes|paciente|pacientes|réu|ré|réus|rés|doutor|doutora|advogado|advogada|meritíssimo|meritíssima|excelência|senhor|senhores|senhora|senhoras|senhorita|senhoritas|você)$/g
};

const ADVERBS = {
  modo: /^(assim|bem|mal|acinte|adrede|debalde|depressa|devagar|melhor|pior|como|desapontadoramente|generosamente|cuidadosamente|calmamente)$/g,
  lugar: /^(abaixo|acima|adentro|adiante|afora|aí|além|algures|nenhures|alhures|ali|aqui|aquém|atrás|cá|acolá|dentro|embaixo|externamente|lá|longe|perto)$/g,
  tempo: /^(afinal|agora|amanhã|amiúde|antes|ontem|breve|cedo|constantemente|depois|enfim|entrementes|hoje|imediatamente|jamais|nunca|sempre|outrora|primeiramente|tarde|provisoriamente|sucessivamente|já)$/g,
  negacao: /^(não|tampouco|negativamente|jamais|nunca)$/g,
  afirmacao: /^(também|sim|certamente|realmente|decerto|certo|efetivamente|incontestavelmente)$/g,
  duvida: /^(acaso|casualmente|possivelmente|provavelmente|talvez|quiçá|será)$/g,
  grau: /^(assaz|bastante|demais|mais|menos|bem|muito|quanto|quão|quase|tanto|pouco|demasiado|imenso)$/g,
  realce: /^(cá|lá|né|só)$/g
};

const ADJECTIVES = {
  qualidade: /^(bom|boa|bons|boas|bonito|bonita|bonitos|bonitas|belo|bela|belos|belas)$/g,
  defeito:/^(mau|má|maus|más|feio|feia|feios|feias|ruim|ruins)$/g
};

const PREPOSITIONS = {
  simples: /^(a|ante|após|até|com|contra|de|desde|em|entre|para|per|perante|por|sem|sob|sobre|trás)$/g,
  acidentais: /^(afora|como|conforme|consoante|durante|exceto|feito|fora|mediante|menos|salvo|segundo|tirante|visto)$/g,
  a: /^(à|às|ao|aos|àquele|àquela|àqueles|àquelas|aquilo|aonde|adiante)$/g,
  com: /^(cum|comigo|contigo|consigo|conosco|convosco)$/g,
  de: /^(do|da|dos|das|dum|duns|duma|dumas|dele|dela|deles|delas|deste|desta|destes|destas|disto|desse|dessa|desses|dessas|disso|daquele|daquela|daqueles|daquelas|daquilo|doutro|doutra|doutros|doutras|daqui|daí|dali|daquém|dalém|donde|dacolá|doutrem|dentre)$/g,
  em: /^(no|na|nos|nas|num|nuns|numa|numas|nele|nela|neles|nelas|neste|nesta|nestes|nestas|nisto|nesse|nessa|nesses|nessas|nisso|naquele|naquela|naqueles|naquelas|naquilo|noutro|noutra|noutros|noutras|noutrem)$/g,
  para: /^(pro|pra|pros|pras)$/g,
  por: /^(pelo|pela|pelos|pelas)$/g,
  outro: /^(aqueloutro|aqueloutra|aqueloutros|aqueloutras|essoutro|essoutra|essoutros|essoutras|estoutro|estoutra|estoutros|estoutras)$/g
};

const CONJUNCTIONS = /^(e|nem|mas|porém|todavia|contudo|entretanto|ou|pois|porque|portanto|se|ora|apesar|como)$/g;
const COMBINATIONS = /^(ao|aos|aonde|adiante)$/g;
const NUMERALS = /^([0-9]+|primeiro|primeira|segundo|segunda|terceiro|terceira|zero|um|dois|três|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|treze|quatorze|quinze|dezesseis|dezessete|dezoito|dezenove|vinte|trinta|quarenta|cinquenta|sessenta|setenta|oitenta|noventa|cem|duzentos|trezentos|quatrocentos|quinhentos|seiscentos|setecentos|oitocentos|novecentos|mil)$/g;
const ALPHABETICALS = /^[a-z]$/g;
const PUNCTUATION = /^(ponto|reticências|parênteses|exclamação|interrogação|vírgula|travessão|aspas)$/g;

const INFINITIVES = {
  ser: /^ser$/g,
  ter: /^ter$/g,
  estar: /^estar$/g,
  ir: /^ir$/g,
  ficar: /^ficar$/g,
  dizer: /^dizer$/g,
  fazer: /^fazer$/g,
  haver: /^haver$/g,
  poder: /^poder$/g,
  ver: /^ver$/g,
  dar: /^dar$/g,
  saber: /^saber$/g,
  vir: /^vir$/g,
  querer: /^querer$/g,
  parecer: /^parecer$/g,
  falar: /^falar$/g,
  ouvir: /^ouvir$/g,
  achar: /^achar$/g,
  deixar: /^deixar$/g,
  sair: /^sair$/g,
  chegar: /^chegar$/g,
  passar: /^passar$/g,
  pedir: /^pedir$/g,
  ler: /^ler$/g,
  acabar: /^acabar$/g,
  acreditar: /^acreditar$/g,
  comer: /^comer$/g,
  beber: /^beber$/g,
  abrir: /^abrir$/g,
  fechar: /^fechar$/g
};

const INDICATIVES = {
  ser: /^(sou|és|é|somos|sois|são|era|eras|era|eramos|éreis|eram|fui|foste|foi|fomos|fostes|foram|fora|foras|fora|fôramos|fôreis|foram|serei|serás|será|seremos|sereis|serão|seria|serias|seria|seríamos|seríeis|seriam)$/g,
  ter: /^(tenho|tens|tem|temos|tendes|têm|tinha|tinhas|tinha|tínhamos|tínheis|tinham|tive|tiveste|teve|tivemos|tivestes|tiveram|tivera|tiveras|tivera|tivéramos|tivéreis|tiveram|terei|terás|terá|teremos|tereis|terão|teria|terias|teria|teríamos|teríeis|teriam)$/g,
  estar: /^(estou|estás|está|estamos|estais|estão|estava|estavas|estava|estávamos|estáveis|estavam|estive|estiveste|esteve|estivemos|estivestes|estiveram|estivera|estiveras|estivera|estivéramos|estivéreis|estiveram|estarei|estarás|estará|estaremos|estareis|estarão|estaria|estarias|estaria|estaríamos|estaríeis|estariam)$/g,
  ir: /^(vou|vais|vai|vamos|ides|vão|ia|ias|ia|íamos|íeis|iam|fui|foste|foi|fomos|fostes|foram|fora|foras|fora|fôramos|fôreis|foram|irei|irás|irá|iremos|ireis|irão|iria|irias|iria|iríamos|iríeis|iriam)$/g,
  ficar: /^(fico|ficas|fica|ficamos|ficais|ficam|ficava|ficavas|ficava|ficávamos|ficáveis|ficavam|fiquei|ficaste|ficou|ficamos|ficastes|ficaram|ficara|ficaras|ficara|ficáramos|ficáreis|ficaram|ficarei|ficarás|ficará|ficaremos|ficareis|ficarão|ficaria|ficarias|ficaria|ficaríamos|ficaríeis|ficariam)$/g,
  dizer: /^(digo|dizes|diz|dizemos|dizeis|dizem|dizia|dizias|dizia|dizíamos|dizíeis|diziam|disse|disseste|disse|dissemos|dissestes|disseram|dissera|disseras|dissera|disséramos|disséreis|disseram|direi|dirás|dirá|diremos|direis|dirão|diria|dirias|diria|diríamos|diríeis|diriam)$/g,
  fazer: /^(faço|fazes|faz|fazemos|fazeis|fazem|fazia|fazias|fazia|fazíamos|fazíeis|faziam|fiz|fizeste|fez|fizemos|fizestes|fizeram|fizera|fizeras|fizera|fizéramos|fizéreis|fizeram|farei|farás|fará|faremos|fareis|farão|faria|farias|faria|faríamos|faríeis|fariam)$/g,
  haver: /^(hei|hás|há|havemos|haveis|hão|havia|havias|havia|havíamos|havíeis|haviam|houve|houveste|houve|houvemos|houvestes|houveram|houvera|houveras|houvera|houvéramos|houvéreis|houveram|haverei|haverás|haverá|haveremos|havereis|haverão|haveria|haverias|haveria|haveríamos|haveríeis|haveriam)$/g,
  poder: /^(posso|podes|pode|podemos|podeis|podem|podia|podias|podia|podíamos|podíeis|podiam|pude|pudeste|pôde|pudemos|pudestes|puderam|pudera|puderas|pudera|pudéramos|pudéreis|puderam|poderei|poderás|poderá|poderemos|podereis|poderão|poderia|poderias|poderia|poderíamos|poderíeis|poderiam)$/g,
  ver: /^(vejo|vês|vê|vemos|vedes|veem|via|vias|via|víamos|víeis|viam|vi|viste|viu|vimos|vistes|viram|vira|viras|vira|víramos|víreis|viram|verei|verás|verá|veremos|vereis|verão|veria|verias|veria|veríamos|veríeis|veriam)$/g,
  dar: /^(dou|dás|dá|damos|dais|dão|dava|davas|dava|dávamos|dáveis|davam|dei|deste|deu|demos|destes|deram|dera|deras|dera|déramos|déreis|deram|darei|darás|dará|daremos|dareis|darão|daria|darias|daria|daríamos|daríeis|dariam)$/g,
  saber: /^(sei|sabes|sabe|sabemos|sabeis|sabem|sabia|sabias|sabia|sabíamos|sabíeis|sabiam|soube|soubeste|soube|soubemos|soubestes|souberam|soubera|souberas|soubera|soubéramos|soubéreis|souberam|saberei|saberás|saberá|saberemos|sabereis|saberão|saberia|saberias|saberia|saberíamos|saberíeis|saberiam)$/g,
  vir: /^(venho|vens|vem|vimos|vindes|vêm|vinha|vinhas|vinha|vínhamos|vínheis|vinham|vim|vieste|veio|viemos|viestes|vieram|viera|vieras|viera|viéramos|viéreis|vieram|virei|virás|virá|viremos|vireis|virão|viria|virias|viria|viríamos|viríeis|viriam)$/g,
  querer: /^(quero|queres|quer|queremos|quereis|querem|queria|querias|queria|queríamos|queríeis|queriam|quis|quiseste|quis|quisemos|quisestes|quiseram|quisera|quiseras|quisera|quiséramos|quiséreis|quiseram|quererei|quererás|quererá|quereremos|querereis|quererão|quereria|quererias|quereria|quereríamos|quereríeis|quereriam)$/g,
  parecer: /^(parecendo|parecido|parecer|pareço|pareces|parece|parecemos|pareceis|parecem|parecia|parecias|parecia|parecíamos|parecíeis|pareciam|pareci|pareceste|pareceu|parecemos|parecestes|pareceram|parecera|pareceras|parecera|parecêramos|parecêreis|pareceram|parecerei|parecerás|parecerá|pareceremos|parecereis|parecerão|pareceria|parecerias|pareceria|pareceríamos|pareceríeis|pareceriam)$/g,
  falar: /^(falo|falas|fala|falamos|falais|falam|falava|falavas|falava|falávamos|faláveis|falavam|falei|falaste|falou|falamos|falastes|falaram|falara|falaras|falara|faláramos|faláreis|falaram|falarei|falarás|falará|falaremos|falareis|falarão|falaria|falarias|falaria|falaríamos|falaríeis|falariam)$/g,
  ouvir: /^(ouço|ouves|ouve|ouvimos|ouvis|ouvem|ouvia|ouvias|ouvia|ouvíamos|ouvíeis|ouviam|ouvi|ouviste|ouviu|ouvimos|ouvistes|ouviram|ouvira|ouviras|ouvira|ouvíramos|ouvíreis|ouviram|ouvirei|ouvirás|ouvirá|ouviremos|ouvireis|ouvirão|ouviria|ouvirias|ouviria|ouviríamos|ouviríeis|ouviriam)$/g,
  achar: /^(acho|achas|acha|achamos|achais|acham|achava|achavas|achava|achávamos|acháveis|achavam|achei|achaste|achou|achamos|achastes|acharam|achara|acharas|achara|acháramos|acháreis|acharam|acharei|acharás|achará|acharemos|achareis|acharão|acharia|acharias|acharia|acharíamos|acharíeis|achariam)$/g,
  deixar: /^(deixo|deixas|deixa|deixamos|deixais|deixam|deixava|deixavas|deixava|deixávamos|deixáveis|deixavam|deixei|deixaste|deixou|deixamos|deixastes|deixaram|deixara|deixaras|deixara|deixáramos|deixáreis|deixaram|deixarei|deixarás|deixará|deixaremos|deixareis|deixarão|deixaria|deixarias|deixaria|deixaríamos|deixaríeis|deixariam)$/g,
  sair: /^(saio|sais|sai|saímos|saís|saem|saía|saías|saía|saíamos|saíeis|saíam|saí|saíste|saiu|saímos|saístes|saíram|saíra|saíras|saíra|saíramos|saíreis|saíram|sairei|sairás|sairá|sairemos|saireis|sairão|sairia|sairias|sairia|sairíamos|sairíeis|sairiam)$/g,
  chegar: /^(chego|chegas|chega|chegamos|chegais|chegam|chegava|chegavas|chegava|chegávamos|chegáveis|chegavam|cheguei|chegaste|chegou|chegamos|chegastes|chegaram|chegara|chegaras|chegara|chegáramos|chegáreis|chegaram|chegarei|chegarás|chegará|chegaremos|chegareis|chegarão|chegaria|chegarias|chegaria|chegaríamos|chegaríeis|chegariam)$/g,
  passar: /^(passo|passas|passa|passamos|passais|passam|passava|passavas|passava|passávamos|passáveis|passavam|passei|passaste|passou|passamos|passastes|passaram|passara|passaras|passara|passáramos|passáreis|passaram|passarei|passarás|passará|passaremos|passareis|passarão|passaria|passarias|passaria|passaríamos|passaríeis|passariam)$/g,
  pedir: /^(peço|pedes|pede|pedimos|pedis|pedem|pedia|pedias|pedia|pedíamos|pedíeis|pediam|pedi|pediste|pediu|pedimos|pedistes|pediram|pedira|pediras|pedira|pedíramos|pedíreis|pediram|pedirei|pedirás|pedirá|pediremos|pedireis|pedirão|pediria|pedirias|pediria|pediríamos|pediríeis|pediriam)$/g,
  ler: /^(leio|lês|lê|lemos|ledes|leem|lia|lias|lia|líamos|líeis|liam|li|leste|leu|lemos|lestes|leram|lera|leras|lera|lêramos|lêreis|leram|lerei|lerás|lerá|leremos|lereis|lerão|leria|lerias|leria|leríamos|leríeis|leriam)$/g,
  acabar: /^(acabo|acabas|acaba|acabamos|acabais|acabam|acabava|acabavas|acabava|acabávamos|acabáveis|acabavam|acabei|acabaste|acabou|acabamos|acabastes|acabaram|acabara|acabaras|acabara|acabáramos|acabáreis|acabaram|acabarei|acabarás|acabará|acabaremos|acabareis|acabarão|acabaria|acabarias|acabaria|acabaríamos|acabaríeis|acabariam)$/g,
  acreditar: /^(acredito|acreditas|acredita|acreditamos|acreditais|acreditam|acreditava|acreditavas|acreditava|acreditávamos|acreditáveis|acreditavam|acreditei|acreditaste|acreditou|acreditamos|acreditastes|acreditaram|acreditara|acreditaras|acreditara|acreditáramos|acreditáreis|acreditaram|acreditarei|acreditarás|acreditará|acreditaremos|acreditareis|acreditarão|acreditaria|acreditarias|acreditaria|acreditaríamos|acreditaríeis|acreditariam)$/g,
  comer: /^(como|comes|come|comemos|comeis|comem|comia|comias|comia|comíamos|comíeis|comiam|comi|comeste|comeu|comemos|comestes|comeram|comera|comeras|comera|comêramos|comêreis|comeram|comerei|comerás|comerá|comeremos|comereis|comerão|comeria|comerias|comeria|comeríamos|comeríeis|comeriam)$/g,
  beber: /^(bebo|bebes|bebe|bebemos|bebeis|bebem|bebia|bebias|bebia|bebíamos|bebíeis|bebiam|bebi|bebeste|bebeu|bebemos|bebestes|beberam|bebera|beberas|bebera|bebêramos|bebêreis|beberam|beberei|beberás|beberá|beberemos|bebereis|beberão|beberia|beberias|beberia|beberíamos|beberíeis|beberiam)$/g,
  abrir: /^(abro|abres|abre|abrimos|abris|abrem|abria|abrias|abria|abríamos|abríeis|abriam|abri|abriste|abriu|abrimos|abristes|abriram|abrira|abriras|abrira|abríramos|abríreis|abriram|abrirei|abrirás|abrirá|abriremos|abrireis|abrirão|abriria|abririas|abriria|abriríamos|abriríeis|abririam)$/g,
  fechar: /^(fecho|fechas|fecha|fechamos|fechais|fecham|fechava|fechavas|fechava|fechávamos|fecháveis|fechavam|fechei|fechaste|fechou|fechamos|fechastes|fecharam|fechara|fecharas|fechara|fecháramos|fecháreis|fecharam|fecharei|fecharás|fechará|fecharemos|fechareis|fecharão|fecharia|fecharias|fecharia|fecharíamos|fecharíeis|fechariam)$/g
};

const SUBJUNCTIVES = {
  ser: /^(seja|sejas|seja|sejamos|sejais|sejam|fosse|fosses|fosse|fôssemos|fôsseis|fossem|for|fores|for|formos|fordes|forem)$/g,
  ter: /^(tenha|tenhas|tenha|tenhamos|tenhais|tenham|tivessese|tivesses|tivesse|tivéssemos|tivésseis|tivessem|tiver|tiveres|tiver|tivermos|tiverdes|tiverem)$/g,
  estar: /^(esteja|estejas|esteja|estejamos|estejais|estejam|estivesse|estivesses|estivesse|estivéssemos|estivésseis|estivessem|estiver|estiveres|estiver|estivermos|estiverdes|estiverem)$/g,
  ir: /^(vá|vás|vá|vamos|vades|vão|fosse|fosses|fosse|fôssemos|fôsseis|fossem|for|fores|for|formos|fordes|forem)$/g,
  ficar: /^(fique|fiques|fique|fiquemos|fiqueis|fiquem|ficasse|ficasses|ficasse|ficássemos|ficásseis|ficassem|ficar|ficares|ficar|ficarmos|ficardes|ficarem)$/g,
  dizer: /^(diga|digas|diga|digamos|digais|digam|dissesse|dissesses|dissesse|disséssemos|dissésseis|dissessem|disser|disseres|disser|dissermos|disserdes|disserem)$/g,
  fazer: /^(faça|faças|faça|façamos|façais|façam|fizesse|fizesses|fizesse|fizéssemos|fizésseis|fizessem|fizer|fizeres|fizer|fizermos|fizerdes|fizerem)$/g,
  haver: /^(haja|hajas|haja|hajamos|hajais|hajam|houvesse|houvesses|houvesse|houvéssemos|houvésseis|houvessem|houver|houveres|houver|houvermos|houverdes|houverem)$/g,
  poder: /^(possa|possas|possa|possamos|possais|possam|pudesse|pudesses|pudesse|pudéssemos|pudésseis|pudessem|puder|puderes|puder|pudermos|puderdes|puderem)$/g,
  ver: /^(veja|vejas|veja|vejamos|vejais|vejam|visse|visses|visse|víssemos|vísseis|vissem|vir|vires|vir|virmos|virdes|virem)$/g,
  dar: /^(dê|dês|dê|demos|deis|deem|desse|desses|desse|déssemos|désseis|dessem|der|deres|der|dermos|derdes|derem)$/g,
  saber: /^(saiba|saibas|saiba|saibamos|saibais|saibam|soubesse|soubesses|soubesse|soubéssemos|soubésseis|soubessem|souber|souberes|souber|soubermos|souberdes|souberem)$/g,
  vir: /^(venha|venhas|venha|venhamos|venhais|venham|viesse|viesses|viesse|viéssemos|viésseis|viessem|vier|vieres|vier|viermos|vierdes|vierem)$/g,
  querer: /^(queira|queiras|queira|queiramos|queirais|queiram|quisesse|quisesses|quisesse|quiséssemos|quisésseis|quisessem|quiser|quiseres|quiser|quisermos|quiserdes|quiserem)$/g,
  parecer: /^(pareça|pareças|pareça|pareçamos|pareçais|pareçam|parecesse|parecesses|parecesse|parecêssemos|parecêsseis|parecessem|parecer|pareceres|parecer|parecermos|parecerdes|parecerem)$/g,
  falar: /^(fale|fales|fale|falemos|faleis|falem|falasse|falasses|falasse|falássemos|falásseis|falassem|falar|falares|falar|falarmos|falardes|falarem)$/g,
  ouvir: /^(ouça|ouças|ouça|ouçamos|ouçais|ouçam|ouvisse|ouvisses|ouvisse|ouvíssemos|ouvísseis|ouvissem|ouvir|ouvires|ouvir|ouvirmos|ouvirdes|ouvirem)$/g,
  achar: /^(ache|aches|ache|achemos|acheis|achem|achasse|achasses|achasse|achássemos|achásseis|achassem|achar|achares|achar|acharmos|achardes|acharem)$/g,
  deixar: /^(deixe|deixes|deixe|deixemos|deixeis|deixem|deixasse|deixasses|deixasse|deixássemos|deixásseis|deixassem|deixar|deixares|deixar|deixarmos|deixardes|deixarem)$/g,
  sair: /^(saia|saias|saia|saiamos|saiais|saiam|saísse|saísses|saísse|saíssemos|saísseis|saíssem|sair|saíres|sair|sairmos|sairdes|saírem)$/g,
  chegar: /^(chegue|chegues|chegue|cheguemos|chegueis|cheguem|chegasse|chegasses|chegasse|chegássemos|chegásseis|chegassem|chegar|chegares|chegar|chegarmos|chegardes|chegarem)$/g,
  passar: /^(passe|passes|passe|passemos|passeis|passem|passasse|passasses|passasse|passássemos|passásseis|passassem|passar|passares|passar|passarmos|passardes|passarem)$/g,
  pedir: /^(peça|peças|peça|peçamos|peçais|peçam|pedisse|pedisses|pedisse|pedíssemos|pedísseis|pedissem|pedir|pedires|pedir|pedirmos|pedirdes|pedirem)$/g,
  ler: /^(leia|leias|leia|leiamos|leiais|leiam|lesse|lesses|lesse|lêssemos|lêsseis|lessem|ler|leres|ler|lermos|lerdes|lerem)$/g,
  acabar: /^(acabe|acabes|acabe|acabemos|acabeis|acabem|acabasse|acabasses|acabasse|acabássemos|acabásseis|acabassem|acabar|acabares|acabar|acabarmos|acabardes|acabarem)$/g,
  acreditar: /^(acredite|acredites|acredite|acreditemos|acrediteis|acreditem|acreditasse|acreditasses|acreditasse|acreditássemos|acreditásseis|acreditassem|acreditar|acreditares|acreditar|acreditarmos|acreditardes|acreditarem)$/g,
  comer: /^(coma|comas|coma|comamos|comais|comam|comesse|comesses|comesse|comêssemos|comêsseis|comessem|comer|comeres|comer|comermos|comerdes|comerem)$/g,
  beber: /^(beba|bebas|beba|bebamos|bebais|bebam|bebesse|bebesses|bebesse|bebêssemos|bebêsseis|bebessem|beber|beberes|beber|bebermos|beberdes|beberem)$/g,
  abrir: /^(abra|abras|abra|abramos|abrais|abram|abrisse|abrisses|abrisse|abríssemos|abrísseis|abrissem|abrir|abrires|abrir|abrirmos|abrirdes|abrirem)$/g,
  fechar: /^(feche|feches|feche|fechemos|fecheis|fechem|fechasse|fechasses|fechasse|fechássemos|fechásseis|fechassem|fechar|fechares|fechar|fecharmos|fechardes|fecharem)$/g
};

const PARTICIPLES = {
  ser: /^sido$/g,
  ter: /^tido$/g,
  estar: /^estado$/g,
  ir: /^ido$/g,
  ficar: /^ficado$/g,
  dizer: /^dito$/g,
  fazer: /^feito$/g,
  haver: /^havido$/g,
  poder: /^podido$/g,
  ver: /^visto$/g,
  dar: /^dado$/g,
  saber: /^sabido$/g,
  vir: /^vindo$/g,
  querer: /^querido$/g,
  parecer: /^parecido$/g,
  falar: /^falado$/g,
  ouvir: /^ouvido$/g,
  achar: /^achado$/g,
  deixar: /^deixado$/g,
  sair: /^saído$/g,
  chegar: /^chegado$/g,
  passar: /^passado$/g,
  pedir: /^pedido$/g,
  ler: /^lido$/g,
  acabar: /^acabado$/g,
  acreditar: /^acreditado$/g,
  comer: /^comido$/g,
  beber: /^bebido$/g,
  abrir: /^aberto$/g,
  fechar: /^fechado$/g
};

const GERUNDS = {
  ser: /^sendo$/g,
  ter: /^tendo$/g,
  estar: /^estando$/g,
  ir: /^indo$/g,
  ficar: /^ficando$/g,
  dizer: /^dizendo$/g,
  fazer: /^fazendo$/g,
  haver: /^havendo$/g,
  poder: /^podendo$/g,
  ver: /^vendo$/g,
  dar: /^dando$/g,
  saber: /^sabendo$/g,
  vir: /^vindo$/g,
  querer: /^querendo$/g,
  parecer: /^parecendo$/g,
  falar: /^falando$/g,
  ouvir: /^ouvindo$/g,
  achar: /^achando$/g,
  deixar: /^deixando$/g,
  sair: /^saindo$/g,
  chegar: /^chegando$/g,
  passar: /^passando$/g,
  pedir: /^pedindo$/g,
  ler: /^lendo$/g,
  acabar: /^acabando$/g,
  acreditar: /^acreditando$/g,
  comer: /^comendo$/g,
  beber: /^bebendo$/g,
  abrir: /^abrindo$/g,
  fechar: /^fechando$/g
};

const match = (word, grammar) => {
  for (let g in grammar) {
    if (grammar.hasOwnProperty(g)) {
      if (word.match(grammar[g])) return true;
    }
  }
  return false;
};

const verbFilter = word => {
  if (match(word, INDICATIVES)) return false;
  if (match(word, SUBJUNCTIVES)) return false;
  if (match(word, INFINITIVES)) return false;
  if (match(word, PARTICIPLES)) return false;
  if (match(word, GERUNDS)) return false;
  return true;
};

const pronounFilter = word => {
  if (match(word, PRONOUNS)) return false;
  return true;
};

const adverbFilter = word => {
  if (match(word, ADVERBS)) return false;
  return true;
};

const adjectiveFilter = word => {
  if (match(word, ADJECTIVES)) return false;
  return true;
};

const prepositionFilter = word => {
  if (match(word, PREPOSITIONS)) return false;
  return true;
};

const conjunctionFilter = word => {
  if (word.match(CONJUNCTIONS)) return false;
  return true;
};

const combinationFilter = word => {
  if (word.match(COMBINATIONS)) return false;
  return true;
};

const numeralFilter = word => {
  if (word.match(NUMERALS)) return false;
  return true;
};

const alphabeticalFilter = word => {
  if (word.match(ALPHABETICALS)) return false;
  return true;
};

const punctuationFilter = word => {
  if (word.match(PUNCTUATION)) return false;
  return true;
};

const filterWords = words => {
  return words.filter(word => {
    return (
      pronounFilter(word) &&
      adverbFilter(word) &&
      adjectiveFilter(word) &&
      conjunctionFilter(word) &&
      prepositionFilter(word) &&
      combinationFilter(word) &&
      numeralFilter(word) &&
      alphabeticalFilter(word) &&
      punctuationFilter(word) &&
      verbFilter(word)
    );
  });
};

const wordFrequency = words => {
  const counter = words.reduce((stats, word) => {
    if (stats.hasOwnProperty(word)) {
      stats[word] = stats[word] + 1;
    } else {
      stats[word] = 1;
    }
    return stats;
  }, {});

  let sortable = [];
  for (let value in counter) {
    sortable.push([value, counter[value]]);
  }

  let result = sortable.sort((a, b) => {
    let diff = b[1] - a[1];
    if (diff === 0) {
      return b[0].length - a[0].length;
    }
    return diff;
  });

  return result;
};

const isInputValid = input => {
  let result = false;
  if (typeof input === 'string' && input.length > 0) {
    result = true;
  } else {
    console.error('Invalid input type');
  }
  return result;
};

const isSizeValid = size => {
  let result = false;
  if (typeof size === 'number' && size > 0 && Number.isInteger(size)) {
    result = true;
  } else {
    console.error('Invalid size type');
  }
  return result;
};

const build = (input, size) => {
  if (!isInputValid(input) || !isSizeValid(size)) return [];
  const text = input.toLowerCase();
  const words = text.replace(NON_ALPHABETICAL, SINGLE_SPACE).replace(WHITESPACE, SINGLE_SPACE).split(SINGLE_SPACE);
  const filteredWords = filterWords(words);
  const sortedWords = wordFrequency(filteredWords);
  const result = sortedWords.length >= size ? sortedWords.splice(0, size) : sortedWords;
  return result.map(word =>  word[0]);
};

module.exports = {
  build,
}
