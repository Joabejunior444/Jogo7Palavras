/* Banco de palavras: para ampliar, basta acrescentar palavras separadas por vírgula. */
const B = (f, m, d) => ({ facil: f.split(','), medio: m.split(','), dificil: d.split(',') });

const WordBank = {
  culturaPop: B(
    "Batman,Mickey,Pikachu,Shrek,Homem-Aranha,Harry Potter,Titanic,Frozen,Mario,Sonic,Chaves,Bob Esponja,Superman,Minecraft,Netflix,Pipoca,Cinema,Barbie,Os Simpsons,Naruto,Goku,TikTok,Palhaço,Youtuber,Novela",
    "Hogwarts,Matrix,Jurassic Park,Coringa,Thanos,Kratos,Zelda,Fortnite,Stranger Things,Sabre de Luz,Oscar,Cosplay,Anime,Spoiler,Podcast,Streaming,Star Wars,Pac-Man,Tetris,Dragon Ball,Rick e Morty,Pantera Negra,Gladiador,Vingadores,Mortal Kombat",
    "Tarantino,Kubrick,Blade Runner,Neon Genesis,Cyberpunk,Bioshock,Metal Gear,Twin Peaks,Black Mirror,Mad Max,Clube da Luta,Pulp Fiction,Ghibli,Miyazaki,Hideo Kojima,Dark Souls,Fallout,Westworld,Cthulhu,Ciberespaço,Nostalgia,Easter Egg,Crossover,Multiverso,Fanfic"
  ),
  animais: B(
    "Cachorro,Gato,Cavalo,Vaca,Porco,Galinha,Pato,Coelho,Leão,Elefante,Girafa,Macaco,Tigre,Urso,Zebra,Pinguim,Tubarão,Baleia,Golfinho,Borboleta,Abelha,Cobra,Sapo,Tartaruga,Papagaio",
    "Canguru,Coala,Camaleão,Flamingo,Tucano,Polvo,Jacaré,Hipopótamo,Rinoceronte,Onça,Lobo,Raposa,Coruja,Águia,Escorpião,Aranha,Formiga,Caranguejo,Foca,Morsa,Camelo,Gorila,Panda,Arara,Beija-flor",
    "Ornitorrinco,Pangolim,Axolote,Tamanduá,Capivara,Lêmure,Narval,Okapi,Quokka,Tatu,Preguiça,Louva-a-deus,Ave-do-paraíso,Cavalo-marinho,Água-viva,Salamandra,Predador,Hibernação,Migração,Camuflagem,Cadeia Alimentar,Extinção,Ecossistema,Metamorfose,Manada"
  ),
  comida: B(
    "Pizza,Hambúrguer,Batata Frita,Sorvete,Chocolate,Bolo,Pão,Arroz,Feijão,Macarrão,Banana,Maçã,Laranja,Melancia,Queijo,Ovo,Leite,Café,Suco,Refrigerante,Coxinha,Pastel,Brigadeiro,Morango,Cachorro-quente",
    "Lasanha,Sushi,Feijoada,Churrasco,Picanha,Moqueca,Acarajé,Tapioca,Pão de Queijo,Açaí,Caipirinha,Pudim,Beijinho,Nhoque,Risoto,Panqueca,Omelete,Salmão,Abacaxi,Maracujá,Mandioca,Paçoca,Esfiha,Kibe,Waffle",
    "Bacalhau,Fondue,Ratatouille,Paella,Guacamole,Tiramisù,Cuscuz,Baião de Dois,Vatapá,Carne de Sol,Sarapatel,Escondidinho,Rapadura,Cauim,Umami,Fermentação,Sommelier,Caramelizar,Flambar,Marinada,Especiarias,Gastronomia,Tempero,Cardápio,Degustação"
  ),
  lugares: B(
    "Praia,Escola,Hospital,Shopping,Parque,Circo,Zoológico,Aeroporto,Mercado,Padaria,Igreja,Banco,Estádio,Biblioteca,Hotel,Fazenda,Floresta,Deserto,Ilha,Montanha,Rio,Cidade,Quintal,Cozinha,Farmácia",
    "Paris,Egito,Japão,Amazônia,Pirâmide,Cristo Redentor,Torre Eiffel,Nova York,Polo Norte,Vulcão,Cachoeira,Caverna,Museu,Castelo,Farol,Pantanal,Fernando de Noronha,Muralha da China,Machu Picchu,Coliseu,Recife,Salvador,Rio de Janeiro,Nordeste,Sertão",
    "Atlântida,Chernobyl,Stonehenge,Saara,Antártida,Patagônia,Himalaia,Pompeia,Vaticano,Alcatraz,Fronteira,Continente,Arquipélago,Península,Estreito,Delta,Oásis,Tundra,Savana,Fiorde,Latitude,Equador,Hemisfério,Trópico,Meridiano"
  ),
  esportes: B(
    "Futebol,Basquete,Vôlei,Natação,Corrida,Ginástica,Boxe,Tênis,Surfe,Skate,Bola,Gol,Goleiro,Juiz,Torcida,Medalha,Campeão,Pênalti,Maratona,Ciclismo,Judô,Capoeira,Pingue-pongue,Bicicleta,Apito",
    "Escanteio,Impedimento,Cesta,Saque,Bloqueio,Cartão Vermelho,Copa do Mundo,Olimpíadas,Fórmula 1,Pódio,Trave,Artilheiro,Drible,Cabeceio,Nocaute,Arbitragem,Golfe,Rúgbi,Handebol,Triatlo,Esgrima,Remo,Vela,Hipismo,Paraolimpíada",
    "Prorrogação,Tiebreak,Ace,Slam Dunk,Hat-trick,Voleio,Contra-ataque,Wimbledon,Tour de France,Decatlo,Salto com Vara,Arremesso de Peso,Curling,Biatlo,Hóquei,Críquete,Parkour,Tática,Zaga,Meia-lua,Doping,Sumô,Jiu-jitsu,Ippon,Aquecimento"
  ),
  cotidiano: B(
    "Cadeira,Mesa,Cama,Sofá,Geladeira,Televisão,Celular,Chave,Relógio,Óculos,Mochila,Chuveiro,Espelho,Escova,Toalha,Sapato,Camiseta,Guarda-chuva,Lápis,Livro,Médico,Professor,Padeiro,Bombeiro,Motorista",
    "Liquidificador,Micro-ondas,Ventilador,Controle Remoto,Carregador,Fone de Ouvido,Cadeado,Lanterna,Martelo,Furadeira,Bússola,Binóculo,Advogado,Engenheiro,Cirurgião,Astronauta,Detetive,Arquiteto,Jornalista,Piloto,Dentista,Cozinheiro,Eletricista,Encanador,Carteiro",
    "Ampulheta,Estetoscópio,Microscópio,Bisturi,Extintor,Cronômetro,Prumo,Alicate,Chave de Fenda,Esquadro,Paquímetro,Multímetro,Notário,Perito,Escrivão,Contador,Cartógrafo,Tradutor,Fisioterapeuta,Arqueólogo,Ceramista,Relojoeiro,Alfaiate,Luthier,Sismógrafo"
  ),
  conhecimento: B(
    "Amor,Medo,Alegria,Tristeza,Raiva,Sonho,Saudade,Amizade,Família,Tempo,Sorte,Segredo,Mentira,Verdade,Festa,Aniversário,Natal,Carnaval,Férias,Dinheiro,Trabalho,Sono,Fome,Silêncio,Barulho",
    "Gravidade,Eclipse,Galáxia,Átomo,Vacina,Vírus,Democracia,Justiça,Política,Filosofia,Inflação,Bitcoin,Algoritmo,Internet,Robô,Satélite,Energia,Poluição,Reciclagem,Evolução,Fóssil,Dinossauro,Constituição,Cidadania,Imigração",
    "Paradoxo,Utopia,Distopia,Hipocrisia,Empatia,Resiliência,Efêmero,Ambiguidade,Burocracia,Monopólio,Termodinâmica,Quântica,Entropia,Fotossíntese,Buraco Negro,Relatividade,Metáfora,Ironia,Dilema,Ceticismo,Altruísmo,Pragmatismo,Anarquia,Idioma,Onomatopeia"
  )
};

const CATEGORIAS = {
  geral: 'Mistura geral', culturaPop: 'Cultura pop', animais: 'Animais', comida: 'Comida',
  lugares: 'Lugares', esportes: 'Esportes', cotidiano: 'Objetos e profissões', conhecimento: 'Ideias e ciência'
};

/* ===== Categorias adicionais (11 novas + 2 temas especiais: Nordeste e Anos 90 e 2000) ===== */
WordBank.musica = B(
  "Violão,Piano,Bateria,Guitarra,Microfone,Cantor,Banda,Show,Festival,Disco,Fone de Ouvido,Refrão,Dançar,Forró,Samba,Sertanejo,Funk,Rock,Pagode,Flauta",
  "Maestro,Orquestra,Saxofone,Violino,Acordeão,Cavaquinho,Pandeiro,Berimbau,Karaokê,Vinil,Playlist,Rapper,DJ,Coral,Serenata,Ópera,Trilha Sonora,Gaita,Sanfona,Trompete",
  "Sinfonia,Partitura,Solfejo,Harmonia,Contrabaixo,Oboé,Clarinete,Afinação,Compasso,Improviso,Cifra,Metrônomo,Diapasão,Timbre,Bossa Nova,Maracatu,Frevo,Tropicália,Arranjo,Crescendo"
);
WordBank.games = B(
  "Videogame,Controle,Jogador,Fase,Chefão,Vida,Moeda,Pontuação,Mario,Pokémon,Minecraft,Fifa,Roblox,Free Fire,Pause,Game Over,Console,Online,Ranking,Personagem",
  "Multiplayer,Speedrun,Skin,Loot,Respawn,Nerf,Streamer,Gamer,Cheat,Mapa,Missão,Arma,Inventário,Servidor,Lag,Avatar,PlayStation,Xbox,Nintendo Switch,Realidade Virtual",
  "Roguelike,Metroidvania,Sandbox,Hitbox,Tutorial,Combo,Checkpoint,Boss Rush,Mod,Patch,Buff,Grindar,Tanque,Healer,Emulador,Retrô,Cartucho,Fliperama,Esports,Matchmaking"
);
WordBank.cinemaTv = B(
  "Filme,Série,Ator,Atriz,Diretor,Pipoca,Ingresso,Sessão,Terror,Comédia,Romance,Desenho,Novela,Telejornal,Legenda,Cena,Câmera,Trailer,Estreia,Sala de Cinema",
  "Roteiro,Dublagem,Documentário,Franquia,Sequência,Elenco,Figurante,Dublê,Bastidores,Efeitos Especiais,Maratona,Temporada,Final Feliz,Vilão,Herói,Plateia,Claquete,Oscar,Curta-metragem,Streaming",
  "Montagem,Fotografia,Plano-sequência,Cinema Mudo,Nouvelle Vague,Neorrealismo,Storyboard,Fade,Cliffhanger,Spin-off,Reboot,Remake,Plot Twist,Blockbuster,Cult,Cineasta,Cenografia,Mise-en-scène,Épico,Anticlímax"
);
WordBank.historia = B(
  "Rei,Rainha,Castelo,Pirata,Guerra,Soldado,Cavaleiro,Faraó,Múmia,Dinossauro,Homem das Cavernas,Descobrimento,Indígena,Escravidão,Império,Imperador,Museu,Bandeira,Moeda,Mapa",
  "Egito Antigo,Roma Antiga,Grécia Antiga,Revolução Francesa,Idade Média,Cruzadas,Renascimento,Napoleão,Dom Pedro,Independência,República,Ditadura,Segunda Guerra,Muro de Berlim,Guerra Fria,Vikings,Astecas,Maias,Incas,Pirâmide",
  "Feudalismo,Iluminismo,Inquisição,Absolutismo,Mercantilismo,Abolição,Inconfidência,Cangaço,Guerra de Canudos,Revolução Industrial,Bizâncio,Mesopotâmia,Cartago,Hieróglifo,Papiro,Manuscrito,Colonização,Tratado,Dinastia,Arqueologia"
);
WordBank.brasil = B(
  "Carnaval,Samba,Futebol,Feijoada,Café,Praia,Favela,Bandeira,Caipirinha,Brigadeiro,Festa Junina,Quadrilha,Fogueira,Pipa,Chinelo,Guaraná,Farofa,Pão de Queijo,Amazônia,Onça",
  "Saci,Curupira,Boitatá,Iara,Mula sem Cabeça,Lobisomem,Cuca,Capoeira,Berimbau,Cordel,Repente,Bumba Meu Boi,Maracatu,Frevo,Sertão,Cerrado,Pantanal,Caatinga,Pelourinho,Cristo Redentor",
  "Folclore,Quilombo,Bandeirante,Coronel,Jangada,Seringueiro,Cangaceiro,Boto Cor-de-rosa,Caiçara,Ribeirinho,Vaqueiro,Tropeiro,Congada,Jongo,Reisado,Ciranda,Cavalhada,Círio de Nazaré,Parintins,Lençóis Maranhenses"
);
WordBank.corpo = B(
  "Cabeça,Olho,Nariz,Boca,Orelha,Mão,Pé,Dedo,Perna,Braço,Barriga,Coração,Dente,Língua,Cabelo,Unha,Joelho,Costas,Pescoço,Cérebro",
  "Pulmão,Estômago,Fígado,Rim,Intestino,Osso,Músculo,Sangue,Pele,Esqueleto,Coluna,Cotovelo,Tornozelo,Ombro,Cílios,Sobrancelha,Espirro,Soluço,Bocejo,Arrepio",
  "Fêmur,Cóclea,Retina,Pâncreas,Diafragma,Neurônio,Artéria,Tendão,Cartilagem,Vértebra,Tireoide,Glóbulo,Hemoglobina,Sinapse,Reflexo,Metabolismo,Imunidade,Anticorpo,Hormônio,Digestão"
);
WordBank.tecnologia = B(
  "Celular,Computador,Internet,Wi-Fi,Senha,Site,Aplicativo,Mensagem,Câmera,Tela,Teclado,Mouse,Bateria,Carregador,Notebook,Vídeo,Foto,Rede Social,Email,Robô",
  "Algoritmo,Inteligência Artificial,Nuvem,Hacker,Vírus,Antivírus,Download,Emoji,Selfie,Drone,Bluetooth,Impressora 3D,Realidade Aumentada,Streaming,Criptografia,Backup,Servidor,Pixel,Login,QR Code",
  "Blockchain,Firewall,Roteador,Processador,Latência,Protocolo,Big Data,Machine Learning,Código Aberto,Domínio,Hospedagem,Compilador,Banco de Dados,Interface,Biometria,Deepfake,Metaverso,Quântico,Firmware,Cibersegurança"
);
WordBank.natureza = B(
  "Árvore,Flor,Folha,Chuva,Sol,Lua,Estrela,Vento,Nuvem,Rio,Mar,Areia,Pedra,Fogo,Neve,Arco-íris,Grama,Semente,Trovão,Sombra",
  "Vulcão,Terremoto,Tsunami,Furacão,Tornado,Geleira,Recife de Coral,Manguezal,Cachoeira,Floresta,Orvalho,Neblina,Relâmpago,Eclipse,Estação do Ano,Maré,Correnteza,Duna,Pântano,Cratera",
  "Erosão,Sedimento,Placa Tectônica,Aquífero,Bioma,Estalactite,Ciclo da Água,Efeito Estufa,Camada de Ozônio,Fotossíntese,Polinização,Germinação,Ressaca,Solstício,Equinócio,Aurora Boreal,Monção,El Niño,Mata Atlântica,Desmatamento"
);
WordBank.mitologia = B(
  "Dragão,Fada,Bruxa,Gigante,Sereia,Unicórnio,Fantasma,Vampiro,Zumbi,Duende,Anjo,Diabo,Mágico,Varinha,Feitiço,Castelo,Princesa,Herói,Monstro,Lobisomem",
  "Zeus,Poseidon,Hércules,Medusa,Minotauro,Pégaso,Fênix,Thor,Odin,Anúbis,Cérbero,Centauro,Hades,Atena,Apolo,Cavalo de Troia,Olimpo,Ciclope,Hidra,Górgona",
  "Odisseia,Ilíada,Prometeu,Pandora,Ícaro,Perseu,Teseu,Ragnarök,Valhalla,Yggdrasil,Kraken,Golem,Banshee,Quimera,Esfinge,Titã,Ambrosia,Labirinto,Oráculo,Panteão"
);
WordBank.transporte = B(
  "Carro,Ônibus,Moto,Bicicleta,Avião,Trem,Barco,Navio,Caminhão,Táxi,Metrô,Helicóptero,Patinete,Skate,Ambulância,Semáforo,Estrada,Ponte,Estação,Ponto de Ônibus",
  "Submarino,Foguete,Balão,Teleférico,Bonde,Balsa,Jangada,Caminhonete,Trator,Guindaste,Aeroporto,Rodoviária,Pedágio,Capacete,Cinto de Segurança,Motorista,Piloto,Passageiro,Bagagem,Passagem",
  "Dirigível,Hovercraft,Monotrilho,Veículo Elétrico,Catamarã,Hidroavião,Planador,Locomotiva,Vagão,Trólebus,Túnel,Viaduto,Rotatória,Câmbio,Embreagem,Turbina,Fuselagem,Aterrissagem,Decolagem,Escala"
);
WordBank.espaco = B(
  "Lua,Sol,Estrela,Planeta,Terra,Marte,Foguete,Astronauta,Alienígena,Nave,Cometa,Satélite,Telescópio,Galáxia,Universo,Órbita,Céu,Constelação,Meteoro,Saturno",
  "Júpiter,Netuno,Plutão,Via Láctea,Eclipse,Estação Espacial,Buraco Negro,Supernova,Asteroide,Gravidade,Ausência de Peso,Traje Espacial,Big Bang,Vênus,Mercúrio,Urano,Nebulosa,Lançamento,Sonda,Lunar",
  "Exoplaneta,Quasar,Pulsar,Anã Branca,Ano-luz,Cinturão de Kuiper,Matéria Escura,Horizonte de Eventos,Singularidade,Radiotelescópio,Cosmologia,Paralaxe,Apogeu,Perigeu,Heliosfera,Magnetosfera,Órbita Geoestacionária,Astrofísica,Buraco de Minhoca,Expansão do Universo"
);
WordBank.nordeste = B(
  "Forró,Sanfona,Cuscuz,Tapioca,Coco,Caju,Rede,Jangada,Praia,Sol,Farinha,Rapadura,Macaxeira,Carne de Sol,Baião,Vaqueiro,Sertão,Chapéu de Couro,São João,Quadrilha",
  "Frevo,Maracatu,Bumba Meu Boi,Cordel,Xaxado,Cangaço,Lampião,Maria Bonita,Olinda,Recife,Porto de Galinhas,Fernando de Noronha,Jericoacoara,Lençóis Maranhenses,Pelourinho,Acarajé,Vatapá,Moqueca,Mungunzá,Bolo de Rolo",
  "Caatinga,Mandacaru,Xique-xique,Carcará,Umbuzada,Baião de Dois,Buchada,Sarapatel,Galinha de Cabidela,Pisadinha,Repente,Emboladores,Coco de Roda,Ciranda,Cavalo-marinho,Mamulengo,Caboclinho,Chico Science,Ariano Suassuna,Patativa do Assaré"
);
WordBank.anos90 = B(
  "Tamagotchi,Discman,Walkman,Fita Cassete,Videocassete,Orkut,MSN,Game Boy,Furby,Pager,Telefone Fixo,Orelhão,Disquete,Cartão Telefônico,CD,Locadora,Tazo,Pião,Bambolê,Bola de Gude",
  "Chaves,Rebelde,Malhação,Power Rangers,Cavaleiros do Zodíaco,Pokémon,Digimon,Yu-Gi-Oh,Beyblade,Sítio do Picapau Amarelo,Xuxa,TV Colosso,Carrossel,Chiquititas,Mamonas Assassinas,Backstreet Boys,Spice Girls,Nokia Tijolão,Windows 95,Titanic",
  "Fliperama,Atari,Mega Drive,Super Nintendo,Blockbuster,Lan House,Bug do Milênio,Napster,Palm Pilot,Modem Discado,Winamp,ICQ,Fotolog,Polaroid,Gameshark,Cabine de Foto,Enciclopédia Barsa,Agenda de Papel,Revista Recreio,mIRC"
);
Object.assign(CATEGORIAS, {
  musica: 'Música', games: 'Games', cinemaTv: 'Cinema e TV', historia: 'História', brasil: 'Brasil e folclore',
  corpo: 'Corpo humano', tecnologia: 'Tecnologia', natureza: 'Natureza e clima', mitologia: 'Mitologia e lendas',
  transporte: 'Transportes', espaco: 'Espaço', nordeste: 'Nordeste', anos90: 'Anos 90 e 2000'
});
const TEMAS_ESPECIAIS = ['nordeste', 'anos90'];
