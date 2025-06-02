-- usuário: root
-- senha: c@tolic@

-- criar o banco de dados
create database userdb;

use userdb;

-- criar a tabela de usuários
create table users (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null
);

select * from users;
