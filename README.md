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
  - [Landing.vue (TODO)](#landingvue-todo)
  - [Register.vue (TODO)](#registervue-todo)
  - [Login.vue](#loginvue)
  - [AdminMainLayout.vue](#adminmainlayoutvue)
    - [AdminDashboard.vue (TODO)](#admindashboardvue-todo)
    - [AllActivitiesContainer.vue](#allactivitiescontainervue) -> [AllActivities.vue](#allactivitiesvue)
    - [ActivitatContainer.vue](#activitatcontainervue) 
    - [EntitiesContainer.vue](#entitiescontainervue) -> [Entities.vue](#entitiesvue)
    - [EntityContainer.vue](#entitycontainervue) -> [Entity.vue](#entityvue) 
    - [VolunteersContainer.vue](#volunteerscontainervue) -> [Volunteers.vue](#volunteersvue)
    - [VolunteerContainer.vue](#volunteercontainervue) -> [Volunteer.vue](#volunteervue) 
    - [AdminsContainer.vue](#adminscontainervue) -> [Admins.vue](#adminsvue)
    - [AdminContainer.vue](#admincontainervue) -> [Admin.vue](#adminvue)
  - [EntityMainLayout.vue](#entitymainlayoutvue)
    - [EntityDashboard.vue (TODO)](#entitydashboardvue-todo)
    - [ActivitatsContainer.vue](#activitatscontainervue) -> [Activitats.vue](#activitatsvue)
    - [ActivitatContainer.vue](#activitatcontainervue) -> [Activitat.vue](#activitatvue)
    - [CreateActivity.vue (TODO)](#createactivityvue-todo)
  - [Inbox.vue (TODO)](#inboxvue-todo)
  - [NotFoundComponent.vue (TODO)](#notfoundcomponent-todo)

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

[index](#index)

# Instal·lació

(Important tenir composer i node.js abans d'instal·lar el projecte)

Obrir un terminal i accedir a la carpeta on es desara el projecte i clonar el projecte amb la comanda clone:
        
```bash
    $ git clone git@github.com:GreyGonz/voluntariat-tortosa.git
```

Un cop baixat el projecte executarem les comandes que ens baixaran els paquets i dependencies necessaris:

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

Les dades de mostres es carreguen a través dels `seeders` que es troben al directori `database/seeds`. [Més informació sobre els seeders](https://laravel.com/docs/5.6/seeding)

[index](#index)

# Fitxers i directoris d'interés

- /App/Providers/AppServiceProvider.php [ més info ](https://laravel.com/docs/5.6/providers)
- /App/Providers/EventServiceProvider.php [ més info ](https://laravel.com/docs/5.0/events)
- /App/Listeners [ més info ](https://laravel.com/docs/5.6/events#defining-listeners)
- /App/Observers [ més info ](https://laravel.com/docs/5.6/eloquent#events)
- /App/Events [ més info ](https://laravel.com/docs/5.6/events)
- /App/Http/Controllers [ més info ](https://laravel.com/docs/5.6/controllers)
- /database/factories [ més info ](https://laravel.com/docs/5.6/seeding#using-model-factories)
- /database [ més info ](https://laravel.com/docs/5.6/migrations)

[index](#index)

# Estructura de dades Store (Vuex)

Aquest paquet ajuda a l'hora de tenir variables i funcions globals, que podrán ser obtenides i executades des de qualsevol component vue que ho requereixi.

El fitxer principal que carrega aquest paquet es troba a `resources/assets/js/voluntariat/store/index.js`, aquest és 
el que conté totes les variables dins l'[ state ](https://vuex.vuejs.org/en/state.html) i el qual carrega els demes fitxers necessaris. Els quals es troben tots a dins la mateixa carpeta `resources/assets/js/voluntariat/store/`.

A continuació és fa un petit resum de cadascun: ([ informació més detallada sobre el funcionament d'aquest paquet ](https://vuex.vuejs.org/en/))

- **index.js**: Carrega tots els fitxers i conté tots els valors que requereix l'aplicació
- **actions.js**: Conté totes les [ actions ](https://vuex.vuejs.org/en/actions.html) disponibles per a ús de l'aplicació
- **action-types.js**: Conté tots els noms de totes les [ actions ](https://vuex.vuejs.org/en/actions.html) definides al fitxer `actions.js`, actua d'enllaç entre el fitxer `actions.js` i qualsevol component que vulgui utilitzar alguna "action".
- **mutations.js**: Conté totes les [ mutations ](https://vuex.vuejs.org/en/mutations.html) disponibles per a ús de l'aplicació
- **mutation-types.js**: Conté tots els noms de totes les [ mutations ](https://vuex.vuejs.org/en/mutations.html)  definides al fitxer `mutations.js`, actua d'enllaç entre
  el fitxer `mutations.js` i qualsevol component que vulgui fer ús de qualsevol "mutació"
- **getters.js**: Conté tots els [ getters ](https://vuex.vuejs.org/en/getters.html) per a cada una de les variables d'state

[index](#index)

# Models

## User

Els usuaris parteixen del mateix model `User.php`, que es troba al directory `/App`. [ Més informació sobre els models Eloquent ](https://laravel.com/docs/5.6/eloquent)

### Model

- Atributs: name, email, password, api_token

#### Funcions

- activitats: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de les activitats pertanyents a un usuari amb el rol `entity`.

- registeredActivities: Retorna un [ col·lecció ](https://laravel.com/docs/5.6/collections) de les activitats on es troba registrat un usuari amb el rol `volunteer`.

- assignEntitat: Assigna un usuari amb un rol `volunteer` a un usuari amb rol `entity`.

- info: Retorna un objecte `EntityInfo`/`VolunteerInfo` relacionat amb l'usuari depenent del seu rol.

### Rols

- **SuperAdmin**: Controla tota l'aplicació i pot gestionar els administradors, entitats i voluntaris .
- **Admin**: Controla tota l'aplicació menys la possibilitat de gestionar altres administradors i pot gestionar les entitats i voluntaris.
- **Entity**: Controla el seu usuari, pot crear i gestionar les seves activitats
- **Volunteer**: Controla el seu usuari, pot inscriures i desinscriure's de vàries activitats.

Un usuari pertany a un únic rol (superAdmin, Admin, Entity o Volunteer) el qual li és assignat a través de l'atribut `role` quan es crea el nou usuari.

Exemple de creació d'usuari:

```php
User::create([
    'name' => 'New User',
    'email' => 'user@email.com',
    'password' => '123456', // preferiblement utilitzar funció bcrypt() per encriptar la contrasenya 
    'role' => 'admin'
])
```

Al crear l'usuari, l'`UserObserver`  llença l'event `UserCreated` que s'encarrega d'assignar el rol a través de l'atribut `role` amb el que s'ha creat l'usuari.

### Autentificació

Quan l'usuari es dirigeix a la ruta `/login` es carrega el component `resources/assets/js/voluntariat/components/Login.vue`.
Apareix un formulari simple que demana email i contrasenya, un cop insertats, al prèmer el botó `Login`, sexecuta la funció que es mostra a continuació, en cas de que les dades siguin correctes redigirà a la pàgina principal de l'aplicació.

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

[index](#index)

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

- entitat: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de totes les entitats propietàries de l'activitat.
- volunteers: Retorna una [ col·lecció ](https://laravel.com/docs/5.6/collections) de tots els voluntaris inscrits a l'activitat.

[index](#index)

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


[index](#index)

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

[index](#index)

# Base de dades

Cal destacar que el següent apartat descriu la DB i el seu funcionament en l'estat
actual de l'aplicació, però és molt probable que la DB hagi de canviar de forma o
créixer.

A continuació es mostra un petit resum de com funcionaria la base de dades, 
però fa falta llegir les migracions per a entendre correctament el seu funcionament

![database](database_croquis.png)

Com es pot veure la taula principal és `usuaris`. L'aplicació, depenent del rol de l'usuari, determina quines realacions de taules hi haurà a la base de dades.

Quan es crea un usuari amb el rol `admin` o `superAdmin`, unicament es crea un registre `usuari` sense cap tipus de relació.
    
En el cas de que es creï un usuari amb el rol `entitat`, l'aplicació s'encarrega de generar una nova entrada a la taula `entity_infos` relacionada amb l'usuari a través de l'id.

Cada vegada que l'entitat creï una activitat, es genera una nova entrada a la taula 
`activitats` relacionada amb l'usuari també a través del seu id.

En el cas de que es creï un usuari amb el rol `volunteer`, l'aplicació s'encarrega
de generar una nova entrada a la taula `volunteer_infos` relacionada amb l'usuari a través de l'id. Cada vegada que el voluntari s'inscriu a una activitat, es genera una nova entrada a la taula `activitat_usuaris` que relaciona el voluntari amb l'activitat.

[index](#index)

# Rutes

Gestionades per paquet [ vue-router ](https://router.vuejs.org/en/) es troben a `resources/assets/js/voluntariat/router/index.js`
( Els components vue són carregats amb [ Lazy loading ](https://router.vuejs.org/en/advanced/lazy-loading.html) )

- /: [Landing.vue (TODO)](#landingvue-todo)
- /register: [Register.vue (TODO)](#registervue-todo)
- /login: [Login.vue](#loginvue)
- /admin: [AdminMainLayout.vue](#adminmainlayoutvue)
    - /admin: [AdminDashboard.vue (TODO)](#admindashboardvue-todo)
    - /activitats: [AllActivitiesContainer.vue](#allactivitiescontainervue) -> [AllActivities.vue](#allactivitiesvue)
    - /activitats/:id : [ActivitatContainer.vue](#activitatcontainervue) 
    - /entitats: [EntitiesContainer.vue](#entitiescontainervue) -> [Entities.vue](#entitiesvue)
    - /entitats/:id : [EntityContainer.vue](#entitycontainervue) -> [Entity.vue](#entityvue) 
    - /voluntaris: [VolunteersContainer.vue](#volunteerscontainervue) -> [Volunteers.vue](#volunteersvue)
    - /voluntaris/:id : [VolunteerContainer.vue](#volunteercontainervue) -> [Volunteer.vue](#volunteervue) 
    - /admins : [AdminsContainer.vue](#adminscontainervue) -> [Admins.vue](#adminsvue)
    - /admins/:id : [AdminContainer.vue](#admincontainervue) -> [Admin.vue](#adminvue)
- /entity: [EntityMainLayout.vue](#entitymainlayoutvue)
    - /entity: [EntityDashboard.vue (TODO)](#entitydashboardvue-todo)
    - /activitats_user: [ActivitatsContainer.vue](#activitatscontainervue) -> [Activitats.vue](#activitatsvue)
    - /activitats_user/:id : [ActivitatContainer.vue](#activitatcontainervue) -> [Activitat.vue](#activitatvue)
    - /crear_activitat: [CreateActivity.vue (TODO)](#createactivityvue-todo)
- /inbox: [Inbox.vue (TODO)](#inboxvue-todo)
- '*' : [NotFoundComponent.vue (TODO)](#notfoundcomponent-todo)

[index](#index)

## Components Vue

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

**Pàgina senzilla de presentació**, on es mostrarán totes les **activitats actualitzades**, botó de **registre** i **login**.

De moment aquesta pàgina només conté un títol amb 1 botò `Login` que ens redirigeix a la pàgina de `/login` al clicar a sobre.

[index](#index)

### Register.vue (TODO)

Formulari per a registrar-se com a voluntari i poder accedir a l'aplicació.

Aquest component encara s'ha de crear, però hauría de ser un senzill formulari que, per exemple, demanés:

- Nom
- Email
- Repetir email
- Password

[index](#index)

### Login.vue 

Pàgina de login senzilla amb formulari d'accés (email i contrasenya) (Possibilitat de social login amb google)

#### Atributs

- **email**: Contindrà l'email passat a través del formulari.
- **password**: Contindrà el password passat a través del formulari.

#### Estructura

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

- **name**: nom que tindrà el component.
- **label**: Text que es mostrarà per defecte dins l'input.
- **v-model**: Atribut on es desaran les dades introduïdes a l'input.
- **id**: identificador.
- **type**: `v-text-field` ens ofereix la possibilitat d'assignar-li un tipus, en aquest cas li hem assignat un **type** `email`, per tant, si l'usuari intenta escriure un valor dins el text-field que no sigui un email, el formulari mostrará un error. El mateix passaría amb l'altre `v-text-field` que tenim dins el component, el qual té assignat el **type** `password`, els caràcters entrats no es mostaran i en cas de ser una password massa curta el formulari no validarà.
- **required**: Determina que el formulari no podrà ser enviat sense aquest camp omplert.

#### Mètodes

- **login**: agafa els valors dels atributs **email** i **password** i li passa a la funció `LOGIN` del fitxer `actions.js` per a que fagi el login. Si el login es correcte, a continuació executa la funció `DETERMINATE_ROLE` del `actions.js` que redireccionarà a l'usuari a la seva pàgina. En cas de fallar durant el login mostra un error per consola.

[index](#index)

### AdminMainLayout.vue

Layout de la part administrativa. Conté el menú de navegació amb tots els links disponibles i la barra superior amb un botó d'usuari que al clicar-lo apareix informacíó de l'usuari i un botó de `logout`.

#### Atributs

- **clipped**: Boolean que determina si el `v-navigation-drawer` ha d'estar per sobre de la toolbar o al revés. (Atribut del `v-navigation-drawer`)
- **clippedLeft**: Boolean que assigna el `v-navigation-drawer` a l'esquerra. ( Propietat del `v-toolbar`)
- **drawer**: Boolean que serveix per mostrar o amagar el `v-navigation-drawer`.
- **fixed**: Boolean que determina si el peu de pàgina serà fixe o responsive.
- **mobileBreakPoint**: Determina a quina mida el model de l'aplicació cambiarà de desktop a mòbil.
- **items**: Objectes que apareixeran al `v-list` del drawer (Barra de navegació) com a links als diferents apartats de l'aplicació. Els objectes **item** consta de 3 parts:
  - icon: icona que apareixerà davant el nom. (Vue utilitza [Font awesome](https://fontawesome.com/) per defecte)
  - title: Títol que apareixerà com a opció.
  - href: Ruta a la que fa referencia.
- **miniVariant**: Boolean que determina si es farà servir l'opció "petita" del drawer, la qual només mostra les icones dels links. (False per defecte)
- **title**: Títol del `v-toolbar`.
- **menu**: Boolean que serveix per mostrar o amagar el `v-menú` amb la informació d'usuari i el botó de logout.

#### Computed

- **user**: Objecte que conté l'usuari loguejat per obtindre les seves dades i utilitzar-les a l'aplicació.
- **roles**: String que conté el rol de l'usuari, ja que depenent si és `admin` o `superAdmin` es mostrarà o no el **item** admins. Que porta a la pàgina d'administració d'admins.

#### Estructura

Aquest component ve a ser la template que faran servir tots els components d'administració, bé a ser una barra de navegació lateral amb una [v-list](https://vuetifyjs.com/en/components/lists) amb tots els links als diferents components, una [v-toolbar](https://vuetifyjs.com/en/components/toolbars) amb un menú d'usuari, un [v-footer](https://vuetifyjs.com/en/components/footer) i un `router-view` que carregarà el component seleccionat. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

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
- **v-list-tile-content**: Dins aquest altre tag insertarem el nom de l'**item** (`item.title`) que apareixerà a la part dreta de l'icona.
- **v-toolbar**: Conté l'icona per fer apareixer la barra de navegació  (`v-toolbar-side-icon`), el títol (`v-toolbar-title`) de la pàgina i un menú d'usuari.
- **v-menu**: Aquest menú consta d'un botó "activator" (`v-btn`) que al clicar-lo mostra o amaga el component `v-card` que trobem també dins del `v-menu`. 
- **v-card**: Aquest v-card conté l'avatar i el nom de l'usuari ademes d'un botó de logout que executa la funció **logout**.
- **v-content**: Conté el contingut de la pàgina, que com es pot veure deleguem al **Router** amb el tag `router-view` que depenent de quina ruta executem, s'encarregarà de mostrar-nos el component corresponent. El `v-slide-x-transition` farà una animació d'entrada i sortida entre components per a fer-ho més agradable visualment.

#### Mètodes

- **logout**: Crida a la funció `LOGOUT` del fitxer `actions.js` , que s'encarregarà de fer el logout de l'usuari i enviar-lo al landing page.

[index](#index)

### AdminDashboard.vue (TODO)

Pàgina principal de la part d'administració, amb un resum d'activitats, entitats i voluntaris, amb possibilitat d'accedir individualment a cada objecte, obtenir més informació o crear-ne de nous.

[index](#index)

### AllActivitiesContainer.vue

Container del component **AllActivities.vue**, s'encarrega de provisionar de l'informació que necessita el component **AllActivities.vue** i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **activitat**: Conté l'objecte `activitat` que està seleccionada.

#### Computed

- **activiats**: Conté les totes les activitats de l'aplicació.
- **loading**: Conté un boolean que determina si la pàgina esta carregant o no.

#### Estructura

Aquest component serveix com a contenidor del component **AllActivities.vue**, al qual se li passen els atributs **activitats** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **AllActivities.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <transition name="fade">
    <router-view>
    </router-view>
  </transition>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn 
               @click="destroy(activitat)"
               @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteActivitat**: Quan es dispara un event `delete`  des del component fill (**AllActivities.vue**), aquest es passa amb l'activitat que es vol eliminar. Aquesta funció captura l'activitat i la desa a l'atribut **activitat** i cambia el valor de **dialog** a true, el que fa que es mostri el `v-dialog` que pregunta si realment es vol eliminar l'activitat seleccionada.
- **destroy**: Aquesta funció agafa l'atribut **activitat** i la passa a la funció `DELETE_ACTIVITY` del fitxer `actions.js` que s'encarrega d'eliminar l'activitat definitivament i actualitzar el component.
- **redirect**: Quan es dispara un event `redirect` des del component fill (**AllActivities.vue**), aquest es passa amb l'id de l'activitat a la que es vol accedir. Aquesta funció utilitza aquest id per redirigir-nos a la pàgina de l'activitat seleccionada.

#### Mounted

Manté actulitzades les activitats de l'aplicació cridant continuament a la funció `FETCH_ACTIVITATS` , que agafa les activitats registrades a l'aplicació i les desa a la variable **activitats** del `store`, que després és utilitzada per l'atribut **activitats** d'aquest component.

[index](#index)

### AllActivities.vue

Mostra una taula amb totes les activitats de l'aplicació, permetent eliminar i accedir a cadascuna d'elles individualment.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **activitats**: Recull les activitats passades des del component pare (**AllActivitiesContainer.vue**) per a poder utilitzar-les dins aquest component.
- **loading**: Recull un boolea passat des del component pare (**AllActivititesContainer.vue**) per a poder utilitzar-lo dins aquest component.

#### Estructura

Aquest component consta d'una simple taula que mostra totes les activitats registrades a l'aplicació amb opció de veure i eliminar una activitat individualment.

```vue
<v-container>
  <v-slide-y-transition>
    <v-layout>
      <h1>Activitats</h1> 
      <div v-if="loading"> // en cas d'estar en estat "loading" es mostrarà una icona de loading
        <v-progress-circular></v-progress-circular>
      </div>
      <v-data-table :headers="headers"
                    :items="activitats">
        <template slot="items" 
                  slot-scope="props">
            <tr @click="sendEmit('redirect', props.item.id)">
              <td>{{ props.item.nom }}</td>
              <td>{{ props.item.destinataris }}</td>
              <td>{{ String(props.item.hora_inici).substring(0, 5) }} - {{ String(props.item.hora_fi).substring(0, 5) }}</td>
              <td>{{ props.item.num_voluntaris_necessaris }}</td>
              <td>
                <v-btn icon 
                       :loading="loading"
                       @click.stop="sendEmit('delete', props.item)">
                  <v-icon>clear</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</v-container>
```

El `v-data-table` rep la els headers que li serviran per dibuixa les colunmes de la taula, també rep els items que haurà d'utilitzar, en aquest cas les activitats.

El `v-template` actua com una mena de "foreach", agafa els objectes passats per l'atribut `slot` (normalment **items**, fent referència als **items** definits al `v-data-table`), i els assigna a `props`, que és el nom que li hem passat per l'atribut `slot-scope`, per a que els puguem declara un per un fent servir `props.item` dins el `v-template`.

Com es veu a la taula hi ha afegida una columna de més amb un `v-btn` per cada línia de la taula, que no és més que una simple icona que al clicar-la crida a la funció **sendEmit** amb els atributs 'delete' i l'activitat pertanyent a la fila.

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **AllActivitiesContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### ActivitatContainer.vue

Container del component `Activitat.vue`, s'encarrega de provisionar de l'informació que necessita el component `Activitat.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **user**: Conté l'usuari seleccionat ja sigui `entity` o `volunteer` que està a punt de ser eliminat de l'activitat. Als apartats que venen a continuació es veu el funcionament més detalladament.

#### Computed

- **loading**: Conté un boolean que determina si la pàgina esta carregant o no.
- **activitat**: Conté l'activitat que es vol mostrar.
- **activity_volunteers**: Conté tots els voluntaris inscrits a l'activitat.
- **activity_entities**: Conté totes les entitats organitzatives de l'activitats.

#### Props

- **id**: Aquesta id correspon a l'id de l'activitat que esta escrit a la ruta de la pàgina (/activitats/:id).

#### Estructura

Aquest component serveix com a contenidor del component **Activitat.vue**, al qual se li passen els atributs **activitat**, **activity_volunteers**, **activity_entities** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirectToVolunteer**, **redirectToEntity** o **deleteUser**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Activitats.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <router-view>
  </router-view>
  <v-dialog>
    <v-card v-if="user !== null">
      <v-card-title class="headline"></v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy( user, id)" @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **redirectToVolunteer**: Redirigeix a la pàgina d'informació del voluntari seleccionat.
- **redirectToEntity**: Redirigeix a la pàgina d'informació de l'entitat seleccionada.
- **deleteUser**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'usuari seleccionat al valor **user**.
- **destroy**: Elimina definitivament l'usuari seleccionat de l'activitat. Depenent de si es tracta d'un voluntari o una entitat, es crida a execució la funció `DETACH_ENTITY` en cas de les entitats i la funció `DETACH_VOLUNTEER` del fitxer `actions.js`.

#### Mounted

Quan es carrega el component, es criden les funcions `GET_ACTIVITAT`, `FETCH_ACTIVITY_USERS` i `FETCH_ACTIVITY_ENTITIES` del fitxer `actions.js`.

[index](#index)

### Activitat.vue

Mostra informació detallada d'una activitat identificada per el seu id i permet afegir, modificar i eliminar els diferents voluntaris inscrits a l'activitat i les entitats que organitzen la mateixa.

#### Props

- **activitat**: Conté l'activitat que es mostra a la pàgina, passada des del component pare **ActivitatContainer.vue**.
- **activity_volunteers**: Conté els voluntaris inscrits a l'activitat, passats des del component pare **ActivitatContainer.vue**.
- **activity_entities**: Conté les entitats organitzatives de l'activitat, passades des del component pare **ActivitatContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament del component pare **ActivitatContainer.vue**.

#### Estructura

Aquest component mostra tota la informació, requisits, voluntaris inscrits i entitats organitzatives  d'una activitat determinada. Es basa en 4 `v-cards`, el primer és senzillament un bloc amb el nom, informació ràpida i una petita descripció de l'activitat. El següent bloc mostra els requisits necessaris d'inscripció a l'activitat. I per últim es mostren els blocs amb una llista de voluntaris inscrits i entitats organitzatives. 

Si es clica damunt d'un voluntari de la llista el component envia un event `redirectToVolunteer` el qual es rebut per el component pare **ActivitatContainer.vue** el qual executa la redirecció cap a la pàgina del voluntari, amb les entitats organitzatives passaria el mateix però l'emit envia un event `redirectToEntity` en ves de `redirectToVolunteer`.

A la llista també es mostra una creueta com a botó el qual si es premut envia un event `deleteUser` que es rebut per el component pare **ActivitatContainer.vue** i executa la funció `deleteUser` del mateix. 

```vue
<v-app>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    // Aquest v-card correspon al primer apartat de la pàgina
                    // el qual mostra el nom, informació i descripció de l'activitat
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card>
                    // Aquest altre v-card mostra els requisits per a inscriure's a 
                    // l'activitat
                    <v-card-title>
                        <h3>Requisits:</h3>
                    </v-card-title>
                    <v-card-text>
                        <ul>
                           // Llista amb els requisits
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    // Mostra una llista dels voluntaris inscrits
                    <v-card-title>
                        <h3>Voluntaris inscrits:</h3>
                    </v-card-title>
                    <v-card-text> // En cas de no haver voluntaris inscrits es mostra el contingut d'aquest v-card-text
                        <span></span>
                    </v-card-text>
                    <v-list> // En cas d'haver voluntaris es genera un v-list-tile per cada un d'ells
                        <v-list-tile>
                            <v-list-tile-avatar>
                                // Mostra l'avatar de l'usuari
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                // Mostra el nom de l'usuari
                            </v-list-tile-content>
                            <v-list-tile-action>
                               // Mostra una creu com a botó que al clicar-la permet eliminar a l'usuari al que pertany
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-card>
               	<v-card>
                	// Es repeteix el contingut de l'v-card anterior però per a les entitats organitzatives
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
```

#### Mètodes

- **sendEmit**:  Envia un event al component pare, en aquest cas **ActivitatContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### EntitiesContainer.vue

Container del component `Entities.vue`, s'encarrega de provisionar de la informació que necessita el component `Entities.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **entity**: Conté l'entitat seleccionada a l'hora de realitzar una acció.

#### Computed

- **entities**: Conté totes les entitats de l'aplicació carregades des de l'`store`.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament de l'`store`.

#### Estructura

Aquest component serveix com a contenidor del component **Entities.vue**, al qual se li passen els atributs **entities** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Entities.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <transition>
    <router-view>
    </router-view>
  </transition>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy(entity)" flat @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteEntity**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'entitat seleccionada al valor **entity**.
- **destroy**: Crida a execució la funció `DELETE_ENTITY` del fitxer `actions.js`, la qual s'encarrega d'esborrar l'entitat.
- **redirect**: Redirigeix fins a la pàgina de l'entitat seleccionada.

#### Mounted

Quan es carrega el component es crida la funció `FETCH_ENTITIES` del fitxer `actions.js`.

[index](#index)

### Entities.vue

Mostra una taula amb totes les entitats registrades a l'aplicació, permetent eliminar i accedir a cadascuna d'elles individualment

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **entities**: Conté totes les entitats registrades a l'aplicació passades directament des del component pare **EntitiesContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament del component pare **EntitiesContainer.vue**.

#### Estructura

Aquest component consta d'una simple taula que mostra totes les entitats registrades a l'aplicació amb opció de veure i eliminar individualment a cadascuna.

```vue
<v-container>
  <v-slide-y-transition>
    <v-layout>
      <h1>Entitats</h1>
      <div> // Mostra una icona de càrrega en cas de loading = true
        <v-progress-circular></v-progress-circular>
      </div>
      <v-data-table
        v-bind:headers="headers"
        :items="entities"
      >
        // Genera una taula amb tots els items passats
        // en aquest cas els items fan referència a les entitats
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>
              <v-btn>
                // Icona com a botó delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</v-container>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **EntitiesContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### EntityContainer.vue

Container del component `Entities.vue`, s'encarrega de provisionar de la informació que necessita el component `Entities.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **activitat**: Conté l'activitat seleccionada.
- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.

#### Computed

- **entity**: Conté l'entitat proporcionada per l'`store` que esta determinada per l'id passat per la ruta (/entitats/:id).
- **info**: Conté la info proporcionada per l'`store`, corresponent a l'entitat.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des de l'`store`.
- **user_activities**: Conté les activitats passades per l'`store`, corresponents a l'entitat.

#### Props

- **id**: Id de l'entitat passat per la ruta (/entitats/:id). [més informació](https://router.vuejs.org/en/essentials/passing-props.html)

#### Estructura

Aquest component serveix com a contenidor del component **Entity.vue**, al qual se li passen els atributs **entities** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Entity.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <router-view>
  </router-view>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy(activitat)" @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteActivity**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'entitat seleccionada al valor **activitat**.
- **destroy**: Crida a la funció `DELETE_ACTIVITAT` del fitxer `actions.js` que s'encarrega d'eliminar l'activitat seleccionada.
- **redirect**: Redirecciona cap a la pàgina de l'activitat seleccionada.

#### Mounted

Al carregar el component es crida a les funcions `GET_ENTITY`, `GET_INFO` i  `FETCH_ENTITY_ACTIVITIES` des del fitxer `actions.js`.

[index](#index)

###  Entity.vue

Mostra informació detallada d'una entitat identificada per el seu id i permet afegir, modificar i eliminar les seves activitats.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **entity**: Conté l'entitat passada per el component pare **EntityContainer.vue**.
- **user_activities**: Conté les activitats de l'entitat passades per el component pare **EntityContainer.vue**.
- **info**: Conté la info de l'entitat passada per el component pare **EntityContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des del component **EntityContainer.vue**.

#### Estructura

Aquest component consta d'una card amb el **nom i informació principal de l'usuari**, una altra amb **informació detallada de l'usuari** i una última amb una **taula que conté totes les activitats que organitza l'usuari**.

També, en cas de que l'usuari no hagi omplert i validat la seva info, no es mostrarà ni la seva informació detallada ni les seves activitats, i apareixerà una alerta comunicant que no s'ha validat el compte.

```vue
<v-app>
    <v-container>
        <v-layout>
            <v-flex>
                <v-alert>
                  // En cas de que l'usuari no hagi omplert la seva info i validat el seu compte, apareixerà una alerta amb el missatge que es posi aquí dins
                </v-alert>
                <v-card>
                    // Conté el nom de l'entitat, informació principal i una petita descripció
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title>
                        <h2>Info</h2>
                    </v-card-title>
                    <v-card-text>
                        // Conté una llista amb tota la info de l'entitat (en cas de que la info s'hagi omplert per l'usuari)
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
              <v-card>
                <v-card-title>
                	<h2>Activitats organitzades:</h2>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="user_activities">
                    // Mostra una taula amb totes les activitats organitzades per l'usuari
                  <template slot="items" slot-scope="props">
                    <tr>
                      <td>{{ props.item.nom }}</td>
                      <td>
                        <v-btn >
                            // Icona com a botó delete
                        </v-btn>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **EntityContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### VolunteersContainer.vue

Container del component `Volunteers.vue`, s'encarrega de provisionar de l'informació que necessita el component `Volunteers.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **volunteer**: Conté el voluntari seleccionat.

#### Computed

- **volunteers**: Conté tots els voluntaris passats des de l'`store`.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des de l'`store`.

#### Estructura

Aquest component serveix com a contenidor del component **Volunteers.vue**, al qual se li passen els atributs **volunteers** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Volunteers.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar un voluntari. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <transition>
    <router-view>
    </router-view>
  </transition>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy(volunteer)" @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteVolunteer**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa el voluntari seleccionat al valor **volunteer**.
- **destroy**: Crida a la funció `DELETE_VOLUNTEER` del fitxer `actions.js` que s'encarrega d'eliminar el voluntari seleccionat.
- **redirect**: Redirecciona cap a la pàgina del voluntari seleccionat.

#### Mounted

Al carregar el component es crida a la funció `FETCH_VOLUNTEERS` del fitxer `actions.js`.

[index](#index)

### Volunteers.vue

Mostra una taula amb tots els voluntaris registrats a l'aplicació, permetent eliminar i accedir a cadascun d'ells individualment.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **volunteers**: Conté tots els voluntaris registrats passats des del component pare **VolunteersContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des del component pare **VolunteersContainer.vue**.

#### Estructura

Aquest component consta d'una simple taula que mostra tote els voluntaris registrats a l'aplicació amb opció de veure i eliminar individualment a cadascun.

```vue
<v-container fluid>
  <v-slide-y-transition>
    <v-layout>
      <h1>Voluntaris</h1>
      <div>
          // Si loading = true es mostrarà una icona de càrrega
        <v-progress-circular></v-progress-circular>
      </div>
      <v-data-table
        v-bind:headers="headers"
        :items="volunteers"
        class="elevation-1"
      >
          // Mostra una taula que conté tots el voluntaris
        <template slot="items" slot-scope="props">
          <tr @click="sendEmit('redirect', props.item.id)">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>
              <v-btn>
                // Icon com a botó delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</v-container>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **VolunteersContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### VolunteerContainer.vue

Container del component `Volunteer.vue`, s'encarrega de provisionar de la informació que necessita el component `Volunteer.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **activity**: Conté l'activitat seleccionada.

#### Computed

- **volunteer**: Conté el valor de la variable `volunteer` , la qual es troba l'`store`, i fa referencia a l'usuari seleccionat.
- **info**: Conté el valor de la variable `info`, la qual es troba a l'`store`, i fa referencia a la info de l'usuari seleccionat.
- **user_activities**: Conté el valor de la variable `activitats`, la qual es troba a l'`store`, i fa referencia a la info de l'usuari seleccionat.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des de l'`store`.

#### Props

- **id**: Id del voluntari passat per la ruta (/voluntaris/:id). [més informació](https://router.vuejs.org/en/essentials/passing-props.html)

#### Estructura

Aquest component serveix com a contenidor del component **Volunteer.vue**, al qual se li passen els atributs **volunteers**, **info**, **user_activities** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Volunteer.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat del voluntari. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <router-view>
  </router-view>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="detachActivity" @click.native="dialog = false">Desinscriure</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteActivity**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'activitat seleccionada al valor **activity**.
- **detachActivity**: Crida a la funció `DETACH_ACTIVITY` del fitxer `actions.js` que s'encarrega d'eliminar l'activitat seleccionada.
- **redirect**: Redirecciona cap a la pàgina de l'activitat seleccionada.

#### Mounted

S'executen les funcions `GET_VOLUNTEER`, `GET_INFO` i `FETCH_ACTIVITATS_USER` del fitxer `actions.js`. La primera agafa l'usuari amb el que es vol treballar, la segona agafa la info d'aquest usuari i la tercera les seves activitats, i desa aquesta informació a les variables `volunteer`, `info` i `activitats` de l'`store` respectivament.

[index](#index)

### Volunteer.vue

Mostra informació detallada d'un voluntari identificat per el seu id i permet afegir, modificar i eliminar les activitats a les que està inscrit.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **volunteer**: Conté el voluntari passat directament del component pare **VolunteerContainer.vue**.
- **info**: Conté la info del voluntari passada directament del component pare **VolunteerContainer.vue**.
- **user_activities**: Conté les activitats de l'usuari passades directament del component pare **VolunteerContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des del component pare **VolunteerContainer.vue**.

#### Estructura

```vue
<v-app>
    <v-container>
        <v-layout>
            <v-flex>
                <v-alert>
                    // En cas de que l'usuari no hagi omplert la seva info i validat el seu compte, apareixerà una alerta amb el missatge que es posi aquí dins
                </v-alert>
                <v-card>
                    // Mostra el nom i informació principal de l'usuari
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <v-card>
                    // En cas de que el voluntari tingui la info validada, es mostrarà dins aquesta secció
                </v-card>
            </v-flex>
            <v-flex>
                <v-card>
                    <v-card-title>
                      <h2>Inscrit a:</h2>
                    </v-card-title>
                    <v-data-table
                      :headers="headers"
                      :items="user_activities">
                        // Mostra una llista de totes les activitats a les que el voluntari es troba inscrit
                      <template slot="items" slot-scope="props">
                        <tr>
                          <td>{{ props.item.nom }}</td>
                          <td>
                              <v-btn>
                                  // Icona com a botó delete
                              </v-btn>
                          </td>
                        </tr>
                      </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **VolunteerContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### AdminsContainer.vue

Container del component `Admins.vue`, s'encarrega de provisionar de la informació que necessita el component `Admins.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **admin**: Conté l'admin seleccionat.

#### Computed

- **admins**: Conté els admins registrats a l'aplicació, passats directament des de l'`store`.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des de l'`store`.

#### Estructura

Aquest component serveix com a contenidor del component **Admins.vue**, al qual se li passen els atributs **admins** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Admins.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat del voluntari. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <transition>
    <router-view>
    </router-view>
  </transition>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy(admin)" @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteAdmins**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'admin seleccionat al valor **admin**.
- **destroy**: Crida a la funció `DELETE_ADMIN` del fitxer `actions.js` que s'encarrega d'eliminar l'admin seleccionat.
- **redirect**: Redirecciona cap a la pàgina de l'activitat seleccionada.

#### Mounted

Quan arranca el component, s'executa la funció `FETCH_ADMINS` del fitxer `actions.js`, el qual desa tots els admins registrats a l'aplicació dins la variable **admins** de l'`store`.

[index](#index)

### Admins.vue

Mostra una taula amb tots els admins registrats a l'aplicació, permetent eliminar i accedir a cadascun d'ells individualment.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **admins**: Conté els admins de l'aplicació, passats des del component pare **AdminsContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des del component **AdminsContainer.vue**.

#### Estructura

```vue
<v-container>
  <v-slide-y-transition>
    <v-layout>
      <h1>Admins</h1>
      <div>
          // En cas de que loading = true mostra una icona de càrrega
        <v-progress-circular></v-progress-circular>
      </div>
      <v-data-table
        v-bind:headers="headers"
        :items="admins">
          // Mostra una taula amb tots els admins 
        <template slot="items" slot-scope="props">
          <tr>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>
              <v-btn>
                  // Icona com a botó delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</v-container>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **AdminsContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### AdminContainer.vue

Container del component `Admin.vue`, s'encarrega de provisionar de la informació que necessita el component `Admin.vue` i executa les funcions cridades des del mateix.

#### Computed

- **admin**: Conté l'admin passat directament de l'`store`.

#### Props

- **id**: Id del voluntari passat per la ruta (/admins/:id). [més informació](https://router.vuejs.org/en/essentials/passing-props.html)

#### Estructura

L'únic que fa aquest component és passar el admin al component **Admin.vue** per a que aquest mostri la info.

```vue
<v-app>
  <router-view :admin="admin"></router-view>
</v-app>
```

#### Mounted

Quan arranca el component, s'executa la funció `GET_ADMIN` del fitxer `actions.js`, la qual desa l'admin passat a partir del su id a la variable **admin** de l'`store`.

[index](#index)

### Admin.vue

Mostra informació detallada d'un admin identificat per el id.

#### Props

- **admin**: Conté l'admin passat des del component pare **AdminContainer.vue**.

#### Estructura

```vue
<v-app>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    // Mostra el nom i informació de l'admin
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</v-app>
```

[index](#index)

### EntityMainLayout.vue

Layout de l'aplicació per a les entitats.

#### Atributs

- **clipped**: Boolean que determina si el `v-navigation-drawer` ha d'estar per sobre de la toolbar o al revés. (Atribut del `v-navigation-drawer`)
- **clippedLeft**: Boolean que assigna el `v-navigation-drawer` a l'esquerra. ( Propietat del `v-toolbar`)
- **drawer**: Boolean que serveix per mostrar o amagar el `v-navigation-drawer`.
- **fixed**: Boolean que determina si el peu de pàgina serà fixe o responsive.
- **mobileBreakPoint**: Determina a quina mida el model de l'aplicació cambiarà de desktop a mòbil.
- **items**: Objectes que apareixeran al `v-list` del drawer (Barra de navegació) com a links als diferents apartats de l'aplicació. Els objectes **item** consta de 3 parts:
  - icon: icona que apareixerà davant el nom. (Vue utilitza [Font awesome](https://fontawesome.com/) per defecte)
  - title: Títol que apareixerà com a opció.
  - href: Ruta a la que fa referencia.
- **miniVariant**: Boolean que determina si es farà servir l'opció "petita" del drawer, la qual només mostra les icones dels links. (False per defecte)
- **title**: Títol del `v-toolbar`.
- **menu**: Boolean que serveix per mostrar o amagar el `v-menú` amb la informació d'usuari i el botó de logout.

#### Computed

- **user**: Objecte que conté l'usuari loguejat per obtindre les seves dades i utilitzar-les a l'aplicació.

#### Estructura

Aquest component ve a ser la template que faran servir tots els components assignats al rol **entity**, ve a ser una barra de navegació lateral amb una [v-list](https://vuetifyjs.com/en/components/lists) amb tots els links als diferents components, una [v-toolbar](https://vuetifyjs.com/en/components/toolbars) amb un menú d'usuari, un [v-footer](https://vuetifyjs.com/en/components/footer) i un `router-view` que carregarà el component seleccionat. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

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
- **v-list-tile-content**: Dins aquest altre tag insertarem el nom de l'**item** (`item.title`) que apareixerà a la part dreta de l'icona.
- **v-toolbar**: Conté l'icona per fer apareixer la barra de navegació  (`v-toolbar-side-icon`), el títol (`v-toolbar-title`) de la pàgina i un menú d'usuari.
- **v-menu**: Aquest menú consta d'un botó "activator" (`v-btn`) que al clicar-lo mostra o amaga el component `v-card` que trobem també dins del `v-menu`. 
- **v-card**: Aquest v-card conté l'avatar i el nom de l'usuari ademes d'un botó de logout que executa la funció **logout**.
- **v-content**: Conté el contingut de la pàgina, que com es pot veure deleguem al **Router** amb el tag `router-view` que depenent de quina ruta executem, s'encarregarà de mostrar-nos el component corresponent. El `v-slide-x-transition` farà una animació d'entrada i sortida entre components per a fer-ho més agradable visualment.

#### Mètodes

**logout**: Crida a la funció `LOGOUT` del fitxer `actions.js` , que s'encarregarà de fer el logout de l'usuari i enviar-lo al landing page.

[index](#index)

### EntityDashboard.vue (TODO)

Pàgina princiapal de l'aplicació per a entitats, amb un resum de les últimes activitats a les que s'ha inscrit algun usuari, amb possibilitat de acceptar/denegar voluntaris que han demanat solicitud, veure i eliminar activitats.

[index](#index)

### ActivitatsContainer.vue

Container del component `Activitats.vue`, s'encarrega de provisionar de la informació que necessita el component `Activitats.vue` i executa les funcions cridades des del mateix.

#### Atributs

- **dialog**: Boolean que serveix per mostrar o amagar el `v-dialog`.
- **activitat**: Conté l'activitat seleccionada.
- **user**: Conté l'usuari logat.

#### Computed

- **activitats**: Conté les activitats de l'usuari passades directament des de la varibale **activitats_user** de l'`store`.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des de l'`store`.

#### Estructura

Aquest component serveix com a contenidor del component **Activitats.vue**, al qual se li passen els atributs **activitats** i **loading** a través del `router-view` , i se l'escolta en cas de que ens enviï un event **redirect** o **delete**. [més informació sobre router-view](https://router.vuejs.org/en/essentials/nested-routes.html)

Aquest component basicament consta de 2 parts, el `router-view`, que fa referencia al component **Activitats.vue**, i el `v-dialog`, que apareixerà en cas de voler eliminar una activitat. [més informació sobre dialogs amb vuetify](https://vuetifyjs.com/en/components/dialogs)

```vue
<v-app>
  <transition>
    <router-view>
    </router-view>
  </transition>
  <v-dialog>
    <v-card>
      <v-card-title></v-card-title>
      <v-card-actions>
        <v-btn @click.native="dialog = false">Cancel·la</v-btn>
        <v-btn @click="destroy(activitat)" @click.native="dialog = false">Elimina</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-app>
```

#### Mètodes

- **deleteActivitat**: Assigna el valor **dialog** a `true` per a que es mostri el `v-dialog` i es desa l'activitat seleccionada al valor **activitat**.
- **destroy**: Depenent del rol d'usuari:
  - En cas del rol **entity**, crida a la funció `DELETE_ACTIVITAT` del fitxer `actions.js` que s'encarrega d'eliminar l'activitat seleccionada.
  - En cas del rol **volunteer**, crida a la funció `DETACH_ACTIVITY` del fitxer `actions.js`, que s'encarrega de desinscriure l'usuari de l'activitat.
- **redirect**: Redirecciona cap a la pàgina de l'activitat seleccionada.

#### Mounted

Quan es carrega l'aplicació, s'executa la funció `FETCH_ACTIVITATS_USER` del fitxer `actions.js`, que s'encarrega de desar les activitats de l'usuari a la variable **activitats_user** de l'`store`.

També desa l'usuari logat a la variable **user**.

[index](#index)

### Activitats.vue

Mostra una taula amb totes les activitats relacionades amb l'usuari. Per a una entitat, aquest component mostrarà totes les activitats en propietat,
per a un usuari, mostrarà totes les activitats a les que es troba inscrit.
La taula permetrà eliminar les seves activitats a una entitat, mentres que a un usuari només es permet desinscriures de l'activitat.
Clicant damunt d'una activitat de la taula, es mostrarà més informació detallada de l'activitat.

#### Atributs

- **headers**: Conté objectes que defineixen el `nom`, `valor` i opcions de disseny de cada columna de la taula. [més informació sobre v-data-table](https://vuetifyjs.com/en/components/data-tables)

#### Props

- **activitats**: Conté totes les activitats de l'usuari passades des del component pare **ActivitatsContainer.vue**.
- **loading**: Valor boolean que determina si el component està carregant o no passat directament des del component pare **ActivitatsContainer.vue**.

#### Estructura

Aquest component mostra una senzilla taula amb les activitats de l'usuari logat, permetent crear o eliminar-les en el cas de tenir el rol **entity**, o inscriure's i desinscriure's en cas de tenir un rol **volunteer**.

```vue
<v-container>
  <v-slide-y-transition>
    <v-layout>
      <h1>Activitats</h1> 
      <div>
          // En cas de loading = true es mostra una icona de càrrega
        <v-progress-circular></v-progress-circular>
      </div>
      <v-data-table
        v-bind:headers="headers"
        :items="activitats">
          // Mostra una taula amb totes les activitats de l'usuari
        <template slot="items" slot-scope="props">
          <tr>
            <td>...</td>
            <td>
              <v-btn >
                  // Icona com a botó delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-layout>
  </v-slide-y-transition>
</v-container>
```

#### Mètodes

- **sendEmit**: Envia un event al component pare, en aquest cas **AdminsContainer.vue** passant 2 paràmetres, `message` que serà el nom de l'event, i `value` que serà el valor que es passa per paràmetre. [més informació sobre $emits](https://vuejs.org/v2/api/#vm-emit)

[index](#index)

### CreateActivity.vue (TODO)

Formulari que es mostrarà per crear una nova activitat.

[index](#index)

### Inbox.vue (TODO)

Notificacions d'usuari, tipus safata email.

[index](#index)

### NotFoundComponent (TODO)

Component que mostrarà una pàgina tipus **404** en cas d'intentar accedir a una ruta que no estigui definida al fitxer `index.js` del **Router**.

[index](#index)