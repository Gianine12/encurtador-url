import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});




/**🧪 Planejamento de Testes Unitários - CRUD de Usuários (TDD)
✅ 1. Cadastrar Usuário
Objetivo:
Verificar se um usuário pode ser cadastrado corretamente, respeitando regras de negócio.

Passos:
Preparar o cenário (Arrange):

Criar um input válido de usuário (nome, email, senha, etc.).

Garantir que o e-mail ainda não exista no banco.

Executar a ação (Act):

Chamar a função/método de cadastro.

Verificar o resultado (Assert):

Esperar que o retorno seja o objeto do usuário criado.

Verificar se o ID foi gerado.

Validar que os campos foram salvos corretamente.

Casos negativos (também devem ser testados):
E-mail já existe:

Deve lançar um erro (ex: "Usuário já existe").

Erro no banco (ex: falha de conexão):

Deve lançar exceção apropriada.

❌ 2. Deletar (Desabilitar) Usuário
Objetivo:
Desabilitar um usuário existente (soft delete).

Passos:
Preparar o cenário:

Inserir um usuário existente com status ativo.

Executar a ação:

Chamar a função de desabilitar passando o ID.

Verificar o resultado:

O status do usuário deve ser alterado para "desabilitado" (ou ativo: false).

O usuário ainda deve existir no banco (soft delete).

Casos negativos:
ID não encontrado:

Deve lançar um erro "Usuário não encontrado".

🔍 3. Buscar Usuários por Empresa
Objetivo:
Listar usuários ativos de uma empresa específica.

Passos:
Preparar o cenário:

Inserir uma empresa válida.

Associar usuários à empresa (alguns ativos, outros desabilitados).

Executar a ação:

Chamar a função de listagem com o ID da empresa.

Verificar o resultado:

Deve retornar apenas usuários ativos da empresa.

Verificar que o resultado é um array com os campos corretos.

Casos negativos:
Empresa não encontrada:

Deve lançar erro "Empresa não encontrada".

Empresa sem usuários:

Deve retornar array vazio.

✏️ 4. Editar Usuário
Objetivo:
Alterar os dados permitidos de um usuário (ex: nome, telefone, etc.).

Passos:
Preparar o cenário:

Inserir um usuário válido no banco.

Executar a ação:

Chamar a função de edição com o ID e os novos dados válidos.

Verificar o resultado:

Verificar se os dados foram atualizados corretamente.

Verificar se os dados não permitidos (ex: e-mail, senha, etc., se não editáveis) não foram alterados.

Casos negativos:
Usuário não encontrado:

Deve lançar erro "Usuário não encontrado".

Tentativa de alterar campo não permitido:

Deve lançar erro ou ignorar alteração.
 */
