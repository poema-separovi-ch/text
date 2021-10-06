const fs = require('fs');
const fullNow = new Date().toISOString();
const now = fullNow.substr(0, 10);
const POST = `---
title: XXXXXXXXXXXXX
description: XXXXXXXX...
author: Alvaro Separovich Cassiano dos Santos
reviser: Pietro Menezes Silva
date: '${now}'
modified_date: '${now}'
image: /assets/images/posts/random-img.jpg
tags:
  - XXXXXXXXXXX
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