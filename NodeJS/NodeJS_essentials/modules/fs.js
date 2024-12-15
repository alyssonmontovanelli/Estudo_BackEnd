const fs = require('fs')
const path = require('path')

/*

//  CRIAR UM ARQUIVO - paramns(caminho, conteudo, callback (escrita quando for ou não finalizado) )
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 
"Hello Word!", (error => {
   if (error) {
      return console.log("Algo deu errado, erro: ", error)
   }
   console.log('Aquivo test criado com Sucesso')
}));




// -- ADICIONAR A UM ARQUIVO
fs.appendFile(path.join(__dirname, '/test', 'test.txt'),
   "\nMe ajude a melhorar", (error) => {
      if (error) {
         return console.log(`Erro: ${error}`)
      } 
      console.log("Texto adicionado ao arquivo com sucesso")
   }
);

*/

// -- LER ARQUIVO 
fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', 
            (error, data) => {
               if (error) {
                 return console.log(`Erro na leitura: ${error}`)
               }
               console.log(data)
            })