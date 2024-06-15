# AEP 2º Bimestre 5 Semestre

Integrantes: 
- Gabriel Presense RA: 22143207-2
- Hudson Uccelli Matias dos Santos RA: 22045746-2
- Pedro Henrique de Abreu Lourenço RA: 22014566-2

**Logo abaixo serão as entregas e a explicação de cada matéria** 

## Teoria da Computação

### _AFD (Autômato Finito Deterministico)_

#### Regras para Nome de Usuário
O nome de usuário deve ter entre 3 e 10 caracteres.
O nome de usuário deve conter apenas letras (maiúsculas ou minúsculas) e dígitos.

**Para login:**
```
q0 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q1
q1 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q2
q2 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q3
q3 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q4
q4 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q5
q5 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q6
q6 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q7
q7 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q8
q8 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q9
q9 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q10
q10 --[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]--> q11
```

#### Regras para a Senha do Usuário
A senha deve ter entre 6 e 12 caracteres.
A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial (por exemplo, @, #, !).

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

### _GR (Gramática Regular)_

#### Regras para o Nome de Usuário
O nome de usuário deve ter entre 3 e 10 caracteres.
O nome de usuário deve conter apenas letras (maiúsculas ou minúsculas) e dígitos.
_Na regra de produção eu simplifiquei_
**Para login:**
```
V = {S, A, B, C, D, E, F, G, H, I, J}
T = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9}
𝑆 = S
P = {
S → A ∣ B ∣ C ∣ D ∣ E ∣ F ∣ G ∣ H ∣ I
A → [a−zA−Z0−9]A ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
B → [a−zA−Z0−9]B ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
C → [a−zA−Z0−9]C ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
D → [a−zA−Z0−9]D ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
E → [a−zA−Z0−9]E ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
F → [a−zA−Z0−9]F ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
G → [a−zA−Z0−9]G ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
H → [a−zA−Z0−9]H ∣ [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
I → [a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9][a−zA−Z0−9]
}
```

#### Regras para a Senha do Usuário
A senha deve ter entre 6 e 12 caracteres.
A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito e um caractere especial (por exemplo, @, #, !, etc.).

**Para senha:**
```
V = {S, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O}
T = {a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,@,#,!}
𝑆 = S
P = {
S→ A ∣ B ∣ C ∣ D ∣ E ∣ F ∣ G ∣ H ∣ I ∣ J ∣ K ∣ L ∣ M  ∣ N 
A → [a−z]B
B → [A−Z]C
C → [0−9]D
D → [@#!]E
E → [a-zA-Z0-9@#!]F | [a-zA-Z0-9@#!][a-zA-Z0-9@#!][a-zA-Z0-9@#!][a-zA-Z0-9@#!][a-zA-Z0-9@#!][a-zA-Z0-9@#!]
F → [a-zA-Z0-9@#!]G | [a-zA-Z0-9@#!][a-zA-Z0-9@#!]
G → [a-zA-Z0-9@#!]H | [a-zA-Z0-9@#!]
H → [a-zA-Z0-9@#!]I
I → [a-zA-Z0-9@#!]J
J → [a-zA-Z0-9@#!]K
K → [a-zA-Z0-9@#!]L
L → [a-zA-Z0-9@#!]M
M → [a-zA-Z0-9@#!]N
N → [a-zA-Z0-9@#!]O | [a-zA-Z0-9@#!]
O → [a-zA-Z0-9@#!]O | λ
}
```

## Estrutura de Dados 2

Fizemos um sistema que marca o atendimento com a data, horário e descrição.

__Tabela Hash__

Link: https://replit.com/@HudsonUccelli1/AEPhash

__Grafo__

Link: https://replit.com/@HudsonUccelli1/AEPgrafo

__Árvore__

Link: https://replit.com/@HudsonUccelli1/AEParvore

## Métricas de Software

Fizemos uma pesquisa de mercado, onde foram apresentadas as métricas presentes tanto nos concorrentes quanto no software desenvolvido.
As métricas são apresentadas por meio de um relatório no Lighthouse.

__Relatório Health Trackr__

Link do relatório: https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fgabrielpresense.github.io%2FHealth-Trackr%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=pt&utm_source=lh-chrome-ext

__Relatório de concorrentes__

**Conexa**
o maior ecossistema digital de saúde física e mental.

Link do relatório: https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.conexasaude.com.br%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=pt&utm_source=lh-chrome-ext

Link da plataforma: https://www.conexasaude.com.br/

**Dr. Consulta**
Plataforma concentrada na região de São Paulo, com foco nas mais variadas especializações médicas

Link do relatório: https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fdrconsulta.com%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=pt&utm_source=lh-chrome-ext

Link da plataforma: https://drconsulta.com/

**Teladoc**
Único concorrente estrangeiro, traz uma série de soluções relacionadas à saúde na região de Nova York

Link do relatório: https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.teladochealth.com%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=pt&utm_source=lh-chrome-ext

Link da plataforma: https://www.teladochealth.com/