![logo_ironhack_blau 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Les millors pel·lícules de tots els temps

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

## Introducció

Acabem d'aprendre alguns mètodes útils, que ens ajudaran a manipular **objectes i matrius** . En aquest exercici, practicarem el treball amb aquests mètodes, i cal que n'utilitzeu almenys un a cada iteració.

La millor manera de practicar és treballar amb dades reals. Al fitxer **`src/data.js`** , trobareu una sèrie d'informació sobre **les 250 millors pel·lícules de tots els temps** segons el [rànquing IMDB](http://www.imdb.com/chart/top?ref\_=nv_mv\_250\_6) que utilitzareu per mostrar el que demana cada iteració. :muscle :

<br/>

## Requisits

- Bifurca aquest repo.
- Clona aquest repo.
- Practiqueu mètodes avançats de JavaScript ( `map` , `reduce` , `filter` i `sort` per manipular matrius).

<br/>

## Submissió

- En finalitzar, executeu les ordres següents:

```bash
$ git add .
$ git commit -m "Solved lab"
$ git push origin master
```

- Creeu una sol·licitud d'extracció perquè els vostres TA puguin comprovar el vostre treball.

<br/>

## Introducció

El `src/data.js` conté una matriu de 250 pel·lícules. És una matriu de 250 _objectes_ que conté la informació sobre cada pel·lícula. Aquí teniu un exemple de com es mostren les dades:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Aprofundiràs en alguns "fets" que té aquest conjunt de dades. Per exemple, podem utilitzar aquest conjunt de dades per trobar quina és la pel·lícula més popular, quina és la durada mitjana de la pel·lícula, la llista de pel·lícules d'algun director, etc. Bé, aquí ve el vostre repte. En les properes iteracions, utilitzareu el vostre coneixement de JS per manipular aquestes dades.

Recordeu llegir atentament la descripció de cada iteració abans de treballar en la solució.

<br/>

## Instruccions

Treballareu amb el fitxer `src/movies.js` , que ja està carregat al fitxer `index.html` .

El fitxer `src/data.js` que conté la matriu de pel·lícules també es carrega al fitxer `index.html` .

Per executar el codi JavaScript, obriu el fitxer `index.html` amb l'extensió [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VSCode.

Per veure la sortida del vostre codi JavaScript, obriu la [consola a les Eines per a desenvolupadors](https://developer.chrome.com/docs/devtools/open/#console) .

<br/>

<hr/>

### Nota sobre les proves

Aquest LAB està equipat amb proves unitàries per proporcionar comentaris automatitzats sobre el progrés del vostre laboratori.

**Després de completar les iteracions bàsiques** , aneu a la secció **"Prova el teu codi"** a la part inferior. Allà se us demanarà que instal·leu les dependències de prova i que executeu les proves per comprovar quantes proves està passant el vostre codi. Un cop hàgiu executat les proves, corregiu el codi per superar les proves fallides.

<hr/>

<br/>

### Iteració 1: tots els directors

Hem d'aconseguir el conjunt de tots els directors. Com que es tracta d'un escalfament, us donarem una pista: heu de _traçar_ el conjunt de pel·lícules i reunir tots els directors en una mateixa matriu com a resultat final. Avança i creeu una funció anomenada `getAllDirectors()` que rep una matriu de pel·lícules com a argument i retorni una nova (matriu _mapejada_ ).

<br/>

#### Bonificació - Iteració 1.1: _neteja_ la matriu de directors

Sembla que alguns dels directors havien dirigit diverses pel·lícules, de manera que apareixeran diverses vegades a la sèrie de directors. Com podríeu "netejar" una mica aquesta matriu i unificar-la (és a dir, sense duplicats)? _No prioritzeu la part de bonificació ara, podeu tornar-hi quan hàgiu acabat amb les iteracions obligatòries._ :wink :

<br/>

### Iteració 2: Steven Spielberg. El millor?

Un dels directors més famosos del cinema és **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)** , i té algunes pel·lícules de drama realment impressionants que estan a la nostra llista, però volem saber quantes n'hi ha.

Seguiu endavant i creeu una funció `howManyMovies()` que rebi una matriu com a paràmetre i `filter` de :eyes : la matriu perquè només puguem tenir les pel·lícules **de drama** on **Steven Spielberg** és el director.

<br/>

### Iteració 3: totes les puntuacions mitjanes

Aquestes són les millors pel·lícules basades en les seves partitures, així que suposadament totes tenen una puntuació notable. En aquesta iteració, volem conèixer la puntuació mitjana de totes elles i mostrar-la a la consola. Creeu una funció `scoresAverage()` que rep una matriu com a paràmetre i resolgui el repte.

La puntuació s'ha de retornar arrodonida a 2 decimals!

**:bulb : potser voleu _"reduir"_ les dades a un sol valor. :wink :**

<br/>

### Iteració 4: pel·lícules dramàtiques

El drama és el gènere que més es repeteix a la nostra `array` . Pel que sembla, a la gent li encanta el drama! :eyes :

Creeu una funció `dramaMoviesScore()` que rebi una matriu com a paràmetre per obtenir la puntuació mitjana de totes les pel·lícules de drama! A veure si és millor que la mitjana general.

Un cop més, arrodonit a 2 decimals!

<br/>

### Iteració 5: ordena per any

Hem d'ordenar les pel·lícules en ordre ascendent per any d'estrena. Això hauria de ser fàcil utilitzant un dels **mètodes** que acabem d'aprendre. :wink : crea una funció `orderByYear()` que rep una matriu com a paràmetre i retorna una _nova matriu ordenada_ .

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

Si dues pel·lícules tenen el mateix any, ordena-les per ordre alfabètic pel seu títol! \_marca :heavy context:

**:bulb : assegureu-vos de no :wink la matriu original.**

<br/>

### Iteració 6: ordre alfabètic

Una altra manera popular d'ordenar les pel·lícules és ordenar-les alfabèticament mitjançant la clau del `title` . No obstant això, en aquest cas, només hem d'imprimir el títol dels 20 primers. Fàcil peasy per a un expert com tu. :wink :

Creeu una funció `orderAlphabetically()` , que rep una matriu i retorni una matriu dels primers 20 títols, ordenats alfabèticament. Retorneu només el títol de cada pel·lícula i, si la matriu que rebeu té menys de 20 pel·lícules, retorneu-les totes.

<br/>

### BONUS - Iteració 7: format de temps

Obtenim la informació de la pàgina web de l' **IMDB** , però la informació de durada es va guardar en un format que ens dificulta molt comparar pel·lícules.

Trobar la pel·lícula més llarga és gairebé impossible amb aquest format, així que canviem-la!

- Creeu una funció `turnHoursToMinutes()` que rebi una matriu com a paràmetre i, amb una mica de _màgia_ implementada per vosaltres, substitueix la informació de durada de cadascuna de les pel·lícules pel seu equivalent en minuts. Per exemple:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Hauria de ser:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":142,
  "genre":["Crime","Drama"],
  "score":9.3
}
```

**Tingueu en compte** que heu de tornar una matriu nova amb tota la informació sobre pel·lícules, és a dir, no haureu de modificar la matriu original.

<br/>

### BONUS - Iteració 8: Millor mitjana de puntuació anual

Sempre sentim parlar de pel·lícules clàssiques, però volem saber quin any té la millor puntuació mitjana, així podem declarar oficialment el **MILLOR ANY PER AL CINEMA** !

Endavant i troba quin any té la millor puntuació mitjana per a les pel·lícules que es van estrenar aquell any! Crea la funció `bestYearAvg()` que rep una sèrie de pel·lícules i ens dóna una resposta quin any va ser el millor any per al cinema i quina va ser la seva mitjana. puntuació. `bestYearAvg()` hauria de retornar una **cadena** amb l'estructura següent:<br/>

**El millor any va ser amb una puntuació mitjana de**

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

<br/>

## Prova el teu codi

Ohh sí! Tenim les nostres proves i ja sabeu com funciona. Obriu el vostre terminal, canvieu els directoris a l'arrel del laboratori i executeu `npm install` per instal·lar l'executor de proves. A continuació, executeu les proves executant l'ordre `npm run test:watch` .

En resum, els passos són:

```shell
$ cd lab-js-greatest-movies-cat
$ npm install
$ npm run test:watch
```

I per últim, obriu el fitxer `lab-solution.html` generat amb l'extensió VSCode "Live Server" per veure els resultats de la prova.

Recordeu centrar-vos en una prova alhora i llegiu atentament les instruccions per entendre què heu de fer.

Les proves es poden trobar al fitxer `tests/movies.spec.js` .

<br/>

**Feliç codificació!** :heart: