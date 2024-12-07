# Como Funciona

Middleware de Autenticação (authMiddleware.js): Verifica o cabeçalho Authorization da requisição. Se o token for válido, permite o acesso à rota protegida.
Serviço de Token (tokenServices.js): Contém a função verifyToken para decodificar e validar o token JWT.
Rota /foo-bar: Uma rota protegida que só responde com sucesso se a autenticação for bem-sucedida.
