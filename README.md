Alan Vitor de Oliveira Evangelista, 3672451
Bruno Fernandes Moreira, 11218712
Luis Felipe Jorge, 10310589
Sávio Duarte Fontes, 10737251

Projeto para matéria de Introdução ao Desenvolvimento Web (SCC0219) para o curso de Ciências de Computação da USP São Carlos.

# Granja dos Desesperados

O sistema é um site cujo objetivo é a venda de ovos de vários tipos, desde o ovo de galinha comum até os ovos mais raros, como de unicórnios e alienígenas

## Requisitos

- O sistema deve acomodar dois tipos de usuários: clientes e administradores;
    - Os administradores são responsáveis por registrar e gerenciar administradores, clientes e produtos. A aplicação deve começar com uma conta *admin* com senha *admin*;
    - Os clientes são usuários que acessam o sistema para comprar produtos;
- O sistema deve permitir que um administrador cadastre outro. As informações armazenadas sobre um administrador são: nome, telefone, e-mail, senha, e um ID, que não é visível ao usuário;
- O sistema deve permitir que um cliente se cadastre no mesmo. As informações armazenadas sobre um cliente são: nome, endereço, telefone, e-mail, senha, e um ID, que não é visível ao usuário;
- O sistema deve permitir que o administrador cadastre, consulte, atualize e remova produtos. As informações armazenadas sobre um produto são: ID, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida (informação disponível somente para o administrador). O sistema possui um tipo de produto: *o ovo*, que pode ser de diversos tipos;
    - Cada *ovo* tem sua descrição, preço e quantidade associados, além de conter a descrição da mãe (funcionalidade do nosso produto).
- O sistema deve permitir a venda dos produtos. Para cada produto vendido, a *quantidade vendida* deve ser incrementada e *quantidade em estoque* decrementada conforme a quantidade vendida. Uma venda não pode ser realizada caso não haja a quantidade em estoque necessária;
- O sistema deve prover a abstração de um carrinho de compras, que contém os produtos selecionados pelo usuário para serem comprados.
O usuário poderá listar os produtos nesse carrinho, assim como adicionar e remover produtos. A lista de produtos no carrinho contém o nome, foto, preço e quantidade selecionada de cada produto. Além disso, deve ser mostrado o preço total associado a todos os itens. Os carrinhos serão limpos apenas quando a compra for concluída ou quando o usuário requisitá-lo;
- A compra pode ser paga com cartão de crédito (qualquer número é aceito pelo sistema), boleto ou pix;
- O sistema deve permitir o histórico de compras realizadas pelo usuário (futura implementação);
- O sistema deve atender requisitos de acessibilidade e fornecer boa usabilidade. O sistema deve ser responsivo.

## Descrição do Projeto

O lado do cliente da aplicação será implementado em HTML5, CSS3 e Javascript. Ainda resta definir que tecnologia será empregada
no lado do servidor (Node.JS + Express, Python + Django ou Ruby + Ruby on Rails).

### Armazenagem de dados

Os dados de usuários e produtos serão armazenadas em um banco de dados relacional PostegreSQL.

### Áreas da aplicação

**Tela de Login**
Ao entrar na aplicação, o usuário o entra nessa tela para realizar o login utilizando e-mail e senha.
(Usuário Customer) Caso ainda não tenha conta, ele pode clicar no *Cadastrar* do Header para criar seu cadastro.

#### Área de cliente

Essa área é accesível pelos clientes e pelos administradores.

**Tela de cadastro**

O usuário poderá fazer seu cadastro com seus dados (*nome*, *endereço*, *telefone*, *e-mail*, *senha*).

**Tela de informações pessoais (ícone de perfil)**

O usuário poderá verificar seus dados e atualizar os mesmos.

**Tela de produtos**

Tela inicial da aplicação na qual o usuário poderá navegar pelos produtos cadastrados no site e obter mais produtos
de um produto específico ao clicar nele. O usuário também poderá clicar em um link para fazer login e será automaticamente
redirecionado para o mesmo se tentar comprar algum produto. A partir dessa tela o usuário pode ir para seu perfil, caso
já tenha feito o login.

**Página do produto**

Aqui o usuário poderá ver as fotos, a descrição, o preço, a quantidade e o valor do produto para a compra.
O link do carrinho está disponível nesta página também. É possível ordenar os produtos por menor preço, pelos mais vendidos
ou pelos mais bem avaliados.

**Carrinho**

O usuário verá os produtos adicionados ao carrinho até esse momento. Para cada produto, a aplicação mostrará seu nome,
sua foto, a quantidade escolhida pelo usuário e o seu valor. Também será mostrada a soma total da compra no fim da página.

**Página de pagamento**

Ao colocar em finalizar no carrinho, o usuário é direcionado para a página de pagamento, onde preencherá os dados da compra,
que pode ser feita por cartão de crédito, boleto ou pix. O usuário poderá comprar à vista ou parcelar a compra em até 12
vezes sem juros. Após fornecer seus dados, o usuário verá um pop-up de comprovação de pagamento e, caso confirme, a compra
será finalizada. Um email de confirmação com os dados da compra será enviado para o usuário.

**Página de avaliação do produto**

Quando o site receber uma notificação da transportadora que o produto foi entregue, um email de avaliação do produto
será enviado para o usuário com um link para essa página. O usuário pode indicar uma nota entre 0 e 5 para o produto
e adicionar um comentário.

#### Área administrativa

Apenas administradores podem acessar essa área.

**Tela de cadastro de administrador**

O super administrador poderá cadastrar outros administradores.

**Tela de cadastro de usuário**

Um administrador poderá cadastrar usuários, fornecendo os dados de usuário já mencionados anteriormente.

**Tela de produtos**

Um administrador poderá ver os produtos cadastrados no seu site. A interface é quase idêntica à vista pelo usuário,
mas o administrador terá a opção de editar o que é mostrado clicando em um ícone de lápis.

**Tela de relatório de vendas**

É mostrado, para cada produto vendido, sua quantidade em estoque, seu valor unitário e seu valor total vendido.
Também será informado a quantia total de vendas, o valor médio da compra e a quantidade total de compras.

### Diagrama de Navegação

![Diagrama de Navegação](img/DiagramaNavegacaoWebMk2.png)

## Comentários sobre o código


## Plano de teste

## Resultados de teste

## Processo de Execução
Após baixado o repositório do github é necessário apenas executar os comandos a seguir pra visualizar a aplicaçõa:
```
>> npm i
>> npm run build
>> npm run start
```
## Problemas

## Comentários
