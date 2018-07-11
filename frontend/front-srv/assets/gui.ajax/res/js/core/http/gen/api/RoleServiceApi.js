/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IdmRole from '../model/IdmRole';
import RestRolesCollection from '../model/RestRolesCollection';
import RestSearchRoleRequest from '../model/RestSearchRoleRequest';

/**
* RoleService service.
* @module api/RoleServiceApi
* @version 1.0
*/
export default class RoleServiceApi {

    /**
    * Constructs a new RoleServiceApi. 
    * @alias module:api/RoleServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a Role by ID
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.label 
     * @param {Boolean} opts.isTeam 
     * @param {Boolean} opts.groupRole 
     * @param {Boolean} opts.userRole 
     * @param {Number} opts.lastUpdated 
     * @param {Array.<String>} opts.autoApplies 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */
    deleteRoleWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteRole");
      }


      let pathParams = {
        'Uuid': uuid
      };
      let queryParams = {
        'Label': opts['label'],
        'IsTeam': opts['isTeam'],
        'GroupRole': opts['groupRole'],
        'UserRole': opts['userRole'],
        'LastUpdated': opts['lastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['autoApplies'], 'csv'),
        'PoliciesContextEditable': opts['policiesContextEditable']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmRole;

      return this.apiClient.callApi(
        '/role/{Uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Role by ID
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.label 
     * @param {Boolean} opts.isTeam 
     * @param {Boolean} opts.groupRole 
     * @param {Boolean} opts.userRole 
     * @param {Number} opts.lastUpdated 
     * @param {Array.<String>} opts.autoApplies 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */
    deleteRole(uuid, opts) {
      return this.deleteRoleWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Role by ID
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.label 
     * @param {Boolean} opts.isTeam 
     * @param {Boolean} opts.groupRole 
     * @param {Boolean} opts.userRole 
     * @param {Number} opts.lastUpdated 
     * @param {Array.<String>} opts.autoApplies 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */
    getRoleWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getRole");
      }


      let pathParams = {
        'Uuid': uuid
      };
      let queryParams = {
        'Label': opts['label'],
        'IsTeam': opts['isTeam'],
        'GroupRole': opts['groupRole'],
        'UserRole': opts['userRole'],
        'LastUpdated': opts['lastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['autoApplies'], 'csv'),
        'PoliciesContextEditable': opts['policiesContextEditable']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmRole;

      return this.apiClient.callApi(
        '/role/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Role by ID
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.label 
     * @param {Boolean} opts.isTeam 
     * @param {Boolean} opts.groupRole 
     * @param {Boolean} opts.userRole 
     * @param {Number} opts.lastUpdated 
     * @param {Array.<String>} opts.autoApplies 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */
    getRole(uuid, opts) {
      return this.getRoleWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRolesCollection} and HTTP response
     */
    searchRolesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchRoles");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestRolesCollection;

      return this.apiClient.callApi(
        '/role', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRolesCollection}
     */
    searchRoles(body) {
      return this.searchRolesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a Role
     * @param {String} uuid 
     * @param {module:model/IdmRole} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */
    setRoleWithHttpInfo(uuid, body) {
      let postBody = body;

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling setRole");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setRole");
      }


      let pathParams = {
        'Uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmRole;

      return this.apiClient.callApi(
        '/role/{Uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a Role
     * @param {String} uuid 
     * @param {module:model/IdmRole} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */
    setRole(uuid, body) {
      return this.setRoleWithHttpInfo(uuid, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
