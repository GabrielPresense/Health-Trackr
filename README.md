# AEP 2º Bimestre 5 Semestre

Integrantes: 
- Gabriel Presense RA: 22143207-2
- Hudson Uccelli Matias dos Santos RA: 22045746-2
- Pedro Henrique de Abreu Lourenço RA: 22014566-2

**Logo abaixo será as entregas e a explicação de cada matéria** 

## Teoria da Computação

_AFD (Autômato Finito Deterministico)_

Fizemos a parte de login sendo o nome de apenas 10 caracteres.
Que seria feito assim:

**Para login:**
```
q0 --[a-zA-Z0-9]--> q1
q1 --[a-zA-Z0-9]--> q2
q2 --[a-zA-Z0-9]--> q3
q3 --[a-zA-Z0-9]--> q4
q4 --[a-zA-Z0-9]--> q5
q5 --[a-zA-Z0-9]--> q6
q6 --[a-zA-Z0-9]--> q7
q7 --[a-zA-Z0-9]--> q8
q8 --[a-zA-Z0-9]--> q9
q9 --[a-zA-Z0-9]--> q10
q10 --[a-zA-Z0-9]--> q11
```

**Para senha:**
```
q0 --[abcdefghijklmnopqrstuvwxyz]--> q1 (tem minúscula)
q0 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ]--> q2 (tem maiúscula)
q0 --[0123456789]--> q3 (tem dígito)
q0 --[@#!]--> q4 (tem especial)

q1 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!]--> q5
q2 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!]--> q6
q3 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!]--> q7
q4 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!]--> q8

q5 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ]--> q9
q5 --[0123456789]--> q10
q5 --[@#!]--> q11

q6 --[abcdefghijklmnopqrstuvwxyz]--> q9
q6 --[0123456789]--> q12
q6 --[@#!]--> q13

q7 --[abcdefghijklmnopqrstuvwxyz]--> q10
q7 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ]--> q12
q7 --[@#!]--> q13

q8 --[abcdefghijklmnopqrstuvwxyz]--> q11
q8 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ]--> q12
q8 --[0123456789]--> q13

q9 --[0123456789@#!]--> q13
q10 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ@#!]--> q13
q11 --[ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q13

q12 --[abcdefghijklmnopqrstuvwxyz@#!]--> q13
q13 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!]--> q13
```

_GR (Gramática Regular)_

