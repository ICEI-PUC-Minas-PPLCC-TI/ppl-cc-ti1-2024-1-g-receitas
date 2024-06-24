// Array de objetos representando as receitas
var receitas = [
    {
        id: "1",
        titulo: "Carne com batatas",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/carne com batatas.png",
        ingredientes: [
            {
                "quantidade": "4",
                "ingrediente": "batatas"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "alecrim"
            },
            {
                "quantidade": "400g",
                "ingrediente": "filé mignon"
            },

        ],
        modo_preparo: [
            "1- Corte as batatas em tiras finas, sem chegar ao final da batata, de forma que as lâminas se mantenham presas.",
            "2- Tempere com azeite, sal e pimenta.",
            "3- Coloque as batatas na assadeira de cima da Air Fryer e utilize a função batatas, que irá contar 20 minutos.",
            "4- Pincele azeite nos medalhões e tempere com sal e pimenta dos dois lados.",
            "5- Quando estiver faltando 10 minutos para o cozimento das batatas, adicione a carne."
        ]
    },

    {
        id: "2",
        titulo: "Torta Holandesa",
        tempo: "6h30",
        rendimento: "8",
        dificuldade: "média",
        imagem: "Img/tortaholandesa.png",
        ingredientes: [
            {
                "quantidade": "1 pacote de",
                "ingrediente": "biscoito maizena"
            },
            {
                "quantidade": "70g de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "2 latas de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "2",
                "ingrediente": "gemas"
            },
            {
                "quantidade": "1 e 1/2 xícaras de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "5ml",
                "ingrediente": "essência de baunilha"
            },
            {
                "quantidade": "300ml",
                "ingrediente": "creme de leite"
            },
            {
                "quantidade": "150g",
                "ingrediente": "chocolate"
            }
        ],
        modo_preparo: [
            "1- Em um processador bata os biscoitos maisena.",
            "2- Junte a manteiga derretida e bata mais um pouco.",
            "3- Despeje na forma e pressione bem com uma espátula. Reserve na geladeira.",
            "4- Coloque na panela o leite condensado, leite, gemas e a baunilha.",
            "5- Misture bem e leve ao fogo baixo, mexendo sem parar até engrossar.",
            "6- Quando engrossar, retire do fogo e deixe esfriar.",
            "7- Em uma batedeira coloque o creme de leite gelado e bata até firmar.",
            "8- Junte com o creme já frio.",
            "9- Despeje na forma, cobrindo toda a massa.",
            "10- Leve à geladeira por cerca de 6 horas.",
            "11- Derreta o chocolate em banho-maria ou em um micro-ondas de 30 em 30 segundos.",
            "12- Desenforme a torta, e despeje o chocolate por cima.",
            "13- Deixe na geladeira até a hora de servir."
        ]
    },

    {
        id: "3",
        titulo: "Bacalhau com Batatas e Natas",
        tempo: "30min",
        rendimento: "8",
        dificuldade: "média",
        imagem: "Img/bacalhaucombatatas.png",
        ingredientes: [
            {
                "quantidade": "400g de",
                "ingrediente": "bacalhau"
            },
            {
                "quantidade": "4",
                "ingrediente": "batatas"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1 folha de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "noz moscada"
            },
            {
                "quantidade": "400g de",
                "ingrediente": "creme de leite"
            },
            {
                "quantidade": "150g",
                "ingrediente": "queijo muçarela"
            },

        ],
        modo_preparo: [
            "1- Corte a batata em cubos.",
            "2- Coloque nas assadeiras da Air Fryer e pincele azeite.",
            "3- Utilize a função Batatas.",
            "4- Cozinhe o bacalhau em água fervente com uma folha de louro.",
            "5- Esquente um fio de azeite na frigideira e refogue a cebola.",
            "6- Adicione o alho.",
            "7- Junte o bacalhau já cozido.",
            "8- Tempere com sal, pimenta e noz moscada e misture bem.",
            "9- Adicione metade das batatas e metade do creme de leite.",
            "10- Misture bem.",
            "11- Despeje em uma travessa.",
            "12- Adicione o restante das batatas e do creme de leite.",
            "13- Finalize com queijo ralado.",
            "14- Leve para a assadeira da Air Fryer e programe a função Legumes."
        ]
    },

    {
        id: "4",
        titulo: "Brigadeiro de Colher",
        tempo: "15min",
        rendimento: "8",
        dificuldade: "fácil",
        imagem: "Img/brigadeirodecolher.png",
        ingredientes: [
            {
                "quantidade": "1 lata de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "3 colheres de sopa de",
                "ingrediente": "chocolate em pó"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "manteiga"
            },

        ],
        modo_preparo: [
            "1- Coloque todos os ingredientes em uma tigela grande e alta, misture bem e leve ao Micro-ondas por 3 minutos.",
            "2- Retire do Micro-ondas, misture por 1 minuto com uma espátula, leve novamente ao micro-ondas por mais 3 minutos.",
            "3- Retire do Micro-ondas, misture por mais 1 minuto, aguarde amornar ou esfriar e sirva como preferir."
        ]
    },

    {
        id: "5",
        titulo: "Peixe com Vegetais",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/peixe com vegetais.png",
        ingredientes: [
            {
                "quantidade": "4 filés de",
                "ingrediente": "peixe"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "mini tomates"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "brócolis"
            },
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "couve-flor"
            },
            {
                "quantidade": "",
                "ingrediente": "suco de 1/2 limão"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },

        ],
        modo_preparo: [
            "1- Coloque os vegetais, azeite, sal e pimenta em um refratário e misture bem. Espalhe no fundo da travessa, acomode os filés de peixe por cima e tempere-os com o suco de limão, azeite, sal e pimenta.",
            "2- Leve ao Micro-ondas por 8 minutos. Verifique se está tudo bem cozido, caso contrário programe por mais 2 a 3 minutos.",
            "3- Sirva em seguida."
        ]
    },

    {
        id: "6",
        titulo: "Tiramisù",
        tempo: "2h",
        rendimento: "6",
        dificuldade: "média",
        imagem: "Img/tiramisu.png",
        ingredientes: [
            {
                "quantidade": "100ml de",
                "ingrediente": "café"
            },
            {
                "quantidade": "150g de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "250g de",
                "ingrediente": "queijo mascarpone"
            },
            {
                "quantidade": "150g de",
                "ingrediente": "biscoito champanhe"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "cacau em pó"
            },
            {
                "quantidade": "3",
                "ingrediente": "ovos"
            },

        ],
        modo_preparo: [
            "1- Prepare um café forte e concentrado usando uma cafeteira.",
            "2- Bata as gemas na batedeira, usando o batedor de arames com metade do açúcar em velocidade alta, até a mistura ficar esbranquiçada.",
            "3- Adicione o queijo mascarpone e bata em velocidade média. Reserve esse creme.",
            "4- Bata as claras em neve e quando atingir a consistência firme, adicione o restante do açúcar. Deixe bater por 1 minuto. ",
            "5- Junte o creme com mascarpone e mexa de baixo para cima de forma delicada até incorporar as duas misturas.",
            "6- Para a montagem, molhe o biscoito dos dois lados no café e coloque na travessa, montando a primeira camada com biscoitos molhados no café.",
            "7- Cubra com o creme espalhando bem e finalize com o cacau ou chocolate em pó polvilhado. Repita as camadas até finalizar os ingredientes. A última camada deve ser o creme.",
            "8- Leve para gelar por 2 horas e na hora de servir polvilhe cacau ou chocolate por cima."
        ]
    },

    {
        id: "7",
        titulo: "Waffles de Banana e Aveia",
        tempo: "15min",
        rendimento: "2",
        dificuldade: "fácil",
        imagem: "Img/wafflesbananaaveia.png",
        ingredientes: [
            {
                "quantidade": "1",
                "ingrediente": "banana"
            },
            {
                "quantidade": "1",
                "ingrediente": "ovo"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "açúcar mascavo"
            },
            {
                "quantidade": "",
                "ingrediente": "canela"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "aveia"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "fermento em pó"
            },

        ],
        modo_preparo: [
            "1- Coloque todos os ingredientes, exceto o fermento, no liquidificador e bata por 1 minuto.",
            "2- Adicione o fermento e bata rapidamente para misturar.",
            "3- Despeje um pouco dessa massa nas chapas de um aparelho de waffles já pré-aquecido, feche e aguarde ficar dourado.",
            "4- Repita o processo com o restante da massa até acabar."
        ]
    },

    {
        id: "8",
        titulo: "Torta de Limão",
        tempo: "30min",
        rendimento: "6",
        dificuldade: "média",
        imagem: "Img/tortalimao.png",
        ingredientes: [
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "6 colheres de sopa de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "2",
                "ingrediente": "gemas de ovos"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "água"
            },
            {
                "quantidade": "",
                "ingrediente": "raspas de limão"
            },
            {
                "quantidade": "240ml de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "",
                "ingrediente": "suco de 2 limões"
            },
            {
                "quantidade": "2",
                "ingrediente": "claras"
            },


        ],
        modo_preparo: [
            "1- Em uma tigela misture o trigo, açúcar, manteiga, ovos, água e raspas de limão.",
            "2- Misture tudo muito bem até obter uma massa homogênea.",
            "3- Coloque a massa em uma assadeira e pressione até cobrir fundo e laterais.",
            "4- Leve para a Air Fryer a 180ºC por 5 minutos.",
            "5- Enquanto isso, misture o leite condensado com o suco de limão.",
            "6- Espere a massa esfriar e despeje o leite condensado com limão, espalhando bem.",
            "7- Comece a bater as claras em neve e quando começar a firmar, junte o açúcar.",
            "8- Quando estiver bem firme, desligue e coloque o merengue por cima da torta.",
            "9- Coloque as raspas de limão e leve para a Air Fryer por 5 minutos apenas para dourar o merengue."
        ]
    },

    {
        id: "9",
        titulo: "Tilápia com Alcaparras",
        tempo: "15min",
        rendimento: "2",
        dificuldade: "média",
        imagem: "Img/tilapiacalcaparra.png",
        ingredientes: [
            {
                "quantidade": "2 filés de",
                "ingrediente": "tilápia"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "1/3 de xícara de",
                "ingrediente": "alcaparras"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1",
                "ingrediente": "limão"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "cheiro verde"
            },
            {
                "quantidade": "",
                "ingrediente": "azeitonas pretas"
            },


        ],
        modo_preparo: [
            "1- Na travessa coloque o peixe, tempere com o limão.",
            "2- Junte as alcaparras, a cebola, rodelas de limão e as azeitonas.",
            "3- Regue com um fio de azeite, tempere com sal e pimenta.",
            "4- Leve para o micro-ondas por 8 minutos."
        ]
    },

    {
        id: "10",
        titulo: "Parmegiana",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "média",
        imagem: "Img/parmegiana.png",
        ingredientes: [
            {
                "quantidade": "4",
                "ingrediente": "bifes"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "farinha de rosca"
            },
            {
                "quantidade": "1/2 de xícara de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "2",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "água"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "molho de tomate"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "queijo muçarela"
            },
            {
                "quantidade": "",
                "ingrediente": "orégano"
            },


        ],
        modo_preparo: [
            "1- Tempere a farinha de rosca com sal e pimenta e regue com um fio de azeite.",
            "2- Leve para a Air Fryer por 8 minutos. Reserve num prato.",
            "3- Em outro prato coloque os ovos e a água e em um terceiro prato, o trigo.",
            "4- Tempere os bifes com sal e pimenta.",
            "5- Passe os bifes na farinha de trigo, em seguida nos ovos e por fim, na farinha de rosca.",
            "6- Coloque os bifes nas assadeiras da Air Fryer e leve a 200ºC por 10 minutos.",
            "7- Quando tiver passado 5 minutos, troque as assadeira de lugar para que os bifes fiquem dourados por igual.",
            "8- Adicione o molho de tomate, o queijo e o orégano por cima de cada bife e volte para a Air Fryer a 180ºC por 5 minutos."
        ]
    },

    {
        id: "11",
        titulo: "Feijão Tropeiro",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "média",
        imagem: "Img/feijaotropeiro.png",
        ingredientes: [
            {
                "quantidade": "50g de",
                "ingrediente": "bacon"
            },
            {
                "quantidade": "2 e 1/2 xicaras de",
                "ingrediente": "feijão"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "calabresa"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "carne seca"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "farinha de mandioca"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "1 folha de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "1",
                "ingrediente": "tomate"
            },
            {
                "quantidade": "",
                "ingrediente": "cheiro verde"
            },


        ],
        modo_preparo: [
            "1- Na Panela de Pressão coloque o feijão, o louro e cubra com água.",
            "2- Tampe, coloque a válvula em pressurizar e programe para contar 15 minutos.",
            "3- Quando terminar, coloque a válvula em liberar pressão, abra com cuidado, escorra a água e reserve o feijão.",
            "4- Na mesma panela coloque um fio de azeite e junte o bacon em cubinhos.",
            "5- Coloque também a linguiça e a carne, em cubos.",
            "6- Quando as carnes estiverem bem refogadas, junte a cebola.",
            "7- Quando a cebola estiver transparente, junte o alho.",
            "8- Coloque o feijão cozido e adicione a farinha aos poucos.",
            "9- Quando terminar de misturar tudo, adicione o tomate picado e tempere com sal, pimenta e cheiro verde."
        ]
    },

    {
        id: "12",
        titulo: "Farofa",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/farofa.png",
        ingredientes: [
            {
                "quantidade": "1/2",
                "ingrediente": "calabresa"
            },
            {
                "quantidade": "50g de",
                "ingrediente": "bacon"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "1",
                "ingrediente": "cenoura"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "farinha de mandioca"
            },
            {
                "quantidade": "",
                "ingrediente": "cheiro verde"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },


        ],
        modo_preparo: [
            "1- Corte o bacon e a linguiça calabresa em cubos pequenos.",
            "2- Rale a cenoura.",
            "3- Pique a cebola e o alho finamente.",
            "4- Na travessa coloque um fio de azeite e coloque o bacon e a linguiça calabresa. Leve para a Air Fryer a 180ºC por 2 minutos.",
            "5- Abra o cesto e adicione a cebola e a cenoura, misture bem. Volte para a Air fryer por 2 minutos.",
            "6- Adicione a farinha de mandioca e volte para a Air fryer por 1 minuto.",
            "7- Coloque a manteiga e o cheiro, tempere com sal e pimenta, misture tudo muito bem e está pronta."
        ]
    },

    {
        id: "13",
        titulo: "Bacalhau",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/bacalhauz.png",
        ingredientes: [
            {
                "quantidade": "",
                "ingrediente": "bacalhau"
            },
            {
                "quantidade": "",
                "ingrediente": "brócolis"
            },
            {
                "quantidade": "",
                "ingrediente": "tomate cereja"
            },
            {
                "quantidade": "",
                "ingrediente": "mini batatas"
            },
            {
                "quantidade": "",
                "ingrediente": "mini cebolas"
            },
            {
                "quantidade": "",
                "ingrediente": "azeitonas pretas"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "amêndoas em lâminas"
            },
            {
                "quantidade": "",
                "ingrediente": "alho frito"
            },


        ],
        modo_preparo: [
            "1- Na panela elétrica coloque uma boa camada de azeite.",
            "2- Coloque o bacalhau, o brócolis, os tomates, as batatas, as cebolas e as azeitonas.",
            "3- Tempere com sal e pimenta.",
            "4- Regue com mais azeite por cima. A ideia é preparar esse bacalhau à lagareiro, forma típica portuguesa usando bastante azeite.",
            "5- Tampe a panela e deixe cozinhar por 5 minutos em temperatura média.",
            "6- Finalize com alho frito."
        ]
    },

    {
        id: "14",
        titulo: "Ovo de Páscoa com Pudim de Leite",
        tempo: "15min",
        rendimento: "6",
        dificuldade: "fácil",
        imagem: "Img/ovodepascoa.png",
        ingredientes: [
            {
                "quantidade": "2",
                "ingrediente": "casca de ovo de chocolate"
            },
            {
                "quantidade": "1 lata de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "1 caixa",
                "ingrediente": "creme de leite"
            },
            {
                "quantidade": "",
                "ingrediente": "mini batatas"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "baunilha"
            },
            {
                "quantidade": "1 caixa de",
                "ingrediente": "gelatina incolor sem sabor"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "água"
            },

        ],
        modo_preparo: [
            "1- Hidrate a gelatina conforme as instruções da embalagem, depois aqueça por 15 segundos no micro-ondas para derreter.",
            "2- Adicione o leite condensado, creme de leite, leite, baunilha e a gelatina no liquidificador e bata por 1 minuto em velocidade alta.",
            "3- Transfira a mistura batida para dentro das cascas de ovos de chocolate, cubra e leve para gelar e firmar, de 2 a 4 horas.",
            "4- Prepare a calda derretendo o açúcar em uma panela em fogo médio, quando estiver caramelado abaixe o fogo e adicione a água. Deixe ferver até dissolver tudo e virar um caramelo mais líquido, reserve.",
            "5- Quando o ovo estiver firme espalhe a calda por cima e estará pronto."
        ]
    },

    {
        id: "15",
        titulo: "Bolo Pão de Mel",
        tempo: "30min",
        rendimento: "12",
        dificuldade: "fácil",
        imagem: "Img/bolopaodemel.png",
        ingredientes: [
            {
                "quantidade": "4",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "óleo"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "mel"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "açúcar mascavo"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "5 colheres de sopa de",
                "ingrediente": "cacau em pó"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "canela em pó"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "cravo em pó"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "fermento em pó"
            },

            {
                "quantidade": "1 xícara de",
                "ingrediente": "doce de leite"
            },

            {
                "quantidade": "200g de",
                "ingrediente": "chocolate"
            },


        ],
        modo_preparo: [
            "1- Adicione o ovos, óleo, leite, mel e açúcar na tigela da batedeira e bata em velocidade alta por 2 minutos, usando o batedor de arames.",
            "2- Adicione a farinha, cacau, canela e cravo peneirados e bata por mais alguns segundos, até ficar homogêneo. Acrescente o fermento e bata rapidamente apenas para misturar.",
            "3- Transfira a massa para uma assadeira untada e enfarinhada e leve para assar no forno já pré-aquecido em 180º. Espete um palito no centro do bolo para saber se já está assado, caso o palito saia com massa crua o bolo precisa assar por mais tempo, quando sair limpo estará assado.",
            "4- Corte o bolo ao meio e recheie com o doce de leite.",
            "5- Derreta o chocolate em banho maria ou no micro-ondas, de 30 em 30 segundos, mexendo sempre e depois espalhe por cima do bolo."
        ]
    },

    {
        id: "16",
        titulo: "Filé de Peixe com Parmesão e Ervas",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/filedepeixe.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "filé de peixe"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "parmesão"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "tomilho"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "salsinha"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "alecrim"
            },
            {
                "quantidade": "",
                "ingrediente": "limão"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },

        ],
        modo_preparo: [
            "1- Tempere os filés com sal, pimenta e azeite a gosto e reserve.",
            "2- Em um prato fundo misture o parmesão ralado, as ervas e um pouco de pimenta.",
            "3- Passe cada filé de peixe, apenas de um dos lados na mistura de queijo e ervas, depois leve para a Air Fryer já pré-aquecida em 200º por 8 minutos.",
            "4- Regue com mais azeite na hora de servir."
        ]
    },

    {
        id: "17",
        titulo: "Bacalhau à Brás",
        tempo: "15min",
        rendimento: "6",
        dificuldade: "fácil",
        imagem: "Img/bacalhaubraz.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "bacalhau"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "batata palha"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "azeitonas pretas"
            },
            {
                "quantidade": "5",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },

        ],
        modo_preparo: [
            "1- Refogue a cebola e o alho picados juntamente com o azeite, depois adicione o bacalhau e refogue mais um pouco, em temperatura alta.",
            "2- Abaixe para uma temperatura média e adicione o ovos ligeiramente batidos, um pouco de sal e pimenta, e vá mexendo até cozinharem.",
            "3- Acrescente a batata palha e continue misturando.",
            "4- Sirva em seguida regado de mais azeite e decorado com azeitonas e salsinha picada."
        ]
    },

    {
        id: "18",
        titulo: "Torta",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/tortaa.png",
        ingredientes: [
            {
                "quantidade": "2",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "fermento"
            },
            {
                "quantidade": "3 xícaras de",
                "ingrediente": "frango desfiado"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "catupiry"
            },
            {
                "quantidade": "",
                "ingrediente": "páprica picante"
            },
            {
                "quantidade": "",
                "ingrediente": "orégano"
            },
            {
                "quantidade": "50g de",
                "ingrediente": "queijo"
            },

        ],
        modo_preparo: [
            "1- Misture o frango já cozido e desfiado com o catupiry e tempere com sal e páprica.",
            "2- Reserve.",
            "3- No liquidificador coloque os ovos, o leite, o azeite e um pouco de sal.",
            "4- Bata até virar uma mistura homogênea.",
            "5- Adicione a farinha de trigo e bata novamente.",
            "6- Despeje a massa em uma tigela e misture o fermento.",
            "7- Coloque metade da massa em uma assadeira untada e enfarinhada.",
            "8- Adicione o recheio de frango.",
            "9- Coloque mais um pouco de catupiry e cubra com o restante da massa.",
            "10- Salpique queijo ralado e orégano.",
            "11- Leve para o micro-ondas em potência máxima por 12 minutos."
        ]
    },

    {
        id: "19",
        titulo: "Feijoada Vegetariana",
        tempo: "45min",
        rendimento: "6",
        dificuldade: "média",
        imagem: "Img/feijoadavegetariana.png",
        ingredientes: [
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "feijão"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "tofu"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "molho de tomate"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "cogumelos"
            },
            {
                "quantidade": "",
                "ingrediente": "páprica picante"
            },
            {
                "quantidade": "1",
                "ingrediente": "abobrinha"
            },
            {
                "quantidade": "1",
                "ingrediente": "cenoura"
            },
            {
                "quantidade": "1",
                "ingrediente": "berinjela"
            },
            {
                "quantidade": "2 folhas de",
                "ingrediente": "louro"
            },

        ],
        modo_preparo: [
            "1- Usando a função refogar da panela de pressão, esquente um fio de azeite e doure metade do tofu em cubos.",
            "2- Junte metade da cebola picada.",
            "3- Adicione o feijão deixado de molho por 12 horas.",
            "4- Coloque as folhas de louro, cubra com água.",
            "5- Tampe a panela, coloque a válvula em pressurizar e programe a função Feijão.",
            "6- Quando o bip apitar, coloque a válvula em liberar pressão.",
            "7- Abra a panela e reserve o feijão.",
            "8- Esquente um fio de azeite e usando a função Refogar, doure a outra metade do tofu.",
            "9- Junte a cebola, os cogumelos, a abobrinha, a cenoura e a berinjela.",
            "10- Adicione o molho de tomate, misture.",
            "11- Junte o feijão cozido.",
            "12- Tempere com sal, pimenta, páprica picante e deixe cozinhar por 5 minutos.",
            "13- Sirva com vinagrete e farofa."
        ]
    },

    {
        id: "20",
        titulo: "Espetos",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "média",
        imagem: "Img/espetos.png",
        ingredientes: [
            {
                "quantidade": "400g de",
                "ingrediente": "carne"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "bacon"
            },
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "vinho tinto"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1",
                "ingrediente": "cenoura"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "cebola roxa"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "berinjela"
            },
            {
                "quantidade": "1",
                "ingrediente": "abobrinha"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },

        ],
        modo_preparo: [
            "1- Corte a carne em cubos, coloque em uma tigela e tempere com sal, pimenta, adicione os dentes de alho e cubra com o vinho.",
            "2- Deixe marinar por 30 minutos.",
            "3- Faça os espetos colocando um cubo de carne, pétalas de cebola e cubos de bacon.",
            "4- Repita até finalizar os espetos.",
            "5- Reserve.",
            "6- Corte a cenoura, a abobrinha e a berinjela em rodelas e em seguida, ao meio.",
            "7- Faça os espetos colocando cenoura, abobrinha, berinjela e pétalas de cebola roxa.",
            "8- Repita até finalizar os espetos.",
            "9- Reserve",
            "10- Coloque os espetos de legumes no cesto da Airfryer e programe para contar 15 minutos a 180°C.",
            "11- Retire os espetos de legumes, reserve e coloque os espetos de carne.",
            "12- Programe para contar 15 minutos a 180°C"
        ]
    },

    {
        id: "21",
        titulo: "Churrasco",
        tempo: "15min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/churrasco.png",
        ingredientes: [
            {
                "quantidade": "4 filés de",
                "ingrediente": "picanha"
            },
            {
                "quantidade": "",
                "ingrediente": "linguiça calabresa"
            },
            {
                "quantidade": "",
                "ingrediente": "coxinhas de frango"
            },
            {
                "quantidade": "",
                "ingrediente": "brócolis"
            },
            {
                "quantidade": "",
                "ingrediente": "tomates"
            },
            {
                "quantidade": "",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "pimenta"
            },

        ],
        modo_preparo: [
            "1- Unte a panela elétrica com manteiga.",
            "2- Coloque a picanha, frango, linguiça e legumes na panela bem quente.",
            "3- Tempere com sal e pimenta.",
            "4- Se preferir, pode regar tudo com um fio de azeite enquanto prepara.",
            "5- Quando dourar embaixo, vire as carnes e legumes para dourar do outro lado.",
            "6- Se preferir carne ao ponto, utilize a tampa e deixe cozinhar por mais tempo até atingir seu ponto preferido.",
            "7- Sirva com farofa e vinagrete."
        ]
    },

    {
        id: "22",
        titulo: "Picanha ao Alho",
        tempo: "15min",
        rendimento: "8",
        dificuldade: "fácil",
        imagem: "Img/picanhaalho.png",
        ingredientes: [
            {
                "quantidade": "1 peça de",
                "ingrediente": "picanha"
            },
            {
                "quantidade": "10 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "salsinha desidratada"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },

        ],
        modo_preparo: [
            "1- Em uma tigela misture o alho, manteiga, salsinha e sal até formar uma pasta.",
            "2- Corte a picanha em fatias grossas com cerca de 1,5cm de espessura.",
            "3- Pré-aqueça a Air Fryer em 200º por 5 minutos.",
            "4- Pincele a pasta de alho em cada fatia de carne e coloque na Air Fryer já pré-aquecida.",
            "5- Programe em 200º por 10 minutos, passado esse tempo verifique se está no ponto desejado, caso contrário vire as carnes e deixe por mais tempo até atingir o ponto de seu gosto."
        ]
    },

    {
        id: "23",
        titulo: "Feijoada Vegana",
        tempo: "35min",
        rendimento: "10",
        dificuldade: "fácil",
        imagem: "Img/feijoadavegana.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "feijão"
            },
            {
                "quantidade": "500g de",
                "ingrediente": "tofu"
            },
            {
                "quantidade": "2",
                "ingrediente": "cenouras"
            },
            {
                "quantidade": "2 ",
                "ingrediente": "batatas"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "3 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "2 folhas de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha e cebolinha"
            },

        ],
        modo_preparo: [
            "1- Coloque o feijão em uma tigela com bastante água e deixe de molho de um dia para o outro.",
            "2- Corte o tofu e as batatas em cubos, as cenouras em rodelas, pique a cebola e o alho.",
            "3- Coloque todos os ingredientes na panela de pressão, tampe, posicione a válvula na posição de pressão e programe por 30 minutos na função FEIJÃO.",
            "4- Quando o tempo terminar retire a pressão lentamente, adicione a salsinha e cebolinha, misture e sirva."
        ]
    },

    {
        id: "24",
        titulo: "Feijoada Leve",
        tempo: "45min",
        rendimento: "10",
        dificuldade: "fácil",
        imagem: "Img/feijoadaleve.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "feijão"
            },
            {
                "quantidade": "500g de",
                "ingrediente": "lombo suíno"
            },
            {
                "quantidade": "500g de",
                "ingrediente": "peito bovino"
            },
            {
                "quantidade": "2 ",
                "ingrediente": "calabresas"
            },
            {
                "quantidade": "1",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "3 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "2 folhas de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha e cebolinha"
            },

        ],
        modo_preparo: [
            "1- Coloque o feijão preto em uma tigela e deixe de molho de um dia para o outro com bastante água. Escorra a água e coloque o feijão na panela de pressão juntamente com as carnes cortadas em cubos, a linguiça fatiada e os temperos.",
            "2- Coloque água até cobrir tudo, tampe a panela de pressão, posicione a válvula na posição de pressão e programe por 40 minutos na função FEIJÃO.",
            "3- Quando o tempo terminar retire a pressão lentamente, adicione a salsinha e cebolinha, misture e sirva!"
        ]
    },

    {
        id: "25",
        titulo: "Arroz de Churrasco",
        tempo: "15min",
        rendimento: "8",
        dificuldade: "fácil",
        imagem: "Img/arrozdechurasco.png",
        ingredientes: [
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "arroz"
            },
            {
                "quantidade": "4 xícaras de",
                "ingrediente": "água"
            },
            {
                "quantidade": "2 xícaras de",
                "ingrediente": "sobras de churrasco"
            },
            {
                "quantidade": "1/2 ",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "pimentão vermelho"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha e cebolinha"
            },

        ],
        modo_preparo: [
            "1- Coloque todos os ingredientes na panela de arroz, misture, tampe e ligue.",
            "2- Assim que a panela entrar em modo de aquecimento o arroz estará pronto!"
        ]
    },

    {
        id: "26",
        titulo: "Maionese de Alho",
        tempo: "15min",
        rendimento: "10",
        dificuldade: "fácil",
        imagem: "Img/maionesedealho.png",
        ingredientes: [
            {
                "quantidade": "1",
                "ingrediente": "ovo"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "suco de limão"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "óleo"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "cebolinha"
            },
            {
                "quantidade": "1/2 colher de chá de",
                "ingrediente": "sal"
            },

        ],
        modo_preparo: [
            "1- Coloque o ovo na jarra do mixer, adicione o vinagre ou suco de limão, posicione o mixer na jarra e adicione todo o óleo de uma só vez.",
            "2- Bata usando o botão de Turbo velocidade e quando a maionese começar a se formar continue batendo em movimentos de baixo para cima.",
            "3- Adicione o alho, cebolinha e sal, e bata mais um pouco até triturar bem.",
            "4- Transfira para um recipiente com tampa e mantenha na geladeira por até 5 dias."
        ]
    },

    {
        id: "27",
        titulo: "Salada Detox",
        tempo: "15min",
        rendimento: "6",
        dificuldade: "fácil",
        imagem: "Img/salada.png",
        ingredientes: [
            {
                "quantidade": "2",
                "ingrediente": "cenouras"
            },
            {
                "quantidade": "1",
                "ingrediente": "beterraba"
            },
            {
                "quantidade": "1",
                "ingrediente": "maçã verde"
            },
            {
                "quantidade": "1/4",
                "ingrediente": "repolho"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "mostarda"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "mel"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },

        ],
        modo_preparo: [
            "1- Descasque as cenouras e a beterraba, e remova as sementes da maçã.",
            "2- Corte o repolho em pedaços que caibam no tubo alimentador do multiprocessador.",
            "3- Acople a lâmina raladora no processador, tampe e rale tudo seguidamente introduzindo pelo tubo alimentador em velocidade alta.",
            "4- Transfira os vegetais ralados para uma tigela e adicione os demais ingredientes, misture tudo e sirva!"
        ]
    },

    {
        id: "28",
        titulo: "Sorvete de Flocos",
        tempo: "15min",
        rendimento: "15",
        dificuldade: "fácil",
        imagem: "Img/sorveteflocos.png",
        ingredientes: [
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "creme de leite fresco"
            },
            {
                "quantidade": "1/2 lata de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "chocolate"
            },

        ],
        modo_preparo: [
            "1- Bata o creme de leite na batedeira usando o batedor de arames até virar chantilly.",
            "2- Acrescente o leite condensado aos poucos, envolvendo com ajuda de uma espátula.",
            "3- Adicione o chocolate e misture.",
            "4- Coloque a mistura em um pote com tampa e leve para congelar por 6 a 12 horas.",
            "5- Quando estiver firme poderá servir."
        ]
    },

    {
        id: "29",
        titulo: "Carne Assada Recheada",
        tempo: "45min",
        rendimento: "8",
        dificuldade: "fácil",
        imagem: "Img/carnerecheada.png",
        ingredientes: [
            {
                "quantidade": "1 peça de",
                "ingrediente": "maminha"
            },
            {
                "quantidade": "300g de",
                "ingrediente": "queijo"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "bacon"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },

        ],
        modo_preparo: [
            "1- Corte a maminha ao meio e tempere toda a carne com o alho, sal e pimenta.",
            "2- Coloque o queijo no meio, enrole e feche com ajuda de palitos.",
            "3- Distribua o bacon em fatias por cima da carne e prenda com mais palitos.",
            "4- Coloque a carne na air fryer e programe em 180º por 40 minutos.",
            "5- Quando terminar retire a carne, aguarde ao menos 10 minutos antes de cortar e servir."
        ]
    },

    {
        id: "30",
        titulo: "Lombo Suíno",
        tempo: "45min",
        rendimento: "4",
        dificuldade: "média",
        imagem: "Img/lombosuino.png",
        ingredientes: [
            {
                "quantidade": "1 peça de",
                "ingrediente": "lombo suíno"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "batata"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "tomate"
            },
            {
                "quantidade": "4 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "1",
                "ingrediente": "limão"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "páprica picante"
            },

        ],
        modo_preparo: [
            "1- Compre a peça de lombo já temperada, você encontra facilmente em supermercados e açougues, assim você não precisa esperar 12 horas marinando a carne em temperos antes de preparar.",
            "2- Coloque as batatas, cebolas, tomates, dentes de alho e salsinha na Assadeira.",
            "3- Coloque o lombo no centro, regue tudo com azeite, sal, pimenta, limão e cubra a carne com a páprica e azeite.",
            "4- Leve para o Cesto da air fryer e programe para contar 40 minutos a 180ºC."
        ]
    },

    {
        id: "31",
        titulo: "Doce de Leite Vegano",
        tempo: "30min",
        rendimento: "10",
        dificuldade: "fácil",
        imagem: "Img/doceleitevegano.png",
        ingredientes: [
            {
                "quantidade": "500g de polpa de",
                "ingrediente": "coco"
            },
            {
                "quantidade": "1L de",
                "ingrediente": "água quente"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "1 colher de café de",
                "ingrediente": "essência de baunilha"
            },

        ],
        modo_preparo: [
            "1- Coloque metade do coco em pedaços e metade da água no liquidificador, bata bem em velocidade alta, depois coe usando uma peneira bem fina. Repita o processo com o restante do coco e da água e reserve.",
            "2- Em uma panela, em fogo médio, coloque o açúcar e vá mexendo até caramelizar. Quando caramelizar adicione o leite de coco que preparou e a baunilha.",
            "3- Deixe apurar em fogo baixo, mexendo sempre para não pegar no fundo e para o caramelo dissolver, e quando estiver cremoso estará pronto.",
            "4- Aguarde esfriar e mantenha em um pote com tampa na geladeira por até 15 dias."
        ]
    },

    {
        id: "32",
        titulo: "Bolo de Cenoura Vegano",
        tempo: "30min",
        rendimento: "10",
        dificuldade: "fácil",
        imagem: "Img/bolocenoura.png",
        ingredientes: [
            {
                "quantidade": "2",
                "ingrediente": "cenouras"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "água"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "óleo"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "farinha de trigo"
            },

            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "fermento em pó"
            },


        ],
        modo_preparo: [
            "1- Pique as cenouras e coloque no liquidificador juntamente com a água, óleo e açúcar.",
            "2- Bata por 2 minutos em velocidade alta, depois acrescente a farinha e o fermento, use a função de pulsar para misturar. Assim que misturar e não houver mais grumos ou farinha, a massa estará pronta.",
            "3- Transfira a massa para uma assadeira untada com óleo e enfarinhada e leve para assar no forno já pré-aquecido em 180º até dourar."
        ]
    },

    {
        id: "33",
        titulo: "Chips de Banana",
        tempo: "15min",
        rendimento: "2",
        dificuldade: "fácil",
        imagem: "Img/chipsbanana.png",
        ingredientes: [
            {
                "quantidade": "1",
                "ingrediente": "banana"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "especiarias"
            },


        ],
        modo_preparo: [
            "1- Descasque a banana, corte em fatias de 2 a 3mm de espessura.",
            "2- Coloque as fatias de banana de maneira organizada na air fryer, e se desejar polvilhe um pouco de sal e especiarias por cima.",
            "3- Programe a air fryer em 150° por 15 a 20 minutos, até começarem a dourar levemente.",
            "4- Retire e aguarde esfriarem, assim ficarão mais crocantes."
        ]
    },

    {
        id: "34",
        titulo: "Carne ao Molho de Cebolas Caramelizadas",
        tempo: "45min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/carnecebola.png",
        ingredientes: [
            {
                "quantidade": "1kg de",
                "ingrediente": "carne"
            },
            {
                "quantidade": "1/2kg de",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "molho de soja"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1 dente de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1 folha de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "molho de soja"
            },
            {
                "quantidade": "",
                "ingrediente": "tomilho"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "ervas"
            },


        ],
        modo_preparo: [
            "1- Coloque todos os ingredientes na panela de pressão, misture, tampe, coloque a válvula na posição de pressão e programe por 40 minutos em qualquer função de cozimento.",
            "2- Quando o tempo terminar retire a pressão, abra a tampa e programe na função de refogar, deixando até o molho apurar e começar a caramelizar.",
            "3- Finalize com as ervas picadas e sirva."
        ]
    },

    {
        id: "35",
        titulo: "Pão de Queijo Vegano",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/paodequeijovegano.png",
        ingredientes: [
            {
                "quantidade": "3",
                "ingrediente": "mandioquinhas"
            },
            {
                "quantidade": "340g de",
                "ingrediente": "polvilho doce"
            },
            {
                "quantidade": "940g de",
                "ingrediente": "polvilho azedo"
            },
            {
                "quantidade": "80g de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "3/4 de xícara de",
                "ingrediente": "água"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },

        ],
        modo_preparo: [
            "1- Cozinhe as mandioquinhas até ficarem amolecidas",
            "2- Amasse com um garfo",
            "3- Junte os polvilhos e tempere com sal",
            "4- Adicione o azeite, misture",
            "5- Coloque a água aos poucos até atingir o ponto em que desgruda das mãos",
            "6- Faça bolinhas e reserve",
            "7- Leve para o cesto da air fryer e programe para contar 20 minutos a 180°C"
        ]
    },

    {
        id: "36",
        titulo: "Churrasco e Pão de Alho",
        tempo: "45min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/paodealho.png",
        ingredientes: [
            {
                "quantidade": "1 peça de",
                "ingrediente": "fraldinha"
            },
            {
                "quantidade": "4",
                "ingrediente": "pães"
            },
            {
                "quantidade": "",
                "ingrediente": "sal grosso"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "maionese"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "",
                "ingrediente": "cheiro verde"
            },

        ],
        modo_preparo: [
            "1- Coloque a carne temperada com sal grosso em um dos cestos da air fryer.",
            "2- Programe para contar 20 minutos a 180ºC.",
            "3- Quando acabar o tempo, vire a carne e programe mais 15 minutos.",
            "4- Enquanto isso, macere os dentes de alho, junte com a maionese, manteiga e cheiro verde e misture bem.",
            "5- Faça cortes nos pães sem chegar até o final.",
            "6- Passe a pasta de alho nos cortes.",
            "7- Coloque os pães no outro cesto da air fryer e programe a função Duplo Preparo a 180ºC por 5 minutos."
        ]
    },

    {
        id: "37",
        titulo: "Bacalhau com Batata Bolinha",
        tempo: "45min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/bacalhaubolinha.png",
        ingredientes: [
            {
                "quantidade": "900g de",
                "ingrediente": "bacalhau"
            },
            {
                "quantidade": "4 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "2",
                "ingrediente": "cebolas"
            },
            {
                "quantidade": "1",
                "ingrediente": "pimentão vermelho"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "500g de",
                "ingrediente": "batata bolinha"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },

        ],
        modo_preparo: [
            "1- Em uma tigela tempere o bacalhau com azeite e alho, junte o pimentão e a cebola e misture com cuidado para não desmanchar o bacalhau.",
            "2- Forre um dos cestas da air fryer com papel alumínio e disponha o bacalhau sobre ela.",
            "3- Tempere as batatas bolinhas com azeite e sal, leve para o outro cesto da air fryer.",
            "4- No painel, aperte DUPLO PREPARO e depois selecione cada cesto e a função do alimento correspondente. Por exemplo, se você colocou o bacalhau no cesto da Esquerda, selecione (E) e a função PEIXE. Em seguida programe o cesto da Direita, selecione (D) e a função BATATA. Agora, selecione SINCRONIZAR, PLAY/PAUSE e pronto. Os alimentos ficarão prontos ao mesmo tempo."
        ]
    },

    {
        id: "38",
        titulo: "Pão de Alho com Queijo",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/paoalhoqueijo.png",
        ingredientes: [
            {
                "quantidade": "200g de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "100g de",
                "ingrediente": "muçarela"
            },
            {
                "quantidade": "4 colheres de sopa de",
                "ingrediente": "parmesão"
            },
            {
                "quantidade": "1/3 de xícara de chá de",
                "ingrediente": "cheiro verde"
            },
            {
                "quantidade": "2 dentes de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "3 colheres de sopa de",
                "ingrediente": "maionese"
            },
            {
                "quantidade": "4",
                "ingrediente": "pães"
            },

        ],
        modo_preparo: [
            "1- Em uma tigela misture a manteiga, a muçarela, o parmesão, o alho, o cheiro-verde e a maionese.",
            "2- Faça cortes no pão, mas tome cuidado para não separar as fatias e recheie com a mistura.",
            "3- Leve para a air fryer a 180ºC por 10 minutos."
        ]
    },

    {
        id: "39",
        titulo: "Filé Mignon ao molho de Mostarda com Legumes",
        tempo: "45min",
        rendimento: "4",
        dificuldade: "fácil",
        imagem: "Img/filemignon.png",
        ingredientes: [
            {
                "quantidade": "1kg de",
                "ingrediente": "file mignon"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "mostarda"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "molho inglês"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "2",
                "ingrediente": "mandioquinhas"
            },
            {
                "quantidade": "1",
                "ingrediente": "cenoura"
            },
            {
                "quantidade": "1/4 de xícara de chá de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "",
                "ingrediente": "alecrim"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },

        ],
        modo_preparo: [
            "1- Tempere o filé mignon com mostarda, molho inglês, azeite, sal e pimenta-do-reino, amarre com um barbante como um bombom, embrulhe em uma folha de papel alumínio e leve para um dos cestos da air fryer.",
            "2- No painel, aperte DUPLO PREPARO e depois selecione o cesto e a função do alimento correspondente. Por exemplo, se você colocou a carne no cesto da Esquerda, selecione (E) e a função CARNE. Agora, selecione PLAY/PAUSE.",
            "3- Após o término do tempo, abra o papel alumínio do filé mignon e leve apenas ele para a air fryer por mais 10 minutos a 180ºC ou até dourar.",
            "4- Tempere os legumes com manteiga, alecrim, sal e pimenta-do-reino e leve para o outro cesto da air fryer.",
            "5- No painel, selecione o cesto e a função do alimento correspondente. Por exemplo, se você colocou os legumes no cesto da Direita, selecione (D) e a função LEGUMES. Agora, selecione PLAY/PAUSE."
        ]
    },

    {
        id: "40",
        titulo: "Creme de Avelã caseiro",
        tempo: "15min",
        rendimento: "12",
        dificuldade: "fácil",
        imagem: "Img/cremeavela.png",
        ingredientes: [
            {
                "quantidade": "150g de",
                "ingrediente": "avelã"
            },
            {
                "quantidade": "3 colheres de sopa de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "chocolate"
            },

        ],
        modo_preparo: [
            "1- Comece torrando as avelãs na air fryer em 180° ou na panificadora na função de tostar. Aguarde esfriarem e coloque em um saquinho, depois agite e massageie até as peles que as envolvem se soltarem.",
            "2- Retire as avelãs descartando essas casquinhas, depois bata no processador até formar uma pasta, então adicione o açúcar e bata mais um pouco, depois acrescente o chocolate derretido e bata apenas para misturar.",
            "3- Transfira o creme para um recipiente limpo, deixe esfriar e tampe.",
            "4- Depois de algumas horas ele fica mais encorpado."
        ]
    },

    {
        id: "41",
        titulo: "Molho Barbecue",
        tempo: "15min",
        rendimento: "15",
        dificuldade: "fácil",
        imagem: "Img/barbecue.png",
        ingredientes: [
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "óleo"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "pimenta vermelha"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "açúcar mascavo"
            },
            {
                "quantidade": "1/2 xícara de",
                "ingrediente": "vinagre"
            },
            {
                "quantidade": "1 folha de",
                "ingrediente": "louro"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "5 colheres de sopa de",
                "ingrediente": "molho de soja"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "ketchup"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "molho de tomate"
            },


        ],
        modo_preparo: [
            "1- Refogue a cebola no óleo, adicione a pimenta e refogue mais um pouco.",
            "2- Acrescente o vinagre e o açúcar, misture e abaixe o fogo, deixando ferver até que o açúcar se dissolva.",
            "3- Adicione os demais ingredientes, misture, deixe apurar em fogo baixo, remova a folha de louro e triture tudo com o mixer.",
            "4- Transfira para um recipiente bem limpo, deixe esfriar, tampe e mantenha em geladeira. Dura pelo menos 1 mês."
        ]
    },

    {
        id: "42",
        titulo: "Pizza",
        tempo: "45min",
        rendimento: "1",
        dificuldade: "fácil",
        imagem: "Img/pizza.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "280ml de",
                "ingrediente": "água"
            },
            {
                "quantidade": "30ml de",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "5g de",
                "ingrediente": "fermento biológico seco"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "5",
                "ingrediente": "tomates"
            },
            {
                "quantidade": "1/2",
                "ingrediente": "cebola"
            },
            {
                "quantidade": "1 dente de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "muçarela"
            },
            {
                "quantidade": "1",
                "ingrediente": "calabresa"
            },

        ],
        modo_preparo: [
            "1- Comece dissolvendo o fermento em 100ml de água e uma pitada de açúcar. Deixe descansar 5 minutos. Em seguida adicione o restante da água, azeite, trigo e uma pirada de sal.",
            "2- Usando o gancho deixe bater na batedeira em velocidade baixa por 5 minutos e velocidade média por mais 5 minutos.",
            "3- Cubra a tigela com a massa e deixe descansar por 1 hora, a massa tem que triplicar de tamanho.",
            "4- Enquanto isso, faça cortes em forma de X ao redor dos tomates para que a casca saia mais fácil depois, coloque-os para cozinhar em água fervendo. Quando a casca começar a soltar, tire da água quente e coloque numa tigela com água gelada.",
            "5- Retire cascas e sementes e coloque na jarra do liquidificador. Bata até atingir a consistência que desejar.",
            "6- Esquente um fio de azeite na panela e refogue cebola e alho. Junte o tomate batido e deixe engrossar. Reserve.",
            "7- Utilizando o multiprocessador, rale o queijo e fatie a calabresa.",
            "8- Corte a massa crescida em 4 partes, faça bolinhas e deixe crescer novamente por 30 minutos.",
            "9- Abra a massa, coloque em uma forma untada com azeite. Coloque o molho por cima, recheie e leve para assar por 10 minutos a 180ºC."
        ]
    },

    {
        id: "43",
        titulo: "Ravioli",
        tempo: "15min",
        rendimento: "1",
        dificuldade: "fácil",
        imagem: "Img/ravioli.png",
        ingredientes: [
            {
                "quantidade": "1 pacote de",
                "ingrediente": "ravioli"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },

        ],
        modo_preparo: [
            "1- Coloque os Raviolis no cesto da air fryer.",
            "2- Pincele azeite.",
            "3- Programe para contar 10 minutos a 180ºC."
        ]
    },

    {
        id: "44",
        titulo: "Pudim de Leite Condensado",
        tempo: "50min",
        rendimento: "8",
        dificuldade: "fácil",
        imagem: "Img/pudimleitecondensado.png",
        ingredientes: [
            {
                "quantidade": "1 lata de",
                "ingrediente": "leite condensado"
            },
            {
                "quantidade": "250ml de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "1 xícara de chá de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "3",
                "ingrediente": "ovos"
            },

        ],
        modo_preparo: [
            "1- Em uma panela em fogo médio derreta o açúcar até atingir o ponto de caramelo.",
            "2- Adicione o caramelo em uma forma de 18cm e deixe esfriar.",
            "3- Em uma tigela misture o leite condensado, o leite e os ovos e misture até que fique bem homogêneo.",
            "4- Adicione a mistura na forma com a calda e cubra com papel alumínio, leve para a air fryer dentro de uma forma com 2 dedos de água em banho maria por uma hora a 180ºC."
        ]
    },

    {
        id: "45",
        titulo: "Mozzarella Sitcks",
        tempo: "30min",
        rendimento: "6",
        dificuldade: "média",
        imagem: "Img/mozzarella.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "muçarela"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "farinha de rosca"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "ervas secas"
            },
            {
                "quantidade": "1/2 colher de chá de",
                "ingrediente": "páprica doce"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },

        ],
        modo_preparo: [
            "1- Corte o queijo muçarela em palitos com aproximadamente 1cm de largura e reserve.",
            "2- Em uma tigela quebre os ovos e misture com ajuda de um garfo, reserve.",
            "3- Em outra tigela misture a farinha de rosca com as ervas, páprica e sal.",
            "4- Passe cada palito de queijo primeiramente nos ovos, depois na farinha de trigo, novamente nos ovos e por último na farinha de rosca.",
            "5- Coloque os palitos empanados na airfryer, um ao lado do outro, regue com um fio de azeite e programe por 5 a 8 minutos na temperatura de 200º, até começarem a dourar e o queijo começar a derreter."
        ]
    },

    {
        id: "46",
        titulo: "Coxinha de Frango",
        tempo: "1h",
        rendimento: "6",
        dificuldade: "média",
        imagem: "Img/coxinha.png",
        ingredientes: [
            {
                "quantidade": "1l de",
                "ingrediente": "água"
            },
            {
                "quantidade": "150g de",
                "ingrediente": "manteiga"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "1/2kg de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "1/2kg de",
                "ingrediente": "peito de frango"
            },
            {
                "quantidade": "",
                "ingrediente": "salsinha"
            },
            {
                "quantidade": "1",
                "ingrediente": "ovo"
            },
            {
                "quantidade": "1/2l de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "1kg de",
                "ingrediente": "farinha de rosca"
            },

        ],
        modo_preparo: [
            "1- Coloque a água em uma panela e adicione a manteiga e o sal. Leve ao fogo e esquente até que a manteiga esteja completamente derretida.",
            "2- Acrescente a farinha e mexa bastante com um batedor até obter uma massa lisa, mas consistente. Se necessário, acrescente mais um pouco de farinha. É importante manter sempre o fogo médio durante o preparo para cozinhar bem a massa.",
            "3- Deixe a massa descansar por pelo menos trinta minutos em uma superfície lisa.",
            "4- Coloque o azeite numa frigideira e leve o alho para dourar. Adicione o frango e vá acrescentando os temperos. Deixe esfriar.",
            "5- Bata o ovo com o leite e reserve.",
            "6- Modele as coxinhas colocando uma quantidade de massa suficiente para encher a mão (aproximadamente 30 g). Amasse um pouco para que ela fique homogênea. Abra um circulo na palma da mão e coloque uma colher de sobremesa de recheio no meio da massa e dê forma a coxinha. Empane duas vezes: passe na farinha de trigo, na mistura de leite e ovos e na farinha de rosca. Rep1ta.",
            "7- Deixe na geladeira pelo menos uma hora antes de preparar na air fryer.",
            "8- Preaqueça a air fryer. Gire o TIMER para 5 minutos e programe a temperatura para 200 graus. Quando a air fryer atingir a temperatura ideal, a luz verde se apagará.",
            "9- Coloque as coxinhas no cesto da air fryer formando só uma camada. Programe o TIMER para 20 minutos. Agite a cesta delicadamente na metade do tempo para ficarem coradas por igual. Rep1ta a operação para as coxinhas restantes."
        ]
    },

    {
        id: "47",
        titulo: "Batata Rústica",
        tempo: "45min",
        rendimento: "6",
        dificuldade: "fácil",
        imagem: "Img/batatarustica.png",
        ingredientes: [
            {
                "quantidade": "400g de",
                "ingrediente": "batata"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "páprica picante"
            },
            {
                "quantidade": "",
                "ingrediente": "azeite"
            },
            {
                "quantidade": "",
                "ingrediente": "bacon"
            },
            {
                "quantidade": "1 colher de sopa de",
                "ingrediente": "requeijão"
            },

        ],
        modo_preparo: [
            "1- Lave bem as batatas com uma escova. Sem descascá-las, corte na vertical em formato de meia-lua grossa, com mais ou menos 1 dedo de espessura. Coloque as batatas cortadas em uma vasilha e cubra com água. Deixe descansando por cerca de meia hora.",
            "2- Pré-aqueça a Air Fryer Mondial. Gire o TIMER para 5 minutos e programe a temperatura para 200 graus. Quando a air fryer atingir a temperatura ideal, a luz verde se apagará.",
            "3- Escorra bem a água das batatas e seque com papel toalha ou um pano limpo. Coloque-as de volta na vasilha e despeje sobre elas o azeite, o sal e a páprica. Mexa bem com as mãos para que fiquem todas cobertas uniformemente com a mistura de temperos. Despeje as batatas temperadas no cesto da air fryer. Programe o TIMER para 30 minutos. Agite as batatas na metade do tempo.",
            "4- Passe cada palito de queijo primeiramente nos ovos, depois na farinha de trigo, novamente nos ovos e por último na farinha de rosca.",
            "5- Retire as batatas da air fryer, coloque numa travessa. Sirva com o requeijão como molho a parte."
        ]
    },

    {
        id: "48",
        titulo: "Sushi",
        tempo: "15min",
        rendimento: "10",
        dificuldade: "média",
        imagem: "Img/sushi.png",
        ingredientes: [
            {
                "quantidade": "500g de",
                "ingrediente": "arroz japonês"
            },
            {
                "quantidade": "3 folhas de",
                "ingrediente": "nori"
            },
            {
                "quantidade": "1",
                "ingrediente": "limão"
            },
            {
                "quantidade": "",
                "ingrediente": "molho shoyu"
            },
            {
                "quantidade": "25ml de",
                "ingrediente": "vinagre de arroz"
            },
            {
                "quantidade": "20g de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "20ml de",
                "ingrediente": "sakê"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "salmão"
            },

        ],
        modo_preparo: [
            "1- Coloque vinagre, açúcar, sal e saquê na panela de arroz e misture bem até que o açúcar e o sal estejam dissolvidos. Leve ao fogo até ficar transparente. Desligue e reserve.",
            "2- Lave o arroz. Escorra e coloque na panela de arroz. Para cada 1 xícara de arroz, use 1 xícara de água. Tampe a panela e cozinhe por cerca de 10 minutos á , até que a água ferva. Deixe cozinhar por 10 minutos, depois desligue o fogo deixe tampado por 10 minutos. Abra a panela, despeje o molho e misture rapidamente.",
            "3- Mantenha sempre ao seu lado uma tigela com água para ir molhar as mãos e evitar que o arroz grude nos seus dedos.",
            "4- Coloque a esteirinha de Sushi na bancada, disponha uma folha de alga, deixando um espaço livre de um centímetro, nas extremidades.",
            "5- Pegue uma porção de arroz e espalhe sobre a alga. Coloque uma fatia de salmão e um pedaço de Pepino.",
            "6- Enrole apertando com cuidado para dar um formato uniforme e firme.",
            "7- Desenrole a esteira e corte usando uma faca bem afiada."
        ]
    },

    {
        id: "49",
        titulo: "Bolo na Panela de Arroz",
        tempo: "45min",
        rendimento: "10",
        dificuldade: "média",
        imagem: "Img/bolopanela.png",
        ingredientes: [
            {
                "quantidade": "6",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "açúcar"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "farinha de trigo"
            },
            {
                "quantidade": "2 colheres de sopa de",
                "ingrediente": "cacau em pó"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "fermento em pó"
            },
            {
                "quantidade": "1/3 xícara de",
                "ingrediente": "manteiga"
            },

        ],
        modo_preparo: [
            "1- Coloque os ovos na batedeira e bata em velocidade alta usando o batedor de arames até virar um creme fofo e leve, como se fossem claras em neve.",
            "2- Em seguida, acrescente o açúcar aos poucos, com a batedeira ainda batendo, e deixe bater por mais 1 ou 2 minutos, até que não veja mais cristais do açúcar.",
            "3- Em uma tigela, misture e peneire a farinha juntamente com o cacau e o fermento.",
            "4- Acrescente metade da mistura peneirada nos ovos e mexa delicadamente com ajuda de uma espátula ou batedor tipo fouet, até incorporar por completo.",
            "5- Adicione o restante e incorpore também.",
            "6- Adicione a manteiga e misture da mesma maneira, delicadamente.",
            "7- Unte a cuba de sua panela de arroz com manteiga e farinha ou com desmoldante.",
            "8- Despeje a massa do bolo, feche a tampa e ligue.",
            "9- Quando a panela desligar o bolo estará pronto, mas deixe fechada por mais 5 minutos.",
            "10- Então, abra e faça um teste espetando um palito para ver se está cozido. Se não estiver, ligue novamente a panela por mais alguns minutos para terminar o cozimento.",
            "11- Passe uma espátula nas laterais do bolo e vire sobre um prato."
        ]
    },

    {
        id: "50",
        titulo: "Frango a Parmegiana na Air Fryer",
        tempo: "30min",
        rendimento: "4",
        dificuldade: "média",
        imagem: "Img/bolopanela.png",
        ingredientes: [
            {
                "quantidade": "4",
                "ingrediente": "filés de peito de frango"
            },
            {
                "quantidade": "1 colher de chá de",
                "ingrediente": "alho"
            },
            {
                "quantidade": "",
                "ingrediente": "sal e pimenta"
            },
            {
                "quantidade": "1",
                "ingrediente": "ovo"
            },
            {
                "quantidade": "1 xícara de",
                "ingrediente": "farinha de rosca"
            },
            {
                "quantidade": "1 e 1/2 xícara de",
                "ingrediente": "molho de tomate"
            },
            {
                "quantidade": "200g de",
                "ingrediente": "muçarela"
            },

        ],
        modo_preparo: [
            "1- Tempere os filés de frango com alho, sal e pimenta e reserve.",
            "2- Quebre o ovo em um prato e bata ligeiramente com um garfo até a gema e a clara se misturarem.",
            "3- Coloque a farinha de rosca em uma travessa.",
            "4- Passe cada um dos filés de frango no ovo batido e, depois, empane na farinha de rosca.",
            "5- Leve para a air fryer já pré-aquecida por 15 minutos em 200°C.",
            "6- Retire da AirFryer e coloque em uma assadeira ou refratário que caiba na sua Air Fryer.",
            "7- Espalhe o molho por cima dos filés e acrescente o queijo por cima de tudo.",
            "8- Leve novamente para a airfryer por cerca de 5 minutos em 200° ou até o queijo ficar bem derretido e levemente gratinado."
        ]
    },

    {
        id: "52",
        titulo: "Pão de Queijo na Air Fryer",
        tempo: "30min",
        rendimento: "6",
        dificuldade: "fácil",
        imagem: "Img/paodequeijoair.png",
        ingredientes: [
            {
                "quantidade": "1kg de",
                "ingrediente": "polvilho azedo"
            },
            {
                "quantidade": "",
                "ingrediente": "sal"
            },
            {
                "quantidade": "1/2 americano de",
                "ingrediente": "água"
            },
            {
                "quantidade": "250g de",
                "ingrediente": "margarina"
            },
            {
                "quantidade": "4",
                "ingrediente": "ovos"
            },
            {
                "quantidade": "1/2l de",
                "ingrediente": "leite"
            },
            {
                "quantidade": "250g de",
                "ingrediente": "queijo minas"
            },

        ],
        modo_preparo: [
            "1- Misture o sal com o polvilho em uma vasilha, depois vá colocando aos poucos a água fervente, sem parar de mexer até despejar toda a água. Depois junte os ovos, a margarina e o leite, quando estiver ficando homogêneo acrescente o queijo ralado e amasse bem a massa com as mãos até ficar uniforme e começar a soltar das mãos.",
            "2- Faça bolinhas de mais ou menos 4 cm com a massa e vá colocando em uma assadeira. Leve ao freezer por pelo menos 30 minutos antes de assar.",
            "3- Pré-aqueça a air fryer. Gire o TIMER para 5 minutos e programe a temperatura para 200 graus. Quando a máquina atingir a temperatura ideal a luz verde se apagará.",
            "4- Coloque os pães de queijo na cesta da air fryer deixando cerca de 2 cm de distância entre cada um, pois vão crescer. Programe o TIMER da air fryer por 15 minutos. Agite a cesta na metade do tempo e caso seja necessário acerte o tempo para mais ou para menos.",
            "5- Dica: Acrescente salame, queijo provolone, parmesão, bacon, linguiça calabresa defumada ou até ervas finas na massa do seu pão de queijo para deixá-lo diferente ou mais sofisticado."
        ]
    },

    // Adicione mais receitas conforme necessário
];

// Função para encontrar uma receita pelo seu ID
function encontrarReceitaPorId(id) {
    for (var i = 0; i < receitas.length; i++) {
        if (receitas[i].id === id) {
            return receitas[i];
        }
    }
    return null; // Retorna null se a receita não for encontrada
}

// Função para criar e exibir as receitas dinamicamente
function exibirReceitas() {
    var receitasDiv = document.createElement("div");
    receitasDiv.id = "receitas";

    receitas.forEach(function (receita) {
        var receitaDiv = document.createElement("div");
        receitaDiv.id = receita.id;

        // Criar a div com a imagem da logo e adicionar acima do título da receita
        var imageContainerDiv = document.createElement("div");
        imageContainerDiv.classList.add("image-container");

        var logoImg = document.createElement("img");
        logoImg.src = "Img/_Logo.png"; // Caminho da imagem da logo
        logoImg.alt = "Logo"; // Texto alternativo para acessibilidade

        imageContainerDiv.appendChild(logoImg);
        receitaDiv.appendChild(imageContainerDiv);

        // Adicionar título da receita
        receitaDiv.innerHTML += "<h1>" + receita.titulo + "</h1>";
        receitaDiv.innerHTML += "<div class='comida'><img src='" + receita.imagem + "' alt=''></div>"; // Aqui a imagem é adicionada dinamicamente
        receitaDiv.innerHTML += "<h1>Tempo: " + receita.tempo + " - Rendimento: " + receita.rendimento + " - Dificuldade: " + receita.dificuldade + "</h1>";

        // Adicionando o título "Ingredientes"
        var tituloIngredientes = document.createElement("h2");
        tituloIngredientes.innerText = "Ingredientes";
        receitaDiv.appendChild(tituloIngredientes);

        // Adicionando estilos CSS para a seção de ingredientes
        var ingredientesDiv = document.createElement("div");
        ingredientesDiv.className = "ingredientes";
        receita.ingredientes.forEach(function (ingrediente) {
            ingredientesDiv.innerHTML += "<p>" + ingrediente.quantidade + " " + ingrediente.ingrediente + "</p>";
        });
        receitaDiv.appendChild(ingredientesDiv);

        // Adicionando o título "Modo de preparo"
        var tituloModoPreparo = document.createElement("h2");
        tituloModoPreparo.innerText = "Modo de preparo";
        receitaDiv.appendChild(tituloModoPreparo);

        // Adicionando estilos CSS para a seção de modo de preparo
        var modoPreparoDiv = document.createElement("div");
        modoPreparoDiv.className = "modo-preparo";
        receita.modo_preparo.forEach(function (passo) {
            modoPreparoDiv.innerHTML += "<p>" + passo + "</p>";
        });
        receitaDiv.appendChild(modoPreparoDiv);

        receitasDiv.appendChild(receitaDiv);
    });

    document.body.appendChild(receitasDiv);
}

// Chama a função exibirReceitas quando a página é totalmente carregada
window.addEventListener('load', function () {
    const user = {
        id: 1,
        nome: "ana",
        email: "anabanana@gmail.com",
        senha: "12345",
    }
    this.localStorage.getItem("user") ? null : this.localStorage.setItem("user", JSON.stringify(user))
    // Exemplo de uso:
    var idProcurado = "50";
    var receitaEncontrada = encontrarReceitaPorId(idProcurado);
    if (receitaEncontrada) {
        console.log("Receita encontrada:", receitaEncontrada);
        exibirReceitasPorId(idProcurado); // Exibe a receita encontrada
    } else {
        console.log("Receita com ID", idProcurado, "não encontrada.");
    }
});

// Função para exibir uma receita específica por seu ID
function exibirReceitasPorId(id) {
    var receitaEncontrada = encontrarReceitaPorId(id);
    if (receitaEncontrada) {
        var receitaEncontradaDiv = document.createElement("div");
        receitaEncontradaDiv.id = "receita-encontrada";

        receitaEncontradaDiv.innerHTML += "<h1>Receita Encontrada</h1>";
        receitaEncontradaDiv.innerHTML += "<h2>" + receitaEncontrada.titulo + "</h2>";
        receitaEncontradaDiv.innerHTML += "<div class='comida'><img src='" + receitaEncontrada.imagem + "' alt=''><button class='concluido'>Feito</button></div>"; // Aqui a imagem é adicionada dinamicamente
        receitaEncontradaDiv.innerHTML += "<h1>Tempo: " + receitaEncontrada.tempo + " - Rendimento: " + receitaEncontrada.rendimento + " - Dificuldade: " + receitaEncontrada.dificuldade + "</h1>";

        var tituloIngredientes = document.createElement("h2");
        tituloIngredientes.innerText = "Ingredientes";
        receitaEncontradaDiv.appendChild(tituloIngredientes);

        var ingredientesDiv = document.createElement("div");
        ingredientesDiv.className = "ingredientes";
        receitaEncontrada.ingredientes.forEach(function (ingrediente) {
            ingredientesDiv.innerHTML += "<p>" + ingrediente.quantidade + " " + ingrediente.ingrediente + "</p>";
        });
        receitaEncontradaDiv.appendChild(ingredientesDiv);

        var tituloModoPreparo = document.createElement("h2");
        tituloModoPreparo.innerText = "Modo de preparo";
        receitaEncontradaDiv.appendChild(tituloModoPreparo);

        var modoPreparoDiv = document.createElement("div");
        modoPreparoDiv.className = "modo-preparo";
        receitaEncontrada.modo_preparo.forEach(function (passo) {
            modoPreparoDiv.innerHTML += "<p>" + passo + "</p>";
        });
        receitaEncontradaDiv.appendChild(modoPreparoDiv);

        document.body.appendChild(receitaEncontradaDiv);

        const buttonFeito = document.querySelector(".concluido")
        buttonFeito.onclick = async () => {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);

            if (!user || !user.id || !id) {
                console.error("Dados do usuário ou receita inválidos");
                return;
            }

            const usuarioid = user.id;
            const receitaid = id; // substitua com o ID da receita real
            const isFavorited = await checkIfFavorited(usuarioid, receitaid);
            console.log(isFavorited);

            if (isFavorited) {
                // Remover dos favoritos
                await removeFavorito(isFavorited);
            } else {
                // Adicionar aos favoritos
                await addFavorito(usuarioid, receitaid);
            }
        };

        const checkIfFavorited = async (usuarioid, receitaid) => {
            // Função para verificar se a receita já está favoritada
            const response = await fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos?usuariosid=${usuarioid}&receitasid=${receitaid}`);
            const data = await response.json();
            if (data.length !== 0) {
                return data[0].id
            } else {
                return false
            }
        };

        const addFavorito = async (usuarioid, receitaid) => {
            try {
                const response = await fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ usuariosId: usuarioid, receitasId: receitaid })
                });

                if (response.ok) {
                    console.log("Receita adicionada aos favoritos com sucesso");
                } else {
                    console.error("Falha ao adicionar aos favoritos");
                }
            } catch (error) {
                console.error("Erro na requisição de adicionar aos favoritos:", error);
            }
        };

        const removeFavorito = async (favoritoId) => {
            try {
                const response = await fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos/${favoritoId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    console.log("Receita removida dos favoritos com sucesso");
                } else {
                    console.error("Falha ao remover dos favoritos");
                }
            } catch (error) {
                console.error("Erro na requisição de remover dos favoritos:", error);
            }
        };


    } else {
        console.log("Receita com ID", id, "não encontrada.");
    }
}
