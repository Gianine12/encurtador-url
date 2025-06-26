#!/bin/sh

# Espera até o banco de dados aceitar conexões
echo "Aguardando banco de dados..."

while ! pg_isready -h "$DB_HOST" -p 5432 -U "$DB_USER" > /dev/null 2>&1; do
  sleep 2
done

echo "Banco de dados disponível, iniciando aplicação..."

# Executa o comando passado para o script
exec "$@"
