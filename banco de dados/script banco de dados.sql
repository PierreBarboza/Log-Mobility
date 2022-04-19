create database LogMobility;

use LogMobility;

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
  telefoneContato1 varchar(15),
  telefoneContato2 varchar(15),
  email varchar(40),
  empresaGestora int,
  foreign key (empresaGestora) references empresa(idEmpresa)
);

create table usuario (
  idUsuario int primary key auto_increment,
  emailUsuario varchar(45),
  senhaUsuario varchar(50),
  fkEmpresa int,
  foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table linha (
  idLinha int primary key auto_increment,
  nomeLinha varchar(45),
  mediaDiaria decimal(10,2),
  quantidadeOnibusRodando int,
  rota varchar(45),
  custoLinhaMensal decimal(10,2),
  fkEmpresa int,
  foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table onibus (
	idOnibus int primary key auto_increment,
    numeroOnibus varchar(45),
    fkLinha int,
    foreign key (fkLinha) references linha(idLinha)
);

create table sensor (
	idSensor int primary key auto_increment,
    tipoSensor varchar(45),
    fkOnibus int,
    foreign key (fkOnibus) references onibus(idOnibus)
);

create table registro (
	idRegistro int,
	dataHora datetime,
	fkSensor int,
	primary key (idRegistro,fkSensor),
	foreign key (fkSensor) references sensor(idSensor)
);

insert into empresa values
	(null, 'SPTrans', '558004101000110', 'Rua Boa Vista', '274', 'Centro', 'São Paulo', 'SP', '01014000', '8000110156', '156', 'ouvidoria@sptrans.com.br', null),
	(null, 'MOBIBRASIL', '558004101000118', 'Avenida Engenheiro George Corbisier', '1100', 'Jabaquara', 'São Paulo', 'SP', '04345001', '1156722100', '', 'fernandapiccoli@mobibrasil.com', 1),
    (null, 'Move Bus', '558004101000119', 'Rua Murta do Campo', '405', 'Vila Alpina', 'São Paulo', 'SP', '03210010', '1129110675', '1123027920', 'moveBuss@outlook.com', 1);

insert into usuario values 
	(null, 'antonio.sptrans@hotmail.com', 'batatinhafrita123', 1),
	(null, 'silva.mobibrasil@gmail.com', 'batatinhafrita1234', 2),
    (null, 'joana.movebus@outlook.com', 'batatinhafrita1235', 3);

insert into linha values
	(null,'Terminal Piraporinha / Terminal Eldorado', 100.75, 2, '13EP', '1000.00', 2),
    (null,'Terminal Piraporinha / Jardim Gazuza', 150.25, 2, '14P', '3000.00', 2),
    (null,'Terminal Piraporinha / Jardim Arco-Íris', 200.25, 3, '16P', '2000.00', 2),
    (null,'Terminal Diadema / Terminal Piraporinha', 150.25, 1, '20DP', '1500.00', 2),
    (null,'Terminal Diadema / Terminal Piraporinha', 100.75, 3, '22DP', '4000.00', 2),
    (null,'Terminal Parelheiros / Terminal Santo Amaro', 1000.75, 2, '6000-10', '4000.00', 2),
    (null,'HOSP. IPIRANGA / SHOP. ARICANDUVA', 650.75, 3, '364A-10', '4000.00', 3),
    (null,'JD. ITÁPOLIS / METRÔ BRESSER', 90.25, 1, '373T-10', '2000.00', 3),
    (null,'VL. INDUSTRIAL / TERM. NORTE METRÔ CARRÃO', 400.80, 2, '414P-10', '2900.00', 3),
    (null,'TERM. SACOMÃ / JD. ITÁPOLIS', 150.25, 2, '514T-10', '2550.00', 3),
    (null,'PQ. SÃO LUCAS / METRÔ TATUAPÉ', 100.75, 1, '524L-10', '1000.00', 3),
    (null,'MASCARENHAS DE MORAIS / SHOP. ARICANDUVA', 900.50, 3, '524M-10', '10000.00', 3);

insert into onibus values
	(null, '13080', 1),(null, '16494', 1),
    
    (null, '20884', 2),(null, '21665', 2),
    
    (null, '34285', 3),(null, '35075', 3),(null, '43254', 3),
    
    (null, '45475', 4),
    
    (null, '54453', 5),(null, '74262', 5),(null, '80437', 5),
    
    (null, '85670', 6),(null, '22063', 6),
    
    (null, '30790', 7),(null, '56080', 7),(null, '66934', 7),
    
    (null, '69231', 8),
    
    (null, '71263', 9),(null, '73721', 9),
    
    (null, '79872', 10),(null, '82496', 10),
    
    (null, '88324', 11),
    
    (null, '92344', 12),(null, '97136', 12),(null, '97784', 12);

insert into sensor values
	(null,'Entrada',1),(null,'Saída',1),(null,'Catraca',1),

    (null,'Entrada',2),(null,'Saída',2),(null,'Catraca',2),

    (null,'Entrada',3),(null,'Saída',3),(null,'Catraca',3),

    (null,'Entrada',4),(null,'Saída',4),(null,'Catraca',4),
    
    (null,'Entrada',5),(null,'Saída',5),(null,'Catraca',5),
    
    (null,'Entrada',6),(null,'Saída',6),(null,'Catraca',6),
    
    (null,'Entrada',7),(null,'Saída',7),(null,'Catraca',7),
    
    (null,'Entrada',8),(null,'Saída',8),(null,'Catraca',8),
    
    (null,'Entrada',9),(null,'Saída',9),(null,'Catraca',9),
    
    (null,'Entrada',10),(null,'Saída',10),(null,'Catraca',10),
    
    (null,'Entrada',11),(null,'Saída',11),(null,'Catraca',11),
    
    (null,'Entrada',12),(null,'Saída',12),(null,'Catraca',12),
    
    (null,'Entrada',13),(null,'Saída',13),(null,'Catraca',13),
    
    (null,'Entrada',14),(null,'Saída',14),(null,'Catraca',14),
    
    (null,'Entrada',15),(null,'Saída',15),(null,'Catraca',15),
    
    (null,'Entrada',16),(null,'Saída',16),(null,'Catraca',16),
    
    (null,'Entrada',17),(null,'Saída',17),(null,'Catraca',17),
    
    (null,'Entrada',18),(null,'Saída',18),(null,'Catraca',18),
    
    (null,'Entrada',19),(null,'Saída',19),(null,'Catraca',19),
    
    (null,'Entrada',20),(null,'Saída',20),(null,'Catraca',20),
    
    (null,'Entrada',21),(null,'Saída',21),(null,'Catraca',21),
    
    (null,'Entrada',22),(null,'Saída',22),(null,'Catraca',22),
    
    (null,'Entrada',23),(null,'Saída',23),(null,'Catraca',23),
    
    (null,'Entrada',24),(null,'Saída',24),(null,'Catraca',24),
    
    (null,'Entrada',25),(null,'Saída',25),(null,'Catraca',25);

insert into registro values 
(1, '2022-04-15 04:17:17', 1),
(1, '2022-04-15 04:49:17', 2),
(1, '2022-04-15 04:19:17', 3),

(2, '2022-04-16 13:17:17', 4),
(2, '2022-04-16 13:49:17', 5),
(2, '2022-04-16 13:19:17', 6),

(3, '2022-04-17 10:17:17', 7),
(3, '2022-04-17 10:49:17', 8),
(3, '2022-04-17 10:19:17', 9),

(4, '2022-04-18 23:17:17', 10),
(4, '2022-04-18 23:49:17', 11),
(4, '2022-04-18 23:19:17', 12),

(5, '2022-04-19 03:17:17', 13),
(5, '2022-04-19 03:49:17', 14),
(5, '2022-04-19 03:19:17', 15),

(6, '2022-04-20 20:17:17', 16),
(6, '2022-04-20 20:49:17', 17),
(6, '2022-04-20 20:19:17', 18),

(7, '2022-04-21 14:17:17', 19),
(7, '2022-04-21 14:49:17', 20),
(7, '2022-04-21 14:19:17', 21),

(8, '2022-04-22 11:17:17', 22),
(8, '2022-04-22 11:49:17', 23),
(8, '2022-04-22 11:19:17', 24),

(9, '2022-04-23 21:17:17', 25),
(9, '2022-04-23 21:49:17', 26),
(9, '2022-04-23 21:19:17', 27),

(10, '2022-04-24 05:17:17', 28),
(10, '2022-04-24 05:49:17', 29),
(10, '2022-04-24 05:19:17', 30),

(11, '2022-04-25 15:17:17', 31),
(11, '2022-04-25 15:49:17', 32),
(11, '2022-04-25 15:19:17', 33),

(12, '2022-04-26 06:17:17', 34),
(12, '2022-04-26 06:49:17', 35),
(12, '2022-04-26 06:19:17', 36),

(13, '2022-04-27 16:17:17', 37),
(13, '2022-04-27 16:49:17', 38),
(13, '2022-04-27 16:19:17', 39),

(14, '2022-04-28 07:17:17', 40),
(14, '2022-04-28 07:49:17', 41),
(14, '2022-04-28 07:19:17', 42),

(15, '2022-04-29 17:17:17', 43),
(15, '2022-04-29 17:49:17', 44),
(15, '2022-04-29 17:19:17', 45),

(16, '2022-04-30 08:17:17', 46),
(16, '2022-04-30 08:49:17', 47),
(16, '2022-04-30 08:19:17', 48),

(17, '2022-05-01 18:17:17', 49),
(17, '2022-05-01 18:49:17', 50),
(17, '2022-05-01 18:19:17', 51),

(18, '2022-05-02 09:17:17', 52),
(18, '2022-05-02 09:49:17', 53),
(18, '2022-05-02 09:19:17', 54),

(19, '2022-05-03 19:17:17', 55),
(19, '2022-05-03 19:49:17', 56),
(19, '2022-05-03 19:19:17', 57),

(20, '2022-05-04 13:17:17', 58),
(20, '2022-05-04 13:49:17', 59),
(20, '2022-05-04 13:19:17', 60),

(21, '2022-05-05 23:17:17', 61),
(21, '2022-05-05 23:49:17', 62),
(21, '2022-05-05 23:19:17', 63),

(22, '2022-05-06 15:17:17', 64),
(22, '2022-05-06 15:49:17', 65),
(22, '2022-05-06 15:19:17', 66),

(23, '2022-05-07 19:17:17', 67),
(23, '2022-05-07 19:49:17', 68),
(23, '2022-05-07 19:19:17', 69),

(24, '2022-05-08 11:17:17', 70),
(24, '2022-05-08 11:49:17', 71),
(24, '2022-05-08 11:19:17', 72),

(25, '2022-05-09 22:17:17', 73),
(25, '2022-05-09 22:49:17', 74),
(25, '2022-05-09 22:19:17', 75);

-- exibir todas as empresas do sistema
select * from empresa;

-- exibir todos os usuários de cada empresa
select * from empresa join usuario on idEmpresa = fkEmpresa;
select nome, idUsuario, emailUsuario, senhaUsuario from empresa join usuario on idEmpresa = fkEmpresa;
select nome, idUsuario, emailUsuario, senhaUsuario from empresa join usuario on idEmpresa = fkEmpresa where nome = 'SPTrans';
select nome, idUsuario, emailUsuario, senhaUsuario from empresa join usuario on idEmpresa = fkEmpresa where nome = 'mobibrasil';
select nome, idUsuario, emailUsuario, senhaUsuario from empresa join usuario on idEmpresa = fkEmpresa where nome = 'move bus';

-- exibir todas as empresas geridas pela SPTrans
select * from empresa join empresa as empresaGestora on empresa.empresaGestora = empresaGestora.idEmpresa;
select empresaGestora.nome, empresaGestora.email as email, empresa.nome, empresa.email
	from empresa 
		join empresa 
			as empresaGestora on empresaGestora.idEmpresa = empresa.empresaGestora;

-- exibir todas as empresas com suas linhas
select * from empresa join linha on idEmpresa = fkEmpresa;
select nome,rota,nomeLinha,mediaDiaria,quantidadeOnibusRodando,custoLinhaMensal from empresa join linha on idEmpresa = fkEmpresa;

-- exibir todas as linhas com seus onibus
select * from linha join onibus on idLinha = fkLinha;
select fkLinha,numeroOnibus,rota,nomeLinha,mediaDiaria,quantidadeOnibusRodando,custoLinhaMensal from linha join onibus on idLinha = fkLinha;

-- exibir todos os onibus com seus sensores
select * from onibus join sensor on idOnibus = fkOnibus;
select idOnibus,numeroOnibus,tipoSensor from onibus join sensor on idOnibus = fkOnibus;

-- exibir todos os sensores com seus registros
select * from sensor join registro on idSensor = fkSensor;
select tipoSensor,fkOnibus,dataHora from sensor join registro on idSensor = fkSensor;
select idOnibus,numeroOnibus,tipoSensor,dataHora from onibus join sensor on idOnibus = fkOnibus join registro on idSensor = fkSensor;

-- exibir todos os registros em um mesmo join
select numeroOnibus,rota,nomeLinha,mediaDiaria,quantidadeOnibusRodando,custoLinhaMensal,tipoSensor,dataHora 
	from linha join onibus on idLinha = fkLinha join sensor on idOnibus = fkOnibus join registro on idSensor = fkSensor;