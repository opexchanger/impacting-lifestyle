estranho o processo pra usar o locale no \_app
na verdade, pra poder usar um <title> diferente pra cada idioma
o title tem que ficar no \_app
o locale tava sendo pego só no index
mas como o \_app é quem diretamente faz a chamada do index, reparei que o que a gente
pede pro staticProps no index, é passado a partir do \_app
logando o pageProps dele a gente vê isso
aí o engraçado é que eu tive que manter passando o locale no staticProps do index
mesmo que o index n vai fazer uso dele, mas só pra que 'indiretamente' o \_app pegue o valor
