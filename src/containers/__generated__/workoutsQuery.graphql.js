/**
 * @flow
 * @relayHash 1b35c0b4db06147a1f20b25089688db1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type workoutsQueryVariables = {||};
export type workoutsQueryResponse = {|
  +workouts: ?$ReadOnlyArray<?{|
    +name: ?string
  |}>
|};
export type workoutsQuery = {|
  variables: workoutsQueryVariables,
  response: workoutsQueryResponse,
|};
*/


/*
query workoutsQuery {
  workouts {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "workoutsQuery",
  "id": null,
  "text": "query workoutsQuery {\n  workouts {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "workoutsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "workouts",
        "storageKey": null,
        "args": null,
        "concreteType": "Workout",
        "plural": true,
        "selections": [
          v0
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "workoutsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "workouts",
        "storageKey": null,
        "args": null,
        "concreteType": "Workout",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd26913f6f77908fcd45262c58ae8da71';
module.exports = node;
