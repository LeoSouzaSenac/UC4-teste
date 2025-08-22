import readlineSync from "readline-sync";
import { Personagem } from "./Personagem";
import { Monstro } from "./Monstro";

// Criando personagens

console.log(`
+------------------------------------------------------------------------------------+
|                            >> Seja bem-vindo(a) ao <<                              |
+------------------------------------------------------------------------------------+

                        /\\
                        ||
                        ||
                        ||
                        ||                                               ~-----~
                        ||                                            /===--  ---~~~
                        ||                   ;'                 /==~- --   -    ---~~~
                        ||                (/ ('              /=----         ~~_  --(  '
                        ||             ' / ;'             /=----               \\__~
     '                ~==_=~          '('             ~-~~      ~~~~        ~~~--\\~'
     \\\\                (c_\\_        .i.             /~--    ~~~--   -~     (     '
      \`\\               (}| /       / : \\           / ~~------~     ~~\\   (
      \\ '               ||/ \\      |===|          /~/             ~~~ \\ \\(
      \`\`~\\              ~~\\  )~.~_ >._.< _~-~     |\`_          ~~-~     )\\
       '-~                 {  /  ) \\___/ (   \\   |\` \` _       ~~         '
       \\ -~\\                -<__/  -   -  L~ -;   \\\\    \\ _ _/
       \`\` ~~=\\                  {    :    }\\ ,\\    ||   _ :(
        \\  ~~=\\__                \\ _/ \\_ /  )  } _//   ( \`|'
        \`\`    , ~\\--~=\\           \\     /  / _/ / '    (   '
         \\\`    } ~ ~~ -~=\\   _~_  / \\ / \\ )^ ( // :_  / '
         |    ,          _~-'   '~~__-_  / - |/     \\ (
          \\  ,_--_     _/              \\_'---', -~ .   \\
           )/      /\\ / /\\   ,~,         \\__ _}     \\_  "~_
           ,      { ( _ )'} ~ - \\_    ~\\  (-:-)       "\\   ~ 
                  /'' ''  )~ \\~_ ~\\   )->  \\ :|    _,       " 
                 (\\  _/)''} | \\~_ ~  /~(   | :)   /          }
                <\`\`  >;,,/  )= \\~__ {{{ '  \\ =(  ,   ,       ;
               {o_o }_/     |v  '~__  _    )-v|  "  :       ,"
               {/"\\_)       {_/'  \\~__ ~\\_ \\\\_} '  {        /~\\
               ,/!          '_/    '~__ _-~ \\_' :  '      ,"  ~ 
              (''\`                  /,'~___~    | /     ,"  \\ ~' 
             '/, )                 (-)  '~____~";     ,"     , }
           /,')                    / \\         /  ,~-"       '~'
       (  ''/                     / ( '       /  /          '~'
    ~ ~  ,, /) ,                 (/( \\)      ( -)          /~'
  (  ~~ )\`  ~}                   '  \\)'     _/ /           ~'
 { |) /',--.(  }'                    '     (  /          /~'
(\` ~ ( c|~~| \`}   )                        '/:\\         ,'
 ~ )/\`\`) )) '|),                          (/ | \\)                 
  (\` (-~(( \`~\`'  )                        ' (/ '
   \`~'    )'\`')                              '
     \` \`\`


     
`);

console.log(`
 ad88                                                                 
 d8"                           ,d                                      
 88                            88                                      
 MM88MMM ,adPPYYba, 8b,dPPYba, MM88MMM ,adPPYYba, ,adPPYba8b       d8  
 88    ""     'Y8 88P'   '"8a  88    ""     'Y8 I8[    "" '8b     d8'  
'88    ,adPPPPP88 88       88  88    ,adPPPPP88  '"Y8ba,   '8b   d8'   
'88    88,    ,88 88       88  88,   88,    ,88 aa    ]8I   '8b,d8'    
'88    '"8bbdP"Y8 88       88  "Y888 '"8bbdP"Y8 '"YbbdP"'     Y88'     
                                                            'd8'      
                                                          'd8' 
ad88 88             88                  
d8"   ""             88           ,d     
88                   88           88     
MM88MMM 88  ,adPPYb,d8 88,dPPYba, MM88MMM  
88    88 a8"    'Y88 88P'    "8a  88     
88    88 8b       88 88       88  88     
88    88 "8a,   ,d88 88       88  88,    
88    88  '"YbbdP"Y8 88       88  "Y888  
          aa,    ,88                     
           "Y8bbdP"      

+------------------------------------------------------------------------------------+
|                            >> Aperte enter para começar <<                         |
+------------------------------------------------------------------------------------+
`);


readlineSync.question()



const nome = readlineSync.question(`\nQual o nome do seu personagem? `);
const classe = readlineSync.question(`\nQual a classe do seu personagem? `);
const heroi = new Personagem(nome, classe, 100, 15);
const goblin = new Monstro("Goblin", 80, 10);

let jogando = true; // variável de controle do loop

// Loop do jogo
while (jogando && heroi.getVida() > 0 && goblin.getVida() > 0) {
    console.log(`\n=== Status ===`);
    console.log(`${heroi.getNome()} (${heroi.getClasse()}): ${heroi.getVida()} HP`);
    console.log(`${goblin.getNome()} (Monstro): ${goblin.getVida()} HP`);

    const escolha = readlineSync.question(`
Escolha uma ação:
1 - Atacar
2 - Curar
3 - Fugir
> `);

    switch (escolha) {
        case "1":
            heroi.atacar(goblin);
            console.log(`${heroi.getNome()} atacou ${goblin.getNome()}!`);
            break;
        case "2":
            heroi.curar(15);
            console.log(`${heroi.getNome()} se curou!`);
            break;
        case "3":
            console.log("Você fugiu da batalha!");
            jogando = false; // encerra o loop
            continue; // evita o turno do monstro
        default:
            console.log("Opção inválida!");
            continue; // volta para o menu sem o monstro atacar
    }

    // Turno do monstro (se ele ainda estiver vivo e o jogador não fugiu)
    if (jogando && goblin.getVida() > 0) {
        goblin.atacar(heroi);
        console.log(`${goblin.getNome()} atacou ${heroi.getNome()}!`);
    }
}

// Resultado final (somente se não for fuga)
if (jogando) {
    if (heroi.getVida() > 0) {
        console.log(`\n🏆 ${heroi.getNome()} venceu a batalha!`);
    } else {
        console.log(`\n💀 ${goblin.getNome()} venceu a batalha!`);
    }
}
