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
import IdmWorkspace from '../model/IdmWorkspace';
import RestDeleteResponse from '../model/RestDeleteResponse';
import RestSearchWorkspaceRequest from '../model/RestSearchWorkspaceRequest';
import RestWorkspaceCollection from '../model/RestWorkspaceCollection';

/**
* WorkspaceService service.
* @module api/WorkspaceServiceApi
* @version 1.0
*/
export default class WorkspaceServiceApi {

    /**
    * Constructs a new WorkspaceServiceApi. 
    * @alias module:api/WorkspaceServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete an existing workspace
     * @param {String} slug 
     * @param {Object} opts Optional parameters
     * @param {String} opts.UUID 
     * @param {String} opts.label 
     * @param {String} opts.description 
     * @param {module:model/String} opts.scope  (default to ANY)
     * @param {Number} opts.lastUpdated 
     * @param {String} opts.attributes 
     * @param {Array.<String>} opts.rootNodes 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
     */
    deleteWorkspaceWithHttpInfo(slug, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling deleteWorkspace");
      }


      let pathParams = {
        'Slug': slug
      };
      let queryParams = {
        'UUID': opts['UUID'],
        'Label': opts['label'],
        'Description': opts['description'],
        'Scope': opts['scope'],
        'LastUpdated': opts['lastUpdated'],
        'Attributes': opts['attributes'],
        'RootNodes': this.apiClient.buildCollectionParam(opts['rootNodes'], 'csv'),
        'PoliciesContextEditable': opts['policiesContextEditable']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestDeleteResponse;

      return this.apiClient.callApi(
        '/workspace/{Slug}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing workspace
     * @param {String} slug 
     * @param {Object} opts Optional parameters
     * @param {String} opts.UUID 
     * @param {String} opts.label 
     * @param {String} opts.description 
     * @param {module:model/String} opts.scope  (default to ANY)
     * @param {Number} opts.lastUpdated 
     * @param {String} opts.attributes 
     * @param {Array.<String>} opts.rootNodes 
     * @param {Boolean} opts.policiesContextEditable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */
    deleteWorkspace(slug, opts) {
      return this.deleteWorkspaceWithHttpInfo(slug, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a workspace
     * @param {String} slug 
     * @param {module:model/IdmWorkspace} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmWorkspace} and HTTP response
     */
    putWorkspaceWithHttpInfo(slug, body) {
      let postBody = body;

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling putWorkspace");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putWorkspace");
      }


      let pathParams = {
        'Slug': slug
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
      let returnType = IdmWorkspace;

      return this.apiClient.callApi(
        '/workspace/{Slug}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create or update a workspace
     * @param {String} slug 
     * @param {module:model/IdmWorkspace} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmWorkspace}
     */
    putWorkspace(slug, body) {
      return this.putWorkspaceWithHttpInfo(slug, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search workspaces on certain keys
     * @param {module:model/RestSearchWorkspaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestWorkspaceCollection} and HTTP response
     */
    searchWorkspacesWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchWorkspaces");
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
      let returnType = RestWorkspaceCollection;

      return this.apiClient.callApi(
        '/workspace', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search workspaces on certain keys
     * @param {module:model/RestSearchWorkspaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestWorkspaceCollection}
     */
    searchWorkspaces(body) {
      return this.searchWorkspacesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
