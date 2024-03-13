## BE-TS-Bun-Vite 
### Registrierung und Login

#### Ziel:
Erstelle ein Mini Fullstack-Projekt (wirklich sehr mini), das eine Registrierungs- und Login-Funktionalität bietet. Das Backend soll mit `Bun` und TypeScript erstellt werden, während das Frontend mit Vite, React und TypeScript entwickelt wird. 

#### Backend-Anforderungen:
1. Implementiere eine Registrierungs-API, die es einem Benutzer ermöglicht, sich mit `Vorname, Nachname, E-Mail und Passwort` zu registrieren. Die Benutzerdaten sollen in einer MongoDB-Datenbank gespeichert werden.
2. Implementiere eine Login-API, die es einem Benutzer ermöglicht, sich mit `E-Mail und Passwort` anzumelden. Überprüfe die eingegebenen Anmeldeinformationen und sende bei erfolgreicher Anmeldung eine Bestätigungsantwort.

#### Frontend-Anforderungen:
1. Erstelle ein Registrierungsformular mit Feldern für `Vorname, Nachname, E-Mail und Passwort`. Füge Validierungen hinzu, um sicherzustellen, dass alle Felder korrekt ausgefüllt sind, bevor das Formular abgesendet wird.
2. Erstelle ein Login-Formular mit Feldern für `E-Mail und Passwort`. Füge Validierungen hinzu, um sicherzustellen, dass alle Felder korrekt ausgefüllt sind, bevor das Formular abgesendet wird.
3. Implementiere eine Schnittstelle zur Kommunikation mit den Registrierungs- und Login-APIs im Backend. Sende die Benutzerdaten an die entsprechenden Endpunkte und verarbeite die Antworten entsprechend.

#### Bonuspunkte:
- Implementiere eine Logout-Funktionalität im Frontend.
- Füge eine Fehlerbehandlung hinzu, um dem Benutzer Feedback zu geben, wenn ein Fehler beim Registrieren oder Anmelden auftritt.
- Verbessere (wenn Zeit ist) das Design und die Benutzererfahrung des Registrierungs- und Login-Formulars.

#### Hinweise:
- Verwende TypeScript, um die **Typsicherheit** in deinem Code zu gewährleisten und Fehler frühzeitig zu erkennen.
- Teste deine Implementierungen gründlich, um sicherzustellen, dass alle Funktionen ordnungsgemäß funktionieren (TypeSript hilft dir dabei).
- Achte beim Coden darauf, was TypeScript dir versucht "mitzuteilen". TypeScript sagt, wenn etwas nicht passt.
