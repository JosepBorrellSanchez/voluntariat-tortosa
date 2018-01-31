# VOLUNTARIAT TORTOSA

Projecte de pràctiques a l'ajuntament de tortosa.

Aplicació per a la gestió d'activitats de voluntariat de tortosa.

Projecte creat amb Laravel i Vue.

# Base de dades
## Notes

- Les activitats preferents de cada voluntari vindràn de la relació entre la taula "voluntaris" i la taula "tipus_activitats"

- Menú Entitats (BE):
    - Inbox
    - Les meves activitats
    - Els meus voluntaris
    - Configuració del compte

- Menú Voluntaris (BE):
    - Inbox
    - Activitats (a les que el voluntari es troba inscrit)
    - Configuració del compte

- Menú General (FE):
    - Home
    - Activitats
    - Entitats
    - Preguntes Freqüents

## Dubtes

- Si un camp ha d'emmagatzemar més d'un valor es tractarà dins una taula nova?
    - Camps implicats:
        - Taula voluntaris: disponibilitat_*, franges_edat_preferent, activitats_preferents

- Un voluntari pot pertanyer a varies entitats?

- Es pot treballar amb un camp de franja d'edat?
    - Camps implicats:
        - Taula voluntaris: franges_edat_preferents

- Amb el camp "condicio_fisica" del camp voluntaris, quins possibles estats podriem trobar? (mobilitat reduïda, ...)

- Com creem dos classes d'usuari?

# Projecte PHP

## Migracions

- Com es creen relacions N:M entre classes?

