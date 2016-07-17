# FlightSimBackend
## A RESTful webservice for FlightSimulator savegames

### Used technologies
+ node.js
+ express.js
+ sequelize
+ sqlite


### Fragen
+ App/User Authentifizierung
    + Name+Passwort? (Accounterstellung nötig)
    + GeräteID?
+ HTTP Verbindung verschlüsseln? (Ist das nötig bei einem Prototyp?)
+ Ein Savegame pro User oder eine Liste mit Savegames aus der gewählt werden kann?
    + Wenn nur ein savegame, automatisch speichern?
    + Wenn mehrere, einzelne 'slots' wählbar machen oder sequenziell neue savegames hinzufügen? (mit Limit?)
    + Oder Beides?
+ Fallback für den Fall einer fehlenden Internetverbindung?
    + Weiterhin lokal speichern?
    + Speichern/Laden für die Dauer deaktivieren?