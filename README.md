# VOLUNTARIAT TORTOSA

Projecte de pràctiques a l'ajuntament de tortosa.

Aplicació per a la gestió d'activitats de voluntariat de tortosa.

Projecte creat amb Laravel i Vue.

# INDEX

- [ Eines ](#eines)
    - [ Gestors de paquets ](#gestor-de-paquets)
    - [ Frameworks ](#frameworks)
- [ Instal·lació ](#instal·lació)
- [ Fitxers i directoris d'interés ](#fitxers-i-directoris-d'interes)
- [ Models ](#models)
    - [ User ](#user)
      - [ Model ](#model)
          - [Funcions](#funcions)
        - [ Rols ](#rols)
        - [ Autentificació ](#autentificació)
  - [ Activitat ](#activitat)
      - [ Model ](#model-1)
          - [Funcions](#funcions-1)
  - [ EntityInfo ](#entityinfos)
      - [ Model](#model-2)
  - [ VolunteerInfo ](#volunteer-info)
      - [ Model ](#model-3)
- [ Base de dades ](#base-de-dades)
- [ Rutes ](#rutes)
- [ Components Vue ](#components-vue)

## Eines

Paquets i frameworks necessaris per a correr l'aplicació

### Gestors de paquets

- Composer
- Node.js

### Frameworks

- Laravel (PHP): https://laravel.com/
- Vue (JavaScript): https://vuejs.org/
- Vuetify (JavaScript): https://vuetifyjs.com/ (Estils)

### Altres paquets importants

- Vue-router (js): https://router.vuejs.org/en/
- Vuex (js): https://vuex.vuejs.org/en/

# Instal·lació

(Important tenir composer i node.js abans d'instal·lar el projecte)

Obrir un terminal i accedir a la carpeta on es desarà el projecte i clonar el projecte amb la comanda clone:
        
```bash
    $ git clone git@github.com:GreyGonz/voluntariat-tortosa.git
```

Un cop baixat el projecte executarem les comandes que ens baixaran els paquets i dependencies
necessaris:

```bash
    $ cd voluntariat-tortosa
    $ composer install
    $ npm install
```

Generem un nou enviroment executant:

```bash
    $ cp .env.example .env
```

I generem la key amb:

```bash
    $ php artisan key:generate
```

I per últim executem les migracions:

```bash
    $ php artisan migrate:fresh
```

[ OPCIONAL ] 
En cas de voler omplir la base de dades amb dades de mostra, executarem aquesta altra comanda:

```bash
    $ php artisan migrate:fresh --seed
```

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

# Estructura de dades Store (Vuex)

Aquest paquet ajuda a l'hora de tenir variables i funcions globals, que podran ser obtenides i executades 
des de qualsevol component vue que ho requereixi.

El fitxer principal que carrega aquest paquet es troba a `resources/assets/js/voluntariat/store/index.js`, aquest és 
el que conté totes les variables dins l'[ state ](https://vuex.vuejs.org/en/state.html) i el qual carrega els demes fitxers necessaris. Els quals es troben tots
a dins la mateixa carpeta `resources/assets/js/voluntariat/store/`.

A continuació és fa un petit resum de cadascun: ([ informació més detallada sobre el funcionament d'aquest paquet ](https://vuex.vuejs.org/en/))

- index.js: Carrega tots els fitxers i conté tots els valors que requereix l'aplicació

- actions.js: Conté totes les [ actions ](https://vuex.vuejs.org/en/actions.html) disponibles per a ús de l'aplicació

- action-types.js: Conté tots els noms de totes les [ actions ](https://vuex.vuejs.org/en/actions.html) definides al fitxer `actions.js`, actua d'enllaç entre el
fitxer `actions.js` i qualsevol component que vulgui utilitzar alguna "action".

- mutations.js: Conté totes les [ mutations ](https://vuex.vuejs.org/en/mutations.html) disponibles per a ús de l'aplicació

- mutation-types.js: Conté tots els noms de totes les [ mutations ](https://vuex.vuejs.org/en/mutations.html)  definides al fitxer `mutations.js`, actua d'enllaç entre
el fitxer `mutations.js` i qualsevol component que vulgui fer ús de qualsevol "mutació"

- getters.js: Conté tots els [ getters ](https://vuex.vuejs.org/en/getters.html) per a cada una de les variables d'state

# Models

## User

Els usuaris parteixen del mateix model `User.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

### Model

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
- Volunteer: Controla el seu usuari, pot inscriures i desinscriure's de vàries activitat

Un usuari pertany a un únic rol (superAdmin, Admin, Entity o Volunteer) el qual li és assignat 
a través de l'atribut `role` quan es crea el nou usuari.

Exemple de creació d'usuari:

```php
User::create([
    'name' => 'New User',
    'email' => 'user@email.com',
    'password' => '123456', // preferiblement utilitzar funció bcrypt() per encriptar la contrasenya 
    'role' => 'admin'
])
```

Al crear l'usuari, l'`UserObserver`  llença l'event `UserCreated` que s'encarrega d'assignar el rol
a través de l'atribut `role` amb el que s'ha creat l'usuari.

### Autentificació

Quan l'usuari es dirigeix a la ruta `/login` es carrega el component `resources/assets/js/voluntariat/components/Login.vue`.
Apareix un formulari simple que demana email i contrasenya, un cop insertats, al prèmer el botó `Login`, sexecuta la funció 
que es mostra a continuació.

```javascript
  login () {
    // Es desen els valors del formulari a la variable credentials
    const credentials = {
      'username': this.email,
      'password': this.password
    }
    // Es crida la funció "LOGIN" del "store" passant-li el valor de credentials, aquesta funció retorna una
    // Promise, d'aquesta manera ens assegurem que tot hagi anat bé abans d'executar la funció "DETERMINATE_ROLE"
    this.$store.dispatch(actions.LOGIN, credentials).then(response => {
      // Es crida la funció "DETERMINATE_ROLE" del "store" passant-li l'objecte $router ja que dins de la funció
      // es necessita fer una redirecció amb el router
      this.$store.dispatch(actions.DETERMINATE_ROLE, this.$router) 
    }).catch(error => {
      console.log(error)
    })
  }
```

Funció LOGIN del Store:

```javascript
[ actionTypes.LOGIN ] (context, credentials) {
  return new Promise((resolve, reject) => {
    // Prova de fer el login amb els valors de credentials
    auth.login(credentials).then(response => {
      // Si tot va bé cambia el valor logged del "store" a true
      context.commit(mutations.LOGGED, true)
      const token = response.data.access_token // Agafa el valor del access_token generat
      // Si existeix el token, el guarda al localStorage per a que no es perdi al fer un 
      // refresh a la pàgina
      if (token) {
        if (window.localStorage) {
          window.localStorage.setItem('token', token)
        }
        context.commit(mutations.TOKEN, token) // Es desa el token a la variable token del "store"
        axios.defaults.headers.common['authorization'] = `Bearer ${token}` // S'aplica el toquen al header per autentificar la conexió
      }
      resolve(response) // Agafa la resposta del login i la llença a la Promise per a poder recollir-la des del component "Login.vue"
    }).catch(error => {
      reject(error) // Agafa l'error del login i el llença a la Promise per a poder recollir l'error des del component Login.vue
    }).then(() => {
      context.dispatch(actionTypes.FETCH_USER) // Guarda l'usuari a la variable user del "store"
    })
  })
},
```

Funció DETERMINATE_ROLE del Store:

```javascript
[ actionTypes.DETERMINATE_ROLE ] (context, router) {
  // Es crida a la api per agafar el rol de l'usuari logat
  axios.get('api/user/roles').then((response) => {
    const roles = response.data
    // Si la resposta conté el rol, aquest s'emmagatzema al localStorage
    if (roles) {
      if (window.localStorage) {
        window.localStorage.setItem('roles', roles)
      }
      context.commit(mutations.ROLES, roles[0]) // Es desa el rol a la variable roles del "Store"
    }
    // Depenent del rol, redirigeix a la pàgina que pertany a l'usuari
    if (roles.includes('admin') || roles.includes('superAdmin')) {
      router.push('/admin')
    } else if (roles.includes('entity')){
      router.push('/entity')
    } else if (roles.includes('volunteer')) {
      router.push('*')
      // router.push('/volunteer') // TODO
    } else {
      router.push('/login')
    }
  }).catch((error) => {
    console.log(error)
  });
},
```

# Activitat

Les activitats parteixen del mateix model `Activitat.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

### Model

Atributs: 

- user_id
- nom
- ambit: el tipus de grup amb el que es treballarà (infants, joves, adults, grups ètnics, etc... )
- descripcio
- destinataris
- hora_inici
- hora_fi
- tipus_horari: Si l'activitat es realitzarà un dia concret o periòdicament
- num_voluntaris_necessaris
- coneixements_req
- habilitats_req
- experiencia_req
- titols_formacio_req
- idiomes_req
- disponibilitat_vehicle_req
- condicio_fisica_req
- sexe_req
#### Funcions

- entitat: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de totes les entitats propietàries de l'activitat

- volunteers: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de tots els voluntaris inscrits a l'activitat

## EntityInfo

Els objectes EntityInfo parteixen del mateix model `EntityInfo.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

Aquest objecte serveix per a omplir la informació d'un usuari amb el rol `entity`. Quan un usuari és creat amb el rol `entity`, l'aplicació automàticament genera un nou model `EntityInfo` i és relaciona amb l'usuari creat. [ Trobarás una explicació més detallada aquí ](#base-de-dades)

### Model

Atributs:

- user_id


- nif


- persona_contacte


- email


- tel


- web


- adreca


- poblacio


- codi_postal


- ipus_activitat


- validat: És un boleà guardat a `false` per defecte, i que unicament hauría de passar a true en cas de que l'usuari validi les seves dades des del correu


## VolunteerInfo
Els objectes VolunteerInfo parteixen del mateix model `VolunteerInfo.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

Aquest objecte serveix per a omplir la informació d'un usuari amb el rol `volunteer`. Quan un usuari és creat amb el rol `volunteer`, l'aplicació automàticament genera un nou model `VolunteerInfo` i és relaciona amb l'usuari creat. [ Trobarás una explicació més detallada aquí ](#base-de-dades)

### Model

Atributs:

 - user_id
 - cognoms
 - dni
 - adreca
 - data_naixement
 - nacionalitat
 - codi_postal
 - poblacio
 - telefon
 - llengues: Idiomes que domina el voluntari
 - disponibilitat_mensual
 - disponibilitat_setmanal
 - disponibilitat_vehicle
 - franges_edat_preferents: Les franges d'edat amb les quals l'usuari esta disposat a treballar
 - condicio_fisica
 - validat: És un boleà guardat a `false` per defecte, i que unicament hauría de passar a true en cas de que l'usuari validi les seves dades des del correu

# Base de dades

Cal destacar que el següent apartat descriu la DB i el seu funcionament en l'estat
actual de l'aplicació, però és molt probable que la DB hagi de cambiar de forma o
creixer.

A continuació es mostra un petit resum de com funcionaria la base de dades, 
però fa falta llegir les migracions per a entendre correctament el seu funcionament

![database](database_croquis.png)

Com es pot veure la taula principal és usuaris, l'aplicació depenent del rol de l'usuari determina quines
realacions de taules hi haurà a la base de dades.

Quan es crea un usuari amb el rol `admin` o `superAdmin`, unicament es crea un registre
usuari sense cap tipus de relació.
    
En el cas de que es creï un usuari amb el rol `entitat`, l'aplicació s'encarrega de generar una
nova entrada a la taula `entity_infos` relacionada amb l'usuari a través de l'id.
Cada vegada que l'entitat creï una activitat, es genera una nova entrada a la taula 
`activitats` relacionada amb l'usuari també a través del seu id.

En el cas de que es creï un usuari amb el rol `volunteer`, l'aplicació s'encarrega
de generar una nova entrada a la taula `volunteer_infos` relacionada amb l'usuari
a través de l'id. Cada vegada que el voluntari creï s'inscriu a una activitat, es genera una nova
entrada a la taula `activitat_usuaris` que relaciona el voluntari amb l'activitat.

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

Trobareu tots els components desats al directori `/resources/assets/js/voluntariat/components`.

Totes les pàgines de l'aplicació han estat muntades com a aplicacions [vue](https://vuejs.org/v2/guide/).

Per a l'estil de les pàgines s'ha utilitzat [vuetify.js](https://vuetifyjs.com/en/getting-started/quick-start), carregat directament des de `/resources/assets/js/app.js`. Per a carregar-lo al vue cal tenir les següents línies al fitxer `app.js`: (Trobareu més info sobre com instal·lar i carregar vuetify a la següent [pàgina](https://vuetifyjs.com/en/getting-started/quick-start), dins l'apartat **Existing applications**)

```js
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
```

### Landing.vue (TODO)

Pàgina web principal de presentació.

**Pàgina senzilla de presentació**, on es mostrarán totes les **activitats actualitzades**, botó de **registre** i **login**

De moment aquesta pàgina només conté un títol amb 1 botò `Login` que ens redirigeix a la pàgina de `/login` al clicar a sobre.

### Register.vue (TODO)

Formulari per a registrar-se com a voluntari i poder accedir a l'aplicació

Aquesta component encara s'ha de crear, però hauría de ser un senzill formulari que, per exemple, demanés:

- Nom
- Email
- Repetir email
- Password

### Login.vue 

Pàgina de login senzilla amb formulari d'accés (email i contrasenya) (Possibilitat de social login amb google)

####Atributs

- **email**: Contindrà l'email passat a través del formulari
- **password**: Contindrà el password passat a través del formulari

####Estructura

El component consta d'un formulari molt senzill. Consta de 2 `v-text-field`, un que demana l'**email** i l'altre demana la **password**:

A continuació es mostra un exemple d'un dels `v-text-field` per entendre millor el funcionament: [més informació sobre els v-text-field i formularis ](https://vuetifyjs.com/en/components/forms)

```vue
<v-text-field
	name="email"
    label="Email"
    v-model="email" 
    id="email"
    type="email"
    required>
</v-text-field>
```

A continuació s'expliquen resumidament els atributs de `v-text-field`:

- **name**: nom que tindrà el component
- **label**: Text que es mostrarà per defecte dins l'input
- **v-model**: Atribut on es desaran les dades introduïdes a l'input
- **id**: identificador
- **type**: `v-text-field` ens ofereix la possibilitat d'assignar-li un tipus, en aquest cas li hem assignat un **type** `email`, per tant, si l'usuari intenta escriure un valor dins el text-field que no sigui un email, el formulari mostrará un error. El mateix passaría amb l'altre `v-text-field` que tenim dins el component, el qual té assignat el **type** `password`, els caràcters entrats no es mostaran i en cas de ser una password massa curta el formulari no validarà.
- **required**: Determina que el formulari no podrà ser enviat sense aquest camp omplert

#### Mètodes

- **login**: agafa els valors dels atributs **email** i **password** i li passa a la funció `LOGIN` del fitxer `actions.js` per a que fagi el login. Si el login es correcte, a continuació executa la funció `DETERMINATE_ROLE` del `actions.js` que redireccionarà a l'usuari a la seva pàgina. En cas de fallar durant el login mostra un error per consola.

###AdminMainLayout.vue

Layout de la part administrativa. Conté el menú de navegació amb tots els links disponibles i la barra superior amb un botó d'usuari que al clicar-lo apareix informacíó de l'usuari i un botó de `logout`.

#### Atributs

- **clipped**:
- **clippedLeft**:
- **drawer**:
- **fixed**:
- **mobileBreakPoint**:
- **items**:
- **miniVariant**:
- **title**:
- **windowSize**:
- **menu**:

#### Estructura

L'estructura d'aquest component ve a ser una mica més complexa encara que la podem resumir en:

```vue
<v-app>
	<v-navigation-drawer>
    	<v-list>
        	<v-list-tile v-for="(item, i) in items">
            	<v-list-tile-action></v-list-tile-action>
                <v-list-tile-content></v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
	<v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title></v-toolbar-title>
    	<v-menu>
        	<v-btn slot="activator"></v-btn>
            <v-card></v-card>
        </v-menu>
    </v-toolbar>
	<v-content>
		<v-slide-x-transition>
			<router-view/>
		</v-slide-x-transition>
	</v-content>
</v-app>
```

- **v-navigation-drawer**: És la barra de navegació lateral, conté un `v-list` amb tants `v-list-tile` com **items**.
- **v-list-tile-action**: Dins aquest tag insertarem l'icona de l'**item** (`item.icon`) la qual apareixerà a la part esquerra de la llista.
- **v-list-tile-content**: Dins aquest altre tag insertarem el nom de l'**item** (`item.title`) que apareixerà a la part dreta de l'icona
- **v-toolbar**: Conté l'icona per fer apareixer la barra de navegació  (`v-toolbar-side-icon`), el títol (`v-toolbar-title`) de la pàgina i un menú d'usuari
- **v-menu**: Aquest menú consta d'un botó "activator" (`v-btn`) que al clicar-lo mostra o amaga el component `v-card` que trobem també dins del `v-menu`. 
- **v-card**: Aquest v-card conté l'avatar i el nom de l'usuari ademes d'un botó de logout que executa la funció **logout**.
- **v-content**: Conté el contingut de la pàgina, que com es pot veure deleguem al **Router** amb el tag `router-view` que depenent de quina ruta executem, s'encarregarà de mostrar-nos el component corresponent. El `v-slide-x-transition` farà una animació d'entrada i sortida entre components per a fer-ho més agradable visualment.

#### Mètodes

- **logout**: Crida a la funció `LOGOUT` del fitxer `actions.js` , que s'encarregarà de fer el logout de l'usuari i enviar-lo al landing page
- **onResize**: Es crida constantment a través del mounted() del component, i l'únic que fa és actualitzar l'atribut **windowSize** amb les mides de la finestra del navegador, per a que si la finestra és molt petita, la barra de navegació estigui amagada per defecte i guanyar espai.

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

###NotFoundComponent(TODO)

Component que mostrarà una pàgina tipus **404** en cas d'intentar accedir a una ruta que no estigui definida al fitxer `index.js` del **Router**.


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
