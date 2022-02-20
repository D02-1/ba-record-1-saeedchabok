
## Task 01 - Mock database and Controllers

Most applications made for the web have to do with some sort of data manipulation. In order to be able to manipulate our data we have to do two things first:

    - We need to define the endpoints of our app that our users will use to send 
      different kinds of requests (GET, POST, DELETE, etc).
    - We have to define how do we want our data to look like and of course store them somewhere.

**Story**: Our client is a record shop owner who wants to have a list of products in the main page of their shop. They know that they want to display the title, the artist, the year, the cover image and the price for each record they have available. However, the client still doesn't have a full list of all their products. He would also like to be able to add new records to his collection.

**TODO**:

1. Please create two endpoints(routes) for the shop owner

   - `api/records` -> a `GET` that will return all records of the store
   - `api/records` -> a `POST` that will add a new record to the record collection

   For now you can just return a string from the above endpoints, just to make sure everything works. 

2. Using `lowdb` set up a mock database for our records. It can be empty or it can contain already some fake data. Update the routes above so that they work just like they should.

   - `api/records` -> should return all the records that are in our lowdb database
   - `api/records` -> should add a new record to our lowdb database

## neue Aufgabe

In der ersten Aufgabe haben wir gesehen, dass es Anfragen wie GET und POST gibt, die bestimmen, was die Funktion des Endpunktes ist. (Abfragen, Erstellen in unserem Fall) Jetzt wollen wir uns PUT und DELETE anschauen.

PUT aktualisiert eine Ressource, die es schon gibt.
DELETE löscht eine existierende Ressource.
Nachdem wir die obigen Anfragen für unseren Musikladen eingeführt haben, werden wir uns Fehlerbehandlung anschauen. Was ist, wenn was schief geht, während eine Anfrage bearbeitet wird? Wir wollen den User (bzw. das Programm, das unsere API benutzt) wissen lassen, was schief ging auf konsistente Art. Wir erreichen so eine Fehlerbehandlung, indem wir Middleware-Funktionen schreiben, die sich um Fehlerbehandlung kümmern.

Hintergrund: Unser Kunde, der Musikladen, möchte gern Produkte aktualisieren und aus dem Angebot löschen können. Neben den Produkt-Datenmodell, möchte unser Kunde zwei weitere Datenmodelle bekommen. Eins für Nutzer (users) und eins für Bestellungen (orders)

Die Schritte:

Erstelle drei weitere Endpunkte (Routen) für das Produkt-Datenmodell (record)

records/:id -> eine GET-Anfrage, die ein Produkt anhand der übergebenen id liefert
records/:id -> eine PUT-Anfrage, die anhand einer id ein Produkt aktualisiert
records/:id -> eine DELETE-Anfrage, die das Produkt mit der id löscht
Erstelle neue Endpunkte für Nutzer (users) und Bestellungen (orders).

Ein Nutzer enthält eine ID, Vor-, Nachname, Email und Passwort. (first name, last name, email, password). Eine Bestellung enthält eine Produkt-Id (id) und eine Anzahl (quantity). Später fügen wir den Modellen weitere Eigenschaften hinzu.

Nutzer Modell (users)

users -> GET alle Nutzer ausgeben
users/:id -> GET ein bestimmter Nutzer ausgeben
users -> POST einen Nutzer erstellen
users/:id -> PUT einen Nutzer aktualisieren
users/:id -> DELETE einen Nutzer löschen
Bestellungen Modell (orders)

orders -> GET alle Bestellungen ausgeben
orders/:id -> GET eine Bestellung ausgeben
orders -> POST eine Bestellung anlegen
orders/:id -> PUT eine Bestellung aktualisieren
orders/:id -> DELETE eine Bestellung löschen
Wenn diese Endpunkte alle funktionieren und unsere Datenbank richtig aktualisieren, wird es Zeit eine Middleware-Funktion zu erstellen, die mit möglichen Fehlern umgeht.

Sucht die passenden Fehler-Codes aus: https://de.wikipedia.org/wiki/HTTP-Statuscode#Liste_der_HTTP-Statuscodes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status