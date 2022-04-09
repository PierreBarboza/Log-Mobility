create database LogMobility;

use LogMobility;

create table usuario (
  idUsuario int primary key auto_increment,
  senha varchar(50),
  codTipoUsuario int,
  tipoUsuario varchar(45),
  nomeEmpresaResponsavel varchar(45)
);

create table empresa (
  idEmpresa int primary key auto_increment,
  nome varchar(80),
  cnpj char(15),
  logradouro varchar(45),
  numero varchar(15),
  bairro varchar(45),
  cidade varchar(45),
  estado char(2),
  cep char(8),
  telefoneContato1 char(10),
  telefoneContato2 char(10),
  email varchar(40),
  fkUsuario int,
  foreign key (fkUsuario) references usuario(idUsuario)
);