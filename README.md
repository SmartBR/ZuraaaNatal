# ZuraaaNatal
Este projeto foi um desafio criado pela bot list Zuraaa.

# Funcionalidade
- Com o seu projeto online, acesse com o domínio que você colocou na **config.json**
- Clique no botão **LOGAR COM O DISCORD**, você será enviado para uma página de autenticação do discord. Apenas clique em Autorizar
- Após logar, você será redirecionado para a página principal
- Na página principal, terá um botão escrito **Resgatar Presente**. Clique nele para resgatar.
- Após resgatar, o bot irá te enviar uma mensagem no privado
  - **Possíveis erros:**
      - "Usuário não encontrado" - Precisa estar em um discord do bot
      - "Houve um erro ao mandar mensagem na sua DM" - Precisa liberar a DM
- SURPRESA! Você recebeu seu presente, fácil né ?


# Inicialização
- Clone o repositório utilizando o [Git](https://git-scm.com/downloads)
```git
git clone https://github.com/SmartBR/ZuraaaNatal.git
```


- No diretório **resource** localizado na pasta principal
  - Renomei o arquivo **config.example.json** para **config.json**
  

- Agora você precisa baixar as dependências
```bash
npm install
```

#### OAuth2
   - A maioria das configurações do **config.json**, você encontra aqui
     - ``https://discord.com/developers/applications/<id_do_seu_bot>/information``
   - Agora você precisa adicionar o url de callback
     - Acesse ``https://discord.com/developers/applications/<id_do_seu_bot>/oauth2``, clique em **Add Redirect** e coloque ``http://<domínio>/oauth2/callback`` (se estiver no localhost, coloque ``http://localhost/oauth2/callback``),
     após isso, desça um pouco até **OAuth2 URL Generator**, selecione o url que você colocou no redirect e clique em salvar.
     


- Após configurar o projeto **(config.json)**, inicialize a aplicação com o seguinte comando
```bash
npm start
```

- Pronto! Se você estiver com a configuração padrão, sua aplicação estará online no [localhost](http://localhost)
