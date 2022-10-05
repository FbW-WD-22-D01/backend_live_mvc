## BACKEND Struktur

Vorgehen:
1. Express Server Boilerplate in server.js bauen
    - "type": "module" in `package.json`
    - install & import der express app
    - `const app=express()`
    - `app.listen(PORT, () => console.log('Fancy server running on ', PORT ))`
    - evtl. Datenbank initialisieren (lowDB, mongoDb etc.)


2. Datenmodelle entwickeln (welche Modelle habe ich? Wie sind diese Modelle aufgebaut? Ordnerstruktur)
    - models --> Datenstruktur der Daten und die Funktionen um die Daten zu manipulieren
    - für lowDb nicht so 

3. Welche Operationen sollen durchgeführt werden (Controller Funktionen)
    - controller --> stellen die Verbindung zu den Models her, greifen über die models auf die Datenbank zu und händeln die Daten, übergeben sie, liefern sie zurück.


4. Routen entwerfen, von wo die einzelnen controller aufgerufen werden 
    - Welche Art von Routen (GET, POST...) ?
    - Controller aufrufen 












