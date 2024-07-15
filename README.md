# Projeto Descrição
Neste Branch estão os projectos em Vues os seus Componentes e tests. Unitários.
Os componentes definidos forma: 

## AboutComponent
Exibe uma seção "Sobre" com título, legenda, descrição e botão para mostrar mais detalhes.
Props incluem imageSrc, imageAlt, title, caption, description, moreCaption e moreDescription.
Tem um método toggleShowMore para alternar a visibilidade do conteúdo adicional.
## A escolhas das props : 
Justificativa: Essas props permitem que o conteúdo e a aparência do componente "Sobre" sejam configurados externamente, 
tornando-o reutilizável para diferentes seções ou projetos sem precisar modificar o código do componente.

## BannerComponent
Mostra um banner com uma imagem de fundo e texto de boas-vindas.
Props incluem imageSrc e welcomeText.
ContactFormComponent
## A escolhas das props : 
Justificativa: Permite a personalização da imagem de fundo e do texto, facilitando a reutilização do banner em diferentes páginas ou contextos

## ContactFormComponent
Componente de formulário de contato que permite aos usuários enviar seu nome, e-mail e mensagem.
Realiza validação básica no frontend antes de enviar os dados para o servidor.
Props incluem formTitle, submitUrl e buttonText.
Métodos handleSubmit e resetForm.

## A escolhas das props : 
Justificativa: Essas props permitem configurar o título, o endpoint de envio e o texto do botão, tornando o formulário flexível e reutilizável em diferentes contextos de contato.

## GalleryComponent
Galeria de fotos com navegação para rolar as imagens.
Armazena uma lista de imagens e implementa navegação básica para rolar entre elas.
Justificativa: Permite que a galeria exiba diferentes conjuntos de imagens, tornando o componente reutilizável para diferentes álbuns ou coleções de fotos.

## HeaderComponent
logoSrc: A URL do logo a ser exibido no cabeçalho.
menuItems: Um array de itens de menu para a navegação.
Justificativa: Facilita a personalização do logo e dos itens de menu, permitindo que o cabeçalho se adapte a diferentes sites ou aplicações.

## Cabeçalho com logo, botão de menu para dispositivos móveis e navegação.
Usa um método toggleMenu para alternar a visibilidade do menu em dispositivos móveis.

## ServicesTableComponent
Tabela listando serviços, cada um com uma imagem, descrição e preço.Dados dos serviços são armazenados em um array dentro do componente.
Justificativa: Torna o componente flexível para listar diferentes serviços, adaptando-se a diferentes tipos de negócios ou contextos de serviço.

### Tests Unitarios 
Para a realização dos testes Unitário foi usado o Jest e Vue Test Utils foi testes em dois Compnentes 
## AboutComponent
Testes realizados:
Renderização correta de props: Verifica se o componente renderiza corretamente a imagem, o título, a legenda, a descrição e as seções adicionais com base nas props fornecidas.
Alteração de estado ao clicar no botão: Testa se o conteúdo adicional é mostrado quando o botão é clicado.

### ContactFormComponent
Testes realizados:
Renderização de título do formulário: Verifica se o título do formulário é exibido corretamente.
Envio de formulário: Testa se os dados do formulário são enviados corretamente e se o botão de envio funciona conforme esperado.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
