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

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The IdmRoleSingleQuery model module.
* @module model/IdmRoleSingleQuery
* @version 1.0
*/

var IdmRoleSingleQuery = (function () {
    /**
    * Constructs a new <code>IdmRoleSingleQuery</code>.
    * @alias module:model/IdmRoleSingleQuery
    * @class
    */

    function IdmRoleSingleQuery() {
        _classCallCheck(this, IdmRoleSingleQuery);

        this.Uuid = undefined;
        this.Label = undefined;
        this.IsTeam = undefined;
        this.IsGroupRole = undefined;
        this.IsUserRole = undefined;
        this.HasAutoApply = undefined;
        this.not = undefined;
    }

    /**
    * Constructs a <code>IdmRoleSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmRoleSingleQuery} obj Optional instance to populate.
    * @return {module:model/IdmRoleSingleQuery} The populated <code>IdmRoleSingleQuery</code> instance.
    */

    IdmRoleSingleQuery.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmRoleSingleQuery();

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = _ApiClient2['default'].convertToType(data['Uuid'], ['String']);
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = _ApiClient2['default'].convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('IsTeam')) {
                obj['IsTeam'] = _ApiClient2['default'].convertToType(data['IsTeam'], 'Boolean');
            }
            if (data.hasOwnProperty('IsGroupRole')) {
                obj['IsGroupRole'] = _ApiClient2['default'].convertToType(data['IsGroupRole'], 'Boolean');
            }
            if (data.hasOwnProperty('IsUserRole')) {
                obj['IsUserRole'] = _ApiClient2['default'].convertToType(data['IsUserRole'], 'Boolean');
            }
            if (data.hasOwnProperty('HasAutoApply')) {
                obj['HasAutoApply'] = _ApiClient2['default'].convertToType(data['HasAutoApply'], 'Boolean');
            }
            if (data.hasOwnProperty('not')) {
                obj['not'] = _ApiClient2['default'].convertToType(data['not'], 'Boolean');
            }
        }
        return obj;
    };

    /**
    * @member {Array.<String>} Uuid
    */
    return IdmRoleSingleQuery;
})();

exports['default'] = IdmRoleSingleQuery;
module.exports = exports['default'];

/**
* @member {String} Label
*/

/**
* @member {Boolean} IsTeam
*/

/**
* @member {Boolean} IsGroupRole
*/

/**
* @member {Boolean} IsUserRole
*/

/**
* @member {Boolean} HasAutoApply
*/

/**
* @member {Boolean} not
*/
