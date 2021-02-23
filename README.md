# Desafio_Balancete
Pacotes utilizados:
Express
Mongoose@5.11.15
Nodemon
UniqID
Diacritics

1. O processo de CRUD e bem simples, o CRUD se trata da manipulação de um arquivo chamado balancete que se trata de um string, passada para um método que vai ser chamar import() o método import deve receber
balanceSheet que se trata da string encontada nesse link (https://pastebin.com/645Tkw6R), a principio esse e um dos inputs que o método pode receber. 
uma data no seguinte formato:   
new Date( moment().month(parseInt(MÊS ESCOLHIDO) - 1).year( ANO ESCOLHIDO ).startOf("month") );
companyId e um valor unico que vai referenciar quem e o dono do balancete 

	A assinatura do método será import(balanceSheet, date, companyId); 

2. O método importe deve organizar o parâmetro BalanceSheet, salvar o no banco, no seguinte formato esperado: ( https://pastebin.com/z1vWs4sP  ). 

3. Colocar no gitHub, é enviar o link. 



Sugestões: 
Usar TS ou JS 
Extra: Criar uma cloud function - Usando (IBM), 
Deixe o código organizado



Ferramentas 
Usar o editor VsCode ( https://code.visualstudio.com/ ), 
