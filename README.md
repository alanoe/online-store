Alan Vitor de Oliveira Evangelista, 3672451         
Bruno Fernandes Moreira, 11218712         
Luis Felipe Jorge, 10310589         
Sávio Duarte Fontes, 10737251         

Projeto para matéria de Introdução ao Desenvolvimento Web (SCC0219) para o curso de Ciências de Computação da USP São Carlos.

# Granja dos Desesperados

O sistema é um site cujo objetivo é a venda de ovos de vários tipos, desde o ovo de galinha comum até os ovos mais raros, incluindo, talvez, ovos de unicórnios e alienígenas. Ao selecionar o tipo de ovo, o usuário terá acesso aos dados da mãe estilo aos cortes WAGYU de carne bovina.

## Requisitos

- O sistema deve acomodar dois tipos de usuários: clientes e administradores;
    - Os administradores são responsáveis por registrar e gerenciar administradores, clientes e produtos. A aplicação deve começar com uma conta *admin* com senha *admin*;
    - Os clientes são usuários que acessam o sistema para comprar produtos;
- O sistema deve permitir que um administrador cadastre outro. As informações armazenadas sobre um administrador são: *nome*, *telefone*, *e-mail*, *senha*, e um *id* que não fica amostra do usuário;
- O sistema deve permitir que um cliente se cadastre no mesmo. As informações armazenadas sobre um cliente são: *nome*, *endereço*, *telefone*, *e-mail*, *senha*, e um *id* que não fica amostra do usuário;
- O sistema deve permitir que o administrador cadastre, consulte, atualize e remova produtos. As informações armazenadas sobre um produto são: *id*, *nome*, *foto*, *descrição*, *preço*, *quantidade em estoque* e *quantidade vendida* (somente para o administrador). O sistema possui um tipo de produto: *o ovo*, porém ele pode ser de diversos tipos;
    - Cada *ovo* tem sua descrição, preço e quantidade associados, além de conter a descrição da mãe.
- O sistema deve permitir a venda dos produtos. Para cada produto vendido, a *quantidade vendida* deve ser incrementada e *quantidade em estoque* decrementada conforme a quantidade vendida. Uma venda não pode ser realizada caso não haja a quantidade em estoque necessária;
- O sistema deve conter um carrinho, no qual os produtos selecionados estarão listados com as informações de *nome*, *foto*, *preço* e quantidade selecionada. Além disso, deve ser mostrado o preço total associado a todos os itens. Os carrinhos serão limpos apenas no pagamento ou pelos clientes;
- A venda deve ser paga com um cartão de crédito (qualquer número é aceito pelo sistema);
- [?] O sistema deve permitir a listagem das compras realizadas pelo usuário (Futura implementação);
- O sistema deve fornecer requisitos de acessibilidade e fornecer boa usabilidade. O sistema deve ser responsivo.

## Descrição do Projeto

Uma plataforma de vendas online implementada em HTML5 e CSS3

### Armazenagem de dados

Serão armazenadas na base de dados as informações de usuários e produtos.

### Regiões da aplicação

**Tela de Login (tela inicial)**
Ao entrar na aplicação, o usuário (qualquer tipo de usuário) entra nessa tela para realizar o login utilizando e-mail e senha.
(Usuário Customer) Caso ainda não tenha conta, ele pode clicar no *Cadastrar* do Header para criar seu cadastro.

#### Versão Customer

**Tela de cadastro**         

O usuário fará seu cadastro com seus dados (*nome*, *endereço*, *telefone*, *e-mail*, *senha*).

**Tela de informações pessoais (ícone de perfil)**         

O usuário pode verificar seus dados e atualizar os mesmos.

**Tela de produtos**         

O usuário, ao efetuar o login será direcionado a essa tela, aonde poderá navegar pelos produtos cadastrados no site (ao clicar em um produto, será direcionado para a página dele), o ícone de perfil (para atualizar o mesmo) e o carrinho para ver o que está nele.

**Página do produto**         

Aqui o usuário poderá ver as fotos, a descrição, o preço, a quantidade e o valor do produto para a compra.
Também há as informações da mãe do ovo para mostrar a origem do ovo, estilo aos bois Wagyu.
Existe o link do carrinho presente nesta página também.

**Carrinho**         

O usuário verá os produtos selecionados mostrando uma foto, a quantidade e valor de cada produto, com a soma total no fim.

**Página de pagamento**         

Ao colocar em finalizar no carrinho, o usuário vem para a página de pagamento aonde preencherá com seus dados, incluindo o cartão de crédito (qualquer número), para realizar o pagamento.
E ao realizar o pagamento aparece o pop-up de comprovação de pagamento.

#### Versão Administrador

**Tela de cadastro**         

O usuário fará seu cadastro, a partir de um e-email recebido, com seus dados (*nome*, *endereço*, *telefone*, *e-mail*, *senha*).

**Tela de informações pessoais (ícone de perfil)**         

O usuário pode verificar seus dados e atualizar os mesmos.

**Tela de produtos**         

O usuário verá os produtos cadastrados no seu site, igual ao consumidor mas terá a opção de editar o que é mostrado clicando no ícone de lápis, o qual substituiu o ícone de carrinho.

**Tela de relatório de vendas**         

É mostrado para cada produto vendido, sua quantidade, seu valor unitário e seu valor total vendido.
Também informa o total de todas as vendas e a quantidade de usuários que compraram.

### Diagrama de Navegação

![Diagrama de Navegação](img/DiagramaNavegacaoWebMk2.png)

## Comentários sobre o código

## Plano de teste

## Resultados de teste

## Processo de Execução

## Problemas

## Comentários
