# VOLUNTARIAT TORTOSA

Projecte de pràctiques a l'ajuntament de tortosa.

Aplicació per a la gestió d'activitats de voluntariat de tortosa.

Projecte creat amb Laravel i Vue.

# Base de dades
## Notes

- Les activitats preferents de cada voluntari vindràn de la relació entre la taula "voluntaris" i la taula "tipus_activitats"

- Menú Admins (Login requerit):
    - Inbox
    - Dashboard
    - Activitats
    - Entitats
    - Voluntaris
    - Admins
    - Configuració del compte

- Menú Entitats (Login requerit):
    - Inbox
    - Les meves activitats
    - Els meus voluntaris
    - Configuració del compte

- Menú Voluntaris (Login requerit):
    - Inbox
    - Activitats (a les que el voluntari es troba inscrit)
    - Configuració del compte

- Menú General:
    - Home
    - Activitats
    - Entitats
    - Preguntes Freqüents

## Eines

Paquets i frameworks usats per a aquesta aplicació

### Gestors de paquets

- Composer
- npm

### Frameworks

- Laravel (PHP): https://laravel.com/
- Vue (JavaScript): https://vuejs.org/
- Vuetify (JavaScript): https://vuetifyjs.com/ (Estils)

## Login

## Rutes

Gestionades per paquet `vue-router` es troben a `resources/assets/js/voluntariat/router/index.js`

- /: Landing.vue
- (TODO)/register: Register.vue
- /login: Pàgina de login
- /admin: AdminMainLayout.vue
    - /admin: Pàgina principal per a usuaris admin
    - /activitats: Taula amb totes les activitats creades a l'aplicació, amb possibilitat d'eliminar-les individualment i veure informació més detallada d'una de les activitats clicant a sobre
    - /activitats/:id : Pàgina descriptiva d'una activitat identificada per el seu id
    - /entitats: Taula amb totes les entitats registrades a l'aplicació, amb possibilitat d'eliminar-les individualment i veure informació més detallada d'una de les entitats clicant a sobre 
    - /entitats/:id : Pàgina descriptiva d'una enitat identificada per el seu id
    - /voluntaris: Taula amb tots el voluntaris registrats a l'aplicació, amb posssibilitat d'eliminar-los individualment i veure informació més detallada d'un dels voluntaris clicant a sobre 
    - /voluntaris/:id : Pàgina descriptiva d'un voluntari identificat per el su id
    - /admins : Taula amb tots els admins registrats a l'aplicació, amb possibilitat d'eliminar-los individualment i veure informació més detallada d'un dels admins clicant a sobre
    - /admins/:id : Pàgina descriptiva d'un admin identificat per el seu id
- /entity: EntityMainLayout.vue
    - /entity: EntityDashboard.vue (TODO)
    - /activitats_user: ActivitatsContainer.vue -> Activitats.vue
    - /activitats_user/:id : ActivitatContainer.vue -> Activitat.vue
    - /crear_activitat: CreateActivity.vue
- * : NotFoundComponent.vue
 
## Components Vue (Pàgines)
 
### Landing.vue (TODO)
Pàgina web principal de presentació.

Pàgina senzilla de presentació, on es mostrarán totes les activitats actualitzades, botó de registre i login

### Register.vue (TODO)

Formulari per a registrar-se com a voluntari i poder accedir a l'aplicació

### Login.vue 

Pàgina de login senzilla amb formulari d'accés (email i contrasenya) (Possibilitat de social login amb google)

### AdminMainLayout.vue

Layout de la part administrativa de l'aplicació

### AdminDashboard.vue (TODO)

Pàgina principal de la part d'administració

### AllActivitiesContainer.vue

Container del component `AllActivities.vue`, s'encarrega de provisionar de la informació que necessita el component `AllActivities.vue` i executa les funcions cridades des del mateix.

### AllActivities.vue

Mostra una taula amb totes les activitats de l'aplicació, permetent eliminar i accedir a cadascuna d'elles individualment

### ActivitatContainer.vue

Container del component `Activitat.vue`, s'encarrega de provisionar de la informació que necessita el component `Activitat.vue` i executa les funcions cridades des del mateix.

### Activitat.vue

Mostra informació detallada d'una activitat identificada per el seu id i permet afegir, modificar i eliminar els diferents voluntaris inscrits a l'activitat i les entitats que organitzen la mateixa.

### EntitiesContainer.vue

Container del component `Entities.vue`, s'encarrega de provisionar de la informació que necessita el component `Entities.vue` i executa les funcions cridades des del mateix.

### Entities.vue

Mostra una taula amb totes les entitats registrades a l'aplicació, permetent eliminar i accedir a cadascuna d'elles individualment

### EntityContainer.vue

Container del component `Entities.vue`, s'encarrega de provisionar de la informació que necessita el component `Entities.vue` i executa les funcions cridades des del mateix.

###  Entity.vue

Mostra informació detallada d'una entitat identificada per el seu id i permet afegir, modificar i eliminar les seves activitats.

### VolunteersContainer.vue

Container del component `Volunteers.vue`, s'encarrega de provisionar de l'informació que necessita el component `Volunteers.vue` i executa les funcions cridades des del mateix.

### Volunteers.vue

Mostra una taula amb tots els voluntaris registrats a l'aplicació, permetent eliminar i accedir a cadascun d'ells individualment.

### VolunteerContainer.vue

Container del component `Volunteer.vue`, s'encarrega de provisionar de la informació que necessita el component `Volunteer.vue` i executa les funcions cridades des del mateix.

### Volunteer.vue

Mostra informació detallada d'un voluntari identificat per el seu id i permet afegir, modificar i eliminar les activitats a les que està inscrit.

### AdminsContainer.vue

Container del component `Admins.vue`, s'encarrega de provisionar de la informació que necessita el component `Admins.vue` i executa les funcions cridades des del mateix.

### Admins.vue

Mostra una taula amb tots els admins registrats a l'aplicació, permetent eliminar i accedir a cadascun d'ells individualment.

### AdminContainer.vue

Container del component `Admin.vue`, s'encarrega de provisionar de la informació que necessita el component `Admin.vue` i executa les funcions cridades des del mateix.

### Admin.vue

Mostra informació detallada d'un admin identificat per el id.

