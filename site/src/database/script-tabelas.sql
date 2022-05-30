-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create table empresa (
  idEmpresa int primary key identity,
  nomeEmpresa varchar(80),
  cnpj char(15),
  logradouro varchar(45),
  numero varchar(15),
  bairro varchar(45),
  cidade varchar(45),
  estado char(2),
  cep char(8),
  telefoneContato1 varchar(15),
  telefoneContato2 varchar(15),
  empresaGestora int,
  foreign key (empresaGestora) references empresa(idEmpresa)
);

insert into empresa values
	( 'SPTrans', '558004101000110', 'Rua Boa Vista', '274', 'Centro', 'São Paulo', 'SP', '01014000', '8000110156', '156', null),
	( 'MOBIBRASIL', '558004101000118', 'Avenida Engenheiro George Corbisier', '1100', 'Jabaquara', 'São Paulo', 'SP', '04345001', '1156722100', '', 1),
    ( 'Move Bus', '558004101000119', 'Rua Murta do Campo', '405', 'Vila Alpina', 'São Paulo', 'SP', '03210010', '1129110675', '1123027920', 1);

create table usuario (
  idUsuario int primary key identity,
  emailUsuario varchar(45),
  senhaUsuario varchar(50),
  fkEmpresa int,
  foreign key (fkEmpresa) references empresa(idEmpresa)
);

insert into usuario values 
	('antonio.sptrans@hotmail.com', 'antonioMobibrasil7522', 1),
	('silva.mobibrasil@gmail.com', 'Maria25022008', 2),
    ('joana.movebus@outlook.com', '@Joanna7885', 3);

create table linha (
  idLinha int primary key identity,
  nomeLinha varchar(45),
  rota varchar(45),
  fkEmpresa int,
  foreign key (fkEmpresa) references empresa(idEmpresa)
);
insert into linha values
	('Terminal Piraporinha / Terminal Eldorado', '13EP', 2),
    ('Terminal Piraporinha / Jardim Gazuza', '14P', 2),
    ('Terminal Piraporinha / Jardim Arco-Íris', '16P', 2),
    ('Terminal Diadema / Terminal Piraporinha', '20DP', 2),
    ('Terminal Diadema / Terminal Piraporinha', '22DP', 2),
    ('Terminal Parelheiros / Terminal Santo Amaro', '6000-10', 2),
    ('HOSP. IPIRANGA / SHOP. ARICANDUVA', '364A-10', 3),
    ('JD. ITÁPOLIS / METRÔ BRESSER', '373T-10', 3),
    ('VL. INDUSTRIAL / TERM. NORTE METRÔ CARRÃO', '414P-10', 3),
    ('TERM. SACOMÃ / JD. ITÁPOLIS','514T-10', 3),
    ('PQ. SÃO LUCAS / METRÔ TATUAPÉ', '524L-10', 3),
    ('MASCARENHAS DE MORAIS / SHOP. ARICANDUVA', '524M-10', 3);

create table onibus (
	idOnibus int primary key identity,
    numeroOnibus varchar(45),
    placaOnibus varchar(45),
    fkLinha int,
    foreign key (fkLinha) references linha(idLinha)
);
insert into onibus values
	('13080', 'CBM-0688', 1),
	('16494', 'EVB-1786', 1),    
    ('64442', 'NXC-7891', 2),
	('21665', 'EMM-0916', 2),    
    ('20884', 'BPB-4425', 3),
	('35075', 'CWH-2972', 3),
	('43254', 'EEZ-8764', 3),    
    ('45475', 'GBN-7380', 4),    
    ('54453', 'DSD-7053', 5),
	('74262', 'CLF-9025', 5),
	('80437', 'EZV-8655', 5),    
    ('85670', 'EDG-1784', 6),
	('22063', 'ETH-9604', 6),    
    ('30790', 'ETC-9109', 7),
	('56080', 'GCR-2128', 7),
	('66934', 'CES-6498', 7),    
    ('69231', 'BJI-7600', 8),    
    ('71263', 'GCS-5938', 9),
	('73721', 'ESX-1701', 9),    
    ('79872', 'CQA-0813', 10),
	('82496', 'BOX-5531', 10),    
    ('88324', 'DFU-3877', 11),    
    ('92344', 'EQV-1097', 12),
	('97136', 'FBZ-8372', 12),
	('97784', 'BWN-4629', 12);



create table sensor (
	idSensor int primary key identity,
    tipoSensor varchar(45),
    fkOnibus int,
    foreign key (fkOnibus) references onibus(idOnibus)
);
insert into sensor values
	('Entrada',1),
    ('Saída',1),
    ('Catraca',1),
    ('Entrada',2),
    ('Saída',2),
    ('Catraca',2),
    ('Entrada',3),
    ('Saída',3),
    ('Catraca',3),
    ('Entrada',4),
    ('Saída',4),
    ('Catraca',4),    
    ('Entrada',5),
    ('Saída',5),
    ('Catraca',5),    
    ('Entrada',6),
    ('Saída',6),
    ('Catraca',6),    
    ('Entrada',7),
    ('Saída',7),
    ('Catraca',7),    
    ('Entrada',8),
    ('Saída',8),
    ('Catraca',8),    
    ('Entrada',9),
    ('Saída',9),
    ('Catraca',9),    
    ('Entrada',10),
    ('Saída',10),
    ('Catraca',10),    
    ('Entrada',11),
    ('Saída',11),
    ('Catraca',11),    
    ('Entrada',12),
    ('Saída',12),
    ('Catraca',12),    
    ('Entrada',13),
    ('Saída',13),
    ('Catraca',13),    
    ('Entrada',14),
    ('Saída',14),
    ('Catraca',14),    
    ('Entrada',15),
    ('Saída',15),
    ('Catraca',15),    
    ('Entrada',16),
    ('Saída',16),
    ('Catraca',16),    
    ('Entrada',17),
    ('Saída',17),
    ('Catraca',17),    
    ('Entrada',18),
    ('Saída',18),
    ('Catraca',18),    
    ('Entrada',19),
    ('Saída',19),
    ('Catraca',19),    
    ('Entrada',20),
    ('Saída',20),
    ('Catraca',20),    
    ('Entrada',21),
    ('Saída',21),
    ('Catraca',21),    
    ('Entrada',22),
    ('Saída',22),
    ('Catraca',22),    
    ('Entrada',23),
    ('Saída',23),
    ('Catraca',23),    
    ('Entrada',24),
    ('Saída',24),
    ('Catraca',24),    
    ('Entrada',25),
    ('Saída',25),
    ('Catraca',25);

create table medida (
	idmedida int identity,
    dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fkSensor int,
	primary key (idmedida,fkSensor),
	foreign key (fkSensor) references sensor(idSensor)
);
	
CREATE TABLE Alerta(
    idAlerta INT primary Key identity,
    tipoAlerta varchar(40)
);

insert into Alerta (tipoAlerta) values
('Onibus vazio'),
('Usuarios a baixo do esperado'),
('Onibus proximo da capacidade maxima'),
('Onibus lotação maxima');

CREATE TABLE Central(
    idCentral INT identity, 
    dtAlerta DATETIME,
    fkAlerta INT,
    foreign key (fkAlerta) references Alerta (idAlerta),
    fkAlertaOnibus INT,
    foreign key (fkAlertaOnibus) references Onibus (idOnibus),
    primary key (idCentral, fkAlerta, fkAlertaOnibus)
    
);