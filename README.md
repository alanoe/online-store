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



### Diagrama de Navegação

![Diagrama de Navegação](img/DiagramaNavegacaoWebMk2.png)

## Comentários sobre o código

## Plano de teste

## Resultados de teste

## Processo de Execução

## Problemas

## Comentários
