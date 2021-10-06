const fs = require('fs');
const fullNow = new Date().toISOString();
const now = fullNow.substr(0, 10);
const POST = `---
title: XXXXXXXXXXXXX
author: Alvaro Separovich Cassiano dos Santos
reviser: Pietro Menezes Silva
---   

______

> XXXXXXXXXXXXXXXX  


> Revisado Por Pietro Menezes Silva
`;

const POSTname = `${fullNow}`;

try {
  fs.mkdirSync(POSTname);
} catch (e) {}

try {
  fs.readFileSync(`${POSTname}/readme.md`, 'utf8')
  console.log('\n\nAta com a data de hoje já existe!\n\n')
} catch (e) {
  fs.writeFileSync(`${POSTname}/readme.md`, POST);
  console.log('\n\nAta Criada!\n\n')
}