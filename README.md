# App React + Web API

## Utiliser la Web API depuis l'app React
- Installer et configuré le middleware "cors" dans la Web API
- Consommé l'api soit :
    - (Récuperation) Dans une composant dédié avec un "useEffect" ou "useSWR".
    - (Envoi) En executant une requete POST / PUT depuis une fonction.

## Gestion du token
- Prévoir une méthode de stockage coté client pour le token
    - Jotai _(Choix de la démo)_
    - Context API
    - Redux
    - ...
- Stocker le token quand l'utilisateur s'authentifie
- Sécuriser les routes de l'application
