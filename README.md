# VOLUNTARIAT TORTOSA

Projecte de pràctiques a l'ajuntament de tortosa.

Aplicació per a la gestió d'activitats de voluntariat de tortosa.

Projecte creat amb Laravel i Vue.

# INDEX

- Eines
    - Gestors de paquets
    - Frameworks
- Instal·lació
- Fitxers i directoris d'interés
- Base de dades 
- Models
    - User
        - Model
        - Rols
        - Info
    - Activitat
        - Model
        - Dades
    - EntityInfo
        - Model
        - Dades
    - VolunteerInfo
        - Model
        - Dades
- Rutes
- Components Vue

## Eines

Paquets i frameworks necessaris per a correr l'aplicació

### Gestors de paquets

- Composer
- Node.js

### Frameworks

- Laravel (PHP): https://laravel.com/
- Vue (JavaScript): https://vuejs.org/
- Vuetify (JavaScript): https://vuetifyjs.com/ (Estils)

# Instal·lació

Obrir un terminal i accedir a la carpeta on es desarà el projecte i clonar el projecte amb la comanda clone:
        
        $ git clone git@github.com:GreyGonz/voluntariat-tortosa.git

Un cop baixat el projecte executarem les comandes que ens baixaran els paquets i dependencies
necessaris:

        $ cd voluntariat-tortosa
        $ composer install
        $ npm install

Generem un nou enviroment executant:

        $ cp .env.example .env

I generem la key amb:

        $ php artisan key:generate

I per últim executem les migracions:

        $ php artisan migrate:fresh

[ OPCIONAL ] 
En cas de voler omplir la base de dades amb dades de mostra, executarem aquesta altra comanda:

        $ php artisan migrate:fresh --seed

Trobaràs més informació sobre les dades de mostra aqui.

# Fitxers i directoris d'interés

- /App/Providers/AppServiceProvider.php [ més info ](https://laravel.com/docs/5.6/providers)
- /App/Providers/EventServiceProvider.php [ més info ](https://laravel.com/docs/5.0/events)
- /App/Listeners [ més info ](https://laravel.com/docs/5.6/events#defining-listeners)
- /App/Observers [ més info ](https://laravel.com/docs/5.6/eloquent#events)
- /App/Events [ més info ](https://laravel.com/docs/5.6/events)
- /App/Http/Controllers [ més info ](https://laravel.com/docs/5.6/controllers)
- /database/factories [ més info ](https://laravel.com/docs/5.6/seeding#using-model-factories)
- /database [ más info ](https://laravel.com/docs/5.6/migrations)

# Base de dades

![database](database_croquis.png)
( Foto base de dades + petit analisi)

# Models

## User

Els usuaris parteixen del mateix model `User.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

### Model (/app/User.php)

- Atributs: name, email, password, api_token

#### Funcions
 
- activitats: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de les activitats pertanyents a un usuari amb el rol d'entitat

- registeredActivities: Retorna un [ col·lecció ](https://laravel.com/docs/5.6/collections) de les activitats on es troba registrat un usuari amb el rol de voluntari

- assignEntitat: Assigna un usuari amb un rol voluntari a un usuari amb rol entitat

- info: Retorna un objecte EntityInfo/VolunteerInfo relacionat amb l'usuari depenent del seu rol

### Rols

- SuperAdmin: Controla tota l'aplicació i pot gestionar els administradors, entitats i voluntaris 
- Admin: Controla tota l'aplicació menys la possibilitat de gestionar altres administradors i pot gestionar les entitats i voluntaris 
- Entity: Controla el seu usuari, pot crear i gestionar les seves activitats
- Volunteer: Controla el seu usuari, pot inscriures i desinscriure's d'una activitat

Un usuari pertany a un únic rol (superAdmin, Admin, Entity o Volunteer) el qual li és assignat 
a través de l'atribut `role` quan es crea el nou usuari.

Exemple de creació d'usuari:

    User::create([
        'name' => 'New User',
        'email' => 'user@email.com',
        'password' => '123456', // preferiblement utilitzar funció bcrypt() per encriptar la contrasenya 
        'role' => 'admin'
    ])

Al crear l'usuari, l'`UserObserver`  llença l'event `UserCreated` que s'encarrega d'assignar el rol
a través de l'atribut `role` amb el que s'ha creat l'usuari.

# Rutes

Gestionades per paquet [ vue-router ](https://router.vuejs.org/en/) es troben a `resources/assets/js/voluntariat/router/index.js`
Els components vue són carregats amb [ Lazy loading ](https://router.vuejs.org/en/advanced/lazy-loading.html)

- /: Landing.vue
- (TODO)/register: Register.vue
- /login: Pàgina de login
- /admin: AdminMainLayout.vue
    - /admin: AdminDashboard.vue
    - /activitats: AllActivitiesContainer.vue -> AllActivities.vue
    - /activitats/:id : ActivitatContainer.vue 
    - /entitats: EntitiesContainer.vue -> Entities.vue
    - /entitats/:id : EntityContainer.vue -> Entity.vue 
    - /voluntaris: VolunteersContainer.vue -> Volunteers.vue
    - /voluntaris/:id : VolunteerContainer.vue -> Volunteer.vue 
    - /admins : AdminsContainer.vue -> Admins.vue
    - /admins/:id : AdminContainer.vue -> Admin.vue
- /entity: EntityMainLayout.vue
    - /entity: EntityDashboard.vue (TODO)
    - /activitats_user: ActivitatsContainer.vue -> Activitats.vue
    - /activitats_user/:id : ActivitatContainer.vue -> Activitat.vue
    - /crear_activitat: CreateActivity.vue
- '*' : NotFoundComponent.vue
 
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

Pàgina principal de la part d'administració, amb un resum d'activitats, entitats i voluntaris, amb
possibilitat d'accedir individualment a cada objecte, obtenir més informació o crear-ne de nous.

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

### EntityMainLayout.vue

Layout de l'aplicació per a les entitats

### EntityDashboard.vue (TODO)

Pàgina princiapal de l'aplicació per a entitats, amb un resum de les últimes activitats a les que s'ha inscrit algun usuari,
amb possibilitat de acceptar/denegar voluntaris que han demanat solicitud, veure i eliminar activitats,

### ActivitatsContainer.vue

Container del component `Activitats.vue`, s'encarrega de provisionar de la informació que necessita el component `Activitats.vue` i executa les funcions cridades des del mateix.

### Activitats.vue

Mostra una taula amb totes les activitats relacionades amb l'usuari. Per a una entitat, aquest component mostrarà totes les activitats en propietat,
per a un usuari, mostrarà totes les activitats a les que es troba inscrit.
La taula permetrà eliminar les seves activitats a una entitat, mentres que a un usuari només es permet desinscriures de l'activitat.
Clicant damunt d'una activitat de la taula, es mostrarà més informació detallada de l'activitat.

### CreateActivity.vue

Formulari que es mostrarà per crear una nova activitat

### Inbox.vue (TODO)

Notificacions d'usuari


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
